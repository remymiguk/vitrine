/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as T,c as E}from"./chunk-2SXY6GKO.js";import{b as $,d as N}from"./chunk-CDLFL5U7.js";import{O as A,c as _,e as z,j as C,o}from"./chunk-JAZI474S.js";import{k as h,l as f,q as u}from"./chunk-SCKP2KTO.js";var L=`/*
 * <vt-loading-steps>: an ordered list of steps with a status mark each, joined by a line
 * (list), dense (compact) or side by side (horizontal); an overall bar above.
 */
:host {
  display: block;
}

.indicator {
  display: grid;
  gap: var(--_space-3);
  --_mark: calc(var(--_ind-size) + 8px);
}

.steps-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--_space-3);
}

.steps-title {
  margin: 0;
  font-weight: 650;
}

.steps-summary {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: var(--_space-1) var(--_space-3);
}

.steps-count {
  opacity: var(--_dim);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
}

.steps-track {
  grid-column: 1 / -1;
  height: 4px;
  overflow: hidden;
  border-radius: 999px;
  background: var(--_ind-track);
}

.steps-bar {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: var(--_ind-color);
  transform: scaleX(var(--_ratio));
  transform-origin: left center;
  transition: transform 0.3s ease;
}

.indicator[data-status='error'] .steps-bar {
  background: var(--_danger);
}

.indicator[data-status='done'] .steps-bar {
  background: var(--_success);
}

.steps {
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
}

.step {
  position: relative;
  display: grid;
  grid-template-columns: var(--_mark) 1fr auto;
  gap: var(--_space-3);
  align-items: start;
  padding-bottom: var(--_space-3);
}

.step:last-child {
  padding-bottom: 0;
}

/* The line joining a mark to the next one. */
.indicator[data-layout='list'] .step:not(:last-child)::before {
  content: '';
  position: absolute;
  top: calc(var(--_mark) + 2px);
  bottom: 2px;
  inset-inline-start: calc(var(--_mark) / 2 - 1px);
  border-inline-start: 2px solid var(--_border);
}

.indicator[data-layout='list'] .step.done:not(:last-child)::before {
  border-color: color-mix(in srgb, var(--_success) 55%, var(--_border));
}

.step-mark {
  display: grid;
  place-items: center;
  width: var(--_mark);
  height: var(--_mark);
  border: 2px solid var(--_border);
  border-radius: 50%;
  background: var(--_surface, transparent);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 650;
}

.step-mark svg {
  width: 60%;
  height: 60%;
}

.step-mark .spinner {
  --_ind-size: calc(var(--_mark) - 4px);
  border-width: 2px;
}

.step-mark.running {
  border: 0;
}

.step-mark.done {
  border-color: var(--_success);
  background: var(--_success);
  color: var(--_surface, #fff);
}

.step-mark.warning {
  border-color: var(--_warning);
  color: var(--_warning);
}

.step-mark.error {
  border-color: var(--_danger);
  background: var(--_danger);
  color: var(--_surface, #fff);
}

.step-mark.skipped {
  border-style: dashed;
}

.step-body {
  display: grid;
  gap: 2px;
  min-width: 0;
  padding-top: calc((var(--_mark) - 1.4em) / 2);
}

.step-label {
  line-height: 1.4;
}

.step.pending .step-label,
.step.skipped .step-label {
  opacity: var(--_dim);
}

.step.skipped .step-label {
  text-decoration: line-through;
}

.step.running .step-label {
  font-weight: 650;
}

.step.error .step-label {
  font-weight: 650;
}

.step-detail {
  opacity: var(--_dim);
  font-size: var(--_font-size-small);
  line-height: 1.4;
  overflow-wrap: anywhere;
}

.step-duration {
  padding-top: calc((var(--_mark) - 1.4em) / 2);
  opacity: var(--_dim);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
  line-height: 1.4;
  white-space: nowrap;
}

.indicator[data-layout='compact'] .step {
  padding-bottom: var(--_space-1);
}

.indicator[data-layout='horizontal'] .steps {
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
}

.indicator[data-layout='horizontal'] .step {
  grid-template-columns: 1fr;
  justify-items: center;
  gap: var(--_space-1);
  padding: 0 var(--_space-1);
  text-align: center;
}

.indicator[data-layout='horizontal'] .step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: calc(var(--_mark) / 2 - 1px);
  inset-inline-start: calc(50% + var(--_mark) / 2 + 4px);
  inset-inline-end: calc(-50% + var(--_mark) / 2 + 4px);
  border-top: 2px solid var(--_border);
}

.indicator[data-layout='horizontal'] .step.done:not(:last-child)::after {
  border-color: var(--_success);
}

.indicator[data-layout='horizontal'] .step-body,
.indicator[data-layout='horizontal'] .step-duration {
  padding-top: 0;
}

.steps-cancel {
  padding: 4px 12px;
  border: 1px solid currentColor;
  border-radius: var(--_radius-sm, 6px);
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
}

.steps-cancel:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.indicator[data-motion='reduce'] .steps-bar {
  transition: none;
}

@media (max-width: 480px) {
  .indicator[data-layout='horizontal'] .step-label {
    font-size: var(--_font-size-small);
  }
}
`;var j=["pending","running","done","warning","error","skipped"],b={pending:"pending",todo:"pending",waiting:"pending",queued:"pending","[ ]":"pending",running:"running",active:"running",current:"running","in-progress":"running","[~]":"running","[>]":"running",done:"done",ok:"done",success:"done",complete:"done",completed:"done","[x]":"done",warning:"warning",warn:"warning","[!]":"warning",error:"error",failed:"error",fail:"error","[-]":"error",skipped:"skipped",skip:"skipped","[/]":"skipped"},O=200,g=300;function k(n){let t=n.trim().toLowerCase(),e=/^(\d+(?:\.\d+)?)\s*ms$/.exec(t);return e?Number(e[1]):(e=/^(?:(\d+)\s*h\s*)?(?:(\d+)\s*m(?:in)?\s*)?(?:(\d+(?:\.\d+)?)\s*s)?$/.exec(t),e&&(e[1]||e[2]||e[3])?((Number(e[1]??0)*60+Number(e[2]??0))*60+Number(e[3]??0))*1e3:(e=/^(\d+):(\d{2})$/.exec(t),e?(Number(e[1])*60+Number(e[2]))*1e3:null))}function R(n){return b[String(n??"").toLowerCase()]??"pending"}function v(n){let t=n.trim();if(!t)return[];if(/^[[{]/.test(t))try{let r=JSON.parse(t),a=Array.isArray(r)?r:Array.isArray(r?.steps)?r.steps:[],s=[];for(let i of a.slice(0,O)){let l=P(i);l&&s.push(l)}return s}catch{return[]}let e=[];for(let r of t.split(/\r\n|\n|\r/)){if(e.length>=O)break;let a=r.trim().replace(/^[-*]\s+/,"");if(!a)continue;let s="pending",i=/^(\[[ x~>!/-]\])\s*/i.exec(a),l=/^([a-z-]+)(?::|\s)\s*/i.exec(a);i?(s=b[i[1].toLowerCase()]??"pending",a=a.slice(i[0].length)):l&&b[l[1].toLowerCase()]&&(s=b[l[1].toLowerCase()],a=a.slice(l[0].length));let c=null,d=/\s*\(([^()]+)\)\s*$/.exec(a);d&&k(d[1])!==null&&(c=k(d[1]),a=a.slice(0,d.index));let[m,...x]=a.split(/\s+(?:—|–|\|)\s+|\s+--\s+/);e.push({label:m.trim().slice(0,g),status:s,detail:x.join(" \u2014 ").trim().slice(0,g),duration:c})}return e}function P(n){if(typeof n=="string")return{label:n.slice(0,g),status:"pending",detail:"",duration:null};if(!n||typeof n!="object")return null;let t=String(n.label??n.name??n.title??"").slice(0,g);if(!t)return null;let e=typeof n.duration=="number"&&n.duration>=0?n.duration:typeof n.duration=="string"?k(n.duration):null;return{label:t,status:R(n.status??n.state),detail:String(n.detail??n.description??"").slice(0,g),duration:e}}function M(n){return n.some(t=>t.status==="error")?"error":n.length&&n.every(t=>t.status==="done"||t.status==="skipped"||t.status==="warning")?n.some(t=>t.status==="warning")?"warning":"done":n.some(t=>t.status==="running"||t.status==="done")?"running":"pending"}var D={done:"check",warning:"alert",error:"close",skipped:"minus"},X=["list","compact","horizontal"],I=class extends N{static type="loading-steps";static componentAttributes=["text","layout","progress","durations","details","cancelable"];static styles=[T,L];static display="block";static defaultSize="sm";constructor(){super(),this.stepsState=null,this.contentState=null,this.observer=null,this.lastSignature=null}connectedCallback(){this.observer=new MutationObserver(()=>{this.stepsState||this.requestRender()}),this.observer.observe(this,{childList:!0,characterData:!0,subtree:!0}),super.connectedCallback()}disconnectedCallback(){this.observer?.disconnect(),this.observer=null,super.disconnectedCallback()}get steps(){if(this.stepsState)return this.stepsState.map(e=>({...e}));let t=this.querySelector("template");return v(t?t.content.textContent??"":this.textContent??"")}set steps(t){this.stepsState=Array.isArray(t)?v(JSON.stringify(t)):null,this.requestRender()}get content(){return this.contentState??""}set content(t){this.contentState=t==null?null:String(t),this.stepsState=this.contentState===null?null:v(this.contentState),this.requestRender()}setStep(t,e){let r=this.steps,a=typeof t=="number"?t:r.findIndex(i=>i.label===t);if(a<0||a>=r.length)return;let s={...r[a],...e};j.includes(s.status)||(s.status=r[a].status),r[a]=s,this.steps=r}draw(t){if(!this.shown){t.replaceChildren();return}let e=this.t,r=this.steps,a=z(this.getAttribute("layout"),X,"list"),s=p=>_(this.getAttribute(p))??!0,i=r.filter(p=>p.status!=="pending"&&p.status!=="running").length,l=M(r),c=r.findIndex(p=>p.status==="running"),d=C(this.getAttribute("text"));this.notify(r,i,l),t.dataset.layout=a,t.dataset.status=l;let m=null;if(s("progress")&&r.length){let p=i/r.length,y=c>=0?c+1:Math.min(r.length,i+(l==="done"||l==="warning"?0:1)),w=o("div",{class:"steps-track",part:"bar",attrs:{role:"progressbar","aria-label":d||this.labelText("loadingStepsTitle"),"aria-valuemin":"0","aria-valuemax":String(r.length),"aria-valuenow":String(i),"aria-valuetext":e("loadingStepsDone",{done:u(i,this.locale),total:u(r.length,this.locale)})}},o("span",{class:"steps-bar"}));w.style.setProperty("--_ratio",String(p)),m=o("div",{class:"steps-summary",part:"summary"},o("span",{text:l==="done"||l==="warning"?e("loadingComplete"):l==="error"?e("loadingFailed"):e("loadingStepOf",{current:u(y,this.locale),total:u(r.length,this.locale)})}),o("span",{class:"steps-count",text:e("loadingStepsDone",{done:u(i,this.locale),total:u(r.length,this.locale)})}),w)}let x=o("ol",{class:"steps",part:"steps",attrs:{"aria-label":d||this.labelText("loadingStepsTitle")}},...r.map((p,y)=>this.stepView(p,y,a,s("durations"),s("details")))),S=_(this.getAttribute("cancelable"))&&l==="running"?o("button",{class:"steps-cancel",part:"cancel",text:e("loadingCancel"),attrs:{type:"button"},on:{click:()=>f(this,h.CANCEL,{})}}):null;t.replaceChildren(...$([d||S?o("div",{class:"steps-head"},d?o("p",{class:"steps-title",part:"title",text:d}):o("span"),S):null,m,x]))}stepView(t,e,r,a,s){let i=this.t,l=i(`loadingStatus_${t.status}`),c=o("span",{class:`step-mark ${t.status}`,part:"mark",attrs:{"aria-hidden":"true"}});return t.status==="running"?c.append(E("ring")):t.status in D?c.append(A(D[t.status])):c.append(o("span",{class:"step-number",text:String(e+1)})),o("li",{class:`step ${t.status}`,part:`step step-${t.status}`,attrs:t.status==="running"?{"aria-current":"step"}:{}},c,o("span",{class:"step-body"},o("span",{class:"step-label",text:t.label}),o("span",{class:"sr-only",text:`, ${l}`}),s&&t.detail&&r!=="horizontal"?o("span",{class:"step-detail",part:"detail",text:t.detail}):null),a&&t.duration!==null?o("span",{class:"step-duration",part:"duration",text:F(t.duration,this.locale)}):null)}notify(t,e,r){let a=t.map(i=>i.status).join(",");if(a===this.lastSignature)return;let s=this.lastSignature===null;t.length&&(this.lastSignature=a,!s&&(f(this,h.PROGRESS,{value:e,max:t.length,ratio:t.length?e/t.length:0}),(r==="done"||r==="warning"||r==="error")&&f(this,h.COMPLETE,{status:r})))}};function F(n,t){let e=(s,i=0)=>new Intl.NumberFormat(t,{maximumFractionDigits:i}).format(s);if(n<1e3)return`${e(n)} ms`;if(n<6e4)return`${e(n/1e3,1)} s`;let r=Math.floor(n/6e4),a=Math.round(n%6e4/1e3);return r<60?a?`${e(r)} min ${e(a)} s`:`${e(r)} min`:`${e(Math.floor(r/60))} h ${e(r%60)} min`}export{I as a};
