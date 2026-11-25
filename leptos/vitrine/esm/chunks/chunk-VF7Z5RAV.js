/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{ba as N,c as Z,o as G}from"./chunk-JAZI474S.js";import{k as S,l as L,m as j}from"./chunk-SCKP2KTO.js";var B=Object.freeze({flowtimeLabel:"Event timeline",flowtimeViews:"View",flowtimeSearch:"Search events\u2026",flowtimeSearchLabel:"Search events",flowtimeActions:"Timeline actions",flowtimeDetails:"Event details",flowtimeEarlier:"Earlier",flowtimeLater:"Later",flowtimeZoomIn:"Zoom in",flowtimeZoomOut:"Zoom out",flowtimeFit:"Fit events",flowtimeTextSize:"Text size",flowtimeNoMatch:"No matching events",flowtimeEmpty:"Your timeline starts here",flowtimeAllEvents:"All events",flowtimeOutside:"Events are outside this time range.",flowtimeClose:"Close event inspector",flowtimeEdit:"Edit event",flowtimeDelete:"Delete event",flowtimeNotes:"Notes",flowtimeNoNotes:"No additional notes for this event.",flowtimeContext:"Context",flowtimeUntil:"Until {date}",flowtimeActivityLabel:"Filter events by activity",flowtimeActivity:"Event activity",flowtimeAllDates:"All dates",flowtimeShowAllDates:"Show all dates",flowtimeActivityPeriods:"Event activity periods",flowtimeAnyDate:"Any date",flowtimeViewFailed:"Unable to open {view}. Please try again.",flowtimeRetry:"Retry"}),H={flowtimeLabel:"Chronologie des \xE9v\xE9nements",flowtimeViews:"Vue",flowtimeSearch:"Rechercher des \xE9v\xE9nements\u2026",flowtimeSearchLabel:"Rechercher des \xE9v\xE9nements",flowtimeActions:"Actions de la chronologie",flowtimeDetails:"D\xE9tails de l'\xE9v\xE9nement",flowtimeEarlier:"Plus t\xF4t",flowtimeLater:"Plus tard",flowtimeZoomIn:"Zoomer",flowtimeZoomOut:"D\xE9zoomer",flowtimeFit:"Ajuster aux \xE9v\xE9nements",flowtimeTextSize:"Taille du texte",flowtimeNoMatch:"Aucun \xE9v\xE9nement ne correspond",flowtimeEmpty:"Votre chronologie commence ici",flowtimeAllEvents:"Tous les \xE9v\xE9nements",flowtimeOutside:"Les \xE9v\xE9nements sont hors de cette p\xE9riode.",flowtimeClose:"Fermer l'inspecteur",flowtimeEdit:"Modifier l'\xE9v\xE9nement",flowtimeDelete:"Supprimer l'\xE9v\xE9nement",flowtimeNotes:"Notes",flowtimeNoNotes:"Pas d'autres notes pour cet \xE9v\xE9nement.",flowtimeContext:"Contexte",flowtimeUntil:"Jusqu'au {date}",flowtimeActivityLabel:"Filtrer les \xE9v\xE9nements par activit\xE9",flowtimeActivity:"Activit\xE9 des \xE9v\xE9nements",flowtimeAllDates:"Toutes les dates",flowtimeShowAllDates:"Afficher toutes les dates",flowtimeActivityPeriods:"P\xE9riodes d'activit\xE9",flowtimeAnyDate:"Toute date",flowtimeViewFailed:"Impossible d'ouvrir {view}. Veuillez r\xE9essayer.",flowtimeRetry:"R\xE9essayer"};function E(a,t){let e=B[a]??a;return t?e.replace(/\{(\w+)\}/g,(i,s)=>t[s]??i):e}var nt=new Set(["timeline","combined","feed"]);function X(a){if(!Array.isArray(a))throw new TypeError("customViews must be an array.");let t=new Set(nt);return a.map(e=>{if(!e||typeof e.id!="string"||!e.id.trim()||t.has(e.id))throw new TypeError("Custom views need unique IDs distinct from built-in views.");if(typeof e.label!="string"||!e.label.trim()||typeof e.mount!="function")throw new TypeError(`Custom view ${e.id} needs a label and mount callback.`);if(e.icon!==void 0&&typeof e.icon!="string")throw new TypeError(`Custom view ${e.id}: icon must be text.`);for(let i of["filters","inspector"])if(e[i]!==void 0&&typeof e[i]!="boolean")throw new TypeError(`Custom view ${e.id}: ${i} must be a boolean.`);return t.add(e.id),{...e}})}function C(a,t,e){let i=document.createElement(a);return i.className=t,e!==void 0&&(i.textContent=e),i}function at(a){if(typeof a=="function")return{destroy:a};if(a==null)return{};if(typeof a!="object"||["update","destroy"].some(t=>a[t]!==void 0&&typeof a[t]!="function"))throw new TypeError("A custom view must return an instance, a cleanup function, or nothing.");return a}var z=class{constructor(t,e,i=E){this.s=i,this.getContext=t,this.onError=e}context(t){return{...this.getContext(),container:t.container,signal:t.abort.signal}}render(t,e){let i=this.session;if(i?.definition.id===t.id&&i.parent===e){this.update();return}this.stop();let s=C("div","ft-custom-view");s.setAttribute("role","region"),s.setAttribute("aria-label",t.label);let o={definition:t,parent:e,container:s,abort:new AbortController,instance:null,updating:!1,pending:null,failed:!1};this.session=o,e.replaceChildren(s);try{let r=t.mount(s,this.context(o));r&&typeof r.then=="function"?(this.session===o&&(s.setAttribute("aria-busy","true"),o.loading=C("p","ft-view-loading",`Loading ${t.label}\u2026`),o.loading.setAttribute("role","status"),e.prepend(o.loading)),Promise.resolve(r).then(c=>this.accept(o,c),c=>this.fail(o,c,"mount"))):this.accept(o,r)}catch(r){this.fail(o,r,"mount")}}accept(t,e){let i;try{i=at(e)}catch(s){this.fail(t,s,"mount");return}if(this.session!==t||t.failed){t.loading?.remove(),this.dispose(t,i);return}t.instance=i,t.loading?.remove(),t.container.setAttribute("aria-busy","false"),t.pending&&this.flush(t)}update(){let t=this.session;!t||t.failed||(t.pending=this.context(t),this.flush(t))}flush(t){if(this.session!==t||t.failed||!t.instance||t.updating)return;let e=t.pending;if(t.pending=null,!e||!t.instance.update)return;t.updating=!0;let i=()=>{t.updating=!1,t.pending&&this.flush(t)};try{let s=t.instance.update(e);s&&typeof s.then=="function"?Promise.resolve(s).then(i,o=>this.fail(t,o,"update")):i()}catch(s){this.fail(t,s,"update")}}dispose(t,e){try{let i=e?.destroy?.();i&&typeof i.then=="function"&&Promise.resolve(i).catch(s=>this.onError({view:t.definition.id,phase:"destroy",error:s}))}catch(i){this.onError({view:t.definition.id,phase:"destroy",error:i})}}fail(t,e,i){if(this.session!==t||t.failed)return;t.failed=!0,t.loading?.remove(),t.pending=null,t.abort.abort(),this.dispose(t,t.instance),t.instance=null,t.container.setAttribute("aria-busy","false");let s=C("p","",this.s("flowtimeViewFailed",{view:t.definition.label})),o=C("button","ft-view-retry",this.s("flowtimeRetry"));o.type="button",o.addEventListener("click",()=>{this.session===t&&(this.stop(),this.render(t.definition,t.parent))});let r=C("div","ft-view-error");r.setAttribute("role","alert"),r.append(s,o),t.container.replaceChildren(r),this.onError({view:t.definition.id,phase:i,error:e})}stop(){let t=this.session;this.session=null,t&&(t.loading?.remove(),t.abort.abort(),t.pending=null,this.dispose(t,t.instance),t.instance=null)}};var _=[{id:"events",label:"Events",color:"#6575d7",icon:"\u2022"},{id:"notes",label:"Notes",color:"#249790",icon:"\u270E"},{id:"milestones",label:"Milestones",color:"#d49635",icon:"\u25C7"},{id:"attachments",label:"Attachments",color:"#bb7395",icon:"\u25A4"}];function R(a){if(a instanceof Date)return a.getTime();if(typeof a=="number")return Number.isFinite(a)?a:NaN;if(typeof a!="string"||!a.trim())return NaN;let t=a.trim().replace(" ","T");/^\d{4}-\d{2}-\d{2}$/.test(t)?t+="T00:00:00Z":/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?$/.test(t)&&(t+="Z");let e=t.match(/^(\d{4})-(\d{2})-(\d{2})/);if(!e)return NaN;let[,i,s,o]=e.map(Number),r=new Date(0);return r.setUTCFullYear(i,s-1,o),r.getUTCFullYear()!==i||r.getUTCMonth()!==s-1||r.getUTCDate()!==o?NaN:Date.parse(t)}function q(a){if(!Array.isArray(a))throw new TypeError("Flowtime events must be an array.");let t=new Set;return a.map((e,i)=>{let s=String(e.id??i);if(t.has(s))throw new TypeError(`Duplicate event id: ${s}`);t.add(s);let o=R(e.start),r=e.end==null?null:R(e.end);if(!Number.isFinite(o))throw new TypeError(`Invalid start date for event ${s}. Use ISO 8601.`);if(r!==null&&(!Number.isFinite(r)||r<o))throw new TypeError(`Invalid end date for event ${s}.`);return{...e,id:s,start:o,end:r,title:String(e.title??"Untitled event"),description:String(e.description??""),group:String(e.group??"events")}}).sort((e,i)=>e.start-i.start||e.id.localeCompare(i.id))}function W({start:a=null,end:t=null}={}){let e=(s,o)=>{if(s===null||s==="")return null;let r=R(s);if(!Number.isFinite(r))throw new TypeError(`${o} must be a valid ISO date or timestamp.`);return r};a=e(a,"Range start");let i=typeof t=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(t);if(t=e(t,"Range end"),i&&(t+=86399999),a!==null&&t!==null&&a>t)throw new RangeError("The end must be on or after the start.");return{start:a,end:t}}function D(a,t="",e=null,i={}){let s=t.trim().toLocaleLowerCase();return a.filter(o=>(!e||e.has(o.group))&&(!s||`${o.title}
${o.description}
${o.group}`.toLocaleLowerCase().includes(s))&&(i.start==null||(o.end??o.start)>=i.start)&&(i.end==null||o.start<=i.end))}function O(a){if(!a.length)return[Date.UTC(2026,0,1),Date.UTC(2026,0,2)];let t=1/0,e=-1/0;for(let s of a)t=Math.min(t,s.start),e=Math.max(e,s.end??s.start);let i=Math.max((e-t)*.09,6e4);return[t-i,e+i]}function I(a,t,e){let i=(t-a)/Math.max(2,Math.floor(e/110)),o=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,72e5,216e5,432e5,864e5,6048e5,2592e6,31536e6].find(c=>c>=i)??Math.ceil(i/31536e6)*31536e6,r=[];for(let c=Math.ceil(a/o)*o;c<t;c+=o)r.push(c);return r}function K(a,t,e,i,s=172,o=!0){let r=[];return a.map(c=>{let p=(c.start-t)/(e-t)*i,f=o?Math.max(8,Math.min(i-s-8,p)):p,d=Math.max(f+s,c.end==null?f:(c.end-t)/(e-t)*i),h=r.findIndex(l=>l+12<f);return h<0&&(h=r.length),r[h]=d,{event:c,x:f,markerX:p,row:h,right:d}})}function Y(a,t=a,e=56){if(!t.length)return null;let i=1/0,s=-1/0;for(let l of t)i=Math.min(i,l.start),s=Math.max(s,l.end??l.start);let o=Math.max(s-i>=864e5?864e5:0,(s-i)/(e-1)),c=[6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,6048e5,2592e6,31536e6].find(l=>l>=o)??Math.ceil(o/31536e6)*31536e6,p=Math.floor(i/c)*c,f=Math.floor((s-p)/c)+1,d=Math.min(12,e);f<d&&(p-=Math.floor((d-f)/2)*c,f=d);let h=Array.from({length:f},(l,u)=>({start:p+u*c,end:p+(u+1)*c,count:0,groups:new Map}));for(let l of a){let u=h[Math.floor((l.start-p)/c)];u&&(u.count++,u.groups.set(l.group,(u.groups.get(l.group)??0)+1))}return{start:p,end:p+f*c,step:c,buckets:h}}function v(a,t,e){let i=document.createElement(a);return i.className=t,e!==void 0&&(i.textContent=e),i}function lt(a){for(let[t,e]of[[864e5,"day"],[36e5,"hour"],[6e4,"minute"]])if(a>=t){let i=a/t;return`${i} ${e}${i===1?"":"s"}`}}var $=class{constructor({onChange:t,formatDate:e,formatTime:i,timeZone:s,colorFor:o,signal:r,s:c=E}){Object.assign(this,{s:c,onChange:t,formatDate:e,formatTime:i,timeZone:s,colorFor:o}),this.range={},this.buttons=[],this.root=v("section","ft-activity"),this.root.setAttribute("aria-label",this.s("flowtimeActivityLabel"));let p=v("div","ft-activity-header"),f=v("div","ft-activity-heading");this.title=v("strong","ft-activity-title",this.s("flowtimeActivity")),this.summary=v("span","ft-activity-summary",this.s("flowtimeAllDates")),f.append(this.title,this.summary),this.reset=v("button","ft-activity-reset",this.s("flowtimeShowAllDates")),this.reset.type="button",this.reset.addEventListener("click",()=>this.onChange({}),{signal:r}),p.append(f,this.reset),this.plot=v("div","ft-activity-bars"),this.plot.setAttribute("role","group"),this.plot.setAttribute("aria-label",this.s("flowtimeActivityPeriods")),this.axis=v("div","ft-activity-axis"),this.axis.setAttribute("aria-hidden","true");let d=v("p","ft-activity-hint","Click a bar to select a period. Drag or Shift-click to select a range.");this.root.append(p,this.plot,this.axis,d),this.plot.addEventListener("pointerdown",h=>this.pointerDown(h),{signal:r}),this.plot.addEventListener("pointermove",h=>this.pointerMove(h),{signal:r}),this.plot.addEventListener("pointerup",h=>this.pointerUp(h),{signal:r});for(let h of["pointercancel","lostpointercapture"])this.plot.addEventListener(h,()=>this.cancel(),{signal:r});this.root.addEventListener("keydown",h=>this.keyDown(h),{signal:r})}render(t,e,i,s){this.cancel(),this.range=s;let o=JSON.stringify([...i].sort());if((this.events!==t||this.query!==e||this.groupKey!==o)&&(this.events=t,this.query=e,this.groupKey=o,this.anchor=null,this.data=Y(D(t,e,i),t),this.plot.replaceChildren(),this.buttons=[],this.data)){let{buckets:r,step:c}=this.data,p=Math.max(1,...r.map(f=>f.count));this.title.textContent=`Events per ${lt(c)} \xB7 ${this.timeZone}`,r.forEach((f,d)=>{let h=`${this.label(f.start)} \u2014 ${this.label(f.end-1)} ${this.timeZone}: ${f.count} ${f.count===1?"event":"events"}`,l=v("button","ft-activity-bar");l.type="button",l.dataset.index=String(d),l.title=h,l.setAttribute("aria-label",h),l.dataset.empty=String(!f.count);for(let[u,g]of f.groups){let m=v("span","ft-activity-part");m.setAttribute("aria-hidden","true"),m.style.height=`${g/p*100}%`,m.style.setProperty("--ft-group",this.colorFor(u)),l.append(m)}l.addEventListener("click",u=>{if(this.suppressClick&&u.detail>0){this.suppressClick=!1;return}this.choose(d,u.shiftKey)}),this.buttons.push(l),this.plot.append(l)}),this.selection=v("div","ft-activity-selection"),this.selection.setAttribute("aria-hidden","true"),this.plot.append(this.selection)}this.root.hidden=!this.data,this.renderAxis(),this.paint(s)}renderAxis(){if(this.axis.replaceChildren(),!this.data)return;let{start:t,end:e,step:i}=this.data,s=this.plot.clientWidth||640,o=i>=864e5,r=this.formatDate(t)!==this.formatDate(e-1),c=o||r?118:72,p=d=>(d-t)/(e-t)*s,f=[t];for(let d of I(t,e,s*1.3)){let h=p(d);h-p(f.at(-1))>=c&&s-h>=c&&f.push(d)}f.push(e-1),f.forEach((d,h)=>{let l=v("span","ft-activity-tick");l.style.left=`${p(d)/s*100}%`,l.append(v("span","",o?this.formatDate(d):this.formatTime(d))),!o&&(r||h===0||h===f.length-1)&&l.append(v("small","",this.formatDate(d))),this.axis.append(l)})}label(t){return this.data.step>=864e5?this.formatDate(t):`${this.formatDate(t)} ${this.formatTime(t)}`}bounds(t,e=t){return{start:this.data.buckets[Math.min(t,e)].start,end:this.data.buckets[Math.max(t,e)].end-1}}choose(t,e=!1){let i=e&&this.anchor!==null?this.anchor:t;this.anchor=i;let s=this.bounds(i,t);this.onChange(!e&&s.start===this.range.start&&s.end===this.range.end?{}:s)}paint(t){if(!this.data)return;let e=t.start!=null||t.end!=null;if(this.reset.disabled=!e,this.summary.textContent=e?`${t.start==null?this.s("flowtimeAnyDate"):this.label(t.start)} \u2014 ${t.end==null?this.s("flowtimeAnyDate"):this.label(t.end)}`:this.s("flowtimeAllDates"),this.root.dataset.filtered=String(e),this.buttons.forEach((i,s)=>{let o=this.data.buckets[s],r=e&&(t.start==null||o.end>t.start)&&(t.end==null||o.start<=t.end);i.dataset.selected=String(r),i.setAttribute("aria-pressed",String(r))}),this.selection.hidden=!e,e){let{start:i,end:s}=this.data,o=Math.max(0,Math.min(1,((t.start??i)-i)/(s-i))),r=Math.max(o,Math.min(1,((t.end==null?s:t.end+1)-i)/(s-i)));this.selection.style.left=`${o*100}%`,this.selection.style.width=`${(r-o)*100}%`}}indexAt(t){let e=this.plot.getBoundingClientRect();return Math.max(0,Math.min(this.buttons.length-1,Math.floor((t-e.left)/e.width*this.buttons.length)))}pointerDown(t){if(this.suppressClick=!1,!this.data||t.button!==0||t.isPrimary===!1||!t.target.closest(".ft-activity-bar"))return;let e=this.indexAt(t.clientX);this.drag={pointerId:t.pointerId,x:t.clientX,y:t.clientY,anchor:t.shiftKey&&this.anchor!==null?this.anchor:e,index:e,moved:!1}}pointerMove(t){let e=this.drag;if(!e||e.pointerId!==t.pointerId)return;let i=Math.abs(t.clientX-e.x);if(!e.moved){if(i<4||i<Math.abs(t.clientY-e.y))return;e.moved=!0,this.plot.setPointerCapture(t.pointerId),this.root.dataset.dragging="true"}e.index=this.indexAt(t.clientX),this.paint(this.bounds(e.anchor,e.index))}pointerUp(t){let e=this.drag;!e||e.pointerId!==t.pointerId||(e.moved&&this.pointerMove(t),this.drag=null,this.root.dataset.dragging="false",this.plot.hasPointerCapture(t.pointerId)&&this.plot.releasePointerCapture(t.pointerId),e.moved&&(this.suppressClick=!0,this.anchor=e.anchor,this.onChange(this.bounds(e.anchor,e.index)),this.buttons[e.index].focus({preventScroll:!0})))}cancel(){let t=this.drag;this.drag=null,this.root.dataset.dragging="false",t&&this.plot.hasPointerCapture(t.pointerId)&&this.plot.releasePointerCapture(t.pointerId),t&&this.paint(this.range)}keyDown(t){if(t.key==="Escape"){t.preventDefault(),t.stopPropagation(),this.drag?this.cancel():this.onChange({});return}let e=t.target.closest(".ft-activity-bar");if(!e||!["ArrowLeft","ArrowRight","Home","End"].includes(t.key))return;t.preventDefault(),t.stopPropagation();let i=Number(e.dataset.index),s=t.key==="Home"?0:t.key==="End"?this.buttons.length-1:Math.max(0,Math.min(this.buttons.length-1,i+(t.key==="ArrowRight"?1:-1)));this.buttons[s].focus({preventScroll:!0}),t.shiftKey&&(this.anchor??=i,this.choose(s,!0))}destroy(){this.cancel()}};var F=1e3,et=220,ct=86,M=110,J=150,Q=et/2+8,dt=864e5*365*1e4,ft=[.5,.6,.7,.8,.9,1,1.1,1.25,1.5];function tt(a){if(!Number.isFinite(a)||a<.5||a>1.5)throw new TypeError("textScale must be a number between 0.5 and 1.5.")}function n(a,t,e){let i=document.createElement(a);return t&&(i.className=t),e!==void 0&&(i.textContent=e),i}function x(a,t,e,i=a,s=!0){let o=n("button",t,a);return o.type="button",o.title=i,s&&o.setAttribute("aria-label",i),o.addEventListener("click",e),o}function V(a,t){if(!Array.isArray(a))throw new TypeError(`${t} must be an array.`);let e=new Set;return a.map(i=>{if(!i||typeof i.id!="string"||!i.id.trim()||e.has(i.id))throw new TypeError(`${t} needs unique, nonempty string IDs.`);if(typeof i.label!="string"||!i.label.trim()||typeof i.onClick!="function")throw new TypeError(`Action ${i.id} needs a label and onClick callback.`);for(let s of["visible","disabled"])if(i[s]!==void 0&&typeof i[s]!="boolean"&&typeof i[s]!="function")throw new TypeError(`Action ${i.id}: ${s} must be a boolean or function.`);for(let s of["icon","title"])if(i[s]!==void 0&&typeof i[s]!="string")throw new TypeError(`Action ${i.id}: ${s} must be text.`);if(i.variant!==void 0&&!["default","primary","danger"].includes(i.variant))throw new TypeError(`Action ${i.id} has an invalid variant.`);return e.add(i.id),{...i}})}function y(a,t,e){return a===void 0?e:typeof a=="function"?!!a(t):a}var P=class{s(t,e){return(this.options?.t??E)(t,e)}constructor(t,e={}){if(this.container=typeof t=="string"?document.querySelector(t):t,!this.container)throw new TypeError("Flowtime needs a valid container.");if(this.options={locale:"en-GB",timeZone:"UTC",animationDuration:220,textScale:1,showTextScaleControl:!0,...e},this.options.t!=null&&typeof this.options.t!="function")throw new TypeError("t must be a function.");if(tt(this.options.textScale),typeof this.options.showTextScaleControl!="boolean")throw new TypeError("showTextScaleControl must be a boolean.");if(!Number.isFinite(this.options.animationDuration)||this.options.animationDuration<0)throw new TypeError("animationDuration must be a nonnegative number.");this.options.actions=V(e.actions??[],"actions"),this.options.eventActions=V(e.eventActions??[],"eventActions"),this.options.customViews=X(e.customViews??[]),this.dateFormat=new Intl.DateTimeFormat(this.options.locale,{timeZone:this.options.timeZone,day:"2-digit",month:"short",year:"numeric"}),this.timeFormat=new Intl.DateTimeFormat(this.options.locale,{timeZone:this.options.timeZone,hour:"2-digit",minute:"2-digit",hourCycle:"h23"}),this.secondFormat=new Intl.DateTimeFormat(this.options.locale,{timeZone:this.options.timeZone,hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"}),this.events=q(e.events??[]),this.groups=this.resolveGroups(e.groups??_),this.activeGroups=new Set(this.groups.map(i=>i.id)),this.view=["timeline","feed","combined",...this.options.customViews.map(i=>i.id)].includes(e.view)?e.view:"timeline",this.query="",this.dateRange={start:null,end:null},this.pendingActions=new Set,this.pendingToolbarActions=new Set,this.toolbarActionError="",this.selectedId=null,this.customViewHost=new z(()=>this.getActionContext(),i=>this.emit("viewerror",i),(i,s)=>this.s(i,s)),[this.from,this.to]=O(this.events),this.abort=new AbortController,this.mount(),this.fitBounds(),this.render(),this.observer=new ResizeObserver(()=>{this.activityFilter?.renderAxis(),this.content.clientWidth!==this.contentWidth&&this.renderContent()}),this.observer.observe(this.content)}resolveGroups(t){let e=t.map(i=>({...i,id:String(i.id)}));if(new Set(e.map(i=>i.id)).size!==e.length)throw new TypeError("Group IDs must be unique.");for(let i of this.events)e.some(s=>s.id===i.group)||e.push({id:i.group,label:i.group,color:"#7c8b92",icon:"\u2022"});return e}mount(){this.root=n("section","ft"),this.root.setAttribute("aria-label",this.options.label||this.s("flowtimeLabel")),this.root.dataset.theme=this.options.theme||"light",this.toolbar=n("div","ft-toolbar");let t=n("div","ft-switch");t.setAttribute("aria-label",this.s("flowtimeViews")),this.timelineButton=x("\u2301  Timeline","",()=>this.setView("timeline")),this.combinedButton=x("\u2301  Combined timeline","",()=>this.setView("combined")),this.feedButton=x("\u2637  Chronological feed","",()=>this.setView("feed")),t.append(this.timelineButton,this.combinedButton,this.feedButton),this.customViewButtons=new Map;for(let s of this.options.customViews){let o=x(`${s.icon?s.icon+"  ":""}${s.label}`,"",()=>this.setView(s.id));this.customViewButtons.set(s.id,o),t.append(o)}this.search=n("input","ft-search"),this.search.type="search",this.search.placeholder=this.s("flowtimeSearch"),this.search.setAttribute("aria-label",this.s("flowtimeSearchLabel")),this.search.addEventListener("input",()=>this.setFilter({query:this.search.value})),this.toolbar.append(t,this.search),this.actionBar=n("div","ft-actions-bar"),this.actionButtons=n("div","ft-toolbar-actions"),this.actionButtons.setAttribute("role","group"),this.actionButtons.setAttribute("aria-label",this.s("flowtimeActions")),this.toolbarError=n("p","ft-toolbar-action-error"),this.toolbarError.setAttribute("role","alert"),this.actionBar.append(this.actionButtons,this.toolbarError),this.activityFilter=new $({s:(s,o)=>this.s(s,o),onChange:s=>this.setDateRange(s),formatDate:s=>this.formatDate(s),formatTime:s=>this.formatTime(s),timeZone:this.options.timeZone,colorFor:s=>this.safeColor(this.groups.find(o=>o.id===s)?.color),signal:this.abort.signal}),this.filters=n("div","ft-filters"),this.filterButtons=this.groups.map(s=>{let o=x("","ft-filter",()=>{let r=new Set(this.activeGroups);r.has(s.id)?r.delete(s.id):r.add(s.id),this.setFilter({groups:[...r]})},`Filter ${s.label}`,!1);return o.style.setProperty("--ft-group",this.safeColor(s.color)),o.append(n("span","ft-dot"),n("span","",s.label),n("span","ft-filter-count")),this.filters.append(o),o}),this.count=n("span","ft-count"),this.count.setAttribute("role","status"),this.filters.append(this.count),this.workspace=n("div","ft-workspace"),this.content=n("div","ft-content"),this.details=n("aside","ft-details"),this.details.setAttribute("aria-label",this.s("flowtimeDetails")),this.content.tabIndex=-1,this.workspace.append(this.content,this.details),this.syncInspectorVisibility(),this.footer=n("div","ft-footer"),this.rangeLabel=n("span","ft-range");let e=n("div","ft-zoom");this.panLeftButton=x("\u2190","",()=>this.pan(-.3),this.s("flowtimeEarlier")),this.zoomOutButton=x("\u2212","",()=>this.zoom(.65),this.s("flowtimeZoomOut")),this.zoomInButton=x("+","",()=>this.zoom(1.55),this.s("flowtimeZoomIn")),this.panRightButton=x("\u2192","",()=>this.pan(.3),this.s("flowtimeLater")),e.append(this.panLeftButton,this.zoomOutButton,x(this.s("flowtimeFit"),"ft-fit",()=>this.fit()),this.zoomInButton,this.panRightButton),this.textScaleControl=n("label","ft-text-size"),this.textScaleControl.append(n("span","",this.s("flowtimeTextSize"))),this.textScaleSelect=n("select"),this.textScaleSelect.setAttribute("aria-label",this.s("flowtimeTextSize")),this.textScaleSelect.addEventListener("change",()=>this.setTextScale(Number(this.textScaleSelect.value))),this.textScaleControl.append(this.textScaleSelect),this.textScaleControl.hidden=!this.options.showTextScaleControl,this.syncTextScale();let i=n("div","ft-viewport-controls");i.append(e,this.textScaleControl),this.footer.append(this.rangeLabel,i,n("span","ft-zone",this.options.timeZone)),this.root.append(this.toolbar,this.actionBar,this.activityFilter.root,this.filters,this.workspace,this.footer),this.container.append(this.root),this.root.addEventListener("keydown",s=>{if(s.target.closest('input, textarea, select, [contenteditable="true"], .ft-activity')||s.target.closest(".ft-custom-view, .ft-switch"))return;if(s.key==="Escape"&&this.selectedId!==null){s.preventDefault(),this.clearSelection();return}if(!["ArrowLeft","ArrowRight"].includes(s.key))return;let o=this.visibleEvents;if(!o.length)return;let r=o.findIndex(p=>p.id===this.selectedId),c=Math.max(0,Math.min(o.length-1,r+(s.key==="ArrowRight"?1:-1)));s.preventDefault(),this.select(o[c].id,{reveal:!0}),this.focusSelectedEvent()},{signal:this.abort.signal}),this.attachPan()}safeColor(t){return typeof t=="string"&&CSS.supports("color",t)?t:"#7c8b92"}get textScale(){return this.options.textScale??1}syncTextScale(){this.textScaleSelect.replaceChildren();let t=[...new Set([...ft,this.textScale])].sort((e,i)=>e-i);for(let e of t){let i=n("option","",`${Math.round(e*100)}%`);i.value=String(e),this.textScaleSelect.append(i)}this.textScaleSelect.value=String(this.textScale)}setTextScale(t){tt(t),t!==this.textScale&&(this.options.textScale=t,this.syncTextScale(),this.renderContent(),this.emit("textscalechange",{textScale:t}))}get visibleEvents(){return D(this.events,this.query,this.activeGroups,this.dateRange)}groupFor(t){return this.groups.find(e=>e.id===t.group)}formatDate(t){return this.dateFormat.format(t)}formatTime(t){return this.timeFormat.format(t)}customView(){return this.options.customViews?.find(t=>t.id===this.view)}isTimelineView(){return this.view==="timeline"||this.view==="combined"}render(){this.renderToolbarActions(),this.timelineButton.setAttribute("aria-pressed",String(this.view==="timeline")),this.combinedButton.setAttribute("aria-pressed",String(this.view==="combined")),this.feedButton.setAttribute("aria-pressed",String(this.view==="feed"));for(let[e,i]of this.customViewButtons)i.setAttribute("aria-pressed",String(this.view===e));this.filterButtons.forEach((e,i)=>{let s=this.groups[i];e.setAttribute("aria-pressed",String(this.activeGroups.has(s.id))),e.lastChild.textContent=this.events.filter(o=>o.group===s.id).length}),this.count.textContent=`${this.visibleEvents.length} of ${this.events.length} events`,this.activityFilter.render(this.events,this.query,this.activeGroups,this.dateRange);let t=this.customView()?.filters!==!1;this.search.hidden=this.filters.hidden=!t,this.activityFilter.root.hidden=!t||!this.events.length,this.syncInspectorVisibility(),this.renderContent(),this.renderDetails()}renderContent(){if(this.destroyed)return;this.stopMotion(),this.timelineScene=null,this.contentWidth=this.content.clientWidth;let t=this.customView();if(this.content.dataset.view=t?"custom":this.view,this.content.style.setProperty("--ft-text-scale",this.isTimelineView()?this.textScale:1),this.footer.hidden=!!t,this.footer.dataset.view=this.view,t){this.customViewHost.render(t,this.content);return}if(this.customViewHost?.stop(),this.content.replaceChildren(),this.rangeLabel.textContent=this.view!=="feed"?this.formatDate(this.from)===this.formatDate(this.to)?`${this.formatDate(this.from)} \xB7 ${this.formatTime(this.from)} \u2014 ${this.formatTime(this.to)}`:`${this.formatDate(this.from)} ${this.formatTime(this.from)} \u2014 ${this.formatDate(this.to)} ${this.formatTime(this.to)}`:"Chronological order \xB7 oldest first",!this.visibleEvents.length){let e=n("div","ft-empty");e.append(n("span","ft-empty-icon","\u2301"),n("h3","",this.events.length?this.s("flowtimeNoMatch"):this.s("flowtimeEmpty")),n("p","",this.events.length?"Try another search, enable a source, or clear the date range.":"Pass events to Flowtime or import a dataset to begin.")),this.content.append(e);return}if(this.view==="feed"){this.renderFeed();return}this.renderTimeline()}renderTimeline(){let t=this.view==="combined",e=n("div","ft-timeline-scroll");e.dataset.layout=t?"combined":"sources";let i=Math.max(390*this.textScale,this.content.clientWidth-J*this.textScale),s=n("div","ft-axis"),o=n("div","ft-ticks");s.append(n("div","ft-axis-label","SOURCE / TIME"),o),e.append(s);let r=this.visibleEvents,c={width:i,axis:s,ticks:o,tickNodes:new Map,lanes:[],events:r},p=t?[{label:this.s("flowtimeAllEvents"),icon:"\u2301",events:r}]:this.groups.filter(f=>this.activeGroups.has(f.id)).map(f=>({...f,events:r.filter(d=>d.group===f.id)})).filter(f=>f.events.length);for(let f of p){let d=n("div","ft-lane");d.style.setProperty("--ft-group",this.safeColor(f.color));let h=n("div","ft-lane-label"),l=f.events;h.append(n("span","ft-lane-icon",f.icon||"\u2022"),n("strong","",f.label),n("small","",`${l.length} events`));let u=n("div","ft-track"),g=l.map(m=>{let b=this.eventButton(m,"ft-event");b.style.left="0",b.title=`${m.title}
${this.formatDate(m.start)} ${this.formatTime(m.start)}`;let k=n("span","ft-event-time",this.formatTime(m.start));if(t){let U=n("span","ft-event-meta"),rt=n("span","ft-event-source",this.groupFor(m)?.label||m.group);U.append(k,rt),b.append(U)}else b.append(k);b.append(n("strong","",m.title));let A=this.safeColor(this.groupFor(m)?.color),w=n("span","ft-marker");w.style.left="0",w.style.setProperty("--ft-group",A);let T=m.end===null?null:n("span","ft-duration");return T&&(T.style.setProperty("--ft-group",A),u.append(T)),u.append(w,b),{event:m,card:b,marker:w,duration:T}});c.lanes.push({track:u,events:l,nodes:g,lines:new Map}),d.append(h,u),e.append(d)}c.outside=n("div","ft-outside"),c.outside.append(n("span","",this.s("flowtimeOutside")),x(this.s("flowtimeFit"),"",()=>this.fit())),e.append(c.outside),this.content.append(e),this.timelineScene=c,this.paintViewport(!0)}paintViewport(t=!1){let e=this.timelineScene;if(!e||this.destroyed||!this.isTimelineView())return;let i=this.to-this.from,s=d=>(d-this.from)/i*e.width,o=this.textScale,r=et*o,c=I(this.from,this.to,e.width/o),p=new Set(c);for(let[d,h]of e.tickNodes)p.has(d)||(h.remove(),e.tickNodes.delete(d));let f=i<=12e4;for(let d of c){let h=e.tickNodes.get(d);if(!h){h=n("div","ft-tick"),h.append(n("span"),n("small","",this.formatDate(d)));let l=c.find(u=>u>d&&e.tickNodes.has(u));e.tickNodes.set(d,h),e.ticks.insertBefore(h,e.tickNodes.get(l)??null)}h.dataset.seconds!==String(f)&&(h.firstChild.textContent=f?this.secondFormat.format(d):this.formatTime(d),h.dataset.seconds=String(f)),h.style.left=`${Math.max(44*o,Math.min(e.width-44*o,s(d)))}px`}for(let d of e.lanes){for(let[h,l]of d.lines)p.has(h)||(l.remove(),d.lines.delete(h));for(let h of c){let l=d.lines.get(h);l||(l=n("span","ft-grid-line"),d.lines.set(h,l),d.track.prepend(l)),l.style.left=`${s(h)}px`}if(t){let h=K(d.events,this.from,this.to,e.width,r,!1);d.track.style.height=`${Math.max(135,h.reduce((l,u)=>Math.max(l,u.row+1),1)*M+25)*o}px`,h.forEach(({row:l},u)=>{let g=d.nodes[u];g.card.style.top=`${(18+l*M)*o}px`,g.marker.style.top=`${(12+l*M)*o}px`,g.duration&&(g.duration.style.top=`${(18+ct+6+l*M)*o}px`)})}for(let h of d.nodes){let{event:l,card:u,marker:g,duration:m}=h,b=s(l.start),k=l.end===null?b:s(l.end),A=l.end!==null&&b<0&&k>=0?8*o:b-r/2,w=A+r>=0&&A<=e.width;h.inViewport!==w&&(u.style.visibility=g.style.visibility=w?"visible":"hidden",m&&(m.style.visibility=w?"visible":"hidden"),h.inViewport=w),w&&(u.style.transform=`translate3d(${A}px, 0, 0)`,g.style.transform=`translate3d(${b}px, 0, 0)`,m&&(m.style.left=`${Math.max(0,b)}px`,m.style.width=`${Math.max(0,Math.min(e.width,k)-Math.max(0,b))}px`))}}e.outside.hidden=e.events.some(d=>(d.end??d.start)>=this.from&&d.start<=this.to),this.rangeLabel.textContent=this.formatDate(this.from)===this.formatDate(this.to)?`${this.formatDate(this.from)} \xB7 ${this.formatTime(this.from)} \u2014 ${this.formatTime(this.to)}`:`${this.formatDate(this.from)} ${this.formatTime(this.from)} \u2014 ${this.formatDate(this.to)} ${this.formatTime(this.to)}`,this.focusPending&&this.focusSelectedEvent(),this.revealPending&&this.revealSelectedEvent()}requestFrame(t){return requestAnimationFrame(t)}cancelFrame(t){t!=null&&cancelAnimationFrame(t)}motionReduced(){return this.options.animationDuration===0||(globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1)}cancelNavigation(){this.cancelFrame(this.animationFrame),this.animationFrame=null,this.navigationTarget=null,this.revealPending=!1}stopMotion(){this.cancelNavigation(),this.cancelFrame(this.paintFrame),this.paintFrame=null;let t=this.drag;this.drag=null,this.focusPending=!1,t&&this.content?.hasPointerCapture?.(t.pointerId)&&this.content.releasePointerCapture(t.pointerId),this.root?.classList.remove("ft-is-dragging")}queueViewportPaint(){this.paintFrame==null&&(this.paintFrame=this.requestFrame(()=>{this.paintFrame=null,this.paintViewport()}))}navigateTo(t,e){this.cancelNavigation();let i=this.options.animationDuration??220;if(!this.timelineScene||!this.isTimelineView()||i===0||this.motionReduced()){this.from=t,this.to=e,this.timelineScene?this.paintViewport(!0):this.renderContent();return}let s=this.from,o=this.to;this.navigationTarget=[t,e];let r,c=p=>{if(this.destroyed)return;r??=p;let f=Math.min(1,(p-r)/i),d=1-(1-f)**3;this.from=s+(t-s)*d,this.to=o+(e-o)*d,f===1?(this.from=t,this.to=e,this.animationFrame=null,this.navigationTarget=null,this.paintViewport(!0)):(this.paintViewport(),this.animationFrame=this.requestFrame(c))};this.animationFrame=this.requestFrame(c)}attachPan(){let t={signal:this.abort.signal};this.root.addEventListener("pointerdown",s=>{this.suppressDragClick=!1;let o=s.target.closest(".ft-track");!o||s.button!==0||s.isPrimary===!1||(this.stopMotion(),this.drag={pointerId:s.pointerId,x:s.clientX,y:s.clientY,from:this.from,to:this.to,width:o.clientWidth,moved:!1})},t);let e=s=>{let o=this.drag;if(!o||s.pointerId!==o.pointerId)return;let r=s.clientX-o.x;if(!o.moved){if(Math.abs(r)<4||Math.abs(r)<Math.abs(s.clientY-o.y))return;o.moved=!0,this.content.setPointerCapture(s.pointerId),this.root.classList.add("ft-is-dragging")}let c=r/o.width*(o.to-o.from);this.from=o.from-c,this.to=o.to-c,this.queueViewportPaint()};this.content.addEventListener("pointermove",e,t);let i=s=>{let o=this.drag;!o||s.pointerId!==o.pointerId||(o.moved&&s.type==="pointerup"&&e(s),this.drag=null,this.suppressDragClick=o.moved&&s.type==="pointerup",this.cancelFrame(this.paintFrame),this.paintFrame=null,o.moved&&this.paintViewport(),this.root.classList.remove("ft-is-dragging"),this.content.hasPointerCapture(s.pointerId)&&this.content.releasePointerCapture(s.pointerId))};this.content.addEventListener("pointerup",i,t),this.content.addEventListener("pointercancel",i,t),this.content.addEventListener("lostpointercapture",i,t),this.content.addEventListener("pointerleave",s=>{this.drag&&!this.drag.moved&&i(s)},t),this.root.addEventListener("click",s=>{this.suppressDragClick&&s.detail>0&&(s.preventDefault(),s.stopImmediatePropagation(),this.suppressDragClick=!1)},{...t,capture:!0}),this.content.addEventListener("wheel",s=>{!s.target.closest(".ft-track")||!s.ctrlKey&&!s.metaKey||(s.preventDefault(),this.zoom(s.deltaY<0?1.2:.83))},{...t,passive:!1})}focusSelectedEvent(){let t=this.content.querySelector('[data-selected="true"]');t&&t.style.visibility!=="hidden"?(t.focus({preventScroll:!0}),this.focusPending=!1):this.focusPending=!0}revealSelectedEvent(){let t=this.content.querySelector('[data-selected="true"]');if(t){if(this.isTimelineView()&&this.navigationTarget){this.revealPending=!0;return}this.revealPending=!1,t.scrollIntoView({block:"nearest",inline:"nearest",behavior:this.motionReduced()?"auto":"smooth"})}}eventButton(t,e){let i=x("",e,()=>this.select(t.id),t.title,!1);return i.dataset.eventId=t.id,i.dataset.selected=String(t.id===this.selectedId),i.setAttribute("aria-pressed",String(t.id===this.selectedId)),i.style.setProperty("--ft-group",this.safeColor(this.groupFor(t)?.color)),i}renderFeed(){let t=n("div","ft-feed"),e="";for(let i of this.visibleEvents){let s=this.formatDate(i.start);s!==e&&(t.append(n("h3","ft-feed-date",s)),e=s);let o=this.eventButton(i,"ft-feed-event"),r=n("span","ft-feed-text");r.append(n("strong","",i.title)),i.description&&r.append(n("span","",i.description)),o.append(n("time","",this.formatTime(i.start)),n("span","ft-feed-dot"),r,n("span","ft-feed-source",this.groupFor(i)?.label)),t.append(o)}this.content.append(t)}syncInspectorVisibility(){let t=this.customView()?.inspector!==!1&&this.selectedId!==null&&this.visibleEvents.some(s=>s.id===this.selectedId),e=t?"open":"closed",i=this.workspace.dataset.inspector!==e;return this.workspace.dataset.inspector=e,this.details.hidden=!t,i}clearSelection(){if(this.selectedId===null)return;let t=this.selectedId,e=this.events.find(s=>s.id===t)??null,i=this.details.contains?.(this.root?.getRootNode?.()?.activeElement??this.root?.ownerDocument?.activeElement)??!1;this.selectedId=null,this.stopMotion(),this.syncInspectorVisibility(),this.renderContent(),this.renderDetails(),i&&([...this.content.querySelectorAll("[data-event-id]")].find(o=>o.dataset.eventId===t&&o.style.visibility!=="hidden")??this.content).focus({preventScroll:!0}),this.renderToolbarActions(),this.emit("deselect",{event:e})}renderDetails(){this.details.replaceChildren();let t=this.visibleEvents.find(l=>l.id===this.selectedId);if(this.syncInspectorVisibility(),!t||this.customView()?.inspector===!1)return;let e=n("div","ft-detail-header");e.append(n("div","ft-detail-kicker","EVENT INSPECTOR"),x("\xD7","ft-close-inspector",()=>this.clearSelection(),this.s("flowtimeClose"))),this.details.append(e);let i=this.groupFor(t),s=n("div","ft-detail-badge",`${i?.icon||"\u2022"}  ${i?.label||t.group}`);s.style.setProperty("--ft-group",this.safeColor(i?.color)),this.details.append(s,n("h3","",t.title));let o=n("div","ft-detail-date");o.append(n("span","",this.formatDate(t.start)),n("strong","",`${this.formatTime(t.start)} ${this.options.timeZone}`)),t.end!==null&&o.append(n("small","",this.s("flowtimeUntil",{date:`${this.formatDate(t.end)} \xB7 ${this.formatTime(t.end)}`}))),this.details.append(o);let r=n("div","ft-detail-actions");for(let[l,u]of[["Edit",this.s("flowtimeEdit")],["Delete",this.s("flowtimeDelete")]]){if(typeof this.options[`on${l}`]!="function")continue;let g=x(u,l==="Delete"?"ft-action-danger":"",()=>this.runAction(l,t));g.disabled=this.pendingActions.has(t.id),r.append(g)}let c=this.getActionContext(t);for(let l of this.options.eventActions??[])y(l.visible,c,!0)&&r.append(this.customActionButton(l,"event",c));if(r.childElementCount&&this.details.append(r),this.actionError=n("p","ft-action-error"),this.actionError.setAttribute("role","alert"),this.details.append(this.actionError),this.details.append(n("h4","",this.s("flowtimeNotes")),n("p","ft-detail-description",t.description||this.s("flowtimeNoNotes"))),t.metadata&&typeof t.metadata=="object"){let l=Object.entries(t.metadata).filter(([,g])=>g!=null);l.length&&this.details.append(n("h4","",this.s("flowtimeContext")));let u=n("dl","ft-metadata");for(let[g,m]of l)u.append(n("dt","",g),n("dd","",typeof m=="object"?JSON.stringify(m):String(m)));this.details.append(u)}let p=this.visibleEvents.findIndex(l=>l.id===t.id),f=n("div","ft-detail-nav"),d=x("\u2190 Previous","",()=>this.select(this.visibleEvents[p-1].id,{reveal:!0}));d.disabled=p===0;let h=x("Next \u2192","",()=>this.select(this.visibleEvents[p+1].id,{reveal:!0}));h.disabled=p===this.visibleEvents.length-1,f.append(d,h),this.details.append(f)}emit(t,e){this.root.dispatchEvent(new CustomEvent(`flowtime:${t}`,{detail:e,bubbles:!0})),t==="select"&&this.options.onSelect?.(e.event)}select(t,{reveal:e=!1}={}){let i=this.visibleEvents.find(r=>r.id===String(t));if(!i)return;let s=this.content.contains?.(this.root?.getRootNode?.()?.activeElement??this.root?.ownerDocument?.activeElement)??!1;this.selectedId=i.id;let o=this.syncInspectorVisibility();if(o&&this.renderContent(),this.isTimelineView()&&e){let[r,c]=this.navigationTarget??[this.from,this.to],p=c-r,f=p*Q*this.textScale/(this.timelineScene?.width??390*this.textScale);(i.start<r+f||i.start>c-f)&&this.navigateTo(i.start-p/2,i.start+p/2)}for(let r of this.content.querySelectorAll("[data-event-id]")){let c=r.dataset.eventId===i.id;r.dataset.selected=String(c),r.setAttribute("aria-pressed",String(c))}e&&this.revealSelectedEvent(),this.renderDetails(),o&&s&&this.focusSelectedEvent(),this.renderToolbarActions(),o||this.customViewHost?.update(),this.emit("select",{event:i})}setView(t){if(!["timeline","combined","feed",...(this.options.customViews??[]).map(e=>e.id)].includes(t))throw new TypeError(`Unknown view: ${t}. Register custom views in customViews.`);this.stopMotion(),this.view=t,this.render(),this.emit("viewchange",{view:t})}setDateRange(t={}){this.setFilter({dateRange:t})}setFilter({query:t=this.query,groups:e=[...this.activeGroups],dateRange:i=this.dateRange}={}){let s=W(i);this.stopMotion();let o=s.start!==this.dateRange.start||s.end!==this.dateRange.end;this.query=String(t),this.search.value=this.query,this.activeGroups=new Set(e.map(String)),this.dateRange=s,this.visibleEvents.some(r=>r.id===this.selectedId)||(this.selectedId=null),o&&this.fitBounds(),this.render(),this.emit("filterchange",{query:this.query,groups:[...this.activeGroups],dateRange:{...s},count:this.visibleEvents.length})}getActionContext(t=this.visibleEvents.find(e=>e.id===this.selectedId)??null){return{viewer:this,event:t?{...t}:null,events:this.getEvents(),visibleEvents:this.visibleEvents.map(e=>({...e})),view:this.view,textScale:this.textScale,filter:{query:this.query,groups:[...this.activeGroups],dateRange:{...this.dateRange}}}}customActionButton(t,e,i){let s=x("",`ft-custom-action ft-action-${t.variant??"default"}`,()=>this.runCustomAction(t.id,e,i.event?.id),t.title??t.label);if(s.dataset.actionId=t.id,t.icon){let o=n("span","ft-action-icon",t.icon);o.setAttribute("aria-hidden","true"),s.append(o)}return s.append(n("span","",t.label)),s.disabled=(e==="toolbar"?this.pendingToolbarActions.has(t.id):this.pendingActions.has(i.event.id))||y(t.disabled,i,!1),s}renderToolbarActions(){if(!this.actionBar)return;let t=this.getActionContext();this.actionButtons.replaceChildren();for(let e of this.options.actions??[])y(e.visible,t,!0)&&this.actionButtons.append(this.customActionButton(e,"toolbar",t));this.toolbarError.textContent=this.toolbarActionError,this.actionBar.hidden=!this.actionButtons.childElementCount&&!this.toolbarActionError}syncActionButtons(){let t=this.getActionContext();for(let e of this.actionButtons?.querySelectorAll("[data-action-id]")??[]){let i=this.options.actions.find(s=>s.id===e.dataset.actionId);i&&(e.disabled=this.pendingToolbarActions.has(i.id)||y(i.disabled,t,!1))}for(let e of this.details.querySelectorAll(".ft-detail-actions button")){let i=(this.options.eventActions??[]).find(s=>s.id===e.dataset?.actionId);e.disabled=this.pendingActions.has(this.selectedId)||!!(i&&y(i.disabled,t,!1))}}setActions({actions:t=this.options.actions??[],eventActions:e=this.options.eventActions??[]}={}){let i=V(t,"actions"),s=V(e,"eventActions");this.options.actions=i,this.options.eventActions=s,this.renderToolbarActions(),this.renderDetails()}async runCustomAction(t,e,i){if(this.destroyed)return;let s=(e==="toolbar"?this.options.actions:this.options.eventActions).find(f=>f.id===t);if(!s)return;let o=e==="event"?this.visibleEvents.find(f=>f.id===i):void 0;if(e==="event"&&!o)return;let r=this.getActionContext(o);if(!y(s.visible,r,!0)||y(s.disabled,r,!1))return;let c=e==="toolbar"?this.pendingToolbarActions:this.pendingActions,p=e==="toolbar"?t:o.id;if(!c.has(p)){c.add(p),e==="toolbar"?this.toolbarActionError=this.toolbarError.textContent="":this.actionError.textContent="",this.syncActionButtons(),this.emit("action",{action:t,location:e,context:r});try{await s.onClick(r)}catch(f){if(!this.destroyed){let d=`Unable to ${s.label.toLowerCase()}. Please try again.`;e==="toolbar"?(this.toolbarActionError=this.toolbarError.textContent=d,this.actionBar&&(this.actionBar.hidden=!1)):this.selectedId===o.id&&(this.actionError.textContent=d),this.emit("actionerror",{action:t,location:e,event:r.event,error:f})}}finally{c.delete(p),this.destroyed||this.syncActionButtons()}}}async runAction(t,e){if(!this.pendingActions.has(e.id)){this.pendingActions.add(e.id),this.details.querySelectorAll(".ft-detail-actions button").forEach(i=>{i.disabled=!0}),this.actionError.textContent="",this.syncActionButtons();try{await this.options[`on${t}`](e)}catch(i){!this.destroyed&&this.selectedId===e.id&&(this.actionError.textContent=`Unable to ${t.toLowerCase()} this event. Please try again.`),this.emit("actionerror",{action:t.toLowerCase(),event:e,error:i})}finally{this.pendingActions.delete(e.id),this.destroyed||this.syncActionButtons()}}}setEvents(t){let e=q(t);this.stopMotion(),this.events=e,this.groups=this.resolveGroups(this.options.groups??_),this.activeGroups=new Set(this.groups.map(i=>i.id)),this.selectedId=this.visibleEvents.some(i=>i.id===this.selectedId)?this.selectedId:null,this.fitBounds(),this.customViewHost?.stop(),this.activityFilter?.destroy(),this.root.remove(),this.abort.abort(),this.observer.disconnect(),this.abort=new AbortController,this.mount(),this.search.value=this.query,this.render(),this.observer.observe(this.content)}fitBounds(){let[t,e]=O(this.visibleEvents),i=Math.max(390*this.textScale,(this.content?.clientWidth??540*this.textScale)-J*this.textScale),s=Q*this.textScale/i,o=(e-t)*s/(1-2*s);if(this.from=this.dateRange.start??t-o,this.to=this.dateRange.end??e+o,this.to<=this.from){let r=Math.max(F,e-t);this.dateRange.end===null?this.to=this.from+r:this.dateRange.start===null?this.from=this.to-r:(this.from-=F/2,this.to+=F/2)}}fit(){let t=this.from,e=this.to;this.fitBounds();let i=[this.from,this.to];this.from=t,this.to=e,this.navigateTo(...i)}zoom(t){if(!Number.isFinite(t)||t<=0)throw new TypeError("Zoom factor must be positive.");let[e,i]=this.navigationTarget??[this.from,this.to],s=(e+i)/2,o=Math.max(F,Math.min(dt,(i-e)/t));this.navigateTo(s-o/2,s+o/2)}pan(t){if(!Number.isFinite(t))throw new TypeError("Pan fraction must be finite.");let[e,i]=this.navigationTarget??[this.from,this.to],s=(i-e)*t;this.navigateTo(e+s,i+s)}getEvents(){return this.events.map(t=>({...t}))}destroy(){this.destroyed=!0,this.stopMotion(),this.customViewHost?.stop(),this.activityFilter?.destroy(),this.abort.abort(),this.observer.disconnect(),this.root.remove()}};var it=`.ft {
  --ft-text-scale: 1;
  --ft-bg: var(--vt-surface, #fff);
  --ft-soft: var(--vt-surface-sunken, #f8f9f7);
  --ft-ink: var(--vt-fg, #263b37);
  --ft-muted: var(--vt-fg-muted, #7b8781);
  --ft-border: var(--vt-border, #e5e9e2);
  --ft-accent: var(--vt-accent-fg, #245f4d);
  --ft-danger: var(--vt-danger, #be3f45);
  font:
    calc(15px * var(--ft-text-scale))/1.5 'Inter',
    system-ui,
    sans-serif;
  color: var(--ft-ink);
  background: var(--ft-bg);
  border: 1px solid var(--ft-border);
  border-radius: 14px;
  overflow: hidden;
  isolation: isolate;
  min-width: 0;
  text-align: left;
}
.ft * {
  box-sizing: border-box;
}
.ft button:where(:not(.ft-custom-view *)),
.ft input:where(:not(.ft-custom-view *)) {
  font: inherit;
}
.ft button:where(:not(.ft-custom-view *)) {
  cursor: pointer;
  color: inherit;
}
.ft button:where(:not(.ft-custom-view *)):disabled {
  opacity: 0.35;
  cursor: default;
}
.ft button:where(:not(.ft-custom-view *)):focus-visible,
.ft input:where(:not(.ft-custom-view *)):focus-visible {
  outline: 2px solid var(--ft-accent);
  outline-offset: 3px;
}
.ft-toolbar {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  padding: 17px 20px;
  border-bottom: 1px solid var(--ft-border);
}
.ft-switch {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  gap: 4px;
  padding: 4px;
  background: var(--ft-soft);
  border: 1px solid var(--ft-border);
  border-radius: 8px;
}
.ft-switch button {
  background: none;
  border: 0;
  padding: 7px 13px;
  border-radius: 5px;
  font-size: calc(14px * var(--ft-text-scale));
  color: var(--ft-muted);
  white-space: nowrap;
}
.ft-switch button[aria-pressed='true'] {
  color: var(--ft-ink);
  background: var(--ft-bg);
  box-shadow: 0 1px 4px #182d2520;
  font-weight: 600;
}
.ft-search {
  border: 1px solid var(--ft-border);
  border-radius: 7px;
  background: var(--ft-bg);
  color: var(--ft-ink);
  padding: 9px 12px;
  width: 225px;
  min-width: 100px;
}
.ft-search::placeholder {
  color: var(--ft-muted);
}
.ft-text-size {
  display: flex;
  align-items: center;
  gap: 7px;
  color: var(--ft-muted);
  font-size: calc(13px * var(--ft-text-scale));
  white-space: nowrap;
}
.ft-text-size[hidden] {
  display: none;
}
.ft-text-size select {
  font: inherit;
  color: var(--ft-ink);
  background: var(--ft-bg);
  border: 1px solid var(--ft-border);
  border-radius: 6px;
  padding: 7px;
  cursor: pointer;
}
.ft-text-size select:focus-visible {
  outline: 2px solid var(--ft-accent);
  outline-offset: 3px;
}
.ft-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  padding: 13px 20px;
  border-bottom: 1px solid var(--ft-border);
}
.ft-filter {
  display: flex;
  align-items: center;
  gap: 7px;
  border: 1px solid var(--ft-border);
  border-radius: 6px;
  background: var(--ft-bg);
  font-size: calc(13px * var(--ft-text-scale)) !important;
  padding: 5px 9px;
}
.ft-filter[aria-pressed='false'] {
  opacity: 0.45;
  background: var(--ft-soft);
}
.ft-dot {
  width: 7px;
  height: 7px;
  background: var(--ft-group);
  border-radius: 50%;
}
.ft-filter-count {
  color: var(--ft-muted);
  font-size: calc(13px * var(--ft-text-scale));
}
.ft-count {
  color: var(--ft-muted);
  font-size: calc(13px * var(--ft-text-scale));
  margin-left: auto;
}
.ft-workspace {
  display: grid;
  grid-template-columns: minmax(0, 1fr) calc(265px * var(--ft-text-scale));
  min-height: 510px;
}
.ft-content {
  /* Text zoom belongs to the visualization; surrounding controls stay fixed. */
  font-size: calc(15px * var(--ft-text-scale));
  min-width: 0;
  overflow: auto;
  max-height: 680px;
  position: relative;
  scrollbar-width: thin;
}
.ft-details {
  background: var(--ft-soft);
  border-left: 1px solid var(--ft-border);
  padding: 25px 23px;
  overflow-wrap: anywhere;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.ft-detail-kicker {
  font-size: calc(11px * var(--ft-text-scale));
  font-weight: 600;
  letter-spacing: 1.6px;
  color: var(--ft-muted);
  margin-bottom: 22px;
}
.ft-detail-badge {
  font-size: calc(13px * var(--ft-text-scale));
  color: var(--ft-group);
  background: var(--ft-bg);
  padding: 4px 9px;
  border: 1px solid var(--ft-border);
  border-radius: 5px;
}
.ft-details h3 {
  font-size: calc(24px * var(--ft-text-scale));
  line-height: 1.3;
  font-weight: 550;
  letter-spacing: -0.6px;
  margin: 16px 0;
}
.ft-detail-date {
  border-bottom: 1px solid var(--ft-border);
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: calc(14px * var(--ft-text-scale));
}
.ft-detail-date strong {
  font-weight: 500;
  color: var(--ft-muted);
  font-size: calc(13px * var(--ft-text-scale));
}
.ft-details h4 {
  font-size: calc(13px * var(--ft-text-scale));
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 21px 0 8px;
  font-weight: 600;
  color: var(--ft-muted);
}
.ft-detail-description {
  font-size: calc(14px * var(--ft-text-scale));
  line-height: 1.7;
  color: var(--ft-muted);
  white-space: pre-wrap;
  margin: 0;
}
.ft-metadata {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px 15px;
  width: 100%;
  font-size: calc(13px * var(--ft-text-scale));
  margin: 0 0 22px;
}
.ft-metadata dt {
  color: var(--ft-muted);
}
.ft-metadata dd {
  margin: 0;
  text-align: right;
}
.ft-detail-nav {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 28px;
  gap: 12px;
}
.ft-detail-nav button {
  background: none;
  border: 0;
  font-size: calc(13px * var(--ft-text-scale));
  padding: 4px 0;
}
.ft-timeline-scroll {
  min-width: calc(540px * var(--ft-text-scale));
}
.ft-axis {
  display: flex;
  height: calc(71px * var(--ft-text-scale));
  border-bottom: 1px solid var(--ft-border);
  position: sticky;
  top: 0;
  background: var(--ft-bg);
  z-index: 2;
}
.ft-axis-label {
  flex: 0 0 calc(150px * var(--ft-text-scale));
  font-size: calc(11px * var(--ft-text-scale));
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  color: var(--ft-muted);
}
.ft-ticks {
  position: relative;
  flex: 1;
  margin-right: 0;
  overflow: hidden;
}
.ft-tick {
  position: absolute;
  top: 20px;
  display: flex;
  flex-direction: column;
  font-size: calc(13px * var(--ft-text-scale));
  white-space: nowrap;
  transform: translateX(-50%);
  text-align: center;
}
.ft-tick:first-child {
  transform: none;
}
.ft-tick:last-child {
  transform: translateX(-100%);
  padding-right: 8px;
}
.ft-tick small {
  font-size: calc(11px * var(--ft-text-scale));
  color: var(--ft-muted);
  margin-top: 2px;
}
.ft-lane {
  display: flex;
  border-bottom: 1px solid var(--ft-border);
}
.ft-lane:last-child {
  border: 0;
}
.ft-lane-label {
  flex: 0 0 calc(150px * var(--ft-text-scale));
  padding: 19px 12px 15px 19px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-right: 1px solid var(--ft-border);
  background: var(--ft-bg);
}
.ft-lane-icon {
  display: grid;
  place-items: center;
  width: 23px;
  height: 23px;
  border-radius: 6px;
  color: var(--ft-group);
  background: color-mix(in srgb, var(--ft-group) 9%, var(--ft-bg));
  font-size: calc(16px * var(--ft-text-scale));
  margin-bottom: 9px;
}
.ft-lane-label strong {
  font-size: calc(13px * var(--ft-text-scale));
  font-weight: 550;
}
.ft-lane-label small {
  font-size: calc(11px * var(--ft-text-scale));
  color: var(--ft-muted);
  margin-top: 3px;
}
.ft-track {
  flex: 1;
  position: relative;
  overflow: hidden;
  cursor: grab;
  touch-action: pan-y;
}
.ft-track.ft-dragging {
  cursor: grabbing;
}
.ft-event {
  position: absolute;
  width: calc(220px * var(--ft-text-scale));
  min-height: calc(86px * var(--ft-text-scale));
  display: flex;
  flex-direction: column;
  gap: calc(5px * var(--ft-text-scale));
  text-align: left;
  background: var(--ft-bg);
  border: 1px solid color-mix(in srgb, var(--ft-group) 30%, var(--ft-border));
  border-left: 3px solid var(--ft-group);
  border-radius: 6px;
  padding: calc(10px * var(--ft-text-scale)) calc(12px * var(--ft-text-scale));
  box-shadow: 0 2px 5px #233b2e05;
  transition:
    box-shadow 0.15s,
    background 0.15s;
}
.ft-event:hover {
  box-shadow: 0 3px 10px #233b2e15;
  z-index: 1;
}
.ft-event[data-selected='true'] {
  background: color-mix(in srgb, var(--ft-group) 8%, var(--ft-bg));
  border-color: var(--ft-group);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--ft-group) 13%, transparent);
  z-index: 1;
}
.ft-event-time {
  font:
    calc(12px * var(--ft-text-scale))/1.2 ui-monospace,
    monospace;
  color: var(--ft-muted);
}
.ft-event strong {
  font-size: calc(14px * var(--ft-text-scale));
  font-weight: 550;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.ft-marker {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--ft-group);
}
.ft-duration {
  position: absolute;
  height: 3px;
  background: var(--ft-group);
  border-radius: 2px;
  opacity: 0.6;
}
.ft-footer {
  border-top: 1px solid var(--ft-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  padding: 13px 20px;
  background: var(--ft-bg);
}
.ft-viewport-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  min-width: 0;
}
.ft-range,
.ft-zone {
  font-size: calc(13px * var(--ft-text-scale));
  color: var(--ft-muted);
}
.ft-zoom {
  display: flex;
  align-items: center;
  gap: 3px;
  border: 1px solid var(--ft-border);
  border-radius: 6px;
  padding: 3px;
}
.ft-zoom button {
  background: transparent;
  border: 0;
  border-radius: 3px;
  min-width: 25px;
  min-height: calc(25px * var(--ft-text-scale));
  font-size: calc(14px * var(--ft-text-scale));
}
.ft-zoom button:hover {
  background: var(--ft-soft);
}
.ft-zoom .ft-fit {
  font-size: calc(13px * var(--ft-text-scale));
  padding: 0 10px;
}
.ft-footer[data-view='feed'] .ft-viewport-controls {
  display: none;
}
.ft-feed {
  padding: 8px 24px 30px;
}
.ft-feed-date {
  font-size: calc(13px * var(--ft-text-scale));
  font-weight: 500;
  color: var(--ft-muted);
  margin: 22px 0 12px;
}
.ft-feed-event {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
  padding: 18px 12px;
  background: transparent;
  border: 0;
  border-top: 1px solid var(--ft-border);
  text-align: left;
  border-radius: 3px;
}
.ft-feed-event:hover {
  background: var(--ft-soft);
}
.ft-feed-event[data-selected='true'] {
  background: color-mix(in srgb, var(--ft-group) 6%, var(--ft-bg));
  box-shadow: inset 2px 0 var(--ft-group);
}
.ft-feed-event time {
  font:
    calc(13px * var(--ft-text-scale))/1.8 ui-monospace,
    monospace;
  color: var(--ft-muted);
}
.ft-feed-dot {
  flex: 0 0 8px;
  height: 8px;
  border: 2px solid var(--ft-group);
  border-radius: 50%;
  margin-top: 5px;
}
.ft-feed-text {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}
.ft-feed-text strong {
  font-size: calc(14px * var(--ft-text-scale));
  font-weight: 550;
}
.ft-feed-text > span {
  font-size: calc(13px * var(--ft-text-scale));
  color: var(--ft-muted);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.ft-feed-source {
  font-size: calc(11px * var(--ft-text-scale));
  white-space: nowrap;
  color: var(--ft-group);
  padding-top: 3px;
}
.ft-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  min-height: 400px;
  padding: 30px;
}
.ft-empty-icon {
  font-size: calc(45px * var(--ft-text-scale));
  color: var(--ft-accent);
}
.ft-empty h3 {
  font-size: calc(20px * var(--ft-text-scale));
  font-weight: 500;
}
.ft-empty p {
  font-size: calc(14px * var(--ft-text-scale));
  color: var(--ft-muted);
  max-width: 290px;
}
.ft-outside {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: calc(14px * var(--ft-text-scale));
  padding: 25px;
  color: var(--ft-muted);
}
.ft-outside button {
  background: var(--ft-bg);
  border: 1px solid var(--ft-border);
  border-radius: 5px;
  padding: 5px 12px;
}
.ft[data-theme='dark'] {
  --ft-bg: var(--vt-surface, #192620);
  --ft-soft: var(--vt-surface-sunken, #15211c);
  --ft-ink: var(--vt-fg, #e4eee5);
  --ft-muted: var(--vt-fg-muted, #9aa99e);
  --ft-border: var(--vt-border, #304138);
  --ft-accent: var(--vt-accent-fg, #b6df8d);
  color-scheme: dark;
}
@media (min-width: 1500px) {
  .ft-workspace {
    grid-template-columns: minmax(0, 1fr) calc(290px * var(--ft-text-scale));
  }
}
@media (max-width: 1050px) {
  .ft-workspace {
    grid-template-columns: minmax(0, 1fr) calc(230px * var(--ft-text-scale));
  }
  .ft-details {
    padding: 23px 18px;
  }
  .ft-details h3 {
    font-size: calc(22px * var(--ft-text-scale));
  }
  .ft-toolbar {
    padding: 14px;
  }
  .ft-filters {
    padding: 12px 14px;
  }
  .ft-count {
    width: 100%;
    margin: 3px 0 0;
  }
}
@media (max-width: 700px) {
  .ft-toolbar {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
  .ft-switch button {
    flex: 1;
  }
  .ft-search {
    width: 100%;
  }
  .ft-workspace {
    grid-template-columns: 1fr;
  }
  .ft-details {
    border-left: 0;
    border-top: 1px solid var(--ft-border);
    min-height: 300px;
  }
  .ft-details h3 {
    font-size: calc(23px * var(--ft-text-scale));
  }
  .ft-detail-kicker {
    margin-bottom: 12px;
  }
  .ft-detail-description {
    max-width: 100%;
  }
  .ft-detail-nav {
    padding-top: 20px;
  }
  .ft-content {
    max-height: 530px;
  }
  .ft-footer {
    flex-wrap: wrap;
    padding: 12px;
  }
  .ft-range {
    width: 100%;
    text-align: center;
  }
  .ft-zone {
    margin-left: auto;
  }
  .ft-feed {
    padding: 4px 12px 20px;
  }
  .ft-feed-event {
    gap: 10px;
  }
  .ft-feed-source {
    display: none;
  }
  .ft-filter {
    font-size: calc(13px * var(--ft-text-scale)) !important;
  }
  .ft-count {
    width: auto;
    margin-left: auto;
  }
  .ft-filter-count {
    display: none;
  }
}

.ft-grid-line {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--ft-border);
  pointer-events: none;
}
.ft-tick:first-child,
.ft-tick:last-child {
  transform: translateX(-50%);
  padding-right: 0;
}

.ft-detail-actions button {
  font-size: calc(13px * var(--ft-text-scale));
  padding: 7px 10px;
  border: 1px solid var(--ft-border);
  border-radius: 5px;
  background: var(--ft-bg);
}
.ft-action-error {
  font-size: calc(13px * var(--ft-text-scale));
  color: var(--ft-danger);
  margin: 0;
  width: 100%;
}
.ft-action-error:empty {
  display: none;
}
.ft-detail-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}
.ft-detail-actions .ft-action-danger {
  color: var(--ft-danger);
  border-color: color-mix(in srgb, var(--ft-danger) 35%, var(--ft-border));
}
/* Position updates stay on the same DOM nodes during pan/zoom. */
.ft-content {
  scrollbar-gutter: stable;
}
.ft-track {
  transition: height 160ms ease;
}
.ft-event {
  transition:
    top 160ms ease,
    box-shadow 150ms,
    background 150ms;
}
.ft-marker,
.ft-duration {
  transition: top 160ms ease;
}
.ft.ft-is-dragging {
  user-select: none;
}
.ft.ft-is-dragging .ft-track,
.ft.ft-is-dragging .ft-event {
  cursor: grabbing;
}
.ft-outside[hidden] {
  display: none;
}
@media (prefers-reduced-motion: reduce) {
  .ft-track,
  .ft-event,
  .ft-marker,
  .ft-duration {
    transition: none;
  }
}

/* An empty or dismissed inspector gives its column back to the viewer. */
.ft-workspace[data-inspector='closed'] {
  grid-template-columns: minmax(0, 1fr);
}
.ft-details[hidden] {
  display: none;
}
.ft-detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  margin-bottom: 18px;
}
.ft-detail-header .ft-detail-kicker {
  margin: 0;
}
.ft-close-inspector {
  border: 0;
  border-radius: 5px;
  background: transparent;
  color: var(--ft-muted);
  width: calc(30px * var(--ft-text-scale));
  height: calc(30px * var(--ft-text-scale));
  padding: 0;
  font-size: calc(24px * var(--ft-text-scale)) !important;
  line-height: 1;
}
.ft-close-inspector:hover {
  color: var(--ft-ink);
  background: var(--ft-bg);
}

/* Keep the event source visible when all sources share one track. */
.ft-event-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
  min-width: 0;
}
.ft-event-meta .ft-event-time {
  flex-shrink: 0;
}
.ft-event-source {
  font-size: calc(11px * var(--ft-text-scale));
  line-height: 1.2;
  color: var(--ft-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* The activity overview stays on the full dataset while a period is selected. */
.ft-activity {
  padding: 14px 20px 10px;
  border-bottom: 1px solid var(--ft-border);
  background: var(--ft-soft);
}
.ft-activity[hidden] {
  display: none;
}
.ft-activity-header,
.ft-activity-heading {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 14px;
}
.ft-activity-header {
  justify-content: space-between;
  margin-bottom: 12px;
}
.ft-activity-title {
  font-size: calc(13px * var(--ft-text-scale));
  font-weight: 600;
}
.ft-activity-summary {
  font-size: calc(13px * var(--ft-text-scale));
  color: var(--ft-muted);
}
.ft-activity-reset {
  border: 1px solid var(--ft-border);
  border-radius: 5px;
  background: var(--ft-bg);
  font-size: calc(13px * var(--ft-text-scale)) !important;
  padding: 4px 8px;
}
.ft-activity-bars {
  display: flex;
  gap: 3px;
  height: 68px;
  position: relative;
  touch-action: pan-y;
  user-select: none;
}
.ft-activity-bar {
  flex: 1;
  min-width: 0;
  padding: 0;
  border: 0;
  border-bottom: 2px solid var(--ft-border);
  border-radius: 3px 3px 0 0;
  background: transparent;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  transition: opacity 120ms;
}
.ft-activity-part {
  flex-shrink: 0;
  min-height: 2px;
  background: var(--ft-group);
  pointer-events: none;
}
.ft-activity-part:last-child {
  border-radius: 3px 3px 0 0;
}
.ft-activity-bar:hover,
.ft-activity-bar:focus-visible {
  background: color-mix(in srgb, var(--ft-accent) 10%, transparent);
}
.ft-activity[data-filtered='true'] .ft-activity-bar[data-selected='false'] {
  opacity: 0.3;
}
.ft-activity-bar[data-selected='true'] {
  border-bottom-color: var(--ft-accent);
}
.ft-activity-selection {
  position: absolute;
  top: -3px;
  bottom: -3px;
  border: 1px solid var(--ft-accent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--ft-accent) 7%, transparent);
  pointer-events: none;
}
.ft-activity-selection[hidden] {
  display: none;
}
.ft-activity-axis {
  position: relative;
  height: calc(38px * var(--ft-text-scale));
  margin-top: 7px;
  font-size: calc(12px * var(--ft-text-scale));
  color: var(--ft-muted);
}
.ft-activity-tick {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
  white-space: nowrap;
  line-height: 1.5;
}
.ft-activity-tick::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  width: 1px;
  height: 4px;
  background: var(--ft-border);
}
.ft-activity-tick:first-child {
  transform: none;
  align-items: flex-start;
}
.ft-activity-tick:first-child::before {
  left: 0;
}
.ft-activity-tick:last-child {
  transform: translateX(-100%);
  align-items: flex-end;
}
.ft-activity-tick:last-child::before {
  left: 100%;
}
.ft-activity-tick small {
  font-size: calc(11px * var(--ft-text-scale));
}
.ft-activity-hint {
  margin: 7px 0 0;
  font-size: calc(11px * var(--ft-text-scale));
  color: var(--ft-muted);
}
.ft-activity[data-dragging='true'] .ft-activity-bars {
  cursor: col-resize;
}
@media (max-width: 700px) {
  .ft-activity {
    padding: 12px;
  }
  .ft-activity-bars {
    gap: 2px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .ft-activity-bar {
    transition: none;
  }
}

/* Hosts supply the callbacks; action buttons stay generic and wrap as needed. */
.ft-actions-bar {
  padding: 12px 20px;
  border-bottom: 1px solid var(--ft-border);
}
.ft-actions-bar[hidden] {
  display: none;
}
.ft-toolbar-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}
.ft-custom-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: calc(13px * var(--ft-text-scale)) !important;
  padding: 7px 10px;
  border: 1px solid var(--ft-border);
  border-radius: 5px;
  background: var(--ft-bg);
}
.ft-custom-action:hover {
  background: var(--ft-soft);
}
.ft .ft-action-primary {
  background: var(--ft-accent);
  border-color: var(--ft-accent);
  color: var(--ft-bg);
}
.ft .ft-action-primary:hover {
  filter: brightness(0.95);
}
.ft .ft-action-danger {
  color: var(--ft-danger);
  border-color: color-mix(in srgb, var(--ft-danger) 35%, var(--ft-border));
}
.ft-toolbar-action-error {
  margin: 8px 0 0;
  font-size: calc(13px * var(--ft-text-scale));
  color: var(--ft-danger);
}
.ft-toolbar-action-error:empty {
  display: none;
}
@media (max-width: 700px) {
  .ft-actions-bar {
    padding: 12px;
  }
}

/* Hosts own the controls and rendering inside custom views. */
.ft-filters[hidden],
.ft-footer[hidden],
.ft-search[hidden] {
  display: none;
}
.ft-content[data-view='custom'] {
  max-height: none;
  overflow: visible;
}
.ft-custom-view {
  min-width: 0;
  padding: 18px 20px;
}
.ft-view-error {
  padding: 30px;
  color: var(--ft-muted);
  text-align: center;
}
.ft-view-error button {
  font: inherit;
  border: 1px solid var(--ft-border);
  border-radius: 5px;
  padding: 7px 12px;
  background: var(--ft-bg);
  color: var(--ft-ink);
  cursor: pointer;
}
@media (max-width: 700px) {
  .ft-custom-view {
    padding: 12px;
  }
}

.ft-view-loading {
  margin: 0;
  padding: 16px 20px;
  color: var(--ft-muted);
  font-size: calc(14px * var(--ft-text-scale));
}
`;var st=`/* The Vitrine shell supplies the frame and theme tokens. */
.ft {
  --ft-bg: var(--_surface);
  --ft-soft: var(--_surface-sunken);
  --ft-ink: var(--_fg);
  --ft-muted: var(--_fg-muted);
  --ft-border: var(--_border);
  --ft-accent: var(--_accent-fg);
  --ft-danger: var(--_danger);
  border: 0;
  border-radius: 0;
  font-family: var(--_font-ui);
}
`;j({en:B,fr:H});var ot=class a extends N{static type="flowtime";static allowEmpty=!0;static componentAttributes=Object.freeze(["view","time-zone","text-scale","text-size-control"]);static upgradeProperties=[...N.upgradeProperties,"options"];static presets={simple:{},full:{header:!0,dot:!0,fullscreen:!0}};static styles=[it,st];constructor(){super(),this._options={},this._viewer=null,this._settings=null,this._lastText=null,this._revision=0,this._viewerError=!1,this.mountPoint=G("div",{part:"workspace"}),this.bindViewerEvents()}get options(){return{...this._options}}set options(t){if(!t||typeof t!="object"||Array.isArray(t))throw new TypeError("Flowtime options must be an object.");this.clearViewerError(),this._options={...t},this._revision++,this.requestRender()}get viewer(){return this._viewer}disconnectedCallback(){this.destroyViewer(),super.disconnectedCallback()}render(){(this.loading||this.error)&&this.destroyViewer(),super.render()}renderContent(t){t.append(...this.chrome(null),this.mountPoint);try{let e=this.viewerOptions(),i=JSON.stringify([e.groups,this._revision,this.getAttribute("view"),this.getAttribute("time-zone"),this.getAttribute("text-scale"),this.getAttribute("text-size-control"),this.locale]);!this._viewer||i!==this._settings?(this.destroyViewer(),this._viewer=new P(this.mountPoint,e),this._settings=i):this.text!==this._lastText&&this._viewer.setEvents(e.events??[]),this._viewerError=!1,this._lastText=this.text,this.setViewerParts()}catch(e){this.destroyViewer(),this._viewerError=!0,this.setError(e)}}attributeChangedCallback(t,e,i){e!==i&&a.componentAttributes.includes(t)&&this.clearViewerError(),super.attributeChangedCallback(t,e,i)}clearViewerError(){this._viewerError&&(this.error=null),this._viewerError=!1}viewerOptions(){let t=this.text?.trim()?JSON.parse(this.text):[];if(!Array.isArray(t)&&(!t||!Array.isArray(t.events)))throw new TypeError("Expected an event array or { events: [], groups?: [] }.");let e=this.getAttribute("view"),i=this.getAttribute("text-scale");return{events:Array.isArray(t)?t:t.events,...Array.isArray(t.groups)?{groups:t.groups}:{},locale:this.locale,label:this.heading||this.t("flowtimeLabel"),t:(s,o)=>this.t(s,o),...this._options,...e?{view:e}:{},...this.hasAttribute("time-zone")?{timeZone:this.getAttribute("time-zone")||"UTC"}:{},...i!==null?{textScale:Number(i)}:{},...this.hasAttribute("text-size-control")?{showTextScaleControl:Z(this.getAttribute("text-size-control"))!==!1}:{}}}bindViewerEvents(){for(let[t,e]of Object.entries({select:S.SELECT,deselect:"vt-deselect",viewchange:S.TAB_CHANGE,filterchange:S.FILTER_CHANGE,textscalechange:"vt-text-scale-change"}))this.mountPoint.addEventListener(`flowtime:${t}`,i=>{L(this,e,i.detail)});for(let t of["actionerror","viewerror"])this.mountPoint.addEventListener(`flowtime:${t}`,e=>{let i=e.detail;L(this,S.ERROR,{...i,message:String(i.error?.message||"Viewer action failed")})})}setViewerParts(){for(let[t,e]of[[".ft-content","timeline"],[".ft-details","inspector"],[".ft-toolbar","toolbar"],[".ft-footer","controls"]])this.mountPoint.querySelector(t)?.setAttribute("part",e)}destroyViewer(){this._viewer?.destroy(),this._viewer=null,this._settings=null,this._lastText=null}};export{P as a,ot as b};
