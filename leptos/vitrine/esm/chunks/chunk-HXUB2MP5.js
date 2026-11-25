/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as I}from"./chunk-4UYDCZNF.js";import{O as b,ba as R,c as v,d as B,j as k,o as p,q as f}from"./chunk-JAZI474S.js";import{k as M,l as A,m as C}from"./chunk-SCKP2KTO.js";var O=`/*
 * Version: a text field with \u2212 and +, or one spin button per part, the next versions and
 * the kind of release.
 */
.vr-box {
  padding: 3px;
}

.vr-input {
  font-family: var(--_font-mono);
  font-variant-numeric: tabular-nums;
  text-align: center;
}

.vr-prefix {
  padding-inline: var(--_space-1) 0;
  font-family: var(--_font-mono);
}

.vr-step {
  display: inline-grid;
  flex: none;
  place-items: center;
  width: 34px;
  height: 34px;
  padding: 0;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  color: var(--_fg);
  cursor: pointer;
}

.vr-step .icon {
  width: 16px;
  height: 16px;
}

.vr-step:hover:not(:disabled) {
  border-color: var(--_accent);
  background: var(--_accent-soft);
}

.vr-step:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.vr-step:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* ---------- Parts ---------- */

.vr-editor {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: var(--_space-1);
  width: fit-content;
  max-width: 100%;
  padding: var(--_space-2) var(--_space-3);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
}

.vr-editor:focus-within {
  border-color: var(--_accent);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--_accent) 35%, transparent);
}

.has-error .vr-editor {
  border-color: var(--_danger);
}

.vr-editor > .vr-prefix {
  align-self: center;
  margin-bottom: 18px;
  padding: 0;
  color: var(--_fg-muted);
  font-size: 22px;
}

.vr-seg,
.vr-pre-box {
  display: inline-grid;
  justify-items: center;
  gap: 2px;
}

.vr-seg-step {
  display: grid;
  place-items: center;
  width: 100%;
  min-width: 32px;
  height: 18px;
  padding: 0;
  border: 0;
  border-radius: var(--_radius-sm);
  background: transparent;
  color: var(--_fg-muted);
  cursor: pointer;
}

.vr-seg-step .icon {
  width: 14px;
  height: 14px;
}

.vr-seg-step:hover:not(:disabled) {
  background: var(--_accent-soft);
  color: var(--_fg);
}

.vr-seg-step:disabled {
  visibility: hidden;
}

.vr-seg-input {
  min-width: 2ch;
  padding: 2px var(--_space-1);
  border: 1px solid transparent;
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  color: var(--_fg);
  font: 600 22px / 1.2 var(--_font-mono);
  font-variant-numeric: tabular-nums;
  text-align: center;
  field-sizing: content;
}

.vr-seg-input:focus {
  border-color: var(--_accent);
  background: var(--_accent-soft);
  outline: none;
}

.vr-seg-input[aria-invalid='true'] {
  border-color: var(--_danger);
}

.vr-seg.date .vr-seg-input {
  background: color-mix(in srgb, var(--_accent) 8%, var(--_surface-sunken));
}

.vr-seg-name {
  color: var(--_fg-muted);
  font-size: 11px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  white-space: nowrap;
}

.vr-sep {
  align-self: center;
  margin-bottom: 0;
  color: var(--_fg-muted);
  font: 600 22px / 1 var(--_font-mono);
}

.vr-pre {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--_space-1);
}

.vr-pre > .vr-sep {
  align-self: auto;
  margin-top: 26px;
}

.vr-pre-box {
  margin-top: 20px;
}

.vr-pre-id {
  height: 34px;
  padding: 0 var(--_space-2);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  color: var(--_fg);
  font: 600 14px var(--_font-mono);
}

.vr-pre-id:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

/* ---------- Result, change, next versions ---------- */

.vr-result {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-2);
  font-size: var(--_font-size-ui);
}

.vr-result-label {
  color: var(--_fg-muted);
}

.vr-result-value {
  padding: 1px var(--_space-2);
  border-radius: var(--_radius-sm);
  background: var(--_surface-sunken);
  font-family: var(--_font-mono);
  font-weight: 600;
}

.vr-result .vr-change {
  flex-basis: 100%;
}

.vr-change {
  --_tone: var(--_accent);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.vr-change:empty {
  display: none;
}

.vr-change .icon {
  width: 14px;
  height: 14px;
  color: var(--_tone);
}

.vr-change strong {
  color: var(--_fg);
}

.vr-change.change-major {
  --_tone: var(--_danger);
}

.vr-change.change-minor {
  --_tone: var(--_warning);
}

.vr-change.change-patch,
.vr-change.change-date {
  --_tone: var(--_success);
}

.vr-change.change-downgrade {
  --_tone: var(--_danger);
}

.vr-bumps {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2);
  margin-top: var(--_space-1);
}

.vr-bump {
  display: inline-grid;
  gap: 1px;
  min-width: 6rem;
  padding: var(--_space-1) var(--_space-3);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: var(--_fg);
  font: inherit;
  text-align: start;
  cursor: pointer;
}

.vr-bump:hover:not(:disabled) {
  border-color: var(--_accent);
  background: var(--_accent-soft);
}

.vr-bump:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.vr-bump-kind {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.vr-bump-version {
  font-family: var(--_font-mono);
  font-weight: 600;
}

/* A version is short: the text field does not stretch across a wide form. */
.version:not(.full) .vr-box {
  max-width: 16rem;
}
`;var $=Object.freeze({semver:"MAJOR.MINOR.PATCH",calver:"YYYY.0M.MICRO","x.y":"#.#","x.y.z":"#.#.#","x.y.z.w":"#.#.#.#"});function Y(u,e){for(let t=u.length-1;t>=0;t-=1)if(e(u[t]))return t;return-1}var P=Number.MAX_SAFE_INTEGER,K={YYYY:{min:1e3,max:9999,width:4,date:!0},YY:{min:0,max:999,width:0,date:!0},"0Y":{min:0,max:99,width:2,date:!0},MM:{min:1,max:12,width:0,date:!0},"0M":{min:1,max:12,width:2,date:!0},WW:{min:1,max:53,width:0,date:!0},"0W":{min:1,max:53,width:2,date:!0},DD:{min:1,max:31,width:0,date:!0},"0D":{min:1,max:31,width:2,date:!0},MAJOR:{min:0,max:1/0,width:0,date:!1},MINOR:{min:0,max:1/0,width:0,date:!1},PATCH:{min:0,max:1/0,width:0,date:!1},MICRO:{min:0,max:1/0,width:0,date:!1},"#":{min:0,max:1/0,width:0,date:!1}},J=/YYYY|0Y|YY|0M|MM|0W|WW|0D|DD|MAJOR|MINOR|PATCH|MICRO|#/g,j=/^(?:0|[1-9]\d*|\d*[A-Za-z-][0-9A-Za-z-]*)$/,G=/^[0-9A-Za-z-]+$/;function V(u,e={}){let t=String(u??"").trim()||"semver",r=t.toLowerCase();if(r==="decimal"||r==="number"){let n=Math.max(0,Math.min(10,Math.round(e.precision??1)));return{kind:"decimal",source:"decimal",segments:[{token:"#",min:-P,max:P,width:0,date:!1}],separators:["",""],prerelease:!1,precision:n,calendar:!1}}let s=$[r]??t,o=[],a=[],l=0;for(let n of s.matchAll(J))a.push(s.slice(l,n.index)),o.push({token:n[0],...K[n[0]]}),l=n.index+n[0].length;return a.push(s.slice(l)),!o.length||o.length>8||a.some(n=>/[\dA-Za-z]/.test(n)||n.length>3)||a.slice(1,-1).some(n=>!n)?V("semver",e):((e.segmentMax??[]).forEach((n,i)=>{o[i]&&typeof n=="number"&&Number.isFinite(n)&&n>=o[i].min&&(o[i].max=Math.min(n,o[i].max))}),{kind:r==="semver"?"semver":"pattern",source:r in $?r:t,segments:o,separators:a,prerelease:r==="semver",precision:0,calendar:o.some(n=>n.date)})}var T=u=>u.replace(/[.*+?^${}()|[\]\\/-]/g,"\\$&");function _(u,e){let t=String(u??"").trim();if(!t)return{ok:!1,error:"empty"};if(e.kind==="decimal")return X(t,e.precision);/^[vV]\d/.test(t)&&!/^[vV]/.test(e.separators[0])&&(t=t.slice(1));let r=e.segments.map((i,c)=>`${T(e.separators[c])}(\\d+)`).join("")+T(e.separators.at(-1)??""),s=e.prerelease?"(?:-([0-9A-Za-z.-]+))?(?:\\+([0-9A-Za-z.-]+))?":"",o=new RegExp(`^${r}${s}$`).exec(t);if(!o)return{ok:!1,error:"format"};let a=[];for(let i=0;i<e.segments.length;i+=1){let c=o[i+1],d=e.segments[i];if(d.width?c.length!==d.width:c.length>1&&c[0]==="0")return{ok:!1,error:d.width?"width":"zero",index:i};let m=Number(c);if(!Number.isSafeInteger(m)||m<d.min||m>d.max)return{ok:!1,error:"range",index:i};a.push(m)}let l=e.prerelease&&o[e.segments.length+1]!==void 0?o[e.segments.length+1].split("."):[],n=e.prerelease&&o[e.segments.length+2]!==void 0?o[e.segments.length+2].split("."):[];return l.some(i=>!j.test(i))||n.some(i=>!G.test(i))?{ok:!1,error:"format"}:{ok:!0,version:{parts:a,pre:l,build:n}}}function X(u,e){let t=/^([-+]?)(\d+)(?:[.,](\d*))?$/.exec(u.replace(/\s/g,""));if(!t)return{ok:!1,error:"format"};if((t[3]??"").replace(/0+$/,"").length>e)return{ok:!1,error:"precision"};let s=Number(t[2]+(t[3]??"").padEnd(e,"0").slice(0,e));return Number.isSafeInteger(s)?{ok:!0,version:{parts:[t[1]==="-"&&s?-s:s],pre:[],build:[]}}:{ok:!1,error:"range"}}function h(u,e){if(e.kind==="decimal"){let r=u.parts[0]??0,s=String(Math.abs(r)).padStart(e.precision+1,"0"),o=e.precision?s.slice(0,-e.precision):s,a=e.precision?`.${s.slice(-e.precision)}`:"";return`${r<0?"-":""}${o}${a}`}let t="";return e.segments.forEach((r,s)=>{t+=e.separators[s]+String(u.parts[s]??r.min).padStart(r.width,"0")}),t+=e.separators.at(-1)??"",u.pre.length&&(t+=`-${u.pre.join(".")}`),u.build.length&&(t+=`+${u.build.join(".")}`),t}function x(u,e){for(let t=0;t<Math.max(u.parts.length,e.parts.length);t+=1){let r=(u.parts[t]??0)-(e.parts[t]??0);if(r)return r<0?-1:1}if(!u.pre.length||!e.pre.length)return u.pre.length===e.pre.length?0:u.pre.length?-1:1;for(let t=0;t<Math.max(u.pre.length,e.pre.length);t+=1){let r=u.pre[t],s=e.pre[t];if(r===void 0)return-1;if(s===void 0)return 1;if(r===s)continue;let o=/^\d+$/.test(r),a=/^\d+$/.test(s);return o&&a?Number(r)<Number(s)?-1:1:o!==a?o?-1:1:r<s?-1:1}return 0}function z(u,e,t,r,s={}){let o=e.segments;if(!o[t]||!r)return u;if(e.kind==="semver"&&r>0&&s.reset!==!1&&t<3)return y(u,["major","minor","patch"][t]);let a=o.map((i,c)=>u.parts[c]??i.min),l=t,n=a[l]+r;for(;;){let i=o[l];if(n>i.max){if(l===0||!Number.isFinite(i.max))return u;a[l]=i.min+(n-i.max-1),a[l]>i.max&&(a[l]=i.min),l-=1,n=a[l]+1;continue}if(n<i.min){if(l===0||!Number.isFinite(i.max))return u;a[l]=i.max-(i.min-n-1),a[l]<i.min&&(a[l]=i.max),l-=1,n=a[l]-1;continue}break}if(a[l]=n,r>0&&s.reset!==!1)for(let i=t+1;i<a.length;i+=1)a[i]=o[i].min;return{parts:a,pre:[],build:[]}}function y(u,e,t=""){let[r=0,s=0,o=0]=u.parts,a=u.pre,l=t&&j.test(t)&&!/^\d+$/.test(t)?t:"",n=l?[l,"0"]:["0"],i=(c,d=[])=>({parts:c,pre:d,build:[]});switch(e){case"major":return i(a.length&&s===0&&o===0?[r,0,0]:[r+1,0,0]);case"minor":return i(a.length&&o===0?[r,s,0]:[r,s+1,0]);case"patch":return i(a.length?[r,s,o]:[r,s,o+1]);case"premajor":return i([r+1,0,0],n);case"preminor":return i([r,s+1,0],n);case"prepatch":return i([r,s,o+1],n);case"prerelease":{if(!a.length)return i([r,s,o+1],n);if(l&&a[0]!==l)return i([r,s,o],n);let c=[...a],d=Y(c,m=>/^\d+$/.test(m));return d>=0?c[d]=String(Number(c[d])+1):c.push("0"),i([r,s,o],c)}default:return i([r,s,o])}}function S(u,e,t){let r=t.getUTCFullYear(),s=Date.UTC(r,0,1),o=Math.floor((t.getTime()-s)/864e5),a=Math.min(53,Math.floor((o+new Date(s).getUTCDay())/7)+1),l={YYYY:r,YY:r-2e3,"0Y":(r-2e3)%100,MM:t.getUTCMonth()+1,"0M":t.getUTCMonth()+1,WW:a,"0W":a,DD:t.getUTCDate(),"0D":t.getUTCDate()},n=e.segments.map(c=>c.date?l[c.token]:c.min);if(u&&e.segments.every((c,d)=>!c.date||u.parts[d]===n[d])){let c=Y(e.segments,d=>!d.date);c>=0&&(e.segments.forEach((d,m)=>{!d.date&&m<c&&(n[m]=u.parts[m])}),n[c]=Math.min(e.segments[c].max,(u.parts[c]??0)+1))}return{parts:n,pre:[],build:[]}}function L(u,e,t,r={}){let s=(u.parts[0]??0)+e*t;return typeof r.min=="number"&&(s=Math.max(r.min,s)),typeof r.max=="number"&&(s=Math.min(r.max,s)),{parts:[s],pre:[],build:[]}}function N(u,e,t){let r=x(e,u),s=e.parts.findIndex((o,a)=>o!==u.parts[a]);return r<0?{change:"downgrade",index:s}:r===0?{change:u.build.join(".")===e.build.join(".")?"same":"build",index:-1}:t.kind==="decimal"?{change:"up",index:s}:s<0?{change:"prerelease",index:s}:e.pre.length?{change:"prerelease",index:s}:t.segments[s].date?{change:"date",index:s}:t.kind==="semver"?{change:["major","minor","patch"][s],index:s}:{change:"segment",index:s}}function E(u,e){if(e.kind==="decimal")return null;let t=[],r=/^[vV]\d/.test(u)&&!/^[vV]/.test(e.separators[0])?1:0;for(let s=0;s<e.segments.length;s+=1){let o=e.separators[s];if(!u.startsWith(o,r))return null;r+=o.length;let a=/^\d+/.exec(u.slice(r));if(!a)return null;t.push({start:r,end:r+a[0].length}),r+=a[0].length}return t}function U(u,e){let t="";for(let r of u)D(r,e)&&(e.prerelease&&/[A-Za-z]/.test(r)&&!/[-+]/.test(t)&&!(/[vV]/.test(r)&&!t)||(t+=r));return t}function D(u,e){return/\d/.test(u)?!0:e.kind==="decimal"?/[.,+-]/.test(u):e.prerelease&&/[0-9A-Za-z.+-]/.test(u)?!0:/[vV]/.test(u)||e.separators.some(t=>t.includes(u))}var W=Object.freeze({vrLabel:"Version",vrRequired:"required",vrSeg_MAJOR:"Major",vrSeg_MINOR:"Minor",vrSeg_PATCH:"Patch",vrSeg_BUILD:"Build",vrSeg_MICRO:"Micro",vrSeg_PART:"Part {n}",vrSeg_YEAR:"Year",vrSeg_MONTH:"Month",vrSeg_WEEK:"Week",vrSeg_DAY:"Day",vrSeg_VALUE:"Value",vrIncrease:"Increase {segment}",vrDecrease:"Decrease {segment}",vrIncreaseBy:"Add {step}",vrDecreaseBy:"Subtract {step}",vrPre:"Pre-release",vrPreNone:"None (release)",vrPreNumber:"Pre-release number",vrBumps:"Next versions",vrBump_major:"Major",vrBump_minor:"Minor",vrBump_patch:"Patch",vrBump_prerelease:"Pre-release",vrBump_release:"Release",vrBump_today:"Today",vrBump_segment:"{segment} + 1",vrChange_major:"Major release",vrChange_minor:"Minor release",vrChange_patch:"Patch release",vrChange_prerelease:"Pre-release",vrChange_build:"Same version, other build",vrChange_same:"Same version",vrChange_downgrade:"Lower version",vrChange_segment:"{segment} changed",vrChange_date:"New date",vrChange_up:"Higher",vrMeaning_major:"breaking changes",vrMeaning_minor:"new features, compatible",vrMeaning_patch:"bug fixes, compatible",vrFrom:"from {current}",vrResult:"Version",vrMissing:"Enter a version.",vrBadFormat:"Write a version like {example}.",vrBadZero:"{segment} cannot start with 0.",vrBadWidth:"Write {segment} with {width} digits.",vrBadRange:"{segment} goes from {min} to {max}.",vrBadPrecision:"Use at most {count} decimals.",vrTooLow:"Use {min} or higher.",vrTooHigh:"Use {max} or lower.",vrNotNewer:"Use a version newer than {current}.",vrReverted:"Not a valid version: back to {value}.",vrCopy:"Copy the version",vrNoLimit:"no limit"}),F=Object.freeze({vrLabel:"Version",vrRequired:"obligatoire",vrSeg_MAJOR:"Majeure",vrSeg_MINOR:"Mineure",vrSeg_PATCH:"Correctif",vrSeg_BUILD:"Build",vrSeg_MICRO:"Micro",vrSeg_PART:"Partie {n}",vrSeg_YEAR:"Ann\xE9e",vrSeg_MONTH:"Mois",vrSeg_WEEK:"Semaine",vrSeg_DAY:"Jour",vrSeg_VALUE:"Valeur",vrIncrease:"Augmenter : {segment}",vrDecrease:"Diminuer : {segment}",vrIncreaseBy:"Ajouter {step}",vrDecreaseBy:"Retirer {step}",vrPre:"Pr\xE9version",vrPreNone:"Aucune (version finale)",vrPreNumber:"Num\xE9ro de pr\xE9version",vrBumps:"Versions suivantes",vrBump_major:"Majeure",vrBump_minor:"Mineure",vrBump_patch:"Correctif",vrBump_prerelease:"Pr\xE9version",vrBump_release:"Version finale",vrBump_today:"Aujourd\u2019hui",vrBump_segment:"{segment} + 1",vrChange_major:"Version majeure",vrChange_minor:"Version mineure",vrChange_patch:"Version corrective",vrChange_prerelease:"Pr\xE9version",vrChange_build:"M\xEAme version, autre build",vrChange_same:"M\xEAme version",vrChange_downgrade:"Version inf\xE9rieure",vrChange_segment:"{segment} modifi\xE9e",vrChange_date:"Nouvelle date",vrChange_up:"Sup\xE9rieure",vrMeaning_major:"changements incompatibles",vrMeaning_minor:"nouveaut\xE9s compatibles",vrMeaning_patch:"corrections compatibles",vrFrom:"depuis {current}",vrResult:"Version",vrMissing:"Saisissez une version.",vrBadFormat:"\xC9crivez une version comme {example}.",vrBadZero:"{segment} ne peut pas commencer par 0.",vrBadWidth:"\xC9crivez {segment} avec {width} chiffres.",vrBadRange:"{segment} va de {min} \xE0 {max}.",vrBadPrecision:"Utilisez au plus {count} d\xE9cimales.",vrTooLow:"Utilisez {min} ou plus.",vrTooHigh:"Utilisez {max} ou moins.",vrNotNewer:"Utilisez une version plus r\xE9cente que {current}.",vrReverted:"Version non valide : retour \xE0 {value}.",vrCopy:"Copier la version",vrNoLimit:"sans limite"});C({en:W,fr:F});var Q={YYYY:"YEAR",YY:"YEAR","0Y":"YEAR",MM:"MONTH","0M":"MONTH",WW:"WEEK","0W":"WEEK",DD:"DAY","0D":"DAY"},q=["MAJOR","MINOR","PATCH","BUILD"],H=class extends R{static type="version";static formAssociated=!0;static allowEmpty=!0;static componentAttributes=Object.freeze(["value","name","hint","format","segment-max","step","precision","min","max","current","newer","prefix","strict","preids","required","disabled","readonly","placeholder","now"]);static dataAttributes=Object.freeze(["value","format","current","min","max","segment-max"]);static presets={simple:{},full:{}};static styles=[I,O];static fromData(e){if(typeof e=="string"||typeof e=="number")return{content:"",attributes:{value:String(e)}};let t=e!==null&&typeof e=="object"&&!Array.isArray(e)?e:{};return{content:"",attributes:{value:t.value,format:t.format,current:t.current,min:t.min,max:t.max,"segment-max":Array.isArray(t.segmentMax)?t.segmentMax.join(","):t.segmentMax}}}constructor(){super(),this.internals=typeof this.attachInternals=="function"?this.attachInternals():null,this.ids={label:f("label"),control:f("version"),hint:f("hint"),error:f("error"),change:f("change"),prefix:f("prefix")},this.textValue=null,this.committed="",this.lastValid="",this.typing={},this.showErrors=!1,this.formDisabled=!1,this.formatCache=null,this.addEventListener("invalid",e=>{e.preventDefault(),this.showErrors=!0,this.update()})}get format(){let e=this.getAttribute("format")??"semver",t=this.getAttribute("segment-max")??"",r=this.getAttribute("step")??"",s=this.getAttribute("precision")??"",o=`${e}|${t}|${r}|${s}`;if(this.formatCache?.key===o)return this.formatCache.format;let a=/^\d*[.,](\d+)$/.exec(r.trim())?.[1].length,l=V(e,{segmentMax:t.split(",").map(n=>/^\d+$/.test(n.trim())?Number(n.trim()):null),precision:a??B(s||null,{min:0,max:10,fallback:r&&/^\d+$/.test(r.trim())?0:1})});return this.formatCache={key:o,format:l},l}get stepUnits(){let e=this.format,t=_(this.getAttribute("step")??"",e);return(t.ok?Math.abs(t.version.parts[0]):1)||1}get full(){return this.variant==="full"}get disabled(){return this.formDisabled||v(this.getAttribute("disabled"))===!0}get readOnly(){return v(this.getAttribute("readonly"))===!0}attrVersion(e){let t=this.getAttribute(e);if(!t)return null;let r=_(t,this.format);return r.ok?r.version:null}get example(){let e=this.format;return e.kind==="decimal"?h({parts:[10**e.precision],pre:[],build:[]},e):e.calendar?h(S(null,e,this.now),e):h({parts:e.segments.map((t,r)=>Math.max(t.min,[1,4,2,0][r]??0)),pre:[],build:[]},e)}get now(){let e=Date.parse(this.getAttribute("now")??"");return Number.isNaN(e)?new Date:new Date(e)}segmentName(e){let t=this.t,r=this.format,s=r.segments[e];return r.kind==="decimal"?t("vrSeg_VALUE"):s.date?t(`vrSeg_${Q[s.token]}`):s.token!=="#"?t(`vrSeg_${s.token}`):q[e]&&r.segments.length<=4?t(`vrSeg_${q[e]}`):t("vrSeg_PART",{n:e+1})}get value(){return this.textValue??(this.getAttribute("value")??"").trim()}set value(e){this.textValue=e==null?"":String(e).trim().slice(0,300),this.typing={},this._connected&&this.render()}get version(){let e=_(this.value,this.format);return e.ok?e.version:null}get editorVersion(){let e=this.format,t=this.version??this.attrVersion("min");return t||(e.calendar?S(null,e,this.now):{parts:e.segments.map(r=>e.kind==="decimal"?0:Math.max(0,r.min)),pre:[],build:[]})}get form(){return this.internals?.form??null}get validity(){return this.internals?.validity}get validationMessage(){return this.internals?.validationMessage??""}checkValidity(){return this.internals?.checkValidity()??!0}reportValidity(){return this.showErrors=!0,this.update(),this.internals?.reportValidity()??!0}focus(e){this.root.querySelector('[data-focus-key="control"], [data-focus-key="segment-0"]')?.focus(e)}connectedCallback(){super.connectedCallback(),this.committed=this.value,this.version&&(this.lastValid=this.value)}formResetCallback(){this.textValue=null,this.typing={},this.showErrors=!1,this.committed=this.value,this.render()}formDisabledCallback(e){this.formDisabled=e,this.requestRender()}formStateRestoreCallback(e){typeof e=="string"&&(this.value=e)}check(){let e=this.t,t=this.format,r=this.value;if(this.disabled)return{flags:{},message:""};if(!r)return v(this.getAttribute("required"))===!0?{flags:{valueMissing:!0},message:e("vrMissing")}:{flags:{},message:""};let s=_(r,t);if(!s.ok){let i=s.index===void 0?null:t.segments[s.index],c=s.index===void 0?"":this.segmentName(s.index);return s.error==="zero"?{flags:{badInput:!0},message:e("vrBadZero",{segment:c})}:s.error==="width"&&i?{flags:{badInput:!0},message:e("vrBadWidth",{segment:c,width:i.width})}:s.error==="range"&&i?{flags:{badInput:!0},message:e("vrBadRange",{segment:c,min:i.min,max:Number.isFinite(i.max)?i.max:e("vrNoLimit")})}:s.error==="precision"?{flags:{stepMismatch:!0},message:e("vrBadPrecision",{count:t.precision})}:{flags:{badInput:!0},message:e("vrBadFormat",{example:this.example})}}let o=s.version,a=this.attrVersion("min"),l=this.attrVersion("max");if(a&&x(o,a)<0)return{flags:{rangeUnderflow:!0},message:e("vrTooLow",{min:h(a,t)})};if(l&&x(o,l)>0)return{flags:{rangeOverflow:!0},message:e("vrTooHigh",{max:h(l,t)})};let n=this.attrVersion("current");return n&&v(this.getAttribute("newer"))===!0&&x(o,n)<=0?{flags:{rangeUnderflow:!0},message:e("vrNotNewer",{current:h(n,t)})}:{flags:{},message:""}}get valid(){return!Object.keys(this.check().flags).length}update(e={}){let{flags:t,message:r}=this.check();if(this.internals){this.internals.setFormValue(this.disabled?null:this.value,this.value);let i=this.root.querySelector('[data-focus-key="control"], [data-focus-key="segment-0"]')??void 0;this.internals.setValidity(t,r,Object.keys(t).length?i:void 0)}let s=!!r&&this.showErrors,o=this.root.getElementById(this.ids.error);o&&(o.textContent=s?r:"");for(let i of this.root.querySelectorAll('[data-focus-key="control"], .vr-seg-input'))s?i.setAttribute("aria-invalid","true"):i.removeAttribute("aria-invalid");this.root.querySelector(".field")?.classList.toggle("has-error",s);let a=this.root.getElementById(this.ids.change);a&&a.replaceWith(this.changeView());let l=this.root.querySelector(".vr-result-value");l&&(l.textContent=this.value);let n=this.root.querySelector(".vr-bumps");if(n&&e.bumps!==!1&&!n.contains(this.root.activeElement)){let i=this.bumpsView();i?n.replaceWith(i):n.remove()}}set(e,t={}){this.textValue=e,this.version&&(this.lastValid=e),t.render!==!1?this.render():this.update(),A(this,M.INPUT,{value:e,valid:this.valid}),t.commit&&this.commit()}commit(){let e=this.value;if(e===this.committed)return;let t=this.committed;this.committed=e;let r=_(t,this.format),s=this.version;A(this,M.CHANGE,{value:e,previous:t,change:r.ok&&s?N(r.version,s,this.format).change:null})}renderContent(e){let t=this.t,r=v(this.getAttribute("required"))===!0,s=k(this.getAttribute("hint"),300),o=this.full&&this.format.kind!=="decimal",a=p("div",{class:`field version${this.disabled?" disabled":""}${this.full?" full":""}`,part:"body"},p("div",{class:"field-top"},p(o?"span":"label",{class:"field-label",part:"label",attrs:{id:this.ids.label,for:o?null:this.ids.control}},k(this.getAttribute("label"),300)||t("vrLabel"),r?p("span",{class:"field-required",text:"*",attrs:{"aria-hidden":"true"}}):null,r?p("span",{class:"sr-only",text:` (${t("vrRequired")})`}):null)),o?this.editorView():this.inputView(),s?p("p",{class:"field-hint",part:"hint",text:s,attrs:{id:this.ids.hint}}):null,o?this.resultView():this.changeView(),this.full?this.bumpsView():null,p("p",{class:"field-error",part:"error",attrs:{id:this.ids.error,"aria-live":"polite"}}));e.append(a),this.update()}describedBy(){return[this.getAttribute("prefix")?this.ids.prefix:"",this.getAttribute("hint")?this.ids.hint:"",this.getAttribute("current")?this.ids.change:"",this.ids.error].filter(Boolean).join(" ")}prefixView(){let e=k(this.getAttribute("prefix"),10);return e?p("span",{class:"field-prefix vr-prefix",text:e,attrs:{id:this.ids.prefix}}):null}stepButton(e,t,r,s){return p("button",{class:"vr-step",part:"step-button",attrs:{type:"button","aria-label":t,title:t,disabled:this.disabled||this.readOnly,"data-focus-key":s},on:{click:r}},b(e>0?"plus":"minus"))}inputView(){let e=this.t,t=this.format,r=p("input",{class:"field-input vr-input",part:"control",attrs:{id:this.ids.control,type:"text",inputmode:t.kind==="decimal"||!t.prerelease?"decimal":"text",autocomplete:"off",autocapitalize:"off",spellcheck:"false",placeholder:this.getAttribute("placeholder")??this.example,required:v(this.getAttribute("required"))===!0,disabled:this.disabled,readonly:this.readOnly,"aria-describedby":this.describedBy(),"data-focus-key":"control"}});r.value=this.value,r.addEventListener("beforeinput",n=>{let i=n.data??"";(n.inputType==="insertText"||n.inputType==="insertFromPaste")&&i&&![...i].every(c=>D(c,t)||/\s/.test(c))&&n.preventDefault()}),r.addEventListener("input",()=>{let n=U(r.value,t);if(n!==r.value){let i=Math.max(0,(r.selectionStart??n.length)-(r.value.length-n.length));r.value=n,r.setSelectionRange(i,i)}this.getAttribute("validate")==="input"&&(this.showErrors=!0),this.set(r.value,{render:!1})}),r.addEventListener("keydown",n=>{let i={ArrowUp:1,ArrowDown:-1,PageUp:10,PageDown:-10};!(n.key in i)||this.readOnly||(n.preventDefault(),this.stepAt(r.selectionStart??r.value.length,i[n.key]*(n.shiftKey?10:1)))}),r.addEventListener("blur",()=>{this.showErrors=!0,this.normalize()}),r.addEventListener("change",()=>this.commit());let s=this.defaultSegment(),o=this.segmentName(s),a=t.kind==="decimal",l=a?h({parts:[this.stepUnits],pre:[],build:[]},t):"";return p("div",{class:"field-box vr-box"},this.stepButton(-1,a?e("vrDecreaseBy",{step:l}):e("vrDecrease",{segment:o}),()=>this.stepAt(null,-1),"down"),this.prefixView(),r,this.stepButton(1,a?e("vrIncreaseBy",{step:l}):e("vrIncrease",{segment:o}),()=>this.stepAt(null,1),"up"))}defaultSegment(){let e=this.format;return e.kind==="semver"?2:e.segments.length-1}stepAt(e,t){if(this.disabled||this.readOnly)return;let r=this.format,s=this.version??this.editorVersion,o=this.defaultSegment(),a=e===null?null:E(this.value,r);if(a&&e!==null){let i=e,c=a.findIndex(d=>i>=d.start&&i<=d.end);c>=0&&(o=c)}let l=this.stepped(s,o,t),n=h(l,r);if(this.set(n,{commit:!0}),e!==null){let i=this.root.getElementById(this.ids.control),c=E(n,r)?.[o];i&&c&&i.setSelectionRange(c.start,c.end)}}stepped(e,t,r){let s=this.format;if(s.kind==="decimal"){let n=this.attrVersion("min"),i=this.attrVersion("max");return L(e,r,this.stepUnits,{min:n?.parts[0]??null,max:i?.parts[0]??null})}let o=z(e,s,t,r),a=this.attrVersion("min"),l=this.attrVersion("max");return(a&&x(o,a)<0||l&&x(o,l)>0)&&(o=e),o}normalize(){let e=this.version,t=null;if(e?t=h(e,this.format):this.value&&v(this.getAttribute("strict"))===!0&&this.lastValid&&(t=this.lastValid,this.announce(this.t("vrReverted",{value:t}))),t===null||t===this.value){this.update({bumps:!1});return}let r=this.root.getElementById(this.ids.control);r&&(r.value=t),this.textValue=t,this.lastValid=t,this.update({bumps:!1}),A(this,M.INPUT,{value:t,valid:this.valid})}editorView(){let e=this.format,t=this.editorVersion,r=p("div",{class:"vr-editor",part:"editor",attrs:{role:"group","aria-labelledby":this.ids.label,"aria-describedby":this.describedBy()}}),s=this.prefixView();return s&&r.append(s),e.segments.forEach((o,a)=>{e.separators[a]&&r.append(p("span",{class:"vr-sep",text:e.separators[a],attrs:{"aria-hidden":"true"}})),r.append(this.segmentView(t,o,a))}),e.separators.at(-1)&&r.append(p("span",{class:"vr-sep",text:e.separators.at(-1)??"",attrs:{"aria-hidden":"true"}})),e.prerelease&&r.append(this.preView(t)),r}segmentView(e,t,r){let s=this.t,o=this.format,a=this.segmentName(r),l=e.parts[r]??t.min,n=this.typing[r]??String(l).padStart(t.width,"0"),i=p("input",{class:"vr-seg-input",attrs:{type:"text",role:"spinbutton",inputmode:"numeric",autocomplete:"off","aria-label":a,"aria-valuenow":String(l),"aria-valuemin":String(t.min),"aria-valuemax":Number.isFinite(t.max)?String(t.max):null,"aria-valuetext":String(l).padStart(t.width,"0"),size:String(Math.max(1,Math.min(9,n.length||1))),disabled:this.disabled,readonly:this.readOnly,"data-focus-key":`segment-${r}`}});i.value=n,i.addEventListener("beforeinput",d=>{let m=d.data??"";m&&(/^\d+$/.test(m)||(d.preventDefault(),o.separators.slice(r+1).some(g=>g&&g.includes(m))?this.focusSegment(r+1):m==="-"&&o.prerelease&&this.root.querySelector(".vr-pre-id")?.focus()))}),i.addEventListener("input",()=>{let d=i.value.replace(/\D/g,"").slice(0,t.width||15);if(i.value=d,i.size=Math.max(1,Math.min(9,d.length||1)),this.typing[r]=d,!d)return;let m=Math.min(Number(d),Number.isFinite(t.max)?t.max:Number.MAX_SAFE_INTEGER),g=[...this.editorVersion.parts];g[r]=Math.max(t.min,m),this.set(h({...this.editorVersion,parts:g},o),{render:!1}),i.setAttribute("aria-valuenow",String(g[r])),t.width&&d.length>=t.width&&this.focusSegment(r+1)}),i.addEventListener("keydown",d=>this.segmentKey(d,r,i)),i.addEventListener("blur",()=>{if(this.typing[r]===void 0)return;delete this.typing[r];let d=this.editorVersion.parts[r]??t.min;i.value=String(d).padStart(t.width,"0"),i.size=Math.max(1,Math.min(9,i.value.length)),this.showErrors=!0,this.update({bumps:!1}),this.commit()});let c=d=>()=>{delete this.typing[r],this.set(h(this.stepped(this.editorVersion,r,d),o),{commit:!0})};return p("span",{class:`vr-seg${t.date?" date":""}`,part:"segment"},p("button",{class:"vr-seg-step up",attrs:{type:"button",tabindex:"-1","aria-label":s("vrIncrease",{segment:a}),title:s("vrIncrease",{segment:a}),disabled:this.disabled||this.readOnly},on:{click:c(1)}},b("chevron-up")),i,p("button",{class:"vr-seg-step down",attrs:{type:"button",tabindex:"-1","aria-label":s("vrDecrease",{segment:a}),title:s("vrDecrease",{segment:a}),disabled:this.disabled||this.readOnly},on:{click:c(-1)}},b("chevron-down")),p("span",{class:"vr-seg-name",text:a,attrs:{"aria-hidden":"true"}}))}segmentKey(e,t,r){let s=this.format,o=s.segments[t],a={ArrowUp:1,ArrowDown:-1,PageUp:10,PageDown:-10};if(e.key in a&&!this.readOnly)e.preventDefault(),delete this.typing[t],this.set(h(this.stepped(this.editorVersion,t,a[e.key]*(e.shiftKey?10:1)),s),{commit:!0});else if((e.key==="Home"||e.key==="End")&&!this.readOnly){let l=e.key==="Home"?o.min:o.max;if(!Number.isFinite(l))return;e.preventDefault(),delete this.typing[t];let n=[...this.editorVersion.parts];n[t]=l,this.set(h({...this.editorVersion,parts:n,pre:[],build:[]},s),{commit:!0})}else e.key==="ArrowLeft"&&r.selectionStart===0&&r.selectionEnd===0&&t>0?(e.preventDefault(),this.focusSegment(t-1)):e.key==="ArrowRight"&&r.selectionStart===r.value.length&&t<s.segments.length-1?(e.preventDefault(),this.focusSegment(t+1)):e.key==="Backspace"&&!r.value&&t>0?(e.preventDefault(),this.focusSegment(t-1,"end")):e.key==="Enter"&&this.commit()}focusSegment(e,t="all"){let r=this.root.querySelector(`[data-focus-key="segment-${e}"]`);if(!r)return;r.focus();let s=r.value.length;t==="all"?r.setSelectionRange(0,s):r.setSelectionRange(t==="start"?0:s,t==="start"?0:s)}get preids(){let e=(this.getAttribute("preids")??"alpha,beta,rc").split(",").map(t=>t.trim()).filter(t=>/^[A-Za-z][0-9A-Za-z-]*$/.test(t));return[...new Set(e)].slice(0,12)}preView(e){let t=this.t,r=this.format,[s="",o]=e.pre,a=this.preids;s&&!a.includes(s)&&!/^\d+$/.test(s)&&a.push(s);let l=p("select",{class:"vr-pre-id",attrs:{"aria-label":t("vrPre"),disabled:this.disabled||this.readOnly,"data-focus-key":"pre"},on:{change:i=>{let c=i.target.value,d=this.editorVersion;this.set(h({...d,pre:c?[c,"0"]:[],build:[]},r),{commit:!0})}}},p("option",{text:t("vrPreNone"),attrs:{value:"",selected:!s}}),...a.map(i=>p("option",{text:i,attrs:{value:i,selected:i===s}}))),n=[p("span",{class:"vr-sep",text:"-",attrs:{"aria-hidden":"true"}}),p("span",{class:"vr-pre-box"},l,p("span",{class:"vr-seg-name",text:t("vrPre"),attrs:{"aria-hidden":"true"}}))];if(s&&o!==void 0&&/^\d+$/.test(o)){let i=Number(o),c=m=>{let g=this.editorVersion,w=[...g.pre];w[1]=String(Math.max(0,m)),this.set(h({...g,pre:w},r),{commit:!0})},d=p("input",{class:"vr-seg-input vr-pre-number",attrs:{type:"text",role:"spinbutton",inputmode:"numeric",autocomplete:"off","aria-label":t("vrPreNumber"),"aria-valuenow":String(i),"aria-valuemin":"0",size:String(Math.max(1,String(i).length)),disabled:this.disabled,readonly:this.readOnly,"data-focus-key":"pre-number"}});d.value=String(i),d.addEventListener("beforeinput",m=>{m.data&&!/^\d+$/.test(m.data)&&m.preventDefault()}),d.addEventListener("input",()=>{let m=d.value.replace(/\D/g,"").replace(/^0+(?=\d)/,"").slice(0,9);if(d.value=m,m){let g=this.editorVersion,w=[...g.pre];w[1]=m,this.set(h({...g,pre:w},r),{render:!1})}}),d.addEventListener("keydown",m=>{let g={ArrowUp:1,ArrowDown:-1};m.key in g&&!this.readOnly&&(m.preventDefault(),c(i+g[m.key]))}),d.addEventListener("blur",()=>{d.value||c(0),this.commit()}),n.push(p("span",{class:"vr-sep",text:".",attrs:{"aria-hidden":"true"}}),p("span",{class:"vr-seg"},p("button",{class:"vr-seg-step up",attrs:{type:"button",tabindex:"-1","aria-label":t("vrIncrease",{segment:t("vrPreNumber")}),disabled:this.disabled||this.readOnly},on:{click:()=>c(i+1)}},b("chevron-up")),d,p("button",{class:"vr-seg-step down",attrs:{type:"button",tabindex:"-1","aria-label":t("vrDecrease",{segment:t("vrPreNumber")}),disabled:this.disabled||this.readOnly},on:{click:()=>c(i-1)}},b("chevron-down")),p("span",{class:"vr-seg-name",text:"#",attrs:{"aria-hidden":"true"}})))}return p("span",{class:"vr-pre"},...n)}resultView(){let e=this.t;return p("div",{class:"vr-result"},p("span",{class:"vr-result-label",text:e("vrResult")}),p("code",{class:"vr-result-value",text:this.value}),this.copyTextButton(()=>this.value,e("vrCopy"),"copy"),this.changeView())}changeView(){let e=this.t,t=this.attrVersion("current"),r=this.version,s=p("span",{class:"vr-change",part:"change",attrs:{id:this.ids.change}});if(!t||!r)return s;let o=this.format,{change:a,index:l}=N(t,r,o);s.classList.add(`change-${a}`);let n=a==="segment"?e("vrChange_segment",{segment:this.segmentName(l)}):e(`vrChange_${a}`),i=a==="major"||a==="minor"||a==="patch"?e(`vrMeaning_${a}`):"";return s.append(b(a==="downgrade"?"alert":a==="same"?"status-circle":"arrow-up"),p("strong",{text:n}),p("span",{text:` ${e("vrFrom",{current:h(t,o)})}${i?` \xB7 ${i}`:""}`})),s}bumpsView(){let e=this.t,t=this.format,r=this.version??this.attrVersion("current")??this.editorVersion,s=[];if(t.kind==="semver")s.push([e("vrBump_patch"),y(r,"patch")],[e("vrBump_minor"),y(r,"minor")],[e("vrBump_major"),y(r,"major")]),s.push([e("vrBump_prerelease"),y(r,"prerelease",r.pre[0]&&!/^\d+$/.test(r.pre[0])?r.pre[0]:this.preids[0]??"beta")]),r.pre.length&&s.unshift([e("vrBump_release"),y(r,"release")]);else if(t.kind==="decimal"){let l=this.stepUnits;for(let n of[-10,-1,1,10])s.push([`${n>0?"+":"\u2212"}${h({parts:[Math.abs(n)*l],pre:[],build:[]},t)}`,this.stepped(r,0,n)])}else t.calendar&&s.push([e("vrBump_today"),S(r,t,this.now)]),t.segments.forEach((l,n)=>{l.date||s.push([e("vrBump_segment",{segment:this.segmentName(n)}),this.stepped(r,n,1)])});let o=new Set,a=s.map(([l,n])=>[l,h(n,t)]).filter(([,l])=>!o.has(l)&&o.add(l)&&l!==this.value).map(([l,n],i)=>p("button",{class:"vr-bump",attrs:{type:"button",disabled:this.disabled||this.readOnly,"data-focus-key":`bump-${i}`},on:{click:()=>this.set(n,{commit:!0})}},p("span",{class:"vr-bump-kind",text:l}),p("span",{class:"sr-only",text:": "}),p("code",{class:"vr-bump-version",text:n})));return a.length?p("div",{class:"vr-bumps",part:"bumps",attrs:{role:"group","aria-label":e("vrBumps")}},...a):null}};export{H as a};
