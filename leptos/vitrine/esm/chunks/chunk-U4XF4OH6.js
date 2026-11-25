/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{r as P}from"./chunk-37OSRZJK.js";import{O as S,X as E,_ as N,ba as W,c as R,e as T,o as d,q as L}from"./chunk-JAZI474S.js";import{h as I,k as w,l as A,m as O}from"./chunk-SCKP2KTO.js";var j=`/*
 * YARA rules: a card per rule with its tags, problems, meta, strings and condition, the
 * condition read in words, and the colored source. Problems are written in words; colors
 * only repeat them.
 */
.yara-body {
  display: grid;
  gap: var(--_space-4);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.yara-header {
  display: grid;
  gap: var(--_space-1);
}

.yara-imports {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--_space-1) var(--_space-3);
  margin: 0;
}

.yara-imports code,
.yara-name code,
.yara-meta dd,
.yara-strings code,
.yara-mods code {
  font-family: var(--_font-mono);
}

.yara-label {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  letter-spacing: 0.02em;
  text-align: start;
  text-transform: uppercase;
}

.yara-rule {
  display: grid;
  gap: var(--_space-3);
  min-width: 0;
  padding: var(--_space-3);
  border: 1px solid var(--_border);
  border-inline-start: 3px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
}

.yara-rule.danger {
  border-inline-start-color: var(--_danger);
}

.yara-rule.warning {
  border-inline-start-color: var(--_warning);
}

.yara-rule.none {
  border-inline-start-color: var(--_success);
}

.yara-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2);
}

.yara-name {
  margin: 0;
  font-size: 1.05em;
  overflow-wrap: anywhere;
}

.yara-flag,
.yara-tag {
  padding: 0 6px;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.yara-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

.yara-tags li {
  padding: 0 var(--_space-2);
  border-radius: var(--_radius-full);
  background: var(--_surface-sunken);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
}

.yara-verdict {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  margin-inline-start: auto;
  padding: 1px var(--_space-2);
  border: 1px solid currentColor;
  border-radius: var(--_radius-full);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.yara-verdict.danger {
  color: var(--_danger);
}

.yara-verdict.warning {
  color: var(--_warning);
}

.yara-verdict.none {
  color: var(--_success);
}

.yara-verdict svg,
.yara-finding svg {
  flex: none;
  width: 14px;
  height: 14px;
}

.yara-findings {
  display: grid;
  gap: var(--_space-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

.yara-finding {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--_space-1) var(--_space-2);
  overflow-wrap: anywhere;
}

.yara-finding svg {
  margin-top: 3px;
}

.yara-finding.danger {
  font-weight: 600;
}

.yara-finding.danger svg {
  color: var(--_danger);
}

.yara-finding.warning svg {
  color: var(--_warning);
}

.yara-finding.info svg {
  color: var(--_info);
}

.yara-line {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 400;
}

.yara-meta {
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  gap: 2px var(--_space-3);
  margin: 0;
}

.yara-meta dt {
  color: var(--_fg-muted);
}

.yara-meta dd {
  margin: 0;
  overflow-wrap: anywhere;
}

.yara-meta .m-number,
.yara-meta .m-boolean {
  color: var(--_syntax-number);
}

.yara-scroll {
  overflow-x: auto;
}

.yara-strings {
  width: 100%;
  border-collapse: collapse;
}

.yara-strings caption {
  padding-bottom: var(--_space-1);
}

.yara-strings th,
.yara-strings td {
  padding: 4px var(--_space-3) 4px 0;
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
}

.yara-strings thead th {
  color: var(--_fg-muted);
  font-weight: 500;
}

.yara-strings tbody tr:last-child > * {
  border-bottom: 0;
}

.yara-strings tbody th {
  font-weight: 500;
  white-space: nowrap;
}

.yara-strings tr.unused code.y-ref {
  text-decoration: line-through;
}

.yara-kind {
  color: var(--_fg-muted);
  white-space: nowrap;
}

.yara-value {
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.yara-mods {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1);
}

.yara-mod {
  padding: 0 6px;
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  cursor: help;
}

.yara-condition,
.yara-notes {
  display: grid;
  gap: var(--_space-1);
}

.yara-code {
  margin: 0;
  padding: var(--_space-2) var(--_space-3);
  overflow-x: auto;
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
  color: var(--_code-fg);
  font-family: var(--_font-mono);
  font-size: var(--_font-size);
  line-height: var(--_line-height);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.yara-code code {
  font: inherit;
}

.yara-source {
  white-space: pre;
  overflow-wrap: normal;
}

.yara-notes ul {
  display: grid;
  gap: 2px;
  margin: 0;
  padding-inline-start: 1.25em;
}

.y-keyword {
  color: var(--_syntax-keyword);
  font-weight: 600;
}

.y-string {
  color: var(--_syntax-string);
}

.y-regex {
  color: var(--_syntax-attr);
}

.y-hex,
.y-byte {
  color: var(--_syntax-number);
}

.y-wild {
  color: var(--_syntax-type);
  font-weight: 600;
}

.y-jump {
  color: var(--_syntax-function);
  font-weight: 600;
}

.y-number {
  color: var(--_syntax-number);
}

.y-ref {
  color: var(--_syntax-function);
}

.y-comment {
  color: var(--_syntax-comment);
  font-style: italic;
}

.y-error {
  color: var(--_danger);
  text-decoration: wavy underline;
}

.yara-edit > .editor-body {
  max-height: min(45vh, 360px);
  border-bottom: 1px solid var(--_border);
}
`;var $=Object.freeze({yaraRules:"{count} rules",yaraTabs:"YARA views",yaraTabRules:"Rules ({count})",yaraTabSource:"Source",yaraEmpty:"No YARA rule.",yaraCapped:"Only the first {count} rules are read.",yaraImports:"Imports",yaraIncludes:"Includes",yaraPrivate:"private",yaraPrivateHint:"Not reported on its own: other rules use it.",yaraGlobal:"global",yaraGlobalHint:"Applies to every rule: when it does not match, no rule matches.",yaraTags:"Tags",yaraMeta:"Meta",yaraStrings:"Strings ({count})",yaraString:"Identifier",yaraValue:"Value",yaraModifiers:"Modifiers",yaraKind:"Kind",yaraKind_text:"text",yaraKind_hex:"hex",yaraKind_regex:"regex",yaraUnused:"unused",yaraCondition:"Condition",yaraReadsAs:"Reads as",yaraLine:"line {line}",yaraProblems:"{count} problems",yaraProblem:"1 problem",yaraNoProblem:"No problem",yaraWarnings:"{count} warnings",yaraWarning:"1 warning",yaraFindings:"Problems",yaraCopyRules:"Copy the rules",yaraCopyName:"Copy the rule name",yaraMod_nocase:"Case-insensitive.",yaraMod_wide:"Also as UTF-16: two bytes per character, as in Windows strings.",yaraMod_ascii:"As one byte per character (the default, kept with wide).",yaraMod_fullword:"Only as a whole word: not inside a longer word.",yaraMod_private:"Matches but is not reported.",yaraMod_xor:"XOR-encoded with a single byte key ({arg}).",yaraMod_base64:"Base64-encoded ({arg}).",yaraMod_base64wide:"Base64-encoded, then as UTF-16 ({arg}).",yaraModAll:"every key",yaraModDefault:"standard alphabet",yaraNote_magic:"The file starts with the bytes of {type}.",yaraNote_bytes:"The {width} at offset {offset} equals {value}.",yaraNote_size_lt:"The file is smaller than {size}.",yaraNote_size_lte:"The file is at most {size}.",yaraNote_size_gt:"The file is larger than {size}.",yaraNote_size_gte:"The file is at least {size}.",yaraNote_size_eq:"The file is exactly {size}.",yaraNote_ofAny:"At least one of {ids} is found.",yaraNote_ofAll:"All {total} of {ids} are found.",yaraNote_ofNone:"None of {ids} is found.",yaraNote_ofCount:"At least {count} of the {total} strings {ids} are found.",yaraNote_ofPercent:"At least {count}% of the {total} strings {ids} are found.",yaraNote_count_lt:"{id} is found fewer than {count} times.",yaraNote_count_lte:"{id} is found at most {count} times.",yaraNote_count_gt:"{id} is found more than {count} times.",yaraNote_count_gte:"{id} is found at least {count} times.",yaraNote_count_eq:"{id} is found exactly {count} times.",yaraNote_at:"{id} is at offset {offset}.",yaraNote_in:"{id} is between offsets {from} and {to}.",yaraNote_forOf:"A loop checks each of {ids}.",yaraNote_module:"Uses the {module} module ({member}).",yaraNote_entrypoint:"Uses the entry point (deprecated: use pe.entry_point or elf.entry_point).",yaraFinding_syntax:"Syntax: expected {expected}, found \u201C{found}\u201D.",yaraFinding_unclosed:"Unclosed string, comment or hex string: {text}",yaraFinding_duplicateRule:"Another rule is already named {name}: YARA refuses the file.",yaraFinding_duplicateString:"{id} is defined twice.",yaraFinding_modifier:"{id}: the {modifier} modifier is not allowed on this kind of string.",yaraFinding_modifierClash:"{id}: nocase cannot be combined with xor or base64.",yaraFinding_emptyString:"{id} is empty.",yaraFinding_shortString:"{id} is only {length} bytes: it slows scanning and matches by chance.",yaraFinding_hexInvalid:"{id}: the hex string cannot be read.",yaraFinding_shortAtom:"{id} has no two fixed bytes in a row: it slows scanning.",yaraFinding_unboundedJump:"{id} has an unbounded jump [-]: it slows scanning.",yaraFinding_leadingWildcard:"{id} starts with a wildcard or a jump: start with fixed bytes.",yaraFinding_regexLeading:"{id} starts with .* or .+: it slows scanning and adds nothing.",yaraFinding_regexInvalid:"{id}: the regular expression may be invalid.",yaraFinding_noCondition:"The rule has no condition: YARA refuses it.",yaraFinding_undefinedString:"The condition uses {id}, which is not defined.",yaraFinding_unusedString:"{id} is never used in the condition: YARA refuses the rule.",yaraFinding_noImport:'The {module} module is used without import "{module}".',yaraFinding_noDescription:"No description in meta."}),V={yaraRules:"{count} r\xE8gles",yaraTabs:"Vues YARA",yaraTabRules:"R\xE8gles ({count})",yaraTabSource:"Source",yaraEmpty:"Aucune r\xE8gle YARA.",yaraCapped:"Seules les {count} premi\xE8res r\xE8gles sont lues.",yaraImports:"Imports",yaraIncludes:"Inclusions",yaraPrivate:"priv\xE9e",yaraPrivateHint:"Jamais signal\xE9e seule : d\u2019autres r\xE8gles l\u2019utilisent.",yaraGlobal:"globale",yaraGlobalHint:"S\u2019applique \xE0 toutes les r\xE8gles : si elle ne correspond pas, aucune r\xE8gle ne correspond.",yaraTags:"\xC9tiquettes",yaraMeta:"M\xE9tadonn\xE9es",yaraStrings:"Cha\xEEnes ({count})",yaraString:"Identifiant",yaraValue:"Valeur",yaraModifiers:"Modificateurs",yaraKind:"Type",yaraKind_text:"texte",yaraKind_hex:"hexa",yaraKind_regex:"regex",yaraUnused:"inutilis\xE9e",yaraCondition:"Condition",yaraReadsAs:"Se lit",yaraLine:"ligne {line}",yaraProblems:"{count} probl\xE8mes",yaraProblem:"1 probl\xE8me",yaraNoProblem:"Aucun probl\xE8me",yaraWarnings:"{count} avertissements",yaraWarning:"1 avertissement",yaraFindings:"Probl\xE8mes",yaraCopyRules:"Copier les r\xE8gles",yaraCopyName:"Copier le nom de la r\xE8gle",yaraMod_nocase:"Sans tenir compte de la casse.",yaraMod_wide:"Aussi en UTF-16 : deux octets par caract\xE8re, comme les cha\xEEnes Windows.",yaraMod_ascii:"Un octet par caract\xE8re (par d\xE9faut, gard\xE9 avec wide).",yaraMod_fullword:"Seulement comme mot entier : pas \xE0 l\u2019int\xE9rieur d\u2019un mot plus long.",yaraMod_private:"Correspond mais n\u2019est pas signal\xE9e.",yaraMod_xor:"Chiffr\xE9e par XOR avec une cl\xE9 d\u2019un octet ({arg}).",yaraMod_base64:"Encod\xE9e en base64 ({arg}).",yaraMod_base64wide:"Encod\xE9e en base64, puis en UTF-16 ({arg}).",yaraModAll:"toutes les cl\xE9s",yaraModDefault:"alphabet standard",yaraNote_magic:"Le fichier commence par les octets de {type}.",yaraNote_bytes:"Le {width} \xE0 la position {offset} vaut {value}.",yaraNote_size_lt:"Le fichier fait moins de {size}.",yaraNote_size_lte:"Le fichier fait au plus {size}.",yaraNote_size_gt:"Le fichier fait plus de {size}.",yaraNote_size_gte:"Le fichier fait au moins {size}.",yaraNote_size_eq:"Le fichier fait exactement {size}.",yaraNote_ofAny:"Au moins une cha\xEEne parmi {ids} est trouv\xE9e.",yaraNote_ofAll:"Les {total} cha\xEEnes {ids} sont toutes trouv\xE9es.",yaraNote_ofNone:"Aucune cha\xEEne parmi {ids} n\u2019est trouv\xE9e.",yaraNote_ofCount:"Au moins {count} des {total} cha\xEEnes {ids} sont trouv\xE9es.",yaraNote_ofPercent:"Au moins {count} % des {total} cha\xEEnes {ids} sont trouv\xE9es.",yaraNote_count_lt:"{id} est trouv\xE9e moins de {count} fois.",yaraNote_count_lte:"{id} est trouv\xE9e au plus {count} fois.",yaraNote_count_gt:"{id} est trouv\xE9e plus de {count} fois.",yaraNote_count_gte:"{id} est trouv\xE9e au moins {count} fois.",yaraNote_count_eq:"{id} est trouv\xE9e exactement {count} fois.",yaraNote_at:"{id} est \xE0 la position {offset}.",yaraNote_in:"{id} est entre les positions {from} et {to}.",yaraNote_forOf:"Une boucle v\xE9rifie chacune des cha\xEEnes {ids}.",yaraNote_module:"Utilise le module {module} ({member}).",yaraNote_entrypoint:"Utilise le point d\u2019entr\xE9e (obsol\xE8te : pr\xE9f\xE9rer pe.entry_point ou elf.entry_point).",yaraFinding_syntax:"Syntaxe : {expected} attendu, \xAB {found} \xBB trouv\xE9.",yaraFinding_unclosed:"Cha\xEEne, commentaire ou cha\xEEne hexa non ferm\xE9 : {text}",yaraFinding_duplicateRule:"Une autre r\xE8gle s\u2019appelle d\xE9j\xE0 {name} : YARA refuse le fichier.",yaraFinding_duplicateString:"{id} est d\xE9finie deux fois.",yaraFinding_modifier:"{id} : le modificateur {modifier} n\u2019est pas permis sur ce type de cha\xEEne.",yaraFinding_modifierClash:"{id} : nocase ne peut pas \xEAtre combin\xE9 avec xor ou base64.",yaraFinding_emptyString:"{id} est vide.",yaraFinding_shortString:"{id} ne fait que {length} octets : elle ralentit l\u2019analyse et correspond par hasard.",yaraFinding_hexInvalid:"{id} : la cha\xEEne hexa est illisible.",yaraFinding_shortAtom:"{id} n\u2019a pas deux octets fixes \xE0 la suite : elle ralentit l\u2019analyse.",yaraFinding_unboundedJump:"{id} a un saut sans limite [-] : il ralentit l\u2019analyse.",yaraFinding_leadingWildcard:"{id} commence par un joker ou un saut : commencer par des octets fixes.",yaraFinding_regexLeading:"{id} commence par .* ou .+ : cela ralentit l\u2019analyse sans rien ajouter.",yaraFinding_regexInvalid:"{id} : l\u2019expression r\xE9guli\xE8re est peut-\xEAtre invalide.",yaraFinding_noCondition:"La r\xE8gle n\u2019a pas de condition : YARA la refuse.",yaraFinding_undefinedString:"La condition utilise {id}, qui n\u2019est pas d\xE9finie.",yaraFinding_unusedString:"{id} n\u2019est jamais utilis\xE9e dans la condition : YARA refuse la r\xE8gle.",yaraFinding_noImport:'Le module {module} est utilis\xE9 sans import "{module}".',yaraFinding_noDescription:"Pas de description dans les m\xE9tadonn\xE9es."};var J=new Set("all and any ascii at base64 base64wide condition contains defined endswith entrypoint false filesize for fullword global icontains iendswith iequals import in include istartswith matches meta nocase none not of or private rule startswith strings them true uint8 uint16 uint32 uint8be uint16be uint32be int8 int16 int32 int8be int16be int32be wide xor".split(" ")),X=new Set(["pe","elf","math","hash","dotnet","magic","cuckoo","time","console","string","macho","dex","lnk"]),Z={text:new Set(["nocase","wide","ascii","fullword","private","xor","base64","base64wide"]),hex:new Set(["private"]),regex:new Set(["nocase","wide","ascii","fullword","private"])},Q={"uint16:0x5a4d":"MZ (Windows executable)","uint16be:0x4d5a":"MZ (Windows executable)","uint32:0x464c457f":"ELF (Linux executable)","uint32be:0x7f454c46":"ELF (Linux executable)","uint32:0x04034b50":"ZIP (also DOCX, XLSX, JAR, APK)","uint32be:0x504b0304":"ZIP (also DOCX, XLSX, JAR, APK)","uint32:0x46445025":"PDF","uint32be:0x25504446":"PDF","uint32:0xe011cfd0":"OLE (DOC, XLS, MSI)","uint32be:0xd0cf11e0":"OLE (DOC, XLS, MSI)","uint32:0xfeedface":"Mach-O (macOS executable)","uint32:0xfeedfacf":"Mach-O (macOS executable)","uint32:0xcafebabe":"Mach-O fat binary or Java class","uint32be:0xcafebabe":"Mach-O fat binary or Java class","uint32:0x0a786564":"DEX (Android)","uint32:0x0000004c":"LNK (Windows shortcut)","uint32:0x21726152":"RAR","uint32be:0x52617221":"RAR","uint16:0x8b1f":"GZIP","uint32:0xbc7aaf37":"7-Zip"};function M(r){let s=[],t=0,n=1,i="",l=(e,o)=>{let a=r.slice(t,o),c={type:e,text:a,line:n};s.push(c),e!=="space"&&e!=="comment"&&(i=a);for(let u of a)u===`
`&&(n+=1);t=o};for(;t<r.length;){let e=r[t],o=r[t+1];if(/\s/.test(e)){let a=t+1;for(;a<r.length&&/\s/.test(r[a]);)a+=1;l("space",a)}else if(e==="/"&&o==="/"){let a=r.indexOf(`
`,t);l("comment",a<0?r.length:a)}else if(e==="/"&&o==="*"){let a=r.indexOf("*/",t+2);l(a<0?"error":"comment",a<0?r.length:a+2)}else if(e==='"'){let a=t+1;for(;a<r.length&&r[a]!=='"'&&r[a]!==`
`;)a+=r[a]==="\\"?2:1;l(r[a]==='"'?"string":"error",Math.min(r.length,a+1))}else if(e==="{"&&i==="="){let a=r.indexOf("}",t);l(a<0?"error":"hex",a<0?r.length:a+1)}else if(e==="/"&&(i==="="||i==="matches")){let a=t+1;for(;a<r.length&&r[a]!=="/"&&r[a]!==`
`;)a+=r[a]==="\\"?2:1;if(r[a]!=="/")l("error",a);else{for(a+=1;/[is]/.test(r[a]??"");)a+=1;l("regex",a)}}else if(/[$#@!]/.test(e)&&/[A-Za-z0-9_*]/.test(o??"")){let a=t+1;for(;a<r.length&&/[A-Za-z0-9_*]/.test(r[a]);)a+=1;l("ref",a)}else if(e==="$")l("ref",t+1);else if(/[0-9]/.test(e)){let a=/^(0x[0-9a-fA-F]+|0o[0-7]+|\d+(\.\d+)?(KB|MB)?)/.exec(r.slice(t,t+40));l("number",t+(a?a[0].length:1))}else if(/[A-Za-z_]/.test(e)){let a=t+1;for(;a<r.length&&/[A-Za-z0-9_]/.test(r[a]);)a+=1;l(J.has(r.slice(t,a))?"keyword":"ident",a)}else{let a=r.slice(t,t+2);l("punct",t+(["==","!=","<=",">=","<<",">>",".."].includes(a)?2:1))}}return s}function F(r){return r.slice(1,-1)}function ee(r){return r.replace(/\\x[0-9a-fA-F]{2}|\\./g,"_").length}function te(r){let t=r.replace(/\/\/[^\n]*|\/\*[\s\S]*?\*\//g," ").match(/\[[^\]]*\]|[0-9A-Fa-f?~]{1,3}|[()|]|\S/g)??[],n=0,i=0,l=0,e=!1,o=t.length>0,a=0;t.forEach(u=>{u.startsWith("[")?(/^\[\s*(\d+)?\s*(-\s*(\d+)?)?\s*\]$/.test(u)||(o=!1),/-\s*\]$/.test(u)&&(e=!0),i=0):u==="("?a+=1:u===")"?a-=1:u==="|"?i=0:/^~?[0-9A-Fa-f?]{2}$/.test(u)?/^[0-9A-Fa-f]{2}$/.test(u)?(n+=1,i+=1,l=Math.max(l,i)):i=0:o=!1}),a!==0&&(o=!1);let c=t.find(u=>u!=="(");return{fixed:n,unbounded:e,leadingWildcard:!!(c&&/[?[]/.test(c)),valid:o,longestRun:l}}var K=r=>r.filter(s=>s.type!=="space"&&s.type!=="comment");function U(r){let s=r.length>1048576?r.slice(0,1048576):r,t=M(s),n=K(t),i={imports:[],includes:[],rules:[],findings:[],capped:!1},l=0,e=(a=0)=>n[l+a],o=(a,c)=>i.findings.push({id:"syntax",level:"danger",line:a?.line??0,params:{expected:c,found:a?a.text.slice(0,40):"end"}});for(;l<n.length;){let a=e();if(a.type==="error")i.findings.push({id:"unclosed",level:"danger",line:a.line,params:{text:a.text.slice(0,20)}}),l+=1;else if((a.text==="import"||a.text==="include")&&e(1)?.type==="string")(a.text==="import"?i.imports:i.includes).push(F(e(1).text)),l+=2;else if(["rule","private","global"].includes(a.text)){if(i.rules.length>=500){i.capped=!0;break}let c=ae(n,l,t,i);if(c<=l){l+=1;continue}l=c}else for(o(a,"rule"),l+=1;l<n.length&&!["rule","private","global","import","include"].includes(e().text);)l+=1}return ie(i),i}function ae(r,s,t,n){let i=s,l=r[i].line,e={name:"",line:l,private:!1,global:!1,tags:[],meta:[],strings:[],condition:[],findings:[],notes:[],source:""},o=f=>{let p=r[i];e.findings.push({id:"syntax",level:"danger",line:p?.line??l,params:{expected:f,found:p?p.text.slice(0,40):"end"}})};for(;r[i]?.text==="private"||r[i]?.text==="global";)e[r[i].text]=!0,i+=1;if(r[i]?.text!=="rule")return s+1;if(i+=1,r[i]?.type!=="ident")return o("name"),i;if(e.name=r[i].text,i+=1,r[i]?.text===":")for(i+=1;r[i]?.type==="ident";)e.tags.push(r[i++].text);if(n.rules.push(e),r[i]?.text!=="{")return o("{"),i;i+=1;let a="",c=0;for(;i<r.length;){let f=r[i];if(a!=="condition"&&["meta","strings","condition"].includes(f.text)&&r[i+1]?.text===":"){a=f.text,i+=2;continue}if(f.text==="}"&&c===0){i+=1;break}if(f.type==="error"){e.findings.push({id:"unclosed",level:"danger",line:f.line,params:{text:f.text.slice(0,20)}}),i+=1;continue}if(a==="meta"){let p=r[i+2];if(f.type==="ident"||f.type==="keyword"){if(r[i+1]?.text!=="="||!p){o("="),i+=1;continue}let h=p.text==="-"&&r[i+3]?.type==="number",g=h?r[i+3]:p;g.type==="string"?e.meta.push({key:f.text,value:F(g.text),kind:"string"}):g.type==="number"?e.meta.push({key:f.text,value:`${h?"-":""}${g.text}`,kind:"number"}):g.text==="true"||g.text==="false"?e.meta.push({key:f.text,value:g.text,kind:"boolean"}):o("value"),i+=h?4:3}else o("meta"),i+=1}else if(a==="strings"){if(f.type!=="ref"||!f.text.startsWith("$")||r[i+1]?.text!=="="){o("$name ="),i+=1;continue}let p=r[i+2],h=p?.type==="string"?"text":p?.type==="hex"?"hex":p?.type==="regex"?"regex":null;if(!h){i+=2,o('"text", { hex } or /regex/');continue}let g={id:f.text,kind:h,value:h==="text"?F(p.text):p.text,modifiers:[],line:f.line,used:!1};for(i+=3;r[i]&&(r[i].type==="keyword"||r[i].type==="ident")&&r[i+1]?.text!==":"&&r[i+1]?.text!=="=";){let _=r[i].text;i+=1;let C="";if(r[i]?.text==="("&&(_==="xor"||_.startsWith("base64"))){let b=r.findIndex((v,G)=>G>i&&v.text===")");if(b<0)break;C=r.slice(i+1,b).map(v=>v.text).join(""),i=b+1}g.modifiers.push({name:_,arg:C})}e.strings.push(g)}else a==="condition"?(f.text==="("&&(c+=1),f.text===")"&&(c-=1),i+=1):(o("meta:, strings: or condition:"),i+=1)}let u=r[s],y=r[i-1],m=t.indexOf(u),Y=t.indexOf(y),x=t.slice(m,Y+1);e.source=x.map(f=>f.text).join("");let z=x.findIndex((f,p)=>f.text==="condition"&&x.slice(p+1).find(h=>h.type!=="space")?.text===":");if(z>=0){let f=x.findIndex((h,g)=>g>z&&h.text===":"),p=x.slice(f+1);for(p.at(-1)?.text==="}"&&(p=p.slice(0,-1));p[0]?.type==="space";)p.shift();for(;p.at(-1)?.type==="space";)p.pop();e.condition=p}return y?.text!=="}"&&o("}"),i}function B(r,s){let t=`$${r.slice(1)}`;return t.endsWith("*")?s.filter(n=>n.id.startsWith(t.slice(0,-1))):s.filter(n=>n.id===t)}function ie(r){let s=new Map;for(let t of r.rules){let n=(e,o,a,c={})=>t.findings.push({id:e,level:o,line:a,params:c});s.has(t.name)&&n("duplicateRule","danger",t.line,{name:t.name}),s.set(t.name,t);let i=new Set;for(let e of t.strings){e.id!=="$"&&i.has(e.id)&&n("duplicateString","danger",e.line,{id:e.id}),i.add(e.id);for(let a of e.modifiers)Z[e.kind].has(a.name)||n("modifier","danger",e.line,{id:e.id,modifier:a.name});let o=a=>e.modifiers.some(c=>c.name===a);if(o("nocase")&&(o("xor")||o("base64")||o("base64wide"))&&n("modifierClash","danger",e.line,{id:e.id}),e.kind==="text"){let a=ee(e.value);a?a<4&&n("shortString","warning",e.line,{id:e.id,length:a}):n("emptyString","danger",e.line,{id:e.id})}else if(e.kind==="hex"){let a=te(e.value.slice(1,-1));a.valid?(a.longestRun<2&&n("shortAtom","warning",e.line,{id:e.id}),a.unbounded&&n("unboundedJump","warning",e.line,{id:e.id}),a.leadingWildcard&&n("leadingWildcard","info",e.line,{id:e.id})):n("hexInvalid","danger",e.line,{id:e.id})}else/^\/(\.\*|\.\+)/.test(e.value)&&n("regexLeading","warning",e.line,{id:e.id});if(e.kind==="regex")try{new RegExp(e.value.slice(1,e.value.lastIndexOf("/")))}catch{n("regexInvalid","warning",e.line,{id:e.id})}}let l=K(t.condition);t.condition.length||n("noCondition","danger",t.line);for(let[e,o]of l.entries())if(o.type==="ref"){let a=o.text.length===1?"$":o.text;if(a==="$")continue;let c=B(a,t.strings);c.length||n("undefinedString","danger",o.line,{id:`$${a.slice(1)}`}),c.forEach(u=>u.used=!0)}else o.text==="them"?t.strings.forEach(a=>a.used=!0):o.type==="ident"&&l[e+1]?.text==="."&&l[e-1]?.text!=="."&&X.has(o.text)&&!r.imports.includes(o.text)&&n("noImport","danger",o.line,{module:o.text});for(let e of t.strings)!e.used&&e.id!=="$"&&!e.id.startsWith("$_")&&n("unusedString","danger",e.line,{id:e.id});t.meta.some(e=>/^(description|desc)$/i.test(e.key))||n("noDescription","info",t.line),t.notes=ne(l,t.strings)}for(let t of r.rules){let n=new Set;t.findings=t.findings.filter(i=>{let l=`${i.id}:${JSON.stringify(i.params)}`;return n.has(l)?!1:(n.add(l),!0)})}}function k(r){let s=/^(\d+)(KB|MB)$/.exec(r);return s?Number(s[1])*(s[2]==="KB"?1024:1024*1024):/^0o/.test(r)?parseInt(r.slice(2),8):Number(r)}function ne(r,s){let t=[],n=e=>r[e]?.text??"",i=e=>{if(n(e)==="them")return{ids:s.map(c=>c.id),end:e+1};if(n(e)!=="(")return null;let o=[],a=e+1;for(;a<r.length&&n(a)!==")";)r[a].type==="ref"&&o.push(...B(n(a),s).map(c=>c.id)),a+=1;return{ids:[...new Set(o)],end:a+1}};for(let e=0;e<r.length;e+=1){let o=r[e];if(/^u?int(8|16|32)(be)?$/.test(o.text)&&n(e+1)==="("&&n(e+3)===")"&&n(e+4)==="=="){let c=n(e+2),u=r[e+5];if(u?.type==="number"){let y=`0x${k(u.text).toString(16).padStart(o.text.endsWith("8")?2:o.text.includes("16")?4:8,"0")}`,m=k(c)===0?Q[`${o.text.replace(/^int/,"uint")}:${y}`]:void 0;t.push(m?{id:"magic",params:{type:m}}:{id:"bytes",params:{offset:c,value:u.text,width:o.text}}),e+=5;continue}}if(o.text==="filesize"&&/^[<>]=?$|^==$/.test(n(e+1))&&r[e+2]?.type==="number"){t.push({id:`size_${{"<":"lt","<=":"lte",">":"gt",">=":"gte","==":"eq"}[n(e+1)]}`,params:{size:n(e+2)}}),e+=2;continue}if(["any","all","none"].includes(o.text)||o.type==="number"&&(n(e+1)==="of"||n(e+1)==="%"&&n(e+2)==="of")){let c=n(e+1)==="%",u=e+(c?2:1);if(n(u)==="of"){let y=i(u+1);if(y&&y.ids.length){let m=y.ids.join(", ");o.text==="any"?t.push({id:"ofAny",params:{ids:m,total:y.ids.length}}):o.text==="all"?t.push({id:"ofAll",params:{ids:m,total:y.ids.length}}):o.text==="none"?t.push({id:"ofNone",params:{ids:m}}):c?t.push({id:"ofPercent",params:{count:o.text,ids:m,total:y.ids.length}}):t.push({id:"ofCount",params:{count:o.text,ids:m,total:y.ids.length}}),e=y.end-1;continue}}}if(o.type==="ref"&&o.text.startsWith("#")&&/^[<>]=?$|^==$/.test(n(e+1))&&r[e+2]?.type==="number"){t.push({id:`count_${{"<":"lt","<=":"lte",">":"gt",">=":"gte","==":"eq"}[n(e+1)]}`,params:{id:`$${o.text.slice(1)}`,count:n(e+2)}}),e+=2;continue}if(o.type==="ref"&&o.text.startsWith("$")&&n(e+1)==="at"){t.push({id:"at",params:{id:o.text,offset:n(e+2)}}),e+=2;continue}if(o.type==="ref"&&o.text.startsWith("$")&&n(e+1)==="in"&&n(e+2)==="("&&n(e+4)===".."){t.push({id:"in",params:{id:o.text,from:n(e+3),to:n(e+5)}}),e+=6;continue}if(o.text==="for"&&/^(any|all|none|\d+)$/.test(n(e+1))&&n(e+2)==="of"){let c=i(e+3);if(c){t.push({id:"forOf",params:{ids:c.ids.join(", ")||"\u2026"}}),e=c.end-1;continue}}if(o.type==="ident"&&X.has(o.text)&&n(e+1)==="."&&n(e-1)!=="."){let c=n(e+2);t.push({id:"module",params:{module:o.text,member:`${o.text}.${c}`}}),e+=2;continue}o.text==="entrypoint"&&t.push({id:"entrypoint",params:{}})}let l=new Set;return t.filter(e=>{let o=`${e.id}:${JSON.stringify(e.params)}`;return l.has(o)?!1:(l.add(o),!0)})}function q(r){return r.findings.some(s=>s.level==="danger")?"danger":r.findings.some(s=>s.level==="warning")?"warning":"none"}O({en:$,fr:V});var re=Object.freeze(["rules","source"]),D=class extends W{static type="yara";static componentAttributes=Object.freeze(["view","lint","explain","tabs"]);static presets={simple:{tabs:!0},full:{header:!0,dot:!0,copy:!0,fullscreen:!0,tabs:!0}};static styles=[j];static upgradeProperties=["content"];constructor(){super(),this.panelId=L("panel"),this.viewState=null,this.parsed=null,this.editor=null,this.previewTimer=void 0}get ruleset(){let s=this.text??"";return this.parsed?.text!==s&&(this.parsed={text:s,set:U(s)}),this.parsed.set}get view(){return this.viewState??T(this.getAttribute("view"),re,"rules")}flag(s,t){return R(this.getAttribute(s))??t}renderContent(s){let t=this.t,n=this.ruleset,i=this.feature("tabs")?E({tabs:[{id:"rules",label:t("yaraTabRules",{count:n.rules.length})},{id:"source",label:t("yaraTabSource")}],selected:this.view,label:t("yaraTabs"),panelId:this.panelId,onSelect:u=>this.selectView(u)}):null,l=d("div",{class:"body yara-body",part:"body"});if(this.view==="source"&&i)l.append(this.sourceView(this.text??""));else{!n.rules.length&&!n.findings.length&&l.append(N(t("yaraEmpty"))),(n.imports.length||n.includes.length)&&l.append(this.headerView(n)),n.findings.length&&this.flag("lint",!0)&&l.append(this.findingsView(n.findings));for(let u of n.rules)l.append(this.ruleView(u));n.capped&&l.append(N(t("yaraCapped",{count:n.rules.length})))}let e=d("div",{class:"panel",attrs:{id:this.panelId,role:i?"tabpanel":null}}),o=[];if(this.editing){let u=this.createEditor();e.classList.add("yara-edit"),e.append(d("div",{class:"body editor-body",part:"body editor"},u.element),l),o=this.historyButtons(u)}else e.append(l);let a=[...o,this.editToggleButton(),this.fullscreenButton(),this.feature("copy")&&this.text?this.copyButton(()=>this.text??"",t("yaraCopyRules")):null],c=n.rules.length>1?`YARA \xB7 ${t("yaraRules",{count:n.rules.length})}`:"YARA";s.append(...this.chrome({badge:c,tabs:i,actions:a}),e),this.editor?.align()}selectView(s){s!==this.view&&(this.viewState=s,this.render(),this.root.querySelector(`[data-tab="${s}"]`)?.focus(),A(this,w.TAB_CHANGE,{tab:s}))}headerView(s){let t=this.t,n=(i,l,e)=>e.length?d("p",{class:"yara-imports"},d("span",{class:"yara-label",text:t(i)}),...e.map(o=>d("code",{},d("span",{class:"y-keyword",text:l})," ",d("span",{class:"y-string",text:`"${o}"`})))):null;return d("div",{class:"yara-header"},n("yaraImports","import",s.imports),n("yaraIncludes","include",s.includes))}ruleView(s){let t=this.t,n=this.flag("lint",!0),i=q(s),l=s.findings.filter(c=>c.level==="danger").length,e=s.findings.filter(c=>c.level==="warning").length,a=[l?l===1?t("yaraProblem"):t("yaraProblems",{count:l}):"",e?e===1?t("yaraWarning"):t("yaraWarnings",{count:e}):""].filter(Boolean).join(" \xB7 ")||t("yaraNoProblem");return d("section",{class:`yara-rule ${n?i:""}`,part:"rule",attrs:{"aria-label":s.name||t("yaraEmpty"),"data-rule":s.name}},d("header",{class:"yara-head"},d("h3",{class:"yara-name"},d("span",{class:"y-keyword",text:"rule "}),d("code",{text:s.name})),s.private?d("span",{class:"yara-flag",attrs:{title:t("yaraPrivateHint")},text:t("yaraPrivate")}):null,s.global?d("span",{class:"yara-flag",attrs:{title:t("yaraGlobalHint")},text:t("yaraGlobal")}):null,s.tags.length?d("ul",{class:"yara-tags",attrs:{"aria-label":t("yaraTags")}},...s.tags.map(c=>d("li",{text:c}))):null,n?d("span",{class:`yara-verdict ${i}`,part:"verdict"},S(i==="none"?"check":"alert"),d("span",{text:a})):null,this.feature("copy")&&s.name?this.copyTextButton(()=>s.name,t("yaraCopyName"),`copy-${s.name}`):null),n&&s.findings.length?this.findingsView(s.findings):null,s.meta.length?d("dl",{class:"yara-meta",part:"meta",attrs:{"aria-label":t("yaraMeta")}},...s.meta.flatMap(c=>[d("dt",{text:c.key}),d("dd",{class:`m-${c.kind}`,text:c.value})])):null,s.strings.length?this.stringsView(s):null,s.condition.length?d("div",{class:"yara-condition"},d("p",{class:"yara-label",text:t("yaraCondition")}),d("pre",{class:"yara-code",part:"condition"},d("code",{},...this.colored(s.condition)))):null,s.notes.length&&this.flag("explain",!0)?d("div",{class:"yara-notes",part:"notes"},d("p",{class:"yara-label",text:t("yaraReadsAs")}),d("ul",{},...s.notes.map(c=>d("li",{text:t(`yaraNote_${c.id}`,c.params)})))):null)}stringsView(s){let t=this.t,n=s.strings.map(i=>d("tr",{class:i.used||i.id==="$"||i.id.startsWith("$_")?"":"unused",attrs:{"data-string":i.id}},d("th",{attrs:{scope:"row"}},d("code",{class:"y-ref",text:i.id}),i.used||i.id==="$"||i.id.startsWith("$_")?null:d("span",{class:"yara-tag",text:t("yaraUnused")})),d("td",{class:"yara-kind",text:t(`yaraKind_${i.kind}`)}),d("td",{},d("code",{class:`yara-value ${i.kind}`},...this.valueView(i))),d("td",{},d("span",{class:"yara-mods"},...i.modifiers.map(l=>{let e=`yaraMod_${l.name}`,o=l.arg||(l.name==="xor"?t("yaraModAll"):t("yaraModDefault")),a=Object.hasOwn($,e)?t(e,{arg:o}):"";return d("span",{class:"yara-mod",attrs:{title:a||null}},d("code",{text:l.arg?`${l.name}(${l.arg})`:l.name}),a?d("span",{class:"sr-only",text:` ${a}`}):null)})))));return d("div",{class:"yara-scroll"},d("table",{class:"yara-strings",part:"strings"},d("caption",{class:"yara-label",text:t("yaraStrings",{count:s.strings.length})}),d("thead",{},d("tr",{},...[t("yaraString"),t("yaraKind"),t("yaraValue"),t("yaraModifiers")].map(i=>d("th",{attrs:{scope:"col"},text:i})))),d("tbody",{},...n)))}valueView(s){return s.kind==="text"?[d("span",{class:"y-string",text:`"${s.value}"`})]:s.kind==="regex"?[d("span",{class:"y-regex",text:s.value})]:(s.value.match(/\[[^\]]*\]|~?[0-9A-Fa-f?]{2}|[{}()|]|\/\/[^\n]*|\/\*[\s\S]*?\*\/|\s+|./g)??[]).map(n=>{if(/^\s+$/.test(n))return" ";let i=n.startsWith("[")?"y-jump":/\?/.test(n)?"y-wild":/^~?[0-9A-Fa-f]{2}$/.test(n)?"y-byte":n.startsWith("/")?"y-comment":"y-punct";return d("span",{class:i,text:n})})}colored(s){return s.map(t=>t.type==="space"||t.type==="punct"||t.type==="ident"?t.text:d("span",{class:`y-${t.type}`,text:t.text}))}findingsView(s){let t=this.t;return d("ul",{class:"yara-findings",part:"findings",attrs:{"aria-label":t("yaraFindings")}},...s.map(n=>d("li",{class:`yara-finding ${n.level}`,attrs:{"data-finding":n.id}},S(n.level==="info"?"help":"alert"),d("span",{text:t(`yaraFinding_${n.id}`,n.params)}),n.line?d("span",{class:"yara-line",text:t("yaraLine",{line:n.line})}):null)))}sourceView(s){return d("pre",{class:"yara-code yara-source",part:"source"},d("code",{},...this.colored(M(s.slice(0,1024*1024)))))}createEditor(){return this.editor?.destroy(),this.editor=new P({text:this.text??"",language:"plaintext",lineNumbers:!0,wrap:!1,highlightLimit:I().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:s=>this.edited(s),onChange:s=>A(this,w.CHANGE,{value:s}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),300)}};export{D as a};
