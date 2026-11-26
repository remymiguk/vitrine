/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as F}from"./chunk-NZYKGHEV.js";import{B as w,C as g,O as _,Y as U,_ as z,ba as P,c as x,d as j,j as A,o as a,q as b}from"./chunk-6Y25K6ZT.js";import{f as R,h as O,k as M,l as T,m as D,q as S}from"./chunk-I2DZIXQF.js";var I=Object.freeze([{id:"fa-solid",label:"Font Awesome Solid"},{id:"fa-regular",label:"Font Awesome Regular"},{id:"fa-brands",label:"Font Awesome Brands"},{id:"lucide",label:"Lucide"},{id:"bootstrap",label:"Bootstrap Icons"},{id:"flags",label:"Flags"}]),N="http://www.w3.org/2000/svg",G=new Set(["g","path","circle","ellipse","rect","line","polyline","polygon","defs","clipPath","mask","linearGradient","radialGradient","stop","use","marker","symbol"]),E=new Set(["d","fill","stroke","stroke-width","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-dasharray","stroke-dashoffset","stroke-opacity","fill-rule","clip-rule","fill-opacity","opacity","transform","cx","cy","r","rx","ry","x","y","x1","y1","x2","y2","width","height","points","id","clip-path","mask","href","gradientUnits","gradientTransform","offset","stop-color","stop-opacity","fx","fy","markerWidth","markerHeight","marker-start","marker-mid","marker-end","viewBox","refX","refY","orient"]),se=2e4,L=new Map,C=new Map;function B(r,e){return r==="href"?/^#[\w.-]+$/.test(e):/url\s*\(/i.test(e)?/^url\(#[\w.-]+\)$/.test(e.trim()):!/[<>]/.test(e)&&e.length<1e5}function re(r){if(!w(r))throw new TypeError("An icon set is an object.");let e=g(r.id,40);if(!/^[a-z][\w-]*$/i.test(e))throw new TypeError("An icon set needs an id of letters, digits and dashes.");let s={};if(w(r.attrs))for(let[t,o]of Object.entries(r.attrs))E.has(t)&&typeof o=="string"&&B(t,o)&&(s[t]=o);let i=[];for(let t of(Array.isArray(r.icons)?r.icons:[]).slice(0,se)){let[o,c,n,l,f]=Array.isArray(t)?t:w(t)?[t.name,t.body??t.d,t.keywords,t.viewBox,t.label]:[],h=g(o,100);!h||typeof c!="string"&&!Array.isArray(c)||i.push({name:h,label:g(f,100)||h,body:c,keywords:(Array.isArray(n)?n.join(" "):g(n,2e3)).toLowerCase(),viewBox:g(l,60)})}return{id:e,label:g(r.label,100)||e,license:g(r.license,60),licenseUrl:typeof r.licenseUrl=="string"&&/^https:\/\//.test(r.licenseUrl)?r.licenseUrl:null,code:g(r.code,100)||`${e}:{name}`,attribution:g(r.attribution,400).replace(/-{2,}/g,"-").replace(/[<>]/g,""),viewBox:g(r.viewBox,60)||"0 0 24 24",attrs:s,icons:i,byName:new Map(i.map(t=>[t.name,t]))}}function W(r){let e=re(r);return L.set(e.id,e),C.delete(e.id),e}function v(r){return L.get(r)??null}function H(r){let e=L.get(r);if(e)return Promise.resolve(e);let s=C.get(r);if(s)return s;if(!I.some(o=>o.id===r))return Promise.reject(new Error(`Unknown icon set: ${r}`));let i=O().vendorUrl||R(),t=import(new URL(`icons/${r}.js`,i||location.href).href).then(o=>W(o.default),o=>{throw C.delete(r),o});return C.set(r,t),t}function J(r,e){let s=e.toLowerCase().trim().split(/\s+/).filter(Boolean).slice(0,8);if(!s.length)return r.icons;let i=[];for(let t of r.icons){let o=t.name.toLowerCase(),c=t.label.toLowerCase(),n=0;for(let l of s)if(o===l||c===l)n+=100;else if(o.startsWith(l)||c.startsWith(l))n+=50;else if(o.includes(l)||c.includes(l))n+=30;else if(t.keywords.includes(l))n+=10;else{n=-1;break}n>0&&i.push([t,n-o.length/100])}return i.sort((t,o)=>o[1]-t[1]).map(([t])=>t)}function X(r){return typeof r.body=="string"?[["path",{d:r.body}]]:r.body}function k(r,e){let s=document.createElementNS(N,"svg");s.setAttribute("viewBox",e.viewBox||r.viewBox);for(let[t,o]of Object.entries(r.attrs))s.setAttribute(t,o);s.setAttribute("aria-hidden","true"),s.setAttribute("focusable","false");let i=(t,o,c)=>{for(let n of o){if(!Array.isArray(n)||c>12)continue;let[l,f,...h]=n;if(!G.has(l))continue;let m=document.createElementNS(N,l);if(w(f))for(let[d,p]of Object.entries(f)){let u=typeof p=="number"?String(p):p;E.has(d)&&typeof u=="string"&&B(d,u)&&m.setAttribute(d,u)}i(m,h,c+1),t.append(m)}};return i(s,X(e),0),s}var $=r=>r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function q(r,e){let s=(o,c)=>o.filter(n=>Array.isArray(n)&&G.has(n[0])&&c<=12).map(([n,l,...f])=>{let h=w(l)?Object.entries(l).map(([p,u])=>[p,typeof u=="number"?String(u):u]).filter(([p,u])=>E.has(p)&&typeof u=="string"&&B(p,u)):[],m=`<${n}${h.map(([p,u])=>` ${p}="${$(u)}"`).join("")}`,d=s(f,c+1);return d?`${m}>${d}</${n}>`:`${m}/>`}).join(""),i=Object.entries(r.attrs).map(([o,c])=>` ${o}="${$(c)}"`).join(""),t=r.attribution?`<!-- ${r.attribution} -->`:"";return`<svg xmlns="${N}" viewBox="${$(e.viewBox||r.viewBox)}"${i}>${t}${s(X(e),0)}</svg>`}function V(r,e){return r.code.replace("{name}",e.name)}function y(r){let e=r.indexOf(":");return e<=0?null:{set:r.slice(0,e).trim(),name:r.slice(e+1).trim()}}var Y=`/*
 * Icon picker: a field showing the icon chosen, and a panel to search and choose one.
 */
.ip-anchor {
  position: relative;
}

.ip-trigger {
  gap: var(--_space-2);
}

.ip-preview {
  display: inline-grid;
  flex: none;
  place-items: center;
  width: 22px;
  height: 22px;
  border: 1px dashed var(--_border-strong);
  border-radius: var(--_radius-sm);
  color: var(--_fg);
}

.ip-preview:has(svg) {
  border-color: transparent;
}

.ip-preview svg {
  width: 20px;
  height: 20px;
}

.ip-panel {
  display: grid;
  gap: var(--_space-3);
  width: min(560px, calc(100vw - 32px));
  padding: var(--_space-3);
}

.icon-picker.inline .ip-panel {
  width: auto;
  margin-top: var(--_space-2);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
}

.ip-controls {
  display: grid;
  grid-template-columns: minmax(0, 12rem) minmax(0, 1fr);
  gap: var(--_space-2);
}

.ip-status {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.ip-recent {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1);
}

.ip-recent-label {
  margin-inline-end: var(--_space-1);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.ip-recent-icon {
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: transparent;
  color: var(--_fg);
  cursor: pointer;
}

.ip-recent-icon svg {
  width: 18px;
  height: 18px;
}

.ip-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(44px, 1fr));
  gap: var(--_space-1);
  max-height: var(--_max-height, 320px);
  overflow-y: auto;
  padding: 2px;
  overscroll-behavior: contain;
}

.ip-option {
  display: grid;
  place-items: center;
  aspect-ratio: 1;
  border: 1px solid transparent;
  border-radius: var(--_radius-sm);
  color: var(--_fg);
  cursor: pointer;
}

.ip-option svg {
  width: 22px;
  height: 22px;
}

.ip-grid.flags .ip-option svg,
.ip-large.flag svg {
  border-radius: 3px;
  box-shadow: 0 0 0 1px var(--_border);
}

.ip-option:hover {
  background: var(--_accent-soft);
}

.ip-option:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 0;
}

.ip-option[aria-selected='true'] {
  border-color: var(--_accent);
  background: var(--_accent-soft);
}

.ip-more {
  justify-self: start;
}

.ip-detail {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: var(--_space-2) var(--_space-3);
  padding-top: var(--_space-3);
  border-top: 1px solid var(--_border);
}

.ip-large {
  display: grid;
  grid-row: span 2;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  color: var(--_fg);
}

.ip-large svg {
  width: 32px;
  height: 32px;
}

.ip-about {
  display: grid;
  min-width: 0;
}

.ip-name {
  overflow-wrap: anywhere;
}

.ip-code {
  color: var(--_fg-muted);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  overflow-wrap: anywhere;
}

.ip-license {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

a.ip-license {
  color: var(--_accent-fg);
}

.ip-copy {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2);
}

@media (max-width: 520px) {
  .ip-controls {
    grid-template-columns: 1fr;
  }
}
`;var K=Object.freeze({iconChoose:"Choose an icon",iconChosen:"{name}, {set}",iconClear:"Remove the icon",iconDialog:"Icons",iconSet:"Icon set",iconSearch:"Search icons",iconSearchPlaceholder:"Search: arrow, user, heart\u2026",iconCount:"{count} icons",iconResults:"{count} icons match",iconNone:"No icon matches \u201C{query}\u201D.",iconMore:"Show {count} more",iconRecent:"Recent",iconLoading:"Loading the icons\u2026",iconLoadFailed:"The icons could not be loaded.",iconCopySvg:"Copy SVG",iconCopyCode:"Copy code",iconCopyName:"Copy name",iconLicense:"License: {license}",iconRequired:"required",iconMissing:"Choose an icon.",iconList:"Icons of {set}"}),Q={iconChoose:"Choisir une ic\xF4ne",iconChosen:"{name}, {set}",iconClear:"Retirer l\u2019ic\xF4ne",iconDialog:"Ic\xF4nes",iconSet:"Jeu d\u2019ic\xF4nes",iconSearch:"Rechercher des ic\xF4nes",iconSearchPlaceholder:"Rechercher : fl\xE8che, user, heart\u2026",iconCount:"{count} ic\xF4nes",iconResults:"{count} ic\xF4nes trouv\xE9es",iconNone:"Aucune ic\xF4ne ne correspond \xE0 \xAB {query} \xBB.",iconMore:"Afficher {count} de plus",iconRecent:"R\xE9centes",iconLoading:"Chargement des ic\xF4nes\u2026",iconLoadFailed:"Les ic\xF4nes n\u2019ont pas pu \xEAtre charg\xE9es.",iconCopySvg:"Copier le SVG",iconCopyCode:"Copier le code",iconCopyName:"Copier le nom",iconLicense:"Licence : {license}",iconRequired:"obligatoire",iconMissing:"Choisissez une ic\xF4ne.",iconList:"Ic\xF4nes de {set}"};D({en:K,fr:Q});var ee="vitrine-icons:recent",te=16;function ie(){try{let r=JSON.parse(localStorage.getItem(ee)??"[]");return Array.isArray(r)?r.filter(e=>typeof e=="string").slice(0,te):[]}catch{return[]}}function oe(r){try{localStorage.setItem(ee,JSON.stringify([r,...ie().filter(e=>e!==r)].slice(0,te)))}catch{}}var Z=class extends P{static type="icon-picker";static formAssociated=!0;static allowEmpty=!0;static componentAttributes=Object.freeze(["value","name","sets","inline","required","disabled","hint","page"]);static dataAttributes=Object.freeze(["value","sets"]);static presets={simple:{},full:{}};static styles=[F,Y];static fromData(e){if(typeof e=="string")return{content:"",attributes:{value:e}};let s=e!==null&&typeof e=="object"?e:{};return{content:"",attributes:{value:s.value,sets:Array.isArray(s.sets)?s.sets.join(","):s.sets}}}constructor(){super(),this.internals=typeof this.attachInternals=="function"?this.attachInternals():null,this.ids={label:b("label"),trigger:b("icon"),text:b("text"),panel:b("icons"),list:b("list"),hint:b("hint"),error:b("error")},this.current=null,this.open=!1,this.setId=null,this.query="",this.limit=0,this.activeName=null,this.failed=new Set,this.showErrors=!1,this.formDisabled=!1,this.outside=null,this.addEventListener("invalid",e=>{e.preventDefault(),this.showErrors=!0,this.render()})}get value(){return this.current??(this.getAttribute("value")??"").trim()}set value(e){this.current=e==null?"":String(e).trim().slice(0,200),this._connected&&this.render()}get validity(){return this.internals?.validity}get validationMessage(){return this.internals?.validationMessage??""}checkValidity(){return this.internals?.checkValidity()??!0}reportValidity(){return this.showErrors=!0,this.refreshState(),this.internals?.reportValidity()??!0}get icon(){let e=this.resolve(this.value);if(!e)return null;let{set:s,icon:i}=e;return{set:s.id,name:i.name,label:i.label,svg:q(s,i),code:V(s,i)}}get disabled(){return this.formDisabled||x(this.getAttribute("disabled"))===!0}get inline(){return x(this.getAttribute("inline"))===!0}resolve(e){let s=y(e),i=s?v(s.set):null,t=s&&i?i.byName.get(s.name):null;return i&&t?{set:i,icon:t}:null}get sets(){let e=[...I],s=(this.getAttribute("sets")??"").split(",").map(i=>i.trim()).filter(Boolean);return s.length?s.map(i=>e.find(t=>t.id===i)??(v(i)?{id:i,label:v(i).label}:null)).filter(i=>i!==null):e}get shownSet(){let e=this.sets,s=y(this.value)?.set;return this.setId??(s&&e.some(t=>t.id===s)?s:e[0]?.id)??""}ensure(e){!e||v(e)||this.failed.has(e)||H(e).then(()=>this.isConnected&&this.render(),()=>{this.failed.add(e),this.isConnected&&this.render()})}connectedCallback(){super.connectedCallback();let e=y(this.value)?.set;e&&this.ensure(e)}disconnectedCallback(){super.disconnectedCallback(),this.stopOutside()}formResetCallback(){this.current=null,this.showErrors=!1,this.render()}formDisabledCallback(e){this.formDisabled=e,this.requestRender()}formStateRestoreCallback(e){typeof e=="string"&&(this.value=e)}refreshState(){let e=this.t,s=x(this.getAttribute("required"))===!0&&!this.value;if(this.internals){this.internals.setFormValue(this.disabled?null:this.value||null,this.value);let t=this.root.getElementById(this.ids.trigger)??void 0;this.internals.setValidity(s?{valueMissing:!0}:{},s?e("iconMissing"):"",s?t:void 0)}let i=this.root.getElementById(this.ids.error);i&&(i.textContent=s&&this.showErrors?e("iconMissing"):"")}choose(e){this.current=e,e&&oe(e);let s=y(e);this.showErrors=!0,this.inline||(this.open=!1),this.render(),(!this.inline||!e)&&this.root.getElementById(this.ids.trigger)?.focus(),T(this,M.CHANGE,{value:e,set:s?.set??"",name:s?.name??""})}close(e=!0){this.open&&(this.open=!1,this.render(),e&&this.root.getElementById(this.ids.trigger)?.focus())}renderContent(e){let s=this.t,i=x(this.getAttribute("required"))===!0,t=A(this.getAttribute("hint"),300),o=(this.open||this.inline)&&!this.disabled;o&&this.ensure(this.shownSet),e.append(a("div",{class:`field icon-picker${this.disabled?" disabled":""}${this.inline?" inline":""}`,part:"body"},a("div",{class:"field-top"},a("label",{class:"field-label",part:"label",attrs:{id:this.ids.label,for:this.ids.trigger}},A(this.getAttribute("label"),300),i?a("span",{class:"field-required",text:"*",attrs:{"aria-hidden":"true"}}):null,i?a("span",{class:"sr-only",text:` (${s("iconRequired")})`}):null)),a("div",{class:"ip-anchor"},this.triggerView(),o?this.panelView():null),t?a("p",{class:"field-hint",part:"hint",text:t,attrs:{id:this.ids.hint}}):null,a("p",{class:"field-error",part:"error",attrs:{id:this.ids.error,"aria-live":"polite"}}))),this.refreshState(),this.open&&!this.inline?this.watchOutside():this.stopOutside()}triggerView(){let e=this.t,s=this.value,i=this.resolve(s),t=y(s),o=i?i.icon.label:t?.name??"",c=i?i.set.label:t?.set??"",n=a("button",{class:"field-trigger ip-trigger",part:"trigger",attrs:{type:"button",id:this.ids.trigger,disabled:this.disabled?"":null,"aria-labelledby":`${this.ids.label} ${this.ids.text}`,"aria-haspopup":this.inline?null:"dialog","aria-expanded":this.inline?null:String(this.open),"aria-describedby":[this.getAttribute("hint")?this.ids.hint:"",this.ids.error].filter(Boolean).join(" "),"data-focus-key":"trigger"},on:{click:()=>{this.inline||(this.open=!this.open,this.render(),this.open&&this.root.querySelector(".ip-search")?.focus())}}},a("span",{class:"ip-preview"},i?k(i.set,i.icon):null),a("span",{class:"field-trigger-text",attrs:{id:this.ids.text},text:s?e("iconChosen",{name:o,set:c}):e("iconChoose")}),this.inline?null:_("chevron-down")),l=s&&!this.disabled?a("button",{class:"field-icon-button",attrs:{type:"button","aria-label":e("iconClear"),title:e("iconClear"),"data-focus-key":"clear"},on:{click:()=>this.choose("")}},_("close")):null;return a("div",{class:"field-box ip-box"},n,l)}panelView(){let e=this.t,s=this.shownSet,i=v(s),t=a("div",{class:this.inline?"ip-panel":"field-popup ip-panel",part:"panel",attrs:{id:this.ids.panel,role:this.inline?"group":"dialog","aria-label":e("iconDialog")},on:{keydown:d=>{let p=d;p.key==="Escape"&&!this.inline&&(p.preventDefault(),p.stopPropagation(),this.close())}}}),o=a("select",{class:"field-input ip-set",attrs:{"aria-label":e("iconSet"),"data-focus-key":"set"},on:{change:d=>{this.setId=d.target.value,this.limit=0,this.activeName=null,this.render()}}},...this.sets.map(d=>a("option",{text:d.label,attrs:{value:d.id,selected:d.id===s?"":null}}))),c=a("input",{class:"field-input ip-search",attrs:{type:"search",value:this.query,"aria-label":e("iconSearch"),placeholder:e("iconSearchPlaceholder"),"aria-controls":this.ids.list,autocomplete:"off",spellcheck:"false","data-focus-key":"search"},on:{input:d=>{this.query=d.target.value.slice(0,100),this.limit=0,this.activeName=null,this.render()},keydown:d=>{d.key==="ArrowDown"&&(d.preventDefault(),this.root.querySelector('.ip-option[tabindex="0"]')?.focus())}}});if(t.append(a("div",{class:"ip-controls"},o,c)),!i)return t.append(this.failed.has(s)?z(e("iconLoadFailed")):U(e)),t;let n=J(i,this.query),l=j(this.getAttribute("page"),{min:20,max:5e3,fallback:300}),f=this.limit||l,h=n.slice(0,f);if(t.append(a("p",{class:"ip-status",attrs:{"aria-live":"polite"},text:this.query?n.length?e("iconResults",{count:S(n.length,this.locale)}):e("iconNone",{query:this.query}):e("iconCount",{count:S(n.length,this.locale)})})),!this.query){let d=this.recentView(i);d&&t.append(d)}h.length&&t.append(this.gridView(i,h)),n.length>h.length&&t.append(a("button",{class:"text-btn ip-more",text:e("iconMore",{count:S(Math.min(l,n.length-h.length),this.locale)}),attrs:{type:"button","data-focus-key":"more"},on:{click:()=>{this.limit=f+l,this.render()}}}));let m=i.byName.get(this.activeName??"")??this.resolve(this.value)?.icon;return m&&t.append(this.previewView(i,m)),t}recentView(e){let s=this.t,i=ie().map(t=>y(t)).filter(t=>t&&t.set===e.id).map(t=>e.byName.get(t.name)).filter(t=>t!==void 0);return i.length?a("div",{class:"ip-recent"},a("span",{class:"ip-recent-label",text:s("iconRecent")}),...i.map(t=>a("button",{class:"ip-recent-icon",attrs:{type:"button","aria-label":t.label,title:t.label,"data-focus-key":`recent-${t.name}`},on:{click:()=>this.choose(`${e.id}:${t.name}`)}},k(e,t)))):null}gridView(e,s){let i=this.t,t=this.value,o=s.find(n=>n.name===this.activeName)??s.find(n=>`${e.id}:${n.name}`===t)??s[0],c=a("div",{class:`ip-grid${e.id==="flags"?" flags":""}`,attrs:{id:this.ids.list,role:"listbox","aria-label":i("iconList",{set:e.label})},on:{keydown:n=>this.moveFocus(n,e)}});for(let n of s){let l=`${e.id}:${n.name}`;c.append(a("div",{class:"ip-option",part:"option",attrs:{role:"option",tabindex:n===o?"0":"-1","aria-selected":String(l===t),"aria-label":n.label,title:n.label,"data-name":n.name,"data-focus-key":`icon-${n.name}`},on:{click:()=>this.choose(l),focus:()=>{this.activeName!==n.name&&(this.activeName=n.name,this.updatePreview(e,n))}}},k(e,n)))}return c}moveFocus(e,s){let i=[...this.root.querySelectorAll(".ip-option")],t=i.indexOf(e.target);if(t<0)return;if(e.key==="Enter"||e.key===" "){e.preventDefault(),this.choose(`${s.id}:${i[t].dataset.name}`);return}let o=i[0].offsetTop,c=Math.max(1,i.filter(f=>f.offsetTop===o).length),n={ArrowRight:1,ArrowLeft:-1,ArrowDown:c,ArrowUp:-c,PageDown:c*4,PageUp:-c*4},l=e.key==="Home"?0:e.key==="End"?i.length-1:t+(n[e.key]??NaN);if(!Number.isNaN(l)){if(e.preventDefault(),l<0&&e.key==="ArrowUp"){this.root.querySelector(".ip-search")?.focus();return}l=Math.max(0,Math.min(i.length-1,l)),i[t].setAttribute("tabindex","-1"),i[l].setAttribute("tabindex","0"),i[l].focus()}}previewView(e,s){let i=this.t,t=V(e,s);return a("div",{class:"ip-detail",part:"preview"},a("span",{class:`ip-large${e.id==="flags"?" flag":""}`},k(e,s)),a("span",{class:"ip-about"},a("strong",{class:"ip-name",text:s.label}),a("code",{class:"ip-code",text:t}),e.license?e.licenseUrl?a("a",{class:"ip-license",text:i("iconLicense",{license:`${e.label}, ${e.license}`}),attrs:{href:e.licenseUrl,rel:"noopener",target:"_blank"}}):a("span",{class:"ip-license",text:i("iconLicense",{license:`${e.label}, ${e.license}`})}):null),a("span",{class:"ip-copy"},this.copyTextButton(()=>q(e,s),i("iconCopySvg"),"copy-svg"),this.copyTextButton(()=>t,i("iconCopyCode"),"copy-code"),this.copyTextButton(()=>`${e.id}:${s.name}`,i("iconCopyName"),"copy-name")))}updatePreview(e,s){let i=this.root.querySelector(".ip-detail"),t=this.previewView(e,s);i?i.replaceWith(t):this.root.querySelector(".ip-panel")?.append(t)}watchOutside(){this.outside||(this.outside=e=>{e.composedPath().includes(this)||this.close(!1)},document.addEventListener("pointerdown",this.outside,!0))}stopOutside(){this.outside&&(document.removeEventListener("pointerdown",this.outside,!0),this.outside=null)}};export{W as a,Z as b};
//# sourceMappingURL=chunk-6QCLFHQC.js.map
