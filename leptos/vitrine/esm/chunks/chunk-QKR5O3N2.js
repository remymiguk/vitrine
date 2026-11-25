/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as f,b,c as w,d as E,e as V,f as D}from"./chunk-GRLVRD4V.js";import{o as M}from"./chunk-BTEG3GEC.js";import{r as x}from"./chunk-37OSRZJK.js";import{_ as R,ba as I,c as y,o as t,q as S}from"./chunk-JAZI474S.js";import{h as A,k as m,l as h,m as C}from"./chunk-SCKP2KTO.js";var U=`/*
 * CVSS vectors: the score with its severity and a bar, the vector, and the metrics by group.
 * Severity is always written in words; the color only repeats it.
 */
.cvss-body {
  display: grid;
  gap: var(--_space-4);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.cvss-score {
  --_sev: var(--_fg-muted);
  display: grid;
  gap: var(--_space-3);
  padding: var(--_space-4);
  border: 1px solid color-mix(in srgb, var(--_sev) 40%, var(--_border));
  border-radius: var(--_radius-sm);
  background: color-mix(in srgb, var(--_sev) 6%, var(--_surface));
}

.cvss-score.sev-low {
  --_sev: var(--_info);
}

.cvss-score.sev-medium {
  --_sev: var(--_warning);
}

.cvss-score.sev-high {
  --_sev: color-mix(in srgb, var(--_warning) 45%, var(--_danger));
}

.cvss-score.sev-critical {
  --_sev: var(--_danger);
}

.cvss-main {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--_space-3);
}

.cvss-number {
  color: var(--_fg);
  font-size: 2.25em;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  line-height: 1;
}

.cvss-severity {
  padding: 2px var(--_space-2);
  border: 1px solid var(--_sev);
  border-radius: var(--_radius-full);
  color: var(--_sev);
  font-weight: 600;
}

.cvss-gauge {
  height: 8px;
  overflow: hidden;
  border-radius: var(--_radius-full);
  background: var(--_surface-sunken);
}

.cvss-fill {
  display: block;
  width: calc(var(--_value, 0) * 100%);
  height: 100%;
  border-radius: inherit;
  background: var(--_sev);
}

.cvss-subscores {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2) var(--_space-5);
  margin: 0;
}

.cvss-subscores div {
  display: flex;
  gap: var(--_space-1);
}

.cvss-subscores dt {
  color: var(--_fg-muted);
}

.cvss-subscores dd {
  margin: 0;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}

.cvss-note {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.cvss-vector,
.cvss-raw {
  margin: 0;
  padding: var(--_space-3);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
  color: var(--_code-fg);
  font-family: var(--_font-mono);
  font-size: var(--_font-size);
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.cvss-prefix {
  color: var(--_syntax-keyword);
}

.cvss-pair {
  color: var(--_syntax-string);
}

.cvss-slash {
  color: var(--_fg-muted);
}

.cvss-groups {
  display: grid;
  gap: var(--_space-4);
}

.cvss-group {
  display: grid;
  gap: var(--_space-2);
  min-width: 0;
  overflow-x: auto;
}

.cvss-title {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.cvss-table {
  width: 100%;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  border-collapse: separate;
  border-spacing: 0;
}

.cvss-table th,
.cvss-table td {
  padding: 6px var(--_space-3);
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
}

.cvss-table tbody tr:last-child > * {
  border-bottom: 0;
}

.cvss-table thead th {
  background: var(--_surface-sunken);
  font-weight: 600;
}

.cvss-table tbody th {
  font-weight: 500;
}

.cvss-code {
  display: inline-block;
  min-width: 3ch;
  margin-inline-end: var(--_space-2);
  color: var(--_fg-muted);
  font-family: var(--_font-mono);
}

.cvss-meaning,
.cvss-undefined {
  color: var(--_fg-muted);
}

.cvss-select {
  max-width: 100%;
  padding: 4px var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: var(--_fg);
  font: inherit;
}

.cvss-select:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.cvss-edit > .editor-body {
  max-height: min(30vh, 160px);
  border-bottom: 1px solid var(--_border);
}

@media (max-width: 560px) {
  .cvss-meaning,
  .cvss-table thead th:nth-child(3) {
    display: none;
  }
}
`;var N=Object.freeze({cvssScore:"Score",cvssBase:"Base",cvssTemporal:"Temporal",cvssEnvironmental:"Environmental",cvssThreat:"Threat",cvssSupplemental:"Supplemental",cvssImpact:"Impact",cvssExploitability:"Exploitability",cvssMetric:"Metric",cvssValue:"Value",cvssMeaning:"Meaning",cvssVector:"Vector",cvssCopyVector:"Copy vector",cvssModified:"Modified {name}",cvssNoScore4:"The CVSS 4.0 score comes from the lookup tables of the specification and is not computed here.",cvssGivenScore:"Score given with the vector, not computed here.",cvssSeverity_none:"None",cvssSeverity_low:"Low",cvssSeverity_medium:"Medium",cvssSeverity_high:"High",cvssSeverity_critical:"Critical",cvssInvalidEmpty:"No CVSS vector.",cvssInvalidLength:"The vector is too long.",cvssInvalidVersion:"Unknown CVSS version: 3.0, 3.1 and 4.0 are read.",cvssInvalidSyntax:"\u201C{metric}\u201D is not a metric: write NAME:VALUE, separated by slashes.",cvssInvalidUnknown:"\u201C{metric}\u201D is not a metric of this CVSS version.",cvssInvalidDuplicate:"\u201C{metric}\u201D is given twice.",cvssInvalidValue:"\u201C{metric}\u201D has a value this version does not allow.",cvssInvalidMissing:"The base metric \u201C{metric}\u201D is missing.",cvssM_AV:"Attack vector",cvssD_AV:"How the attacker reaches the vulnerable component.",cvssM_AC:"Attack complexity",cvssD_AC:"Conditions beyond the attacker\u2019s control that must exist.",cvssM_AT:"Attack requirements",cvssD_AT:"Deployment or execution conditions the attack depends on.",cvssM_PR:"Privileges required",cvssD_PR:"Privileges the attacker needs before the attack.",cvssM_UI:"User interaction",cvssD_UI:"Whether a person other than the attacker must take part.",cvssM_S:"Scope",cvssD_S:"Whether the impact reaches components beyond the vulnerable one.",cvssM_C:"Confidentiality",cvssD_C:"Information disclosed to people not allowed to see it.",cvssM_I:"Integrity",cvssD_I:"Information the attacker can change.",cvssM_A:"Availability",cvssD_A:"How much the component can be made unavailable.",cvssM_VC:"Confidentiality (vulnerable system)",cvssD_VC:"Information of the vulnerable system disclosed.",cvssM_VI:"Integrity (vulnerable system)",cvssD_VI:"Information of the vulnerable system changed.",cvssM_VA:"Availability (vulnerable system)",cvssD_VA:"Vulnerable system made unavailable.",cvssM_SC:"Confidentiality (subsequent systems)",cvssD_SC:"Information of other systems disclosed.",cvssM_SI:"Integrity (subsequent systems)",cvssD_SI:"Information of other systems changed.",cvssM_SA:"Availability (subsequent systems)",cvssD_SA:"Other systems made unavailable.",cvssM_E:"Exploit code maturity",cvssD_E:"How ready exploit code is.",cvssM_RL:"Remediation level",cvssD_RL:"The fix available.",cvssM_RC:"Report confidence",cvssD_RC:"How certain the vulnerability is.",cvssM_4E:"Exploit maturity",cvssD_4E:"Whether the vulnerability is attacked or has a public proof of concept.",cvssM_CR:"Confidentiality requirement",cvssD_CR:"How much confidentiality matters to your organization.",cvssM_IR:"Integrity requirement",cvssD_IR:"How much integrity matters to your organization.",cvssM_AR:"Availability requirement",cvssD_AR:"How much availability matters to your organization.",cvssM_4S:"Safety",cvssD_4S:"Whether people may be harmed.",cvssM_AU:"Automatable",cvssD_AU:"Whether the attack can be automated across many targets.",cvssM_R:"Recovery",cvssD_R:"How the system recovers after an attack.",cvssM_V:"Value density",cvssD_V:"Resources the attacker gains with one attack.",cvssM_RE:"Response effort",cvssD_RE:"Effort needed to respond to the vulnerability.",cvssM_U:"Provider urgency",cvssD_U:"Urgency set by the vendor.",cvssV_X:"Not defined",cvssV_safety:"Safety",cvssV_AV_N:"Network",cvssV_AV_A:"Adjacent",cvssV_AV_L:"Local",cvssV_AV_P:"Physical",cvssV_AC_L:"Low",cvssV_AC_H:"High",cvssV_AT_N:"None",cvssV_AT_P:"Present",cvssV_PR_N:"None",cvssV_PR_L:"Low",cvssV_PR_H:"High",cvssV_UI_N:"None",cvssV_UI_R:"Required",cvssV_UI_P:"Passive",cvssV_UI_A:"Active",cvssV_S_U:"Unchanged",cvssV_S_C:"Changed",cvssV_CIA_H:"High",cvssV_CIA_L:"Low",cvssV_CIA_N:"None",cvssV_E_H:"High",cvssV_E_F:"Functional",cvssV_E_P:"Proof of concept",cvssV_E_U:"Unproven",cvssV_RL_U:"Unavailable",cvssV_RL_W:"Workaround",cvssV_RL_T:"Temporary fix",cvssV_RL_O:"Official fix",cvssV_RC_C:"Confirmed",cvssV_RC_R:"Reasonable",cvssV_RC_U:"Unknown",cvssV_4E_A:"Attacked",cvssV_4E_P:"Proof of concept",cvssV_4E_U:"Unreported",cvssV_REQ_H:"High",cvssV_REQ_M:"Medium",cvssV_REQ_L:"Low",cvssV_4S_N:"Negligible",cvssV_4S_P:"Present",cvssV_AU_N:"No",cvssV_AU_Y:"Yes",cvssV_R_A:"Automatic",cvssV_R_U:"User",cvssV_R_I:"Irrecoverable",cvssV_V_D:"Diffuse",cvssV_V_C:"Concentrated",cvssV_RE_L:"Low",cvssV_RE_M:"Moderate",cvssV_RE_H:"High",cvssV_U_Clear:"Clear",cvssV_U_Green:"Green",cvssV_U_Amber:"Amber",cvssV_U_Red:"Red"}),k={cvssScore:"Score",cvssBase:"Base",cvssTemporal:"Temporel",cvssEnvironmental:"Environnemental",cvssThreat:"Menace",cvssSupplemental:"Compl\xE9mentaire",cvssImpact:"Impact",cvssExploitability:"Exploitabilit\xE9",cvssMetric:"M\xE9trique",cvssValue:"Valeur",cvssMeaning:"Signification",cvssVector:"Vecteur",cvssCopyVector:"Copier le vecteur",cvssModified:"{name} (modifi\xE9)",cvssNoScore4:"Le score CVSS 4.0 vient des tables de la sp\xE9cification et n\u2019est pas calcul\xE9 ici.",cvssGivenScore:"Score donn\xE9 avec le vecteur, pas calcul\xE9 ici.",cvssSeverity_none:"Aucune",cvssSeverity_low:"Faible",cvssSeverity_medium:"Moyenne",cvssSeverity_high:"\xC9lev\xE9e",cvssSeverity_critical:"Critique",cvssInvalidEmpty:"Aucun vecteur CVSS.",cvssInvalidLength:"Le vecteur est trop long.",cvssInvalidVersion:"Version CVSS inconnue : 3.0, 3.1 et 4.0 sont lues.",cvssInvalidSyntax:"\xAB {metric} \xBB n\u2019est pas une m\xE9trique : \xE9crivez NOM:VALEUR, s\xE9par\xE9s par des barres obliques.",cvssInvalidUnknown:"\xAB {metric} \xBB n\u2019est pas une m\xE9trique de cette version de CVSS.",cvssInvalidDuplicate:"\xAB {metric} \xBB est donn\xE9e deux fois.",cvssInvalidValue:"\xAB {metric} \xBB a une valeur que cette version n\u2019accepte pas.",cvssInvalidMissing:"La m\xE9trique de base \xAB {metric} \xBB manque.",cvssM_AV:"Vecteur d\u2019attaque",cvssD_AV:"Comment l\u2019attaquant atteint le composant vuln\xE9rable.",cvssM_AC:"Complexit\xE9 de l\u2019attaque",cvssD_AC:"Conditions hors du contr\xF4le de l\u2019attaquant qui doivent \xEAtre r\xE9unies.",cvssM_AT:"Pr\xE9requis de l\u2019attaque",cvssD_AT:"Conditions de d\xE9ploiement ou d\u2019ex\xE9cution dont d\xE9pend l\u2019attaque.",cvssM_PR:"Privil\xE8ges requis",cvssD_PR:"Privil\xE8ges dont l\u2019attaquant a besoin avant l\u2019attaque.",cvssM_UI:"Interaction utilisateur",cvssD_UI:"Si une personne autre que l\u2019attaquant doit intervenir.",cvssM_S:"Port\xE9e",cvssD_S:"Si l\u2019impact touche d\u2019autres composants que le composant vuln\xE9rable.",cvssM_C:"Confidentialit\xE9",cvssD_C:"Informations divulgu\xE9es \xE0 des personnes non autoris\xE9es.",cvssM_I:"Int\xE9grit\xE9",cvssD_I:"Informations que l\u2019attaquant peut modifier.",cvssM_A:"Disponibilit\xE9",cvssD_A:"\xC0 quel point le composant peut \xEAtre rendu indisponible.",cvssM_VC:"Confidentialit\xE9 (syst\xE8me vuln\xE9rable)",cvssD_VC:"Informations du syst\xE8me vuln\xE9rable divulgu\xE9es.",cvssM_VI:"Int\xE9grit\xE9 (syst\xE8me vuln\xE9rable)",cvssD_VI:"Informations du syst\xE8me vuln\xE9rable modifi\xE9es.",cvssM_VA:"Disponibilit\xE9 (syst\xE8me vuln\xE9rable)",cvssD_VA:"Syst\xE8me vuln\xE9rable rendu indisponible.",cvssM_SC:"Confidentialit\xE9 (syst\xE8mes suivants)",cvssD_SC:"Informations d\u2019autres syst\xE8mes divulgu\xE9es.",cvssM_SI:"Int\xE9grit\xE9 (syst\xE8mes suivants)",cvssD_SI:"Informations d\u2019autres syst\xE8mes modifi\xE9es.",cvssM_SA:"Disponibilit\xE9 (syst\xE8mes suivants)",cvssD_SA:"Autres syst\xE8mes rendus indisponibles.",cvssM_E:"Maturit\xE9 du code d\u2019exploitation",cvssD_E:"\xC0 quel point un code d\u2019exploitation est pr\xEAt.",cvssM_RL:"Niveau de correction",cvssD_RL:"Le correctif disponible.",cvssM_RC:"Fiabilit\xE9 du signalement",cvssD_RC:"\xC0 quel point la vuln\xE9rabilit\xE9 est certaine.",cvssM_4E:"Maturit\xE9 de l\u2019exploitation",cvssD_4E:"Si la vuln\xE9rabilit\xE9 est attaqu\xE9e ou a une preuve de concept publique.",cvssM_CR:"Besoin de confidentialit\xE9",cvssD_CR:"L\u2019importance de la confidentialit\xE9 pour votre organisation.",cvssM_IR:"Besoin d\u2019int\xE9grit\xE9",cvssD_IR:"L\u2019importance de l\u2019int\xE9grit\xE9 pour votre organisation.",cvssM_AR:"Besoin de disponibilit\xE9",cvssD_AR:"L\u2019importance de la disponibilit\xE9 pour votre organisation.",cvssM_4S:"S\xFBret\xE9",cvssD_4S:"Si des personnes peuvent \xEAtre bless\xE9es.",cvssM_AU:"Automatisable",cvssD_AU:"Si l\u2019attaque peut \xEAtre automatis\xE9e sur de nombreuses cibles.",cvssM_R:"R\xE9tablissement",cvssD_R:"Comment le syst\xE8me se r\xE9tablit apr\xE8s une attaque.",cvssM_V:"Densit\xE9 de valeur",cvssD_V:"Ressources que l\u2019attaquant obtient en une attaque.",cvssM_RE:"Effort de r\xE9ponse",cvssD_RE:"Effort n\xE9cessaire pour r\xE9pondre \xE0 la vuln\xE9rabilit\xE9.",cvssM_U:"Urgence du fournisseur",cvssD_U:"Urgence fix\xE9e par l\u2019\xE9diteur.",cvssV_X:"Non d\xE9fini",cvssV_safety:"S\xFBret\xE9",cvssV_AV_N:"R\xE9seau",cvssV_AV_A:"Adjacent",cvssV_AV_L:"Local",cvssV_AV_P:"Physique",cvssV_AC_L:"Faible",cvssV_AC_H:"\xC9lev\xE9e",cvssV_AT_N:"Aucun",cvssV_AT_P:"Pr\xE9sents",cvssV_PR_N:"Aucun",cvssV_PR_L:"Faibles",cvssV_PR_H:"\xC9lev\xE9s",cvssV_UI_N:"Aucune",cvssV_UI_R:"Requise",cvssV_UI_P:"Passive",cvssV_UI_A:"Active",cvssV_S_U:"Inchang\xE9e",cvssV_S_C:"Chang\xE9e",cvssV_CIA_H:"\xC9lev\xE9",cvssV_CIA_L:"Faible",cvssV_CIA_N:"Aucun",cvssV_E_H:"\xC9lev\xE9e",cvssV_E_F:"Fonctionnel",cvssV_E_P:"Preuve de concept",cvssV_E_U:"Non prouv\xE9",cvssV_RL_U:"Indisponible",cvssV_RL_W:"Contournement",cvssV_RL_T:"Correctif temporaire",cvssV_RL_O:"Correctif officiel",cvssV_RC_C:"Confirm\xE9e",cvssV_RC_R:"Raisonnable",cvssV_RC_U:"Inconnue",cvssV_4E_A:"Attaqu\xE9e",cvssV_4E_P:"Preuve de concept",cvssV_4E_U:"Non signal\xE9e",cvssV_REQ_H:"\xC9lev\xE9",cvssV_REQ_M:"Moyen",cvssV_REQ_L:"Faible",cvssV_4S_N:"N\xE9gligeable",cvssV_4S_P:"Pr\xE9sente",cvssV_AU_N:"Non",cvssV_AU_Y:"Oui",cvssV_R_A:"Automatique",cvssV_R_U:"Par l\u2019utilisateur",cvssV_R_I:"Irr\xE9cup\xE9rable",cvssV_V_D:"Diffuse",cvssV_V_C:"Concentr\xE9e",cvssV_RE_L:"Faible",cvssV_RE_M:"Mod\xE9r\xE9",cvssV_RE_H:"\xC9lev\xE9",cvssV_U_Clear:"Clair",cvssV_U_Green:"Vert",cvssV_U_Amber:"Orange",cvssV_U_Red:"Rouge"};C({en:N,fr:k});var q={base:"cvssBase",temporal:"cvssTemporal",threat:"cvssThreat",environmental:"cvssEnvironmental",supplemental:"cvssSupplemental"},L=class extends I{static type="cvss";static fromData=M;static dataAttributes=Object.freeze(["score"]);static componentAttributes=Object.freeze(["score","editable","metrics","all"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,fullscreen:!0}};static styles=[U];static upgradeProperties=["content"];constructor(){super(),this.panelId=S("panel"),this.editor=null,this.previewTimer=void 0}get vector(){let s=b(this.text??"");return s.ok?s.vector:null}get score(){let s=this.vector;return s?this.scoreOf(s).value:null}scoreOf(s){let e=Number.parseFloat(this.getAttribute("score")??"");if(Number.isFinite(e)&&e>=0&&e<=10)return{value:Math.round(e*10)/10,given:!0};let i=V(s);return{value:i?D(i):null,given:!1}}flag(s,e){return y(this.getAttribute(s))??e}renderContent(s){let e=this.t,i=b(this.text??""),r=t("div",{class:"body cvss-body",part:"body"}),a="CVSS";if(i.ok){let n=i.vector;a=`CVSS ${n.version}`,r.append(this.scoreView(n),this.vectorView(n)),this.flag("metrics",!0)&&r.append(this.metricsView(n))}else{let n=`cvssInvalid${i.error[0].toUpperCase()}${i.error.slice(1)}`;r.append(R(e(n,{metric:i.metric??""})),t("pre",{class:"cvss-raw",text:this.text??""}))}let o=t("div",{class:"panel",attrs:{id:this.panelId}}),v=[];if(this.editing){let n=this.createEditor();o.classList.add("cvss-edit"),o.append(t("div",{class:"body editor-body",part:"body source"},n.element),r),v=this.historyButtons(n)}else o.append(r);let l=i.ok?i.vector:null,u=[...v,this.editToggleButton(),this.fullscreenButton(),this.feature("copy")?this.copyButton(()=>l?.vector??this.text??"",e("cvssCopyVector")):null];s.append(...this.chrome({badge:a,actions:u}),o),this.editor?.align()}scoreView(s){let e=this.t,{value:i,given:r}=this.scoreOf(s),a=E(i),o=t("div",{class:`cvss-score sev-${i===null?"unknown":a}`,part:"score"}),v=t("span",{class:"cvss-number",text:i===null?"\u2013":i.toFixed(1)}),l=t("span",{class:"cvss-severity",part:"severity",text:i===null?s.version:e(`cvssSeverity_${a}`)}),u=t("span",{class:"cvss-fill"});u.style.setProperty("--_value",String((i??0)/10));let n=t("div",{class:"cvss-gauge",part:"gauge",attrs:{role:"meter","aria-label":e("cvssScore"),"aria-valuemin":0,"aria-valuemax":10,"aria-valuenow":i??0,"aria-valuetext":i===null?"\u2013":`${i.toFixed(1)} (${l.textContent})`}},u);o.append(t("div",{class:"cvss-main"},v,l),n);let c=V(s);if(c&&!r){let p=[["cvssBase",c.base],["cvssImpact",c.impact],["cvssExploitability",c.exploitability],["cvssTemporal",c.temporal],["cvssEnvironmental",c.environmental]];o.append(t("dl",{class:"cvss-subscores"},...p.filter(([,d])=>d!==null).map(([d,T])=>t("div",{},t("dt",{text:e(d)}),t("dd",{text:Number(T).toFixed(1)})))))}else o.append(t("p",{class:"cvss-note",text:e(r?"cvssGivenScore":"cvssNoScore4")}));return o}vectorView(s){let e=t("code",{class:"cvss-vector",part:"vector",attrs:{"aria-label":this.t("cvssVector")}});return s.vector.split("/").forEach((i,r)=>{r&&e.append(t("span",{class:"cvss-slash",text:"/"}));let a=i.split(":")[0];e.append(t("span",{class:r?"cvss-pair":"cvss-prefix",text:i,attrs:r?{title:this.metricName(s,a)}:{}}))}),e}metricsView(s){let e=this.t,i=this.flag("editable",!1),r=this.flag("all",i),a=f(s.version),o=["base","temporal","threat","environmental","supplemental"],v=t("div",{class:"cvss-groups",part:"metrics"});for(let l of o){let u=a.filter(c=>c.group===l&&(r||c.required||(s.metrics[c.key]??"X")!=="X"));if(!u.length)continue;let n=u.map(c=>{let p=s.metrics[c.key]??"X",d=t("td",{class:"cvss-value"});return i?d.append(this.metricSelect(s,c,p)):d.append(t("code",{class:"cvss-code",text:p}),t("span",{text:this.valueName(s,c.key,p)})),t("tr",{class:p==="X"?"cvss-undefined":""},t("th",{attrs:{scope:"row"}},t("code",{class:"cvss-code",text:c.key}),t("span",{text:this.metricName(s,c.key)})),d,t("td",{class:"cvss-meaning",text:e(`cvssD_${g(s,c.key)}`)}))});v.append(t("section",{class:"cvss-group",attrs:{"aria-label":e(q[l])}},t("h3",{class:"cvss-title",text:e(q[l])}),t("table",{class:"cvss-table"},t("thead",{},t("tr",{},t("th",{attrs:{scope:"col"},text:e("cvssMetric")}),t("th",{attrs:{scope:"col"},text:e("cvssValue")}),t("th",{attrs:{scope:"col"},text:e("cvssMeaning")}))),t("tbody",{},...n))))}return v}metricSelect(s,e,i){let r=t("select",{class:"cvss-select",part:"select",attrs:{"aria-label":this.metricName(s,e.key),"data-focus-key":`metric-${e.key}`},on:{change:()=>{let a={...s.metrics,[e.key]:r.value},o=w(s.version,a);this.edited(o),h(this,m.CHANGE,{value:o});let v=this.activeFocusKey();this.render(),v&&this.restoreFocus(v)}}},...e.values.map(a=>t("option",{text:`${a} \u2014 ${this.valueName(s,e.key,a)}`,attrs:{value:a,selected:a===i}})));return r}metricName(s,e){let i=this.t(`cvssM_${g(s,e)}`);return P(s,e)?this.t("cvssModified",{name:i}):i}valueName(s,e,i){return i==="X"?this.t("cvssV_X"):i==="S"&&/^MS[IA]$/.test(e)?this.t("cvssV_safety"):this.t(`cvssV_${F(s,e)}_${i}`)}createEditor(){return this.editor?.destroy(),this.editor=new x({text:this.text??"",language:"plaintext",lineNumbers:!1,wrap:!0,highlightLimit:A().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:s=>this.edited(s),onChange:s=>h(this,m.CHANGE,{value:s}),history:this.editHistory??void 0}),this.editor}contentEdited(){this.editing&&(clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),200))}};function P(_,s){return s.length>1&&s[0]==="M"&&f(_.version).some(e=>e.key===s.slice(1))}function g(_,s){let e=P(_,s)?s.slice(1):s;return _.version==="4.0"&&(e==="E"||e==="S")?`4${e}`:e}function F(_,s){let e=g(_,s);return/^(?:C|I|A|VC|VI|VA|SC|SI|SA)$/.test(e)?"CIA":/^(?:CR|IR|AR)$/.test(e)?"REQ":e}export{L as a};
