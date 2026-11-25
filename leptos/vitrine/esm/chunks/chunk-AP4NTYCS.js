/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as y,b as k,c as A}from"./chunk-2SXY6GKO.js";import{c as h,d as _}from"./chunk-CDLFL5U7.js";import{c,e as d,j as s,o as e}from"./chunk-JAZI474S.js";import{k as f,l as g,q as x}from"./chunk-SCKP2KTO.js";var w=`/*
 * <vt-loading-overlay>: the content in a positioned box, the overlay above it. The scrim
 * dims (light, dark) or blurs the content; the panel holds the spinner and the message.
 */
:host {
  display: block;
}

.indicator {
  position: relative;
  display: block;
  --_scrim: var(--vt-overlay-scrim, color-mix(in srgb, var(--_surface, #fff) 72%, transparent));
}

.indicator[data-shown='true']:not(.fullscreen) {
  /* Room for the panel, even over a short content. */
  min-height: var(--vt-overlay-min-height, 140px);
}

.indicator[data-scrim='dark'] {
  --_scrim: var(--vt-overlay-scrim, rgb(10 12 16 / 55%));
}

.indicator[data-scrim='none'] {
  --_scrim: transparent;
}

.overlay {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 10;
  display: grid;
  place-items: center;
  padding: var(--_space-4);
  border-radius: inherit;
  background: var(--_scrim);
  animation: vt-overlay-in 0.18s ease-out;
}

.indicator[data-scrim='blur'] .overlay {
  backdrop-filter: blur(4px) saturate(0.8);
}

.indicator.fullscreen .overlay {
  position: fixed;
  z-index: 2147483000;
}

.panel {
  display: grid;
  justify-items: center;
  gap: var(--_space-3);
  max-width: min(360px, 100%);
  padding: var(--_space-4) var(--_space-5);
  border: 1px solid var(--_border);
  border-radius: var(--_radius, 10px);
  /* A solid card: the text keeps its contrast whatever the scrim lets through. */
  background: var(--_surface, #fff);
  color: var(--_fg);
  text-align: center;
  outline: none;
}

.indicator[data-scrim='dark'] .panel,
.indicator.fullscreen .panel {
  box-shadow: var(--_shadow, 0 8px 24px rgb(0 0 0 / 15%));
}

.panel .indicator-text {
  margin: 0;
  opacity: 1;
  font-weight: 550;
}

.overlay-progress {
  width: min(240px, 60vw);
  height: 6px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--_ind-track);
}

.overlay-bar {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--_ind-color);
  transform: scaleX(var(--_ratio));
  transform-origin: left center;
  transition: transform 0.25s ease;
}

.overlay-cancel {
  padding: 6px 14px;
  border: 1px solid var(--_border-strong, var(--_border));
  border-radius: var(--_radius-sm, 6px);
  background: var(--_surface, #fff);
  color: var(--_fg);
  font: inherit;
  cursor: pointer;
}

.overlay-cancel:hover {
  background: var(--_surface-sunken);
}

.overlay-cancel:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

@keyframes vt-overlay-in {
  from {
    opacity: 0;
  }
}

.indicator[data-motion='reduce'] .overlay {
  animation: none;
}

@media (forced-colors: active) {
  .overlay {
    background: Canvas;
    opacity: 0.92;
  }
}
`;var P=["light","dark","blur","none"],C=class extends _{static type="loading-overlay";static componentAttributes=["text","spinner","value","max","scrim","cancelable","cancel-text","fullscreen"];static styles=[y,w];static display="block";static defaultSize="lg";constructor(){super(),this.contentBox=e("div",{class:"content",part:"content"},e("slot",{})),this.madeInert=new Map,this.focusPanel=!1,this.observer=null}connectedCallback(){this.observer=new MutationObserver(()=>{this.shown&&!this.hasAttribute("fullscreen")&&this.setInert(!0)}),this.observer.observe(this,{childList:!0}),super.connectedCallback()}disconnectedCallback(){this.observer?.disconnect(),this.observer=null,super.disconnectedCallback()}started(){this.contains(document.activeElement)&&!this.hasAttribute("fullscreen")&&(this.focusPanel=!0)}stopped(){this.setInert(!1)}setInert(r){if(r){for(let t of this.children)this.madeInert.has(t)||(this.madeInert.set(t,t.hasAttribute("inert")),t.setAttribute("inert",""));return}for(let[t,a]of this.madeInert)a||t.removeAttribute("inert");this.madeInert.clear()}draw(r){let t=this.shown,a=c(this.getAttribute("fullscreen"))??!1;if(r.classList.toggle("fullscreen",a),r.dataset.scrim=d(this.getAttribute("scrim"),P,"light"),this.toggleAttribute("aria-busy",t),this.setInert(t&&!a),!t){r.replaceChildren(this.contentBox);return}let u=this.t,i=s(this.getAttribute("text")),p=this.getAttribute("spinner")==="none"?null:d(this.getAttribute("spinner"),k,"ring"),n=h(this.getAttribute("value")),o=Math.max(1,h(this.getAttribute("max"))??100),l=null;if(n!==null){let m=Math.min(1,Math.max(0,n/o)),S=u("loadingPercent",{percent:x(Math.round(m*100),this.locale)});l=e("div",{class:"overlay-progress",part:"progress",attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":String(o),"aria-valuenow":String(Math.min(o,Math.max(0,n))),"aria-valuetext":S,"aria-label":i||this.labelText()}},e("span",{class:"overlay-bar"})),l.style.setProperty("--_ratio",String(m))}let v=c(this.getAttribute("cancelable"))?e("button",{class:"overlay-cancel",part:"cancel",text:s(this.getAttribute("cancel-text"),40)||u("loadingCancel"),attrs:{type:"button"},on:{click:()=>g(this,f.CANCEL,{})}}):null,b=e("div",{class:"panel",part:"panel",attrs:{role:"status","aria-label":s(this.getAttribute("label"))||i||this.labelText(),tabindex:"-1"}},p?A(p):null,i?e("p",{class:"indicator-text",part:"text",text:i}):null,l,v),I=e("div",{class:"overlay",part:"overlay"},b);r.replaceChildren(this.contentBox,I),this.focusPanel&&(this.focusPanel=!1,(v??b).focus())}};export{C as a};
