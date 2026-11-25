/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{r as H}from"./chunk-37OSRZJK.js";import{O as x,W as _,_ as V,ba as A,c as I,o as r,q as C,u as w}from"./chunk-JAZI474S.js";import{h as N,k as L,l as T,m as E,q as b}from"./chunk-SCKP2KTO.js";var P=`/*
 * Cookies: a summary, then a table with a row of issues under each cookie that has some.
 * Flags and levels are always written in words; colors only repeat them.
 */
.cookies-body {
  display: grid;
  gap: var(--_space-4);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.cookies-summary {
  --_tone-color: var(--_success);
  display: grid;
  gap: var(--_space-1);
  padding: var(--_space-3) var(--_space-4);
  border: 1px solid color-mix(in srgb, var(--_tone-color) 40%, var(--_border));
  border-radius: var(--_radius-sm);
  background: color-mix(in srgb, var(--_tone-color) 6%, var(--_surface));
}

.cookies-summary.warn {
  --_tone-color: var(--_warning);
}

.cookies-summary.bad {
  --_tone-color: var(--_danger);
}

.cookies-summary p {
  margin: 0;
}

.cookies-counts {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-4);
}

.cookies-issue-count {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  font-weight: 600;
}

.cookies-issue-count.bad {
  color: var(--_danger);
}

.cookies-issue-count.warn {
  color: var(--_warning);
}

.cookies-issue-count svg,
.cookies-level svg {
  flex: none;
  width: 14px;
  height: 14px;
}

.cookies-muted {
  color: var(--_fg-muted);
}

.cookies-scroll {
  overflow-x: auto;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.cookies-table {
  width: 100%;
  border-collapse: collapse;
}

.cookies-table th,
.cookies-table td {
  padding: 6px var(--_space-3);
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
}

.cookies-table thead th {
  background: var(--_surface-sunken);
  font-weight: 600;
  white-space: nowrap;
}

.cookies-table tbody tr:last-child > * {
  border-bottom: 0;
}

.cookies-table tbody th {
  font-weight: 500;
}

.cookies-table code {
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  overflow-wrap: anywhere;
}

.cookie.bad > th {
  box-shadow: inset 3px 0 0 var(--_danger);
}

.cookie.warn > th {
  box-shadow: inset 3px 0 0 var(--_warning);
}

/* The issues belong to the cookie above: no line between them. */
.cookie:has(+ .cookies-issues-row) > * {
  border-bottom: 0;
}

.cookies-name {
  font-weight: 600;
}

.cookies-url {
  display: block;
  max-width: 28ch;
  overflow: hidden;
  font-size: var(--_font-size-small);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cookies-value {
  max-width: 32ch;
}

.cookies-masked {
  color: var(--_fg-muted);
  white-space: nowrap;
  letter-spacing: 0.05em;
}

.cookies-long summary {
  cursor: pointer;
}

.cookies-full {
  display: block;
  margin-top: var(--_space-1);
}

.cookies-path {
  display: block;
  color: var(--_fg-muted);
}

.cookies-expires {
  white-space: nowrap;
}

.cookies-date {
  display: block;
  font-size: var(--_font-size-small);
}

.cookies-flags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.cookies-flag,
.cookies-party {
  display: inline-block;
  padding: 1px 6px;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-full);
  font-size: var(--_font-size-small);
  white-space: nowrap;
}

.cookies-flag.on {
  border-color: color-mix(in srgb, var(--_success) 45%, var(--_border));
  background: color-mix(in srgb, var(--_success) 10%, transparent);
}

.cookies-flag.off {
  color: var(--_fg-muted);
  border-style: dashed;
}

.cookies-party.third {
  border-color: color-mix(in srgb, var(--_warning) 50%, var(--_border));
  background: color-mix(in srgb, var(--_warning) 12%, transparent);
  font-weight: 600;
}

.cookies-party.unknown {
  border-color: transparent;
  color: var(--_fg-muted);
}

.cookies-issues-row > td {
  padding-top: 0;
}

.cookies-issues {
  display: grid;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: var(--_font-size-small);
}

.cookies-issue {
  display: grid;
  grid-template-columns: minmax(7.5rem, auto) 1fr;
  gap: var(--_space-2);
}

.cookies-level {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  font-weight: 600;
}

.cookies-issue.bad .cookies-level {
  color: var(--_danger);
}

.cookies-issue.warn .cookies-level {
  color: var(--_warning);
}

.cookies-issue.info .cookies-level {
  color: var(--_fg-muted);
}

.cookies-edit > .editor-body {
  max-height: min(35vh, 280px);
  border-bottom: 1px solid var(--_border);
}

@media (max-width: 560px) {
  .cookies-issue {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
`;var $=Object.freeze({cookiesCount:"{count} cookies",cookiesThird:"Third-party: {count}",cookiesSession:"Session: {count}",cookiesIssues:"{bad} errors, {warn} warnings",cookiesSite:"Compared with {site}",cookiesNotSent:"Read only: nothing is sent or stored.",cookiesName:"Name",cookiesValue:"Value",cookiesScope:"Domain and path",cookiesExpires:"Expires",cookiesFlags:"Flags",cookiesParty:"Party",cookiesParty_first:"First",cookiesParty_third:"Third",cookiesPartyUnknown:"\u2014",cookiesSessionLabel:"Session",cookiesExpired:"Expired",cookiesHostOnly:"host only",cookiesSubdomains:"and subdomains",cookiesNoName:"(no name)",cookiesFlagMissing:"no {flag}",cookiesSetBy:"Set by {url}",cookiesIssuesOnly:"Show cookies with issues only",cookiesShowAll:"Show every cookie",cookiesShowValues:"Show values",cookiesHideValues:"Hide values",cookiesValuesShown:"Values shown",cookiesValuesHidden:"Values hidden",cookiesCopyJson:"JSON",cookiesCopyHeader:"Copy as a Cookie header",cookiesNone:"No cookie to show.",cookiesInvalidEmpty:"No cookies.",cookiesInvalidFormat:"No cookie found: paste Set-Cookie headers, a Cookie header, a cookies.txt file, JSON or a HAR file.",cookiesInvalidJson:"The JSON cannot be read: {detail}",cookiesLevel_bad:"Error",cookiesLevel_warn:"Warning",cookiesLevel_info:"Note",cookiesIssue_hostPrefix:"The __Host- prefix requires Secure, Path=/ and no Domain: browsers reject this cookie.",cookiesIssue_foreignDomain:"Its Domain ({domain}) is not the host that set it ({setter}) nor a parent of it: browsers reject this cookie.",cookiesIssue_securePrefix:"The __Secure- prefix requires Secure: browsers reject this cookie.",cookiesIssue_noneInsecure:"SameSite=None requires Secure: browsers reject this cookie.",cookiesIssue_notSecure:"Without Secure, the cookie is also sent over plain HTTP.",cookiesIssue_sessionReadable:"This looks like a session or a credential, and without HttpOnly any script on the page can read it.",cookiesIssue_scriptReadable:"Without HttpOnly, scripts on the page can read it.",cookiesIssue_noSameSite:"No SameSite: most browsers treat it as Lax.",cookiesIssue_tooLong:"Its lifetime is over 400 days: browsers shorten it to 400 days.",cookiesIssue_tooLarge:"Name and value exceed 4096 bytes: browsers ignore it.",cookiesIssue_deletion:"Already expired: this deletes the cookie with this name.",cookiesIssue_wideDomain:"The Domain attribute shares it with every subdomain of {domain}.",cookiesIssue_thirdPartyPersistent:"A third-party cookie kept for more than 30 days: often used to follow visitors across sites."}),D=Object.freeze({cookiesCount:"{count} cookies",cookiesThird:"Tiers : {count}",cookiesSession:"De session : {count}",cookiesIssues:"{bad} erreurs, {warn} avertissements",cookiesSite:"Compar\xE9s avec {site}",cookiesNotSent:"Lecture seule : rien n\u2019est envoy\xE9 ni enregistr\xE9.",cookiesName:"Nom",cookiesValue:"Valeur",cookiesScope:"Domaine et chemin",cookiesExpires:"Expiration",cookiesFlags:"Attributs",cookiesParty:"Partie",cookiesParty_first:"Propre",cookiesParty_third:"Tiers",cookiesPartyUnknown:"\u2014",cookiesSessionLabel:"Session",cookiesExpired:"Expir\xE9",cookiesHostOnly:"h\xF4te seul",cookiesSubdomains:"et sous-domaines",cookiesNoName:"(sans nom)",cookiesFlagMissing:"sans {flag}",cookiesSetBy:"Pos\xE9 par {url}",cookiesIssuesOnly:"Ne montrer que les cookies \xE0 probl\xE8me",cookiesShowAll:"Montrer tous les cookies",cookiesShowValues:"Montrer les valeurs",cookiesHideValues:"Masquer les valeurs",cookiesValuesShown:"Valeurs affich\xE9es",cookiesValuesHidden:"Valeurs masqu\xE9es",cookiesCopyJson:"JSON",cookiesCopyHeader:"Copier comme en-t\xEAte Cookie",cookiesNone:"Aucun cookie \xE0 afficher.",cookiesInvalidEmpty:"Aucun cookie.",cookiesInvalidFormat:"Aucun cookie trouv\xE9 : collez des en-t\xEAtes Set-Cookie, un en-t\xEAte Cookie, un fichier cookies.txt, du JSON ou un fichier HAR.",cookiesInvalidJson:"Le JSON ne peut pas \xEAtre lu : {detail}",cookiesLevel_bad:"Erreur",cookiesLevel_warn:"Avertissement",cookiesLevel_info:"Remarque",cookiesIssue_hostPrefix:"Le pr\xE9fixe __Host- exige Secure, Path=/ et aucun Domain : les navigateurs refusent ce cookie.",cookiesIssue_foreignDomain:"Son Domain ({domain}) n\u2019est ni l\u2019h\xF4te qui l\u2019a pos\xE9 ({setter}) ni un parent : les navigateurs refusent ce cookie.",cookiesIssue_securePrefix:"Le pr\xE9fixe __Secure- exige Secure : les navigateurs refusent ce cookie.",cookiesIssue_noneInsecure:"SameSite=None exige Secure : les navigateurs refusent ce cookie.",cookiesIssue_notSecure:"Sans Secure, le cookie est aussi envoy\xE9 en HTTP non chiffr\xE9.",cookiesIssue_sessionReadable:"Il ressemble \xE0 une session ou \xE0 un identifiant, et sans HttpOnly n\u2019importe quel script de la page peut le lire.",cookiesIssue_scriptReadable:"Sans HttpOnly, les scripts de la page peuvent le lire.",cookiesIssue_noSameSite:"Pas de SameSite : la plupart des navigateurs le traitent comme Lax.",cookiesIssue_tooLong:"Sa dur\xE9e d\xE9passe 400 jours : les navigateurs la ram\xE8nent \xE0 400 jours.",cookiesIssue_tooLarge:"Nom et valeur d\xE9passent 4096 octets : les navigateurs l\u2019ignorent.",cookiesIssue_deletion:"D\xE9j\xE0 expir\xE9 : il supprime le cookie de ce nom.",cookiesIssue_wideDomain:"L\u2019attribut Domain le partage avec tous les sous-domaines de {domain}.",cookiesIssue_thirdPartyPersistent:"Un cookie tiers conserv\xE9 plus de 30 jours : souvent utilis\xE9 pour suivre les visiteurs d\u2019un site \xE0 l\u2019autre."});var g=5e3,y=16384,G=400*24*3600*1e3,Y=24*3600*1e3,j=/sess|sid\b|^sid|auth|token|jwt|login|remember|csrf|xsrf/i,F=["bad","warn","info"];function z(o,e={}){let t=o.replace(/^\uFEFF/,"").trim();if(!t)return{ok:!1,error:"empty"};let s=v(e.url??null),n=v(e.site??null)??(e.site?.trim()||null);if(/^[[{]/.test(t)){let i;try{i=JSON.parse(t)}catch(f){return{ok:!1,error:"json",detail:f instanceof Error?f.message:""}}if(Array.isArray(i?.log?.entries)){let{cookies:f,first:m}=ee(i.log.entries);return{ok:!0,jar:{cookies:f,format:"har",site:n??m??s}}}let l=Array.isArray(i)?i:Array.isArray(i?.cookies)?i.cookies:null;if(!l)return{ok:!1,error:"format"};let p=[];for(let f of l.slice(0,g)){let m=R(f,null);m&&p.push(m)}return{ok:!0,jar:{cookies:p,format:"json",site:n??s}}}let c=t.split(/\r\n|\n|\r/);if(c.some(i=>/^#\s*Netscape HTTP Cookie File/i.test(i))||c.some(M))return{ok:!0,jar:{cookies:c.filter(M).slice(0,g).map(se),format:"netscape",site:n??s}};let a=[],d="set-cookie";for(let i of c){if(a.length>=g)break;let l=i.replace(/^\s*[<>]\s?/,"").trim();if(!l||l.startsWith("#"))continue;let p=/^([A-Za-z0-9-]+)\s*:\s*(.*)$/.exec(l);if(p){let m=p[1].toLowerCase();if(m==="cookie"){d="cookie",a.push(...Q(p[2],s));continue}if(m!=="set-cookie"&&m!=="set-cookie2")continue;let u=S(p[2],s,e.url??null);u&&a.push(u);continue}if(/^HTTP\/\d/.test(l)||!l.includes("="))continue;let f=S(l,s,e.url??null);f&&a.push(f)}return a.length?{ok:!0,jar:{cookies:a.slice(0,g),format:d,site:n??s}}:{ok:!1,error:"format"}}function S(o,e,t,s=new Date){let[n,...c]=o.slice(0,y).split(";"),a=n.indexOf("="),d=(a===-1?"":n.slice(0,a)).trim(),i=(a===-1?n:n.slice(a+1)).trim().replace(/^"(.*)"$/,"$1");if(!d&&!i)return null;let l={name:d,value:i,domain:e,hostOnly:!0,path:null,expires:null,session:!0,secure:!1,httpOnly:!1,sameSite:null,partitioned:!1,attributes:!0,url:t,setter:e},p=null;for(let f of c){let m=f.indexOf("="),u=(m===-1?f:f.slice(0,m)).trim().toLowerCase(),h=m===-1?"":f.slice(m+1).trim();if(u==="domain"&&h)l.domain=h.replace(/^\./,"").toLowerCase(),l.hostOnly=!1;else if(u==="path")l.path=h.startsWith("/")?h:"/";else if(u==="expires"){let k=new Date(h);Number.isNaN(k.getTime())||(l.expires=k)}else u==="max-age"&&/^-?\d+$/.test(h)?p=Number(h):u==="secure"?l.secure=!0:u==="httponly"?l.httpOnly=!0:u==="samesite"?l.sameSite=J(h):u==="partitioned"&&(l.partitioned=!0)}return p!==null&&(l.expires=new Date(s.getTime()+p*1e3)),l.session=l.expires===null,l}function Q(o,e){return o.split(";").map(t=>t.trim()).filter(Boolean).map(t=>{let s=t.indexOf("=");return{name:(s===-1?"":t.slice(0,s)).trim(),value:(s===-1?t:t.slice(s+1)).trim().slice(0,y),domain:e,hostOnly:!0,path:null,expires:null,session:!0,secure:!1,httpOnly:!1,sameSite:null,partitioned:!1,attributes:!1,url:null,setter:null}})}function R(o,e){if(!o||typeof o!="object"||typeof o.name!="string")return null;let t=typeof o.domain=="string"&&o.domain?o.domain:null,s=o.expirationDate??o.expires??o.expiry??null,n=null;if(typeof s=="number"&&Number.isFinite(s)&&s>0)n=new Date(s<1e11?s*1e3:s);else if(typeof s=="string"&&s){let c=new Date(s);Number.isNaN(c.getTime())||(n=c)}return o.session===!0&&(n=null),{name:o.name.slice(0,y),value:String(o.value??"").slice(0,y),domain:t?t.replace(/^\./,"").toLowerCase():v(e),hostOnly:typeof o.hostOnly=="boolean"?o.hostOnly:t?!t.startsWith("."):!0,path:typeof o.path=="string"&&o.path?o.path:null,expires:n,session:n===null,secure:o.secure===!0,httpOnly:o.httpOnly===!0,sameSite:J(o.sameSite),partitioned:o.partitioned===!0||!!o.partitionKey,attributes:!0,url:e,setter:v(e)}}function ee(o){let e=[],t=null;for(let s of o){if(e.length>=g)break;let n=typeof s?.request?.url=="string"?s.request.url:null,c=v(n);t??=c;let d=(Array.isArray(s?.response?.headers)?s.response.headers:[]).filter(i=>typeof i?.name=="string"&&i.name.toLowerCase()==="set-cookie");if(d.length)for(let i of d)for(let l of String(i.value??"").split(`
`)){let p=S(l,c,n);p&&e.push(p)}else if(Array.isArray(s?.response?.cookies))for(let i of s.response.cookies){let l=R(i,n);l&&e.push(l)}}return{cookies:e.slice(0,g),first:t}}function M(o){let e=o.replace(/^#HttpOnly_/,"").split("	");return e.length===7&&/^(TRUE|FALSE)$/i.test(e[1])&&/^(TRUE|FALSE)$/i.test(e[3])}function se(o){let e=o.startsWith("#HttpOnly_"),[t,s,n,c,a,d,i]=o.replace(/^#HttpOnly_/,"").split("	"),l=Number(a),p=Number.isFinite(l)&&l>0?new Date(l*1e3):null;return{name:d.slice(0,y),value:i.slice(0,y),domain:t.replace(/^\./,"").toLowerCase()||null,hostOnly:!/^TRUE$/i.test(s),path:n||null,expires:p,session:p===null,secure:/^TRUE$/i.test(c),httpOnly:e,sameSite:null,partitioned:!1,attributes:!0,url:null,setter:null}}function J(o){let e=String(o??"").toLowerCase();return e==="strict"?"Strict":e==="lax"?"Lax":e==="none"||e==="no_restriction"?"None":null}function v(o){if(!o)return null;let e=o.trim();try{return new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(e)?e:`https://${e}`).hostname.replace(/^\[|\]$/g,"")||null}catch{return null}}function O(o,e,t=new Date){let s=e&&o.domain?w(o.domain)===w(e)?"first":"third":null,n=o.expires?o.expires.getTime()-t.getTime():null,c=[],a=(d,i)=>c.push({level:d,code:i});return o.attributes&&n!==null&&n<=0?a("info","deletion"):o.attributes&&(o.name.startsWith("__Host-")&&(!o.secure||!o.hostOnly||o.path!=="/")&&a("bad","hostPrefix"),o.name.startsWith("__Secure-")&&!o.secure&&a("bad","securePrefix"),o.sameSite==="None"&&!o.secure&&a("bad","noneInsecure"),!o.hostOnly&&o.domain&&o.setter&&!oe(o.setter,o.domain)&&a("bad","foreignDomain"),o.secure||a("warn","notSecure"),o.httpOnly||a(j.test(o.name)?"warn":"info",j.test(o.name)?"sessionReadable":"scriptReadable"),o.sameSite===null&&a("info","noSameSite"),n!==null&&n>G&&a("warn","tooLong"),!o.hostOnly&&e&&o.domain&&o.domain!==e.toLowerCase()&&s==="first"&&a("info","wideDomain"),s==="third"&&n!==null&&n>30*Y&&a("info","thirdPartyPersistent")),new TextEncoder().encode(o.name+o.value).length>4096&&a("warn","tooLarge"),c.sort((d,i)=>F.indexOf(d.level)-F.indexOf(i.level)),{cookie:o,party:s,lifetime:n,issues:c}}function oe(o,e){let t=o.toLowerCase(),s=e.toLowerCase();return!s.includes(".")&&t!==s?!1:t===s||t.endsWith(`.${s}`)}function q(o){return JSON.stringify(o.map(e=>({name:e.name,value:e.value,domain:e.domain,hostOnly:e.hostOnly,path:e.path,expires:e.expires?e.expires.toISOString():null,session:e.session,secure:e.secure,httpOnly:e.httpOnly,sameSite:e.sameSite,partitioned:e.partitioned})),null,2)}function B(o){return o.map(e=>e.name?`${e.name}=${e.value}`:e.value).join("; ")}E({en:$,fr:D});var U={bad:"shield-alert",warn:"alert",info:"status-circle"},W=48,X=class extends A{static type="cookies";static componentAttributes=Object.freeze(["url","site","issues","mask-values"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,fullscreen:!0}};static styles=[P];static upgradeProperties=["content"];constructor(){super(),this.panelId=C("panel"),this.issuesOnly=!1,this.revealed=!1,this.editor=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),super.disconnectedCallback()}read(){return z(this.text??"",{url:this.getAttribute("url"),site:this.getAttribute("site")})}get cookies(){let e=this.read();if(!e.ok)return[];let t=new Date;return e.jar.cookies.map(s=>O(s,e.jar.site,t))}flag(e,t){return I(this.getAttribute(e))??t}get masking(){return this.flag("mask-values",!0)&&!this.revealed}renderContent(e){let t=this.t,s=this.read(),n=r("div",{class:"body cookies-body",part:"body"}),c=[];if(s.ok){let u=new Date;c=s.jar.cookies.map(k=>O(k,s.jar.site,u)),n.append(this.summaryView(c,s.jar));let h=this.issuesOnly?c.filter(k=>k.issues.some(K=>K.level!=="info")):c;n.append(h.length?this.tableView(h,s.jar.format==="har"):r("p",{class:"cookies-muted",text:t("cookiesNone")}))}else{let u=`cookiesInvalid${s.error[0].toUpperCase()}${s.error.slice(1)}`;n.append(V(t(u,{detail:s.detail??""})))}let a=r("div",{class:"panel",attrs:{id:this.panelId}}),d=[];if(this.editing){let u=this.createEditor();a.classList.add("cookies-edit"),a.append(r("div",{class:"body editor-body",part:"body source"},u.element),n),d=this.historyButtons(u)}else a.append(n);let i=c.map(u=>u.cookie),l=this.feature("copy")&&i.length>0,p=i.some(u=>u.value),f=[...d,this.editToggleButton(),s.ok?_({icon:this.issuesOnly?"list":"filter",label:this.issuesOnly?t("cookiesShowAll"):t("cookiesIssuesOnly"),key:"issues-only",pressed:this.issuesOnly,onClick:()=>{this.issuesOnly=!this.issuesOnly,this.render()}}):null,this.flag("mask-values",!0)&&p?_({icon:this.revealed?"eye-off":"eye",label:t(this.revealed?"cookiesHideValues":"cookiesShowValues"),key:"values",part:"values-button",pressed:this.revealed,onClick:()=>{this.revealed=!this.revealed,this.render(),this.announce(t(this.revealed?"cookiesValuesShown":"cookiesValuesHidden"))}}):null,this.fullscreenButton(),l?this.copyTextButton(()=>q(i),t("cookiesCopyJson"),"copy-json"):null,l?this.copyButton(()=>B(i),t("cookiesCopyHeader")):null],m=s.ok?t("cookiesCount",{count:b(i.length,this.locale)}):"Cookies";e.append(...this.chrome({badge:m,actions:f}),a),this.editor?.align()}summaryView(e,t){let s=this.t,n=i=>b(e.filter(i).length,this.locale),c=e.flatMap(i=>i.issues).filter(i=>i.level==="bad").length,a=e.flatMap(i=>i.issues).filter(i=>i.level==="warn").length,d=c?"bad":a?"warn":"ok";return r("div",{class:`cookies-summary ${d}`,part:"summary"},r("p",{class:"cookies-counts"},r("strong",{text:s("cookiesCount",{count:b(e.length,this.locale)})}),t.site?r("span",{text:s("cookiesThird",{count:n(i=>i.party==="third")})}):null,r("span",{text:s("cookiesSession",{count:n(i=>i.cookie.session)})}),c||a?r("span",{class:`cookies-issue-count ${d}`},x(U[c?"bad":"warn"]),r("span",{text:s("cookiesIssues",{bad:c,warn:a})})):null),r("p",{class:"cookies-muted"},t.site?`${s("cookiesSite",{site:t.site})} \xB7 `:"",s("cookiesNotSent")))}tableView(e,t){let s=this.t,n=this.flag("issues",!0),c=e.flatMap(d=>{let{cookie:i,party:l,issues:p}=d,f=p[0]?.level??"ok",m=r("tr",{class:`cookie ${f}`,part:"cookie"},r("th",{attrs:{scope:"row"}},r("code",{class:"cookies-name",text:i.name||s("cookiesNoName")}),t&&i.url?r("span",{class:"cookies-muted cookies-url",text:s("cookiesSetBy",{url:i.url})}):null),r("td",{class:"cookies-value"},this.valueView(i.value)),r("td",{class:"cookies-scope"},this.scopeView(i)),r("td",{class:"cookies-expires"},...this.expiresView(d)),r("td",{},this.flagsView(i)),r("td",{},r("span",{class:`cookies-party ${l??"unknown"}`,part:"party",text:s(l?`cookiesParty_${l}`:"cookiesPartyUnknown")})));return!n||!p.length?[m]:[m,r("tr",{class:"cookies-issues-row"},r("td",{attrs:{colspan:6}},r("ul",{class:"cookies-issues"},...p.map(u=>r("li",{class:`cookies-issue ${u.level}`,part:"issue"},r("span",{class:"cookies-level"},x(U[u.level]),r("span",{text:s(`cookiesLevel_${u.level}`)})),r("span",{text:s(`cookiesIssue_${u.code}`,{domain:i.domain??"",setter:i.setter??""})}))))))]}),a=d=>r("th",{attrs:{scope:"col"},text:s(d)});return r("div",{class:"cookies-scroll"},r("table",{class:"cookies-table",part:"cookies"},r("thead",{},r("tr",{},a("cookiesName"),a("cookiesValue"),a("cookiesScope"),a("cookiesExpires"),a("cookiesFlags"),a("cookiesParty"))),r("tbody",{},...c)))}valueView(e){return e?this.masking?r("code",{class:"cookies-masked",text:`${"\u2022".repeat(8)}${e.length>4?e.slice(-4):""}`}):e.length<=W?r("code",{text:e}):r("details",{class:"cookies-long"},r("summary",{},r("code",{text:`${e.slice(0,W)}\u2026`})),r("code",{class:"cookies-full",text:e})):r("span",{class:"cookies-muted",text:'""'})}scopeView(e){let t=this.t;return r("span",{},r("code",{text:e.domain??"\u2014"}),e.attributes&&e.domain?r("span",{class:"cookies-muted",text:` ${t(e.hostOnly?"cookiesHostOnly":"cookiesSubdomains")}`}):null,e.path?r("code",{class:"cookies-path",text:e.path}):null)}expiresView(e){let t=this.t,{cookie:s,lifetime:n}=e;if(!s.attributes)return[r("span",{class:"cookies-muted",text:"\u2014"})];if(!s.expires||n===null)return[r("span",{text:t("cookiesSessionLabel")})];if(n<=0)return[r("span",{class:"cookies-muted",text:t("cookiesExpired")})];let c=new Intl.DateTimeFormat(this.locale,{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"}).format(s.expires);return[r("span",{text:te(n,this.locale)}),r("time",{class:"cookies-muted cookies-date",text:c,attrs:{datetime:s.expires.toISOString()}})]}flagsView(e){if(!e.attributes)return r("span",{class:"cookies-muted",text:"\u2014"});let t=[["Secure",e.secure],["HttpOnly",e.httpOnly],[`SameSite=${e.sameSite??"\u2014"}`,e.sameSite!==null]];return e.partitioned&&t.push(["Partitioned",!0]),r("span",{class:"cookies-flags"},...t.map(([s,n])=>r("span",{class:`cookies-flag ${n?"on":"off"}`,part:`flag${n?"":" flag-off"}`,text:n||s.startsWith("SameSite")?s:this.t("cookiesFlagMissing",{flag:s})})))}createEditor(){return this.editor?.destroy(),this.editor=new H({text:this.text??"",language:"plaintext",lineNumbers:!0,wrap:!1,highlightLimit:N().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>T(this,L.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),300)}};function te(o,e){let t=new Intl.RelativeTimeFormat(e,{numeric:"auto"}),s=o/36e5;if(s<1)return t.format(Math.max(1,Math.round(o/6e4)),"minute");if(s<48)return t.format(Math.round(s),"hour");let n=s/24;return n<60?t.format(Math.round(n),"day"):n<730?t.format(Math.round(n/30.44),"month"):t.format(Math.round(n/365.25),"year")}export{X as a};
