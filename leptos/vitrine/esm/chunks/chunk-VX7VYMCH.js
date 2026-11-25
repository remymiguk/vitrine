/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{b as U,c as P,d as R,e as f,f as C}from"./chunk-IJCFR2PC.js";import{r as k}from"./chunk-BTEG3GEC.js";import{r as L}from"./chunk-37OSRZJK.js";import{O as p,_ as m,ba as F,c as _,o as r,q as b}from"./chunk-JAZI474S.js";import{h as v,k as w,l as y,m as x}from"./chunk-SCKP2KTO.js";var S=`/*
 * URLs taken apart: a card per URL with its verdict, the URL with its parts colored, the
 * findings, the parts and parameters, and the URLs hidden in it. Verdicts and levels are
 * written in words; colors only repeat them.
 */
.url-body {
  display: grid;
  gap: var(--_space-4);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.url-card {
  display: grid;
  gap: var(--_space-3);
  min-width: 0;
  padding: var(--_space-3);
  border: 1px solid var(--_border);
  border-inline-start: 3px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
}

.url-card.danger {
  border-inline-start-color: var(--_danger);
}

.url-card.warning {
  border-inline-start-color: var(--_warning);
}

.url-card.none {
  border-inline-start-color: var(--_success);
}

.url-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2);
}

.url-verdict {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  padding: 1px var(--_space-2);
  border: 1px solid currentColor;
  border-radius: var(--_radius-full);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.url-verdict svg,
.url-finding svg,
.url-nested-title svg {
  flex: none;
  width: 14px;
  height: 14px;
}

.url-verdict.danger {
  color: var(--_danger);
}

.url-verdict.warning {
  color: var(--_warning);
}

.url-verdict.none {
  color: var(--_success);
}

.url-step {
  color: var(--_fg-muted);
  font-weight: 600;
}

.url-line {
  margin: 0;
  padding: var(--_space-2) var(--_space-3);
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
  color: var(--_code-fg);
  font-family: var(--_font-mono);
  font-size: var(--_font-size);
  line-height: var(--_line-height);
  overflow-wrap: anywhere;
}

.url-line code {
  font: inherit;
}

.u-scheme {
  color: var(--_syntax-keyword);
}

.u-user {
  color: var(--_danger);
  text-decoration: line-through;
}

.u-sub {
  color: var(--_fg-muted);
}

.u-domain {
  color: var(--_fg);
  font-weight: 700;
}

.u-port {
  color: var(--_syntax-number);
}

.u-path {
  color: var(--_syntax-string);
}

.u-query {
  color: var(--_syntax-attr);
}

.u-fragment {
  color: var(--_syntax-comment);
}

.url-findings {
  display: grid;
  gap: var(--_space-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

.url-finding {
  display: flex;
  align-items: flex-start;
  gap: var(--_space-2);
  margin: 0;
  overflow-wrap: anywhere;
}

.url-finding svg {
  margin-top: 3px;
}

.url-finding.danger svg {
  color: var(--_danger);
}

.url-finding.warning svg {
  color: var(--_warning);
}

.url-finding.info svg {
  color: var(--_info);
}

.url-finding.danger {
  font-weight: 600;
}

.url-details {
  display: grid;
  gap: var(--_space-3);
}

.url-parts,
.url-params {
  width: 100%;
  border-collapse: collapse;
}

.url-parts th,
.url-parts td,
.url-params th,
.url-params td {
  padding: 4px var(--_space-3) 4px 0;
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
}

.url-parts tr:last-child > *,
.url-params tbody tr:last-child > * {
  border-bottom: 0;
}

.url-parts th,
.url-params thead th {
  color: var(--_fg-muted);
  font-weight: 500;
  white-space: nowrap;
}

.url-parts th {
  width: 1%;
}

.url-params tbody th {
  width: 1%;
  font-weight: 500;
  white-space: nowrap;
}

.url-parts code,
.url-params code {
  font-family: var(--_font-mono);
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.url-params tbody th code {
  overflow-wrap: normal;
  white-space: nowrap;
}

.url-params tr.tracking code {
  color: var(--_fg-muted);
}

.url-scroll {
  overflow-x: auto;
}

.url-params-box summary {
  cursor: pointer;
  font-weight: 600;
}

.url-params-box[open] summary {
  margin-bottom: var(--_space-1);
}

.url-tag {
  margin-inline-start: var(--_space-1);
  padding: 0 6px;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  color: var(--_fg-muted);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-small);
}

.url-nested {
  display: grid;
  gap: var(--_space-2);
  padding-inline-start: var(--_space-3);
  border-inline-start: 2px dashed var(--_border-strong);
}

.url-nested-title {
  display: flex;
  align-items: center;
  gap: var(--_space-1);
  margin: 0;
  color: var(--_fg-muted);
  font-weight: 600;
}

.url-chain {
  display: grid;
  gap: var(--_space-2);
  padding: var(--_space-3);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
}

.url-chain-title {
  margin: 0;
  font-weight: 600;
}

.url-chain-domains {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1) var(--_space-2);
  margin: 0;
  padding: 0;
  list-style: none;
}

.url-chain-domains li + li::before {
  content: '\u2192';
  margin-inline-end: var(--_space-2);
  color: var(--_fg-muted);
}

.url-chain-domains code {
  font-family: var(--_font-mono);
}

.url-edit > .editor-body {
  max-height: min(35vh, 240px);
  border-bottom: 1px solid var(--_border);
}
`;var T=Object.freeze({urlCount:"{count} URLs",urlCapped:"Only the first {count} URLs are shown.",urlVerdict_danger:"Dangerous",urlVerdict_warning:"Suspicious",urlVerdict_none:"No finding",urlStep:"Step {step}",urlChain:"Redirect chain: {count} steps across {domains} domains",urlChainDowngrade:"Step {step} goes from HTTPS to HTTP.",urlFindings:"Findings",urlParts:"Parts",urlScheme:"Scheme",urlUser:"User",urlPassword:"Password",urlPasswordHidden:"{count} characters, hidden",urlHost:"Host",urlHostAscii:"Host (as sent)",urlDomain:"Registered domain",urlSubdomain:"Subdomain",urlSuffix:"Public suffix",urlPort:"Port",urlPath:"Path",urlFragment:"Fragment",urlLookalike:"Looks like",urlParams:"Parameters ({count})",urlParamName:"Name",urlParamValue:"Value",urlTracking:"Tracking",urlHiddenIn:"URL hidden in {param}",urlEncoding_plain:"as is",urlEncoding_percent:"encoded twice",urlEncoding_base64:"base64",urlEncoding_proofpoint:"Proofpoint URL Defense",urlCopy:"Copy the URL",urlCopyAll:"Copy the URLs",urlCopyDefanged:"Defanged",urlCopyClean:"Without tracking",urlEmpty:"No URL.",urlNote_private:"a private address",urlNote_loopback:"a loopback address","urlNote_link-local":"a link-local address",urlNote_shared:"a shared (CGNAT) address",urlNote_multicast:"a multicast address",urlNote_reserved:"reserved or for documentation",urlFinding_invalid:"Not a URL a browser can open.",urlFinding_invisible:"Invisible characters (zero-width or right-to-left marks) are hidden in the URL.",urlFinding_whitespace:"The URL contains spaces or line breaks.",urlFinding_defanged:"The URL was defanged (hxxp, [.]): it was read as the real URL.",urlFinding_noScheme:"No scheme: read as http://.",urlFinding_long:"Very long URL ({length} characters): only the start is read.",urlFinding_scheme:"The {scheme}: scheme runs code or reads local data when the link is opened.",urlFinding_dataUrl:"A data: URL holds a whole document ({mime}) in the link, a way to hide a phishing page.",urlFinding_opaque:"A {scheme}: link opens another application.",urlFinding_backslash:"Browsers read backslashes as slashes, which can hide the real host.",urlFinding_http:"Not encrypted ({scheme}://): what is sent can be read or changed on the way.",urlFinding_ftp:"FTP is not encrypted, and most browsers no longer open it.",urlFinding_userinfoHost:"\u201C{fake}\u201D before the @ is ignored: the link opens {host}.",urlFinding_credentials:"The URL carries a user name or a password.",urlFinding_ipObfuscated:"{written} is a disguised IP address: browsers open {ip}.",urlFinding_ipHost:"The host is an IP address ({ip}), not a domain name.",urlFinding_ipSpecial:"The address is {note}.",urlFinding_encodedHost:"The host is percent-encoded.",urlFinding_punycode:"Internationalized domain name, shown as {unicode}.",urlFinding_homograph:"Letters of other alphabets imitate Latin ones: the host looks like {lookalike}.",urlFinding_mixedScript:"A label mixes Latin letters with Cyrillic, Greek or Armenian ones.",urlFinding_deceptiveSubdomain:"The host starts with {fake}, but the registered domain is {domain}.",urlFinding_deepSubdomain:"{count} levels of subdomains.",urlFinding_hyphens:"Many hyphens in the domain name, as in generated phishing domains.",urlFinding_shortener:"Link shortener: the destination is not in the URL.",urlFinding_sharedHost:"Hosted on {suffix}, where anyone can publish a site.",urlFinding_doubleEncoded:"Percent-encoded twice (%25\u2026), a way to get past filters.",urlFinding_download:"Leads to {file}, a file that installs or runs something.",urlFinding_tracking:"Tracking parameters: {params}.",urlFinding_email:"{param} carries an e-mail address, as phishing links do to fill in the victim\u2019s address.",urlFinding_redirect:"{param} holds another URL, on {domain}: the page may redirect there.",urlFinding_redirectEncoded:"A URL is hidden in {param} ({encoding}), on {domain}.",urlFinding_port:"Non-standard port {port}."}),H={urlCount:"{count} URL",urlCapped:"Seules les {count} premi\xE8res URL sont affich\xE9es.",urlVerdict_danger:"Dangereuse",urlVerdict_warning:"Suspecte",urlVerdict_none:"Rien \xE0 signaler",urlStep:"\xC9tape {step}",urlChain:"Cha\xEEne de redirections : {count} \xE9tapes sur {domains} domaines",urlChainDowngrade:"L\u2019\xE9tape {step} passe de HTTPS \xE0 HTTP.",urlFindings:"Constats",urlParts:"Parties",urlScheme:"Sch\xE9ma",urlUser:"Utilisateur",urlPassword:"Mot de passe",urlPasswordHidden:"{count} caract\xE8res, masqu\xE9",urlHost:"H\xF4te",urlHostAscii:"H\xF4te (tel qu\u2019envoy\xE9)",urlDomain:"Domaine enregistr\xE9",urlSubdomain:"Sous-domaine",urlSuffix:"Suffixe public",urlPort:"Port",urlPath:"Chemin",urlFragment:"Fragment",urlLookalike:"Ressemble \xE0",urlParams:"Param\xE8tres ({count})",urlParamName:"Nom",urlParamValue:"Valeur",urlTracking:"Pistage",urlHiddenIn:"URL cach\xE9e dans {param}",urlEncoding_plain:"en clair",urlEncoding_percent:"encod\xE9e deux fois",urlEncoding_base64:"base64",urlEncoding_proofpoint:"Proofpoint URL Defense",urlCopy:"Copier l\u2019URL",urlCopyAll:"Copier les URL",urlCopyDefanged:"D\xE9sarm\xE9e",urlCopyClean:"Sans pistage",urlEmpty:"Aucune URL.",urlNote_private:"une adresse priv\xE9e",urlNote_loopback:"une adresse de boucle locale","urlNote_link-local":"une adresse de lien local",urlNote_shared:"une adresse partag\xE9e (CGNAT)",urlNote_multicast:"une adresse multicast",urlNote_reserved:"r\xE9serv\xE9e ou pour la documentation",urlFinding_invalid:"Ce n\u2019est pas une URL qu\u2019un navigateur peut ouvrir.",urlFinding_invisible:"Des caract\xE8res invisibles (largeur nulle ou sens d\u2019\xE9criture) sont cach\xE9s dans l\u2019URL.",urlFinding_whitespace:"L\u2019URL contient des espaces ou des retours \xE0 la ligne.",urlFinding_defanged:"L\u2019URL \xE9tait d\xE9sarm\xE9e (hxxp, [.]) : elle a \xE9t\xE9 lue comme la vraie URL.",urlFinding_noScheme:"Pas de sch\xE9ma : lue comme http://.",urlFinding_long:"URL tr\xE8s longue ({length} caract\xE8res) : seul le d\xE9but est lu.",urlFinding_scheme:"Le sch\xE9ma {scheme}: ex\xE9cute du code ou lit des donn\xE9es locales \xE0 l\u2019ouverture du lien.",urlFinding_dataUrl:"Une URL data: contient un document entier ({mime}) dans le lien, une fa\xE7on de cacher une page d\u2019hame\xE7onnage.",urlFinding_opaque:"Un lien {scheme}: ouvre une autre application.",urlFinding_backslash:"Les navigateurs lisent les barres obliques inverses comme des barres obliques, ce qui peut cacher le vrai h\xF4te.",urlFinding_http:"Non chiffr\xE9e ({scheme}://) : ce qui est envoy\xE9 peut \xEAtre lu ou modifi\xE9 en chemin.",urlFinding_ftp:"FTP n\u2019est pas chiffr\xE9, et la plupart des navigateurs ne l\u2019ouvrent plus.",urlFinding_userinfoHost:"\xAB {fake} \xBB avant le @ est ignor\xE9 : le lien ouvre {host}.",urlFinding_credentials:"L\u2019URL contient un nom d\u2019utilisateur ou un mot de passe.",urlFinding_ipObfuscated:"{written} est une adresse IP d\xE9guis\xE9e : les navigateurs ouvrent {ip}.",urlFinding_ipHost:"L\u2019h\xF4te est une adresse IP ({ip}), pas un nom de domaine.",urlFinding_ipSpecial:"L\u2019adresse est {note}.",urlFinding_encodedHost:"L\u2019h\xF4te est encod\xE9 en pourcentage.",urlFinding_punycode:"Nom de domaine internationalis\xE9, affich\xE9 comme {unicode}.",urlFinding_homograph:"Des lettres d\u2019autres alphabets imitent des lettres latines : l\u2019h\xF4te ressemble \xE0 {lookalike}.",urlFinding_mixedScript:"Un libell\xE9 m\xE9lange des lettres latines et cyrilliques, grecques ou arm\xE9niennes.",urlFinding_deceptiveSubdomain:"L\u2019h\xF4te commence par {fake}, mais le domaine enregistr\xE9 est {domain}.",urlFinding_deepSubdomain:"{count} niveaux de sous-domaines.",urlFinding_hyphens:"Beaucoup de tirets dans le nom de domaine, comme dans les domaines d\u2019hame\xE7onnage g\xE9n\xE9r\xE9s.",urlFinding_shortener:"Raccourcisseur de liens : la destination n\u2019est pas dans l\u2019URL.",urlFinding_sharedHost:"H\xE9berg\xE9e sur {suffix}, o\xF9 tout le monde peut publier un site.",urlFinding_doubleEncoded:"Encod\xE9e deux fois (%25\u2026), une fa\xE7on de passer les filtres.",urlFinding_download:"M\xE8ne \xE0 {file}, un fichier qui installe ou ex\xE9cute quelque chose.",urlFinding_tracking:"Param\xE8tres de pistage : {params}.",urlFinding_email:"{param} contient une adresse e-mail, comme les liens d\u2019hame\xE7onnage pour pr\xE9-remplir l\u2019adresse de la victime.",urlFinding_redirect:"{param} contient une autre URL, sur {domain} : la page peut y rediriger.",urlFinding_redirectEncoded:"Une URL est cach\xE9e dans {param} ({encoding}), sur {domain}.",urlFinding_port:"Port non standard {port}."};x({en:T,fr:H});var N=class extends F{static type="url";static componentAttributes=Object.freeze(["defang","parts","chain"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,fullscreen:!0}};static styles=[S];static upgradeProperties=["content"];static fromData=k;constructor(){super(),this.panelId=b("panel"),this.editor=null,this.previewTimer=void 0,this.cache=null}read(){let e=this.text??"";if(this.cache?.text!==e){let{urls:n,capped:t}=P(e);this.cache={text:e,analyses:n.map(a=>U(a)),capped:t}}return this.cache}get analyses(){return this.read().analyses}flag(e,n){return _(this.getAttribute(e))??n}shown(e){return this.flag("defang",!0)?f(e):e}renderContent(e){let n=this.t,{analyses:t,capped:a}=this.read(),o=this.flag("chain",!1)&&t.length>1,s=r("div",{class:"body url-body",part:"body"});t.length||s.append(m(n("urlEmpty"))),o&&s.append(this.chainView(t)),t.forEach((l,g)=>s.append(this.card(l,o?g+1:0,0))),a&&s.append(m(n("urlCapped",{count:t.length})));let d=r("div",{class:"panel",attrs:{id:this.panelId}}),i=[];if(this.editing){let l=this.createEditor();d.classList.add("url-edit"),d.append(r("div",{class:"body editor-body",part:"body source"},l.element),s),i=this.historyButtons(l)}else d.append(s);let u=t.filter(l=>l.parts),c=()=>u.map(l=>l.parts.href),E=u.some(l=>l.parts?.query.some(g=>g.tracking)),h=this.feature("copy")&&u.length>0,V=[...i,this.editToggleButton(),this.fullscreenButton(),h?this.copyTextButton(()=>c().map(f).join(`
`),n("urlCopyDefanged"),"copy-defanged"):null,h&&E?this.copyTextButton(()=>u.map(l=>R(l.parts)).join(`
`),n("urlCopyClean"),"copy-clean"):null,h?this.copyButton(()=>c().join(`
`),n(u.length>1?"urlCopyAll":"urlCopy")):null],q=t.length>1?n("urlCount",{count:t.length}):"URL";e.append(...this.chrome({badge:q,actions:V}),d),this.editor?.align()}chainView(e){let n=this.t,{domains:t,downgrade:a}=C(e);return r("div",{class:"url-chain",part:"chain"},r("p",{class:"url-chain-title",text:n("urlChain",{count:e.length,domains:t.length})}),r("ol",{class:"url-chain-domains"},...t.map(o=>r("li",{},r("code",{text:this.flag("defang",!0)?o.replace(/\./g,"[.]"):o})))),a?r("p",{class:"url-finding danger"},p("alert"),r("span",{text:n("urlChainDowngrade",{step:a})})):null)}card(e,n,t){let a=this.t,o=e.verdict,s=e.parts,d=n?a("urlStep",{step:n}):this.shown(s?.href??e.input);return r("section",{class:`url-card ${o}`,part:"url",attrs:{"aria-label":d}},r("header",{class:"url-head"},r("span",{class:`url-verdict ${o}`,part:"verdict"},p(o==="none"?"shield-check":"shield-alert"),r("span",{text:a(`urlVerdict_${o}`)})),n?r("span",{class:"url-step",text:a("urlStep",{step:n})}):null),s?this.lineView(s):r("p",{class:"url-line"},r("code",{text:e.input})),this.findingsView(e.findings),s&&s.hierarchical&&this.flag("parts",!0)?this.partsView(s):null,...e.nested.map(i=>r("div",{class:"url-nested",part:"nested"},r("p",{class:"url-nested-title"},p("arrow-right"),r("span",{text:`${a("urlHiddenIn",{param:i.param})} \xB7 ${a(`urlEncoding_${i.encoding}`)}`})),this.card(i.analysis,0,t+1))))}lineView(e){let n=this.flag("defang",!0),t=c=>n?c.replace(/\./g,"[.]"):c;if(!e.hierarchical)return r("p",{class:"url-line",part:"line"},r("code",{},r("span",{class:"u-scheme",text:`${e.scheme}${n?"[:]":":"}`}),r("span",{class:"u-path",text:e.path})));let a=new URL(e.href),o=n?e.scheme.replace(/^http/,"hxxp").replace(/^ftp/,"fxp"):e.scheme,s=e.username||e.password?`${e.username}${e.password?":\u2022\u2022\u2022\u2022":""}@`:"",d=e.hostType==="domain"?e.hostUnicode:e.host,i=e.hostType==="domain"&&e.subdomain?`${e.subdomain}.`:"",u=i?d.slice(i.length):d;return r("p",{class:"url-line",part:"line"},r("code",{},r("span",{class:"u-scheme",text:`${o}${n?"[://]":"://"}`}),s?r("span",{class:"u-user",text:t(s)}):null,i?r("span",{class:"u-sub",text:t(i)}):null,r("strong",{class:"u-domain",text:t(u)}),e.port?r("span",{class:"u-port",text:`:${e.port}`}):null,r("span",{class:"u-path",text:a.pathname}),a.search?r("span",{class:"u-query",text:a.search}):null,a.hash?r("span",{class:"u-fragment",text:a.hash}):null))}findingsView(e){if(!e.length)return null;let n=this.t;return r("ul",{class:"url-findings",part:"findings",attrs:{"aria-label":n("urlFindings")}},...e.map(t=>{let a={...t.params};if(typeof a.note=="string"&&(a.note=n(`urlNote_${a.note}`)),typeof a.encoding=="string"&&(a.encoding=n(`urlEncoding_${a.encoding}`)),this.flag("defang",!0))for(let o of["host","domain","fake","lookalike","unicode"])typeof a[o]=="string"&&(a[o]=String(a[o]).replace(/\./g,"[.]"));return r("li",{class:`url-finding ${t.level}`,attrs:{"data-finding":t.id}},p(t.level==="info"?"help":"alert"),r("span",{text:n(`urlFinding_${t.id}`,a)}))}))}partsView(e){let n=this.t,t=this.flag("defang",!0),a=i=>t?i.replace(/\./g,"[.]"):i,o=[["urlScheme",e.scheme],["urlUser",e.username],["urlPassword",e.password?n("urlPasswordHidden",{count:[...e.password].length}):""],["urlHost",a(e.hostType==="domain"?e.hostUnicode:e.host)],["urlHostAscii",e.hostUnicode!==e.host?a(e.host):""],["urlDomain",e.hostType==="domain"?a(e.domain):""],["urlSubdomain",a(e.subdomain)],["urlSuffix",e.suffix],["urlPort",e.port],["urlPath",e.path==="/"?"":e.path],["urlFragment",e.fragment]],s=r("table",{class:"url-parts",part:"parts",attrs:{"aria-label":n("urlParts")}},r("tbody",{},...o.filter(([,i])=>i).map(([i,u])=>r("tr",{},r("th",{attrs:{scope:"row"},text:n(i)}),r("td",{},r("code",{text:u}))))));if(!e.query.length)return s;let d=r("details",{class:"url-params-box",attrs:{open:e.query.length<=12}},r("summary",{text:n("urlParams",{count:e.query.length})}),r("div",{class:"url-scroll"},r("table",{class:"url-params",part:"params"},r("thead",{},r("tr",{},r("th",{attrs:{scope:"col"},text:n("urlParamName")}),r("th",{attrs:{scope:"col"},text:n("urlParamValue")}))),r("tbody",{},...e.query.map(i=>r("tr",{class:i.tracking?"tracking":""},r("th",{attrs:{scope:"row"}},r("code",{text:i.name}),i.tracking?r("span",{class:"url-tag",text:n("urlTracking")}):null),r("td",{},r("code",{text:i.value}))))))));return r("div",{class:"url-details"},s,d)}createEditor(){return this.editor?.destroy(),this.editor=new L({text:this.text??"",language:"plaintext",lineNumbers:!0,wrap:!0,highlightLimit:v().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>y(this,w.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),300)}};export{N as a};
