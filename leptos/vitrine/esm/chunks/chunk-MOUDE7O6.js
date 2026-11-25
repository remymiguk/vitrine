/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as L}from"./chunk-PIFKHUVR.js";import{a as q}from"./chunk-5Y6ZLKSA.js";import{a as E}from"./chunk-VUXWEGPX.js";import{A as R,B as m,C as f,D as S,E as j,F,H as v,J as I,U as B,_ as D,b as A,c as O,d as M,e as T,o as c,q as w}from"./chunk-JAZI474S.js";import{k as $,l as P,m as N,q as g}from"./chunk-SCKP2KTO.js";var V=`/*
 * Contributors: people and sponsors as avatars, in groups.
 */
.ct-body {
  display: grid;
  gap: var(--_space-4);
}

.ct-groups {
  display: grid;
  gap: var(--_space-5);
}

.ct-group {
  --_avatar: 56px;
  display: grid;
  gap: var(--_space-3);
  min-width: 0;
}

.ct-small {
  --_avatar: 40px;
}

.ct-large {
  --_avatar: 80px;
}

.ct-group-name {
  margin: 0;
  color: var(--_fg);
  font: 600 var(--_font-size-ui) / 1.4 var(--_font-ui);
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.ct-list {
  display: grid;
  gap: var(--_space-3);
  margin: 0;
  padding: 0;
  list-style: none;
}

.ct-list.grid {
  grid-template-columns: repeat(auto-fill, minmax(calc(var(--_avatar) + 64px), 1fr));
}

.ct-list.avatars {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2);
}

.ct-person {
  display: grid;
  justify-items: center;
  gap: var(--_space-1);
  min-width: 0;
  height: 100%;
  padding: var(--_space-2);
  border-radius: var(--_radius-sm);
  color: var(--_fg);
  text-align: center;
  text-decoration: none;
}

a.ct-person:hover {
  background: var(--_accent-soft);
}

a.ct-person:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 0;
}

.ct-list.avatars .ct-person {
  padding: 2px;
  border-radius: var(--_radius-full);
}

.ct-list.list .ct-person {
  grid-template-columns: auto 1fr;
  justify-items: start;
  column-gap: var(--_space-3);
  text-align: start;
}

.ct-list.list .ct-avatar {
  grid-row: span 3;
}

.ct-avatar {
  display: inline-grid;
  place-items: center;
  width: var(--_avatar);
  height: var(--_avatar);
  overflow: hidden;
  border-radius: var(--_radius-full);
  background: var(--_accent-soft);
  color: var(--_fg);
  font: 600 calc(var(--_avatar) * 0.36) / 1 var(--_font-ui);
  object-fit: cover;
}

.ct-name {
  max-width: 100%;
  overflow: hidden;
  font-size: var(--_font-size-ui);
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ct-details {
  display: grid;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  line-height: 1.4;
}

.ct-login {
  overflow-wrap: anywhere;
}

.ct-types {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2px;
  font-size: 14px;
  line-height: 1.2;
}

.ct-filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2);
}

.ct-filter {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  padding: var(--_space-1) var(--_space-3);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  background: transparent;
  color: var(--_fg);
  font: inherit;
  cursor: pointer;
}

.ct-filter:hover {
  background: var(--_accent-soft);
}

.ct-filter[aria-pressed='true'] {
  border-color: var(--_accent);
  background: var(--_accent-soft);
  font-weight: 600;
}

.ct-filter:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.ct-count {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.ct-more {
  justify-self: start;
}
`;var y=class extends Error{},h=Object.freeze({code:"\u{1F4BB}",doc:"\u{1F4D6}",bug:"\u{1F41B}",ideas:"\u{1F914}",review:"\u{1F440}",test:"\u26A0\uFE0F",design:"\u{1F3A8}",translation:"\u{1F30D}",infra:"\u{1F687}",maintenance:"\u{1F6A7}",a11y:"\u267F\uFE0F",security:"\u{1F6E1}\uFE0F",question:"\u{1F4AC}",example:"\u{1F4A1}",tutorial:"\u2705",content:"\u{1F58B}",blog:"\u{1F4DD}",talk:"\u{1F4E2}",video:"\u{1F4F9}",audio:"\u{1F50A}",data:"\u{1F523}",tool:"\u{1F527}",plugin:"\u{1F50C}",platform:"\u{1F4E6}",mentoring:"\u{1F9D1}\u200D\u{1F3EB}",projectManagement:"\u{1F4C6}",eventOrganizing:"\u{1F4CB}",promotion:"\u{1F4E3}",research:"\u{1F52C}",userTesting:"\u{1F4D3}",business:"\u{1F4BC}",financial:"\u{1F4B5}",fundingFinding:"\u{1F50D}"}),Z=new Set(["follower","host"]),Q=["small","medium","large"],tt=["contributors","sponsors","backers","people","members","items","nodes"];function et(i){if(!Array.isArray(i))return[];let e=i.map(t=>m(t)?f(t.type,40):f(t,40));return[...new Set(e.filter(t=>Object.hasOwn(h,t)))]}function rt(i,e={}){let t=m(i.sponsorEntity)?{...i.sponsorEntity,tier:i.tier??i.sponsorEntity.tier}:i,r=S(t,["login","github","username","handle","slug"],100),o=S(t,["name","displayName","full_name"],200)||r;if(!o)return null;let u=f(t.role,40).toLowerCase()||null;if(u&&Z.has(u))return null;let n=m(t.tier)?t.tier:null,d=v(t.totalAmountDonated??t.amount??t.monthly??n?.monthlyPriceInDollars),s=(n?f(n.name,100):f(t.tier,100))||f(t.group,100)||e.group||null,l=t.contributions;return{name:o,login:r,avatar:F(t.avatar_url??t.avatarUrl??t.avatar??t.image??t.picture),url:j(t.profile??t.html_url??t.website??t.url??t.link),contributions:v(l)??v(t.count??t.commits),types:et(l??t.types),group:s,role:u,amount:d,sponsor:d!==null||!!n||u==="backer"||i!==t||t.sponsor===!0,bot:t.type==="Bot"||/\[bot\]$/i.test(r)||/\[bot\]$/i.test(o)}}function k(i,e=0){if(Array.isArray(i))return i;if(!m(i)||e>4)return null;for(let t of tt)if(Array.isArray(i[t]))return i[t];for(let t of["data","user","organization","viewer","sponsorshipsAsMaintainer","sponsors"]){let r=k(i[t],e+1);if(r)return r}return null}function U(i){let e=[],t=new Map,r=(s,l)=>{let p=`${s}\0${s?"":l??""}`,a=t.get(p);return a||(a={name:s,role:s?null:l,size:null,people:[]},t.set(p,a),e.push(a)),a},o=new Set,u=0,n=(s,l)=>{for(let p of s){if(!m(p)||u>=R)continue;let a=rt(p,{group:l});if(!a)continue;let b=(a.login||a.name).toLowerCase();o.has(b)||(o.add(b),u+=1,r(a.group??"",a.group?null:a.role).people.push(a))}};if(m(i)&&Array.isArray(i.groups))for(let s of i.groups.filter(m)){let l=f(s.name??s.title,100),p=k(s)??[];n(p,l||null);let a=t.get(`${l}\0`),b=f(s.size,10);a&&Q.includes(b)&&(a.size=b)}else{let s=k(i);if(!s)throw new y("shape");n(s,null)}let d=s=>Math.max(...s.people.map(l=>l.amount??0));return e.some(s=>s.people.some(l=>l.amount!==null))&&e.sort((s,l)=>d(l)-d(s)),e.filter(s=>s.people.length)}function G(i,e){try{let t=new URL(i);return t.hostname!=="avatars.githubusercontent.com"||t.searchParams.has("s")?i:(t.searchParams.set("s",String(e)),t.href)}catch{return i}}function Y(i){let e=t=>t.replace(/[\\`*_[\]()<>#|!]/g,"\\$&");return i.map(t=>{let r=e(t.name),o=t.login&&t.login!==t.name?` (@${e(t.login)})`:"";return t.url?`- [${r}](<${t.url.replace(/[<>]/g,encodeURIComponent)}>)${o}`:`- ${r}${o}`}).join(`
`)}var J=Object.freeze({contributorsCount:"{count} people",contributorsOne:"1 person",contributorsCommits:"{count} contributions",contributorsFilter:"Contributions",contributorsAll:"All",contributorsMore:"Show {count} more",contributorsCopy:"Copy as a Markdown list",contributorsEmpty:"No one to show yet.",contributorsNoMatch:"No one made this kind of contribution.",contributorsShape:'Expected a list of people, or JSON with "contributors", "sponsors" or "groups".',contributorsOthers:"Contributors",contributorsRole_backer:"Backers",contributorsRole_admin:"Team",contributorsRole_member:"Team",contributorsRole_contributor:"Contributors",contributorsRole_fundraiser:"Fundraisers",contributorsType_code:"Code",contributorsType_doc:"Documentation",contributorsType_bug:"Bug reports",contributorsType_ideas:"Ideas and planning",contributorsType_review:"Reviewed pull requests",contributorsType_test:"Tests",contributorsType_design:"Design",contributorsType_translation:"Translation",contributorsType_infra:"Infrastructure",contributorsType_maintenance:"Maintenance",contributorsType_a11y:"Accessibility",contributorsType_security:"Security",contributorsType_question:"Answering questions",contributorsType_example:"Examples",contributorsType_tutorial:"Tutorials",contributorsType_content:"Content",contributorsType_blog:"Blog posts",contributorsType_talk:"Talks",contributorsType_video:"Videos",contributorsType_audio:"Audio",contributorsType_data:"Data",contributorsType_tool:"Tools",contributorsType_plugin:"Plugins",contributorsType_platform:"Packaging",contributorsType_mentoring:"Mentoring",contributorsType_projectManagement:"Project management",contributorsType_eventOrganizing:"Event organizing",contributorsType_promotion:"Promotion",contributorsType_research:"Research",contributorsType_userTesting:"User testing",contributorsType_business:"Business development",contributorsType_financial:"Financial support",contributorsType_fundingFinding:"Funding finding"}),H={contributorsCount:"{count} personnes",contributorsOne:"1 personne",contributorsCommits:"{count} contributions",contributorsFilter:"Contributions",contributorsAll:"Toutes",contributorsMore:"Afficher {count} de plus",contributorsCopy:"Copier en liste Markdown",contributorsEmpty:"Personne \xE0 afficher pour le moment.",contributorsNoMatch:"Personne n\u2019a fait ce type de contribution.",contributorsShape:'Une liste de personnes, ou du JSON avec "contributors", "sponsors" ou "groups", est attendu.',contributorsOthers:"Contributeurs",contributorsRole_backer:"Soutiens",contributorsRole_admin:"\xC9quipe",contributorsRole_member:"\xC9quipe",contributorsRole_contributor:"Contributeurs",contributorsRole_fundraiser:"Collecteurs de fonds",contributorsType_code:"Code",contributorsType_doc:"Documentation",contributorsType_bug:"Signalements de bugs",contributorsType_ideas:"Id\xE9es et planification",contributorsType_review:"Relecture des pull requests",contributorsType_test:"Tests",contributorsType_design:"Design",contributorsType_translation:"Traduction",contributorsType_infra:"Infrastructure",contributorsType_maintenance:"Maintenance",contributorsType_a11y:"Accessibilit\xE9",contributorsType_security:"S\xE9curit\xE9",contributorsType_question:"R\xE9ponses aux questions",contributorsType_example:"Exemples",contributorsType_tutorial:"Tutoriels",contributorsType_content:"Contenu",contributorsType_blog:"Articles de blog",contributorsType_talk:"Conf\xE9rences",contributorsType_video:"Vid\xE9os",contributorsType_audio:"Audio",contributorsType_data:"Donn\xE9es",contributorsType_tool:"Outils",contributorsType_plugin:"Extensions",contributorsType_platform:"Paquets",contributorsType_mentoring:"Mentorat",contributorsType_projectManagement:"Gestion de projet",contributorsType_eventOrganizing:"Organisation d\u2019\xE9v\xE9nements",contributorsType_promotion:"Promotion",contributorsType_research:"Recherche",contributorsType_userTesting:"Tests utilisateurs",contributorsType_business:"D\xE9veloppement commercial",contributorsType_financial:"Soutien financier",contributorsType_fundingFinding:"Recherche de financement"};N({en:J,fr:H});var ot=["grid","avatars","list"],nt=["none","contributions","name","amount"],st=["backer","admin","member","contributor","fundraiser"],it={small:40,medium:56,large:80},X=class extends q{static type="contributors";static componentAttributes=Object.freeze(["layout","sort","max","bots","size","counts","filters"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,search:!0,download:!0,fullscreen:!0,filters:!0}};static styles=[A,E,L,V];constructor(){super(),this.panelId=w("panel"),this.typeFilter=null,this.expanded=!1}contentChanged(){this.typeFilter=null,this.expanded=!1}read(){try{let e=U(JSON.parse(this.text??"")),t=O(this.getAttribute("bots"))===!0,r=T(this.getAttribute("sort"),nt,"none");for(let o of e)t||(o.people=o.people.filter(u=>!u.bot)),r!=="none"&&o.people.sort(at(r,this.locale));return{groups:e.filter(o=>o.people.length),error:null}}catch(e){return e instanceof y?{groups:[],error:this.t("contributorsShape")}:{groups:[],error:this.t("jsonInvalid",{message:e instanceof Error?e.message:""})}}}get groups(){return this.read().groups}renderContent(e){let t=this.t,{groups:r,error:o}=this.read(),u=c("div",{class:"body data-body ct-body",part:"body"}),n=r.flatMap(a=>a.people);o?u.append(D(o)):n.length?this.renderGroups(u,r,n):u.append(c("p",{class:"data-none",text:t("contributorsEmpty")}));let{panel:d,history:s}=this.previewPanel(u,this.panelId),l=u.querySelector(".ct-groups"),p=n.length===1?t("contributorsOne"):t("contributorsCount",{count:g(n.length,this.locale)});e.append(...this.chrome({badge:n.length?p:"",actions:[...s,this.editToggleButton(),l?this.searchButton(new B(l)):null,this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.text??"",this.downloadName("contributors.json"),"application/json"):null,this.feature("copy")&&n.length?this.copyButton(()=>Y(this.shown(n)),t("contributorsCopy")):null]}),d),this.editor?.align()}shown(e){let t=this.typeFilter;return t?e.filter(r=>r.types.includes(t)):e}renderGroups(e,t,r){let o=this.t;if(this.feature("filters")){let p=this.filtersView(r);p&&e.append(p)}let u=M(this.getAttribute("max"),{min:1,max:1e4,fallback:0}),n=u&&!this.expanded?u:1/0,d=0,s=c("div",{class:"ct-groups"}),l=t.filter(p=>p.people.some(a=>a.amount!==null)).length>1;for(let[p,a]of t.entries()){let b=this.shown(a.people);if(!b.length)continue;let _=b.slice(0,Math.max(0,n));if(d+=b.length-_.length,n-=_.length,!_.length)continue;let C=this.sizeFor(a,l?p:-1),x=a.name||(a.role?st.includes(a.role)?o(`contributorsRole_${a.role}`):a.role:t.length>1?o("contributorsOthers"):""),z=w("group");s.append(c("section",{class:`ct-group ct-${C}`,part:"group",attrs:{"aria-labelledby":x?z:null}},x?c("h3",{class:"ct-group-name",text:x,attrs:{id:z}}):null,c("ul",{class:`ct-list ${this.layout}`},..._.map(K=>c("li",{},this.personView(K,C))))))}s.children.length||s.append(c("p",{class:"data-none",text:o("contributorsNoMatch")})),e.append(s),d&&e.append(c("button",{class:"text-btn ct-more",text:o("contributorsMore",{count:g(d,this.locale)}),attrs:{type:"button","data-focus-key":"more"},on:{click:()=>{this.expanded=!0,this.render()}}}))}get layout(){return T(this.getAttribute("layout"),ot,"grid")}sizeFor(e,t){let r=this.getAttribute("size");return r?T(r,["small","medium","large"],"medium"):e.size?e.size:t<0?this.layout==="avatars"?"small":"medium":t===0?"large":t===1?"medium":"small"}filtersView(e){let t=this.t,r=new Map;for(let n of e)for(let d of n.types)r.set(d,(r.get(d)??0)+1);if(!r.size)return null;let o=c("div",{class:"ct-filters",part:"filters",attrs:{role:"group","aria-label":t("contributorsFilter")}}),u=Object.keys(h).filter(n=>r.has(n));for(let n of[null,...u]){let d=t(n?`contributorsType_${n}`:"contributorsAll");o.append(c("button",{class:"ct-filter",attrs:{type:"button","aria-pressed":String(this.typeFilter===n),"data-focus-key":`type-${n??"all"}`},on:{click:()=>{this.typeFilter=n,this.render(),P(this,$.FILTER_CHANGE,{type:n})}}},n?c("span",{class:"ct-emoji",text:h[n],attrs:{"aria-hidden":"true"}}):null,c("span",{text:d}),c("span",{class:"ct-count",text:g(n?r.get(n)??0:e.length,this.locale)})))}return o}personView(e,t){let r=this.t,o=this.layout==="avatars",u=this.flag("counts")&&e.contributions!==null&&!e.sponsor,n=[e.login&&e.login!==e.name?c("span",{class:"ct-login",text:`@${e.login}`}):null,u?c("span",{class:"ct-commits",text:r("contributorsCommits",{count:g(e.contributions,this.locale)})}):null].filter(p=>p!==null),d=e.types.length?c("span",{class:"ct-types"},...e.types.map(p=>{let a=r(`contributorsType_${p}`);return c("span",{class:"ct-type",text:h[p],attrs:{title:a,role:"img","aria-label":a}})})):null,s=[this.avatarView(e,it[t]),c("span",{class:o?"ct-name sr-only":"ct-name",part:"name",text:e.name}),o?null:n.length?c("span",{class:"ct-details"},...n):null,o?null:d],l={title:o?e.name:null};return e.url?c("a",{class:"ct-person",part:"person",attrs:{...l,href:e.url,rel:e.sponsor?"sponsored noopener":"noopener"}},...s):c("div",{class:"ct-person",part:"person",attrs:l},...s)}avatarView(e,t){let r=()=>c("span",{class:"ct-avatar ct-initials",part:"avatar",text:I(e.name),attrs:{"aria-hidden":"true"}});if(!e.avatar)return r();let o=c("img",{class:"ct-avatar",part:"avatar",attrs:{src:G(e.avatar,t*2),alt:"",width:String(t),height:String(t),loading:"lazy",decoding:"async",referrerpolicy:"no-referrer"},on:{error:()=>o.replaceWith(r())}});return o}};function at(i,e){if(i==="name")return(r,o)=>r.name.localeCompare(o.name,e);let t=i==="amount"?"amount":"contributions";return(r,o)=>(o[t]??-1)-(r[t]??-1)}export{X as a};
