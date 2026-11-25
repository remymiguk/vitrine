/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{r as $}from"./chunk-37OSRZJK.js";import{O as w,_ as N,ba as U,c as T,o as c,q as L,u as _}from"./chunk-JAZI474S.js";import{h as C,k as S,l as A,m as I,q as f}from"./chunk-SCKP2KTO.js";var H=`/*
 * A redirect chain: a summary, the issues, then the hops as a numbered list joined by a
 * line. Each step says how it redirects; changes are written in words, colors repeat them.
 */
.redirects-body {
  display: grid;
  gap: var(--_space-4);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.redirects-summary {
  --_tone-color: var(--_success);
  display: grid;
  gap: var(--_space-1);
  padding: var(--_space-3) var(--_space-4);
  border: 1px solid color-mix(in srgb, var(--_tone-color) 40%, var(--_border));
  border-radius: var(--_radius-sm);
  background: color-mix(in srgb, var(--_tone-color) 6%, var(--_surface));
}

.redirects-summary.warn {
  --_tone-color: var(--_warning);
}

.redirects-summary.bad {
  --_tone-color: var(--_danger);
}

.redirects-summary p {
  margin: 0;
}

.redirects-counts,
.redirects-final {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--_space-1) var(--_space-3);
}

.redirects-muted {
  color: var(--_fg-muted);
}

.redirects-issues {
  display: grid;
  margin: 0;
  padding: 0;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  list-style: none;
}

.redirects-issue {
  display: grid;
  grid-template-columns: minmax(8rem, auto) 1fr;
  gap: var(--_space-3);
  padding: var(--_space-2) var(--_space-3);
  border-bottom: 1px solid var(--_border);
}

.redirects-issue:last-child {
  border-bottom: 0;
}

.redirects-level {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  font-weight: 600;
}

.redirects-level svg {
  flex: none;
  width: 16px;
  height: 16px;
}

.redirects-issue.bad .redirects-level {
  color: var(--_danger);
}

.redirects-issue.warn .redirects-level {
  color: var(--_warning);
}

.redirects-issue.info .redirects-level {
  color: var(--_fg-muted);
}

.redirects-chain {
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
}

.redirects-hop {
  position: relative;
  display: grid;
  gap: var(--_space-1);
  padding-inline-start: 36px;
}

/* The line joining a hop to the next one. */
.redirects-hop:not(.final)::before {
  content: '';
  position: absolute;
  inset-block: 26px 0;
  inset-inline-start: 13px;
  border-inline-start: 2px solid var(--_border);
}

.redirects-line {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2);
  min-width: 0;
}

.redirects-index {
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border: 2px solid var(--_border);
  border-radius: var(--_radius-full);
  background: var(--_surface);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.redirects-hop.final .redirects-index {
  border-color: var(--_accent);
  color: var(--_accent);
}

.status {
  flex: none;
  padding: 2px 8px;
  border-radius: var(--_radius-sm);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  font-weight: 700;
  line-height: 1.5;
  --_tone: var(--_fg-muted);
  background: color-mix(in srgb, var(--_tone) 16%, transparent);
  /* Mixed toward the text color for AA contrast on the tinted background. */
  color: color-mix(in srgb, var(--_tone) 62%, var(--_fg));
}

.status-2xx {
  --_tone: var(--_success);
}

.status-3xx {
  --_tone: var(--_info);
}

.status-4xx {
  --_tone: var(--_warning);
}

.status-5xx {
  --_tone: var(--_danger);
}

.status-none {
  font-family: var(--_font-ui);
  font-weight: 500;
}

.url {
  flex: 1 1 16rem;
  min-width: 0;
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  overflow-wrap: anywhere;
}

.url .origin {
  font-weight: 600;
}

.url .rest {
  color: var(--_fg-muted);
}

.redirects-meta {
  margin: 0;
  font-size: var(--_font-size-small);
}

.redirects-step {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-2);
  padding-block: var(--_space-2) var(--_space-3);
  font-size: var(--_font-size-small);
}

.redirects-step svg {
  flex: none;
  width: 14px;
  height: 14px;
  color: var(--_fg-muted);
}

.redirects-kind {
  color: var(--_fg-muted);
  font-weight: 600;
}

.redirects-step.meta .redirects-kind,
.redirects-step.script .redirects-kind {
  color: color-mix(in srgb, var(--_warning) 62%, var(--_fg));
}

.redirects-change {
  padding: 1px 6px;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-full);
  white-space: nowrap;
}

.redirects-change.bad {
  border-color: color-mix(in srgb, var(--_danger) 50%, var(--_border));
  background: color-mix(in srgb, var(--_danger) 10%, transparent);
  color: color-mix(in srgb, var(--_danger) 62%, var(--_fg));
  font-weight: 600;
}

.redirects-change.warn {
  border-color: color-mix(in srgb, var(--_warning) 50%, var(--_border));
  background: color-mix(in srgb, var(--_warning) 10%, transparent);
}

.redirects-change.ok {
  border-color: color-mix(in srgb, var(--_success) 45%, var(--_border));
  background: color-mix(in srgb, var(--_success) 10%, transparent);
}

.redirects-edit > .editor-body {
  max-height: min(35vh, 280px);
  border-bottom: 1px solid var(--_border);
}

@media (max-width: 560px) {
  .redirects-issue {
    grid-template-columns: 1fr;
    gap: var(--_space-1);
  }

  .redirects-change {
    white-space: normal;
  }
}
`;var z=Object.freeze({redirectsCount:"{count} redirects",redirectsNone:"No redirect",redirectsSites:"Sites: {count}",redirectsFinal:"Ends at",redirectsTotalTime:"in {time} ms",redirectsNotFetched:"Read only: nothing is fetched.",redirectsChain:"Redirect chain",redirectsStart:"Start",redirectsUnknownUrl:"(URL not known)",redirectsStatusUnknown:"not seen",redirectsKind_permanent:"permanent",redirectsKind_temporary:"temporary",redirectsKind_other:"redirect",redirectsKind_meta:"meta refresh",redirectsKind_script:"JavaScript",redirectsOtherHost:"other host",redirectsOtherSite:"other site",redirectsDowngrade:"HTTPS \u2192 HTTP",redirectsUpgrade:"HTTP \u2192 HTTPS",redirectsAdded:"Adds {params}",redirectsTracking:"tracking",redirectsLoop:"back to a URL already visited",redirectsCopyFinal:"Copy the final URL",redirectsCopyChain:"Chain",redirectsInvalidEmpty:"No redirect chain.",redirectsInvalidFormat:"No redirect chain found: paste a HAR file, curl -sIL output, JSON or one URL per line.",redirectsInvalidJson:"The JSON cannot be read: {detail}",redirectsLevel_bad:"Error",redirectsLevel_warn:"Warning",redirectsLevel_info:"Note",redirectsIssue_loop:"The chain loops: a browser would stop with \u201Ctoo many redirects\u201D.",redirectsIssue_downgrade:"A redirect leaves HTTPS for plain HTTP: what follows can be read and changed on the way.",redirectsIssue_tooLong:"{count} redirects: each one costs a round trip, and browsers stop after 20.",redirectsIssue_endsError:"The chain ends with an error.",redirectsIssue_unfinished:"The last page was not captured.",redirectsIssue_sites:"The chain goes through {count} sites."}),P=Object.freeze({redirectsCount:"{count} redirections",redirectsNone:"Aucune redirection",redirectsSites:"Sites : {count}",redirectsFinal:"Arrive sur",redirectsTotalTime:"en {time} ms",redirectsNotFetched:"Lecture seule : rien n\u2019est charg\xE9.",redirectsChain:"Cha\xEEne de redirections",redirectsStart:"D\xE9part",redirectsUnknownUrl:"(URL inconnue)",redirectsStatusUnknown:"non vu",redirectsKind_permanent:"permanente",redirectsKind_temporary:"temporaire",redirectsKind_other:"redirection",redirectsKind_meta:"meta refresh",redirectsKind_script:"JavaScript",redirectsOtherHost:"autre h\xF4te",redirectsOtherSite:"autre site",redirectsDowngrade:"HTTPS \u2192 HTTP",redirectsUpgrade:"HTTP \u2192 HTTPS",redirectsAdded:"Ajoute {params}",redirectsTracking:"suivi",redirectsLoop:"retour \xE0 une URL d\xE9j\xE0 visit\xE9e",redirectsCopyFinal:"Copier l\u2019URL finale",redirectsCopyChain:"Cha\xEEne",redirectsInvalidEmpty:"Aucune cha\xEEne de redirections.",redirectsInvalidFormat:"Aucune cha\xEEne de redirections trouv\xE9e : collez un fichier HAR, une sortie curl -sIL, du JSON ou une URL par ligne.",redirectsInvalidJson:"Le JSON ne peut pas \xEAtre lu : {detail}",redirectsLevel_bad:"Erreur",redirectsLevel_warn:"Avertissement",redirectsLevel_info:"Remarque",redirectsIssue_loop:"La cha\xEEne boucle : un navigateur s\u2019arr\xEAterait avec \xAB trop de redirections \xBB.",redirectsIssue_downgrade:"Une redirection quitte HTTPS pour HTTP : la suite peut \xEAtre lue et modifi\xE9e en chemin.",redirectsIssue_tooLong:"{count} redirections : chacune co\xFBte un aller-retour, et les navigateurs s\u2019arr\xEAtent apr\xE8s 20.",redirectsIssue_endsError:"La cha\xEEne se termine par une erreur.",redirectsIssue_unfinished:"La derni\xE8re page n\u2019a pas \xE9t\xE9 captur\xE9e.",redirectsIssue_sites:"La cha\xEEne passe par {count} sites."});var v=200,V=10,g=8192,K=/^(?:utm_[a-z_]+|gclid|gclsrc|dclid|gbraid|wbraid|fbclid|msclkid|mc_cid|mc_eid|yclid|igshid|twclid|ttclid|li_fat_id|_hsenc|_hsmi|mkt_tok|oly_[a-z_]+|vero_[a-z_]+|_ga|_gl|ref_?src|s_cid|trk|zanpid|irclickid|clickid|sc_cid)$/i;function x(o){return o===301||o===308?"permanent":o===302||o===303||o===307?"temporary":o!==null&&o>=300&&o<400?"other":null}function O(o,e={}){let t=o.replace(/^\uFEFF/,"").trim();if(!t)return{ok:!1,error:"empty"};let i=e.start?.trim()||null,r,n;if(/^[[{]/.test(t)){let s;try{s=JSON.parse(t)}catch(a){return{ok:!1,error:"json",detail:a instanceof Error?a.message:""}}if(Array.isArray(s?.log?.entries))r=J(s.log.entries,i),n="har";else{let a=Array.isArray(s)?s:s?.hops??s?.chain??s?.redirects;if(!Array.isArray(a))return{ok:!1,error:"format"};r=M(a),n="json"}}else/^(?:[<>]\s*)?HTTP\/\d(?:\.\d)?\s+\d{3}/m.test(t)?(r=D(t,i),n="curl"):(r=q(t),n="list");return r.length?{ok:!0,chain:{hops:r.slice(0,v),format:n}}:{ok:!1,error:"format"}}function J(o,e){let t=o.map(s=>typeof s?.request?.url=="string"?s.request.url:""),i=e?t.indexOf(e):0;i<0&&(i=Math.max(0,t.findIndex(s=>s.includes(e))));let r=[],n=new Set;for(;i>=0&&i<o.length&&r.length<v;){let s=o[i],a=t[i],u=R(s?.response?.status),l=typeof s?.response?.redirectURL=="string"&&s.response.redirectURL||G(s?.response?.headers,"location"),d=l?x(u):null;if(r.push({url:a.slice(0,g),status:u,kind:d,ip:typeof s?.serverIPAddress=="string"&&s.serverIPAddress?s.serverIPAddress.replace(/^\[|\]$/g,""):null,time:typeof s?.time=="number"&&s.time>=0?s.time:null}),!d||!l)break;let m=k(l,a);if(n.has(i))break;n.add(i);let h=t.findIndex((p,b)=>b>i&&p===m);if(h<0&&(h=t.indexOf(m)),h<0||n.has(h)){r.push({url:m.slice(0,g),status:null,kind:null,ip:null,time:null});break}i=h}return r}function M(o){let e=[];for(let r of o.slice(0,v)){if(typeof r=="string"){e.push({url:r.slice(0,g),status:null,kind:null,ip:null,time:null});continue}if(!r||typeof r!="object"||typeof r.url!="string")continue;let n=R(r.status??r.statusCode??r.code),s=String(r.type??r.kind??"").toLowerCase(),a=x(n);/meta|refresh/.test(s)?a="meta":/^js$|javascript|script|client/.test(s)&&(a="script"),e.push({url:r.url.slice(0,g),status:n,kind:a,ip:typeof r.ip=="string"&&r.ip?r.ip:null,time:typeof r.time=="number"&&r.time>=0?r.time:null})}let t=o[Math.min(o.length,v)-1],i=e[e.length-1];i&&typeof t?.location=="string"&&t.location&&e.length<v&&e.push({url:k(t.location,i.url).slice(0,g),status:null,kind:null,ip:null,time:null});for(let r=0;r<e.length;r+=1)r===e.length-1?e[r].kind=null:e[r].kind??="other";return e}function D(o,e){let t=o.split(/\r\n|\n|\r/),i=t.find(d=>/^\s*\$?\s*curl\s/.test(d)),r=e??(i?/(?:^|\s)['"]?(https?:\/\/[^\s'"]+)/i.exec(i)?.[1]??null:null);if(!r){let d=t.map(h=>/^>\s*[A-Z]+\s+(\S+)\s+HTTP/.exec(h)?.[1]).find(Boolean),m=t.map(h=>/^>\s*host:\s*(\S+)/i.exec(h)?.[1]).find(Boolean);m&&(r=`https://${m}${d??"/"}`)}let n=[],s=null,a=null,u=null,l=()=>{s&&(s.kind=a?x(s.status):null,n.push(s),a&&(r=k(a,s.url)))};for(let d of t){let m=d.replace(/^\s*<\s?/,""),h=/^HTTP\/\d(?:\.\d)?\s+(\d{3})\b/.exec(m);if(h){if(h[1]==="100"||/connection established/i.test(m))continue;l(),s={url:(r??"").slice(0,g),status:Number(h[1]),kind:null,ip:u,time:null},a=null,u=null;continue}let p=/^location:\s*(\S+)/i.exec(m);p&&s&&(a=p[1]);let b=/^\*\s+Connected to \S+ \(([^)\s]+)\)/.exec(d);b&&(u=b[1])}return l(),n}function q(o){let e=[];for(let t of o.split(/\r\n|\n|\r/)){if(e.length>=v)break;let i=t.split(/\s*(?:->|=>|→|⇒)\s*/);for(let r of i){let n=/(?:https?:\/\/|\/\/)[^\s"'<>]+/i.exec(r)?.[0];if(!n)continue;let s=/(?:^|\s)([1-5]\d\d)(?=\s|$)/.exec(r.replace(n," "))?.[1],a=/\b(meta|refresh|js|javascript)\b/i.exec(r.replace(n," "))?.[1]?.toLowerCase(),u=s?Number(s):null;e.push({url:n.slice(0,g),status:u,kind:a?a==="meta"||a==="refresh"?"meta":"script":x(u),ip:null,time:null})}}for(let t=0;t<e.length;t+=1)t===e.length-1?e[t].kind=null:e[t].kind??="other";return e}function R(o){let e=Number(o);return Number.isInteger(e)&&e>=100&&e<=999?e:null}function G(o,e){if(!Array.isArray(o))return null;let t=o.find(i=>typeof i?.name=="string"&&i.name.toLowerCase()===e);return t&&typeof t.value=="string"&&t.value?t.value:null}function k(o,e){try{return new URL(o,e||void 0).href}catch{return o}}function y(o){try{return new URL(o)}catch{return null}}function j(o){let e=[],t=new Set,i=[];for(let s of o){let a=y(s.url)?.hostname;a&&!i.includes(_(a))&&i.push(_(a))}for(let s=0;s<o.length-1;s+=1){let a=o[s],u=o[s+1];t.add(a.url);let l=y(a.url),d=y(u.url),m=new Set(l?[...l.searchParams.keys()]:[]),h=d?[...new Set(d.searchParams.keys())].filter(p=>!m.has(p)):[];e.push({from:a,to:u,hostChange:!!(l&&d&&l.hostname!==d.hostname),siteChange:!!(l&&d&&_(l.hostname)!==_(d.hostname)),scheme:l?.protocol==="https:"&&d?.protocol==="http:"?"downgrade":l?.protocol==="http:"&&d?.protocol==="https:"?"upgrade":null,added:h,tracking:h.filter(p=>K.test(p)),loop:t.has(u.url)})}let r=[];e.some(s=>s.loop)&&r.push({level:"bad",code:"loop"}),e.some(s=>s.scheme==="downgrade")&&r.push({level:"bad",code:"downgrade"}),e.length>V&&r.push({level:"warn",code:"tooLong",count:e.length});let n=o[o.length-1];return n&&n.status!==null&&n.status>=400&&r.push({level:"warn",code:"endsError"}),n&&n.status===null&&o.length>1&&!e.some(s=>s.loop)&&r.push({level:"info",code:"unfinished"}),i.length>2&&r.push({level:"info",code:"sites",count:i.length}),{steps:e,issues:r,sites:i}}function E(o){return o.map(e=>`${e.status??(e.kind==="meta"?"meta":e.kind==="script"?"js":"---")} ${e.url}`).join(`
`)}I({en:z,fr:P});var X={bad:"shield-alert",warn:"alert",info:"status-circle"},B=class extends U{static type="redirects";static componentAttributes=Object.freeze(["start","params"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,fullscreen:!0}};static styles=[H];static upgradeProperties=["content"];constructor(){super(),this.panelId=L("panel"),this.editor=null,this.previewTimer=void 0}disconnectedCallback(){clearTimeout(this.previewTimer),super.disconnectedCallback()}read(){return O(this.text??"",{start:this.getAttribute("start")})}get hops(){let e=this.read();return e.ok?structuredClone(e.chain.hops):[]}renderContent(e){let t=this.t,i=this.read(),r=c("div",{class:"body redirects-body",part:"body"}),n=[];if(i.ok){n=i.chain.hops;let p=j(n);r.append(this.summaryView(n,p.issues,p.sites)),p.issues.length&&r.append(this.issuesView(p.issues)),r.append(this.chainView(n,p.steps))}else{let p=`redirectsInvalid${i.error[0].toUpperCase()}${i.error.slice(1)}`;r.append(N(t(p,{detail:i.detail??""})))}let s=c("div",{class:"panel",attrs:{id:this.panelId}}),a=[];if(this.editing){let p=this.createEditor();s.classList.add("redirects-edit"),s.append(c("div",{class:"body editor-body",part:"body source"},p.element),r),a=this.historyButtons(p)}else s.append(r);let u=n[n.length-1]?.url,l=this.feature("copy")&&n.length>0,d=[...a,this.editToggleButton(),this.fullscreenButton(),l?this.copyTextButton(()=>E(n),t("redirectsCopyChain"),"copy-chain"):null,l&&u?this.copyButton(()=>u,t("redirectsCopyFinal")):null],m=Math.max(0,n.length-1),h=i.ok?m?t("redirectsCount",{count:f(m,this.locale)}):t("redirectsNone"):t("redirectsChain");e.append(...this.chrome({badge:h,actions:d}),s),this.editor?.align()}summaryView(e,t,i){let r=this.t,n=e.length-1,s=e[e.length-1],a=t.some(d=>d.level==="bad")?"bad":t.some(d=>d.level==="warn")?"warn":"ok",u=e.map(d=>d.time).filter(d=>d!==null),l=u.length===e.length?u.reduce((d,m)=>d+m,0):null;return c("div",{class:`redirects-summary ${a}`,part:"summary"},c("p",{class:"redirects-counts"},c("strong",{text:n?r("redirectsCount",{count:f(n,this.locale)}):r("redirectsNone")}),c("span",{text:r("redirectsSites",{count:f(i.length,this.locale)})}),l!==null?c("span",{class:"redirects-muted",text:r("redirectsTotalTime",{time:f(Math.round(l),this.locale)})}):null),c("p",{class:"redirects-final"},c("span",{class:"redirects-muted",text:`${r("redirectsFinal")} `}),s.status!==null?this.statusBadge(s.status):null,this.urlView(s.url)),c("p",{class:"redirects-muted",text:r("redirectsNotFetched")}))}issuesView(e){let t=this.t;return c("ul",{class:"redirects-issues",part:"issues"},...e.map(i=>c("li",{class:`redirects-issue ${i.level}`},c("span",{class:"redirects-level"},w(X[i.level]),c("span",{text:t(`redirectsLevel_${i.level}`)})),c("span",{text:t(`redirectsIssue_${i.code}`,{count:f(i.count??0,this.locale)})}))))}chainView(e,t){let i=this.t;return c("ol",{class:"redirects-chain",part:"chain",attrs:{"aria-label":i("redirectsChain")}},...e.map((r,n)=>{let s=t[n],a=[r.ip,r.time!==null?`${f(Math.round(r.time),this.locale)} ms`:null].filter(Boolean).join(" \xB7 ");return c("li",{class:`redirects-hop${n===e.length-1?" final":""}`,part:"hop"},c("div",{class:"redirects-line"},c("span",{class:"redirects-index",text:String(n+1),attrs:{"aria-hidden":"true"}}),r.status!==null?this.statusBadge(r.status):c("span",{class:"status status-none",part:"status",text:r.kind==="meta"||r.kind==="script"?"\u2014":i("redirectsStatusUnknown")}),this.urlView(r.url)),a?c("p",{class:"redirects-meta redirects-muted",text:a}):null,s?this.stepView(s):null)}))}stepView(e){let t=this.t,i=e.from.kind??"other",r=[],n=(s,a)=>r.push(c("span",{class:`redirects-change ${a}`,part:"change",text:s}));if(e.loop&&n(t("redirectsLoop"),"bad"),e.scheme==="downgrade"&&n(t("redirectsDowngrade"),"bad"),e.scheme==="upgrade"&&n(t("redirectsUpgrade"),"ok"),e.siteChange?n(t("redirectsOtherSite"),"warn"):e.hostChange&&n(t("redirectsOtherHost"),"info"),this.flag("params",!0)&&e.added.length){let s=e.added.map(a=>e.tracking.includes(a)?`${a} (${t("redirectsTracking")})`:a);n(t("redirectsAdded",{params:s.join(", ")}),e.tracking.length?"warn":"info")}return c("div",{class:`redirects-step ${i}`,part:"step"},w("chevron-down"),c("span",{class:"redirects-kind",text:t(`redirectsKind_${i}`)}),...r)}statusBadge(e){let t=`${Math.floor(e/100)}xx`;return c("span",{class:`status status-${t}`,part:`status status-${t}`,text:String(e)})}urlView(e){if(!e)return c("span",{class:"url redirects-muted",part:"url",text:this.t("redirectsUnknownUrl")});let t=/^[a-z][a-z0-9+.-]*:\/\/[^/?#]*/i.exec(e)?.[0]??"";return c("span",{class:"url",part:"url"},t?c("span",{class:"origin",text:t}):null,c("span",{class:"rest",text:e.slice(t.length)}))}flag(e,t){return T(this.getAttribute(e))??t}createEditor(){return this.editor?.destroy(),this.editor=new $({text:this.text??"",language:"plaintext",lineNumbers:!0,wrap:!1,highlightLimit:C().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>A(this,S.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),300)}};export{B as a};
