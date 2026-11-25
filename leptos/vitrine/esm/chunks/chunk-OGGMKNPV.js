/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as D,e as O}from"./chunk-IJCFR2PC.js";import{b as N}from"./chunk-4DG3OOJM.js";import{r as I}from"./chunk-37OSRZJK.js";import{O as P,X as F,_ as C,ba as M,c as $,d as A,e as L,o as s,q as R}from"./chunk-JAZI474S.js";import{h as H,k as _,l as T,m as E,q as S}from"./chunk-SCKP2KTO.js";var U=`/*
 * Network waterfall: summary, filters, a table of requests whose last column is a time lane
 * with each request's bar split into phases, opened requests, the domains, and the legend.
 * Each phase has a color, always named in the legend, the bar label and the details.
 */
.wf-body {
  display: grid;
  align-content: start;
  gap: var(--_space-3);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.ph-blocked {
  --_ph: var(--_border-strong);
}

.ph-dns {
  --_ph: var(--_syntax-type);
}

.ph-connect {
  --_ph: var(--_warning);
}

.ph-ssl {
  --_ph: var(--_syntax-keyword);
}

.ph-send {
  --_ph: var(--_success);
}

.ph-wait {
  --_ph: var(--_accent);
}

.ph-receive {
  --_ph: var(--_info);
}

.wf-summary {
  display: grid;
  gap: var(--_space-2);
}

.wf-summary p {
  margin: 0;
}

.wf-title code {
  font-family: var(--_font-mono);
  font-weight: 600;
  overflow-wrap: anywhere;
}

.wf-facts {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-4);
}

.wf-muted,
.wf-host {
  color: var(--_fg-muted);
}

.wf-bad {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  color: var(--_danger);
  font-weight: 600;
}

.wf-bad svg {
  width: 14px;
  height: 14px;
}

.wf-dcl-text::before,
.wf-load-text::before {
  content: '';
  display: inline-block;
  width: 3px;
  height: 0.9em;
  margin-inline-end: var(--_space-1);
  vertical-align: -0.1em;
  background: var(--_info);
}

.wf-load-text::before {
  background: var(--_danger);
}

.wf-label {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.wf-redirects ol {
  margin: var(--_space-1) 0 0;
  padding-inline-start: var(--_space-5);
}

.wf-redirects code {
  font-family: var(--_font-mono);
  overflow-wrap: anywhere;
}

.wf-page {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
}

.wf-page label {
  font-weight: 600;
}

.wf-page select,
.wf-query {
  min-height: 30px;
  padding: 2px var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  color: var(--_fg);
  font: inherit;
}

.wf-page select {
  min-width: 0;
  max-width: 100%;
}

.wf-filters {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1);
}

.wf-chip {
  min-height: 28px;
  padding: 2px var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  background: transparent;
  color: var(--_fg);
  font: inherit;
  cursor: pointer;
}

.wf-chip:hover {
  background: var(--_accent-soft);
}

.wf-chip.on {
  border-color: var(--_accent);
  background: var(--_accent-soft);
  color: var(--_accent-fg);
  font-weight: 600;
}

.wf-chip:focus-visible,
.wf-query:focus-visible,
.wf-name:focus-visible,
.wf-page select:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.wf-query {
  flex: 1 1 160px;
  min-width: 0;
}

.wf-scroll {
  overflow-x: auto;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.wf-table,
.wf-domains {
  width: 100%;
  min-width: 640px;
  border-collapse: collapse;
}

.wf-table {
  table-layout: fixed;
}

.wf-table th,
.wf-table td,
.wf-domains th,
.wf-domains td {
  padding: 4px var(--_space-2);
  border-bottom: 1px solid color-mix(in srgb, var(--_border) 70%, transparent);
  text-align: start;
  vertical-align: middle;
}

.wf-table thead th,
.wf-domains thead th {
  background: var(--_surface-sunken);
  font-weight: 600;
  white-space: nowrap;
}

.wf-c-name {
  width: var(--vt-waterfall-name-width, 34%);
}

.wf-c-status {
  width: 64px;
}

.wf-c-type {
  width: 84px;
}

.wf-c-size,
.wf-c-time {
  width: 76px;
  text-align: end !important;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

.wf-table tbody th {
  font-weight: 400;
}

.wf-row.failed > * {
  background: color-mix(in srgb, var(--_danger) 6%, transparent);
}

.wf-row:hover > * {
  background: color-mix(in srgb, var(--_accent-soft) 60%, transparent);
}

.wf-name {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  max-width: 100%;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: start;
  cursor: pointer;
}

.wf-chevron {
  display: inline-flex;
  flex: none;
  transition: transform var(--_duration-fast) var(--_easing);
}

.wf-chevron svg {
  width: 14px;
  height: 14px;
}

.wf-chevron.open {
  transform: rotate(90deg);
}

.wf-file {
  display: grid;
  min-width: 0;
}

.wf-path,
.wf-host {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wf-path {
  font-family: var(--_font-mono);
}

.wf-host {
  font-size: var(--_font-size-small);
}

.wf-tag {
  display: inline-block;
  margin-inline-start: var(--_space-1);
  padding: 0 6px;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  white-space: nowrap;
}

.wf-tag.bad {
  border-color: var(--_danger);
  color: var(--_danger);
}

.wf-c-status {
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.st-0,
.st-4,
.st-5 {
  color: var(--_danger);
}

.st-3 {
  color: var(--_warning);
}

.st-2 {
  color: var(--_success);
}

.wf-c-lane {
  position: relative;
}

.wf-ruler {
  position: relative;
  height: 1.5em;
}

.wf-tick {
  position: absolute;
  top: 0;
  padding-inline-start: 3px;
  border-inline-start: 1px solid var(--_border-strong);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 400;
  white-space: nowrap;
}

.wf-lane {
  position: relative;
  height: 14px;
}

.wf-bar {
  position: absolute;
  top: 2px;
  bottom: 2px;
  display: flex;
  min-width: 2px;
  overflow: hidden;
  border-radius: 2px;
  background: var(--_border);
}

.wf-seg {
  height: 100%;
  background: var(--_ph);
}

.wf-mark {
  position: absolute;
  top: -4px;
  bottom: -4px;
  width: 1px;
  background: var(--_info);
}

.wf-mark.load {
  background: var(--_danger);
}

.wf-detail-row > td {
  padding: var(--_space-3);
  background: var(--_surface-sunken);
}

.wf-details {
  display: grid;
  gap: var(--_space-3);
}

.wf-facts-list,
.wf-headers dl {
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  gap: 2px var(--_space-3);
  margin: 0;
}

.wf-facts-list dt,
.wf-headers dt {
  color: var(--_fg-muted);
}

.wf-facts-list dd,
.wf-headers dd {
  margin: 0;
  overflow-wrap: anywhere;
}

.wf-facts-list code,
.wf-headers dl,
.wf-domains code {
  font-family: var(--_font-mono);
}

.wf-timings table {
  border-collapse: collapse;
}

.wf-timings th,
.wf-timings td {
  padding: 1px var(--_space-3) 1px 0;
  border: 0;
  font-weight: 400;
}

.wf-timings td {
  text-align: end;
  font-variant-numeric: tabular-nums;
}

.wf-timings th {
  display: flex;
  align-items: center;
  gap: var(--_space-1);
}

.wf-headers summary {
  cursor: pointer;
  font-weight: 600;
}

.wf-headers[open] summary {
  margin-bottom: var(--_space-1);
}

.wf-num {
  text-align: end !important;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.wf-domains tbody th {
  font-weight: 400;
}

.wf-domains code {
  overflow-wrap: anywhere;
}

.wf-legend {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1) var(--_space-3);
  margin: 0;
  padding: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  list-style: none;
}

.wf-legend li {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
}

.wf-swatch {
  display: inline-block;
  flex: none;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: var(--_ph);
}

.wf-swatch-line {
  display: inline-block;
  width: 3px;
  height: 12px;
  background: var(--_info);
}

.wf-swatch-line.load {
  background: var(--_danger);
}

.wf-more {
  justify-self: start;
  margin-top: var(--_space-2);
}

.wf-edit > .editor-body {
  max-height: min(35vh, 280px);
  border-bottom: 1px solid var(--_border);
}

@media (prefers-reduced-motion: reduce) {
  .wf-chevron {
    transition: none;
  }
}
`;var j=Object.freeze({wfRequests:"{count} requests",wfDomains:"{count} domains",wfThirdParty:"{count} third-party",wfTransferred:"{size} transferred",wfResources:"{size} resources",wfDcl:"DOMContentLoaded {time}",wfLoad:"Load {time}",wfFinish:"Finish {time}",wfFailed:"{count} failed",wfMixed:"{count} over HTTP on an HTTPS page",wfRedirectChain:"Redirects before the page",wfPage:"Page",wfCapped:"Only the first {count} requests are read.",wfTabs:"Views",wfTabRequests:"Requests ({count})",wfTabDomains:"Domains ({count})",wfFilters:"Filters",wfAll:"All",wfType_document:"Document",wfType_script:"Script",wfType_style:"CSS",wfType_image:"Image",wfType_font:"Font",wfType_xhr:"Fetch/XHR",wfType_media:"Media",wfType_other:"Other",wfThirdOnly:"Third party only",wfFilterUrl:"Filter URLs",wfNone:"No request matches.",wfName:"Name",wfStatus:"Status",wfType:"Type",wfSize:"Size",wfTime:"Time",wfWaterfall:"Waterfall",wfPhase_blocked:"Queued",wfPhase_dns:"DNS",wfPhase_connect:"Connection",wfPhase_ssl:"TLS",wfPhase_send:"Request sent",wfPhase_wait:"Waiting (TTFB)",wfPhase_receive:"Download",wfBarLabel:"Starts at {start}, lasts {time}",wfFailedStatus:"Failed",wfCached:"cache",wfTag_third:"Third party",wfTag_mixed:"HTTP",wfTag_redirect:"Redirect",wfUrl:"URL",wfIp:"Server IP",wfProtocol:"Protocol",wfMime:"Content type",wfRedirectTo:"Redirects to",wfStart:"Start",wfTimings:"Timings",wfRequestHeaders:"Request headers ({count})",wfResponseHeaders:"Response headers ({count})",wfHost:"Host",wfRequestsCol:"Requests",wfIps:"IP addresses",wfTypes:"Types",wfShowMore:"Show {count} more",wfCopyCsv:"CSV",wfCopyUrls:"Copy the URLs",wfInvalidEmpty:"No HAR file.",wfInvalidJson:"The HAR file is not valid JSON: {detail}",wfInvalidFormat:'Not a HAR file: expected { "log": { "entries": [...] } }.',wfNoEntries:"The HAR file has no request."}),V={wfRequests:"{count} requ\xEAtes",wfDomains:"{count} domaines",wfThirdParty:"{count} tiers",wfTransferred:"{size} transf\xE9r\xE9s",wfResources:"{size} de ressources",wfFinish:"Fin {time}",wfLoad:"Chargement {time}",wfFailed:"{count} en \xE9chec",wfMixed:"{count} en HTTP sur une page HTTPS",wfRedirectChain:"Redirections avant la page",wfPage:"Page",wfCapped:"Seules les {count} premi\xE8res requ\xEAtes sont lues.",wfTabs:"Vues",wfTabRequests:"Requ\xEAtes ({count})",wfTabDomains:"Domaines ({count})",wfFilters:"Filtres",wfAll:"Toutes",wfType_document:"Document",wfType_script:"Script",wfType_style:"CSS",wfType_image:"Image",wfType_font:"Police",wfType_xhr:"Fetch/XHR",wfType_media:"M\xE9dia",wfType_other:"Autre",wfThirdOnly:"Tiers seulement",wfFilterUrl:"Filtrer les URL",wfNone:"Aucune requ\xEAte ne correspond.",wfName:"Nom",wfStatus:"Statut",wfType:"Type",wfSize:"Taille",wfTime:"Dur\xE9e",wfWaterfall:"Cascade",wfPhase_blocked:"En attente",wfPhase_dns:"DNS",wfPhase_connect:"Connexion",wfPhase_ssl:"TLS",wfPhase_send:"Requ\xEAte envoy\xE9e",wfPhase_wait:"Attente (TTFB)",wfPhase_receive:"T\xE9l\xE9chargement",wfBarLabel:"Commence \xE0 {start}, dure {time}",wfFailedStatus:"\xC9chec",wfCached:"cache",wfTag_third:"Tiers",wfTag_mixed:"HTTP",wfTag_redirect:"Redirection",wfUrl:"URL",wfIp:"IP du serveur",wfProtocol:"Protocole",wfMime:"Type de contenu",wfRedirectTo:"Redirige vers",wfStart:"D\xE9but",wfTimings:"Dur\xE9es",wfRequestHeaders:"En-t\xEAtes de la requ\xEAte ({count})",wfResponseHeaders:"En-t\xEAtes de la r\xE9ponse ({count})",wfHost:"H\xF4te",wfRequestsCol:"Requ\xEAtes",wfIps:"Adresses IP",wfTypes:"Types",wfShowMore:"Afficher {count} de plus",wfCopyCsv:"CSV",wfCopyUrls:"Copier les URL",wfInvalidEmpty:"Aucun fichier HAR.",wfInvalidJson:"Le fichier HAR n\u2019est pas du JSON valide : {detail}",wfInvalidFormat:'Ce n\u2019est pas un fichier HAR : attendu { "log": { "entries": [...] } }.',wfNoEntries:"Le fichier HAR ne contient aucune requ\xEAte."};var B=5e3,et=200,x=Object.freeze(["blocked","dns","connect","ssl","send","wait","receive"]),k=Object.freeze(["document","script","style","image","font","xhr","media","other"]),u=i=>typeof i=="object"&&i!==null&&!Array.isArray(i),h=(i,t=8192)=>typeof i=="string"?i.slice(0,t):typeof i=="number"?String(i):"",y=i=>typeof i=="number"&&Number.isFinite(i)&&i>=0?i:-1;function W(i){return Array.isArray(i)?i.slice(0,et).filter(u).map(t=>({name:h(t.name,200),value:h(t.value).replace(/[\r\n]+/g," ")})):[]}var st={document:"document",script:"script",stylesheet:"style",image:"image",font:"font",xhr:"xhr",fetch:"xhr",eventsource:"xhr",websocket:"xhr",preflight:"xhr",ping:"xhr",media:"media",manifest:"other",other:"other",texttrack:"media"};function rt(i,t,e){let r=st[i.toLowerCase()];if(r)return r;let a=t.toLowerCase();if(/html|xhtml/.test(a))return"document";if(/javascript|ecmascript|wasm/.test(a))return"script";if(/css/.test(a))return"style";if(a.startsWith("image/"))return"image";if(a.startsWith("font/")||/woff|truetype|opentype|fontobject/.test(a))return"font";if(a.startsWith("audio/")||a.startsWith("video/"))return"media";if(/json|xml|text\/plain|event-stream|protobuf|grpc/.test(a))return"xhr";let n=/\.([a-z0-9]{1,5})(?:[?#]|$)/i.exec(e)?.[1]?.toLowerCase()??"";return/^(?:js|mjs)$/.test(n)?"script":n==="css"?"style":/^(?:png|jpe?g|gif|webp|avif|svg|ico|bmp)$/.test(n)?"image":/^(?:woff2?|ttf|otf|eot)$/.test(n)?"font":/^(?:mp4|webm|mp3|ogg|wav|m3u8)$/.test(n)?"media":"other"}function at(i){try{let t=new URL(i);return{host:t.hostname,scheme:t.protocol.replace(":","")}}catch{return{host:"",scheme:""}}}function it(i,t){if(!i)return"";try{return new URL(i,t).href}catch{return i}}function nt(i,t){let e=u(i.request)?i.request:{},r=u(i.response)?i.response:{},a=u(r.content)?r.content:{},n=u(i.timings)?i.timings:{},o=h(e.url),{host:c,scheme:m}=at(o),w=h(a.mimeType,200).split(";")[0].trim(),f={blocked:0,dns:0,connect:0,ssl:0,send:0,wait:0,receive:0};for(let b of x)f[b]=Math.max(0,y(n[b]));f.ssl>0&&f.connect>=f.ssl&&(f.connect-=f.ssl);let p=y(i.time),d=x.reduce((b,Z)=>b+f[Z],0);d===0&&p>0&&(f.wait=p);let l=Math.max(0,Math.trunc(y(r.status))),g=y(r.headersSize),v=y(r.bodySize),K=y(r._transferSize)>=0?y(r._transferSize):v>=0?v+Math.max(0,g):-1,z=Date.parse(h(i.startedDateTime,64));return{index:t,epoch:Number.isFinite(z)?z:0,pageref:h(i.pageref,200),start:0,time:p>=0?p:d,timings:f,method:h(e.method,20).toUpperCase()||"GET",url:o,host:c,domain:c?D(c):"",scheme:m,status:l,statusText:h(r.statusText,200),httpVersion:h(r.httpVersion||e.httpVersion,20),mime:w,type:rt(h(i._resourceType,40),w,o),size:y(a.size),transfer:K,ip:h(i.serverIPAddress,64).replace(/^\[|\]$/g,""),redirect:it(h(r.redirectURL),o),cached:l===304||u(i.cache)&&Object.keys(i.cache).some(b=>u(i.cache[b]))||i._fromCache===!0||typeof i._fromCache=="string",requestHeaders:W(e.headers),responseHeaders:W(r.headers),thirdParty:!1,mixed:!1,failed:l===0||l>=400}}function ot(i){let t=i.find(a=>a.type==="document")??i[0];if(!t)return[];let e=[t.url],r=t;for(;r.status>=300&&r.status<400&&r.redirect&&e.length<30;){let a=r.redirect;e.push(a);let n=i.find(o=>o.url===a&&o.start>=r.start&&o!==r);if(!n)break;r=n}return e.length>1?e:[]}function G(i){if(!i.trim())return{ok:!1,error:"empty"};let t;try{t=JSON.parse(i)}catch(f){return{ok:!1,error:"json",detail:f instanceof Error?f.message.slice(0,200):""}}let e=u(t)&&u(t.log)?t.log:t,r=Array.isArray(e)?e:u(e)&&Array.isArray(e.entries)?e.entries:null;if(!r)return{ok:!1,error:"format"};let a=r.slice(0,B).filter(u).map((f,p)=>nt(f,p+1)).filter(f=>f.url),n=u(e)&&Array.isArray(e.pages)?e.pages.filter(u):[],o=u(e)&&u(e.creator)?`${h(e.creator.name,100)} ${h(e.creator.version,40)}`.trim():"",c=u(e)&&u(e.browser)?`${h(e.browser.name,100)} ${h(e.browser.version,40)}`.trim():"",w=(n.length?n.slice(0,100).map((f,p)=>({raw:f,list:a.filter(d=>d.pageref===h(f.id,200)||!d.pageref&&p===0)})):[{raw:{},list:a}]).filter(f=>f.list.length||n.length===1).map(f=>lt(f.raw,f.list));return{ok:!0,har:{creator:o,browser:c,pages:w,capped:r.length>B}}}function lt(i,t){let e=t.map(l=>l.epoch).filter(l=>l>0),r=Date.parse(h(i.startedDateTime,64)),a=Number.isFinite(r)?r:e.length?Math.min(...e):0,n=e.length?Math.min(a,...e):a,o=t.map(({epoch:l,...g})=>({...g,start:l>0?l-n:0})).sort((l,g)=>l.start-g.start||l.index-g.index),c=o.find(l=>l.type==="document"&&!(l.status>=300&&l.status<400))??o.find(l=>l.type==="document")??o[0],m=c?.domain??"",w=c?.scheme==="https";for(let l of o)l.thirdParty=!!(m&&l.domain&&l.domain!==m),l.mixed=w&&!!c&&l.start>=c.start&&l!==c&&(l.scheme==="http"||l.scheme==="ws");let f=u(i.pageTimings)?i.pageTimings:{},p=a-n,d=l=>y(l)>=0?y(l)+p:-1;return{id:h(i.id,200),title:h(i.title,500),started:n,onContentLoad:d(f.onContentLoad),onLoad:d(f.onLoad),url:c?.url??"",domain:m,entries:o,redirects:ot(o),duration:Math.max(0,...o.map(l=>l.start+l.time),d(f.onLoad))}}function J(i){let t=new Set(i.map(r=>r.host).filter(Boolean)),e=new Set(i.filter(r=>r.thirdParty).map(r=>r.host));return{requests:i.length,domains:t.size,thirdParty:e.size,transfer:i.reduce((r,a)=>r+Math.max(0,a.transfer),0),size:i.reduce((r,a)=>r+Math.max(0,a.size),0),failed:i.filter(r=>r.failed).length,redirects:i.filter(r=>r.status>=300&&r.status<400&&r.redirect).length,mixed:i.filter(r=>r.mixed).length}}function X(i){let t=new Map;for(let e of i){let r=e.host||e.url.slice(0,40),a=t.get(r)??{host:r,domain:e.domain,thirdParty:e.thirdParty,requests:0,transfer:0,ips:new Set,types:new Set};a.requests+=1,a.transfer+=Math.max(0,e.transfer),e.ip&&a.ips.add(e.ip),a.types.add(e.type),t.set(r,a)}return[...t.values()].sort((e,r)=>r.requests-e.requests||e.host.localeCompare(r.host)).map(e=>({...e,ips:[...e.ips],types:k.filter(r=>e.types.has(r))}))}function ft(i){let t=/^[=+\-@\t\r]/.test(i)?`'${i}`:i;return/[",\n]/.test(t)?`"${t.replace(/"/g,'""')}"`:t}function Y(i){let t="index,method,status,type,url,ip,transfer,size,start_ms,time_ms",e=i.map(r=>[String(r.index),r.method,String(r.status),r.type,r.url,r.ip,String(r.transfer),String(r.size),r.start.toFixed(1),r.time.toFixed(1)].map(ft).join(","));return[t,...e].join(`
`)}E({en:j,fr:V});var q=300,ct=Object.freeze(["requests","domains"]),Q=class extends M{static type="waterfall";static componentAttributes=Object.freeze(["view","page","filters","defang","tabs"]);static presets={simple:{tabs:!0},full:{header:!0,dot:!0,copy:!0,fullscreen:!0,tabs:!0}};static styles=[U];static upgradeProperties=["content"];constructor(){super(),this.panelId=R("panel"),this.ids={query:R("query"),page:R("page")},this.viewState=null,this.pageState=null,this.types=new Set,this.thirdOnly=!1,this.query="",this.opened=new Set,this.limit=q,this.parsed=null,this.editor=null,this.previewTimer=void 0}read(){let t=this.text??"";return this.parsed?.text!==t&&(this.parsed={text:t,result:G(t)}),this.parsed.result}get har(){let t=this.read();return t.ok?t.har:null}get view(){return this.viewState??L(this.getAttribute("view"),ct,"requests")}pageIndex(t){let e=this.pageState??A(this.getAttribute("page"),{min:1,max:1e3,fallback:1})-1;return Math.min(Math.max(0,e),Math.max(0,t.pages.length-1))}flag(t,e){return $(this.getAttribute(t))??e}shown(t){return this.flag("defang",!1)?O(t):t}ms(t){return t<0?"\u2014":t<1e3?`${S(Math.round(t),this.locale)} ms`:`${new Intl.NumberFormat(this.locale,{maximumFractionDigits:2}).format(t/1e3)} s`}bytes(t){return t<0?"\u2014":N(t,this.locale)}filtered(t){let e=this.query.trim().toLowerCase();return t.filter(r=>(!this.types.size||this.types.has(r.type))&&(!this.thirdOnly||r.thirdParty)&&(!e||r.url.toLowerCase().includes(e)||String(r.status)===e))}renderContent(t){let e=this.t,r=this.read(),a=s("div",{class:"body wf-body",part:"body"}),n=null,o=null;if(r.ok)if(!r.har.pages.length||!r.har.pages.some(d=>d.entries.length))a.append(C(e("wfNoEntries")));else{let d=r.har;n=d.pages[this.pageIndex(d)];let l=X(n.entries);o=this.feature("tabs")?F({tabs:[{id:"requests",label:e("wfTabRequests",{count:n.entries.length})},{id:"domains",label:e("wfTabDomains",{count:l.length})}],selected:this.view,label:e("wfTabs"),panelId:this.panelId,onSelect:g=>this.selectView(g)}):null,d.pages.length>1&&a.append(this.pagePicker(d)),a.append(this.summaryView(n)),d.capped&&a.append(C(e("wfCapped",{count:n.entries.length}))),this.view==="domains"&&o?a.append(this.domainsView(l)):(this.flag("filters",!0)&&a.append(this.filtersView(n.entries)),a.append(this.requestsView(n)),a.append(this.legend()))}else{let d=`wfInvalid${r.error[0].toUpperCase()}${r.error.slice(1)}`;a.append(C(e(d,{detail:r.detail??""})))}let c=s("div",{class:"panel",attrs:{id:this.panelId,role:o?"tabpanel":null}}),m=[];if(this.editing){let d=this.createEditor();c.classList.add("wf-edit"),c.append(s("div",{class:"body editor-body",part:"body source"},d.element),a),m=this.historyButtons(d)}else c.append(a);let w=n?this.filtered(n.entries):[],f=this.feature("copy")&&w.length>0,p=[...m,this.editToggleButton(),this.fullscreenButton(),f?this.copyTextButton(()=>Y(w),e("wfCopyCsv"),"copy-csv"):null,f?this.copyButton(()=>w.map(d=>this.shown(d.url)).join(`
`),e("wfCopyUrls")):null];t.append(...this.chrome({badge:"HAR",tabs:o,actions:p}),c),this.editor?.align()}selectView(t){t!==this.view&&(this.viewState=t,this.render(),this.root.querySelector(`[data-tab="${t}"]`)?.focus(),T(this,_.TAB_CHANGE,{tab:t}))}pagePicker(t){let e=this.t,r=this.pageIndex(t),a=s("select",{attrs:{id:this.ids.page,"data-focus-key":"page"},on:{change:()=>{this.pageState=Number(a.value),this.opened.clear(),this.limit=q,this.render()}}},...t.pages.map((n,o)=>s("option",{text:`${o+1}. ${n.title||n.url||n.id}`.slice(0,160),attrs:{value:String(o),selected:o===r}})));return s("div",{class:"wf-page"},s("label",{attrs:{for:this.ids.page},text:e("wfPage")}),a)}summaryView(t){let e=this.t,r=J(t.entries),a=[s("strong",{text:e("wfRequests",{count:S(r.requests,this.locale)})}),s("span",{text:e("wfDomains",{count:r.domains})}),r.thirdParty?s("span",{text:e("wfThirdParty",{count:r.thirdParty})}):null,s("span",{text:e("wfTransferred",{size:this.bytes(r.transfer)})}),r.size?s("span",{class:"wf-muted",text:e("wfResources",{size:this.bytes(r.size)})}):null,t.onContentLoad>=0?s("span",{class:"wf-dcl-text",text:e("wfDcl",{time:this.ms(t.onContentLoad)})}):null,t.onLoad>=0?s("span",{class:"wf-load-text",text:e("wfLoad",{time:this.ms(t.onLoad)})}):null,s("span",{class:"wf-muted",text:e("wfFinish",{time:this.ms(t.duration)})}),r.failed?s("span",{class:"wf-bad"},P("alert"),s("span",{text:e("wfFailed",{count:r.failed})})):null,r.mixed?s("span",{class:"wf-bad"},P("alert"),s("span",{text:e("wfMixed",{count:r.mixed})})):null];return s("div",{class:"wf-summary",part:"summary"},t.title||t.url?s("p",{class:"wf-title"},s("code",{text:t.title&&t.title!==t.url?t.title:this.shown(t.url)})):null,s("p",{class:"wf-facts"},...a),t.redirects.length?s("div",{class:"wf-redirects",part:"redirects"},s("p",{class:"wf-label",text:e("wfRedirectChain")}),s("ol",{},...t.redirects.map(n=>s("li",{},s("code",{text:this.shown(n)}))))):null)}filtersView(t){let e=this.t,r=new Map(k.map(o=>[o,t.filter(c=>c.type===o).length])),a=(o,c,m,w)=>s("button",{class:`wf-chip${m?" on":""}`,text:c,attrs:{type:"button","aria-pressed":String(m),"data-focus-key":`filter-${o}`},on:{click:w}}),n=s("input",{class:"wf-query",attrs:{id:this.ids.query,type:"search",value:this.query,placeholder:e("wfFilterUrl"),"aria-label":e("wfFilterUrl"),"data-focus-key":"query",spellcheck:"false"},on:{input:()=>{this.query=n.value.slice(0,200),this.filtersChanged(t)}}});return s("div",{class:"wf-filters",part:"filters",attrs:{role:"group","aria-label":e("wfFilters")}},a("all",e("wfAll"),!this.types.size,()=>{this.types.clear(),this.filtersChanged(t)}),...k.filter(o=>r.get(o)).map(o=>a(o,`${e(`wfType_${o}`)} ${r.get(o)}`,this.types.has(o),()=>{this.types.has(o)?this.types.delete(o):this.types.add(o),this.types.size===k.filter(c=>r.get(c)).length&&this.types.clear(),this.filtersChanged(t)})),t.some(o=>o.thirdParty)?a("third",e("wfThirdOnly"),this.thirdOnly,()=>{this.thirdOnly=!this.thirdOnly,this.filtersChanged(t)}):null,n)}filtersChanged(t){this.limit=q,this.render(),T(this,_.FILTER_CHANGE,{types:[...this.types],query:this.query,thirdParty:this.thirdOnly,shown:this.filtered(t).length})}requestsView(t){let e=this.t,r=this.filtered(t.entries);if(!r.length)return C(e("wfNone"));let a=t.duration||1,n=[["dcl",t.onContentLoad],["load",t.onLoad]].filter(([,p])=>Number(p)>=0),o=s("div",{class:"wf-ruler",attrs:{"aria-hidden":"true"}}),c=dt(a);for(let p=0;p<=a&&c>0;p+=c){let d=s("span",{class:"wf-tick",text:this.ms(p)});d.style.insetInlineStart=`${p/a*100}%`,o.append(d)}let m=s("thead",{},s("tr",{},s("th",{class:"wf-c-name",attrs:{scope:"col"},text:e("wfName")}),s("th",{class:"wf-c-status",attrs:{scope:"col"},text:e("wfStatus")}),s("th",{class:"wf-c-type",attrs:{scope:"col"},text:e("wfType")}),s("th",{class:"wf-c-size",attrs:{scope:"col"},text:e("wfSize")}),s("th",{class:"wf-c-time",attrs:{scope:"col"},text:e("wfTime")}),s("th",{class:"wf-c-lane",attrs:{scope:"col"}},s("span",{class:"sr-only",text:e("wfWaterfall")}),o))),w=r.slice(0,this.limit).flatMap(p=>this.requestRows(p,a,n)),f=r.length>this.limit?s("button",{class:"text-btn wf-more",text:e("wfShowMore",{count:S(Math.min(q,r.length-this.limit),this.locale)}),attrs:{type:"button","data-focus-key":"more"},on:{click:()=>{this.limit+=q,this.render()}}}):null;return s("div",{class:"wf-requests"},s("div",{class:"wf-scroll"},s("table",{class:"wf-table",part:"requests"},m,s("tbody",{},...w))),f)}requestRows(t,e,r){let a=this.t,n=this.opened.has(t.index),o=`${this.panelId}-r${t.index}`,c=t.url;try{let l=new URL(t.url);c=`${l.pathname.split("/").filter(Boolean).at(-1)??""}${l.search}`.slice(0,120)||l.host}catch{}let m=t.status>=300&&t.status<400&&t.redirect,w=s("div",{class:"wf-lane"}),f=s("span",{class:"wf-bar",part:"bar",attrs:{role:"img","aria-label":`${a("wfBarLabel",{start:this.ms(t.start),time:this.ms(t.time)})}. ${this.phaseText(t)}`}});f.style.insetInlineStart=`${t.start/e*100}%`,f.style.width=`${Math.max(.2,t.time/e*100)}%`;let p=x.reduce((l,g)=>l+t.timings[g],0)||1;for(let l of x){if(!t.timings[l])continue;let g=s("span",{class:`wf-seg ph-${l}`});g.style.width=`${t.timings[l]/p*100}%`,f.append(g)}w.append(f);for(let[l,g]of r){let v=s("span",{class:`wf-mark ${l}`,attrs:{"aria-hidden":"true"}});v.style.insetInlineStart=`${g/e*100}%`,w.append(v)}let d=s("tr",{class:`wf-row${t.failed?" failed":""}${n?" open":""}`,attrs:{"data-index":t.index}},s("th",{class:"wf-c-name",attrs:{scope:"row"}},s("button",{class:"wf-name",attrs:{type:"button","aria-expanded":String(n),"aria-controls":n?o:null,title:this.shown(t.url),"data-focus-key":`row-${t.index}`},on:{click:()=>this.toggle(t)}},s("span",{class:`wf-chevron${n?" open":""}`,attrs:{"aria-hidden":"true"}},P("chevron-right")),s("span",{class:"wf-file"},s("span",{class:"wf-path",text:this.flag("defang",!1)?c.replace(/\./g,"[.]"):c}),s("span",{class:"wf-host",text:this.flag("defang",!1)?t.host.replace(/\./g,"[.]"):t.host}))),t.thirdParty?s("span",{class:"wf-tag",text:a("wfTag_third")}):null,t.mixed?s("span",{class:"wf-tag bad",text:a("wfTag_mixed")}):null,m?s("span",{class:"wf-tag",text:a("wfTag_redirect")}):null),s("td",{class:`wf-c-status st-${Math.floor(t.status/100)}`},s("span",{text:t.status?String(t.status):a("wfFailedStatus")})),s("td",{class:"wf-c-type",text:a(`wfType_${t.type}`)}),s("td",{class:"wf-c-size",text:t.cached&&t.transfer<=0?a("wfCached"):this.bytes(t.transfer>=0?t.transfer:t.size)}),s("td",{class:"wf-c-time",text:this.ms(t.time)}),s("td",{class:"wf-c-lane"},w));return n?[d,s("tr",{class:"wf-detail-row"},s("td",{attrs:{colspan:6,id:o}},this.detailsView(t)))]:[d]}phaseText(t){return x.filter(e=>t.timings[e]).map(e=>`${this.t(`wfPhase_${e}`)} ${this.ms(t.timings[e])}`).join(", ")}toggle(t){this.opened.has(t.index)?this.opened.delete(t.index):(this.opened.add(t.index),T(this,_.SELECT,{index:t.index,url:t.url,status:t.status})),this.render()}detailsView(t){let e=this.t,r=[["wfUrl",this.shown(t.url)],["wfIp",t.ip],["wfProtocol",t.httpVersion],["wfMime",t.mime],["wfRedirectTo",t.redirect?this.shown(t.redirect):""],["wfStart",this.ms(t.start)]],a=(n,o)=>o.length?s("details",{class:"wf-headers"},s("summary",{text:e(n,{count:o.length})}),s("dl",{},...o.flatMap(c=>[s("dt",{text:c.name}),s("dd",{text:c.value})]))):null;return s("div",{class:"wf-details",part:"details"},s("dl",{class:"wf-facts-list"},...r.filter(([,n])=>n).flatMap(([n,o])=>[s("dt",{text:e(n)}),s("dd",{},s("code",{text:o}))])),s("div",{class:"wf-timings"},s("p",{class:"wf-label",text:e("wfTimings")}),s("table",{},s("tbody",{},...x.filter(n=>t.timings[n]).map(n=>s("tr",{},s("th",{attrs:{scope:"row"}},s("span",{class:`wf-swatch ph-${n}`,attrs:{"aria-hidden":"true"}}),s("span",{text:e(`wfPhase_${n}`)})),s("td",{text:this.ms(t.timings[n])})))))),a("wfRequestHeaders",t.requestHeaders),a("wfResponseHeaders",t.responseHeaders))}domainsView(t){let e=this.t,r=a=>this.flag("defang",!1)?a.replace(/\./g,"[.]"):a;return s("div",{class:"wf-scroll"},s("table",{class:"wf-domains",part:"domains"},s("thead",{},s("tr",{},...[e("wfHost"),e("wfRequestsCol"),e("wfSize"),e("wfIps"),e("wfTypes")].map(a=>s("th",{attrs:{scope:"col"},text:a})))),s("tbody",{},...t.map(a=>s("tr",{},s("th",{attrs:{scope:"row"}},s("code",{text:r(a.host)}),a.thirdParty?s("span",{class:"wf-tag",text:e("wfTag_third")}):null),s("td",{class:"wf-num",text:S(a.requests,this.locale)}),s("td",{class:"wf-num",text:this.bytes(a.transfer)}),s("td",{},s("code",{text:a.ips.join(", ")})),s("td",{text:a.types.map(n=>e(`wfType_${n}`)).join(", ")}))))))}legend(){let t=this.t;return s("ul",{class:"wf-legend",part:"legend"},...x.map(e=>s("li",{},s("span",{class:`wf-swatch ph-${e}`,attrs:{"aria-hidden":"true"}}),s("span",{text:t(`wfPhase_${e}`)}))),s("li",{},s("span",{class:"wf-swatch-line dcl",attrs:{"aria-hidden":"true"}}),s("span",{text:"DOMContentLoaded"})),s("li",{},s("span",{class:"wf-swatch-line load",attrs:{"aria-hidden":"true"}}),s("span",{text:"Load"})))}createEditor(){return this.editor?.destroy(),this.editor=new I({text:this.text??"",language:"json",lineNumbers:!0,wrap:!1,highlightLimit:H().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:t=>this.edited(t),onChange:t=>T(this,_.CHANGE,{value:t}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),400)}};function dt(i){let t=i/5;if(t<=0)return 0;let e=10**Math.floor(Math.log10(t));return[1,2,5,10].map(a=>a*e).find(a=>a>=t)??t}export{Q as a};
