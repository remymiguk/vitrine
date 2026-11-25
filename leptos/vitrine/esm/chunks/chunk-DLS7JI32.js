/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{B as u,C as n,E as h,K as _,O as b,ba as S,c as f,d as y,e as x,j as k,o as i,q as g}from"./chunk-JAZI474S.js";import{k as m,l as w,m as C}from"./chunk-SCKP2KTO.js";var A=`/*
 * Consent: a banner fixed to the window, a settings dialog, and a button to change the choice.
 * The frame of the other elements is not drawn.
 */
:host {
  display: contents;
}

:host([position='inline']) {
  display: block;
  margin-block: var(--vt-margin, 0 var(--_space-4));
}

.vt {
  overflow: visible;
  background: transparent;
  border: 0;
  border-radius: 0;
  color: var(--_fg);
  font: 400 14px / 1.5 var(--_font-ui);
}

.cs-banner {
  position: fixed;
  inset-inline: 16px;
  z-index: 2147483000;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--_space-2) var(--_space-5);
  max-width: 1080px;
  margin-inline: auto;
  padding: var(--_space-4) var(--_space-5);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius);
  background: var(--_surface-raised);
  color: var(--_fg);
  box-shadow: 0 12px 40px rgb(0 0 0 / 0.18);
  animation: vt-cs-in var(--_duration, 200ms) var(--_easing, ease-out);
}

.cs-banner.bottom {
  bottom: 16px;
}

.cs-banner.top {
  top: 16px;
}

@keyframes vt-cs-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
}

.cs-title {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
}

.cs-banner .cs-title {
  grid-column: 1 / -1;
}

.cs-text {
  margin: 0;
  color: var(--_fg);
}

.cs-policy {
  color: var(--_accent-fg);
  white-space: nowrap;
}

.cs-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--_space-2);
}

/* Accept and reject look the same: refusing is as easy as accepting. */
.cs-button {
  min-height: 40px;
  padding: 0 var(--_space-4);
  border: 1px solid var(--_accent);
  border-radius: var(--_radius-sm);
  background: var(--_accent);
  color: var(--_on-accent);
  font: inherit;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
}

.cs-button.quiet {
  border-color: var(--_border-strong);
  background: transparent;
  color: var(--_fg);
}

.cs-button:hover {
  filter: brightness(1.08);
}

.cs-button.quiet:hover {
  background: var(--_accent-soft);
  filter: none;
}

.cs-button:focus-visible,
.cs-reopen:focus-visible,
.cs-close:focus-visible,
.cs-policy:focus-visible,
.cs-cookies > summary:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.cs-reopen {
  position: fixed;
  inset-inline-start: 16px;
  z-index: 2147483000;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  background: var(--_surface-raised);
  color: var(--_fg);
  box-shadow: 0 4px 16px rgb(0 0 0 / 0.16);
  cursor: pointer;
}

.cs-reopen.bottom {
  bottom: 16px;
}

.cs-reopen.top {
  top: 16px;
}

.cs-reopen .icon {
  width: 20px;
  height: 20px;
}

/* ---------- Settings ---------- */

.cs-dialog {
  width: min(640px, calc(100vw - 32px));
  max-height: calc(100vh - 32px);
  padding: 0;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius);
  background: var(--_surface-raised);
  color: var(--_fg);
  box-shadow: 0 24px 64px rgb(0 0 0 / 0.3);
}

.cs-dialog::backdrop {
  background: rgb(0 0 0 / 0.45);
}

.cs-settings {
  display: grid;
  gap: var(--_space-3);
  padding: var(--_space-5);
}

.cs-inline .cs-settings {
  padding: var(--_space-4);
  border: 1px solid var(--_border);
  border-radius: var(--_radius);
  background: var(--_surface);
}

.cs-settings-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--_space-3);
}

.cs-close {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: var(--_radius-full);
  background: transparent;
  color: var(--_fg-muted);
  cursor: pointer;
}

.cs-close:hover {
  background: var(--_accent-soft);
  color: var(--_fg);
}

.cs-close .icon {
  width: 18px;
  height: 18px;
}

.cs-status {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-ui);
}

.cs-gpc {
  display: flex;
  align-items: flex-start;
  gap: var(--_space-2);
  margin: 0;
  padding: var(--_space-2) var(--_space-3);
  border-inline-start: 3px solid var(--_success);
  border-radius: var(--_radius-sm);
  background: color-mix(in srgb, var(--_success) 10%, transparent);
  font-size: var(--_font-size-ui);
}

.cs-gpc .icon {
  flex: none;
  width: 16px;
  height: 16px;
  margin-top: 2px;
  color: var(--_success);
}

.cs-categories {
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.cs-category {
  display: grid;
  gap: var(--_space-1);
  padding: var(--_space-3) var(--_space-4);
}

.cs-category + .cs-category {
  border-top: 1px solid var(--_border);
}

.cs-category-head {
  display: flex;
  align-items: center;
  gap: var(--_space-3);
}

.cs-category-label {
  flex: 1;
  font-weight: 600;
  cursor: pointer;
}

.cs-always {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.cs-category-text {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-ui);
}

.cs-switch {
  position: relative;
  display: inline-grid;
  flex: none;
  width: 40px;
  height: 22px;
}

.cs-switch-input {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin: 0;
  opacity: 0;
  cursor: pointer;
}

.cs-switch-input:disabled {
  cursor: not-allowed;
}

.cs-switch-track {
  width: 40px;
  height: 22px;
  border-radius: var(--_radius-full);
  background: var(--_border-strong);
  transition: background-color var(--_duration-fast) var(--_easing);
}

.cs-switch-track::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 16px;
  height: 16px;
  border-radius: var(--_radius-full);
  background: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.3);
  transition: transform var(--_duration-fast) var(--_easing);
}

.cs-switch-input:checked + .cs-switch-track {
  background: var(--_accent);
}

.cs-switch-input:checked + .cs-switch-track::after {
  transform: translateX(18px);
}

.cs-switch-input:disabled + .cs-switch-track {
  opacity: 0.6;
}

.cs-switch-input:focus-visible + .cs-switch-track {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.cs-cookies {
  font-size: var(--_font-size-small);
}

.cs-cookies > summary {
  width: fit-content;
  color: var(--_accent-fg);
  cursor: pointer;
}

.cs-cookies table {
  width: 100%;
  margin-top: var(--_space-2);
  border-collapse: collapse;
}

.cs-cookies th,
.cs-cookies td {
  padding: var(--_space-1) var(--_space-2);
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
}

.cs-cookies code {
  font-family: var(--_font-mono);
}

@media (max-width: 720px) {
  .cs-banner {
    grid-template-columns: 1fr;
  }

  .cs-actions {
    justify-content: stretch;
  }

  .cs-actions .cs-button {
    flex: 1 1 auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cs-banner {
    animation: none;
  }

  .cs-switch-track,
  .cs-switch-track::after {
    transition: none;
  }
}
`;var q=["necessary","preferences","analytics","marketing"],j={necessary:["security_storage"],preferences:["functionality_storage","personalization_storage"],analytics:["analytics_storage"],marketing:["ad_storage","ad_user_data","ad_personalization"]},M=[...new Set(Object.values(j).flat())],R=/^[a-z][a-z0-9_-]{0,39}$/;function T(c){return{id:c,label:"",description:"",required:c==="necessary",consentMode:j[c]??[],cookies:[]}}function O(c,t=[]){let s=u(c)?c:{},e=Array.isArray(c)?c:Array.isArray(s.categories)?s.categories:t.length?t:q,o=[];for(let r of e.slice(0,20)){let a=typeof r=="string"?{id:r}:u(r)?r:null,d=n(a?.id,40).toLowerCase();if(!a||!R.test(d)||o.some(l=>l.id===d))continue;let v=T(d);o.push({id:d,label:n(a.label,100),description:n(a.description,1e3),required:d==="necessary"||a.required===!0,consentMode:Array.isArray(a.consentMode)?a.consentMode.map(l=>n(l,40)).filter(l=>/^[a-z_]+$/.test(l)):v.consentMode,cookies:Array.isArray(a.cookies)?a.cookies.slice(0,100).filter(u).map(l=>({name:n(l.name,100),provider:n(l.provider,100),purpose:n(l.purpose,500),duration:n(l.duration,100)})).filter(l=>l.name):[]})}return o.some(r=>r.id==="necessary")?o.sort((r,a)=>r.id==="necessary"?-1:a.id==="necessary"?1:0):o.unshift(T("necessary")),{categories:o,title:n(s.title,200),text:n(s.text,2e3),policy:h(s.policy),version:n(s.version,40)}}function p(c,t){return Object.fromEntries(c.categories.map(s=>[s.id,s.required||(typeof t=="function"?t(s):t)]))}function z(c,t,s){if(!c)return null;try{let e=JSON.parse(c);if(!u(e)||!u(e.categories)||n(e.version,40)!==s.version)return null;let o=Date.parse(n(e.date,40));if(Number.isNaN(o)||o>s.now+6e4||s.now-o>s.days*864e5)return null;let r=e.categories,a=p(t,v=>r[v.id]===!0),d=["accept","reject","save","gpc"].includes(e.source)?e.source:"save";return{id:n(e.id,64),date:new Date(o).toISOString(),version:s.version,categories:a,source:d}}catch{return null}}function N(c,t,s,e){return{id:typeof crypto.randomUUID=="function"?crypto.randomUUID():String(e),date:new Date(e).toISOString(),version:s,categories:{...c},source:t}}function P(c,t){let s=Object.fromEntries(M.map(e=>[e,"denied"]));for(let e of c.categories)for(let o of e.consentMode)t[e.id]&&(s[o]="granted");return s}function L(c){return Object.entries(c).filter(([,t])=>t).map(([t])=>t).join(".")}function E(c,t){let s=0;for(let e of c.querySelectorAll("[data-consent]:not([data-consent-on], [data-consent-refused])")){let o=(e.getAttribute("data-consent")??"").split(/[\s,]+/).filter(Boolean);if(!(!o.length||!o.every(r=>t[r]===!0)))if(e.setAttribute("data-consent-on",""),s+=1,e instanceof HTMLScriptElement)try{let r=document.createElement("script");for(let d of e.attributes)["type","data-consent","data-consent-on","data-type"].includes(d.name)||r.setAttribute(d.name,d.value);let a=e.getAttribute("data-type");a&&(r.type=a),e.nonce&&(r.nonce=e.nonce),!e.src&&e.text&&(r.text=e.text),e.after(r)}catch{e.removeAttribute("data-consent-on"),e.setAttribute("data-consent-refused",""),s-=1}else{let r=h(e.getAttribute("data-src"));r&&e.setAttribute("src",r);let a=e.getAttribute("data-srcset");a&&!/javascript:|data:/i.test(a)&&e.setAttribute("srcset",a)}}return s}var D=Object.freeze({csTitle:"Cookies on this site",csText:"We use cookies to make this site work. With your consent, we also use them to remember your preferences, measure the audience and show relevant ads. You can change your choice at any time from \u201CCookie settings\u201D.",csPolicy:"Privacy policy",csAccept:"Accept all",csReject:"Reject all",csCustomize:"Customize",csSave:"Save my choices",csSettings:"Cookie settings",csClose:"Close",csAlwaysOn:"Always on",csCat_necessary:"Necessary",csCat_preferences:"Preferences",csCat_analytics:"Audience measurement",csCat_marketing:"Advertising",csCatText_necessary:"Needed for the site to work: security, your session, this choice. They cannot be turned off.",csCatText_preferences:"Remember your settings, such as the language or the theme.",csCatText_analytics:"Count visits and see which pages are read, to improve the site.",csCatText_marketing:"Show ads that match your interests, here and on other sites.",csCookies:"Cookies used ({count})",csCookieName:"Name",csCookieProvider:"Provider",csCookiePurpose:"Purpose",csCookieDuration:"Duration",csGpc:"Your browser sends Global Privacy Control: audience measurement and advertising are off.",csSaved:"Your choices are saved.",csLastChanged:"Your choice of {date}.",csNoChoice:"You have not chosen yet."}),$=Object.freeze({csTitle:"Les cookies sur ce site",csText:"Nous utilisons des cookies pour faire fonctionner ce site. Avec votre accord, nous les utilisons aussi pour retenir vos pr\xE9f\xE9rences, mesurer l\u2019audience et afficher des publicit\xE9s adapt\xE9es. Vous pouvez changer d\u2019avis \xE0 tout moment depuis \xAB Param\xE8tres des cookies \xBB.",csPolicy:"Politique de confidentialit\xE9",csAccept:"Tout accepter",csReject:"Tout refuser",csCustomize:"Personnaliser",csSave:"Enregistrer mes choix",csSettings:"Param\xE8tres des cookies",csClose:"Fermer",csAlwaysOn:"Toujours actifs",csCat_necessary:"N\xE9cessaires",csCat_preferences:"Pr\xE9f\xE9rences",csCat_analytics:"Mesure d\u2019audience",csCat_marketing:"Publicit\xE9",csCatText_necessary:"Indispensables au site : s\xE9curit\xE9, votre session, ce choix. Ils ne peuvent pas \xEAtre d\xE9sactiv\xE9s.",csCatText_preferences:"Retiennent vos r\xE9glages, comme la langue ou le th\xE8me.",csCatText_analytics:"Comptent les visites et les pages lues, pour am\xE9liorer le site.",csCatText_marketing:"Affichent des publicit\xE9s selon vos centres d\u2019int\xE9r\xEAt, ici et sur d\u2019autres sites.",csCookies:"Cookies utilis\xE9s ({count})",csCookieName:"Nom",csCookieProvider:"Fournisseur",csCookiePurpose:"Finalit\xE9",csCookieDuration:"Dur\xE9e",csGpc:"Votre navigateur envoie Global Privacy Control : la mesure d\u2019audience et la publicit\xE9 sont d\xE9sactiv\xE9es.",csSaved:"Vos choix sont enregistr\xE9s.",csLastChanged:"Votre choix du {date}.",csNoChoice:"Vous n\u2019avez pas encore choisi."});C({en:D,fr:$});var B=["bottom","top","inline"],V=class extends S{static type="consent";static allowEmpty=!0;static componentAttributes=Object.freeze(["categories","policy","version","expires","position","storage-key","cookie","consent-mode","gpc","log-url","reopen"]);static presets={simple:{},full:{}};static styles=[A];static fromData(t){return{content:u(t)||Array.isArray(t)?_(t):""}}constructor(){super(),this.ids={title:g("consent"),text:g("text"),dialog:g("settings"),dialogTitle:g("title")},this.choice=null,this.ready=!1,this.dialogOpen=!1,this.draft={},this.justSaved=!1,this.onDocumentClick=null,this.onSync=null,this.onStorage=null}get settings(){let t;try{t=this.text?.trim()?JSON.parse(this.text):null}catch{t=null}let s=(this.getAttribute("categories")??"").split(",").map(e=>e.trim().toLowerCase()).filter(Boolean);return O(t,s.length?["necessary",...s]:[])}get version(){return(this.getAttribute("version")??"").trim().slice(0,40)||this.settings.version||"1"}get storageKey(){let t=(this.getAttribute("storage-key")??"").trim();return/^[\w.:-]{1,80}$/.test(t)?t:"vitrine-consent"}get position(){return x(this.getAttribute("position"),B,"bottom")}get gpc(){return f(this.getAttribute("gpc"))!==!1&&navigator.globalPrivacyControl===!0}get consent(){return this.choice?{...this.choice.categories}:{}}has(t){return this.choice?.categories[t]===!0}label(t){return t.label||(this.knownCategory(t.id)?this.t(`csCat_${t.id}`):t.id)}description(t){return t.description||(this.knownCategory(t.id)?this.t(`csCatText_${t.id}`):"")}knownCategory(t){return["necessary","preferences","analytics","marketing"].includes(t)}connectedCallback(){super.connectedCallback(),this.onDocumentClick=t=>{t.composedPath().find(e=>e instanceof Element&&e.hasAttribute("data-consent-open"))&&(t.preventDefault(),this.show())},document.addEventListener("click",this.onDocumentClick),this.onSync=t=>{t.target!==this&&t.detail?.action!=="restore"&&this.restore(!1)},document.addEventListener(m.CONSENT,this.onSync),this.onStorage=t=>{t.key===this.storageKey&&this.restore(!1)},window.addEventListener("storage",this.onStorage),this.ready||(this.ready=!0,queueMicrotask(()=>this.restore(!0)))}disconnectedCallback(){super.disconnectedCallback(),this.onDocumentClick&&document.removeEventListener("click",this.onDocumentClick),this.onSync&&document.removeEventListener(m.CONSENT,this.onSync),this.onStorage&&window.removeEventListener("storage",this.onStorage)}restore(t){let s=this.settings,e;try{e=localStorage.getItem(this.storageKey)}catch{e=null}let o=y(this.getAttribute("expires"),{min:1,max:3650,fallback:180}),r=z(e,s,{version:this.version,days:o,now:Date.now()});if(r)this.choice=r,t&&this.apply(r,"restore");else if(t&&this.gpc){this.commit(p(s,!1),"gpc");return}else this.choice=null;this.isConnected&&this.render()}commit(t,s){let e=N(t,s,this.version,Date.now());this.choice=e;try{localStorage.setItem(this.storageKey,JSON.stringify(e))}catch{}this.writeCookie(e),this.sendLog(e),this.dialogOpen=!1,this.justSaved=!0,this.apply(e,s),this.isConnected&&this.render(),this.announce(this.t("csSaved")),this.root.querySelector('[data-focus-key="reopen"], [data-focus-key="save"]')?.focus({preventScroll:!0})}apply(t,s){if(E(document,t.categories),f(this.getAttribute("consent-mode"))===!0){let e=P(this.settings,t.categories),o=window;typeof o.gtag=="function"?o.gtag("consent","update",e):(o.dataLayer=o.dataLayer||[],function(...a){o.dataLayer.push(arguments)}("consent","update",e))}w(this,m.CONSENT,{categories:{...t.categories},action:s,id:t.id})}writeCookie(t){let s=(this.getAttribute("cookie")??"").trim();if(!/^[\w-]{1,64}$/.test(s))return;let e=y(this.getAttribute("expires"),{min:1,max:3650,fallback:180}),o=location.protocol==="https:"?"; Secure":"";document.cookie=`${s}=${encodeURIComponent(L(t.categories))}; Max-Age=${e*86400}; Path=/; SameSite=Lax${o}`}sendLog(t){let s=h(this.getAttribute("log-url"));if(!s||!/^(https:|\/)/.test(s))return;let e=JSON.stringify({...t,page:location.origin+location.pathname,userAgent:navigator.userAgent});try{navigator.sendBeacon?.(s,new Blob([e],{type:"application/json"}))||fetch(s,{method:"POST",body:e,keepalive:!0,credentials:"same-origin",headers:{"Content-Type":"application/json"}}).catch(()=>{})}catch{}}show(){this.draft=this.choice?{...this.choice.categories}:p(this.settings,!1),this.dialogOpen=!0,this.justSaved=!1,this.render()}accept(t){let s=this.settings;this.commit(p(s,e=>!t||t.includes(e.id)),t?"save":"accept")}reject(){this.commit(p(this.settings,!1),"reject")}reset(){try{localStorage.removeItem(this.storageKey)}catch{}let t=(this.getAttribute("cookie")??"").trim();/^[\w-]{1,64}$/.test(t)&&(document.cookie=`${t}=; Max-Age=0; Path=/`),this.choice=null,this.render()}renderContent(t){let s=this.position==="inline";if(t.classList.toggle("cs-inline",s),s){this.dialogOpen||(this.draft=this.choice?{...this.choice.categories}:p(this.settings,!1)),t.append(this.settingsView(!1));return}if(this.ready&&(this.choice?f(this.getAttribute("reopen"))!==!1&&t.append(this.reopenView()):t.append(this.bannerView()),this.dialogOpen)){let e=i("dialog",{class:"cs-dialog",part:"dialog",attrs:{"aria-labelledby":this.ids.dialogTitle}},this.settingsView(!0));e.addEventListener("close",()=>{this.dialogOpen&&(this.dialogOpen=!1,this.render(),this.root.querySelector('[data-focus-key="reopen"], [data-focus-key="customize"]')?.focus())}),t.append(e);try{e.open||e.showModal()}catch{e.setAttribute("open","")}}}button(t,s,e,o=""){return i("button",{class:`cs-button ${o}`,part:"button",text:s,attrs:{type:"button","data-focus-key":t},on:{click:e}})}bannerView(){let t=this.t,s=this.settings,e=h(this.getAttribute("policy"))??s.policy;return i("section",{class:`cs-banner ${this.position}`,part:"banner",attrs:{"aria-labelledby":this.ids.title,"aria-describedby":this.ids.text}},i("h2",{class:"cs-title",text:s.title||k(this.getAttribute("label"),200)||t("csTitle"),attrs:{id:this.ids.title}}),i("p",{class:"cs-text",attrs:{id:this.ids.text}},s.text||t("csText"),e?" ":null,e?i("a",{class:"cs-policy",text:t("csPolicy"),attrs:{href:e}}):null),i("div",{class:"cs-actions"},this.button("customize",t("csCustomize"),()=>this.show(),"quiet"),this.button("reject",t("csReject"),()=>this.reject()),this.button("accept",t("csAccept"),()=>this.accept())))}reopenView(){let t=this.t("csSettings");return i("button",{class:`cs-reopen ${this.position}`,part:"reopen",attrs:{type:"button","aria-label":t,title:t,"data-focus-key":"reopen"},on:{click:()=>this.show()}},b("shield-check"))}settingsView(t){let s=this.t,e=this.settings,o=h(this.getAttribute("policy"))??e.policy,r=this.choice?s("csLastChanged",{date:new Intl.DateTimeFormat(this.locale,{dateStyle:"medium",timeStyle:"short"}).format(new Date(this.choice.date))}):s("csNoChoice");return i("div",{class:"cs-settings"},i("div",{class:"cs-settings-head"},i("h2",{class:"cs-title",text:s("csSettings"),attrs:{id:this.ids.dialogTitle}}),t?i("button",{class:"cs-close",attrs:{type:"button","aria-label":s("csClose"),title:s("csClose"),"data-focus-key":"close"},on:{click:()=>this.root.querySelector("dialog")?.close()}},b("close")):null),i("p",{class:"cs-status",attrs:{"aria-live":"polite"},text:this.justSaved&&!t?s("csSaved"):r}),this.gpc?i("p",{class:"cs-gpc"},b("shield-check"),i("span",{text:s("csGpc")})):null,i("ul",{class:"cs-categories"},...e.categories.map(a=>this.categoryView(a))),o?i("a",{class:"cs-policy",text:s("csPolicy"),attrs:{href:o}}):null,i("div",{class:"cs-actions"},this.button("reject-all",s("csReject"),()=>this.reject()),this.button("save",s("csSave"),()=>this.commit(p(e,a=>this.draft[a.id]===!0),"save"),"quiet"),this.button("accept-all",s("csAccept"),()=>this.accept())))}categoryView(t){let s=this.t,e=`${this.ids.dialog}-${t.id}`,o=`${e}-text`,r=i("input",{class:"cs-switch-input",attrs:{id:e,type:"checkbox",role:"switch",checked:t.required||this.draft[t.id]===!0,disabled:t.required,"aria-describedby":o,"data-focus-key":`category-${t.id}`},on:{change:a=>{this.draft={...this.draft,[t.id]:a.target.checked}}}});return i("li",{class:"cs-category",part:"category"},i("div",{class:"cs-category-head"},i("label",{class:"cs-category-label",attrs:{for:e}},i("span",{text:this.label(t)})),t.required?i("span",{class:"cs-always",text:s("csAlwaysOn")}):null,i("span",{class:"cs-switch"},r,i("span",{class:"cs-switch-track",attrs:{"aria-hidden":"true"}}))),i("p",{class:"cs-category-text",text:this.description(t),attrs:{id:o}}),t.cookies.length?this.cookiesView(t):null)}cookiesView(t){let s=this.t;return i("details",{class:"cs-cookies"},i("summary",{text:s("csCookies",{count:t.cookies.length}),attrs:{"data-focus-key":`cookies-${t.id}`}}),i("table",{},i("thead",{},i("tr",{},...["csCookieName","csCookieProvider","csCookiePurpose","csCookieDuration"].map(e=>i("th",{text:s(e),attrs:{scope:"col"}})))),i("tbody",{},...t.cookies.map(e=>i("tr",{},i("td",{},i("code",{text:e.name})),i("td",{text:e.provider}),i("td",{text:e.purpose}),i("td",{text:e.duration}))))))}};export{V as a};
