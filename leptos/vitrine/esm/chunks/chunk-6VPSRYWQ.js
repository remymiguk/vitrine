/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as x,b as A,c as b}from"./chunk-2SXY6GKO.js";import{a as g,d as w}from"./chunk-CDLFL5U7.js";import{c as d,e as m,j as p,o}from"./chunk-JAZI474S.js";var v=`/* <vt-loading-message>: a spinner and the current message, the elapsed time, the slow message. */
.indicator {
  gap: var(--_space-3);
}

.indicator[data-layout='stacked'] {
  flex-direction: column;
  text-align: center;
}

.message-text {
  display: grid;
  gap: 2px;
}

.message {
  line-height: 1.4;
  animation: vt-message-in 0.25s ease-out;
}

@keyframes vt-message-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
}

.elapsed {
  opacity: var(--_dim);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
}

.slow {
  font-style: italic;
  font-size: var(--_font-size-small);
}

.indicator[data-motion='reduce'] .message {
  animation: none;
}
`;var y=50,k=["inline","stacked"],C=class extends w{static type="loading-message";static componentAttributes=["messages","interval","loop","elapsed","slow-after","slow-text","spinner","layout"];static styles=[x,v];static defaultSize="sm";constructor(){super(),this.messagesState=null,this.index=0,this.startedAt=0,this.tick=void 0,this.lastSwitch=0}get messages(){if(this.messagesState)return[...this.messagesState];let t=this.getAttribute("messages");return(t!==null?t.split("|"):(this.textContent??"").split(/\r\n|\n|\r/)).map(e=>p(e,200)).filter(Boolean).slice(0,y)}set messages(t){this.messagesState=Array.isArray(t)?t.map(s=>p(String(s),200)).filter(Boolean).slice(0,y):null,this.index=0,this.requestRender()}get content(){return this.messages.join(`
`)}set content(t){this.messages=t==null?null:String(t).split(/\r\n|\n|\r/)}started(){this.index=0,this.startedAt=performance.now(),this.lastSwitch=this.startedAt,clearInterval(this.tick),this.tick=setInterval(()=>this.advance(),250)}stopped(){clearInterval(this.tick)}advance(){let t=performance.now(),s=Math.max(500,g(this.getAttribute("interval"),2500)),e=this.messages.length;if(e>1&&t-this.lastSwitch>=s){this.lastSwitch=t;let i=d(this.getAttribute("loop"))??!1;this.index=i?(this.index+1)%e:Math.min(this.index+1,e-1)}this.render()}draw(t){if(!this.shown){t.replaceChildren(),t.removeAttribute("role");return}let s=this.messages,e=s[Math.min(this.index,s.length-1)]??this.t("loadingLabel"),i=performance.now()-this.startedAt,f=this.hasAttribute("slow-after")?g(this.getAttribute("slow-after"),0):0,S=f>0&&i>=f,l=this.getAttribute("spinner")==="none"?null:m(this.getAttribute("spinner"),A,"ring");t.dataset.layout=m(this.getAttribute("layout"),k,"inline"),t.setAttribute("role","status"),t.setAttribute("aria-label",this.labelText());let a=t.querySelector(".message-text");(!a||t.dataset.spinner!==String(l))&&(t.dataset.spinner=String(l),a=o("span",{class:"message-text",attrs:{"aria-live":"polite"}}),t.replaceChildren(l?b(l):"",a));let h=a.querySelector(".message");if(h?.textContent!==e){let r=o("span",{class:"message",part:"message",text:e});h?h.replaceWith(r):a.prepend(r)}let E=d(this.getAttribute("elapsed"))??!1,n=a.querySelector(".elapsed");if(E){let r=this.t("loadingElapsed",{time:_(i)});n||(n=o("span",{class:"elapsed",part:"elapsed",attrs:{"aria-hidden":"true"}}),a.append(n)),n.textContent!==r&&(n.textContent=r)}else n?.remove();let c=a.querySelector(".slow");S&&!c?(c=o("span",{class:"slow",part:"slow",text:p(this.getAttribute("slow-text"),200)||this.t("loadingSlow")}),a.append(c)):S||c?.remove()}};function _(u){let t=Math.floor(u/1e3),s=String(t%60).padStart(2,"0"),e=Math.floor(t/60)%60,i=Math.floor(t/3600);return i?`${i}:${String(e).padStart(2,"0")}:${s}`:`${e}:${s}`}export{C as a};
