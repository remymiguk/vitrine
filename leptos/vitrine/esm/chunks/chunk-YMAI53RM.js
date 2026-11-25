/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as _,b as D,c as O,d as b,e as w,f as R,g as p,h as j,i as I,j as L,k as l,l as h,m as q,n as $,o as k,p as E,q as T,r as z,s as F}from"./chunk-RKGRWACM.js";import{a as A}from"./chunk-4UYDCZNF.js";import{a as M}from"./chunk-PIFKHUVR.js";import{a as P}from"./chunk-5Y6ZLKSA.js";import{B as C,O as x,c as v,d as y,o as a,q as c}from"./chunk-JAZI474S.js";import{k as f,l as m,m as S}from"./chunk-SCKP2KTO.js";var N=`/*
 * Date picker: the field (from field.css), a calendar under it, and the usual periods on its
 * side. Days are a grid of 40px cells, so a finger can choose them.
 */
.date-anchor {
  position: relative;
}

.date-box {
  gap: var(--_space-1);
  padding-right: var(--_space-1);
}

.date-side {
  display: contents;
}

.date-input {
  min-width: 0;
  font-variant-numeric: tabular-nums;
}

.range .date-input {
  flex: 1 1 8ch;
}

.date-dash {
  flex: none;
  color: var(--_fg-muted);
}

.date-toggle[aria-expanded='true'] {
  background: var(--_accent-soft);
  color: var(--_fg);
}

.date-format {
  color: var(--_fg-muted);
}

/* ---------- Calendar ---------- */

.date-popup {
  position: absolute;
  z-index: 20;
  top: calc(100% + 4px);
  left: 0;
  display: flex;
  gap: var(--_space-3);
  max-width: min(100vw - 32px, 100%);
  width: max-content;
  padding: var(--_space-3);
  border: 1px solid var(--_border);
  border-radius: var(--_radius);
  background: var(--_surface-raised);
  box-shadow: 0 12px 32px rgb(0 0 0 / 0.18);
  color: var(--_fg);
}

.date-popup.inline {
  position: static;
  max-width: 100%;
  box-shadow: none;
}

.date-main {
  display: grid;
  gap: var(--_space-2);
  min-width: 0;
}

.date-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--_space-2);
}

.date-title {
  margin: 0;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
}

.date-move:disabled {
  opacity: 0.35;
  cursor: default;
}

.date-months {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-4);
}

.date-month-name {
  margin: 0 0 var(--_space-1);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
}

/* With one month the title above says it already. */
.date-months > .date-month:only-child .date-month-name {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.date-grid {
  border-collapse: collapse;
  table-layout: fixed;
}

.date-grid th {
  width: 40px;
  height: 28px;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 500;
  text-align: center;
}

.date-grid td {
  width: 40px;
  height: 40px;
  padding: 0;
  text-align: center;
}

.date-day {
  position: relative;
  border-radius: var(--_radius-sm);
  cursor: pointer;
  font-variant-numeric: tabular-nums;
}

.date-day:hover {
  background: var(--_accent-soft);
}

.date-day:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.date-day.today .date-number {
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.date-day.in-range,
.date-day.preview {
  border-radius: 0;
  background: var(--_accent-soft);
}

.date-day.in-range.week-start,
.date-day.preview.week-start {
  border-top-left-radius: var(--_radius-sm);
  border-bottom-left-radius: var(--_radius-sm);
}

.date-day.in-range.week-end,
.date-day.preview.week-end {
  border-top-right-radius: var(--_radius-sm);
  border-bottom-right-radius: var(--_radius-sm);
}

.date-day.start,
.date-day.end {
  background: var(--_accent);
  color: var(--_on-accent);
}

.date-day.blocked {
  color: var(--_fg-muted);
  cursor: not-allowed;
  opacity: 0.55;
  text-decoration: line-through;
}

.date-day.blocked:hover {
  background: transparent;
}

.date-day[aria-disabled='true']:not(.blocked) {
  cursor: default;
}

.date-foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: var(--_space-2);
}

.date-status {
  flex: 1 1 12em;
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

/* ---------- Usual periods ---------- */

.date-presets {
  display: grid;
  align-content: start;
  gap: 2px;
  min-width: 10em;
  margin: 0;
  padding: 0 var(--_space-3) 0 0;
  border-right: 1px solid var(--_border);
  list-style: none;
}

.date-preset {
  width: 100%;
  padding: var(--_space-1) var(--_space-2);
  border: 0;
  border-radius: var(--_radius-sm);
  background: transparent;
  color: var(--_fg);
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.date-preset:hover,
.date-preset[aria-pressed='true'] {
  background: var(--_accent-soft);
}

.date-preset[aria-pressed='true'] {
  font-weight: 600;
}

.date-preset:disabled {
  background: transparent;
  color: var(--_fg-muted);
  cursor: default;
  text-decoration: line-through;
}

.date-preset:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

/* ---------- Phones ---------- */

@media (max-width: 600px) {
  .date-popup {
    flex-direction: column;
  }

  .date-presets {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0 var(--_space-2);
    border-right: 0;
    border-bottom: 1px solid var(--_border);
  }

  .date-preset {
    width: auto;
  }
}

@media (forced-colors: active) {
  .date-day.start,
  .date-day.end {
    outline: 2px solid Highlight;
  }

  .date-day.in-range,
  .date-day.preview {
    outline: 1px dashed Highlight;
  }
}
`;var U=Object.freeze({dateRequired:"required",dateChoose:"Choose a date",dateChooseRange:"Choose dates",dateStart:"Start",dateEnd:"End",datePrevMonth:"Previous month",dateNextMonth:"Next month",dateToday:"Today",dateClear:"Clear",dateClose:"Close",dateChooseEnd:"Now choose the end date.",dateChosen:"{date} chosen.",dateRangeChosen:"From {start} to {end}.",dateUnavailable:"not available",datePresets:"Periods",datePreset_today:"Today",datePreset_yesterday:"Yesterday",datePreset_last7:"Last 7 days",datePreset_last30:"Last 30 days",datePreset_thisWeek:"This week",datePreset_lastWeek:"Last week",datePreset_nextWeek:"Next week",datePreset_next30:"Next 30 days",datePreset_thisMonth:"This month",datePreset_lastMonth:"Last month",datePreset_thisYear:"This year",dateFormatHint:"Format: {format}",dateFormat_day:"dd",dateFormat_month:"mm",dateFormat_year:"yyyy",dateValueMissing:"Choose a date.",dateValueMissingRange:"Choose a start and an end date.",dateEndMissing:"Choose the end date.",dateBadInput:"Enter a date such as {example}.",dateTooEarly:"Choose {min} or later.",dateTooLate:"Choose {max} or earlier.",dateBlocked:"This date is not available.",dateRangeTooShort:"Choose at least {count} days.",dateRangeTooLong:"Choose at most {count} days."}),B=Object.freeze({dateRequired:"obligatoire",dateChoose:"Choisir une date",dateChooseRange:"Choisir les dates",dateStart:"D\xE9but",dateEnd:"Fin",datePrevMonth:"Mois pr\xE9c\xE9dent",dateNextMonth:"Mois suivant",dateToday:"Aujourd\u2019hui",dateClear:"Effacer",dateClose:"Fermer",dateChooseEnd:"Choisissez maintenant la date de fin.",dateChosen:"{date} choisi.",dateRangeChosen:"Du {start} au {end}.",dateUnavailable:"indisponible",datePresets:"P\xE9riodes",datePreset_today:"Aujourd\u2019hui",datePreset_yesterday:"Hier",datePreset_last7:"7 derniers jours",datePreset_last30:"30 derniers jours",datePreset_thisWeek:"Cette semaine",datePreset_lastWeek:"Semaine derni\xE8re",datePreset_nextWeek:"Semaine prochaine",datePreset_next30:"30 prochains jours",datePreset_thisMonth:"Ce mois-ci",datePreset_lastMonth:"Mois dernier",datePreset_thisYear:"Cette ann\xE9e",dateFormatHint:"Format : {format}",dateFormat_day:"jj",dateFormat_month:"mm",dateFormat_year:"aaaa",dateValueMissing:"Choisissez une date.",dateValueMissingRange:"Choisissez une date de d\xE9but et de fin.",dateEndMissing:"Choisissez la date de fin.",dateBadInput:"Saisissez une date comme {example}.",dateTooEarly:"Choisissez le {min} ou apr\xE8s.",dateTooLate:"Choisissez le {max} ou avant.",dateBlocked:"Cette date n\u2019est pas disponible.",dateRangeTooShort:"Choisissez au moins {count} jours.",dateRangeTooLong:"Choisissez au plus {count} jours."});S({en:U,fr:B});var V={label:"label",hint:"hint",mode:"mode",name:"name",value:"value",required:"required",min:"min",max:"max",disabledDates:"disabled-dates",disabled:"disabled-dates",firstDay:"first-day",months:"months",presets:"presets",inline:"inline",clearable:"clearable",minDays:"min-days",maxDays:"max-days",placeholder:"placeholder"},H=class extends P{static type="date-picker";static formAssociated=!0;static allowEmpty=!0;static componentAttributes=Object.freeze(["mode","name","hint","value","required","disabled","readonly","min","max","disabled-dates","first-day","months","presets","inline","clearable","min-days","max-days","now"]);static dataAttributes=Object.freeze([...new Set(Object.values(V))]);static presets={simple:{},full:{}};static styles=[M,A,N];static fromData(t){if(typeof t=="string")return{content:"",attributes:{value:t}};if(!C(t))return{content:""};let e={};for(let[i,n]of Object.entries(V)){if(!Object.hasOwn(t,i))continue;let o=t[i];e[n]=Array.isArray(o)?JSON.stringify(o):o}let s=C(t.value)?t.value:t;return(Object.hasOwn(s,"start")||Object.hasOwn(s,"end"))&&(e.value=[s.start,s.end].filter(i=>typeof i=="string").join("/")),{content:"",attributes:e}}constructor(){super(),this.internals=typeof this.attachInternals=="function"?this.attachInternals():null,this.ids={label:c("label"),start:c("date"),end:c("date"),hint:c("hint"),error:c("error"),popup:c("calendar"),status:c("status")},this.start=null,this.end=null,this.ready=!1,this.open=!1,this.pending=!1,this.view=0,this.focusDay=null,this.typed={start:null,end:null},this.showErrors=!1,this.formDisabled=!1,this.customMessage="",this.rulesCache=null,this.outside=null,this.addEventListener("invalid",t=>{t.preventDefault(),this.showErrors=!0,this.refreshState(),this.form?.querySelector(":invalid")===this&&this.focus()}),this.addEventListener("focusout",t=>{let e=t.relatedTarget;this.open&&e&&e!==this&&!this.contains(e)&&this.close(!1)})}get isRange(){return(this.getAttribute("mode")??"").trim().toLowerCase()==="range"}has(t){return v(this.getAttribute(t))===!0}get disabled(){return this.formDisabled||this.has("disabled")}get locked(){return this.disabled||this.has("readonly")}get inline(){return this.has("inline")}get today(){let t=R(this.getAttribute("now"));if(t!==null)return t;let e=new Date(this.now);return O(e.getFullYear(),e.getMonth()+1,e.getDate())}limit(t){let e=(this.getAttribute(t)??"").trim().toLowerCase();return(e==="today"?this.today:R(e))??(t==="min"?_:D)}get rules(){let t=this.getAttribute("disabled-dates")??"";return this.rulesCache?.text!==t&&(this.rulesCache={text:t,rules:$(t)}),this.rulesCache.rules}blocked(t){return k(t,this.rules,this.limit("min"),this.limit("max"))}get firstDay(){let t=this.getAttribute("first-day");return t===null?L(this.locale):y(t,{min:0,max:6,fallback:1})}get monthCount(){return y(this.getAttribute("months"),{min:1,max:3,fallback:this.isRange?2:1})}get presetKeys(){if(!this.isRange)return[];let t=this.getAttribute("presets");return t===null||t.trim()===""||v(t)===!0?F:v(t)===!1?[]:t.split(/[\s,]+/).filter(Boolean)}get value(){return this.readInitial(),this.isRange?this.start!==null&&this.end!==null?`${p(this.start)}/${p(this.end)}`:"":this.start===null?"":p(this.start)}set value(t){this.readInitial();let{start:e,end:s}=T(t,this.isRange);this.start=e,this.end=this.isRange?s:null,this.pending=!1,this.typed={start:null,end:null},this.render()}get startDate(){return this.readInitial(),this.start===null?"":p(this.start)}get endDate(){return this.readInitial(),this.end===null?"":p(this.end)}get form(){return this.internals?.form??null}get validity(){return this.internals?.validity}get validationMessage(){return this.internals?.validationMessage??""}checkValidity(){return this.internals?.checkValidity()??!0}reportValidity(){return this.showErrors=!0,this.refreshState(),this.internals?.reportValidity()??!0}setCustomValidity(t){this.customMessage=String(t??""),this.customMessage&&(this.showErrors=!0),this.refreshState()}focus(t){this.root.querySelector('[data-focus-key="start"], [data-focus-key="toggle"]')?.focus(t)}readInitial(){if(this.ready)return;this.ready=!0;let{start:t,end:e}=T(this.getAttribute("value"),this.isRange);this.start=t,this.end=this.isRange?e:null,this.pending=!1,this.typed={start:null,end:null}}attributeChangedCallback(t,e,s){(t==="value"||t==="mode")&&e!==s&&(this.ready=!1),super.attributeChangedCallback(t,e,s)}formResetCallback(){this.ready=!1,this.showErrors=!1,this.customMessage="",this.open=!1,this.render()}formDisabledCallback(t){this.formDisabled=t,this.requestRender()}formStateRestoreCallback(t){typeof t=="string"&&(this.value=t)}disconnectedCallback(){super.disconnectedCallback(),this.stopOutside()}short(t){return this.formatDate(t*864e5,{year:"numeric",month:"2-digit",day:"2-digit",timeZone:"UTC"})}long(t){return this.formatDate(t*864e5,{dateStyle:"full",timeZone:"UTC"})}medium(t){return this.formatDate(t*864e5,{dateStyle:"medium",timeZone:"UTC"})}get pattern(){let t=this.t;try{return new Intl.DateTimeFormat(this.locale,{year:"numeric",month:"2-digit",day:"2-digit",timeZone:"UTC"}).formatToParts(Date.UTC(2e3,10,22)).map(e=>e.type==="day"||e.type==="month"||e.type==="year"?t(`dateFormat_${e.type}`):e.value).join("")}catch{return"yyyy-mm-dd"}}check(){let t=this.t;if(this.disabled)return{flags:{},message:""};if(this.customMessage)return{flags:{customError:!0},message:this.customMessage};if(this.typed.start!==null||this.typed.end!==null)return{flags:{badInput:!0},message:t("dateBadInput",{example:this.short(this.today)})};let{start:e,end:s}=this;if(e===null)return this.has("required")?{flags:{valueMissing:!0},message:t(this.isRange?"dateValueMissingRange":"dateValueMissing")}:{flags:{},message:""};if(this.isRange&&s===null)return{flags:{valueMissing:!0},message:t("dateEndMissing")};let i=this.limit("min"),n=this.limit("max");if(e<i)return{flags:{rangeUnderflow:!0},message:t("dateTooEarly",{min:this.medium(i)})};if((s??e)>n)return{flags:{rangeOverflow:!0},message:t("dateTooLate",{max:this.medium(n)})};if(k(e,this.rules)||s!==null&&k(s,this.rules))return{flags:{customError:!0},message:t("dateBlocked")};if(this.isRange&&s!==null){let r=s-e+1,d=y(this.getAttribute("min-days"),{min:0,max:1e5,fallback:0}),u=y(this.getAttribute("max-days"),{min:0,max:1e5,fallback:0});if(d&&r<d)return{flags:{rangeUnderflow:!0},message:t("dateRangeTooShort",{count:d})};if(u&&r>u)return{flags:{rangeOverflow:!0},message:t("dateRangeTooLong",{count:u})}}return{flags:{},message:""}}refreshState(){this.readInitial();let{flags:t,message:e}=this.check();if(this.internals){let n=this.disabled?null:this.value;this.internals.setFormValue(n,n);let o=this.root.querySelector('[data-focus-key="start"]')??void 0;this.internals.setValidity(t,e,Object.keys(t).length?o:void 0)}let s=!!e&&this.showErrors,i=this.root.getElementById(this.ids.error);i&&(i.textContent=s?e:""),i?.parentElement?.classList.toggle("has-error",s);for(let n of this.root.querySelectorAll(".date-input"))s?n.setAttribute("aria-invalid","true"):n.removeAttribute("aria-invalid")}get detail(){return{value:this.value,start:this.startDate,end:this.endDate}}commit(){this.showErrors=!0,this.refreshState(),m(this,f.INPUT,this.detail),m(this,f.CHANGE,this.detail)}renderContent(t){this.readInitial();let e=this.t,s=this.has("required"),i=this.getAttribute("hint"),n=a("div",{class:`field date-picker${this.disabled?" disabled":""}${this.isRange?" range":""}`,part:"body"},a("div",{class:"field-top"},a(this.isRange?"span":"label",{class:"field-label",part:"label",attrs:{id:this.ids.label,for:this.isRange?null:this.ids.start}},(this.getAttribute("label")??"").trim().slice(0,300),s?a("span",{class:"field-required",text:"*",attrs:{"aria-hidden":"true"}}):null,s?a("span",{class:"sr-only",text:` (${e("dateRequired")})`}):null)),a("div",{class:"date-anchor"},this.box(),this.open||this.inline?this.calendar():null),a("div",{class:"field-meta"},a("p",{class:"field-hint",part:"hint",text:i?`${i} `:"",attrs:{id:this.ids.hint}},a("span",{class:"date-format",text:e("dateFormatHint",{format:this.pattern})}))),a("p",{class:"field-error",part:"error",attrs:{id:this.ids.error,"aria-live":"polite"}}));t.append(n),this.refreshState(),this.open&&!this.inline?this.watchOutside():this.stopOutside()}box(){let t=this.t,e=this.start!==null||this.typed.start!==null||this.typed.end!==null;return a("div",{class:"field-box date-box"},this.input("start"),this.isRange?a("span",{class:"date-dash",text:"\u2013",attrs:{"aria-hidden":"true"}}):null,this.isRange?this.input("end"):null,this.has("clearable")&&!this.locked&&e?a("button",{class:"field-icon-button",attrs:{type:"button","aria-label":t("dateClear"),"data-focus-key":"clear"},on:{click:()=>this.clear()}},x("close")):null,this.inline?null:a("button",{class:"field-icon-button date-toggle",part:"toggle",attrs:{type:"button",disabled:this.locked,"aria-label":t(this.isRange?"dateChooseRange":"dateChoose"),"aria-haspopup":"dialog","aria-expanded":String(this.open),"aria-controls":this.open?this.ids.popup:null,"data-focus-key":"toggle"},on:{click:()=>this.open?this.close():this.openCalendar()}},x("calendar")))}input(t){let e=this.t,s=t==="start"?this.start:this.end,i=this.typed[t],n=a("input",{class:"field-input date-input",part:"control",attrs:{id:this.ids[t],type:"text",inputmode:"numeric",autocomplete:"off",placeholder:this.getAttribute("placeholder")||this.pattern,disabled:this.disabled,readonly:this.has("readonly"),required:this.has("required")&&(t==="start"||this.isRange),"aria-labelledby":this.isRange?`${this.ids.label} ${this.ids[t]}-name`:null,"aria-describedby":`${this.ids.hint} ${this.ids.error}`,"data-focus-key":t},on:{change:()=>this.typedIn(t,n.value),keydown:o=>{let r=o;r.key==="ArrowDown"&&r.altKey&&!this.inline?(r.preventDefault(),this.openCalendar(t)):r.key==="Escape"&&this.open&&(r.preventDefault(),this.close())}}});return n.value=i??(s===null?"":this.short(s)),this.isRange?a("span",{class:"date-side"},a("span",{class:"sr-only",text:e(t==="start"?"dateStart":"dateEnd"),attrs:{id:`${this.ids[t]}-name`}}),n):n}typedIn(t,e){let s=e.trim()?I(e,j(this.locale),this.today):null;this.typed[t]=e.trim()&&s===null?e:null,t==="start"?this.start=s:this.end=s,this.start!==null&&this.end!==null&&this.end<this.start&&([this.start,this.end]=[this.end,this.start]),this.pending=!1,s!==null&&(this.view=l(s)),this.render(),this.commit()}clear(){this.start=null,this.end=null,this.pending=!1,this.typed={start:null,end:null},this.render(),this.focus(),this.commit()}calendar(){let t=this.t,e=this.monthCount;this.view||(this.view=l(this.start??this.today));let s=Array.from({length:e},(r,d)=>h(this.view,d)),i=this.rovingDay(s),n=z(this.today,this.firstDay,this.presetKeys),o=`${this.ids.popup}-title`;return a("div",{class:`date-popup${this.inline?" inline":""}`,part:"calendar",attrs:{id:this.ids.popup,role:this.inline?"group":"dialog","aria-label":t(this.isRange?"dateChooseRange":"dateChoose")},on:{keydown:r=>{r.key==="Escape"&&!this.inline&&(r.preventDefault(),r.stopPropagation(),this.close())}}},n.length&&!this.locked?a("ul",{class:"date-presets",part:"presets",attrs:{"aria-label":t("datePresets")}},...n.map(r=>a("li",{},a("button",{class:"date-preset",text:t(`datePreset_${r.key}`),attrs:{type:"button","aria-pressed":String(this.start===r.start&&this.end===r.end),disabled:r.start<this.limit("min")||r.end>this.limit("max"),"data-focus-key":`preset-${r.key}`},on:{click:()=>this.choosePeriod(r.start,r.end)}})))):null,a("div",{class:"date-main"},a("div",{class:"date-nav"},this.navButton(-1),a("p",{class:"date-title",text:s.map(r=>this.monthName(r)).join(" \u2013 "),attrs:{id:o,"aria-live":"polite"}}),this.navButton(1)),a("div",{class:"date-months"},...s.map(r=>this.monthTable(r,i))),a("div",{class:"date-foot"},this.isRange?a("p",{class:"date-status",text:this.pending?t("dateChooseEnd"):"",attrs:{id:this.ids.status}}):null,this.locked?null:a("button",{class:"text-btn",text:t("dateToday"),attrs:{type:"button","data-focus-key":"today",disabled:this.blocked(this.today)&&!this.isRange},on:{click:()=>this.goToday()}}),this.locked||this.start===null&&!this.pending?null:a("button",{class:"text-btn",text:t("dateClear"),attrs:{type:"button","data-focus-key":"clear-all"},on:{click:()=>this.clear()}}),this.inline?null:a("button",{class:"text-btn",text:t("dateClose"),attrs:{type:"button","data-focus-key":"close"},on:{click:()=>this.close()}}))))}navButton(t){let e=h(this.view,t),s=l(this.limit("min")),i=l(this.limit("max")),n=t<0?e<s:h(e,this.monthCount-1)>i;return a("button",{class:"field-icon-button date-move",attrs:{type:"button",disabled:n,"aria-label":this.t(t<0?"datePrevMonth":"dateNextMonth"),"data-focus-key":t<0?"prev":"next"},on:{click:()=>{this.view=e,this.focusDay!==null&&(this.focusDay=h(this.focusDay,t)),this.render();let o=this.root.querySelector(`[data-focus-key="${t<0?"prev":"next"}"]`);o instanceof HTMLButtonElement&&o.disabled&&this.root.querySelector('.date-day[tabindex="0"]')?.focus()}}},x(t<0?"chevron-left":"chevron-right"))}monthName(t){return this.formatDate(t*864e5,{month:"long",year:"numeric",timeZone:"UTC"})}rovingDay(t){let e=t[0],s=h(t[t.length-1],1)-1;for(let i of[this.focusDay,this.start,this.today])if(i!==null&&i>=e&&i<=s)return i;return E(e,1,this.rules,this.limit("min"),this.limit("max"))??e}monthTable(t,e){let s=this.firstDay,i=q(t,s),{month:n}=b(t),o=`${this.ids.popup}-${t}`,r=Array.from({length:7},(d,u)=>K+(s+u)%7);return a("div",{class:"date-month"},a("p",{class:"date-month-name",text:this.monthName(t),attrs:{id:o}}),a("table",{class:"date-grid",attrs:{role:"grid","aria-labelledby":o},on:{keydown:d=>this.gridKey(d)}},a("thead",{},a("tr",{},...r.map(d=>a("th",{text:this.formatDate(d*864e5,{weekday:"narrow",timeZone:"UTC"}),attrs:{scope:"col",abbr:this.formatDate(d*864e5,{weekday:"long",timeZone:"UTC"})}})))),a("tbody",{},...i.filter(d=>d.some(u=>b(u).month===n)).map(d=>a("tr",{},...d.map(u=>b(u).month===n?this.dayCell(u,e):a("td",{class:"date-empty",attrs:{role:"gridcell"}})))))))}dayCell(t,e){let{start:s,end:i}=this,n=this.blocked(t),o=t===s||t===i||s!==null&&i!==null&&t>s&&t<i,r=["date-day"];return t===this.today&&r.push("today"),n&&r.push("blocked"),o&&r.push("selected"),t===s&&r.push("start"),(t===i||t===s&&i===null&&!this.pending)&&r.push("end"),s!==null&&i!==null&&t>s&&t<i&&r.push("in-range"),w(t)===this.firstDay&&r.push("week-start"),w(t)===(this.firstDay+6)%7&&r.push("week-end"),a("td",{class:r.join(" "),part:"day",attrs:{role:"gridcell",tabindex:t===e?"0":"-1","aria-selected":String(o),"aria-disabled":n||this.locked?"true":null,"aria-current":t===this.today?"date":null,"data-day":String(t),"data-focus-key":`day-${t}`},on:{click:()=>this.chooseDay(t),pointerenter:()=>this.preview(t),focus:()=>{this.focusDay=t,this.preview(t)}}},a("span",{class:"date-number",text:String(b(t).day),attrs:{"aria-hidden":"true"}}),a("span",{class:"sr-only",text:n?`${this.long(t)}, ${this.t("dateUnavailable")}`:this.long(t)}))}preview(t){if(!this.pending||this.start===null)return;let[e,s]=t<this.start?[t,this.start]:[this.start,t];for(let i of this.root.querySelectorAll(".date-day")){let n=Number(i.dataset.day);i.classList.toggle("preview",n>=e&&n<=s)}}chooseDay(t){if(!(this.locked||this.blocked(t))){if(this.focusDay=t,!this.isRange){this.start=t,this.typed={start:null,end:null},this.announce(this.t("dateChosen",{date:this.long(t)})),this.finish();return}if(!this.pending||this.start===null){this.start=t,this.end=null,this.pending=!0,this.typed={start:null,end:null},this.render(),this.announce(this.t("dateChooseEnd")),m(this,f.INPUT,this.detail);return}this.choosePeriod(Math.min(this.start,t),Math.max(this.start,t))}}choosePeriod(t,e){this.start=t,this.end=e,this.pending=!1,this.typed={start:null,end:null},this.view=l(t),this.focusDay=t,this.announce(this.t("dateRangeChosen",{start:this.long(t),end:this.long(e)})),this.finish()}finish(){this.inline?this.render():this.close(),this.commit()}goToday(){let t=this.today;if(this.view=l(t),this.focusDay=t,!this.isRange&&!this.blocked(t)){this.chooseDay(t);return}this.render(),this.focusCell(t)}openCalendar(t="start"){if(this.locked||this.inline)return;this.open=!0;let s=(t==="end"?this.end:null)??this.start??E(Math.max(this.today,this.limit("min")),1,this.rules,this.limit("min"),this.limit("max"))??this.today;this.focusDay=s,this.view=t==="end"&&this.end!==null&&this.monthCount>1?h(l(s),1-this.monthCount):l(s),this.view<l(this.limit("min"))&&(this.view=l(this.limit("min"))),this.render(),this.focusCell(s),m(this,f.TOGGLE,{expanded:!0})}close(t=!0){this.open&&(this.open=!1,this.pending=!1,this.showErrors=!0,this.render(),t&&this.root.querySelector('[data-focus-key="toggle"]')?.focus(),m(this,f.TOGGLE,{expanded:!1}))}focusCell(t){this.root.querySelector(`[data-day="${t}"]`)?.focus()}gridKey(t){let e=t.target.closest?.("[data-day]");if(!(e instanceof HTMLElement))return;let s=Number(e.dataset.day),i=(w(s)-this.firstDay+7)%7,n={ArrowLeft:()=>s-1,ArrowRight:()=>s+1,ArrowUp:()=>s-7,ArrowDown:()=>s+7,Home:()=>s-i,End:()=>s+6-i,PageUp:()=>h(s,t.shiftKey?-12:-1),PageDown:()=>h(s,t.shiftKey?12:1)};if(n[t.key]){t.preventDefault();let o=Math.min(D,Math.max(_,n[t.key]()));this.focusDay=o;let r=h(this.view,this.monthCount)-1;o<this.view?this.view=l(o):o>r&&(this.view=h(l(o),1-this.monthCount)),this.render(),this.focusCell(o),this.preview(o)}else(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.chooseDay(s),(this.pending||this.inline)&&this.focusCell(s))}watchOutside(){this.outside||(this.outside=t=>{t.type==="keydown"?t.key==="Escape"&&!t.defaultPrevented&&(t.preventDefault(),this.close()):t.composedPath().includes(this)||this.close(!1)},document.addEventListener("pointerdown",this.outside,!0),document.addEventListener("keydown",this.outside))}stopOutside(){this.outside&&(document.removeEventListener("pointerdown",this.outside,!0),document.removeEventListener("keydown",this.outside),this.outside=null)}},K=3;export{H as a};
