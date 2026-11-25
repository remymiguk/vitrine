/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{aa as s,c as h,e as d,i as u,j as p,l as m,o as f}from"./chunk-JAZI474S.js";import{h as g,k as r,l as a,m as v,o as y,p as c,r as b,w as S,x as T}from"./chunk-SCKP2KTO.js";var w=`/*
 * Shared by every loading indicator: host display, size, tone, speed and reduced motion.
 * Hosts can set --vt-indicator-color, --vt-indicator-track, --vt-indicator-size and
 * --vt-indicator-duration on the element or on an ancestor.
 */
:host {
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
}

:host([hidden]) {
  display: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.indicator {
  --_ind-size: var(--vt-indicator-size, var(--_size, 24px));
  --_ind-duration: calc(var(--vt-indicator-duration, 1s) * var(--_speed, 1));
  --_ind-color: var(--vt-indicator-color, var(--_accent));
  --_ind-track: var(--vt-indicator-track, color-mix(in srgb, var(--_ind-color) 18%, transparent));
  /* Indicators have no background: their text takes the page's color, so it reads on any
     background; the theme colors the shapes. Secondary text is dimmed with opacity. */
  --_dim: 0.78;
  color: inherit;
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.indicator.block {
  display: block;
}

.indicator.inline-block {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-2);
}

.indicator[data-tone='neutral'] {
  --_ind-color: var(--vt-indicator-color, var(--_fg-muted));
}

.indicator[data-tone='success'] {
  --_ind-color: var(--vt-indicator-color, var(--_success));
}

.indicator[data-tone='warning'] {
  --_ind-color: var(--vt-indicator-color, var(--_warning));
}

.indicator[data-tone='danger'] {
  --_ind-color: var(--vt-indicator-color, var(--_danger));
}

.indicator[data-tone='info'] {
  --_ind-color: var(--vt-indicator-color, var(--_info));
}

.indicator[data-tone='current'] {
  --_ind-color: var(--vt-indicator-color, currentColor);
  color: inherit;
}

:host([tone='current']) .indicator {
  color: inherit;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}

.indicator-text {
  color: inherit;
  opacity: var(--_dim);
  font-size: var(--_font-size-ui);
  line-height: 1.4;
}

:host([tone='current']) .indicator-text {
  color: inherit;
}

/* Reduced motion: slower animations; each indicator also swaps movement for a fade. */
.indicator[data-motion='reduce'] * {
  animation-duration: calc(var(--_ind-duration) * 3) !important;
}

@keyframes vt-fade {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.45;
  }
}

@keyframes vt-rotate {
  to {
    transform: rotate(360deg);
  }
}

@keyframes vt-pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(0.75);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes vt-shimmer {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
}

@media (forced-colors: active) {
  .indicator {
    --_ind-color: CanvasText;
    --_ind-track: GrayText;
  }
}
`;var _=Object.freeze({loadingLabel:"Loading",loadingProgressLabel:"Progress",loadingPageLabel:"Page loading",loadingPercent:"{percent}%",loadingFraction:"{value} of {max}",loadingCancel:"Cancel",loadingDone:"Done",loadingFailed:"Failed",loadingComplete:"Complete",loadingElapsed:"{time} elapsed",loadingSlow:"This is taking longer than usual\u2026",loadingTyping:"{name} is typing\u2026",loadingTypingTwo:"{names} are typing\u2026",loadingTypingSomeone:"Someone is typing\u2026",loadingTypingMany:"{count} people are typing\u2026",loadingStepOf:"Step {current} of {total}",loadingStepsDone:"{done} of {total} done",loadingStepsTitle:"Tasks",loadingStatus_pending:"Pending",loadingStatus_running:"Running",loadingStatus_done:"Done",loadingStatus_error:"Failed",loadingStatus_skipped:"Skipped",loadingStatus_warning:"Done with warnings"}),x=Object.freeze({loadingLabel:"Chargement",loadingProgressLabel:"Progression",loadingPageLabel:"Chargement de la page",loadingPercent:"{percent} %",loadingFraction:"{value} sur {max}",loadingCancel:"Annuler",loadingDone:"Termin\xE9",loadingFailed:"\xC9chec",loadingComplete:"Termin\xE9",loadingElapsed:"{time} \xE9coul\xE9es",loadingSlow:"Cela prend plus de temps que d\u2019habitude\u2026",loadingTyping:"{name} est en train d\u2019\xE9crire\u2026",loadingTypingTwo:"{names} sont en train d\u2019\xE9crire\u2026",loadingTypingSomeone:"Quelqu\u2019un est en train d\u2019\xE9crire\u2026",loadingTypingMany:"{count} personnes sont en train d\u2019\xE9crire\u2026",loadingStepOf:"\xC9tape {current} sur {total}",loadingStepsDone:"{done} sur {total} termin\xE9es",loadingStepsTitle:"T\xE2ches",loadingStatus_pending:"En attente",loadingStatus_running:"En cours",loadingStatus_done:"Termin\xE9e",loadingStatus_error:"\xC9chec",loadingStatus_skipped:"Ignor\xE9e",loadingStatus_warning:"Termin\xE9e avec des avertissements"});v({en:_,fr:x});var A=Object.freeze({xs:"12px",sm:"16px",md:"24px",lg:"36px",xl:"56px"}),P=["accent","neutral","success","warning","danger","info","current"],E=Object.freeze({slow:1.6,normal:1,fast:.6}),O=["auto","full","reduce"],D=Object.freeze(["theme","lang-ui","label","size","tone","speed","motion","active","delay","min-duration"]);function l(n,t,e=6e5){let i=/^\s*(\d{1,7}(?:\.\d{1,3})?)\s*(ms|s)?\s*$/i.exec(n??"");if(!i)return t;let o=Number(i[1])*(i[2]?.toLowerCase()==="s"?1e3:1);return Math.min(o,e)}function Z(n){return n.filter(t=>t!=null&&t!==!1)}function U(n){if(n===null||n.trim()==="")return null;let t=Number(n);return Number.isFinite(t)?t:null}var C=class extends HTMLElement{static type="indicator";static componentAttributes=[];static styles=[];static defaultSize="md";static display="inline-block";static get observedAttributes(){return[...D,...this.componentAttributes]}constructor(){super(),this.root=this.attachShadow({mode:"open"});let t=this.constructor;this.root.adoptedStyleSheets=[s(m),b,s(w),...t.styles.map(s)],this.frame=f("div",{class:`vt indicator ${t.display}`,part:"indicator"}),this.root.append(this.frame),this.t=c("en"),this.shown=!1,this.activeState=null,this.shownAt=0,this.showTimer=void 0,this.hideTimer=void 0,this.cleanups=[],this.renderQueued=!1,this.readyFired=!1}connectedCallback(){for(let t of["active","value","max","steps","messages","content"])this.upgradeProperty(t);this.cleanups.push(S(()=>this.applyTheme()),y(()=>this.requestRender())),this.render(),this.syncActive(!0),this.readyFired||(this.readyFired=!0,a(this,r.READY,{type:this.constructor.type}))}disconnectedCallback(){for(let t of this.cleanups.splice(0))t();clearTimeout(this.showTimer),clearTimeout(this.hideTimer),this.stopped()}upgradeProperty(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}attributeChangedCallback(t,e,i){e===i||!this.isConnected||(t==="active"?(this.activeState=null,this.syncActive(!1)):t==="theme"?this.applyTheme():this.requestRender())}get active(){return this.activeState??h(this.getAttribute("active"))??!0}set active(t){this.activeState=!!t,this.syncActive(!1)}start(){this.active=!0}stop(){this.active=!1}syncActive(t){if(clearTimeout(this.showTimer),clearTimeout(this.hideTimer),this.active){if(this.shown)return;let o=l(this.getAttribute("delay"),0);o>0?this.showTimer=setTimeout(()=>this.setShown(!0),o):this.setShown(!0,t),o>0&&this.render();return}if(!this.shown){this.render();return}let e=l(this.getAttribute("min-duration"),0),i=this.shownAt+e-performance.now();i>0?this.hideTimer=setTimeout(()=>this.setShown(!1),i):this.setShown(!1)}setShown(t,e=!1){if(this.shown===t)return;this.shown=t;let i=this.constructor;t?(this.shownAt=performance.now(),this.started(),e||a(this,r.LOADING_START,{type:i.type})):(this.stopped(),a(this,r.LOADING_END,{type:i.type,duration:Math.round(performance.now()-this.shownAt)})),this.render()}started(){}stopped(){}get locale(){let t=this.getAttribute("lang-ui")?.trim();return t&&/^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/.test(t)?t:g().lang}labelText(t="loadingLabel"){return p(this.getAttribute("label"))||this.t(t)}get motion(){let t=d(this.getAttribute("motion"),O,"auto");return t!=="auto"?t:typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches?"reduce":"full"}requestRender(){this.renderQueued||(this.renderQueued=!0,queueMicrotask(()=>{this.renderQueued=!1,this.isConnected&&this.render()}))}applyTheme(){this.frame.dataset.theme=T(this.getAttribute("theme"))}render(){let t=this.constructor;this.t=c(this.locale),this.applyTheme();let e=this.frame.style,i=this.getAttribute("size")?.trim().toLowerCase()??"",o=A[i]??u(this.getAttribute("size"))??A[t.defaultSize];e.setProperty("--_size",o);let k=this.getAttribute("speed")?.trim().toLowerCase()??"",z=E[k]??(this.hasAttribute("speed")?l(this.getAttribute("speed"),1e3,6e4)/1e3:1);e.setProperty("--_speed",String(z)),this.frame.dataset.tone=d(this.getAttribute("tone"),P,"accent"),this.frame.dataset.motion=this.motion,this.frame.dataset.shown=String(this.shown),this.toggleAttribute("data-shown",this.shown),this.draw(this.frame)}draw(t){}};export{l as a,Z as b,U as c,C as d};
