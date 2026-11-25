/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as N,d as Z}from"./chunk-6DKBEDN3.js";import{a as L,b as M}from"./chunk-C5GGPQHV.js";import{a as O}from"./chunk-4UYDCZNF.js";import{O as h,ba as I,c as v,d as b,e as E,j as x,m as z,o as a,q as g}from"./chunk-JAZI474S.js";import{k as f,l as m,m as P,q as A}from"./chunk-SCKP2KTO.js";var W=`/*
 * Secret: a key shown or masked behind a blur, its actions, its kind and its dates.
 */
.sc-top {
  flex-wrap: wrap;
  gap: var(--_space-2);
}

.sc-badges {
  display: inline-flex;
  flex-wrap: wrap;
  gap: var(--_space-1);
}

.sc-badge {
  padding: 0 var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  line-height: 1.6;
}

.sc-badge.env-live {
  border-color: var(--_danger);
  color: var(--_fg);
  font-weight: 600;
}

.sc-badge.env-live::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-inline-end: var(--_space-1);
  border-radius: var(--_radius-full);
  background: var(--_danger);
  vertical-align: middle;
}

.sc-badge.env-test {
  border-color: var(--_warning);
  color: var(--_fg);
}

.sc-badge.kind-publishable {
  border-color: var(--_success);
  color: var(--_fg);
}

.sc-box {
  position: relative;
  gap: var(--_space-2);
  padding-inline-start: var(--_space-3);
}

.sc-box > .icon {
  flex: none;
  width: 16px;
  height: 16px;
  color: var(--_fg-muted);
}

.sc-box .field-input {
  padding-inline-start: 0;
  font-family: var(--_font-mono);
}

.sc-value {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  padding: var(--_space-2) 0;
  font-family: var(--_font-mono);
  font-size: var(--_font-size-ui);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sc-value.revealed {
  overflow-x: auto;
  text-overflow: clip;
  user-select: all;
}

pre.sc-value.revealed {
  max-height: var(--_max-height, 240px);
  margin: 0;
  overflow: auto;
  white-space: pre;
  user-select: text;
}

pre.sc-value:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.sc-box.multiline {
  align-items: flex-start;
}

.sc-box.multiline > .icon {
  margin-top: 12px;
}

/* What is blurred is fixed stand-in text: the key is not in the page while hidden. */
.sc-blur {
  filter: blur(4px);
  user-select: none;
  pointer-events: none;
}

.mask-dots .sc-blur {
  filter: none;
  letter-spacing: 0.1em;
}

.sc-value.gone .sc-blur {
  opacity: 0.5;
}

.sc-empty {
  flex: 1;
  padding: var(--_space-2) 0;
  color: var(--_fg-muted);
}

.sc-actions {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: 2px;
  margin-inline-end: 4px;
}

.sc-actions .field-icon-button {
  margin: 0;
}

.field-icon-button.done {
  color: var(--_success);
}

.sc-menu-anchor {
  position: relative;
  display: inline-flex;
}

.sc-more .icon {
  width: 14px;
  height: 14px;
}

.sc-menu {
  top: calc(100% + 6px);
  right: 0;
  left: auto;
  min-width: 15rem;
  margin: 0;
  padding: var(--_space-1);
  list-style: none;
}

.sc-menu-item {
  display: grid;
  width: 100%;
  gap: 1px;
  padding: var(--_space-2);
  border: 0;
  border-radius: var(--_radius-sm);
  background: transparent;
  color: var(--_fg);
  font: inherit;
  text-align: start;
  cursor: pointer;
}

.sc-menu-item:hover,
.sc-menu-item:focus-visible {
  background: var(--_accent-soft);
  outline: none;
}

.sc-menu-item:focus-visible {
  box-shadow: inset 0 0 0 2px var(--_accent);
}

.sc-sample {
  overflow: hidden;
  color: var(--_fg-muted);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sc-rotate {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  white-space: nowrap;
}

.sc-rotate .icon {
  width: 14px;
  height: 14px;
}

.sc-rotate.confirming {
  color: var(--_danger);
  font-weight: 600;
}

.sc-countdown {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
}

/* ---------- Notices ---------- */

.sc-notice {
  display: flex;
  align-items: flex-start;
  gap: var(--_space-2);
  margin: 0;
  padding: var(--_space-2) var(--_space-3);
  border-inline-start: 3px solid var(--_tone, var(--_border-strong));
  border-radius: var(--_radius-sm);
  background: color-mix(in srgb, var(--_tone, var(--_border)) 10%, transparent);
  font-size: var(--_font-size-small);
}

.sc-notice .icon {
  flex: none;
  width: 14px;
  height: 14px;
  margin-top: 2px;
  color: var(--_tone, var(--_fg-muted));
}

.sc-notice.tone-ok {
  --_tone: var(--_success);
}

.sc-notice.tone-warn {
  --_tone: var(--_warning);
}

.sc-notice.tone-danger {
  --_tone: var(--_danger);
}

.sc-notice.tone-info {
  --_tone: var(--_accent);
}

.sc-status {
  padding: 0;
  border: 0;
  background: none;
  color: var(--_fg-muted);
}

.sc-status:empty {
  display: none;
}

/* ---------- Dates, scopes, randomness ---------- */

.sc-meta {
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  gap: var(--_space-1) var(--_space-4);
  margin: var(--_space-1) 0 0;
  font-size: var(--_font-size-small);
}

.sc-meta dt {
  color: var(--_fg-muted);
}

.sc-meta dd {
  margin: 0;
  overflow-wrap: anywhere;
}

.sc-meta dd.expiry-expired {
  color: var(--_danger);
  font-weight: 600;
}

.sc-meta dd.expiry-soon {
  font-weight: 600;
}

.sc-scopes {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1);
}

.sc-scope {
  padding: 0 var(--_space-1);
  border-radius: var(--_radius-sm);
  background: var(--_accent-soft);
  color: var(--_accent-fg);
  font-family: var(--_font-mono);
}
`;var C=[{id:"anthropic",provider:"Anthropic",label:"API key",pattern:/^sk-ant-(?:api|admin)\d{2}-[A-Za-z0-9_-]{20,}$/,prefix:14},{id:"openai",provider:"OpenAI",label:"API key",pattern:/^sk-(?:proj-|svcacct-|admin-)?[A-Za-z0-9_-]{20,}$/,prefix:8},{id:"github-classic",provider:"GitHub",label:"Personal access token (classic)",pattern:/^ghp_[A-Za-z0-9]{36}$/,prefix:4,kind:"token"},{id:"github-fine",provider:"GitHub",label:"Fine-grained personal access token",pattern:/^github_pat_[A-Za-z0-9_]{60,}$/,prefix:11,kind:"token"},{id:"github-oauth",provider:"GitHub",label:"OAuth token",pattern:/^gho_[A-Za-z0-9]{36}$/,prefix:4,kind:"token"},{id:"github-app",provider:"GitHub",label:"App token",pattern:/^gh[su]_[A-Za-z0-9]{36}$/,prefix:4,kind:"temporary"},{id:"github-refresh",provider:"GitHub",label:"Refresh token",pattern:/^ghr_[A-Za-z0-9]{36,}$/,prefix:4,kind:"token"},{id:"gitlab",provider:"GitLab",label:"Personal access token",pattern:/^glpat-[A-Za-z0-9_-]{20,}$/,prefix:6,kind:"token"},{id:"aws",provider:"AWS",label:"Access key ID",pattern:/^(AKIA|ASIA)[A-Z0-9]{16}$/,prefix:4,kind:"secret"},{id:"stripe",provider:"Stripe",label:"API key",pattern:/^(sk|rk|pk)_(live|test)_[A-Za-z0-9]{10,}$/,prefix:8,env:o=>o[2]==="live"?"live":"test"},{id:"stripe-webhook",provider:"Stripe",label:"Webhook signing secret",pattern:/^whsec_[A-Za-z0-9+/=]{24,}$/,prefix:6},{id:"slack",provider:"Slack",label:"Token",pattern:/^xox[abposr]-[A-Za-z0-9-]{10,}$/,prefix:5,kind:"token"},{id:"slack-webhook",provider:"Slack",label:"Incoming webhook URL",pattern:/^https:\/\/hooks\.slack\.com\/services\/[A-Za-z0-9/_-]{20,}$/,prefix:33},{id:"google",provider:"Google Cloud",label:"API key",pattern:/^AIza[0-9A-Za-z_-]{35}$/,prefix:4},{id:"huggingface",provider:"Hugging Face",label:"Access token",pattern:/^hf_[A-Za-z0-9]{30,}$/,prefix:3,kind:"token"},{id:"npm",provider:"npm",label:"Access token",pattern:/^npm_[A-Za-z0-9]{36}$/,prefix:4,kind:"token"},{id:"pypi",provider:"PyPI",label:"API token",pattern:/^pypi-[A-Za-z0-9_-]{50,}$/,prefix:5,kind:"token"},{id:"docker",provider:"Docker Hub",label:"Personal access token",pattern:/^dckr_pat_[A-Za-z0-9_-]{20,}$/,prefix:9,kind:"token"},{id:"sendgrid",provider:"SendGrid",label:"API key",pattern:/^SG\.[A-Za-z0-9_-]{16,32}\.[A-Za-z0-9_-]{30,50}$/,prefix:3},{id:"twilio",provider:"Twilio",label:"API key SID",pattern:/^SK[0-9a-fA-F]{32}$/,prefix:2},{id:"shopify",provider:"Shopify",label:"Access token",pattern:/^shp(?:at|ca|pa|ss)_[a-fA-F0-9]{32}$/,prefix:6,kind:"token"},{id:"digitalocean",provider:"DigitalOcean",label:"Token",pattern:/^do[opr]_v1_[a-f0-9]{64}$/,prefix:7,kind:"token"},{id:"vault",provider:"HashiCorp Vault",label:"Token",pattern:/^hv[sbr]\.[A-Za-z0-9_-]{20,}$/,prefix:4,kind:"token"},{id:"mailgun",provider:"Mailgun",label:"API key",pattern:/^key-[0-9a-f]{32}$/,prefix:4},{id:"linear",provider:"Linear",label:"API key",pattern:/^lin_api_[A-Za-z0-9]{40}$/,prefix:8},{id:"supabase",provider:"Supabase",label:"Access token",pattern:/^sbp_[a-f0-9]{40}$/,prefix:4,kind:"token"},{id:"telegram",provider:"Telegram",label:"Bot token",pattern:/^\d{8,10}:[A-Za-z0-9_-]{35}$/,prefix:0,kind:"token"},{id:"jwt",provider:"JWT",label:"JSON Web Token",pattern:/^eyJ[A-Za-z0-9_-]+\.eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]*$/,prefix:3,kind:"token"},{id:"private-key",provider:"PEM",label:"Private key",pattern:/^-----BEGIN (?:[A-Z0-9]+ )*PRIVATE KEY-----[\s\S]+-----END (?:[A-Z0-9]+ )*PRIVATE KEY-----\s*$/,prefix:0,kind:"private-key"},{id:"uuid",provider:"",label:"UUID",pattern:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,prefix:0}];function y(o){let e=String(o??"").trim();if(!e||e.length>1e4)return null;for(let t of C){let s=t.pattern.exec(e);if(!s)continue;let r=t.kind??"secret";return t.id==="stripe"&&s[1]==="pk"&&(r="publishable"),t.id==="aws"&&s[1]==="ASIA"&&(r="temporary"),{id:t.id,provider:t.provider,label:t.label,prefix:t.prefix,env:t.env?.(s)??null,kind:r}}return null}function k(o){return/^[0-9a-f]+$/.test(o)||/^[0-9A-F]+$/.test(o)?{name:"hex",size:16}:/^[A-Z2-7]+=*$/.test(o)?{name:"base32",size:32}:/^[0-9A-Za-z]+$/.test(o)?{name:"base62",size:62}:/^[0-9A-Za-z_-]+$/.test(o)?{name:"base64url",size:64}:/^[0-9A-Za-z+/]+=*$/.test(o)?{name:"base64",size:64}:{name:"printable",size:95}}function K(o){let e=y(o);if(e?.kind==="private-key"||e?.id==="jwt")return 0;if(e?.id==="uuid")return 122;let t=[...String(o??"").trim()].slice(e?.prefix??0).join("").replace(/\./g,"");return t?Math.round(t.length*Math.log2(k(t).size)):0}var D="x7Kq2Lm9PaR4vN8sB3dT6wF1hJ5cY0gZ";function R(o,e={}){let t=[...String(o??"")],s=y(o),r=t.length>=20,i=e.start??(s?s.prefix:0),n=e.end??(r&&s?.kind!=="private-key"?4:0),l=Math.floor(t.length/4);i=Math.max(0,Math.min(i,t.length>=12?Math.max(l,s?.prefix??0):0)),n=Math.max(0,Math.min(n,l)),i+n>t.length/2&&(n=0);let d=Math.max(0,t.length-i-n),c="";for(let p=0;p<Math.min(48,d);p+=1)c+=D[(p*7+t.length)%D.length];return{start:t.slice(0,i).join(""),hidden:c,end:n?t.slice(-n).join(""):"",count:d}}var Y=["base62","hex","base64url","base32"];function j(o={}){let e=Y.includes(o.alphabet)?o.alphabet:"base62",t=Math.max(8,Math.min(512,Math.round(o.length??40)));return`${(o.prefix??"").replace(/[^\w.-]/g,"").slice(0,32)}${Z(t,N[e])}`}var S=["raw","env","shell","powershell","header","json"];function J(o){let e=String(o??"").trim().replace(/[^A-Za-z0-9_]+/g,"_").replace(/^_+|_+$/g,"").toUpperCase();return/^[A-Z_]/.test(e)?e.slice(0,100):`KEY_${e}`.slice(0,100)}function T(o,e,t="API_KEY"){let s=J(t);if(e==="env"){let r=/^[A-Za-z0-9_./:+=@-]*$/.test(o);return`${s}=${r?o:`"${o.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\r?\n/g,"\\n")}"`}`}return e==="shell"?`export ${s}=${L(o)}`:e==="powershell"?`$env:${s} = ${M(o)}`:e==="header"?`Authorization: Bearer ${o.replace(/[\r\n]+/g,"")}`:e==="json"?JSON.stringify({[s]:o}):o}function $(o){let e=String(o??"").split(".")[1];if(!e)return null;try{let t=atob(e.replace(/-/g,"+").replace(/_/g,"/").padEnd(Math.ceil(e.length/4)*4,"=")),s=JSON.parse(new TextDecoder().decode(Uint8Array.from(t,i=>i.charCodeAt(0)))),r=i=>typeof i=="number"&&Number.isFinite(i)?new Date(i*1e3):null;return{issued:r(s.iat),expires:r(s.exp),subject:typeof s.sub=="string"?s.sub.slice(0,200):""}}catch{return null}}function F(o,e,t){if(!o||Number.isNaN(o.getTime()))return null;let s=o.getTime()-e.getTime();return s<=0?"expired":s<=t*864e5?"soon":"ok"}var q=Object.freeze({scLabel:"API key",scRequired:"required",scShow:"Show the key",scHide:"Hide the key",scCopy:"Copy the key",scCopyAs:"Copy as\u2026",scCopied:"Key copied",scCopiedAs:"Copied as {format}",scCopyFailed:"Could not copy",scClipboardCleared:"Clipboard cleared",scClipboardIn:"The clipboard is cleared in {seconds} s",scFormat_raw:"Key only",scFormat_env:".env line",scFormat_shell:"Shell export",scFormat_powershell:"PowerShell variable",scFormat_header:"Authorization header",scFormat_json:"JSON",scHidden:"Hidden key, {count} characters",scStartsWith:"starts with {text}",scEndsWith:"ends with {text}",scHidesIn:"Hides in {seconds} s",scOnce:"Copy this key now: it will not be shown again.",scGone:"This key is no longer shown. Regenerate it if it is lost.",scEmpty:"No key",scGenerate:"Generate a key",scRegenerate:"Regenerate",scConfirmRegenerate:"Confirm: the old key stops working",scRegenerated:"New key generated. Copy it now.",scProvider:"Kind",scLive:"Live",scTest:"Test",scKind_secret:"Secret",scKind_publishable:"Publishable",scKind_temporary:"Temporary",scKind_token:"Token","scKind_private-key":"Private key",scWarnLive:"Live key: keep it on your server, never in browser code or a repository.",scWarnPublishable:"Publishable key: made to be used in browser code.",scWarnPrivateKey:"Private key: never share it.",scWarnExpired:"This key has expired.",scWarnSoon:"This key expires {when}.",scCreated:"Created",scExpires:"Expires",scExpired:"Expired",scLastUsed:"Last used",scNeverUsed:"Never",scScopes:"Scopes",scEntropy:"Randomness",scBits:"{bits} bits",scLength:"Length",scChars:"{count} characters",scMissing:"Enter a key.",scWrongKind:"This does not look like a {expected}.",scBadPattern:"This key does not have the expected format.",scWhitespace:"Spaces and line breaks were removed from the key.",scMenu:"Copy formats"}),H=Object.freeze({scLabel:"Cl\xE9 d\u2019API",scRequired:"obligatoire",scShow:"Afficher la cl\xE9",scHide:"Masquer la cl\xE9",scCopy:"Copier la cl\xE9",scCopyAs:"Copier comme\u2026",scCopied:"Cl\xE9 copi\xE9e",scCopiedAs:"Copi\xE9e comme {format}",scCopyFailed:"Copie impossible",scClipboardCleared:"Presse-papiers vid\xE9",scClipboardIn:"Le presse-papiers sera vid\xE9 dans {seconds} s",scFormat_raw:"Cl\xE9 seule",scFormat_env:"Ligne .env",scFormat_shell:"Export shell",scFormat_powershell:"Variable PowerShell",scFormat_header:"En-t\xEAte Authorization",scFormat_json:"JSON",scHidden:"Cl\xE9 masqu\xE9e, {count} caract\xE8res",scStartsWith:"commence par {text}",scEndsWith:"finit par {text}",scHidesIn:"Masqu\xE9e dans {seconds} s",scOnce:"Copiez cette cl\xE9 maintenant : elle ne sera plus affich\xE9e.",scGone:"Cette cl\xE9 n\u2019est plus affich\xE9e. R\xE9g\xE9n\xE9rez-la si elle est perdue.",scEmpty:"Aucune cl\xE9",scGenerate:"G\xE9n\xE9rer une cl\xE9",scRegenerate:"R\xE9g\xE9n\xE9rer",scConfirmRegenerate:"Confirmer : l\u2019ancienne cl\xE9 cessera de fonctionner",scRegenerated:"Nouvelle cl\xE9 g\xE9n\xE9r\xE9e. Copiez-la maintenant.",scProvider:"Type",scLive:"Production",scTest:"Test",scKind_secret:"Secr\xE8te",scKind_publishable:"Publiable",scKind_temporary:"Temporaire",scKind_token:"Jeton","scKind_private-key":"Cl\xE9 priv\xE9e",scWarnLive:"Cl\xE9 de production : gardez-la sur votre serveur, jamais dans le code du navigateur ni dans un d\xE9p\xF4t.",scWarnPublishable:"Cl\xE9 publiable : faite pour le code du navigateur.",scWarnPrivateKey:"Cl\xE9 priv\xE9e : ne la partagez jamais.",scWarnExpired:"Cette cl\xE9 a expir\xE9.",scWarnSoon:"Cette cl\xE9 expire {when}.",scCreated:"Cr\xE9\xE9e",scExpires:"Expire",scExpired:"Expir\xE9e",scLastUsed:"Derni\xE8re utilisation",scNeverUsed:"Jamais",scScopes:"Port\xE9es",scEntropy:"Al\xE9a",scBits:"{bits} bits",scLength:"Longueur",scChars:"{count} caract\xE8res",scMissing:"Saisissez une cl\xE9.",scWrongKind:"Cela ne ressemble pas \xE0 : {expected}.",scBadPattern:"Cette cl\xE9 n\u2019a pas le format attendu.",scWhitespace:"Les espaces et retours \xE0 la ligne ont \xE9t\xE9 retir\xE9s de la cl\xE9.",scMenu:"Formats de copie"});P({en:q,fr:H});var w=864e5;function _(o){if(!o?.trim())return null;let e=Date.parse(o.trim());return Number.isNaN(e)?null:new Date(e)}var B=class extends I{static type="secret";static formAssociated=!0;static allowEmpty=!0;static componentAttributes=Object.freeze(["value","name","hint","editable","required","disabled","placeholder","mask","show-start","show-end","auto-hide","show-once","copy-as","env-name","clear-clipboard","expect","pattern","detect","created","expires","last-used","warn-days","scopes","rotate","generate","generate-prefix","generate-length","generate-alphabet","now"]);static dataAttributes=Object.freeze(["created","expires","last-used","scopes","env-name","expect"]);static presets={simple:{},full:{meta:!0}};static styles=[O,W];static fromData(e){let t=e!==null&&typeof e=="object"&&!Array.isArray(e)?e:{},s=r=>Array.isArray(r)?r.join(","):r;return{content:"",attributes:{created:t.created,expires:t.expires,"last-used":t.lastUsed,scopes:s(t.scopes),"env-name":t.envName,expect:s(t.expect)}}}constructor(){super(),this.internals=typeof this.attachInternals=="function"?this.attachInternals():null,this.ids={label:g("label"),value:g("key"),hint:g("hint"),error:g("error"),menu:g("menu"),status:g("status")},this.secret=null,this.shown=!1,this.forgotten=!1,this.forgottenMask=null,this.menuOpen=!1,this.confirming=!1,this.fresh=!1,this.trimmed=!1,this.showErrors=!1,this.formDisabled=!1,this.hideTimer=void 0,this.hideAt=0,this.confirmTimer=void 0,this.clipboardTimer=void 0,this.outside=null,this.addEventListener("invalid",e=>{e.preventDefault(),this.showErrors=!0,this.update()})}get value(){return this.secret??this.getAttribute("value")??""}set value(e){this.secret=e==null?"":String(e),this.forgotten=!1,this._connected&&this.render()}get visible(){return this.shown}set visible(e){this.toggle(!!e)}get kind(){return y(this.value)}get editable(){return v(this.getAttribute("editable"))===!0}get disabled(){return this.formDisabled||v(this.getAttribute("disabled"))===!0}flag(e){return v(this.getAttribute(e))===!0}get now(){return _(this.getAttribute("now"))??new Date}get formats(){let e=this.getAttribute("copy-as");return(e===null?this.variant==="full"?[...S]:[]:e.split(",").map(s=>s.trim().toLowerCase())).filter(s=>S.includes(s))}get variableName(){return this.getAttribute("env-name")?.trim()||x(this.getAttribute("label"),100)||"API_KEY"}get form(){return this.internals?.form??null}get validity(){return this.internals?.validity}checkValidity(){return this.internals?.checkValidity()??!0}focus(e){this.root.querySelector('[data-focus-key="control"], [data-focus-key="reveal"]')?.focus(e)}formResetCallback(){this.secret=null,this.showErrors=!1,this.toggle(!1,!1),this.render()}formDisabledCallback(e){this.formDisabled=e,this.requestRender()}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.hideTimer),clearTimeout(this.confirmTimer),this.stopOutside(),this.shown=!1}toggle(e,t=!0){if(this.forgotten&&e)return;let s=this.shown;if(this.shown=e,clearInterval(this.hideTimer),this.hideTimer=void 0,e){let r=b(this.getAttribute("auto-hide"),{min:0,max:3600,fallback:0});r&&(this.hideAt=Date.now()+r*1e3,this.hideTimer=setInterval(()=>{let i=Math.ceil((this.hideAt-Date.now())/1e3);if(i<=0)this.toggle(!1);else{let n=this.root.querySelector(".sc-countdown");n&&(n.textContent=this.t("scHidesIn",{seconds:i}))}},250))}else if(s&&this.flag("show-once")&&!this.editable){let r=this.maskedParts();this.forgottenMask=r,this.secret="",this.forgotten=!0,this.fresh=!1}t&&this.isConnected&&this.render(),s!==e&&m(this,f.TOGGLE,{visible:e})}maskedParts(){let e=t=>{let s=this.getAttribute(t);return s===null?void 0:b(s,{min:0,max:64,fallback:0})};return R(this.value,{start:e("show-start"),end:e("show-end")})}check(){let e=this.t,t=this.value;if(this.disabled||!this.editable)return{flags:{},message:""};if(!t)return this.flag("required")?{flags:{valueMissing:!0},message:e("scMissing")}:{flags:{},message:""};let s=(this.getAttribute("expect")??"").split(",").map(i=>i.trim().toLowerCase()).filter(Boolean);if(s.length){let i=this.kind;if(!(i&&s.some(l=>l===i.id||l===i.provider.toLowerCase()||i.id.startsWith(`${l}-`)))){let l=s.map(d=>{let c=C.find(p=>p.id===d||p.provider.toLowerCase()===d);return c?`${c.provider} ${c.label}`.trim():d});return{flags:{typeMismatch:!0},message:e("scWrongKind",{expected:l.join(" / ")})}}}let r=this.getAttribute("pattern");if(r)try{if(!new RegExp(`^(?:${r})$`,"v").test(t))return{flags:{patternMismatch:!0},message:e("scBadPattern")}}catch{}return{flags:{},message:""}}get valid(){return!Object.keys(this.check().flags).length}update(){let{flags:e,message:t}=this.check();if(this.internals){this.internals.setFormValue(this.disabled||!this.getAttribute("name")?null:this.value,"");let n=this.root.querySelector('[data-focus-key="control"]')??void 0;this.internals.setValidity(e,t,Object.keys(e).length?n:void 0)}let s=!!t&&this.showErrors,r=this.root.getElementById(this.ids.error);r&&(r.textContent=s?t:"");let i=this.root.querySelector('[data-focus-key="control"]');s?i?.setAttribute("aria-invalid","true"):i?.removeAttribute("aria-invalid")}renderContent(e){let t=this.t,s=this.editable,r=s&&this.flag("required"),i=x(this.getAttribute("hint"),300),n=this.forgotten?null:this.kind,l=x(this.getAttribute("label"),300)||t("scLabel"),d=a("div",{class:"field-top sc-top"},a(s?"label":"span",{class:"field-label",part:"label",attrs:{id:this.ids.label,for:s?this.ids.value:null}},l,r?a("span",{class:"field-required",text:"*",attrs:{"aria-hidden":"true"}}):null,r?a("span",{class:"sr-only",text:` (${t("scRequired")})`}):null),this.badges(n)),c=a("div",{class:`field secret${this.disabled?" disabled":""}${this.shown?" shown":""}`,part:"body"},d,s?this.inputView():this.valueView(n),this.hideTimer?a("p",{class:"sc-countdown",attrs:{"aria-live":"off"},text:t("scHidesIn",{seconds:Math.max(1,Math.ceil((this.hideAt-Date.now())/1e3))})}):null,i?a("p",{class:"field-hint",part:"hint",text:i,attrs:{id:this.ids.hint}}):null,...this.notices(n),this.metaView(n),a("p",{class:"field-error",part:"error",attrs:{id:this.ids.error,"aria-live":"polite"}}));e.append(c),this.update(),this.menuOpen?this.watchOutside():this.stopOutside()}badges(e){let t=this.t;return!e||v(this.getAttribute("detect"))===!1?null:a("span",{class:"sc-badges"},a("span",{class:"sc-badge",part:"badge",text:[e.provider,e.label].filter(Boolean).join(" \xB7 ")}),e.env?a("span",{class:`sc-badge env-${e.env}`,part:"badge",text:t(e.env==="live"?"scLive":"scTest")}):null,e.kind!=="secret"&&e.kind!=="token"?a("span",{class:`sc-badge kind-${e.kind}`,part:"badge",text:t(`scKind_${e.kind}`)}):null)}valueView(e){let t=this.t,s=this.value,r=e?.kind==="private-key"||s.includes(`
`),i;if(this.forgotten){let n=this.forgottenMask??{start:"",hidden:"",end:"",count:0};i=this.maskView(n,!0)}else s?this.shown?i=a(r?"pre":"code",{class:"sc-value revealed",part:"value",text:s,attrs:{id:this.ids.value,tabindex:r?"0":null}}):i=this.maskView(this.maskedParts(),!1):i=a("span",{class:"sc-empty",text:t("scEmpty")});return a("div",{class:`field-box sc-box${r&&this.shown?" multiline":""}`},h("key"),i,a("span",{class:"sc-actions"},...this.actions()))}maskView(e,t){let s=this.t,r=[s("scHidden",{count:e.count+[...e.start].length+[...e.end].length})];e.start&&r.push(s("scStartsWith",{text:e.start})),e.end&&r.push(s("scEndsWith",{text:e.end}));let i=E(this.getAttribute("mask"),["blur","dots"],"blur"),n=i==="dots"?"\u2022".repeat(Math.min(24,e.hidden.length)):e.hidden;return a("code",{class:`sc-value masked mask-${i}${t?" gone":""}`,part:"value",attrs:{id:this.ids.value}},a("span",{class:"sr-only",text:r.join(", ")}),a("span",{attrs:{"aria-hidden":"true"}},e.start,a("span",{class:"sc-blur",text:n}),e.count>e.hidden.length?"\u2026":"",e.end))}actions(){let e=this.t,s=!!this.value&&!this.forgotten&&!this.disabled,r=this.formats.filter(i=>i!=="raw");return[s?a("button",{class:"field-icon-button",attrs:{type:"button","aria-label":e(this.shown?"scHide":"scShow"),title:e(this.shown?"scHide":"scShow"),"aria-pressed":String(this.shown),"aria-controls":this.ids.value,"data-focus-key":"reveal"},on:{click:()=>this.toggle(!this.shown)}},h(this.shown?"eye-off":"eye")):null,s?a("button",{class:"field-icon-button sc-copy",attrs:{type:"button","aria-label":e("scCopy"),title:e("scCopy"),"data-focus-key":"copy"},on:{click:i=>this.copy("raw",i.currentTarget)}},h("copy")):null,s&&r.length?this.menuView(r):null,this.flag("rotate")&&!this.disabled&&!this.editable?a("button",{class:`text-btn sc-rotate${this.confirming?" confirming":""}`,attrs:{type:"button","data-focus-key":"rotate"},on:{click:()=>this.rotate()}},h("refresh"),a("span",{text:e(this.confirming?"scConfirmRegenerate":"scRegenerate")})):null]}menuView(e){let t=this.t,s=a("button",{class:"field-icon-button sc-more",attrs:{type:"button","aria-label":t("scCopyAs"),title:t("scCopyAs"),"aria-haspopup":"menu","aria-expanded":String(this.menuOpen),"aria-controls":this.menuOpen?this.ids.menu:null,"data-focus-key":"copy-as"},on:{click:()=>this.openMenu(!this.menuOpen),keydown:i=>{i.key==="ArrowDown"&&!this.menuOpen&&(i.preventDefault(),this.openMenu(!0))}}},h("chevron-down")),r=this.menuOpen?a("ul",{class:"field-popup sc-menu",part:"menu",attrs:{id:this.ids.menu,role:"menu","aria-label":t("scMenu")},on:{keydown:i=>this.menuKey(i)}},...e.map((i,n)=>a("li",{attrs:{role:"none"}},a("button",{class:"sc-menu-item",attrs:{type:"button",role:"menuitem",tabindex:n===0?"0":"-1","data-focus-key":`format-${i}`},on:{click:()=>{this.openMenu(!1),this.copy(i,this.root.querySelector(".sc-copy"))}}},a("span",{text:t(`scFormat_${i}`)}),a("code",{class:"sc-sample",text:T("\u2026",i,this.variableName).slice(0,48)}))))):null;return a("span",{class:"sc-menu-anchor"},s,r)}openMenu(e){this.menuOpen=e,this.render(),e?this.root.querySelector(".sc-menu-item")?.focus():this.root.querySelector(".sc-more")?.focus()}menuKey(e){let t=[...this.root.querySelectorAll(".sc-menu-item")],s=t.indexOf(this.root.activeElement),r={ArrowDown:s+1,ArrowUp:s-1,Home:0,End:t.length-1};if(e.key in r){e.preventDefault();let i=(r[e.key]+t.length)%t.length;t.forEach((n,l)=>n.setAttribute("tabindex",l===i?"0":"-1")),t[i]?.focus()}else e.key==="Escape"?(e.preventDefault(),e.stopPropagation(),this.openMenu(!1)):e.key==="Tab"&&(this.menuOpen=!1,this.render())}inputView(){let e=this.t,t=a("input",{class:"field-input sc-input",part:"control",attrs:{id:this.ids.value,type:this.shown?"text":"password",placeholder:this.getAttribute("placeholder"),required:this.flag("required"),disabled:this.disabled,autocomplete:"off",autocapitalize:"off",spellcheck:"false","data-1p-ignore":"","data-lpignore":"true","data-bwignore":"","data-form-type":"other","aria-describedby":[this.getAttribute("hint")?this.ids.hint:"",this.ids.status,this.ids.error].filter(Boolean).join(" "),"data-focus-key":"control"}});return t.value=this.value,t.addEventListener("input",()=>{let s=t.value.startsWith("-----BEGIN")?t.value:t.value.replace(/\s+/g,"");if(this.trimmed=s!==t.value,this.trimmed){let r=t.selectionStart??s.length;t.value=s,t.setSelectionRange(Math.min(r,s.length),Math.min(r,s.length))}this.secret=t.value,this.fresh=!1,this.getAttribute("validate")==="input"&&(this.showErrors=!0),this.refreshEditable(),m(this,f.INPUT,{kind:this.kind?.id??null,valid:this.valid})}),t.addEventListener("change",()=>m(this,f.CHANGE,{kind:this.kind?.id??null,valid:this.valid})),t.addEventListener("blur",()=>{this.showErrors=!0,this.update()}),a("div",{class:"field-box sc-box"},h("key"),t,a("span",{class:"sc-actions"},this.value&&!this.disabled?a("button",{class:"field-icon-button sc-copy",attrs:{type:"button","aria-label":e("scCopy"),title:e("scCopy"),"data-focus-key":"copy"},on:{click:s=>this.copy("raw",s.currentTarget)}},h("copy")):null,this.flag("generate")&&!this.disabled?a("button",{class:"field-icon-button",attrs:{type:"button","aria-label":e("scGenerate"),title:e("scGenerate"),"data-focus-key":"generate"},on:{click:()=>this.generate()}},h("refresh")):null,a("button",{class:"field-icon-button",attrs:{type:"button","aria-label":e(this.shown?"scHide":"scShow"),title:e(this.shown?"scHide":"scShow"),"aria-pressed":String(this.shown),"aria-controls":this.ids.value,disabled:this.disabled,"data-focus-key":"reveal"},on:{click:()=>this.toggle(!this.shown)}},h(this.shown?"eye-off":"eye"))))}refreshEditable(){let e=this.root.querySelector(".sc-top"),t=this.badges(this.kind);e?.querySelector(".sc-badges")?.remove(),t&&e?.append(t);let s=this.root.getElementById(this.ids.status);s&&(s.textContent=this.trimmed?this.t("scWhitespace"):"");for(let l of this.root.querySelectorAll(".sc-notice:not(.sc-status)"))l.remove();let r=this.root.getElementById(this.ids.status);for(let l of this.notices(this.kind).filter(d=>d&&!d.classList.contains("sc-status")))r?.before(l);let i=this.root.querySelector(".sc-actions"),n=i?.querySelector(".sc-copy");if(this.value&&!n&&i){let l=this.t;i.prepend(a("button",{class:"field-icon-button sc-copy",attrs:{type:"button","aria-label":l("scCopy"),title:l("scCopy"),"data-focus-key":"copy"},on:{click:d=>this.copy("raw",d.currentTarget)}},h("copy")))}else this.value||n?.remove();this.update()}notices(e){let t=this.t,s=[];this.fresh&&!this.forgotten?s.push(["ok",t(this.flag("show-once")?"scOnce":"scRegenerated")]):this.flag("show-once")&&!this.forgotten&&this.value&&!this.editable&&s.push(["info",t("scOnce")]),this.forgotten&&s.push(["info",t("scGone")]),e?.env==="live"&&e.kind!=="publishable"&&s.push(["warn",t("scWarnLive")]),e?.kind==="publishable"&&s.push(["info",t("scWarnPublishable")]),e?.kind==="private-key"&&s.push(["warn",t("scWarnPrivateKey")]);let r=this.expiry(e);return r.state==="expired"&&s.push(["danger",t("scWarnExpired")]),r.state==="soon"&&r.date&&s.push(["warn",t("scWarnSoon",{when:this.relative(r.date)})]),[...s.map(([i,n])=>a("p",{class:`sc-notice tone-${i}`,part:"notice"},h(i==="ok"?"status-success":i==="info"?"help":"alert"),a("span",{text:n}))),this.editable?a("p",{class:"sc-notice sc-status",attrs:{id:this.ids.status,"aria-live":"polite"}}):null]}expiry(e){let t=_(this.getAttribute("expires"));!t&&e?.id==="jwt"&&(t=$(this.value)?.expires??null);let s=b(this.getAttribute("warn-days"),{min:0,max:3650,fallback:7});return{date:t,state:F(t,this.now,s)}}relative(e){let t=e.getTime()-this.now.getTime(),s=Math.abs(t),r=[["year",365*w],["month",30*w],["week",7*w],["day",w],["hour",36e5],["minute",6e4]],i=new Intl.RelativeTimeFormat(this.locale,{numeric:"auto"});for(let[n,l]of r)if(s>=l||n==="minute")return i.format(Math.round(t/l),n);return""}dateText(e){return new Intl.DateTimeFormat(this.locale,{dateStyle:"medium",timeZone:"UTC"}).format(e)}metaView(e){let t=this.t,s=_(this.getAttribute("created"))??(e?.id==="jwt"?$(this.value)?.issued??null:null),r=this.getAttribute("last-used"),i=_(r),n=this.expiry(e),l=(this.getAttribute("scopes")??"").split(",").map(u=>u.trim()).filter(Boolean).slice(0,50),d=this.feature("meta"),c=[];s&&c.push([t("scCreated"),[a("time",{text:this.dateText(s),attrs:{datetime:s.toISOString()}})]]),n.date&&c.push([t(n.state==="expired"?"scExpired":"scExpires"),[a("time",{text:`${this.dateText(n.date)} (${this.relative(n.date)})`,attrs:{datetime:n.date.toISOString()}})],`expiry-${n.state}`]),i?c.push([t("scLastUsed"),[a("time",{text:this.relative(i),attrs:{datetime:i.toISOString(),title:this.dateText(i)}})]]):r?.trim().toLowerCase()==="never"&&c.push([t("scLastUsed"),[t("scNeverUsed")]]),l.length&&c.push([t("scScopes"),[a("span",{class:"sc-scopes"},...l.map(u=>a("code",{class:"sc-scope",text:u.slice(0,80)})))]]);let p=this.value;if(d&&p&&!this.forgotten){let u=K(p);u&&c.push([t("scEntropy"),[`${t("scBits",{bits:A(u,this.locale)})} \xB7 ${k(p.slice(e?.prefix??0)).name}`],u<64?"weak":"strong"]),c.push([t("scLength"),[t("scChars",{count:A([...p].length,this.locale)})]])}return c.length?a("dl",{class:"sc-meta",part:"meta"},...c.flatMap(([u,G,V])=>[a("dt",{text:u}),a("dd",{class:V??""},...G)])):null}async copy(e,t){let s=this.t,r=T(this.value,e,this.variableName),i=await z(r,this.root);t&&(t.replaceChildren(h(i?"check":"alert")),t.classList.toggle("done",i),setTimeout(()=>{t.replaceChildren(h("copy")),t.classList.remove("done")},1500));let n=b(this.getAttribute("clear-clipboard"),{min:0,max:3600,fallback:0}),l=i?e==="raw"?s("scCopied"):s("scCopiedAs",{format:s(`scFormat_${e}`)}):s("scCopyFailed");this.announce(i&&n?`${l}. ${s("scClipboardIn",{seconds:n})}`:l),i&&(m(this,f.COPY,{format:e}),n&&(clearTimeout(this.clipboardTimer),this.clipboardTimer=setTimeout(async()=>{try{await navigator.clipboard.writeText(""),this.announce(s("scClipboardCleared"))}catch{}},n*1e3)))}rotate(){if(!this.confirming){this.confirming=!0,this.render(),clearTimeout(this.confirmTimer),this.confirmTimer=setTimeout(()=>{this.confirming=!1,this.isConnected&&this.render()},5e3);return}clearTimeout(this.confirmTimer),this.confirming=!1;let e=this.kind;if(!m(this,f.ROTATE,{provider:e?.id??null})){this.render();return}this.generate()}generate(){let e=this.forgotten?"":this.value,t=y(e),s=this.getAttribute("generate-prefix")??(t?[...e].slice(0,t.prefix).join(""):""),r=t?[...e].slice(t.prefix).join(""):e,i=b(this.getAttribute("generate-length"),{min:8,max:512,fallback:r.length>=16?r.length:40}),n=k(r).name,l=this.getAttribute("generate-alphabet")??(r&&["hex","base62","base64url","base32"].includes(n)?n:"base62");this.secret=j({prefix:s,length:i,alphabet:l}),this.forgotten=!1,this.fresh=!0,this.shown=!1,this.toggle(!0,!1),this.render(),this.root.querySelector(".sc-copy")?.focus(),this.announce(this.t("scRegenerated")),m(this,f.GENERATE,{length:[...this.secret].length}),this.editable&&m(this,f.CHANGE,{kind:this.kind?.id??null,valid:this.valid})}watchOutside(){this.outside||(this.outside=e=>{e.composedPath().includes(this)||(this.menuOpen=!1,this.render())},document.addEventListener("pointerdown",this.outside,!0))}stopOutside(){this.outside&&(document.removeEventListener("pointerdown",this.outside,!0),this.outside=null)}};export{B as a};
