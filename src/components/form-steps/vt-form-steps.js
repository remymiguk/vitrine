// @ts-check
import formStepsCss from '../../styles/form-steps.css?raw';
import { parseEnum } from '../../core/attributes.js';
import { VtBase } from '../../core/base-element.js';
import { h } from '../../core/dom.js';
import { EVENTS, emit } from '../../core/events.js';
import { defineStrings, formatNumber } from '../../core/i18n.js';
import { noticeView } from '../../core/ui.js';
import { en as strings, fr as stringsFr } from './strings.js';
import { controlsIn, readSteps, reviewRows, sameSteps } from './steps.js';
import { navView, progressView, reviewView } from './views.js';

defineStrings({ en: strings, fr: stringsFr });

/** @typedef {import('./steps.js').Step} Step */
/** @typedef {import('./steps.js').Control} Control */

const PROGRESS = /** @type {const} */ (['none', 'bar', 'steps']);

/** Input types in which Enter keeps its own job (press a button, open a picker): it does not go to the next step. */
const NOT_ENTER = new Set(['button', 'submit', 'reset', 'image', 'file', 'hidden', 'color', 'range']); // prettier-ignore

/** Custom elements whose own text input leaves Enter to the step. */
const ENTER_OWNERS = new Set(['vt-field', 'vt-password']);

/**
 * A container that shows the `<fieldset>` children of a form one at a time. Each step has a
 * `<legend>`; the fields inside are ordinary fields (`<vt-field>`, `<vt-tags>`,
 * `<vt-date-picker>`, `<vt-upload>`, `<vt-password>`, or native inputs), so they keep their own
 * validation and their own value in the enclosing `<form>`. The container adds what a
 * wizard needs: Back and Next, a progress bar or list of steps, a check of the fields of the
 * step before Next, "Step 2 of 6: Contact" read aloud, and a review screen with an Edit button
 * per step.
 *
 * Next calls `checkValidity()` on every field of the step and, if one fails,
 * `reportValidity()` on the first and moves the focus to it. Submit checks every step, goes
 * to the first with a problem, then calls `requestSubmit()` on the form around the element, so
 * the page's normal form submission happens. Put the element in a `<form>`: without one,
 * Submit only checks.
 *
 * @element vt-form-steps
 * @since 0.15.0
 *
 * @attr {"simple"|"full"} variant - `full` turns on the review screen and the list of steps.
 * @attr {"none"|"bar"|"steps"} progress - "Step 2 of 6" with a bar, a list of steps you can go back to, or nothing. Default: `bar`, `steps` for the full variant.
 * @attr {boolean} review - A review screen with an Edit button per step before the end. Full variant: on. `"false"` turns it off.
 * @attr {string} label - Accessible name of the whole form.
 * @attr {string} lang-ui - Language of the interface (`en` or `fr`, or one you registered).
 *
 * @prop {number} step - Index of the current step; the review screen comes after the last step (read-only).
 * @prop {number} steps - Number of steps (read-only).
 * @prop {HTMLFormElement | null} form - The form around the element (read-only).
 *
 * @fires vt-step - The step changed, by the reader or through `next()`, `back()` and `goTo()`. Detail: `{ from, to, title }` (`to` is the number of steps for the review screen).
 *
 * @slot - The steps: one `<fieldset>` with a `<legend>` each. Only the current one is shown.
 *
 * @csspart progress - "Step 2 of 6" and the bar or the list of steps.
 * @csspart step - The area holding the current step.
 * @csspart nav - The Back and Next (or Submit) buttons.
 * @csspart review - The review screen.
 *
 * @cssprop --vt-radius - Corner radius of the buttons and of the review.
 * @cssprop --vt-accent - Bar, current step and focus ring.
 *
 * @method next() - Checks the fields of the current step and goes to the next one; on the last screen it submits. Returns `true` when it moved or submitted.
 * @method back() - Goes to the previous step, without checking. Returns `true` when it moved.
 * @method goTo(target) - Goes to a step by index or by the id of its fieldset (`"review"` for the review screen). Going forward checks every step on the way and stops at the first with a problem. Returns `true` when it moved. The focus moves to the new step only when it is already inside the element.
 * @method submit() - Checks every step, goes to the first with a problem, then calls `requestSubmit()` on the form around the element. Returns `true` when the form was asked to submit; `false` when a step has a problem or there is no form.
 *
 * @example
 * <form>
 *   <vt-form-steps progress="bar" review>
 *     <fieldset>
 *       <legend>Contact</legend>
 *       <vt-field name="email" type="email" required label="Email"></vt-field>
 *     </fieldset>
 *     <fieldset>
 *       <legend>Your needs</legend>
 *       <vt-field name="topics" type="checkboxes" required label="Topics">code, json</vt-field>
 *     </fieldset>
 *   </vt-form-steps>
 * </form>
 */
export class VtFormSteps extends VtBase {
  static type = 'form-steps';

  static allowEmpty = true;

  static componentAttributes = Object.freeze(['progress', 'review']);

  static presets = {
    simple: { review: false },
    full: { review: true },
  };

  static styles = [formStepsCss];

  constructor() {
    super();
    /** @type {Step[]} */
    this.list = [];
    /** Position: a step, or the review screen after the last one. */
    this.index = 0;
    /** @type {HTMLFieldSetElement | null} The fieldset at `index`: a fieldset added, removed or moved keeps the reader on the same step. */
    this.at = null;
    /** @type {Set<Element>} The steps reached so far, so the list of steps can go back and forth. */
    this.reached = new Set();
    this.reviewReached = false;
    /** @type {Set<Element>} Steps the reader got through with Next. */
    this.passed = new Set();
    /** After a step fixed from the review or from a failed Submit, Next goes to the last screen. */
    this.returnToEnd = false;
    /** @type {WeakSet<Element>} Legends that got a `tabindex` from here. */
    this.tabbed = new WeakSet();
    /** @type {'screen' | null} What takes the focus after the next render. */
    this.pendingFocus = null;
    // The slot is kept between renders, so the fields in it are never unslotted and re-slotted.
    this.stage = h('slot', {});
    this.addEventListener('keydown', (event) => this.onKeydown(event));
  }

  // ---------------------------------------------------------------- state

  /** @type {number} */
  get step() {
    return this.index;
  }

  /** @type {number} */
  get steps() {
    return this.list.length;
  }

  /** @type {HTMLFormElement | null} */
  get form() {
    return this.closest('form');
  }

  /** @returns {boolean} Whether a review screen follows the last step. */
  get hasReview() {
    return this.list.length > 0 && this.feature('review');
  }

  /** @returns {number} The last position: the review screen, or the last step. */
  lastPosition() {
    return Math.max(0, this.hasReview ? this.list.length : this.list.length - 1);
  }

  /** @returns {Step | undefined} The step shown, if a step is. */
  current() {
    return this.list[this.index];
  }

  /**
   * Reads the steps again after the children changed. Only a change of the fieldsets or their
   * legends counts: what happens inside a field is the field's business. The reader stays on
   * the same fieldset when others are added, removed or reordered, and the passed and reached
   * marks stay with their fieldsets.
   *
   * @returns {boolean} Whether the steps changed.
   */
  refresh() {
    const next = readSteps(this);
    if (sameSteps(this.list, next)) return false;
    const wasReview = this.list.length > 0 && this.index >= this.list.length;
    for (const step of this.list) if (!next.some((s) => s.element === step.element)) this.release(step.element); // prettier-ignore
    this.list = next;
    if (wasReview && this.hasReview) this.index = next.length;
    else {
      const at = this.at ? next.findIndex((step) => step.element === this.at) : -1;
      this.index = at >= 0 ? at : Math.min(this.index, this.lastPosition());
    }
    this.at = next[this.index]?.element ?? null;
    /** @type {Set<Element>} */
    const elements = new Set(next.map((step) => step.element));
    this.passed = new Set([...this.passed].filter((element) => elements.has(element)));
    this.reached = new Set([...this.reached].filter((element) => elements.has(element)));
    if (!this.hasReview) this.reviewReached = false;
    this.requestRender();
    return true;
  }

  /**
   * Gives a fieldset back to the page as it was: shown, and its legend without the `tabindex`
   * added to receive the focus.
   *
   * @param {HTMLElement} element
   */
  release(element) {
    element.removeAttribute('hidden');
    element.removeAttribute('inert');
    const legend = element.querySelector(':scope > legend');
    if (legend && this.tabbed.has(legend)) {
      legend.removeAttribute('tabindex');
      this.tabbed.delete(legend);
    }
  }

  // ---------------------------------------------------------------- content

  /** Reads the steps from the children: the page's own fieldsets. There is no `src` and no content. */
  reload() {
    this.loading = false;
    this.error = null;
    this.refresh();
    this._readyPending = true;
    this.requestRender();
  }

  connectedCallback() {
    super.connectedCallback();
    // The base class reloads on any change below the element; here only the fieldsets and the
    // legends count (see `refresh()`).
    const base = /** @type {any} */ (this);
    base._observer?.disconnect();
    base._observer = new MutationObserver((/** @type {MutationRecord[]} */ records) => {
      if (records.some((record) => this.affectsSteps(record.target))) this.refresh();
    });
    base._observer.observe(this, { childList: true, characterData: true, subtree: true });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    for (const step of this.list) this.release(step.element);
  }

  /**
   * @param {Node} node
   * @returns {boolean} Whether the node is a direct child of the element or inside a legend of a step.
   */
  affectsSteps(node) {
    if (node === this) return true;
    const legend = (node instanceof Element ? node : node.parentElement)?.closest('legend');
    return legend?.parentElement?.parentElement === this;
  }

  // ---------------------------------------------------------------- focus and keys

  /** @param {FocusOptions} [options] */
  focus(options) {
    const step = this.current();
    if (!step) {
      /** @type {HTMLElement | null} */ (this.root.querySelector('h2'))?.focus(options);
      return;
    }
    (controlsIn(step.element)[0] ?? this.legendOf(step))?.focus(options);
  }

  /**
   * @param {Step} step
   * @returns {HTMLElement} Where the focus goes to enter a step: its legend (or the fieldset).
   */
  legendOf(step) {
    const target = /** @type {HTMLElement} */ (step.element.querySelector(':scope > legend') ?? step.element); // prettier-ignore
    if (!target.hasAttribute('tabindex')) {
      target.setAttribute('tabindex', '-1');
      this.tabbed.add(target);
    }
    return target;
  }

  /**
   * Enter in a text input goes to the next step: left alone, a form would be submitted by it
   * with the steps still to fill in.
   *
   * @param {KeyboardEvent} event
   */
  onKeydown(event) {
    if (event.key !== 'Enter' || event.isComposing || event.defaultPrevented) return;
    if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) return;
    const origin = event.composedPath()[0];
    if (!(origin instanceof HTMLInputElement) || NOT_ENTER.has(origin.type)) return;
    const root = origin.getRootNode();
    if (root instanceof ShadowRoot && !ENTER_OWNERS.has(root.host.localName)) return;
    // The input, or the field that holds it, must be in the step shown.
    const owner = root instanceof ShadowRoot ? root.host : origin;
    if (!this.current()?.element.contains(owner)) return;
    event.preventDefault();
    this.next();
  }

  // ---------------------------------------------------------------- checks

  /**
   * Asks the fields of a step if they are valid, without showing anything.
   *
   * @param {Step} step
   * @returns {Control | null} The first field that is not.
   */
  firstInvalid(step) {
    return controlsIn(step.element).find((control) => !control.checkValidity()) ?? null;
  }

  /**
   * Shows what is wrong with a field, in its own words, and puts the focus in it.
   *
   * @param {Control} control
   */
  reveal(control) {
    control.reportValidity();
    control.focus();
  }

  /**
   * Checks one step. A step that is not the current one is shown first, so the field can be
   * reached.
   *
   * @param {number} index
   * @returns {boolean} Whether its fields are all valid.
   */
  validateStep(index) {
    const bad = this.firstInvalid(this.list[index]);
    if (!bad) return true;
    if (index !== this.index) this.move(index, false);
    this.reveal(bad);
    return false;
  }

  // ---------------------------------------------------------------- navigation

  /** @returns {boolean} Whether the focus is inside the element, so a move may carry it along. */
  hasFocus() {
    const active = document.activeElement;
    return Boolean(this.root.activeElement) || Boolean(active && active !== document.body && (active === this || this.contains(active))); // prettier-ignore
  }

  /**
   * Goes to a position and draws it.
   *
   * @param {number} to
   * @param {boolean} [carryFocus] - Move the focus to the new step when it is inside the element.
   */
  move(to, carryFocus = true) {
    const from = this.index;
    this.index = to;
    this.at = this.list[to]?.element ?? null;
    for (const step of this.list.slice(0, to + 1)) this.reached.add(step.element);
    if (to >= this.list.length) this.reviewReached = true;
    this.pendingFocus = carryFocus && this.hasFocus() ? 'screen' : null;
    this.render();
    emit(this, EVENTS.STEP, { from, to, title: this.titleAt(to) });
    this.announce(this.stepAnnouncement());
  }

  /**
   * @param {number} position
   * @returns {string} The title of the step there, or "Review".
   */
  titleAt(position) {
    const step = this.list[position];
    if (!step) return this.t('formStepsReviewStep');
    return step.title || this.t('formStepsStepName', { current: formatNumber(position + 1, this.locale) }); // prettier-ignore
  }

  /** @returns {string} "Step 2 of 6: Contact", or "Review". */
  stepAnnouncement() {
    const total = this.list.length;
    const step = this.list[this.index];
    if (!step) return this.t('formStepsReviewStep');
    const params = { current: formatNumber(this.index + 1, this.locale), total: formatNumber(total, this.locale) }; // prettier-ignore
    return step.title ? this.t('formStepsStepTitle', { ...params, title: step.title }) : this.t('formStepsStepOf', params); // prettier-ignore
  }

  /**
   * Checks the fields of the current step and goes to the next one. On the last screen, it
   * submits.
   *
   * @returns {boolean} Whether it moved or submitted.
   */
  next() {
    if (!this.list.length) return false;
    if (this.index >= this.lastPosition()) return this.submit();
    if (!this.validateStep(this.index)) return false;
    if (this.at) this.passed.add(this.at);
    const to = this.returnToEnd ? this.lastPosition() : this.index + 1;
    this.returnToEnd = false;
    this.move(to);
    return true;
  }

  /** @returns {boolean} Whether it moved. */
  back() {
    if (this.index <= 0) return false;
    this.returnToEnd = false;
    this.move(this.index - 1);
    return true;
  }

  /**
   * @param {string | number} target - An index, the id of a fieldset, or `review`.
   * @returns {number} The position, or -1.
   */
  resolve(target) {
    if (typeof target === 'number') return Number.isInteger(target) ? target : -1;
    if (target === 'review') return this.hasReview ? this.list.length : -1;
    return this.list.findIndex((step) => step.element.id !== '' && step.element.id === target);
  }

  /**
   * @param {string | number} target - An index, the id of a fieldset, or `review`.
   * @returns {boolean} Whether it moved.
   */
  goTo(target) {
    const to = this.resolve(target);
    if (to < 0 || to > this.lastPosition() || to === this.index) return false;
    if (to > this.index) {
      // Every step on the way is checked, so none with a problem is skipped.
      for (let i = this.index; i < Math.min(to, this.list.length); i++) {
        if (!this.validateStep(i)) return false;
        this.passed.add(this.list[i].element);
      }
    }
    this.returnToEnd = false;
    this.move(to);
    return true;
  }

  /** @param {number} index - A step to change, from the review screen. */
  edit(index) {
    this.returnToEnd = true;
    this.move(index);
  }

  // ---------------------------------------------------------------- submit

  /**
   * Checks every step and goes to the first with a problem. If they all pass, asks the form
   * around the element to submit (`requestSubmit()`): the page's own `submit` handler, or the
   * browser, takes it from there. Without a form, only the check is done.
   *
   * @returns {boolean} Whether the form was asked to submit.
   */
  submit() {
    if (!this.list.length) return false;
    for (let i = 0; i < this.list.length; i++) {
      const bad = this.firstInvalid(this.list[i]);
      if (!bad) continue;
      this.returnToEnd = i !== this.lastPosition();
      if (i !== this.index) this.move(i, false);
      this.reveal(bad);
      return false;
    }
    const form = this.form;
    if (!form) return false;
    form.requestSubmit();
    return true;
  }

  // ---------------------------------------------------------------- render

  render() {
    const active = document.activeElement;
    const keep = active && active !== this && this.contains(active) ? active : null;
    super.render();
    this.showSteps();
    // The fields stay in the page across renders; give the focus back if a browser dropped it.
    if (keep && keep.isConnected && document.activeElement !== keep && !keep.closest('[hidden], [inert]')) /** @type {HTMLElement} */ (keep).focus({ preventScroll: true }); // prettier-ignore
    this.afterRender();
  }

  /** Moves the focus where the last navigation sent it. */
  afterRender() {
    if (!this.pendingFocus) return;
    this.pendingFocus = null;
    const step = this.current();
    if (step) this.legendOf(step).focus();
    else /** @type {HTMLElement | null} */ (this.root.querySelector('h2'))?.focus();
  }

  /**
   * Shows the current step and hides the others. A step that is not shown has `hidden` (so it
   * takes no room) and `inert` (so nothing in it can take the focus or be clicked, even if the
   * page's own style overrides `hidden`); its fields stay in the form.
   */
  showSteps() {
    this.list.forEach((step, i) => {
      const hide = i !== this.index;
      step.element.toggleAttribute('hidden', hide);
      step.element.toggleAttribute('inert', hide);
    });
  }

  /** @returns {'bar' | 'steps' | null} */
  progressKind() {
    const kind = parseEnum(this.getAttribute('progress'), PROGRESS, this.variant === 'full' ? 'steps' : 'bar'); // prettier-ignore
    return kind === 'none' ? null : kind;
  }

  /** @param {HTMLElement} frame */
  renderContent(frame) {
    const body = h('div', { class: 'fs-body', attrs: { role: this.heading ? 'group' : null, 'aria-label': this.heading || null } }); // prettier-ignore
    frame.append(body);
    if (!this.list.length) {
      body.append(noticeView(this.t('formStepsNoSteps')), this.stage);
      return;
    }
    this.index = Math.min(this.index, this.lastPosition());
    this.at = this.list[this.index]?.element ?? null;
    const kind = this.progressKind();
    if (kind) body.append(this.progress(kind));
    const onReview = this.index >= this.list.length;
    body.append(onReview ? this.review() : h('div', { class: 'stage', part: 'step' }, this.stage));
    const final = this.index === this.lastPosition();
    const t = this.t;
    const text = final ? t('formStepsSubmit') : this.hasReview && this.index === this.list.length - 1 ? t('formStepsReview') : t('formStepsNext'); // prettier-ignore
    body.append(
      navView({
        back: this.index > 0,
        next: text,
        t,
        on: { back: () => this.back(), next: () => this.next() },
      }),
    );
  }

  /**
   * @param {'bar' | 'steps'} kind
   * @returns {HTMLElement}
   */
  progress(kind) {
    /** @type {{ label: string, done: boolean, reachable: boolean, review?: boolean }[]} */
    const steps = this.list.map((step, i) => ({
      label:
        step.title || this.t('formStepsStepName', { current: formatNumber(i + 1, this.locale) }),
      done: this.passed.has(step.element),
      reachable: this.reached.has(step.element),
    }));
    if (this.hasReview)
      steps.push({ label: this.t('formStepsReviewStep'), done: false, reachable: this.reviewReached, review: true }); // prettier-ignore
    const total = this.list.length;
    const text = this.index >= total ? this.t('formStepsReviewStep') : this.t('formStepsStepOf', { current: formatNumber(this.index + 1, this.locale), total: formatNumber(total, this.locale) }); // prettier-ignore
    return progressView({
      kind,
      steps,
      index: this.index,
      text,
      t: this.t,
      onGo: (i) => this.goTo(i),
    });
  }

  /** @returns {HTMLElement} */
  review() {
    const t = this.t;
    return reviewView({
      steps: this.list.map((step, i) => ({ title: this.titleAt(i), rows: reviewRows(step.element, t) })), // prettier-ignore
      t,
      onEdit: (i) => this.edit(i),
    });
  }
}
