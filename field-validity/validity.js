'use strict';
const out = document.getElementById('out');
const form = document.getElementById('f');
const label = (el) => el.getAttribute('label') || el.id;

function describe(el, action, result) {
  const v = el.validity;
  return `${label(el)}.${action}() -> ${result}\n` +
    `  validity.valueMissing: ${v.valueMissing}\n` +
    `  validity.valid: ${v.valid}\n` +
    `  validationMessage: ${JSON.stringify(el.validationMessage)}`;
}

document.addEventListener('click', (ev) => {
  const btn = ev.target instanceof Element ? ev.target.closest('button[data-check], button[data-report]') : null;
  if (!btn) return;
  const isCheck = btn.hasAttribute('data-check');
  const el = document.getElementById(btn.dataset.check || btn.dataset.report);
  if (typeof el.checkValidity !== 'function') {
    out.textContent = `${el.localName} is not ready yet.`;
    return;
  }
  const result = isCheck ? el.checkValidity() : el.reportValidity();
  out.textContent = describe(el, isCheck ? 'checkValidity' : 'reportValidity', result);
});

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const data = {};
  for (const [k, v] of new FormData(form)) data[k] = v;
  out.textContent = 'Submitted\n' + JSON.stringify(data, null, 2);
});

let firstInvalid = true;
form.addEventListener('click', (ev) => {
  if (ev.target instanceof Element && ev.target.closest('button[type=submit]')) firstInvalid = true;
});
form.addEventListener('invalid', (ev) => {
  if (!firstInvalid) return;
  firstInvalid = false;
  out.textContent = `Submit blocked: ${label(ev.target)} is invalid.\n  validationMessage: ${JSON.stringify(ev.target.validationMessage)}`;
}, true);

form.addEventListener('reset', () => { out.textContent = 'Form reset.'; });
