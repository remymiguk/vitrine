# Vitrine demos

Static demo pages for pending pull requests to ecrou-exact/vitrine, published with GitHub Pages at https://remymiguk.github.io/vitrine/.

- `index.html` lists the demos: `form-steps/` (`<vt-form-steps>`, branch `feat/form-steps`) and `field-validity/` (validity for `vt-tags`, `vt-icon-picker` and `vt-secret`, branch `feat/field-validity`).
- Each demo folder is self-contained: its page, css and js, and a trimmed copy of the Vitrine `dist/` in its own `vitrine/` folder. No framework, no build step, no CDN; serve with any static server (`python -m http.server`).
