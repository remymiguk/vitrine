/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{b as L,e as P}from"./chunk-GRLVRD4V.js";import{a as z}from"./chunk-MACGSD2B.js";import{a as T}from"./chunk-PIFKHUVR.js";import{a as M}from"./chunk-5Y6ZLKSA.js";import{a as V}from"./chunk-VUXWEGPX.js";import{A as E,B as l,C as n,E as h,G as x,H as I,U as R,_ as j,b as $,c as W,e as O,o as d,q as N}from"./chunk-JAZI474S.js";import{k as b,l as A,m as F,q as _}from"./chunk-SCKP2KTO.js";var q=`/*
 * Advisories: vulnerabilities, the most severe first, with what they affect and what fixes them.
 */
.adv-body {
  display: grid;
  gap: var(--_space-4);
}

.adv-clean {
  margin: 0;
  color: var(--_success);
  font-weight: 600;
}

.adv-summary {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2);
}

.adv-filter {
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

.adv-filter:hover {
  background: var(--_accent-soft);
}

.adv-filter[aria-pressed='true'] {
  border-color: var(--_accent);
  background: var(--_accent-soft);
  font-weight: 600;
}

.adv-filter:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.adv-filter.s-critical,
.adv-filter.s-high {
  border-color: var(--_danger);
}

.adv-filter.s-moderate {
  border-color: var(--_warning);
}

.adv-count {
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}

.adv-list {
  display: grid;
  gap: var(--_space-2);
  margin: 0;
  padding: 0;
  list-style: none;
}

.adv-item {
  border: 1px solid var(--_border);
  border-inline-start: 4px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
}

.adv-item.s-critical,
.adv-item.s-high {
  border-inline-start-color: var(--_danger);
}

.adv-item.s-moderate {
  border-inline-start-color: var(--_warning);
}

.adv-item.s-low {
  border-inline-start-color: var(--_info);
}

.adv-item summary {
  display: flex;
  align-items: flex-start;
  gap: var(--_space-3);
  padding: var(--_space-3);
  cursor: pointer;
  list-style: none;
}

.adv-item summary::-webkit-details-marker {
  display: none;
}

.adv-item summary:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.adv-severity {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: var(--_space-1);
  min-width: 6.5rem;
  padding: 2px var(--_space-2);
  border: 1px solid currentColor;
  border-radius: var(--_radius-full);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.adv-severity.s-critical {
  border-color: var(--_danger);
  background: var(--_danger);
  color: var(--_surface);
}

.adv-severity.s-high {
  color: var(--_danger);
}

.adv-severity.s-moderate {
  color: var(--_warning);
}

.adv-severity.s-low {
  color: var(--_info);
}

.adv-severity.s-unknown {
  color: var(--_fg-muted);
}

.adv-score {
  margin-inline-start: auto;
  font-variant-numeric: tabular-nums;
}

.adv-head {
  display: grid;
  gap: 2px;
  min-width: 0;
}

.adv-title {
  color: var(--_fg);
  overflow-wrap: anywhere;
}

.adv-id,
.adv-muted {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.adv-packages {
  display: grid;
  font-size: var(--_font-size-small);
  overflow-wrap: anywhere;
}

.adv-packages code,
.adv-vector code {
  font-family: var(--_font-mono);
}

.adv-fix {
  color: var(--_success);
}

.adv-nofix {
  color: var(--_danger);
}

.adv-details {
  display: grid;
  gap: var(--_space-2);
  padding: 0 var(--_space-3) var(--_space-3) var(--_space-3);
}

.adv-details p {
  margin: 0;
}

.adv-text {
  color: var(--_fg);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.adv-vector {
  display: grid;
  gap: 2px;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  overflow-wrap: anywhere;
}

.adv-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-3);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.adv-meta a {
  color: var(--_accent-fg);
}

@media (max-width: 520px) {
  .adv-item summary {
    flex-direction: column;
    gap: var(--_space-2);
  }
}
`;var g=class extends Error{},m=["critical","high","moderate","low","unknown"];function G(r){let e={};for(let i of r.split("/")){let[s,a]=i.split(":");s&&a&&!s.startsWith("CVSS")&&(e[s]=a)}return e}function Q(r){if(!/^CVSS:3\.[01]\//.test(r))return null;let e=L(r);return e.ok?P(e.vector)?.base??null:null}function S(r){return r===null?"unknown":r>=9?"critical":r>=7?"high":r>=4?"moderate":r>0?"low":"unknown"}function w(r){let e=n(r,20).toLowerCase();return e==="critical"?"critical":e==="high"||e==="important"?"high":e==="moderate"||e==="medium"?"moderate":e==="low"||e==="info"||e==="informational"?"low":null}function k(r){let e=Array.isArray(r.severity)?r.severity.filter(l):[],i=l(r.cvss)?r.cvss:l(r.cvss_severities?.cvss_v3)?r.cvss_severities.cvss_v3:null,s=n(i?.vector_string??i?.vectorString,200)||n(e.find(t=>/^CVSS_V3/.test(n(t.type,20)))?.score,200)||n(e[0]?.score,200),a=I(i?.score);return{score:a!==null&&a>0?a:Q(s),vector:s}}function ee(r){let e=[],i="";for(let s of(Array.isArray(r.ranges)?r.ranges:[]).filter(l)){if(s.type==="GIT")continue;let a="";for(let t of(Array.isArray(s.events)?s.events:[]).filter(l)){t.introduced!==void 0&&(a=n(t.introduced,60));let o=n(t.fixed,60)||n(t.last_affected,60);!o&&!t.limit||(e.push(`${a&&a!=="0"?`>=${a} `:""}${t.fixed?"<":"<="}${o}`),t.fixed&&!i&&(i=n(t.fixed,60)),a="")}a&&e.push(a==="0"?"*":`>=${a}`)}return{range:e.join(" || "),fixed:i}}function B(r,e={}){let i=n(r.id,100);if(!i)return null;let{score:s,vector:a}=k(r),t=w(r.database_specific?.severity)??w((Array.isArray(r.affected)?r.affected:[]).find(c=>l(c)&&c.ecosystem_specific?.severity)?.ecosystem_specific?.severity),o=(Array.isArray(r.affected)?r.affected:[]).filter(l).slice(0,50).map(c=>{let y=l(c.package)?c.package:{};return{name:n(y.name,200),ecosystem:n(y.ecosystem,60),version:"",...ee(c)}}),f=e.name?o.filter(c=>c.name===e.name):o,p=(f.length?f:o).map(c=>({...c,version:e.version??""})),u=(Array.isArray(r.references)?r.references:[]).filter(l),v=u.find(c=>c.type==="ADVISORY")??u.find(c=>c.type==="WEB")??u[0];return{id:i,aliases:(Array.isArray(r.aliases)?r.aliases:[]).map(c=>n(c,100)).filter(Boolean).slice(0,20),title:n(r.summary,500)||i,details:n(r.details,2e4),severity:t??S(s),score:s,vector:a,affected:p,cwes:C(r.database_specific?.cwe_ids),url:h(v?.url)??h(`https://osv.dev/vulnerability/${encodeURIComponent(i)}`),published:x(r.published)}}function C(r){return Array.isArray(r)?r.map(e=>l(e)?n(e.cwe_id,20):n(e,20)).filter(e=>/^CWE-\d+$/.test(e)).slice(0,10):[]}function re(r){let e=l(r.security_advisory)?r:null,i=e?r.security_advisory:r,s=n(i.ghsa_id,100);if(!s)return null;let{score:a,vector:t}=k(i),f=(e&&l(e.security_vulnerability)?[e.security_vulnerability]:Array.isArray(i.vulnerabilities)?i.vulnerabilities:[]).filter(l).slice(0,50).map(v=>{let c=l(v.package)?v.package:{},y=v.first_patched_version;return{name:n(c.name,200),ecosystem:n(c.ecosystem,60),version:"",range:n(v.vulnerable_version_range,200),fixed:l(y)?n(y.identifier,60):n(y??v.patched_versions,60)}}),p=n(i.cve_id,40),u=(Array.isArray(i.identifiers)?i.identifiers:[]).filter(l).map(v=>n(v.value,100));return{id:s,aliases:[...new Set([p,...u].filter(v=>v&&v!==s))],title:n(i.summary,500)||s,details:n(i.description,2e4),severity:w(e?.security_vulnerability?.severity??i.severity)??S(a),score:a,vector:t,affected:f,cwes:C(i.cwes),url:h(e?.html_url??i.html_url),published:x(i.published_at)}}function ie(r){let e=new Map;for(let i of Object.values(r).filter(l)){let s=i.fixAvailable;for(let a of(Array.isArray(i.via)?i.via:[]).filter(l)){let t=h(a.url),o=n(t?.match(/GHSA-[\w-]+$/i)?.[0]??a.source,100)||`npm-${n(a.source,40)}`,{score:f,vector:p}=k(a),u=e.get(o)??{id:o,aliases:[],title:n(a.title,500)||o,details:"",severity:w(a.severity)??S(f),score:f,vector:p,affected:[],cwes:C(a.cwe),url:t,published:null},v=n(a.name??a.dependency??i.name,200);u.affected.some(c=>c.name===v)||u.affected.push({name:v,ecosystem:"npm",version:"",range:n(a.range??i.range,200),fixed:l(s)&&s.name===v?n(s.version,60):""}),e.set(o,u)}}return[...e.values()]}function U(r){let e=[];if(l(r)&&l(r.vulnerabilities)&&!Array.isArray(r.vulnerabilities))e.push(...ie(r.vulnerabilities));else if(l(r)&&Array.isArray(r.results))for(let s of r.results.filter(l))for(let a of(Array.isArray(s.packages)?s.packages:[]).filter(l)){let t=l(a.package)?a.package:{};for(let o of(Array.isArray(a.vulnerabilities)?a.vulnerabilities:[]).filter(l)){let f=B(o,{name:n(t.name,200),version:n(t.version,60)});f&&e.push(f)}}else{let s=Array.isArray(r)?r:l(r)?[r.vulns,r.advisories,r.alerts,r.items].find(Array.isArray)??(r.id||r.ghsa_id?[r]:null):null;if(!s)throw new g("shape");for(let a of s.filter(l)){let t=a.ghsa_id||l(a.security_advisory)?re(a):B(a);t&&e.push(t)}}let i=new Map;for(let s of e.slice(0,E)){let a=i.get(s.id);a?a.affected.push(...s.affected.filter(t=>!a.affected.some(o=>o.name===t.name&&o.version===t.version))):i.set(s.id,s)}return[...i.values()].sort((s,a)=>m.indexOf(s.severity)-m.indexOf(a.severity)||(a.score??0)-(s.score??0))}var D={AV:{N:"network",A:"adjacent",L:"local",P:"physical"},AC:{L:"low",H:"high"},PR:{N:"none",L:"low",H:"high"},UI:{N:"none",R:"required"},S:{U:"unchanged",C:"changed"}};function H(r){return[r.id,...r.aliases.filter(e=>e!==r.id).slice(0,2)].join(" \xB7 ")}var J=Object.freeze({advisoriesFilter:"Severity",advisoriesAll:"All",advisoriesCount:"{count} advisories",advisoriesOne:"1 advisory",advisoriesSeverity_critical:"Critical",advisoriesSeverity_high:"High",advisoriesSeverity_moderate:"Moderate",advisoriesSeverity_low:"Low",advisoriesSeverity_unknown:"Unknown",advisoriesScore:"CVSS {score}",advisoriesAffects:"{name} {range}",advisoriesInstalled:"installed: {version}",advisoriesFixed:"fixed in {version}",advisoriesNoFix:"no fix yet",advisoriesPublished:"Published {date}",advisoriesVector:"Attack: {AV} \xB7 complexity {AC} \xB7 privileges {PR} \xB7 user interaction {UI} \xB7 scope {S}",advisoriesWeakness:"Weakness",advisoriesRead:"Read the advisory",advisoriesNone:"No known vulnerability.",advisoriesNoMatch:"No advisory of this severity.",advisoriesCopy:"Copy as a Markdown table",advisoriesShape:"Expected OSV records, npm audit, osv-scanner or GitHub advisories JSON.",advisoriesWord_network:"network",advisoriesWord_adjacent:"adjacent network",advisoriesWord_local:"local",advisoriesWord_physical:"physical",advisoriesWord_low:"low",advisoriesWord_high:"high",advisoriesWord_none:"none",advisoriesWord_required:"required",advisoriesWord_unchanged:"unchanged",advisoriesWord_changed:"changed"}),X={advisoriesFilter:"Gravit\xE9",advisoriesAll:"Toutes",advisoriesCount:"{count} alertes",advisoriesOne:"1 alerte",advisoriesSeverity_critical:"Critique",advisoriesSeverity_high:"\xC9lev\xE9e",advisoriesSeverity_moderate:"Moyenne",advisoriesSeverity_low:"Faible",advisoriesSeverity_unknown:"Inconnue",advisoriesInstalled:"install\xE9e : {version}",advisoriesFixed:"corrig\xE9e en {version}",advisoriesNoFix:"pas encore de correctif",advisoriesPublished:"Publi\xE9e le {date}",advisoriesVector:"Attaque : {AV} \xB7 complexit\xE9 {AC} \xB7 privil\xE8ges {PR} \xB7 interaction {UI} \xB7 port\xE9e {S}",advisoriesWeakness:"Faiblesse",advisoriesRead:"Lire l\u2019alerte",advisoriesNone:"Aucune vuln\xE9rabilit\xE9 connue.",advisoriesNoMatch:"Aucune alerte de cette gravit\xE9.",advisoriesCopy:"Copier en tableau Markdown",advisoriesShape:"Du JSON OSV, npm audit, osv-scanner ou d\u2019alertes GitHub est attendu.",advisoriesWord_network:"r\xE9seau",advisoriesWord_adjacent:"r\xE9seau adjacent",advisoriesWord_local:"locale",advisoriesWord_physical:"physique",advisoriesWord_low:"faible",advisoriesWord_high:"\xE9lev\xE9e",advisoriesWord_none:"aucun",advisoriesWord_required:"requise",advisoriesWord_unchanged:"inchang\xE9e",advisoriesWord_changed:"chang\xE9e"};F({en:J,fr:X});var Y=3e3,Z=class extends M{static type="advisories";static componentAttributes=Object.freeze(["severity","expanded","filters"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,filters:!0}};static styles=[$,V,T,q];constructor(){super(),this.panelId=N("panel"),this.severityFilter=null,this.open=new Set}contentChanged(){this.severityFilter=null,this.open.clear()}read(){try{let e=U(JSON.parse(this.text??"")),i=this.getAttribute("severity"),s=i?m.indexOf(O(i,m,"unknown")):m.length;return{advisories:e.filter(a=>m.indexOf(a.severity)<=s),error:null}}catch(e){let i=e instanceof g?this.t("advisoriesShape"):this.t("jsonInvalid",{message:e instanceof Error?e.message:""});return{advisories:[],error:i}}}get advisories(){return this.read().advisories}renderContent(e){let i=this.t,{advisories:s,error:a}=this.read(),t=d("div",{class:"body data-body adv-body",part:"body"});if(a)t.append(j(a));else if(!s.length)t.append(d("p",{class:"adv-clean",text:i("advisoriesNone")}));else{this.feature("filters")&&t.append(this.summaryView(s));let v=this.severityFilter?s.filter(c=>c.severity===this.severityFilter):s;t.append(v.length?d("ul",{class:"adv-list"},...v.map(c=>d("li",{},this.advisoryView(c)))):d("p",{class:"data-none",text:i("advisoriesNoMatch")}))}let{panel:o,history:f}=this.previewPanel(t,this.panelId),p=t.querySelector(".adv-list"),u=s.length;e.append(...this.chrome({badge:a?"":u===1?i("advisoriesOne"):i("advisoriesCount",{count:_(u,this.locale)}),actions:[...f,this.editToggleButton(),p?this.searchButton(new R(p)):null,this.fullscreenButton(),this.feature("download")&&u?this.downloadButton(()=>se(s),this.downloadName("advisories.csv"),"text/csv"):null,this.feature("copy")&&u?this.copyButton(()=>te(s),i("advisoriesCopy")):null]}),o),this.editor?.align()}summaryView(e){let i=this.t,s=d("div",{class:"adv-summary",part:"summary",attrs:{role:"group","aria-label":i("advisoriesFilter")}}),a=m.filter(t=>e.some(o=>o.severity===t));for(let t of[null,...a]){let o=t?e.filter(f=>f.severity===t).length:e.length;s.append(d("button",{class:`adv-filter${t?` s-${t}`:""}`,attrs:{type:"button","aria-pressed":String(this.severityFilter===t),"data-focus-key":`severity-${t??"all"}`},on:{click:()=>{this.severityFilter=t,this.render(),A(this,b.FILTER_CHANGE,{severity:t})}}},d("span",{text:i(t?`advisoriesSeverity_${t}`:"advisoriesAll")}),d("span",{class:"adv-count",text:_(o,this.locale)})))}return s}severityView(e){let i=this.t,s=i(`advisoriesSeverity_${e.severity}`);return d("span",{class:`adv-severity s-${e.severity}`,part:"severity"},s,e.score!==null?d("span",{class:"adv-score",text:_(e.score,this.locale)}):null)}advisoryView(e){let i=this.t,s=d("span",{class:"adv-packages"},...e.affected.slice(0,6).map(t=>d("span",{class:"adv-package"},d("code",{text:t.name||t.ecosystem}),t.range?` ${t.range}`:"",t.version?d("span",{class:"adv-muted",text:` (${i("advisoriesInstalled",{version:t.version})})`}):null,d("span",{class:t.fixed?"adv-fix":"adv-nofix",text:` \u2192 ${t.fixed?i("advisoriesFixed",{version:t.fixed}):i("advisoriesNoFix")}`})))),a=d("details",{class:`adv-item s-${e.severity}`,part:"advisory",attrs:{open:W(this.getAttribute("expanded"))===!0||this.open.has(e.id)?"":null},on:{toggle:()=>{let t=a.open;t!==this.open.has(e.id)&&(t?this.open.add(e.id):this.open.delete(e.id),A(this,b.TOGGLE,{id:e.id,open:t}))}}},d("summary",{attrs:{"data-focus-key":`adv-${e.id}`}},this.severityView(e),d("span",{class:"adv-head"},d("strong",{class:"adv-title",text:e.title}),d("span",{class:"adv-id",text:H(e)}),s)),this.detailsView(e));return a}detailsView(e){let i=this.t,s=d("div",{class:"adv-details"});e.details&&s.append(d("p",{class:"adv-text",text:e.details.length>Y?`${e.details.slice(0,Y)}\u2026`:e.details}));let a=e.vector.startsWith("CVSS:3")?G(e.vector):null;if(a){let o=f=>{let p=D[f]?.[a[f]];return p?i(`advisoriesWord_${p}`):"?"};s.append(d("p",{class:"adv-vector"},d("span",{text:i("advisoriesVector",{AV:o("AV"),AC:o("AC"),PR:o("PR"),UI:o("UI"),S:o("S")})}),d("code",{text:e.vector})))}let t=d("p",{class:"adv-meta"});e.published!==null&&t.append(d("span",{text:i("advisoriesPublished",{date:this.formatDate(e.published,{dateStyle:"medium",timeZone:"UTC"})})}));for(let o of e.cwes)t.append(d("a",{text:o,attrs:{href:`https://cwe.mitre.org/data/definitions/${o.slice(4)}.html`,rel:"noopener",title:i("advisoriesWeakness")}}));return e.url&&t.append(d("a",{text:i("advisoriesRead"),attrs:{href:e.url,rel:"noopener"}})),t.childNodes.length&&s.append(t),s}};function se(r){return z([["id","aliases","severity","score","title","package","affected","fixed","url"],...r.flatMap(e=>(e.affected.length?e.affected:[null]).map(i=>[e.id,e.aliases.join(" "),e.severity,e.score??"",e.title,i?.name??"",i?.range??"",i?.fixed??"",e.url??""]))])}function te(r){let e=s=>s.replace(/[\\|`*_[\]<>]/g,"\\$&").replace(/\s+/g," ");return["| Advisory | Severity | Affected | Fixed in | Summary |","| --- | --- | --- | --- | --- |",...r.map(s=>{let a=s.affected.map(o=>`${o.name} ${o.range}`.trim()).join(", "),t=s.affected.map(o=>o.fixed).filter(Boolean).join(", ");return`| ${e(s.id)} | ${s.severity}${s.score!==null?` (${s.score})`:""} | ${e(a)} | ${e(t)||"\u2014"} | ${e(s.title)} |`})].join(`
`)}export{Z as a};
