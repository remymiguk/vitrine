/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as O,b as _,d as H,e as P,f as z,g as M,h as J,i as x,j as y}from"./chunk-YYOH5HHP.js";import{a as T,c as q,d as v,f as B}from"./chunk-XQK5K4QO.js";import{a as C}from"./chunk-VUXWEGPX.js";import{r as I}from"./chunk-37OSRZJK.js";import{O as m,S as f,T as E,W as j,_ as N,b as S,ba as $,o as r,q as L}from"./chunk-JAZI474S.js";import{h as k,k as p,l as c,m as A,q as b}from"./chunk-SCKP2KTO.js";var V=Object.freeze({jobInvalid:"This job could not be read: {message}",jobProgress:"Job progress",jobInProgress:"In progress",jobSteps:"{done} of {total} steps",jobNoSteps:"No steps yet.",jobNoMatch:"No log line matches.",jobNoLog:"No output.",jobCopyLog:"Copy log",jobAnnounce:"Job {status}",jobAnnounceStep:"Running: {step}",jobStatusQueued:"Queued",jobStatusRunning:"Running",jobStatusSuccess:"Succeeded",jobStatusFailure:"Failed",jobStatusCancelled:"Cancelled",jobStatusSkipped:"Skipped"}),G={jobInvalid:"Impossible de lire ce job : {message}",jobProgress:"Progression du job",jobInProgress:"En cours",jobSteps:"{done} \xE9tapes sur {total}",jobNoSteps:"Aucune \xE9tape pour l\u2019instant.",jobNoMatch:"Aucune ligne de log ne correspond.",jobNoLog:"Aucune sortie.",jobCopyLog:"Copier le log",jobAnnounce:"Job {status}",jobAnnounceStep:"En cours : {step}",jobStatusQueued:"En attente",jobStatusRunning:"En cours",jobStatusSuccess:"R\xE9ussi",jobStatusFailure:"\xC9chou\xE9",jobStatusCancelled:"Annul\xE9",jobStatusSkipped:"Ignor\xE9"};var R=`/*
 * Job: a summary with the status, duration and progress bar, then steps that open to
 * show their logs.
 */
.job-body {
  padding: var(--_space-4) var(--_space-5);
  background: var(--_surface);
  /* Without a height limit the page scrolls, not the job. */
  overscroll-behavior: auto;
}

:host([max-height]) .job-body,
.vt[data-fullscreen] .job-body {
  overscroll-behavior: contain;
}

/* ---------- Statuses ---------- */

.status-queued,
.status-skipped,
.status-cancelled {
  --_tone: var(--_fg-muted);
}

.status-running {
  --_tone: var(--_info);
}

.status-success {
  --_tone: var(--_success);
}

.status-failure {
  --_tone: var(--_danger);
}

.job-status {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: 6px;
  color: var(--_tone);
  font: 600 var(--_font-size-ui) / 1 var(--_font-ui);
}

.job-status .icon {
  width: 16px;
  height: 16px;
}

.job-status.status-running .icon {
  animation: vt-job-spin 1s linear infinite;
}

@keyframes vt-job-spin {
  to {
    transform: rotate(360deg);
  }
}

/* ---------- Summary ---------- */

.job-summary {
  display: grid;
  gap: var(--_space-2);
  padding-bottom: var(--_space-4);
  margin-bottom: var(--_space-3);
  border-bottom: 1px solid var(--_border);
}

.job-title {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-3);
}

.job-title h2 {
  margin: 0;
  color: var(--_fg);
  font: 600 16px / 1.3 var(--_font-ui);
}

.job-percent {
  margin-left: auto;
  color: var(--_fg-muted);
  font: 500 var(--_font-size-ui) / 1 var(--_font-mono);
  font-variant-numeric: tabular-nums;
}

.job-facts {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-4);
  color: var(--_fg-muted);
  font: var(--_font-size-ui) / 1.4 var(--_font-ui);
}

.job-duration {
  color: var(--_fg-muted);
  font: var(--_font-size-small) / 1 var(--_font-mono);
  font-variant-numeric: tabular-nums;
}

/* ---------- Progress bars ---------- */

.job-progress {
  position: relative;
  height: 6px;
  overflow: hidden;
  border-radius: var(--_radius-full);
  background: color-mix(in srgb, var(--_tone, var(--_accent)) 15%, var(--_surface-sunken));
}

.job-progress-fill {
  position: absolute;
  inset: 0 auto 0 0;
  width: var(--_value, 0%);
  border-radius: inherit;
  background: var(--_tone, var(--_accent));
  transition: width var(--_duration) var(--_easing);
}

.job-progress.indeterminate .job-progress-fill {
  width: 35%;
  animation: vt-job-slide 1.4s var(--_easing) infinite;
}

@keyframes vt-job-slide {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(300%);
  }
}

.job-progress.mini {
  flex: 0 1 120px;
  height: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .job-status.status-running .icon,
  .job-progress.indeterminate .job-progress-fill {
    animation: none;
  }

  /* Without motion, an unknown progress reads as a half-filled, faded bar. */
  .job-progress.indeterminate .job-progress-fill {
    width: 50%;
    opacity: 0.6;
  }
}

/* ---------- Steps ---------- */

.job-steps {
  display: grid;
  gap: var(--_space-1);
  padding: 0;
  margin: 0;
  list-style: none;
}

.job-step {
  overflow: hidden;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.job-step.status-failure {
  border-color: color-mix(in srgb, var(--_danger) 40%, var(--_border));
}

.job-step-head {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  width: 100%;
  min-height: 36px;
  padding: 0 var(--_space-3);
  border: 0;
  background: var(--_surface);
  color: var(--_fg);
  font: 500 var(--_font-size-ui) / 1.3 var(--_font-ui);
  text-align: left;
  cursor: pointer;
  transition: background-color var(--_duration-fast) var(--_easing);
}

.job-step-head:hover {
  background: color-mix(in srgb, var(--_fg) 4%, var(--_surface));
}

.job-step-head:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.job-step-head > .icon {
  width: 14px;
  height: 14px;
  flex: none;
  color: var(--_fg-muted);
  transition: transform var(--_duration-fast) var(--_easing);
}

.job-step-head[aria-expanded='true'] > .icon {
  transform: rotate(90deg);
}

.job-step-name {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.job-step-word {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.job-step.status-skipped .job-step-name,
.job-step.status-queued .job-step-name {
  color: var(--_fg-muted);
}

/* ---------- Logs ---------- */

.job-log {
  max-height: min(50vh, 420px);
  padding: var(--_space-2) 0;
  overflow: auto;
  border-top: 1px solid var(--_border);
  background: var(--_code-bg);
  color: var(--_code-fg);
  font: var(--_font-size-small) / var(--_line-height) var(--_font-mono);
  overscroll-behavior: contain;
  scrollbar-width: thin;
}

.job-log:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.job-line {
  display: flex;
  min-width: max-content;
}

.job-ln {
  flex: none;
  width: 4.5ch;
  padding-right: var(--_space-3);
  color: var(--_fg-muted);
  text-align: right;
  user-select: none;
}

.job-text {
  padding-right: var(--_space-4);
  white-space: pre;
}

.job-log-empty {
  padding: 0 var(--_space-4);
  color: var(--_fg-muted);
}

mark.match {
  border-radius: 2px;
  background: var(--_highlight);
  color: inherit;
}

mark.match.current {
  background: var(--_highlight-current);
}

/* ---------- Edit mode ---------- */

.job-edit > .editor-body {
  max-height: min(40vh, 360px);
  border-bottom: 1px solid var(--_border);
}
`;A({en:V,fr:G});var D=5e3,F=class extends ${static type="job";static componentAttributes=Object.freeze(["progress","durations","open-failed","follow"]);static presets={simple:{progress:!0,durations:!0,"open-failed":!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,progress:!0,durations:!0,"open-failed":!0}};static styles=[S,C,T,R];constructor(){super(),this.parsed=null,this.toggled=new Map,this.query="",this.matchCount=0,this.panelId=L("panel"),this.listHost=null,this.editor=null,this.previewTimer=void 0,this.lastStatus=""}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}contentChanged(){this.parsed=null,this.toggled.clear()}parse(){let t=this.text??"";if(this.parsed?.text===t)return this.parsed;try{this.parsed={text:t,job:P(t),error:null}}catch(e){this.parsed={text:t,job:null,error:e instanceof Error?e:new O(String(e))}}return this.parsed}get job(){let t=this.parse().job;return t?structuredClone(t):null}mutate(t){let e=this.parse().job,s=e?structuredClone(e):{name:"",status:"queued",started:"",finished:"",duration:null,progress:null,steps:[]},o=new Map(s.steps.map(n=>[n.name,n.status])),a=s.status;t(s);let i=JSON.stringify(s,null,2);this.text=i,this.error=null,this.parsed={text:i,job:s,error:null};for(let n of s.steps){let l=o.get(n.name);l&&l!==n.status&&c(this,p.JOB_CHANGE,{status:n.status,step:n.name,previous:l})}a!==s.status&&c(this,p.JOB_CHANGE,{status:s.status,step:null,previous:a}),!this.editing&&this.requestRender()}update(t){this.mutate(e=>{Object.assign(e,t),t.status!==void 0&&(e.status=_(t.status,e.status))})}setStep(t,e){this.mutate(s=>{let o=s.steps.find(a=>a.name===t);o||(o={name:t,status:"queued",started:"",finished:"",duration:null,progress:null,log:""},s.steps.push(o)),Object.assign(o,e,{name:t}),e.status!==void 0&&(o.status=_(e.status,o.status)),s.status=H(s.steps)})}appendLog(t,e){this.mutate(s=>{let o=s.steps.find(a=>a.name===t);o||(o={name:t,status:"running",started:"",finished:"",duration:null,progress:null,log:""},s.steps.push(o)),o.log=o.log?`${o.log}
${String(e)}`:String(e)})}isOpen(t){let e=this.toggled.get(t.name);return e!==void 0?e:this.query?t.log.toLowerCase().includes(this.query.toLowerCase()):this.feature("open-failed")&&t.status==="failure"}renderContent(t){let e=this.t,{job:s,error:o}=this.parse(),a=r("div",{class:"panel",attrs:{id:this.panelId}}),i=r("div",{class:"body job-body",part:"body"});o?i.append(N(e("jobInvalid",{message:o.message}))):s?(i.append(this.summary(s)),this.listHost=r("ol",{class:"job-steps",part:"steps"}),i.append(this.listHost),this.renderSteps(),this.announceStatus(s)):i.append(r("div",{class:"empty",part:"empty",text:e("empty")}));let n=[];if(this.editing){let u=this.createEditor();a.classList.add("job-edit"),a.append(r("div",{class:"body editor-body",part:"body source"},u.element),i),n=this.historyButtons(u)}else a.append(i);let l={run:u=>(this.query=u.slice(0,E).trim(),this.toggled.clear(),this.renderSteps(),{total:this.matchCount,capped:this.matchCount>=f}),go:u=>{let w=this.listHost?.querySelectorAll("mark.match")??[];for(let X of w)X.classList.remove("current");let g=w[u];g&&(g.classList.add("current"),g.scrollIntoView({block:"nearest",inline:"nearest"}))},clear:()=>{this.query="",this.renderSteps()}},d=[this.searchButton(l),...n,s&&!this.editing?j({icon:"expand-all",label:e("expandAll"),key:"expand-all",onClick:()=>this.openAll(!0)}):null,s&&!this.editing?j({icon:"collapse-all",label:e("collapseAll"),key:"collapse-all",onClick:()=>this.openAll(!1)}):null,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>{let u=this.parse().job;return u?y(u):""},this.downloadName("job.log"),"text/plain"):null,this.feature("copy")?this.copyButton(()=>{let u=this.parse().job;return u?y(u):""},e("jobCopyLog")):null],h=s?this.statusLabel(s.status):"";t.append(...this.chrome({badge:h,actions:d}),a),this.editor?.align()}get heading(){return super.heading||this.parse().job?.name||""}statusLabel(t){let e=`jobStatus${t[0].toUpperCase()}${t.slice(1)}`;return this.t(e)}statusView(t,e=!0){let s=t==="cancelled"?"skipped":t==="queued"?"circle":t;return r("span",{class:`job-status status-${t}`,part:"status"},m(`status-${s}`),r("span",{class:e?"status-word":"sr-only",text:this.statusLabel(t)}))}progressBar(t,e,s=""){let o=r("div",{class:`job-progress ${s}${t===null?" indeterminate":""}`,attrs:{role:"progressbar","aria-label":e,"aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":t===null?null:String(Math.round(t)),"aria-valuetext":t===null?this.t("jobInProgress"):`${Math.round(t)} %`}}),a=r("span",{class:"job-progress-fill"});return t!==null&&a.style.setProperty("--_value",`${t}%`),o.append(a),o}summary(t){let e=this.t,s=t.steps.filter(l=>l.status!=="queued"&&l.status!=="running").length,o=J(t),a=r("div",{class:"job-facts"},r("span",{text:e("jobSteps",{done:b(s,this.locale),total:b(t.steps.length,this.locale)})}));this.feature("durations")&&o!==null&&a.append(r("span",{class:"job-duration",text:x(o)}));let i=M(t),n=r("div",{class:`job-summary status-${t.status}`,part:"summary"},r("div",{class:"job-title"},this.statusView(t.status),t.name?r("h2",{text:t.name}):null,i!==null?r("span",{class:"job-percent",text:`${i} %`}):null),a);if(this.feature("progress")){let l=this.progressBar(t.status==="running"&&t.progress===null&&!t.steps.length?null:i,e("jobProgress"));l.setAttribute("part","progress"),n.append(l)}return n}renderSteps(){let t=this.listHost,e=this.parse().job;if(!(!t||!e)){if(this.matchCount=0,!e.steps.length){t.replaceChildren(r("li",{class:"empty",part:"empty",text:this.t("jobNoSteps")}));return}if(t.replaceChildren(...e.steps.map((s,o)=>this.stepItem(s,o))),this.query&&!this.matchCount&&t.append(r("li",{class:"empty",part:"empty",text:this.t("jobNoMatch")})),this.feature("follow")){let s=t.querySelector(".job-step.status-running .job-log");s&&(s.scrollTop=s.scrollHeight)}}}stepItem(t,e){let s=this.isOpen(t),o=`${this.panelId}-log-${e}`,a=z(t),i=r("button",{class:"job-step-head",part:"step-head",attrs:{type:"button","aria-expanded":String(s),"aria-controls":o,"data-focus-key":`step-${e}`},on:{click:()=>this.toggle(t,!s,e)}},m("chevron-right"),this.statusView(t.status,!1),r("span",{class:"job-step-name",text:t.name}),t.status==="running"?this.progressBar(a,t.name,"mini"):r("span",{class:"job-step-word",text:this.statusLabel(t.status)}),this.feature("durations")&&t.duration!==null?r("span",{class:"job-duration",text:x(t.duration)}):null),n=r("li",{class:`job-step status-${t.status}`,part:`step step-${t.status}`},i),l=this.logView(t,o);return s&&n.append(l),n}logView(t,e){let s=r("div",{class:"job-log ansi",part:"step-log",attrs:{id:e,tabindex:"0",role:"region","aria-label":t.name}});if(!t.log)return s.append(r("div",{class:"job-log-empty",text:this.t("jobNoLog")})),s;let o=q(t.log).slice(0,D),a=this.query.toLowerCase();return o.forEach((i,n)=>{let l=r("div",{class:"job-line"},r("span",{class:"job-ln",attrs:{"aria-hidden":"true"},text:String(n+1)})),d=r("span",{class:"job-text"});if(a&&v(i).toLowerCase().includes(a))this.markLine(d,i,a);else for(let h of i)d.append(B(h));l.append(d),s.append(l)}),s}markLine(t,e,s){let o=v(e),a=o.toLowerCase(),i=0,n=a.indexOf(s);for(;n!==-1&&this.matchCount<f;)t.append(o.slice(i,n),r("mark",{class:"match",text:o.slice(n,n+s.length)})),this.matchCount+=1,i=n+s.length,n=a.indexOf(s,i);t.append(o.slice(i))}toggle(t,e,s){this.toggled.set(t.name,e),this.renderSteps(),this.restoreFocus(`step-${s}`),c(this,p.STEP_TOGGLE,{name:t.name,open:e})}openAll(t){let e=this.parse().job;if(e){for(let s of e.steps)this.toggled.set(s.name,t);this.renderSteps()}}announceStatus(t){let e=t.steps.find(o=>o.status==="running"),s=`${t.status}:${e?.name??""}`;this.lastStatus&&this.lastStatus!==s&&this.announce(e&&t.status==="running"?this.t("jobAnnounceStep",{step:e.name}):this.t("jobAnnounce",{status:this.statusLabel(t.status)})),this.lastStatus=s}createEditor(){this.editor?.destroy();let t=/^\s*[[{]/.test(this.text??"");return this.editor=new I({text:this.text??"",language:t?"json":"markdown",lineNumbers:!0,wrap:!1,highlightLimit:k().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>c(this,p.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>{this.parsed=null,this.render()},400)}};export{F as a};
