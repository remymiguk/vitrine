// @ts-check
import { afterEach, describe, expect, it, vi } from 'vitest';
import { VtField } from '../../src/components/field/vt-field.js';
import { VtFormSteps } from '../../src/components/form-steps/vt-form-steps.js';
import {
  controlsIn,
  legendText,
  readSteps,
  reviewRows,
  sameSteps,
} from '../../src/components/form-steps/steps.js';
import { en, fr } from '../../src/components/form-steps/strings.js';

for (const [name, ctor] of /** @type {[string, CustomElementConstructor][]} */ ([
  ['vt-field', VtField],
  ['vt-form-steps', VtFormSteps],
]))
  if (!customElements.get(name)) customElements.define(name, ctor);

const tick = () => new Promise((resolve) => setTimeout(resolve, 0));

/**
 * Three steps made of native controls, so the checks do not depend on a custom element:
 * a required text, a required choice, and an optional note.
 */
const NATIVE = `
  <fieldset id="contact"><legend>Contact</legend>
    <label>Email <input name="email" type="email" required></label>
  </fieldset>
  <fieldset id="needs"><legend>Your needs</legend>
    <label>Topic
      <select name="topic" required><option value="">Choose</option><option value="a">Code</option><option value="b">JSON</option></select>
    </label>
    <label><input type="checkbox" name="tool" value="x"> Ex</label>
    <label><input type="checkbox" name="tool" value="y"> Why</label>
  </fieldset>
  <fieldset id="more"><legend>More</legend>
    <label>Note <textarea name="note"></textarea></label>
  </fieldset>`;

/**
 * @param {string} html - The steps.
 * @param {Record<string, string>} [attrs]
 * @param {boolean} [inForm]
 * @returns {Promise<any>}
 */
async function mount(html = NATIVE, attrs = {}, inForm = false) {
  const el = document.createElement('vt-form-steps');
  el.setAttribute('lang-ui', 'en');
  for (const [name, value] of Object.entries(attrs)) el.setAttribute(name, value);
  el.innerHTML = html;
  if (inForm) {
    const form = document.createElement('form');
    form.append(el);
    document.body.append(form);
  } else document.body.append(el);
  await tick();
  return el;
}

/** @param {any} el @param {string} name @param {string} value */
function fill(el, name, value) {
  const input = el.querySelector(`[name="${name}"]`);
  input.value = value;
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.dispatchEvent(new Event('change', { bubbles: true }));
}

/** @param {any} el @returns {string[]} The ids of the fieldsets that are shown. */
const shown = (el) => [...el.querySelectorAll(':scope > fieldset')].filter((f) => !f.hidden).map((f) => f.id); // prettier-ignore

afterEach(() => {
  document.body.innerHTML = '';
  vi.useRealTimers();
});

describe('reading the markup', () => {
  it('takes the fieldset children as steps, with their legend', async () => {
    const host = document.createElement('div');
    host.innerHTML = `<p>Intro</p><fieldset><legend> Contact\n  details </legend>
      <fieldset><legend>Nested</legend></fieldset></fieldset><fieldset></fieldset>`;
    const steps = readSteps(host);
    expect(steps.map((s) => s.title)).toEqual(['Contact details', '']);
    expect(legendText(host.querySelector('fieldset > fieldset') ?? host)).toBe('Nested');
    expect(sameSteps(steps, readSteps(host))).toBe(true);
    expect(sameSteps(steps, steps.slice(1))).toBe(false);
  });

  it('lists the controls that can check themselves, not buttons or fieldsets', () => {
    const host = document.createElement('div');
    host.innerHTML = `<fieldset><input name="a"><button>Go</button><select name="b"></select>
      <textarea name="c"></textarea><output></output><vt-field name="d"></vt-field></fieldset>`;
    expect(controlsIn(host).map((c) => c.localName)).toEqual(['input', 'select', 'textarea', 'vt-field']); // prettier-ignore
  });
});

describe('the steps of a page', () => {
  it('shows one step at a time and hides the others from the page and the keyboard', async () => {
    const el = await mount();
    expect(shown(el)).toEqual(['contact']);
    const second = el.querySelector('#needs');
    expect(second.hasAttribute('hidden')).toBe(true);
    expect(second.hasAttribute('inert')).toBe(true);
    expect(el.querySelector('#contact').hasAttribute('inert')).toBe(false);
    expect(el.steps).toBe(3);
    expect(el.step).toBe(0);
  });

  it('writes "Step 1 of 3" and a progress bar, or a list of steps', async () => {
    const el = await mount();
    expect(el.root.querySelector('.progress-text').textContent).toBe('Step 1 of 3');
    const bar = el.root.querySelector('[role="progressbar"]');
    expect(bar.getAttribute('aria-valuenow')).toBe('1');
    expect(bar.getAttribute('aria-valuemax')).toBe('3');
    expect(bar.getAttribute('aria-valuetext')).toBe('Step 1 of 3');
    el.setAttribute('progress', 'steps');
    el.render();
    const items = [...el.root.querySelectorAll('.progress-steps li')];
    expect(items.map((li) => li.querySelector('.step-name').textContent)).toEqual(['Contact', 'Your needs', 'More']); // prettier-ignore
    expect(items[0].getAttribute('aria-current')).toBe('step');
    expect(el.root.querySelectorAll('.progress-steps button')).toHaveLength(0);
    el.setAttribute('progress', 'none');
    el.render();
    expect(el.root.querySelector('.progress')).toBeNull();
  });

  it('defaults to the bar for the simple variant and the list of steps for the full one', async () => {
    const simple = await mount();
    expect(simple.root.querySelector('.bar')).not.toBeNull();
    const full = await mount(NATIVE, { variant: 'full' });
    expect(full.root.querySelector('.progress-steps')).not.toBeNull();
  });

  it('checks the fields of the step before Next, and stays on a step with a problem', async () => {
    const el = await mount();
    const steps = [];
    el.addEventListener('vt-step', (/** @type {any} */ e) => steps.push(e.detail));
    expect(el.next()).toBe(false);
    expect(el.step).toBe(0);
    expect(steps).toEqual([]);
    fill(el, 'email', 'not an email');
    expect(el.next()).toBe(false);
    fill(el, 'email', 'a@example.com');
    expect(el.next()).toBe(true);
    expect(el.step).toBe(1);
    expect(shown(el)).toEqual(['needs']);
    expect(steps).toEqual([{ from: 0, to: 1, title: 'Your needs' }]);
  });

  it('uses reportValidity() on the first invalid field only', async () => {
    const el = await mount();
    const email = el.querySelector('[name="email"]');
    const report = vi.spyOn(email, 'reportValidity');
    const other = vi.spyOn(el.querySelector('[name="topic"]'), 'reportValidity');
    el.next();
    expect(report).toHaveBeenCalledTimes(1);
    expect(other).not.toHaveBeenCalled();
  });

  it('goes Back without checking anything', async () => {
    const el = await mount();
    fill(el, 'email', 'a@example.com');
    el.next();
    expect(el.step).toBe(1);
    const email = el.querySelector('[name="email"]');
    email.value = '';
    expect(el.back()).toBe(true);
    expect(el.step).toBe(0);
    expect(el.back()).toBe(false);
  });

  it('goTo() takes an index or an id, and checks every step on the way', async () => {
    const el = await mount();
    expect(el.goTo(2)).toBe(false);
    expect(el.step).toBe(0);
    fill(el, 'email', 'a@example.com');
    // The second step has a required choice: the jump stops there.
    expect(el.goTo('more')).toBe(false);
    expect(el.step).toBe(1);
    fill(el, 'topic', 'a');
    expect(el.goTo('more')).toBe(true);
    expect(el.step).toBe(2);
    expect(el.goTo('contact')).toBe(true);
    expect(el.step).toBe(0);
    expect(el.goTo('Contact')).toBe(false);
    expect(el.goTo('nowhere')).toBe(false);
    expect(el.goTo('review')).toBe(false);
    expect(el.goTo(-1)).toBe(false);
    expect(el.goTo(9)).toBe(false);
    expect(el.goTo(0)).toBe(false);
  });

  it('moves the focus to the legend of the new step when the focus was inside', async () => {
    const el = await mount();
    fill(el, 'email', 'a@example.com');
    el.querySelector('[name="email"]').focus();
    el.next();
    const legend = el.querySelector('#needs legend');
    expect(legend.getAttribute('tabindex')).toBe('-1');
    expect(document.activeElement).toBe(legend);
  });

  it('leaves the focus alone when a script moves the steps', async () => {
    const el = await mount();
    fill(el, 'email', 'a@example.com');
    const outside = document.createElement('button');
    document.body.append(outside);
    outside.focus();
    el.next();
    expect(document.activeElement).toBe(outside);
  });

  it('announces the step', async () => {
    const el = await mount();
    fill(el, 'email', 'a@example.com');
    el.next();
    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(el.root.querySelector('[aria-live]').textContent).toBe('Step 2 of 3: Your needs');
  });

  it('names a step without a legend', async () => {
    const el = await mount('<fieldset id="a"><input name="x"></fieldset><fieldset id="b"></fieldset>', { progress: 'steps' }); // prettier-ignore
    const names = [...el.root.querySelectorAll('.step-name')].map((n) => n.textContent);
    expect(names).toEqual(['Step 1', 'Step 2']);
  });

  it('goes to the next step with Enter in a text input', async () => {
    const el = await mount();
    fill(el, 'email', 'a@example.com');
    const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true, composed: true }); // prettier-ignore
    el.querySelector('[name="email"]').dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    expect(el.step).toBe(1);
    const area = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true });
    el.querySelector('#needs select').dispatchEvent(area);
    expect(area.defaultPrevented).toBe(false);
    expect(el.step).toBe(1);
  });

  it('does not draw again for what happens inside the fields', async () => {
    const el = await mount();
    const render = vi.spyOn(el, 'render');
    el.querySelector('label').append(document.createTextNode(' more'));
    el.querySelector('[name="email"]').setAttribute('placeholder', 'x');
    await tick();
    expect(render).not.toHaveBeenCalled();
  });

  it('follows fieldsets added and legends renamed', async () => {
    const el = await mount();
    const extra = document.createElement('fieldset');
    extra.id = 'last';
    extra.innerHTML = '<legend>Last</legend>';
    el.append(extra);
    await tick();
    expect(el.steps).toBe(4);
    el.querySelector('#contact legend').textContent = 'About you';
    await tick();
    el.setAttribute('progress', 'steps');
    el.render();
    expect(el.root.querySelector('.step-name').textContent).toBe('About you');
    el.querySelector('#last').remove();
    await tick();
    expect(el.steps).toBe(3);
  });

  it('shows a notice without steps', async () => {
    const el = await mount('<p>Nothing</p>');
    expect(el.steps).toBe(0);
    expect(el.root.textContent).toContain('There are no steps to show.');
    expect(el.next()).toBe(false);
    expect(el.submit()).toBe(false);
  });
});

/**
 * A form-associated element of its own that decides by itself, as <vt-field> does: the
 * steps only ask it. (<vt-field> and the real browser checks are covered in the e2e tests,
 * the DOM of the unit tests does not validate custom elements.)
 */
class FakeControl extends HTMLElement {
  static formAssociated = true;

  valid = false;

  get name() {
    return this.getAttribute('name') ?? '';
  }

  checkValidity() {
    if (!this.valid) this.dispatchEvent(new Event('invalid'));
    return this.valid;
  }

  reportValidity() {
    return this.checkValidity();
  }
}
if (!customElements.get('fake-control')) customElements.define('fake-control', FakeControl);

describe('with a custom form-associated element', () => {
  const FIELDS = `
    <fieldset id="one"><legend>Contact</legend><fake-control name="email"></fake-control></fieldset>
    <fieldset id="two"><legend>Needs</legend>
      <vt-field name="topics" type="checkboxes" label="Topics">
        a | Alpha
        b | Beta
      </vt-field>
    </fieldset>`;

  it('lets the element decide: Next waits for it, and asks it to report', async () => {
    const el = await mount(FIELDS);
    const control = el.querySelector('fake-control');
    const report = vi.spyOn(control, 'reportValidity');
    expect(el.next()).toBe(false);
    expect(el.step).toBe(0);
    expect(report).toHaveBeenCalledTimes(1);
    control.valid = true;
    expect(el.next()).toBe(true);
    expect(el.step).toBe(1);
  });

  it('skips an element that cannot check itself: it never blocks Next, and does not crash', async () => {
    class Plain extends HTMLElement {
      static formAssociated = true;
      value = ['x'];
      get name() {
        return this.getAttribute('name') ?? '';
      }
    }
    if (!customElements.get('plain-control')) customElements.define('plain-control', Plain);
    const el = await mount(`
      <fieldset id="one"><legend>One</legend><plain-control name="p" required></plain-control></fieldset>
      <fieldset id="two"><legend>Two</legend><input name="x"></fieldset>`);
    expect(controlsIn(el.querySelector('#one'))).toEqual([]);
    expect(el.next()).toBe(true);
    expect(el.step).toBe(1);
  });

  it('does not take its own checks for a page reporting a field', async () => {
    const el = await mount(FIELDS);
    el.querySelector('fake-control').valid = true;
    el.next();
    el.querySelector('fake-control').valid = false;
    el.back();
    // Submitting checks every step: the first is shown again, once.
    el.goTo(1);
    expect(el.step).toBe(0);
    const moves = [];
    el.addEventListener('vt-step', (/** @type {any} */ e) => moves.push(e.detail.to));
    expect(el.submit()).toBe(false);
    expect(moves).toEqual([]);
  });

  it('writes the value in words on the review screen', async () => {
    const el = await mount(FIELDS, { review: '' });
    el.querySelector('vt-field[name="topics"]').value = ['b'];
    const rows = reviewRows(el.querySelector('#two'), (key) => (key === 'formStepsYes' ? 'Yes' : 'No')); // prettier-ignore
    expect(rows).toEqual([{ label: 'Topics', value: 'Beta' }]);
  });
});

describe('the review screen', () => {
  /** @param {any} el */
  async function reach(el) {
    fill(el, 'email', 'a@example.com');
    el.next();
    fill(el, 'topic', 'b');
    el.querySelector('[name="tool"]').checked = true;
    el.next();
    fill(el, 'note', 'Line one\nLine two');
    return el.next();
  }

  it('is off by default and on for the full variant', async () => {
    const el = await mount();
    expect(el.hasReview).toBe(false);
    expect((await mount(NATIVE, { variant: 'full' })).hasReview).toBe(true);
    expect((await mount(NATIVE, { variant: 'full', review: 'false' })).hasReview).toBe(false);
  });

  it('comes after the last step, with the legend and the label: value of each field', async () => {
    const el = await mount(NATIVE, { review: '' });
    expect(el.root.querySelector('.nav .btn-fs.primary')).not.toBeNull();
    expect(await reach(el)).toBe(true);
    expect(el.step).toBe(3);
    expect(shown(el)).toEqual([]);
    const titles = [...el.root.querySelectorAll('.review-title')].map((n) => n.textContent);
    expect(titles).toEqual(['Contact', 'Your needs', 'More']);
    const rows = [...el.root.querySelectorAll('.review-row')].map((row) => [row.querySelector('dt').textContent, row.querySelector('dd').textContent]); // prettier-ignore
    expect(rows).toEqual([
      ['Email', 'a@example.com'],
      ['Topic', 'JSON'],
      ['tool', 'Ex'],
      ['Note', 'Line one\nLine two'],
    ]);
    expect(el.root.querySelector('.review-head button').getAttribute('aria-label')).toBe('Edit: Contact'); // prettier-ignore
    expect(el.root.querySelector('.nav .btn-fs.primary')?.textContent).toBe('Submit');
  });

  it('says so when a field has no value, and masks passwords', () => {
    const step = document.createElement('fieldset');
    step.innerHTML = '<label>Name <input name="n"></label><label>Secret <input type="password" name="p" value="hunter2"></label>'; // prettier-ignore
    const rows = reviewRows(step, () => '');
    expect(rows).toEqual([
      { label: 'Name', value: '' },
      { label: 'Secret', value: '••••••••' },
    ]);
    expect(JSON.stringify(rows)).not.toContain('hunter2');
  });

  it('goes back to a step with Edit, and Next returns to the review', async () => {
    const el = await mount(NATIVE, { review: '' });
    await reach(el);
    el.root.querySelectorAll('.review-head button')[1].click();
    expect(el.step).toBe(1);
    expect(shown(el)).toEqual(['needs']);
    expect(el.next()).toBe(true);
    expect(el.step).toBe(3);
  });

  it('the Next button of the last step asks for the review', async () => {
    const el = await mount(NATIVE, { review: '' });
    el.goTo(0);
    fill(el, 'email', 'a@example.com');
    el.next();
    fill(el, 'topic', 'a');
    el.next();
    expect(el.root.querySelector('.nav .btn-fs.primary').textContent).toBe('Review answers');
  });
});

describe('submitting', () => {
  /** @param {any} el */
  function fillAll(el) {
    fill(el, 'email', 'a@example.com');
    fill(el, 'topic', 'a');
    el.querySelectorAll('[name="tool"]').forEach((/** @type {any} */ box) => (box.checked = true));
    fill(el, 'note', 'hello');
  }

  /** @param {any} el */
  function toLast(el) {
    fillAll(el);
    el.goTo(2);
  }

  /** @param {any} el @returns {any} The main button of the last screen. */
  const mainButton = (el) => el.root.querySelector('.nav .btn-fs.primary');

  it('has a plain Submit button on the last screen, styled like Next', async () => {
    const el = await mount();
    const next = mainButton(el);
    expect(next.textContent).toBe('Next');
    toLast(el);
    const submit = mainButton(el);
    expect(submit.localName).toBe('button');
    expect(submit.textContent).toBe('Submit');
    expect(submit.className).toBe(next.className);
    expect(el.root.querySelector('vt-loading-button')).toBeNull();
  });

  it('asks the form around it to submit once every step passed', async () => {
    const el = await mount(NATIVE, {}, true);
    toLast(el);
    const sent = vi.fn((/** @type {Event} */ event) => event.preventDefault());
    el.closest('form').addEventListener('submit', sent);
    mainButton(el).click();
    expect(sent).toHaveBeenCalledTimes(1);
    expect(el.submit()).toBe(true);
    expect(sent).toHaveBeenCalledTimes(2);
  });

  it('checks every step and goes to the first with a problem', async () => {
    const el = await mount(NATIVE, {}, true);
    fillAll(el);
    el.goTo(2);
    fill(el, 'email', '');
    const sent = vi.fn((/** @type {Event} */ event) => event.preventDefault());
    el.closest('form').addEventListener('submit', sent);
    expect(el.submit()).toBe(false);
    expect(sent).not.toHaveBeenCalled();
    expect(el.step).toBe(0);
    fill(el, 'email', 'a@example.com');
    // After the fix, Next goes straight back to the last step.
    expect(el.next()).toBe(true);
    expect(el.step).toBe(2);
    expect(el.next()).toBe(true);
    expect(sent).toHaveBeenCalledTimes(1);
  });

  it('only checks when there is no form around it', async () => {
    const el = await mount();
    toLast(el);
    expect(el.form).toBeNull();
    expect(el.submit()).toBe(false);
    expect(el.step).toBe(2);
    fill(el, 'topic', '');
    expect(el.submit()).toBe(false);
    expect(el.step).toBe(1);
  });

  it('lets the form refuse: its own fields are checked by the browser', async () => {
    const el = await mount(NATIVE, {}, true);
    toLast(el);
    const form = el.closest('form');
    const outside = document.createElement('input');
    outside.name = 'outside';
    outside.required = true;
    form.append(outside);
    const sent = vi.fn();
    form.addEventListener('submit', sent);
    el.submit();
    expect(sent).not.toHaveBeenCalled();
  });

  it('submits from the review screen', async () => {
    const el = await mount(NATIVE, { review: '' }, true);
    toLast(el);
    el.next();
    expect(el.step).toBe(3);
    expect(mainButton(el).textContent).toBe('Submit');
    const sent = vi.fn((/** @type {Event} */ event) => event.preventDefault());
    el.closest('form').addEventListener('submit', sent);
    mainButton(el).click();
    expect(sent).toHaveBeenCalledTimes(1);
  });
});

describe('the list of steps, for a screen reader', () => {
  it('has no label on a role-less span, and says "completed" in hidden text', async () => {
    const el = await mount(NATIVE, { progress: 'steps', review: '' });
    fill(el, 'email', 'a@example.com');
    el.next();
    const items = [...el.root.querySelectorAll('.progress-steps li')];
    const spoken = items.map((li) => li.querySelector('.vh')?.textContent);
    expect(spoken).toEqual(['Step 1: Contact, completed', 'Step 2: Your needs', 'Step 3: More', 'Review']); // prettier-ignore
    expect(el.root.querySelector('.progress-steps [aria-label]')).toBeNull();
    expect(items[0].querySelector('.mark')?.getAttribute('aria-hidden')).toBe('true');
  });

  it('does not count the review entry as a step', async () => {
    const el = await mount(NATIVE, { progress: 'steps', review: '' });
    const marks = [...el.root.querySelectorAll('.progress-steps .mark')];
    expect(marks.map((m) => m.getAttribute('data-n'))).toEqual(['1', '2', '3', null]);
  });

  it('keeps the bar consistent with its text, full on the review screen', async () => {
    const el = await mount(NATIVE, { review: '' });
    const bar = () => el.root.querySelector('[role="progressbar"]');
    expect(bar().getAttribute('aria-valuemax')).toBe('3');
    fill(el, 'email', 'a@example.com');
    fill(el, 'topic', 'a');
    el.goTo(3);
    expect(el.root.querySelector('.progress-text').textContent).toBe('Review');
    expect(bar().getAttribute('aria-valuemax')).toBe('3');
    expect(bar().getAttribute('aria-valuenow')).toBe('3');
    expect(bar().getAttribute('aria-valuetext')).toBe('Review');
  });
});

describe('fieldsets that come and go', () => {
  it('keeps the reader on the same step when another fieldset is removed or added', async () => {
    const el = await mount();
    fill(el, 'email', 'a@example.com');
    el.next();
    expect(shown(el)).toEqual(['needs']);
    el.querySelector('#contact').remove();
    await tick();
    expect(el.steps).toBe(2);
    expect(el.step).toBe(0);
    expect(shown(el)).toEqual(['needs']);
    const extra = document.createElement('fieldset');
    extra.id = 'first';
    extra.innerHTML = '<legend>First</legend>';
    el.prepend(extra);
    await tick();
    expect(el.step).toBe(1);
    expect(shown(el)).toEqual(['needs']);
  });

  it('keeps the passed and reached marks on their fieldsets when they are reordered', async () => {
    const el = await mount(NATIVE, { progress: 'steps' });
    fill(el, 'email', 'a@example.com');
    el.next();
    fill(el, 'topic', 'a');
    el.next();
    expect(el.step).toBe(2);
    el.append(el.querySelector('#contact'));
    await tick();
    expect(el.step).toBe(1);
    expect(shown(el)).toEqual(['more']);
    const items = [...el.root.querySelectorAll('.progress-steps li')];
    expect(items.map((li) => li.querySelector('.step-name')?.textContent)).toEqual(['Your needs', 'More', 'Contact']); // prettier-ignore
    expect(items.map((li) => li.classList.contains('done'))).toEqual([true, false, true]);
    expect(items.map((li) => li.querySelector('button') !== null)).toEqual([true, false, true]);
  });

  it('gives a fieldset back to the page when it leaves the element', async () => {
    const el = await mount();
    fill(el, 'email', 'a@example.com');
    el.next();
    const needs = el.querySelector('#needs');
    const contact = el.querySelector('#contact');
    expect(needs.querySelector('legend').getAttribute('tabindex')).toBe(null);
    fill(el, 'topic', 'a');
    el.querySelector('[name="topic"]').focus();
    el.next();
    expect(el.querySelector('#more legend').getAttribute('tabindex')).toBe('-1');
    expect(contact.hasAttribute('hidden') && contact.hasAttribute('inert')).toBe(true);
    const more = el.querySelector('#more');
    more.remove();
    contact.remove();
    await tick();
    for (const gone of [more, contact]) {
      expect(gone.hasAttribute('hidden')).toBe(false);
      expect(gone.hasAttribute('inert')).toBe(false);
      expect(gone.querySelector('legend').hasAttribute('tabindex')).toBe(false);
    }
  });

  it('gives every fieldset back when the element is removed from the page', async () => {
    const el = await mount();
    fill(el, 'email', 'a@example.com');
    el.querySelector('[name="email"]').focus();
    el.next();
    const legend = el.querySelector('#needs legend');
    expect(legend.getAttribute('tabindex')).toBe('-1');
    el.remove();
    for (const fieldset of el.querySelectorAll(':scope > fieldset')) {
      expect(fieldset.hasAttribute('hidden')).toBe(false);
      expect(fieldset.hasAttribute('inert')).toBe(false);
    }
    expect(legend.hasAttribute('tabindex')).toBe(false);
    document.body.append(el);
    await tick();
    expect(shown(el)).toEqual(['needs']);
  });

  it('does not take a tabindex the page set itself', async () => {
    const el = await mount('<fieldset id="a"><legend tabindex="0">A</legend></fieldset><fieldset id="b"><legend>B</legend></fieldset>'); // prettier-ignore
    el.next();
    el.back();
    el.remove();
    expect(el.querySelector('#a legend').getAttribute('tabindex')).toBe('0');
  });
});

describe('words and form', () => {
  it('speaks French', async () => {
    const el = await mount(NATIVE, { 'lang-ui': 'fr', progress: 'steps' });
    expect(el.root.querySelector('.progress-text').textContent).toBe('Étape 1 sur 3');
    expect(el.root.querySelector('.nav .btn-fs.primary').textContent).toBe('Suivant');
  });

  it('has the same strings in both languages', () => {
    expect(Object.keys(fr).sort()).toEqual(Object.keys(en).sort());
  });

  it('reports the form around it', async () => {
    const el = await mount(NATIVE, {}, true);
    expect(el.form).toBe(el.closest('form'));
    expect((await mount()).form).toBeNull();
  });

  it('names the whole form with label', async () => {
    const el = await mount(NATIVE, { label: 'Sign up' });
    const body = el.root.querySelector('.fs-body');
    expect(body.getAttribute('role')).toBe('group');
    expect(body.getAttribute('aria-label')).toBe('Sign up');
  });
});
