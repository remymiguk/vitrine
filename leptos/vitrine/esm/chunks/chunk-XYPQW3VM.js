/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as m,b as y,c as _}from"./chunk-2SXY6GKO.js";import{a as x,d as k}from"./chunk-CDLFL5U7.js";import{O as v,c as d,e as c,j as b,o}from"./chunk-JAZI474S.js";var A=`/* <vt-loading-button>: a native button styled with theme tokens; spinner and text inside. */
.indicator {
  display: inline-flex;
}

.indicator.block {
  display: flex;
}

:host([block]) {
  display: block;
}

.button {
  display: inline-flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: var(--_space-2);
  min-height: 36px;
  padding: 0 var(--_space-4);
  border: 1px solid transparent;
  border-radius: var(--_radius-sm, 6px);
  background: var(--_accent);
  color: var(--_on-accent, #fff);
  font: inherit;
  font-weight: 600;
  line-height: 1.2;
  cursor: pointer;
  transition:
    background-color 0.15s ease,
    opacity 0.15s ease;
}

.button:hover {
  background: color-mix(in srgb, var(--_accent) 88%, var(--_fg));
}

.button:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.button:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.indicator.loading .button {
  cursor: progress;
}

.indicator[data-variant='secondary'] .button {
  border-color: var(--_border-strong, var(--_border));
  background: var(--_surface, transparent);
  color: var(--_fg);
}

.indicator[data-variant='secondary'] .button:hover {
  background: var(--_surface-sunken);
}

.indicator[data-variant='ghost'] .button {
  background: transparent;
  color: var(--_accent-fg, var(--_accent));
}

.indicator[data-variant='ghost'] .button:hover {
  background: var(--_accent-soft);
}

.indicator[data-variant='danger'] .button {
  background: var(--_danger);
  color: #fff;
}

.indicator[data-variant='danger'] .button:hover {
  background: color-mix(in srgb, var(--_danger) 85%, #000);
}

/* The spinner takes the text color of the button. */
.button .spinner {
  --_ind-color: currentColor;
  --_ind-track: color-mix(in srgb, currentColor 28%, transparent);
  --_ind-size: 1.05em;
}

.indicator[data-place='replace'] .button {
  display: inline-grid;
  grid-template-areas: 'stack';
}

.indicator[data-place='replace'] .button > * {
  grid-area: stack;
  justify-self: center;
}

.ghost {
  visibility: hidden;
}

.indicator[data-outcome='success'] .button {
  background: var(--_success);
  color: #fff;
}

.indicator[data-outcome='error'] .button {
  background: var(--_danger);
  color: #fff;
}

.button svg {
  width: 1.1em;
  height: 1.1em;
}

.indicator[data-motion='reduce'] .button {
  transition: none;
}

@media (forced-colors: active) {
  .button {
    border-color: ButtonText;
  }
}
`;var D=["primary","secondary","ghost","danger"],L=["start","end","replace"],P=["button","submit","reset"],C=class extends k{static type="loading-button";static componentAttributes=["loading","loading-text","success-text","error-text","reset-after","spinner","spinner-position","variant","type","disabled","block"];static styles=[m,A];static defaultSize="sm";constructor(){super(),this.outcome=null,this.outcomeTimer=void 0,this.button=o("button",{class:"button",part:"button",attrs:{type:"button"}}),this.button.addEventListener("click",t=>{if(this.active||this.isDisabled){t.preventDefault(),t.stopImmediatePropagation();return}let e=c(this.getAttribute("type"),P,"button"),i=this.closest("form");i&&e==="submit"?i.requestSubmit():i&&e==="reset"&&i.reset()}),this.addEventListener("click",t=>{(this.active||this.isDisabled)&&t.stopImmediatePropagation()},!0)}get isDisabled(){return d(this.getAttribute("disabled"))??!1}get active(){return this.activeState??d(this.getAttribute("loading")??this.getAttribute("active"))??!1}set active(t){super.active=t}get loading(){return this.active}set loading(t){this.active=!!t}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t==="loading"?"active":t,e,i)}track(t){clearTimeout(this.outcomeTimer),this.outcome=null,this.loading=!0;let e=i=>{this.loading=!1,this.getAttribute(`${i}-text`)&&(this.outcome=i,this.render(),this.outcomeTimer=setTimeout(()=>{this.outcome=null,this.render()},x(this.getAttribute("reset-after"),2e3)))};return t.then(()=>e("success"),()=>e("error")),t}focus(){this.button.focus()}disconnectedCallback(){clearTimeout(this.outcomeTimer),super.disconnectedCallback()}draw(t){let e=this.active,i=this.shown,g=c(this.getAttribute("variant"),D,"primary"),s=c(this.getAttribute("spinner-position"),L,"start");t.dataset.variant=g,t.dataset.place=s,t.dataset.outcome=this.outcome??"",t.classList.toggle("block",d(this.getAttribute("block"))??!1),t.classList.toggle("loading",i);let a=this.button;a.disabled=this.isDisabled,a.setAttribute("aria-busy",String(e)),e?a.setAttribute("aria-disabled","true"):a.removeAttribute("aria-disabled");let T=b(this.getAttribute("label")),p=o("slot",{}),r=b(this.getAttribute("loading-text"),80),n=this.outcome?b(this.getAttribute(`${this.outcome}-text`),80):"",S=c(this.getAttribute("spinner"),y,"ring"),l;if(i){let u=_(S),f=s==="replace"?null:r?o("span",{class:"text",part:"text",text:r}):o("span",{class:"text"},p),w=s==="replace"?o("span",{class:"text ghost",attrs:{"aria-hidden":"true"}},p):null;l=s==="end"?[f,u]:[u,f,w]}else n?l=[v(this.outcome==="success"?"check":"alert"),o("span",{class:"text",part:"text",text:n})]:l=[o("span",{class:"text"},p)];a.replaceChildren(...l.filter(u=>u!==null));let h=(this.textContent??"").trim();(i?s==="replace"?"":r||h:n||h)?a.removeAttribute("aria-label"):a.setAttribute("aria-label",T||(i?r:"")||h||this.t("loadingLabel")),t.contains(a)||t.replaceChildren(a),i&&r?this.announce(r):n&&this.announce(n)}announce(t){let e=this.root.querySelector(".sr-only");e||(e=o("span",{class:"sr-only",attrs:{"aria-live":"polite"}}),this.root.append(e)),e.textContent!==t&&(e.textContent=t)}};export{C as a};
