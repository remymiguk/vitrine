/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{p as R}from"./chunk-BTEG3GEC.js";import{r as M}from"./chunk-37OSRZJK.js";import{O as T,_ as A,ba as H,c as S,o as i,q as C}from"./chunk-JAZI474S.js";import{h as O,k as P,l as L,m as N}from"./chunk-SCKP2KTO.js";var E=`/*
 * HTTP security headers: the grade, the findings by severity, the Content-Security-Policy
 * table and every header. Severity is always written in words, with an icon.
 */
.hdr-body {
  display: grid;
  gap: var(--_space-4);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.hdr-summary {
  --_tone-color: var(--_success);
  display: flex;
  align-items: center;
  gap: var(--_space-4);
  padding: var(--_space-3) var(--_space-4);
  border: 1px solid color-mix(in srgb, var(--_tone-color) 40%, var(--_border));
  border-radius: var(--_radius-sm);
  background: color-mix(in srgb, var(--_tone-color) 6%, var(--_surface));
}

.hdr-summary.warn {
  --_tone-color: var(--_warning);
}

.hdr-summary.bad {
  --_tone-color: var(--_danger);
}

.hdr-grade {
  display: grid;
  flex: none;
  place-items: center;
  width: 3.25rem;
  height: 3.25rem;
  border: 3px solid var(--_tone-color);
  border-radius: var(--_radius-full);
  color: var(--_tone-color);
  font-size: 1.35em;
  font-weight: 700;
}

.hdr-summary-text {
  display: grid;
  gap: 2px;
}

.hdr-muted {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.hdr-findings {
  display: grid;
  margin: 0;
  padding: 0;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  list-style: none;
}

.hdr-finding {
  display: grid;
  grid-template-columns: minmax(8.5rem, auto) 1fr;
  gap: var(--_space-3);
  padding: var(--_space-2) var(--_space-3);
  border-bottom: 1px solid var(--_border);
}

.hdr-finding:last-child {
  border-bottom: 0;
}

.hdr-level {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  font-weight: 600;
}

.hdr-level svg {
  flex: none;
  width: 16px;
  height: 16px;
}

.hdr-finding.bad .hdr-level {
  color: var(--_danger);
}

.hdr-finding.warn .hdr-level {
  color: var(--_warning);
}

.hdr-finding.info .hdr-level {
  color: var(--_fg-muted);
}

.hdr-finding.ok .hdr-level {
  color: var(--_success);
}

.hdr-message {
  display: grid;
  gap: 2px;
  min-width: 0;
}

.hdr-name {
  color: var(--_fg-muted);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
}

.hdr-section {
  display: grid;
  gap: var(--_space-2);
  min-width: 0;
}

.hdr-title {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hdr-scroll {
  overflow-x: auto;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.hdr-table {
  width: 100%;
  border-collapse: collapse;
}

.hdr-table th,
.hdr-table td {
  padding: 6px var(--_space-3);
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
}

.hdr-table tbody tr:last-child > * {
  border-bottom: 0;
}

.hdr-table thead th {
  background: var(--_surface-sunken);
  font-weight: 600;
}

.hdr-table tbody th {
  width: 1%;
  font-weight: 500;
  white-space: nowrap;
}

.hdr-table code {
  font-family: var(--_font-mono);
}

.hdr-sources {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1) var(--_space-2);
}

.hdr-source {
  padding: 0 4px;
  border-radius: var(--_radius-sm);
  overflow-wrap: anywhere;
}

.src-keyword {
  color: var(--_syntax-keyword);
}

.src-nonce,
.src-hash {
  color: var(--_syntax-number);
}

.src-scheme,
.src-wildcard {
  color: var(--_syntax-type);
}

.src-host {
  color: var(--_syntax-string);
}

.hdr-source.risky {
  outline: 1px solid var(--_danger);
  background: color-mix(in srgb, var(--_danger) 10%, transparent);
  color: var(--_danger);
}

.hdr-value {
  overflow-wrap: anywhere;
  word-break: break-all;
}

.hdr-all summary {
  color: var(--_fg-muted);
  font-weight: 600;
  cursor: pointer;
}

.hdr-all[open] summary {
  margin-bottom: var(--_space-2);
}

.hdr-all p {
  margin: 0 0 var(--_space-2);
}

.hdr-edit > .editor-body {
  max-height: min(35vh, 280px);
  border-bottom: 1px solid var(--_border);
}

@media (max-width: 560px) {
  .hdr-finding {
    grid-template-columns: 1fr;
    gap: var(--_space-1);
  }
}
`;var F=Object.freeze({hdrGrade:"Grade {grade}",hdrSummary:"{bad} problems, {warn} warnings",hdrNotFetched:"Read from the text only: nothing is fetched or sent.",hdrNone:"No HTTP header found. Paste response headers, `curl -I` output or a Content-Security-Policy.",hdrFindings:"Findings",hdrPolicy:"Content-Security-Policy",hdrDirective:"Directive",hdrSources:"Sources",hdrHeaders:"Headers ({count})",hdrName:"Name",hdrValue:"Value",hdrCopyReport:"Copy report",hdrLevel_bad:"Problem",hdrLevel_warn:"Warning",hdrLevel_info:"Note",hdrLevel_ok:"Passed",hdr_hstsMissing:"No Strict-Transport-Security: browsers may reach the site over plain HTTP first.",hdr_hstsInvalid:"Strict-Transport-Security has no max-age, so browsers ignore it.",hdr_hstsShort:"HSTS lasts {days} days: use at least 180 days (max-age=15552000).",hdr_hstsOk:"HTTPS is enforced for {days} days.",hdr_cspMissing:"No Content-Security-Policy: injected scripts run without limit.",hdr_cspReportOnly:"The policy is only reported (Report-Only): nothing is blocked.",hdr_cspNoScriptSrc:"Neither script-src nor default-src: scripts from anywhere are allowed.",hdr_cspUnsafeInline:"'unsafe-inline' allows inline scripts: use nonces or hashes.",hdr_cspUnsafeEval:"'unsafe-eval' allows eval() and new Function().",hdr_cspWildcard:"Scripts allowed from {source}: any site of it can serve a script.",hdr_cspObjectSrc:"object-src is not 'none': plugins may load content.",hdr_cspBaseUri:"No base-uri: an injected <base> can redirect relative scripts.",hdr_cspOk:"The policy restricts scripts, plugins and the base URL.",hdr_framingMissing:"Neither X-Frame-Options nor frame-ancestors: the page can be framed (clickjacking).",hdr_xfoAllowFrom:"X-Frame-Options ALLOW-FROM is ignored by browsers: use frame-ancestors.",hdr_xfoInvalid:"X-Frame-Options accepts only DENY or SAMEORIGIN.",hdr_framingOk:"Framing by other sites is restricted.",hdr_xctoMissing:"No X-Content-Type-Options: nosniff, browsers may guess content types.",hdr_xctoInvalid:"X-Content-Type-Options accepts only nosniff.",hdr_xctoOk:"Content types are not guessed (nosniff).",hdr_referrerMissing:"No Referrer-Policy: browsers use strict-origin-when-cross-origin.",hdr_referrerUnsafe:"Referrer-Policy {value} sends full URLs to other sites.",hdr_referrerOk:"Referrer-Policy: {value}.",hdr_permissionsMissing:"No Permissions-Policy: camera, microphone and others are left to defaults.",hdr_permissionsOk:"Browser features are restricted with Permissions-Policy.",hdr_coopMissing:"No Cross-Origin-Opener-Policy: windows opened from other sites keep a reference.",hdr_coopOk:"Cross-Origin-Opener-Policy isolates the browsing context.",hdr_cookieSecure:"Cookie {name} is not Secure: it may be sent over plain HTTP.",hdr_cookieHttpOnly:"Cookie {name} is not HttpOnly: scripts can read it.",hdr_cookieSameSite:"Cookie {name} has no SameSite: browsers use Lax.",hdr_cookieSameSiteNone:"Cookie {name} is SameSite=None without Secure: browsers reject it.",hdr_cookieHostPrefix:"Cookie {name} needs Secure, Path=/ and no Domain for its __Host- prefix.",hdr_cookieSecurePrefix:"Cookie {name} needs Secure for its __Secure- prefix.",hdr_cookieOk:"Cookie {name} is Secure, HttpOnly and SameSite.",hdr_corsCredentials:"Access-Control-Allow-Origin * with credentials: browsers refuse it, and it shows a misconfiguration.",hdr_corsWildcard:"Any site can read these responses (Access-Control-Allow-Origin: *).",hdr_corsNull:"Access-Control-Allow-Origin: null trusts sandboxed frames and local files.",hdr_serverVersion:"Server tells its version ({value}): it helps attackers pick exploits.",hdr_poweredBy:"The response names its software ({value}).",hdr_xxssEnabled:"X-XSS-Protection is obsolete and can cause leaks: remove it or set it to 0.",hdr_hpkp:"Public-Key-Pins is obsolete and ignored by browsers.",hdr_expectCt:"Expect-CT is obsolete and ignored by browsers."}),j={hdrGrade:"Note {grade}",hdrSummary:"{bad} probl\xE8mes, {warn} avertissements",hdrNotFetched:"Lu depuis le texte seulement : rien n\u2019est t\xE9l\xE9charg\xE9 ni envoy\xE9.",hdrNone:"Aucun en-t\xEAte HTTP trouv\xE9. Collez les en-t\xEAtes d\u2019une r\xE9ponse, la sortie de `curl -I` ou une Content-Security-Policy.",hdrFindings:"R\xE9sultats",hdrDirective:"Directive",hdrSources:"Sources",hdrHeaders:"En-t\xEAtes ({count})",hdrName:"Nom",hdrValue:"Valeur",hdrCopyReport:"Copier le rapport",hdrLevel_bad:"Probl\xE8me",hdrLevel_warn:"Avertissement",hdrLevel_info:"Remarque",hdrLevel_ok:"Correct",hdr_hstsMissing:"Pas de Strict-Transport-Security : les navigateurs peuvent d\u2019abord joindre le site en HTTP.",hdr_hstsInvalid:"Strict-Transport-Security n\u2019a pas de max-age : les navigateurs l\u2019ignorent.",hdr_hstsShort:"HSTS dure {days} jours : utilisez au moins 180 jours (max-age=15552000).",hdr_hstsOk:"HTTPS est impos\xE9 pendant {days} jours.",hdr_cspMissing:"Pas de Content-Security-Policy : un script inject\xE9 s\u2019ex\xE9cute sans limite.",hdr_cspReportOnly:"La politique est seulement signal\xE9e (Report-Only) : rien n\u2019est bloqu\xE9.",hdr_cspNoScriptSrc:"Ni script-src ni default-src : les scripts de n\u2019importe o\xF9 sont permis.",hdr_cspUnsafeInline:"'unsafe-inline' permet les scripts en ligne : utilisez des nonces ou des empreintes.",hdr_cspUnsafeEval:"'unsafe-eval' permet eval() et new Function().",hdr_cspWildcard:"Scripts permis depuis {source} : n\u2019importe quel site concern\xE9 peut servir un script.",hdr_cspObjectSrc:"object-src n\u2019est pas 'none' : des plugins peuvent charger du contenu.",hdr_cspBaseUri:"Pas de base-uri : une balise <base> inject\xE9e peut d\xE9tourner les scripts relatifs.",hdr_cspOk:"La politique limite les scripts, les plugins et l\u2019URL de base.",hdr_framingMissing:"Ni X-Frame-Options ni frame-ancestors : la page peut \xEAtre int\xE9gr\xE9e dans un cadre (clickjacking).",hdr_xfoAllowFrom:"X-Frame-Options ALLOW-FROM est ignor\xE9 par les navigateurs : utilisez frame-ancestors.",hdr_xfoInvalid:"X-Frame-Options n\u2019accepte que DENY ou SAMEORIGIN.",hdr_framingOk:"L\u2019int\xE9gration par d\u2019autres sites est limit\xE9e.",hdr_xctoMissing:"Pas de X-Content-Type-Options: nosniff : les navigateurs peuvent deviner les types.",hdr_xctoInvalid:"X-Content-Type-Options n\u2019accepte que nosniff.",hdr_xctoOk:"Les types de contenu ne sont pas devin\xE9s (nosniff).",hdr_referrerMissing:"Pas de Referrer-Policy : les navigateurs utilisent strict-origin-when-cross-origin.",hdr_referrerUnsafe:"Referrer-Policy {value} envoie les URL compl\xE8tes aux autres sites.",hdr_referrerOk:"Referrer-Policy : {value}.",hdr_permissionsMissing:"Pas de Permissions-Policy : cam\xE9ra, micro et autres restent aux valeurs par d\xE9faut.",hdr_permissionsOk:"Les fonctions du navigateur sont limit\xE9es par Permissions-Policy.",hdr_coopMissing:"Pas de Cross-Origin-Opener-Policy : les fen\xEAtres ouvertes par d\u2019autres sites gardent une r\xE9f\xE9rence.",hdr_coopOk:"Cross-Origin-Opener-Policy isole le contexte de navigation.",hdr_cookieSecure:"Le cookie {name} n\u2019est pas Secure : il peut partir en HTTP.",hdr_cookieHttpOnly:"Le cookie {name} n\u2019est pas HttpOnly : les scripts peuvent le lire.",hdr_cookieSameSite:"Le cookie {name} n\u2019a pas de SameSite : les navigateurs utilisent Lax.",hdr_cookieSameSiteNone:"Le cookie {name} est SameSite=None sans Secure : les navigateurs le refusent.",hdr_cookieHostPrefix:"Le cookie {name} doit \xEAtre Secure, Path=/ et sans Domain pour son pr\xE9fixe __Host-.",hdr_cookieSecurePrefix:"Le cookie {name} doit \xEAtre Secure pour son pr\xE9fixe __Secure-.",hdr_cookieOk:"Le cookie {name} est Secure, HttpOnly et SameSite.",hdr_corsCredentials:"Access-Control-Allow-Origin * avec identifiants : les navigateurs le refusent, et cela trahit une erreur de configuration.",hdr_corsWildcard:"N\u2019importe quel site peut lire ces r\xE9ponses (Access-Control-Allow-Origin: *).",hdr_corsNull:"Access-Control-Allow-Origin: null fait confiance aux cadres isol\xE9s et aux fichiers locaux.",hdr_serverVersion:"Le serveur donne sa version ({value}) : cela aide \xE0 choisir un exploit.",hdr_poweredBy:"La r\xE9ponse nomme son logiciel ({value}).",hdr_xxssEnabled:"X-XSS-Protection est obsol\xE8te et peut causer des fuites : supprimez-le ou mettez 0.",hdr_hpkp:"Public-Key-Pins est obsol\xE8te et ignor\xE9 par les navigateurs.",hdr_expectCt:"Expect-CT est obsol\xE8te et ignor\xE9 par les navigateurs."};var K=/^([!#$%&'*+.^_`|~0-9A-Za-z-]{1,100}):[ \t]*(.*)$/;function U(c){let e=String(c??"").split(/\r\n|\r|\n/),r=e.some(n=>/^< /.test(n)),t=[],s=null;for(let n of e){if(r){if(!/^< ?/.test(n))continue;n=n.replace(/^< ?/,"")}if(/^HTTP\/\d(?:\.\d)? +\d{3}/.test(n)){s=n.trim(),t=[];continue}if(/^[ \t]+\S/.test(n)&&t.length){t[t.length-1].value+=` ${n.trim()}`;continue}let a=K.exec(n.trim());a&&t.length<500&&t.push({name:a[1].toLowerCase(),value:a[2].trim()})}let o=String(c??"").trim();return!t.length&&/(?:^|;)\s*(?:default-src|script-src|style-src|object-src|base-uri|frame-ancestors|upgrade-insecure-requests)\b/i.test(o)?{status:null,headers:[{name:"content-security-policy",value:o.replace(/\s+/g," ")}],cspOnly:!0}:{status:s,headers:t,cspOnly:!1}}function p(c,e){return c.find(r=>r.name===e)?.value??null}function v(c){let e=[];for(let r of c.split(";")){let[t,...s]=r.trim().split(/\s+/);if(!t)continue;let o=t.toLowerCase();e.some(n=>n.name===o)||e.push({name:o,sources:s})}return e}var Y=new Set(["script-src","style-src","img-src","connect-src","font-src","object-src","media-src","frame-src","child-src","worker-src","manifest-src"]);function I(c,e){let r=c.find(t=>t.name===e);return r?r.sources:Y.has(e)?c.find(t=>t.name==="default-src")?.sources??null:null}function V(c){let e=c.toLowerCase();return/^'nonce-/.test(e)?"nonce":/^'sha(?:256|384|512)-/.test(e)?"hash":/^'.*'$/.test(e)?"keyword":e==="*"?"wildcard":/^[a-z][a-z0-9+.-]*:$/.test(e)?"scheme":"host"}function x(c){let e=c.toLowerCase();return e==="*"||e==="http:"||e==="https:"||e==="data:"||e==="blob:"||/^(?:https?:\/\/)?\*(?::\d+|:\*)?$/.test(e)}function z(c,e="content-security-policy"){let r=[],t=v(c),s=I(t,"script-src"),o=(s??[]).map(l=>l.toLowerCase()),n=o.some(l=>/^'(?:nonce-|sha(?:256|384|512)-|strict-dynamic')/.test(l));if(!s)r.push({id:"cspNoScriptSrc",level:"bad",header:e});else{o.includes("'unsafe-inline'")&&!n&&r.push({id:"cspUnsafeInline",level:"bad",header:e}),o.includes("'unsafe-eval'")&&r.push({id:"cspUnsafeEval",level:"warn",header:e});let l=s.filter(x);l.length&&!o.includes("'strict-dynamic'")&&r.push({id:"cspWildcard",level:"bad",header:e,params:{source:l.join(" ")}})}let a=I(t,"object-src");return(!a||!(a.length===1&&a[0].toLowerCase()==="'none'"))&&r.push({id:"cspObjectSrc",level:"warn",header:e}),t.some(l=>l.name==="base-uri")||r.push({id:"cspBaseUri",level:"warn",header:e}),r.length||r.push({id:"cspOk",level:"ok",header:e}),r}function Z(c,e){let[r,...t]=c.split(";"),s=r.split("=")[0].trim(),o=new Map;for(let h of t){let[g,...u]=h.split("=");g.trim()&&o.set(g.trim().toLowerCase(),u.join("=").trim())}let n="set-cookie",a=[],l=o.has("secure"),f=o.get("samesite")?.toLowerCase();return e&&!l&&a.push({id:"cookieSecure",level:"warn",header:n,params:{name:s}}),o.has("httponly")||a.push({id:"cookieHttpOnly",level:"info",header:n,params:{name:s}}),f==="none"&&!l?a.push({id:"cookieSameSiteNone",level:"bad",header:n,params:{name:s}}):f||a.push({id:"cookieSameSite",level:"info",header:n,params:{name:s}}),/^__host-/i.test(s)&&(!l||o.has("domain")||o.get("path")!=="/")?a.push({id:"cookieHostPrefix",level:"bad",header:n,params:{name:s}}):/^__secure-/i.test(s)&&!l&&a.push({id:"cookieSecurePrefix",level:"bad",header:n,params:{name:s}}),a.length||a.push({id:"cookieOk",level:"ok",header:n,params:{name:s}}),a}function B(c,{https:e=!0}={}){let r=c.headers;if(c.cspOnly)return z(r[0].value);let t=[],s=(d,y,q,k)=>t.push({id:d,level:y,header:q,...k?{params:k}:{}}),o=p(r,"strict-transport-security");if(e)if(o===null)s("hstsMissing","bad","strict-transport-security");else{let d=/(?:^|;)\s*max-age\s*=\s*"?(\d{1,12})"?/i.exec(o);d?Number(d[1])<15552e3?s("hstsShort","warn","strict-transport-security",{days:Math.floor(Number(d[1])/86400)}):s("hstsOk","ok","strict-transport-security",{days:Math.floor(Number(d[1])/86400)}):s("hstsInvalid","bad","strict-transport-security")}let n=p(r,"content-security-policy"),a=p(r,"content-security-policy-report-only");n!==null?t.push(...z(n)):a!==null?s("cspReportOnly","warn","content-security-policy-report-only"):s("cspMissing","bad","content-security-policy");let l=p(r,"x-frame-options"),f=n!==null&&v(n).some(d=>d.name==="frame-ancestors");l!==null&&/^allow-from/i.test(l.trim())?s("xfoAllowFrom",f?"info":"warn","x-frame-options"):l!==null&&!/^(?:deny|sameorigin)$/i.test(l.trim())?s("xfoInvalid",f?"info":"warn","x-frame-options"):l===null&&!f?s("framingMissing","warn","x-frame-options"):s("framingOk","ok",f?"content-security-policy":"x-frame-options");let h=p(r,"x-content-type-options");h===null?s("xctoMissing","warn","x-content-type-options"):h.trim().toLowerCase()!=="nosniff"?s("xctoInvalid","warn","x-content-type-options"):s("xctoOk","ok","x-content-type-options");let u=p(r,"referrer-policy")?.split(",").map(d=>d.trim().toLowerCase()).filter(Boolean).at(-1);u?u==="unsafe-url"||u==="no-referrer-when-downgrade"?s("referrerUnsafe","warn","referrer-policy",{value:u}):s("referrerOk","ok","referrer-policy",{value:u}):s("referrerMissing","info","referrer-policy"),p(r,"permissions-policy")===null?s("permissionsMissing","info","permissions-policy"):s("permissionsOk","ok","permissions-policy"),p(r,"cross-origin-opener-policy")===null?s("coopMissing","info","cross-origin-opener-policy"):s("coopOk","ok","cross-origin-opener-policy");for(let d of r)d.name==="set-cookie"&&t.push(...Z(d.value,e));let m=p(r,"access-control-allow-origin"),G=p(r,"access-control-allow-credentials")?.trim().toLowerCase()==="true";m?.trim()==="*"&&G?s("corsCredentials","bad","access-control-allow-origin"):m?.trim()==="*"?s("corsWildcard","info","access-control-allow-origin"):m?.trim().toLowerCase()==="null"&&s("corsNull","warn","access-control-allow-origin");let b=p(r,"server");b!==null&&/\d/.test(b)&&s("serverVersion","warn","server",{value:b});for(let d of["x-powered-by","x-aspnet-version","x-aspnetmvc-version","x-generator"]){let y=p(r,d);y!==null&&s("poweredBy","warn",d,{value:y})}let w=p(r,"x-xss-protection");return w!==null&&w.trim()!=="0"&&s("xxssEnabled","warn","x-xss-protection"),p(r,"public-key-pins")!==null&&s("hpkp","info","public-key-pins"),p(r,"expect-ct")!==null&&s("expectCt","info","expect-ct"),t}var $={bad:0,warn:1,info:2,ok:3};function X(c){return c.map((e,r)=>({finding:e,index:r})).sort((e,r)=>$[e.finding.level]-$[r.finding.level]||e.index-r.index).map(({finding:e})=>e)}function _(c){let e=c.filter(t=>t.level==="bad").length,r=c.filter(t=>t.level==="warn").length;return e>=3?"F":e===2?"D":e===1?"C":r>2?"B":r?"A":"A+"}N({en:F,fr:j});var J={bad:"shield-alert",warn:"alert",info:"status-circle",ok:"shield-check"},D=class extends H{static type="headers";static fromData=R;static componentAttributes=Object.freeze(["https","passed","policy","headers"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,fullscreen:!0}};static styles=[E];static upgradeProperties=["content"];constructor(){super(),this.panelId=C("panel"),this.editor=null,this.previewTimer=void 0}flag(e){return S(this.getAttribute(e))!==!1}report(){let e=U(this.text??""),r=e.headers.length?X(B(e,{https:this.flag("https")})):[];return{response:e,findings:r}}get findings(){return this.report().findings}get grade(){let{response:e,findings:r}=this.report();return e.headers.length?_(r):null}message(e){return this.t(`hdr_${e.id}`,e.params)}reportText(){let{response:e,findings:r}=this.report();if(!e.headers.length)return"";let t=r.map(s=>`[${this.t(`hdrLevel_${s.level}`)}] ${s.header}: ${this.message(s)}`);return[this.t("hdrGrade",{grade:_(r)}),"",...t].join(`
`)}renderContent(e){let r=this.t,{response:t,findings:s}=this.report(),o=i("div",{class:"body hdr-body",part:"body"}),n="HTTP";if(!t.headers.length)o.append(A(r("hdrNone")));else{let h=_(s);n=r("hdrGrade",{grade:h}),o.append(this.summaryView(h,s));let g=this.flag("passed")?s:s.filter(m=>m.level!=="ok");g.length&&o.append(this.findingsView(g));let u=t.headers.find(m=>m.name==="content-security-policy")??t.headers.find(m=>m.name==="content-security-policy-report-only");u&&this.flag("policy")&&o.append(this.policyView(u.value)),!t.cspOnly&&this.flag("headers")&&o.append(this.headersView(t))}let a=i("div",{class:"panel",attrs:{id:this.panelId}}),l=[];if(this.editing){let h=this.createEditor();a.classList.add("hdr-edit"),a.append(i("div",{class:"body editor-body",part:"body source"},h.element),o),l=this.historyButtons(h)}else a.append(o);let f=[...l,this.editToggleButton(),this.fullscreenButton(),this.feature("copy")&&t.headers.length?this.copyButton(()=>this.reportText(),r("hdrCopyReport")):null];e.append(...this.chrome({badge:n,actions:f}),a),this.editor?.align()}summaryView(e,r){let t=this.t,s=r.filter(a=>a.level==="bad").length,o=r.filter(a=>a.level==="warn").length;return i("div",{class:`hdr-summary ${s?"bad":o?"warn":"ok"}`},i("span",{class:"hdr-grade",part:"grade",text:e,attrs:{role:"img","aria-label":t("hdrGrade",{grade:e})}}),i("div",{class:"hdr-summary-text"},i("strong",{text:t("hdrSummary",{bad:s,warn:o})}),i("span",{class:"hdr-muted",text:t("hdrNotFetched")})))}findingsView(e){let r=this.t;return i("ul",{class:"hdr-findings",part:"findings",attrs:{"aria-label":r("hdrFindings")}},...e.map(t=>i("li",{class:`hdr-finding ${t.level}`,part:"finding"},i("span",{class:"hdr-level"},T(J[t.level]),i("span",{class:"hdr-level-text",text:r(`hdrLevel_${t.level}`)})),i("span",{class:"hdr-message"},i("code",{class:"hdr-name",text:t.header}),i("span",{text:this.message(t)})))))}policyView(e){let r=this.t,t=v(e).map(s=>i("tr",{},i("th",{attrs:{scope:"row"}},i("code",{text:s.name})),i("td",{class:"hdr-sources"},...s.sources.map(o=>{let n=/^'unsafe-(?:inline|eval|hashes)'$/i.test(o)||/^(?:script-src|default-src|object-src)$/.test(s.name)&&x(o);return i("code",{class:`hdr-source src-${V(o)}${n?" risky":""}`,text:o})}))));return i("section",{class:"hdr-section",attrs:{"aria-label":r("hdrPolicy")}},i("h3",{class:"hdr-title",text:r("hdrPolicy")}),i("div",{class:"hdr-scroll"},i("table",{class:"hdr-table",part:"policy"},i("thead",{},i("tr",{},i("th",{attrs:{scope:"col"},text:r("hdrDirective")}),i("th",{attrs:{scope:"col"},text:r("hdrSources")}))),i("tbody",{},...t))))}headersView(e){let r=this.t,t=e.headers.map(s=>i("tr",{},i("th",{attrs:{scope:"row"}},i("code",{text:s.name})),i("td",{},i("code",{class:"hdr-value",text:s.value}))));return i("details",{class:"hdr-all",part:"headers"},i("summary",{text:r("hdrHeaders",{count:e.headers.length})}),e.status?i("p",{},i("code",{class:"hdr-status",text:e.status})):null,i("div",{class:"hdr-scroll"},i("table",{class:"hdr-table"},i("thead",{},i("tr",{},i("th",{attrs:{scope:"col"},text:r("hdrName")}),i("th",{attrs:{scope:"col"},text:r("hdrValue")}))),i("tbody",{},...t))))}createEditor(){return this.editor?.destroy(),this.editor=new M({text:this.text??"",language:"plaintext",lineNumbers:!1,wrap:!0,highlightLimit:O().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>L(this,P.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),250)}};export{D as a};
