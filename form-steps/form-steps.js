/* vt-form-steps demo. No framework: plain DOM. Submitted data and events are only ever written with textContent. */
(function () {
  'use strict';

  function formToJson(form) {
    var data = {};
    new FormData(form).forEach(function (v, k) {
      var val = v;
      if (typeof File !== 'undefined' && v instanceof File) {
        if (!v.name) return;
        val = v.name + ' (' + v.size + ' bytes)';
      }
      if (Object.prototype.hasOwnProperty.call(data, k)) {
        if (!Array.isArray(data[k])) data[k] = [data[k]];
        data[k].push(val);
      } else {
        data[k] = val;
      }
    });
    return data;
  }

  function wire(suffix) {
    var form = document.getElementById('form-' + suffix);
    var out = document.getElementById('out-' + suffix);
    var log = document.getElementById('log-' + suffix);
    var seq = 0;

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      out.textContent = JSON.stringify(formToJson(form), null, 2);
    });

    form.addEventListener('vt-step', function (ev) {
      var d = ev.detail || {};
      var empty = log.querySelector('.empty');
      if (empty) empty.remove();
      var li = document.createElement('li');
      var n = document.createElement('span'); n.className = 'n'; n.textContent = '#' + (++seq);
      var name = document.createElement('span'); name.className = 'ev'; name.textContent = 'vt-step';
      var code = document.createElement('code');
      code.textContent = d.from + ' → ' + d.to + (d.title ? ' (' + d.title + ')' : '');
      li.append(n, name, code);
      log.prepend(li);
    });
  }

  // Native check boxes have no "at least one" rule: the first box of a required group carries it.
  function initGroups() {
    document.querySelectorAll('fieldset.choices').forEach(function (g) {
      var inputs = Array.prototype.slice.call(g.querySelectorAll('input'));
      var err = g.querySelector('.choice-error');
      var isCheck = g.dataset.group === 'checkbox';
      var req = g.hasAttribute('data-required');
      function sync() {
        var ok = !inputs.some(function (i) { return i.checked; });
        if (isCheck && req) inputs[0].setCustomValidity(ok ? 'Choose at least one option.' : '');
        if (!g.hasAttribute('data-invalid')) return;
        var bad = inputs.some(function (i) { return !i.validity.valid; });
        if (!bad) show(false, '');
      }
      function show(bad, msg) {
        if (bad) { g.setAttribute('data-invalid', ''); err.textContent = msg; err.hidden = false; }
        else { g.removeAttribute('data-invalid'); err.textContent = ''; err.hidden = true; }
        inputs.forEach(function (i) {
          if (bad) i.setAttribute('aria-describedby', err.id); else i.removeAttribute('aria-describedby');
          i.setAttribute('aria-invalid', bad ? 'true' : 'false');
        });
      }
      inputs.forEach(function (i) {
        i.addEventListener('invalid', function () { show(true, i.validationMessage || 'Choose an option.'); });
        i.addEventListener('change', function () {
          sync();
          if (inputs.every(function (x) { return x.validity.valid; })) show(false, '');
        });
      });
      sync();
    });
  }

  initGroups();
  wire('a');
  wire('b');
})();
