/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{c as j}from"./chunk-X7L44BFY.js";import{r as F}from"./chunk-37OSRZJK.js";import{O as b,X as z,_ as B,ba as E,c as _,e as P,o as n,q as R,u as f}from"./chunk-JAZI474S.js";import{h as $,k,l as A,m as D}from"./chunk-SCKP2KTO.js";var V=`/*
 * E-mail analysis: the summary with authentication and findings, then tables for the path,
 * links, attachments and headers. The body is plain text.
 */
.email-body {
  display: grid;
  gap: var(--_space-4);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.email-fields {
  display: grid;
  gap: var(--_space-1);
  margin: 0;
}

.email-fields div {
  display: grid;
  grid-template-columns: minmax(7rem, max-content) 1fr;
  gap: var(--_space-3);
}

.email-fields dt {
  color: var(--_fg-muted);
}

.email-fields dd {
  margin: 0;
  overflow-wrap: anywhere;
}

.email-auth {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2);
}

.email-auth-item {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  padding: 2px var(--_space-2);
  border: 1px solid currentColor;
  border-radius: var(--_radius-full);
  font-weight: 600;
}

.email-auth-item svg,
.email-tag svg,
.email-level svg {
  flex: none;
  width: 14px;
  height: 14px;
}

.email-auth-item.ok {
  color: var(--_success);
}

.email-auth-item.warn {
  color: var(--_warning);
}

.email-auth-item.bad {
  color: var(--_danger);
}

.email-findings {
  display: grid;
  margin: 0;
  padding: 0;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  list-style: none;
}

.email-finding {
  display: grid;
  grid-template-columns: minmax(8.5rem, auto) 1fr;
  gap: var(--_space-3);
  padding: var(--_space-2) var(--_space-3);
  border-bottom: 1px solid var(--_border);
  overflow-wrap: anywhere;
}

.email-finding:last-child {
  border-bottom: 0;
}

.email-level {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  font-weight: 600;
}

.email-finding.bad .email-level {
  color: var(--_danger);
}

.email-finding.warn .email-level {
  color: var(--_warning);
}

.email-finding.info .email-level {
  color: var(--_fg-muted);
}

.email-muted,
.email-note {
  margin: 0;
  color: var(--_fg-muted);
}

.email-note {
  font-size: var(--_font-size-small);
}

.email-scroll {
  max-height: var(--vt-email-table-height, 480px);
  overflow: auto;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.email-table {
  width: 100%;
  border-collapse: collapse;
}

.email-table th,
.email-table td {
  padding: 6px var(--_space-3);
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
}

.email-table tbody tr:last-child > * {
  border-bottom: 0;
}

.email-table thead th {
  position: sticky;
  top: 0;
  background: var(--_surface-sunken);
  font-weight: 600;
}

.email-table tbody th {
  font-weight: 500;
  white-space: nowrap;
}

.email-table code {
  font-family: var(--_font-mono);
  overflow-wrap: anywhere;
  word-break: break-word;
}

.email-table tr.deceptive > * {
  background: color-mix(in srgb, var(--_danger) 6%, transparent);
}

.email-tag {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  margin-inline-start: var(--_space-2);
  padding: 0 6px;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  font-size: var(--_font-size-small);
  white-space: nowrap;
}

.email-tag.bad {
  border-color: var(--_danger);
  color: var(--_danger);
  font-weight: 600;
}

.email-num,
.email-slow {
  white-space: nowrap;
}

.email-slow {
  color: var(--_warning);
  font-weight: 600;
}

.email-hash,
.email-value {
  font-size: var(--_font-size-small);
}

.email-text-box {
  display: grid;
  gap: var(--_space-2);
}

.email-text {
  max-height: var(--vt-email-text-height, 480px);
  margin: 0;
  padding: var(--_space-3);
  overflow: auto;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
  color: var(--_code-fg);
  font-family: var(--_font-ui);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.email-edit > .editor-body {
  max-height: min(35vh, 280px);
  border-bottom: 1px solid var(--_border);
}

@media (max-width: 560px) {
  .email-fields div,
  .email-finding {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
`;var M=Object.freeze({emailTabs:"Message views",emailSummary:"Summary",emailPath:"Path",emailBody:"Body",emailLinks:"Links ({count})",emailAttachments:"Attachments ({count})",emailHeaders:"Headers ({count})",emailFrom:"From",emailTo:"To",emailCc:"Cc",emailReplyTo:"Reply-To",emailReturnPath:"Return-Path",emailSubject:"Subject",emailDate:"Date",emailMessageId:"Message-ID",emailAuth:"Authentication",emailFindings:"Findings",emailNoFindings:"Nothing suspicious found in the headers, links and attachments.",emailNotRun:"Read only: links are not opened, images are not loaded, attachments are not opened.",emailInvalid:"No message headers found. Paste a raw message (.eml), headers first.",emailHop:"Hop",emailHopFrom:"From",emailHopBy:"By",emailHopWith:"With",emailHopIp:"IP",emailHopTime:"Time",emailHopDelay:"Delay",emailNoHops:"No Received header.",emailFromHtml:"Shown as text from the HTML part: nothing in it is rendered or loaded.",emailNoBody:"No text body.",emailLinkText:"Text",emailLinkUrl:"Opens",emailDeceptive:"Deceptive",emailNoLinks:"No link.",emailName:"Name",emailType:"Type",emailSize:"Size",emailSha256:"SHA-256",emailRisky:"Risky",emailNoAttachments:"No attachment.",emailHeaderName:"Name",emailHeaderValue:"Value",emailCopyHeaders:"Copy headers",emailLevel_bad:"Problem",emailLevel_warn:"Warning",emailLevel_info:"Note",email_authFail:"{method} {result}: the message is not authenticated for its sender.",email_authWeak:"{method} {result}: the sender is not confirmed.",email_authMissing:"No Authentication-Results header: the checks of the receiving server are unknown.",email_displaySpoof:"The sender name shows {shown}, but the message comes from {address}.",email_replyTo:"Replies go to {address}, another domain than the sender.",email_returnPath:"Bounces go to {address}, another domain than the sender (common with mailing services).",email_deceptiveLinks:"Deceptive links: {count}. Their text shows one site, but they open another.",email_riskyAttachment:"Attachment {name} can run code.",email_doubleExtension:"Attachment {name} hides its real type behind a double extension.",email_remoteImages:"Remote images: {count}. Opening the message in a mail client would tell the sender it was read."}),W={emailTabs:"Vues du message",emailSummary:"R\xE9sum\xE9",emailPath:"Parcours",emailBody:"Corps",emailLinks:"Liens ({count})",emailAttachments:"Pi\xE8ces jointes ({count})",emailHeaders:"En-t\xEAtes ({count})",emailFrom:"De",emailTo:"\xC0",emailReplyTo:"R\xE9pondre \xE0",emailSubject:"Objet",emailAuth:"Authentification",emailFindings:"R\xE9sultats",emailNoFindings:"Rien de suspect dans les en-t\xEAtes, les liens et les pi\xE8ces jointes.",emailNotRun:"Lecture seule : les liens ne sont pas ouverts, les images pas charg\xE9es, les pi\xE8ces jointes pas ouvertes.",emailInvalid:"Aucun en-t\xEAte de message. Collez un message brut (.eml), en-t\xEAtes d\u2019abord.",emailHop:"\xC9tape",emailHopFrom:"De",emailHopBy:"Par",emailHopWith:"Avec",emailHopTime:"Heure",emailHopDelay:"D\xE9lai",emailNoHops:"Aucun en-t\xEAte Received.",emailFromHtml:"Affich\xE9 en texte depuis la partie HTML : rien n\u2019y est rendu ni charg\xE9.",emailNoBody:"Pas de corps texte.",emailLinkText:"Texte",emailLinkUrl:"Ouvre",emailDeceptive:"Trompeur",emailNoLinks:"Aucun lien.",emailName:"Nom",emailSize:"Taille",emailRisky:"Risqu\xE9",emailNoAttachments:"Aucune pi\xE8ce jointe.",emailHeaderName:"Nom",emailHeaderValue:"Valeur",emailCopyHeaders:"Copier les en-t\xEAtes",emailLevel_bad:"Probl\xE8me",emailLevel_warn:"Avertissement",emailLevel_info:"Remarque",email_authFail:"{method} {result} : le message n\u2019est pas authentifi\xE9 pour son exp\xE9diteur.",email_authWeak:"{method} {result} : l\u2019exp\xE9diteur n\u2019est pas confirm\xE9.",email_authMissing:"Pas d\u2019en-t\xEAte Authentication-Results : les v\xE9rifications du serveur de r\xE9ception sont inconnues.",email_displaySpoof:"Le nom de l\u2019exp\xE9diteur affiche {shown}, mais le message vient de {address}.",email_replyTo:"Les r\xE9ponses partent vers {address}, un autre domaine que l\u2019exp\xE9diteur.",email_returnPath:"Les retours partent vers {address}, un autre domaine que l\u2019exp\xE9diteur (courant avec les services d\u2019envoi).",email_deceptiveLinks:"Liens trompeurs : {count}. Leur texte affiche un site, mais ils en ouvrent un autre.",email_riskyAttachment:"La pi\xE8ce jointe {name} peut ex\xE9cuter du code.",email_doubleExtension:"La pi\xE8ce jointe {name} cache son vrai type derri\xE8re une double extension.",email_remoteImages:"Images distantes : {count}. Ouvrir le message dans un client de messagerie signalerait la lecture \xE0 l\u2019exp\xE9diteur."};var se=1e3,re=200,ne=10,U=1e3,le=new Set(["exe","scr","com","pif","bat","cmd","ps1","vbs","vbe","js","jse","wsf","wsh","hta","lnk","msi","msp","jar","iso","img","vhd","vhdx","one","html","htm","svg","xll","docm","xlsm","pptm","dotm","xlam","cpl","reg","chm","appx","msix","apk","dll"]);function S(s,e){try{return new TextDecoder(e||"utf-8").decode(s)}catch{return new TextDecoder("utf-8").decode(s)}}function X(s){let e=new Uint8Array(s.length);for(let t=0;t<s.length;t++)e[t]=s.charCodeAt(t)&255;return e}function G(s){let e=s.replace(/[^A-Za-z0-9+/]/g,"");try{let t=e.length%4===1?e.slice(0,-1):e;return X(atob(t.padEnd(Math.ceil(t.length/4)*4,"=")))}catch{return new Uint8Array(0)}}function K(s,e=!1){let t=(e?s.replace(/_/g," "):s).replace(/=\r?\n/g,""),i=[];for(let a=0;a<t.length;a++){let r=t[a];if(r==="="&&/^[0-9A-Fa-f]{2}$/.test(t.slice(a+1,a+3)))i.push(parseInt(t.slice(a+1,a+3),16)),a+=2;else{let o=t.charCodeAt(a);o<128?i.push(o):i.push(...new TextEncoder().encode(r))}}return Uint8Array.from(i)}function w(s){return s.replace(/(=\?[^?\s]{1,40}\?[BbQq]\?[^?\s]{0,2000}\?=)\s+(?==\?)/g,"$1").replace(/=\?([^?\s]{1,40})\?([BbQq])\?([^?\s]{0,2000})\?=/g,(e,t,i,a)=>{let r=i.toUpperCase()==="B"?G(a):K(a,!0);return S(r,String(t).replace(/\*.*$/,""))})}function H(s){let e=/\r?\n\r?\n/.exec(s),t=e?s.slice(0,e.index):s,i=e?s.slice(e.index+e[0].length):"",a=[];for(let r of t.split(/\r?\n/))if(/^[ \t]/.test(r)&&a.length)a[a.length-1].value+=` ${r.trim()}`;else{let o=/^([!-9;-~]{1,100}):[ \t]?(.*)$/.exec(r);o&&a.length<se&&a.push({name:o[1],value:o[2]})}return{headers:a,body:i}}function p(s,e){let t=e.toLowerCase();return s.find(i=>i.name.toLowerCase()===t)?.value??""}function Q(s,e){let t=e.toLowerCase();return s.filter(i=>i.name.toLowerCase()===t).map(i=>i.value)}function x(s){let e=[],t="",i=!1,a=!1;for(let r of s)r==='"'?i=!i:r==="<"&&!i?a=!0:r===">"&&!i&&(a=!1),r===","&&!i&&!a?(e.push(t),t=""):t+=r;return e.push(t),e.map(r=>r.trim()).filter(Boolean).map(r=>{let o=/^(.*?)<([^<>]*)>\s*$/.exec(r);return o?{name:w(o[1].trim().replace(/^"|"$/g,"").replace(/\\(.)/g,"$1")),address:o[2].trim()}:{name:"",address:r.replace(/\s*\(.*\)$/,"")}})}function y(s){let e=s.lastIndexOf("@");return e<0?"":s.slice(e+1).replace(/[>\s]+$/,"").toLowerCase()}function Y(s){let e=Date.parse(s.replace(/\s*\([^)]*\)\s*$/,"").trim());return Number.isFinite(e)?e:null}function oe(s){return Q(s,"received").map(e=>{let t=e.lastIndexOf(";"),i=t<0?e:e.slice(0,t),a=/\[(?:IPv6:)?([0-9a-fA-F:.]{2,45})\]/.exec(i)?.[1]??/\((?:[^()]*\s)?(\d{1,3}(?:\.\d{1,3}){3})\)/.exec(i)?.[1]??"";return{from:/\bfrom\s+(\S+)/i.exec(i)?.[1]??"",by:/\bby\s+(\S+)/i.exec(i)?.[1]??"",with:/\bwith\s+(\S+)/i.exec(i)?.[1]??"",ip:a,date:t<0?null:Y(e.slice(t+1)),raw:e}}).reverse()}function me(s){let e=[];for(let i of Q(s,"authentication-results"))for(let a of i.matchAll(/\b(spf|dkim|dmarc|arc|bimi|auth|iprev|compauth)=([a-z]+)([^;]*)/gi)){let r=a[1].toLowerCase();e.some(o=>o.method===r)||e.push({method:r,result:a[2].toLowerCase(),detail:a[3].trim().slice(0,300)})}let t=p(s,"received-spf");if(t&&!e.some(i=>i.method==="spf")){let i=/^\s*([a-z]+)/i.exec(t);i&&e.push({method:"spf",result:i[1].toLowerCase(),detail:t.slice(i[0].length).trim().slice(0,300)})}return e}function q(s){let[e,...t]=s.split(";"),i=new Map;for(let a of t.join(";").matchAll(/([\w*-]{1,60})\s*=\s*("(?:[^"\\]|\\.)*"|[^;\s]*)/g)){let r=a[2].replace(/^"|"$/g,""),o=a[1].toLowerCase();if(o.endsWith("*")){o=o.slice(0,-1);let l=/^([^']*)'[^']*'(.*)$/.exec(r);l&&(r=S(X(de(l[2])),l[1]))}i.has(o)||i.set(o,w(r))}return{value:e.trim().toLowerCase(),params:i}}function de(s){return s.replace(/%([0-9A-Fa-f]{2})/g,(e,t)=>String.fromCharCode(parseInt(t,16)))}function L(s,e,t,i){if(i>ne||t.parts++>re)return;let a=q(p(s,"content-type")||"text/plain"),r=q(p(s,"content-disposition")),o=p(s,"content-transfer-encoding").trim().toLowerCase();if(a.value.startsWith("multipart/")){let g=a.params.get("boundary");if(!g)return;let v=`--${g}`,ae=e.split(/\r?\n/),h=null;for(let u of ae)if(u===v||u===`${v}--`||u.startsWith(v)&&/^--?\s*$/.test(u.slice(v.length))){if(h){let I=H(h.join(`
`));L(I.headers,I.body,t,i+1)}if(u.startsWith(`${v}--`))return;h=[]}else h&&h.push(u);if(h){let u=H(h.join(`
`));L(u.headers,u.body,t,i+1)}return}let l=o==="base64"?G(e):o==="quoted-printable"?K(e):null,c=r.params.get("filename")??a.params.get("name")??"";if(!(r.value==="attachment"||c&&!a.value.startsWith("text/"))&&(a.value==="text/plain"||a.value==="text/html")){let g=l?S(l,a.params.get("charset")??"utf-8"):e;a.value==="text/plain"&&t.plain===null&&(t.plain=g),a.value==="text/html"&&t.html===null&&(t.html=g);return}let d=l??new TextEncoder().encode(e);t.attachments.push({name:c||a.value,type:a.value,size:d.length,bytes:d})}var ce={amp:"&",lt:"<",gt:">",quot:'"',apos:"'",nbsp:" ",copy:"\xA9",reg:"\xAE",hellip:"\u2026",mdash:"\u2014",ndash:"\u2013",rsquo:"\u2019",lsquo:"\u2018",rdquo:"\u201D",ldquo:"\u201C",euro:"\u20AC"};function Z(s){return s.replace(/&(#x[0-9a-f]{1,6}|#\d{1,7}|[a-z]{2,8});/gi,(e,t)=>{if(t[0]==="#"){let i=t[1]==="x"||t[1]==="X"?parseInt(t.slice(2),16):Number(t.slice(1));return i>0&&i<=1114111?String.fromCodePoint(i):e}return ce[t.toLowerCase()]??e})}function pe(s){let e=s.toLowerCase(),t="",i=0,a=/<!--|<(script|style|head|title)\b/g,r;for(;r=a.exec(e);){t+=s.slice(i,r.index);let o=r[0]==="<!--"?"-->":`</${r[1]}`,l=e.indexOf(o,r.index+r[0].length);if(l<0)return t;let c=o==="-->"?l+3:e.indexOf(">",l)+1||e.length;i=c,a.lastIndex=c}return t+s.slice(i)}function J(s){return Z(pe(s).replace(/<br\b[^>]{0,500}>/gi,`
`).replace(/<\/(?:p|div|tr|li|h[1-6]|table|blockquote)\s*>/gi,`
`).replace(/<[^>]{0,5000}>/g,"")).replace(/[ \t\u00a0]+/g," ").replace(/ *\n */g,`
`).replace(/\n{3,}/g,`

`).trim()}function O(s){let e=/^\s*(?:[a-z][a-z0-9+.-]*:\/\/)?(?:[^@/\s]*@)?((?:[a-z0-9-]+\.)+[a-z]{2,24})(?::\d+)?(?:[/?#]\S*)?\s*$/i.exec(s);return e?e[1].toLowerCase():""}function ue(s){let e=[];for(let i of s.matchAll(/<a\b([^>]{0,4000})>([\s\S]{0,4000}?)<\/a\s*>/gi)){if(e.length>=U)break;let a=/\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i.exec(i[1]);if(!a)continue;let r=Z(a[1]??a[2]??a[3]??"").trim(),o=J(i[2]).replace(/\s+/g," ").trim();e.push({text:o,href:r,deceptive:he(o,r)})}let t=[...s.matchAll(/<img\b[^>]{0,4000}?\bsrc\s*=\s*["']?\s*https?:/gi)].length;return{links:e,remoteImages:t}}function he(s,e){let t=O(s),i=O(e);return!t||!i||!/^https?:/i.test(e.trim())?!1:f(t)!==f(i)}function fe(s){let e=[];for(let t of s.matchAll(/\bhttps?:\/\/[^\s<>"')\]]{1,2048}/gi)){if(e.length>=U)break;let i=t[0].replace(/[.,;:!?]+$/,"");e.some(a=>a.href===i)||e.push({text:"",href:i,deceptive:!1})}return e}function ee(s){let{headers:e,body:t}=H(String(s??"").replace(/^\s+/,""));if(!e.length)return null;let i={plain:null,html:null,attachments:[],parts:0};L(e,t,i,0);let a=i.html?ue(i.html):{links:[],remoteImages:0},r=i.plain?fe(i.plain):[],o=a.links.length?a.links:r;return{headers:e.map(l=>({name:l.name,value:w(l.value)})),from:x(p(e,"from")),to:x(p(e,"to")),cc:x(p(e,"cc")),replyTo:x(p(e,"reply-to")),returnPath:p(e,"return-path").replace(/[<>\s]/g,""),subject:w(p(e,"subject")),date:Y(p(e,"date")),messageId:p(e,"message-id").trim(),hops:oe(e),auth:me(e),text:i.plain??(i.html?J(i.html):""),fromHtml:i.plain===null&&i.html!==null,links:o,remoteImages:a.remoteImages,attachments:i.attachments}}function T(s){let e=s.toLowerCase().split(".");return e.length<2?!1:le.has(e[e.length-1])}function C(s){return/\.(?:pdf|docx?|xlsx?|pptx?|txt|jpe?g|png|gif|zip|rtf|csv)\s*\.[a-z0-9]{2,5}$/i.test(s)}function N(s){let e=[];for(let l of s.auth)["spf","dkim","dmarc"].includes(l.method)&&(l.result==="fail"||l.result==="permerror"?e.push({id:"authFail",level:"bad",params:{method:l.method.toUpperCase(),result:l.result}}):["softfail","none","neutral","temperror","policy"].includes(l.result)&&e.push({id:"authWeak",level:"warn",params:{method:l.method.toUpperCase(),result:l.result}}));s.auth.length||e.push({id:"authMissing",level:"info"});let t=s.from[0],i=t?y(t.address):"";if(t){let l=/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/.exec(t.name)?.[0];l&&l.toLowerCase()!==t.address.toLowerCase()&&e.push({id:"displaySpoof",level:"bad",params:{shown:l,address:t.address}})}let a=s.replyTo[0];a&&i&&f(y(a.address))!==f(i)&&e.push({id:"replyTo",level:"warn",params:{address:a.address}}),s.returnPath&&i&&y(s.returnPath)&&f(y(s.returnPath))!==f(i)&&e.push({id:"returnPath",level:"info",params:{address:s.returnPath}});let r=s.links.filter(l=>l.deceptive).length;r&&e.push({id:"deceptiveLinks",level:"bad",params:{count:r}});for(let l of s.attachments)C(l.name)?e.push({id:"doubleExtension",level:"bad",params:{name:l.name}}):T(l.name)&&e.push({id:"riskyAttachment",level:"bad",params:{name:l.name}});s.remoteImages&&e.push({id:"remoteImages",level:"info",params:{count:s.remoteImages}});let o={bad:0,warn:1,info:2};return e.sort((l,c)=>o[l.level]-o[c.level])}D({en:M,fr:W});var ge=["summary","path","body","links","attachments","headers"],ve={bad:"shield-alert",warn:"alert",info:"status-circle"},te=class extends E{static type="email";static componentAttributes=Object.freeze(["view","defang","hashes"]);static presets={simple:{tabs:!0},full:{header:!0,dot:!0,copy:!0,fullscreen:!0,tabs:!0}};static styles=[V];static upgradeProperties=["content"];constructor(){super(),this.panelId=R("panel"),this.viewState=null,this.parsed=null,this.hashCache=new WeakMap,this.pendingHashes=new WeakSet,this.editor=null,this.previewTimer=void 0}get message(){let e=this.text??"";return this.parsed?.text!==e&&(this.parsed={text:e,message:ee(e)}),this.parsed.message}get findings(){let e=this.message;return e?N(e):[]}get view(){return this.viewState??P(this.getAttribute("view"),ge,"summary")}get defanged(){return _(this.getAttribute("defang"))!==!1}safe(e,t){return this.defanged?j(e,t):t}renderContent(e){let t=this.t,i=this.message,a=this.view,r=n("div",{class:"body email-body",part:"body",attrs:{tabindex:"0",role:"region","aria-label":this.heading||t("emailSummary")}}),o=null;i?(o=this.feature("tabs")?z({tabs:[{id:"summary",label:t("emailSummary")},{id:"path",label:t("emailPath")},{id:"body",label:t("emailBody")},{id:"links",label:t("emailLinks",{count:i.links.length})},{id:"attachments",label:t("emailAttachments",{count:i.attachments.length})},{id:"headers",label:t("emailHeaders",{count:i.headers.length})}],selected:a,label:t("emailTabs"),panelId:this.panelId,onSelect:d=>this.selectView(d)}):null,a==="path"?r.append(this.pathView(i)):a==="body"?r.append(this.bodyView(i)):a==="links"?r.append(this.linksView(i)):a==="attachments"?r.append(this.attachmentsView(i)):a==="headers"?r.append(this.headersView(i)):r.append(...this.summaryView(i)),a==="attachments"&&this.computeHashes(i)):r.append(B(t("emailInvalid")));let l=n("div",{class:"panel",attrs:{id:this.panelId,role:o?"tabpanel":null}}),c=[];if(this.editing){let d=this.createEditor();l.classList.add("email-edit"),l.append(n("div",{class:"body editor-body",part:"body source"},d.element),r),c=this.historyButtons(d)}else l.append(r);let m=[...c,this.editToggleButton(),this.fullscreenButton(),this.feature("copy")&&i?this.copyButton(()=>i.headers.map(d=>`${d.name}: ${d.value}`).join(`
`),t("emailCopyHeaders")):null];e.append(...this.chrome({badge:"EML",tabs:o,actions:m}),l),this.editor?.align()}selectView(e){e!==this.view&&(this.viewState=e,this.render(),this.root.querySelector(`[data-tab="${e}"]`)?.focus(),A(this,k.TAB_CHANGE,{tab:e}))}addresses(e){return e.map(t=>t.name?`${t.name} <${this.safe("email",t.address)}>`:this.safe("email",t.address)).join(", ")}summaryView(e){let t=this.t,i=[["emailFrom",this.addresses(e.from)],["emailReplyTo",this.addresses(e.replyTo)],["emailTo",this.addresses(e.to)],["emailCc",this.addresses(e.cc)],["emailSubject",e.subject],["emailDate",e.date===null?"":this.formatDate(e.date)],["emailReturnPath",e.returnPath?this.safe("email",e.returnPath):""],["emailMessageId",e.messageId]],a=n("dl",{class:"email-fields",part:"summary"},...i.filter(([,m])=>m).map(([m,d])=>n("div",{},n("dt",{text:t(m)}),n("dd",{text:d})))),r=e.auth.length?n("div",{class:"email-auth",part:"auth",attrs:{role:"group","aria-label":t("emailAuth")}},...e.auth.map(m=>{let d=m.result==="pass"?"ok":m.result==="fail"||m.result==="permerror"?"bad":"warn";return n("span",{class:`email-auth-item ${d}`,attrs:{title:m.detail}},b(d==="ok"?"check":"alert"),n("span",{text:`${m.method.toUpperCase()} ${m.result}`}))})):null,o=N(e),l=o.length?n("ul",{class:"email-findings",part:"findings",attrs:{"aria-label":t("emailFindings")}},...o.map(m=>n("li",{class:`email-finding ${m.level}`},n("span",{class:"email-level"},b(ve[m.level]),n("span",{text:t(`emailLevel_${m.level}`)})),n("span",{text:t(`email_${m.id}`,this.safeParams(m))})))):n("p",{class:"email-muted",text:t("emailNoFindings")}),c=[a];return r&&c.push(r),c.push(l,n("p",{class:"email-note",text:t("emailNotRun")})),c}safeParams(e){if(!e.params)return;let t={...e.params};for(let i of["address","shown"])typeof t[i]=="string"&&(t[i]=this.safe("email",String(t[i])));return t}pathView(e){let t=this.t;if(!e.hops.length)return n("p",{class:"email-muted",text:t("emailNoHops")});let i=e.hops.map((a,r)=>{let o=r?e.hops[r-1].date:null,l=a.date!==null&&o!==null?Math.round((a.date-o)/1e3):null;return n("tr",{attrs:{title:a.raw}},n("th",{attrs:{scope:"row"},text:String(r+1)}),n("td",{},n("code",{text:a.from})),n("td",{},n("code",{text:a.ip?this.safe(a.ip.includes(":")?"ipv6":"ipv4",a.ip):""})),n("td",{},n("code",{text:a.by})),n("td",{text:a.with}),n("td",{text:a.date===null?"":this.formatDate(a.date)}),n("td",{class:l!==null&&l>300?"email-slow":"",text:l===null?"":`${l} s`}))});return this.table("hops",["emailHop","emailHopFrom","emailHopIp","emailHopBy","emailHopWith","emailHopTime","emailHopDelay"],i)}bodyView(e){let t=this.t;return e.text?n("div",{class:"email-text-box"},e.fromHtml?n("p",{class:"email-note",text:t("emailFromHtml")}):null,n("pre",{class:"email-text",part:"text",text:e.text})):n("p",{class:"email-muted",text:t("emailNoBody")})}linksView(e){let t=this.t;if(!e.links.length)return n("p",{class:"email-muted",text:t("emailNoLinks")});let i=e.links.map(a=>n("tr",{class:a.deceptive?"deceptive":""},n("td",{text:a.text}),n("td",{},n("code",{class:"email-url",text:/^https?:|^ftp:/i.test(a.href)?this.safe("url",a.href):a.href}),a.deceptive?n("span",{class:"email-tag bad"},b("alert"),n("span",{text:t("emailDeceptive")})):null)));return this.table("links",["emailLinkText","emailLinkUrl"],i)}attachmentsView(e){let t=this.t;if(!e.attachments.length)return n("p",{class:"email-muted",text:t("emailNoAttachments")});let i=e.attachments.map(a=>{let r=T(a.name)||C(a.name),o=this.hashCache.get(a);return n("tr",{class:r?"deceptive":""},n("td",{},n("span",{text:a.name}),r?n("span",{class:"email-tag bad"},b("alert"),n("span",{text:t("emailRisky")})):null),n("td",{},n("code",{text:a.type})),n("td",{class:"email-num",text:this.formatSize(a.size)}),n("td",{},n("code",{class:"email-hash",text:o??(o===null?"\u2013":"\u2026")})))});return this.table("attachments",["emailName","emailType","emailSize","emailSha256"],i)}headersView(e){let t=e.headers.map(i=>n("tr",{},n("th",{attrs:{scope:"row"}},n("code",{text:i.name})),n("td",{},n("code",{class:"email-value",text:i.value}))));return this.table("headers",["emailHeaderName","emailHeaderValue"],t)}table(e,t,i){return n("div",{class:"email-scroll"},n("table",{class:"email-table",part:e},n("thead",{},n("tr",{},...t.map(a=>n("th",{attrs:{scope:"col"},text:this.t(a)})))),n("tbody",{},...i)))}computeHashes(e){if(_(this.getAttribute("hashes"))===!1)return;let t=e.attachments.filter(a=>!this.hashCache.has(a)&&!this.pendingHashes.has(a));if(!t.length)return;let i=globalThis.crypto?.subtle;if(!i){for(let a of t)this.hashCache.set(a,null);return}for(let a of t)this.pendingHashes.add(a);Promise.all(t.map(async a=>{try{let r=new Uint8Array(await i.digest("SHA-256",a.bytes.slice()));this.hashCache.set(a,Array.from(r,o=>o.toString(16).padStart(2,"0")).join(""))}catch{this.hashCache.set(a,null)}this.pendingHashes.delete(a)})).then(()=>{this.isConnected&&this.view==="attachments"&&this.parsed?.message===e&&this.render()})}formatSize(e){let t=["B","KB","MB","GB"],i=e,a=0;for(;i>=1024&&a<t.length-1;)i/=1024,a++;return`${a?i.toFixed(1):i} ${t[a]}`}formatDate(e){try{return new Intl.DateTimeFormat(this.locale,{dateStyle:"medium",timeStyle:"medium"}).format(e)}catch{return new Date(e).toISOString()}}createEditor(){return this.editor?.destroy(),this.editor=new F({text:this.text??"",language:"plaintext",lineNumbers:!0,wrap:!1,highlightLimit:$().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>A(this,k.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),300)}};export{te as a};
