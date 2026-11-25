/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as L}from"./chunk-DTTKBDLP.js";import{r as G}from"./chunk-37OSRZJK.js";import{T as O,X as P,_ as H,ba as D,e as C,o as c,q as E}from"./chunk-JAZI474S.js";import{h as M,k as N,l as T,m as I,q as z}from"./chunk-SCKP2KTO.js";var q=`/*
 * Flame graph: rows of frames, each as wide as its share of the time, colored by name in
 * warm tones of the theme, with the path of the zoom and the frame under the pointer.
 */
.fl-body {
  padding: 0;
  background: var(--_surface);
  color: var(--_fg);
  font: 400 var(--_font-size-ui) / 1.4 var(--_font-ui);
  overscroll-behavior: auto;
}

.fl-view {
  display: grid;
}

.fl-crumbs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2px;
  padding: var(--_space-2) var(--_space-4);
  border-bottom: 1px solid var(--_border);
}

.fl-crumbs .text-btn + .text-btn::before {
  content: '\u203A';
  margin-inline-end: 6px;
  color: var(--_fg-muted);
}

.fl-crumbs .text-btn[aria-current='true'] {
  color: var(--_fg);
  font-weight: 600;
}

.fl-scroll {
  overflow: auto;
  max-height: 560px;
  padding: var(--_space-3) var(--_space-4);
}

:host([max-height]) .fl-scroll,
.vt[data-fullscreen] .fl-scroll {
  max-height: none;
}

.fl-graph {
  --_row: 22px;
  position: relative;
  min-width: 480px;
  height: calc(var(--_rows) * var(--_row));
}

.c0 {
  --_c: var(--_warning);
}

.c1 {
  --_c: var(--_danger);
}

.c2 {
  --_c: var(--_syntax-number);
}

.c3 {
  --_c: var(--_syntax-type);
}

.c4 {
  --_c: color-mix(in srgb, var(--_warning) 60%, var(--_danger));
}

.c5 {
  --_c: color-mix(in srgb, var(--_syntax-number) 60%, var(--_syntax-type));
}

.c6 {
  --_c: color-mix(in srgb, var(--_warning) 70%, var(--_fg-muted));
}

.c7 {
  --_c: color-mix(in srgb, var(--_danger) 70%, var(--_fg-muted));
}

.fl-frame {
  position: absolute;
  top: calc((var(--_depth) - var(--_offset, 0)) * var(--_row));
  box-sizing: border-box;
  height: calc(var(--_row) - 2px);
  padding: 0 4px;
  overflow: hidden;
  border: 1px solid var(--_surface);
  border-radius: 3px;
  background: color-mix(in srgb, var(--_c) 38%, var(--_surface));
  color: var(--_fg);
  font-size: var(--_font-size-small);
  line-height: calc(var(--_row) - 4px);
  white-space: nowrap;
  cursor: pointer;
}

.fl-graph.up .fl-frame {
  top: auto;
  bottom: calc((var(--_depth) - var(--_offset, 0)) * var(--_row));
}

.fl-frame:hover {
  background: color-mix(in srgb, var(--_c) 60%, var(--_surface));
}

.fl-frame:focus-visible {
  z-index: 1;
  outline: 2px solid var(--_fg);
  outline-offset: 0;
}

.fl-frame.match {
  background: color-mix(in srgb, var(--_accent) 55%, var(--_surface));
  font-weight: 600;
}

.fl-frame.dim {
  opacity: 0.45;
}

.fl-name {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}

.fl-details,
.fl-match {
  min-height: 1.4em;
  margin: 0;
  padding: var(--_space-2) var(--_space-4);
  border-top: 1px solid var(--_border);
  font-variant-numeric: tabular-nums;
  overflow-wrap: anywhere;
}

.fl-match {
  color: var(--_fg-muted);
}

.fl-table {
  overflow: auto;
  max-height: 560px;
}

.fl-table:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.fl-fn {
  max-width: 60ch;
  font-family: var(--_font-mono);
  font-weight: 400;
}

.fl-swatch {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-inline-end: 8px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--_c) 60%, var(--_surface));
  vertical-align: baseline;
}

.fl-edit > .editor-body {
  max-height: min(40vh, 320px);
  border-bottom: 1px solid var(--_border);
}

:host(:dir(rtl)) .fl-graph {
  direction: ltr;
}
`;var _=class extends Error{},F=f=>typeof f=="object"&&f!==null&&!Array.isArray(f),A=class{constructor(){this.count=1,this.root={id:0,name:"all",file:"",self:0,total:0,depth:0,children:[],parent:null},this.index=new WeakMap}child(t,e,r){let s=this.index.get(t);s||this.index.set(t,s=new Map);let n=`${e}\0${r}`,a=s.get(n);return a||(this.count>=2e5||t.depth>=1024?null:(a={id:this.count++,name:e.slice(0,500),file:r.slice(0,500),self:0,total:0,depth:t.depth+1,children:[],parent:t},s.set(n,a),t.children.push(a),a))}finish(){let t=[],e=[this.root];for(;e.length;){let r=e.pop();t.push(r);for(let s of r.children)e.push(s)}for(let r=t.length-1;r>=0;r-=1){let s=t[r];s.total=s.self+s.children.reduce((n,a)=>n+a.total,0),s.children.sort((n,a)=>n.name<a.name?-1:n.name>a.name?1:0)}return this.root}};function j(f){let t=f.trim();if(!t)throw new _("empty");if(/^[[{]/.test(t)){let e;try{e=JSON.parse(t)}catch(r){throw new _(`json:${r instanceof Error?r.message:""}`)}if(F(e)&&Array.isArray(e.nodes))return Q(e);if(F(e)&&(typeof e.name=="string"||Array.isArray(e.children)))return Y(e);throw new _("format")}return K(t)}function K(f){let t=new A,e=0;for(let r of f.split(`
`)){let s=r.trim();if(!s||s.startsWith("#"))continue;let n=/^(.*\S)\s+(\d+(?:\.\d+)?)$/.exec(s);if(!n)continue;let a=Number(n[2]);if(!(a>0))continue;let i=t.root;for(let d of n[1].split(";")){let h=t.child(i,d.trim()||"(unknown)","");if(!h)break;i=h}i.self+=a,e+=1}if(!e)throw new _("format");return{root:t.finish(),unit:"samples",format:"folded",frames:t.count}}function Q(f){let t=f.nodes.filter(F),e=new Map;for(let l of t)typeof l.id=="number"&&e.set(l.id,l);let r=new Map;for(let l of t)if(Array.isArray(l.children))for(let m of l.children)typeof m=="number"&&r.set(m,l.id);let s=new Map,n="samples",a=f.samples,i=f.timeDeltas;if(Array.isArray(a)&&Array.isArray(i)&&a.length===i.length&&a.length){n="ms";for(let l=0;l<a.length;l+=1){let m=Number(i[l+1]??0),p=Number(a[l]);Number.isFinite(m)&&m>0&&s.set(p,(s.get(p)??0)+m/1e3)}}else for(let l of t){let m=Number(l.hitCount??0);m>0&&s.set(l.id,m)}let d=new A,h=new Map,w=t.find(l=>!r.has(l.id))?.id,g=l=>{let m=h.get(l);if(m)return m;let p=[];for(let u=l;u!==void 0&&!h.has(u)&&u!==w&&p.length<=1024;u=r.get(u))p.push(u);let o=h.get(r.get(p[p.length-1]??-1)??-1)??d.root;for(let u=p.length-1;u>=0;u-=1){let b=e.get(p[u]),x=F(b?.callFrame)?b.callFrame:{},v=String(x.functionName||"")||"(anonymous)",y=String(x.url??""),$=Number(x.lineNumber),U=y?`${y}${Number.isFinite($)&&$>=0?`:${$+1}`:""}`:"",k=d.child(o,v,U);if(!k)return o;h.set(p[u],k),o=k}return o};for(let[l,m]of s){if(l===w)continue;let p=g(l);p&&(p.self+=m)}if(!d.root.children.length)throw new _("noSamples");return{root:d.finish(),unit:n,format:"cpuprofile",frames:d.count}}function Y(f){let t=new A,e=[[f,t.root]];for(;e.length;){let[r,s]=e.pop(),n=(Array.isArray(r.children)?r.children:[]).filter(F),a=Number(r.value??0),i=n.reduce((d,h)=>d+(Number(h.value)||0),0);s.self+=Math.max(0,(Number.isFinite(a)?a:0)-i);for(let d of n){let h=t.child(s,String(d.name??"(unknown)"),String(d.file??""));h&&e.push([d,h])}}return typeof f.name=="string"&&f.name&&(t.root.name=f.name.slice(0,500)),{root:t.finish(),unit:"samples",format:"tree",frames:t.count}}function B(f){let t=new Map,e=new Map,r=f.children.map(s=>[s,!1]).reverse();for(;r.length;){let[s,n]=r.pop(),a=`${s.name}\0${s.file}`;if(n){e.set(a,(e.get(a)??1)-1);continue}let i=t.get(a);i||t.set(a,i={name:s.name,file:s.file,self:0,total:0}),i.self+=s.self,e.get(a)||(i.total+=s.total),e.set(a,(e.get(a)??0)+1),r.push([s,!0]);for(let d=s.children.length-1;d>=0;d-=1)r.push([s.children[d],!1])}return[...t.values()].sort((s,n)=>n.self-s.self||n.total-s.total)}function S(f){let t=[];for(let e=f;e;e=e.parent)t.unshift(e);return t}function J(f){let t=[],e=f.children.map(r=>[r,r.name]);for(;e.length;){let[r,s]=e.pop();r.self>0&&t.push(`${s} ${Math.round(r.self*1e3)/1e3}`);for(let n of r.children)e.push([n,`${s};${n.name}`])}return t.sort().join(`
`)}var R=Object.freeze({flameGraph:"Flame graph",flameFunctions:"Functions",flameFunction:"Function",flameSelf:"Self",flameTotal:"Total",flameFrames:"Frames of the profile",flameZoom:"Zoom",flameReset:"All",flameFrame:"{name}, {total} ({percent}), self {self}",flameSamples:"{count} samples",flameSample:"1 sample",flameMatches:"{percent} of the time in frames that match",flameCopyFolded:"Copy as folded stacks",flameNoMatch:"No frames match.",flameInvalidEmpty:"No profile.",flameInvalidFormat:"Expected folded stacks (a;b;c 12), a CPU profile (.cpuprofile) or a JSON tree { name, value, children }.",flameInvalidNoSamples:"This profile has no samples.",flameInvalidJson:"The JSON could not be read: {message}"}),V={flameGraph:"Flame graph",flameFunctions:"Fonctions",flameFunction:"Fonction",flameSelf:"Propre",flameTotal:"Total",flameFrames:"Cadres du profil",flameZoom:"Zoom",flameReset:"Tout",flameFrame:"{name}, {total} ({percent}), propre {self}",flameSamples:"{count} \xE9chantillons",flameSample:"1 \xE9chantillon",flameMatches:"{percent} du temps dans les cadres qui correspondent",flameCopyFolded:"Copier en piles repli\xE9es",flameNoMatch:"Aucun cadre ne correspond.",flameInvalidEmpty:"Aucun profil.",flameInvalidFormat:"Piles repli\xE9es (a;b;c 12), un profil CPU (.cpuprofile) ou un arbre JSON { name, value, children } attendu.",flameInvalidNoSamples:"Ce profil n\u2019a aucun \xE9chantillon.",flameInvalidJson:"Le JSON n\u2019a pas pu \xEAtre lu : {message}"};I({en:R,fr:V});var tt=["graph","functions"],et=.001,rt=8,X=class extends D{static type="flame";static componentAttributes=Object.freeze(["direction","tabs","default-tab","unit"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,tabs:!0}};static styles=[L,q];constructor(){super(),this.parsed=null,this.zoom=null,this.focused=null,this.tab=null,this.query="",this.matchFrames=[],this.panelId=E("panel"),this.graphHost=null,this.details=null,this.elements=new Map,this.editor=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}contentChanged(){this.parsed=null,this.zoom=null,this.focused=null}parse(){let t=this.text??"";if(this.parsed?.text===t)return this.parsed;try{this.parsed={text:t,profile:j(t),error:null}}catch(e){this.parsed={text:t,profile:null,error:e instanceof Error?e:new Error(String(e))}}return this.parsed}get profile(){return this.parse().profile}get currentTab(){return this.feature("tabs")?this.tab??C(this.getAttribute("default-tab"),tt,"graph"):"graph"}weight(t,e){if(e.unit==="ms"){let n=t<10?2:t<100?1:0;return`${new Intl.NumberFormat(this.locale,{maximumFractionDigits:n}).format(t)} ms`}let r=this.getAttribute("unit")?.trim().slice(0,30),s=z(Math.round(t*100)/100,this.locale);return r?`${s} ${r}`:t===1?this.t("flameSample"):this.t("flameSamples",{count:s})}percent(t,e){return new Intl.NumberFormat(this.locale,{style:"percent",maximumFractionDigits:1}).format(e?t/e:0)}renderContent(t){let e=this.t,{profile:r,error:s}=this.parse(),n=this.currentTab,a=c("div",{class:"panel",attrs:{id:this.panelId}}),i=c("div",{class:`body fl-body tab-${n}`,part:"body"});this.graphHost=null,s||!r?i.append(H(this.errorText(s))):n==="functions"?i.append(this.functionsView(r)):i.append(this.graphView());let d=[];if(this.editing){let m=this.createEditor();a.classList.add("fl-edit"),a.append(c("div",{class:"body editor-body",part:"body source"},m.element),i),d=this.historyButtons(m)}else a.append(i);let h=this.feature("tabs")&&r&&!this.editing?P({tabs:[{id:"graph",label:e("flameGraph"),icon:"chart"},{id:"functions",label:e("flameFunctions"),icon:"table"}],selected:n,label:e("tabs"),panelId:this.panelId,onSelect:m=>{this.tab=m,this.render(),this.root.querySelector(`[data-tab="${m}"]`)?.focus(),T(this,N.TAB_CHANGE,{tab:m})}}):null;h&&a.setAttribute("role","tabpanel");let w={run:m=>{if(this.query=m.slice(0,O).trim().toLowerCase(),this.matchFrames=[],r&&this.query){let p=[r.root];for(;p.length;){let o=p.pop();o!==r.root&&o.name.toLowerCase().includes(this.query)&&this.matchFrames.push(o),p.push(...o.children)}}return this.renderGraph(),{total:this.matchFrames.length,capped:!1}},go:m=>{let p=this.matchFrames[m];p&&this.elements.get(p)?.scrollIntoView({block:"nearest",inline:"nearest"})},clear:()=>{this.query="",this.matchFrames=[],this.renderGraph()}},g=[n==="graph"?this.searchButton(w):null,...d,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.text??"",this.downloadName(r?.format==="cpuprofile"?"profile.cpuprofile":"profile.folded"),"text/plain"):null,this.feature("copy")&&r?this.copyButton(()=>J(r.root),e("flameCopyFolded")):null],l=r?this.weight(r.root.total,r):"";t.append(...this.chrome({badge:l,tabs:h,actions:g}),a),this.editor?.align()}errorText(t){let e=this.t;if(t instanceof _){if(t.message==="empty")return e("flameInvalidEmpty");if(t.message==="noSamples")return e("flameInvalidNoSamples");if(t.message.startsWith("json:"))return e("flameInvalidJson",{message:t.message.slice(5)})}return e("flameInvalidFormat")}graphView(){this.graphHost=c("div",{class:"fl-graph-host"}),this.details=c("p",{class:"fl-details",part:"details",attrs:{"aria-live":"polite"}});let t=c("div",{class:"fl-view"},this.graphHost,this.details);return this.renderGraph(),t}renderGraph(){let t=this.graphHost,e=this.parse().profile;if(!t||!e)return;let r=this.t,s=this.zoom??e.root,n=s.total||1,a=e.root.total||1,i=new Set(this.matchFrames);this.elements=new Map;let d=c("nav",{class:"fl-crumbs",part:"crumbs",attrs:{"aria-label":r("flameZoom")}});for(let o of S(s))d.append(c("button",{class:"text-btn",text:o===e.root?r("flameReset"):o.name,attrs:{type:"button","aria-current":o===s?"true":null,"data-focus-key":`crumb-${o.id}`},on:{click:()=>this.zoomTo(o===e.root?null:o)}}));let h=S(s).map(o=>({frame:o,left:0,width:1})),w=[{frame:s,left:0}];for(;w.length;){let{frame:o,left:u}=w.shift(),b=u;for(let x of o.children){let v=x.total/n;v>=et&&(h.push({frame:x,left:b,width:v}),w.push({frame:x,left:b})),b+=v}}let g=Math.max(...h.map(o=>o.frame.depth))+1,l=c("div",{class:`fl-graph${this.getAttribute("direction")==="up"?" up":""}`,part:"graph",attrs:{role:"tree","aria-label":r("flameFrames")},on:{keydown:o=>this.onKey(o)}}),m=s===e.root?0:1;l.style.setProperty("--_rows",String(g-m)),l.style.setProperty("--_offset",String(m)),(!this.focused||!h.some(o=>o.frame===this.focused))&&(this.focused=s);for(let{frame:o,left:u,width:b}of h){if(o===e.root&&s!==e.root)continue;let x=i.has(o),v=r("flameFrame",{name:o.name,total:this.weight(o.total,e),percent:this.percent(o.total,a),self:this.weight(o.self,e)}),y=c("div",{class:`fl-frame c${Z(o.name)}${x?" match":""}${this.query&&!x?" dim":""}`,part:x?"frame frame-match":"frame",attrs:{role:"treeitem","aria-level":o.depth+1,"aria-label":v,"aria-expanded":o.children.length?"true":null,tabindex:o===this.focused?"0":"-1","data-focus-key":`frame-${o.id}`,title:o.file?`${v}
${o.file}`:v},on:{click:()=>this.zoomTo(o===e.root?null:o),mouseenter:()=>this.describe(o,e),focus:()=>this.describe(o,e)}});y.style.insetInlineStart=`${u*100}%`,y.style.width=`${b*100}%`,y.style.setProperty("--_depth",String(o.depth)),b>.02&&y.append(c("span",{class:"fl-name",text:o.name})),l.append(y),this.elements.set(o,y)}let p=[d,c("div",{class:"fl-scroll"},l)];if(this.query){let o=this.matchFrames.filter(u=>!this.matchFrames.some(b=>b!==u&&S(u).includes(b))).reduce((u,b)=>u+b.total,0);p.push(c("p",{class:"fl-match",text:this.matchFrames.length?r("flameMatches",{percent:this.percent(o,a)}):r("flameNoMatch")}))}t.replaceChildren(...p)}describe(t,e){if(!this.details)return;let r=e.root.total||1;this.details.textContent=`${t.name} \u2014 ${this.weight(t.total,e)} (${this.percent(t.total,r)}), ${this.t("flameSelf").toLowerCase()} ${this.weight(t.self,e)}${t.file?` \u2014 ${t.file}`:""}`}zoomTo(t){this.zoom=t,this.focused=t??this.parse().profile?.root??null,this.renderGraph(),this.focused&&this.elements.get(this.focused)?.focus(),t&&T(this,N.SELECT,{name:t.name,file:t.file,self:t.self,total:t.total,path:S(t).slice(1).map(e=>e.name)})}onKey(t){let e=this.focused,r=this.parse().profile;if(!e||!r)return;let s=g=>g&&this.elements.has(g)?g:null,n=this.getAttribute("direction")!=="up",a=e.parent?e.parent.children.filter(g=>this.elements.has(g)):[],i=a.indexOf(e),d=[...e.children].sort((g,l)=>l.total-g.total).find(g=>this.elements.has(g)),h;switch(t.key){case"ArrowUp":h=s(n?e.parent:d);break;case"ArrowDown":h=s(n?d:e.parent);break;case"ArrowLeft":h=a[i-1]??null;break;case"ArrowRight":h=a[i+1]??null;break;case"Enter":case" ":t.preventDefault(),this.zoomTo(e===r.root?null:e);return;case"Escape":if(!this.zoom)return;t.preventDefault(),t.stopPropagation(),this.zoomTo(this.zoom.parent&&this.zoom.parent!==r.root?this.zoom.parent:null);return;default:return}if(t.preventDefault(),!h)return;this.elements.get(e)?.setAttribute("tabindex","-1"),this.focused=h;let w=this.elements.get(h);w?.setAttribute("tabindex","0"),w?.focus()}functionsView(t){let e=this.t,r=t.root.total||1,s=B(t.root).slice(0,300),n=c("tr",{},c("th",{attrs:{scope:"col"},text:e("flameFunction")}),c("th",{class:"col-number",attrs:{scope:"col"},text:e("flameSelf")}),c("th",{class:"col-number",attrs:{scope:"col"},text:"%"}),c("th",{class:"col-number",attrs:{scope:"col"},text:e("flameTotal")}),c("th",{class:"col-number",attrs:{scope:"col"},text:"%"})),a=c("tbody");for(let i of s)a.append(c("tr",{},c("th",{class:"fl-fn",attrs:{scope:"row",title:i.file||null}},c("span",{class:`fl-swatch c${Z(i.name)}`,attrs:{"aria-hidden":"true"}}),i.name),c("td",{class:"col-number",text:this.weight(i.self,t)}),c("td",{class:"col-number",text:this.percent(i.self,r)}),c("td",{class:"col-number",text:this.weight(i.total,t)}),c("td",{class:"col-number",text:this.percent(i.total,r)})));return c("div",{class:"fl-table",attrs:{tabindex:"0",role:"region","aria-label":e("flameFunctions")}},c("table",{class:"grid",part:"table"},c("thead",{},n),a))}createEditor(){return this.editor?.destroy(),this.editor=new G({text:this.text??"",language:/^\s*[[{]/.test(this.text??"")?"json":"plaintext",lineNumbers:!0,wrap:!1,highlightLimit:M().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:t=>this.edited(t),onChange:t=>T(this,N.CHANGE,{value:t}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.parsed=null,this.zoom=null,this.previewTimer=setTimeout(()=>this.render(),300)}};function Z(f){let t=0;for(let e=0;e<f.length;e+=1)t=t*31+f.charCodeAt(e)|0;return Math.abs(t)%rt}export{X as a};
