/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as V,b as G,c as K,d as Y,e as Z}from"./chunk-6DKBEDN3.js";import{a as O}from"./chunk-4UYDCZNF.js";import{O as b,ba as F,c as S,d as E,e as $,j as z,m as H,o as l,q as v}from"./chunk-JAZI474S.js";import{k as _,l as A,m as D,q as R}from"./chunk-SCKP2KTO.js";var X=`/*
 * Password: the input, a strength meter, advice, requirements and a confirmation field.
 */
.password .field-box > .icon {
  flex: none;
  width: 16px;
  height: 16px;
  margin-inline-start: var(--_space-3);
  color: var(--_fg-muted);
}

.password .field-box > .icon + .field-input {
  padding-inline-start: var(--_space-2);
}

.pw-input {
  font-family: var(--_font-mono);
  letter-spacing: 0.02em;
}

.pw-input[type='password'] {
  letter-spacing: 0.12em;
}

.field-icon-button.done {
  color: var(--_success);
}

.pw-caps,
.pw-breach,
.pw-match,
.pw-generated,
.pw-warning {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  margin: 0;
  font-size: var(--_font-size-small);
}

.pw-caps:empty,
.pw-breach:empty,
.pw-match:empty {
  display: none;
}

.pw-caps .icon,
.pw-breach .icon,
.pw-match .icon,
.pw-warning .icon {
  flex: none;
  width: 14px;
  height: 14px;
}

.pw-caps .icon {
  color: var(--_warning);
}

/* ---------- Meter ---------- */

.pw-meter {
  --_tone: var(--_border-strong);
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--_space-1) var(--_space-3);
  margin-top: var(--_space-1);
}

.pw-meter.score-0,
.pw-meter.score-1 {
  --_tone: var(--_danger);
}

.pw-meter.score-2 {
  --_tone: var(--_warning);
}

.pw-meter.score-3,
.pw-meter.score-4 {
  --_tone: var(--_success);
}

.pw-bars {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
}

.pw-bar {
  height: 6px;
  border-radius: var(--_radius-full);
  background: var(--_border);
  transition: background-color var(--_duration-fast) var(--_easing);
}

.pw-bar.on {
  background: var(--_tone);
}

.pw-meter.score-1 .pw-bar.on:first-child {
  background: color-mix(in srgb, var(--_danger) 70%, var(--_warning));
}

.pw-label {
  font-size: var(--_font-size-small);
  font-weight: 600;
  text-align: end;
}

.pw-label:not(:empty)::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-inline-end: var(--_space-1);
  border-radius: var(--_radius-full);
  background: var(--_tone);
}

.pw-time {
  grid-column: 1 / -1;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.pw-time:empty {
  display: none;
}

/* ---------- Advice and requirements ---------- */

.pw-feedback:empty {
  display: none;
}

.pw-warning .icon {
  color: var(--_warning);
}

.pw-suggestions {
  margin: var(--_space-1) 0 0;
  padding-inline-start: var(--_space-5);
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.pw-rules {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 14rem), 1fr));
  gap: 2px var(--_space-3);
  margin: var(--_space-1) 0 0;
  padding: 0;
  list-style: none;
  font-size: var(--_font-size-small);
}

.pw-rules:empty {
  display: none;
}

.pw-rule {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  color: var(--_fg-muted);
}

.pw-rule .icon {
  flex: none;
  width: 14px;
  height: 14px;
}

.pw-rule.ok {
  color: var(--_fg);
}

.pw-rule.ok .icon,
.pw-match.ok .icon,
.pw-breach.clean .icon {
  color: var(--_success);
}

.pw-match.bad .icon,
.pw-breach.found .icon {
  color: var(--_danger);
}

.pw-breach.found {
  font-weight: 600;
}

.pw-breach:not(.found, .clean) .icon {
  animation: vt-pw-spin 1s linear infinite;
}

@keyframes vt-pw-spin {
  to {
    transform: rotate(360deg);
  }
}

.pw-generated {
  padding: var(--_space-2) var(--_space-3);
  border-inline-start: 3px solid var(--_success);
  border-radius: var(--_radius-sm);
  background: color-mix(in srgb, var(--_success) 10%, transparent);
}

/* ---------- Details ---------- */

.pw-details {
  font-size: var(--_font-size-small);
}

.pw-details > summary {
  width: fit-content;
  color: var(--_accent-fg);
  cursor: pointer;
}

.pw-details > summary:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.pw-entropy,
.pw-patterns-title {
  margin: var(--_space-2) 0 var(--_space-1);
  color: var(--_fg-muted);
}

.pw-attacks {
  width: 100%;
  border-collapse: collapse;
}

.pw-attacks th,
.pw-attacks td {
  padding: var(--_space-1) var(--_space-2);
  border-bottom: 1px solid var(--_border);
  text-align: start;
  vertical-align: top;
}

.pw-attacks thead th {
  color: var(--_fg-muted);
  font-weight: 600;
}

.pw-attacks tbody th {
  font-weight: 400;
}

.pw-attacks td {
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.pw-patterns {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

.pw-pattern {
  display: inline-flex;
  align-items: baseline;
  gap: var(--_space-1);
  padding: 1px var(--_space-2);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.pw-pattern code {
  font-family: var(--_font-mono);
  overflow-wrap: anywhere;
}

.pw-pattern span {
  color: var(--_fg-muted);
}

.pw-pattern:not(.kind-brute) {
  border-color: color-mix(in srgb, var(--_warning) 60%, var(--_border));
}

/* ---------- Confirmation ---------- */

.pw-confirm {
  display: grid;
  gap: var(--_space-1);
  margin-top: var(--_space-2);
}

@media (prefers-reduced-motion: reduce) {
  .pw-bar {
    transition: none;
  }

  .pw-breach .icon {
    animation: none !important;
  }
}
`;var pe=`123456 password 123456789 12345678 12345 qwerty 1234567 111111 1234567890 123123
000000 abc123 1234 password1 iloveyou 1q2w3e4r qwerty123 dragon monkey 654321 123321 666666 qwertyuiop
1qaz2wsx azerty 123qwe letmein football baseball welcome sunshine princess master admin shadow login
passw0rd p@ssw0rd superman michael 121212 trustno1 starwars 7777777 112233 qazwsx zxcvbnm asdfgh
asdfghjkl mustang access hello charlie donald freedom whatever jordan jennifer hunter buster soccer
harley batman andrew tigger thomas hockey ranger daniel computer michelle jessica pepper zxcvbn
555555 11111111 131313 777777 maggie 159753 aaaaaa ginger joshua cheese amanda summer love ashley
nicole chelsea biteme matthew yankees 987654321 dallas austin thunder taylor matrix secret
administrator root toor changeme default guest test test123 password123 pass motdepasse soleil
bonjour doudou chouchou marseille loulou nicolas camille julien coucou chocolat jetaime doudou
amour bisous loveme flower lovely angel killer cookie internet samsung google apple orange banana
winter spring autumn hello123 welcome1 qwerty1 admin123 root123 abcd1234 a1b2c3 aa123456
superstar silver golden diamond dolphin eagle tiger lion bear wolf fucker fuckyou money
mother father family friend school secret123 pokemon naruto minecraft fortnite roblox
liverpool arsenal chelsea barcelona juventus madrid paris london newyork america canada
france london123 player gamer hacker ninja knight wizard magic purple yellow black white
red blue green pink jasmine lauren hannah sophie emma olivia william james robert david
richard joseph charles anthony mark steven paul kevin brian george edward ronald timothy
jason jeffrey ryan jacob gary nicholas eric jonathan stephen larry justin scott brandon
benjamin samuel frank alexander patrick raymond jack dennis jerry tyler aaron jose adam
henry nathan douglas zachary peter kyle walter ethan jeremy harold keith christian roger
noah gerald carl terry sean austin arthur lawrence jesse dylan bryan joe jordan billy
bruce albert willie gabriel logan alan juan wayne roy ralph randy eugene vincent russell
louis bobby philip johnny mary patricia linda barbara elizabeth susan sarah karen nancy
lisa betty margaret sandra emily donna carol ruth sharon laura cynthia kathleen amy
shirley angela helen anna brenda pamela emma nicole samantha katherine christine debra
rachel catherine carolyn janet maria heather diane julie joyce victoria kelly christina
joan evelyn judith megan cheryl andrea hannah martha jacqueline frances gloria ann teresa
kathryn sara janice jean alice madison doris abigail julia judy grace denise amber marilyn
beverly danielle theresa sophia marie diana brittany natalie isabella charlotte rose
alexis kayla qwer asdf zxcv wasd word pass1 love123 iloveu abc qwe zaq12wsx xsw2zaq1
monday friday sunday january march april june july august october november december
computer1 internet1 windows linux ubuntu server database oracle mysql postgres system
office manager company business service support user user1 demo sample example
dog cat sun car god boy girl baby kitty puppy world mydog mycat ilove loveyou
`,T=new Map;for(let i of pe.split(/\s+/))i&&!T.has(i)&&T.set(i,T.size+1);var J=["`1234567890-=","qwertyuiop[]","asdfghjkl;'","zxcvbnm,./","azertyuiop","qsdfghjklm","wxcvbn","1qaz","2wsx","3edc","4rfv","5tgb","6yhn","7ujm","8ik,","9ol.","0p;/","qaz","wsx","edc","rfv","tgb","yhn","ujm","1a2z3e4r","1q2w3e4r5t","q1w2e3r4","zaq1","xsw2","cde3","vfr4","789456123","147258369","741852963","159357"],ue={4:["a"],"@":["a"],8:["b"],"(":["c"],"{":["c"],3:["e"],6:["g"],9:["g"],1:["i","l"],"!":["i"],"|":["i","l"],0:["o"],$:["s"],5:["s"],7:["t"],"+":["t"],2:["z"],"%":["x"]},de=/(?:19|20)\d\d/g,he=/(\d{1,4})([-/._ ]?)(\d{1,2})\2(\d{1,4})/g,B=Object.freeze({onlineThrottled:100/3600,online:10,offlineSlow:1e4,offlineFast:1e10}),me=[20,30,40,55],k=i=>Math.log2(Math.max(1,i));function we(i,e){let t=0;for(let s=1;s<=Math.min(e,i-e);s+=1)t+=k(i-e+s)-k(s);return t}function L(i){return/[a-z]/.test(i)?"lower":/[A-Z]/.test(i)?"upper":/[0-9]/.test(i)?"digit":/[\x20-\x7e]/.test(i)?"symbol":"other"}function Q(i){let e={lower:!1,upper:!1,digit:!1,symbol:!1,other:!1};for(let t of i)e[L(t)]=!0;return e}function ee(i){let e=(i.lower?26:0)+(i.upper?26:0)+(i.digit?10:0)+(i.symbol?33:0)+(i.other?100:0);return Math.max(10,e)}function te(i){let e=i.replace(/[^A-Za-z]/g,""),t=e.replace(/[^A-Z]/g,"").length;return t?t===e.length?{caps:"all",bits:1}:t===1&&/^[^a-z]*[A-Z]/.test(i)?{caps:"first",bits:1}:t===1&&/[A-Z][^A-Za-z]*$/.test(i)?{caps:"first",bits:1}:{caps:"mixed",bits:we(e.length,Math.min(t,e.length-t))}:{caps:"none",bits:0}}function fe(i){let e=[""];for(let t of i){let s=ue[t]??[t];e=e.flatMap(a=>s.map(r=>a+r)).slice(0,8)}return e.filter(t=>t!==i)}function W(i){return String(i??"").toLowerCase().split(/[^\p{L}\p{N}]+/u).filter(e=>e.length>=3).slice(0,50)}function ge(i,e){let t=[],s=new Map(e.map((r,n)=>[r,n+1])),a=i.length;for(let r=0;r<a;r+=1)for(let n=r+3;n<=Math.min(a,r+24);n+=1){let o=i.slice(r,n).join(""),p=o.toLowerCase(),d=te(o),f=r===0&&n===a,w=(g,y)=>{let x=s.get(g),C=T.get(g);if(!x&&!C)return;let u=d.bits+(y.leet?1+be(g,p):0)+(y.reversed?1:0);x&&t.push({kind:"user",start:r,end:n,token:o,bits:k(x)+u,caps:d.caps,...y}),C&&t.push({kind:f&&!y.leet&&!y.reversed?"common":"dictionary",start:r,end:n,token:o,bits:k(C)+u,caps:d.caps,...y})};w(p,{});for(let g of fe(p))w(g,{leet:!0});n-r>=4&&w([...p].reverse().join(""),{reversed:!0})}return t}function be(i,e){let t=0,s=[...i],a=[...e];for(let r=0;r<s.length;r+=1)s[r]!==a[r]&&(t+=1);return t}function ye(i){let e=[],t=i.map(r=>r.toLowerCase()),s=t.length,a=[...J,...J.map(r=>[...r].reverse().join(""))];for(let r=0;r<s;r+=1){let n=0;for(let o of a){let p=0,d=o.indexOf(t[r]);for(;d>=0&&r+p<s&&o[d+p]===t[r+p];)p+=1;p>n&&(n=p)}if(n>=4||n===3&&!/^\d+$/.test(t.slice(r,r+3).join(""))){let o=i.slice(r,r+n).join("");e.push({kind:"keyboard",start:r,end:r+n,token:o,bits:k(a.length*n*2)+te(o).bits})}}return e}function ve(i){let e=[],t=i.length,s=0;for(;s<t-2;){let a=o=>i[o].codePointAt(0)??0,r=a(s+1)-a(s),n=s+1;if(r!==0&&Math.abs(r)<=2&&L(i[s])===L(i[n]))for(;n+1<t&&a(n+1)-a(n)===r&&L(i[n+1])===L(i[s]);)n+=1;if(n-s+1>=3){let o=i.slice(s,n+1).join(""),p=o[0].toLowerCase(),d="aA1z9".includes(o[0])||p==="a"?4:L(o[0])==="digit"?10:26;e.push({kind:"sequence",start:s,end:n+1,token:o,bits:k(d*(n-s+1)*(r<0?2:1)*Math.abs(r))}),s=n+1}else s+=1}return e}function ke(i,e){let t=[],s=i.length;for(let a=0;a<s;a+=1)for(let r=1;r<=Math.floor((s-a)/2);r+=1){let n=i.slice(a,a+r).join(""),o=1;for(;i.slice(a+o*r,a+(o+1)*r).join("")===n;)o+=1;if(o<2||r===1&&o<3)continue;let p=a+o*r,d=r===1?k(ee(Q([n]))):N(n,e).bits;t.push({kind:"repeat",start:a,end:p,token:i.slice(a,p).join(""),bits:d+k(o)})}return t}function xe(i){let e=[];if([...i].length!==i.length)return e;for(let t of i.matchAll(de))e.push({kind:"year",start:t.index,end:t.index+4,token:t[0],bits:k(200)});for(let t of i.matchAll(he)){let[s,a,,r,n]=t,o=[a,r,n].map(Number),p=[a,r,n].some(f=>f.length===4);(o[1]>=1&&o[1]<=12&&(o[0]<=31||o[2]<=31)||o[0]>=1&&o[0]<=12&&o[1]<=31)&&s.length>=6&&e.push({kind:"date",start:t.index,end:t.index+s.length,token:s,bits:k(366*(p?200:100))+(t[2]?2:0)})}for(let t of i.matchAll(/\d{6}(?:\d{2})?/g)){let s=t[0];(s.length===8?[[s.slice(0,2),s.slice(2,4)],[s.slice(4,6),s.slice(6,8)]]:[[s.slice(0,2),s.slice(2,4)],[s.slice(2,4),s.slice(4,6)]]).some(([r,n])=>+r>=1&&+r<=31&&+n>=1&&+n<=12||+r>=1&&+r<=12&&+n>=1&&+n<=31)&&e.push({kind:"date",start:t.index,end:t.index+s.length,token:s,bits:k(366*(s.length===8?200:100))})}return e}function N(i,e=[]){let t=[...String(i??"")].slice(0,256),s=t.join(""),a=t.length,r=Q(t),n=k(ee(r)),o=[...ge(t,e),...ye(t),...ve(t),...a<=64?ke(t,e):[],...xe(s)],p=Array.from({length:a+1},()=>[]);for(let u of o)p[u.end].push(u);let d=new Array(a+1).fill(1/0),f=new Array(a+1).fill(null);d[0]=0;for(let u=1;u<=a;u+=1){d[u]=d[u-1]+n,f[u]=null;for(let c of p[u]){let h=d[c.start]+c.bits+1;h<d[u]&&(d[u]=h,f[u]=c)}}let w=[];for(let u=a;u>0;){let c=f[u];if(c)w.unshift(c),u=c.start;else{let h=u-1,m=w[0];m?.kind==="brute"&&m.start===u?(m.start=h,m.token=t[h]+m.token,m.bits+=n):w.unshift({kind:"brute",start:h,end:u,token:t[h],bits:n}),u=h}}let g=a?Math.max(0,d[a]-(w.length===1&&w[0].kind!=="brute"?1:0)):0,y=2**g,x=a?me.filter(u=>g>=u).length:0,C={};for(let[u,c]of Object.entries(B))C[u]=y/2/c;return{score:x,bits:g,guesses:y,length:a,classes:r,sequence:w,seconds:C,...Ce(w,x,a)}}function Ce(i,e,t){if(!t)return{warning:null,suggestions:[]};let s=new Set(i.map(o=>o.kind)),a=i.filter(o=>o.kind!=="brute"),r=null;s.has("common")?r="pwWarnCommon":s.has("user")?r="pwWarnUser":a.length===1&&a[0].kind==="dictionary"&&a[0].token.length>=t-1?r="pwWarnWord":s.has("keyboard")?r="pwWarnKeyboard":s.has("repeat")?r="pwWarnRepeat":s.has("sequence")?r="pwWarnSequence":s.has("date")||s.has("year")?r="pwWarnDate":s.has("dictionary")&&e<3&&(r="pwWarnWords"),e>=3&&r!=="pwWarnCommon"&&r!=="pwWarnUser"&&(r=null);let n=[];return e<3&&(t<14&&n.push("pwSuggestLonger"),a.some(o=>o.leet)&&n.push("pwSuggestLeet"),a.some(o=>o.caps==="first"||o.caps==="all")&&n.push("pwSuggestCaps"),a.some(o=>o.reversed)&&n.push("pwSuggestReversed"),(!n.length||s.has("dictionary")||s.has("common"))&&n.push("pwSuggestWords")),{warning:r,suggestions:[...new Set(n)].slice(0,3)}}var j=["lower","upper","digit","symbol"];function se(i,e,t,s=[]){let a=[...i],r=t.classes,n=[];e.minLength&&n.push({id:"length",ok:a.length>=e.minLength,params:{min:e.minLength}});for(let o of e.require)j.includes(o)&&n.push({id:o,ok:r[o]});if(e.minClasses>1){let o=j.filter(p=>r[p]).length;n.push({id:"classes",ok:o>=e.minClasses,params:{min:e.minClasses}})}if(e.noUser&&s.length){let o=i.toLowerCase();n.push({id:"user",ok:!s.some(p=>p.length>=3&&o.includes(p))})}return e.minScore&&n.push({id:"score",ok:a.length?t.score>=e.minScore:!1,params:{min:e.minScore}}),e.maxLength&&a.length>e.maxLength&&n.push({id:"max",ok:!1,params:{max:e.maxLength}}),n}function re(i={}){let e=Math.max(4,Math.min(256,Math.round(i.length??20))),s=(i.classes?.length?i.classes:["lower","upper","digit","symbol"]).filter(n=>j.includes(n)).map(n=>{let o=V[n];return i.avoidAmbiguous?[...o].filter(p=>!G.includes(p)).join(""):o}),a=s.join(""),r=s.map(n=>n[K(n.length)]);return r.push(...Y(e-r.length,a)),Z(r).join("")}async function P(i){let e=await crypto.subtle.digest("SHA-1",new TextEncoder().encode(i));return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("").toUpperCase()}var U="https://api.pwnedpasswords.com/range/";async function ae(i,e={}){let t=await P(i),s=t.slice(0,5),a=t.slice(5),n=await(e.fetch??fetch)(`${e.url??U}${s}`,{headers:{"Add-Padding":"true"},signal:e.signal,credentials:"omit",referrerPolicy:"no-referrer",cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let o=await n.text();for(let p of o.split(/\r?\n/)){let[d,f]=p.trim().split(":");if(d===a)return Number(f)||0}return 0}var ne=Object.freeze({pwLabelNew:"New password",pwLabelCurrent:"Password",pwConfirmLabel:"Confirm password",pwRequired:"required",pwShow:"Show password",pwHide:"Hide password",pwShowConfirm:"Show confirmation",pwHideConfirm:"Hide confirmation",pwGenerate:"Generate a strong password",pwGenerated:"Strong password generated and shown. Copy it or save it in your password manager.",pwCopy:"Copy password",pwCaps:"Caps Lock is on",pwStrength:"Password strength",pwScore0:"Very weak",pwScore1:"Weak",pwScore2:"Fair",pwScore3:"Strong",pwScore4:"Very strong",pwStrengthIs:"Strength: {label}",pwCrack:"Found in about {time} by an attacker with stolen hashes",pwCrackOnline:"Found in about {time} by guessing on a login form",pwRules:"Requirements",pwMet:"met",pwNotMet:"not met",pwRule_length:"At least {min} characters",pwRule_max:"At most {max} characters",pwRule_lower:"A lowercase letter",pwRule_upper:"An uppercase letter",pwRule_digit:"A digit",pwRule_symbol:"A symbol, such as ! # $ %",pwRule_classes:"At least {min} of: lowercase, uppercase, digits, symbols",pwRule_user:"Not your name or email",pwRule_score:"Strength at least \u201C{label}\u201D",pwWarnCommon:"This is one of the most common passwords.",pwWarnUser:"It contains your name or email.",pwWarnWord:"A single word is easy to guess.",pwWarnWords:"Common words are easy to guess.",pwWarnKeyboard:"Keys side by side, like qwerty, are easy to guess.",pwWarnRepeat:"Repeats, like aaa or abcabc, are easy to guess.",pwWarnSequence:"Sequences, like abc or 6543, are easy to guess.",pwWarnDate:"Dates and years are easy to guess.",pwSuggestLonger:"Make it longer: length matters most.",pwSuggestWords:"Use a few uncommon words together, or a generated password.",pwSuggestLeet:"Writing @ for a or 0 for o does not help much.",pwSuggestCaps:"A capital at the start or all capitals does not help much.",pwSuggestReversed:"Words written backwards are not much harder to guess.",pwBreachChecking:"Checking known data breaches\u2026",pwBreachFound:"This password appeared {count} times in data breaches. Choose another one.",pwBreachClean:"Not found in known data breaches.",pwBreachFailed:"Could not check known data breaches.",pwMatch:"Passwords match",pwNoMatch:"Passwords do not match",pwMissing:"Enter a password.",pwTooShort:"Use at least {min} characters.",pwTooLong:"Use at most {max} characters.",pwMissingRule:"The password does not meet the requirements.",pwTooWeak:"Choose a stronger password.",pwHasUser:"Do not use your name or email in the password.",pwBreached:"This password is known from data breaches. Choose another one.",pwConfirmMissing:"Confirm the password.",pwConfirmWrong:"The two passwords are not the same.",pwDetails:"Details",pwEntropy:"{bits} bits of entropy",pwLength:"{count} characters",pwAttack_onlineThrottled:"Login form with limits (100 tries an hour)",pwAttack_online:"Login form without limits (10 tries a second)",pwAttack_offlineSlow:"Stolen hashes, slow hash such as bcrypt (10\u2074 a second)",pwAttack_offlineFast:"Stolen hashes, fast hash such as SHA-1 (10\xB9\u2070 a second)",pwAttack:"Attack",pwTime:"Time to guess",pwFound:"Found in",pwPattern_common:"common password",pwPattern_dictionary:"word",pwPattern_user:"your name or email",pwPattern_keyboard:"keyboard pattern",pwPattern_sequence:"sequence",pwPattern_repeat:"repeat",pwPattern_year:"year",pwPattern_date:"date",pwPattern_brute:"random",pwPatterns:"How it would be guessed",pwInstant:"an instant",pwSeconds:"{count} seconds",pwMinutes:"{count} minutes",pwHours:"{count} hours",pwDays:"{count} days",pwMonths:"{count} months",pwYears:"{count} years",pwCenturies:"centuries"}),ie=Object.freeze({pwLabelNew:"Nouveau mot de passe",pwLabelCurrent:"Mot de passe",pwConfirmLabel:"Confirmer le mot de passe",pwRequired:"obligatoire",pwShow:"Afficher le mot de passe",pwHide:"Masquer le mot de passe",pwShowConfirm:"Afficher la confirmation",pwHideConfirm:"Masquer la confirmation",pwGenerate:"G\xE9n\xE9rer un mot de passe robuste",pwGenerated:"Mot de passe robuste g\xE9n\xE9r\xE9 et affich\xE9. Copiez-le ou enregistrez-le dans votre gestionnaire de mots de passe.",pwCopy:"Copier le mot de passe",pwCaps:"Le verrouillage des majuscules est activ\xE9",pwStrength:"Robustesse du mot de passe",pwScore0:"Tr\xE8s faible",pwScore1:"Faible",pwScore2:"Moyen",pwScore3:"Robuste",pwScore4:"Tr\xE8s robuste",pwStrengthIs:"Robustesse : {label}",pwCrack:"Trouv\xE9 en environ {time} par un attaquant ayant vol\xE9 les empreintes",pwCrackOnline:"Trouv\xE9 en environ {time} en essayant sur un formulaire de connexion",pwRules:"Exigences",pwMet:"respect\xE9e",pwNotMet:"non respect\xE9e",pwRule_length:"Au moins {min} caract\xE8res",pwRule_max:"Au plus {max} caract\xE8res",pwRule_lower:"Une lettre minuscule",pwRule_upper:"Une lettre majuscule",pwRule_digit:"Un chiffre",pwRule_symbol:"Un symbole, comme ! # $ %",pwRule_classes:"Au moins {min} parmi : minuscules, majuscules, chiffres, symboles",pwRule_user:"Ni votre nom ni votre e-mail",pwRule_score:"Robustesse au moins \xAB {label} \xBB",pwWarnCommon:"C\u2019est l\u2019un des mots de passe les plus courants.",pwWarnUser:"Il contient votre nom ou votre e-mail.",pwWarnWord:"Un seul mot se devine facilement.",pwWarnWords:"Les mots courants se devinent facilement.",pwWarnKeyboard:"Les touches voisines, comme azerty, se devinent facilement.",pwWarnRepeat:"Les r\xE9p\xE9titions, comme aaa ou abcabc, se devinent facilement.",pwWarnSequence:"Les suites, comme abc ou 6543, se devinent facilement.",pwWarnDate:"Les dates et les ann\xE9es se devinent facilement.",pwSuggestLonger:"Allongez-le : la longueur compte le plus.",pwSuggestWords:"Assemblez quelques mots peu courants, ou g\xE9n\xE9rez un mot de passe.",pwSuggestLeet:"\xC9crire @ pour a ou 0 pour o n\u2019aide pas beaucoup.",pwSuggestCaps:"Une majuscule au d\xE9but ou tout en majuscules n\u2019aide pas beaucoup.",pwSuggestReversed:"Un mot \xE9crit \xE0 l\u2019envers n\u2019est gu\xE8re plus dur \xE0 deviner.",pwBreachChecking:"V\xE9rification des fuites de donn\xE9es connues\u2026",pwBreachFound:"Ce mot de passe appara\xEEt {count} fois dans des fuites de donn\xE9es. Choisissez-en un autre.",pwBreachClean:"Absent des fuites de donn\xE9es connues.",pwBreachFailed:"Impossible de v\xE9rifier les fuites de donn\xE9es connues.",pwMatch:"Les mots de passe sont identiques",pwNoMatch:"Les mots de passe sont diff\xE9rents",pwMissing:"Saisissez un mot de passe.",pwTooShort:"Utilisez au moins {min} caract\xE8res.",pwTooLong:"Utilisez au plus {max} caract\xE8res.",pwMissingRule:"Le mot de passe ne respecte pas les exigences.",pwTooWeak:"Choisissez un mot de passe plus robuste.",pwHasUser:"N\u2019utilisez ni votre nom ni votre e-mail dans le mot de passe.",pwBreached:"Ce mot de passe est connu de fuites de donn\xE9es. Choisissez-en un autre.",pwConfirmMissing:"Confirmez le mot de passe.",pwConfirmWrong:"Les deux mots de passe ne sont pas identiques.",pwDetails:"D\xE9tails",pwEntropy:"{bits} bits d\u2019entropie",pwLength:"{count} caract\xE8res",pwAttack_onlineThrottled:"Formulaire de connexion limit\xE9 (100 essais par heure)",pwAttack_online:"Formulaire de connexion sans limite (10 essais par seconde)",pwAttack_offlineSlow:"Empreintes vol\xE9es, hachage lent comme bcrypt (10\u2074 par seconde)",pwAttack_offlineFast:"Empreintes vol\xE9es, hachage rapide comme SHA-1 (10\xB9\u2070 par seconde)",pwAttack:"Attaque",pwTime:"Temps pour le deviner",pwFound:"Trouv\xE9 dans",pwPattern_common:"mot de passe courant",pwPattern_dictionary:"mot",pwPattern_user:"votre nom ou e-mail",pwPattern_keyboard:"touches voisines",pwPattern_sequence:"suite",pwPattern_repeat:"r\xE9p\xE9tition",pwPattern_year:"ann\xE9e",pwPattern_date:"date",pwPattern_brute:"al\xE9atoire",pwPatterns:"Comment il serait devin\xE9",pwInstant:"un instant",pwSeconds:"{count} secondes",pwMinutes:"{count} minutes",pwHours:"{count} heures",pwDays:"{count} jours",pwMonths:"{count} mois",pwYears:"{count} ans",pwCenturies:"des si\xE8cles"});D({en:ne,fr:ie});var Se=700;function oe(i,e,t){let s=n=>R(Math.round(n),t);if(!(i>=1))return e("pwInstant");let a=[[60,"pwSeconds"],[3600,"pwMinutes"],[86400,"pwHours"],[86400*31,"pwDays"],[86400*365,"pwMonths"],[86400*365*100,"pwYears"]],r=[1,60,3600,86400,86400*30.4,86400*365];for(let n=0;n<a.length;n+=1)if(i<a[n][0])return e(a[n][1],{count:s(i/r[n])});return e("pwCenturies")}var le=class extends F{static type="password";static formAssociated=!0;static allowEmpty=!0;static componentAttributes=Object.freeze(["mode","name","hint","placeholder","value","required","disabled","minlength","maxlength","require","min-classes","min-score","user-inputs","user-fields","confirm","generate","generate-length","breach-check","strength","rules","details","validate"]);static dataAttributes=Object.freeze(["mode","require","min-score","minlength","user-inputs","confirm"]);static presets={simple:{},full:{details:!0}};static styles=[O,X];static fromData(e){let t=e!==null&&typeof e=="object"&&!Array.isArray(e)?e:{},s=a=>Array.isArray(a)?a.join(","):a;return{content:"",attributes:{mode:t.mode,require:s(t.require),"min-score":t.minScore,minlength:t.minLength,"user-inputs":s(t.userInputs),confirm:t.confirm}}}constructor(){super(),this.internals=typeof this.attachInternals=="function"?this.attachInternals():null,this.ids={control:v("pw"),label:v("label"),hint:v("hint"),error:v("error"),meter:v("meter"),rules:v("rules"),feedback:v("advice"),confirm:v("confirm"),confirmLabel:v("label"),confirmStatus:v("match"),caps:v("caps")},this.password=null,this.confirmation="",this.reveal=!1,this.revealConfirm=!1,this.showErrors=!1,this.confirmTouched=!1,this.caps=!1,this.formDisabled=!1,this.generated=!1,this.breach=null,this.breachTimer=void 0,this.breachAbort=null,this.cache=null,this.lastScore=-1,this.announceTimer=void 0,this.addEventListener("invalid",e=>{e.preventDefault(),this.showErrors=!0,this.confirmTouched=!0,this.update(),this.form?.querySelector(":invalid")===this&&this.focus()})}get mode(){return $(this.getAttribute("mode"),["new","current"],"new")}get isNew(){return this.mode==="new"}flag(e,t){let s=S(this.getAttribute(e));return s===null?t||this.feature(e):s}get disabled(){return this.formDisabled||S(this.getAttribute("disabled"))===!0}get rulesSet(){let e=this.isNew,t=(s,a,r,n)=>E(this.getAttribute(s),{min:a,max:r,fallback:n});return{minLength:t("minlength",0,1024,e?8:0),maxLength:t("maxlength",1,4096,128),require:e?(this.getAttribute("require")??"").split(",").map(s=>s.trim().toLowerCase()).filter(s=>j.includes(s)):[],minClasses:e?t("min-classes",0,4,0):0,minScore:e?t("min-score",0,4,2):0,noUser:e}}get userInputs(){let e=W(this.getAttribute("user-inputs")??""),t=this.form;for(let s of(this.getAttribute("user-fields")??"").split(",").map(a=>a.trim()).filter(Boolean)){let a=t?.elements.namedItem(s),r=a&&typeof a.value=="string"?a.value:"";e.push(...W(r))}return[...new Set(e)]}get value(){return this.password??this.getAttribute("value")??""}set value(e){this.password=e==null?"":String(e),this.generated=!1,this._connected&&this.render()}get strength(){let e=this.value,t=this.userInputs,s=t.join(" ");return(this.cache?.text!==e||this.cache.user!==s)&&(this.cache={text:e,user:s,result:N(e,t)}),this.cache.result}get breaches(){return this.breach?.state==="done"?this.breach.count:null}get form(){return this.internals?.form??null}get validity(){return this.internals?.validity}get validationMessage(){return this.internals?.validationMessage??""}checkValidity(){return this.internals?.checkValidity()??!0}reportValidity(){return this.showErrors=!0,this.update(),this.internals?.reportValidity()??!0}focus(e){this.root.getElementById(this.ids.control)?.focus(e)}formResetCallback(){this.password=null,this.confirmation="",this.showErrors=!1,this.confirmTouched=!1,this.breach=null,this.generated=!1,this.render()}formDisabledCallback(e){this.formDisabled=e,this.requestRender()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.breachTimer),clearTimeout(this.announceTimer),this.breachAbort?.abort()}get ruleResults(){return se(this.value,this.rulesSet,this.strength,this.userInputs)}check(){let e=this.t,t=this.value,s=this.rulesSet,a=[...t].length,r={flags:{},message:"",confirm:!1};if(this.disabled)return r;if(!t)return S(this.getAttribute("required"))===!0?{flags:{valueMissing:!0},message:e("pwMissing"),confirm:!1}:r;if(s.minLength&&a<s.minLength)return{flags:{tooShort:!0},message:e("pwTooShort",{min:s.minLength}),confirm:!1};if(a>s.maxLength)return{flags:{tooLong:!0},message:e("pwTooLong",{max:s.maxLength}),confirm:!1};if(this.isNew){let n=this.ruleResults.filter(o=>!o.ok);if(n.some(o=>o.id==="user"))return{flags:{customError:!0},message:e("pwHasUser"),confirm:!1};if(n.some(o=>j.includes(o.id)||o.id==="classes"))return{flags:{patternMismatch:!0},message:e("pwMissingRule"),confirm:!1};if(n.some(o=>o.id==="score"))return{flags:{customError:!0},message:e("pwTooWeak"),confirm:!1};if(this.breach?.state==="done"&&this.breach.count)return{flags:{customError:!0},message:e("pwBreached"),confirm:!1}}if(this.hasConfirm){if(!this.confirmation)return{flags:{customError:!0},message:e("pwConfirmMissing"),confirm:!0};if(this.confirmation!==t)return{flags:{customError:!0},message:e("pwConfirmWrong"),confirm:!0}}return r}get hasConfirm(){return this.isNew&&S(this.getAttribute("confirm"))===!0}get valid(){return!Object.keys(this.check().flags).length}renderContent(e){let t=this.t,s=this.isNew,a=S(this.getAttribute("required"))===!0,r=z(this.getAttribute("hint"),300),n=z(this.getAttribute("label"),300)||t(s?"pwLabelNew":"pwLabelCurrent"),o=s&&this.flag("strength",!0),p=s&&this.flag("rules",this.ruleResults.some(f=>f.id!=="max")),d=l("div",{class:`field password${this.disabled?" disabled":""}`,part:"body"},l("div",{class:"field-top"},l("label",{class:"field-label",part:"label",attrs:{id:this.ids.label,for:this.ids.control}},n,a?l("span",{class:"field-required",text:"*",attrs:{"aria-hidden":"true"}}):null,a?l("span",{class:"sr-only",text:` (${t("pwRequired")})`}):null)),this.inputBox(),l("p",{class:"pw-caps",attrs:{id:this.ids.caps,"aria-live":"polite"}}),r?l("p",{class:"field-hint",part:"hint",text:r,attrs:{id:this.ids.hint}}):null,o?this.meterView():null,o?l("div",{class:"pw-feedback",part:"feedback",attrs:{id:this.ids.feedback}}):null,p?l("ul",{class:"pw-rules",part:"rules",attrs:{id:this.ids.rules,"aria-label":t("pwRules")}}):null,s&&this.getAttribute("breach-check")!==null?l("p",{class:"pw-breach",attrs:{"aria-live":"polite"}}):null,this.generated?l("p",{class:"pw-generated",text:t("pwGenerated")}):null,o&&this.flag("details",!1)?this.detailsView():null,this.hasConfirm?this.confirmView():null,l("p",{class:"field-error",part:"error",attrs:{id:this.ids.error,"aria-live":"polite"}}));e.append(d),this.update()}describedBy(){return[this.getAttribute("hint")?this.ids.hint:"",this.isNew&&this.flag("rules",this.ruleResults.some(e=>e.id!=="max"))?this.ids.rules:"",this.ids.caps,this.ids.error].filter(Boolean).join(" ")}inputBox(){let e=this.t,t=this.rulesSet,s=l("input",{class:"field-input pw-input",part:"control",attrs:{id:this.ids.control,type:this.reveal?"text":"password",placeholder:this.getAttribute("placeholder"),required:S(this.getAttribute("required"))===!0,disabled:this.disabled,autocomplete:this.isNew?"new-password":"current-password",autocapitalize:"off",spellcheck:"false",minlength:t.minLength||null,maxlength:t.maxLength,passwordrules:this.isNew?_e(t):null,"aria-describedby":this.describedBy(),"data-focus-key":"control"}});s.value=this.value,s.addEventListener("input",()=>{this.password=s.value,this.generated=!1,this.root.querySelector(".pw-generated")?.remove(),this.typed()}),s.addEventListener("change",()=>A(this,_.CHANGE,{score:this.strength.score,valid:this.valid})),s.addEventListener("blur",()=>{this.showErrors=!0,this.setCaps(!1),this.update()});for(let r of["keydown","keyup"])s.addEventListener(r,n=>{let o=n;typeof o.getModifierState=="function"&&this.setCaps(o.getModifierState("CapsLock"))});let a=this.isNew&&this.flag("generate",!0)&&!this.disabled;return l("div",{class:"field-box"},b("lock"),s,this.reveal&&this.value?this.copyPasswordButton():null,a?l("button",{class:"field-icon-button",attrs:{type:"button","aria-label":e("pwGenerate"),title:e("pwGenerate"),"data-focus-key":"generate"},on:{click:()=>this.fill()}},b("refresh")):null,l("button",{class:"field-icon-button",attrs:{type:"button","aria-label":e(this.reveal?"pwHide":"pwShow"),title:e(this.reveal?"pwHide":"pwShow"),"aria-pressed":String(this.reveal),"aria-controls":this.ids.control,disabled:this.disabled,"data-focus-key":"reveal"},on:{click:()=>{this.reveal=!this.reveal,this.render()}}},b(this.reveal?"eye-off":"eye")))}copyPasswordButton(){let e=this.t,t=l("button",{class:"field-icon-button",attrs:{type:"button","aria-label":e("pwCopy"),title:e("pwCopy"),"data-focus-key":"copy"},on:{click:async()=>{let s=await H(this.value,this.root);t.replaceChildren(b(s?"check":"alert")),t.classList.toggle("done",s),setTimeout(()=>{t.replaceChildren(b("copy")),t.classList.remove("done")},1500),this.announce(e(s?"copied":"copyFailed")),s&&A(this,_.COPY,{})}}},b("copy"));return t}meterView(){let e=this.t;return l("div",{class:"pw-meter",part:"meter"},l("div",{class:"pw-bars",attrs:{id:this.ids.meter,role:"meter","aria-label":e("pwStrength"),"aria-valuemin":"0","aria-valuemax":"4","aria-valuenow":"0"}},...[0,1,2,3].map(()=>l("span",{class:"pw-bar"}))),l("span",{class:"pw-label"}),l("span",{class:"pw-time"}))}detailsView(){let e=this.t;return l("details",{class:"pw-details",part:"details"},l("summary",{text:e("pwDetails"),attrs:{"data-focus-key":"details"}}),l("p",{class:"pw-entropy"}),l("table",{class:"pw-attacks"},l("thead",{},l("tr",{},l("th",{text:e("pwAttack"),attrs:{scope:"col"}}),l("th",{text:e("pwTime"),attrs:{scope:"col"}}))),l("tbody",{},...Object.keys(B).map(t=>l("tr",{attrs:{"data-attack":t}},l("th",{text:e(`pwAttack_${t}`),attrs:{scope:"row"}}),l("td"))))),l("p",{class:"pw-patterns-title",text:e("pwPatterns")}),l("ol",{class:"pw-patterns"}))}confirmView(){let e=this.t,t=l("input",{class:"field-input",attrs:{id:this.ids.confirm,type:this.revealConfirm?"text":"password",autocomplete:"new-password",autocapitalize:"off",spellcheck:"false",disabled:this.disabled,"aria-describedby":`${this.ids.confirmStatus} ${this.ids.error}`,"data-focus-key":"confirm"}});return t.value=this.confirmation,t.addEventListener("input",()=>{this.confirmation=t.value,this.confirmation.length>=this.value.length&&(this.confirmTouched=!0),this.typed()}),t.addEventListener("blur",()=>{this.confirmTouched=!0,this.showErrors=!0,this.update()}),l("div",{class:"pw-confirm",part:"confirm"},l("label",{class:"field-label",text:e("pwConfirmLabel"),attrs:{id:this.ids.confirmLabel,for:this.ids.confirm}}),l("div",{class:"field-box"},b("lock"),t,l("button",{class:"field-icon-button",attrs:{type:"button","aria-label":e(this.revealConfirm?"pwHideConfirm":"pwShowConfirm"),title:e(this.revealConfirm?"pwHideConfirm":"pwShowConfirm"),"aria-pressed":String(this.revealConfirm),disabled:this.disabled,"data-focus-key":"reveal-confirm"},on:{click:()=>{this.revealConfirm=!this.revealConfirm,this.render()}}},b(this.revealConfirm?"eye-off":"eye"))),l("p",{class:"pw-match",attrs:{id:this.ids.confirmStatus}}))}typed(){this.getAttribute("validate")==="input"&&(this.showErrors=!0),this.scheduleBreach(),this.update();let e=this.strength;A(this,_.INPUT,{score:e.score,valid:this.valid,length:e.length}),clearTimeout(this.announceTimer),this.isNew&&this.value&&e.score!==this.lastScore&&(this.announceTimer=setTimeout(()=>{this.lastScore=this.strength.score,this.value&&this.announce(this.t("pwStrengthIs",{label:this.t(`pwScore${this.lastScore}`)}))},900))}setCaps(e){if(e===this.caps)return;this.caps=e;let t=this.root.getElementById(this.ids.caps);t&&t.replaceChildren(...e?[b("alert"),l("span",{text:this.t("pwCaps")})]:[])}update(){let e=this.t,t=this.value,s=this.strength,a=t.length>0,{flags:r,message:n,confirm:o}=this.check();if(this.internals){this.internals.setFormValue(this.disabled?null:t,"");let c=this.root.getElementById(o?this.ids.confirm:this.ids.control)??void 0;this.internals.setValidity(r,n,Object.keys(r).length?c:void 0)}let p=this.root.getElementById(this.ids.meter);if(p){let c=a?s.score:0;p.setAttribute("aria-valuenow",String(c)),p.setAttribute("aria-valuetext",a?e(`pwScore${c}`):"\u2014");let h=p.parentElement;h.className=`pw-meter score-${a?c:"none"}`,p.querySelectorAll(".pw-bar").forEach((M,I)=>M.classList.toggle("on",a&&I<=Math.max(0,c-1)&&(c>0||I===0)));let m=h.querySelector(".pw-label");m&&(m.textContent=a?e(`pwScore${c}`):"");let q=h.querySelector(".pw-time");q&&(q.textContent=a?e("pwCrack",{time:oe(s.seconds.offlineSlow,e,this.locale)}):"")}let d=this.root.getElementById(this.ids.feedback);d&&(d.replaceChildren(),a&&s.warning&&d.append(l("p",{class:"pw-warning"},b("alert"),l("span",{text:e(s.warning)}))),a&&s.suggestions.length&&d.append(l("ul",{class:"pw-suggestions"},...s.suggestions.map(c=>l("li",{text:e(c)})))));let f=this.root.getElementById(this.ids.rules);f&&f.replaceChildren(...this.ruleResults.map(c=>{let h=c.id==="score"?{label:e(`pwScore${c.params?.min}`)}:c.params;return l("li",{class:`pw-rule${c.ok?" ok":""}`,attrs:{"data-rule":c.id}},b(c.ok?"status-success":"status-circle"),l("span",{text:e(`pwRule_${c.id}`,h)}),l("span",{class:"sr-only",text:` (${e(c.ok?"pwMet":"pwNotMet")})`}))}));let w=this.root.querySelector(".pw-breach");if(w){let c=this.breach;if(w.className=`pw-breach${c?.state==="done"?c.count?" found":" clean":""}`,w.replaceChildren(),c&&a){let h=c.state==="checking"?e("pwBreachChecking"):c.state==="failed"?e("pwBreachFailed"):c.count?e("pwBreachFound",{count:R(c.count,this.locale)}):e("pwBreachClean");w.append(b(c.state==="done"?c.count?"shield-alert":"shield-check":"status-running"),l("span",{text:h}))}}let g=this.root.querySelector(".pw-details");if(g){let c=g.querySelector(".pw-entropy");c&&(c.textContent=a?`${e("pwEntropy",{bits:R(Math.round(s.bits),this.locale)})} \xB7 ${e("pwLength",{count:s.length})}`:"");for(let m of g.querySelectorAll("tr[data-attack]")){let q=m.dataset.attack,M=m.querySelector("td");M&&(M.textContent=a?oe(s.seconds[q],e,this.locale):"\u2014")}g.querySelector(".pw-patterns")?.replaceChildren(...(a?s.sequence:[]).map(m=>l("li",{class:`pw-pattern kind-${m.kind}`},l("code",{text:m.kind==="brute"?"\u2022".repeat([...m.token].length):m.token}),l("span",{text:e(`pwPattern_${m.kind}`)}))))}let y=this.root.querySelector(".pw-match");if(y){let c=this.confirmation.length>0&&(this.confirmTouched||this.confirmation===t),h=this.confirmation===t&&t.length>0;y.className=`pw-match${c?h?" ok":" bad":""}`,y.replaceChildren(...c?[b(h?"status-success":"status-failure"),l("span",{text:e(h?"pwMatch":"pwNoMatch")})]:[])}let x=!!n&&this.showErrors&&(!o||this.confirmTouched),C=this.root.getElementById(this.ids.error);C&&(C.textContent=x?n:"");let u=this.root.getElementById(o?this.ids.confirm:this.ids.control);for(let c of[this.ids.control,this.ids.confirm])this.root.getElementById(c)?.removeAttribute("aria-invalid");x&&u?.setAttribute("aria-invalid","true"),this.root.querySelector(".field")?.classList.toggle("has-error",x)}fill(){let e=this.rulesSet,t=Math.min(e.maxLength,Math.max(e.minLength,E(this.getAttribute("generate-length"),{min:8,max:128,fallback:20})));this.password=re({length:t,classes:["lower","upper","digit","symbol"],avoidAmbiguous:!0}),this.hasConfirm&&(this.confirmation=this.password),this.generated=!0,this.reveal=!0,this.showErrors=!0,this.render(),this.typed(),A(this,_.GENERATE,{length:t}),A(this,_.CHANGE,{score:this.strength.score,valid:this.valid})}get breachUrl(){let e=this.getAttribute("breach-check");if(e===null||!this.isNew||S(e)===!1)return null;let t=e.trim();if(!t||S(t)===!0)return U;try{let s=new URL(t,document.baseURI);return s.protocol==="https:"||s.origin===location.origin?s.href:null}catch{return null}}scheduleBreach(){clearTimeout(this.breachTimer),this.breachAbort?.abort();let e=this.breachUrl,t=this.value;if(!e||[...t].length<Math.max(4,this.rulesSet.minLength)){this.breach=null;return}this.breach={hash:"",count:null,state:"checking"},this.breachTimer=setTimeout(()=>this.runBreach(e,t),Se)}async runBreach(e,t){let s=new AbortController;this.breachAbort=s;try{let a=await ae(t,{url:e,signal:s.signal});if(s.signal.aborted||t!==this.value)return;this.breach={hash:await P(t),count:a,state:"done"},A(this,_.BREACH,{count:a})}catch{if(s.signal.aborted)return;this.breach={hash:"",count:null,state:"failed"}}this.update()}};function _e(i){let e={lower:"lower",upper:"upper",digit:"digit",symbol:"special"},t=[`minlength: ${Math.max(i.minLength,8)}`,`maxlength: ${i.maxLength}`];for(let s of i.require)t.push(`required: ${e[s]}`);return t.push("allowed: ascii-printable"),`${t.join("; ")};`}export{le as a};
