/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as K}from"./chunk-PIFKHUVR.js";import{a as U}from"./chunk-5Y6ZLKSA.js";import{b as x,c as H,i as $}from"./chunk-YYOH5HHP.js";import{a as P,c as Y,f as F}from"./chunk-XQK5K4QO.js";import{a as V}from"./chunk-VUXWEGPX.js";import{B as v,C as h,D as b,E as O,G as L,O as j,_ as W,b as R,o as a,q as N}from"./chunk-JAZI474S.js";import{k as A,l as C,m as X,q as S}from"./chunk-SCKP2KTO.js";var Q=`/*
 * Workflow: a run, its jobs as a graph, and the steps and logs of a job.
 */
.wf-body {
  display: grid;
  gap: var(--_space-4);
}

.status-success {
  --_tone: var(--_success);
}

.status-failure {
  --_tone: var(--_danger);
}

.status-running {
  --_tone: var(--_warning);
}

.status-queued,
.status-cancelled,
.status-skipped {
  --_tone: var(--_fg-muted);
}

.wf-icon {
  display: inline-grid;
  flex: none;
  place-items: center;
  color: var(--_tone);
}

.wf-icon .icon {
  width: 16px;
  height: 16px;
}

.wf-icon.status-running .icon,
.wf-big.status-running .icon {
  animation: vt-wf-spin 1s linear infinite;
}

@keyframes vt-wf-spin {
  to {
    transform: rotate(360deg);
  }
}

/* ---------- Summary ---------- */

.wf-summary {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: var(--_space-3) var(--_space-4);
  padding: var(--_space-4);
  border: 1px solid var(--_border);
  border-radius: var(--_radius);
  background: linear-gradient(
    to right,
    color-mix(in srgb, var(--_tone) 12%, transparent),
    transparent 45%
  );
}

.wf-big {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: var(--_radius-full);
  background: color-mix(in srgb, var(--_tone) 16%, transparent);
  color: var(--_tone);
}

.wf-big .icon {
  width: 28px;
  height: 28px;
}

.wf-heading {
  display: grid;
  gap: var(--_space-1);
  min-width: 0;
}

.wf-title {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2);
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.wf-title a {
  color: var(--_fg);
}

.wf-pill {
  padding: 1px var(--_space-2);
  border: 1px solid var(--_tone);
  border-radius: var(--_radius-full);
  color: var(--_tone);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.wf-sub,
.wf-counts,
.wf-notes,
.wf-choose,
.wf-muted {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-ui);
}

.wf-facts {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1) var(--_space-4);
  font-size: var(--_font-size-ui);
}

.wf-fact {
  display: inline-flex;
  align-items: baseline;
  gap: var(--_space-1);
}

.wf-fact-label {
  color: var(--_fg-muted);
}

.wf-fact code {
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
}

.wf-branch {
  padding: 0 var(--_space-1);
  border-radius: var(--_radius-sm);
  background: var(--_accent-soft);
  color: var(--_accent-fg);
}

.wf-counts {
  align-self: start;
  text-align: end;
}

/* ---------- Graph ---------- */

.wf-graph {
  overflow-x: auto;
  padding: var(--_space-4);
  border: 1px solid var(--_border);
  border-radius: var(--_radius);
  background-color: var(--_surface-sunken);
  background-image: radial-gradient(var(--_border) 1px, transparent 1px);
  background-size: 16px 16px;
}

.wf-canvas {
  position: relative;
  width: var(--_w);
  height: var(--_h);
}

.wf-links {
  position: absolute;
  inset: 0;
  overflow: visible;
}

.wf-link {
  fill: none;
  stroke: var(--_border-strong);
  stroke-width: 2;
}

.wf-link.status-success {
  stroke: color-mix(in srgb, var(--_success) 60%, var(--_border-strong));
}

.wf-link.status-failure {
  stroke: color-mix(in srgb, var(--_danger) 60%, var(--_border-strong));
}

.wf-link.flowing {
  stroke: var(--_warning);
  stroke-dasharray: 6 6;
  animation: vt-wf-flow 0.8s linear infinite;
}

@keyframes vt-wf-flow {
  to {
    stroke-dashoffset: -12;
  }
}

.wf-column {
  position: absolute;
  inset-inline-start: var(--_x);
  top: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.wf-job {
  position: absolute;
  inset-inline-start: var(--_x);
  top: var(--_y);
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0 var(--_space-2);
  width: 216px;
  height: 52px;
  padding: 0 var(--_space-3);
  border: 1px solid var(--_border);
  border-inline-start: 3px solid var(--_tone);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: var(--_fg);
  font: inherit;
  text-align: start;
  cursor: pointer;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.06);
  transition:
    transform var(--_duration-fast) var(--_easing),
    box-shadow var(--_duration-fast) var(--_easing);
}

.wf-job:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.12);
}

.wf-job:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.wf-job.chosen {
  border-color: var(--_accent);
  box-shadow: 0 0 0 1px var(--_accent);
}

.wf-job.status-running {
  animation: vt-wf-glow 1.6s ease-in-out infinite;
}

@keyframes vt-wf-glow {
  50% {
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--_warning) 30%, transparent);
  }
}

.wf-job .wf-icon {
  grid-row: span 2;
}

.wf-job-name {
  overflow: hidden;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wf-job-time {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
}

/* ---------- Steps and logs ---------- */

.wf-details {
  display: grid;
  gap: var(--_space-2);
  border: 1px solid var(--_border);
  border-radius: var(--_radius);
  overflow: hidden;
}

.wf-details-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2);
  padding: var(--_space-3) var(--_space-4);
  border-bottom: 1px solid var(--_border);
}

.wf-details-name {
  font-size: 15px;
}

.wf-open {
  margin-inline-start: auto;
  color: var(--_accent-fg);
}

.wf-notes {
  padding: 0 var(--_space-4);
}

.wf-steps {
  margin: 0;
  padding: 0 0 var(--_space-2);
  list-style: none;
}

.wf-step-head {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  width: 100%;
  padding: var(--_space-2) var(--_space-4);
  border: 0;
  background: transparent;
  color: var(--_fg);
  font: inherit;
  text-align: start;
  cursor: pointer;
}

.wf-step-head:hover {
  background: var(--_accent-soft);
}

.wf-step-head:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.wf-step-head > .icon {
  width: 14px;
  height: 14px;
  color: var(--_fg-muted);
  transition: transform var(--_duration-fast) var(--_easing);
}

.wf-step-head[aria-expanded='true'] > .icon {
  transform: rotate(90deg);
}

.wf-step-name {
  flex: 1;
  min-width: 0;
  overflow-wrap: anywhere;
}

.wf-step.status-skipped .wf-step-name,
.wf-step.status-queued .wf-step-name {
  color: var(--_fg-muted);
}

.wf-step-time {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
}

.wf-logbox {
  max-height: var(--_max-height, 420px);
  margin: 0 var(--_space-4) var(--_space-2);
  padding: var(--_space-2) 0;
  overflow: auto;
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
  color: var(--_code-fg);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  line-height: 1.6;
}

.wf-logbox:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.wf-line {
  display: flex;
  gap: var(--_space-3);
  padding: 0 var(--_space-3) 0 0;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.wf-ln {
  flex: none;
  width: 3.5em;
  color: var(--_fg-muted);
  text-align: end;
  user-select: none;
}

.wf-time {
  flex: none;
  color: var(--_fg-muted);
}

.wf-text {
  min-width: 0;
}

.wf-line.error {
  background: color-mix(in srgb, var(--_danger) 12%, transparent);
  box-shadow: inset 3px 0 0 var(--_danger);
}

.wf-line.warning {
  background: color-mix(in srgb, var(--_warning) 12%, transparent);
  box-shadow: inset 3px 0 0 var(--_warning);
}

.wf-line.command {
  color: var(--_accent-fg);
}

.wf-group > summary {
  list-style: none;
  cursor: pointer;
}

.wf-group > summary::-webkit-details-marker {
  display: none;
}

.wf-group > summary .wf-text::before {
  content: '\u25B8 ';
  color: var(--_fg-muted);
}

.wf-group[open] > summary .wf-text::before {
  content: '\u25BE ';
}

.wf-group > summary .wf-text {
  font-weight: 600;
}

.wf-nolog {
  margin: 0 var(--_space-4) var(--_space-2);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

@media (max-width: 640px) {
  .wf-summary {
    grid-template-columns: auto 1fr;
  }

  .wf-counts {
    grid-column: 1 / -1;
    text-align: start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .wf-icon.status-running .icon,
  .wf-big.status-running .icon,
  .wf-link.flowing,
  .wf-job.status-running {
    animation: none;
  }
}
`;var k=class extends Error{},lt=300,ut=300;function B(e){let t=h(e.conclusion,30).toLowerCase();if(t)return x(t==="timed_out"||t==="startup_failure"?"failure":t==="action_required"?"queued":t,"skipped");let s=h(e.status??e.state??e.result,30).toLowerCase();return["created","manual","scheduled","preparing","waiting_for_resource","requested"].includes(s)?"queued":x(s,"queued")}function T(e){let t=L(e.started_at??e.startedAt??e.started??e.start),s=L(e.completed_at??e.finished_at??e.finishedAt??e.finished??e.end),o=e.duration!==void 0&&e.duration!==null?H(e.duration):null;return{started:t,duration:o??(t!==null&&s!==null&&s>=t?s-t:null)}}function Z(e){return Array.isArray(e)?e.filter(t=>typeof t=="string").join(`
`).slice(0,2e6):typeof e=="string"?e.slice(0,2e6):""}function ct(e,t){let s=b(e,["name","title","job"],200)||`job ${t+1}`,o=h(e.id??e.key,100)||s,n=(Array.isArray(e.needs)?e.needs:typeof e.needs=="string"?[e.needs]:[]).map(i=>v(i)?h(i.name??i.job??i.id,100):h(i,100)).filter(Boolean),u=(Array.isArray(e.steps)?e.steps:[]).filter(v).slice(0,ut).map((i,d)=>({name:b(i,["name","title"],300)||`step ${d+1}`,status:B(i),duration:T(i).duration,log:Z(i.log??i.output)})),{started:c,duration:r}=T(e);return{id:o,name:s,status:B(e),stage:h(e.stage,100),needs:n,started:c,duration:r,url:O(e.html_url??e.web_url??e.url),runner:v(e.runner)?h(e.runner.description??e.runner.name,100):h(e.runner_name??e.runner??e.runsOn,100),steps:u,log:Z(e.log??e.trace??e.output),column:0,row:0}}function q(e){let t=s=>e.some(o=>o.status===s);return t("running")?"running":t("failure")?"failure":t("cancelled")?"cancelled":e.length&&e.every(s=>s.status==="queued")?"queued":e.length&&e.every(s=>s.status==="skipped")?"skipped":t("queued")?"running":"success"}function dt(e){let t=new Map(e.map(r=>[r.id,r]));for(let r of e)t.has(r.name)||t.set(r.name,r);let s=e.some(r=>r.needs.some(i=>t.has(i))),o=[];for(let r of e)r.stage&&!o.includes(r.stage)&&o.push(r.stage);let n=new Map,u=(r,i)=>{let d=n.get(r);if(d!==void 0)return d;if(i.has(r))return 0;i.add(r);let f=r.needs.map(w=>t.get(w)).filter(w=>w!==void 0&&w!==r),_=o.length?Math.max(0,o.indexOf(r.stage)):0,m=Math.max(s?0:_,...f.map(w=>u(w,i)+1));return n.set(r,m),m};for(let r of e)r.column=u(r,new Set);if(s&&o.length)for(let r of e)r.needs.length||(r.column=Math.max(r.column,0));let c=[];for(let r of e)r.row=c[r.column]??0,c[r.column]=r.row+1;return!s&&o.length?o:[]}function tt(e){if(Array.isArray(e)&&(e={jobs:e}),!v(e))throw new k("shape");let t=v(e.workflow_run)?e.workflow_run:v(e.pipeline)?e.pipeline:e,s=[e.jobs,v(e.jobs)?e.jobs.jobs:null,t.jobs].find(Array.isArray);if(!s)throw new k("shape");let o=s.filter(v).slice(0,lt).map(ct),n=dt(o),u=v(t.head_commit)?t.head_commit:v(t.commit)?t.commit:{},{started:c,duration:r}=T({started_at:t.run_started_at??t.started_at??t.created_at??t.started,completed_at:t.updated_at&&(t.status==="completed"||t.conclusion)?t.updated_at:t.finished_at??t.finished,duration:t.duration}),i=v(t.actor)?h(t.actor.login,100):v(t.user)?h(t.user.username??t.user.name,100):h(t.actor??t.author,100),d=t.status!==void 0||t.conclusion!==void 0||t.state!==void 0;return{name:b(t,["name","workflow","pipeline"],200),title:b(t,["display_title","title"],300)||h(u.message,300).split(`
`)[0]||"",status:d&&!(t.status==="completed"&&!t.conclusion)?B(t):q(o),event:b(t,["event","source","trigger"],60),branch:b(t,["head_branch","ref","branch"],200),commit:(h(t.head_sha??t.sha??u.id,64)||"").slice(0,40),actor:i,url:O(t.html_url??t.web_url??t.url),started:c,duration:r,jobs:o,columns:n}}function et(e){let t=/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z) ?/.exec(e),s=t?t[1].slice(11,19):"",o=t?e.slice(t[0].length):e,n=/^(?:##\[(group|endgroup|error|warning|command)\]|::(group|endgroup|error|warning)(?: [^:]*)?::)(.*)$/.exec(o);return n?{kind:{group:"group",endgroup:"end",error:"error",warning:"warning",command:"command"}[n[1]??n[2]],text:n[3],time:s}:{kind:"line",text:o,time:s}}var st=Object.freeze({workflowStatus_queued:"Queued",workflowStatus_running:"In progress",workflowStatus_success:"Success",workflowStatus_failure:"Failed",workflowStatus_cancelled:"Cancelled",workflowStatus_skipped:"Skipped",workflowRun:"Workflow run",workflowGraph:"Jobs",workflowJob:"{name}: {status}",workflowCounts:"{success} succeeded, {failure} failed, {running} in progress",workflowTrigger:"Event",workflowBranch:"Branch",workflowCommit:"Commit",workflowBy:"by {actor}",workflowDuration:"Total duration",workflowStarted:"Started {time}",workflowNeeds:"Needs {jobs}",workflowRunner:"Runner: {runner}",workflowSteps:"Steps of {name}",workflowOpen:"Open the job",workflowNoLog:"No log for this step.",workflowNoSteps:"No steps.",workflowTruncated:"Only the first {count} lines are shown.",workflowChoose:"Choose a job to see its steps and logs.",workflowCopyLog:"Copy the log",workflowShape:'Expected a workflow run with "jobs" (GitHub Actions, GitLab, or your own JSON).',workflowEmpty:"This run has no jobs."}),rt={workflowStatus_queued:"En attente",workflowStatus_running:"En cours",workflowStatus_success:"R\xE9ussi",workflowStatus_failure:"\xC9chou\xE9",workflowStatus_cancelled:"Annul\xE9",workflowStatus_skipped:"Ignor\xE9",workflowRun:"Ex\xE9cution du workflow",workflowGraph:"Jobs",workflowCounts:"{success} r\xE9ussis, {failure} \xE9chou\xE9s, {running} en cours",workflowTrigger:"\xC9v\xE9nement",workflowBranch:"Branche",workflowCommit:"Commit",workflowBy:"par {actor}",workflowDuration:"Dur\xE9e totale",workflowStarted:"D\xE9marr\xE9 {time}",workflowNeeds:"Attend {jobs}",workflowRunner:"Runner : {runner}",workflowSteps:"\xC9tapes de {name}",workflowOpen:"Ouvrir le job",workflowNoLog:"Pas de journal pour cette \xE9tape.",workflowNoSteps:"Aucune \xE9tape.",workflowTruncated:"Seules les {count} premi\xE8res lignes sont affich\xE9es.",workflowChoose:"Choisissez un job pour voir ses \xE9tapes et ses journaux.",workflowCopyLog:"Copier le journal",workflowShape:'Une ex\xE9cution de workflow avec "jobs" (GitHub Actions, GitLab, ou votre JSON) est attendue.',workflowEmpty:"Cette ex\xE9cution n\u2019a aucun job."};X({en:st,fr:rt});var p={width:216,height:52,gapX:64,gapY:14,head:28},J=5e3,ot={queued:"status-circle",running:"status-running",success:"status-success",failure:"status-failure",cancelled:"status-skipped",skipped:"status-skipped"},nt="http://www.w3.org/2000/svg",at=class extends U{static type="workflow";static componentAttributes=Object.freeze(["job","now"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,download:!0,fullscreen:!0}};static styles=[R,V,K,P,Q];constructor(){super(),this.panelId=N("panel"),this.model=null,this.selected=null,this.opened=new Map,this.ticker=void 0}contentChanged(){this.model=null}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.ticker),this.ticker=void 0}read(){let t=this.text??"";if(this.model?.text===t)return this.model;try{this.model={text:t,workflow:tt(JSON.parse(t)),error:null}}catch(s){let o=s instanceof k?this.t("workflowShape"):this.t("jsonInvalid",{message:s instanceof Error?s.message:""});this.model={text:t,workflow:null,error:o}}return this.model}get workflow(){return this.read().workflow}findJob(t){let s=this.workflow?.jobs??[];return s.find(o=>o.id===t)??s.find(o=>o.name===t)}updateJob(t,s){let o=this.workflow,n=this.findJob(t);if(!o||!n)return;let u=n.status;if(s.status!==void 0&&(n.status=x(s.status,n.status)),typeof s.duration=="number"&&(n.duration=s.duration),s.started!==void 0&&(n.started=typeof s.started=="number"?s.started:Date.parse(s.started)||n.started),Array.isArray(s.steps))for(let c of s.steps){let r=n.steps.find(i=>i.name===c.name);r||n.steps.push(r={name:String(c.name),status:"queued",duration:null,log:""}),c.status!==void 0&&(r.status=x(c.status,r.status)),typeof c.duration=="number"&&(r.duration=c.duration),typeof c.log=="string"&&(r.log=c.log)}o.status=q(o.jobs),this.render(),n.status!==u&&(this.announce(this.t("workflowJob",{name:n.name,status:this.statusWord(n.status)})),C(this,A.JOB_CHANGE,{job:n.id,status:n.status,previous:u}))}appendLog(t,s,o){let n=this.findJob(t);if(!n)return;let u=typeof o=="number"?n.steps[o]:typeof o=="string"?n.steps.find(i=>i.name===o):n.steps.find(i=>i.status==="running")??n.steps.at(-1),c=String(s);u?u.log=u.log?`${u.log}
${c}`:c:n.log=n.log?`${n.log}
${c}`:c,this.render();let r=this.root.querySelector(".wf-step.open:last-of-type .wf-log, .wf-job-log");r&&(r.scrollTop=r.scrollHeight)}statusWord(t){return this.t(`workflowStatus_${t}`)}statusIcon(t){return a("span",{class:`wf-icon status-${t}`,attrs:{"aria-hidden":"true"}},j(ot[t]))}timeOf(t){return t.status==="running"&&t.started?$(Math.max(0,this.now-t.started)):t.duration!==null?$(t.duration):""}renderContent(t){let s=this.t,{workflow:o,error:n}=this.read(),u=a("div",{class:"body data-body wf-body",part:"body"});if(!o)u.append(W(n??""));else if(!o.jobs.length)u.append(a("p",{class:"data-none",text:s("workflowEmpty")}));else{let d=this.chosenJob(o);u.append(this.summaryView(o),this.graphView(o,d)),u.append(d?this.detailsView(d):a("p",{class:"wf-choose",text:s("workflowChoose")}))}let{panel:c,history:r}=this.previewPanel(u,this.panelId),i=o?this.chosenJob(o):null;t.append(...this.chrome({badge:o?this.statusWord(o.status):"",actions:[...r,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.text??"",this.downloadName("workflow.json"),"application/json"):null,this.feature("copy")&&i?this.copyButton(()=>ft(i),s("workflowCopyLog")):null]}),c),this.editor?.align(),this.tick(o)}tick(t){if(!(!!t?.jobs.some(o=>o.status==="running"&&o.started)&&!this.hasAttribute("now"))){clearInterval(this.ticker),this.ticker=void 0;return}this.ticker||(this.ticker=setInterval(()=>{if(document.hidden)return;let o=this.workflow?.jobs??[];for(let n of this.root.querySelectorAll("[data-time-of]")){let u=o.find(c=>c.id===n.dataset.timeOf);u&&(n.textContent=this.timeOf(u))}},1e3))}chosenJob(t){let s=this.selected??this.getAttribute("job"),o=s?t.jobs.find(n=>n.id===s)??t.jobs.find(n=>n.name===s):null;return o||(this.selected===""?null:t.jobs.find(n=>n.status==="failure")??t.jobs.find(n=>n.status==="running")??null)}summaryView(t){let s=this.t,o=r=>t.jobs.filter(i=>i.status===r).length,n=a("div",{class:"wf-facts"}),u=(r,i)=>n.append(a("span",{class:"wf-fact"},a("span",{class:"wf-fact-label",text:r}),i));t.event&&u(s("workflowTrigger"),a("strong",{text:t.event})),t.branch&&u(s("workflowBranch"),a("code",{class:"wf-branch",text:t.branch})),t.commit&&u(s("workflowCommit"),a("code",{text:t.commit.slice(0,7),attrs:{title:t.commit}})),t.duration!==null&&u(s("workflowDuration"),a("strong",{text:$(t.duration)}));let c=[t.actor?s("workflowBy",{actor:t.actor}):"",t.started!==null?s("workflowStarted",{time:this.relativeTime(t.started)}):""].filter(Boolean).join(" \xB7 ");return a("section",{class:`wf-summary status-${t.status}`,part:"summary",attrs:{"aria-label":s("workflowRun")}},a("span",{class:`wf-big status-${t.status}`},j(ot[t.status])),a("div",{class:"wf-heading"},a("p",{class:"wf-title"},t.url?a("a",{text:t.title||t.name,attrs:{href:t.url,rel:"noopener"}}):a("strong",{text:t.title||t.name||s("workflowRun")}),a("span",{class:`wf-pill status-${t.status}`,text:this.statusWord(t.status)})),a("p",{class:"wf-sub",text:[t.title&&t.name?t.name:"",c].filter(Boolean).join(" \xB7 ")}),n),a("p",{class:"wf-counts",text:s("workflowCounts",{success:S(o("success"),this.locale),failure:S(o("failure"),this.locale),running:S(o("running"),this.locale)})}))}graphView(t,s){let o=this.t,n=t.jobs,u=t.columns.length?p.head:0,c=Math.max(...n.map(l=>l.column))+1,r=Math.max(...n.map(l=>l.row))+1,i=c*(p.width+p.gapX)-p.gapX,d=u+r*(p.height+p.gapY)-p.gapY,f=l=>l.column*(p.width+p.gapX),_=l=>u+l.row*(p.height+p.gapY),m=a("div",{class:"wf-canvas"});m.style.setProperty("--_w",`${i}px`),m.style.setProperty("--_h",`${d}px`);let w=document.createElementNS(nt,"svg");w.setAttribute("class","wf-links"),w.setAttribute("width",String(i)),w.setAttribute("height",String(d)),w.setAttribute("aria-hidden","true");let z=new Map(n.flatMap(l=>[[l.name,l],[l.id,l]]));for(let l of n)for(let y of new Set(l.needs.map(g=>z.get(g)).filter(g=>g&&g!==l))){let g=y,M=f(g)+p.width,I=_(g)+p.height/2,D=f(l),G=_(l)+p.height/2,E=document.createElementNS(nt,"path");E.setAttribute("d",`M${M} ${I} C${M+p.gapX/2} ${I} ${D-p.gapX/2} ${G} ${D} ${G}`),E.setAttribute("class",`wf-link status-${g.status}${l.status==="running"?" flowing":""}`),w.append(E)}m.append(w),t.columns.forEach((l,y)=>{let g=a("span",{class:"wf-column",text:l});g.style.setProperty("--_x",`${y*(p.width+p.gapX)}px`),m.append(g)});for(let l of n){let y=this.timeOf(l),g=a("button",{class:`wf-job status-${l.status}${l===s?" chosen":""}`,part:"job",attrs:{type:"button","aria-pressed":String(l===s),"data-job":l.id,"data-focus-key":`job-${l.id}`},on:{click:()=>this.choose(l)}},this.statusIcon(l.status),a("span",{class:"wf-job-name",text:l.name})," ",a("span",{class:"wf-job-time",text:y,attrs:{"data-time-of":l.status==="running"?l.id:null}}),a("span",{class:"sr-only",text:`, ${this.statusWord(l.status)}`}));g.style.setProperty("--_x",`${f(l)}px`),g.style.setProperty("--_y",`${_(l)}px`),m.append(g)}return a("div",{class:"wf-graph",part:"graph",attrs:{role:"group","aria-label":o("workflowGraph")},on:{keydown:l=>this.moveFocus(l,n)}},m)}moveFocus(t,s){let o=s.find(i=>i.id===t.target.dataset?.job);if(!o)return;let n={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]}[t.key];if(!n)return;let u=o.column+n[0],r=s.filter(i=>i.column===u&&(n[1]===0||(n[1]<0?i.row<o.row:i.row>o.row))).sort((i,d)=>Math.abs(i.row-o.row)-Math.abs(d.row-o.row))[0];r&&(t.preventDefault(),this.root.querySelector(`[data-job="${CSS.escape(r.id)}"]`)?.focus())}choose(t){this.selected=t.id,this.render(),this.root.querySelector(`[data-job="${CSS.escape(t.id)}"]`)?.focus(),C(this,A.SELECT,{id:t.id,name:t.name,status:t.status})}detailsView(t){let s=this.t,o=this.timeOf(t),n=a("section",{class:`wf-details status-${t.status}`,part:"details",attrs:{"aria-label":s("workflowSteps",{name:t.name})}},a("div",{class:"wf-details-head"},this.statusIcon(t.status),a("strong",{class:"wf-details-name",text:t.name}),a("span",{class:"wf-muted",text:[this.statusWord(t.status),o].filter(Boolean).join(" \xB7 "),attrs:{"data-time-of":t.status==="running"?t.id:null}}),t.url?a("a",{class:"wf-open",text:s("workflowOpen"),attrs:{href:t.url,rel:"noopener"}}):null)),u=[t.needs.length?s("workflowNeeds",{jobs:t.needs.join(", ")}):"",t.runner?s("workflowRunner",{runner:t.runner}):""].filter(Boolean);if(u.length&&n.append(a("p",{class:"wf-notes",text:u.join(" \xB7 ")})),!t.steps.length)return n.append(t.log?this.logView(t.log,"wf-job-log"):a("p",{class:"wf-muted",text:s("workflowNoSteps")})),n;let c=a("ol",{class:"wf-steps"});return t.steps.forEach((r,i)=>{let d=`${t.id}\0${i}`,f=this.opened.get(d)??(r.status==="failure"||r.status==="running"),_=N("log");c.append(a("li",{class:`wf-step status-${r.status}${f?" open":""}`},a("button",{class:"wf-step-head",attrs:{type:"button","aria-expanded":String(f),"aria-controls":f?_:null,"data-focus-key":`step-${i}`},on:{click:()=>{this.opened.set(d,!f),this.render(),C(this,A.TOGGLE,{job:t.id,step:r.name,open:!f})}}},j("chevron-right"),this.statusIcon(r.status),a("span",{class:"wf-step-name",text:r.name}),a("span",{class:"wf-step-time",text:r.duration!==null?$(r.duration):""})),f?r.log?this.logView(r.log,"wf-log",_):a("p",{class:"wf-nolog",text:s("workflowNoLog"),attrs:{id:_}}):null))}),n.append(c),n}logView(t,s,o){let n=this.t,u=t.split(/\r?\n/),c=a("div",{class:`wf-logbox ${s}`,part:"log",attrs:{id:o??null,tabindex:"0",role:"log"}}),r=[c];return u.slice(0,J).forEach((i,d)=>{let f=et(i),_=r[r.length-1];if(f.kind==="end"){r.length>1&&r.pop();return}let m=a("div",{class:`wf-line ${f.kind}`},a("span",{class:"wf-ln",text:String(d+1),attrs:{"aria-hidden":"true"}}));f.time&&m.append(a("span",{class:"wf-time",text:f.time}));let w=a("span",{class:"wf-text"}),[z=[]]=Y(f.text);for(let l of z)w.append(F(l));if(m.append(w),f.kind==="group"){let l=a("details",{class:"wf-group"},a("summary",{},m));_.append(l),r.push(l)}else _.append(m)}),u.length>J&&c.append(a("p",{class:"wf-nolog",text:n("workflowTruncated",{count:S(J,this.locale)})})),c}};function ft(e){return e.steps.length?e.steps.map(t=>`## ${t.name} (${t.status})
${t.log}`.trimEnd()).join(`

`):e.log}export{at as a};
