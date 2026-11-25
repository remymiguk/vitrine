/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as o}from"./chunk-QVJUKLTD.js";import{b as h}from"./chunk-CDLFL5U7.js";import{d as p,e as u,j as m,o as a}from"./chunk-JAZI474S.js";var f=`/* <vt-progress-ring>: an SVG circle; the arc starts at the top and runs clockwise. */
.indicator {
  flex-direction: column;
  gap: var(--_space-2);
}

.ring-box {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: calc(var(--_ind-size) * 2);
  height: calc(var(--_ind-size) * 2);
}

.ring {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  overflow: visible;
}

.ring-track,
.ring-arc {
  fill: none;
}

.ring-track {
  stroke: var(--_ind-track);
}

.ring-arc {
  stroke: var(--_ind-color);
  transition: stroke-dashoffset 0.3s ease;
}

@keyframes vt-ring-rotate {
  from {
    transform: rotate(-90deg);
  }

  to {
    transform: rotate(270deg);
  }
}

.ring.indeterminate {
  transform-origin: center;
  animation: vt-ring-rotate var(--_ind-duration) linear infinite;
}

.ring-value {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: max(10px, calc(var(--_ind-size) * 0.42));
  font-weight: 650;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  text-align: center;
}

.indicator[data-motion='reduce'] .ring.indeterminate {
  animation-name: vt-fade;
}

.indicator[data-motion='reduce'] .ring-arc {
  transition: none;
}

@media (forced-colors: active) {
  .ring-arc {
    stroke: Highlight;
  }

  .ring-track {
    stroke: GrayText;
  }
}
`;var b="http://www.w3.org/2000/svg",w=["round","butt"];function c(l,r){let t=document.createElementNS(b,l);for(let[e,i]of Object.entries(r))t.setAttribute(e,i);return t}var v=class extends o{static type="progress-ring";static componentAttributes=[...o.componentAttributes,"thickness","cap"];static styles=[f];static defaultSize="lg";get defaultShowValue(){return"percent"}draw(r){if(!this.shown){r.replaceChildren();return}this.applyStatusTone();let t=this.ratio,e=p(this.getAttribute("thickness"),{min:4,max:30,fallback:10}),i=50-e/2,n=2*Math.PI*i,k=u(this.getAttribute("cap"),w,"round"),s=c("svg",{viewBox:"0 0 100 100",class:`ring${t===null?" indeterminate":""}`,part:"ring"});s.append(c("circle",{cx:"50",cy:"50",r:String(i),class:"ring-track",part:"track","stroke-width":String(e)}),c("circle",{cx:"50",cy:"50",r:String(i),class:"ring-arc",part:"arc","stroke-width":String(e),"stroke-linecap":k,"stroke-dasharray":`${n} ${n}`,"stroke-dashoffset":String(t===null?n*.72:n*(1-t))})),this.setProgressAria(s);let g=this.valueLabel(),d=m(this.getAttribute("text"));r.classList.toggle("complete",t!==null&&t>=1),r.replaceChildren(...h([a("span",{class:"ring-box"},s,g?a("span",{class:"ring-value",part:"value",text:g,attrs:{"aria-hidden":"true"}}):null),d?a("span",{class:"indicator-text",part:"text",text:d,attrs:{"aria-hidden":"true"}}):null]))}};export{v as a};
