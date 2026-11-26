// @ts-check
/**
 * The pieces `<vt-form-steps>` draws around the fields: the progress, the buttons and the
 * review screen. They are built from plain data and report through
 * callbacks, so the element only has to keep the state.
 *
 * @module components/form-steps/views
 */
import { h, uid } from '../../core/dom.js';
import { icon } from '../../core/icons.js';

/** @typedef {import('../../core/ui.js').Translate} Translate */
/** @typedef {import('./steps.js').ReviewRow} ReviewRow */

/**
 * "Step 2 of 6" and a bar, or the list of steps.
 *
 * @param {object} options
 * @param {'bar' | 'steps'} options.kind
 * @param {{ label: string, done: boolean, reachable: boolean, review?: boolean }[]} options.steps -
 *   One per step, and the review screen last (`review`) when there is one: it is not a step, so
 *   it is not counted or numbered.
 * @param {number} options.index - The current position.
 * @param {string} options.text - "Step 2 of 6", or "Review".
 * @param {Translate} options.t
 * @param {(index: number) => void} options.onGo
 * @returns {HTMLElement}
 */
export function progressView({ kind, steps, index, text, t, onGo }) {
  const total = steps.filter((step) => !step.review).length;
  if (kind === 'bar') {
    // The bar counts steps like its text: on the review screen it is full.
    const now = Math.min(index + 1, Math.max(1, total));
    const bar = h('div', { class: 'bar', attrs: { role: 'progressbar', 'aria-label': t('formStepsProgress'), 'aria-valuemin': '1', 'aria-valuemax': String(Math.max(1, total)), 'aria-valuenow': String(now), 'aria-valuetext': text } }, h('span', { class: 'bar-fill' })); // prettier-ignore
    bar.style.setProperty('--_ratio', String(now / Math.max(1, total)));
    return h('div', { class: 'progress', part: 'progress' }, h('p', { class: 'progress-text', text }), bar); // prettier-ignore
  }
  const items = steps.map((step, i) => {
    const current = i === index;
    const done = step.done && !current;
    // The name read by a screen reader: "Step 2: Contact, completed". The check icon and the
    // number are drawn only.
    const spoken = (step.review ? step.label : t('formStepsStepLabel', { current: i + 1, label: step.label })) + (done ? `, ${t('formStepsCompleted')}` : ''); // prettier-ignore
    const inner = [
      // The number is drawn by CSS (data-n): as text it would double the <ol>'s own numbering
      // when the list is copied or read ("3. 3Review").
      done
        ? h('span', { class: 'mark', attrs: { 'aria-hidden': 'true' } }, icon('check'))
        : step.review
          ? h('span', { class: 'mark', attrs: { 'aria-hidden': 'true' } }, icon('list'))
          : h('span', { class: 'mark', attrs: { 'aria-hidden': 'true', 'data-n': String(i + 1) } }),
      h('span', { class: 'step-name', attrs: { 'aria-hidden': 'true' }, text: step.label }),
      h('span', { class: 'vh', text: spoken }),
    ];
    return h(
      'li',
      { class: `progress-item${current ? ' current' : ''}${done ? ' done' : ''}${step.review ? ' review-entry' : ''}`, attrs: { 'aria-current': current ? 'step' : null } }, // prettier-ignore
      step.reachable && !current
        ? h('button', { class: 'progress-link', attrs: { type: 'button' }, on: { click: () => onGo(i) } }, ...inner) // prettier-ignore
        : h('span', { class: 'progress-link' }, ...inner),
    );
  });
  return h(
    'div',
    { class: 'progress', part: 'progress' },
    h('p', { class: 'progress-text', text }),
    h('ol', { class: 'progress-steps', attrs: { 'aria-label': t('formStepsSteps') } }, ...items),
  );
}

/**
 * The buttons under a step: Back, and the main button (Next, Review answers or Submit).
 *
 * @param {object} options
 * @param {boolean} options.back
 * @param {string} options.next - Text of the main button.
 * @param {Translate} options.t
 * @param {{ back(): void, next(): void }} options.on
 * @returns {HTMLElement}
 */
export function navView({ back, next, t, on }) {
  // prettier-ignore
  const button = (/** @type {string} */ key, /** @type {string} */ text, /** @type {() => void} */ click, /** @type {string} */ kind) => // prettier-ignore
    h('button', { class: `btn-fs ${kind}`, text, attrs: { type: 'button', 'data-focus-key': key }, on: { click } }); // prettier-ignore
  return h(
    'div',
    { class: 'nav', part: 'nav' },
    back ? button('back', t('formStepsBack'), on.back, 'secondary') : h('span'),
    h('span', { class: 'nav-end' }, button('next', next, on.next, 'primary')),
  );
}

/**
 * The review screen: the legend of each step, its fields with their value, and an Edit button
 * that goes back to the step.
 *
 * @param {object} options
 * @param {{ title: string, rows: ReviewRow[] }[]} options.steps
 * @param {Translate} options.t
 * @param {(index: number) => void} options.onEdit
 * @returns {HTMLElement}
 */
export function reviewView({ steps, t, onEdit }) {
  const id = uid('review');
  const groups = steps.map((step, index) =>
    h(
      'div',
      { class: 'review-step' },
      h(
        'div',
        { class: 'review-head' },
        h('h3', { class: 'review-title', text: step.title }),
        h('button', { class: 'btn-fs ghost', attrs: { type: 'button', 'aria-label': t('formStepsEditStep', { label: step.title }) }, on: { click: () => onEdit(index) } }, t('formStepsEdit')), // prettier-ignore
      ),
      h(
        'dl',
        { class: 'review-list' },
        ...step.rows.map((row) =>
          h(
            'div',
            { class: 'review-row' },
            h('dt', { class: 'review-q', text: row.label }),
            h('dd', { class: `review-a${row.value ? '' : ' empty'}`, text: row.value || t('formStepsNoAnswer') }), // prettier-ignore
          ),
        ),
      ),
    ),
  );
  return h(
    'section',
    { class: 'review', part: 'review', attrs: { 'aria-labelledby': id } },
    h('h2', { class: 'screen-title', text: t('formStepsReviewTitle'), attrs: { id, tabindex: '-1' } }), // prettier-ignore
    ...groups,
  );
}
