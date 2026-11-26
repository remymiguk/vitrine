/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{O as m,_ as k,ba as _,e as b,o as n,q as w}from"./chunk-S3QITEAU.js";import{k as S,l as x,m as y,q as d}from"./chunk-YO2QXVHP.js";var E=`/*
 * <vt-form-steps>: a progress indicator, the current step (the page's own fieldset, slotted),
 * and the buttons. Colors, sizes and radii come from the tokens only, so every theme works.
 */
:host {
  display: block;
}

.fs-body {
  display: grid;
  gap: var(--_space-4);
  padding: var(--_space-4) var(--_space-5);
  color: var(--_fg);
  container-type: inline-size;
}

/* ---------- The steps (the page's fieldsets) ---------- */

.stage {
  display: grid;
  min-width: 0;
}

/* The legend (the step title) sits in the fieldset's top border, which the shadow CSS cannot reach;
   the top padding is what separates it from the first field. */
::slotted(fieldset) {
  min-width: 0;
  margin: 0;
  padding: var(--_space-3) 0 0;
  border: 0;
}

/* The page's own style (\`fieldset { display: grid }\`) must not bring a hidden step back. */
::slotted(fieldset[hidden]) {
  display: none !important;
}

::slotted(fieldset:focus-visible) {
  outline: 2px solid var(--_accent);
  outline-offset: 3px;
}

/* ---------- Progress ---------- */

.progress {
  display: grid;
  gap: var(--_space-2);
}

.progress-text {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
}

.bar {
  height: 6px;
  overflow: hidden;
  border-radius: var(--_radius-full);
  background: var(--_surface-sunken);
}

.bar-fill {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--_accent);
  inline-size: calc(var(--_ratio, 0) * 100%);
  transition: inline-size 0.25s ease;
}

/* The list of steps looks like the horizontal <vt-loading-steps>: a mark per step, joined by a line. */
.progress-steps {
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  margin: 0;
  padding: 0;
  list-style: none;
}

.progress-item {
  position: relative;
  display: grid;
  justify-items: center;
  min-width: 0;
}

.progress-item:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 13px;
  inset-inline-start: calc(50% + 18px);
  inset-inline-end: calc(-50% + 18px);
  border-top: 2px solid var(--_border);
}

.progress-item.done:not(:last-child)::after {
  border-color: var(--_success);
}

.progress-link {
  display: grid;
  justify-items: center;
  gap: var(--_space-1);
  max-width: 100%;
  padding: 0 var(--_space-1);
  border: 0;
  border-radius: var(--_radius-sm);
  background: transparent;
  color: var(--_fg-muted);
  font: inherit;
  font-size: var(--_font-size-small);
  text-align: center;
}

button.progress-link {
  cursor: pointer;
}

button.progress-link:hover {
  color: var(--_fg);
}

button.progress-link:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.step-name {
  max-width: 100%;
  overflow-wrap: anywhere;
}

.progress-link .mark {
  display: inline-grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  background: var(--_surface);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
}

.progress-link .mark[data-n]::before {
  content: attr(data-n);
}

.progress-link .icon {
  width: 14px;
  height: 14px;
}

.progress-item.done .mark {
  border-color: var(--_success);
  color: var(--_success);
}

.progress-item.current .progress-link {
  color: var(--_fg);
  font-weight: 650;
}

.progress-item.current .mark {
  border-color: var(--_accent);
  background: var(--_accent);
  color: var(--_on-accent);
}

/* Text for screen readers only: the full name of a step, and whether it is completed. */
.vh {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

/* In a narrow space only the current step keeps its name drawn; the others keep it for screen readers. */
@container (max-width: 30rem) {
  .progress-item:not(.current) .step-name {
    display: none;
  }
}

/* ---------- Buttons ---------- */

.nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--_space-2);
}

.nav-end {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2);
  margin-inline-start: auto;
}

.btn-fs {
  min-height: 36px;
  padding: 0 var(--_space-4);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: var(--_fg);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

.btn-fs:hover {
  background: var(--_accent-soft);
}

.btn-fs:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.btn-fs.primary {
  border-color: var(--_accent);
  background: var(--_accent);
  color: var(--_on-accent);
}

.btn-fs.primary:hover {
  background: var(--_accent);
  filter: brightness(0.94);
}

.btn-fs.ghost {
  border-color: transparent;
  background: transparent;
  color: var(--_accent-fg);
}

.btn-fs.ghost:hover {
  background: var(--_accent-soft);
}

/* ---------- Review ---------- */

.review {
  display: grid;
  gap: var(--_space-3);
}

.screen-title {
  margin: 0;
  font-size: 1.2em;
  font-weight: 650;
  line-height: 1.3;
  overflow-wrap: anywhere;
}

.screen-title:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 3px;
  border-radius: var(--_radius-sm);
}

.review-step {
  display: grid;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.review-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--_space-3);
  padding: var(--_space-2) var(--_space-3);
  border-bottom: 1px solid var(--_border);
  background: var(--_surface-sunken);
}

.review-title {
  margin: 0;
  font-size: 1em;
  font-weight: 650;
  overflow-wrap: anywhere;
}

.review-list {
  display: grid;
  margin: 0;
}

.review-row {
  display: grid;
  gap: var(--_space-1);
  padding: var(--_space-2) var(--_space-3);
}

.review-row + .review-row {
  border-top: 1px solid var(--_border);
}

.review-row > * {
  margin: 0;
}

.review-q {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.review-a {
  font-weight: 600;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.review-a.empty {
  color: var(--_fg-muted);
  font-style: italic;
  font-weight: 400;
}

@media (prefers-reduced-motion: reduce) {
  .bar-fill {
    transition: none;
  }
}
`;var R=Object.freeze({formStepsStepOf:"Step {current} of {total}",formStepsStepTitle:"Step {current} of {total}: {title}",formStepsStepName:"Step {current}",formStepsReviewStep:"Review",formStepsProgress:"Progress",formStepsSteps:"Steps",formStepsStepLabel:"Step {current}: {label}",formStepsCompleted:"completed",formStepsNext:"Next",formStepsBack:"Back",formStepsReview:"Review answers",formStepsSubmit:"Submit",formStepsEdit:"Edit",formStepsEditStep:"Edit: {label}",formStepsReviewTitle:"Review your answers",formStepsNoAnswer:"Not answered",formStepsYes:"Yes",formStepsNo:"No",formStepsNoSteps:"There are no steps to show."}),T=Object.freeze({formStepsStepOf:"\xC9tape {current} sur {total}",formStepsStepTitle:"\xC9tape {current} sur {total} : {title}",formStepsStepName:"\xC9tape {current}",formStepsReviewStep:"V\xE9rification",formStepsProgress:"Progression",formStepsSteps:"\xC9tapes",formStepsStepLabel:"\xC9tape {current} : {label}",formStepsCompleted:"termin\xE9e",formStepsNext:"Suivant",formStepsBack:"Retour",formStepsReview:"V\xE9rifier les r\xE9ponses",formStepsSubmit:"Envoyer",formStepsEdit:"Modifier",formStepsEditStep:"Modifier : {label}",formStepsReviewTitle:"V\xE9rifiez vos r\xE9ponses",formStepsNoAnswer:"Sans r\xE9ponse",formStepsYes:"Oui",formStepsNo:"Non",formStepsNoSteps:"Il n'y a aucune \xE9tape \xE0 afficher."});var q=new Set(["vt-password","vt-secret"]),F=new Set(["button","submit","reset","image","hidden"]);function H(r){return(r.querySelector(":scope > legend")?.textContent??"").replace(/\s+/g," ").trim()}function N(r){return[...r.children].filter(e=>e instanceof HTMLFieldSetElement).map(e=>({element:e,title:H(e)}))}function A(r,e){return r.length===e.length&&r.every((t,s)=>t.element===e[s].element&&t.title===e[s].title)}function M(r){return[...r.querySelectorAll("*")].filter(e=>{if(e instanceof HTMLFieldSetElement||e instanceof HTMLFormElement||e instanceof HTMLButtonElement||e instanceof HTMLOutputElement||e instanceof HTMLObjectElement)return!1;let t=e;return t.checkValidity instanceof Function&&t.reportValidity instanceof Function?!0:e.localName.includes("-")?customElements.get(e.localName)?.formAssociated===!0:!1})}function g(r){return M(r).filter(e=>e.checkValidity instanceof Function&&e.reportValidity instanceof Function)}function f(r){let e=r.name;return(typeof e=="string"?e:r.getAttribute("name")??"").trim()}function B(r){return r.disabled===!0||r.hasAttribute("disabled")||r.closest("fieldset[disabled]")!==null}function O(r){let e=r.labels;if(!e||!e.length)return"";let t=e[0].cloneNode(!0);for(let s of t.querySelectorAll("input, select, textarea, button, output, [name]"))s.remove();return String(t.textContent??"").replace(/\s+/g," ").trim()}function K(r){return r.getAttribute("label")?.trim()||O(r)||r.getAttribute("aria-label")?.trim()||f(r)}function $(r){return O(r)||r.value}function D(r,e){let t=r.localName;if(q.has(t)||r instanceof HTMLInputElement&&r.type==="password")return r.value?"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022":"";if(r instanceof HTMLSelectElement)return[...r.selectedOptions].map(l=>(l.textContent??"").trim()||l.value).join(", ");if(r instanceof HTMLInputElement&&r.type==="file")return[...r.files??[]].map(l=>l.name).join(", ");let s=r.value;if(typeof s=="boolean")return e(s?"formStepsYes":"formStepsNo");let i=r.options,a=l=>Array.isArray(i)?i.find(c=>c&&c.value===l)?.label??l:l;if(Array.isArray(s))return s.map(l=>a(String(l))).join(", ");let o=r.files;return Array.isArray(o)&&o.length?o.map(l=>l.name).join(", "):typeof s=="string"?a(s):s===void 0?"":String(s)}function P(r,e){let t=[],s=new Map;for(let i of M(r)){if(!f(i)||B(i)||i instanceof HTMLInputElement&&F.has(i.type))continue;if(!(i instanceof HTMLInputElement&&(i.type==="checkbox"||i.type==="radio"))){t.push({label:K(i),value:D(i,e)});continue}let a=`${i.type}:${f(i)}`,o=s.get(a);o||(o={row:{label:Y(i,r),value:""},picked:[]},s.set(a,o),t.push(o.row)),i.checked&&o.picked.push($(i)),o.row.value=o.picked.join(", ")}return t}function Y(r,e){let t=r.closest("fieldset");return((t&&t!==e?t.querySelector(":scope > legend"):null)?.textContent??"").replace(/\s+/g," ").trim()||f(r)}function L({kind:r,steps:e,index:t,text:s,t:i,onGo:a}){let o=e.filter(c=>!c.review).length;if(r==="bar"){let c=Math.min(t+1,Math.max(1,o)),p=n("div",{class:"bar",attrs:{role:"progressbar","aria-label":i("formStepsProgress"),"aria-valuemin":"1","aria-valuemax":String(Math.max(1,o)),"aria-valuenow":String(c),"aria-valuetext":s}},n("span",{class:"bar-fill"}));return p.style.setProperty("--_ratio",String(c/Math.max(1,o))),n("div",{class:"progress",part:"progress"},n("p",{class:"progress-text",text:s}),p)}let l=e.map((c,p)=>{let h=p===t,u=c.done&&!h,I=(c.review?c.label:i("formStepsStepLabel",{current:p+1,label:c.label}))+(u?`, ${i("formStepsCompleted")}`:""),v=[u?n("span",{class:"mark",attrs:{"aria-hidden":"true"}},m("check")):c.review?n("span",{class:"mark",attrs:{"aria-hidden":"true"}},m("list")):n("span",{class:"mark",attrs:{"aria-hidden":"true","data-n":String(p+1)}}),n("span",{class:"step-name",attrs:{"aria-hidden":"true"},text:c.label}),n("span",{class:"vh",text:I})];return n("li",{class:`progress-item${h?" current":""}${u?" done":""}${c.review?" review-entry":""}`,attrs:{"aria-current":h?"step":null}},c.reachable&&!h?n("button",{class:"progress-link",attrs:{type:"button"},on:{click:()=>a(p)}},...v):n("span",{class:"progress-link"},...v))});return n("div",{class:"progress",part:"progress"},n("p",{class:"progress-text",text:s}),n("ol",{class:"progress-steps",attrs:{"aria-label":i("formStepsSteps")}},...l))}function z({back:r,next:e,t,on:s}){let i=(a,o,l,c)=>n("button",{class:`btn-fs ${c}`,text:o,attrs:{type:"button","data-focus-key":a},on:{click:l}});return n("div",{class:"nav",part:"nav"},r?i("back",t("formStepsBack"),s.back,"secondary"):n("span"),n("span",{class:"nav-end"},i("next",e,s.next,"primary")))}function C({steps:r,t:e,onEdit:t}){let s=w("review"),i=r.map((a,o)=>n("div",{class:"review-step"},n("div",{class:"review-head"},n("h3",{class:"review-title",text:a.title}),n("button",{class:"btn-fs ghost",attrs:{type:"button","aria-label":e("formStepsEditStep",{label:a.title})},on:{click:()=>t(o)}},e("formStepsEdit"))),n("dl",{class:"review-list"},...a.rows.map(l=>n("div",{class:"review-row"},n("dt",{class:"review-q",text:l.label}),n("dd",{class:`review-a${l.value?"":" empty"}`,text:l.value||e("formStepsNoAnswer")}))))));return n("section",{class:"review",part:"review",attrs:{"aria-labelledby":s}},n("h2",{class:"screen-title",text:e("formStepsReviewTitle"),attrs:{id:s,tabindex:"-1"}}),...i)}y({en:R,fr:T});var W=["none","bar","steps"],G=new Set(["button","submit","reset","image","file","hidden","color","range"]),J=new Set(["vt-field","vt-password"]),V=class extends _{static type="form-steps";static allowEmpty=!0;static componentAttributes=Object.freeze(["progress","review"]);static presets={simple:{review:!1},full:{review:!0}};static styles=[E];constructor(){super(),this.list=[],this.index=0,this.at=null,this.reached=new Set,this.reviewReached=!1,this.passed=new Set,this.returnToEnd=!1,this.tabbed=new WeakSet,this.pendingFocus=null,this.stage=n("slot",{}),this.addEventListener("keydown",e=>this.onKeydown(e))}get step(){return this.index}get steps(){return this.list.length}get form(){return this.closest("form")}get hasReview(){return this.list.length>0&&this.feature("review")}lastPosition(){return Math.max(0,this.hasReview?this.list.length:this.list.length-1)}current(){return this.list[this.index]}refresh(){let e=N(this);if(A(this.list,e))return!1;let t=this.list.length>0&&this.index>=this.list.length;for(let i of this.list)e.some(a=>a.element===i.element)||this.release(i.element);if(this.list=e,t&&this.hasReview)this.index=e.length;else{let i=this.at?e.findIndex(a=>a.element===this.at):-1;this.index=i>=0?i:Math.min(this.index,this.lastPosition())}this.at=e[this.index]?.element??null;let s=new Set(e.map(i=>i.element));return this.passed=new Set([...this.passed].filter(i=>s.has(i))),this.reached=new Set([...this.reached].filter(i=>s.has(i))),this.hasReview||(this.reviewReached=!1),this.requestRender(),!0}release(e){e.removeAttribute("hidden"),e.removeAttribute("inert");let t=e.querySelector(":scope > legend");t&&this.tabbed.has(t)&&(t.removeAttribute("tabindex"),this.tabbed.delete(t))}reload(){this.loading=!1,this.error=null,this.refresh(),this._readyPending=!0,this.requestRender()}connectedCallback(){super.connectedCallback();let e=this;e._observer?.disconnect(),e._observer=new MutationObserver(t=>{t.some(s=>this.affectsSteps(s.target))&&this.refresh()}),e._observer.observe(this,{childList:!0,characterData:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback();for(let e of this.list)this.release(e.element)}affectsSteps(e){return e===this?!0:(e instanceof Element?e:e.parentElement)?.closest("legend")?.parentElement?.parentElement===this}focus(e){let t=this.current();if(!t){this.root.querySelector("h2")?.focus(e);return}(g(t.element)[0]??this.legendOf(t))?.focus(e)}legendOf(e){let t=e.element.querySelector(":scope > legend")??e.element;return t.hasAttribute("tabindex")||(t.setAttribute("tabindex","-1"),this.tabbed.add(t)),t}onKeydown(e){if(e.key!=="Enter"||e.isComposing||e.defaultPrevented||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.composedPath()[0];if(!(t instanceof HTMLInputElement)||G.has(t.type))return;let s=t.getRootNode();if(s instanceof ShadowRoot&&!J.has(s.host.localName))return;let i=s instanceof ShadowRoot?s.host:t;this.current()?.element.contains(i)&&(e.preventDefault(),this.next())}firstInvalid(e){return g(e.element).find(t=>!t.checkValidity())??null}reveal(e){e.reportValidity(),e.focus()}validateStep(e){let t=this.firstInvalid(this.list[e]);return t?(e!==this.index&&this.move(e,!1),this.reveal(t),!1):!0}hasFocus(){let e=document.activeElement;return!!this.root.activeElement||!!(e&&e!==document.body&&(e===this||this.contains(e)))}move(e,t=!0){let s=this.index;this.index=e,this.at=this.list[e]?.element??null;for(let i of this.list.slice(0,e+1))this.reached.add(i.element);e>=this.list.length&&(this.reviewReached=!0),this.pendingFocus=t&&this.hasFocus()?"screen":null,this.render(),x(this,S.STEP,{from:s,to:e,title:this.titleAt(e)}),this.announce(this.stepAnnouncement())}titleAt(e){let t=this.list[e];return t?t.title||this.t("formStepsStepName",{current:d(e+1,this.locale)}):this.t("formStepsReviewStep")}stepAnnouncement(){let e=this.list.length,t=this.list[this.index];if(!t)return this.t("formStepsReviewStep");let s={current:d(this.index+1,this.locale),total:d(e,this.locale)};return t.title?this.t("formStepsStepTitle",{...s,title:t.title}):this.t("formStepsStepOf",s)}next(){if(!this.list.length)return!1;if(this.index>=this.lastPosition())return this.submit();if(!this.validateStep(this.index))return!1;this.at&&this.passed.add(this.at);let e=this.returnToEnd?this.lastPosition():this.index+1;return this.returnToEnd=!1,this.move(e),!0}back(){return this.index<=0?!1:(this.returnToEnd=!1,this.move(this.index-1),!0)}resolve(e){return typeof e=="number"?Number.isInteger(e)?e:-1:e==="review"?this.hasReview?this.list.length:-1:this.list.findIndex(t=>t.element.id!==""&&t.element.id===e)}goTo(e){let t=this.resolve(e);if(t<0||t>this.lastPosition()||t===this.index)return!1;if(t>this.index)for(let s=this.index;s<Math.min(t,this.list.length);s++){if(!this.validateStep(s))return!1;this.passed.add(this.list[s].element)}return this.returnToEnd=!1,this.move(t),!0}edit(e){this.returnToEnd=!0,this.move(e)}submit(){if(!this.list.length)return!1;for(let t=0;t<this.list.length;t++){let s=this.firstInvalid(this.list[t]);if(s)return this.returnToEnd=t!==this.lastPosition(),t!==this.index&&this.move(t,!1),this.reveal(s),!1}let e=this.form;return e?(e.requestSubmit(),!0):!1}render(){let e=document.activeElement,t=e&&e!==this&&this.contains(e)?e:null;super.render(),this.showSteps(),t&&t.isConnected&&document.activeElement!==t&&!t.closest("[hidden], [inert]")&&t.focus({preventScroll:!0}),this.afterRender()}afterRender(){if(!this.pendingFocus)return;this.pendingFocus=null;let e=this.current();e?this.legendOf(e).focus():this.root.querySelector("h2")?.focus()}showSteps(){this.list.forEach((e,t)=>{let s=t!==this.index;e.element.toggleAttribute("hidden",s),e.element.toggleAttribute("inert",s)})}progressKind(){let e=b(this.getAttribute("progress"),W,this.variant==="full"?"steps":"bar");return e==="none"?null:e}renderContent(e){let t=n("div",{class:"fs-body",attrs:{role:this.heading?"group":null,"aria-label":this.heading||null}});if(e.append(t),!this.list.length){t.append(k(this.t("formStepsNoSteps")),this.stage);return}this.index=Math.min(this.index,this.lastPosition()),this.at=this.list[this.index]?.element??null;let s=this.progressKind();s&&t.append(this.progress(s));let i=this.index>=this.list.length;t.append(i?this.review():n("div",{class:"stage",part:"step"},this.stage));let a=this.index===this.lastPosition(),o=this.t,l=a?o("formStepsSubmit"):this.hasReview&&this.index===this.list.length-1?o("formStepsReview"):o("formStepsNext");t.append(z({back:this.index>0,next:l,t:o,on:{back:()=>this.back(),next:()=>this.next()}}))}progress(e){let t=this.list.map((a,o)=>({label:a.title||this.t("formStepsStepName",{current:d(o+1,this.locale)}),done:this.passed.has(a.element),reachable:this.reached.has(a.element)}));this.hasReview&&t.push({label:this.t("formStepsReviewStep"),done:!1,reachable:this.reviewReached,review:!0});let s=this.list.length,i=this.index>=s?this.t("formStepsReviewStep"):this.t("formStepsStepOf",{current:d(this.index+1,this.locale),total:d(s,this.locale)});return L({kind:e,steps:t,index:this.index,text:i,t:this.t,onGo:a=>this.goTo(a)})}review(){let e=this.t;return C({steps:this.list.map((t,s)=>({title:this.titleAt(s),rows:P(t.element,e)})),t:e,onEdit:t=>this.edit(t)})}};export{V as a};
//# sourceMappingURL=chunk-XOZX6BPR.js.map
