/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{d as k}from"./chunk-CDLFL5U7.js";import{c as b,d as p,e as g,i as _,o as t}from"./chunk-JAZI474S.js";var f=`/*
 * <vt-skeleton>: shapes ("bones") in a muted color, with a shimmer sweeping across them or
 * a pulse. The real content stays in the light DOM and is shown when the skeleton stops.
 */
:host {
  display: block;
}

.indicator {
  --_sk-color: var(--vt-skeleton-color, color-mix(in srgb, currentColor 10%, transparent));
  --_sk-highlight: var(
    --vt-skeleton-highlight,
    color-mix(in srgb, var(--_surface, #fff) 70%, transparent)
  );
  display: block;
  width: var(--_sk-width, auto);
  color: inherit;
}

.skeleton {
  display: grid;
  gap: var(--_space-2);
}

.bone {
  position: relative;
  display: block;
  width: var(--_w, 100%);
  height: 0.8em;
  overflow: hidden;
  border-radius: var(--_sk-radius, 4px);
  background: var(--_sk-color);
}

.bone.small {
  height: 0.6em;
}

.bone.heading {
  height: 1.35em;
  margin-bottom: var(--_space-1);
}

.bone.avatar {
  flex: none;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
}

.skeleton.avatar .bone.avatar {
  width: var(--_sk-width, 3em);
  height: var(--_sk-width, 3em);
}

.bone.button {
  width: 7em;
  height: 2.3em;
  border-radius: var(--_sk-radius, var(--_radius-sm, 6px));
}

.bone.media {
  height: var(--_sk-height, 10em);
  border-radius: var(--_sk-radius, var(--_radius-sm, 6px));
}

.bone.block {
  height: var(--_sk-height, 6em);
  border-radius: var(--_sk-radius, var(--_radius-sm, 6px));
}

.bone.input {
  height: 2.3em;
  border-radius: var(--_sk-radius, var(--_radius-sm, 6px));
}

.bone.cell {
  height: 0.75em;
}

.stack {
  display: grid;
  flex: 1;
  gap: var(--_space-2);
  align-content: center;
}

.row-head,
.list-row {
  display: flex;
  align-items: center;
  gap: var(--_space-3);
}

.list-row {
  padding-block: var(--_space-2);
}

.skeleton.card {
  gap: 0;
  overflow: hidden;
  border: 1px solid var(--_border);
  border-radius: var(--_radius, 10px);
}

.skeleton.card > .bone.media {
  border-radius: 0;
}

.card-body {
  display: grid;
  gap: var(--_space-2);
  padding: var(--_space-4);
}

.skeleton.table {
  gap: 0;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm, 6px);
}

.table-row {
  display: grid;
  grid-template-columns: repeat(var(--_columns), minmax(0, 1fr));
  gap: var(--_space-4);
  padding: var(--_space-3) var(--_space-4);
  border-top: 1px solid var(--_border);
}

.table-row.head {
  border-top: 0;
  background: color-mix(in srgb, currentColor 3%, transparent);
}

.field {
  display: grid;
  gap: var(--_space-2);
  margin-bottom: var(--_space-2);
}

.skeleton.article {
  gap: var(--_space-3);
}

/* Shimmer: a light band sweeping each bone. */
.indicator[data-animation='shimmer'] .bone::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, var(--_sk-highlight), transparent);
  transform: translateX(-100%);
  animation: vt-shimmer calc(var(--_ind-duration) * 1.5) ease-in-out infinite;
}

.indicator[data-animation='pulse'] .bone {
  animation: vt-fade calc(var(--_ind-duration) * 1.6) ease-in-out infinite;
}

.indicator[data-motion='reduce'] .bone::after {
  display: none;
}

.indicator[data-motion='reduce'][data-animation='shimmer'] .bone {
  animation: vt-fade calc(var(--_ind-duration) * 3) ease-in-out infinite;
}

.content[hidden] {
  display: none;
}

@media (forced-colors: active) {
  .bone {
    background: GrayText;
  }
}
`;var A=["text","paragraph","heading","avatar","button","media","card","list","table","form","article","block"],S=["shimmer","pulse","none"],w=["100%","94%","97%","88%","92%","85%","96%","90%"],u=["70%","55%","82%","62%","76%","48%"],x=class extends k{static type="skeleton";static componentAttributes=["shape","lines","rows","columns","avatar","media","animation","width","height","radius"];static styles=[f];static display="block";constructor(){super(),this.slotElement=t("slot",{}),this.contentBox=t("div",{class:"content",part:"content"},this.slotElement)}draw(r){let s=this.shown;if(this.contentBox.hidden=s,this.toggleAttribute("aria-busy",s),!s){r.replaceChildren(this.contentBox),r.removeAttribute("role"),r.removeAttribute("aria-label");return}let o=g(this.getAttribute("shape"),A,"paragraph");r.dataset.animation=g(this.getAttribute("animation"),S,"shimmer");let l=r.style;for(let n of["width","height","radius"]){let c=_(this.getAttribute(n));c?l.setProperty(`--_sk-${n}`,c):l.removeProperty(`--_sk-${n}`)}r.setAttribute("role","status"),r.setAttribute("aria-label",this.labelText()),r.replaceChildren(t("div",{class:`skeleton ${o}`,part:"skeleton",attrs:{"aria-hidden":"true"}},...this.bones(o)),this.contentBox)}bones(r){let s=p(this.getAttribute("lines"),{min:1,max:20,fallback:3}),o=p(this.getAttribute("rows"),{min:1,max:50,fallback:3}),l=p(this.getAttribute("columns"),{min:1,max:12,fallback:4}),n=b(this.getAttribute("avatar"))??!1,c=b(this.getAttribute("media"))??!1,e=(a,i=null)=>{let h=t("span",{class:`bone ${a}`,part:"bone"});return i&&h.style.setProperty("--_w",i),h},d=(a,i=0)=>Array.from({length:a},(h,m)=>e("line",a>1&&m===a-1?"62%":w[(m+i)%w.length])),v=()=>t("span",{class:"row-head"},e("avatar"),t("span",{class:"stack"},e("line","45%"),e("line small","28%")));switch(r){case"text":return d(s);case"heading":return[e("heading","55%")];case"avatar":return[e("avatar")];case"button":return[e("button")];case"media":return[e("media")];case"block":return[e("block")];case"card":return[c?e("media"):null,t("div",{class:"card-body"},n?v():e("heading","60%"),...d(s,1))].filter(a=>a!==null);case"list":return Array.from({length:o},(a,i)=>t("div",{class:"list-row"},n?e("avatar"):null,t("span",{class:"stack"},e("line",u[i%u.length]),e("line small","40%"))));case"table":return[t("div",{class:"table-row head"},...Array.from({length:l},()=>e("cell","60%"))),...Array.from({length:o},(a,i)=>t("div",{class:"table-row"},...Array.from({length:l},(h,m)=>e("cell",u[(i+m*2)%u.length]))))].map(a=>(a.style.setProperty("--_columns",String(l)),a));case"form":return[...Array.from({length:o},()=>t("div",{class:"field"},e("line small","30%"),e("input"))),e("button")];case"article":return[e("heading","70%"),n?v():e("line small","35%"),e("media"),...d(s),...d(Math.max(2,s-1),3)];default:return[e("heading","45%"),...d(s)]}}};export{x as a};
