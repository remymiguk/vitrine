/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as C}from"./chunk-2VPPRJTA.js";import{c as H,d as R,e as U}from"./chunk-4RYHQHTJ.js";import{a as G}from"./chunk-DTTKBDLP.js";import{U as P,Y as W,_ as N,ba as X,c as O,e as $,o as a,q as J,w as T,y as z,z as V}from"./chunk-JAZI474S.js";import{h as D,k as K,l as M,m as q,q as S}from"./chunk-SCKP2KTO.js";var Y=`/*
 * Comparison of datasets: filter buttons, notes, then the rows marked added, removed or
 * changed, the old value struck through beside the new one. Colors are never the only cue:
 * a mark and the status are written in each row.
 */
.cmp-body {
  display: grid;
  align-content: start;
  padding: 0;
  background: var(--_surface);
  overscroll-behavior: auto;
}

.cmp-filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2);
  padding: var(--_space-3) var(--_space-4) 0;
}

.cmp-filter {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  padding: 0 10px;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  background: var(--_surface);
  color: var(--_fg);
  font: 500 var(--_font-size-ui) / 1 var(--_font-ui);
  cursor: pointer;
}

.cmp-filter:hover {
  background: var(--_surface-sunken);
}

.cmp-filter[aria-pressed='true'] {
  border-color: var(--_accent);
  background: var(--_accent-soft);
}

.cmp-filter:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.cmp-count {
  color: var(--_fg-muted);
  font-variant-numeric: tabular-nums;
}

.cmp-notes {
  margin: 0;
  padding: var(--_space-2) var(--_space-4) var(--_space-3);
  list-style: none;
  color: var(--_fg-muted);
  font: 400 var(--_font-size-small) / 1.5 var(--_font-ui);
  border-bottom: 1px solid var(--_border);
}

.cmp-none {
  margin: 0;
  padding: var(--_space-4);
  color: var(--_fg-muted);
  font: 400 var(--_font-size-ui) / 1.5 var(--_font-ui);
}

.cmp-body > .notice {
  margin: var(--_space-3) var(--_space-4) 0;
}

.cmp-wrap {
  overflow: auto;
  max-height: 560px;
}

:host([max-height]) .cmp-wrap,
.vt[data-fullscreen] .cmp-wrap {
  max-height: none;
}

.cmp-wrap:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.cmp-table td {
  vertical-align: top;
}

.cmp-status {
  white-space: nowrap;
}

.cmp-mark {
  display: inline-block;
  width: 1.2em;
  font-family: var(--_font-mono);
  font-weight: 700;
}

.cmp-status-text {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.cmp-added > td {
  background: color-mix(in srgb, var(--_success) 10%, transparent);
}

.cmp-added .cmp-mark {
  color: var(--_success);
}

.cmp-removed > td {
  background: color-mix(in srgb, var(--_danger) 9%, transparent);
  color: var(--_fg-muted);
}

.cmp-removed .cmp-mark {
  color: var(--_danger);
}

.cmp-changed .cmp-mark {
  color: var(--_warning);
}

.cmp-table td.cmp-cell-changed {
  background: color-mix(in srgb, var(--_warning) 12%, transparent);
}

.cmp-cell-changed del,
.cmp-cell-changed ins {
  display: block;
  text-decoration-thickness: 1px;
}

.cmp-cell-changed del {
  color: var(--_fg-muted);
}

.cmp-cell-changed ins {
  font-weight: 600;
  text-decoration: none;
}

.cmp-col-added::after {
  content: ' +';
  color: var(--_success);
}

.cmp-col-removed {
  text-decoration: line-through;
}
`;var ae=["id","key","uuid","guid","code","sku","slug","email","name"],Q=(i,e)=>e.map(t=>C(i[t])?"":String(i[t]).trim());function ce(i,e){let t=C(i),r=C(e);if(t||r)return t&&r;let s=R(i),o=R(e);return s!==null&&o!==null?s===o:String(i).trim()===String(e).trim()}var Z=(i,e)=>{let t=new Set;for(let r of i){let s=r[e];if(C(s))return!1;let o=String(s).trim();if(t.has(o))return!1;t.add(o)}return i.length>0};function de(i,e,t){let r=e.fields.filter(o=>i.fields.includes(o));if(t?.length){let o=t.filter(n=>r.includes(n));if(o.length===t.length)return o}let s=ae.map(o=>r.find(n=>n.toLowerCase()===o)).filter(o=>o!==void 0);for(let o of[...s,...r.slice(0,1)])if(Z(i.records,o)&&Z(e.records,o))return[o];return[]}function ee(i,e,t={}){let r=de(i,e,t.key),s=[...e.fields,...i.fields.filter(d=>!e.fields.includes(d))],o=e.fields.filter(d=>!i.fields.includes(d)),n=i.fields.filter(d=>!e.fields.includes(d)),c=e.fields.filter(d=>i.fields.includes(d)),m=0,f=d=>{let p=new Map;return d.map((w,A)=>{if(!r.length)return String(A+1);let x=JSON.stringify(Q(w,r)),k=(p.get(x)??0)+1;return p.set(x,k),k>1&&(m+=1),k>1?`${x}#${k}`:x})},u=f(i.records),l=f(e.records),h=new Map(u.map((d,p)=>[d,p])),v=new Set(l),g=new Map,b="";u.forEach((d,p)=>{v.has(d)?b=d:g.set(b,[...g.get(b)??[],p])});let y=[],_={added:0,removed:0,changed:0,same:0},F=(d,p)=>r.length?Q(d,r):[String(p+1)],j=d=>{for(let p of g.get(d)??[]){let w=i.records[p];y.push({status:"removed",key:F(w,p),before:w,after:null,changed:[]}),_.removed+=1}};return j(""),e.records.forEach((d,p)=>{let w=l[p],A=h.get(w);if(A===void 0)y.push({status:"added",key:F(d,p),before:null,after:d,changed:[]}),_.added+=1;else{let x=i.records[A],k=c.filter(L=>!ce(x[L],d[L])),B=k.length?"changed":"same";y.push({status:B,key:F(d,p),before:x,after:d,changed:k}),_[B]+=1}j(w)}),{key:r,fields:s,addedFields:o,removedFields:n,rows:y,counts:_,duplicates:m}}function te(i,e){let t=s=>{let o=s==null?"":String(s),n=/^[=+\-@\t\r]/.test(o)&&typeof s!="number"&&!/^-\d+(?:\.\d+)?$/.test(o)?`'${o}`:o;return/[",\n\r]/.test(n)?`"${n.replace(/"/g,'""')}"`:n},r=[["status",...i.fields].map(t).join(",")];for(let s of e){let o=i.fields.map(n=>s.status==="removed"?s.before?.[n]:s.status==="changed"&&s.changed.includes(n)?`${s.before?.[n]??""} \u2192 ${s.after?.[n]??""}`:s.after?.[n]??s.before?.[n]);r.push([s.status,...o].map(t).join(","))}return r.join(`
`)}var re=Object.freeze({compareFilter:"Show",compareAll:"All",compareChanges:"Changes",compareAdded:"Added",compareRemoved:"Removed",compareChanged:"Changed",compareSame:"Unchanged",compareStatus:"Status",compareRows:"Rows compared",compareBefore:"before",compareAfter:"after",compareByKey:"Rows are paired by {key}.",compareByPosition:"Rows are paired by position: no column identifies them.",compareFieldsAdded:"New columns: {fields}.",compareFieldsRemoved:"Removed columns: {fields}.",compareDuplicates:"{count} rows repeat a key: they are paired in order.",compareNone:"No difference.",compareNoRow:"No row.",compareTruncated:"Only the first {count} rows are shown.",compareSummary:"{added} added, {removed} removed, {changed} changed",compareCopyCsv:"Copy the differences as CSV",compareInvalidEmpty:"No data to compare: give the two datasets.",compareInvalidFormat:"Expected CSV with a header row, or JSON: a list of objects.",compareInvalidJson:"The JSON could not be read: {message}",compareInvalidSide:"{side}: {message}"}),se={compareFilter:"Afficher",compareAll:"Tout",compareChanges:"Diff\xE9rences",compareAdded:"Ajout\xE9es",compareRemoved:"Supprim\xE9es",compareChanged:"Modifi\xE9es",compareSame:"Identiques",compareStatus:"\xC9tat",compareRows:"Lignes compar\xE9es",compareBefore:"avant",compareAfter:"apr\xE8s",compareByKey:"Les lignes sont appari\xE9es par {key}.",compareByPosition:"Les lignes sont appari\xE9es par position : aucune colonne ne les identifie.",compareFieldsAdded:"Nouvelles colonnes : {fields}.",compareFieldsRemoved:"Colonnes supprim\xE9es : {fields}.",compareDuplicates:"{count} lignes r\xE9p\xE8tent une cl\xE9 : elles sont appari\xE9es dans l\u2019ordre.",compareNone:"Aucune diff\xE9rence.",compareNoRow:"Aucune ligne.",compareTruncated:"Seules les {count} premi\xE8res lignes sont affich\xE9es.",compareSummary:"{added} ajout\xE9es, {removed} supprim\xE9es, {changed} modifi\xE9es",compareCopyCsv:"Copier les diff\xE9rences en CSV",compareInvalidEmpty:"Rien \xE0 comparer : donnez les deux jeux de donn\xE9es.",compareInvalidFormat:"CSV avec une ligne d\u2019en-t\xEAte, ou JSON (une liste d\u2019objets) attendu.",compareInvalidJson:"Le JSON n\u2019a pas pu \xEAtre lu : {message}",compareInvalidSide:"{side} : {message}"};q({en:re,fr:se});var le=["changes","all","added","removed","changed"],I=2e3,pe=60,me=["original","modified"],oe=class extends X{static type="compare";static dataAttributes=Object.freeze(["key"]);static componentAttributes=Object.freeze(["key","filter","original-src","modified-src","filters"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,filters:!0}};static styles=[G,Y];static allowEmpty=!0;static upgradeProperties=["content","original","modified"];constructor(){super(),this.own={},this.inline={},this.remote={},this.sidesLoading=0,this.sidesAbort=null,this.filterChoice=null,this.cache=null,this.panelId=J("panel")}get original(){return this.sides().original??""}set original(e){this.own.original=e==null?void 0:typeof e=="string"?e:JSON.stringify(e),this.sidesChanged()}get modified(){return this.sides().modified??""}set modified(e){this.own.modified=e==null?void 0:typeof e=="string"?e:JSON.stringify(e),this.sidesChanged()}applyData(e){let t=e!==null&&typeof e=="object"&&!Array.isArray(e)?e:null;if(!t||!["original","modified","before","after"].some(r=>r in t)){super.applyData(e);return}this._data=e,this.applyDataAttributes({key:Array.isArray(t.key)?t.key.join(","):t.key}),this.original=t.original??t.before??"",this.modified=t.modified??t.after??""}sides(){let e={},t=this.text?.trim()??"";if(t.startsWith("{"))try{let s=JSON.parse(t);if(s&&typeof s=="object"&&["original","modified","before","after"].some(o=>o in s)){let o=n=>n===void 0?void 0:typeof n=="string"?n:JSON.stringify(n);e={original:o(s.original??s.before),modified:o(s.modified??s.after)}}}catch{}let r=s=>this.own[s]??this.remote[s]??this.inline[s]??e[s];return{original:r("original"),modified:r("modified")}}readInline(){this.inline={};for(let e of Array.from(this.children)){let t=T(e);t!==null&&(e.hasAttribute("data-original")?this.inline.original=t:e.hasAttribute("data-modified")&&(this.inline.modified=t))}return this.inline.original===void 0&&this.inline.modified===void 0?super.readInline():null}connectedCallback(){super.connectedCallback(),this.loadSides()}disconnectedCallback(){this.sidesAbort?.abort(),super.disconnectedCallback()}attributeChangedCallback(e,t,r){e==="filter"&&(this.filterChoice=null),(e==="original-src"||e==="modified-src")&&t!==r&&this._connected&&this.loadSides(),super.attributeChangedCallback(e,t,r)}loadSides(){this.sidesAbort?.abort();let e=new AbortController;this.sidesAbort=e,this.remote={},this.sidesLoading=0;let t=D();for(let r of me){let s=this.getAttribute(`${r}-src`);s&&(this.sidesLoading+=1,z(s,{allowRemote:O(this.getAttribute("allow-remote"))===!0,maxSize:t.maxSize,timeout:t.fetchTimeout,signal:e.signal}).then(o=>{e.signal.aborted||(this.remote[r]=o,this.sidesLoading-=1,this.sidesChanged())},o=>{V(o)||e.signal.aborted||(this.sidesLoading-=1,this.setError(o))}))}this.sidesLoading&&this.requestRender()}sidesChanged(){this.cache=null,this._connected&&this.requestRender()}contentChanged(){this.cache=null}compare(){let e=this.t,{original:t,modified:r}=this.sides(),s=(this.getAttribute("key")??"").split(",").map(c=>c.trim()).filter(Boolean),o=`${s.join(",")}\0${t??""}\0${r??""}`;if(this.cache?.key===o)return this.cache;if(!t?.trim()||!r?.trim())return this.cache={key:o,comparison:null,error:e("compareInvalidEmpty")},this.cache;let n=(c,m)=>{try{return U(c)}catch(f){let u=f instanceof H&&f.message.startsWith("json:")?e("compareInvalidJson",{message:f.message.slice(5)}):e("compareInvalidFormat");throw new Error(e("compareInvalidSide",{side:e(m==="original"?"compareBefore":"compareAfter"),message:u}),{cause:f})}};try{let c=ee(n(t,"original"),n(r,"modified"),{key:s});this.cache={key:o,comparison:c,error:null}}catch(c){this.cache={key:o,comparison:null,error:c instanceof Error?c.message:String(c)}}return this.cache}get comparison(){return this.compare().comparison}get currentFilter(){return this.filterChoice??$(this.getAttribute("filter"),le,"changes")}renderContent(e){let t=this.t;if(this.sidesLoading>0){e.append(...this.chrome(null),a("div",{class:"body",part:"body"},W(t)));return}let{comparison:r,error:s}=this.compare(),o=a("div",{class:"panel",attrs:{id:this.panelId}}),n=a("div",{class:"body cmp-body",part:"body"});if(s||!r)n.append(N(s??t("compareInvalidEmpty")));else{let h=this.currentFilter,v=r.rows.filter(g=>ne(h,g.status));this.feature("filters")&&n.append(this.filtersView(r,h)),n.append(this.notes(r)),v.length?(v.length>I&&n.append(N(t("compareTruncated",{count:S(I,this.locale)}))),n.append(this.tableView(r,v.slice(0,I)))):n.append(a("p",{class:"cmp-none",text:t(h==="changes"?"compareNone":"compareNoRow")}))}o.append(n);let c=n.querySelector("table"),m=r?()=>te(r,r.rows.filter(h=>ne(this.currentFilter,h.status))):null,f=[c?this.searchButton(new P(c)):null,this.fullscreenButton(),this.feature("download")&&m?this.downloadButton(m,this.downloadName("differences.csv"),"text/csv"):null,this.feature("copy")&&m?this.copyButton(m,t("compareCopyCsv")):null],u=r?.counts,l=u?t("compareSummary",{added:S(u.added,this.locale),removed:S(u.removed,this.locale),changed:S(u.changed,this.locale)}):"";e.append(...this.chrome({badge:l,actions:f}),o)}filtersView(e,t){let r=this.t,s=e.counts,o=a("div",{class:"cmp-filters",part:"filters",attrs:{role:"group","aria-label":r("compareFilter")}}),n=[["changes","compareChanges",s.added+s.removed+s.changed],["added","compareAdded",s.added],["removed","compareRemoved",s.removed],["changed","compareChanged",s.changed],["all","compareAll",e.rows.length]];for(let[c,m,f]of n)o.append(a("button",{class:`cmp-filter f-${c}`,attrs:{type:"button","aria-pressed":String(c===t),"data-focus-key":`filter-${c}`},on:{click:()=>{this.filterChoice=c,this.render(),M(this,K.FILTER_CHANGE,{filter:c})}}},a("span",{text:r(m)}),a("span",{class:"cmp-count",text:S(f,this.locale)})));return o}notes(e){let t=this.t,r=a("ul",{class:"cmp-notes"});return r.append(a("li",{text:e.key.length?t("compareByKey",{key:e.key.join(", ")}):t("compareByPosition")})),e.addedFields.length&&r.append(a("li",{class:"cmp-note-added",text:t("compareFieldsAdded",{fields:e.addedFields.join(", ")})})),e.removedFields.length&&r.append(a("li",{class:"cmp-note-removed",text:t("compareFieldsRemoved",{fields:e.removedFields.join(", ")})})),e.duplicates&&r.append(a("li",{text:t("compareDuplicates",{count:S(e.duplicates,this.locale)})})),r}tableView(e,t){let r=this.t,s=[...e.key,...e.fields.filter(l=>!e.key.includes(l))].slice(0,pe),o=new Set(e.addedFields),n=new Set(e.removedFields),c=a("tr",{},a("th",{class:"cmp-status-col",attrs:{scope:"col"},text:r("compareStatus")}));e.key.length||c.append(a("th",{class:"col-number",attrs:{scope:"col"},text:"#"}));for(let l of s)c.append(a("th",{class:o.has(l)?"cmp-col-added":n.has(l)?"cmp-col-removed":"",attrs:{scope:"col"},text:l}));let m={added:"compareAdded",removed:"compareRemoved",changed:"compareChanged",same:"compareSame"},f={added:"+",removed:"\u2212",changed:"~",same:""},u=a("tbody");for(let l of t){let h=a("tr",{class:`cmp-${l.status}`,part:`row-${l.status}`}),v=r(m[l.status]);h.append(a("td",{class:"cmp-status"},a("span",{class:"cmp-mark",text:f[l.status],attrs:{"aria-hidden":"true"}}),a("span",{class:"cmp-status-text",text:v}))),e.key.length||h.append(a("td",{class:"col-number",text:l.key[0]}));for(let g of s){let b=l.status==="changed"&&l.changed.includes(g),y=a("td",{class:b?"cmp-cell-changed":"",part:b?"cell-changed":void 0});b?y.append(a("del",{text:E(l.before?.[g]),attrs:{title:r("compareBefore")}}),a("span",{class:"sr-only",text:" \u2192 "}),a("ins",{text:E(l.after?.[g]),attrs:{title:r("compareAfter")}})):y.textContent=E(l.status==="removed"?l.before?.[g]:l.after?.[g]),h.append(y)}u.append(h)}return a("div",{class:"cmp-wrap",attrs:{tabindex:"0",role:"region","aria-label":r("compareRows")}},a("table",{class:"grid cmp-table",part:"table"},a("thead",{},c),u))}};function ne(i,e){return i==="all"?!0:i==="changes"?e!=="same":i===e}function E(i){return i==null?"":String(i)}export{oe as a};
