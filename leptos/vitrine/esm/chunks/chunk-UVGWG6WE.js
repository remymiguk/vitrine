/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as j}from"./chunk-5Y6ZLKSA.js";import{$ as I,B as f,K as A,M as N,O as T,e as E,o as a,q as v}from"./chunk-JAZI474S.js";import{k as m,l as g,m as V,q as S}from"./chunk-SCKP2KTO.js";var B=`/*
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
`;var re=["single","multiple","text","textarea","email","number","tags","date"];var p=Object.freeze({questions:200,options:500,tags:100,label:300,hint:600,text:1e4,pattern:200}),ie=new Set(["__proto__","prototype","constructor"]),ne=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,se=/^(\d{4})-(\d{2})-(\d{2})$/;function d(r,e){return typeof r=="string"||typeof r=="number"?String(r).replace(/\s+/g," ").trim().slice(0,e):""}function x(r){let e=typeof r=="string"&&r.trim()!==""?Number(r):r;return typeof e=="number"&&Number.isFinite(e)?e:null}function ae(r){return r===!0||r==="true"||r===""}function oe(r,e){if(!Array.isArray(r))return[];let t=[],i=new Set;for(let n of r.slice(0,p.options)){let s=f(n)?n:{value:n},l=d(s.value??s.id??s.label,p.label);!l||i.has(l)||(i.add(l),t.push({value:l,label:d(s.label??s.name??l,p.label)||l,description:d(s.description,p.hint),group:d(s[e]??s.group,p.label)}))}return t}function F(r){let e=d(r,10);return y(e)?e:""}function y(r){let e=se.exec(r);if(!e)return!1;let[t,i,n]=[Number(e[1]),Number(e[2]),Number(e[3])],s=new Date(Date.UTC(t,i-1,n));return s.getUTCFullYear()===t&&s.getUTCMonth()===i-1&&s.getUTCDate()===n}function le(r,e,t){if(!f(r))return null;let i=re.find(o=>o===String(r.type??"text").toLowerCase());if(!i)return null;let n=d(r.id,64).replace(/[^\w.-]/g,"_");for((!n||ie.has(n)||t.has(n))&&(n=`q${e+1}`);t.has(n);)n+="_";t.add(n);let s=i==="date",l=typeof r.groupBy=="string"?r.groupBy.slice(0,40):"group";return{id:n,type:i,label:d(r.label??r.title??r.question,p.label)||n,short:d(r.short,60),hint:d(r.hint,p.hint),placeholder:d(r.placeholder,p.label),required:ae(r.required),options:i==="single"||i==="multiple"?oe(r.options,l):[],min:s?null:x(r.min),max:s?null:x(r.max),minDate:s?F(r.min):"",maxDate:s?F(r.max):"",minLength:x(r.minLength??r.minlength),maxLength:x(r.maxLength??r.maxlength),pattern:d(r.pattern,p.pattern)}}function R(r){if(!Array.isArray(r))return[];let e=new Set,t=[];for(let[i,n]of r.slice(0,p.questions).entries()){let s=le(n,i,e);s&&t.push(s)}return t}function $(r){if(!r.trim())return{questions:[],error:""};try{let e=JSON.parse(r),t=Array.isArray(e)?e:f(e)?e.questions:null;return Array.isArray(t)?{questions:R(t),error:""}:{questions:[],error:"questions"}}catch(e){return{questions:[],error:e instanceof Error?e.message:"json"}}}function b(r){return r==null?!0:Array.isArray(r)?r.length===0:typeof r=="string"?r.trim()==="":!1}function C(r,e){switch(r.type){case"single":{let t=typeof e=="string"?e:"";return r.options.some(i=>i.value===t)?t:null}case"multiple":{let t=Array.isArray(e)?e.map(String):[],i=r.options.map(n=>n.value).filter(n=>t.includes(n));return i.length?i:null}case"tags":{let t=Array.isArray(e)?e:[],i=[...new Set(t.map(n=>d(n,100)).filter(Boolean))];return i.length?i.slice(0,p.tags):null}case"number":{let t=x(e);return t===null?null:t}case"date":return typeof e=="string"&&y(e)?e:null;default:{let t=typeof e=="string"?e.slice(0,p.text):"";return t.trim()===""?null:t}}}function D(r,e){let t={};if(!f(e))return t;for(let i of r){if(!Object.hasOwn(e,i.id))continue;let n=C(i,e[i.id]);n!==null&&(t[i.id]=n)}return t}function ue(r){for(let e of["v","u"])try{return new RegExp(`^(?:${r})$`,e)}catch{}return null}function ce(r,e){let{minLength:t,maxLength:i}=r;if(r.type==="email"&&(e.length>254||!ne.test(e)))return{code:"email",params:{}};if(t!==null&&e.length<t)return{code:"tooShort",params:{min:t}};if(i!==null&&e.length>i)return{code:"tooLong",params:{max:i}};let n=r.pattern?ue(r.pattern):null;return n&&!n.test(e)?{code:"pattern",params:{}}:null}function U(r,e,t){let{min:i,max:n}=r;return i!==null&&e<i?{code:t?"tooFew":"underflow",params:{min:i}}:n!==null&&e>n?{code:t?"tooMany":"overflow",params:{max:n}}:null}function q(r,e){if(b(e))return r.required?{code:"required",params:{}}:null;switch(r.type){case"single":return r.options.some(t=>t.value===e)?null:{code:"unknown",params:{}};case"multiple":case"tags":return Array.isArray(e)?U(r,e.length,!0):{code:"unknown",params:{}};case"number":return typeof e=="number"&&Number.isFinite(e)?U(r,e,!1):{code:"number",params:{}};case"date":return typeof e!="string"||!y(e)?{code:"date",params:{}}:r.minDate&&e<r.minDate?{code:"dateMin",params:{min:r.minDate}}:r.maxDate&&e>r.maxDate?{code:"dateMax",params:{max:r.maxDate}}:null;default:return typeof e=="string"?ce(r,e):{code:"unknown",params:{}}}}function _(r,e){for(let[t,i]of r.entries()){let n=q(i,e[i.id]);if(n)return{index:t,problem:n}}return null}function k(r,e,t){let i=t?e:e-1;return r<i?r+1:-1}var Q=Object.freeze({questionnaireStepOf:"Step {current} of {total}",questionnaireReviewStep:"Review",questionnaireProgress:"Progress",questionnaireSteps:"Steps",questionnaireStepLabel:"Step {current}: {label}",questionnaireNext:"Next",questionnaireBack:"Back",questionnaireSkip:"Skip",questionnaireReview:"Review answers",questionnaireSubmit:"Submit",questionnaireEdit:"Edit",questionnaireEditAnswer:"Edit: {label}",questionnaireReviewTitle:"Review your answers",questionnaireSkipped:"Skipped",questionnaireRequired:"required",questionnaireOptional:"optional",questionnaireErrorPrefix:"Error:",questionnaireDone:"Thank you. Your answers were recorded.",questionnaireRestart:"Start over",questionnaireNoQuestions:"There are no questions to ask.",questionnaireBadQuestions:"The questions could not be read: {message}",questionnaireIncomplete:"Some answers are missing or not valid.",questionnaireChoices:"{count} selected",questionnaireRequiredOne:"Choose an option.",questionnaireRequiredMany:"Choose at least one option.",questionnaireRequiredText:"This question is required.",questionnaireUnknown:"This answer is not one of the choices.",questionnaireTooFew:"Choose at least {min}.",questionnaireTooMany:"Choose at most {max}.",questionnaireUnderflow:"Enter {min} or more.",questionnaireOverflow:"Enter {max} or less.",questionnaireTooShort:"Enter at least {min} characters.",questionnaireTooLong:"Enter at most {max} characters.",questionnairePattern:"This answer does not have the expected format.",questionnaireEmail:"Enter an email address, such as name@example.com.",questionnaireNumber:"Enter a number.",questionnaireDate:"Enter a date, such as 2026-12-31.",questionnaireDateMin:"Choose {min} or a later date.",questionnaireDateMax:"Choose {max} or an earlier date."}),Y=Object.freeze({questionnaireStepOf:"\xC9tape {current} sur {total}",questionnaireReviewStep:"V\xE9rification",questionnaireProgress:"Progression",questionnaireSteps:"\xC9tapes",questionnaireStepLabel:"\xC9tape {current} : {label}",questionnaireNext:"Suivant",questionnaireBack:"Retour",questionnaireSkip:"Passer",questionnaireReview:"V\xE9rifier les r\xE9ponses",questionnaireSubmit:"Envoyer",questionnaireEdit:"Modifier",questionnaireEditAnswer:"Modifier : {label}",questionnaireReviewTitle:"V\xE9rifiez vos r\xE9ponses",questionnaireSkipped:"Pass\xE9e",questionnaireRequired:"obligatoire",questionnaireOptional:"facultatif",questionnaireErrorPrefix:"Erreur :",questionnaireDone:"Merci. Vos r\xE9ponses ont \xE9t\xE9 enregistr\xE9es.",questionnaireRestart:"Recommencer",questionnaireNoQuestions:"Il n'y a aucune question \xE0 poser.",questionnaireBadQuestions:"Les questions sont illisibles : {message}",questionnaireIncomplete:"Des r\xE9ponses manquent ou ne sont pas valides.",questionnaireChoices:"{count} s\xE9lectionn\xE9s",questionnaireRequiredOne:"Choisissez une option.",questionnaireRequiredMany:"Choisissez au moins une option.",questionnaireRequiredText:"Cette question est obligatoire.",questionnaireUnknown:"Cette r\xE9ponse ne fait pas partie des choix.",questionnaireTooFew:"Choisissez-en au moins {min}.",questionnaireTooMany:"Choisissez-en au plus {max}.",questionnaireUnderflow:"Saisissez {min} ou plus.",questionnaireOverflow:"Saisissez {max} ou moins.",questionnaireTooShort:"Saisissez au moins {min} caract\xE8res.",questionnaireTooLong:"Saisissez au plus {max} caract\xE8res.",questionnairePattern:"Cette r\xE9ponse n'a pas le format attendu.",questionnaireEmail:"Saisissez une adresse e-mail, comme nom@exemple.com.",questionnaireNumber:"Saisissez un nombre.",questionnaireDate:"Saisissez une date, comme 2026-12-31.",questionnaireDateMin:"Choisissez le {min} ou une date plus tardive.",questionnaireDateMax:"Choisissez le {max} ou une date plus pr\xE9coce."});function P(r,e){return a(r,e)}var L="?";function J(r){return r.key!=="Enter"||r.isComposing||r.defaultPrevented?!1:r.composedPath()[0]instanceof HTMLInputElement}function G(r){return a("p",{class:"q-error",part:"error",attrs:{id:r,hidden:!0,"data-error":""}})}function de(r){let e=[];for(let t of r){let i=e[e.length-1];i&&i.name===t.group?i.options.push(t):e.push({name:t.group,options:[t]})}return e}function pe(r,e,t,i){let n=e.description?v("desc"):null,s=a("input",{attrs:{type:r.type==="multiple"?"checkbox":"radio",name:i,value:e.value,checked:t,"aria-describedby":n}});return a("label",{class:"option",part:"option"},s,a("span",{class:"option-text"},a("span",{class:"option-label",text:e.label}),e.description?a("span",{class:"option-desc",text:e.description,attrs:{id:n}}):null))}function he(r,e){if(!["ArrowDown","ArrowRight","ArrowUp","ArrowLeft"].includes(r.key))return;let t=[...e.querySelectorAll("input")],i=t.indexOf(r.target);if(i<0)return;r.preventDefault();let n=r.key==="ArrowDown"||r.key==="ArrowRight"?1:-1;t[(i+n+t.length)%t.length].focus()}function fe(r,e,t,i){let n=r.type==="multiple",s=new Set(Array.isArray(e)?e:[e]),l=v("choice"),o=a("div",{class:"options",attrs:{role:n?"group":"radiogroup","aria-labelledby":i.heading,"aria-describedby":i.describedBy,"aria-required":!n&&r.required?"true":null}});for(let u of de(r.options)){let c=u.name?v("group"):null,h=a("div",{class:"option-group",attrs:{role:u.name?"group":null,"aria-labelledby":c}});u.name&&h.append(a("p",{class:"option-group-name",text:u.name,attrs:{id:c}}));for(let w of u.options)h.append(pe(r,w,s.has(w.value),l));o.append(h)}return o.addEventListener("change",()=>{let u=[...o.querySelectorAll("input:checked")],c=n?u.map(h=>h.value):u[0]?.value??"";t.onInput(r,c),t.onChange(r,c)}),o.addEventListener("keydown",u=>{u.key.startsWith("Arrow")&&t.onArrow(),n&&he(u,o),u.key==="Enter"&&(u.preventDefault(),t.onEnter())}),o}function me(r,e,t){let i=r.type==="textarea",n=P("vt-field",{class:"q-field",attrs:{type:i?"textarea":"text",label:r.label,value:b(e)?null:String(e),placeholder:r.placeholder||null,inputmode:r.type==="email"?"email":r.type==="number"?"decimal":null,autocomplete:r.type==="email"?"email":null,maxlength:r.type==="number"?null:r.maxLength}});return n.addEventListener("vt-input",s=>{s.stopPropagation(),t.onInput(r,n.value)}),n.addEventListener("vt-change",s=>{s.stopPropagation(),t.onChange(r,n.value)}),i||n.addEventListener("keydown",s=>{s.key!=="Enter"||s.isComposing||(s.preventDefault(),t.onEnter())}),n}function ge(r,e,t){let i=P("vt-tags",{class:"q-tags",attrs:{mode:"edit","allow-create":!0,label:r.label,placeholder:r.placeholder||null}});i.value=Array.isArray(e)?e:[],i.addEventListener("vt-change",n=>{n.stopPropagation(),t.onInput(r,i.value),t.onChange(r,i.value)});for(let n of["vt-input","vt-tag-add","vt-tag-remove"])i.addEventListener(n,s=>s.stopPropagation());return i.addEventListener("keydown",n=>{J(n)&&(n.preventDefault(),t.onEnter())}),i}function ve(r,e,t){let i=P("vt-date-picker",{class:"q-date",attrs:{label:r.label,value:typeof e=="string"?e:null,min:r.minDate||null,max:r.maxDate||null,clearable:!r.required}}),n=()=>i.validity?.badInput?L:i.value;i.addEventListener("vt-input",o=>{o.stopPropagation(),t.onInput(r,n())}),i.addEventListener("vt-change",o=>{o.stopPropagation(),t.onChange(r,n())});let s=!1;i.addEventListener("vt-toggle",o=>{o.stopPropagation(),s=!!o.detail?.expanded});let l=!1;return i.addEventListener("keydown",o=>{l=!s&&J(o)}),i.addEventListener("keyup",o=>{o.key!=="Enter"||!l||(l=!1,t.onEnter())}),i}function be(r,e,t,i){switch(r.type){case"single":case"multiple":return fe(r,e,t,i);case"tags":return ge(r,e,t);case"date":return ve(r,e,t);default:return me(r,e,t)}}function M(r,e,t,{current:i}){let n=v("q"),s={heading:`${n}-title`,hint:`${n}-hint`,error:`${n}-error`},l=[r.hint?s.hint:"",s.error].filter(Boolean).join(" "),o=t.t(r.required?"questionnaireRequired":"questionnaireOptional");return a("fieldset",{class:"step",part:"step",attrs:{"data-question":r.id,"aria-current":i?"step":null,"aria-describedby":l}},a("legend",{class:"q-legend",part:"question"},a("h2",{class:"q-title",text:r.label,attrs:{id:s.heading,tabindex:"-1"}}),a("span",{class:"q-mark",text:o,attrs:{"data-required":r.required?"":null}})),r.hint?a("p",{class:"q-hint",part:"hint",text:r.hint,attrs:{id:s.hint}}):null,be(r,e,t,{heading:s.heading,describedBy:l}),G(s.error))}function K(r,e,t){let i=r.querySelector("[data-error]");if(i){i.replaceChildren(),i.hidden=!e,e&&i.append(T("alert"),a("span",{class:"sr-only",text:t("questionnaireErrorPrefix")}),a("span",{text:e})),r.toggleAttribute("data-invalid",!!e);for(let n of r.querySelectorAll(".options"))e?n.setAttribute("aria-invalid","true"):n.removeAttribute("aria-invalid");for(let n of r.querySelectorAll("vt-field")){let s=n;typeof s.setCustomValidity=="function"&&s.setCustomValidity(e)}}}function z(r){return r.querySelector("input, vt-field, vt-tags, vt-date-picker")}function H({kind:r,steps:e,index:t,text:i,t:n,onGo:s}){if(r==="bar"){let o=a("div",{class:"bar",attrs:{role:"progressbar","aria-label":n("questionnaireProgress"),"aria-valuemin":"1","aria-valuemax":String(e.length),"aria-valuenow":String(t+1),"aria-valuetext":i}},a("span",{class:"bar-fill"}));return o.style.setProperty("--_ratio",String((t+1)/Math.max(1,e.length))),a("div",{class:"progress",part:"progress"},a("p",{class:"progress-text",text:i}),o)}let l=e.map((o,u)=>{let c=u===t,h=[a("span",{class:"mark",attrs:{"aria-hidden":"true"}},o.done&&!c?T("check"):String(u+1)),a("span",{class:"step-name",text:o.label})],w=n("questionnaireStepLabel",{current:u+1,label:o.label});return a("li",{class:`progress-item${c?" current":""}${o.done?" done":""}`,attrs:{"aria-current":c?"step":null}},o.reachable&&!c?a("button",{class:"progress-link",attrs:{type:"button","aria-label":w},on:{click:()=>s(u)}},...h):a("span",{class:"progress-link",attrs:{"aria-label":c?w:null}},...h))});return a("div",{class:"progress",part:"progress"},a("p",{class:"progress-text",text:i}),a("ol",{class:"progress-steps",attrs:{"aria-label":n("questionnaireSteps")}},...l))}function O({back:r,skip:e,next:t,t:i,on:n}){let s=(l,o,u,c)=>a("button",{class:`btn-q ${c}`,text:o,attrs:{type:"button","data-focus-key":l},on:{click:u}});return a("div",{class:"nav",part:"nav"},r?s("back",i("questionnaireBack"),n.back,"secondary"):a("span"),a("span",{class:"nav-end"},e?s("skip",i("questionnaireSkip"),n.skip,"ghost"):null,s("next",t,n.next,"primary")))}function X({questions:r,summary:e,t,onEdit:i}){let n=v("review"),s=r.map((l,o)=>{let u=e(l);return a("div",{class:"review-row"},a("dt",{class:"review-q",text:l.label}),a("dd",{class:`review-a${u?"":" skipped"}`,text:u||t("questionnaireSkipped")}),a("dd",{class:"review-edit"},a("button",{class:"btn-q ghost",attrs:{type:"button","aria-label":t("questionnaireEditAnswer",{label:l.label})},on:{click:()=>i(o)}},t("questionnaireEdit"))))});return a("section",{class:"step review",part:"review",attrs:{"aria-labelledby":n}},a("h2",{class:"q-title",text:t("questionnaireReviewTitle"),attrs:{id:n,tabindex:"-1"}}),a("dl",{class:"review-list"},...s),G(`${n}-error`))}V({en:Q,fr:Y});var we=350,xe=["steps","all"],ye=["none","bar","steps"],W={layout:"layout",progress:"progress",review:"review",autoAdvance:"auto-advance",allowSkip:"allow-skip"};function Z(r){return r.type==="multiple"||r.type==="tags"?[]:""}var qe={required:"questionnaireRequiredText",tooFew:"questionnaireTooFew",tooMany:"questionnaireTooMany",underflow:"questionnaireUnderflow",overflow:"questionnaireOverflow",tooShort:"questionnaireTooShort",tooLong:"questionnaireTooLong",pattern:"questionnairePattern",email:"questionnaireEmail",number:"questionnaireNumber",date:"questionnaireDate",dateMin:"questionnaireDateMin",dateMax:"questionnaireDateMax",unknown:"questionnaireUnknown"},ee=class extends j{static type="questionnaire";static formAssociated=!0;static allowEmpty=!0;static componentAttributes=Object.freeze(["name","layout","auto-advance","review","progress","allow-skip"]);static dataAttributes=Object.freeze(Object.values(W));static upgradeProperties=Object.freeze(["content","questions","value"]);static presets={simple:{review:!1,"auto-advance":!1},full:{review:!0,"auto-advance":!0}};static styles=[B];static fromData(e){let t=N(e,["questions"]);if(!t)return{content:typeof e=="string"?e:A(e)};let i={};if(f(e))for(let[n,s]of Object.entries(W))Object.hasOwn(e,n)&&(i[s]=e[n]);return{content:A(t),attributes:i}}constructor(){super(),this.internals=typeof this.attachInternals=="function"?this.attachInternals():null,this.questionList=null,this.parsed=null,this.answers={},this.told=new Map,this.index=0,this.reached=0,this.problems=new Map,this.done=!1,this.fromReview=!1,this.pendingFocus=null,this.advanceTimer=void 0,this.arrowed=!1,this.addEventListener("invalid",e=>{e.preventDefault(),this.revealProblem()})}list(){if(this.questionList)return this.questionList;let e=this.text??"";return this.parsed?.text!==e&&(this.parsed={text:e,result:$(e)}),this.parsed.result.questions}get questions(){return this.list().map(e=>({...e,options:e.options.map(t=>({...t}))}))}set questions(e){this.questionList=Array.isArray(e)?R(e):null,this.questionsChanged()}get value(){let e={};for(let t of this.list()){let i=this.accepted(t);i!==void 0&&(e[t.id]=Array.isArray(i)?[...i]:i)}return e}set value(e){this.answers=D(this.list(),e),this.problems.clear(),this.told=new Map(Object.entries(this.value)),this.sync(),this.requestRender()}get step(){return this.index}get form(){return this.internals?.form??null}get layout(){return E(this.getAttribute("layout"),xe,"steps")}get hasReview(){return this.layout==="steps"&&this.list().length>0&&this.feature("review")}questionsChanged(){let e=this.list();this.answers=D(e,this.answers),this.problems.clear(),this.told=new Map(Object.entries(this.value));let t=this.index;this.index=Math.min(this.index,this.lastPosition()),this.reached=Math.min(this.reached,this.lastPosition()),this.sync(),this.requestRender(),this.index!==t&&g(this,m.STEP,{from:t,to:this.index,id:this.idAt(this.index)})}contentChanged(){this.parsed=null,this.isConnected&&!this.questionList&&this.questionsChanged()}lastPosition(){let e=this.list().length;return Math.max(0,this.hasReview?e:e-1)}idAt(e){return this.list()[e]?.id??"review"}sync(){if(!this.internals)return;let e=this.getAttribute("name");this.internals.setFormValue(e?JSON.stringify(this.value):null);let t=_(this.list(),this.answers);if(!t)this.internals.setValidity({});else{let i=t.problem.code==="required"?{valueMissing:!0}:{customError:!0};this.internals.setValidity(i,this.t("questionnaireIncomplete"))}}formResetCallback(){this.reset()}formStateRestoreCallback(e){if(typeof e=="string")try{this.value=JSON.parse(e)}catch{}}focus(e){let t=this.root.querySelector("fieldset");(t?z(t):this.root.querySelector("h2"))?.focus(e)}disconnectedCallback(){clearTimeout(this.advanceTimer),super.disconnectedCallback()}store(e,t){let i=C(e,t),n=e.type==="number"||e.type==="date";return i===null&&n&&typeof t=="string"&&t.trim()&&(i=t.trim().slice(0,50)),i===null?delete this.answers[e.id]:this.answers[e.id]=i,this.sync(),i}accepted(e){let t=this.answers[e.id];return t!==void 0&&!q(e,t)?t:void 0}tell(e){let t=this.accepted(e);JSON.stringify(t)!==JSON.stringify(this.told.get(e.id))&&(t===void 0?this.told.delete(e.id):this.told.set(e.id,t),g(this,m.CHANGE,{id:e.id,value:t??Z(e)}))}answered(e,t,i){let n=this.store(e,t);if(this.problems.has(e.id)&&this.showProblem(e),!i){let s=e.type==="date"&&n===L;g(this,m.INPUT,{id:e.id,value:s?"":n??Z(e)});return}this.tell(e),this.maybeAdvance(e)}maybeAdvance(e){clearTimeout(this.advanceTimer),!(e.type!=="single"||this.arrowed)&&(this.layout!=="steps"||!this.feature("auto-advance")||k(this.index,this.list().length,this.hasReview)<0||this.list()[this.index]===e&&(this.advanceTimer=setTimeout(()=>{this.list()[this.index]===e&&!q(e,this.answers[e.id])&&this.next()},we)))}describe(e){let t=q(e,this.answers[e.id]);return t?t.code==="required"?this.t(e.type==="multiple"?"questionnaireRequiredMany":e.type==="single"?"questionnaireRequiredOne":"questionnaireRequiredText"):this.t(qe[t.code],t.params):""}showProblem(e,t=!1){let i=this.describe(e);i?this.problems.set(e.id,i):this.problems.delete(e.id);let n=[...this.root.querySelectorAll("fieldset")].find(s=>s.dataset.question===e.id);return n&&K(n,i,this.t),i&&t&&this.announce(i),!i}revealProblem(){let e=_(this.list(),this.answers);e&&(this.done=!1,this.layout==="steps"&&this.index!==e.index&&this.move(e.index),this.showAll())}showAll(){let e=this.layout==="all"?this.list():[this.list()[this.index]],t=null;for(let n of e)n&&!this.showProblem(n,!t)&&(t??=n);if(!t)return;let i=[...this.root.querySelectorAll("fieldset")].find(n=>n.dataset.question===t.id);i&&z(i)?.focus()}move(e){let t=this.index;clearTimeout(this.advanceTimer),this.index=e,this.reached=Math.max(this.reached,e),e>=this.list().length&&(this.fromReview=!1),this.pendingFocus=this.root.activeElement?"title":null,this.render(),g(this,m.STEP,{from:t,to:e,id:this.idAt(e)}),this.announce(this.stepText())}stepText(){let e=this.list().length;return this.index>=e?this.t("questionnaireReviewStep"):this.t("questionnaireStepOf",{current:S(this.index+1,this.locale),total:S(e,this.locale)})}next(){let e=this.list();if(this.done||!e.length)return!1;if(this.layout==="all"||this.index>=e.length)return this.submit();if(!this.showProblem(e[this.index],!0))return!1;let t=this.fromReview?e.length:k(this.index,e.length,this.hasReview);return t<0?this.submit():(this.move(t),!0)}back(){return this.done||this.layout!=="steps"||this.index<=0?!1:(this.fromReview=!1,this.move(this.index-1),!0)}goTo(e){if(this.done||this.layout!=="steps")return!1;let t=this.list(),i=typeof e=="number"?e:t.findIndex(s=>s.id===e),n=i<0&&e==="review"&&this.hasReview?t.length:i;return!Number.isInteger(n)||n<0||n>this.lastPosition()||n===this.index||n>this.index&&this.index<t.length&&!this.showProblem(t[this.index],!0)?!1:(this.fromReview=!1,this.move(n),!0)}skip(){let e=this.list()[this.index];if(!e||e.required)return;this.store(e,null),this.tell(e),this.problems.delete(e.id);let t=this.fromReview?this.list().length:k(this.index,this.list().length,this.hasReview);t<0?this.submit():this.move(t)}edit(e){this.move(e),this.fromReview=!0}reset(){clearTimeout(this.advanceTimer);let e=this.index;this.answers={},this.told.clear(),this.problems.clear(),this.index=0,this.reached=0,this.done=!1,this.fromReview=!1,this.pendingFocus=null,this.sync(),this.render(),e!==0&&g(this,m.STEP,{from:e,to:0,id:this.idAt(0)})}submit(){if(this.done||!this.list().length)return!1;let e=_(this.list(),this.answers);return e?(this.layout==="steps"&&this.index!==e.index&&this.move(e.index),this.showAll(),!1):(this.done=!0,this.pendingFocus="done",this.sync(),this.render(),this.announce(this.t("questionnaireDone")),g(this,m.SUBMIT,{value:this.value}),!0)}render(){super.render(),this.afterRender()}afterRender(){let e=this.pendingFocus;if(this.pendingFocus=null,!e)return;let t=this.root.querySelector(e==="done"?".done h2":"h2");(e==="title"||e==="done")&&t?.focus({preventScroll:!1})}renderContent(e){let t=this.list();if(!this.questionList&&this.parsed?.result.error){e.append(this.dataNotice({error:"json",message:this.parsed.result.error}));return}let i=a("div",{class:"q-body",attrs:{role:this.heading?"group":null,"aria-label":this.heading||null}});if(e.append(i),!t.length){i.append(I(this.t));return}this.index=Math.min(this.index,this.lastPosition()),this.done?i.append(this.doneView()):this.layout==="all"?this.drawPage(i,t):this.drawStep(i,t);for(let n of t)this.problems.has(n.id)&&this.showProblem(n)}context(){return{t:this.t,locale:this.locale,onInput:(e,t)=>this.answered(e,t,!1),onChange:(e,t)=>this.answered(e,t,!0),onEnter:()=>this.next(),onArrow:()=>{this.arrowed=!0,setTimeout(()=>this.arrowed=!1,0)}}}drawStep(e,t){let i=this.t,n=this.context(),s=this.progressKind();s&&e.append(this.progress(t,s));let l=t[this.index],o=k(this.index,t.length,this.hasReview)<0;l?e.append(M(l,this.answers[l.id],n,{current:s!=="steps"})):e.append(X({questions:t,summary:c=>this.summary(c),t:i,onEdit:c=>this.edit(c)}));let u=!l||o?i("questionnaireSubmit"):this.hasReview&&this.index===t.length-1?i("questionnaireReview"):i("questionnaireNext");e.append(O({back:this.index>0,skip:!!l&&!l.required&&this.flag("allow-skip"),next:u,t:i,on:{back:()=>this.back(),skip:()=>this.skip(),next:()=>this.next()}}))}drawPage(e,t){let i=this.context();for(let n of t)e.append(M(n,this.answers[n.id],i,{current:!1}));e.append(O({back:!1,skip:!1,next:this.t("questionnaireSubmit"),t:this.t,on:{back:()=>{},skip:()=>{},next:()=>this.submit()}}))}doneView(){return a("section",{class:"step done",attrs:{"aria-labelledby":"done-title"}},a("h2",{class:"q-title",text:this.t("questionnaireDone"),attrs:{id:"done-title",tabindex:"-1"}}),a("div",{class:"nav",part:"nav"},a("button",{class:"btn-q ghost",text:this.t("questionnaireRestart"),attrs:{type:"button"},on:{click:()=>this.reset()}})))}progressKind(){if(this.layout!=="steps")return null;let e=E(this.getAttribute("progress"),ye,this.variant==="full"?"steps":"bar");return e==="none"?null:e}progress(e,t){let i=e.map((n,s)=>({label:n.short||n.label,done:!b(this.answers[n.id])||s<this.reached&&!n.required,reachable:s<=this.reached}));return this.hasReview&&i.push({label:this.t("questionnaireReviewStep"),done:!1,reachable:this.reached>=e.length}),H({kind:t,steps:i,index:this.index,text:this.stepText(),t:this.t,onGo:n=>this.goTo(n)})}summary(e){let t=this.answers[e.id];if(b(t))return"";let i=n=>e.options.find(s=>s.value===n)?.label??n;if(Array.isArray(t))return t.map(i).join(", ");if(typeof t=="number")return S(t,this.locale);if(e.type==="date"&&y(String(t))){let[n,s,l]=String(t).split("-").map(Number);return this.formatDate(Date.UTC(n,s-1,l),{dateStyle:"medium",timeZone:"UTC"})}return i(String(t))}};export{ee as a};
