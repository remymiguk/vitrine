/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{r as B}from"./chunk-37OSRZJK.js";import{O as F,_ as M,ba as V,c as G,o,q as E}from"./chunk-JAZI474S.js";import{h as O,k as $,l as N,m as j}from"./chunk-SCKP2KTO.js";var I=`/*
 * Color contrast: the color fields, a card per pair with its preview, ratio and criteria, the
 * nearest passing colors, and the grid of a palette. Results are written in words; colors
 * only repeat them. Preview colors are set through CSSOM.
 */
.contrast-body {
  display: grid;
  gap: var(--_space-3);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.contrast-muted {
  margin: 0;
  color: var(--_fg-muted);
}

.contrast-fields {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space-2) var(--_space-4);
}

.contrast-field {
  display: flex;
  flex: 1 1 14em;
  align-items: center;
  gap: var(--_space-2);
}

.contrast-field label {
  font-weight: 600;
}

.contrast-input {
  flex: 1;
  min-width: 0;
  padding: 4px var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: inherit;
  font-family: var(--_font-mono);
}

.contrast-picker {
  flex: none;
  width: 32px;
  height: 28px;
  padding: 0;
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: none;
  cursor: pointer;
}

.contrast-input:focus-visible,
.contrast-picker:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 1px;
}

.contrast-pairs {
  display: grid;
  gap: var(--_space-3);
}

.contrast-pair {
  display: grid;
  gap: var(--_space-3);
  min-width: 0;
  padding: var(--_space-3);
  border: 1px solid var(--_border);
  border-inline-start: 3px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
}

.contrast-pair.aaa,
.contrast-pair.aa {
  border-inline-start-color: var(--_success);
}

.contrast-pair.large {
  border-inline-start-color: var(--_warning);
}

.contrast-pair.fail {
  border-inline-start-color: var(--_danger);
}

.contrast-title {
  margin: 0;
  font-size: 1em;
}

.contrast-top {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--_space-3);
  align-items: stretch;
}

@media (max-width: 560px) {
  .contrast-top {
    grid-template-columns: minmax(0, 1fr);
  }
}

.contrast-preview {
  display: grid;
  gap: var(--_space-2);
  align-content: center;
  padding: var(--_space-3) var(--_space-4);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
}

.contrast-sample {
  display: block;
  margin: 0;
  font-size: 16px;
}

.contrast-sample::before,
.contrast-aa::before {
  content: attr(data-sample);
}

.contrast-sample.large {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
}

.contrast-ui {
  width: 48px;
  height: 18px;
  border: 3px solid currentColor;
  border-radius: 999px;
}

.contrast-score {
  display: grid;
  gap: 2px;
  align-content: center;
  justify-items: start;
  min-width: 11em;
}

.contrast-label {
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
  font-weight: 600;
  text-transform: uppercase;
}

.contrast-value {
  font-size: 2em;
  font-variant-numeric: tabular-nums;
  line-height: 1.1;
}

.contrast-grade {
  padding: 0 var(--_space-2);
  border: 1px solid currentColor;
  border-radius: var(--_radius-full);
  font-size: var(--_font-size-small);
  font-weight: 700;
}

.contrast-grade.aaa,
.contrast-grade.aa {
  color: var(--_success);
}

.contrast-grade.large {
  color: var(--_warning);
}

.contrast-grade.fail {
  color: var(--_danger);
}

.contrast-colors code,
.contrast-grid code {
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
}

.contrast-levels {
  width: 100%;
  border-collapse: collapse;
}

.contrast-levels th,
.contrast-levels td {
  padding: 4px var(--_space-3) 4px 0;
  border-bottom: 1px solid var(--_border);
  text-align: start;
}

.contrast-levels thead th {
  color: var(--_fg-muted);
  font-weight: 500;
}

.contrast-levels tbody th {
  font-weight: 500;
}

.contrast-levels tbody tr:last-child > * {
  border-bottom: 0;
}

.contrast-result {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  font-weight: 600;
}

.contrast-levels td svg {
  width: 14px;
  height: 14px;
}

.contrast-levels td.pass svg {
  color: var(--_success);
}

.contrast-levels td.fail svg {
  color: var(--_danger);
}

.contrast-suggest {
  display: grid;
  gap: var(--_space-1);
  margin: 0;
  padding: 0;
  list-style: none;
}

.contrast-suggest li {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2);
}

.contrast-swatch {
  display: inline-block;
  flex: none;
  width: 16px;
  height: 16px;
  border: 1px solid var(--_border-strong);
  border-radius: 4px;
  vertical-align: middle;
}

.contrast-scroll {
  overflow-x: auto;
}

.contrast-grid {
  border-collapse: collapse;
}

.contrast-grid caption {
  padding-bottom: var(--_space-2);
  color: var(--_fg-muted);
  text-align: start;
}

.contrast-grid th,
.contrast-grid td {
  padding: var(--_space-1);
  border: 1px solid var(--_border);
  text-align: center;
  vertical-align: middle;
}

.contrast-grid thead th {
  white-space: nowrap;
}

.contrast-grid thead .contrast-swatch {
  margin-inline-end: 4px;
}

.contrast-grid tbody th {
  text-align: start;
  white-space: nowrap;
}

.contrast-grid td.same {
  background: var(--_surface-sunken);
}

.contrast-grid td.cell {
  min-width: 5.5em;
}

.contrast-aa {
  display: block;
  padding: 2px 0;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 700;
}

.contrast-cell-ratio {
  display: block;
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}

.contrast-cell-grade {
  display: block;
  font-size: var(--_font-size-small);
}

.contrast-grid td.fail .contrast-cell-grade {
  color: var(--_danger);
}

.contrast-grid td.large .contrast-cell-grade {
  color: var(--_warning);
}

.contrast-grid td.aa .contrast-cell-grade,
.contrast-grid td.aaa .contrast-cell-grade {
  color: var(--_success);
}

.contrast-edit > .editor-body {
  max-height: min(35vh, 240px);
  border-bottom: 1px solid var(--_border);
}
`;var q=Object.freeze({contrastText:"Text",contrastBackground:"Background",contrastPick:"Pick the {name} color",contrastSample:"The quick brown fox jumps over the lazy dog.",contrastSampleLarge:"Large text, 24 px or 18.66 px bold",contrastRatio:"Contrast ratio",contrastRatioValue:"{ratio}:1",contrastCriterion:"Criterion",contrastMinimum:"Minimum",contrastResult:"Result",contrastPass:"Pass",contrastFail:"Fail",contrastLevel_aaNormal:"AA, normal text (1.4.3)",contrastLevel_aaLarge:"AA, large text (1.4.3)",contrastLevel_aaaNormal:"AAA, normal text (1.4.6)",contrastLevel_aaaLarge:"AAA, large text (1.4.6)",contrastLevel_nonText:"Interface and graphics (1.4.11)",contrastSuggest:"Nearest text color for {level}: {color} ({ratio}:1)",contrastSuggestNone:"No text color of this hue reaches {level} on this background.",contrastBlended:"Transparent colors are laid over the background (and the background over white).",contrastInvalid:"\u201C{color}\u201D is not a CSS color.",contrastInvalidLines:"Lines without a color: {list}",contrastEmpty:"No colors. Write a text color and a background, such as \u201C#333 on #fff\u201D.",contrastPalette:"Palette: text colors in rows, backgrounds in columns",contrastGridCell:"{fg} on {bg}: {ratio}:1, {grade}",contrastGrade_aaa:"AAA",contrastGrade_aa:"AA",contrastGrade_large:"AA large only",contrastGrade_fail:"fails",contrastPairs:"{count} pairs",contrastCopyColor:"Copy {color}",contrastCopyReport:"Copy the report"}),H={contrastText:"Texte",contrastBackground:"Fond",contrastPick:"Choisir la couleur {name}",contrastSample:"Portez ce vieux whisky au juge blond qui fume.",contrastSampleLarge:"Grand texte, 24 px ou 18,66 px gras",contrastRatio:"Rapport de contraste",contrastRatioValue:"{ratio}:1",contrastCriterion:"Crit\xE8re",contrastMinimum:"Minimum",contrastResult:"R\xE9sultat",contrastPass:"R\xE9ussi",contrastFail:"\xC9chec",contrastLevel_aaNormal:"AA, texte normal (1.4.3)",contrastLevel_aaLarge:"AA, grand texte (1.4.3)",contrastLevel_aaaNormal:"AAA, texte normal (1.4.6)",contrastLevel_aaaLarge:"AAA, grand texte (1.4.6)",contrastLevel_nonText:"Interface et graphiques (1.4.11)",contrastSuggest:"Couleur de texte la plus proche pour {level} : {color} ({ratio}:1)",contrastSuggestNone:"Aucune couleur de cette teinte n\u2019atteint {level} sur ce fond.",contrastBlended:"Les couleurs transparentes sont pos\xE9es sur le fond (et le fond sur du blanc).",contrastInvalid:"\xAB {color} \xBB n\u2019est pas une couleur CSS.",contrastInvalidLines:"Lignes sans couleur : {list}",contrastEmpty:"Aucune couleur. \xC9crivez une couleur de texte et un fond, par exemple \xAB #333 on #fff \xBB.",contrastPalette:"Palette : couleurs de texte en lignes, fonds en colonnes",contrastGridCell:"{fg} sur {bg} : {ratio}:1, {grade}",contrastGrade_aaa:"AAA",contrastGrade_aa:"AA",contrastGrade_large:"AA grand texte seulement",contrastGrade_fail:"\xE9chec",contrastPairs:"{count} paires",contrastCopyColor:"Copier {color}",contrastCopyReport:"Copier le rapport"};var w=Object.freeze({aaNormal:4.5,aaLarge:3,aaaNormal:7,aaaLarge:4.5,nonText:3}),Y={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"},A=(s,t,e)=>Math.min(e,Math.max(t,s));function z(s,t){return s==="none"?0:s.endsWith("%")?parseFloat(s)/100*t:parseFloat(s)}var R=s=>s===void 0?1:A(s.endsWith("%")?parseFloat(s)/100:parseFloat(s),0,1);function Z(s){let t=parseFloat(s);return s.endsWith("turn")?t*360:s.endsWith("rad")?t*180/Math.PI:s.endsWith("grad")?t*.9:t}function P(s,t,e){let a=n=>(n+s/30)%12,r=t*Math.min(e,1-e),l=n=>e-r*Math.max(-1,Math.min(a(n)-3,Math.min(9-a(n),1)));return[l(0)*255,l(8)*255,l(4)*255]}function tt(s,t,e){let[a,r,l]=[s/255,t/255,e/255],n=Math.max(a,r,l),i=Math.min(a,r,l),c=(n+i)/2;if(n===i)return[0,0,c];let d=n-i,f=c>.5?d/(2-n-i):d/(n+i);return[(n===a?(r-l)/d+(r<l?6:0):n===r?(l-a)/d+2:(a-r)/d+4)*60,f,c]}function m(s){let t=String(s).trim().toLowerCase();if(!t||t.length>100)return null;if(t==="transparent")return{r:0,g:0,b:0,a:0};let a=Y[t]??/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(t)?.[1]??null;if(a){let u=a.length<=4?[...a].map(h=>h+h).join(""):a,g=h=>parseInt(u.slice(h,h+2),16);return{r:g(0),g:g(2),b:g(4),a:u.length===8?g(6)/255:1}}let r=/^(rgba?|hsla?|hwb)\(\s*([^)]*)\)$/.exec(t);if(!r)return null;let l=r[2].split(/[\s,/]+/).filter(Boolean);if(l.length<3||l.length>4||l.some(u=>!/^(-?\d*\.?\d+(%|deg|turn|rad|grad)?|none)$/.test(u)))return null;if(r[1].startsWith("rgb")){let[u,g,h]=l.slice(0,3).map(v=>A(z(v,255),0,255));return{r:u,g,b:h,a:R(l[3])}}let n=(Z(l[0])%360+360)%360,i=A(z(l[1],100),0,100)/100,c=A(z(l[2],100),0,100)/100;if(r[1]==="hwb"){let u=i+c,[g,h]=u>1?[i/u,c/u]:[i,c],[v,_,L]=P(n,1,.5).map(k=>k/255*(1-g-h)*255+g*255);return{r:v,g:_,b:L,a:R(l[3])}}let[d,f,p]=P(n,i,c);return{r:d,g:f,b:p,a:R(l[3])}}function x(s,t){let e=s.a;return{r:s.r*e+t.r*(1-e),g:s.g*e+t.g*(1-e),b:s.b*e+t.b*(1-e),a:1}}function W(s){let t=e=>{let a=e/255;return a<=.04045?a/12.92:((a+.055)/1.055)**2.4};return .2126*t(s.r)+.7152*t(s.g)+.0722*t(s.b)}function b(s,t){let e=t.a<1?x(t,{r:255,g:255,b:255,a:1}):t,a=s.a<1?x(s,e):s,[r,l]=[W(a),W(e)].sort((n,i)=>i-n);return(r+.05)/(l+.05)}function S(s){return Object.fromEntries(Object.entries(w).map(([t,e])=>[t,s>=e]))}function y(s){let t=e=>Math.round(A(e,0,255)).toString(16).padStart(2,"0");return`#${t(s.r)}${t(s.g)}${t(s.b)}${s.a<1?t(s.a*255):""}`}function D(s,t,e){let a=t.a<1?x(t,{r:255,g:255,b:255,a:1}):t,r=s.a<1?x(s,a):s;if(b(r,a)>=e)return null;let[l,n,i]=tt(r.r,r.g,r.b),c=null,d=1/0;for(let f of[-1,1]){let p=i,u=f<0?0:1,g=k=>{let[C,K,Q]=P(l,n,k);return{r:Math.round(C),g:Math.round(K),b:Math.round(Q),a:1}};if(b(g(u),a)<e)continue;for(let k=0;k<24;k+=1){let C=(p+u)/2;b(g(C),a)>=e?u=C:p=C}let h=g(u),v=u,_=h;for(;b(_,a)<e&&v>=0&&v<=1;)v+=f*.002,_=g(A(v,0,1));let L=Math.abs(v-i);b(_,a)>=e&&L<d&&(c=_,d=L)}return c}function X(s){let t=[],e=[],a=[],r=/#[0-9a-f]{3,8}\b|(?:rgba?|hsla?|hwb)\([^)]*\)|\b[a-z]{3,20}\b/gi;for(let l of s.split(/\r?\n/).slice(0,80)){let n=l.trim();if(!n||n.startsWith("//"))continue;let i="",c=n,d=/^([^:#()]{1,60}):\s*(.+)$/.exec(n);d&&(i=d[1].trim(),c=d[2]);let f=(c.match(r)??[]).filter(p=>p.toLowerCase()!=="on"&&m(p));f.length>=2?t.push({label:i,fg:f[0],bg:f[1]}):f.length===1?e.push({label:i,color:f[0]}):a.push(n.slice(0,80))}return{pairs:t.slice(0,40),palette:e.slice(0,40),invalid:a}}j({en:q,fr:H});var J=class extends V{static type="contrast";static componentAttributes=Object.freeze(["fg","bg","field","suggest"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,fullscreen:!0}};static styles=[I];static allowEmpty=!0;static upgradeProperties=["content"];constructor(){super(),this.pairState=null,this.pairHost=null,this.editor=null,this.previewTimer=void 0}input(){if(this.pairState)return{pairs:[{label:"",...this.pairState}],palette:[],invalid:[]};let t=this.getAttribute("fg"),e=this.getAttribute("bg");return t!==null||e!==null?{pairs:[{label:"",fg:t??"#000000",bg:e??"#ffffff"}],palette:[],invalid:[]}:X(this.text??"")}get results(){return this.input().pairs.flatMap(t=>{let e=m(t.fg),a=m(t.bg);return e&&a?[{...t,ratio:T(b(e,a))}]:[]})}flag(t,e){return G(this.getAttribute(t))??e}number(t){return new Intl.NumberFormat(this.locale,{minimumFractionDigits:2,maximumFractionDigits:2}).format(T(t))}renderContent(t){let e=this.t,{pairs:a,palette:r,invalid:l}=this.input(),n=o("div",{class:"body contrast-body",part:"body"}),i=a.length===1&&!r.length;!a.length&&r.length<2&&n.append(M(e("contrastEmpty"))),i&&this.flag("field",!0)&&n.append(this.fieldsView(a[0])),this.pairHost=o("div",{class:"contrast-pairs",attrs:{"aria-live":i?"polite":null}});for(let p of a)this.pairHost.append(this.pairView(p));n.append(this.pairHost),r.length>=2&&n.append(this.gridView(r)),l.length&&n.append(o("p",{class:"contrast-muted",text:e("contrastInvalidLines",{list:l.slice(0,5).join(" \xB7 ")})}));let c=o("div",{class:"panel"}),d=[];if(this.editing){let p=this.createEditor();c.classList.add("contrast-edit"),c.append(o("div",{class:"body editor-body",part:"body editor"},p.element),n),d=this.historyButtons(p)}else c.append(n);let f=[...d,this.editToggleButton(),this.fullscreenButton(),this.feature("copy")&&this.results.length?this.copyButton(()=>this.report(),e("contrastCopyReport")):null];t.append(...this.chrome({badge:a.length>1?`WCAG \xB7 ${e("contrastPairs",{count:a.length})}`:"WCAG",actions:f}),c),this.editor?.align()}report(){return this.results.map(t=>{let e=S(t.ratio),a=Object.keys(w).filter(r=>e[r]).map(r=>this.t(`contrastLevel_${r}`));return`${t.label?`${t.label}: `:""}${t.fg} on ${t.bg} \u2014 ${t.ratio.toFixed(2)}:1 \u2014 ${a.join(", ")||this.t("contrastFail")}`}).join(`
`)}fieldsView(t){let e=this.t,a=(r,l)=>{let n=E(r),i=t[r],c=m(i),d=o("input",{class:"contrast-input",attrs:{id:n,type:"text",value:i,spellcheck:"false",autocomplete:"off","data-focus-key":r},on:{input:()=>this.edit(r,d.value)}}),f=o("input",{class:"contrast-picker",attrs:{type:"color",value:c?y({...c,a:1}):"#000000","aria-label":e("contrastPick",{name:e(l).toLowerCase()}),"data-focus-key":`${r}-picker`},on:{input:()=>{d.value=f.value,this.edit(r,f.value)}}});return o("div",{class:"contrast-field"},o("label",{attrs:{for:n},text:e(l)}),f,d)};return o("div",{class:"contrast-fields"},a("fg","contrastText"),a("bg","contrastBackground"))}edit(t,e){let a=this.input().pairs[0]??{label:"",fg:"#000000",bg:"#ffffff"};this.pairState={fg:a.fg,bg:a.bg,[t]:e.slice(0,100)};let r={label:"",...this.pairState};this.pairHost?.replaceChildren(this.pairView(r));let l=m(r.fg),n=m(r.bg);N(this,$.CHANGE,{fg:r.fg,bg:r.bg,ratio:l&&n?T(b(l,n)):null})}pairView(t){let e=this.t,a=m(t.fg),r=m(t.bg);if(!a||!r)return M(e("contrastInvalid",{color:a?t.bg:t.fg}));let l=b(a,r),n=S(l),i=r.a<1?x(r,{r:255,g:255,b:255,a:1}):r,c=o("div",{class:"contrast-preview",part:"preview",attrs:{"aria-hidden":"true"}},o("span",{class:"contrast-sample",attrs:{"data-sample":e("contrastSample")}}),o("span",{class:"contrast-sample large",attrs:{"data-sample":e("contrastSampleLarge")}}),o("span",{class:"contrast-ui"}));c.style.background=y(i),c.style.color=y(a.a<1?x(a,i):a);let d=Object.keys(w).every(p=>n[p]),f=n.aaNormal?n.aaaNormal?"aaa":"aa":n.aaLarge?"large":"fail";return o("section",{class:`contrast-pair ${f}`,part:"pair",attrs:{"aria-label":`${t.label?`${t.label}: `:""}${t.fg} / ${t.bg}`}},t.label?o("h3",{class:"contrast-title",text:t.label}):null,o("div",{class:"contrast-top"},c,o("div",{class:"contrast-score",part:"ratio"},o("span",{class:"contrast-label",text:e("contrastRatio")}),o("strong",{class:"contrast-value",text:e("contrastRatioValue",{ratio:this.number(l)})}),o("span",{class:`contrast-grade ${f}`,text:e(`contrastGrade_${f}`)}),o("span",{class:"contrast-colors"},o("code",{text:t.fg})," / ",o("code",{text:t.bg})))),o("table",{class:"contrast-levels",part:"levels"},o("thead",{},o("tr",{},...[e("contrastCriterion"),e("contrastMinimum"),e("contrastResult")].map(p=>o("th",{attrs:{scope:"col"},text:p})))),o("tbody",{},...Object.entries(w).map(([p,u])=>{let g=n[p];return o("tr",{attrs:{"data-level":p}},o("th",{attrs:{scope:"row"},text:e(`contrastLevel_${p}`)}),o("td",{text:`${u}:1`}),o("td",{class:g?"pass":"fail"},o("span",{class:"contrast-result"},F(g?"check":"close"),o("span",{text:e(g?"contrastPass":"contrastFail")}))))}))),a.a<1||r.a<1?o("p",{class:"contrast-muted",text:e("contrastBlended")}):null,this.flag("suggest",!0)&&!d?this.suggestView(a,r,n):null)}suggestView(t,e,a){let r=this.t,l=[];a.aaNormal||l.push(["aaNormal",w.aaNormal]),a.aaaNormal||l.push(["aaaNormal",w.aaaNormal]);let n=o("ul",{class:"contrast-suggest",part:"suggestion"});for(let[i,c]of l){let d=r(`contrastLevel_${i}`),f=D(t,e,c);if(!f){n.append(o("li",{text:r("contrastSuggestNone",{level:d})}));continue}let p=y(f),u=o("span",{class:"contrast-swatch",attrs:{"aria-hidden":"true"}});u.style.background=p,n.append(o("li",{},u,o("span",{text:r("contrastSuggest",{level:d,color:p,ratio:this.number(b(f,e))})}),this.feature("copy")?this.copyTextButton(()=>p,r("contrastCopyColor",{color:p}),`copy-${i}`):null))}return n}gridView(t){let e=this.t,a=t.map(i=>({...i,rgba:m(i.color)})).filter(i=>i.rgba),r=i=>i.label||i.color,l=o("tr",{},o("td",{}),...a.map(i=>{let c=o("th",{attrs:{scope:"col"}},o("span",{class:"contrast-swatch",attrs:{"aria-hidden":"true"}}),o("code",{text:r(i)}));return c.firstChild.style.background=y(i.rgba),c})),n=a.map(i=>o("tr",{},o("th",{attrs:{scope:"row"}},o("code",{text:r(i)})),...a.map(c=>{if(i===c)return o("td",{class:"same"});let d=b(i.rgba,c.rgba),f=S(d),p=f.aaNormal?f.aaaNormal?"aaa":"aa":f.aaLarge?"large":"fail",u=o("td",{class:`cell ${p}`,attrs:{title:e("contrastGridCell",{fg:r(i),bg:r(c),ratio:this.number(d),grade:e(`contrastGrade_${p}`)})}},o("span",{class:"contrast-aa",attrs:{"aria-hidden":"true","data-sample":"Aa"}}),o("span",{class:"contrast-cell-ratio",text:this.number(d)}),o("span",{class:"contrast-cell-grade",text:e(`contrastGrade_${p}`)})),g=u.firstChild,h=c.rgba;return g.style.background=y(h.a<1?x(h,{r:255,g:255,b:255,a:1}):h),g.style.color=y(i.rgba),u})));return o("div",{class:"contrast-scroll"},o("table",{class:"contrast-grid",part:"grid"},o("caption",{text:e("contrastPalette")}),o("thead",{},l),o("tbody",{},...n)))}createEditor(){return this.editor?.destroy(),this.editor=new B({text:this.text??"",language:"plaintext",lineNumbers:!0,wrap:!0,highlightLimit:O().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:t=>this.edited(t),onChange:t=>N(this,$.CHANGE,{value:t}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),250)}};function T(s){return Math.floor(s*100)/100}export{J as a};
