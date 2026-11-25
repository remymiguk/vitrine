/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{r as M}from"./chunk-37OSRZJK.js";import{B as m,C as c,E as $,O as T,X as E,_ as b,ba as z,c as A,e as C,o as r,q as N}from"./chunk-JAZI474S.js";import{h as I,k as g,l as v,m as k,q as S}from"./chunk-SCKP2KTO.js";var P=`/*
 * Accessibility results: a summary by impact, filters, and a card per rule with its WCAG
 * criteria, elements and fixes. Impacts are written in words; colors only repeat them.
 */
.a11y-body {
  display: grid;
  gap: var(--_space-3);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.a11y-muted {
  color: var(--_fg-muted);
}

.a11y-summary {
  display: grid;
  gap: var(--_space-2);
}

.a11y-facts {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--_space-1) var(--_space-3);
  margin: 0;
}

.a11y-url,
.a11y-id,
.a11y-target code,
.a11y-html {
  font-family: var(--_font-mono);
}

.a11y-url {
  overflow-wrap: anywhere;
}

.a11y-counts {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

.a11y-impact {
  display: inline-block;
  padding: 1px var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-inline-start-width: 4px;
  border-radius: var(--_radius-sm);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.a11y-impact.i-critical {
  border-width: 2px;
  border-inline-start-width: 6px;
  border-color: var(--_danger);
}

.a11y-impact.i-serious {
  border-color: var(--_danger);
}

.a11y-impact.i-moderate {
  border-color: var(--_warning);
}

.a11y-impact.i-minor {
  border-color: var(--_info);
}

.a11y-filters {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1);
}

.a11y-chip {
  padding: 2px var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: var(--_font-size-small);
  cursor: pointer;
}

.a11y-chip.on {
  border-color: var(--_accent);
  background: var(--_accent-soft);
  font-weight: 600;
}

.a11y-chip:focus-visible,
.a11y-query:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.a11y-query {
  flex: 1 1 14em;
  min-width: 0;
  padding: 4px var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: inherit;
  font: inherit;
}

.a11y-rules {
  display: grid;
  gap: var(--_space-3);
}

.a11y-rule {
  display: grid;
  gap: var(--_space-2);
  min-width: 0;
  padding: var(--_space-3);
  border: 1px solid var(--_border);
  border-inline-start: 4px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
}

.a11y-rule.i-critical,
.a11y-rule.i-serious {
  border-inline-start-color: var(--_danger);
}

.a11y-rule.i-moderate {
  border-inline-start-color: var(--_warning);
}

.a11y-rule.i-minor {
  border-inline-start-color: var(--_info);
}

.a11y-rule-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-2);
}

.a11y-rule-head h3 {
  flex: 1 1 16em;
  margin: 0;
  font-size: 1em;
}

.a11y-id {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.a11y-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-2);
  margin: 0;
  font-size: var(--_font-size-small);
}

.a11y-meta a {
  color: var(--_accent-fg);
}

.a11y-tag {
  padding: 0 6px;
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
}

.a11y-desc {
  margin: 0;
  color: var(--_fg-muted);
}

.a11y-nodes {
  display: grid;
  gap: var(--_space-2);
  margin: 0;
  padding-inline-start: 1.5em;
}

.a11y-node {
  display: grid;
  gap: var(--_space-1);
  min-width: 0;
}

.a11y-target {
  margin: 0;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.a11y-html {
  margin: 0;
  padding: var(--_space-1) var(--_space-2);
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
  color: var(--_code-fg);
  font-size: var(--_font-size-small);
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.a11y-fix {
  font-size: var(--_font-size-small);
}

.a11y-fix-title {
  display: flex;
  align-items: center;
  gap: var(--_space-1);
  margin: 0;
  font-weight: 600;
}

.a11y-fix-title svg {
  flex: none;
  width: 14px;
  height: 14px;
  color: var(--_info);
}

.a11y-fix ul {
  margin: 2px 0 0;
  padding-inline-start: 1.5em;
}

.a11y-more {
  justify-self: start;
  color: var(--_accent-fg);
}

.a11y-edit > .editor-body {
  max-height: min(40vh, 320px);
  border-bottom: 1px solid var(--_border);
}
`;var F=Object.freeze({a11yTabs:"Accessibility results",a11yTabViolations:"Violations ({count})",a11yTabReview:"To review ({count})",a11yInvalidEmpty:"No accessibility results.",a11yInvalidJson:"The results are not valid JSON: {detail}",a11yInvalidFormat:"These are not axe-core or Pa11y results.",a11yRules:"{count} rules failed",a11yElements:"on {count} elements",a11yPasses:"{count} rules passed",a11yInapplicable:"{count} not applicable",a11yPages:"{count} pages",a11yNone:"No violation found. Automated tools find only part of the problems: test with a keyboard and a screen reader too.",a11yNoReview:"Nothing left to review by hand.",a11yNoMatch:"No rule matches the filters.",a11yImpact:"Impact",a11yImpact_critical:"Critical",a11yImpact_serious:"Serious",a11yImpact_moderate:"Moderate",a11yImpact_minor:"Minor",a11yImpact_unknown:"Unrated",a11yAll:"All",a11yFilter:"Filter: rule, selector, criterion",a11yFilters:"Filters",a11yCriteria:"WCAG {list}",a11yLevel:"level {level}",a11yBestPractice:"best practice",a11yNodes:"{count} elements",a11yNode:"1 element",a11yNodesMore:"{count} more elements",a11yElement:"Element",a11yHtml:"HTML",a11yFix:"How to fix",a11yLearnMore:"Learn more about {rule}",a11yPage:"Page: {page}",a11yCopyCsv:"CSV",a11yCopySelectors:"Copy the selectors"}),L={a11yTabs:"R\xE9sultats d\u2019accessibilit\xE9",a11yTabViolations:"Violations ({count})",a11yTabReview:"\xC0 v\xE9rifier ({count})",a11yInvalidEmpty:"Aucun r\xE9sultat d\u2019accessibilit\xE9.",a11yInvalidJson:"Les r\xE9sultats ne sont pas du JSON valide : {detail}",a11yInvalidFormat:"Ce ne sont pas des r\xE9sultats axe-core ou Pa11y.",a11yRules:"{count} r\xE8gles en \xE9chec",a11yElements:"sur {count} \xE9l\xE9ments",a11yPasses:"{count} r\xE8gles r\xE9ussies",a11yInapplicable:"{count} sans objet",a11yPages:"{count} pages",a11yNone:"Aucune violation trouv\xE9e. Les outils automatiques ne trouvent qu\u2019une partie des probl\xE8mes : tester aussi au clavier et avec un lecteur d\u2019\xE9cran.",a11yNoReview:"Rien \xE0 v\xE9rifier \xE0 la main.",a11yNoMatch:"Aucune r\xE8gle ne correspond aux filtres.",a11yImpact:"Impact",a11yImpact_critical:"Critique",a11yImpact_serious:"Grave",a11yImpact_moderate:"Mod\xE9r\xE9",a11yImpact_minor:"Mineur",a11yImpact_unknown:"Non \xE9valu\xE9",a11yAll:"Tous",a11yFilter:"Filtrer : r\xE8gle, s\xE9lecteur, crit\xE8re",a11yFilters:"Filtres",a11yCriteria:"WCAG {list}",a11yLevel:"niveau {level}",a11yBestPractice:"bonne pratique",a11yNodes:"{count} \xE9l\xE9ments",a11yNode:"1 \xE9l\xE9ment",a11yNodesMore:"{count} \xE9l\xE9ments de plus",a11yElement:"\xC9l\xE9ment",a11yHtml:"HTML",a11yFix:"Comment corriger",a11yLearnMore:"En savoir plus sur {rule}",a11yPage:"Page : {page}",a11yCopyCsv:"CSV",a11yCopySelectors:"Copier les s\xE9lecteurs"};var H=500,_=200,f=["critical","serious","moderate","minor"];function G(l){let e=l.map(t=>/^wcag(\d)(\d)(\d{1,2})$/.exec(t)).filter(t=>t!==null).map(t=>`${t[1]}.${t[2]}.${t[3]}`),s=l.map(t=>/^wcag2(?:1|2)?(a{1,3})$/.exec(t)?.[1]).filter(Boolean).map(t=>String(t).toUpperCase()),a=["A","AA","AAA"].find(t=>s.includes(t))??"";return{criteria:[...new Set(e)],level:a}}var V=l=>f.includes(l)?l:"";function J(l){return typeof l=="string"?c(l,500):Array.isArray(l)?l.map(e=>Array.isArray(e)?e.map(s=>c(s,300)).join(" >>> "):c(e,300)).join(" \u2192 "):""}function j(l,e){return Array.isArray(l)?l.filter(m).slice(0,H).map(s=>{let a=(Array.isArray(s.tags)?s.tags:[]).map(i=>c(i,60)).filter(Boolean),t=(Array.isArray(s.nodes)?s.nodes:[]).filter(m),{criteria:n,level:o}=G(a);return{id:c(s.id,100),impact:V(s.impact),help:c(s.help,300),description:c(s.description,600),helpUrl:/^https?:\/\//i.test(c(s.helpUrl,2e3))?$(s.helpUrl):null,criteria:n,level:o,tags:a,nodes:t.slice(0,_).map(i=>({target:J(i.target),html:c(i.html,600),summary:c(i.failureSummary,1200),impact:V(i.impact)})),total:t.length,page:e}}):[]}function W(l,e){let s=new Map;for(let a of l.filter(m)){if(c(a.type,20)!=="error")continue;let t=c(a.code,200),n=s.get(t);if(!n){let o=/Guideline\d_\d\.(\d_\d_\d{1,2})/.exec(t)?.[1]?.replace(/_/g,".");n={id:t,impact:"serious",help:c(a.message,300),description:"",helpUrl:null,criteria:o?[o]:[],level:/WCAG2(A{1,3})/.exec(t)?.[1]??"",tags:[],nodes:[],total:0,page:e},s.set(t,n)}n.total+=1,n.nodes.length<_&&n.nodes.push({target:c(a.selector,500),html:c(a.context,600),summary:"",impact:""})}return[...s.values()]}function q(l){let e=l.trim();if(!e)return{ok:!1,error:"empty"};let s;try{s=JSON.parse(e)}catch(i){return{ok:!1,error:"json",detail:i instanceof Error?i.message.slice(0,200):""}}let a=(Array.isArray(s)?s:[s]).filter(m);if(!a.length)return{ok:!1,error:"format"};let t={pages:[],engine:"",timestamp:"",violations:[],incomplete:[],passes:0,inapplicable:0,capped:!1},n=!1;for(let i of a){let p=c(i.url??i.pageUrl,500);if(p&&!t.pages.includes(p)&&t.pages.push(p),Array.isArray(i.violations)){n=!0,t.violations.push(...j(i.violations,p)),t.incomplete.push(...j(i.incomplete,p)),t.passes+=Array.isArray(i.passes)?i.passes.length:0,t.inapplicable+=Array.isArray(i.inapplicable)?i.inapplicable.length:0;let d=m(i.testEngine)?i.testEngine:{};!t.engine&&d.version&&(t.engine=`${c(d.name,30)||"axe-core"} ${c(d.version,20)}`),t.timestamp||(t.timestamp=c(i.timestamp,40)),i.violations.some(u=>m(u)&&Array.isArray(u.nodes)&&u.nodes.length>_)&&(t.capped=!0)}else Array.isArray(i.issues)&&(n=!0,t.violations.push(...W(i.issues,c(i.pageUrl,500))),t.engine||(t.engine="Pa11y"))}if(!n)return{ok:!1,error:"format"};let o=i=>i.impact?f.indexOf(i.impact):f.length;return t.violations.sort((i,p)=>o(i)-o(p)||p.total-i.total),t.incomplete.sort((i,p)=>o(i)-o(p)||p.total-i.total),{ok:!0,results:t}}function R(l){let e={critical:{rules:0,nodes:0},serious:{rules:0,nodes:0},moderate:{rules:0,nodes:0},minor:{rules:0,nodes:0},unknown:{rules:0,nodes:0}};for(let s of l){let a=s.impact||"unknown";e[a].rules+=1,e[a].nodes+=s.total}return e}function B(l){let e=[];for(let s of l.split(/\r?\n/)){let a=s.trim();a&&(/^Fix (any|all) of the following:?$/i.test(a)||!e.length?e.push({title:/:$/.test(a)?a:"",items:/:$/.test(a)?[]:[a]}):e[e.length-1].items.push(a))}return e}k({en:F,fr:L});var D=Object.freeze(["violations","review"]),X=5,U=class extends z{static type="a11y";static componentAttributes=Object.freeze(["view","filters","tabs"]);static presets={simple:{tabs:!0},full:{header:!0,dot:!0,copy:!0,fullscreen:!0,tabs:!0}};static styles=[P];static upgradeProperties=["content"];constructor(){super(),this.panelId=N("panel"),this.viewState=null,this.impacts=new Set,this.query="",this.expanded=new Set,this.parsed=null,this.editor=null,this.previewTimer=void 0}read(){let e=this.text??"";return this.parsed?.text!==e&&(this.parsed={text:e,result:q(e)}),this.parsed.result}get results(){let e=this.read();return e.ok?e.results:null}get view(){return this.viewState??C(this.getAttribute("view"),D,"violations")}filtered(e){let s=this.query.trim().toLowerCase();return e.filter(a=>(!this.impacts.size||this.impacts.has(a.impact||"unknown"))&&(!s||`${a.id} ${a.help} ${a.criteria.join(" ")} ${a.nodes.map(t=>t.target).join(" ")}`.toLowerCase().includes(s)))}renderContent(e){let s=this.t,a=this.read(),t=r("div",{class:"body a11y-body",part:"body"}),n=null,o=[];if(!a.ok)t.append(b(s(`a11yInvalid${a.error[0].toUpperCase()}${a.error.slice(1)}`,{detail:a.detail??""})));else{let y=a.results;n=this.feature("tabs")?E({tabs:[{id:"violations",label:s("a11yTabViolations",{count:y.violations.length})},{id:"review",label:s("a11yTabReview",{count:y.incomplete.length})}],selected:this.view,label:s("a11yTabs"),panelId:this.panelId,onSelect:w=>this.selectView(w)}):null,t.append(this.summaryView(y));let h=n&&this.view==="review"?y.incomplete:y.violations;A(this.getAttribute("filters"))!==!1&&h.length&&t.append(this.filtersView(h)),o=this.filtered(h),h.length?o.length?t.append(r("div",{class:"a11y-rules"},...o.map(w=>this.ruleView(w,y.pages.length>1)))):t.append(b(s("a11yNoMatch"))):t.append(b(n&&this.view==="review"?s("a11yNoReview"):s("a11yNone")))}let i=r("div",{class:"panel",attrs:{id:this.panelId,role:n?"tabpanel":null}}),p=[];if(this.editing){let y=this.createEditor();i.classList.add("a11y-edit"),i.append(r("div",{class:"body editor-body",part:"body editor"},y.element),t),p=this.historyButtons(y)}else i.append(t);let d=this.feature("copy")&&o.length>0,u=[...p,this.editToggleButton(),this.fullscreenButton(),d?this.copyTextButton(()=>K(o),s("a11yCopyCsv"),"copy-csv"):null,d?this.copyButton(()=>[...new Set(o.flatMap(y=>y.nodes.map(h=>h.target)))].join(`
`),s("a11yCopySelectors")):null],x=a.ok?a.results.engine:"";e.append(...this.chrome({badge:x||"axe",tabs:n,actions:u}),i),this.editor?.align()}selectView(e){e!==this.view&&(this.viewState=e,this.render(),this.root.querySelector(`[data-tab="${e}"]`)?.focus(),v(this,g.TAB_CHANGE,{tab:e}))}summaryView(e){let s=this.t,a=R(e.violations),t=e.violations.reduce((o,i)=>o+i.total,0),n=o=>S(o,this.locale);return r("div",{class:"a11y-summary",part:"summary"},r("p",{class:"a11y-facts"},r("strong",{text:s("a11yRules",{count:n(e.violations.length)})}),r("span",{text:s("a11yElements",{count:n(t)})}),e.passes?r("span",{class:"a11y-muted",text:s("a11yPasses",{count:n(e.passes)})}):null,e.inapplicable?r("span",{class:"a11y-muted",text:s("a11yInapplicable",{count:n(e.inapplicable)})}):null,e.pages.length>1?r("span",{class:"a11y-muted",text:s("a11yPages",{count:e.pages.length})}):e.pages[0]?r("code",{class:"a11y-url",text:e.pages[0]}):null),r("ul",{class:"a11y-counts",attrs:{"aria-label":s("a11yImpact")}},...[...f,"unknown"].filter(o=>a[o].rules).map(o=>{let i=a[o];return r("li",{class:`a11y-impact i-${o}`},r("span",{text:s(`a11yImpact_${o}`)}),r("strong",{text:` ${n(i.rules)}`}),r("span",{class:"a11y-muted",text:` \xB7 ${i.nodes===1?s("a11yNode"):s("a11yNodes",{count:n(i.nodes)})}`}))})))}filtersView(e){let s=this.t,a=[...f,"unknown"].filter(i=>e.some(p=>(p.impact||"unknown")===i)),t=(i,p,d,u)=>r("button",{class:`a11y-chip${d?" on":""}`,text:p,attrs:{type:"button","aria-pressed":String(d),"data-focus-key":`filter-${i}`},on:{click:u}}),n=()=>{this.render(),v(this,g.FILTER_CHANGE,{impacts:[...this.impacts],query:this.query,shown:this.filtered(e).length})},o=r("input",{class:"a11y-query",attrs:{type:"search",value:this.query,placeholder:s("a11yFilter"),"aria-label":s("a11yFilter"),"data-focus-key":"query",spellcheck:"false"},on:{input:()=>{this.query=o.value.slice(0,200),n()}}});return r("div",{class:"a11y-filters",part:"filters",attrs:{role:"group","aria-label":s("a11yFilters")}},t("all",s("a11yAll"),!this.impacts.size,()=>{this.impacts.clear(),n()}),...a.map(i=>t(i,s(`a11yImpact_${i}`),this.impacts.has(i),()=>{this.impacts.has(i)?this.impacts.delete(i):this.impacts.add(i),this.impacts.size===a.length&&this.impacts.clear(),n()})),o)}ruleView(e,s){let a=this.t,t=e.impact||"unknown",n=`${e.page}|${e.id}`,i=this.expanded.has(n)?e.nodes:e.nodes.slice(0,X),p=e.total-i.length;return r("section",{class:`a11y-rule i-${t}`,part:"rule",attrs:{"aria-label":e.help||e.id,"data-rule":e.id}},r("header",{class:"a11y-rule-head"},r("span",{class:`a11y-impact i-${t}`,part:"impact",text:a(`a11yImpact_${t}`)}),r("h3",{text:e.help||e.id}),r("code",{class:"a11y-id",text:e.id})),r("p",{class:"a11y-meta"},e.criteria.length?r("span",{class:"a11y-tag",text:a("a11yCriteria",{list:e.criteria.join(", ")})}):null,e.level?r("span",{class:"a11y-tag",text:a("a11yLevel",{level:e.level})}):null,e.tags.includes("best-practice")?r("span",{class:"a11y-tag",text:a("a11yBestPractice")}):null,r("span",{class:"a11y-muted",text:e.total===1?a("a11yNode"):a("a11yNodes",{count:e.total})}),s&&e.page?r("span",{class:"a11y-muted",text:a("a11yPage",{page:e.page})}):null,e.helpUrl?r("a",{text:a("a11yLearnMore",{rule:e.id}),attrs:{href:e.helpUrl,rel:"noopener noreferrer",target:"_blank"}}):null),e.description?r("p",{class:"a11y-desc",text:e.description}):null,r("ol",{class:"a11y-nodes"},...i.map(d=>r("li",{class:"a11y-node",part:"node"},r("p",{class:"a11y-target"},r("span",{class:"sr-only",text:`${a("a11yElement")}: `}),r("code",{text:d.target})),d.html?r("pre",{class:"a11y-html"},r("span",{class:"sr-only",text:`${a("a11yHtml")}: `}),r("code",{text:d.html})):null,...B(d.summary).map(u=>r("div",{class:"a11y-fix"},r("p",{class:"a11y-fix-title"},T("help"),r("span",{text:u.title||a("a11yFix")})),u.items.length?r("ul",{},...u.items.map(x=>r("li",{text:x}))):null))))),p>0&&i.length<e.nodes.length?r("button",{class:"text-btn a11y-more",text:a("a11yNodesMore",{count:e.nodes.length-i.length}),attrs:{type:"button","data-focus-key":`more-${e.id}`},on:{click:()=>{this.expanded.add(n),this.render()}}}):null)}createEditor(){return this.editor?.destroy(),this.editor=new M({text:this.text??"",language:"json",lineNumbers:!0,wrap:!1,highlightLimit:I().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>v(this,g.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),400)}};function K(l){let e=a=>{let t=a;return/^[=+\-@\t\r]/.test(t)&&(t=`'${t}`),/[",\n\r]/.test(t)||t!==a?`"${t.replace(/"/g,'""')}"`:t},s=[["rule","impact","wcag","page","target","html"]];for(let a of l)for(let t of a.nodes)s.push([a.id,a.impact,a.criteria.join(" "),a.page,t.target,t.html]);return s.map(a=>a.map(e).join(",")).join(`
`)}export{U as a};
