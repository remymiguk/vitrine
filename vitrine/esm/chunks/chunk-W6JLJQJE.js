/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as I}from"./chunk-5Y6ZLKSA.js";import{$ as V,B as f,K as E,M as O,O as T,e as A,o as a,q as m}from"./chunk-JAZI474S.js";import{k as g,l as v,m as N,q as k}from"./chunk-SCKP2KTO.js";var j=`/*
 * <vt-questionnaire>: a progress indicator, one question as a fieldset, its controls and the
 * buttons. Colors, sizes and radii come from the tokens only, so light and dark both work.
 */
.q-body {
  display: grid;
  gap: var(--_space-4);
  padding: var(--_space-4) var(--_space-5);
  color: var(--_fg);
  container-type: inline-size;
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
  transform: scaleX(var(--_ratio, 0));
  transform-origin: left center;
  transition: transform 0.25s ease;
}

.progress-steps {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1) var(--_space-3);
  margin: 0;
  padding: 0;
  list-style: none;
}

.progress-link {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-2);
  min-height: 28px;
  padding: 0 var(--_space-2) 0 0;
  border: 0;
  border-radius: var(--_radius-full);
  background: transparent;
  color: var(--_fg-muted);
  font: inherit;
  font-size: var(--_font-size-small);
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

.progress-link .mark {
  display: inline-grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  background: var(--_surface);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
}

.progress-link .icon {
  width: 14px;
  height: 14px;
}

.progress-item.done .mark {
  border-color: var(--_accent-fg);
  color: var(--_accent-fg);
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

/* ---------- A question ---------- */

.step {
  display: grid;
  gap: var(--_space-3);
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
}

.q-legend {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--_space-1) var(--_space-2);
  padding: 0;
}

.q-title {
  margin: 0;
  font-size: 1.2em;
  font-weight: 650;
  line-height: 1.3;
  overflow-wrap: anywhere;
}

.q-title:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 3px;
  border-radius: var(--_radius-sm);
}

.q-mark {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 400;
}

.q-hint {
  margin: 0;
  color: var(--_fg-muted);
  overflow-wrap: anywhere;
}

/* The question is the legend: the label of an embedded field would say it twice. */
.q-field::part(label),
.q-field::part(required),
.q-date::part(label) {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

/* A field only keeps its own message to describe its input; the step shows the error. */
.q-field::part(error) {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

/* ---------- Choices ---------- */

.options,
.option-group {
  display: grid;
  gap: var(--_space-2);
}

.option-group-name {
  margin: var(--_space-2) 0 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 650;
  letter-spacing: 0.02em;
}

.option {
  display: flex;
  align-items: flex-start;
  gap: var(--_space-3);
  padding: var(--_space-3);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  cursor: pointer;
}

.option:hover {
  background: var(--_accent-soft);
}

.option:has(input:checked) {
  border-color: var(--_accent-fg);
  background: var(--_accent-soft);
  box-shadow: inset 3px 0 0 var(--_accent);
}

.option:has(input:focus-visible) {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.option input {
  flex: none;
  width: 18px;
  height: 18px;
  margin: 2px 0 0;
  accent-color: var(--_accent);
}

.option-text {
  display: grid;
  gap: 2px;
  min-width: 0;
}

.option-label {
  font-weight: 600;
  overflow-wrap: anywhere;
}

.option-desc {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  overflow-wrap: anywhere;
}

/* ---------- Errors: an icon and a word as well as the color ---------- */

.q-error {
  display: flex;
  align-items: flex-start;
  gap: var(--_space-2);
  margin: 0;
  color: var(--_danger);
  font-weight: 600;
  overflow-wrap: anywhere;
}

.q-error .icon {
  flex: none;
  width: 16px;
  height: 16px;
  margin-top: 2px;
}

.step[data-invalid] .option {
  border-color: var(--_danger);
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

.btn-q {
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

.btn-q:hover {
  background: var(--_accent-soft);
}

.btn-q:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.btn-q.primary {
  border-color: var(--_accent);
  background: var(--_accent);
  color: var(--_on-accent);
}

.btn-q.primary:hover {
  background: var(--_accent);
  filter: brightness(0.94);
}

.btn-q.ghost {
  border-color: transparent;
  background: transparent;
  color: var(--_accent-fg);
}

.btn-q.ghost:hover {
  background: var(--_accent-soft);
}

/* ---------- Review ---------- */

.review-list {
  display: grid;
  margin: 0;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.review-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--_space-1) var(--_space-3);
  align-items: center;
  padding: var(--_space-3);
}

.review-row + .review-row {
  border-top: 1px solid var(--_border);
}

.review-row > * {
  margin: 0;
}

.review-q {
  grid-column: 1;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.review-a {
  grid-column: 1;
  font-weight: 600;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.review-a.skipped {
  color: var(--_fg-muted);
  font-style: italic;
  font-weight: 400;
}

.review-edit {
  grid-column: 2;
  grid-row: 1 / span 2;
}

@media (prefers-reduced-motion: reduce) {
  .bar-fill {
    transition: none;
  }
}
`;var Z=["single","multiple","text","textarea","email","number","tags","date"];var d=Object.freeze({questions:200,options:500,tags:100,label:300,hint:600,text:1e4,pattern:200}),ee=new Set(["__proto__","prototype","constructor"]),te=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,re=/^(\d{4})-(\d{2})-(\d{2})$/;function p(r,e){return typeof r=="string"||typeof r=="number"?String(r).replace(/\s+/g," ").trim().slice(0,e):""}function x(r){let e=typeof r=="string"&&r.trim()!==""?Number(r):r;return typeof e=="number"&&Number.isFinite(e)?e:null}function ie(r){return r===!0||r==="true"||r===""}function ne(r,e){if(!Array.isArray(r))return[];let t=[],i=new Set;for(let n of r.slice(0,d.options)){let s=f(n)?n:{value:n},o=p(s.value??s.id??s.label,d.label);!o||i.has(o)||(i.add(o),t.push({value:o,label:p(s.label??s.name??o,d.label)||o,description:p(s.description,d.hint),group:p(s[e]??s.group,d.label)}))}return t}function F(r){let e=p(r,10);return y(e)?e:""}function y(r){let e=re.exec(r);if(!e)return!1;let[t,i,n]=[Number(e[1]),Number(e[2]),Number(e[3])],s=new Date(Date.UTC(t,i-1,n));return s.getUTCFullYear()===t&&s.getUTCMonth()===i-1&&s.getUTCDate()===n}function se(r,e,t){if(!f(r))return null;let i=Z.find(u=>u===String(r.type??"text").toLowerCase());if(!i)return null;let n=p(r.id,64).replace(/[^\w.-]/g,"_");for((!n||ee.has(n)||t.has(n))&&(n=`q${e+1}`);t.has(n);)n+="_";t.add(n);let s=i==="date",o=typeof r.groupBy=="string"?r.groupBy.slice(0,40):"group";return{id:n,type:i,label:p(r.label??r.title??r.question,d.label)||n,short:p(r.short,60),hint:p(r.hint,d.hint),placeholder:p(r.placeholder,d.label),required:ie(r.required),options:i==="single"||i==="multiple"?ne(r.options,o):[],min:s?null:x(r.min),max:s?null:x(r.max),minDate:s?F(r.min):"",maxDate:s?F(r.max):"",minLength:x(r.minLength??r.minlength),maxLength:x(r.maxLength??r.maxlength),pattern:p(r.pattern,d.pattern)}}function R(r){if(!Array.isArray(r))return[];let e=new Set,t=[];for(let[i,n]of r.slice(0,d.questions).entries()){let s=se(n,i,e);s&&t.push(s)}return t}function U(r){if(!r.trim())return{questions:[],error:""};try{let e=JSON.parse(r),t=Array.isArray(e)?e:f(e)?e.questions:null;return Array.isArray(t)?{questions:R(t),error:""}:{questions:[],error:"questions"}}catch(e){return{questions:[],error:e instanceof Error?e.message:"json"}}}function b(r){return r==null?!0:Array.isArray(r)?r.length===0:typeof r=="string"?r.trim()==="":!1}function C(r,e){switch(r.type){case"single":{let t=typeof e=="string"?e:"";return r.options.some(i=>i.value===t)?t:null}case"multiple":{let t=Array.isArray(e)?e.map(String):[],i=r.options.map(n=>n.value).filter(n=>t.includes(n));return i.length?i:null}case"tags":{let t=Array.isArray(e)?e:[],i=[...new Set(t.map(n=>p(n,100)).filter(Boolean))];return i.length?i.slice(0,d.tags):null}case"number":{let t=x(e);return t===null?null:t}case"date":return typeof e=="string"&&y(e)?e:null;default:{let t=typeof e=="string"?e.slice(0,d.text):"";return t.trim()===""?null:t}}}function P(r,e){let t={};if(!f(e))return t;for(let i of r){if(!Object.hasOwn(e,i.id))continue;let n=C(i,e[i.id]);n!==null&&(t[i.id]=n)}return t}function ae(r){for(let e of["v","u"])try{return new RegExp(`^(?:${r})$`,e)}catch{}return null}function oe(r,e){let{minLength:t,maxLength:i}=r;if(r.type==="email"&&(e.length>254||!te.test(e)))return{code:"email",params:{}};if(t!==null&&e.length<t)return{code:"tooShort",params:{min:t}};if(i!==null&&e.length>i)return{code:"tooLong",params:{max:i}};let n=r.pattern?ae(r.pattern):null;return n&&!n.test(e)?{code:"pattern",params:{}}:null}function B(r,e,t){let{min:i,max:n}=r;return i!==null&&e<i?{code:t?"tooFew":"underflow",params:{min:i}}:n!==null&&e>n?{code:t?"tooMany":"overflow",params:{max:n}}:null}function S(r,e){if(b(e))return r.required?{code:"required",params:{}}:null;switch(r.type){case"single":return r.options.some(t=>t.value===e)?null:{code:"unknown",params:{}};case"multiple":case"tags":return Array.isArray(e)?B(r,e.length,!0):{code:"unknown",params:{}};case"number":return typeof e=="number"&&Number.isFinite(e)?B(r,e,!1):{code:"number",params:{}};case"date":return typeof e!="string"||!y(e)?{code:"date",params:{}}:r.minDate&&e<r.minDate?{code:"dateMin",params:{min:r.minDate}}:r.maxDate&&e>r.maxDate?{code:"dateMax",params:{max:r.maxDate}}:null;default:return typeof e=="string"?oe(r,e):{code:"unknown",params:{}}}}function _(r,e){for(let[t,i]of r.entries()){let n=S(i,e[i.id]);if(n)return{index:t,problem:n}}return null}function q(r,e,t){let i=t?e:e-1;return r<i?r+1:-1}var $=Object.freeze({questionnaireStepOf:"Step {current} of {total}",questionnaireReviewStep:"Review",questionnaireProgress:"Progress",questionnaireSteps:"Steps",questionnaireStepLabel:"Step {current}: {label}",questionnaireNext:"Next",questionnaireBack:"Back",questionnaireSkip:"Skip",questionnaireReview:"Review answers",questionnaireSubmit:"Submit",questionnaireEdit:"Edit",questionnaireEditAnswer:"Edit: {label}",questionnaireReviewTitle:"Review your answers",questionnaireSkipped:"Skipped",questionnaireRequired:"required",questionnaireOptional:"optional",questionnaireErrorPrefix:"Error:",questionnaireDone:"Thank you. Your answers were recorded.",questionnaireRestart:"Start over",questionnaireNoQuestions:"There are no questions to ask.",questionnaireBadQuestions:"The questions could not be read: {message}",questionnaireIncomplete:"Some answers are missing or not valid.",questionnaireChoices:"{count} selected",questionnaireRequiredOne:"Choose an option.",questionnaireRequiredMany:"Choose at least one option.",questionnaireRequiredText:"This question is required.",questionnaireUnknown:"This answer is not one of the choices.",questionnaireTooFew:"Choose at least {min}.",questionnaireTooMany:"Choose at most {max}.",questionnaireUnderflow:"Enter {min} or more.",questionnaireOverflow:"Enter {max} or less.",questionnaireTooShort:"Enter at least {min} characters.",questionnaireTooLong:"Enter at most {max} characters.",questionnairePattern:"This answer does not have the expected format.",questionnaireEmail:"Enter an email address, such as name@example.com.",questionnaireNumber:"Enter a number.",questionnaireDate:"Enter a date, such as 2026-12-31.",questionnaireDateMin:"Choose {min} or a later date.",questionnaireDateMax:"Choose {max} or an earlier date."}),Q=Object.freeze({questionnaireStepOf:"\xC9tape {current} sur {total}",questionnaireReviewStep:"V\xE9rification",questionnaireProgress:"Progression",questionnaireSteps:"\xC9tapes",questionnaireStepLabel:"\xC9tape {current} : {label}",questionnaireNext:"Suivant",questionnaireBack:"Retour",questionnaireSkip:"Passer",questionnaireReview:"V\xE9rifier les r\xE9ponses",questionnaireSubmit:"Envoyer",questionnaireEdit:"Modifier",questionnaireEditAnswer:"Modifier : {label}",questionnaireReviewTitle:"V\xE9rifiez vos r\xE9ponses",questionnaireSkipped:"Pass\xE9e",questionnaireRequired:"obligatoire",questionnaireOptional:"facultatif",questionnaireErrorPrefix:"Erreur :",questionnaireDone:"Merci. Vos r\xE9ponses ont \xE9t\xE9 enregistr\xE9es.",questionnaireRestart:"Recommencer",questionnaireNoQuestions:"Il n'y a aucune question \xE0 poser.",questionnaireBadQuestions:"Les questions sont illisibles : {message}",questionnaireIncomplete:"Des r\xE9ponses manquent ou ne sont pas valides.",questionnaireChoices:"{count} s\xE9lectionn\xE9s",questionnaireRequiredOne:"Choisissez une option.",questionnaireRequiredMany:"Choisissez au moins une option.",questionnaireRequiredText:"Cette question est obligatoire.",questionnaireUnknown:"Cette r\xE9ponse ne fait pas partie des choix.",questionnaireTooFew:"Choisissez-en au moins {min}.",questionnaireTooMany:"Choisissez-en au plus {max}.",questionnaireUnderflow:"Saisissez {min} ou plus.",questionnaireOverflow:"Saisissez {max} ou moins.",questionnaireTooShort:"Saisissez au moins {min} caract\xE8res.",questionnaireTooLong:"Saisissez au plus {max} caract\xE8res.",questionnairePattern:"Cette r\xE9ponse n'a pas le format attendu.",questionnaireEmail:"Saisissez une adresse e-mail, comme nom@exemple.com.",questionnaireNumber:"Saisissez un nombre.",questionnaireDate:"Saisissez une date, comme 2026-12-31.",questionnaireDateMin:"Choisissez le {min} ou une date plus tardive.",questionnaireDateMax:"Choisissez le {max} ou une date plus pr\xE9coce."});function D(r,e){return a(r,e)}function Y(r){return a("p",{class:"q-error",part:"error",attrs:{id:r,hidden:!0,"data-error":""}})}function le(r){let e=[];for(let t of r){let i=e[e.length-1];i&&i.name===t.group?i.options.push(t):e.push({name:t.group,options:[t]})}return e}function ue(r,e,t,i){let n=e.description?m("desc"):null,s=a("input",{attrs:{type:r.type==="multiple"?"checkbox":"radio",name:i,value:e.value,checked:t,"aria-describedby":n}});return a("label",{class:"option",part:"option"},s,a("span",{class:"option-text"},a("span",{class:"option-label",text:e.label}),e.description?a("span",{class:"option-desc",text:e.description,attrs:{id:n}}):null))}function ce(r,e){if(!["ArrowDown","ArrowRight","ArrowUp","ArrowLeft"].includes(r.key))return;let t=[...e.querySelectorAll("input")],i=t.indexOf(r.target);if(i<0)return;r.preventDefault();let n=r.key==="ArrowDown"||r.key==="ArrowRight"?1:-1;t[(i+n+t.length)%t.length].focus()}function pe(r,e,t,i){let n=r.type==="multiple",s=new Set(Array.isArray(e)?e:[e]),o=m("choice"),u=a("div",{class:"options",attrs:{role:n?"group":"radiogroup","aria-labelledby":i.heading,"aria-describedby":i.describedBy,"aria-required":!n&&r.required?"true":null}});for(let l of le(r.options)){let c=l.name?m("group"):null,h=a("div",{class:"option-group",attrs:{role:l.name?"group":null,"aria-labelledby":c}});l.name&&h.append(a("p",{class:"option-group-name",text:l.name,attrs:{id:c}}));for(let w of l.options)h.append(ue(r,w,s.has(w.value),o));u.append(h)}return u.addEventListener("change",()=>{let l=[...u.querySelectorAll("input:checked")],c=n?l.map(h=>h.value):l[0]?.value??"";t.onInput(r,c),t.onChange(r,c)}),u.addEventListener("keydown",l=>{l.key.startsWith("Arrow")&&t.onArrow(),n&&ce(l,u),l.key==="Enter"&&(l.preventDefault(),t.onEnter())}),u}function de(r,e,t){let i=r.type==="textarea",n=D("vt-field",{class:"q-field",attrs:{type:i?"textarea":"text",label:r.label,value:b(e)?null:String(e),placeholder:r.placeholder||null,inputmode:r.type==="email"?"email":r.type==="number"?"decimal":null,autocomplete:r.type==="email"?"email":null,maxlength:r.type==="number"?null:r.maxLength}});return n.addEventListener("vt-input",s=>{s.stopPropagation(),t.onInput(r,n.value)}),n.addEventListener("vt-change",s=>{s.stopPropagation(),t.onChange(r,n.value)}),i||n.addEventListener("keydown",s=>{s.key!=="Enter"||s.isComposing||(s.preventDefault(),t.onEnter())}),n}function he(r,e,t){let i=D("vt-tags",{class:"q-tags",attrs:{mode:"edit","allow-create":!0,label:r.label,placeholder:r.placeholder||null}});i.value=Array.isArray(e)?e:[],i.addEventListener("vt-change",n=>{n.stopPropagation(),t.onInput(r,i.value),t.onChange(r,i.value)});for(let n of["vt-input","vt-tag-add","vt-tag-remove"])i.addEventListener(n,s=>s.stopPropagation());return i}function fe(r,e,t){let i=D("vt-date-picker",{class:"q-date",attrs:{label:r.label,value:typeof e=="string"?e:null,min:r.minDate||null,max:r.maxDate||null,clearable:!r.required}});return i.addEventListener("vt-input",n=>{n.stopPropagation(),t.onInput(r,i.value)}),i.addEventListener("vt-change",n=>{n.stopPropagation(),t.onChange(r,i.value)}),i}function me(r,e,t,i){switch(r.type){case"single":case"multiple":return pe(r,e,t,i);case"tags":return he(r,e,t);case"date":return fe(r,e,t);default:return de(r,e,t)}}function L(r,e,t,{current:i}){let n=m("q"),s={heading:`${n}-title`,hint:`${n}-hint`,error:`${n}-error`},o=[r.hint?s.hint:"",s.error].filter(Boolean).join(" "),u=t.t(r.required?"questionnaireRequired":"questionnaireOptional");return a("fieldset",{class:"step",part:"step",attrs:{"data-question":r.id,"aria-current":i?"step":null,"aria-describedby":o}},a("legend",{class:"q-legend",part:"question"},a("h2",{class:"q-title",text:r.label,attrs:{id:s.heading,tabindex:"-1"}}),a("span",{class:"q-mark",text:u,attrs:{"data-required":r.required?"":null}})),r.hint?a("p",{class:"q-hint",part:"hint",text:r.hint,attrs:{id:s.hint}}):null,me(r,e,t,{heading:s.heading,describedBy:o}),Y(s.error))}function G(r,e,t){let i=r.querySelector("[data-error]");if(i){i.replaceChildren(),i.hidden=!e,e&&i.append(T("alert"),a("span",{class:"sr-only",text:t("questionnaireErrorPrefix")}),a("span",{text:e})),r.toggleAttribute("data-invalid",!!e);for(let n of r.querySelectorAll(".options"))e?n.setAttribute("aria-invalid","true"):n.removeAttribute("aria-invalid");for(let n of r.querySelectorAll("vt-field")){let s=n;typeof s.setCustomValidity=="function"&&s.setCustomValidity(e)}}}function z(r){return r.querySelector("input, vt-field, vt-tags, vt-date-picker")}function K({kind:r,steps:e,index:t,text:i,t:n,onGo:s}){if(r==="bar"){let u=a("div",{class:"bar",attrs:{role:"progressbar","aria-label":n("questionnaireProgress"),"aria-valuemin":"1","aria-valuemax":String(e.length),"aria-valuenow":String(t+1),"aria-valuetext":i}},a("span",{class:"bar-fill"}));return u.style.setProperty("--_ratio",String((t+1)/Math.max(1,e.length))),a("div",{class:"progress",part:"progress"},a("p",{class:"progress-text",text:i}),u)}let o=e.map((u,l)=>{let c=l===t,h=[a("span",{class:"mark",attrs:{"aria-hidden":"true"}},u.done&&!c?T("check"):String(l+1)),a("span",{class:"step-name",text:u.label})],w=n("questionnaireStepLabel",{current:l+1,label:u.label});return a("li",{class:`progress-item${c?" current":""}${u.done?" done":""}`,attrs:{"aria-current":c?"step":null}},u.reachable&&!c?a("button",{class:"progress-link",attrs:{type:"button","aria-label":w},on:{click:()=>s(l)}},...h):a("span",{class:"progress-link",attrs:{"aria-label":c?w:null}},...h))});return a("div",{class:"progress",part:"progress"},a("p",{class:"progress-text",text:i}),a("ol",{class:"progress-steps",attrs:{"aria-label":n("questionnaireSteps")}},...o))}function M({back:r,skip:e,next:t,t:i,on:n}){let s=(o,u,l,c)=>a("button",{class:`btn-q ${c}`,text:u,attrs:{type:"button","data-focus-key":o},on:{click:l}});return a("div",{class:"nav",part:"nav"},r?s("back",i("questionnaireBack"),n.back,"secondary"):a("span"),a("span",{class:"nav-end"},e?s("skip",i("questionnaireSkip"),n.skip,"ghost"):null,s("next",t,n.next,"primary")))}function J({questions:r,summary:e,t,onEdit:i}){let n=m("review"),s=r.map((o,u)=>{let l=e(o);return a("div",{class:"review-row"},a("dt",{class:"review-q",text:o.label}),a("dd",{class:`review-a${l?"":" skipped"}`,text:l||t("questionnaireSkipped")}),a("dd",{class:"review-edit"},a("button",{class:"btn-q ghost",attrs:{type:"button","aria-label":t("questionnaireEditAnswer",{label:o.label})},on:{click:()=>i(u)}},t("questionnaireEdit"))))});return a("section",{class:"step review",part:"review",attrs:{"aria-labelledby":n}},a("h2",{class:"q-title",text:t("questionnaireReviewTitle"),attrs:{id:n,tabindex:"-1"}}),a("dl",{class:"review-list"},...s),Y(`${n}-error`))}N({en:$,fr:Q});var ge=350,ve=["steps","all"],be=["none","bar","steps"],X={layout:"layout",progress:"progress",review:"review",autoAdvance:"auto-advance",allowSkip:"allow-skip"},we={required:"questionnaireRequiredText",tooFew:"questionnaireTooFew",tooMany:"questionnaireTooMany",underflow:"questionnaireUnderflow",overflow:"questionnaireOverflow",tooShort:"questionnaireTooShort",tooLong:"questionnaireTooLong",pattern:"questionnairePattern",email:"questionnaireEmail",number:"questionnaireNumber",date:"questionnaireDate",dateMin:"questionnaireDateMin",dateMax:"questionnaireDateMax",unknown:"questionnaireUnknown"},H=class extends I{static type="questionnaire";static formAssociated=!0;static allowEmpty=!0;static componentAttributes=Object.freeze(["name","layout","auto-advance","review","progress","allow-skip"]);static dataAttributes=Object.freeze(Object.values(X));static upgradeProperties=Object.freeze(["content","questions","value"]);static presets={simple:{review:!1,"auto-advance":!1},full:{review:!0,"auto-advance":!0}};static styles=[j];static fromData(e){let t=O(e,["questions"]);if(!t)return{content:typeof e=="string"?e:E(e)};let i={};if(f(e))for(let[n,s]of Object.entries(X))Object.hasOwn(e,n)&&(i[s]=e[n]);return{content:E(t),attributes:i}}constructor(){super(),this.internals=typeof this.attachInternals=="function"?this.attachInternals():null,this.questionList=null,this.parsed=null,this.answers={},this.index=0,this.reached=0,this.problems=new Map,this.done=!1,this.fromReview=!1,this.pendingFocus=null,this.advanceTimer=void 0,this.arrowed=!1,this.addEventListener("invalid",e=>{e.preventDefault(),this.revealProblem()})}list(){if(this.questionList)return this.questionList;let e=this.text??"";return this.parsed?.text!==e&&(this.parsed={text:e,result:U(e)}),this.parsed.result.questions}get questions(){return this.list().map(e=>({...e,options:e.options.map(t=>({...t}))}))}set questions(e){this.questionList=Array.isArray(e)?R(e):null,this.questionsChanged()}get value(){let e={};for(let[t,i]of Object.entries(this.answers))e[t]=Array.isArray(i)?[...i]:i;return e}set value(e){this.answers=P(this.list(),e),this.problems.clear(),this.sync(),this.requestRender()}get step(){return this.index}get form(){return this.internals?.form??null}get layout(){return A(this.getAttribute("layout"),ve,"steps")}get hasReview(){return this.layout==="steps"&&this.list().length>0&&this.feature("review")}questionsChanged(){let e=this.list();this.answers=P(e,this.answers),this.problems.clear(),this.index=Math.min(this.index,this.lastPosition()),this.reached=Math.min(this.reached,this.lastPosition()),this.sync(),this.requestRender()}contentChanged(){this.parsed=null,this.isConnected&&!this.questionList&&this.questionsChanged()}lastPosition(){let e=this.list().length;return Math.max(0,this.hasReview?e:e-1)}idAt(e){return this.list()[e]?.id??"review"}sync(){if(!this.internals)return;let e=this.getAttribute("name");this.internals.setFormValue(e?JSON.stringify(this.answers):null);let t=_(this.list(),this.answers);if(!t)this.internals.setValidity({});else{let i=t.problem.code==="required"?{valueMissing:!0}:{customError:!0};this.internals.setValidity(i,this.t("questionnaireIncomplete"))}}formResetCallback(){this.reset()}formStateRestoreCallback(e){if(typeof e=="string")try{this.value=JSON.parse(e)}catch{}}focus(e){let t=this.root.querySelector("fieldset");(t?z(t):this.root.querySelector("h2"))?.focus(e)}disconnectedCallback(){clearTimeout(this.advanceTimer),super.disconnectedCallback()}store(e,t){let i=C(e,t);return i===null&&e.type==="number"&&typeof t=="string"&&t.trim()&&(i=t.trim().slice(0,50)),i===null?delete this.answers[e.id]:this.answers[e.id]=i,this.sync(),i}answered(e,t,i){let n=this.store(e,t),s=e.type==="multiple"||e.type==="tags"?[]:"",o={id:e.id,value:n??s};this.problems.has(e.id)&&this.showProblem(e),i?(v(this,g.CHANGE,o),this.maybeAdvance(e)):v(this,g.INPUT,o)}maybeAdvance(e){clearTimeout(this.advanceTimer),!(e.type!=="single"||this.arrowed)&&(this.layout!=="steps"||!this.feature("auto-advance")||q(this.index,this.list().length,this.hasReview)<0||this.list()[this.index]===e&&(this.advanceTimer=setTimeout(()=>{this.list()[this.index]===e&&!S(e,this.answers[e.id])&&this.next()},ge)))}describe(e){let t=S(e,this.answers[e.id]);return t?t.code==="required"?this.t(e.type==="multiple"?"questionnaireRequiredMany":e.type==="single"?"questionnaireRequiredOne":"questionnaireRequiredText"):this.t(we[t.code],t.params):""}showProblem(e,t=!1){let i=this.describe(e);i?this.problems.set(e.id,i):this.problems.delete(e.id);let n=[...this.root.querySelectorAll("fieldset")].find(s=>s.dataset.question===e.id);return n&&G(n,i,this.t),i&&t&&this.announce(i),!i}revealProblem(){let e=_(this.list(),this.answers);e&&(this.done=!1,this.layout==="steps"&&this.index!==e.index&&this.move(e.index),this.showAll())}showAll(){let e=this.layout==="all"?this.list():[this.list()[this.index]],t=null;for(let n of e)n&&!this.showProblem(n,!t)&&(t??=n);if(!t)return;let i=[...this.root.querySelectorAll("fieldset")].find(n=>n.dataset.question===t.id);i&&z(i)?.focus()}move(e){let t=this.index;clearTimeout(this.advanceTimer),this.index=e,this.reached=Math.max(this.reached,e),e>=this.list().length&&(this.fromReview=!1),this.pendingFocus="title",this.render(),v(this,g.STEP,{from:t,to:e,id:this.idAt(e)}),this.announce(this.stepText())}stepText(){let e=this.list().length;return this.index>=e?this.t("questionnaireReviewStep"):this.t("questionnaireStepOf",{current:k(this.index+1,this.locale),total:k(e,this.locale)})}next(){let e=this.list();if(this.done||!e.length)return!1;if(this.layout==="all"||this.index>=e.length)return this.submit();if(!this.showProblem(e[this.index],!0))return!1;let t=this.fromReview?e.length:q(this.index,e.length,this.hasReview);return t<0?this.submit():(this.move(t),!0)}back(){return this.done||this.layout!=="steps"||this.index<=0?!1:(this.fromReview=!1,this.move(this.index-1),!0)}goTo(e){if(this.done||this.layout!=="steps")return!1;let t=this.list(),i=typeof e=="number"?e:t.findIndex(s=>s.id===e),n=i<0&&e==="review"&&this.hasReview?t.length:i;return!Number.isInteger(n)||n<0||n>this.lastPosition()||n===this.index||n>this.index&&this.index<t.length&&!this.showProblem(t[this.index],!0)?!1:(this.fromReview=!1,this.move(n),!0)}skip(){let e=this.list()[this.index];if(!e||e.required)return;this.store(e,null),this.problems.delete(e.id);let t=this.fromReview?this.list().length:q(this.index,this.list().length,this.hasReview);t<0?this.submit():this.move(t)}edit(e){this.move(e),this.fromReview=!0}reset(){clearTimeout(this.advanceTimer);let e=this.index;this.answers={},this.problems.clear(),this.index=0,this.reached=0,this.done=!1,this.fromReview=!1,this.pendingFocus=null,this.sync(),this.render(),e!==0&&v(this,g.STEP,{from:e,to:0,id:this.idAt(0)})}submit(){if(this.done||!this.list().length)return!1;let e=_(this.list(),this.answers);return e?(this.layout==="steps"&&this.index!==e.index&&this.move(e.index),this.showAll(),!1):(this.done=!0,this.pendingFocus="done",this.sync(),this.render(),this.announce(this.t("questionnaireDone")),v(this,g.SUBMIT,{value:this.value}),!0)}render(){super.render(),this.afterRender()}afterRender(){let e=this.pendingFocus;if(this.pendingFocus=null,!e)return;let t=this.root.querySelector(e==="done"?".done h2":"h2");(e==="title"||e==="done")&&t?.focus({preventScroll:!1})}renderContent(e){let t=this.list();if(!this.questionList&&this.parsed?.result.error){e.append(this.dataNotice({error:"json",message:this.parsed.result.error}));return}let i=a("div",{class:"q-body",attrs:{role:this.heading?"group":null,"aria-label":this.heading||null}});if(e.append(i),!t.length){i.append(V(this.t));return}this.index=Math.min(this.index,this.lastPosition()),this.done?i.append(this.doneView()):this.layout==="all"?this.drawPage(i,t):this.drawStep(i,t);for(let n of t)this.problems.has(n.id)&&this.showProblem(n)}context(){return{t:this.t,locale:this.locale,onInput:(e,t)=>this.answered(e,t,!1),onChange:(e,t)=>this.answered(e,t,!0),onEnter:()=>this.next(),onArrow:()=>{this.arrowed=!0,setTimeout(()=>this.arrowed=!1,0)}}}drawStep(e,t){let i=this.t,n=this.context(),s=this.progressKind();s&&e.append(this.progress(t,s));let o=t[this.index],u=q(this.index,t.length,this.hasReview)<0;o?e.append(L(o,this.answers[o.id],n,{current:s!=="steps"})):e.append(J({questions:t,summary:c=>this.summary(c),t:i,onEdit:c=>this.edit(c)}));let l=!o||u?i("questionnaireSubmit"):this.hasReview&&this.index===t.length-1?i("questionnaireReview"):i("questionnaireNext");e.append(M({back:this.index>0,skip:!!o&&!o.required&&this.flag("allow-skip"),next:l,t:i,on:{back:()=>this.back(),skip:()=>this.skip(),next:()=>this.next()}}))}drawPage(e,t){let i=this.context();for(let n of t)e.append(L(n,this.answers[n.id],i,{current:!1}));e.append(M({back:!1,skip:!1,next:this.t("questionnaireSubmit"),t:this.t,on:{back:()=>{},skip:()=>{},next:()=>this.submit()}}))}doneView(){return a("section",{class:"step done",attrs:{"aria-labelledby":"done-title"}},a("h2",{class:"q-title",text:this.t("questionnaireDone"),attrs:{id:"done-title",tabindex:"-1"}}),a("div",{class:"nav",part:"nav"},a("button",{class:"btn-q ghost",text:this.t("questionnaireRestart"),attrs:{type:"button"},on:{click:()=>this.reset()}})))}progressKind(){if(this.layout!=="steps")return null;let e=A(this.getAttribute("progress"),be,this.variant==="full"?"steps":"bar");return e==="none"?null:e}progress(e,t){let i=e.map((n,s)=>({label:n.short||n.label,done:!b(this.answers[n.id])||s<this.reached&&!n.required,reachable:s<=this.reached}));return this.hasReview&&i.push({label:this.t("questionnaireReviewStep"),done:!1,reachable:this.reached>=e.length}),K({kind:t,steps:i,index:this.index,text:this.stepText(),t:this.t,onGo:n=>this.goTo(n)})}summary(e){let t=this.answers[e.id];if(b(t))return"";let i=n=>e.options.find(s=>s.value===n)?.label??n;if(Array.isArray(t))return t.map(i).join(", ");if(typeof t=="number")return k(t,this.locale);if(e.type==="date"&&y(String(t))){let[n,s,o]=String(t).split("-").map(Number);return this.formatDate(Date.UTC(n,s-1,o),{dateStyle:"medium",timeZone:"UTC"})}return i(String(t))}};export{H as a};
