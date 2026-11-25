/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{d as A}from"./chunk-4RYHQHTJ.js";import{b as Y}from"./chunk-4DG3OOJM.js";import{a as Q}from"./chunk-DTTKBDLP.js";import{a as U}from"./chunk-PVVRLBB4.js";import{r as R}from"./chunk-37OSRZJK.js";import{T as K,X as W,_ as X,ba as Z,d as B,e as G,o as h,q as J}from"./chunk-JAZI474S.js";import{h as P,k as I,l as E,m as F,q as O}from"./chunk-SCKP2KTO.js";var tt=`/*
 * Treemap: rectangles placed through CSSOM in a map of fixed aspect ratio, colored by group
 * with the chart colors of the theme, lighter at each level, with the path of the zoom.
 */
.vt {
  --_chart-1: var(--vt-chart-1, var(--_accent));
  --_chart-2: var(--vt-chart-2, var(--_info));
  --_chart-3: var(--vt-chart-3, var(--_warning));
  --_chart-4: var(--vt-chart-4, var(--_syntax-keyword));
  --_chart-5: var(--vt-chart-5, var(--_danger));
  --_chart-6: var(--vt-chart-6, var(--_syntax-string));
  --_chart-7: var(--vt-chart-7, var(--_syntax-number));
  --_chart-8: var(--vt-chart-8, var(--_fg-muted));
}

.tm-body {
  padding: 0;
  background: var(--_surface);
  color: var(--_fg);
  font: 400 var(--_font-size-ui) / 1.4 var(--_font-ui);
  overscroll-behavior: auto;
}

.tm-host {
  display: grid;
}

.tm-crumbs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2px;
  padding: var(--_space-2) var(--_space-4);
  border-bottom: 1px solid var(--_border);
}

.tm-crumbs .text-btn + .text-btn::before {
  content: '\u203A';
  margin-inline-end: 6px;
  color: var(--_fg-muted);
}

.tm-crumbs .text-btn[aria-current='true'] {
  color: var(--_fg);
  font-weight: 600;
}

.tm-scroll {
  padding: var(--_space-3) var(--_space-4);
}

.tm-map {
  position: relative;
  width: 100%;
  max-height: 560px;
  aspect-ratio: 1000 / 560;
  overflow: hidden;
  direction: ltr;
}

.vt[data-fullscreen] .tm-map {
  max-height: none;
}

.c0 {
  --_c: var(--_chart-1);
}

.c1 {
  --_c: var(--_chart-2);
}

.c2 {
  --_c: var(--_chart-3);
}

.c3 {
  --_c: var(--_chart-4);
}

.c4 {
  --_c: var(--_chart-5);
}

.c5 {
  --_c: var(--_chart-6);
}

.c6 {
  --_c: var(--_chart-7);
}

.c7 {
  --_c: var(--_chart-8);
}

.tm-item {
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 2px 5px;
  overflow: hidden;
  border: 1px solid var(--_surface);
  border-radius: 3px;
  background: color-mix(in srgb, var(--_c) calc(40% - var(--_level, 1) * 8%), var(--_surface));
  color: var(--_fg);
  font-size: var(--_font-size-small);
  line-height: 16px;
  cursor: pointer;
}

.tm-group {
  background: color-mix(in srgb, var(--_c) 14%, var(--_surface));
}

.tm-item:hover {
  background: color-mix(in srgb, var(--_c) 50%, var(--_surface));
}

.tm-group:hover {
  background: color-mix(in srgb, var(--_c) 24%, var(--_surface));
}

.tm-item:focus-visible {
  z-index: 1;
  outline: 2px solid var(--_fg);
  outline-offset: -2px;
}

.tm-item.match {
  background: color-mix(in srgb, var(--_accent) 50%, var(--_surface));
  font-weight: 600;
}

.tm-item.dim {
  opacity: 0.45;
}

.tm-name,
.tm-size {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tm-group > .tm-name {
  font-weight: 600;
}

.tm-size {
  color: var(--_fg-muted);
  font-variant-numeric: tabular-nums;
}

.tm-details,
.tm-match {
  min-height: 1.4em;
  margin: 0;
  padding: var(--_space-2) var(--_space-4);
  border-top: 1px solid var(--_border);
  font-variant-numeric: tabular-nums;
  overflow-wrap: anywhere;
}

.tm-match {
  color: var(--_fg-muted);
}

.tm-table {
  overflow: auto;
  max-height: 560px;
}

.tm-table:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

.tm-table tr.match th,
.tm-table tr.match td {
  background: var(--_accent-soft);
}

.tm-row-name {
  max-width: 60ch;
  font-weight: 400;
  overflow-wrap: anywhere;
}

.tm-swatch {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin-inline-end: 8px;
  border-radius: 2px;
  background: color-mix(in srgb, var(--_c) 60%, var(--_surface));
}

.tm-edit > .editor-body {
  max-height: min(40vh, 320px);
  border-bottom: 1px solid var(--_border);
}
`;var C=1e5,et=64,y=class extends Error{},b=n=>typeof n=="object"&&n!==null&&!Array.isArray(n),L=class{constructor(){this.count=1,this.index=new Map,this.given=new Map,this.root=this.node("",null)}node(s,t){return{id:this.count++,name:s,total:0,self:0,depth:t?t.depth+1:0,parent:t,children:[]}}child(s,t){let e=this.index.get(s);e||(e=new Map,this.index.set(s,e));let r=e.get(t);if(!r){if(this.count>C||s.depth>=et)return null;r=this.node(t,s),e.set(t,r),s.children.push(r)}return r}add(s,t){if(!Number.isFinite(t)||t<0)return;let e=this.root;for(let r of s){let i=this.child(e,r.slice(0,300));if(!i)return;e=i}this.given.set(e,(this.given.get(e)??0)+t)}finish(){let s=[],t=[this.root];for(;t.length;){let e=t.pop();s.push(e),t.push(...e.children)}for(let e=s.length-1;e>=0;e-=1){let r=s[e];r.children=r.children.filter(a=>a.total>0),r.children.sort((a,o)=>o.total-a.total||a.name.localeCompare(o.name));let i=r.children.reduce((a,o)=>a+o.total,0);r.total=Math.max(this.given.get(r)??0,i),r.self=r.total-i}return this.root}};function S(n){return n.trim().split(/[\\/]+/).filter(s=>s&&s!==".")}function st(n){let s=n.trim();if(!s)throw new y("empty");let t=new L,e,r=!1;if(/^[[{]/.test(s)){let a;try{a=JSON.parse(s)}catch(o){throw new y(`json:${o instanceof Error?o.message:""}`)}if(b(a)&&(b(a.outputs)||b(a.inputs))&&!("children"in a))e="esbuild",r=!0,ht(a,t);else if(b(a)&&(Array.isArray(a.modules)||Array.isArray(a.children)&&a.children.some(o=>b(o)&&Array.isArray(o.modules))))e="webpack",r=!0,V(a,t);else if(Array.isArray(a))e="list",mt(a,t);else if(b(a)&&Array.isArray(a.children))e="tree",pt(a,t);else throw new y("format")}else{let a=s.split(/\r?\n/).filter(o=>o.trim());a.every(o=>/^\s*\d+(?:\.\d+)?[KMGTP]?\s+\S/.test(o))?(e="du",ut(a,t)):(e="csv",dt(s,t))}let i=t.finish();if(!i.total)throw new y("noSizes");return{root:i,format:e,bytes:r,count:t.count-1}}function ht(n,s){let t=b(n.outputs)?Object.entries(n.outputs).filter(([e])=>!e.endsWith(".map")):[];if(t.length){for(let[e,r]of t){if(!b(r)||!b(r.inputs))continue;let i=t.length>1?[e]:[];for(let[a,o]of Object.entries(r.inputs))s.add([...i,...S(a)],b(o)?A(o.bytesInOutput)??0:0)}return}for(let[e,r]of Object.entries(n.inputs))s.add(S(e),b(r)?A(r.bytes)??0:0)}function V(n,s,t=0){if(Array.isArray(n.modules))for(let e of n.modules){if(!b(e))continue;let r=typeof e.name=="string"?e.name:typeof e.identifier=="string"?e.identifier:"";if(Array.isArray(e.modules)&&e.modules.length){V({modules:e.modules},s,t+1);continue}let i=A(e.size)??0;r&&s.add(S(r.replace(/^.*!/,"").replace(/ \+ \d+ modules$/,"")),i)}if(Array.isArray(n.children)&&t<4)for(let e of n.children)b(e)&&V(e,s,t+1)}function mt(n,s){for(let t of n.slice(0,C)){if(Array.isArray(t)){typeof t[0]=="string"&&s.add(S(t[0]),A(t[1])??0);continue}if(!b(t))continue;let e=[t.path,t.name,t.file,t.id].find(i=>typeof i=="string"),r=[t.size,t.value,t.bytes,t.count].map(i=>A(i)).find(i=>i!==null);typeof e=="string"&&r!==void 0&&r!==null&&s.add(S(e),r)}}function pt(n,s){let t=[{item:n,path:[]}];for(;t.length;){let{item:e,path:r}=t.pop(),i=[e.value,e.size].map(a=>A(a)).find(a=>a!==null);i!=null&&s.add(r,i),Array.isArray(e.children)&&r.length<et&&e.children.forEach((a,o)=>{if(b(a)){let c=typeof a.name=="string"?a.name:String(o+1);t.push({item:a,path:[...r,c]})}})}}function ut(n,s){let t={"":1,K:1024,M:1048576,G:1073741824,T:1099511627776,P:0x4000000000000},e=n.some(i=>/^\s*\d+(?:\.\d+)?[KMGTP]\s/.test(i)),r=n.slice(0,C).map(i=>{let a=/^\s*(\d+(?:\.\d+)?)([KMGTP]?)\s+(.+)$/.exec(i);return a?{size:Number(a[1])*(e?t[a[2]]:1),path:S(a[3])}:null});for(let i of r)i&&s.add(i.path,i.size)}function dt(n,s){let{rows:t}=U(n),[e,...r]=t;if(!e||e.length<2)throw new y("format");let i=r.slice(0,200),a=m=>i.length>0&&i.every(p=>!p[m]?.trim()||A(p[m])!==null),o=e.findIndex((m,p)=>a(p));if(o<0)throw new y("format");let c=e.map((m,p)=>p).filter(m=>m<o&&!a(m));if(!c.length)throw new y("format");for(let m of r.slice(0,C)){let p=A(m[o]??"");if(p===null)continue;let w=c.length===1?S(m[c[0]]??""):c.map(d=>(m[d]??"").trim()).filter(Boolean);w.length&&s.add(w,p)}}function N(n){let s=[];for(let t=n;t;t=t.parent)s.unshift(t);return s}function rt(n,s){let t=n.reduce((d,g)=>d+Math.max(0,g),0),e=n.map(()=>({x:s.x,y:s.y,w:0,h:0}));if(!t||s.w<=0||s.h<=0)return e;let r=s.w*s.h/t,i=n.map(d=>Math.max(0,d)*r),{x:a,y:o,w:c,h:m}=s,p=0,w=(d,g,f,l)=>{let v=d*d,u=l*l;return Math.max(u*f/v,v/(u*g))};for(;p<i.length;){let d=Math.min(c,m),g=p,f=0,l=1/0,v=0;for(;g<i.length;){let x=i[g];if(x<=0){g+=1;continue}let _=f+x,T=Math.min(l,x),M=Math.max(v,x);if(f>0&&w(_,T,M,d)>w(f,l,v,d))break;f=_,l=T,v=M,g+=1}if(f<=0)break;let u=f/d,k=0;for(let x=p;x<g;x+=1){let _=i[x]/u;e[x]=c>=m?{x:a,y:o+k,w:u,h:_}:{x:a+k,y:o,w:_,h:u},k+=_}c>=m?(a+=u,c-=u):(o+=u,m-=u),p=g}return e}function it(n){let s=r=>{let i=/^[=+\-@\t\r]/.test(r)?`'${r}`:r;return/[",\n\r]/.test(i)?`"${i.replace(/"/g,'""')}"`:i},t=["path,size"],e=[n];for(;e.length&&t.length<=C;){let r=e.pop();r.self>0&&r.depth>0&&t.push(`${s(N(r).slice(1).map(i=>i.name).join("/"))},${r.self}`);for(let i=r.children.length-1;i>=0;i-=1)e.push(r.children[i])}return t.join(`
`)}var at=Object.freeze({treemapMap:"Map",treemapList:"List",treemapItems:"Items",treemapName:"Name",treemapSize:"Size",treemapShare:"Share",treemapAll:"All",treemapZoom:"Zoom",treemapItem:"{name}, {size}, {percent}",treemapGroup:"{name}, {size}, {percent}, {count} items",treemapOwn:"(own size)",treemapMatches:"Matches take {percent} of the total.",treemapNoMatch:"No match.",treemapCopyCsv:"Copy sizes as CSV",treemapInvalidEmpty:"No data.",treemapInvalidNoSizes:"No size was found.",treemapInvalidFormat:"Expected a JSON tree, an esbuild metafile, webpack stats, a list of paths and sizes, CSV or the output of du.",treemapInvalidJson:"The JSON could not be read: {message}"}),ot={treemapMap:"Carte",treemapList:"Liste",treemapItems:"\xC9l\xE9ments",treemapName:"Nom",treemapSize:"Taille",treemapShare:"Part",treemapAll:"Tout",treemapZoom:"Zoom",treemapItem:"{name}, {size}, {percent}",treemapGroup:"{name}, {size}, {percent}, {count} \xE9l\xE9ments",treemapOwn:"(taille propre)",treemapMatches:"Les r\xE9sultats repr\xE9sentent {percent} du total.",treemapNoMatch:"Aucun r\xE9sultat.",treemapCopyCsv:"Copier les tailles en CSV",treemapInvalidEmpty:"Aucune donn\xE9e.",treemapInvalidNoSizes:"Aucune taille trouv\xE9e.",treemapInvalidFormat:"Un arbre JSON, un metafile esbuild, des stats webpack, une liste de chemins et de tailles, du CSV ou la sortie de du est attendu.",treemapInvalidJson:"Le JSON n\u2019a pas pu \xEAtre lu : {message}"};F({en:at,fr:ot});var ft=["map","list"],j=1e3,H=560,D=22,q=3,nt=8,bt=3e3,gt=500,ct=class extends Z{static type="treemap";static componentAttributes=Object.freeze(["depth","unit","tabs","default-tab"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,tabs:!0}};static styles=[Q,tt];constructor(){super(),this.parsed=null,this.zoom=null,this.focused=null,this.tab=null,this.query="",this.matchNodes=[],this.panelId=J("panel"),this.mapHost=null,this.details=null,this.items=[],this.elements=new Map,this.editor=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),this.editor?.destroy(),super.disconnectedCallback()}contentChanged(){this.parsed=null,this.zoom=null,this.focused=null}parse(){let s=this.text??"";if(this.parsed?.text===s)return this.parsed;try{this.parsed={text:s,tree:st(s),error:null}}catch(t){this.parsed={text:s,tree:null,error:t instanceof Error?t:new Error(String(t))}}return this.parsed}get tree(){return this.parse().tree}get currentTab(){return this.feature("tabs")?this.tab??G(this.getAttribute("default-tab"),ft,"map"):"map"}size(s,t){let e=this.getAttribute("unit")?.trim().slice(0,30);if(e==="bytes"||!e&&t.bytes)return Y(s,this.locale);let r=O(Math.round(s*100)/100,this.locale);return e?`${r} ${e}`:r}percent(s,t){return new Intl.NumberFormat(this.locale,{style:"percent",maximumFractionDigits:1}).format(t?s/t:0)}renderContent(s){let t=this.t,{tree:e,error:r}=this.parse(),i=this.currentTab,a=h("div",{class:"panel",attrs:{id:this.panelId}}),o=h("div",{class:`body tm-body tab-${i}`,part:"body"});this.mapHost=null,r||!e?o.append(X(this.errorText(r))):(this.mapHost=h("div",{class:"tm-host"}),this.details=h("p",{class:"tm-details",part:"details",attrs:{"aria-live":"polite"}}),o.append(this.mapHost,this.details),this.renderView());let c=[];if(this.editing){let f=this.createEditor();a.classList.add("tm-edit"),a.append(h("div",{class:"body editor-body",part:"body source"},f.element),o),c=this.historyButtons(f)}else a.append(o);let m=this.feature("tabs")&&e&&!this.editing?W({tabs:[{id:"map",label:t("treemapMap"),icon:"chart"},{id:"list",label:t("treemapList"),icon:"table"}],selected:i,label:t("tabs"),panelId:this.panelId,onSelect:f=>{this.tab=f,this.render(),this.root.querySelector(`[data-tab="${f}"]`)?.focus(),E(this,I.TAB_CHANGE,{tab:f})}}):null;m&&a.setAttribute("role","tabpanel");let p={run:f=>{if(this.query=f.slice(0,K).trim().toLowerCase(),this.matchNodes=[],e&&this.query){let l=[e.root];for(;l.length;){let v=l.pop();v!==e.root&&v.name.toLowerCase().includes(this.query)&&this.matchNodes.push(v),l.push(...v.children)}}return this.renderView(),{total:this.matchNodes.length,capped:!1}},go:f=>{let l=this.matchNodes[f];l&&this.elements.get(l)?.scrollIntoView({block:"nearest"})},clear:()=>{this.query="",this.matchNodes=[],this.renderView()}},w=e?.format==="esbuild"||e?.format==="webpack"||e?.format==="tree"||e?.format==="list"?"sizes.json":e?.format==="du"?"sizes.txt":"sizes.csv",d=[e?this.searchButton(p):null,...c,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.text??"",this.downloadName(w),"text/plain"):null,this.feature("copy")&&e?this.copyButton(()=>it(this.zoom??e.root),t("treemapCopyCsv")):null],g=e?this.size(e.root.total,e):"";s.append(...this.chrome({badge:g,tabs:m,actions:d}),a),this.editor?.align()}errorText(s){let t=this.t;if(s instanceof y){if(s.message==="empty")return t("treemapInvalidEmpty");if(s.message==="noSizes")return t("treemapInvalidNoSizes");if(s.message.startsWith("json:"))return t("treemapInvalidJson",{message:s.message.slice(5)})}return t("treemapInvalidFormat")}renderView(){let s=this.mapHost,t=this.parse().tree;if(!s||!t)return;let e=this.t,r=this.zoom??t.root,i=h("nav",{class:"tm-crumbs",part:"crumbs",attrs:{"aria-label":e("treemapZoom")}});for(let o of N(r))i.append(h("button",{class:"text-btn",text:o===t.root?e("treemapAll"):o.name,attrs:{type:"button","aria-current":o===r?"true":null,"data-focus-key":`crumb-${o.id}`},on:{click:()=>this.zoomTo(o===t.root?null:o)}}));let a=[i,this.currentTab==="list"?this.listView(t,r):this.mapView(t,r)];if(this.query){let c=this.matchNodes.filter(m=>!this.matchNodes.some(p=>p!==m&&N(m).includes(p))).reduce((m,p)=>m+p.total,0);a.push(h("p",{class:"tm-match",text:this.matchNodes.length?e("treemapMatches",{percent:this.percent(c,t.root.total)}):e("treemapNoMatch")}))}s.replaceChildren(...a)}mapView(s,t){let e=this.t,r=B(this.getAttribute("depth"),{min:1,max:4,fallback:2}),i=s.root.total||1,a=new Set(this.matchNodes);this.elements=new Map,this.items=t.children.slice(),(!this.focused||!this.items.includes(this.focused))&&(this.focused=this.items[0]??null);let o=h("div",{class:"tm-map",part:"map",attrs:{role:"tree","aria-label":t===s.root?e("treemapItems"):t.name},on:{keydown:p=>this.onKey(p)}}),c=0,m=(p,w,d,g)=>{let f=rt(p.map(l=>l.total),w);p.forEach((l,v)=>{let u=f[v];if(u.w<2||u.h<2||c>=bt)return;c+=1;let k=d===1?v%nt:g,x=l.children.length>0,_=x&&d<r&&u.w>60&&u.h>D+24,T=a.has(l),M=e(x?"treemapGroup":"treemapItem",{name:l.name,size:this.size(l.total,s),percent:this.percent(l.total,i),count:O(l.children.length,this.locale)}),z=h("div",{class:`tm-item c${k}${_?" tm-group":""}${T?" match":""}${this.query&&!T?" dim":""}`,part:T?"item item-match":"item",attrs:d===1?{role:"treeitem","aria-level":1,"aria-label":M,tabindex:l===this.focused?"0":"-1","data-focus-key":`item-${l.id}`,title:M}:{"aria-hidden":"true",title:M},on:{click:$=>{$.stopPropagation(),this.open(d===1||x?l:l.parent)},mouseenter:()=>this.describe(l,s),focus:()=>this.describe(l,s)}});if(z.style.left=`${u.x/j*100}%`,z.style.top=`${u.y/H*100}%`,z.style.width=`${u.w/j*100}%`,z.style.height=`${u.h/H*100}%`,z.style.setProperty("--_level",String(d)),u.w>44&&u.h>16){let $=h("span",{class:"tm-name",text:l.name});z.append($),!_&&u.h>36&&u.w>60&&z.append(h("span",{class:"tm-size",text:this.size(l.total,s)}))}o.append(z),this.elements.set(l,z),_&&m(l.children,{x:u.x+q,y:u.y+D,w:u.w-2*q,h:u.h-D-q},d+1,k)})};return m(t.children,{x:0,y:0,w:j,h:H},1,0),h("div",{class:"tm-scroll"},o)}listView(s,t){let e=this.t,r=s.root.total||1,i=new Set(this.matchNodes);this.elements=new Map;let a=h("tr",{},h("th",{attrs:{scope:"col"},text:e("treemapName")}),h("th",{class:"col-number",attrs:{scope:"col"},text:e("treemapSize")}),h("th",{class:"col-number",attrs:{scope:"col"},text:e("treemapShare")})),o=h("tbody");return t.children.slice(0,gt).forEach((c,m)=>{let p=c.children.length?h("button",{class:"text-btn",text:c.name,attrs:{type:"button","data-focus-key":`row-${c.id}`},on:{click:()=>this.open(c)}}):c.name,w=h("tr",{class:i.has(c)?"match":""},h("th",{class:"tm-row-name",attrs:{scope:"row"}},h("span",{class:`tm-swatch c${m%nt}`,attrs:{"aria-hidden":"true"}}),p),h("td",{class:"col-number",text:this.size(c.total,s)}),h("td",{class:"col-number",text:this.percent(c.total,r)}));o.append(w),this.elements.set(c,w)}),t.self>0&&t.children.length&&o.append(h("tr",{},h("th",{class:"tm-row-name",attrs:{scope:"row"},text:e("treemapOwn")}),h("td",{class:"col-number",text:this.size(t.self,s)}),h("td",{class:"col-number",text:this.percent(t.self,r)}))),h("div",{class:"tm-table",attrs:{tabindex:"0",role:"region","aria-label":e("treemapList")}},h("table",{class:"grid",part:"table"},h("thead",{},a),o))}describe(s,t){if(!this.details)return;let e=N(s).slice(1).map(r=>r.name).join(" / ");this.details.textContent=`${e} \u2014 ${this.size(s.total,t)} (${this.percent(s.total,t.root.total)})`}open(s){let t=this.parse().tree;t&&(s.children.length?this.zoomTo(s===t.root?null:s):(this.focused=s,this.select(s,!0)))}select(s,t){E(this,I.SELECT,{name:s.name,path:N(s).slice(1).map(e=>e.name),size:s.total,leaf:t})}zoomTo(s){let t=this.zoom;this.zoom=s,this.focused=t&&s&&N(t).includes(s)?N(t)[s.depth+1]??null:null,!s&&t&&(this.focused=N(t)[1]??null),this.renderView();let e=this.focused?this.elements.get(this.focused):null;e&&this.currentTab==="map"?e.focus():this.root.querySelector('.tm-crumbs [aria-current="true"]')?.focus(),s&&this.select(s,!1)}onKey(s){let t=this.parse().tree,e=this.focused;if(!t||!e)return;let r=this.items.indexOf(e),i=this.items.filter(m=>this.elements.has(m)),a=i.indexOf(e),o;switch(s.key){case"ArrowRight":case"ArrowDown":o=i[a+1];break;case"ArrowLeft":case"ArrowUp":o=i[a-1];break;case"Home":o=i[0];break;case"End":o=i[i.length-1];break;case"Enter":case" ":s.preventDefault(),this.open(e);return;case"Escape":case"Backspace":if(!this.zoom)return;s.preventDefault(),s.stopPropagation(),this.zoomTo(this.zoom.parent&&this.zoom.parent!==t.root?this.zoom.parent:null);return;default:return}if(s.preventDefault(),!o||r<0)return;this.elements.get(e)?.setAttribute("tabindex","-1"),this.focused=o;let c=this.elements.get(o);c?.setAttribute("tabindex","0"),c?.focus()}createEditor(){return this.editor?.destroy(),this.editor=new R({text:this.text??"",language:/^\s*[[{]/.test(this.text??"")?"json":"plaintext",lineNumbers:!0,wrap:!1,highlightLimit:P().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:s=>this.edited(s),onChange:s=>E(this,I.CHANGE,{value:s}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.parsed=null,this.zoom=null,this.previewTimer=setTimeout(()=>this.render(),300)}};export{ct as a};
