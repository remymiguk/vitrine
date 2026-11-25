/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as Y}from"./chunk-L6FCOTOG.js";import{p as P,r as B}from"./chunk-37OSRZJK.js";import{O as k,X as q,_ as T,ba as z,c as O,e as U,o as t,q as j,s as D}from"./chunk-JAZI474S.js";import{h as A,k as C,l as F,m as I}from"./chunk-SCKP2KTO.js";var K=`/*
 * Sigma rules: a card per rule with its level, facts, tags, the searches of the detection
 * as tables and the condition as a tree. Levels and problems are written in words; colors
 * only repeat them.
 */
.sigma-body {
  display: grid;
  gap: var(--_space-4);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.sigma-rule {
  display: grid;
  gap: var(--_space-3);
  min-width: 0;
  padding: var(--_space-3);
  border: 1px solid var(--_border);
  border-inline-start: 3px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
}

.sigma-rule.lv-critical,
.sigma-rule.lv-high {
  border-inline-start-color: var(--_danger);
}

.sigma-rule.lv-medium {
  border-inline-start-color: var(--_warning);
}

.sigma-rule.lv-low,
.sigma-rule.lv-informational {
  border-inline-start-color: var(--_info);
}

.sigma-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2);
}

.sigma-title {
  margin: 0;
  font-size: 1.05em;
  overflow-wrap: anywhere;
}

.sigma-level {
  padding: 1px var(--_space-2);
  border-radius: var(--_radius-full);
  background: var(--_surface-sunken);
  font-size: var(--_font-size-small);
  font-weight: 700;
}

.sigma-level.lv-critical {
  background: var(--_danger);
  color: var(--_on-danger);
}

.sigma-level.lv-high {
  border: 1px solid var(--_danger);
  color: var(--_danger);
}

.sigma-level.lv-medium {
  border: 1px solid var(--_warning);
  color: var(--_warning);
}

.sigma-level.lv-low,
.sigma-level.lv-informational {
  border: 1px solid var(--_info);
  color: var(--_info);
}

.sigma-verdict {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  margin-inline-start: auto;
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.sigma-verdict.danger {
  color: var(--_danger);
}

.sigma-verdict.warning {
  color: var(--_warning);
}

.sigma-verdict.none {
  color: var(--_success);
}

.sigma-verdict svg,
.sigma-finding svg {
  flex: none;
  width: 14px;
  height: 14px;
}

.sigma-description {
  margin: 0;
  overflow-wrap: anywhere;
}

.sigma-label {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.sigma-muted {
  color: var(--_fg-muted);
}

.sigma-facts {
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  gap: 2px var(--_space-3);
  margin: 0;
}

.sigma-facts dt {
  color: var(--_fg-muted);
}

.sigma-facts dd {
  margin: 0;
  overflow-wrap: anywhere;
}

.sigma-facts code,
.sigma-items code,
.sigma-values code,
.sigma-cond-line code,
.sigma-list code,
.sigma-search-head code {
  font-family: var(--_font-mono);
}

.sigma-id {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1);
}

.sigma-logsource {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1);
}

.sigma-chip {
  padding: 0 var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  font-size: var(--_font-size-small);
}

.sigma-chip.warn {
  border-color: var(--_warning);
  color: var(--_warning);
}

.sigma-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

.sigma-tags li {
  padding: 1px var(--_space-2);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  font-size: var(--_font-size-small);
}

.sigma-tags .tag-technique,
.sigma-tags .tag-tactic {
  font-weight: 600;
}

.sigma-tags .tag-cve {
  color: var(--_danger);
}

.sigma-tags a {
  color: var(--_accent-fg);
}

.sigma-findings {
  display: grid;
  gap: var(--_space-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

.sigma-finding {
  display: flex;
  align-items: flex-start;
  gap: var(--_space-2);
  overflow-wrap: anywhere;
}

.sigma-finding svg {
  margin-top: 3px;
}

.sigma-finding.danger {
  font-weight: 600;
}

.sigma-finding.danger svg {
  color: var(--_danger);
}

.sigma-finding.warning svg {
  color: var(--_warning);
}

.sigma-finding.info svg {
  color: var(--_info);
}

.sigma-detection {
  display: grid;
  gap: var(--_space-3);
}

.sigma-search {
  display: grid;
  gap: var(--_space-1);
  padding: var(--_space-2) var(--_space-3);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
}

.sigma-search-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--_space-1) var(--_space-2);
  margin: 0;
}

.sigma-scroll {
  overflow-x: auto;
}

.sigma-or {
  margin: var(--_space-1) 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 700;
  text-transform: uppercase;
}

.sigma-items {
  width: 100%;
  border-collapse: collapse;
}

.sigma-items th,
.sigma-items td {
  padding: 4px var(--_space-3) 4px 0;
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
}

.sigma-items thead th {
  color: var(--_fg-muted);
  font-weight: 500;
}

.sigma-items tbody tr:last-child > * {
  border-bottom: 0;
}

.sigma-items tbody th {
  font-weight: 600;
  white-space: nowrap;
}

.sigma-mods {
  color: var(--_fg-muted);
}

.sigma-values {
  display: flex;
  flex-wrap: wrap;
  gap: 2px var(--_space-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

.sigma-values li {
  overflow-wrap: anywhere;
}

.sigma-values li[data-joiner]::before {
  content: attr(data-joiner);
  margin-inline-end: var(--_space-1);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.sigma-values code {
  padding: 0 4px;
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
  color: var(--_syntax-string);
  white-space: pre-wrap;
}

.sigma-condition {
  display: grid;
  gap: var(--_space-1);
}

.sigma-cond-line {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--_space-2);
  margin: 0;
}

.sigma-cond-line code {
  padding: 2px var(--_space-2);
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
  color: var(--_code-fg);
  overflow-wrap: anywhere;
}

.s-op {
  color: var(--_syntax-keyword);
  font-weight: 600;
}

.s-name {
  color: var(--_syntax-function);
}

.s-name.unknown {
  color: var(--_danger);
  text-decoration: wavy underline;
}

.sigma-tree p {
  margin: 0;
}

.sigma-tree ul {
  margin: 2px 0;
  padding-inline-start: 1.25em;
}

.sigma-list {
  display: grid;
  gap: var(--_space-1);
}

.sigma-list ul,
.sigma-refs ul {
  margin: 0;
  padding-inline-start: 1.25em;
}

.sigma-refs summary {
  cursor: pointer;
  font-weight: 600;
}

.sigma-refs li {
  overflow-wrap: anywhere;
}

.sigma-refs a {
  color: var(--_accent-fg);
}

.sigma-source {
  overflow: auto;
}

.sigma-edit > .editor-body {
  max-height: min(45vh, 360px);
  border-bottom: 1px solid var(--_border);
}
`;var $=Object.freeze({sigmaRules:"{count} rules",sigmaTabs:"Sigma views",sigmaTabRules:"Rules ({count})",sigmaTabSource:"Source",sigmaEmpty:"No Sigma rule.",sigmaLoading:"Loading the YAML reader\u2026",sigmaInvalid:"The YAML cannot be read: {message}",sigmaCapped:"Only the first {count} rules are read.",sigmaUntitled:"Untitled rule",sigmaType_correlation:"Correlation rule",sigmaType_filter:"Filter",sigmaType_global:"Global part",sigmaLevel:"Level",sigmaLevel_informational:"Informational",sigmaLevel_low:"Low",sigmaLevel_medium:"Medium",sigmaLevel_high:"High",sigmaLevel_critical:"Critical",sigmaStatus:"Status",sigmaId:"Identifier",sigmaAuthor:"Author",sigmaDate:"Date",sigmaModified:"Modified",sigmaLicense:"License",sigmaLogsource:"Log source",sigmaTags:"Tags",sigmaTag_tactic:"ATT&CK tactic",sigmaTag_technique:"ATT&CK technique",sigmaTag_group:"ATT&CK group",sigmaTag_software:"ATT&CK software",sigmaTag_cve:"Vulnerability",sigmaReferences:"References",sigmaDetection:"Detection",sigmaSearchMap:"Every field matches",sigmaSearchList:"One of these {count} sets matches",sigmaSearchKeywords:"One of these keywords appears anywhere in the event",sigmaUnused:"unused",sigmaField:"Field",sigmaMatch:"Match",sigmaValues:"Values",sigmaAnd:"and",sigmaOr:"or",sigmaNull:"empty or missing",sigmaCondition:"Condition",sigmaTimeframe:"Within {time}",sigmaReadsAs:"Matches when",sigmaNode_and:"All of these:",sigmaNode_or:"One of these:",sigmaNode_not:"Not:",sigmaNode_one:"One of {pattern}: {names}",sigmaNode_all:"All of {pattern}: {names}",sigmaNode_none:"nothing",sigmaFalsePositives:"False positives",sigmaFields:"Fields to show",sigmaRelated:"Related rules",sigmaCorrelation:"Correlation",sigmaFindings:"Problems",sigmaProblems:"{count} problems",sigmaProblem:"1 problem",sigmaNoProblem:"No problem",sigmaCopyRules:"Copy the rules",sigmaCopyId:"Copy the identifier",sigmaMod_equals:"equals",sigmaMod_contains:"contains",sigmaMod_startswith:"starts with",sigmaMod_endswith:"ends with",sigmaMod_all:"every value, not just one",sigmaMod_base64:"encoded in base64",sigmaMod_base64offset:"inside base64 text (any offset)",sigmaMod_utf16le:"as UTF-16 LE",sigmaMod_utf16be:"as UTF-16 BE",sigmaMod_utf16:"as UTF-16 with BOM",sigmaMod_wide:"as UTF-16 LE",sigmaMod_windash:"with - or / or other dashes for options",sigmaMod_re:"matches the regular expression",sigmaMod_i:"case-insensitive",sigmaMod_m:"multiline",sigmaMod_s:"dot matches line breaks",sigmaMod_cidr:"in the network",sigmaMod_exists:"the field exists",sigmaMod_expand:"placeholder filled by the backend",sigmaMod_fieldref:"equals the field",sigmaMod_gt:"greater than",sigmaMod_gte:"at least",sigmaMod_lt:"less than",sigmaMod_lte:"at most",sigmaMod_cased:"case-sensitive",sigmaFinding_noTitle:"No title.",sigmaFinding_noLogsource:"No logsource: no backend can tell which logs to search.",sigmaFinding_noDetection:"No detection.",sigmaFinding_noCondition:"The detection has no condition.",sigmaFinding_badCondition:"The condition \u201C{condition}\u201D cannot be read (near {near}).",sigmaFinding_unknownSearch:"The condition names {name}, which is not in the detection.",sigmaFinding_emptyPattern:"{pattern} matches no search of the detection.",sigmaFinding_unusedSearch:"{name} is never used in the condition.",sigmaFinding_unknownModifier:"{field}: {modifier} is not a Sigma modifier.",sigmaFinding_badRegex:"{field}: the regular expression may be invalid.",sigmaFinding_wildcardModifier:"{field}: a * next to contains, startswith or endswith adds nothing.",sigmaFinding_allSingle:"{field}: |all with a single value adds nothing.",sigmaFinding_badLevel:"\u201C{level}\u201D is not a Sigma level (informational, low, medium, high, critical).",sigmaFinding_badStatus:"\u201C{status}\u201D is not a Sigma status (stable, test, experimental, deprecated, unsupported).",sigmaFinding_deprecated:"The rule is {status}: it should not be deployed.",sigmaFinding_badId:"The identifier {id} is not a UUID.",sigmaFinding_oldDate:"The date {date} uses the old format: write YYYY-MM-DD.",sigmaFinding_badDate:"The date {date} is not YYYY-MM-DD.",sigmaFinding_tagCase:"The tag {tag} should be lowercase."}),J={sigmaRules:"{count} r\xE8gles",sigmaTabs:"Vues Sigma",sigmaTabRules:"R\xE8gles ({count})",sigmaTabSource:"Source",sigmaEmpty:"Aucune r\xE8gle Sigma.",sigmaLoading:"Chargement du lecteur YAML\u2026",sigmaInvalid:"Le YAML est illisible : {message}",sigmaCapped:"Seules les {count} premi\xE8res r\xE8gles sont lues.",sigmaUntitled:"R\xE8gle sans titre",sigmaType_correlation:"R\xE8gle de corr\xE9lation",sigmaType_filter:"Filtre",sigmaType_global:"Partie commune",sigmaLevel:"Niveau",sigmaLevel_informational:"Information",sigmaLevel_low:"Faible",sigmaLevel_medium:"Moyen",sigmaLevel_high:"\xC9lev\xE9",sigmaLevel_critical:"Critique",sigmaStatus:"Statut",sigmaId:"Identifiant",sigmaAuthor:"Auteur",sigmaDate:"Date",sigmaModified:"Modifi\xE9e",sigmaLicense:"Licence",sigmaLogsource:"Source des journaux",sigmaTags:"\xC9tiquettes",sigmaTag_tactic:"Tactique ATT&CK",sigmaTag_technique:"Technique ATT&CK",sigmaTag_group:"Groupe ATT&CK",sigmaTag_software:"Logiciel ATT&CK",sigmaTag_cve:"Vuln\xE9rabilit\xE9",sigmaReferences:"R\xE9f\xE9rences",sigmaDetection:"D\xE9tection",sigmaSearchMap:"Tous les champs correspondent",sigmaSearchList:"Un de ces {count} ensembles correspond",sigmaSearchKeywords:"Un de ces mots-cl\xE9s appara\xEEt n\u2019importe o\xF9 dans l\u2019\xE9v\xE9nement",sigmaUnused:"inutilis\xE9e",sigmaField:"Champ",sigmaMatch:"Correspondance",sigmaValues:"Valeurs",sigmaAnd:"et",sigmaOr:"ou",sigmaNull:"vide ou absent",sigmaCondition:"Condition",sigmaTimeframe:"En {time}",sigmaReadsAs:"Correspond quand",sigmaNode_and:"Tout ceci :",sigmaNode_or:"Un de ceux-ci :",sigmaNode_not:"Pas :",sigmaNode_one:"Un de {pattern} : {names}",sigmaNode_all:"Tous les {pattern} : {names}",sigmaNode_none:"rien",sigmaFalsePositives:"Faux positifs",sigmaFields:"Champs \xE0 afficher",sigmaRelated:"R\xE8gles li\xE9es",sigmaCorrelation:"Corr\xE9lation",sigmaFindings:"Probl\xE8mes",sigmaProblems:"{count} probl\xE8mes",sigmaProblem:"1 probl\xE8me",sigmaNoProblem:"Aucun probl\xE8me",sigmaCopyRules:"Copier les r\xE8gles",sigmaCopyId:"Copier l\u2019identifiant",sigmaMod_equals:"\xE9gal \xE0",sigmaMod_contains:"contient",sigmaMod_startswith:"commence par",sigmaMod_endswith:"finit par",sigmaMod_all:"toutes les valeurs, pas une seule",sigmaMod_base64:"encod\xE9 en base64",sigmaMod_base64offset:"dans un texte base64 (tout d\xE9calage)",sigmaMod_utf16le:"en UTF-16 LE",sigmaMod_utf16be:"en UTF-16 BE",sigmaMod_utf16:"en UTF-16 avec BOM",sigmaMod_wide:"en UTF-16 LE",sigmaMod_windash:"avec - ou / ou d\u2019autres tirets pour les options",sigmaMod_re:"correspond \xE0 l\u2019expression r\xE9guli\xE8re",sigmaMod_i:"sans tenir compte de la casse",sigmaMod_m:"multiligne",sigmaMod_s:"le point couvre les retours \xE0 la ligne",sigmaMod_cidr:"dans le r\xE9seau",sigmaMod_exists:"le champ existe",sigmaMod_expand:"valeur remplie par le backend",sigmaMod_fieldref:"\xE9gal au champ",sigmaMod_gt:"sup\xE9rieur \xE0",sigmaMod_gte:"au moins",sigmaMod_lt:"inf\xE9rieur \xE0",sigmaMod_lte:"au plus",sigmaMod_cased:"sensible \xE0 la casse",sigmaFinding_noTitle:"Pas de titre.",sigmaFinding_noLogsource:"Pas de logsource : aucun backend ne sait quels journaux chercher.",sigmaFinding_noDetection:"Pas de d\xE9tection.",sigmaFinding_noCondition:"La d\xE9tection n\u2019a pas de condition.",sigmaFinding_badCondition:"La condition \xAB {condition} \xBB est illisible (vers {near}).",sigmaFinding_unknownSearch:"La condition nomme {name}, absent de la d\xE9tection.",sigmaFinding_emptyPattern:"{pattern} ne d\xE9signe aucune recherche de la d\xE9tection.",sigmaFinding_unusedSearch:"{name} n\u2019est jamais utilis\xE9 dans la condition.",sigmaFinding_unknownModifier:"{field} : {modifier} n\u2019est pas un modificateur Sigma.",sigmaFinding_badRegex:"{field} : l\u2019expression r\xE9guli\xE8re est peut-\xEAtre invalide.",sigmaFinding_wildcardModifier:"{field} : un * \xE0 c\xF4t\xE9 de contains, startswith ou endswith n\u2019ajoute rien.",sigmaFinding_allSingle:"{field} : |all avec une seule valeur n\u2019ajoute rien.",sigmaFinding_badLevel:"\xAB {level} \xBB n\u2019est pas un niveau Sigma (informational, low, medium, high, critical).",sigmaFinding_badStatus:"\xAB {status} \xBB n\u2019est pas un statut Sigma (stable, test, experimental, deprecated, unsupported).",sigmaFinding_deprecated:"La r\xE8gle est {status} : elle ne devrait pas \xEAtre d\xE9ploy\xE9e.",sigmaFinding_badId:"L\u2019identifiant {id} n\u2019est pas un UUID.",sigmaFinding_oldDate:"La date {date} suit l\u2019ancien format : \xE9crire AAAA-MM-JJ.",sigmaFinding_badDate:"La date {date} n\u2019est pas au format AAAA-MM-JJ.",sigmaFinding_tagCase:"L\u2019\xE9tiquette {tag} devrait \xEAtre en minuscules."};var V=Object.freeze(["informational","low","medium","high","critical"]),se=Object.freeze(["stable","test","experimental","deprecated","unsupported"]),te=new Set(["contains","startswith","endswith","all","base64","base64offset","utf16le","utf16be","utf16","wide","windash","re","i","m","s","cidr","exists","expand","fieldref","gt","gte","lt","lte","cased","minute","hour","day","week","month","year"]),G=Object.freeze({reconnaissance:"TA0043",resource_development:"TA0042",initial_access:"TA0001",execution:"TA0002",persistence:"TA0003",privilege_escalation:"TA0004",defense_evasion:"TA0005",credential_access:"TA0006",discovery:"TA0007",lateral_movement:"TA0008",collection:"TA0009",command_and_control:"TA0011",exfiltration:"TA0010",impact:"TA0040"}),_=s=>typeof s=="object"&&s!==null&&!Array.isArray(s),p=s=>s instanceof Date&&!Number.isNaN(s.getTime())?s.toISOString().slice(0,10):typeof s=="string"||typeof s=="number"||typeof s=="boolean"?String(s):"",x=s=>(Array.isArray(s)?s:s==null?[]:[s]).map(p).filter(Boolean);function ne(s){let e=s.trim(),i=e.toLowerCase(),a=/^attack\.t(\d{4})(?:\.(\d{3}))?$/.exec(i);if(a)return{raw:e,label:`T${a[1]}${a[2]?`.${a[2]}`:""}`,kind:"technique",url:`https://attack.mitre.org/techniques/T${a[1]}/${a[2]?`${a[2]}/`:""}`};if(a=/^attack\.([a-z_]+)$/.exec(i),a&&Object.hasOwn(G,a[1])){let n=G[a[1]],r=a[1].split("_").map(d=>d==="and"?d:d[0].toUpperCase()+d.slice(1)).join(" ");return{raw:e,label:r,kind:"tactic",url:`https://attack.mitre.org/tactics/${n}/`}}return a=/^attack\.([gs])(\d{4})$/.exec(i),a?{raw:e,label:`${a[1].toUpperCase()}${a[2]}`,kind:a[1]==="g"?"group":"software",url:`https://attack.mitre.org/${a[1]==="g"?"groups":"software"}/${a[1].toUpperCase()}${a[2]}/`}:(a=/^cve\.(\d{4})[.-](\d{4,7})$/.exec(i),a?{raw:e,label:`CVE-${a[1]}-${a[2]}`,kind:"cve",url:`https://nvd.nist.gov/vuln/detail/CVE-${a[1]}-${a[2]}`}:{raw:e,label:e,kind:"other",url:""})}function W(s){return(Array.isArray(s)?s:[s]).map(i=>i===null||typeof i=="number"||typeof i=="boolean"?i:i instanceof Date?p(i):typeof i=="string"?i:JSON.stringify(i))}function H(s){return Object.entries(s).map(([e,i])=>{let[a,...n]=e.split("|");return{field:a,modifiers:n,values:W(i)}})}function re(s,e){return _(e)?{name:s,kind:"map",groups:[H(e)],used:!1}:Array.isArray(e)&&e.length&&e.every(_)?{name:s,kind:"list",groups:e.map(i=>H(i)),used:!1}:{name:s,kind:"keywords",groups:[[{field:"",modifiers:[],values:W(e)}]],used:!1}}function oe(s,e){let i=s.match(/\(|\)|[^\s()]+/g)??[],a=0,n=()=>i[a]?.toLowerCase(),r=g=>{throw new Error(g)},d=()=>{let g=[m()];for(;n()==="or";)a+=1,g.push(m());return g.length>1?{type:"or",children:g}:g[0]},m=()=>{let g=[u()];for(;n()==="and";)a+=1,g.push(u());return g.length>1?{type:"and",children:g}:g[0]},u=()=>n()==="not"?(a+=1,{type:"not",child:u()}):o(),o=()=>{let g=i[a];if(g===void 0&&r("end"),g==="("){a+=1;let w=d();return i[a]!==")"&&r(")"),a+=1,w}if((g==="1"||g.toLowerCase()==="all"||g.toLowerCase()==="any")&&i[a+1]?.toLowerCase()==="of"){let w=i[a+2];return(!w||w==="("||w===")")&&r("of"),a+=3,{type:"of",quantity:g.toLowerCase()==="all"?"all":"1",pattern:w,names:le(w,e)}}return/^(and|or|not|of|\))$/i.test(g)&&r(g),a+=1,{type:"search",name:g}},c=d();return a<i.length&&r(i[a]),c}function le(s,e){if(s.toLowerCase()==="them")return e.filter(a=>!a.startsWith("_"));if(!s.includes("*"))return e.filter(a=>a===s);let i=new RegExp(`^${s.replace(/[.+?^${}()|[\]\\]/g,"\\$&").replace(/\*/g,".*")}$`);return e.filter(a=>i.test(a))}function N(s){return s.type==="search"?[s.name]:s.type==="of"?s.names:s.type==="not"?N(s.child):s.children.flatMap(N)}function R(s,e,i){s.type==="search"&&!e.has(s.name)?i({id:"unknownSearch",level:"danger",params:{name:s.name}}):s.type==="of"&&!s.names.length?i({id:"emptyPattern",level:"danger",params:{pattern:s.pattern}}):s.type==="not"?R(s.child,e,i):(s.type==="and"||s.type==="or")&&s.children.forEach(a=>R(a,e,i))}function de(s){if(!_(s))return null;let e=[],i=l=>e.push(l),a=_(s.detection)?s.detection:null,n=p(s.action),r=_(s.correlation)?"correlation":_(s.filter)?"filter":n==="global"?"global":"rule",d=_(s.logsource)?Object.fromEntries(Object.entries(s.logsource).map(([l,f])=>[l,p(f)]).filter(([,l])=>l)):{},m=[],u=[],o=p(s.timeframe),c=a??(r==="filter"&&_(s.filter)?s.filter:null);if(c)for(let[l,f]of Object.entries(c))l==="condition"?u=x(f):l==="timeframe"?o=p(f):(r!=="filter"||l!=="rules")&&m.push(re(l,f));let g=m.map(l=>l.name),w=u.map(l=>{try{let f=oe(l,g);R(f,new Set(g),i);for(let h of N(f)){let v=m.find(ie=>ie.name===h);v&&(v.used=!0)}return f}catch(f){return i({id:"badCondition",level:"danger",params:{condition:l,near:f instanceof Error?f.message:""}}),null}}),S=p(s.title),M=p(s.id),b=p(s.status),L=p(s.level),y=p(s.date);if(S||i({id:"noTitle",level:"danger",params:{}}),r==="rule"||r==="global"){!Object.keys(d).length&&r==="rule"&&i({id:"noLogsource",level:"danger",params:{}}),!a&&r==="rule"?i({id:"noDetection",level:"danger",params:{}}):a&&!u.length&&i({id:"noCondition",level:"danger",params:{}});for(let l of m)!l.used&&u.length&&i({id:"unusedSearch",level:"warning",params:{name:l.name}})}for(let l of m)for(let f of l.groups)for(let h of f){for(let v of h.modifiers)te.has(v)||i({id:"unknownModifier",level:"warning",params:{field:h.field,modifier:v}});if(h.modifiers.includes("re"))for(let v of h.values)try{typeof v=="string"&&new RegExp(v)}catch{i({id:"badRegex",level:"warning",params:{field:h.field}})}h.modifiers.some(v=>["contains","startswith","endswith"].includes(v))&&h.values.some(v=>typeof v=="string"&&/^\*|(?<!\\)\*$/.test(v))&&i({id:"wildcardModifier",level:"info",params:{field:h.field}}),h.modifiers.includes("all")&&h.values.length<2&&i({id:"allSingle",level:"info",params:{field:h.field}})}L&&!V.includes(L)&&i({id:"badLevel",level:"warning",params:{level:L}}),b&&!se.includes(b)&&i({id:"badStatus",level:"warning",params:{status:b}}),(b==="deprecated"||b==="unsupported")&&i({id:"deprecated",level:"warning",params:{status:b}}),M&&!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(M)&&i({id:"badId",level:"warning",params:{id:M}}),y&&/^\d{4}\/\d{2}\/\d{2}$/.test(y)?i({id:"oldDate",level:"info",params:{date:y}}):y&&!/^\d{4}-\d{2}-\d{2}$/.test(y)&&i({id:"badDate",level:"warning",params:{date:y}});let E=x(s.tags).map(ne);for(let l of E)l.raw!==l.raw.toLowerCase()&&i({id:"tagCase",level:"info",params:{tag:l.raw}});return{type:r,title:S,id:M,status:b,level:L,description:p(s.description),author:x(s.author).join(", "),date:y,modified:p(s.modified),license:p(s.license),references:x(s.references),tags:E,logsource:d,searches:m,conditions:u,trees:w,timeframe:o,falsepositives:x(s.falsepositives),fields:x(s.fields),related:(Array.isArray(s.related)?s.related:[]).filter(_).map(l=>({id:p(l.id),type:p(l.type)})),correlation:_(s.correlation)?s.correlation:null,findings:e}}function X(s){let e=[],i=null;for(let a of s){if(e.length>=200)return{rules:e,capped:!0};if(!_(a))continue;if(a.action==="global"){i=a;continue}if(a.action==="reset"){i=null;continue}let n=i?Q(i,a):a,r=de(n);r&&e.push(r)}return{rules:e,capped:!1}}function Q(s,e){let i={...s};delete i.action;for(let[a,n]of Object.entries(e)){let r=i[a];i[a]=_(r)&&_(n)?Q(r,n):n}return i}function Z(s){return s.findings.some(e=>e.level==="danger")?"danger":s.findings.some(e=>e.level==="warning")?"warning":"none"}I({en:$,fr:J});var ge=Object.freeze(["rules","source"]),ee=class extends z{static type="sigma";static componentAttributes=Object.freeze(["view","lint","links","tabs"]);static presets={simple:{tabs:!0},full:{header:!0,dot:!0,copy:!0,fullscreen:!0,tabs:!0}};static styles=[K];static upgradeProperties=["content"];constructor(){super(),this.panelId=j("panel"),this.viewState=null,this.parsed=null,this.editor=null,this.previewTimer=void 0}parse(){let e=this.text??"";if(this.parsed?.text===e&&!this.parsed.pending)return this.parsed;let i=e.trim(),a=n=>({text:e,...X(n),error:"",pending:!1});if(!i)return this.parsed=a([]);try{if(/^[[{]/.test(i)){let r=JSON.parse(i);return this.parsed=a(Array.isArray(r)?r:[r])}let n=Y();return!n.ready||!n.parseAll?(n.promise.then(()=>this.requestRender(),r=>{this.parsed={text:e,rules:[],capped:!1,error:String(r?.message??r),pending:!1},this.requestRender()}),this.parsed={text:e,rules:[],capped:!1,error:"",pending:!0}):this.parsed=a(n.parseAll(i))}catch(n){let r=n instanceof Error?n.message:String(n);return this.parsed={text:e,rules:[],capped:!1,error:r.slice(0,300),pending:!1}}}get rules(){return this.parse().rules}get view(){return this.viewState??U(this.getAttribute("view"),ge,"rules")}flag(e,i){return O(this.getAttribute(e))??i}link(e,i,a){return i&&this.flag("links",!0)&&/^https?:\/\//i.test(i)&&D(i)?t("a",{text:e,attrs:{href:i,rel:"noopener noreferrer",target:"_blank",title:a??null}}):t("span",{text:e,attrs:{title:a??null}})}renderContent(e){let i=this.t,a=this.parse(),n=this.feature("tabs")?q({tabs:[{id:"rules",label:i("sigmaTabRules",{count:a.rules.length})},{id:"source",label:i("sigmaTabSource")}],selected:this.view,label:i("sigmaTabs"),panelId:this.panelId,onSelect:c=>this.selectView(c)}):null,r=t("div",{class:"body sigma-body",part:"body"});if(this.view==="source"&&n){let c=P(this.text??"",{language:"yaml",lineNumbers:!0,startLine:1,highlightRanges:[],diff:!1,highlightLimit:A().highlightLimit});r.append(t("div",{class:"sigma-source",part:"source"},c.element))}else if(a.pending)r.append(T(i("sigmaLoading")));else if(a.error)r.append(T(i("sigmaInvalid",{message:a.error})));else if(!a.rules.length)r.append(T(i("sigmaEmpty")));else{for(let c of a.rules)r.append(this.ruleView(c));a.capped&&r.append(T(i("sigmaCapped",{count:a.rules.length})))}let d=t("div",{class:"panel",attrs:{id:this.panelId,role:n?"tabpanel":null}}),m=[];if(this.editing){let c=this.createEditor();d.classList.add("sigma-edit"),d.append(t("div",{class:"body editor-body",part:"body editor"},c.element),r),m=this.historyButtons(c)}else d.append(r);let u=[...m,this.editToggleButton(),this.fullscreenButton(),this.feature("copy")&&this.text?this.copyButton(()=>this.text??"",i("sigmaCopyRules")):null],o=a.rules.length>1?`Sigma \xB7 ${i("sigmaRules",{count:a.rules.length})}`:"Sigma";e.append(...this.chrome({badge:o,tabs:n,actions:u}),d),this.editor?.align()}selectView(e){e!==this.view&&(this.viewState=e,this.render(),this.root.querySelector(`[data-tab="${e}"]`)?.focus(),F(this,C.TAB_CHANGE,{tab:e}))}ruleView(e){let i=this.t,a=this.flag("lint",!0),n=V.includes(e.level)?e.level:"",r=Z(e),d=e.findings.filter(o=>o.level!=="info").length,m=[["sigmaStatus",e.status],["sigmaAuthor",e.author],["sigmaDate",e.date],["sigmaModified",e.modified],["sigmaLicense",e.license],["sigmaId",e.id?t("span",{class:"sigma-id"},t("code",{text:e.id}),this.feature("copy")?this.copyTextButton(()=>e.id,i("sigmaCopyId"),`copy-id-${e.id}`):null):""]],u=Object.entries(e.logsource);return t("section",{class:`sigma-rule lv-${n||"none"}`,part:"rule",attrs:{"aria-label":e.title||i("sigmaUntitled")}},t("header",{class:"sigma-head"},t("h3",{class:"sigma-title",text:e.title||i("sigmaUntitled")}),e.type!=="rule"?t("span",{class:"sigma-chip",text:i(`sigmaType_${e.type}`)}):null,n?t("span",{class:`sigma-level lv-${n}`,part:"level"},t("span",{class:"sr-only",text:`${i("sigmaLevel")} `}),i(`sigmaLevel_${n}`)):null,a?t("span",{class:`sigma-verdict ${r}`},k(r==="none"?"check":"alert"),t("span",{text:d?d===1?i("sigmaProblem"):i("sigmaProblems",{count:d}):i("sigmaNoProblem")})):null),e.description?t("p",{class:"sigma-description",text:e.description}):null,a&&e.findings.length?this.findingsView(e.findings):null,t("dl",{class:"sigma-facts"},...m.filter(([,o])=>o).flatMap(([o,c])=>[t("dt",{text:i(o)}),t("dd",{},c)]),...u.length?[t("dt",{text:i("sigmaLogsource")}),t("dd",{class:"sigma-logsource"},...u.map(([o,c])=>t("span",{class:"sigma-chip"},t("span",{class:"sigma-muted",text:`${o}: `}),t("code",{text:c}))))]:[]),e.tags.length?t("ul",{class:"sigma-tags",part:"tags",attrs:{"aria-label":i("sigmaTags")}},...e.tags.map(o=>t("li",{class:`tag-${o.kind}`},o.kind==="other"?t("code",{text:o.raw}):this.link(o.label,o.url,`${i(`sigmaTag_${o.kind}`)} \xB7 ${o.raw}`)))):null,e.searches.length?this.detectionView(e):null,e.correlation?this.correlationView(e.correlation):null,this.listView("sigmaFalsePositives",e.falsepositives),this.listView("sigmaFields",e.fields,!0),e.related.length?this.listView("sigmaRelated",e.related.map(o=>`${o.type}: ${o.id}`),!0):null,e.references.length?t("details",{class:"sigma-refs"},t("summary",{text:`${i("sigmaReferences")} (${e.references.length})`}),t("ul",{},...e.references.map(o=>t("li",{},this.link(o,o))))):null)}listView(e,i,a=!1){return i.length?t("div",{class:"sigma-list"},t("p",{class:"sigma-label",text:this.t(e)}),t("ul",{},...i.map(n=>t("li",{},a?t("code",{text:n}):n)))):null}detectionView(e){let i=this.t;return t("div",{class:"sigma-detection"},t("p",{class:"sigma-label",text:i("sigmaDetection")}),...e.searches.map(a=>this.searchView(a,e.conditions.length>0)),...e.conditions.map((a,n)=>t("div",{class:"sigma-condition",part:"condition"},t("p",{class:"sigma-cond-line"},t("span",{class:"sigma-label",text:i("sigmaCondition")}),t("code",{},...this.conditionTokens(a,e))),e.timeframe?t("p",{class:"sigma-muted",text:i("sigmaTimeframe",{time:e.timeframe})}):null,e.trees[n]?t("div",{class:"sigma-tree"},t("p",{class:"sigma-muted",text:i("sigmaReadsAs")}),t("ul",{},this.nodeView(e.trees[n]))):null)))}conditionTokens(e,i){let a=new Set(i.searches.map(n=>n.name));return(e.match(/\s+|\(|\)|[^\s()]+/g)??[]).map(n=>/^\s+$/.test(n)||n==="("||n===")"?n:/^(and|or|not|of|them|all|any|1)$/i.test(n)?t("span",{class:"s-op",text:n}):t("span",{class:a.has(n)||n.includes("*")?"s-name":"s-name unknown",text:n}))}nodeView(e){let i=this.t;return e.type==="search"?t("li",{},t("code",{class:"s-name",text:e.name})):e.type==="of"?t("li",{text:i(e.quantity==="all"?"sigmaNode_all":"sigmaNode_one",{pattern:e.pattern,names:e.names.join(", ")||i("sigmaNode_none")})}):e.type==="not"?t("li",{},t("span",{class:"s-op",text:i("sigmaNode_not")}),t("ul",{},this.nodeView(e.child))):t("li",{},t("span",{class:"s-op",text:i(e.type==="and"?"sigmaNode_and":"sigmaNode_or")}),t("ul",{},...e.children.map(a=>this.nodeView(a))))}searchView(e,i){let a=this.t,n=t("p",{class:"sigma-search-head"},t("code",{class:"s-name",text:e.name}),t("span",{class:"sigma-muted",text:e.kind==="map"?a("sigmaSearchMap"):e.kind==="list"?a("sigmaSearchList",{count:e.groups.length}):a("sigmaSearchKeywords")}),i&&!e.used?t("span",{class:"sigma-chip warn",text:a("sigmaUnused")}):null);return e.kind==="keywords"?t("div",{class:"sigma-search",part:"search",attrs:{"data-search":e.name}},n,this.valuesView(e.groups[0][0],"or")):t("div",{class:"sigma-search",part:"search",attrs:{"data-search":e.name}},n,...e.groups.map((r,d)=>t("div",{class:"sigma-scroll"},e.groups.length>1&&d?t("p",{class:"sigma-or",text:a("sigmaOr")}):null,t("table",{class:"sigma-items"},t("thead",{},t("tr",{},...[a("sigmaField"),a("sigmaMatch"),a("sigmaValues")].map(m=>t("th",{attrs:{scope:"col"},text:m})))),t("tbody",{},...r.map(m=>t("tr",{},t("th",{attrs:{scope:"row"}},t("code",{text:m.field})),t("td",{class:"sigma-mods",text:this.modifierText(m)}),t("td",{},this.valuesView(m,m.modifiers.includes("all")?"and":"or")))))))))}modifierText(e){let i=this.t;return(e.modifiers.length?e.modifiers:["equals"]).map(n=>{let r=`sigmaMod_${n}`;return Object.hasOwn($,r)?i(r):n}).join(", ")}valuesView(e,i){let a=this.t,n=e.values.slice(0,200),r=a(i==="and"?"sigmaAnd":"sigmaOr");return t("ul",{class:`sigma-values ${i}`},...n.map((d,m)=>t("li",{attrs:{"data-joiner":m?r:null}},d===null?t("em",{text:a("sigmaNull")}):t("code",{text:String(d)}))))}correlationView(e){let i=Object.entries(e).map(([a,n])=>[a,typeof n=="string"||typeof n=="number"?String(n):JSON.stringify(n)]);return t("div",{class:"sigma-list"},t("p",{class:"sigma-label",text:this.t("sigmaCorrelation")}),t("dl",{class:"sigma-facts"},...i.flatMap(([a,n])=>[t("dt",{text:a}),t("dd",{},t("code",{text:n.slice(0,500)}))])))}findingsView(e){let i=this.t;return t("ul",{class:"sigma-findings",part:"findings",attrs:{"aria-label":i("sigmaFindings")}},...e.map(a=>t("li",{class:`sigma-finding ${a.level}`,attrs:{"data-finding":a.id}},k(a.level==="info"?"help":"alert"),t("span",{text:i(`sigmaFinding_${a.id}`,a.params)}))))}createEditor(){return this.editor?.destroy(),this.editor=new B({text:this.text??"",language:"yaml",lineNumbers:!0,wrap:!1,highlightLimit:A().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>F(this,C.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),400)}};export{ee as a};
