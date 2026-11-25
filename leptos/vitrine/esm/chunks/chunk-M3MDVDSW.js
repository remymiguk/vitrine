/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{b as C,c as P,d as M}from"./chunk-VO4G3KRT.js";import{r as B}from"./chunk-37OSRZJK.js";import{B as f,C as m,E as k,O as T,X as L,_,ba as I,c as E,e as $,o,q as A}from"./chunk-JAZI474S.js";import{h as D,k as x,l as S,m as V,q as w}from"./chunk-SCKP2KTO.js";var z=`/*
 * Software bills of materials: a summary, the dependency tree, the table of components and
 * the vulnerabilities. License kinds and severities are written in words; colors only repeat
 * them.
 */
.sbom-body {
  display: grid;
  gap: var(--_space-3);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.sbom-muted {
  color: var(--_fg-muted);
}

.sbom-summary {
  display: grid;
  gap: var(--_space-2);
}

.sbom-title,
.sbom-facts {
  margin: 0;
}

.sbom-facts {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1) var(--_space-3);
}

.sbom-chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

.sbom-chips li {
  padding: 1px var(--_space-2);
  border: 1px solid var(--_border);
  border-inline-start-width: 3px;
  border-radius: var(--_radius-sm);
  font-size: var(--_font-size-small);
}

.sbom-chips li.sbom-plain {
  border: 0;
  color: var(--_fg-muted);
}

.lic-permissive {
  border-color: var(--_success) !important;
}

.lic-weak {
  border-color: var(--_warning) !important;
}

.lic-strong {
  border-color: var(--_danger) !important;
}

.lic-other,
.lic-unknown {
  border-color: var(--_border-strong) !important;
}

.sev-critical,
.sev-high {
  border-color: var(--_danger) !important;
}

.sev-medium {
  border-color: var(--_warning) !important;
}

.sev-low,
.sev-info {
  border-color: var(--_info) !important;
}

.sbom-tree-actions {
  display: flex;
  gap: var(--_space-3);
  margin: 0;
}

.sbom-tree-actions .text-btn {
  color: var(--_accent-fg);
}

.sbom-tree,
.sbom-tree ul {
  margin: 0;
  padding-inline-start: 1.1em;
  list-style: none;
}

.sbom-tree {
  padding-inline-start: 0;
}

.sbom-tree li {
  margin: 2px 0;
}

.sbom-tree ul {
  border-inline-start: 1px dashed var(--_border-strong);
  margin-inline-start: 0.35em;
}

.sbom-tree summary {
  cursor: pointer;
}

.sbom-node {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px var(--_space-2);
  vertical-align: middle;
}

.sbom-name {
  font-family: var(--_font-mono);
  font-weight: 600;
}

.sbom-version {
  color: var(--_fg-muted);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
}

.sbom-lic,
.sbom-tag,
.sbom-sev {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 0 6px;
  border: 1px solid var(--_border);
  border-inline-start-width: 3px;
  border-radius: var(--_radius-sm);
  font-size: var(--_font-size-small);
  white-space: nowrap;
}

.sbom-lic {
  max-width: 18em;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sbom-sev svg {
  width: 12px;
  height: 12px;
}

.sbom-sev.sev-critical,
.sbom-sev.sev-high {
  color: var(--_danger);
  font-weight: 600;
}

.sbom-count {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.sbom-seen {
  font-size: var(--_font-size-small);
  font-style: italic;
}

.sbom-unreachable summary {
  color: var(--_fg-muted);
  cursor: pointer;
}

.sbom-filters {
  display: flex;
}

.sbom-query {
  flex: 1;
  min-width: 0;
  padding: 4px var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: inherit;
  font: inherit;
}

.sbom-scroll {
  max-height: min(60vh, 520px);
  overflow: auto;
}

.sbom-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--_font-size-small);
}

.sbom-table th,
.sbom-table td {
  padding: 4px var(--_space-2);
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
}

.sbom-table thead th {
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--_surface);
  color: var(--_fg-muted);
  font-weight: 500;
  white-space: nowrap;
}

.sbom-table tbody th {
  font-weight: 500;
}

.sbom-table code {
  font-family: var(--_font-mono);
}

.sbom-purl {
  display: block;
  color: var(--_fg-muted);
  font-family: var(--_font-mono);
  font-size: 0.9em;
  overflow-wrap: anywhere;
}

.sbom-path {
  color: var(--_fg-muted);
  overflow-wrap: anywhere;
}

.sbom-vulns {
  display: grid;
  gap: var(--_space-2);
  margin: 0;
  padding: 0;
  list-style: none;
}

.sbom-vuln {
  display: grid;
  gap: var(--_space-1);
  padding: var(--_space-2) var(--_space-3);
  border: 1px solid var(--_border);
  border-inline-start-width: 3px;
  border-radius: var(--_radius-sm);
}

.sbom-vuln.dismissed {
  border-style: dashed;
}

.sbom-vuln p {
  margin: 0;
  overflow-wrap: anywhere;
}

.sbom-vuln-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-2);
}

.sbom-vuln-id {
  font-family: var(--_font-mono);
  font-weight: 700;
}

a.sbom-vuln-id {
  color: var(--_accent-fg);
}

.sbom-affects code,
.sbom-vector {
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
}

.sbom-edit > .editor-body {
  max-height: min(40vh, 320px);
  border-bottom: 1px solid var(--_border);
}
`;var N=Object.freeze({sbomTabs:"SBOM views",sbomTabTree:"Dependencies",sbomTabComponents:"Components ({count})",sbomTabVulns:"Vulnerabilities ({count})",sbomComponents:"{count} components",sbomDirect:"{count} direct",sbomTransitive:"{count} transitive",sbomCreated:"created {date}",sbomBy:"by {tools}",sbomAffected:"{count} affected components",sbomNoGraph:"The SBOM has no dependency graph: components are listed under the root.",sbomCapped:"Only the first {count} components are read.",sbomInvalidEmpty:"No SBOM.",sbomInvalidJson:"The SBOM is not valid JSON: {detail}",sbomInvalidFormat:"This is not a CycloneDX or SPDX SBOM in JSON.",sbomUnreachable:"Not linked to the root ({count})",sbomSeen:"listed above",sbomCycle:"cycle",sbomShowAll:"Expand all",sbomCollapse:"Collapse all",sbomFilter:"Filter: name, version, license, package URL",sbomNone:"No component matches.",sbomName:"Name",sbomVersion:"Version",sbomType:"Type",sbomLicense:"License",sbomDepth:"Depth",sbomDepthDirect:"direct",sbomDepthRoot:"root",sbomDepthUnknown:"\u2014",sbomVulnsCol:"Vulnerabilities",sbomPurl:"Package URL",sbomScope:"Scope",sbomSupplier:"Supplier",sbomHashes:"Hashes",sbomPath:"Brought in by",sbomLicense_permissive:"permissive",sbomLicense_weak:"weak copyleft",sbomLicense_strong:"strong copyleft",sbomLicense_other:"other license",sbomLicense_unknown:"no license",sbomSeverity:"Severity",sbomSeverity_critical:"Critical",sbomSeverity_high:"High",sbomSeverity_medium:"Medium",sbomSeverity_low:"Low",sbomSeverity_info:"Info",sbomSeverity_none:"None",sbomSeverity_unknown:"Unknown",sbomVulnId:"Identifier",sbomScore:"Score",sbomAffects:"Affects",sbomState:"Analysis",sbomState_exploitable:"exploitable",sbomState_in_triage:"in triage",sbomState_not_affected:"not affected",sbomState_resolved:"resolved",sbomState_resolved_with_pedigree:"resolved",sbomState_false_positive:"false positive",sbomRecommendation:"Recommendation",sbomNoVulns:"The SBOM lists no vulnerability.",sbomVulnCount:"{count} vulnerabilities",sbomCopyCsv:"CSV",sbomCopyPurls:"Copy the package URLs"}),R={sbomTabs:"Vues du SBOM",sbomTabTree:"D\xE9pendances",sbomTabComponents:"Composants ({count})",sbomTabVulns:"Vuln\xE9rabilit\xE9s ({count})",sbomComponents:"{count} composants",sbomDirect:"{count} directs",sbomTransitive:"{count} transitifs",sbomCreated:"cr\xE9\xE9 le {date}",sbomBy:"par {tools}",sbomAffected:"{count} composants touch\xE9s",sbomNoGraph:"Le SBOM n\u2019a pas de graphe de d\xE9pendances : les composants sont rang\xE9s sous la racine.",sbomCapped:"Seuls les {count} premiers composants sont lus.",sbomInvalidEmpty:"Aucun SBOM.",sbomInvalidJson:"Le SBOM n\u2019est pas du JSON valide : {detail}",sbomInvalidFormat:"Ce n\u2019est pas un SBOM CycloneDX ou SPDX en JSON.",sbomUnreachable:"Non reli\xE9s \xE0 la racine ({count})",sbomSeen:"d\xE9j\xE0 list\xE9",sbomCycle:"cycle",sbomShowAll:"Tout d\xE9plier",sbomCollapse:"Tout replier",sbomFilter:"Filtrer : nom, version, licence, package URL",sbomNone:"Aucun composant ne correspond.",sbomName:"Nom",sbomVersion:"Version",sbomType:"Type",sbomLicense:"Licence",sbomDepth:"Profondeur",sbomDepthDirect:"directe",sbomDepthRoot:"racine",sbomVulnsCol:"Vuln\xE9rabilit\xE9s",sbomPurl:"Package URL",sbomScope:"Port\xE9e",sbomSupplier:"Fournisseur",sbomHashes:"Empreintes",sbomPath:"Amen\xE9 par",sbomLicense_permissive:"permissive",sbomLicense_weak:"copyleft faible",sbomLicense_strong:"copyleft fort",sbomLicense_other:"autre licence",sbomLicense_unknown:"sans licence",sbomSeverity:"Gravit\xE9",sbomSeverity_critical:"Critique",sbomSeverity_high:"\xC9lev\xE9e",sbomSeverity_medium:"Moyenne",sbomSeverity_low:"Faible",sbomSeverity_info:"Info",sbomSeverity_none:"Aucune",sbomSeverity_unknown:"Inconnue",sbomVulnId:"Identifiant",sbomScore:"Score",sbomAffects:"Touche",sbomState:"Analyse",sbomState_exploitable:"exploitable",sbomState_in_triage:"en cours d\u2019analyse",sbomState_not_affected:"non concern\xE9",sbomState_resolved:"corrig\xE9e",sbomState_resolved_with_pedigree:"corrig\xE9e",sbomState_false_positive:"faux positif",sbomRecommendation:"Recommandation",sbomNoVulns:"Le SBOM ne liste aucune vuln\xE9rabilit\xE9.",sbomVulnCount:"{count} vuln\xE9rabilit\xE9s",sbomCopyCsv:"CSV",sbomCopyPurls:"Copier les package URL"};var j=1e4,K=2e3,g=["critical","high","medium","low","info","none","unknown"];function Q(l){return l?C[M(l,e=>C.indexOf(P(e))).rank]??"unknown":"unknown"}var Z=l=>/^pkg:([a-z0-9.+-]+)\//i.exec(l)?.[1].toLowerCase()??"";function ee(l){if(!Array.isArray(l))return"";let e=l.map(t=>f(t)?m(t.expression,300)||(f(t.license)?m(t.license.id,100)||m(t.license.name,100):""):"").filter(Boolean);return e.length>1?e.map(t=>/\s/.test(t)?`(${t})`:t).join(" AND "):e[0]??""}function te(l){let e=l.toLowerCase();return e==="moderate"?"medium":e==="informational"?"info":g.includes(e)?e:"unknown"}var se=l=>l>=9?"critical":l>=7?"high":l>=4?"medium":l>0?"low":"none";function F(l){let e=l.trim();if(!e)return{ok:!1,error:"empty"};let t;try{t=JSON.parse(e)}catch(s){return{ok:!1,error:"json",detail:s instanceof Error?s.message.slice(0,200):""}}return f(t)?t.bomFormat==="CycloneDX"||Array.isArray(t.components)&&!t.spdxVersion?{ok:!0,sbom:oe(t)}:typeof t.spdxVersion=="string"||Array.isArray(t.packages)?{ok:!0,sbom:re(t)}:{ok:!1,error:"format"}:{ok:!1,error:"format"}}var U=l=>({format:l,spec:"",name:"",created:"",tools:[],roots:[],components:new Map,edges:new Map,vulns:[],capped:!1,graph:!1});function q(l){let e=l.license??"",t=l.purl??"";return{version:"",type:"library",scope:"",supplier:"",hashes:[],...l,purl:t,license:e,ecosystem:Z(t),category:Q(e),depth:-1,path:[],vulns:[]}}function oe(l){let e=U("CycloneDX");e.spec=m(l.specVersion,10);let t=f(l.metadata)?l.metadata:{};e.created=m(t.timestamp,40);let s=t.tools,n=Array.isArray(s)?s:f(s)&&Array.isArray(s.components)?s.components:[];e.tools=n.filter(f).map(p=>[m(p.vendor,60),m(p.name,80),m(p.version,30)].filter(Boolean).join(" ")).filter(Boolean);let i=0,a=p=>{if(!f(p))return null;if(e.components.size>=j)return e.capped=!0,null;let u=m(p.group,120),b=m(p.name,200),h=m(p["bom-ref"],300)||`#${i++}`,d=f(p.supplier)?m(p.supplier.name,120):"",y=(Array.isArray(p.hashes)?p.hashes:[]).filter(f).map(v=>`${m(v.alg,20)}:${m(v.content,130)}`);if(e.components.set(h,q({ref:h,name:u?`${u}${u.startsWith("@")?"/":":"}${b}`:b,version:m(p.version,80),type:m(p.type,40)||"library",purl:m(p.purl,400),license:ee(p.licenses),scope:m(p.scope,20),supplier:d,hashes:y})),Array.isArray(p.components))for(let v of p.components){let O=a(v);O&&e.edges.set(h,[...e.edges.get(h)??[],O])}return h},r=a(t.component);r&&(e.roots.push(r),e.name=e.components.get(r).name);let c=(Array.isArray(l.components)?l.components:[]).map(a).filter(p=>p!==null);if(Array.isArray(l.dependencies)&&l.dependencies.length){e.graph=!0;for(let p of l.dependencies){if(!f(p))continue;let u=m(p.ref,300),b=(Array.isArray(p.dependsOn)?p.dependsOn:[]).map(h=>m(h,300)).filter(Boolean);u&&e.edges.set(u,[...new Set([...e.edges.get(u)??[],...b])])}}else r&&e.edges.set(r,[...e.edges.get(r)??[],...c]);return r||e.roots.push(...c.filter(p=>![...e.edges.values()].some(u=>u.includes(p))).map(String)),ne(l.vulnerabilities,e),X(e),e}function ne(l,e){if(Array.isArray(l)){for(let t of l.slice(0,K)){if(!f(t))continue;let s=(Array.isArray(t.ratings)?t.ratings:[]).filter(f),n=["CVSSv4","CVSSv31","CVSSv3","CVSSv2"];s.sort((d,y)=>(n.indexOf(m(d.method,20))+1||9)-(n.indexOf(m(y.method,20))+1||9));let i=s.find(d=>typeof d.score=="number")??s[0],a=i&&typeof i.score=="number"&&Number.isFinite(i.score)?i.score:null,r=i?m(i.severity,20):"",c=f(t.analysis)?t.analysis:{},p=f(t.source)?t.source:{},u=(Array.isArray(t.affects)?t.affects:[]).filter(f).map(d=>m(d.ref,300)).filter(Boolean),b=m(t.id,80),h={id:b,source:m(p.name,60),url:(/^https?:\/\//i.test(m(p.url,2e3))?k(p.url):null)??(/^CVE-\d{4}-\d+$/.test(b)?`https://nvd.nist.gov/vuln/detail/${b}`:/^GHSA(-[a-z0-9]{4}){3}$/.test(b)?`https://github.com/advisories/${b}`:null),severity:r?te(r):a!==null?se(a):"unknown",score:a,method:i?m(i.method,20):"",vector:i?m(i.vector,200):"",description:m(t.description,2e3)||m(t.detail,2e3),recommendation:m(t.recommendation,1e3),state:m(c.state,30),justification:m(c.justification,60),cwes:(Array.isArray(t.cwes)?t.cwes:[]).filter(d=>Number.isInteger(d)).map(d=>`CWE-${d}`),affects:u};e.vulns.push(h);for(let d of u)e.components.get(d)?.vulns.push(b)}e.vulns.sort((t,s)=>g.indexOf(t.severity)-g.indexOf(s.severity)||(s.score??0)-(t.score??0))}}function re(l){let e=U("SPDX");e.spec=m(l.spdxVersion,20).replace(/^SPDX-/,""),e.name=m(l.name,200);let t=f(l.creationInfo)?l.creationInfo:{};e.created=m(t.created,40),e.tools=(Array.isArray(t.creators)?t.creators:[]).map(a=>m(a,120)).filter(a=>a.startsWith("Tool:")).map(a=>a.slice(5).trim());let s=a=>/^(NOASSERTION|NONE)$/.test(a)?"":a;for(let a of Array.isArray(l.packages)?l.packages:[]){if(!f(a))continue;if(e.components.size>=j){e.capped=!0;break}let r=m(a.SPDXID,300)||`#${e.components.size}`,c=(Array.isArray(a.externalRefs)?a.externalRefs:[]).filter(f).find(b=>m(b.referenceType,30)==="purl"),p=s(m(a.supplier,160)).replace(/^(Organization|Person):\s*/,""),u=(Array.isArray(a.checksums)?a.checksums:[]).filter(f).map(b=>`${m(b.algorithm,20)}:${m(b.checksumValue,130)}`);e.components.set(r,q({ref:r,name:m(a.name,200),version:s(m(a.versionInfo,80)),type:m(a.primaryPackagePurpose,40).toLowerCase()||"library",purl:c?m(c.referenceLocator,400):"",license:s(m(a.licenseConcluded,300))||s(m(a.licenseDeclared,300)),supplier:p,hashes:u}))}let n=(a,r)=>{if(!e.components.has(a)||!e.components.has(r)||a===r)return;let c=e.edges.get(a)??[];c.includes(r)||c.push(r),e.edges.set(a,c)},i=(Array.isArray(l.documentDescribes)?l.documentDescribes:[]).map(a=>m(a,300));for(let a of Array.isArray(l.relationships)?l.relationships:[]){if(!f(a))continue;let r=m(a.spdxElementId,300),c=m(a.relatedSpdxElement,300),p=m(a.relationshipType,40);if(p==="DESCRIBES"&&r==="SPDXRef-DOCUMENT")i.push(c);else if(p==="DESCRIBED_BY"&&c==="SPDXRef-DOCUMENT")i.push(r);else if(["DEPENDS_ON","CONTAINS","BUILD_DEPENDENCY_OF","DEV_DEPENDENCY_OF","RUNTIME_DEPENDENCY_OF","OPTIONAL_DEPENDENCY_OF","DEPENDENCY_OF"].includes(p)&&(e.graph=!0,p==="DEPENDS_ON"||p==="CONTAINS"?n(r,c):n(c,r),/^(DEV|BUILD|OPTIONAL)_/.test(p))){let u=e.components.get(r);u&&!u.scope&&(u.scope=p.startsWith("OPTIONAL")?"optional":p.startsWith("DEV")?"dev":"build")}}if(e.roots=[...new Set(i)].filter(a=>e.components.has(a)),!e.roots.length){let a=new Set([...e.edges.values()].flat());e.roots=[...e.components.keys()].filter(r=>!a.has(r)).slice(0,50)}return X(e),e}function X(l){let e=[];for(let t of l.roots){let s=l.components.get(t);s&&s.depth<0&&(s.depth=0,s.path=[t],e.push(t))}for(let t=0;t<e.length;t+=1){let s=l.components.get(e[t]);for(let n of l.edges.get(e[t])??[]){let i=l.components.get(n);!i||i.depth>=0||(i.depth=s.depth+1,i.path=[...s.path,n],e.push(n))}}}function G(l){let e=[...l.components.values()].filter(i=>!l.roots.includes(i.ref)),t=new Map;for(let i of e)i.ecosystem&&t.set(i.ecosystem,(t.get(i.ecosystem)??0)+1);let s=Object.fromEntries(C.map(i=>[i,0]));for(let i of e)s[i.category]+=1;let n=Object.fromEntries(g.map(i=>[i,0]));for(let i of l.vulns)n[i.severity]+=1;return{components:e.length,direct:e.filter(i=>i.depth===1).length,transitive:e.filter(i=>i.depth>1).length,ecosystems:[...t].sort((i,a)=>a[1]-i[1]),licenses:s,vulns:n,affected:e.filter(i=>i.vulns.length).length}}function H(l){let e=s=>{let n=String(s);return/^[=+\-@\t\r]/.test(n)&&(n=`'${n}`),/[",\n\r]/.test(n)||n!==String(s)?`"${n.replace(/"/g,'""')}"`:n},t=[["name","version","type","purl","license","depth","scope","vulnerabilities"]];for(let s of l)t.push([s.name,s.version,s.type,s.purl,s.license,String(s.depth),s.scope,s.vulns.join(" ")]);return t.map(s=>s.map(e).join(",")).join(`
`)}V({en:N,fr:R});var ie=Object.freeze(["tree","components","vulnerabilities"]),W=3e3,ae=2e3,J=class extends I{static type="sbom";static componentAttributes=Object.freeze(["view","depth","filters","tabs"]);static presets={simple:{tabs:!0},full:{header:!0,dot:!0,copy:!0,fullscreen:!0,tabs:!0}};static styles=[z];static upgradeProperties=["content"];constructor(){super(),this.panelId=A("panel"),this.ids={query:A("query")},this.viewState=null,this.query="",this.expandAll=null,this.parsed=null,this.editor=null,this.previewTimer=void 0}read(){let e=this.text??"";return this.parsed?.text!==e&&(this.parsed={text:e,result:F(e)}),this.parsed.result}get sbom(){let e=this.read();return e.ok?e.sbom:null}get view(){return this.viewState??$(this.getAttribute("view"),ie,"tree")}get openDepth(){let e=Number(this.getAttribute("depth")??1);return Number.isFinite(e)?Math.max(0,Math.min(50,e)):1}filtered(e){let t=this.query.trim().toLowerCase();return t?e.filter(s=>`${s.name} ${s.version} ${s.license} ${s.purl} ${s.vulns.join(" ")}`.toLowerCase().includes(t)):e}renderContent(e){let t=this.t,s=this.read(),n=o("div",{class:"body sbom-body",part:"body"}),i=null,a=[];if(!s.ok)n.append(_(t(`sbomInvalid${s.error[0].toUpperCase()}${s.error.slice(1)}`,{detail:s.detail??""})));else{let d=s.sbom;a=[...d.components.values()].filter(v=>!d.roots.includes(v.ref)),i=this.feature("tabs")?L({tabs:[{id:"tree",label:t("sbomTabTree")},{id:"components",label:t("sbomTabComponents",{count:w(a.length,this.locale)})},{id:"vulnerabilities",label:t("sbomTabVulns",{count:d.vulns.length})}],selected:this.view,label:t("sbomTabs"),panelId:this.panelId,onSelect:v=>this.selectView(v)}):null,n.append(this.summaryView(d)),d.capped&&n.append(_(t("sbomCapped",{count:w(d.components.size,this.locale)})));let y=i?this.view:"tree";y==="vulnerabilities"?n.append(this.vulnsView(d)):y==="components"?(E(this.getAttribute("filters"))!==!1&&n.append(this.filterView(a)),n.append(this.componentsView(d,this.filtered(a)))):n.append(this.treeView(d))}let r=o("div",{class:"panel",attrs:{id:this.panelId,role:i?"tabpanel":null}}),c=[];if(this.editing){let d=this.createEditor();r.classList.add("sbom-edit"),r.append(o("div",{class:"body editor-body",part:"body editor"},d.element),n),c=this.historyButtons(d)}else r.append(n);let p=this.filtered(a),u=this.feature("copy")&&p.length>0,b=[...c,this.editToggleButton(),this.fullscreenButton(),u?this.copyTextButton(()=>H(p),t("sbomCopyCsv"),"copy-csv"):null,u?this.copyButton(()=>p.map(d=>d.purl).filter(Boolean).join(`
`),t("sbomCopyPurls")):null],h=s.ok?s.sbom:null;e.append(...this.chrome({badge:h?`${h.format}${h.spec?` ${h.spec}`:""}`:"SBOM",tabs:i,actions:b}),r),this.editor?.align()}selectView(e){e!==this.view&&(this.viewState=e,this.render(),this.root.querySelector(`[data-tab="${e}"]`)?.focus(),S(this,x.TAB_CHANGE,{tab:e}))}summaryView(e){let t=this.t,s=G(e),n=r=>w(r,this.locale),i=Object.entries(s.licenses).filter(([,r])=>r),a=g.filter(r=>s.vulns[r]);return o("div",{class:"sbom-summary",part:"summary"},e.name?o("p",{class:"sbom-title"},o("strong",{text:e.name})):null,o("p",{class:"sbom-facts"},o("strong",{text:t("sbomComponents",{count:n(s.components)})}),e.graph?o("span",{text:t("sbomDirect",{count:n(s.direct)})}):null,e.graph?o("span",{text:t("sbomTransitive",{count:n(s.transitive)})}):null,s.ecosystems.length?o("span",{class:"sbom-muted",text:s.ecosystems.map(([r,c])=>`${r} ${n(c)}`).join(" \xB7 ")}):null,e.created?o("span",{class:"sbom-muted",text:t("sbomCreated",{date:e.created.slice(0,10)})}):null,e.tools.length?o("span",{class:"sbom-muted",text:t("sbomBy",{tools:e.tools.slice(0,3).join(", ")})}):null),i.length?o("ul",{class:"sbom-chips",attrs:{"aria-label":t("sbomLicense")}},...i.map(([r,c])=>o("li",{class:`lic-${r}`},o("span",{text:t(`sbomLicense_${r}`)}),o("strong",{text:` ${n(c)}`})))):null,a.length?o("ul",{class:"sbom-chips",attrs:{"aria-label":t("sbomVulnsCol")}},...a.map(r=>o("li",{class:`sev sev-${r}`},o("span",{text:t(`sbomSeverity_${r}`)}),o("strong",{text:` ${n(s.vulns[r])}`}))),o("li",{class:"sbom-plain",text:t("sbomAffected",{count:n(s.affected)})})):null,e.graph?null:o("p",{class:"sbom-muted",text:t("sbomNoGraph")}))}badges(e,t=!0){let s=this.t;return[t?o("code",{class:"sbom-name",text:e.name}):null,e.version?o("span",{class:"sbom-version",text:e.version}):null,o("span",{class:`sbom-lic lic-${e.category}`,attrs:{title:e.license||null},text:e.license||s("sbomLicense_unknown")}),e.scope&&e.scope!=="required"?o("span",{class:"sbom-tag",text:e.scope}):null,...e.vulns.slice(0,4).map(n=>{let a=this.sbom.vulns.find(r=>r.id===n);return o("span",{class:`sbom-sev sev-${a?.severity??"unknown"}`,part:"severity",attrs:{title:a?s(`sbomSeverity_${a.severity}`):null}},T("alert"),o("span",{text:n}))})].filter(n=>n!==null)}treeView(e){let t=this.t,s=0,n=new Set,i=c=>this.expandAll===null?c<this.openDepth:this.expandAll,a=(c,p,u)=>{let b=e.components.get(c);if(!b||s>=W)return null;s+=1;let h=(e.edges.get(c)??[]).filter(v=>e.components.has(v)),d=o("span",{class:"sbom-node"},...this.badges(b));if(u.has(c))return o("li",{},d,o("span",{class:"sbom-tag",text:t("sbomCycle")}));if(n.has(c)&&h.length)return o("li",{},d,o("span",{class:"sbom-muted sbom-seen",text:` ${t("sbomSeen")}`}));if(n.add(c),!h.length)return o("li",{},d);let y=new Set(u).add(c);return o("li",{},o("details",{attrs:{open:i(p)}},o("summary",{},d,o("span",{class:"sbom-count",text:` ${h.length}`})),o("ul",{},...h.map(v=>a(v,p+1,y)))))},r=[...e.components.values()].filter(c=>c.depth<0);return o("div",{class:"sbom-tree-box"},o("p",{class:"sbom-tree-actions"},o("button",{class:"text-btn",text:t("sbomShowAll"),attrs:{type:"button","data-focus-key":"expand"},on:{click:()=>{this.expandAll=!0,this.render()}}}),o("button",{class:"text-btn",text:t("sbomCollapse"),attrs:{type:"button","data-focus-key":"collapse"},on:{click:()=>{this.expandAll=!1,this.render()}}})),o("ul",{class:"sbom-tree",part:"tree"},...e.roots.map(c=>a(c,0,new Set))),r.length?o("details",{class:"sbom-unreachable"},o("summary",{text:t("sbomUnreachable",{count:r.length})}),o("ul",{class:"sbom-tree"},...r.slice(0,W).map(c=>o("li",{},o("span",{class:"sbom-node"},...this.badges(c)))))):null)}filterView(e){let t=this.t,s=o("input",{class:"sbom-query",attrs:{id:this.ids.query,type:"search",value:this.query,placeholder:t("sbomFilter"),"aria-label":t("sbomFilter"),"data-focus-key":"query",spellcheck:"false"},on:{input:()=>{this.query=s.value.slice(0,200),this.render(),S(this,x.FILTER_CHANGE,{query:this.query,shown:this.filtered(e).length})}}});return o("div",{class:"sbom-filters"},s)}componentsView(e,t){let s=this.t;if(!t.length)return _(s("sbomNone"));let n=r=>Math.min(99,...r.vulns.map(c=>g.indexOf(e.vulns.find(p=>p.id===c)?.severity??"unknown"))),i=[...t].sort((r,c)=>n(r)-n(c)||c.vulns.length-r.vulns.length||(r.depth<0?99:r.depth)-(c.depth<0?99:c.depth)||r.name.localeCompare(c.name)),a=r=>{let c=e.components.get(r);return c?`${c.name}${c.version?`@${c.version}`:""}`:r};return o("div",{class:"sbom-scroll"},o("table",{class:"sbom-table",part:"components"},o("thead",{},o("tr",{},...[s("sbomName"),s("sbomVersion"),s("sbomLicense"),s("sbomDepth"),s("sbomVulnsCol"),s("sbomPath")].map(r=>o("th",{attrs:{scope:"col"},text:r})))),o("tbody",{},...i.slice(0,ae).map(r=>o("tr",{attrs:{"data-ref":r.ref}},o("th",{attrs:{scope:"row"}},o("code",{text:r.name}),r.purl?o("span",{class:"sbom-purl",text:r.purl}):null),o("td",{},o("code",{text:r.version})),o("td",{},o("span",{class:`sbom-lic lic-${r.category}`,text:r.license||s("sbomLicense_unknown")}),o("span",{class:"sr-only",text:` (${s(`sbomLicense_${r.category}`)})`})),o("td",{text:r.depth<0?s("sbomDepthUnknown"):r.depth===1?s("sbomDepthDirect"):String(r.depth)}),o("td",{},...this.badges(r,!1).filter(c=>c.classList.contains("sbom-sev"))),o("td",{class:"sbom-path",text:r.path.length>2?r.path.slice(1,-1).map(a).join(" \u2192 "):""}))))))}vulnsView(e){let t=this.t;if(!e.vulns.length)return _(t("sbomNoVulns"));let s=n=>{let i=e.components.get(n);return i?`${i.name}${i.version?`@${i.version}`:""}`:n};return o("ul",{class:"sbom-vulns",part:"vulnerabilities"},...e.vulns.map(n=>o("li",{class:`sbom-vuln sev-${n.severity}${n.state==="not_affected"||n.state==="false_positive"||n.state.startsWith("resolved")?" dismissed":""}`,attrs:{"data-vuln":n.id}},o("p",{class:"sbom-vuln-head"},o("span",{class:`sbom-sev sev-${n.severity}`,part:"severity"},o("span",{text:t(`sbomSeverity_${n.severity}`)}),n.score!==null?o("span",{text:` ${n.score.toFixed(1)}`}):null),n.url?o("a",{class:"sbom-vuln-id",text:n.id,attrs:{href:n.url,rel:"noopener noreferrer",target:"_blank"}}):o("strong",{class:"sbom-vuln-id",text:n.id}),n.method?o("span",{class:"sbom-muted",text:n.method}):null,n.state?o("span",{class:"sbom-tag",text:`${t("sbomState")}: ${Object.hasOwn(N,`sbomState_${n.state}`)?t(`sbomState_${n.state}`):n.state}`}):null,...n.cwes.map(i=>o("span",{class:"sbom-tag",text:i}))),n.description?o("p",{class:"sbom-desc",text:n.description}):null,o("p",{class:"sbom-affects"},o("span",{class:"sbom-muted",text:`${t("sbomAffects")}: `}),...n.affects.flatMap((i,a)=>[a?", ":"",o("code",{text:s(i)}),(e.components.get(i)?.path.length??0)>2?o("span",{class:"sbom-muted",text:` (${t("sbomPath").toLowerCase()} ${e.components.get(i).path.slice(1,-1).map(s).join(" \u2192 ")})`}):""]).filter(i=>i!=="")),n.recommendation?o("p",{class:"sbom-reco"},o("strong",{text:`${t("sbomRecommendation")}: `}),n.recommendation):null,n.vector?o("p",{},o("code",{class:"sbom-vector",text:n.vector})):null)))}createEditor(){return this.editor?.destroy(),this.editor=new B({text:this.text??"",language:"json",lineNumbers:!0,wrap:!1,highlightLimit:D().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>S(this,x.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),400)}};export{J as a};
