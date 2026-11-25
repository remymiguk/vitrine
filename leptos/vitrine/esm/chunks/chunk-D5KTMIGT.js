/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as j,b as x,c as L,e as K,f as R,g as B}from"./chunk-4RYHQHTJ.js";import{a as V}from"./chunk-DTTKBDLP.js";import{r as O}from"./chunk-37OSRZJK.js";import{U as N,_,ba as I,c as A,d as T,e as C,o as a,q as S}from"./chunk-JAZI474S.js";import{h as E,k as b,l as y,m as k,q as w}from"./chunk-SCKP2KTO.js";var F=`/*
 * Pivot table: the lists of fields, then the table with sticky headers, totals and,
 * with \`heat\`, cells shaded by their value (the value is always written).
 */
.pv-body {
  display: grid;
  align-content: start;
  padding: 0;
  background: var(--_surface);
  overscroll-behavior: auto;
}

:host([max-height]) .pv-body,
.vt[data-fullscreen] .pv-body {
  overscroll-behavior: contain;
}

.pv-controls {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2) var(--_space-4);
  padding: var(--_space-3) var(--_space-4);
  border-bottom: 1px solid var(--_border);
}

.pv-field {
  display: grid;
  gap: 2px;
  color: var(--_fg-muted);
  font: 600 var(--_font-size-small) / 1.4 var(--_font-ui);
}

.pv-select {
  min-width: 12ch;
  max-width: 28ch;
  height: 30px;
  padding: 0 var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  color: var(--_fg);
  font: 400 var(--_font-size-ui) / 1 var(--_font-ui);
}

.pv-select:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.pv-body > .notice {
  margin: var(--_space-3) var(--_space-4) 0;
}

.pv-wrap {
  overflow: auto;
  max-height: 520px;
}

:host([max-height]) .pv-wrap,
.vt[data-fullscreen] .pv-wrap {
  max-height: none;
}

.pv-wrap:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.pv-table tbody th,
.pv-table tfoot th {
  position: sticky;
  left: 0;
  z-index: 1;
  background: var(--_surface);
  font-weight: 600;
  text-align: start;
}

.pv-table .pv-corner {
  left: 0;
  z-index: 3;
  color: var(--_fg-muted);
}

.pv-table thead .pv-corner {
  position: sticky;
}

.pv-cell {
  padding: 0;
  text-align: end;
}

.pv-value {
  display: block;
  width: 100%;
  padding: 6px var(--_space-3);
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  font-variant-numeric: tabular-nums;
  text-align: inherit;
  cursor: pointer;
}

.pv-value:hover {
  background: color-mix(in srgb, var(--_accent-soft) 70%, transparent);
}

.pv-value:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.pv-heat {
  background: color-mix(in srgb, var(--_accent) calc(var(--_heat, 0) * 45%), transparent);
}

.pv-total,
.pv-table tfoot td,
.pv-table tfoot th {
  font-weight: 600;
}

.pv-table tfoot td,
.pv-table tfoot th {
  border-top: 2px solid var(--_border-strong);
  background: var(--_surface-sunken);
}

.pv-table td.pv-total {
  background: color-mix(in srgb, var(--_surface-sunken) 60%, transparent);
}

.pv-edit > .editor-body {
  max-height: min(40vh, 320px);
  border-bottom: 1px solid var(--_border);
}

/* Values are numbers: aligned to the end, whatever the shared table rules say. */
.pv-table td.pv-cell {
  text-align: end;
}

.pv-table tbody th,
.pv-table tfoot th {
  vertical-align: middle;
}
`;var J=Object.freeze({pivotRows:"Rows",pivotColumns:"Columns",pivotValues:"Values",pivotAggregate:"Aggregate",pivotNone:"(none)",pivotTotal:"Total",pivotEmptyKey:"(empty)",pivotSettings:"Pivot settings",pivotTable:"Pivot table",pivotAgg_sum:"Sum",pivotAgg_count:"Count",pivotAgg_avg:"Average",pivotAgg_min:"Minimum",pivotAgg_max:"Maximum",pivotAgg_distinct:"Distinct values",pivotOf:"{aggregate} of {field}",pivotRecords:"{count} records",pivotCellLabel:"{value}, {row}, {column}",pivotTruncated:"Only the first {count} values of a field are shown.",pivotCopyCsv:"Copy as CSV",pivotInvalidEmpty:"No data.",pivotInvalidFormat:"Expected CSV with a header row, or JSON: a list of objects.",pivotInvalidJson:"The JSON could not be read: {message}"}),M={pivotRows:"Lignes",pivotColumns:"Colonnes",pivotValues:"Valeurs",pivotAggregate:"Calcul",pivotNone:"(aucune)",pivotTotal:"Total",pivotEmptyKey:"(vide)",pivotSettings:"R\xE9glages du tableau crois\xE9",pivotTable:"Tableau crois\xE9",pivotAgg_sum:"Somme",pivotAgg_count:"Nombre",pivotAgg_avg:"Moyenne",pivotAgg_min:"Minimum",pivotAgg_max:"Maximum",pivotAgg_distinct:"Valeurs distinctes",pivotOf:"{aggregate} de {field}",pivotRecords:"{count} enregistrements",pivotCellLabel:"{value}, {row}, {column}",pivotTruncated:"Seules les {count} premi\xE8res valeurs d\u2019un champ sont affich\xE9es.",pivotCopyCsv:"Copier en CSV",pivotInvalidEmpty:"Aucune donn\xE9e.",pivotInvalidFormat:"CSV avec une ligne d\u2019en-t\xEAte, ou JSON (une liste d\u2019objets) attendu.",pivotInvalidJson:"Le JSON n\u2019a pas pu \xEAtre lu : {message}"};k({en:J,fr:M});var P=1e3,$=class extends I{static type="pivot";static dataAttributes=Object.freeze(["rows","columns","values","aggregate"]);static componentAttributes=Object.freeze(["rows","columns","values","aggregate","totals","heat","decimals","controls"]);static presets={simple:{totals:!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,totals:!0,controls:!0}};static styles=[V,F];static upgradeProperties=["content","settings"];static fromData(t){if(typeof t=="string")return t;let e={};if(t&&typeof t=="object"&&!Array.isArray(t)){let o=t;for(let i of["rows","columns","values","aggregate"]){let n=o[i];typeof n=="string"?e[i]=n:Array.isArray(n)&&i!=="values"&&n.every(r=>typeof r=="string")&&(e[i]=n.join(","))}}return{content:JSON.stringify(t),attributes:e}}constructor(){super(),this.parsed=null,this.choice=null,this.panelId=S("panel"),this.editor=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}contentChanged(){this.parsed=null}parse(){let t=this.text??"";if(this.parsed?.text===t)return this.parsed;try{this.parsed={text:t,dataset:K(t),error:null}}catch(e){this.parsed={text:t,dataset:null,error:e instanceof Error?e:new Error(String(e))}}return this.parsed}fieldList(t,e){let o=this.getAttribute(t);return o===null?[]:o.split(",").map(i=>i.trim()).filter(i=>e.fields.includes(i))}options(t){let e=t.fields.find(d=>!t.numeric.has(d))??t.fields[0]??"",o=this.hasAttribute("rows")?this.fieldList("rows",t):null,i=this.choice?.rows??o??(e?[e]:[]),n=this.choice?.columns??this.fieldList("columns",t),r=this.getAttribute("values")?.trim(),c=t.fields.find(d=>t.numeric.has(d)&&!i.includes(d)&&!n.includes(d))??"",s=this.choice?.value??(r&&t.fields.includes(r)?r:c),g=this.choice?.aggregate??C(this.getAttribute("aggregate"),x,s?"sum":"count");return{rows:i,columns:n,value:s,aggregate:g}}get settings(){let t=this.parse().dataset,e=t?this.options(t):{rows:[],columns:[],value:"",aggregate:"sum"};return{rows:e.rows,columns:e.columns,values:e.value,aggregate:e.aggregate}}set settings(t){if(!(!t||typeof t!="object")){this.choice={rows:Array.isArray(t.rows)?t.rows.map(String):void 0,columns:Array.isArray(t.columns)?t.columns.map(String):void 0,value:typeof t.values=="string"?t.values:void 0,aggregate:x.includes(t.aggregate)?t.aggregate:void 0};for(let e of Object.keys(this.choice))this.choice[e]===void 0&&delete this.choice[e];this._connected&&this.requestRender()}}renderContent(t){let e=this.t,{dataset:o,error:i}=this.parse(),n=a("div",{class:"panel",attrs:{id:this.panelId}}),r=a("div",{class:"body pv-body",part:"body"}),c=null,s="";if(i||!o)r.append(_(this.errorText(i)));else{let v=this.options(o),l=R(o.records,v,this.locale);this.feature("controls")&&r.append(this.controls(o,v)),l.truncated&&r.append(_(e("pivotTruncated",{count:w(j,this.locale)}))),r.append(this.tableView(l,v));let p=this.feature("totals");c=()=>B(l,v,{totals:p,total:e("pivotTotal")}),s=e("pivotRecords",{count:w(o.records.length,this.locale)})}let g=[];if(this.editing){let v=this.createEditor();n.classList.add("pv-edit"),n.append(a("div",{class:"body editor-body",part:"body source"},v.element),r),g=this.historyButtons(v)}else n.append(r);let d=r.querySelector("table"),m=[d?this.searchButton(new N(d)):null,...g,this.editToggleButton(),this.fullscreenButton(),this.feature("download")&&c?this.downloadButton(c,this.downloadName("pivot.csv"),"text/csv"):null,this.feature("copy")&&c?this.copyButton(c,e("pivotCopyCsv")):null];t.append(...this.chrome({badge:s,actions:m}),n),this.editor?.align()}errorText(t){let e=this.t;if(t instanceof L){if(t.message==="empty")return e("pivotInvalidEmpty");if(t.message.startsWith("json:"))return e("pivotInvalidJson",{message:t.message.slice(5)})}return e("pivotInvalidFormat")}controls(t,e){let o=this.t,i=a("div",{class:"pv-controls",part:"controls",attrs:{role:"group","aria-label":o("pivotSettings")}}),n=(s,g,d,m,v)=>{let l=`${this.panelId}-${s}`,p=a("select",{class:"pv-select",attrs:{id:l,"data-focus-key":`select-${s}`},on:{change:()=>{this.choice={...this.options(t),...v(p.value)},this.render();let u=this.settings;y(this,b.CHANGE,u)}}});for(let[u,f]of d){let h=a("option",{text:f,attrs:{value:u}});u===m&&(h.selected=!0),p.append(h)}i.append(a("label",{class:"pv-field",attrs:{for:l}},a("span",{text:o(g)}),p))},r=t.fields.map(s=>[s,s]),c=["",o("pivotNone")];return n("rows","pivotRows",[c,...r],e.rows[0]??"",s=>({rows:s?[s]:[]})),n("columns","pivotColumns",[c,...r],e.columns[0]??"",s=>({columns:s?[s]:[]})),n("values","pivotValues",[c,...r],e.value,s=>({value:s,aggregate:s?e.aggregate:"count"})),n("aggregate","pivotAggregate",x.map(s=>[s,o(`pivotAgg_${s}`)]),e.aggregate,s=>({aggregate:s})),i}format(t){if(t===null)return"";let e=T(this.getAttribute("decimals"),{min:0,max:10,fallback:-1});try{return new Intl.NumberFormat(this.locale,e<0?{maximumFractionDigits:2}:{minimumFractionDigits:e,maximumFractionDigits:e}).format(t)}catch{return String(t)}}tableView(t,e){let o=this.t,i=this.feature("totals"),n=A(this.getAttribute("heat"))===!0,r=l=>l.map(p=>p||o("pivotEmptyKey")).join(" \xB7 ")||o("pivotTotal"),c=e.aggregate==="count"?o("pivotAgg_count"):o("pivotOf",{aggregate:o(`pivotAgg_${e.aggregate}`),field:e.value}),s=t.max-t.min||1,g=(l,p,u,f)=>{let h=a("td",{class:`pv-cell${f?" pv-total":""}`,part:f?"cell total":"cell"});if(l===null)return h.classList.add("pv-empty"),h;n&&!f&&(h.classList.add("pv-heat"),h.style.setProperty("--_heat",String(Math.round((l-t.min)/s*100)/100)));let z=p===null?o("pivotTotal"):r(t.rowKeys[p]),D=u===null?o("pivotTotal"):r(t.colKeys[u]);return h.append(a("button",{class:"pv-value",text:this.format(l),attrs:{type:"button","aria-label":o("pivotCellLabel",{value:this.format(l),row:z,column:D}),"data-focus-key":`cell-${p}-${u}`},on:{click:()=>this.choose(t,e,p,u,l)}})),h},d=a("tr");d.append(a("th",{class:"pv-corner",part:"header-cell",attrs:{scope:"col"},text:e.rows.join(" \xB7 ")||""}));for(let l of t.colKeys)d.append(a("th",{class:"col-number",part:"header-cell",attrs:{scope:"col"},text:e.columns.length?r(l):c}));i&&e.columns.length&&d.append(a("th",{class:"col-number pv-total",part:"header-cell",attrs:{scope:"col"},text:o("pivotTotal")}));let m=a("tbody");t.rowKeys.slice(0,P).forEach((l,p)=>{let u=a("tr",{},a("th",{part:"header-cell",attrs:{scope:"row"},text:e.rows.length?r(l):c}));t.colKeys.forEach((f,h)=>u.append(g(t.cell(p,h),p,h,!1))),i&&e.columns.length&&u.append(g(t.rowTotal(p),p,null,!0)),m.append(u)});let v=a("table",{class:"grid pv-table",part:"table",attrs:{"aria-label":c}},a("caption",{class:"sr-only",text:c}),a("thead",{},d),m);if(i&&e.rows.length){let l=a("tr",{},a("th",{class:"pv-total",part:"header-cell",attrs:{scope:"row"},text:o("pivotTotal")}));t.colKeys.forEach((p,u)=>l.append(g(t.colTotal(u),null,u,!0))),e.columns.length&&l.append(g(t.total,null,null,!0)),v.append(a("tfoot",{},l))}return a("div",{class:"pv-wrap",attrs:{tabindex:"0",role:"region","aria-label":o("pivotTable")}},v)}choose(t,e,o,i,n){let r=(c,s)=>s?Object.fromEntries(c.map((g,d)=>[g,s[d]])):null;y(this,b.SELECT,{row:o===null?null:r(e.rows,t.rowKeys[o]),column:i===null?null:r(e.columns,t.colKeys[i]),value:n,records:t.records(o,i).slice(0,1e4)})}createEditor(){return this.editor?.destroy(),this.editor=new O({text:this.text??"",language:/^\s*[[{]/.test(this.text??"")?"json":"plaintext",lineNumbers:!0,wrap:!1,highlightLimit:E().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:t=>this.edited(t),onChange:t=>y(this,b.CHANGE,{value:t}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.parsed=null,this.previewTimer=setTimeout(()=>this.render(),300)}};export{$ as a};
