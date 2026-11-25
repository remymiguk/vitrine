/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{b as l,d}from"./chunk-CDLFL5U7.js";import{c as s,e as o,j as n,o as a}from"./chunk-JAZI474S.js";import{q as c}from"./chunk-SCKP2KTO.js";var u=`/* <vt-typing>: three dots, bouncing (dots, bubble) or rising in a wave. */
.dots,
.bubble {
  display: inline-flex;
  align-items: center;
  gap: calc(var(--_ind-size) * 0.3);
}

.bubble {
  padding: calc(var(--_ind-size) * 0.65) calc(var(--_ind-size) * 0.9);
  border-radius: calc(var(--_ind-size) * 1.2);
  border-end-start-radius: calc(var(--_ind-size) * 0.3);
  background: var(--vt-typing-bubble, var(--_surface-sunken, #eee));
}

.dot {
  width: calc(var(--_ind-size) * 0.45);
  height: calc(var(--_ind-size) * 0.45);
  border-radius: 50%;
  background: var(--_ind-color);
  animation: vt-typing-bounce calc(var(--_ind-duration) * 1.3) ease-in-out infinite;
}

.dot:nth-child(2) {
  animation-delay: calc(var(--_ind-duration) * 0.18);
}

.dot:nth-child(3) {
  animation-delay: calc(var(--_ind-duration) * 0.36);
}

@keyframes vt-typing-bounce {
  0%,
  60%,
  100% {
    opacity: 0.45;
    transform: translateY(0);
  }

  30% {
    opacity: 1;
    transform: translateY(-40%);
  }
}

.indicator[data-type='wave'] .dot {
  animation-name: vt-typing-wave;
}

@keyframes vt-typing-wave {
  0%,
  100% {
    opacity: 0.4;
    transform: scale(0.7);
  }

  50% {
    opacity: 1;
    transform: scale(1.15);
  }
}

.indicator[data-motion='reduce'] .dot {
  animation-name: vt-fade;
}

.indicator-text {
  font-style: italic;
}
`;var h=["dots","wave","bubble"],b=class extends d{static type="typing";static componentAttributes=["type","name","show-text","text"];static styles=[u];static defaultSize="sm";sentence(){let t=n(this.getAttribute("text"));if(t)return t;let e=(this.getAttribute("name")??"").split(",").map(i=>n(i,60)).filter(Boolean);return e.length?e.length===1?this.t("loadingTyping",{name:e[0]}):e.length===2?this.t("loadingTypingTwo",{names:new Intl.ListFormat(this.locale,{type:"conjunction"}).format(e)}):this.t("loadingTypingMany",{count:c(e.length,this.locale)}):this.t("loadingTypingSomeone")}draw(t){if(this.hasAttribute("tone")||(t.dataset.tone="neutral"),!this.shown){t.replaceChildren(),t.removeAttribute("role");return}let e=o(this.getAttribute("type"),h,"bubble"),i=this.sentence();t.dataset.type=e,t.setAttribute("role","status"),t.setAttribute("aria-label",n(this.getAttribute("label"))||i);let r=Array.from({length:3},()=>a("span",{class:"dot",part:"dot"})),p=e==="bubble"?a("span",{class:"bubble",part:"bubble",attrs:{"aria-hidden":"true"}},...r):a("span",{class:"dots",attrs:{"aria-hidden":"true"}},...r);t.replaceChildren(...l([p,s(this.getAttribute("show-text"))?a("span",{class:"indicator-text",part:"text",text:i,attrs:{"aria-hidden":"true"}}):null]))}};export{b as a};
