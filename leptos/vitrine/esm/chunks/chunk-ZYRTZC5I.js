/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{b as w}from"./chunk-4DG3OOJM.js";import{s as V}from"./chunk-BTEG3GEC.js";import{r as U}from"./chunk-37OSRZJK.js";import{O as v,ba as $,c as D,e as M,o as a,p as z,q as b}from"./chunk-JAZI474S.js";import{h as N,k as T,l as S,m as I}from"./chunk-SCKP2KTO.js";var K=`/*
 * Hashes: what is hashed, the zone to drop a file, the hashes as a table, and the comparison
 * with a fingerprint. Match and mismatch are written in words; colors only repeat them.
 */
.hash-body {
  display: grid;
  gap: var(--_space-3);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.hash-body.dragging {
  outline: 2px dashed var(--_accent);
  outline-offset: -6px;
}

.hash-source,
.hash-zone {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-2);
  margin: 0;
}

.hash-source svg,
.hash-zone svg,
.hash-result svg {
  flex: none;
  width: 16px;
  height: 16px;
}

.hash-name {
  font-weight: 600;
  overflow-wrap: anywhere;
}

.hash-muted {
  color: var(--_fg-muted);
}

.hash-error {
  color: var(--_danger);
  font-weight: 600;
}

.hash-zone {
  padding: var(--_space-2) var(--_space-3);
  border: 1px dashed var(--_border-strong);
  border-radius: var(--_radius-sm);
  color: var(--_fg-muted);
}

.hash-zone .text-btn {
  color: var(--_accent-fg);
}

.hash-note {
  flex-basis: 100%;
  font-size: var(--_font-size-small);
}

.hash-format,
.hash-compare {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-2);
}

.hash-format label,
.hash-compare label {
  font-weight: 600;
}

.hash-format select,
.hash-input {
  min-height: 32px;
  padding: 4px var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  color: var(--_fg);
  font: inherit;
}

.hash-input {
  flex: 1 1 100%;
  min-width: 0;
  font-family: var(--_font-mono);
}

.hash-format select:focus-visible,
.hash-input:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.hash-scroll {
  overflow-x: auto;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.hash-table {
  width: 100%;
  border-collapse: collapse;
}

.hash-table th,
.hash-table td {
  padding: 6px var(--_space-3);
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: middle;
}

.hash-table tr:last-child > * {
  border-bottom: 0;
}

.hash-table th {
  width: 1%;
  font-weight: 600;
  white-space: nowrap;
}

.hash-value {
  font-family: var(--_font-mono);
  overflow-wrap: anywhere;
  word-break: break-all;
}

.hash-copy {
  width: 1%;
  padding-block: 2px;
}

.hash-tag {
  margin-inline-start: var(--_space-2);
  padding: 0 6px;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 500;
}

.hash-result {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  gap: var(--_space-2);
  min-height: 1.5em;
  margin: 0;
  font-weight: 600;
}

.hash-result.match {
  color: var(--_success);
}

.hash-result.mismatch,
.hash-result.invalid {
  color: var(--_danger);
}

.hash-result.unknown {
  color: var(--_fg-muted);
}

.hash-edit > .editor-body {
  max-height: min(30vh, 200px);
  border-bottom: 1px solid var(--_border);
}
`;var R=Object.freeze({hashTextBadge:"Text",hashFile:"File",hashText:"Text, {size} in UTF-8",hashPrompt:"Type or paste a text, or choose a file.",hashPlaceholder:"Text to hash",hashBackToText:"Hash the text instead",hashDrop:"Drop a file here, or",hashChoose:"choose a file",hashDropNow:"Drop the file to hash it",hashFileNote:"The file is read in this page and sent nowhere.",hashTooLarge:"The file is too large ({size}; at most {limit}).",hashReadFailed:"The file could not be read.",hashTable:"Hashes",hashComputing:"Computing\u2026",hashUnavailable:"Needs a secure page (HTTPS)",hashNoCrypto:"This page is not secure (HTTPS or localhost): only MD5 can be computed.",hashWeak:"Weak",hashWeakHint:"Collisions can be made: use it to find a file, not to prove it was not changed.",hashFormat:"Format",hashFormat_hex:"Hexadecimal",hashFormat_upper:"Hexadecimal, upper case",hashFormat_base64:"Base64",hashFormat_sri:"Subresource Integrity",hashCompare:"Compare with a fingerprint",hashComparePlaceholder:"A hash, an SRI value or a sha256sum line",hashMatch:"Matches the {algorithm}.",hashMismatch:"Does not match the {algorithm}: the content is different.",hashInvalid:"Not a fingerprint: paste a hash in hexadecimal or base64.",hashUnknown:"A {algorithm} fingerprint, which is not computed here.",hashCopyOne:"Copy the {algorithm}",hashCopyAll:"Copy all"}),L={hashTextBadge:"Texte",hashFile:"Fichier",hashText:"Texte, {size} en UTF-8",hashPrompt:"Saisissez ou collez un texte, ou choisissez un fichier.",hashPlaceholder:"Texte \xE0 hacher",hashBackToText:"Hacher le texte \xE0 la place",hashDrop:"D\xE9posez un fichier ici, ou",hashChoose:"choisissez un fichier",hashDropNow:"D\xE9posez le fichier pour le hacher",hashFileNote:"Le fichier est lu dans cette page et n\u2019est envoy\xE9 nulle part.",hashTooLarge:"Le fichier est trop gros ({size} ; au plus {limit}).",hashReadFailed:"Le fichier n\u2019a pas pu \xEAtre lu.",hashTable:"Empreintes",hashComputing:"Calcul\u2026",hashUnavailable:"Demande une page s\xE9curis\xE9e (HTTPS)",hashNoCrypto:"Cette page n\u2019est pas s\xE9curis\xE9e (HTTPS ou localhost) : seul MD5 peut \xEAtre calcul\xE9.",hashWeak:"Faible",hashWeakHint:"Des collisions peuvent \xEAtre cr\xE9\xE9es : pour retrouver un fichier, pas pour prouver qu\u2019il n\u2019a pas \xE9t\xE9 modifi\xE9.",hashFormat:"Format",hashFormat_hex:"Hexad\xE9cimal",hashFormat_upper:"Hexad\xE9cimal, majuscules",hashFormat_base64:"Base64",hashFormat_sri:"Subresource Integrity",hashCompare:"Comparer avec une empreinte",hashComparePlaceholder:"Une empreinte, une valeur SRI ou une ligne sha256sum",hashMatch:"Correspond au {algorithm}.",hashMismatch:"Ne correspond pas au {algorithm} : le contenu est diff\xE9rent.",hashInvalid:"Ce n\u2019est pas une empreinte : collez une empreinte en hexad\xE9cimal ou en base64.",hashUnknown:"Une empreinte {algorithm}, qui n\u2019est pas calcul\xE9e ici.",hashCopyOne:"Copier le {algorithm}",hashCopyAll:"Tout copier"};var A=Object.freeze(["md5","sha1","sha256","sha384","sha512"]),_=Object.freeze({md5:"MD5",sha1:"SHA-1",sha256:"SHA-256",sha384:"SHA-384",sha512:"SHA-512"}),O={md5:16,sha1:20,sha256:32,sha384:48,sha512:64},W=new Set(["md5","sha1"]),ee=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21],te=Array.from({length:64},(r,e)=>Math.floor(Math.abs(Math.sin(e+1))*2**32)>>>0);function se(r){let e=r.length,t=(e+8>>>6)+1,s=new Uint32Array(t*16);for(let c=0;c<e;c++)s[c>>2]|=r[c]<<c%4*8;s[e>>2]|=128<<e%4*8;let h=e*8;s[t*16-2]=h>>>0,s[t*16-1]=Math.floor(h/2**32);let i=1732584193,n=4023233417,o=2562383102,l=271733878;for(let c=0;c<t;c++){let H=c*16,f=i,p=n,g=o,m=l;for(let u=0;u<64;u++){let x,y;u<16?(x=p&g|~p&m,y=u):u<32?(x=m&p|~m&g,y=(5*u+1)%16):u<48?(x=p^g^m,y=(3*u+5)%16):(x=g^(p|~m),y=7*u%16);let E=f+x+te[u]+s[H+y]>>>0,B=ee[(u>>4)*4+u%4];f=m,m=g,g=p,p=p+(E<<B|E>>>32-B)>>>0}i=i+f>>>0,n=n+p>>>0,o=o+g>>>0,l=l+m>>>0}let d=new Uint8Array(16);return[i,n,o,l].forEach((c,H)=>{for(let f=0;f<4;f++)d[H*4+f]=c>>>f*8&255}),d}var ae={sha1:"SHA-1",sha256:"SHA-256",sha384:"SHA-384",sha512:"SHA-512"};function F(){return!!globalThis.crypto?.subtle}async function re(r,e){if(r==="md5")return se(e);if(!F())return null;let t=await crypto.subtle.digest(ae[r],e.slice());return new Uint8Array(t)}async function q(r,e){let t={};for(let s of e)t[s]=await re(s,r);return t}function C(r){return Array.from(r,e=>e.toString(16).padStart(2,"0")).join("")}function P(r){let e="";for(let t of r)e+=String.fromCharCode(t);return btoa(e)}function k(r,e,t){return t==="upper"?C(e).toUpperCase():t==="base64"?P(e):t==="sri"?`${r}-${P(e)}`:C(e)}function ie(r){try{let e=atob(r.replace(/-/g,"+").replace(/_/g,"/"));return Uint8Array.from(e,t=>t.charCodeAt(0))}catch{return null}}function he(r){let e=new Uint8Array(r.length/2);for(let t=0;t<e.length;t++)e[t]=parseInt(r.slice(t*2,t*2+2),16);return e}function j(r){return A.filter(e=>O[e]===r)}function oe(r){let e=r.trim().slice(0,1e3);if(!e)return null;let t=null,s=/^(MD5|SHA1|SHA-?256|SHA-?384|SHA-?512)\s*\([^)]*\)\s*=\s*(\S+)$/i.exec(e),h=/^(md5|sha-?1|sha-?256|sha-?384|sha-?512)[-:](\S+)$/i.exec(e);if(s||h){let l=s??h;t=l[1].toLowerCase().replace("-",""),e=l[2]}else e=/^([0-9a-f]{32,128})\s+\*?\S/i.exec(e)?.[1]??e;let i=e.replace(/[\s:]/g,""),n=null;if(/^[0-9a-f]+$/i.test(i)&&i.length%2===0&&j(i.length/2).length?n=he(i):/^[A-Za-z0-9+/_-]+={0,2}$/.test(e)&&(n=ie(e)),!n)return null;let o=t?[t]:j(n.length);return!o.length||t&&O[t]!==n.length?null:{bytes:n,algorithms:o}}function ne(r,e){if(r.length!==e.length)return!1;let t=0;for(let s=0;s<r.length;s++)t|=r[s]^e[s];return t===0}function G(r,e){if(!r.trim())return{state:"empty"};let t=oe(r);if(!t)return{state:"invalid"};for(let h of t.algorithms){let i=e[h];if(i&&ne(i,t.bytes))return{state:"match",algorithm:h}}let s=t.algorithms.find(h=>e[h]);return s?{state:"mismatch",algorithm:s}:{state:"unknown",algorithm:t.algorithms[0]}}function Z(r){if(!r?.trim())return[...A];let e=r.toLowerCase().split(/[\s,]+/).map(s=>s.replace("-","")),t=A.filter(s=>e.includes(s));return t.length?t:[...A]}I({en:R,fr:L});var X=256*1024*1024,Y=Object.freeze(["hex","upper","base64","sri"]),J=class extends ${static type="hash";static componentAttributes=Object.freeze(["algorithms","format","expected","file","compare"]);static presets={simple:{"edit-toggle":!0},full:{header:!0,dot:!0,copy:!0,fullscreen:!0,"edit-toggle":!0}};static styles=[K];static allowEmpty=!0;static dataAttributes=Object.freeze(["expected","algorithms"]);static fromData=V;static upgradeProperties=["content","file"];constructor(){super(),this.panelId=b("panel"),this.ids={compare:b("compare"),result:b("result"),format:b("format")},this._file=null,this.fileBytes=null,this.fileError="",this.digests=null,this.digestKey=null,this.pendingKey=null,this.expectedState=null,this.formatState=null,this.dragging=0,this.fileId=0,this.lastVerify="",this.resultsHost=null,this.verifyHost=null,this.editor=null,this.hashTimer=void 0}get file(){return this._file}set file(e){this.setFile(e instanceof Blob?e:null)}get hashes(){if(!this.digests)return null;let e={};for(let[t,s]of Object.entries(this.digests))s&&(e[t]=C(s));return e}get algorithms(){return Z(this.getAttribute("algorithms"))}get format(){return this.formatState??M(this.getAttribute("format"),Y,"hex")}get expected(){return this.expectedState??this.getAttribute("expected")??""}flag(e,t){return D(this.getAttribute(e))??t}source(){let e=this.algorithms.join();if(this._file)return{key:`file:${this.fileId}:${e}`,bytes:this.fileBytes};let t=this.text??"";return{key:`text:${e}\0${t}`,bytes:new TextEncoder().encode(t)}}async setFile(e){if(this.fileId+=1,this._file=e,this.fileBytes=null,this.fileError="",this.digests=null,this.digestKey=null,e&&e.size>X&&(this.fileError=this.t("hashTooLarge",{size:w(e.size,this.locale),limit:w(X,this.locale)}),this._file=null),this.requestRender(),!this._file)return;let t=this._file;try{let s=new Uint8Array(await t.arrayBuffer());if(this._file!==t)return;this.fileBytes=s}catch{if(this._file!==t)return;this.fileError=this.t("hashReadFailed"),this._file=null}this.requestRender()}computeIfNeeded(){let{key:e,bytes:t}=this.source();if(!t||e===this.digestKey||e===this.pendingKey)return;this.pendingKey=e;let s=this.algorithms;q(t,s).then(h=>{if(this.pendingKey!==e)return;this.pendingKey=null,this.digests=h,this.digestKey=e,this.refreshResults();let i=this._file;S(this,T.HASH,{source:i?"file":"text",name:i?.name??"",size:t.length,hashes:this.hashes})},()=>{this.pendingKey===e&&(this.pendingKey=null)})}renderContent(e){let t=this.t,s=a("div",{class:`body hash-body${this.dragging?" dragging":""}`,part:"body",on:this.flag("file",!0)?this.dropHandlers():{}});this.resultsHost=a("div",{class:"hash-results",attrs:{"aria-live":"polite"}}),this.verifyHost=a("p",{class:"hash-result",part:"result",attrs:{id:this.ids.result,"aria-live":"polite"}}),z(s,[this.sourceView(),this.flag("file",!0)?this.zoneView():null,this.formatView(),this.resultsHost,this.flag("compare",!0)?this.compareView():null]),this.refreshResults();let h=a("div",{class:"panel",attrs:{id:this.panelId}}),i=[];if(this.editing&&!this._file){let o=this.createEditor();h.classList.add("hash-edit"),h.append(a("div",{class:"body editor-body",part:"body source-text"},o.element),s),i=this.historyButtons(o)}else h.append(s);let n=[...i,this._file?null:this.editToggleButton(),this.fullscreenButton(),this.feature("copy")?this.copyTextButton(()=>this.allText(),t("hashCopyAll"),"copy-all"):null];e.append(...this.chrome({badge:this._file?t("hashFile"):t("hashTextBadge"),actions:n}),h),this.editor?.align(),this.computeIfNeeded()}dropHandlers(){let e=t=>[...t.dataTransfer?.types??[]].includes("Files");return{dragenter:t=>{e(t)&&(this.dragging+=1,this.dragging===1&&this.render())},dragover:t=>{e(t)&&t.preventDefault()},dragleave:()=>{this.dragging&&(this.dragging-=1,this.dragging||this.render())},drop:t=>{t.preventDefault(),this.dragging=0;let s=t.dataTransfer?.files?.[0];s?this.setFile(s):this.render()}}}sourceView(){let e=this.t,t=this._file;if(t)return a("div",{class:"hash-source",part:"source"},v("file"),a("span",{class:"hash-name",text:t.name||e("hashFile")}),a("span",{class:"hash-muted",text:[w(t.size,this.locale),t.type].filter(Boolean).join(" \xB7 ")}),a("button",{class:"text-btn",text:e("hashBackToText"),attrs:{type:"button","data-focus-key":"back"},on:{click:()=>this.setFile(null)}}));let s=new TextEncoder().encode(this.text??"").length;return a("div",{class:"hash-source",part:"source"},v("file-text"),a("span",{text:this.text?e("hashText",{size:w(s,this.locale)}):e("hashPrompt")}),this.fileError?a("span",{class:"hash-error",attrs:{role:"alert"},text:this.fileError}):null)}zoneView(){let e=this.t,t=a("input",{class:"sr-only",attrs:{type:"file",tabindex:"-1","aria-hidden":"true"},on:{change:()=>{let s=t.files?.[0];s&&this.setFile(s),t.value=""}}});return a("div",{class:"hash-zone",part:"zone"},t,v("upload"),a("span",{text:this.dragging?e("hashDropNow"):`${e("hashDrop")} `}),this.dragging?null:a("button",{class:"text-btn",text:e("hashChoose"),attrs:{type:"button","data-focus-key":"choose"},on:{click:()=>t.click()}}),a("span",{class:"hash-muted hash-note",text:e("hashFileNote")}))}formatView(){let e=this.t,t=a("select",{attrs:{id:this.ids.format,"data-focus-key":"format"},on:{change:()=>{this.formatState=t.value,this.refreshResults()}}},...Y.map(s=>a("option",{text:e(`hashFormat_${s}`),attrs:{value:s,selected:s===this.format}})));return a("div",{class:"hash-format"},a("label",{attrs:{for:this.ids.format},text:e("hashFormat")}),t)}compareView(){let e=this.t,t=a("input",{class:"hash-input",attrs:{id:this.ids.compare,type:"text",value:this.expected,spellcheck:"false",autocomplete:"off",placeholder:e("hashComparePlaceholder"),"aria-describedby":this.ids.result,"data-focus-key":"compare"},on:{input:()=>{this.expectedState=t.value,this.refreshVerify(!0)}}});return a("div",{class:"hash-compare",part:"compare"},a("label",{attrs:{for:this.ids.compare},text:e("hashCompare")}),t,this.verifyHost)}refreshResults(){let e=this.resultsHost;if(!e)return;let t=this.t,{bytes:s}=this.source();if(!s||!this._file&&!this.text&&!this.editing){e.replaceChildren(),this.refreshVerify(!1);return}let h=this.digestKey===this.source().key?this.digests:null,i=this.format,n=this.algorithms.map(o=>{let l=h?.[o],d=l?k(o,l,i):"",c=h&&!l;return a("tr",{attrs:{"data-algorithm":o}},a("th",{attrs:{scope:"row"}},a("span",{text:_[o]}),W.has(o)?a("span",{class:"hash-tag",attrs:{title:t("hashWeakHint")},text:t("hashWeak")}):null),a("td",{},a("code",{class:"hash-value",part:"value",text:d||t(c?"hashUnavailable":"hashComputing")})),a("td",{class:"hash-copy"},d?this.copyButton(()=>d,t("hashCopyOne",{algorithm:_[o]}),`copy-${o}`):null))});e.replaceChildren(),z(e,[a("div",{class:"hash-scroll"},a("table",{class:"hash-table",part:"hashes",attrs:{"aria-label":t("hashTable")}},a("tbody",{},...n))),F()?null:a("p",{class:"hash-muted",text:t("hashNoCrypto")})]),this.refreshVerify(!1)}refreshVerify(e){let t=this.verifyHost;if(!t)return;let s=this.t,h=this.digests&&this.digestKey===this.source().key?this.digests:null,i=G(this.expected,h??{});t.className=`hash-result ${i.state}`;let n=i.algorithm?_[i.algorithm]:"",o={match:["check","hashMatch"],mismatch:["alert","hashMismatch"],invalid:["alert","hashInvalid"],unknown:["help","hashUnknown"]},l=h||i.state==="invalid"?o[i.state]:void 0;t.replaceChildren(...l?[v(l[0]),a("span",{text:s(l[1],{algorithm:n})})]:[]);let d=l?`${i.state}:${i.algorithm}:${this.expected}`:"";l&&(e||d!==this.lastVerify)&&S(this,T.VERIFY,{state:i.state,algorithm:i.algorithm??null}),this.lastVerify=d}allText(){let e=this._file?.name||"-",t=this.digests??{};return this.algorithms.filter(s=>t[s]).map(s=>`${_[s].replace("-","")} (${e}) = ${k(s,t[s],this.format)}`).join(`
`)}createEditor(){return this.editor?.destroy(),this.editor=new U({text:this.text??"",language:"plaintext",lineNumbers:!1,wrap:!0,highlightLimit:N().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??this.t("hashPlaceholder"),onInput:e=>this.edited(e),onChange:e=>S(this,T.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.hashTimer),this.hashTimer=setTimeout(()=>{this.root.querySelector('[part="source"]')?.replaceWith(this.sourceView()),this.refreshResults(),this.computeIfNeeded()},150)}};export{J as a};
