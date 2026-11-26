// @ts-check
/**
 * What `<vt-form-steps>` needs to know about the markup it wraps: the steps (the `<fieldset>`
 * children and their `<legend>`), the form controls of a step and the words of a review.
 * Nothing here validates: every control checks itself.
 *
 * @module components/form-steps/steps
 */

/**
 * @typedef {object} Step
 * @property {HTMLFieldSetElement} element - The fieldset.
 * @property {string} title - Its legend, trimmed; empty without one.
 */

/**
 * @typedef {object} ReviewRow
 * @property {string} label - The label of the field.
 * @property {string} value - Its value in words; empty when there is none.
 */

/** Controls whose value is never shown in a review. */
const MASKED = new Set(['vt-password', 'vt-secret']);

/** Input types that are not answers. */
const NOT_ANSWERS = new Set(['button', 'submit', 'reset', 'image', 'hidden']);

/**
 * @param {Element} element
 * @returns {string} The text of the legend of a fieldset, on one line.
 */
export function legendText(element) {
  const legend = element.querySelector(':scope > legend');
  return (legend?.textContent ?? '').replace(/\s+/g, ' ').trim();
}

/**
 * The steps of a host: its `<fieldset>` children, in order. A fieldset deeper in a step is a
 * group of fields, not a step.
 *
 * @param {Element} host
 * @returns {Step[]}
 */
export function readSteps(host) {
  return [...host.children]
    .filter((child) => child instanceof HTMLFieldSetElement)
    .map((element) => ({ element: /** @type {HTMLFieldSetElement} */ (element), title: legendText(element) })); // prettier-ignore
}

/**
 * Whether two lists are the same steps with the same titles.
 *
 * @param {Step[]} a
 * @param {Step[]} b
 * @returns {boolean}
 */
export function sameSteps(a, b) {
  return a.length === b.length && a.every((step, i) => step.element === b[i].element && step.title === b[i].title); // prettier-ignore
}

/** @typedef {HTMLElement & { checkValidity(): boolean, reportValidity(): boolean }} Control */

/**
 * The fields in a part of the page: the form controls that can check themselves (see
 * `controlsIn()`) and the form-associated custom elements that cannot, such as a field
 * without `checkValidity()`. All are listed in the review; only the first kind is asked to be
 * valid.
 *
 * @param {Element} root
 * @returns {Control[]}
 */
export function fieldsIn(root) {
  return /** @type {Control[]} */ (
    [...root.querySelectorAll('*')].filter((el) => {
      if (
        el instanceof HTMLFieldSetElement ||
        el instanceof HTMLFormElement ||
        el instanceof HTMLButtonElement ||
        el instanceof HTMLOutputElement ||
        el instanceof HTMLObjectElement
      )
        return false;
      const own = /** @type {any} */ (el);
      if (own.checkValidity instanceof Function && own.reportValidity instanceof Function)
        return true;
      if (!el.localName.includes('-')) return false;
      const ctor = /** @type {any} */ (customElements.get(el.localName));
      return ctor?.formAssociated === true;
    })
  );
}

/**
 * The form controls in a part of the page that can check themselves: native inputs, selects
 * and text areas, and form-associated custom elements such as `<vt-field>`. A fieldset or a
 * form checks its descendants, which are listed on their own.
 *
 * @param {Element} root
 * @returns {Control[]}
 */
export function controlsIn(root) {
  return fieldsIn(root).filter(
    (el) =>
      /** @type {any} */ (el).checkValidity instanceof Function &&
      /** @type {any} */ (el).reportValidity instanceof Function,
  );
}

/**
 * @param {Element} element
 * @returns {string} The name a control is submitted under; empty when it has none.
 */
export function nameOf(element) {
  const name = /** @type {any} */ (element).name;
  return (typeof name === 'string' ? name : (element.getAttribute('name') ?? '')).trim();
}

/**
 * @param {Control} control
 * @returns {boolean} Whether the control is turned off (it is not submitted, so not reviewed).
 */
function isDisabled(control) {
  const flag = /** @type {any} */ (control).disabled;
  return flag === true || control.hasAttribute('disabled') || control.closest('fieldset[disabled]') !== null; // prettier-ignore
}

// ---------------------------------------------------------------- review

/**
 * @param {Control} control
 * @returns {string} The text of the first `<label>` of a control, without the controls a
 *   wrapping label holds.
 */
function labelText(control) {
  const labels = /** @type {any} */ (control).labels;
  if (!labels || !labels.length) return '';
  const copy = /** @type {Element} */ (labels[0].cloneNode(true));
  for (const inner of copy.querySelectorAll('input, select, textarea, button, output, [name]')) inner.remove(); // prettier-ignore
  return String(copy.textContent ?? '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * @param {Control} control
 * @returns {string} The label of a field: its `label` attribute, its `<label>`, or its name.
 */
function labelOf(control) {
  return control.getAttribute('label')?.trim() || labelText(control) || control.getAttribute('aria-label')?.trim() || nameOf(control); // prettier-ignore
}

/**
 * @param {Control} control
 * @returns {string} The label of a native check box or radio button.
 */
function optionLabel(control) {
  return labelText(control) || /** @type {HTMLInputElement} */ (control).value;
}

/**
 * The value of a control in words: the label of a chosen option rather than its value, a
 * Yes or No for a switch, a mask for a password.
 *
 * @param {Control} control
 * @param {(key: 'formStepsYes' | 'formStepsNo') => string} t
 * @returns {string} Empty when there is no value.
 */
function wordsOf(control, t) {
  const tag = control.localName;
  if (MASKED.has(tag) || (control instanceof HTMLInputElement && control.type === 'password')) {
    return /** @type {any} */ (control).value ? '••••••••' : '';
  }
  if (control instanceof HTMLSelectElement)
    return [...control.selectedOptions].map((o) => (o.textContent ?? '').trim() || o.value).join(', '); // prettier-ignore
  if (control instanceof HTMLInputElement && control.type === 'file')
    return [...(control.files ?? [])].map((f) => f.name).join(', ');
  const value = /** @type {any} */ (control).value;
  if (typeof value === 'boolean') return t(value ? 'formStepsYes' : 'formStepsNo');
  const options = /** @type {any} */ (control).options;
  const label = (/** @type {string} */ v) =>
    Array.isArray(options) ? (options.find((o) => o && o.value === v)?.label ?? v) : v;
  if (Array.isArray(value)) return value.map((v) => label(String(v))).join(', ');
  const files = /** @type {any} */ (control).files;
  if (Array.isArray(files) && files.length) return files.map((f) => f.name).join(', ');
  return typeof value === 'string' ? label(value) : value === undefined ? '' : String(value);
}

/**
 * The rows of a review for one step: one per named field, a group of native check boxes or
 * radio buttons counting as one.
 *
 * @param {Element} step
 * @param {(key: 'formStepsYes' | 'formStepsNo') => string} t
 * @returns {ReviewRow[]}
 */
export function reviewRows(step, t) {
  /** @type {ReviewRow[]} */
  const rows = [];
  /** @type {Map<string, { row: ReviewRow, picked: string[] }>} */
  const groups = new Map();
  for (const control of fieldsIn(step)) {
    if (!nameOf(control) || isDisabled(control)) continue;
    if (control instanceof HTMLInputElement && NOT_ANSWERS.has(control.type)) continue;
    if (!(
      control instanceof HTMLInputElement &&
      (control.type === 'checkbox' || control.type === 'radio')
    )) {
      // prettier-ignore
      rows.push({ label: labelOf(control), value: wordsOf(control, t) });
      continue;
    }
    const key = `${control.type}:${nameOf(control)}`;
    let group = groups.get(key);
    if (!group) {
      group = { row: { label: groupLabel(control, step), value: '' }, picked: [] };
      groups.set(key, group);
      rows.push(group.row);
    }
    if (control.checked) group.picked.push(optionLabel(control));
    group.row.value = group.picked.join(', ');
  }
  return rows;
}

/**
 * @param {Control} control - A native check box or radio button.
 * @param {Element} step - The step: its own legend is the title of the step, not of a group.
 * @returns {string} The legend of the group inside the step, else the name.
 */
function groupLabel(control, step) {
  const group = control.closest('fieldset');
  const legend = group && group !== step ? group.querySelector(':scope > legend') : null;
  return (legend?.textContent ?? '').replace(/\s+/g, ' ').trim() || nameOf(control);
}
