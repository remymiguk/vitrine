/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{b as y}from"./chunk-4DG3OOJM.js";import{a as b,b as D}from"./chunk-C5GGPQHV.js";import{a as L}from"./chunk-PIFKHUVR.js";import{a as R}from"./chunk-5Y6ZLKSA.js";import{a as E}from"./chunk-DTTKBDLP.js";import{a as A}from"./chunk-VUXWEGPX.js";import{B as w,C as p,D as C,E as g,G as k,H as O,O as N,_ as H,b as _,c as z,o as a,q as S}from"./chunk-JAZI474S.js";import{k as V,l as $,m as F}from"./chunk-SCKP2KTO.js";var T=`/*
 * Download: the file for the reader's system, the others, and how to check them.
 */
.dl-body {
  display: grid;
  gap: var(--_space-4);
}

.dl-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2);
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-ui);
}

.dl-meta strong {
  color: var(--_fg);
  font-weight: 600;
}

.dl-pre {
  padding: 1px var(--_space-2);
  border: 1px solid var(--_warning);
  border-radius: var(--_radius-full);
  color: var(--_warning);
  font-size: var(--_font-size-small);
  font-weight: 600;
}

.dl-main {
  display: grid;
  justify-items: start;
  gap: var(--_space-3);
}

.dl-for,
.dl-also,
.dl-verify p,
.dl-verify-files {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-ui);
  overflow-wrap: anywhere;
}

.dl-button {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-3);
  max-width: 100%;
  padding: var(--_space-3) var(--_space-5) var(--_space-3) var(--_space-4);
  border-radius: var(--_radius-sm);
  background: var(--_accent);
  color: var(--_on-accent);
  text-decoration: none;
  transition: filter var(--_duration-fast) var(--_easing);
}

.dl-button:hover {
  filter: brightness(1.06);
}

.dl-button:focus-visible {
  outline: 2px solid var(--_fg);
  outline-offset: 2px;
}

.dl-button .icon {
  flex: none;
  width: 20px;
  height: 20px;
}

.dl-button-text {
  display: grid;
  min-width: 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;
}

.dl-button-file {
  overflow: hidden;
  font-size: var(--_font-size-small);
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dl-alt,
.dl-name,
.dl-meta a {
  color: var(--_accent-fg);
  overflow-wrap: anywhere;
}

.dl-verify {
  display: grid;
  gap: var(--_space-2);
  width: 100%;
}

.dl-hash,
.dl-hash-cell code {
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  overflow-wrap: anywhere;
}

.dl-hash {
  color: var(--_fg);
}

.dl-command {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  min-width: 0;
}

.dl-command pre {
  flex: 1;
  min-width: 0;
  margin: 0;
  padding: var(--_space-2) var(--_space-3);
  overflow-x: auto;
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
  color: var(--_code-fg);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
}

.dl-all summary {
  width: fit-content;
  color: var(--_fg);
  font-weight: 600;
  cursor: pointer;
}

.dl-all summary:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
  border-radius: var(--_radius-sm);
}

.dl-wrap {
  margin-top: var(--_space-3);
  overflow-x: auto;
}

.dl-table tr.dl-best td:first-child {
  box-shadow: inset 3px 0 0 var(--_accent);
}

.dl-hash-cell {
  white-space: nowrap;
}

.dl-hash-cell .btn {
  vertical-align: middle;
}

.dl-verify-files {
  margin-top: var(--_space-3);
}
`;var h=class extends Error{},v=["windows","macos","linux","android","ios","bsd","source","other"],P=["x64","arm64","x86","arm","universal","riscv64"],Q=500,q=["pkg.tar.zst","tar.gz","tar.xz","tar.bz2","tar.zst","flatpakref"],K={windows:["exe","msi","msix","appx","zip","7z"],macos:["dmg","pkg","zip","tar.gz","tar.xz"],linux:["appimage","deb","rpm","tar.gz","tar.xz","flatpak","flatpakref","snap","pkg.tar.zst","zip"],android:["apk","aab"],ios:["ipa"],bsd:["pkg","tar.gz","tar.xz"],source:["tar.gz","zip"],other:[]},u=r=>new RegExp(`(?:^|[^a-z0-9])(?:${r})(?=[^a-z0-9]|$)`),Z=/\.(?:sig|asc|gpg|minisig|sha1|sha256|sha512|sha256sum|md5|pem|crt|cert|sbom|spdx|spdx\.json|cdx\.json|intoto\.jsonl|sigstore|sigstore\.json|bundle)$|(?:^|[^a-z0-9])(?:checksums?|sha256sums?|sha512sums?|hashes)(?:[^a-z0-9]|$)/;function j(r){let e=r.toLowerCase(),t=q.find(s=>e.endsWith(`.${s}`));if(t)return t;if(e.endsWith(".tgz"))return"tar.gz";let o=e.lastIndexOf(".");return o>0&&e.length-o<=11?e.slice(o+1):""}function ee(r){let e=r.toLowerCase(),t=j(e);return u("android").test(e)||["apk","aab"].includes(t)?"android":u("ios|iphoneos").test(e)||t==="ipa"?"ios":u("win|windows|win32|win64|mingw|msvc").test(e)||["exe","msi","msix","appx"].includes(t)?"windows":u("mac|macos|macosx|osx|darwin|apple").test(e)||["dmg","pkg"].includes(t)?"macos":u("freebsd|openbsd|netbsd").test(e)?"bsd":u("linux|musl|gnu|ubuntu|debian|fedora").test(e)||["appimage","deb","rpm","flatpak","flatpakref","snap","pkg.tar.zst"].includes(t)?"linux":u("src|source|sources").test(e)?"source":"other"}function te(r){let e=r.toLowerCase();return u("universal|universal2|fat").test(e)?"universal":/aarch64|arm64|armv8(?!l)/.test(e)?"arm64":/riscv64/.test(e)?"riscv64":/x86[-_]?64|amd64|x64|win64/.test(e)||u("64bit|64-bit").test(e)?"x64":/armv[67]|armhf|armel|armv8l/.test(e)||u("arm").test(e)?"arm":/i[3-6]86|ia32|win32/.test(e)||u("x86|32bit|32-bit").test(e)?"x86":null}function oe(r){let e=new Map;for(let t of r.split(/\r?\n/).slice(0,5e3)){let o=/^([a-f0-9]{64})\s+\*?(.+)$/i.exec(t.trim()),s=/^SHA256\s*\((.+)\)\s*=\s*([a-f0-9]{64})$/i.exec(t.trim());o?e.set(o[2].trim(),o[1].toLowerCase()):s&&e.set(s[1].trim(),s[2].toLowerCase())}return e}function se(r){let e=/^(?:sha256:)?([a-f0-9]{64})$/i.exec(p(r,100));return e?e[1].toLowerCase():null}function re(r,e){let t=g(r.browser_download_url??r.url??r.href??r.download),o=C(r,["name","file","filename","label"],300)||(t?ae(t):"");if(!t||!o)return null;let s=(f,l)=>{let d=p(l,20).toLowerCase();return f.includes(d)?d:null},n=s(v,r.os??r.platform)??ee(o),i=r.verify===!0||Z.test(o.toLowerCase());return{name:o,url:t,size:O(r.size),os:i?"other":n,arch:s(P,r.arch??r.architecture)??te(o),format:p(r.format,20).toLowerCase()||j(o),sha256:se(r.sha256??r.digest??r.checksum)??e.get(o)??null,verify:i}}function ae(r){let e=r.split(/[?#]/)[0].split("/").pop()??"";try{return decodeURIComponent(e).slice(0,300)}catch{return e.slice(0,300)}}function I(r,e={}){let t=r;if(Array.isArray(t)&&t.some(l=>w(l)&&Array.isArray(l.assets))){let l=t.filter(d=>w(d)&&!d.draft);if(t=e.version?l.find(d=>[d.tag_name,d.name,d.version].includes(e.version)):l.find(d=>e.prerelease||!d.prerelease),!t)throw new h("none")}if(Array.isArray(t)&&(t={files:t}),!w(t))throw new h("shape");let o=t,s=[o.assets,o.files,o.downloads].find(Array.isArray);if(!s)throw new h("shape");let n=oe(typeof o.checksums=="string"?o.checksums:""),i=s.filter(w).slice(0,Q).map(l=>re(l,n)).filter(l=>l!==null),f=p(o.tag_name??o.version,100);for(let[l,d]of[["zipball_url","zip"],["tarball_url","tar.gz"]]){let c=g(o[l]);c&&i.push({name:`${f||"source"}.${d}`,url:c,size:null,os:"source",arch:null,format:d,sha256:null,verify:!1})}return{version:f,name:p(o.name,200),date:k(o.published_at??o.date??o.created_at),url:g(o.html_url??o.notes??o.url),prerelease:o.prerelease===!0,assets:i}}function ne(r,{os:e,arch:t}){let o=r??"none",s;return t===null?s=e==="macos"?{universal:0,arm64:0,none:0,x64:1}:{x64:0,none:0,universal:0,x86:1,arm64:2}:(s={[t]:0,universal:0,none:t==="x64"?0:1},t==="x64"&&(s.x86=2),t==="arm64"&&e==="windows"&&Object.assign(s,{x64:2,x86:3}),t==="arm64"&&e==="macos"&&(s.x64=2)),s[o]??-1}function ie(r,e,t=[]){if(r.verify||!e.os||r.os!==e.os)return-1;let o=ne(r.arch,e);if(o<0)return-1;let n=[...t,...K[r.os]].indexOf(r.format),i=(10-o)*1e4+(n<0?0:(100-n)*10);e.arch&&r.arch===e.arch&&(i+=5);let f=r.name.toLowerCase();return/debug|symbols|dbg|pdb|portable|nightly/.test(f)&&(i-=500),r.os==="windows"&&/setup|install/.test(f)&&(i+=3),i}function M(r,e,t=[]){let s=r.map(i=>({asset:i,value:ie(i,e,t)})).filter(i=>i.value>=0).sort((i,f)=>f.value-i.value)[0]?.asset??null,n=r.filter(i=>i!==s&&!i.verify&&i.os===e.os);return{best:s,others:n}}function B(r){let e=r.userAgent??"",t=`${r.userAgentData?.platform??""} ${r.platform??""}`.toLowerCase(),o=null;/android/i.test(e)?o="android":/iphone|ipad|ipod/i.test(e)?o="ios":/win/.test(t)||/windows nt/i.test(e)?o="windows":/mac/.test(t)||/mac os x/i.test(e)?o=(r.maxTouchPoints??0)>1?"ios":"macos":/cros/i.test(e)?o=null:/freebsd|openbsd|netbsd/i.test(e+t)?o="bsd":/linux|x11/i.test(e+t)&&(o="linux");let s=null;return o!=="macos"&&o!=="ios"&&(/arm64|aarch64/i.test(e)?s="arm64":/x86_64|x64|win64|wow64|amd64/i.test(e)?s="x64":/armv[67]|armv8l/i.test(e)?s="arm":/i[3-6]86/i.test(e)&&(s="x86")),{os:o,arch:s}}async function U(r){let e=r.userAgentData?.getHighEntropyValues;if(typeof e!="function")return null;try{let t=await e.call(r.userAgentData,["architecture","bitness"]),o=t.bitness!=="32";if(t.architecture==="arm")return o?"arm64":"arm";if(t.architecture==="x86")return o?"x64":"x86"}catch{}return null}function W(r){let[e,t]=r.trim().toLowerCase().split(/[-_\s/]+/);return v.includes(e)?{os:e,arch:P.includes(t)?t:null}:null}var G=Object.freeze({downloadFor:"Download for {system}",downloadFile:"Download {name}",downloadDetected:"For {system}, the system of this device.",downloadChosen:"For {system}.",downloadUnknown:"Choose the file for your system below.",downloadNoFile:"No file for {system} in this release: choose another below.",downloadAlso:"Also for {system}:",downloadAll:"All downloads",downloadVerifyFiles:"Signatures and checksums",downloadFileCol:"File",downloadSystem:"System",downloadArch:"Architecture",downloadSize:"Size",downloadHash:"SHA-256",downloadCopyHash:"Copy the SHA-256 of {name}",downloadVerify:"Check the download: the command prints the SHA-256 of the file, which must be",downloadCopyCommand:"Copy the command",downloadNotes:"Release notes",downloadPrerelease:"Pre-release",downloadVersion:"Version {version}",downloadEmpty:"This release has no file to download.",downloadNone:"No release to show: they are all drafts or pre-releases.",downloadShape:'Expected a GitHub release, a list of releases, or JSON with "files".',downloadOs_windows:"Windows",downloadOs_macos:"macOS",downloadOs_linux:"Linux",downloadOs_android:"Android",downloadOs_ios:"iOS",downloadOs_bsd:"BSD",downloadOs_source:"Source code",downloadOs_other:"Other files",downloadArch_x64:"64-bit (x64)",downloadArch_arm64:"ARM64",downloadArch_x86:"32-bit (x86)",downloadArch_arm:"ARM (32-bit)",downloadArch_universal:"Universal",downloadArch_riscv64:"RISC-V 64",downloadArch_macArm64:"Apple Silicon",downloadArch_macX64:"Intel",downloadSystemArch:"{system} ({arch})"}),J={downloadFor:"T\xE9l\xE9charger pour {system}",downloadFile:"T\xE9l\xE9charger {name}",downloadDetected:"Pour {system}, le syst\xE8me de cet appareil.",downloadChosen:"Pour {system}.",downloadUnknown:"Choisissez le fichier de votre syst\xE8me ci-dessous.",downloadNoFile:"Aucun fichier pour {system} dans cette version : choisissez-en un autre ci-dessous.",downloadAlso:"Aussi pour {system} :",downloadAll:"Tous les t\xE9l\xE9chargements",downloadVerifyFiles:"Signatures et sommes de contr\xF4le",downloadFileCol:"Fichier",downloadSystem:"Syst\xE8me",downloadArch:"Architecture",downloadSize:"Taille",downloadHash:"SHA-256",downloadCopyHash:"Copier le SHA-256 de {name}",downloadVerify:"V\xE9rifiez le t\xE9l\xE9chargement : la commande affiche le SHA-256 du fichier, qui doit \xEAtre",downloadCopyCommand:"Copier la commande",downloadNotes:"Notes de version",downloadPrerelease:"Pr\xE9version",downloadVersion:"Version {version}",downloadEmpty:"Cette version n\u2019a aucun fichier \xE0 t\xE9l\xE9charger.",downloadNone:"Aucune version \xE0 afficher : ce sont toutes des brouillons ou des pr\xE9versions.",downloadShape:'Une version GitHub, une liste de versions, ou du JSON avec "files" est attendu.',downloadOs_source:"Code source",downloadOs_other:"Autres fichiers",downloadArch_x64:"64 bits (x64)",downloadArch_x86:"32 bits (x86)",downloadArch_arm:"ARM (32 bits)",downloadArch_universal:"Universel"};F({en:G,fr:J});var le=12,X=class extends R{static type="download";static componentAttributes=Object.freeze(["platform","prefer","prerelease","version","all","verify"]);static presets={simple:{},full:{header:!0,dot:!0,fullscreen:!0}};static styles=[_,A,L,E,T];constructor(){super(),this.panelId=S("panel"),this.detected=typeof navigator>"u"?{os:null,arch:null}:B(navigator)}connectedCallback(){super.connectedCallback(),!(this.detected.arch||typeof navigator>"u")&&U(navigator).then(e=>{!e||this.detected.arch||(this.detected={...this.detected,arch:e},this.isConnected&&!this.hasAttribute("platform")&&this.render())})}read(){try{return{release:I(JSON.parse(this.text??""),{prerelease:z(this.getAttribute("prerelease"))===!0,version:this.getAttribute("version")?.trim()||void 0}),error:null}}catch(e){return e instanceof h?{release:null,error:this.t(e.message==="none"?"downloadNone":"downloadShape")}:{release:null,error:this.t("jsonInvalid",{message:e instanceof Error?e.message:""})}}}get release(){return this.read().release}get platform(){let e=this.getAttribute("platform");return e===null?this.detected:W(e)??{os:null,arch:null}}renderContent(e){let{release:t,error:o}=this.read(),s=a("div",{class:"body data-body dl-body",part:"body"});t?t.assets.length?this.renderRelease(s,t):s.append(a("p",{class:"data-none",text:this.t("downloadEmpty")})):s.append(H(o??""));let n=t?.version?t.version:"";this.frameWith(e,s,this.panelId,{file:"release.json",download:!1,badge:n})}renderRelease(e,t){let o=this.platform,s=(this.getAttribute("prefer")??"").split(",").map(f=>f.trim().toLowerCase().replace(/^\./,"")).filter(Boolean),{best:n,others:i}=M(t.assets,o,s);e.append(this.metaView(t)),(o.os||n)&&e.append(this.mainView(o,n,i)),this.flag("all")&&e.append(this.tableView(t.assets,n,!n))}systemName(e,t){let o=this.t,s=o(`downloadOs_${e}`);if(!t||e==="source"||e==="other")return s;let n=e==="macos"&&(t==="arm64"||t==="x64")?t==="arm64"?"downloadArch_macArm64":"downloadArch_macX64":`downloadArch_${t}`;return o("downloadSystemArch",{system:s,arch:o(n)})}metaView(e){let t=this.t,o=a("p",{class:"dl-meta"}),s=[e.version?a("strong",{text:e.name&&e.name!==e.version?e.name:t("downloadVersion",{version:e.version})}):null,e.prerelease?a("span",{class:"dl-pre",text:t("downloadPrerelease")}):null,e.date!==null?a("time",{text:this.formatDate(e.date,{dateStyle:"long"}),attrs:{datetime:new Date(e.date).toISOString()}}):null,e.url?a("a",{text:t("downloadNotes"),attrs:{href:e.url,rel:"noopener"}}):null].filter(n=>n!==null);for(let[n,i]of s.entries())n&&o.append(a("span",{class:"dl-sep",text:"\xB7",attrs:{"aria-hidden":"true"}})),o.append(i);return o}mainView(e,t,o){let s=this.t,n=a("div",{class:"dl-main",part:"main"}),i=!this.hasAttribute("platform");if(!t){let l=e.os?this.systemName(e.os,e.arch):"";return n.append(a("p",{class:"dl-for",text:e.os?s("downloadNoFile",{system:l}):s("downloadUnknown")})),n}let f=this.systemName(t.os,t.arch??e.arch);if(n.append(a("p",{class:"dl-for",text:s(i?"downloadDetected":"downloadChosen",{system:f})}),this.link(t,{class:"dl-button",part:"button",recommended:!0},N("download"),a("span",{class:"dl-button-text"},a("span",{text:s("downloadFor",{system:s(`downloadOs_${t.os}`)})}),a("span",{class:"dl-button-file",text:[t.name,t.size!==null?y(t.size,this.locale):""].filter(Boolean).join(" \xB7 ")})))),o.length){let l=a("p",{class:"dl-also"},a("span",{text:s("downloadAlso",{system:s(`downloadOs_${t.os}`)})}));for(let[d,c]of o.slice(0,8).entries())l.append(d?", ":" ",this.link(c,{class:"dl-alt"},c.name));n.append(l)}return this.flag("verify")&&t.sha256&&n.append(this.verifyView(t)),n}link(e,t,...o){return a("a",{class:t.class,part:t.part,attrs:{href:e.url,rel:"noopener","aria-label":t.recommended?null:this.t("downloadFile",{name:e.name})},on:{click:s=>{let n={name:e.name,url:e.url,os:e.os,arch:e.arch,recommended:!!t.recommended};$(this,V.DOWNLOAD,n)||s.preventDefault()}}},...o)}verifyView(e){let t=this.t,o=e.sha256,s=e.os==="windows"?`Get-FileHash -Algorithm SHA256 ${D(`.\\${e.name}`)}`:e.os==="macos"?`shasum -a 256 ${b(e.name)}`:`sha256sum ${b(e.name)}`;return a("div",{class:"dl-verify",part:"verify"},a("p",{},a("span",{text:`${t("downloadVerify")} `}),a("code",{class:"dl-hash",text:o})),a("div",{class:"dl-command"},a("pre",{attrs:{tabindex:"0"}},a("code",{text:s})),this.copyButton(()=>s,t("downloadCopyCommand"),"verify-command")))}tableView(e,t,o){let s=this.t,n=e.filter(c=>!c.verify).sort((c,m)=>v.indexOf(c.os)-v.indexOf(m.os)),i=e.filter(c=>c.verify),f=a("tr",{},...["downloadFileCol","downloadSystem","downloadSize","downloadHash"].map(c=>a("th",{attrs:{scope:"col"},class:c==="downloadSize"?"col-number":"",text:s(c)}))),l=a("tbody");for(let[c,m]of n.entries()){let x=m.sha256;l.append(a("tr",{class:m===t?"dl-best":""},a("td",{},this.link(m,{class:"dl-name"},m.name)),a("td",{text:this.systemName(m.os,m.arch)}),a("td",{class:"col-number",text:m.size!==null?y(m.size,this.locale):""}),a("td",{class:"dl-hash-cell"},...x?[a("code",{text:`${x.slice(0,le)}\u2026`,attrs:{title:x}}),this.copyButton(()=>x,s("downloadCopyHash",{name:m.name}),`hash-${c}`)]:[])))}let d=a("details",{class:"dl-all",attrs:{open:o?"":null}},a("summary",{text:`${s("downloadAll")} (${n.length})`}),a("div",{class:"dl-wrap",attrs:{tabindex:"0",role:"region","aria-label":s("downloadAll")}},a("table",{class:"grid dl-table",part:"table"},a("thead",{},f),l)));return i.length&&d.append(a("p",{class:"dl-verify-files"},a("span",{text:`${s("downloadVerifyFiles")}: `}),...i.flatMap((c,m)=>[m?", ":"",this.link(c,{class:"dl-alt"},c.name)]))),d}};export{X as a};
