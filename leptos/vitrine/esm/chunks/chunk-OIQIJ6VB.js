/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as G}from"./chunk-PIFKHUVR.js";import{a as H}from"./chunk-5Y6ZLKSA.js";import{a as j}from"./chunk-VUXWEGPX.js";import{B as $,C as _,E as h,G as K,O as S,U,_ as Z,b as T,c as V,d as F,m as L,o as d,q as D}from"./chunk-JAZI474S.js";import{k as z,l as O,m as P,q as C}from"./chunk-SCKP2KTO.js";var Y=`/*
 * Changelog: releases as a timeline, with colored groups of changes.
 */
.cl-body {
  display: grid;
  gap: var(--_space-4);
}

.kind-breaking {
  --_tone: var(--_danger);
}

.kind-security {
  --_tone: var(--_danger);
}

.kind-added {
  --_tone: var(--_success);
}

.kind-changed {
  --_tone: var(--_accent);
}

.kind-deprecated,
.kind-removed {
  --_tone: var(--_warning);
}

.kind-fixed {
  --_tone: color-mix(in srgb, var(--_accent) 50%, var(--_success));
}

.kind-other {
  --_tone: var(--_fg-muted);
}

/* ---------- Since, filters ---------- */

.cl-since {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2) var(--_space-3);
  margin: 0;
  padding: var(--_space-3) var(--_space-4);
  border: 1px solid var(--_border);
  border-inline-start: 3px solid var(--_accent);
  border-radius: var(--_radius-sm);
  background: var(--_accent-soft);
  font-size: var(--_font-size-ui);
}

.cl-since.none {
  border-inline-start-color: var(--_border-strong);
  background: transparent;
  color: var(--_fg-muted);
}

.cl-count {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
}

.cl-count::before,
.cl-filter.kind-breaking::before,
.cl-filter[class*='kind-']::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: var(--_radius-full);
  background: var(--_tone);
}

.cl-filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2);
}

.cl-filter {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-2);
  padding: var(--_space-1) var(--_space-3);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-full);
  background: var(--_surface);
  color: var(--_fg);
  font: inherit;
  font-size: var(--_font-size-ui);
  cursor: pointer;
}

.cl-filter[aria-pressed='true'] {
  border-color: var(--_accent);
  background: var(--_accent-soft);
  font-weight: 600;
}

.cl-filter:focus-visible,
.cl-icon-button:focus-visible,
.cl-link:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.cl-filter-count {
  color: var(--_fg-muted);
  font-variant-numeric: tabular-nums;
}

/* ---------- Releases ---------- */

.cl-list {
  display: grid;
  gap: var(--_space-5);
}

.cl-release {
  position: relative;
  display: grid;
  gap: var(--_space-3);
  padding-inline-start: var(--_space-5);
  border-inline-start: 2px solid var(--_border);
  scroll-margin-top: var(--_space-4);
}

.cl-release::before {
  content: '';
  position: absolute;
  top: 6px;
  inset-inline-start: -7px;
  width: 12px;
  height: 12px;
  border: 2px solid var(--_surface);
  border-radius: var(--_radius-full);
  background: var(--_accent);
}

.cl-release.unreleased::before {
  border: 2px dashed var(--_accent);
  background: var(--_surface);
}

.cl-release.yanked .cl-version {
  text-decoration: line-through;
}

.cl-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2) var(--_space-3);
}

.cl-version {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--_space-2);
  margin: 0;
  font: 700 18px / 1.3 var(--_font-mono);
}

.cl-title {
  font-family: var(--_font-ui);
  font-size: 15px;
  font-weight: 600;
}

.cl-badge {
  padding: 0 var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  color: var(--_fg);
  font-size: var(--_font-size-small);
  font-weight: 600;
  line-height: 1.6;
}

.cl-badge.latest {
  border-color: var(--_success);
}

.cl-badge.prerelease {
  border-color: var(--_warning);
}

.cl-badge.yanked,
.cl-badge.breaking {
  border-color: var(--_danger);
}

.cl-item .cl-badge.breaking {
  margin-inline-end: var(--_space-1);
}

.cl-date {
  color: var(--_fg-muted);
  font-size: var(--_font-size-ui);
}

.cl-actions {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1) var(--_space-3);
  margin-inline-start: auto;
}

.cl-link {
  color: var(--_accent-fg);
  font-size: var(--_font-size-ui);
}

.cl-icon-button {
  display: inline-grid;
  place-items: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: var(--_radius-sm);
  background: transparent;
  color: var(--_fg-muted);
  cursor: pointer;
}

.cl-icon-button:hover {
  background: var(--_accent-soft);
  color: var(--_fg);
}

.cl-icon-button .icon {
  width: 16px;
  height: 16px;
}

.cl-notes {
  margin: 0;
  color: var(--_fg-muted);
}

.cl-group {
  display: grid;
  gap: var(--_space-1);
}

.cl-kind {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-2);
  width: fit-content;
  margin: 0;
  font-size: var(--_font-size-ui);
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.cl-kind::before {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background: var(--_tone);
}

.cl-items {
  margin: 0;
  padding-inline-start: var(--_space-5);
}

.cl-item {
  padding: 2px 0;
  overflow-wrap: anywhere;
}

.cl-item::marker {
  color: var(--_tone);
}

.cl-item.nested {
  margin-inline-start: var(--_space-5);
  list-style-type: circle;
}

.cl-item.breaking {
  font-weight: 500;
}

.cl-item code,
.cl-notes code {
  padding: 0 4px;
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  font-family: var(--_font-mono);
  font-size: 0.92em;
}

.cl-item a,
.cl-notes a {
  color: var(--_accent-fg);
}

.cl-scope {
  font-weight: 600;
}

.cl-more {
  justify-self: start;
}

@media (max-width: 560px) {
  .cl-actions {
    margin-inline-start: 0;
  }
}
`;var f=["breaking","security","added","changed","deprecated","removed","fixed","other"],de={added:"added",features:"added",feature:"added",new:"added","new features":"added",changed:"changed",changes:"changed",improvements:"changed",enhancements:"changed","performance improvements":"changed",performance:"changed",refactor:"changed","code refactoring":"changed",updated:"changed","what's changed":"changed",deprecated:"deprecated",deprecations:"deprecated",deprecation:"deprecated",removed:"removed",removals:"removed",removal:"removed",fixed:"fixed",fixes:"fixed","bug fixes":"fixed",bugfixes:"fixed","bug fix":"fixed",security:"security","security fixes":"security","breaking changes":"breaking",breaking:"breaking","breaking change":"breaking"};function y(c){let e=h(c);return e&&/^https?:\/\/[^\s&]+$/i.test(e)?e:null}var pe=/\bv?(\d+(?:\.\d+){0,3}(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?)(?![\d.])/,ue=/(\d{4}-\d{2}-\d{2})(?:[T ][\d:.]+Z?)?/,q=2e3,J=2e3;function W(c){let e=c.replace(/[*_`]/g,"").trim().slice(0,100),n=e.toLowerCase().replace(/^[^\p{L}]+/u,"").replace(/[:\s]+$/,"");return{kind:de[n]??(/breaking/i.test(n)?"breaking":"other"),label:e.replace(/^[^\p{L}\p{N}]+/u,"")||e}}function X(c){let e=/^(#{1,6})\s+(.*?)\s*#*\s*$/.exec(c);return e?{level:e[1].length,text:e[2]}:null}function Q(c){let e=/\[([^\]]+)\]\(([^)\s]+)\)/.exec(c),n=c.replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/[[\]]/g,""),t=/\bunreleased\b/i.test(n),s=t?null:pe.exec(n);if(!t&&!s)return null;let r=ue.exec(n.slice(s?s.index+s[0].length:0));return{version:s?s[1]:"",title:"",date:r?K(`${r[1]}T00:00:00Z`):null,unreleased:t,yanked:/\byanked\b/i.test(n),prerelease:!!(s&&/-/.test(s[1])),url:null,compare:e?y(e[2]):null,notes:"",groups:[]}}function ee(c,e){let n=null,t=null,s=[],r=0;for(let i of c){let a=i.replace(/\s+$/,""),l=X(a);if(l){n={...W(l.text),items:[]},e.groups.push(n),t=null;continue}let o=/^(\s*)[-*+]\s+(.*)$/.exec(a);if(o&&r<J){n||(n={kind:"other",label:"",items:[]},e.groups.push(n)),t=te(o[2],n.kind,o[1].replace(/\t/g,"  ").length>=2?1:0),n.items.push(t),r+=1;continue}if(!a.trim()){t=null;continue}let p=/full changelog\W*(https:\/\/\S+\/compare\/\S+)/i.exec(a);if(p){e.compare??=y(p[1]);continue}t&&/^\s+\S/.test(a)?t.text=`${t.text} ${a.trim()}`.slice(0,4e3):!n&&e.groups.length===0&&s.push(a.trim())}e.notes=s.join(" ").slice(0,4e3),e.groups=e.groups.filter(i=>i.items.length)}function te(c,e,n){let t=c.trim(),s="",r=/^\*\*([^*:]{1,60}):\*\*\s*/.exec(t);r&&(s=r[1].trim(),t=t.slice(r[0].length));let i=e==="breaking"||/^(\*\*)?BREAKING( CHANGE)?\b|⚠/.test(t)||/^[a-z]+(\([^)]*\))?!:/.test(t);return{kind:e,text:t.slice(0,4e3),scope:s,breaking:i,depth:n}}function fe(c){let e=String(c??"").replace(/\r\n?/g,`
`).split(`
`),n={},t=[],s=null,r=!1;for(let i of e){/^\s*(```|~~~)/.test(i)&&(r=!r);let a=!r&&/^\s{0,3}\[([^\]]+)\]:\s*(\S+)/.exec(i);if(a){n[a[1].toLowerCase().replace(/^v/,"")]=a[2];continue}let l=r?null:X(i),o=l&&l.level<=2?Q(l.text):null;o&&t.length<q?(s={release:o,lines:[]},t.push(s)):s&&!(l&&l.level===1)&&s.lines.push(i)}return t.map(({release:i,lines:a})=>{ee(a,i);let l=i.unreleased?"unreleased":i.version.toLowerCase();return i.compare??=y(n[l]),i})}function ge(c){let e=Array.isArray(c)?c:$(c)&&Array.isArray(c.releases)?c.releases:null;if(!e)throw new R("shape");let n=[];for(let t of e.slice(0,q)){if(!$(t)||t.draft===!0)continue;let s=_(t.version??t.tag_name??t.tag,100),r=_(t.name??t.title,300),i=Q(s||r)??{version:s.replace(/^v/,""),title:"",date:null,unreleased:!1,yanked:!1,prerelease:!1,url:null,compare:null,notes:"",groups:[]};if(!i.version&&!i.unreleased)continue;let a={...i,title:r&&r.replace(/^v/,"")!==i.version?r:"",date:K(t.date??t.published_at??t.released_at??t.created_at)??i.date,prerelease:t.prerelease===!0||t.upcoming_release===!0||i.prerelease,yanked:t.yanked===!0||i.yanked,url:y(t.url??t.html_url??t._links?.self),compare:y(t.compare)};if($(t.changes))for(let[l,o]of Object.entries(t.changes)){if(!Array.isArray(o))continue;let{kind:p,label:u}=W(l),m={kind:p,label:u,items:o.slice(0,J).map(g=>te(_(g),p,0)).filter(g=>g.text)};m.items.length&&a.groups.push(m)}else{let l=_(t.body??t.description??t.notes,1e5);ee(l.replace(/\r\n?/g,`
`).split(`
`),a)}n.push(a)}return n}var R=class extends Error{};function ne(c){let e=String(c??"").trim();return/^[[{]/.test(e)?ge(JSON.parse(e)):fe(e)}function re(c,e){let n=r=>{let[i,a=""]=r.replace(/^v/i,"").split("+")[0].split(/-(.*)/s);return{parts:i.split(".").map(l=>Number(l)||0),pre:a}},t=n(c),s=n(e);for(let r=0;r<Math.max(t.parts.length,s.parts.length);r+=1){let i=(t.parts[r]??0)-(s.parts[r]??0);if(i)return i}return!t.pre||!s.pre?t.pre?-1:s.pre?1:0:t.pre.localeCompare(s.pre,"en",{numeric:!0})}function se(c){return c.unreleased?"unreleased":`v${c.version.replace(/[^0-9A-Za-z.+-]/g,"")}`}function ie(c,e=null){let n=e?e.replace(/\/+$/,""):null,t=n?/^https:\/\/[^/]+/.exec(n)?.[0]??null:null,s=!!(n&&/gitlab/.test(n)),r=[],i=/`([^`]+)`|\*\*([^*]+)\*\*|__([^_]+)__|(?<![\w*])\*([^*\s][^*]*)\*(?!\w)|(?<!\w)_([^_\s][^_]*)_(?!\w)|\[([^\]]+)\]\(([^)\s]+)\)|(https?:\/\/[^\s<>()]+[^\s<>().,;:!?'"])|(?<![\w/&])#(\d{1,7})\b|(?<![\w/])@([A-Za-z0-9][A-Za-z0-9-]{0,38})\b|\b([0-9a-f]{7,40})\b/g,a=0,l=o=>{let p=r.at(-1);o.type==="text"&&p?.type==="text"?p.text+=o.text:o.text&&r.push(o)};for(let o of String(c??"").matchAll(i)){let p=o.index??0;p>a&&l({type:"text",text:c.slice(a,p)}),a=p+o[0].length;let[u,m,g,M,B,I,x,v,w,A,N,b]=o;if(m!==void 0)l({type:"code",text:m});else if(g!==void 0||M!==void 0)l({type:"strong",text:g??M});else if(B!==void 0||I!==void 0)l({type:"em",text:B??I});else if(x!==void 0&&/&#|&colon;/i.test(v))l({type:"text",text:x});else if(x!==void 0){let k=h(/^[a-z][a-z0-9+.-]*:/i.test(v)||v.startsWith("/")||!n?v:`${n}/${v}`);l(k?{type:"link",text:x.replace(/[`*]/g,""),url:k}:{type:"text",text:x})}else if(w!==void 0){let k=h(w);l(k?{type:"link",text:he(w,n),url:k}:{type:"text",text:w})}else A!==void 0?l(n?{type:"link",text:`#${A}`,url:`${n}/${s?"-/issues":"issues"}/${A}`}:{type:"text",text:u}):N!==void 0?l(t&&!s?{type:"link",text:`@${N}`,url:`${t}/${N}`}:{type:"text",text:u}):b!==void 0&&l(n&&/\d/.test(b)&&/[a-f]/.test(b)?{type:"link",text:b.slice(0,7),url:`${n}/${s?"-/commit":"commit"}/${b}`,code:!0}:{type:"text",text:u})}return a<String(c??"").length&&l({type:"text",text:c.slice(a)}),r}function he(c,e){let n=/\/(?:pull|issues|merge_requests)\/(\d+)$/.exec(c);if(n&&(!e||c.startsWith(e)))return`#${n[1]}`;let t=/\/compare\/([^/]+)$/.exec(c);return t?t[1]:c.replace(/^https?:\/\//,"").slice(0,60)}function E(c,e){return c.map(n=>{let t=n.date!==null?` - ${new Date(n.date).toISOString().slice(0,10)}`:"",s=`## [${n.unreleased?"Unreleased":n.version}]${t}${n.yanked?" [YANKED]":""}`,r=n.groups.map(i=>`### ${i.label||e[i.kind]}

${i.items.map(a=>`${"  ".repeat(a.depth)}- ${a.scope?`**${a.scope}:** `:""}${a.text}`).join(`
`)}`);return[s,n.notes,...r].filter(Boolean).join(`

`)}).join(`

`)}var ae=Object.freeze({clKind_breaking:"Breaking changes",clKind_security:"Security",clKind_added:"Added",clKind_changed:"Changed",clKind_deprecated:"Deprecated",clKind_removed:"Removed",clKind_fixed:"Fixed",clKind_other:"Other",clUnreleased:"Unreleased",clLatest:"Latest",clPrerelease:"Pre-release",clYanked:"Yanked",clBreaking:"Breaking",clCompare:"Compare",clReleasePage:"Release page",clCopyNotes:"Copy the notes of {version}",clCopyLink:"Copy a link to {version}",clLinkCopied:"Link copied",clReleases:"{count} releases",clReleaseOne:"1 release",clSince:"New since {version}",clSinceCount:"{count} releases",clNothingSince:"Nothing new since {version}.",clFilters:"Kinds of changes",clAll:"All",clEmpty:"No release found.",clNoMatch:"No release has changes of these kinds.",clMore:"Show {count} older releases",clShape:"Write a changelog in Markdown (Keep a Changelog or conventional-changelog), or a list of releases in JSON.",clCopyAll:"Copy as Markdown",clChanges:"{count} changes"}),le=Object.freeze({clKind_breaking:"Changements incompatibles",clKind_security:"S\xE9curit\xE9",clKind_added:"Ajouts",clKind_changed:"Modifications",clKind_deprecated:"D\xE9pr\xE9ciations",clKind_removed:"Suppressions",clKind_fixed:"Corrections",clKind_other:"Autres",clUnreleased:"Non publi\xE9e",clLatest:"Derni\xE8re",clPrerelease:"Pr\xE9version",clYanked:"Retir\xE9e",clBreaking:"Incompatible",clCompare:"Comparer",clReleasePage:"Page de la version",clCopyNotes:"Copier les notes de {version}",clCopyLink:"Copier un lien vers {version}",clLinkCopied:"Lien copi\xE9",clReleases:"{count} versions",clReleaseOne:"1 version",clSince:"Nouveaut\xE9s depuis {version}",clSinceCount:"{count} versions",clNothingSince:"Rien de nouveau depuis {version}.",clFilters:"Types de changements",clAll:"Tous",clEmpty:"Aucune version trouv\xE9e.",clNoMatch:"Aucune version n\u2019a de changements de ces types.",clMore:"Afficher {count} versions plus anciennes",clShape:"\xC9crivez un journal des modifications en Markdown (Keep a Changelog ou conventional-changelog), ou une liste de versions en JSON.",clCopyAll:"Copier en Markdown",clChanges:"{count} changements"});P({en:ae,fr:le});var oe=class extends H{static type="changelog";static editorLanguage="markdown";static componentAttributes=Object.freeze(["repo","since","limit","kinds","filters","unreleased"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,filters:!0}};static styles=[T,j,G,Y];constructor(){super(),this.panelId=D("panel"),this.kindFilter=null,this.expanded=!1,this.scrolled=!1}contentChanged(){this.kindFilter=null,this.expanded=!1}read(){try{return{releases:ne(this.text??""),error:null}}catch(e){return e instanceof SyntaxError?{releases:[],error:this.t("jsonInvalid",{message:e.message})}:{releases:[],error:this.t("clShape")}}}get releases(){return this.read().releases}get kinds(){if(this.kindFilter)return this.kindFilter;let e=(this.getAttribute("kinds")??"").split(",").map(n=>n.trim().toLowerCase());return new Set(e.filter(n=>f.includes(n)))}get repo(){let e=h(this.getAttribute("repo"));return e&&/^https:\/\//.test(e)?e:null}inView(e,n=!0){let t=(this.getAttribute("since")??"").trim().replace(/^v/i,""),s=e;(V(this.getAttribute("unreleased"))===!1||t)&&(s=s.filter(i=>!i.unreleased)),t&&(s=s.filter(i=>re(i.version,t)>0));let r=this.kinds;return!r.size||!n?s:s.map(i=>({...i,groups:i.groups.filter(a=>r.has(a.kind)||r.has("breaking")&&a.items.some(l=>l.breaking))})).filter(i=>i.groups.length)}get labels(){return Object.fromEntries(f.map(e=>[e,this.t(`clKind_${e}`)]))}renderContent(e){let n=this.t,{releases:t,error:s}=this.read(),r=d("div",{class:"body data-body cl-body",part:"body"}),i=this.inView(t);s?r.append(Z(s)):t.length?this.renderReleases(r,t,i):r.append(d("p",{class:"data-none",text:n("clEmpty")}));let{panel:a,history:l}=this.previewPanel(r,this.panelId),o=r.querySelector(".cl-list"),p=t.filter(u=>!u.unreleased).length;e.append(...this.chrome({badge:p?p===1?n("clReleaseOne"):n("clReleases",{count:C(p,this.locale)}):"",actions:[...l,this.editToggleButton(),o?this.searchButton(new U(o)):null,this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.text??"",this.downloadName("CHANGELOG.md"),"text/markdown"):null,this.feature("copy")&&i.length?this.copyButton(()=>E(i,this.labels),n("clCopyAll")):null]}),a),this.editor?.align(),this.followHash()}renderReleases(e,n,t){let s=this.t,r=(this.getAttribute("since")??"").trim().replace(/^v/i,"");r&&e.append(this.sinceView(r,t)),this.feature("filters")&&e.append(this.filtersView(this.inView(n,!1)));let i=F(this.getAttribute("limit"),{min:1,max:1e4,fallback:0}),a=i&&!this.expanded?t.slice(0,i):t,l=n.find(p=>!p.unreleased&&!p.prerelease&&!p.yanked),o=d("div",{class:"cl-list"},...a.map(p=>this.releaseView(p,p.version===l?.version&&!p.unreleased)));!t.length&&!r&&o.append(d("p",{class:"data-none",text:s("clNoMatch")})),e.append(o),a.length<t.length&&e.append(d("button",{class:"text-btn cl-more",text:s("clMore",{count:C(t.length-a.length,this.locale)}),attrs:{type:"button","data-focus-key":"more"},on:{click:()=>{this.expanded=!0,this.render()}}}))}sinceView(e,n){let t=this.t;if(!n.length)return d("p",{class:"cl-since none",text:t("clNothingSince",{version:e})});let s=new Map;for(let r of n)for(let i of r.groups)for(let a of i.items){let l=a.breaking?"breaking":i.kind;s.set(l,(s.get(l)??0)+1)}return d("div",{class:"cl-since"},d("strong",{text:t("clSince",{version:e})}),d("span",{text:n.length===1?t("clReleaseOne"):t("clSinceCount",{count:n.length})}),...f.filter(r=>s.has(r)).map(r=>d("span",{class:`cl-count kind-${r}`,text:`${t(`clKind_${r}`)}: ${s.get(r)}`})))}filtersView(e){let n=this.t,t=new Map;for(let a of e)for(let l of a.groups)t.set(l.kind,(t.get(l.kind)??0)+l.items.length);let s=this.kinds,r=(a,l,o)=>d("button",{class:`cl-filter${a?` kind-${a}`:""}`,attrs:{type:"button","aria-pressed":String(a?s.has(a):!s.size),"data-focus-key":`kind-${a??"all"}`},on:{click:()=>this.toggleKind(a)}},d("span",{text:l}),d("span",{class:"cl-filter-count",text:C(o,this.locale)})),i=[...t.values()].reduce((a,l)=>a+l,0);return d("div",{class:"cl-filters",part:"filters",attrs:{role:"group","aria-label":n("clFilters")}},r(null,n("clAll"),i),...f.filter(a=>t.has(a)).map(a=>r(a,n(`clKind_${a}`),t.get(a)??0)))}toggleKind(e){let n=new Set(this.kinds);e?n.has(e)?n.delete(e):n.add(e):n.clear(),this.kindFilter=n,this.render(),O(this,z.FILTER_CHANGE,{kinds:[...n],shown:this.inView(this.releases).length})}releaseView(e,n){let t=this.t,s=se(e),r=e.unreleased?t("clUnreleased"):e.version,i=`${this.panelId}-${s}`,a=[n?["latest",t("clLatest")]:null,e.unreleased?["unreleased",t("clUnreleased")]:null,e.prerelease?["prerelease",t("clPrerelease")]:null,e.yanked?["yanked",t("clYanked")]:null].filter(o=>o!==null&&o[0]!=="unreleased"),l=[...e.groups].sort((o,p)=>f.indexOf(o.kind)-f.indexOf(p.kind));return d("article",{class:`cl-release${e.yanked?" yanked":""}${e.unreleased?" unreleased":""}`,part:"release",attrs:{"aria-labelledby":i,"data-anchor":s}},d("header",{class:"cl-head"},d("h3",{class:"cl-version",part:"version",attrs:{id:i}},d("span",{text:r}),e.title?d("span",{class:"cl-title",text:e.title}):null),...a.map(o=>d("span",{class:`cl-badge ${o?.[0]}`,text:o?.[1]??""})),e.date!==null?d("time",{class:"cl-date",text:this.formatDate(e.date,{dateStyle:"medium",timeZone:"UTC"}),attrs:{datetime:new Date(e.date).toISOString().slice(0,10)}}):null,d("span",{class:"cl-actions"},e.compare?d("a",{class:"cl-link",text:t("clCompare"),attrs:{href:e.compare,rel:"noopener",target:"_blank"}}):null,e.url?d("a",{class:"cl-link",text:t("clReleasePage"),attrs:{href:e.url,rel:"noopener",target:"_blank"}}):null,this.actionButton("link",t("clCopyLink",{version:r}),`link-${s}`,()=>this.copyLink(s)),this.actionButton("copy",t("clCopyNotes",{version:r}),`copy-${s}`,()=>L(E([e],this.labels),this.root)))),e.notes?d("p",{class:"cl-notes"},...this.inline(e.notes)):null,...l.map(o=>d("section",{class:`cl-group kind-${o.kind}`,part:"group"},d("h4",{class:"cl-kind",part:"kind",text:o.label&&o.kind==="other"?o.label:t(`clKind_${o.kind}`)}),d("ul",{class:"cl-items"},...o.items.map(p=>d("li",{class:`cl-item${p.depth?" nested":""}${p.breaking?" breaking":""}`},p.breaking&&o.kind!=="breaking"?d("span",{class:"cl-badge breaking",text:t("clBreaking")}):null,p.scope?d("strong",{class:"cl-scope",text:`${p.scope}: `}):null,...this.inline(p.text)))))))}actionButton(e,n,t,s){let r=d("button",{class:"cl-icon-button",attrs:{type:"button","aria-label":n,title:n,"data-focus-key":t},on:{click:async()=>{let i=await s();r.replaceChildren(S(i?"check":"alert")),setTimeout(()=>r.replaceChildren(S(e)),1500),this.announce(this.t(i?e==="link"?"clLinkCopied":"copied":"copyFailed")),i&&O(this,z.COPY,{text:""})}}},S(e));return r}copyLink(e){let n=new URL(location.href);return n.hash=e,L(n.href,this.root)}inline(e){return ie(e,this.repo).map(n=>{if(n.type==="text")return n.text;if(n.type==="link"){let t=n.code?d("code",{text:n.text}):n.text;return d("a",{attrs:{href:n.url,rel:"noopener",target:"_blank"}},t)}return d(n.type==="code"?"code":n.type,{text:n.text})})}followHash(){if(this.scrolled||typeof location>"u")return;let e=decodeURIComponent(location.hash.slice(1));if(!/^(v[\w.+-]+|unreleased)$/.test(e))return;let n=this.root.querySelector(`[data-anchor="${CSS.escape(e)}"]`);n&&(this.scrolled=!0,requestAnimationFrame(()=>n.scrollIntoView({block:"start"})))}};export{oe as a};
