/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as L,b as v,e as O,f as y,g as B}from"./chunk-VO4G3KRT.js";import{a as $}from"./chunk-MACGSD2B.js";import{a as z}from"./chunk-PIFKHUVR.js";import{a as P}from"./chunk-5Y6ZLKSA.js";import{a as E}from"./chunk-DTTKBDLP.js";import{a as k}from"./chunk-VUXWEGPX.js";import{U as A,X as N,_ as V,b as _,e as x,o as e,q as C}from"./chunk-JAZI474S.js";import{k as f,l as m,m as S,q as p}from"./chunk-SCKP2KTO.js";var T=`/*
 * Licenses: the licenses of dependencies, by kind, and those not allowed.
 */
.lic-body {
  display: grid;
  gap: var(--_space-4);
}

.c-permissive {
  --_kind: var(--_success);
}

.c-weak {
  --_kind: var(--_warning);
}

.c-strong {
  --_kind: var(--_danger);
}

.c-other {
  --_kind: var(--_info);
}

.c-unknown {
  --_kind: var(--_fg-muted);
}

.lic-summary {
  display: grid;
  gap: var(--_space-2);
}

.lic-bar {
  display: flex;
  height: 10px;
  overflow: hidden;
  border-radius: var(--_radius-full);
  background: var(--_surface-sunken);
}

.lic-part {
  flex: var(--_share) 0 0;
  min-width: 3px;
  background: var(--_kind);
}

.lic-legend {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1) var(--_space-4);
  margin: 0;
  padding: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  list-style: none;
}

.lic-key::before {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-inline-end: var(--_space-1);
  border-radius: 2px;
  background: var(--_kind);
  vertical-align: -1px;
}

.lic-filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2);
}

.lic-filter {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-2);
  padding: var(--_space-1) var(--_space-3);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  background: transparent;
  color: var(--_fg);
  font: inherit;
  cursor: pointer;
}

.lic-filter:hover {
  background: var(--_accent-soft);
}

.lic-filter[aria-pressed='true'] {
  border-color: var(--_accent);
  background: var(--_accent-soft);
  font-weight: 600;
}

.lic-filter:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.lic-filter.c-denied {
  border-color: var(--_danger);
  color: var(--_danger);
}

.lic-count {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
}

.lic-groups {
  display: grid;
  gap: var(--_space-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

.lic-group {
  border: 1px solid var(--_border);
  border-inline-start: 4px solid var(--_kind);
  border-radius: var(--_radius-sm);
}

.lic-group summary {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2) var(--_space-3);
  padding: var(--_space-2) var(--_space-3);
  cursor: pointer;
}

.lic-group summary:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.lic-name,
.lic-table code {
  font-family: var(--_font-mono);
  overflow-wrap: anywhere;
}

.lic-name {
  color: var(--_fg);
  font-weight: 600;
}

.lic-kind {
  color: var(--_kind);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.lic-members {
  margin: 0;
  padding: 0 var(--_space-3) var(--_space-3);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  line-height: 1.7;
  overflow-wrap: anywhere;
}

.lic-pkg a {
  color: var(--_accent-fg);
}

.lic-pkg.denied,
.lic-pkg.denied a {
  color: var(--_danger);
  font-weight: 600;
}

.lic-denied {
  margin-inline-start: var(--_space-1);
  padding: 0 var(--_space-1);
  border: 1px solid var(--_danger);
  border-radius: var(--_radius-sm);
  color: var(--_danger);
  font-size: 11px;
  font-weight: 600;
}

.lic-guessed {
  color: var(--_warning);
  cursor: help;
}

.lic-table-wrap {
  overflow-x: auto;
}
`;var I=Object.freeze({licensesByLicense:"Licenses",licensesPackages:"Packages",licensesFilter:"Kind of license",licensesAll:"All",licensesNotAllowed:"Not allowed",licensesCount:"{count} packages",licensesOne:"1 package",licensesViolations:"{count} not allowed",licensesCategory_permissive:"Permissive",licensesCategory_weak:"Weak copyleft",licensesCategory_strong:"Strong copyleft",licensesCategory_other:"Other",licensesCategory_unknown:"Unknown",licensesLicense:"License",licensesKind:"Kind",licensesPackage:"Package",licensesVersion:"Version",licensesGuessed:"read from a license file, not declared",licensesShare:"{category}: {count} ({percent})",licensesAllowedAll:"Every license is allowed.",licensesCopyCsv:"Copy as CSV",licensesEmpty:"No dependency.",licensesNoMatch:"No dependency of this kind.",licensesShape:"Expected a CycloneDX or SPDX SBOM, license-checker or pip-licenses JSON, or a list."}),F={licensesByLicense:"Licences",licensesPackages:"Paquets",licensesFilter:"Type de licence",licensesAll:"Toutes",licensesNotAllowed:"Non autoris\xE9es",licensesCount:"{count} paquets",licensesOne:"1 paquet",licensesViolations:"{count} non autoris\xE9s",licensesCategory_permissive:"Permissive",licensesCategory_weak:"Copyleft faible",licensesCategory_strong:"Copyleft fort",licensesCategory_other:"Autre",licensesCategory_unknown:"Inconnue",licensesLicense:"Licence",licensesKind:"Type",licensesPackage:"Paquet",licensesGuessed:"lue dans un fichier de licence, non d\xE9clar\xE9e",licensesAllowedAll:"Toutes les licences sont autoris\xE9es.",licensesCopyCsv:"Copier en CSV",licensesEmpty:"Aucune d\xE9pendance.",licensesNoMatch:"Aucune d\xE9pendance de ce type.",licensesShape:"Un SBOM CycloneDX ou SPDX, du JSON de license-checker ou pip-licenses, ou une liste est attendu."};S({en:I,fr:F});var G=["licenses","packages"],K=2e3,M=class extends P{static type="licenses";static componentAttributes=Object.freeze(["allow","view","filters","tabs"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,filters:!0,tabs:!0}};static styles=[_,k,z,E,T];constructor(){super(),this.panelId=C("panel"),this.filter=null,this.viewChoice=null}contentChanged(){this.filter=null}attributeChangedCallback(t,n,i){t==="view"&&(this.viewChoice=null),super.attributeChangedCallback(t,n,i)}get allowed(){return(this.getAttribute("allow")??"").split(",").map(t=>t.trim()).filter(Boolean).slice(0,200)}read(){try{return{deps:O(JSON.parse(this.text??"")),error:null}}catch(t){let n=t instanceof L?this.t("licensesShape"):this.t("jsonInvalid",{message:t instanceof Error?t.message:""});return{deps:[],error:n}}}get dependencies(){return this.read().deps}get violations(){let t=this.allowed;return this.dependencies.filter(n=>!y(n,t))}get view(){return this.viewChoice??x(this.getAttribute("view"),G,"licenses")}renderContent(t){let n=this.t,{deps:i,error:c}=this.read(),a=this.allowed,s=new Set(i.filter(r=>!y(r,a))),l=e("div",{class:"body data-body lic-body",part:"body"});if(c)l.append(V(c));else if(!i.length)l.append(e("p",{class:"data-none",text:n("licensesEmpty")}));else{l.append(this.barView(i)),this.feature("filters")&&l.append(this.filtersView(i,s));let r=this.filter,g=r==="denied"?i.filter(h=>s.has(h)):r?i.filter(h=>h.category===r):i;g.length?l.append(this.view==="packages"?this.packagesView(g,s):this.licensesView(g,s)):l.append(e("p",{class:"data-none",text:n("licensesNoMatch")}))}let o=this.feature("tabs")&&i.length?N({tabs:[{id:"licenses",label:n("licensesByLicense"),icon:"list"},{id:"packages",label:n("licensesPackages"),icon:"table"}],selected:this.view,label:n("tabs"),panelId:this.panelId,onSelect:r=>{this.viewChoice=r,this.render(),this.root.querySelector(`[data-tab="${r}"]`)?.focus(),m(this,f.TAB_CHANGE,{tab:r})}}):null,{panel:d,history:u}=this.previewPanel(l,this.panelId);o&&d.setAttribute("role","tabpanel");let b=l.querySelector(".lic-wrap"),w=()=>$([["package","version","license","kind","allowed","url"],...i.map(r=>[r.name,r.version,r.license,r.category,s.has(r)?"no":"yes",r.url??""])]),q=i.length===1?n("licensesOne"):n("licensesCount",{count:p(i.length,this.locale)});t.append(...this.chrome({badge:i.length?s.size?n("licensesViolations",{count:p(s.size,this.locale)}):q:"",tabs:o,actions:[...u,this.editToggleButton(),b?this.searchButton(new A(b)):null,this.fullscreenButton(),this.feature("download")&&i.length?this.downloadButton(w,this.downloadName("licenses.csv"),"text/csv"):null,this.feature("copy")&&i.length?this.copyButton(w,n("licensesCopyCsv")):null]}),d),this.editor?.align()}kind(t){return this.t(`licensesCategory_${t}`)}barView(t){let n=this.t,i=e("div",{class:"lic-bar",attrs:{"aria-hidden":"true"}}),c=e("ul",{class:"lic-legend"});for(let a of v){let s=t.filter(u=>u.category===a).length;if(!s)continue;let l=s/t.length,o=e("span",{class:`lic-part c-${a}`});o.style.setProperty("--_share",String(l)),i.append(o);let d=new Intl.NumberFormat(this.locale,{style:"percent",maximumFractionDigits:l<.01?1:0}).format(l);c.append(e("li",{class:`lic-key c-${a}`,text:n("licensesShare",{category:this.kind(a),count:p(s,this.locale),percent:d})}))}return e("div",{class:"lic-summary",part:"bar"},i,c)}filtersView(t,n){let i=this.t,c=e("div",{class:"lic-filters",part:"filters",attrs:{role:"group","aria-label":i("licensesFilter")}}),a=[null,...n.size?["denied"]:[],...v.filter(s=>t.some(l=>l.category===s))];for(let s of a){let l=s===null?t.length:s==="denied"?n.size:t.filter(d=>d.category===s).length,o=s===null?i("licensesAll"):s==="denied"?i("licensesNotAllowed"):this.kind(s);c.append(e("button",{class:`lic-filter${s?` c-${s}`:""}`,attrs:{type:"button","aria-pressed":String(this.filter===s),"data-focus-key":`filter-${s??"all"}`},on:{click:()=>{this.filter=s,this.render(),m(this,f.FILTER_CHANGE,{category:s})}}},e("span",{text:o}),e("span",{class:"lic-count",text:p(l,this.locale)})))}return c}packageName(t,n){let i=`${t.name}${t.version?`@${t.version}`:""}`;return e("span",{class:`lic-pkg${n.has(t)?" denied":""}`},t.url?e("a",{text:i,attrs:{href:t.url,rel:"noopener"}}):i,n.has(t)?e("span",{class:"lic-denied",text:this.t("licensesNotAllowed")}):null,t.guessed?e("span",{class:"lic-guessed",text:"*",attrs:{title:this.t("licensesGuessed")}}):null)}licensesView(t,n){let i=this.t,c=e("ul",{class:"lic-groups"});for(let a of B(t)){let s=a.deps.filter(l=>n.has(l)).length;c.append(e("li",{},e("details",{class:`lic-group c-${a.category}`,attrs:{open:s?"":null}},e("summary",{attrs:{"data-focus-key":`license-${a.license}`}},e("code",{class:"lic-name",text:a.license}),e("span",{class:`lic-kind c-${a.category}`,text:this.kind(a.category)}),e("span",{class:"lic-count",text:a.deps.length===1?i("licensesOne"):i("licensesCount",{count:p(a.deps.length,this.locale)})})),e("p",{class:"lic-members"},...a.deps.slice(0,500).flatMap((l,o)=>[o?", ":"",this.packageName(l,n)])))))}return e("div",{class:"lic-wrap"},c)}packagesView(t,n){let i=this.t,c=e("tr",{},...["licensesPackage","licensesLicense","licensesKind"].map(s=>e("th",{attrs:{scope:"col"},text:i(s)}))),a=e("tbody");for(let s of t.slice(0,K))a.append(e("tr",{class:n.has(s)?"denied":""},e("td",{},this.packageName(s,n)),e("td",{},e("code",{text:s.license})),e("td",{},e("span",{class:`lic-kind c-${s.category}`,text:this.kind(s.category)}))));return e("div",{class:"lic-wrap lic-table-wrap",attrs:{tabindex:"0",role:"region","aria-label":i("licensesPackages")}},e("table",{class:"grid lic-table",part:"table"},e("thead",{},c),a))}};export{M as a};
