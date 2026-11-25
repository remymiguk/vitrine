/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{b as L,c as N}from"./chunk-2VPPRJTA.js";import{c as z,e as I}from"./chunk-4RYHQHTJ.js";import{g as x}from"./chunk-RKGRWACM.js";import{a as E}from"./chunk-DTTKBDLP.js";import{r as D}from"./chunk-37OSRZJK.js";import{U as T,_ as k,ba as $,c as _,d as m,o as t,q as S}from"./chunk-JAZI474S.js";import{h as M,k as f,l as g,m as C,q as b}from"./chunk-SCKP2KTO.js";var q=`/*
 * Dataset profile: a table of columns with small bars (heights set through CSSOM), and the
 * details of a column opened under its row.
 */
.ds-body {
  padding: 0;
  background: var(--_surface);
  overscroll-behavior: auto;
}

.ds-wrap {
  overflow: auto;
  max-height: 640px;
}

:host([max-height]) .ds-wrap,
.vt[data-fullscreen] .ds-wrap {
  max-height: none;
}

.ds-wrap:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.ds-table tbody th,
.ds-table td {
  vertical-align: middle;
}

.ds-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 0;
  border: 0;
  background: none;
  color: var(--_fg);
  font: 600 var(--_font-size-ui) / 1.4 var(--_font-mono);
  text-align: start;
  overflow-wrap: anywhere;
  cursor: pointer;
}

.ds-toggle::before {
  content: '';
  flex: none;
  width: 6px;
  height: 6px;
  border-right: 1.5px solid var(--_fg-muted);
  border-bottom: 1.5px solid var(--_fg-muted);
  transform: rotate(-45deg);
  transition: transform var(--_duration-fast) var(--_easing);
}

.ds-toggle[aria-expanded='true']::before {
  transform: rotate(45deg);
}

:host(:dir(rtl)) .ds-toggle[aria-expanded='false']::before {
  transform: rotate(135deg);
}

.ds-toggle:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.ds-toggle:focus-visible {
  border-radius: var(--_radius-sm);
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.ds-type {
  display: inline-block;
  padding: 0 6px;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-full);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  white-space: nowrap;
}

.ds-has-missing {
  font-weight: 600;
}

.ds-summary {
  min-width: 18ch;
  color: var(--_fg-muted);
  font-variant-numeric: tabular-nums;
}

.ds-dist {
  min-width: 132px;
}

.ds-bars {
  display: flex;
  align-items: flex-end;
  gap: 1px;
  width: 120px;
  height: 28px;
}

.ds-bars.large {
  width: 100%;
  max-width: 560px;
  height: 96px;
  gap: 2px;
}

.ds-bar {
  flex: 1;
  min-height: 1px;
  height: calc(var(--_h, 0) * 100%);
  border-radius: 1px 1px 0 0;
  background: var(--_accent);
}

.ds-stack {
  display: flex;
  width: 120px;
  height: 12px;
  overflow: hidden;
  border-radius: var(--_radius-full);
  background: var(--_surface-sunken);
}

.ds-part {
  height: 100%;
  background: var(--_accent);
}

.ds-part + .ds-part {
  border-inline-start: 1px solid var(--_surface);
}

.ds-part.p1 {
  background: color-mix(in srgb, var(--_accent) 75%, var(--_surface));
}

.ds-part.p2 {
  background: color-mix(in srgb, var(--_accent) 55%, var(--_surface));
}

.ds-part.p3 {
  background: color-mix(in srgb, var(--_accent) 40%, var(--_surface));
}

.ds-part.p4 {
  background: color-mix(in srgb, var(--_accent) 28%, var(--_surface));
}

.ds-details-row > td {
  padding: 0;
  background: var(--_surface-sunken);
}

.ds-details {
  display: grid;
  gap: var(--_space-3);
  padding: var(--_space-3) var(--_space-4);
  color: var(--_fg);
  font: 400 var(--_font-size-ui) / 1.4 var(--_font-ui);
}

.ds-stats {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--_space-2) var(--_space-4);
  margin: 0;
}

.ds-stats dt {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.ds-stats dd {
  margin: 0;
  font-variant-numeric: tabular-nums;
  overflow-wrap: anywhere;
}

.ds-axis-box {
  max-width: 560px;
}

.ds-axis {
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
}

.ds-details .ds-top {
  width: auto;
  min-width: 280px;
  max-width: 560px;
}

.ds-top caption {
  padding-bottom: var(--_space-1);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  text-align: start;
}

.ds-top th {
  font-weight: 400;
  overflow-wrap: anywhere;
}

.ds-more {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.ds-edit > .editor-body {
  max-height: min(40vh, 320px);
  border-bottom: 1px solid var(--_border);
}
`;var B=Object.freeze({describeColumn:"Column",describeType:"Type",describeMissing:"Missing",describeDistinct:"Distinct",describeSummary:"Summary",describeDistribution:"Distribution",describeColumns:"Columns",describeType_number:"Number",describeType_date:"Date",describeType_boolean:"Yes / no",describeType_text:"Text",describeRange:"{min} to {max}",describeMean:"mean {value}",describeMedian:"median {value}",describeLength:"{min} to {max} characters",describeUnique:"all different",describeCount:"Values",describeMin:"Minimum",describeQ1:"First quartile",describeMedianLabel:"Median",describeMeanLabel:"Mean",describeQ3:"Third quartile",describeMax:"Maximum",describeStd:"Standard deviation",describeSum:"Sum",describeTop:"Most frequent",describeHistogram:"{count} values from {min} to {max}, most between {from} and {to}",describeBin:"{from} to {to}: {count}",describeShare:"{value}: {percent}",describeShowDetails:"Details of {name}",describeSize:"{rows} rows, {columns} columns",describeCopyCsv:"Copy the profile as CSV",describeMore:"and {count} more",describeInvalidEmpty:"No data.",describeInvalidFormat:"Expected CSV with a header row, or JSON: a list of objects.",describeInvalidJson:"The JSON could not be read: {message}"}),A={describeColumn:"Colonne",describeType:"Type",describeMissing:"Manquantes",describeDistinct:"Distinctes",describeSummary:"R\xE9sum\xE9",describeDistribution:"R\xE9partition",describeColumns:"Colonnes",describeType_number:"Nombre",describeType_date:"Date",describeType_boolean:"Oui / non",describeType_text:"Texte",describeRange:"de {min} \xE0 {max}",describeMean:"moyenne {value}",describeMedian:"m\xE9diane {value}",describeLength:"de {min} \xE0 {max} caract\xE8res",describeUnique:"toutes diff\xE9rentes",describeCount:"Valeurs",describeMin:"Minimum",describeQ1:"Premier quartile",describeMedianLabel:"M\xE9diane",describeMeanLabel:"Moyenne",describeQ3:"Troisi\xE8me quartile",describeMax:"Maximum",describeStd:"\xC9cart type",describeSum:"Somme",describeTop:"Les plus fr\xE9quentes",describeHistogram:"{count} valeurs de {min} \xE0 {max}, surtout entre {from} et {to}",describeBin:"de {from} \xE0 {to} : {count}",describeShare:"{value} : {percent}",describeShowDetails:"D\xE9tails de {name}",describeSize:"{rows} lignes, {columns} colonnes",describeCopyCsv:"Copier le profil en CSV",describeMore:"et {count} autres",describeInvalidEmpty:"Aucune donn\xE9e.",describeInvalidFormat:"CSV avec une ligne d\u2019en-t\xEAte, ou JSON (une liste d\u2019objets) attendu.",describeInvalidJson:"Le JSON n\u2019a pas pu \xEAtre lu : {message}"};C({en:B,fr:A});var V=500,O=class extends ${static type="describe";static componentAttributes=Object.freeze(["columns","bins","top","expanded"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0}};static styles=[E,q];constructor(){super(),this.parsed=null,this.open=new Map,this.panelId=S("panel"),this.editor=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}contentChanged(){this.parsed=null}parse(){let e=this.text??"",r=m(this.getAttribute("bins"),{min:4,max:50,fallback:12}),i=m(this.getAttribute("top"),{min:1,max:20,fallback:5}),a=(this.getAttribute("columns")??"").split(",").map(s=>s.trim()).filter(Boolean),n=`${r}\0${i}\0${a.join(",")}\0${e}`;if(this.parsed?.key===n)return this.parsed;try{let s=I(e),l=L(s,{bins:r,top:Math.max(i,10),fields:a});l.columns=l.columns.slice(0,V),this.parsed={key:n,profile:l,error:null}}catch(s){this.parsed={key:n,profile:null,error:s instanceof Error?s:new Error(String(s))}}return this.parsed}get profile(){return this.parse().profile}value(e,r){if(e.type==="date")return x(Math.round(r));let i=Math.abs(r);try{return new Intl.NumberFormat(this.locale,{maximumFractionDigits:i>=100?0:i>=1?2:4}).format(r)}catch{return String(r)}}percent(e,r){return new Intl.NumberFormat(this.locale,{style:"percent",maximumFractionDigits:1}).format(r?e/r:0)}renderContent(e){let r=this.t,{profile:i,error:a}=this.parse(),n=t("div",{class:"panel",attrs:{id:this.panelId}}),s=t("div",{class:"body ds-body",part:"body"});a||!i?s.append(k(this.errorText(a))):s.append(this.tableView(i));let l=[];if(this.editing){let p=this.createEditor();n.classList.add("ds-edit"),n.append(t("div",{class:"body editor-body",part:"body source"},p.element),s),l=this.historyButtons(p)}else n.append(s);let o=s.querySelector("table"),d=i?()=>N(this.shown(i),(p,u)=>p.type==="date"?x(Math.round(u)):Math.round(u*1e6)/1e6):null,c=[o?this.searchButton(new T(o)):null,...l,this.editToggleButton(),this.fullscreenButton(),this.feature("download")&&d?this.downloadButton(d,this.downloadName("profile.csv"),"text/csv"):null,this.feature("copy")&&d?this.copyButton(d,r("describeCopyCsv")):null],h=i?r("describeSize",{rows:b(i.rows,this.locale),columns:b(i.columns.length,this.locale)}):"";e.append(...this.chrome({badge:h,actions:c}),n),this.editor?.align()}shown(e){let r=m(this.getAttribute("top"),{min:1,max:20,fallback:5});return{...e,columns:e.columns.map(i=>({...i,top:i.top.slice(0,r)}))}}errorText(e){let r=this.t;if(e instanceof z){if(e.message==="empty")return r("describeInvalidEmpty");if(e.message.startsWith("json:"))return r("describeInvalidJson",{message:e.message.slice(5)})}return r("describeInvalidFormat")}tableView(e){let r=this.t,i=_(this.getAttribute("expanded"))===!0,a=t("tr",{},t("th",{attrs:{scope:"col"},text:r("describeColumn")}),t("th",{attrs:{scope:"col"},text:r("describeType")}),t("th",{class:"col-number",attrs:{scope:"col"},text:r("describeMissing")}),t("th",{class:"col-number",attrs:{scope:"col"},text:r("describeDistinct")}),t("th",{attrs:{scope:"col"},text:r("describeSummary")}),t("th",{attrs:{scope:"col"},text:r("describeDistribution")})),n=t("tbody");return e.columns.forEach((s,l)=>{let o=this.open.get(s.name)??i,d=`${this.panelId}-c${l}`,c=t("button",{class:"ds-toggle",text:s.name,attrs:{type:"button","aria-expanded":String(o),"aria-controls":d,"data-focus-key":`column-${l}`,title:r("describeShowDetails",{name:s.name})},on:{click:()=>{this.open.set(s.name,!o),this.render(),g(this,f.TOGGLE,{column:s.name,open:!o})}}}),h=s.missing?`${b(s.missing,this.locale)} (${this.percent(s.missing,e.rows)})`:"0",p=`${b(s.distinct,this.locale)}${s.capped?"+":""}`;n.append(t("tr",{class:o?"ds-open":""},t("th",{attrs:{scope:"row"}},c),t("td",{},t("span",{class:`ds-type ds-${s.type}`,text:r(`describeType_${s.type}`)})),t("td",{class:`col-number${s.missing?" ds-has-missing":""}`,text:h}),t("td",{class:"col-number",text:p}),t("td",{class:"ds-summary",text:this.summary(s)}),t("td",{class:"ds-dist"},this.bars(s,!1)))),o&&n.append(t("tr",{class:"ds-details-row",attrs:{id:d}},t("td",{attrs:{colspan:"6"}},this.details(s,e))))}),t("div",{class:"ds-wrap",attrs:{tabindex:"0",role:"region","aria-label":r("describeColumns")}},t("table",{class:"grid ds-table",part:"table"},t("thead",{},a),n))}summary(e){let r=this.t,i=e.numbers;if(i&&e.type==="number")return`${r("describeRange",{min:this.value(e,i.min),max:this.value(e,i.max)})} \xB7 ${r("describeMean",{value:this.value(e,i.mean)})} \xB7 ${r("describeMedian",{value:this.value(e,i.median)})}`;if(i)return r("describeRange",{min:this.value(e,i.min),max:this.value(e,i.max)});if(!e.count)return"";if(e.distinct===e.count&&e.count>1&&!e.capped){let a=e.length?` \xB7 ${r("describeLength",{min:b(e.length.min,this.locale),max:b(e.length.max,this.locale)})}`:"";return`${r("describeUnique")}${a}`}return e.top.slice(0,2).map(a=>r("describeShare",{value:a.value,percent:this.percent(a.count,e.count)})).join(" \xB7 ")}bars(e,r){let i=this.t;if(!e.count)return null;let a=e.histogram;if(a){let o=a.counts,d=Math.max(...o)||1,c=(a.to-a.from)/o.length,h=o.indexOf(Math.max(...o)),p=i("describeHistogram",{count:b(e.count,this.locale),min:this.value(e,a.from),max:this.value(e,e.numbers?.max??a.to),from:this.value(e,a.from+h*c),to:this.value(e,a.from+(h+1)*c)}),u=t("div",{class:`ds-bars${r?" large":""}`,part:"bars",attrs:{role:"img","aria-label":p}});return o.forEach((v,y)=>{let w=t("span",{class:"ds-bar",attrs:{title:i("describeBin",{from:this.value(e,a.from+y*c),to:this.value(e,a.from+(y+1)*c),count:b(v,this.locale)})}});w.style.setProperty("--_h",String(Math.round(v/d*1e3)/1e3)),u.append(w)}),u}let n=e.top.slice(0,5),s=n.map(o=>i("describeShare",{value:o.value,percent:this.percent(o.count,e.count)})).join(", "),l=t("div",{class:"ds-stack",part:"bars",attrs:{role:"img","aria-label":s}});return n.forEach((o,d)=>{let c=t("span",{class:`ds-part p${d}`,attrs:{title:i("describeShare",{value:o.value,percent:this.percent(o.count,e.count)})}});c.style.width=`${o.count/e.count*100}%`,l.append(c)}),l}details(e,r){let i=this.t,a=t("dl",{class:"ds-stats"}),n=(d,c)=>a.append(t("div",{},t("dt",{text:i(d)}),t("dd",{text:c})));n("describeCount",`${b(e.count,this.locale)} (${this.percent(e.count,r.rows)})`);let s=e.numbers;s&&(n("describeMin",this.value(e,s.min)),n("describeQ1",this.value(e,s.q1)),n("describeMedianLabel",this.value(e,s.median)),n("describeMeanLabel",this.value(e,s.mean)),n("describeQ3",this.value(e,s.q3)),n("describeMax",this.value(e,s.max)),e.type==="number"&&(n("describeStd",this.value(e,s.std)),n("describeSum",this.value(e,s.sum))));let l=m(this.getAttribute("top"),{min:1,max:20,fallback:5}),o=[a];if(e.histogram){let d=this.bars(e,!0);d&&o.push(t("div",{class:"ds-axis-box"},d,t("div",{class:"ds-axis",attrs:{"aria-hidden":"true"}},t("span",{text:this.value(e,e.histogram.from)}),t("span",{text:this.value(e,e.numbers?.max??e.histogram.to)}))))}if(e.type!=="number"&&e.type!=="date"&&e.top.length){let d=e.top.slice(0,Math.max(l,10)),c=t("table",{class:"grid ds-top"},t("caption",{text:i("describeTop")})),h=t("tbody");for(let p of d)h.append(t("tr",{},t("th",{attrs:{scope:"row"},text:p.value}),t("td",{class:"col-number",text:b(p.count,this.locale)}),t("td",{class:"col-number",text:this.percent(p.count,e.count)})));c.append(h),o.push(c),e.distinct>d.length&&o.push(t("p",{class:"ds-more",text:i("describeMore",{count:b(e.distinct-d.length,this.locale)})}))}return t("div",{class:"ds-details",part:"details"},...o)}createEditor(){return this.editor?.destroy(),this.editor=new D({text:this.text??"",language:/^\s*[[{]/.test(this.text??"")?"json":"plaintext",lineNumbers:!0,wrap:!1,highlightLimit:M().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>g(this,f.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.parsed=null,this.previewTimer=setTimeout(()=>this.render(),300)}};export{O as a};
