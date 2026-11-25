/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as z,c as R,d as G,e as O,f as A,g as D}from"./chunk-Z44A5JMA.js";import{g as E,j as $}from"./chunk-RKGRWACM.js";import{r as M}from"./chunk-37OSRZJK.js";import{_ as V,ba as I,d as b,j as k,o as l,q as L}from"./chunk-JAZI474S.js";import{h as S,k as _,l as T,m as N,q as C}from"./chunk-SCKP2KTO.js";var j=`/*
 * Heat map: a calendar of weeks or a matrix of square cells, shaded from the surface to
 * the accent of the theme, with the scale and the value under the pointer or the focus.
 */
.hm-body {
  padding: var(--_space-4);
  background: var(--_surface);
  color: var(--_fg);
  font: 400 var(--_font-size-ui) / 1.4 var(--_font-ui);
  overscroll-behavior: auto;
}

.hm-view {
  --_cell: var(--vt-heatmap-cell, 13px);
  --_gap: 3px;
  display: grid;
  gap: var(--_space-2);
}

.hm-scroll {
  overflow-x: auto;
  padding-bottom: 2px;
}

.hm-calendar {
  display: grid;
  gap: 4px;
  width: max-content;
}

.hm-months,
.hm-row {
  display: grid;
  grid-template-columns: 4ch repeat(var(--_columns), var(--_cell));
  gap: var(--_gap);
}

.hm-months {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  white-space: nowrap;
}

.hm-grid {
  display: grid;
  gap: var(--_gap);
  width: max-content;
}

.hm-matrix .hm-row {
  grid-template-columns: minmax(4ch, max-content) repeat(var(--_columns), calc(var(--_cell) * 2));
}

.hm-matrix .hm-cell {
  width: auto;
}

.hm-day,
.hm-x {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  line-height: var(--_cell);
  white-space: nowrap;
}

.hm-x {
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
}

.hm-cell {
  width: var(--_cell);
  height: var(--_cell);
  border-radius: 3px;
  background: color-mix(
    in srgb,
    var(--_accent) calc(var(--_level, 0) * 100%),
    var(--_surface-sunken)
  );
  outline: 1px solid color-mix(in srgb, var(--_fg) 8%, transparent);
  outline-offset: -1px;
  cursor: pointer;
}

.hm-cell.out {
  visibility: hidden;
}

.hm-cell:hover {
  outline: 1px solid var(--_fg);
}

.hm-cell:focus-visible {
  outline: 2px solid var(--_fg);
  outline-offset: 1px;
}

.hm-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--_space-2) var(--_space-4);
}

.hm-summary,
.hm-details {
  margin: 0;
  color: var(--_fg-muted);
}

.hm-details {
  min-height: 1.4em;
  color: var(--_fg);
  font-variant-numeric: tabular-nums;
}

.hm-legend {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.hm-legend .hm-cell {
  cursor: default;
}

.hm-legend > span:first-child {
  margin-inline-end: 4px;
}

.hm-legend > span:last-child {
  margin-inline-start: 4px;
}

.hm-edit > .editor-body {
  max-height: min(40vh, 320px);
  border-bottom: 1px solid var(--_border);
}
`;var F=Object.freeze({heatLess:"Less",heatMore:"More",heatLegend:"Scale, from less to more",heatNoValue:"no value",heatCell:"{label}: {value}",heatTotal:"{total} in all, most {max} on {day}",heatTotalMatrix:"{total} in all, most {max}",heatGrid:"Values by day",heatGridMatrix:"Values",heatCopyCsv:"Copy as CSV",heatInvalidEmpty:"No data.",heatInvalidFormat:"Expected dates and values (JSON or CSV: date,value), or two categories and a value (x,y,value).",heatInvalidNoValues:"No date or value could be read.",heatInvalidJson:"The JSON could not be read: {message}"}),J={heatLess:"Moins",heatMore:"Plus",heatLegend:"\xC9chelle, de moins \xE0 plus",heatNoValue:"aucune valeur",heatCell:"{label} : {value}",heatTotal:"{total} au total, au plus {max} le {day}",heatTotalMatrix:"{total} au total, au plus {max}",heatGrid:"Valeurs par jour",heatGridMatrix:"Valeurs",heatCopyCsv:"Copier en CSV",heatInvalidEmpty:"Aucune donn\xE9e.",heatInvalidFormat:"Dates et valeurs attendues (JSON ou CSV : date,value), ou deux cat\xE9gories et une valeur (x,y,value).",heatInvalidNoValues:"Aucune date ni valeur n\u2019a pu \xEAtre lue.",heatInvalidJson:"Le JSON n\u2019a pas pu \xEAtre lu : {message}"};N({en:F,fr:J});var P=class extends I{static type="heatmap";static dataAttributes=Object.freeze(["from","to","year","unit"]);static componentAttributes=Object.freeze(["from","to","year","first-day","levels","max","unit"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,download:!0,fullscreen:!0}};static styles=[j];constructor(){super(),this.parsed=null,this.focusAt={row:-1,column:-1},this.panelId=L("panel"),this.details=null,this.editor=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}contentChanged(){this.parsed=null,this.focusAt={row:-1,column:-1}}parse(){let e=this.text??"";if(this.parsed?.text===e)return this.parsed;try{this.parsed={text:e,data:R(e),error:null}}catch(s){this.parsed={text:e,data:null,error:s instanceof Error?s:new Error(String(s))}}return this.parsed}get levels(){return b(this.getAttribute("levels"),{min:3,max:9,fallback:5})}valueText(e){if(e===null)return this.t("heatNoValue");let s=k(this.getAttribute("unit"),40),n=C(Math.round(e*100)/100,this.locale);return s?`${n} ${s}`:n}dayText(e,s){try{return new Intl.DateTimeFormat(this.locale,{timeZone:"UTC",...s}).format(e*864e5)}catch{return E(e)}}renderContent(e){let s=this.t,{data:n,error:h}=this.parse(),o=l("div",{class:"panel",attrs:{id:this.panelId}}),r=l("div",{class:"body hm-body",part:"body"}),f="";if(h||!n)r.append(V(this.errorText(h)));else{let a=n.kind==="calendar"?this.calendarView(n):this.matrixView(n);f=a.badge,r.append(a.element)}let g=[];if(this.editing){let a=this.createEditor();o.classList.add("hm-edit"),o.append(l("div",{class:"body editor-body",part:"body source"},a.element),r),g=this.historyButtons(a)}else o.append(r);let i=n?()=>D(n):null,u=[...g,this.editToggleButton(),this.fullscreenButton(),this.feature("download")&&i?this.downloadButton(i,this.downloadName("heatmap.csv"),"text/csv"):null,this.feature("copy")&&i?this.copyButton(i,s("heatCopyCsv")):null];e.append(...this.chrome({badge:f,actions:u}),o),this.editor?.align()}errorText(e){let s=this.t;if(e instanceof z){if(e.message==="empty")return s("heatInvalidEmpty");if(e.message==="noValues")return s("heatInvalidNoValues");if(e.message.startsWith("json:"))return s("heatInvalidJson",{message:e.message.slice(5)})}return s("heatInvalidFormat")}calendarView(e){let s=this.t,{from:n,to:h}=O(e.days,{from:this.getAttribute("from"),to:this.getAttribute("to"),year:this.getAttribute("year")}),o=b(this.getAttribute("first-day"),{min:0,max:6,fallback:$(this.locale)}),r=G(e.days,{from:n,to:h,firstDay:o}),f=r.cells.filter(t=>t.inRange&&t.value!==null),g=b(this.getAttribute("max"),{min:1,max:Number.MAX_SAFE_INTEGER,fallback:0})||Math.max(0,...f.map(t=>t.value)),i=this.levels,u=Array.from({length:7},()=>new Array(r.columns).fill(null)),a=Array.from({length:7},(t,p)=>{let y=this.dayText(r.cells[p]?.day??0,{weekday:"short"});return l("div",{class:"hm-row",attrs:{role:"row"}},l("span",{class:"hm-day",attrs:{role:"rowheader"},text:p%2?y:""},l("span",{class:"sr-only",text:p%2?"":y})))});for(let t of r.cells){let p=t.inRange?A(t.value,g,i):0,y=this.dayText(t.day,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),w=l("span",{class:`hm-cell${t.inRange?"":" out"}`,part:`cell cell-${p}`,attrs:{role:"gridcell",tabindex:"-1","aria-label":t.inRange?s("heatCell",{label:y,value:this.valueText(t.value)}):null,"aria-hidden":t.inRange?null:"true","data-day":t.day}});w.style.setProperty("--_level",String(i>1?p/(i-1):0)),t.inRange&&this.bindCell(w,()=>({date:E(t.day),value:t.value}),`${y}: ${this.valueText(t.value)}`),u[t.row][t.column]=t.inRange?w:null,a[t.row].append(w)}let d=l("div",{class:"hm-months",attrs:{"aria-hidden":"true"}});d.style.setProperty("--_columns",String(r.columns));for(let t of r.months){let p=l("span",{text:this.dayText(Date.UTC(t.year,t.month-1,1)/864e5,{month:"short"})});p.style.gridColumn=String(t.column+2),d.append(p)}let c=this.gridElement(a,u,s("heatGrid"));c.style.setProperty("--_columns",String(r.columns));let x=f.reduce((t,p)=>t+p.value,0),v=f.reduce((t,p)=>t&&t.value>=p.value?t:p,null),m=v?s("heatTotal",{total:this.valueText(x),max:this.valueText(v.value),day:this.dayText(v.day,{dateStyle:"medium"})}):"";return{element:this.wrap(l("div",{class:"hm-calendar"},d,c),m,i),badge:`${this.dayText(r.from,{dateStyle:"medium"})} \u2013 ${this.dayText(r.to,{dateStyle:"medium"})}`}}matrixView(e){let s=this.t,n=this.levels,h=[...e.cells.values()],o=b(this.getAttribute("max"),{min:1,max:Number.MAX_SAFE_INTEGER,fallback:0})||Math.max(0,...h),r=l("div",{class:"hm-row hm-head",attrs:{role:"row"}},l("span",{class:"hm-day",attrs:{role:"columnheader"}}));for(let a of e.xs)r.append(l("span",{class:"hm-x",attrs:{role:"columnheader"},text:a}));let f=[],g=e.ys.map(a=>{let d=l("div",{class:"hm-row",attrs:{role:"row"}},l("span",{class:"hm-day",attrs:{role:"rowheader"},text:a})),c=[];for(let x of e.xs){let v=e.cells.get(`${x}\0${a}`)??null,m=A(v,o,n),t=l("span",{class:"hm-cell",part:`cell cell-${m}`,attrs:{role:"gridcell",tabindex:"-1","aria-label":s("heatCell",{label:`${a}, ${x}`,value:this.valueText(v)})}});t.style.setProperty("--_level",String(m/(n-1))),this.bindCell(t,()=>({x,y:a,value:v}),`${a}, ${x}: ${this.valueText(v)}`),d.append(t),c.push(t)}return f.push(c),d}),i=this.gridElement([r,...g],[[],...f],this.heading||s("heatGridMatrix"),1);i.classList.add("hm-matrix"),i.style.setProperty("--_columns",String(e.xs.length));let u=h.reduce((a,d)=>a+d,0);return{element:this.wrap(i,s("heatTotalMatrix",{total:this.valueText(u),max:this.valueText(Math.max(...h))}),n),badge:`${C(e.ys.length,this.locale)} \xD7 ${C(e.xs.length,this.locale)}`}}bindCell(e,s,n){let h=()=>{this.details&&(this.details.textContent=n)};e.addEventListener("mouseenter",h),e.addEventListener("focus",h),e.addEventListener("click",()=>{e.focus(),T(this,_.SELECT,s())}),e.addEventListener("keydown",o=>{o.key!=="Enter"&&o.key!==" "||(o.preventDefault(),T(this,_.SELECT,s()))})}gridElement(e,s,n,h=0){let o=l("div",{class:"hm-grid",part:"grid",attrs:{role:"grid","aria-label":n}},...e),r=s.flatMap((i,u)=>i.map((a,d)=>a?{el:a,r:u,c:d}:null)).filter(i=>i!==null);if(!r.length)return o;(r.find(i=>i.r===this.focusAt.row&&i.c===this.focusAt.column)??r[r.length-1]).el.setAttribute("tabindex","0");let g=(i,u)=>s[i]?.[u]??null;return o.addEventListener("keydown",i=>{let u=r.find(m=>m.el===i.target);if(!u)return;let{r:a,c:d}=u,c=null,x=Math.max(...s.map(m=>m.length));switch(i.key){case"ArrowRight":for(d+=1;d<x&&!(c=g(a,d));d+=1);break;case"ArrowLeft":for(d-=1;d>=0&&!(c=g(a,d));d-=1);break;case"ArrowDown":for(a+=1;a<s.length&&!(c=g(a,d));a+=1);break;case"ArrowUp":for(a-=1;a>=h&&!(c=g(a,d));a-=1);break;case"Home":c=r.find(m=>m.r===a)?.el??null;break;case"End":c=[...r].reverse().find(m=>m.r===a)?.el??null;break;default:return}if(i.preventDefault(),!c)return;u.el.setAttribute("tabindex","-1"),c.setAttribute("tabindex","0");let v=r.find(m=>m.el===c);v&&(this.focusAt={row:v.r,column:v.c}),c.focus()}),o}wrap(e,s,n){let h=this.t,o=l("div",{class:"hm-legend",part:"legend",attrs:{role:"img","aria-label":h("heatLegend")}});o.append(l("span",{text:h("heatLess")}));for(let r=0;r<n;r+=1){let f=l("span",{class:"hm-cell",part:`cell cell-${r}`});f.style.setProperty("--_level",String(r/(n-1))),o.append(f)}return o.append(l("span",{text:h("heatMore")})),this.details=l("p",{class:"hm-details",attrs:{"aria-hidden":"true"}}),l("div",{class:"hm-view"},l("div",{class:"hm-scroll"},e),l("div",{class:"hm-footer"},l("p",{class:"hm-summary",part:"summary",text:s}),o),this.details)}createEditor(){return this.editor?.destroy(),this.editor=new M({text:this.text??"",language:/^\s*[[{]/.test(this.text??"")?"json":"plaintext",lineNumbers:!0,wrap:!1,highlightLimit:S().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>T(this,_.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.parsed=null,this.previewTimer=setTimeout(()=>this.render(),300)}};export{P as a};
