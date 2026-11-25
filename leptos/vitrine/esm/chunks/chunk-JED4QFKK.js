/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as l,b as d,c as r,d as u}from"./chunk-CDLFL5U7.js";import{c as s,e as a,i as p,o as n}from"./chunk-JAZI474S.js";import{k as o,l as h}from"./chunk-SCKP2KTO.js";var g=`/* <vt-page-progress>: a bar fixed to an edge of the window (or of a container). */
:host {
  /* Takes no room: the bar is positioned against the window or the container. */
  display: block;
  height: 0;
}

.indicator {
  position: fixed;
  inset-inline: 0;
  top: 0;
  z-index: 2147483000;
  height: var(--_thickness);
  pointer-events: none;
}

.indicator[data-placement='absolute'] {
  position: absolute;
}

.indicator[data-position='bottom'] {
  top: auto;
  bottom: 0;
}

.page-bar {
  flex: none;
  width: 100%;
  height: 100%;
  background: var(--_ind-color);
  transform: scaleX(var(--_ratio));
  transform-origin: left center;
  transition: transform 0.2s ease;
}

:host(:dir(rtl)) .page-bar {
  transform-origin: right center;
}

.indicator.glow .page-bar {
  box-shadow:
    0 0 10px var(--_ind-color),
    0 0 4px var(--_ind-color);
}

.indicator.finishing {
  opacity: 0;
  transition: opacity 0.3s ease 0.15s;
}

.page-spinner {
  position: absolute;
  top: calc(var(--_thickness) + 8px);
  inset-inline-end: 12px;
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top-color: var(--_ind-color);
  border-left-color: var(--_ind-color);
  border-radius: 50%;
  animation: vt-rotate 0.6s linear infinite;
}

.indicator[data-position='bottom'] .page-spinner {
  top: auto;
  bottom: calc(var(--_thickness) + 8px);
}

.indicator[data-motion='reduce'] .page-bar,
.indicator[data-motion='reduce'].finishing {
  transition: none;
}

.indicator[data-motion='reduce'] .page-spinner {
  animation-name: vt-fade;
}

@media (forced-colors: active) {
  .page-bar {
    background: Highlight;
  }
}
`;var v=["top","bottom"],f=["fixed","absolute"],m=class extends u{static type="page-progress";static componentAttributes=["value","trickle","trickle-speed","minimum","position","placement","thickness","glow","spinner"];static styles=[g];constructor(){super(),this.progress=0,this.trickleTimer=void 0,this.doneTimer=void 0,this.finishing=!1}get active(){return this.activeState??s(this.getAttribute("active"))??!1}set active(t){super.active=t}get value(){return this.progress}set value(t){this.set(Number(t))}get minimum(){return Math.min(.5,Math.max(0,r(this.getAttribute("minimum"))??.08))}start(){clearTimeout(this.doneTimer),this.finishing=!1,this.active||(this.progress=0),super.start(),this.set(Math.max(this.progress,this.minimum))}set(t){if(!Number.isFinite(t))return;let i=Math.min(1,Math.max(0,t));!this.active&&i<1&&super.start(),this.progress=i,h(this,o.PROGRESS,{value:i,max:1,ratio:i}),this.requestRender()}inc(t){let i=this.progress;if(i>=1||this.finishing)return;let e=t??(i<.2?.1:i<.5?.04:i<.8?.02:i<.99?.005:0);this.set(Math.min(.994,i+e))}done(t=!1){!this.active&&!t||(this.finishing=!0,this.set(1),h(this,o.COMPLETE,{status:"done"}),clearTimeout(this.doneTimer),this.doneTimer=setTimeout(()=>{this.finishing=!1,super.stop()},this.motion==="reduce"?0:350))}stop(){this.done()}started(){if(clearInterval(this.trickleTimer),s(this.getAttribute("trickle"))===!1)return;let t=l(this.getAttribute("trickle-speed"),300,1e4);this.trickleTimer=setInterval(()=>this.inc(),Math.max(50,t))}stopped(){clearInterval(this.trickleTimer),clearTimeout(this.doneTimer),this.progress=0}attributeChangedCallback(t,i,e){if(t==="value"&&i!==e&&e!==null&&this.isConnected){let c=r(e);c!==null&&this.set(c);return}if(t==="active"&&i!==e&&this.isConnected){this.activeState=null,this.active?this.start():this.done();return}super.attributeChangedCallback(t,i,e)}connectedCallback(){super.connectedCallback();let t=r(this.getAttribute("value"));(this.active||t!==null)&&this.set(Math.max(this.progress,t??this.minimum))}draw(t){if(t.dataset.position=a(this.getAttribute("position"),v,"top"),t.dataset.placement=a(this.getAttribute("placement"),f,"fixed"),t.style.setProperty("--_thickness",p(this.getAttribute("thickness"))??"3px"),t.classList.toggle("glow",s(this.getAttribute("glow"))??!0),!this.shown){t.replaceChildren(),t.removeAttribute("role");return}t.setAttribute("role","progressbar"),t.setAttribute("aria-label",this.labelText("loadingPageLabel")),t.setAttribute("aria-valuemin","0"),t.setAttribute("aria-valuemax","100"),t.setAttribute("aria-valuenow",String(Math.round(this.progress*100))),t.classList.toggle("finishing",this.finishing);let i=n("div",{class:"page-bar",part:"bar"});i.style.setProperty("--_ratio",String(this.progress)),t.replaceChildren(...d([i,s(this.getAttribute("spinner"))?n("span",{class:"page-spinner",part:"spinner",attrs:{"aria-hidden":"true"}}):null]))}};export{m as a};
