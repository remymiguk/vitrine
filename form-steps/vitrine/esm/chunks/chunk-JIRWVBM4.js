/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as w,b as m,c as A,d as D,e as F,f as q,g as M,h as O}from"./chunk-4DG3OOJM.js";import{a as k}from"./chunk-G2RRJ7JC.js";import{a as S}from"./chunk-XAGSOQAU.js";import{a as E}from"./chunk-7IWBQ3AS.js";import{B as z,O as f,c as b,d as _,o as a,q as h,s as v,t as y}from"./chunk-S3QITEAU.js";import{k as u,l as p,m as R}from"./chunk-YO2QXVHP.js";var L=`/*
 * Upload: the label (from field.css), a zone where files are dropped, and the list of files
 * with their thumbnail, size, state and progress.
 */
:host {
  margin-block: var(--vt-margin, 0 var(--_space-4));
}

.vt {
  overflow: visible;
  background: transparent;
  border: 0;
  border-radius: 0;
}

:host([theme]:not([theme='auto'])) .vt {
  padding: var(--_space-2);
  background: var(--_surface);
  border-radius: var(--_radius-sm);
}

/* ---------- Zone ---------- */

.upload-zone {
  display: grid;
  justify-items: center;
  gap: var(--_space-1);
  padding: var(--_space-5, 24px) var(--_space-4);
  border: 2px dashed var(--_border-strong);
  border-radius: var(--_radius);
  background: var(--_surface);
  color: var(--_fg);
  text-align: center;
  cursor: pointer;
  transition:
    border-color 0.15s,
    background-color 0.15s;
}

.upload-zone:hover,
.upload-zone:focus-within {
  border-color: var(--_accent);
}

.upload-zone.dragging {
  border-style: solid;
  border-color: var(--_accent);
  background: linear-gradient(var(--_accent-soft), var(--_accent-soft)), var(--_surface);
}

.upload-zone.invalid {
  border-color: var(--_danger);
}

.disabled .upload-zone {
  cursor: default;
  opacity: 0.6;
}

.upload-icon {
  display: inline-grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: var(--_radius-full);
  background: var(--_accent-soft);
  color: var(--_accent-fg);
}

.upload-icon .icon {
  width: 20px;
  height: 20px;
}

.upload-prompt {
  margin: 0;
}

.upload-browse {
  padding: 0;
  border: 0;
  background: none;
  color: var(--_accent-fg);
  font: inherit;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
}

.upload-browse:focus-visible {
  border-radius: 2px;
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.upload-browse:disabled {
  cursor: default;
}

.upload-rules {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

/* ---------- Files ---------- */

.upload-list,
.upload-refused {
  display: grid;
  gap: var(--_space-2);
  margin: var(--_space-1) 0 0;
  padding: 0;
  list-style: none;
}

.upload-file {
  display: flex;
  align-items: center;
  gap: var(--_space-3);
  min-width: 0;
  padding: var(--_space-2);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
}

.upload-file.error {
  border-color: var(--_danger);
}

.upload-thumb {
  display: inline-grid;
  flex: none;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  color: var(--_fg-muted);
  object-fit: cover;
}

.upload-thumb .icon {
  width: 20px;
  height: 20px;
}

.upload-info {
  display: grid;
  flex: 1;
  gap: 2px;
  min-width: 0;
}

.upload-name {
  overflow: hidden;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.upload-meta {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
}

.upload-file.done .upload-state {
  color: var(--_accent-fg);
}

.upload-file.error .upload-state {
  color: var(--_danger);
}

.upload-progress {
  display: block;
  height: 4px;
  overflow: hidden;
  border-radius: var(--_radius-full);
  background: var(--_surface-sunken);
}

.upload-bar {
  display: block;
  width: 0;
  height: 100%;
  background: var(--_accent);
  transition: width 0.2s;
}

.upload-refused li {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  padding: var(--_space-1) var(--_space-2);
  border-left: 3px solid var(--_danger);
  border-radius: var(--_radius-sm);
  background: var(--_surface-raised);
  color: var(--_fg);
  font-size: var(--_font-size-ui);
}

.upload-refused li > .icon {
  flex: none;
  width: 16px;
  height: 16px;
  color: var(--_danger);
}

.upload-refused li > span {
  flex: 1;
  overflow-wrap: anywhere;
}

@media (prefers-reduced-motion: reduce) {
  .upload-zone,
  .upload-bar {
    transition: none;
  }
}
`;var j=Object.freeze({uploadRequired:"required",uploadDrop:"Drag and drop files here, or",uploadDropOne:"Drag and drop a file here, or",uploadBrowse:"choose files",uploadBrowseOne:"choose a file",uploadDropNow:"Drop to add",uploadTypes:"{types}",uploadMaxSize:"up to {size}",uploadMaxFiles:"{count} files at most",uploadRemove:"Remove {name}",uploadRetry:"Try again",uploadCancel:"Cancel the upload of {name}",uploadWaiting:"Waiting",uploadUploading:"Uploading\u2026 {percent}%",uploadDone:"Uploaded",uploadFailed:"Upload failed",uploadAdded:"{name} added.",uploadRemoved:"{name} removed.",uploadRefused:"{name} was not added: {reason}",uploadReason_type:"this type of file is not accepted.",uploadReason_tooLarge:"it is larger than {size}.",uploadReason_tooSmall:"it is smaller than {size}.",uploadReason_empty:"it is empty.",uploadReason_tooMany:"only {count} files can be added.",uploadReason_refused:"it was refused.",uploadDismiss:"Dismiss",uploadFileCount:"{count} files",uploadValueMissing:"Add a file.",uploadPending:"Wait until the files are uploaded.",uploadHasErrors:"A file could not be uploaded: try again or remove it."}),U=Object.freeze({uploadRequired:"obligatoire",uploadDrop:"Glissez-d\xE9posez des fichiers ici, ou",uploadDropOne:"Glissez-d\xE9posez un fichier ici, ou",uploadBrowse:"choisissez des fichiers",uploadBrowseOne:"choisissez un fichier",uploadDropNow:"D\xE9posez pour ajouter",uploadTypes:"{types}",uploadMaxSize:"jusqu\u2019\xE0 {size}",uploadMaxFiles:"{count} fichiers au plus",uploadRemove:"Retirer {name}",uploadRetry:"R\xE9essayer",uploadCancel:"Annuler l\u2019envoi de {name}",uploadWaiting:"En attente",uploadUploading:"Envoi\u2026 {percent} %",uploadDone:"Envoy\xE9",uploadFailed:"\xC9chec de l\u2019envoi",uploadAdded:"{name} ajout\xE9.",uploadRemoved:"{name} retir\xE9.",uploadRefused:"{name} n\u2019a pas \xE9t\xE9 ajout\xE9 : {reason}",uploadReason_type:"ce type de fichier n\u2019est pas accept\xE9.",uploadReason_tooLarge:"il d\xE9passe {size}.",uploadReason_tooSmall:"il fait moins de {size}.",uploadReason_empty:"il est vide.",uploadReason_tooMany:"seuls {count} fichiers peuvent \xEAtre ajout\xE9s.",uploadReason_refused:"il a \xE9t\xE9 refus\xE9.",uploadDismiss:"Fermer",uploadFileCount:"{count} fichiers",uploadValueMissing:"Ajoutez un fichier.",uploadPending:"Attendez la fin de l\u2019envoi des fichiers.",uploadHasErrors:"Un fichier n\u2019a pas pu \xEAtre envoy\xE9 : r\xE9essayez ou retirez-le."});R({en:j,fr:U});var x=200,C={label:"label",hint:"hint",name:"name",required:"required",accept:"accept",multiple:"multiple",maxFiles:"max-files",maxSize:"max-size",minSize:"min-size",uploadUrl:"upload-url",uploadField:"upload-field",uploadMethod:"upload-method",withCredentials:"with-credentials",previews:"previews"},P=class extends E{static type="upload";static formAssociated=!0;static allowEmpty=!0;static componentAttributes=Object.freeze(["name","hint","required","disabled","accept","multiple","max-files","max-size","min-size","upload-url","upload-field","upload-method","with-credentials","previews"]);static dataAttributes=Object.freeze([...new Set(Object.values(C))]);static presets={simple:{},full:{}};static styles=[S,k,L];static fromData(e){if(!z(e))return{content:""};let s={};for(let[t,i]of Object.entries(C)){if(!Object.hasOwn(e,t))continue;let r=e[t];s[i]=Array.isArray(r)?r.join(","):r}return{content:"",attributes:s}}constructor(){super(),this.internals=typeof this.attachInternals=="function"?this.attachInternals():null,this.ids={label:h("label"),input:h("files"),hint:h("hint"),error:h("error"),rules:h("rules"),browse:h("browse")},this.entries=[],this.refused=[],this.dragging=0,this.showErrors=!1,this.formDisabled=!1,this.customMessage="",this.addEventListener("invalid",e=>{e.preventDefault(),this.showErrors=!0,this.refreshState(),this.form?.querySelector(":invalid")===this&&this.focus()})}has(e){return b(this.getAttribute(e))===!0}get disabled(){return this.formDisabled||this.has("disabled")}get multiple(){return this.has("multiple")}get maxFiles(){return this.multiple?_(this.getAttribute("max-files"),{min:1,max:x,fallback:x}):1}get rules(){return{accept:A(this.getAttribute("accept")),maxSize:w(this.getAttribute("max-size")),minSize:w(this.getAttribute("min-size"))}}get uploadUrl(){let e=(this.getAttribute("upload-url")??"").trim();if(!e||!v(e))return"";try{let s=new URL(e,document.baseURI);return s.protocol!=="https:"&&s.protocol!=="http:"||!y(s.href)&&!this.has("allow-remote")?"":s.href}catch{return""}}get files(){return this.entries.map(e=>e.file)}get form(){return this.internals?.form??null}get validity(){return this.internals?.validity}get validationMessage(){return this.internals?.validationMessage??""}checkValidity(){return this.internals?.checkValidity()??!0}reportValidity(){return this.showErrors=!0,this.refreshState(),this.internals?.reportValidity()??!0}setCustomValidity(e){this.customMessage=String(e??""),this.customMessage&&(this.showErrors=!0),this.refreshState()}focus(e){this.root.querySelector('[data-focus-key="browse"]')?.focus(e)}formResetCallback(){for(let e of this.entries)e.request?.abort();this.entries=[],this.refused=[],this.showErrors=!1,this.customMessage="",this.render()}formDisabledCallback(e){this.formDisabled=e,this.requestRender()}check(){let e=this.t;return this.disabled?{flags:{},message:""}:this.customMessage?{flags:{customError:!0},message:this.customMessage}:this.has("required")&&!this.entries.length?{flags:{valueMissing:!0},message:e("uploadValueMissing")}:this.entries.some(s=>s.status==="uploading"||s.status==="waiting")?{flags:{customError:!0},message:e("uploadPending")}:this.entries.some(s=>s.status==="error")?{flags:{customError:!0},message:e("uploadHasErrors")}:{flags:{},message:""}}refreshState(){let{flags:e,message:s}=this.check();if(this.internals){let r=this.getAttribute("name")??"",n=null;if(!this.disabled&&this.entries.length){n=new FormData;for(let l of this.entries){let d=I(l.response);l.status==="done"&&d?n.append(r,d):n.append(r,l.file,l.file.name)}}this.internals.setFormValue(n);let o=this.root.querySelector('[data-focus-key="browse"]')??void 0;this.internals.setValidity(e,s,Object.keys(e).length?o:void 0)}let t=!!s&&this.showErrors,i=this.root.getElementById(this.ids.error);i&&(i.textContent=t?s:""),this.root.querySelector(".upload-zone")?.classList.toggle("invalid",t)}renderContent(e){let s=this.t,t=this.has("required"),i=this.getAttribute("hint"),r=(this.getAttribute("label")??"").trim().slice(0,300);e.append(a("div",{class:`field upload${this.disabled?" disabled":""}`,part:"body"},r||t?a("div",{class:"field-top"},a("span",{class:"field-label",part:"label",attrs:{id:this.ids.label}},r,t?a("span",{class:"field-required",text:"*",attrs:{"aria-hidden":"true"}}):null,t?a("span",{class:"sr-only",text:` (${s("uploadRequired")})`}):null)):null,this.zone(),i?a("p",{class:"field-hint",part:"hint",text:i,attrs:{id:this.ids.hint}}):null,a("p",{class:"field-error",part:"error",attrs:{id:this.ids.error,"aria-live":"polite"}}),this.refused.length?this.refusedList():null,this.entries.length?this.fileList():null)),this.refreshState(),this.drawProgress()}zone(){let e=this.t,s=!this.multiple,t=this.rules,i=[t.accept.length?e("uploadTypes",{types:F(t.accept).join(", ")}):"",t.maxSize?e("uploadMaxSize",{size:m(t.maxSize,this.locale)}):"",this.multiple&&this.maxFiles<x?e("uploadMaxFiles",{count:this.maxFiles}):""].filter(Boolean),r=a("input",{class:"sr-only",attrs:{id:this.ids.input,type:"file",tabindex:"-1","aria-hidden":"true",accept:t.accept.join(",")||null,multiple:this.multiple,disabled:this.disabled},on:{change:()=>{this.addFiles([...r.files??[]]),r.value=""}}}),n=[i.length?this.ids.rules:"",this.getAttribute("hint")?this.ids.hint:"",this.ids.error].filter(Boolean).join(" ");return a("div",{class:`upload-zone${this.dragging?" dragging":""}`,part:"zone",on:{dragenter:o=>this.dragEnter(o),dragover:o=>{!this.disabled&&$(o)&&o.preventDefault()},dragleave:()=>this.dragLeave(),drop:o=>this.dropped(o),paste:o=>{let d=[...o.clipboardData?.files??[]];d.length&&!this.disabled&&(o.preventDefault(),this.addFiles(d))},click:o=>{(o.target===o.currentTarget||o.target.closest(".upload-prompt, .upload-icon"))&&r.click()}}},r,a("span",{class:"upload-icon"},f("upload")),a("p",{class:"upload-prompt"},a("span",{text:this.dragging?e("uploadDropNow"):`${e(s?"uploadDropOne":"uploadDrop")} `}),this.dragging?null:a("button",{class:"upload-browse",part:"browse",text:e(s?"uploadBrowseOne":"uploadBrowse"),attrs:{type:"button",id:this.ids.browse,disabled:this.disabled,"aria-labelledby":this.getAttribute("label")?`${this.ids.label} ${this.ids.browse}`:null,"aria-describedby":n,"data-focus-key":"browse"},on:{click:o=>{o.stopPropagation(),r.click()}}})),i.length?a("p",{class:"upload-rules",text:i.join(" \xB7 "),attrs:{id:this.ids.rules}}):null)}fileList(){let e=this.t;return a("ul",{class:"upload-list",part:"list",attrs:{"aria-label":this.entries.length===1?this.entries[0].file.name:e("uploadFileCount",{count:this.entries.length})}},...this.entries.map(s=>this.fileView(s)))}fileView(e){let s=this.t,{file:t}=e,i=t.size?Math.min(100,Math.round(e.loaded/t.size*100)):0,r={ready:"",waiting:s("uploadWaiting"),uploading:s("uploadUploading",{percent:i}),done:s("uploadDone"),error:s("uploadFailed")},n=q(t);return a("li",{class:`upload-file ${e.status}`,part:"file",attrs:{"data-file":e.id}},e.preview?a("img",{class:"upload-thumb",part:"thumbnail",attrs:{src:e.preview,alt:""}}):a("span",{class:`upload-thumb kind-${n}`},f(n==="image"?"file-image":"file")),a("span",{class:"upload-info"},a("span",{class:"upload-name",text:t.name,attrs:{title:t.name}}),a("span",{class:"upload-meta"},m(t.size,this.locale),r[e.status]?a("span",{class:"upload-state",text:` \xB7 ${r[e.status]}`}):null),e.status==="uploading"||e.status==="waiting"?a("span",{class:"upload-progress",part:"progress",attrs:{role:"progressbar","aria-label":t.name,"aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":String(i)}},a("span",{class:"upload-bar"})):null),e.status==="error"&&!this.disabled?a("button",{class:"text-btn",text:s("uploadRetry"),attrs:{type:"button","data-focus-key":`retry-${e.id}`},on:{click:()=>this.send(e)}}):null,this.disabled?null:a("button",{class:"field-icon-button",attrs:{type:"button","aria-label":s(e.status==="uploading"?"uploadCancel":"uploadRemove",{name:t.name}),"data-focus-key":`remove-${e.id}`},on:{click:()=>this.removeFile(e.id)}},f("close")))}refusedList(){return a("ul",{class:"upload-refused"},...this.refused.map(e=>a("li",{},f("alert"),a("span",{text:e.text}),a("button",{class:"field-icon-button",attrs:{type:"button","aria-label":this.t("uploadDismiss"),"data-focus-key":`dismiss-${e.id}`},on:{click:()=>{this.refused=this.refused.filter(s=>s!==e),this.render(),this.focus()}}},f("close")))))}drawProgress(){for(let e of this.entries){let s=this.root.querySelector(`[data-file="${e.id}"]`);if(!s)continue;let t=e.file.size?Math.min(100,Math.round(e.loaded/e.file.size*100)):0;s.querySelector(".upload-progress")?.setAttribute("aria-valuenow",String(t)),s.querySelector(".upload-bar")?.style.setProperty("width",`${t}%`);let i=s.querySelector(".upload-state");i&&e.status==="uploading"&&(i.textContent=` \xB7 ${this.t("uploadUploading",{percent:t})}`)}}dragEnter(e){this.disabled||!$(e)||(e.preventDefault(),this.dragging+=1,this.dragging===1&&this.render())}dragLeave(){this.dragging&&(this.dragging-=1,this.dragging||this.render())}dropped(e){this.disabled||(e.preventDefault(),this.dragging=0,this.addFiles([...e.dataTransfer?.files??[]]))}addFiles(e){if(this.disabled||!e.length)return;let s=this.t,t=this.rules,i=[],r=[],n=(l,d)=>{let g=s("uploadRefused",{name:l.name,reason:d});this.refused=[...this.refused,{id:h("refused"),text:g}].slice(-10),r.push(g)},o=this.multiple?e:e.slice(0,1);for(let l of o){let d=D(l,t);if(d){n(l,s(`uploadReason_${d}`,{size:m(d==="tooSmall"?t.minSize:t.maxSize,this.locale)}));continue}if((this.multiple?this.maxFiles-this.entries.length-i.length:1)<=0){n(l,s("uploadReason_tooMany",{count:this.maxFiles}));continue}if(!p(this,u.FILE_ADD,{file:l})){n(l,s("uploadReason_refused"));continue}i.push({id:h("file"),file:l,status:"ready",loaded:0,preview:"",response:null,request:null})}if(i.length){if(!this.multiple){for(let l of this.entries)l.request?.abort(),p(this,u.FILE_REMOVE,{file:l.file});this.entries=[]}this.entries=[...this.entries,...i],r.unshift(...i.map(l=>s("uploadAdded",{name:l.file.name})))}this.showErrors=!1,this.render(),this.announce(r.join(" ")),i.length&&p(this,u.CHANGE,{files:this.files});for(let l of i)this.preview(l),this.uploadUrl&&this.send(l)}removeFile(e){let s=this.entries.findIndex(r=>r.id===e);if(s<0)return;let[t]=this.entries.splice(s,1);t.request?.abort(),t.request=null,this.render();let i=this.entries[s]??this.entries[s-1];i?this.root.querySelector(`[data-focus-key="remove-${i.id}"]`)?.focus():this.focus(),this.announce(this.t("uploadRemoved",{name:t.file.name})),p(this,u.FILE_REMOVE,{file:t.file}),p(this,u.CHANGE,{files:this.files})}clear(){for(let s of this.entries)s.request?.abort();let e=this.entries.length;this.entries=[],this.refused=[],this.render(),e&&p(this,u.CHANGE,{files:[]})}upload(){for(let e of this.entries)(e.status==="ready"||e.status==="error")&&this.send(e)}preview(e){if(b(this.getAttribute("previews"))===!1||!M.includes(e.file.type)||e.file.size>O||typeof FileReader>"u")return;let s=new FileReader;s.addEventListener("load",()=>{let t=typeof s.result=="string"?s.result:"";if(!v(t,{allowDataImage:!0})||!t.startsWith("data:image/")||!this.entries.includes(e))return;e.preview=t;let i=this.root.querySelector(`[data-file="${e.id}"] .upload-thumb`);i&&i.replaceWith(a("img",{class:"upload-thumb",part:"thumbnail",attrs:{src:t,alt:""}}))}),s.readAsDataURL(e.file)}send(e){let s=this.uploadUrl;if(!s||this.disabled)return;e.request?.abort();let t=new XMLHttpRequest,i=(this.getAttribute("upload-method")??"POST").toUpperCase()==="PUT"?"PUT":"POST";if(t.open(i,s),t.withCredentials=this.has("with-credentials"),!p(this,u.UPLOAD_START,{file:e.file,request:t}))return;e.request=t,e.status="uploading",e.loaded=0;let r=o=>{e.request===t&&(e.request=null,e.status=o,o==="done"&&(e.loaded=e.file.size),this.render(),o==="done"?p(this,u.UPLOAD_DONE,{file:e.file,status:t.status,response:e.response}):(p(this,u.UPLOAD_ERROR,{file:e.file,status:t.status}),this.announce(`${e.file.name}: ${this.t("uploadFailed")}`)))};t.upload.addEventListener("progress",o=>{e.loaded=o.loaded,this.drawProgress(),p(this,u.UPLOAD_PROGRESS,{file:e.file,loaded:o.loaded,total:o.total||e.file.size})}),t.addEventListener("load",()=>{e.response=V(t.responseText),r(t.status>=200&&t.status<300?"done":"error")}),t.addEventListener("error",()=>r("error")),t.addEventListener("timeout",()=>r("error"));let n=new FormData;n.append((this.getAttribute("upload-field")??"").trim()||"file",e.file,e.file.name),t.send(i==="PUT"?e.file:n),this.render()}};function $(c){return[...c.dataTransfer?.types??[]].includes("Files")}function V(c){let e=(c??"").trim().slice(0,1e5);if(!e)return null;try{return JSON.parse(e)}catch{return e}}function I(c){if(!c||typeof c!="object"||Array.isArray(c))return"";let e=c;for(let s of["id","url","key","path"]){let t=e[s];if(typeof t=="string"||typeof t=="number"&&Number.isFinite(t))return String(t).slice(0,2e3)}return""}export{P as a};
//# sourceMappingURL=chunk-JIRWVBM4.js.map
