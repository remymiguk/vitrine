/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{r as O}from"./chunk-37OSRZJK.js";import{O as y,_ as V,ba as W,c as b,o as a,p as L,q as _}from"./chunk-JAZI474S.js";import{h as E,k as w,l as j,m as z}from"./chunk-SCKP2KTO.js";var H=`/*
 * Version ranges: the range field, the range in words, what to watch, the version installed,
 * the versions that match and a field to test one. Matches are marked with a check and in
 * words for screen readers; colors only repeat them.
 */
.semver-body {
  display: grid;
  gap: var(--_space-3);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.semver-results {
  display: grid;
  gap: var(--_space-3);
}

.semver-field,
.semver-test {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-2);
}

.semver-field label,
.semver-test label {
  font-weight: 600;
}

.semver-input {
  flex: 1 1 14em;
  min-width: 0;
  padding: 4px var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: inherit;
  font-family: var(--_font-mono);
  font-size: var(--_font-size);
}

.semver-input:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.semver-label {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.semver-muted {
  margin: 0;
  color: var(--_fg-muted);
}

.semver-reading {
  display: grid;
  gap: var(--_space-1);
}

.semver-reading ul {
  display: grid;
  gap: var(--_space-2);
  margin: 0;
  padding: 0;
  list-style: none;
}

.semver-reading li {
  display: grid;
  gap: 2px;
  padding: var(--_space-2) var(--_space-3);
  border-inline-start: 3px solid var(--_accent);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
}

.semver-reading li.empty {
  border-inline-start-color: var(--_danger);
}

.semver-set,
.semver-versions code,
.semver-bounds {
  font-family: var(--_font-mono);
}

.semver-set {
  font-weight: 700;
}

.semver-bounds {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.semver-warnings {
  display: grid;
  gap: var(--_space-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

.semver-warnings li,
.semver-resolved,
.semver-test-result {
  display: flex;
  align-items: flex-start;
  gap: var(--_space-2);
  margin: 0;
  overflow-wrap: anywhere;
}

.semver-warnings svg,
.semver-resolved svg,
.semver-test-result svg,
.semver-versions svg {
  flex: none;
  width: 14px;
  height: 14px;
  margin-top: 3px;
}

.semver-warnings .warning svg {
  color: var(--_warning);
}

.semver-warnings .danger {
  font-weight: 600;
}

.semver-warnings .danger svg,
.semver-resolved.none svg,
.semver-test-result.no svg {
  color: var(--_danger);
}

.semver-resolved svg,
.semver-test-result.ok svg {
  color: var(--_success);
}

.semver-versions-box,
.semver-result {
  display: grid;
  gap: var(--_space-1);
}

.semver-test-result {
  flex-basis: 100%;
  min-height: 1.4em;
}

.semver-versions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1);
  max-height: 240px;
  margin: 0;
  padding: 0;
  overflow: auto;
  list-style: none;
}

.semver-versions li {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 1px var(--_space-2);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-full);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.semver-versions svg {
  margin-top: 0;
  width: 12px;
  height: 12px;
}

.semver-versions li.ok {
  border-color: var(--_success);
  background: var(--_surface-sunken);
  color: var(--_fg);
}

.semver-versions li.ok svg {
  color: var(--_success);
}

.semver-versions li.resolved {
  border-width: 2px;
  font-weight: 700;
}

.semver-versions li.pre code {
  font-style: italic;
}

.semver-tag {
  padding: 0 4px;
  border-radius: var(--_radius-sm);
  background: var(--_accent-soft);
  color: var(--_fg);
  font-size: 0.9em;
}

.semver-edit > .editor-body {
  max-height: min(35vh, 240px);
  border-bottom: 1px solid var(--_border);
}

/* Ranges are shown as typed: no \`>=\` \u2192 \`\u2265\` ligature. */
.semver-input,
.semver-set,
.semver-versions code {
  font-variant-ligatures: none;
}
`;var B=Object.freeze({semverRange:"Range",semverRangePlaceholder:"^1.2.3, ~2.1, >=1.4 <2, 1.x || 2.x",semverTest:"Test a version",semverTestPlaceholder:"1.4.2",semverInvalid:"\u201C{near}\u201D is not a version or a range term.",semverInvalidLong:"The range is too long.",semverInvalidVersion:"\u201C{version}\u201D is not a semantic version (major.minor.patch).",semverReadsAs:"Matches",semverEither:"Either:",semverBounds:"Versions {bounds}",semverAll:"every version",semverAnd:"and",semverPart_any:"any version",semverPart_exact:"exactly {from}",semverPart_caretMajor:"{from} or later, without a new major version (below {below}): minor and patch updates",semverPart_caretMinor:"{from} or later within {minor}.x (below {below}): before 1.0.0, a minor version may break, so ^ allows patches only",semverPart_caretPatch:"exactly {from}: ^ on a 0.0.x version allows nothing else (below {below})",semverPart_tilde:"{from} or later within {minor}.x (below {below}): patch updates",semverPart_tildeMajor:"{from} or later within {major}.x (below {below})",semverPart_xMajor:"any {major}.x version",semverPart_xMinor:"any {minor}.x version",semverPart_gt:"later than {version}",semverPart_gte:"{version} or later",semverPart_lt:"earlier than {version}",semverPart_lte:"{version} or earlier",semverPart_hyphen:"from {from} to {to}, both included",semverWarning_empty:"\u201C{set}\u201D can match no version: its bounds cross.",semverWarning_any:"\u201C{set}\u201D accepts every version, including future major versions that may break.",semverWarning_unbounded:"\u201C{set}\u201D has no upper bound: a future major version that breaks the API would be installed.",semverWarning_noLow:"\u201C{set}\u201D has no lower bound: very old versions match.",semverWarning_pinned:"\u201C{set}\u201D pins one version: no security fix is picked up without an edit.",semverWarning_caretZero:"\u201C{set}\u201D: below 1.0.0, ^ is narrower than it looks.",semverWarning_prerelease:"\u201C{set}\u201D names a pre-release: pre-releases of that version only also match.",semverResolves:"Installs {version}",semverNoMatch:"No version matches.",semverMatches:"{count} of {total} versions match",semverLatest:"The latest version, {version}, is outside the range ({change} update).",semverLatestIn:"The latest version, {version}, is in the range.",semverChange_major:"major",semverChange_minor:"minor",semverChange_patch:"patch",semverChange_prerelease:"pre-release",semverChange_none:"no",semverVersions:"Versions",semverVersionsMore:"{count} more versions",semverInvalidVersions:"Not versions: {list}",semverMatch:"matches",semverNoMatchOne:"does not match",semverTestYes:"{version} matches the range.",semverTestNo:"{version} does not match the range.",semverTestPre:"{version} is a pre-release: it only matches when the range names a pre-release of {base}.",semverPrerelease:"pre-release",semverTag:"{tag}",semverCapped:"Only the first {count} versions are read.",semverCopyRange:"Copy the range",semverCopyMatches:"Copy the matches"}),q={semverRange:"Plage",semverTest:"Tester une version",semverInvalid:"\xAB {near} \xBB n\u2019est ni une version ni un terme de plage.",semverInvalidLong:"La plage est trop longue.",semverInvalidVersion:"\xAB {version} \xBB n\u2019est pas une version s\xE9mantique (majeure.mineure.correctif).",semverReadsAs:"Accepte",semverEither:"Au choix :",semverBounds:"Versions {bounds}",semverAll:"toutes les versions",semverAnd:"et",semverPart_any:"n\u2019importe quelle version",semverPart_exact:"exactement {from}",semverPart_caretMajor:"{from} ou plus r\xE9cente, sans nouvelle version majeure (avant {below}) : mises \xE0 jour mineures et correctifs",semverPart_caretMinor:"{from} ou plus r\xE9cente dans {minor}.x (avant {below}) : avant 1.0.0, une version mineure peut tout casser, donc ^ n\u2019accepte que les correctifs",semverPart_caretPatch:"exactement {from} : ^ sur une version 0.0.x n\u2019accepte rien d\u2019autre (avant {below})",semverPart_tilde:"{from} ou plus r\xE9cente dans {minor}.x (avant {below}) : correctifs",semverPart_tildeMajor:"{from} ou plus r\xE9cente dans {major}.x (avant {below})",semverPart_xMajor:"n\u2019importe quelle version {major}.x",semverPart_xMinor:"n\u2019importe quelle version {minor}.x",semverPart_gt:"plus r\xE9cente que {version}",semverPart_gte:"{version} ou plus r\xE9cente",semverPart_lt:"plus ancienne que {version}",semverPart_lte:"{version} ou plus ancienne",semverPart_hyphen:"de {from} \xE0 {to}, incluses",semverWarning_empty:"\xAB {set} \xBB n\u2019accepte aucune version : ses bornes se croisent.",semverWarning_any:"\xAB {set} \xBB accepte toutes les versions, y compris de futures versions majeures qui peuvent tout casser.",semverWarning_unbounded:"\xAB {set} \xBB n\u2019a pas de borne haute : une future version majeure incompatible serait install\xE9e.",semverWarning_noLow:"\xAB {set} \xBB n\u2019a pas de borne basse : de tr\xE8s vieilles versions correspondent.",semverWarning_pinned:"\xAB {set} \xBB fige une version : aucun correctif de s\xE9curit\xE9 n\u2019arrive sans modification.",semverWarning_caretZero:"\xAB {set} \xBB : avant 1.0.0, ^ est plus \xE9troit qu\u2019il n\u2019y para\xEEt.",semverWarning_prerelease:"\xAB {set} \xBB nomme une pr\xE9version : seules les pr\xE9versions de cette version correspondent aussi.",semverResolves:"Installe {version}",semverNoMatch:"Aucune version ne correspond.",semverMatches:"{count} versions sur {total} correspondent",semverLatest:"La derni\xE8re version, {version}, est hors de la plage (mise \xE0 jour {change}).",semverLatestIn:"La derni\xE8re version, {version}, est dans la plage.",semverChange_major:"majeure",semverChange_minor:"mineure",semverChange_patch:"de correctif",semverChange_prerelease:"de pr\xE9version",semverChange_none:"nulle",semverVersions:"Versions",semverVersionsMore:"{count} versions de plus",semverInvalidVersions:"Pas des versions : {list}",semverMatch:"correspond",semverNoMatchOne:"ne correspond pas",semverTestYes:"{version} correspond \xE0 la plage.",semverTestNo:"{version} ne correspond pas \xE0 la plage.",semverTestPre:"{version} est une pr\xE9version : elle ne correspond que si la plage nomme une pr\xE9version de {base}.",semverPrerelease:"pr\xE9version",semverCapped:"Seules les {count} premi\xE8res versions sont lues.",semverCopyRange:"Copier la plage",semverCopyMatches:"Copier les versions"};var A="0|[1-9]\\d*",X="(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)",F=new RegExp(`^v?=?\\s*(${A})\\.(${A})\\.(${A})(?:-(${X}(?:\\.${X})*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$`),J=/^v?=?\s*(\d+|[xX*])(?:\.(\d+|[xX*])(?:\.(\d+|[xX*])(?:-([0-9A-Za-z.-]+))?(?:\+([0-9A-Za-z.-]+))?)?)?$/;function $(i){let r=String(i).trim();if(!r||r.length>256)return null;let e=F.exec(r);if(!e)return null;let s=[e[1],e[2],e[3]].map(Number);if(s.some(n=>!Number.isSafeInteger(n)))return null;let t=e[4]?e[4].split(".").map(n=>/^\d+$/.test(n)?Number(n):n):[];return{major:s[0],minor:s[1],patch:s[2],pre:t,build:e[5]??"",raw:r.replace(/^v?=?\s*/,"")}}function g(i,r){for(let e of["major","minor","patch"])if(i[e]!==r[e])return i[e]<r[e]?-1:1;if(!i.pre.length||!r.pre.length)return i.pre.length?-1:r.pre.length?1:0;for(let e=0;e<Math.max(i.pre.length,r.pre.length);e+=1){let s=i.pre[e],t=r.pre[e];if(s===void 0)return-1;if(t===void 0)return 1;if(s!==t)return typeof s=="number"&&typeof t=="number"?s<t?-1:1:typeof s=="number"?-1:typeof t=="number"?1:s<t?-1:1}return 0}var h=(i,r,e,s=[])=>({major:i,minor:r,patch:e,pre:s,build:"",raw:`${i}.${r}.${e}${s.length?`-${s.join(".")}`:""}`}),c=i=>`${i.major}.${i.minor}.${i.patch}${i.pre.length?`-${i.pre.join(".")}`:""}`;function C(i){let r=J.exec(i);if(!r)return null;let e=m=>m===void 0||/^[xX*]$/.test(m)?null:Number(m),s=r[4]?r[4].split(".").map(m=>/^\d+$/.test(m)?Number(m):m):[],t=e(r[1]),n=t===null?null:e(r[2]),p=n===null?null:e(r[3]);return{major:t,minor:n,patch:p,pre:s}}function U(i){let r=/^(\^|~>|~|>=|<=|>|<|=)?\s*(.*)$/.exec(i);if(!r)return null;let e=r[1]??"",s=C(r[2]);if(!s)return null;let{major:t,minor:n,patch:p,pre:m}=s,o=h(t??0,n??0,p??0,m),l=i,v=(T,d,x={})=>({comparators:T,part:{kind:d,text:l,params:{from:c(o),...x}}});if(t===null)return v([],"any");if(e==="^")return t>0||n===null?v([{op:">=",version:o},{op:"<",version:h(t+1,0,0,[0])}],"caretMajor",{major:String(t),below:`${t+1}.0.0`}):n>0||p===null?v([{op:">=",version:o},{op:"<",version:h(0,n+1,0,[0])}],"caretMinor",{minor:`0.${n}`,below:`0.${n+1}.0`}):v([{op:">=",version:o},{op:"<",version:h(0,0,p+1,[0])}],"caretPatch",{below:`0.0.${p+1}`});if(e==="~"||e==="~>")return n===null?v([{op:">=",version:o},{op:"<",version:h(t+1,0,0,[0])}],"tildeMajor",{major:String(t),below:`${t+1}.0.0`}):v([{op:">=",version:o},{op:"<",version:h(t,n+1,0,[0])}],"tilde",{minor:`${t}.${n}`,below:`${t}.${n+1}.0`});if(e===""||e==="=")return n===null?v([{op:">=",version:o},{op:"<",version:h(t+1,0,0,[0])}],"xMajor",{major:String(t)}):p===null?v([{op:">=",version:o},{op:"<",version:h(t,n+1,0,[0])}],"xMinor",{minor:`${t}.${n}`}):v([{op:"=",version:o}],"exact");let u=n===null?h(t+1,0,0,[0]):p===null?h(t,n+1,0,[0]):null;return e===">"?u?v([{op:">=",version:u}],"gt",{version:c(u).replace(/-0$/,"")}):v([{op:">",version:o}],"gt",{version:c(o)}):e==="<="?u?v([{op:"<",version:u}],"lte",{version:c(u).replace(/-0$/,""),strict:"yes"}):v([{op:"<=",version:o}],"lte",{version:c(o)}):e===">="?v([{op:">=",version:o}],"gte",{version:c(o)}):v([{op:"<",version:o}],"lt",{version:c(o)})}function M(i){let r=String(i).trim();if(r.length>1024)return{ok:!1,error:"long",near:""};let e=[];for(let s of(r||"*").split("||")){let t=s.trim()||"*",n=[],p=[],m=/^(\S+)\s+-\s+(\S+)$/.exec(t);if(m){let o=C(m[1]),l=C(m[2]);if(!o||!l||o.major===null)return{ok:!1,error:"term",near:t};let v=h(o.major,o.minor??0,o.patch??0,o.pre);n.push({op:">=",version:v});let u={from:c(v)};l.major!==null&&(l.minor===null?n.push({op:"<",version:h(l.major+1,0,0,[0])}):l.patch===null?n.push({op:"<",version:h(l.major,l.minor+1,0,[0])}):n.push({op:"<=",version:h(l.major,l.minor,l.patch,l.pre)}),u.to=m[2].replace(/^v/,"")),p.push({kind:l.major===null?"gte":"hyphen",text:t,params:{version:u.from,...u}})}else{let o=t.replace(/(\^|~>|~|>=|<=|>|<|=)\s+/g,"$1").split(/[\s,]+/).filter(Boolean);for(let l of o){let v=U(l);if(!v)return{ok:!1,error:"term",near:l};n.push(...v.comparators),p.push(v.part)}}e.push({comparators:n,parts:p,text:t,empty:K(n)})}return{ok:!0,sets:e,warnings:Q(e)}}function K(i){let{low:r,high:e}=P(i);if(!r||!e)return!1;let s=g(r.version,e.version);return s>0||s===0&&(r.op===">"||e.op==="<")}function P(i){let r=null,e=null;for(let s of i)if(s.op==="="){let t={op:">=",version:s.version},n={op:"<=",version:s.version};(!r||g(s.version,r.version)>0)&&(r=t),(!e||g(s.version,e.version)<0)&&(e=n)}else if(s.op===">"||s.op===">="){let t=r?g(s.version,r.version):1;(t>0||t===0&&s.op===">")&&(r=s)}else{let t=e?g(s.version,e.version):-1;(t<0||t===0&&s.op==="<")&&(e=s)}return{low:r,high:e}}function Q(i){let r=[];for(let e of i){let{low:s,high:t}=P(e.comparators);e.empty?r.push({id:"empty",params:{set:e.text}}):e.comparators.length?t?s?e.comparators.length===1&&e.comparators[0].op==="="&&r.push({id:"pinned",params:{set:e.text}}):r.push({id:"noLow",params:{set:e.text}}):r.push({id:"unbounded",params:{set:e.text}}):r.push({id:"any",params:{set:e.text}}),e.parts.some(n=>n.kind.startsWith("caret")&&n.kind!=="caretMajor")&&r.push({id:"caretZero",params:{set:e.text}}),e.comparators.some(n=>n.version.pre.length&&!(n.version.pre.length===1&&n.version.pre[0]===0))&&r.push({id:"prerelease",params:{set:e.text}})}return r}function ee(i,r,e=!1){for(let s of r.comparators){let t=g(i,s.version);if(!(s.op==="="?t===0:s.op===">"?t>0:s.op===">="?t>=0:s.op==="<"?t<0:t<=0))return!1}return i.pre.length&&!e?r.comparators.some(s=>s.version.pre.length&&!(s.version.pre.length===1&&s.version.pre[0]===0)&&s.version.major===i.major&&s.version.minor===i.minor&&s.version.patch===i.patch):!0}function f(i,r,e=!1){return r.ok&&r.sets.some(s=>ee(i,s,e))}function N(i){let r=[],e={},s=i.trim();if(/^[[{]/.test(s))try{let o=JSON.parse(s);if(Array.isArray(o))r=o.map(l=>typeof l=="string"?l:typeof l?.version=="string"?l.version:"");else if(o&&typeof o=="object"){let l=o.versions;r=Array.isArray(l)?l.map(String):l&&typeof l=="object"?Object.keys(l):[];let v=o["dist-tags"];v&&typeof v=="object"&&(e=Object.fromEntries(Object.entries(v).filter(([,u])=>typeof u=="string")))}}catch{r=s.split(/[\s,]+/)}else r=s.split(/[\s,]+/);r=r.filter(Boolean);let t=r.length>5e3,n=[],p=[],m=new Set;for(let o of r.slice(0,5e3)){let l=$(o);l?m.has(c(l))||(m.add(c(l)),n.push(l)):p.push(o.slice(0,80))}return n.sort(g),{versions:n,invalid:p,tags:e,capped:t}}function S(i,r){for(let e=i.length-1;e>=0;e-=1)if(f(i[e],r))return i[e];return null}function Z(i,r){return i.major!==r.major?"major":i.minor!==r.minor?"minor":i.patch!==r.patch?"patch":g(i,r)?"prerelease":"none"}z({en:B,fr:q});var R=400,G=class extends W{static type="semver";static componentAttributes=Object.freeze(["range","field","prerelease"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,fullscreen:!0}};static styles=[H];static allowEmpty=!0;static upgradeProperties=["content","range"];constructor(){super(),this.ids={range:_("range"),test:_("test"),testResult:_("test-result")},this.rangeState=null,this.testValue="",this.resultsHost=null,this.testHost=null,this.lastMatch="",this.editor=null,this.previewTimer=void 0}source(){let r=this.text??"",e=this.getAttribute("range");if(e!==null||/^\s*[[{]/.test(r))return{range:e??"*",versionsText:r};let s=r.trim().split(/\r?\n/);return{range:s[0]??"",versionsText:s.slice(1).join(`
`)}}get range(){return this.rangeState??this.source().range.trim()}set range(r){this.rangeState=null,this.setAttribute("range",String(r))}get matching(){let r=M(this.range);return N(this.source().versionsText).versions.filter(e=>f(e,r,this.pre)).map(c)}get pre(){return b(this.getAttribute("prerelease"))===!0}renderContent(r){let e=this.t,s=a("div",{class:"body semver-body",part:"body"});this.resultsHost=a("div",{class:"semver-results",attrs:{"aria-live":"polite"}}),b(this.getAttribute("field"))!==!1&&s.append(this.fieldView()),s.append(this.resultsHost),b(this.getAttribute("field"))!==!1&&s.append(this.testView()),this.refresh();let t=a("div",{class:"panel"}),n=[];if(this.editing){let m=this.createEditor();t.classList.add("semver-edit"),t.append(a("div",{class:"body editor-body",part:"body editor"},m.element),s),n=this.historyButtons(m)}else t.append(s);let p=[...n,this.editToggleButton(),this.fullscreenButton(),this.feature("copy")?this.copyTextButton(()=>this.matching.join(`
`),e("semverCopyMatches"),"copy-matches"):null,this.feature("copy")?this.copyButton(()=>this.range,e("semverCopyRange")):null];r.append(...this.chrome({badge:"SemVer",actions:p}),t),this.editor?.align()}fieldView(){let r=this.t,e=a("input",{class:"semver-input",attrs:{id:this.ids.range,type:"text",value:this.range,spellcheck:"false",autocomplete:"off",placeholder:r("semverRangePlaceholder"),"data-focus-key":"range"},on:{input:()=>{this.rangeState=e.value.slice(0,1024),this.refresh(),j(this,w.CHANGE,{value:this.rangeState})}}});return a("div",{class:"semver-field",part:"field"},a("label",{attrs:{for:this.ids.range},text:r("semverRange")}),e)}testView(){let r=this.t;this.testHost=a("p",{class:"semver-test-result",attrs:{id:this.ids.testResult,"aria-live":"polite"}});let e=a("input",{class:"semver-input",attrs:{id:this.ids.test,type:"text",value:this.testValue,spellcheck:"false",autocomplete:"off",placeholder:r("semverTestPlaceholder"),"aria-describedby":this.ids.testResult,"data-focus-key":"test"},on:{input:()=>{this.testValue=e.value.slice(0,256),this.refreshTest()}}});return a("div",{class:"semver-test",part:"test"},a("label",{attrs:{for:this.ids.test},text:r("semverTest")}),e,this.testHost)}refresh(){let r=this.resultsHost;if(!r)return;let e=this.t,s=M(this.range);if(r.replaceChildren(),!s.ok){r.append(V(s.error==="long"?e("semverInvalidLong"):e("semverInvalid",{near:s.near}))),this.refreshTest();return}L(r,[this.readingView(s),this.warningsView(s),this.versionsView(s)]),this.refreshTest()}readingView(r){let e=this.t,s=t=>{let{low:n,high:p}=P(t.comparators),m=[n?`${n.op===">"?">":"\u2265"} ${c(n.version)}`:"",p?`${p.op==="<="?"\u2264":"<"} ${c(p.version).replace(/-0$/,"")}`:""].filter(Boolean);return a("li",{class:t.empty?"empty":""},a("code",{class:"semver-set",text:t.text}),a("span",{class:"semver-words",text:` \u2014 ${t.parts.map(o=>e(`semverPart_${o.kind}`,o.params)).join(`, ${e("semverAnd")} `)}`}),a("span",{class:"semver-bounds",text:m.length?e("semverBounds",{bounds:m.join(` ${e("semverAnd")} `)}):e("semverAll")}))};return a("div",{class:"semver-reading",part:"reading"},a("p",{class:"semver-label",text:r.sets.length>1?`${e("semverReadsAs")} \u2014 ${e("semverEither")}`:e("semverReadsAs")}),a("ul",{},...r.sets.map(s)))}warningsView(r){if(!r.warnings.length)return null;let e=this.t;return a("ul",{class:"semver-warnings",part:"warnings"},...r.warnings.map(s=>a("li",{class:s.id==="empty"?"danger":"warning",attrs:{"data-warning":s.id}},y("alert"),a("span",{text:e(`semverWarning_${s.id}`,s.params)}))))}versionsView(r){let e=this.t,{versions:s,invalid:t,tags:n,capped:p}=N(this.source().versionsText);if(!s.length&&!t.length)return null;let m=s.filter(d=>f(d,r,this.pre)),o=S(s.filter(d=>!d.pre.length||this.pre),r)??S(s,r),l=n.latest?$(n.latest):s.filter(d=>!d.pre.length).at(-1)??null,v=`${this.range}|${m.length}|${o?c(o):""}`;v!==this.lastMatch&&(this.lastMatch=v,j(this,w.MATCH,{range:this.range,matches:m.map(c),resolved:o?c(o):null}));let u=new Map(Object.entries(n).map(([d,x])=>[x,d])),T=s.slice(-R);return a("div",{class:"semver-versions-box"},a("div",{class:"semver-result",part:"result"},o?a("p",{class:"semver-resolved"},y("check"),a("strong",{text:e("semverResolves",{version:c(o)})}),a("span",{class:"semver-muted",text:` \xB7 ${e("semverMatches",{count:m.length,total:s.length})}`})):a("p",{class:"semver-resolved none"},y("alert"),a("strong",{text:e("semverNoMatch")})),l?a("p",{class:"semver-muted",text:f(l,r,this.pre)?e("semverLatestIn",{version:c(l)}):e("semverLatest",{version:c(l),change:e(`semverChange_${o?Z(o,l):"major"}`)})}):null),a("p",{class:"semver-label",text:e("semverVersions")}),s.length>R?a("p",{class:"semver-muted",text:e("semverVersionsMore",{count:s.length-R})}):null,a("ul",{class:"semver-versions",part:"versions"},...T.map(d=>{let x=f(d,r,this.pre),k=c(d),I=u.get(k),Y=o&&g(d,o)===0;return a("li",{class:`${x?"ok":"no"}${d.pre.length?" pre":""}${Y?" resolved":""}`,attrs:{"data-version":k}},x?y("check"):null,a("code",{text:k}),I?a("span",{class:"semver-tag",text:I}):null,a("span",{class:"sr-only",text:` ${e(x?"semverMatch":"semverNoMatchOne")}`}))})),t.length?a("p",{class:"semver-muted",text:e("semverInvalidVersions",{list:t.slice(0,10).join(", ")})}):null,p?V(e("semverCapped",{count:s.length})):null)}refreshTest(){let r=this.testHost;if(!r)return;let e=this.t,s=this.testValue.trim();if(r.className="semver-test-result",!s){r.replaceChildren();return}let t=$(s),n=M(this.range);if(!t){r.classList.add("no"),r.replaceChildren(y("alert"),a("span",{text:e("semverInvalidVersion",{version:s})}));return}let p=f(t,n,this.pre),m=c(t),o=!p&&t.pre.length&&f(t,n,!0);r.classList.add(p?"ok":"no"),r.replaceChildren(y(p?"check":"alert"),a("span",{text:o?e("semverTestPre",{version:m,base:`${t.major}.${t.minor}.${t.patch}`}):e(p?"semverTestYes":"semverTestNo",{version:m})}))}createEditor(){return this.editor?.destroy(),this.editor=new O({text:this.text??"",language:"plaintext",lineNumbers:!0,wrap:!0,highlightLimit:E().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:r=>this.edited(r),onChange:r=>j(this,w.CHANGE,{value:r}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.refresh(),250)}};export{G as a};
