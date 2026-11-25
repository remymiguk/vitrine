/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as R,b as I}from"./chunk-IDMNVFFV.js";import{r as M}from"./chunk-37OSRZJK.js";import{O as y,W as H,_ as E,ba as z,c as C,o as s,q as N}from"./chunk-JAZI474S.js";import{h as $,k as A,l as O,m as T}from"./chunk-SCKP2KTO.js";var V=`/*
 * Nmap results: a summary, then a card per host with its ports. States and risky services
 * are written in words; colors only repeat them.
 */
.nmap-body {
  display: grid;
  gap: var(--_space-4);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.nmap-summary {
  display: grid;
  gap: var(--_space-1);
}

.nmap-summary p {
  margin: 0;
}

.nmap-counts {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-4);
}

.nmap-risky-count {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  color: var(--_danger);
  font-weight: 600;
}

.nmap-risky-count svg,
.nmap-tag svg {
  width: 14px;
  height: 14px;
}

.nmap-muted {
  color: var(--_fg-muted);
}

.nmap-command code {
  font-family: var(--_font-mono);
  overflow-wrap: anywhere;
}

.nmap-host {
  display: grid;
  gap: var(--_space-2);
  min-width: 0;
  padding: var(--_space-3);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.nmap-host.down {
  opacity: 0.75;
}

.nmap-host-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2);
}

.nmap-address {
  margin: 0;
  font-family: var(--_font-mono);
  font-size: var(--_font-size);
  font-weight: 600;
  overflow-wrap: anywhere;
}

.nmap-status {
  padding: 0 var(--_space-2);
  border: 1px solid currentColor;
  border-radius: var(--_radius-full);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.nmap-status.up {
  color: var(--_success);
}

.nmap-status.down {
  color: var(--_fg-muted);
}

.nmap-meta {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.nmap-scroll {
  overflow-x: auto;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.nmap-table {
  width: 100%;
  border-collapse: collapse;
}

.nmap-table th,
.nmap-table td {
  padding: 6px var(--_space-3);
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
}

.nmap-table tbody tr:last-child > * {
  border-bottom: 0;
}

.nmap-table thead th {
  background: var(--_surface-sunken);
  font-weight: 600;
}

.nmap-table tbody th {
  width: 1%;
  font-weight: 500;
  white-space: nowrap;
}

.nmap-table code {
  font-family: var(--_font-mono);
}

.nmap-table tr.risky > * {
  background: color-mix(in srgb, var(--_danger) 6%, transparent);
}

.nmap-state {
  font-weight: 600;
  white-space: nowrap;
}

.nmap-state.st-open {
  color: var(--_success);
}

.nmap-state.st-filtered,
.nmap-state.st-open-filtered {
  color: var(--_warning);
}

.nmap-state.st-closed,
.nmap-state.st-closed-filtered {
  color: var(--_fg-muted);
}

.nmap-service {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-2);
}

.nmap-tag {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 0 6px;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.nmap-tag.risky {
  border-color: var(--_danger);
  color: var(--_danger);
  font-weight: 600;
}

.nmap-version {
  color: var(--_fg-muted);
  overflow-wrap: anywhere;
}

.nmap-table .nmap-script-row td {
  padding-top: 0;
  background: var(--_surface-sunken);
}

.nmap-script {
  margin: var(--_space-1) 0 0;
  font-size: var(--_font-size-small);
}

.nmap-script-id {
  color: var(--_syntax-function);
}

.nmap-script summary {
  cursor: pointer;
}

.nmap-script pre {
  max-height: 240px;
  margin: var(--_space-1) 0 0;
  padding: var(--_space-2);
  overflow: auto;
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
  color: var(--_code-fg);
  font-family: var(--_font-mono);
}

.nmap-host-scripts h4 {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.nmap-edit > .editor-body {
  max-height: min(35vh, 280px);
  border-bottom: 1px solid var(--_border);
}

@media (max-width: 560px) {
  .nmap-table .nmap-version,
  .nmap-table thead th:nth-child(4) {
    display: none;
  }
}
`;var L=Object.freeze({nmapHosts:"{up} of {total} hosts up",nmapOpen:"Open ports: {count}",nmapRiskyCount:"Risky services exposed: {count}",nmapElapsed:"in {seconds} s",nmapCommand:"Command",nmapPort:"Port",nmapState:"State",nmapService:"Service",nmapVersion:"Version",nmapNoPorts:"No port to show.",nmapHostScripts:"Host scripts",nmapScripts:"Scripts ({count})",nmapRisky:"Exposed",nmapRiskyHint:"This service is risky to expose to the Internet.",nmapTls:"TLS",nmapLatency:"Latency {value}",nmapMac:"MAC {mac}",nmapOs:"OS: {os}",nmapShowAll:"Show closed and filtered ports",nmapShowOpen:"Show open ports only",nmapCopyCsv:"CSV",nmapCopyHosts:"Copy hosts with open ports",nmapInvalidEmpty:"No Nmap output.",nmapInvalidFormat:"Not Nmap output: paste XML (-oX), normal (-oN) or grepable (-oG) output.",nmapInvalidXml:"The XML cannot be read: {detail}",nmapStatus_up:"Up",nmapStatus_down:"Down",nmapState_open:"Open",nmapState_closed:"Closed",nmapState_filtered:"Filtered","nmapState_open|filtered":"Open or filtered","nmapState_closed|filtered":"Closed or filtered",nmapState_unfiltered:"Unfiltered"}),P={nmapHosts:"{up} h\xF4tes actifs sur {total}",nmapOpen:"Ports ouverts : {count}",nmapRiskyCount:"Services risqu\xE9s expos\xE9s : {count}",nmapElapsed:"en {seconds} s",nmapCommand:"Commande",nmapPort:"Port",nmapState:"\xC9tat",nmapService:"Service",nmapVersion:"Version",nmapNoPorts:"Aucun port \xE0 afficher.",nmapHostScripts:"Scripts de l\u2019h\xF4te",nmapScripts:"Scripts ({count})",nmapRisky:"Expos\xE9",nmapRiskyHint:"Ce service est risqu\xE9 s\u2019il est expos\xE9 sur Internet.",nmapLatency:"Latence {value}",nmapOs:"Syst\xE8me : {os}",nmapShowAll:"Afficher les ports ferm\xE9s et filtr\xE9s",nmapShowOpen:"Afficher seulement les ports ouverts",nmapCopyHosts:"Copier les h\xF4tes avec des ports ouverts",nmapInvalidEmpty:"Aucune sortie Nmap.",nmapInvalidFormat:"Ce n\u2019est pas une sortie Nmap : collez la sortie XML (-oX), normale (-oN) ou grepable (-oG).",nmapInvalidXml:"Le XML ne peut pas \xEAtre lu : {detail}",nmapStatus_up:"Actif",nmapStatus_down:"Inactif",nmapState_open:"Ouvert",nmapState_closed:"Ferm\xE9",nmapState_filtered:"Filtr\xE9","nmapState_open|filtered":"Ouvert ou filtr\xE9","nmapState_closed|filtered":"Ferm\xE9 ou filtr\xE9",nmapState_unfiltered:"Non filtr\xE9"};var w=5e3,x=5e4,G=Object.freeze({21:"ftp",23:"telnet",69:"tftp",111:"rpcbind",135:"msrpc",139:"netbios",161:"snmp",445:"smb",512:"rexec",513:"rlogin",514:"rsh",873:"rsync",1433:"mssql",1521:"oracle",2049:"nfs",2375:"docker",3306:"mysql",3389:"rdp",5432:"postgresql",5900:"vnc",5984:"couchdb",6379:"redis",9200:"elasticsearch",11211:"memcached",27017:"mongodb"});function b(){return{address:"",addressType:"",mac:"",vendor:"",hostnames:[],status:"up",latency:"",os:"",ports:[],scripts:[]}}function _(u){let t=String(u??"").trim();return t?/^<\?xml|^<!DOCTYPE nmaprun|^<nmaprun/.test(t)?W(t):/^Host: .*\t(?:Status|Ports):/m.test(t)||/^# Nmap .* as: .*-oG/m.test(t)?{ok:!0,scan:U(t)}:/Nmap scan report for /.test(t)?{ok:!0,scan:D(t)}:{ok:!1,error:"format"}:{ok:!1,error:"empty"}}var c=(u,t)=>u.attrs.find(e=>e.name===t)?.value??"",f=(u,t)=>u.children.filter(e=>e.type==="element"&&e.name===t),B=u=>f(u,"script").map(t=>({id:c(t,"id"),output:c(t,"output").trim()}));function W(u){let t=R(u,{maxDepth:64});if(!t.ok)return{ok:!1,error:"xml",detail:t.error.message};let e=I(t.value);if(!e||e.name!=="nmaprun")return{ok:!1,error:"format"};let o=f(e,"runstats").flatMap(a=>f(a,"finished"))[0],l={command:c(e,"args"),started:c(e,"startstr"),elapsed:o?c(o,"elapsed"):"",summary:o?c(o,"summary"):"",hosts:[]},n=0;for(let a of f(e,"host").slice(0,w)){let m=b();m.status=c(f(a,"status")[0]??a,"state")||"up";for(let p of f(a,"address")){let h=c(p,"addrtype");h==="mac"?(m.mac=c(p,"addr"),m.vendor=c(p,"vendor")):m.address||(m.address=c(p,"addr"),m.addressType=h)}m.hostnames=f(a,"hostnames").flatMap(p=>f(p,"hostname")).map(p=>c(p,"name")).filter(Boolean);let i=f(a,"times")[0];i&&c(i,"srtt")&&(m.latency=`${(Number(c(i,"srtt"))/1e6).toFixed(3)}s`);let r=f(a,"os").flatMap(p=>f(p,"osmatch"))[0];r&&(m.os=`${c(r,"name")}${c(r,"accuracy")?` (${c(r,"accuracy")}%)`:""}`);for(let p of f(a,"ports").flatMap(h=>f(h,"port"))){if(n++>=x)break;let h=f(p,"state")[0],d=f(p,"service")[0];m.ports.push({port:Number(c(p,"portid")),protocol:c(p,"protocol"),state:h?c(h,"state"):"",reason:h?c(h,"reason"):"",service:d?c(d,"name"):"",version:d?[c(d,"product"),c(d,"version"),c(d,"extrainfo")&&`(${c(d,"extrainfo")})`].filter(Boolean).join(" "):"",tunnel:d?c(d,"tunnel"):"",scripts:B(p)})}m.scripts=f(a,"hostscript").flatMap(B),l.hosts.push(m)}return{ok:!0,scan:l}}function D(u){let t={command:"",started:"",elapsed:"",summary:"",hosts:[]},e=null,o=null,l=null,n=0,a=0;for(let m of u.split(/\r\n|\r|\n/)){let i=m.replace(/\s+$/,""),r;if(r=/^(?:# )?Nmap [\d.]+\w* scan initiated (.+?) as: (.+)$/.exec(i))t.started=r[1],t.command=r[2];else if(r=/^Starting Nmap .* at (.+)$/.exec(i))t.started=r[1];else if(r=/^(?:# )?Nmap done(?: at .+?)?: (.+?)(?: in ([\d.]+) seconds)?$/.exec(i))t.summary=r[1],t.elapsed=r[2]??"";else if(r=/^Nmap scan report for (.+)$/.exec(i)){if(t.hosts.length>=w)break;e=b(),t.hosts.push(e),o=null,l=null,n=0;let p=/^(.+) \(([^)]+)\)$/.exec(r[1]);p?(e.hostnames.push(p[1]),e.address=p[2]):e.address=r[1],e.addressType=e.address.includes(":")?"ipv6":"ipv4"}else if(e)if(r=/^Host is (up|down)(?: \(([\d.]+s) latency\))?/.exec(i))e.status=r[1],e.latency=r[2]??"";else if(r=/^MAC Address: ([0-9A-F:]{17})(?: \((.+)\))?/i.exec(i))e.mac=r[1],e.vendor=r[2]??"";else if(r=/^(?:OS details|Running|Aggressive OS guesses): (.+)$/.exec(i))e.os||(e.os=r[1]);else if(/^PORT\s+STATE\s+SERVICE/.test(i))n=/VERSION/.test(i)?4:3;else if(n&&(r=/^(\d{1,5})\/(tcp|udp|sctp)\s+(\S+)\s+(\S+)(?:\s+(.*))?$/.exec(i))){if(a++>=x)continue;let p=r[4].replace(/^ssl\//,"");o={port:Number(r[1]),protocol:r[2],state:r[3],reason:"",service:p,version:r[5]??"",tunnel:r[4].startsWith("ssl/")?"ssl":"",scripts:[]},e.ports.push(o),l=null}else(r=/^\|[_ ]?\s?([\w.-]+):\s?(.*)$/.exec(i))&&!/^\|\s{2,}/.test(i)?(l={id:r[1],output:r[2]},(o??e).scripts.push(l),i.startsWith("|_")&&(l=null)):/^\|/.test(i)&&l?(l.output+=`${l.output?`
`:""}${i.replace(/^\|_?\s*/,"")}`,i.startsWith("|_")&&(l=null)):/^Host script results:/.test(i)?o=null:i||(n=0,o=null);else continue}return t}function U(u){let t={command:"",started:"",elapsed:"",summary:"",hosts:[]},e=new Map,o=0;for(let l of u.split(/\r\n|\r|\n/)){let n;if(n=/^# Nmap [\d.]+\w* scan initiated (.+?) as: (.+)$/.exec(l)){t.started=n[1],t.command=n[2];continue}if(n=/^# Nmap done at .+? -- (.+?) scanned in ([\d.]+) seconds/.exec(l)){t.summary=n[1],t.elapsed=n[2];continue}if(n=/^Host: (\S+) \(([^)]*)\)\t(.*)$/.exec(l),!n)continue;let a=e.get(n[1]);if(!a){if(e.size>=w)break;a=b(),a.address=n[1],a.addressType=n[1].includes(":")?"ipv6":"ipv4",n[2]&&a.hostnames.push(n[2]),e.set(n[1],a),t.hosts.push(a)}for(let m of n[3].split("	")){let[i,...r]=m.split(": "),p=r.join(": ");if(i==="Status")a.status=p.toLowerCase();else if(i==="OS")a.os=p;else if(i==="Ports")for(let h of p.split(/,\s*/)){let[d,v,g,,k,,F]=h.split("/");!/^\d+$/.test(d)||o++>=x||a.ports.push({port:Number(d),protocol:g,state:v,reason:"",service:k.replace(/^ssl\|/,""),version:F??"",tunnel:k.startsWith("ssl|")?"ssl":"",scripts:[]})}}}return t}function S(u){return u.state!=="open"?!1:!!G[u.port]||/^(?:telnet|ftp|vnc|ms-wbt-server|microsoft-ds|redis|mongodb|memcache)/.test(u.service)}function K(u){let t=/^[=+\-@\t\r]/.test(u)?`'${u}`:u;return/[",\r\n]/.test(t)||t!==u?`"${t.replace(/"/g,'""')}"`:t}function X(u){return["host,hostname,port,protocol,state,service,version",...u.flatMap(e=>e.ports.map(o=>[e.address,e.hostnames[0]??"",String(o.port),o.protocol,o.state,o.service,o.version].map(K).join(",")))].join(`
`)}T({en:L,fr:P});var j=class extends z{static type="nmap";static componentAttributes=Object.freeze(["all","down","scripts","risky"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,fullscreen:!0}};static styles=[V];static upgradeProperties=["content"];constructor(){super(),this.panelId=N("panel"),this.allState=null,this.editor=null,this.previewTimer=void 0}get scan(){let t=_(this.text??"");return t.ok?t.scan:null}flag(t,e){return C(this.getAttribute(t))??e}get showAll(){return this.allState??this.flag("all",!1)}renderContent(t){let e=this.t,o=_(this.text??""),l=s("div",{class:"body nmap-body",part:"body"}),n=[];if(o.ok){let d=o.scan;n=d.hosts,l.append(this.summaryView(d));let v=this.flag("down",!1)?n:n.filter(g=>g.status!=="down");for(let g of v)l.append(this.hostView(g))}else{let d=`nmapInvalid${o.error[0].toUpperCase()}${o.error.slice(1)}`;l.append(E(e(d,{detail:o.detail??""})))}let a=s("div",{class:"panel",attrs:{id:this.panelId}}),m=[];if(this.editing){let d=this.createEditor();a.classList.add("nmap-edit"),a.append(s("div",{class:"body editor-body",part:"body source"},d.element),l),m=this.historyButtons(d)}else a.append(l);let i=this.feature("copy")&&n.length>0,r=[...m,this.editToggleButton(),o.ok?H({icon:this.showAll?"filter":"list",label:this.showAll?e("nmapShowOpen"):e("nmapShowAll"),key:"all",pressed:this.showAll,onClick:()=>{this.allState=!this.showAll,this.render()}}):null,this.fullscreenButton(),i?this.copyTextButton(()=>X(n),e("nmapCopyCsv"),"copy-csv"):null,i?this.copyButton(()=>n.filter(d=>d.ports.some(v=>v.state==="open")).map(d=>d.address).join(`
`),e("nmapCopyHosts")):null],p=n.filter(d=>d.status!=="down").length,h=o.ok?e("nmapHosts",{up:p,total:n.length}):"Nmap";t.append(...this.chrome({badge:h,actions:r}),a),this.editor?.align()}summaryView(t){let e=this.t,o=t.hosts.flatMap(a=>a.ports).filter(a=>a.state==="open"),l=this.flag("risky",!0)?o.filter(S).length:0,n=t.hosts.filter(a=>a.status!=="down").length;return s("div",{class:"nmap-summary",part:"summary"},s("p",{class:"nmap-counts"},s("strong",{text:e("nmapHosts",{up:n,total:t.hosts.length})}),s("span",{text:e("nmapOpen",{count:o.length})}),l?s("span",{class:"nmap-risky-count"},y("alert"),s("span",{text:e("nmapRiskyCount",{count:l})})):null,t.elapsed?s("span",{class:"nmap-muted",text:e("nmapElapsed",{seconds:t.elapsed})}):null),t.command?s("p",{class:"nmap-command"},s("span",{class:"nmap-muted",text:`${e("nmapCommand")} `}),s("code",{text:t.command})):null)}hostView(t){let e=this.t,o=this.showAll?t.ports:t.ports.filter(m=>m.state==="open"),l=t.hostnames[0]?`${t.hostnames[0]} (${t.address})`:t.address,n=[t.os?e("nmapOs",{os:t.os}):"",t.mac?`${e("nmapMac",{mac:t.mac})}${t.vendor?` \xB7 ${t.vendor}`:""}`:"",t.latency?e("nmapLatency",{value:t.latency}):"",...t.hostnames.slice(1)].filter(Boolean),a=t.status==="down"?"down":"up";return s("section",{class:`nmap-host ${a}`,part:"host",attrs:{"aria-label":l}},s("header",{class:"nmap-host-head"},s("h3",{class:"nmap-address",text:l}),s("span",{class:`nmap-status ${a}`,text:e(`nmapStatus_${a}`)})),n.length?s("p",{class:"nmap-meta",text:n.join(" \xB7 ")}):null,o.length?this.portsTable(o):t.status==="down"?null:s("p",{class:"nmap-muted",text:e("nmapNoPorts")}),t.scripts.length&&this.flag("scripts",!0)?s("div",{class:"nmap-host-scripts"},s("h4",{text:e("nmapHostScripts")}),...t.scripts.map(m=>this.scriptView(m))):null)}portsTable(t){let e=this.t,o=this.flag("risky",!0),l=this.flag("scripts",!0),n=t.flatMap(a=>{let m=o&&S(a),i=`nmapState_${a.state}`,r=e(i)===i?a.state:e(i),p=s("tr",{class:m?"risky":""},s("th",{attrs:{scope:"row"}},s("code",{text:`${a.port}/${a.protocol}`})),s("td",{},s("span",{class:`nmap-state st-${a.state.replace(/\W/g,"-")}`,part:"state",text:r})),s("td",{class:"nmap-service"},s("span",{text:a.service}),a.tunnel==="ssl"?s("span",{class:"nmap-tag",text:e("nmapTls")}):null,m?s("span",{class:"nmap-tag risky",part:"risky",attrs:{title:e("nmapRiskyHint")}},y("alert"),s("span",{text:e("nmapRisky")})):null),s("td",{class:"nmap-version",text:a.version}));return!l||!a.scripts.length?[p]:[p,s("tr",{class:"nmap-script-row"},s("td",{attrs:{colspan:4}},...a.scripts.map(h=>this.scriptView(h))))]});return s("div",{class:"nmap-scroll"},s("table",{class:"nmap-table",part:"ports"},s("thead",{},s("tr",{},s("th",{attrs:{scope:"col"},text:e("nmapPort")}),s("th",{attrs:{scope:"col"},text:e("nmapState")}),s("th",{attrs:{scope:"col"},text:e("nmapService")}),s("th",{attrs:{scope:"col"},text:e("nmapVersion")}))),s("tbody",{},...n)))}scriptView(t){return t.output.includes(`
`)?s("details",{class:"nmap-script",part:"script"},s("summary",{},s("code",{class:"nmap-script-id",text:t.id})),s("pre",{text:t.output})):s("p",{class:"nmap-script",part:"script"},s("code",{class:"nmap-script-id",text:t.id}),s("span",{text:` ${t.output}`}))}createEditor(){return this.editor?.destroy(),this.editor=new M({text:this.text??"",language:"plaintext",lineNumbers:!0,wrap:!1,highlightLimit:$().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:t=>this.edited(t),onChange:t=>O(this,A.CHANGE,{value:t}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),300)}};export{j as a};
