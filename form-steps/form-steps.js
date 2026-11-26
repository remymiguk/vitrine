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

  wire('a');
  wire('b');
})();
