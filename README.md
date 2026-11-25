# vt-questionnaire demo

Static demo page for the `<vt-questionnaire>` Vitrine component (PR #45, issue #44), meant for GitHub Pages at https://remymiguk.github.io/vitrine/.

- No framework, no build step, no CDN. Open `index.html` through any static server (`python -m http.server`).
- `vitrine/` is a trimmed copy of Vitrine v0.14.0 `dist/` (branch `feat/questionnaire`): the loader, `vitrine.css` and only the ES modules this page requests (`vt-questionnaire`, `vt-json` and their shared chunks).
- `demo.js` holds the questions (English and French) and the controls; `demo.css` the page styling.
- Event data is written to the page with `textContent` only.
