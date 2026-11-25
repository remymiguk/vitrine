/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{b as T}from"./chunk-4DG3OOJM.js";import{a as O}from"./chunk-MACGSD2B.js";import{a as I}from"./chunk-PIFKHUVR.js";import{a as F}from"./chunk-5Y6ZLKSA.js";import{i as w}from"./chunk-YYOH5HHP.js";import{a as D}from"./chunk-DTTKBDLP.js";import{a as A}from"./chunk-VUXWEGPX.js";import{B as y,X as L,b as P,c as z,d as $,e as B,o as c,q as M}from"./chunk-JAZI474S.js";import{k as S,l as C,m as R,q as d}from"./chunk-SCKP2KTO.js";var N=`/*
 * Access log: totals, requests per period, the requests and top lists.
 */
.ax-body {
  display: grid;
  gap: var(--_space-4);
}

.c2xx {
  --_tone: var(--_success);
}

.c3xx {
  --_tone: var(--_info);
}

.c4xx {
  --_tone: var(--_warning);
}

.c5xx {
  --_tone: var(--_danger);
}

.cother {
  --_tone: var(--_fg-muted);
}

/* ---------- Totals ---------- */

.ax-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--_space-2);
  margin: 0;
}

.ax-stat {
  display: grid;
  gap: 2px;
  padding: var(--_space-3);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.ax-stat dt {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.ax-stat dd {
  margin: 0;
  color: var(--_fg);
  font-size: 17px;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}

.ax-stat.bad dd {
  color: var(--_danger);
}

/* ---------- Chart ---------- */

.ax-chart {
  display: grid;
  gap: var(--_space-1);
  margin: 0;
}

.ax-bars {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 96px;
  padding-bottom: 1px;
  border-bottom: 1px solid var(--_border);
}

.ax-bar {
  display: flex;
  flex: 1;
  flex-direction: column-reverse;
  min-width: 2px;
  height: 100%;
}

.ax-part {
  height: var(--_h);
  background: var(--_tone);
}

.ax-part:last-child {
  border-radius: 2px 2px 0 0;
}

.ax-axis {
  display: flex;
  justify-content: space-between;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

/* ---------- Filters ---------- */

.ax-filters {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2) var(--_space-3);
}

.ax-classes {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1);
}

.ax-class {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-2);
  padding: var(--_space-1) var(--_space-3);
  border: 1px solid var(--_border-strong);
  border-inline-start: 3px solid var(--_tone, var(--_border-strong));
  border-radius: var(--_radius-sm);
  background: transparent;
  color: var(--_fg);
  font: inherit;
  cursor: pointer;
}

.ax-class[aria-pressed='true'] {
  border-color: var(--_accent);
  background: var(--_accent-soft);
  font-weight: 600;
}

.ax-class:focus-visible,
.ax-search:focus-visible,
.ax-link:focus-visible,
.ax-toggle:focus-visible,
.ax-entry:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.ax-count {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
}

.ax-search {
  flex: 1;
  min-width: min(100%, 220px);
  padding: var(--_space-2) var(--_space-3);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: var(--_fg);
  font: inherit;
}

.ax-shown {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

/* ---------- Table ---------- */

.ax-wrap {
  display: grid;
  gap: var(--_space-2);
  min-width: 0;
}

.ax-scroll {
  max-height: var(--_max-height, 520px);
  overflow: auto;
}

.ax-table {
  font-size: var(--_font-size-small);
}

.ax-table td {
  white-space: nowrap;
}

.ax-row {
  box-shadow: inset 3px 0 0 var(--_tone);
}

.ax-time,
.ax-method {
  color: var(--_fg-muted);
  font-variant-numeric: tabular-nums;
}

.ax-path {
  max-width: 28rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ax-link,
.ax-toggle {
  max-width: 100%;
  overflow: hidden;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--_accent-fg);
  font: inherit;
  text-align: start;
  text-overflow: ellipsis;
  cursor: pointer;
}

.ax-toggle {
  color: var(--_fg);
  font-family: var(--_font-mono);
}

.ax-status {
  color: var(--_tone);
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}

.ax-client.bot {
  color: var(--_info);
}

.ax-detail td {
  background: var(--_surface-sunken);
  white-space: normal;
}

.ax-details {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: var(--_space-1) var(--_space-3);
  margin: 0;
}

.ax-details dt {
  color: var(--_fg-muted);
}

.ax-details dd {
  margin: 0;
  overflow-wrap: anywhere;
}

.ax-more {
  justify-self: start;
}

/* ---------- Top lists ---------- */

.ax-tops {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: var(--_space-3);
}

.ax-top {
  padding: var(--_space-3);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.ax-top h3 {
  margin: 0 0 var(--_space-2);
  color: var(--_fg);
  font: 600 var(--_font-size-ui) / 1.4 var(--_font-ui);
}

.ax-top ol {
  display: grid;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.ax-entry {
  display: flex;
  justify-content: space-between;
  gap: var(--_space-2);
  width: 100%;
  padding: 3px var(--_space-2);
  border: 0;
  border-radius: var(--_radius-sm);
  background: linear-gradient(
    to right,
    var(--_accent-soft) var(--_share),
    transparent var(--_share)
  );
  color: var(--_fg);
  font: inherit;
  font-size: var(--_font-size-small);
  text-align: start;
  cursor: pointer;
}

.ax-entry:hover {
  outline: 1px solid var(--_accent);
}

.ax-entry-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ax-entry-count {
  color: var(--_fg-muted);
  font-variant-numeric: tabular-nums;
}
`;var ee=1e5,te={jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11},se=/^(\d{1,2})\/(\w{3})\/(\d{4}):(\d{2}):(\d{2}):(\d{2})(?:\s*([+-]\d{4}))?$/,ae=/^(\S+) (\S+) (\S+) \[([^\]]+)\] "((?:[^"\\]|\\.)*)" (\d{3}|-) (\d+|-)(?: "((?:[^"\\]|\\.)*)" "((?:[^"\\]|\\.)*)")?(.*)$/;function j(a){let s=se.exec(a.trim());if(!s){let i=Date.parse(a);return Number.isNaN(i)?null:i}let t=te[s[2].toLowerCase()];if(t===void 0)return null;let e=Date.UTC(+s[3],t,+s[1],+s[4],+s[5],+s[6]),r=s[7]?(s[7][0]==="-"?-1:1)*(+s[7].slice(1,3)*60+ +s[7].slice(3)):0;return e-r*6e4}var q=a=>a.replace(/\\x([0-9a-f]{2})/gi,(s,t)=>String.fromCharCode(parseInt(t,16))).replace(/\\(.)/g,"$1"),k=a=>a==="-"?"":a;function v(a){let s=typeof a=="number"?a:typeof a=="string"&&a.trim()&&a!=="-"?Number(a):NaN;return Number.isFinite(s)?s:null}var re=["Googlebot","bingbot","GPTBot","ChatGPT-User","OAI-SearchBot","ClaudeBot","Claude-User","anthropic-ai","PerplexityBot","Applebot","DuckDuckBot","YandexBot","Baiduspider","AhrefsBot","SemrushBot","MJ12bot","DotBot","PetalBot","Bytespider","CCBot","facebookexternalhit","Twitterbot","LinkedInBot","Slackbot","Discordbot","TelegramBot","WhatsApp","UptimeRobot","Pingdom","Amazonbot","meta-externalagent"],oe=[["curl","curl"],["Wget","Wget"],["python-requests","Python requests"],["python-httpx","Python httpx"],["aiohttp","aiohttp"],["Go-http-client","Go"],["okhttp","OkHttp"],["axios","axios"],["node-fetch","node-fetch"],["undici","Node.js"],["PostmanRuntime","Postman"],["insomnia","Insomnia"],["Java/","Java"],["libwww-perl","Perl"],["HTTPie","HTTPie"],["k6/","k6"]];function ie(a){if(!a)return{browser:"",os:"",device:"unknown",bot:""};let s=re.find(o=>a.toLowerCase().includes(o.toLowerCase()));if(s)return{browser:"",os:"",device:"bot",bot:s};if(/bot\b|crawler|spider|slurp|scraper|headless/i.test(a))return{browser:"",os:"",device:"bot",bot:/([\w.-]*(?:bot|crawler|spider|Slurp)[\w.-]*)/i.exec(a)?.[1]??"Bot"};let t=oe.find(([o])=>a.includes(o));if(t)return{browser:t[1],os:"",device:"tool",bot:""};let e=/Windows NT/.test(a)?"Windows":/iPhone|iPad|iPod/.test(a)?"iOS":/Mac OS X|Macintosh/.test(a)?"macOS":/Android/.test(a)?"Android":/CrOS/.test(a)?"ChromeOS":/Linux|X11/.test(a)?"Linux":"",r=/Edg(?:e|A|iOS)?\//.test(a)?"Edge":/OPR\/|Opera/.test(a)?"Opera":/SamsungBrowser/.test(a)?"Samsung Internet":/Firefox\/|FxiOS/.test(a)?"Firefox":/Chrome\/|CriOS/.test(a)?"Chrome":/Safari\//.test(a)?"Safari":"",i=/Mobi|iPhone|Android(?!.*Tablet)/.test(a);return{browser:r,os:e,device:r||e?i?"mobile":"desktop":"unknown",bot:""}}var U=a=>({...a,client:ie(a.agent)});function ne(a,s){let t=ae.exec(a);if(!t)return null;let[e="",r="",i=""]=q(t[5]).split(" "),o=t[10]??"",l=/(?:rt|request_time|rtime)=(\d+(?:\.\d+)?)/.exec(o)?.[1]??/^\s+(\d+\.\d+)\b/.exec(o)?.[1];return U({line:s,ip:t[1],user:k(t[3]),time:j(t[4]),method:e.slice(0,20),path:r.slice(0,4e3),protocol:i,status:v(t[6]),bytes:v(t[7]),referer:k(q(t[8]??"")),agent:k(q(t[9]??"")),duration:l?Number(l)*1e3:null,host:/"?(?:host|vhost)="?([\w.:-]+)/.exec(o)?.[1]??""})}function f(a,s){for(let t of s){let e=a;for(let r of t.split("."))e=y(e)?e[r]:void 0;if(Array.isArray(e)&&(e=e[0]),e!=null&&e!==""&&e!=="-")return e}}function V(a,s){let t=n=>typeof n=="string"?n:typeof n=="number"?String(n):"",e=t(f(a,["request.uri","uri","RequestPath","request_uri","path","url","request.url","cs-uri-stem"])),r=v(f(a,["status","DownstreamStatus","OriginStatus","response.status","status_code","statusCode","sc-status"]));if(!e&&r===null)return null;let i=f(a,["ts","time","time_iso8601","time_local","StartUTC","StartLocal","timestamp","@timestamp","date"]),o=typeof i=="number"?i>1e11?i:i*1e3:typeof i=="string"?j(i):null,l=f(a,["duration_ms","Duration","duration","request_time","latency","responseTime","time-taken"]),u=v(l),p=u===null?null:a.Duration!==void 0?u/1e6:a.duration_ms!==void 0||a.responseTime!==void 0||a["time-taken"]!==void 0?u:u*1e3;return U({line:s,ip:t(f(a,["request.client_ip","request.remote_ip","ClientHost","ClientAddr","remote_addr","client_ip","ip","remote_ip","c-ip","clientIp"])).replace(/:\d+$/,""),user:t(f(a,["user_id","remote_user","ClientUsername","user","cs-username","username"])),time:o,method:t(f(a,["request.method","RequestMethod","request_method","method","cs-method"])).slice(0,20),path:e.slice(0,4e3),protocol:t(f(a,["request.proto","RequestProtocol","server_protocol","protocol"])),status:r,bytes:v(f(a,["size","DownstreamContentSize","body_bytes_sent","bytes_sent","bytes","sc-bytes","responseSize"])),referer:t(f(a,["request.headers.Referer","request_Referer","http_referer","referer","referrer","cs(Referer)"])),agent:t(f(a,["request.headers.User-Agent","request_User-Agent","http_user_agent","user_agent","userAgent","agent","cs(User-Agent)"])),duration:p,host:t(f(a,["request.host","RequestHost","host","server_name","cs-host"]))})}function H(a){let s=[],t=null,e=a.split(/\r?\n/);for(let r=0;r<e.length&&s.length<ee;r+=1){let i=e[r].trim();if(!i)continue;if(i.startsWith("#")){/^#Fields:/i.test(i)&&(t=i.slice(8).trim().split(/\s+/));continue}let o=null;if(i.startsWith("{"))try{let l=JSON.parse(i);y(l)&&(o=V(l,r+1))}catch{o=null}else if(t){let l=i.split(/\s+/),u={};t.forEach((p,n)=>u[p]=(l[n]??"-").replace(/\+/g," ")),u.date&&u.time&&(u.date=`${u.date}T${u.time}Z`),u["cs-uri-query"]&&u["cs-uri-query"]!=="-"&&(u["cs-uri-stem"]+=`?${u["cs-uri-query"]}`),o=V(u,r+1)}else o=ne(i,r+1);o&&s.push(o)}return s}function G(a){return/^\d{1,3}(?:\.\d{1,3}){3}$/.test(a)?a.replace(/\.\d{1,3}$/,".0"):a.includes(":")?`${a.split(":").slice(0,3).join(":")}::`:a}function x(a){return a===null?"other":a>=200&&a<300?"2xx":a>=300&&a<400?"3xx":a>=400&&a<500?"4xx":a>=500&&a<600?"5xx":"other"}function E(a,s){if(!a.length)return null;let t=(a.length-1)*s,e=Math.floor(t);return a[e]+(a[Math.ceil(t)]-a[e])*(t-e)}function W(a){let s=a.map(e=>e.duration).filter(e=>e!==null).sort((e,r)=>e-r),t=a.filter(e=>e.status!==null&&e.status>=400).length;return{requests:a.length,visitors:new Set(a.map(e=>e.ip)).size,errors:t,bytes:a.reduce((e,r)=>e+(r.bytes??0),0),bots:a.filter(e=>e.client.device==="bot").length,median:E(s,.5),p95:E(s,.95)}}function m(a,s,t=10){let e=new Map;for(let r of a){let i=s(r);i&&e.set(i,(e.get(i)??0)+1)}return[...e].sort((r,i)=>i[1]-r[1]||r[0].localeCompare(i[0])).slice(0,t)}function J(a,s=48){let t=a.map(n=>n.time).filter(n=>n!==null);if(t.length<2)return null;let e=Math.min(...t),r=Math.max(...t),i=[1,5,10,30,60,300,600,900,1800,3600,7200,10800,21600,43200,86400,604800].map(n=>n*1e3),o=i.find(n=>(r-e)/n<=s)??i[i.length-1],l=Math.floor(e/o)*o,u=Math.max(1,Math.floor((r-l)/o)+1),p=Array.from({length:Math.min(u,1e3)},()=>({"2xx":0,"3xx":0,"4xx":0,"5xx":0,other:0}));for(let n of a){if(n.time===null)continue;let h=p[Math.floor((n.time-l)/o)];h&&(h[x(n.status)]+=1)}return{start:l,size:o,buckets:p}}var K=Object.freeze({accessRequests:"Requests",accessVisitors:"Visitors",accessErrors:"Errors",accessData:"Data sent",accessLatency:"Response time",accessLatencyValue:"{median} median \xB7 {p95} p95",accessBots:"Bots",accessShare:"{count} ({percent})",accessTable:"Requests",accessTop:"Top lists",accessFilter:"Status",accessAll:"All",accessSearch:"Filter requests",accessSearchPlaceholder:"Filter: /login, 203.0.113.7, status:404, bot:yes\u2026",accessShown:"{shown} of {total} requests",accessTime:"Time",accessIp:"IP",accessMethod:"Method",accessPath:"Path",accessStatus:"Status",accessSize:"Size",accessDuration:"Duration",accessClient:"Client",accessUser:"User",accessAgent:"User agent",accessReferer:"Referer",accessHost:"Host",accessProtocol:"Protocol",accessLine:"Line {line}",accessMore:"Show {count} more",accessTopPaths:"Pages",accessTopIps:"IP addresses",accessTopClients:"Browsers and bots",accessTopSystems:"Systems",accessTopReferers:"Referers",accessTopStatus:"Status codes",accessTopMissing:"Not found (404)",accessTopSlow:"Slowest pages",accessKeep:"Show only {value}",accessChart:"Requests per {period}, from {from} to {to}; the busiest had {peak}.",accessPeriod_s:"second",accessPeriod_min:"minute",accessPeriod_h:"hour",accessPeriod_d:"day",accessPeriod_w:"week",accessBar:"{time}: {count} requests",accessNone:"No request matches.",accessEmpty:"No request in this log.",accessCopyCsv:"Copy the requests shown as CSV"}),X={accessRequests:"Requ\xEAtes",accessVisitors:"Visiteurs",accessErrors:"Erreurs",accessData:"Donn\xE9es envoy\xE9es",accessLatency:"Temps de r\xE9ponse",accessLatencyValue:"{median} m\xE9diane \xB7 {p95} p95",accessBots:"Robots",accessTable:"Requ\xEAtes",accessTop:"Classements",accessFilter:"Statut",accessAll:"Toutes",accessSearch:"Filtrer les requ\xEAtes",accessSearchPlaceholder:"Filtrer : /login, 203.0.113.7, status:404, bot:yes\u2026",accessShown:"{shown} sur {total} requ\xEAtes",accessTime:"Heure",accessMethod:"M\xE9thode",accessPath:"Chemin",accessStatus:"Statut",accessSize:"Taille",accessDuration:"Dur\xE9e",accessClient:"Client",accessUser:"Utilisateur",accessAgent:"Agent utilisateur",accessReferer:"R\xE9f\xE9rent",accessHost:"H\xF4te",accessProtocol:"Protocole",accessLine:"Ligne {line}",accessMore:"Afficher {count} de plus",accessTopPaths:"Pages",accessTopIps:"Adresses IP",accessTopClients:"Navigateurs et robots",accessTopSystems:"Syst\xE8mes",accessTopReferers:"R\xE9f\xE9rents",accessTopStatus:"Codes de statut",accessTopMissing:"Introuvables (404)",accessTopSlow:"Pages les plus lentes",accessKeep:"Afficher seulement {value}",accessChart:"Requ\xEAtes par {period}, du {from} au {to} ; la plus charg\xE9e en a eu {peak}.",accessPeriod_s:"seconde",accessPeriod_min:"minute",accessPeriod_h:"heure",accessPeriod_d:"jour",accessPeriod_w:"semaine",accessBar:"{time} : {count} requ\xEAtes",accessNone:"Aucune requ\xEAte ne correspond.",accessEmpty:"Aucune requ\xEAte dans ce journal.",accessCopyCsv:"Copier les requ\xEAtes affich\xE9es en CSV"};R({en:K,fr:X});var Q=["2xx","3xx","4xx","5xx"],ce=["ip","status","method","path","user","agent","host","referer","bot","browser","os"],Y=class extends F{static type="access-log";static editorLanguage="plaintext";static keepCarriageReturns=!1;static componentAttributes=Object.freeze(["anonymize","order","page","filter","chart","filters","tabs"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,download:!0,fullscreen:!0,filters:!0,tabs:!0}};static styles=[P,A,I,D,N];constructor(){super(),this.panelId=M("panel"),this.cache=null,this.statusFilter=null,this.query=null,this.viewChoice=null,this.limit=0,this.opened=new Set}contentChanged(){this.cache=null}get requests(){let s=this.text??"";return this.cache?.text!==s&&(this.cache={text:s,requests:H(s)}),this.cache.requests}write(s){let t=String(s).replace(/\r\n?/g,`
`).replace(/\n+$/,"");if(!t)return;let e=this.content,r=e?`${e}
${t}`:t;this.text=r,this._content=r,this.cache=null,this.requestRender()}get view(){return this.viewChoice??"requests"}get filter(){return this.query??this.getAttribute("filter")??""}ip(s){return z(this.getAttribute("anonymize"))===!0?G(s):s}keeps(s,t){let e=s.client.bot||[s.client.browser,s.client.os].filter(Boolean).join(" "),r={ip:this.ip(s.ip),status:String(s.status??""),method:s.method,path:s.path,user:s.user,agent:s.agent,host:s.host,referer:s.referer,bot:s.client.device==="bot"?`yes ${s.client.bot}`:"no",browser:e,os:s.client.os};return t.every(i=>{let o=i.indexOf(":"),l=o>0?i.slice(0,o).toLowerCase():"";if(ce.includes(l)){let p=i.slice(o+1).toLowerCase(),n=r[l].toLowerCase();return l==="status"||l==="ip"||l==="method"?n===p||l==="status"&&/^\dxx$/.test(p)&&n[0]===p[0]:n.includes(p)}let u=i.toLowerCase();return Object.values(r).some(p=>p.toLowerCase().includes(u))||e.toLowerCase().includes(u)})}setFilter(s){this.query=s.slice(0,300),this.limit=0,this.render();let t=this.shown(this.requests).length;C(this,S.FILTER_CHANGE,{status:this.statusFilter,filter:this.query,shown:t})}shown(s){let t=this.filter.trim().split(/\s+/).filter(Boolean).slice(0,10);return s.filter(e=>(!this.statusFilter||x(e.status)===this.statusFilter)&&(!t.length||this.keeps(e,t)))}renderContent(s){let t=this.t,e=this.requests,r=this.shown(e),i=c("div",{class:"body data-body ax-body",part:"body"});if(!e.length)i.append(c("p",{class:"data-none",text:t("accessEmpty")}));else{if(i.append(this.statsView(r)),this.flag("chart")){let n=this.chartView(r);n&&i.append(n)}this.feature("filters")&&i.append(this.filtersView(e,r)),r.length?i.append(this.view==="top"?this.topView(r):this.tableView(r)):i.append(c("p",{class:"data-none",text:t("accessNone")}))}let o=this.feature("tabs")&&e.length?L({tabs:[{id:"requests",label:t("accessTable"),icon:"table"},{id:"top",label:t("accessTop"),icon:"chart"}],selected:this.view,label:t("tabs"),panelId:this.panelId,onSelect:n=>{this.viewChoice=n,this.render(),this.root.querySelector(`[data-tab="${n}"]`)?.focus(),C(this,S.TAB_CHANGE,{tab:n})}}):null,{panel:l,history:u}=this.previewPanel(i,this.panelId);o&&l.setAttribute("role","tabpanel");let p=()=>this.toCsv(this.shown(this.requests));s.append(...this.chrome({badge:e.length?t("accessShown",{shown:d(r.length,this.locale),total:d(e.length,this.locale)}):"",tabs:o,actions:[...u,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.text??"",this.downloadName("access.log"),"text/plain"):null,this.feature("copy")&&r.length?this.copyButton(p,t("accessCopyCsv")):null]}),l),this.editor?.align()}percent(s,t){let e=t?s/t:0;return new Intl.NumberFormat(this.locale,{style:"percent",maximumFractionDigits:e&&e<.1?1:0}).format(e)}statsView(s){let t=this.t,e=W(s),r=[[t("accessRequests"),d(e.requests,this.locale)],[t("accessVisitors"),d(e.visitors,this.locale)],[t("accessErrors"),t("accessShare",{count:d(e.errors,this.locale),percent:this.percent(e.errors,e.requests)}),e.errors?"bad":""],[t("accessData"),T(e.bytes,this.locale)],[t("accessBots"),t("accessShare",{count:d(e.bots,this.locale),percent:this.percent(e.bots,e.requests)})]];return e.median!==null&&e.p95!==null&&r.push([t("accessLatency"),t("accessLatencyValue",{median:w(e.median),p95:w(e.p95)})]),c("dl",{class:"ax-stats",part:"stats"},...r.map(([i,o,l])=>c("div",{class:`ax-stat${l?` ${l}`:""}`},c("dt",{text:i}),c("dd",{text:o}))))}chartView(s){let t=this.t,e=J(s);if(!e)return null;let r=Math.max(1,...e.buckets.map(p=>Object.values(p).reduce((n,h)=>n+h,0))),i=e.size>=6048e5?"w":e.size>=864e5?"d":e.size>=36e5?"h":e.size>=6e4?"min":"s",o=p=>this.formatDate(p,e.size>=864e5?{dateStyle:"medium"}:{dateStyle:"short",timeStyle:e.size>=6e4?"short":"medium"}),l=e.start+e.size*e.buckets.length,u=c("div",{class:"ax-bars",attrs:{"aria-hidden":"true"}});return e.buckets.forEach((p,n)=>{let h=Object.values(p).reduce((g,_)=>g+_,0),b=c("span",{class:"ax-bar",attrs:{title:t("accessBar",{time:o(e.start+n*e.size),count:d(h,this.locale)})}});for(let g of[...Q,"other"]){if(!p[g])continue;let _=c("span",{class:`ax-part c${g}`});_.style.setProperty("--_h",`${p[g]/r*100}%`),b.append(_)}u.append(b)}),c("figure",{class:"ax-chart",part:"chart",attrs:{role:"img","aria-label":t("accessChart",{period:t(`accessPeriod_${i}`),from:o(e.start),to:o(l),peak:d(r,this.locale)})}},u,c("figcaption",{class:"ax-axis",attrs:{"aria-hidden":"true"}},c("span",{text:o(e.start)}),c("span",{text:o(l)})))}filtersView(s,t){let e=this.t,r=c("div",{class:"ax-filters"}),i=c("div",{class:"ax-classes",attrs:{role:"group","aria-label":e("accessFilter")}});for(let l of[null,...Q]){let u=l?s.filter(p=>x(p.status)===l).length:s.length;l&&!u||i.append(c("button",{class:`ax-class${l?` c${l}`:""}`,attrs:{type:"button","aria-pressed":String(this.statusFilter===l),"data-focus-key":`class-${l??"all"}`},on:{click:()=>{this.statusFilter=l,this.setFilter(this.filter)}}},c("span",{text:l??e("accessAll")}),c("span",{class:"ax-count",text:d(u,this.locale)})))}let o=c("input",{class:"ax-search",attrs:{type:"search",value:this.filter,"aria-label":e("accessSearch"),placeholder:e("accessSearchPlaceholder"),spellcheck:"false",autocomplete:"off","data-focus-key":"filter"},on:{input:l=>this.setFilter(l.target.value)}});return r.append(i,o,c("span",{class:"ax-shown",attrs:{"aria-live":"polite"},text:e("accessShown",{shown:d(t.length,this.locale),total:d(s.length,this.locale)})})),r}clientText(s){return s.client.bot||[s.client.browser,s.client.os].filter(Boolean).join(" \xB7 ")}tableView(s){let t=this.t,e=B(this.getAttribute("order"),["newest","oldest"],"newest")==="newest"?[...s].reverse():s,r=$(this.getAttribute("page"),{min:20,max:5e3,fallback:200}),i=this.limit||r,o=["accessTime","accessIp","accessMethod","accessPath","accessStatus","accessSize","accessDuration","accessClient"],l=c("tr",{},...o.map(n=>c("th",{class:["accessSize","accessDuration","accessStatus"].includes(n)?"col-number":"",attrs:{scope:"col"},text:t(n)}))),u=c("tbody");for(let n of e.slice(0,i)){let h=this.opened.has(n.line),b=`ax-row-${n.line}`;u.append(c("tr",{class:`ax-row c${x(n.status)}${h?" open":""}`},c("td",{class:"ax-time",text:n.time!==null?this.formatDate(n.time,{dateStyle:"short",timeStyle:"medium"}):""}),c("td",{},c("button",{class:"ax-link",text:this.ip(n.ip),attrs:{type:"button",title:t("accessKeep",{value:this.ip(n.ip)}),"data-focus-key":`ip-${n.line}`},on:{click:()=>this.setFilter(`ip:${this.ip(n.ip)}`)}})),c("td",{class:"ax-method",text:n.method}),c("td",{class:"ax-path"},c("button",{class:"ax-toggle",text:n.path||"\u2014",attrs:{type:"button","aria-expanded":String(h),"aria-controls":h?b:null,"data-focus-key":`row-${n.line}`},on:{click:()=>{h?this.opened.delete(n.line):this.opened.add(n.line),this.render()}}})),c("td",{class:"col-number"},c("span",{class:`ax-status c${x(n.status)}`,text:n.status===null?"":String(n.status)})),c("td",{class:"col-number",text:n.bytes!==null?T(n.bytes,this.locale):""}),c("td",{class:"col-number",text:n.duration!==null?w(n.duration):""}),c("td",{class:`ax-client${n.client.device==="bot"?" bot":""}`,text:this.clientText(n)}))),h&&u.append(c("tr",{class:"ax-detail",attrs:{id:b}},c("td",{attrs:{colspan:String(o.length)}},this.detailView(n))))}let p=c("div",{class:"ax-wrap"},c("div",{class:"ax-scroll",attrs:{tabindex:"0",role:"region","aria-label":t("accessTable")}},c("table",{class:"grid ax-table",part:"table"},c("thead",{},l),u)));return e.length>i&&p.append(c("button",{class:"text-btn ax-more",text:t("accessMore",{count:d(Math.min(r,e.length-i),this.locale)}),attrs:{type:"button","data-focus-key":"more"},on:{click:()=>{this.limit=i+r,this.render()}}})),p}detailView(s){let t=this.t,e=[["accessAgent",s.agent],["accessReferer",s.referer],["accessUser",s.user],["accessHost",s.host],["accessProtocol",s.protocol]];return c("dl",{class:"ax-details"},...e.filter(([,r])=>r).flatMap(([r,i])=>[c("dt",{text:t(r)}),c("dd",{text:i})]),c("dt",{text:t("accessLine",{line:s.line})}),c("dd",{text:this.clientText(s)}))}topView(s){let t=this.t,e=[["accessTopPaths",m(s,o=>o.path.split("?")[0]),"path"],["accessTopIps",m(s,o=>this.ip(o.ip)),"ip"],["accessTopClients",m(s,o=>o.client.bot||o.client.browser),"browser"],["accessTopSystems",m(s,o=>o.client.os),"os"],["accessTopStatus",m(s,o=>String(o.status??"")),"status"],["accessTopMissing",m(s.filter(o=>o.status===404),o=>o.path.split("?")[0]),"path"],["accessTopReferers",m(s,o=>o.referer),"referer"]],r=this.slowest(s),i=c("div",{class:"ax-tops",part:"top"});for(let[o,l,u]of e)l.length&&i.append(this.listView(t(o),l,p=>`${u}:${p.includes(" ")?p.split(" ")[0]:p}`));return r.length&&i.append(this.listView(t("accessTopSlow"),r.map(([o,l])=>[o,l]),o=>`path:${o}`,o=>w(o))),i}slowest(s){let t=new Map;for(let e of s){if(e.duration===null)continue;let r=e.path.split("?")[0];t.set(r,[...t.get(r)??[],e.duration])}return[...t].map(([e,r])=>[e,r.reduce((i,o)=>i+o,0)/r.length]).sort((e,r)=>r[1]-e[1]).slice(0,10)}listView(s,t,e,r){let i=this.t,o=Math.max(...t.map(([,l])=>l));return c("section",{class:"ax-top"},c("h3",{text:s}),c("ol",{},...t.map(([l,u])=>{let p=c("button",{class:"ax-entry",attrs:{type:"button",title:i("accessKeep",{value:l}),"data-focus-key":`top-${s}-${l}`},on:{click:()=>{this.viewChoice="requests",this.setFilter(e(l))}}},c("span",{class:"ax-entry-name",text:l}),c("span",{class:"ax-entry-count",text:r?r(u):d(u,this.locale)}));return p.style.setProperty("--_share",`${u/o*100}%`),c("li",{},p)})))}toCsv(s){return O([["time","ip","user","method","path","status","bytes","duration_ms","referer","user_agent","client"],...s.map(t=>[t.time!==null?new Date(t.time).toISOString():"",this.ip(t.ip),t.user,t.method,t.path,t.status??"",t.bytes??"",t.duration===null?"":Math.round(t.duration*1e3)/1e3,t.referer,t.agent,this.clientText(t)])])}};export{Y as a};
