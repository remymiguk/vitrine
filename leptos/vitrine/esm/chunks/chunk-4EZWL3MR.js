/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as $}from"./chunk-C5GGPQHV.js";import{a as I}from"./chunk-PIFKHUVR.js";import{a as D}from"./chunk-5Y6ZLKSA.js";import{a as C}from"./chunk-VUXWEGPX.js";import{B as d,C as o,E as h,F as A,G as b,H as _,J as z,O as v,_ as L,b as k,o as t,q as y}from"./chunk-JAZI474S.js";import{m as O,q as F}from"./chunk-SCKP2KTO.js";var G=`/*
 * Repository: a card with its name, counts, languages and details.
 */
.rp-card {
  display: grid;
  gap: var(--_space-3);
}

.rp-card.archived {
  opacity: 0.85;
}

.rp-head {
  display: flex;
  align-items: center;
  gap: var(--_space-3);
}

.rp-avatar {
  flex: none;
  width: 40px;
  height: 40px;
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  object-fit: cover;
}

.rp-avatar.initials {
  display: grid;
  place-items: center;
  color: var(--_fg-muted);
  font-weight: 700;
}

.rp-title {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-2);
  min-width: 0;
}

.rp-name {
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  overflow-wrap: anywhere;
}

.rp-name a {
  color: var(--_accent-fg);
  text-decoration: none;
}

.rp-name a:hover strong {
  text-decoration: underline;
}

.rp-owner {
  color: var(--_fg-muted);
}

.rp-badges {
  display: inline-flex;
  gap: var(--_space-1);
}

.rp-badge {
  padding: 0 var(--_space-2);
  border: 1px solid var(--_warning);
  border-radius: var(--_radius-full);
  font-size: var(--_font-size-small);
  font-weight: 600;
  line-height: 1.6;
}

.rp-star {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: var(--_space-1);
  padding: var(--_space-1) var(--_space-3);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  color: var(--_fg);
  font-size: var(--_font-size-ui);
  font-weight: 600;
  text-decoration: none;
}

.rp-star:hover {
  border-color: var(--_accent);
}

.rp-star .icon {
  width: 16px;
  height: 16px;
  color: var(--_warning);
}

.rp-star-count {
  padding-inline-start: var(--_space-2);
  border-inline-start: 1px solid var(--_border-strong);
  font-variant-numeric: tabular-nums;
}

.rp-description {
  margin: 0;
  font-size: 15px;
}

.rp-topics {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

.rp-topic {
  display: inline-block;
  padding: 0 var(--_space-2);
  border-radius: var(--_radius-full);
  background: var(--_accent-soft);
  color: var(--_accent-fg);
  font-size: var(--_font-size-small);
  font-weight: 600;
  line-height: 1.8;
  text-decoration: none;
}

a.rp-topic:hover {
  text-decoration: underline;
}

.rp-stats {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2) var(--_space-5);
  margin: 0;
  padding: 0;
  list-style: none;
}

.rp-stat > a,
.rp-stat > span {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  color: var(--_fg-muted);
  font-size: var(--_font-size-ui);
  text-decoration: none;
}

.rp-stat > a:hover {
  color: var(--_accent-fg);
}

.rp-stat .icon {
  width: 16px;
  height: 16px;
}

.rp-stat strong {
  color: var(--_fg);
  font-variant-numeric: tabular-nums;
}

.rp-languages {
  display: grid;
  gap: var(--_space-2);
}

.rp-bar {
  display: flex;
  overflow: hidden;
  height: 8px;
  border-radius: var(--_radius-full);
  background: var(--_border);
}

.rp-bar-part + .rp-bar-part {
  border-inline-start: 2px solid var(--_surface);
}

.rp-legend {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1) var(--_space-4);
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: var(--_font-size-small);
}

.rp-legend li {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
}

.rp-dot {
  width: 10px;
  height: 10px;
  border-radius: var(--_radius-full);
}

.rp-language {
  font-weight: 600;
}

.rp-share {
  color: var(--_fg-muted);
}

.rp-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2) var(--_space-5);
  margin: 0;
  font-size: var(--_font-size-ui);
}

.rp-meta-row {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-2);
}

.rp-meta dt {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  color: var(--_fg-muted);
}

.rp-meta dt .icon {
  width: 14px;
  height: 14px;
}

.rp-meta dd {
  margin: 0;
}

.rp-meta a {
  color: var(--_accent-fg);
}

.rp-clone {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  min-width: 0;
  padding: var(--_space-1) var(--_space-1) var(--_space-1) var(--_space-3);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
}

.rp-clone-label {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  text-transform: uppercase;
}

.rp-command {
  flex: 1;
  min-width: 0;
  overflow-x: auto;
  color: var(--_code-fg);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-ui);
  white-space: nowrap;
}

.rp-stat a:focus-visible,
.rp-star:focus-visible,
.rp-topic:focus-visible,
.rp-name a:focus-visible,
.rp-meta a:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}
`;var m=class extends Error{},H={JavaScript:"#f1e05a",TypeScript:"#3178c6",Python:"#3572A5",Java:"#b07219",Go:"#00ADD8",Rust:"#dea584",C:"#555555","C++":"#f34b7d","C#":"#178600",PHP:"#4F5D95",Ruby:"#701516",Swift:"#F05138",Kotlin:"#A97BFF",Dart:"#00B4AB",Scala:"#c22d40",Shell:"#89e051",PowerShell:"#012456",HTML:"#e34c26",CSS:"#663399",SCSS:"#c6538c",Vue:"#41b883",Svelte:"#ff3e00",Astro:"#ff5a03",Lua:"#000080",Perl:"#0298c3",R:"#198CE7","Jupyter Notebook":"#DA5B0B",Haskell:"#5e5086",Elixir:"#6e4a7e",Erlang:"#B83998",Clojure:"#db5855","Objective-C":"#438eff",Zig:"#ec915c",Nix:"#7e7eff",Dockerfile:"#384d54",Makefile:"#427819",CMake:"#DA3434",HCL:"#844FBA",MDX:"#fcb32c",Julia:"#a270ba",OCaml:"#ef7a08","F#":"#b845fc",Solidity:"#AA6746",Elm:"#60B5CC",Groovy:"#4298b8",Assembly:"#6E4C13",WebAssembly:"#04133b",TeX:"#3D6117",Markdown:"#083fa1"},T=6;function x(s){let e=_(s);return e!==null&&e>=0?Math.round(e):null}function P(s){let e=[];d(s)?e=Object.entries(s).map(([r,i])=>[o(r,60),_(i)??0]):Array.isArray(s)&&(e=s.filter(d).map(r=>[o(r.name,60),_(r.bytes??r.share??r.percent??r.percentage)??0])),e=e.filter(([r,i])=>r&&i>0).sort((r,i)=>i[1]-r[1]);let a=e.reduce((r,[,i])=>r+i,0);if(!a)return[];let n=e.slice(0,T).map(([r,i])=>({name:r,share:i/a,color:H[r]??"#8b949e"})),l=e.slice(T).reduce((r,[,i])=>r+i,0);return l&&n.push({name:"Other",share:l/a,color:"#8b949e"}),n}function M(s){if(!d(s))return null;let e=o(s.tag_name??s.tag??s.version,100);return e?{tag:e,name:o(s.name,200),date:b(s.published_at??s.released_at??s.date),url:h(s.html_url??s.url??s._links?.self)}:null}function B(s){if(!d(s))throw new m("shape");let e=d(s.repo)?s.repo:d(s.repository)?s.repository:s,a="path_with_namespace"in e||"star_count"in e,n=!a&&("full_name"in e||"stargazers_count"in e),l=o(e.full_name??e.path_with_namespace??e.fullName,300),[r,...i]=l.split("/"),c=o(e.owner?.login??e.namespace?.full_path??e.owner,200)||(i.length?r:""),u=o(e.name??e.path,200)||i.at(-1)||l;if(!u)throw new m("shape");let g=d(e.license)?{id:o(e.license.spdx_id??e.license.id,60).replace(/^NOASSERTION$/,""),name:o(e.license.name,200),url:h(e.license.html_url??e.license.url)}:typeof e.license=="string"&&e.license.trim()?{id:o(e.license,60),name:o(e.license,60),url:null}:null,f=(Array.isArray(e.topics)?e.topics:Array.isArray(e.tag_list)?e.tag_list:[]).map(R=>o(R,50)).filter(Boolean).slice(0,20),p=h(e.html_url??e.web_url??e.url),w=h(e.clone_url??e.http_url_to_repo??e.clone??(p&&(n||a)?`${p}.git`:null));return{host:n?"github":a?"gitlab":p&&/github\.com/.test(p)?"github":p&&/gitlab/.test(p)?"gitlab":"other",owner:c,name:u,url:p,description:o(e.description,1e3),homepage:h(e.homepage??e.website),avatar:A(e.owner?.avatar_url??e.avatar_url??e.namespace?.avatar_url??e.avatar),stars:x(e.stargazers_count??e.star_count??e.stars),forks:x(e.forks_count??e.forks),issues:x(e.open_issues_count??e.open_issues??e.issues),watchers:x(e.subscribers_count??e.watchers),languages:P(s.languages??e.languages??(typeof e.language=="string"?{[e.language]:1}:null)),license:g&&(g.id||g.name)?g:null,topics:f,created:b(e.created_at??e.created),pushed:b(e.pushed_at??e.last_activity_at??e.updated_at??e.updated),archived:e.archived===!0,fork:e.fork===!0||d(e.forked_from_project),template:e.is_template===!0,branch:o(e.default_branch,100),clone:w&&/^https:\/\//.test(w)?w:null,release:M(s.release??s.latest_release??e.release)}}function S(s,e){try{return new Intl.NumberFormat(e,{notation:"compact",maximumFractionDigits:1}).format(s)}catch{return String(s)}}var N=Object.freeze({rpStars:"Stars",rpForks:"Forks",rpIssues:"Open issues",rpWatchers:"Watchers",rpStat:"{count} {name}",rpLanguages:"Languages",rpLicense:"License",rpRelease:"Latest release",rpUpdated:"Updated",rpCreated:"Created",rpHomepage:"Website",rpBranch:"Default branch",rpArchived:"Archived",rpFork:"Fork",rpTemplate:"Template",rpStar:"Star",rpStarOn:"Star {name} on {host}",rpClone:"Clone",rpCopyClone:"Copy the clone command",rpTopics:"Topics",rpOther:"Other",rpShape:'Give a repository of the GitHub or GitLab API, or { "name", "url", "stars", \u2026 }.'}),V=Object.freeze({rpStars:"\xC9toiles",rpForks:"Forks",rpIssues:"Tickets ouverts",rpWatchers:"Abonn\xE9s",rpStat:"{count} {name}",rpLanguages:"Langages",rpLicense:"Licence",rpRelease:"Derni\xE8re version",rpUpdated:"Mis \xE0 jour",rpCreated:"Cr\xE9\xE9",rpHomepage:"Site web",rpBranch:"Branche par d\xE9faut",rpArchived:"Archiv\xE9",rpFork:"Fork",rpTemplate:"Mod\xE8le",rpStar:"\xC9toile",rpStarOn:"Mettre une \xE9toile \xE0 {name} sur {host}",rpClone:"Cloner",rpCopyClone:"Copier la commande de clonage",rpTopics:"Sujets",rpOther:"Autres",rpShape:'Donnez un d\xE9p\xF4t de l\u2019API GitHub ou GitLab, ou { "name", "url", "stars", \u2026 }.'});O({en:N,fr:V});var j=class extends D{static type="repo";static componentAttributes=Object.freeze(["stats","languages","clone","topics"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,download:!0,fullscreen:!0,clone:!0}};static styles=[k,C,I,G];constructor(){super(),this.panelId=y("panel"),this.nameId=y("name")}read(){try{return{repo:B(JSON.parse(this.text??"")),error:null}}catch(e){return e instanceof m?{repo:null,error:this.t("rpShape")}:{repo:null,error:this.t("jsonInvalid",{message:e instanceof Error?e.message:""})}}}get repo(){return this.read().repo}renderContent(e){let{repo:a,error:n}=this.read(),l=t("div",{class:"body data-body rp-body",part:"body"});n||!a?l.append(L(n??this.t("rpShape"))):l.append(this.cardView(a)),this.frameWith(e,l,this.panelId,{file:"repo.json",badge:a?a.host==="gitlab"?"GitLab":a.host==="github"?"GitHub":"Git":"JSON"})}cardView(e){let a=this.t,n=e.host==="gitlab"?"GitLab":"GitHub",l=e.avatar?t("img",{class:"rp-avatar",attrs:{src:U(e.avatar),alt:"",width:"40",height:"40",loading:"lazy",decoding:"async",referrerpolicy:"no-referrer"}}):t("span",{class:"rp-avatar initials",text:z(e.owner||e.name),attrs:{"aria-hidden":"true"}}),r=t("h3",{class:"rp-name",part:"name",attrs:{id:this.nameId}},e.url?t("a",{attrs:{href:e.url,rel:"noopener",target:"_blank"}},e.owner?t("span",{class:"rp-owner",text:`${e.owner} / `}):null,t("strong",{text:e.name})):t("span",{},e.owner?t("span",{class:"rp-owner",text:`${e.owner} / `}):null,t("strong",{text:e.name}))),i=[e.archived?a("rpArchived"):"",e.fork?a("rpFork"):"",e.template?a("rpTemplate"):""].filter(Boolean),c=e.url&&e.host!=="other"?t("a",{class:"rp-star",attrs:{href:e.url,rel:"noopener",target:"_blank",title:a("rpStarOn",{name:e.name,host:n})}},v("star"),t("span",{text:a("rpStar")}),e.stars!==null?t("span",{class:"rp-star-count",text:S(e.stars,this.locale)}):null,t("span",{class:"sr-only",text:` (${a("rpStarOn",{name:e.name,host:n})})`})):null;return t("article",{class:`rp-card${e.archived?" archived":""}`,part:"card",attrs:{"aria-labelledby":this.nameId}},t("header",{class:"rp-head"},l,t("div",{class:"rp-title"},r,i.length?t("span",{class:"rp-badges"},...i.map(u=>t("span",{class:"rp-badge",text:u}))):null),c),e.description?t("p",{class:"rp-description",text:e.description}):null,this.flag("topics")&&e.topics.length?this.topicsView(e):null,this.flag("stats")?this.statsView(e):null,this.flag("languages")&&e.languages.length?this.languagesView(e):null,this.metaView(e),this.feature("clone")&&e.clone?this.cloneView(e.clone):null)}topicsView(e){return t("ul",{class:"rp-topics",attrs:{"aria-label":this.t("rpTopics")}},...e.topics.map(a=>{let n=e.host==="github"?`https://github.com/topics/${encodeURIComponent(a)}`:null;return t("li",{},n?t("a",{class:"rp-topic",text:a,attrs:{href:n,rel:"noopener",target:"_blank"}}):t("span",{class:"rp-topic",text:a}))}))}statsView(e){let a=this.t,n=e.url&&e.host==="github"?e.url:null,r=[["star","rpStars",e.stars,n?`${n}/stargazers`:null],["fork","rpForks",e.forks,n?`${n}/forks`:null],["issue","rpIssues",e.issues,n?`${n}/issues`:e.url&&e.host==="gitlab"?`${e.url}/-/issues`:null],["eye","rpWatchers",e.watchers,n?`${n}/watchers`:null]].filter(([,,i])=>i!==null);return r.length?t("ul",{class:"rp-stats",part:"stats"},...r.map(([i,c,u,g])=>{let f=F(u,this.locale),p=[v(i),t("strong",{text:S(u,this.locale),attrs:{"aria-hidden":"true"}}),t("span",{class:"rp-stat-name",text:a(c),attrs:{"aria-hidden":"true"}}),t("span",{class:"sr-only",text:a("rpStat",{count:f,name:a(c)})})];return t("li",{class:"rp-stat",attrs:{title:`${f} ${a(c)}`}},g?t("a",{attrs:{href:g,rel:"noopener",target:"_blank"}},...p):t("span",{},...p))})):null}languagesView(e){let a=this.t,n=r=>new Intl.NumberFormat(this.locale,{style:"percent",maximumFractionDigits:r<.1?1:0}).format(r),l=t("div",{class:"rp-bar",attrs:{"aria-hidden":"true"}});for(let r of e.languages){let i=t("span",{class:"rp-bar-part"});i.style.setProperty("width",`${(r.share*100).toFixed(2)}%`),i.style.setProperty("background-color",r.color),l.append(i)}return t("div",{class:"rp-languages",part:"languages"},t("h4",{class:"sr-only",text:a("rpLanguages")}),l,t("ul",{class:"rp-legend"},...e.languages.map(r=>{let i=t("span",{class:"rp-dot",attrs:{"aria-hidden":"true"}});return i.style.setProperty("background-color",r.color),t("li",{},i,t("span",{class:"rp-language",text:r.name==="Other"?a("rpOther"):r.name}),t("span",{class:"rp-share",text:n(r.share)}))})))}metaView(e){let a=this.t,n=[],l=r=>t("time",{text:this.relativeTime(r),attrs:{datetime:new Date(r).toISOString(),title:this.formatDate(r,{dateStyle:"medium",timeZone:"UTC"})}});if(e.license){let r=e.license.id||e.license.name;n.push(["scale","rpLicense",e.license.url?t("a",{text:r,attrs:{href:e.license.url,rel:"noopener",target:"_blank",title:e.license.name}}):t("span",{text:r,attrs:{title:e.license.name}})])}if(e.release){let r=e.release,i=r.url?t("a",{text:r.tag,attrs:{href:r.url,rel:"noopener",target:"_blank"}}):t("span",{text:r.tag});n.push(["tag","rpRelease",t("span",{},i,r.date!==null?" \xB7 ":"",r.date!==null?l(r.date):"")])}return e.pushed!==null&&n.push(["history","rpUpdated",l(e.pushed)]),e.homepage&&n.push(["link","rpHomepage",t("a",{text:e.homepage.replace(/^https?:\/\//,"").replace(/\/$/,""),attrs:{href:e.homepage,rel:"noopener",target:"_blank"}})]),n.length?t("dl",{class:"rp-meta",part:"meta"},...n.map(([r,i,c])=>t("div",{class:"rp-meta-row"},t("dt",{},v(r),t("span",{text:a(i)})),t("dd",{},c)))):null}cloneView(e){let a=this.t,n=`git clone ${$(e)}`;return t("div",{class:"rp-clone",part:"clone"},t("span",{class:"rp-clone-label",text:a("rpClone")}),t("code",{class:"rp-command",text:n}),this.copyButton(()=>n,a("rpCopyClone"),"clone"))}};function U(s){try{let e=new URL(s);return e.hostname==="avatars.githubusercontent.com"&&e.searchParams.set("s","80"),e.href}catch{return s}}export{j as a};
