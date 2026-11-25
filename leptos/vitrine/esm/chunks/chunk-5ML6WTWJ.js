/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{r as R}from"./chunk-37OSRZJK.js";import{B as g,C as c,E as C,X as N,_,ba as I,o as t,q as L}from"./chunk-JAZI474S.js";import{h as M,k as T,l as k,m as E}from"./chunk-SCKP2KTO.js";var $=`/*
 * Lighthouse reports: score gauges, field data with their distribution, lab metrics,
 * opportunities with their savings, and audits by category. Ratings are written in words for
 * screen readers; colors and shapes repeat them.
 */
.lh-body {
  display: grid;
  gap: var(--_space-4);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.lh-muted {
  color: var(--_fg-muted);
}

.lh-label {
  margin: 0 0 var(--_space-1);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.lh-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-3);
  margin: 0;
}

.lh-url {
  font-family: var(--_font-mono);
  font-weight: 600;
  overflow-wrap: anywhere;
}

.lh-chip {
  padding: 0 var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  font-size: var(--_font-size-small);
}

.lh-chip.r-good {
  border-color: var(--_success);
}

.lh-chip.r-poor {
  border-color: var(--_danger);
}

.lh-scores {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--_space-4);
  margin: 0;
  padding: 0;
  list-style: none;
}

.lh-gauge {
  display: grid;
  justify-items: center;
  gap: var(--_space-1);
  width: 7.5em;
  text-align: center;
}

.lh-ring {
  position: relative;
  display: grid;
  place-items: center;
  width: 72px;
  height: 72px;
}

.lh-ring svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.lh-track {
  stroke: var(--_border);
}

.lh-arc {
  stroke: var(--_border-strong);
  stroke-linecap: round;
}

.r-good .lh-arc {
  stroke: var(--_success);
}

.r-average .lh-arc {
  stroke: var(--_warning);
}

.r-poor .lh-arc {
  stroke: var(--_danger);
}

.lh-score {
  font-size: 1.5em;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
}

.lh-gauge-title {
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.lh-field {
  display: grid;
  gap: var(--_space-2);
  padding: var(--_space-3);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.lh-field-scope {
  display: grid;
  gap: var(--_space-1);
}

.lh-field-title {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2);
  margin: 0;
}

.lh-field-list,
.lh-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14em, 1fr));
  gap: var(--_space-2) var(--_space-4);
  margin: 0;
  padding: 0;
  list-style: none;
}

.lh-field-metric {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: baseline;
  gap: 2px var(--_space-2);
}

.lh-field-metric .lh-dist {
  grid-column: 1 / -1;
}

.lh-metric-name {
  font-weight: 600;
}

.lh-metric-value {
  font-variant-numeric: tabular-nums;
}

.lh-rating {
  font-size: var(--_font-size-small);
}

.r-good > .lh-rating,
.r-good > .lh-metric-value {
  color: var(--_success);
}

.r-average > .lh-rating,
.r-average > .lh-metric-value {
  color: var(--_warning);
}

.r-poor > .lh-rating,
.r-poor > .lh-metric-value {
  color: var(--_danger);
}

.lh-dist {
  display: flex;
  height: 6px;
  overflow: hidden;
  border-radius: 3px;
  background: var(--_border);
}

.lh-dist > .r-good {
  background: var(--_success);
}

.lh-dist > .r-average {
  background: var(--_warning);
}

.lh-dist > .r-poor {
  background: var(--_danger);
}

.lh-metric {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--_space-1) var(--_space-2);
  padding: var(--_space-1) 0;
  border-bottom: 1px solid var(--_border);
}

.lh-metric .lh-metric-value {
  flex-basis: 100%;
  margin-inline-start: 18px;
  font-size: 1.4em;
}

/* Shapes as well as colors: circle good, square needs improvement, triangle poor. */
.lh-dot {
  display: inline-block;
  flex: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--_border-strong);
}

.r-good > .lh-dot,
.r-good > summary > .lh-dot {
  background: var(--_success);
}

.r-average > .lh-dot,
.r-average > summary > .lh-dot {
  border-radius: 1px;
  background: var(--_warning);
}

.r-poor > .lh-dot,
.r-poor > summary > .lh-dot {
  width: 0;
  height: 0;
  border-right: 6px solid transparent;
  border-bottom: 10px solid var(--_danger);
  border-left: 6px solid transparent;
  border-radius: 0;
  background: none;
}

.lh-category {
  display: grid;
  gap: var(--_space-3);
}

.lh-category h3 {
  margin: 0;
  font-size: 1.05em;
}

.lh-opps,
.lh-failed,
.lh-audits {
  display: grid;
  gap: var(--_space-1);
}

.lh-audit {
  border-bottom: 1px solid var(--_border);
}

.lh-audit summary {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-2);
  padding: var(--_space-1) 0;
  cursor: pointer;
}

.lh-audit-title {
  flex: 1 1 16em;
}

.lh-saving {
  display: inline-flex;
  flex: 0 1 16em;
  align-items: center;
  gap: var(--_space-2);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.lh-saving-bar {
  display: inline-block;
  height: 8px;
  max-width: 8em;
  border-radius: 4px;
  background: var(--_warning);
}

.lh-audit-body {
  display: grid;
  gap: var(--_space-2);
  padding: 0 0 var(--_space-2) 18px;
}

.lh-audit-body p {
  margin: 0;
  color: var(--_fg-muted);
}

.lh-audit-body a {
  color: var(--_accent-fg);
}

.lh-scroll {
  overflow-x: auto;
}

.lh-items {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--_font-size-small);
}

.lh-items th,
.lh-items td {
  padding: 3px var(--_space-2) 3px 0;
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
}

.lh-items th {
  color: var(--_fg-muted);
  font-weight: 500;
}

.lh-items code {
  font-family: var(--_font-mono);
  overflow-wrap: anywhere;
}

.lh-fold summary,
.lh-warnings summary {
  color: var(--_fg-muted);
  cursor: pointer;
}

.lh-plain {
  margin: var(--_space-1) 0;
  padding-inline-start: 1.25em;
}

.lh-edit > .editor-body {
  max-height: min(40vh, 320px);
  border-bottom: 1px solid var(--_border);
}
`;var O=Object.freeze({lhTabs:"Report categories",lhInvalidEmpty:"No Lighthouse report.",lhInvalidJson:"The report is not valid JSON: {detail}",lhInvalidFormat:"This is not a Lighthouse report or a PageSpeed Insights answer.",lhRuntimeError:"Lighthouse could not finish: {message}",lhScores:"Scores",lhScoreOf:"{title}: {score} out of 100, {rating}",lhRating_good:"good",lhRating_average:"needs improvement",lhRating_poor:"poor",lhRating_none:"not rated",lhMobile:"Mobile",lhDesktop:"Desktop",lhVersion:"Lighthouse {version}",lhField:"Real users (Chrome UX Report, last 28 days)",lhFieldPage:"This page",lhFieldOrigin:"Whole site",lhFieldOverall:"Core Web Vitals: {result}",lhFieldPassed:"passed",lhFieldFailed:"failed",lhFieldDistribution:"{good}% good, {average}% needs improvement, {poor}% poor",lhP75:"75th percentile",lhLab:"Lab measurements (one simulated load)",lhOpportunities:"Opportunities",lhSavings:"Estimated savings",lhFailed:"To fix ({count})",lhPassed:"Passed audits ({count})",lhNotApplicable:"Not applicable ({count})",lhManual:"To check by hand ({count})",lhLearnMore:"Learn more",lhWarnings:"Warnings",lhNothing:"Nothing to fix in this category.",lhCopySummary:"Copy the summary"}),V={lhTabs:"Cat\xE9gories du rapport",lhInvalidEmpty:"Aucun rapport Lighthouse.",lhInvalidJson:"Le rapport n\u2019est pas du JSON valide : {detail}",lhInvalidFormat:"Ce n\u2019est pas un rapport Lighthouse ou une r\xE9ponse PageSpeed Insights.",lhRuntimeError:"Lighthouse n\u2019a pas pu terminer : {message}",lhScores:"Scores",lhScoreOf:"{title} : {score} sur 100, {rating}",lhRating_good:"bon",lhRating_average:"\xE0 am\xE9liorer",lhRating_poor:"mauvais",lhRating_none:"non not\xE9",lhMobile:"Mobile",lhDesktop:"Ordinateur",lhVersion:"Lighthouse {version}",lhField:"Visiteurs r\xE9els (Chrome UX Report, 28 derniers jours)",lhFieldPage:"Cette page",lhFieldOrigin:"Tout le site",lhFieldOverall:"Core Web Vitals : {result}",lhFieldPassed:"r\xE9ussis",lhFieldFailed:"\xE9chou\xE9s",lhFieldDistribution:"{good} % bons, {average} % \xE0 am\xE9liorer, {poor} % mauvais",lhP75:"75e centile",lhLab:"Mesures de labo (un chargement simul\xE9)",lhOpportunities:"Opportunit\xE9s",lhSavings:"Gain estim\xE9",lhFailed:"\xC0 corriger ({count})",lhPassed:"Audits r\xE9ussis ({count})",lhNotApplicable:"Sans objet ({count})",lhManual:"\xC0 v\xE9rifier \xE0 la main ({count})",lhLearnMore:"En savoir plus",lhWarnings:"Avertissements",lhNothing:"Rien \xE0 corriger dans cette cat\xE9gorie.",lhCopySummary:"Copier le r\xE9sum\xE9"};var W=Object.freeze([{id:"first-contentful-paint",short:"FCP",unit:"ms"},{id:"largest-contentful-paint",short:"LCP",unit:"ms"},{id:"total-blocking-time",short:"TBT",unit:"ms"},{id:"cumulative-layout-shift",short:"CLS",unit:""},{id:"speed-index",short:"SI",unit:"ms"},{id:"interactive",short:"TTI",unit:"ms"},{id:"interaction-to-next-paint",short:"INP",unit:"ms"}]),w=Object.freeze([{key:"LARGEST_CONTENTFUL_PAINT_MS",short:"LCP",good:2500,poor:4e3,unit:"ms"},{key:"INTERACTION_TO_NEXT_PAINT",short:"INP",good:200,poor:500,unit:"ms"},{key:"CUMULATIVE_LAYOUT_SHIFT_SCORE",short:"CLS",good:10,poor:25,unit:"cls"},{key:"FIRST_CONTENTFUL_PAINT_MS",short:"FCP",good:1800,poor:3e3,unit:"ms"},{key:"EXPERIMENTAL_TIME_TO_FIRST_BYTE",short:"TTFB",good:800,poor:1800,unit:"ms"}]);function S(o){return o===null||!Number.isFinite(o)?"none":o>=.9?"good":o>=.5?"average":"poor"}function G(o){let e=null;return{text:o.replace(/\[([^\]]*)\]\(((?:[^()\s]|\([^()\s]*\))+)\)/g,(r,s,l)=>(!e&&/^https?:\/\//i.test(l)&&(e=C(l)),s)).replace(/`/g,""),link:e}}function z(o,e){if(o==null)return"";if(typeof o=="number")return e==="bytes"?o>=1024*1024?`${(o/1024/1024).toFixed(1)} MiB`:`${(o/1024).toFixed(1)} KiB`:e==="ms"||e==="timespanMs"?`${Math.round(o)} ms`:String(Math.round(o*1e3)/1e3);if(typeof o=="string")return c(o,300);if(g(o)){if(o.type==="node")return c(o.snippet,200)||c(o.nodeLabel,200)||c(o.selector,200);if(o.type==="source-location")return`${c(o.url,200)}:${Number(o.line)+1}`;if(o.type==="url"||o.type==="link")return c(o.value??o.url??o.text,300);if(o.type==="code")return c(o.value,200);if(typeof o.value<"u")return z(o.value,e)}return""}function J(o,e){let{text:a,link:r}=G(c(e.description,1500)),s=g(e.details)?e.details:{},l=g(e.metricSavings)?e.metricSavings:{},m=(Array.isArray(s.headings)?s.headings:[]).filter(g).map(h=>({key:c(h.key,60),label:c(h.label??h.text,80),type:c(h.valueType??h.itemType,30)})).filter(h=>h.key),u=(Array.isArray(s.items)?s.items:[]).filter(g).slice(0,10);return{id:o,title:c(e.title,300)||o,description:a,learnMore:r,score:typeof e.score=="number"?e.score:null,mode:c(e.scoreDisplayMode,30),display:c(e.displayValue,120),numeric:typeof e.numericValue=="number"?e.numericValue:null,savingsMs:typeof s.overallSavingsMs=="number"?s.overallSavingsMs:typeof l.LCP=="number"?l.LCP:0,savingsBytes:typeof s.overallSavingsBytes=="number"?s.overallSavingsBytes:0,items:u.map(h=>m.map(i=>({label:i.label,value:z(h[i.key],i.type)}))),headings:m.map(h=>h.label),group:"",weight:0}}function B(o){let e=o.trim();if(!e)return{ok:!1,error:"empty"};let a;try{a=JSON.parse(e)}catch(n){return{ok:!1,error:"json",detail:n instanceof Error?n.message.slice(0,200):""}}if(!g(a))return{ok:!1,error:"format"};let r=g(a.lighthouseResult)?a.lighthouseResult:a;if(!g(r.categories)||!g(r.audits))return g(a.loadingExperience)?{ok:!0,report:{...H(),url:c(a.id,500),field:P(a)}}:{ok:!1,error:"format"};let s=r.audits,l=new Map;for(let[n,d]of Object.entries(s))g(d)&&l.set(n,J(n,d));let p=[];for(let[n,d]of Object.entries(r.categories)){if(!g(d))continue;let x=(Array.isArray(d.auditRefs)?d.auditRefs:[]).filter(g).map(f=>{let y=l.get(c(f.id,120));return y?{...y,group:c(f.group,60),weight:typeof f.weight=="number"?f.weight:0}:null}).filter(f=>f!==null).filter(f=>f.group!=="metrics"),A=f=>f.score!==null&&f.score<.9&&!["informative","notApplicable","manual"].includes(f.mode);x.sort((f,y)=>Number(A(y))-Number(A(f))||(f.score??1)-(y.score??1)||y.weight-f.weight),p.push({id:n,title:c(d.title,100)||n,score:typeof d.score=="number"?d.score:null,audits:x})}let m=W.filter(n=>l.has(n.id)).map(n=>{let d=l.get(n.id);return{id:n.id,short:n.short,title:d.title,value:d.display,numeric:d.numeric,score:d.score,unit:n.unit}}),u=[...l.values()].filter(n=>(n.savingsMs>0||n.savingsBytes>0)&&n.score!==null&&n.score<.9).sort((n,d)=>d.savingsMs-n.savingsMs||d.savingsBytes-n.savingsBytes),h=g(r.configSettings)?r.configSettings:{},i=g(r.environment)?r.environment:{},v=g(r.runtimeError)?r.runtimeError:{};return{ok:!0,report:{url:c(r.finalDisplayedUrl,500)||c(r.finalUrl,500)||c(r.requestedUrl,500),fetchTime:c(r.fetchTime,40),version:c(r.lighthouseVersion,20),formFactor:c(h.formFactor,20)||c(h.emulatedFormFactor,20),userAgent:c(i.networkUserAgent,300),categories:p,metrics:m,opportunities:u,field:P(a),warnings:(Array.isArray(r.runWarnings)?r.runWarnings:[]).map(n=>c(n,500)).filter(Boolean),error:c(v.message,500)}}}var H=()=>({url:"",fetchTime:"",version:"",formFactor:"",userAgent:"",categories:[],metrics:[],opportunities:[],field:[],warnings:[],error:""});function P(o){let e=[];for(let[a,r]of[["page","loadingExperience"],["origin","originLoadingExperience"]]){let s=o[r];if(!g(s)||!g(s.metrics))continue;let l=s.metrics,p=[];for(let m of w){let u=l[m.key];if(!g(u)||typeof u.percentile!="number")continue;let h=(Array.isArray(u.distributions)?u.distributions:[]).filter(g).map(i=>typeof i.proportion=="number"?i.proportion:0);p.push({short:m.short,key:m.key,percentile:u.percentile,category:c(u.category,20),distribution:h})}p.length&&e.push({scope:a,overall:c(s.overall_category,20),metrics:p})}return e}function j(o){let e=w.find(a=>a.key===o.key);return e?o.percentile<=e.good?"good":o.percentile<=e.poor?"average":"poor":"none"}E({en:O,fr:V});var F="http://www.w3.org/2000/svg",D=class extends I{static type="lighthouse";static componentAttributes=Object.freeze(["category","tabs"]);static presets={simple:{tabs:!0},full:{header:!0,dot:!0,copy:!0,fullscreen:!0,tabs:!0}};static styles=[$];static upgradeProperties=["content"];constructor(){super(),this.panelId=L("panel"),this.categoryState=null,this.parsed=null,this.editor=null,this.previewTimer=void 0}read(){let e=this.text??"";return this.parsed?.text!==e&&(this.parsed={text:e,result:B(e)}),this.parsed.result}get report(){let e=this.read();return e.ok?e.report:null}categoryId(e){let a=this.categoryState??this.getAttribute("category")??"";return e.categories.some(r=>r.id===a)?a:e.categories[0]?.id??""}renderContent(e){let a=this.t,r=this.read(),s=t("div",{class:"body lh-body",part:"body"}),l=null;if(!r.ok)s.append(_(a(`lhInvalid${r.error[0].toUpperCase()}${r.error.slice(1)}`,{detail:r.detail??""})));else{let i=r.report,v=this.categoryId(i);l=this.feature("tabs")&&i.categories.length>1?N({tabs:i.categories.map(d=>({id:d.id,label:`${d.title}${d.score!==null?` ${Math.round(d.score*100)}`:""}`})),selected:v,label:a("lhTabs"),panelId:this.panelId,onSelect:d=>this.selectCategory(d)}):null,s.append(this.headView(i)),i.error&&s.append(_(a("lhRuntimeError",{message:i.error}))),i.categories.length&&s.append(this.scoresView(i)),i.field.length&&s.append(this.fieldView(i)),i.warnings.length&&s.append(t("details",{class:"lh-warnings"},t("summary",{text:`${a("lhWarnings")} (${i.warnings.length})`}),t("ul",{},...i.warnings.map(d=>t("li",{text:d})))));let n=i.categories.find(d=>d.id===v);if(n){let d=t("div",{class:"lh-category",attrs:{id:this.panelId,role:l?"tabpanel":null}});if(l||d.append(t("h3",{text:n.title})),n.id==="performance"&&(i.metrics.length&&d.append(this.metricsView(i)),i.opportunities.length&&d.append(this.opportunitiesView(i.opportunities))),d.append(this.auditsView(n,n.id==="performance"?new Set(i.opportunities.map(b=>b.id)):new Set)),s.append(d),!l)for(let b of i.categories.filter(x=>x!==n))s.append(t("div",{class:"lh-category"},t("h3",{text:b.title}),this.auditsView(b,new Set)))}}let p=t("div",{class:"panel"}),m=[];if(this.editing){let i=this.createEditor();p.classList.add("lh-edit"),p.append(t("div",{class:"body editor-body",part:"body editor"},i.element),s),m=this.historyButtons(i)}else p.append(s);let u=r.ok?r.report:null,h=[...m,this.editToggleButton(),this.fullscreenButton(),this.feature("copy")&&u?this.copyButton(()=>this.summaryText(u),a("lhCopySummary")):null];e.append(...this.chrome({badge:"Lighthouse",tabs:l,actions:h}),p),this.editor?.align()}selectCategory(e){this.categoryState=e,this.render(),this.root.querySelector(`[data-tab="${CSS.escape(e)}"]`)?.focus(),k(this,T.TAB_CHANGE,{tab:e})}summaryText(e){return[e.url,...e.categories.map(r=>`${r.title}: ${r.score===null?"\u2014":Math.round(r.score*100)}`),...e.metrics.map(r=>`${r.short} ${r.value}`)].filter(Boolean).join(`
`)}headView(e){let a=this.t,r=e.fetchTime?new Date(e.fetchTime):null;return t("p",{class:"lh-head"},e.url?t("code",{class:"lh-url",text:e.url}):null,e.formFactor?t("span",{class:"lh-chip",text:e.formFactor==="desktop"?a("lhDesktop"):a("lhMobile")}):null,r&&!Number.isNaN(r.getTime())?t("span",{class:"lh-muted",text:new Intl.DateTimeFormat(this.locale,{dateStyle:"medium",timeStyle:"short",timeZone:"UTC"}).format(r)+" UTC"}):null,e.version?t("span",{class:"lh-muted",text:a("lhVersion",{version:e.version})}):null)}scoresView(e){let a=this.t;return t("ul",{class:"lh-scores",part:"scores",attrs:{"aria-label":a("lhScores")}},...e.categories.map(r=>{let s=r.score===null?null:Math.round(r.score*100),l=S(r.score),p=document.createElementNS(F,"svg");p.setAttribute("viewBox","0 0 36 36"),p.setAttribute("aria-hidden","true");let m=document.createElementNS(F,"circle"),u=document.createElementNS(F,"circle");for(let i of[m,u])i.setAttribute("cx","18"),i.setAttribute("cy","18"),i.setAttribute("r","15.9155"),i.setAttribute("fill","none"),i.setAttribute("stroke-width","3");m.setAttribute("class","lh-track"),u.setAttribute("class","lh-arc"),u.setAttribute("stroke-dasharray",`${s??0} 100`),u.setAttribute("transform","rotate(-90 18 18)"),p.append(m,u);let h=a("lhScoreOf",{title:r.title,score:s??"\u2014",rating:a(`lhRating_${l}`)});return t("li",{class:`lh-gauge r-${l}`,part:"gauge",attrs:{"data-category":r.id}},t("span",{class:"lh-ring"},p,t("span",{class:"lh-score",attrs:{"aria-hidden":"true"},text:s===null?"\u2014":String(s)})),t("span",{class:"lh-gauge-title",attrs:{"aria-hidden":"true"},text:r.title}),t("span",{class:"sr-only",text:h}))}))}fieldView(e){let a=this.t,r=s=>w.find(p=>p.key===s.key)?.unit==="cls"?(s.percentile/100).toFixed(2):s.percentile>=1e3?`${(s.percentile/1e3).toFixed(1)} s`:`${s.percentile} ms`;return t("div",{class:"lh-field",part:"field"},t("p",{class:"lh-label",text:a("lhField")}),...e.field.map(s=>t("div",{class:"lh-field-scope"},t("p",{class:"lh-field-title"},t("strong",{text:s.scope==="page"?a("lhFieldPage"):a("lhFieldOrigin")}),s.overall?t("span",{class:`lh-chip ${s.overall==="FAST"?"r-good":"r-poor"}`,text:a("lhFieldOverall",{result:s.overall==="FAST"?a("lhFieldPassed"):a("lhFieldFailed")})}):null),t("ul",{class:"lh-field-list"},...s.metrics.map(l=>{let p=j(l),[m=0,u=0,h=0]=l.distribution,i=t("span",{class:"lh-dist",attrs:{"aria-hidden":"true"}});for(let[n,d]of[["r-good",m],["r-average",u],["r-poor",h]]){let b=t("span",{class:n});b.style.width=`${Math.max(0,Math.min(1,d))*100}%`,i.append(b)}let v=n=>String(Math.round(n*100));return t("li",{class:`lh-field-metric r-${p}`,attrs:{"data-metric":l.short}},t("span",{class:"lh-metric-name",text:l.short}),t("strong",{class:"lh-metric-value",text:r(l)}),t("span",{class:"lh-rating",text:a(`lhRating_${p}`)}),l.distribution.length?i:null,l.distribution.length?t("span",{class:"sr-only",text:a("lhFieldDistribution",{good:v(m),average:v(u),poor:v(h)})}):null)})))))}metricsView(e){let a=this.t;return t("div",{class:"lh-metrics-box"},t("p",{class:"lh-label",text:a("lhLab")}),t("ul",{class:"lh-metrics",part:"metrics"},...e.metrics.map(r=>{let s=S(r.score);return t("li",{class:`lh-metric r-${s}`,attrs:{"data-metric":r.short}},t("span",{class:"lh-dot",attrs:{"aria-hidden":"true"}}),t("span",{class:"lh-metric-name",text:r.title}),t("strong",{class:"lh-metric-value",text:r.value||"\u2014"}),t("span",{class:"sr-only",text:`, ${a(`lhRating_${s}`)}`}))})))}opportunitiesView(e){let a=this.t,r=Math.max(...e.map(s=>s.savingsMs),1);return t("div",{class:"lh-opps",part:"opportunities"},t("p",{class:"lh-label",text:`${a("lhOpportunities")} \xB7 ${a("lhSavings")}`}),...e.map(s=>{let l=t("span",{class:"lh-saving-bar",attrs:{"aria-hidden":"true"}});return l.style.width=`${Math.max(2,s.savingsMs/r*100)}%`,this.auditView(s,t("span",{class:"lh-saving"},l,t("span",{text:s.display})))}))}auditsView(e,a){let r=this.t,s=e.audits.filter(i=>!a.has(i.id)&&i.score!==null&&i.score<.9&&!["informative","notApplicable","manual"].includes(i.mode)),l=e.audits.filter(i=>i.mode==="informative"&&!a.has(i.id)&&i.display),p=e.audits.filter(i=>i.score!==null&&i.score>=.9&&i.mode!=="informative"),m=e.audits.filter(i=>i.mode==="notApplicable"),u=e.audits.filter(i=>i.mode==="manual"),h=(i,v)=>v.length?t("details",{class:"lh-fold"},t("summary",{text:r(i,{count:v.length})}),t("ul",{class:"lh-plain"},...v.map(n=>t("li",{text:n.title})))):null;return t("div",{class:"lh-audits"},s.length||l.length?t("div",{class:"lh-failed"},t("p",{class:"lh-label",text:r("lhFailed",{count:s.length})}),...s.map(i=>this.auditView(i)),...l.map(i=>this.auditView(i))):_(r("lhNothing")),h("lhManual",u),h("lhPassed",p),h("lhNotApplicable",m))}auditView(e,a){let r=this.t,s=e.mode==="informative"?"none":S(e.score);return t("details",{class:`lh-audit r-${s}`,part:"audit",attrs:{"data-audit":e.id}},t("summary",{},t("span",{class:"lh-dot",attrs:{"aria-hidden":"true"}}),t("span",{class:"lh-audit-title",text:e.title}),a??(e.display?t("span",{class:"lh-muted",text:e.display}):null),s!=="none"?t("span",{class:"sr-only",text:`, ${r(`lhRating_${s}`)}`}):null),t("div",{class:"lh-audit-body"},e.description?t("p",{text:e.description}):null,e.learnMore?t("p",{},t("a",{text:r("lhLearnMore"),attrs:{href:e.learnMore,rel:"noopener noreferrer",target:"_blank"}})):null,e.items.length?t("div",{class:"lh-scroll"},t("table",{class:"lh-items"},t("thead",{},t("tr",{},...e.headings.map(l=>t("th",{attrs:{scope:"col"},text:l})))),t("tbody",{},...e.items.map(l=>t("tr",{},...l.map(p=>t("td",{},t("code",{text:p.value})))))))):null))}createEditor(){return this.editor?.destroy(),this.editor=new R({text:this.text??"",language:"json",lineNumbers:!0,wrap:!1,highlightLimit:M().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>k(this,T.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),400)}};export{D as a};
