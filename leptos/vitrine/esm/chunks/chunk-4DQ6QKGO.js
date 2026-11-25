/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{a as c}from"./chunk-QVJUKLTD.js";import{b as f,c as h}from"./chunk-CDLFL5U7.js";import{c as s,d as m,i as u,j as b,o as e}from"./chunk-JAZI474S.js";var g=`/*
 * <vt-progress>: a track and a bar scaled to --_ratio. Indeterminate: a bar sliding across.
 * Segments are cut with a repeating mask, so the bar keeps one element.
 */
:host {
  display: block;
}

.head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--_space-3);
  margin-bottom: var(--_space-1);
}

.head .indicator-text {
  min-width: 0;
  overflow: hidden;
  opacity: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.value {
  flex: none;
  opacity: var(--_dim);
  font-size: var(--_font-size-small);
  font-variant-numeric: tabular-nums;
}

.track {
  position: relative;
  height: var(--_thickness, 4px);
  overflow: hidden;
  border-radius: var(--_radius-full, 999px);
  background: var(--_ind-track);
}

.track.square,
.track.square .bar,
.track.square .buffer {
  border-radius: 0;
}

.bar,
.buffer {
  position: absolute;
  inset-block: 0;
  inset-inline-start: 0;
  width: 100%;
  border-radius: inherit;
  transform-origin: left center;
  transition: transform 0.25s ease;
}

:host(:dir(rtl)) .bar,
:host(:dir(rtl)) .buffer {
  transform-origin: right center;
}

.bar {
  background-color: var(--_ind-color);
  transform: scaleX(var(--_ratio));
}

.buffer {
  background: color-mix(in srgb, var(--_ind-color) 35%, transparent);
  transform: scaleX(var(--_buffer));
}

.track.segmented {
  mask: repeating-linear-gradient(
    to right,
    #000 0 calc(100% / var(--_segments) - 3px),
    transparent calc(100% / var(--_segments) - 3px) calc(100% / var(--_segments))
  );
}

/* Stripes are drawn on the bar; scaling would stretch them, so the bar is clipped instead. */
.bar.striped {
  width: calc(var(--_ratio) * 100%);
  transform: none;
  background-image: linear-gradient(
    45deg,
    rgb(255 255 255 / 22%) 25%,
    transparent 25% 50%,
    rgb(255 255 255 / 22%) 50% 75%,
    transparent 75%
  );
  background-size: calc(var(--_thickness) * 2.5) calc(var(--_thickness) * 2.5);
  transition: width 0.25s ease;
}

.bar.animated {
  animation: vt-stripes calc(var(--_ind-duration) * 0.8) linear infinite;
}

@keyframes vt-stripes {
  to {
    background-position: calc(var(--_thickness) * 2.5) 0;
  }
}

.track.indeterminate .bar {
  width: 40%;
  transform: none;
  animation: vt-slide calc(var(--_ind-duration) * 1.6) cubic-bezier(0.65, 0, 0.35, 1) infinite;
}

@keyframes vt-slide {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(250%);
  }
}

.indicator[data-motion='reduce'] .track.indeterminate .bar {
  width: 100%;
  animation-name: vt-fade;
}

.indicator[data-motion='reduce'] .bar,
.indicator[data-motion='reduce'] .buffer {
  transition: none;
}

@media (forced-colors: active) {
  .track {
    border: 1px solid CanvasText;
  }

  .bar {
    background-color: Highlight;
  }
}
`;var v=Object.freeze({xs:"2px",sm:"4px",md:"8px",lg:"12px",xl:"16px"}),k=class extends c{static type="progress";static componentAttributes=[...c.componentAttributes,"buffer","segments","striped","animated","thickness","square"];static styles=[g];static display="block";draw(r){if(!this.shown){r.replaceChildren();return}this.applyStatusTone();let x=this.getAttribute("thickness")?.trim().toLowerCase()??"";r.style.setProperty("--_thickness",v[x]??u(this.getAttribute("thickness"))??v.sm);let a=this.ratio,l=b(this.getAttribute("text")),i=this.valueLabel(),d=h(this.getAttribute("buffer")),n=d===null?null:Math.min(1,Math.max(0,(d-this.min)/(this.max-this.min))),o=m(this.getAttribute("segments"),{min:2,max:50,fallback:0}),p=s(this.getAttribute("striped"))??!1,_=p&&(s(this.getAttribute("animated"))??!1),t=e("div",{class:`track${a===null?" indeterminate":""}${o?" segmented":""}${s(this.getAttribute("square"))?" square":""}`,part:"track"});this.setProgressAria(t),n!==null&&a!==null&&t.append(e("div",{class:"buffer",part:"buffer"}));let w=e("div",{class:`bar${p?" striped":""}${_?" animated":""}`,part:"bar"});t.append(w),t.style.setProperty("--_ratio",String(a??0)),n!==null&&t.style.setProperty("--_buffer",String(Math.max(n,a??0))),o&&t.style.setProperty("--_segments",String(o)),r.classList.toggle("complete",a!==null&&a>=1),r.replaceChildren(...f([l||i?e("div",{class:"head",part:"head",attrs:{"aria-hidden":"true"}},e("span",{class:"indicator-text",part:"text",text:l}),i?e("span",{class:"value",part:"value",text:i}):null):null,t]))}};export{k as a};
