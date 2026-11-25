/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as O,b as I,c as y,d as x,e as v,f as $,g as q,h as F,i as P,j as N}from"./chunk-HAOEEKZP.js";import{i as H}from"./chunk-BTEG3GEC.js";import{P as B,Q as M,S as g,T,W as z,_ as R,ba as U,c as p,d as m,e as w,o as n,z as A}from"./chunk-JAZI474S.js";import{h as C,k as L,l as D,m as S,q as E}from"./chunk-SCKP2KTO.js";var j=Object.freeze({hexLabel:"Bytes",hexSize:"{size} bytes",hexCopyHex:"Copy as hex",hexCopyBase64:"Copy as base64",hexByte:"Offset {offset}: {value}, {char}",hexInvalid:"These bytes could not be read: {message}"}),K={hexLabel:"Octets",hexSize:"{size} octets",hexCopyHex:"Copier en hexad\xE9cimal",hexCopyBase64:"Copier en base64",hexByte:"Position {offset} : {value}, {char}",hexInvalid:"Ces octets n\u2019ont pas pu \xEAtre lus : {message}"};var V=`/*
 * Hex dump: offset, hex bytes and ASCII characters per row, bytes colored by kind,
 * the hovered byte paired in both columns.
 */
.hex-body {
  background: var(--_code-bg);
}

.dump {
  --_cell: 2.6ch;
  min-width: 100%;
  width: max-content;
  padding: var(--_space-2) 0;
  color: var(--_code-fg);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  line-height: 1.6;
  font-variant-numeric: tabular-nums;
}

.dump:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

/* Blocks not built yet keep their height so the scroll bar is right. */
.chunk:not(.filled) {
  height: calc(var(--_rows) * 1.6em);
}

.row {
  display: grid;
  grid-template-columns: calc(var(--_digits) * 1ch) calc(var(--_columns) * var(--_cell) + 2ch) auto;
  column-gap: var(--_space-4);
  padding: 0 var(--_space-4);
}

.dump.no-ascii .row {
  grid-template-columns: calc(var(--_digits) * 1ch) auto;
}

.row:hover {
  background: color-mix(in srgb, var(--_code-fg) 5%, transparent);
}

.offset {
  color: var(--_code-gutter);
  user-select: none;
  -webkit-user-select: none;
}

.hex .b {
  display: inline-block;
  width: var(--_cell);
  text-align: center;
  border-radius: var(--_radius-sm);
}

.hex .b.group {
  margin-left: 1ch;
}

.ascii {
  white-space: pre;
  border-left: 1px solid var(--_border);
  padding-left: var(--_space-3);
}

.ascii .c {
  border-radius: var(--_radius-sm);
}

/* Byte kinds. */
.null {
  color: var(--vt-hex-null, var(--_code-gutter));
}

.whitespace {
  color: var(--_syntax-string);
}

.control {
  color: var(--vt-hex-control, var(--_syntax-keyword));
}

.high {
  color: var(--vt-hex-high, var(--_syntax-number));
}

.pair {
  background: color-mix(in srgb, var(--_accent) 18%, transparent);
}

.match {
  background: var(--_highlight);
  color: var(--_fg);
}

.current {
  background: var(--_highlight-current);
  color: var(--_fg);
}

.selected {
  outline: 2px solid var(--_accent);
  outline-offset: -1px;
}

@media (forced-colors: active) {
  .selected,
  .current {
    outline: 2px solid Highlight;
  }
}
`;S({en:j,fr:K});var W=["auto","hex","base64"],f=128,X=class extends U{static type="hex";static fromData=H;static dataAttributes=Object.freeze(["format","label"]);static componentAttributes=Object.freeze(["columns","group","format","ascii","uppercase","offset"]);static presets={simple:{ascii:!0},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,ascii:!0}};static styles=[V];static allowEmpty=!0;static upgradeProperties=["content","bytes"];constructor(){super(),this._bytes=void 0,this.fetched=null,this.byteData=new Uint8Array(0),this.decodeError=null,this.cursor=-1,this.hits=[],this.matchLength=0,this.dump=null,this.chunks=[]}get bytes(){return this.byteData.slice()}set bytes(t){this._bytes=t==null?void 0:new Uint8Array(t),this._connected&&this.reload()}get fileType(){return v(this.byteData)}cancelFetch(){this._abort?.abort()}reload(){let t=this.getAttribute("src");if(this.fetched=null,this._bytes||this._content!==void 0||!t?.trim()){this._bytes?(this._loadToken+=1,this.cancelFetch(),this.setText("")):super.reload();return}let e=++this._loadToken;this.cancelFetch();let s=new AbortController;this._abort=s,this.loading=!0,this.error=null,this.requestRender();let r=C();N(t,{allowRemote:p(this.getAttribute("allow-remote"))===!0,maxSize:r.maxSize,timeout:r.fetchTimeout,signal:s.signal}).then(i=>{e===this._loadToken&&(this.fetched=i,this.setText(""))},i=>e===this._loadToken&&!A(i)&&this.setError(i))}contentChanged(){if(this.decodeError=null,this.cursor=-1,this.hits=[],this._bytes)this.byteData=this._bytes;else if(this.fetched)this.byteData=this.fetched;else try{this.byteData=O(this.text??"",w(this.getAttribute("format"),W,"auto"))}catch(t){this.byteData=new Uint8Array(0),this.decodeError=t instanceof Error?t.message:String(t)}}attributeChangedCallback(t,e,s){t==="format"&&e!==s&&this.contentChanged(),super.attributeChangedCallback(t,e,s)}get columns(){return m(this.getAttribute("columns"),{min:1,max:64,fallback:16})}get base(){return m(this.getAttribute("offset"),{min:0,max:2**48,fallback:0})}hex(t,e=2){let s=x(t,e);return this.hasAttribute("uppercase")&&p(this.getAttribute("uppercase"))!==!1?s.toUpperCase():s}renderContent(t){let e=this.t,s=this.byteData,r=n("div",{class:"body hex-body",part:"body",attrs:{tabindex:"-1"}});this.decodeError?r.append(R(e("hexInvalid",{message:this.decodeError}))):s.length?r.append(this.buildDump()):r.append(n("div",{class:"empty",part:"empty",text:e("empty")}));let i=v(s),a=e("hexSize",{size:E(s.length,this.locale)}),o=[this.searchButton(this.searchTarget()),this.fullscreenButton(),this.feature("download")&&s.length?this.binaryDownload(i?.mime):null,this.feature("copy")&&s.length?this.copyButton(()=>P(this.byteData),e("hexCopyBase64"),"copy-base64"):null,this.feature("copy")&&s.length?this.copyButton(()=>F(this.byteData,this.columns),e("hexCopyHex")):null];t.append(...this.chrome({badge:i?`${i.name} \xB7 ${a}`:a,actions:o}),r)}buildDump(){let t=this.byteData,e=this.columns,s=Math.ceil(t.length/e),r=Math.max(8,x(this.base+t.length).length),i=p(this.getAttribute("ascii"))!==!1,a=n("div",{class:`dump${i?"":" no-ascii"}`,part:"dump",attrs:{role:"grid",tabindex:"0","aria-label":this.t("hexLabel"),"aria-rowcount":String(s),"data-focus-key":"dump"}});a.style.setProperty("--_columns",String(e)),a.style.setProperty("--_digits",String(r)),this.dump=a,this.chunks=[];for(let o=0;o<s;o+=f){let h=Math.min(s,o+f),c=n("div",{class:"chunk",attrs:{role:"rowgroup"}});c.style.setProperty("--_rows",String(h-o)),this.chunks.push(c),a.append(c);let l=()=>{for(let d=o;d<h;d+=1)c.append(this.buildRow(d,r,i));c.classList.add("filled"),this.paintMarks(o*e,h*e)};s>f?B(c,l):l()}return a.addEventListener("pointerover",o=>this.hover(o)),a.addEventListener("pointerleave",()=>this.hover(null)),a.addEventListener("click",o=>{let h=G(o.target);h>=0&&this.select(h)}),a.addEventListener("keydown",o=>this.onKey(o)),a.addEventListener("focus",()=>{this.cursor<0&&this.byteData.length&&this.select(0,!1)}),a}buildRow(t,e,s){let r=this.columns,i=m(this.getAttribute("group"),{min:0,max:64,fallback:8}),a=t*r,o=Math.min(this.byteData.length,a+r),h=n("span",{class:"hex",part:"hex",attrs:{role:"gridcell"}}),c=s?n("span",{class:"ascii",part:"ascii",attrs:{role:"gridcell"}}):null;for(let l=a;l<o;l+=1){let d=this.byteData[l],k=I(d),b=n("span",{class:`b ${k}`,text:this.hex(d)});if(b.dataset.i=String(l),i&&l>a&&(l-a)%i===0&&b.classList.add("group"),h.append(b),c){let _=n("span",{class:`c ${k}`,text:y(d)});_.dataset.i=String(l),c.append(_)}}return n("div",{class:"row",attrs:{role:"row","aria-rowindex":String(t+1)}},n("span",{class:"offset",part:"offset",text:this.hex(this.base+a,e),attrs:{role:"rowheader"}}),h,c)}cells(t){let e=this.chunks[Math.floor(t/this.columns/f)];return e?(M(e),[...e.querySelectorAll(`[data-i="${t}"]`)]):[]}hover(t){for(let s of this.dump?.querySelectorAll(".pair")??[])s.classList.remove("pair");let e=t?G(t.target):-1;if(e>=0)for(let s of this.cells(e))s.classList.add("pair")}select(t,e=!0){if(!this.dump||t<0||t>=this.byteData.length)return;for(let i of this.dump.querySelectorAll(".selected"))i.classList.remove("selected");this.cursor=t;let s=this.cells(t);for(let i of s)i.classList.add("selected");s[0]?.scrollIntoView({block:"nearest",inline:"nearest"});let r=this.byteData[t];this.announce(this.t("hexByte",{offset:this.hex(this.base+t,1),value:this.hex(r),char:y(r)})),e&&D(this,L.SELECT,{offset:this.base+t,value:r})}onKey(t){if(this.cursor<0)return;let e=this.columns,s=e*16,r={ArrowRight:1,ArrowLeft:-1,ArrowDown:e,ArrowUp:-e,PageDown:s,PageUp:-s},i=this.cursor;if(t.key in r)i+=r[t.key];else if(t.key==="Home")i=t.ctrlKey?0:i-i%e;else if(t.key==="End")i=t.ctrlKey?this.byteData.length-1:i-i%e+e-1;else return;t.preventDefault(),this.select(Math.max(0,Math.min(this.byteData.length-1,i)))}searchTarget(){return{run:t=>{let e=$(t.slice(0,T).trim()),s=!/^(?:[0-9a-fA-F]{2}|[\s,]|0x)+$/i.test(t.trim());return this.hits=q(this.byteData,e,{limit:g,ignoreCase:s}),this.matchLength=e.length,this.repaintMarks(),{total:this.hits.length,capped:this.hits.length>=g}},go:t=>{for(let s of this.dump?.querySelectorAll(".current")??[])s.classList.remove("current");let e=this.hits[t];if(e!==void 0){for(let s=e;s<e+this.matchLength;s+=1)for(let r of this.cells(s))r.classList.add("current");this.cells(e)[0]?.scrollIntoView({block:"nearest",inline:"nearest"})}},clear:()=>{this.hits=[],this.repaintMarks()}}}repaintMarks(){for(let t of this.dump?.querySelectorAll(".match, .current")??[])t.classList.remove("match","current");this.paintMarks(0,this.byteData.length)}paintMarks(t,e){if(this.dump){for(let s of this.hits)if(!(s+this.matchLength<=t||s>=e))for(let r=Math.max(s,t);r<Math.min(s+this.matchLength,e);r+=1)for(let i of this.dump.querySelectorAll(`.filled [data-i="${r}"]`))i.classList.add("match")}}binaryDownload(t){return z({icon:"download",label:this.t("download"),key:"download",part:"download-button",onClick:()=>{let e=new Blob([this.byteData.slice()],{type:t??"application/octet-stream"}),s=URL.createObjectURL(e),r=n("a",{attrs:{href:s,download:this.downloadName("data.bin"),rel:"noopener"}});r.style.display="none",document.body.append(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}})}};function G(u){return u instanceof HTMLElement&&u.dataset.i!==void 0?Number(u.dataset.i):-1}export{X as a};
