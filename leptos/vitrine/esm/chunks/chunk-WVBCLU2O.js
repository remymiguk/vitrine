/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{r as N}from"./chunk-37OSRZJK.js";import{O as x,X as L,_ as T,ba as U,c as F,e as A,o as d,q as R}from"./chunk-JAZI474S.js";import{h as E,k as v,l as y,m as C}from"./chunk-SCKP2KTO.js";var O=`/*
 * Dockerfiles: a summary, the problems, a card per build stage with its instructions and the
 * problems found on each, and the colored source. Problems are written in words; colors only
 * repeat them.
 */
.docker-body {
  display: grid;
  gap: var(--_space-3);
  padding: var(--_space-4);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.docker-muted {
  color: var(--_fg-muted);
}

.docker-summary {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-3);
}

.docker-verdict {
  display: inline-flex;
  align-items: center;
  gap: var(--_space-1);
  margin-inline-start: auto;
  font-weight: 600;
}

.docker-verdict svg,
.docker-finding svg {
  flex: none;
  width: 14px;
  height: 14px;
}

.docker-verdict.danger,
.docker-finding.danger svg {
  color: var(--_danger);
}

.docker-verdict.warning,
.docker-finding.warning svg {
  color: var(--_warning);
}

.docker-verdict.none,
.docker-verdict.info {
  color: var(--_success);
}

.docker-finding.info svg {
  color: var(--_info);
}

.docker-findings {
  display: grid;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.docker-finding {
  display: flex;
  align-items: flex-start;
  gap: var(--_space-2);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-small);
  overflow-wrap: anywhere;
  white-space: normal;
}

.docker-finding svg {
  margin-top: 2px;
}

.docker-finding.danger {
  font-weight: 600;
}

.docker-stage {
  display: grid;
  gap: var(--_space-2);
  min-width: 0;
  padding: var(--_space-3);
  border: 1px solid var(--_border);
  border-inline-start: 3px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
}

.docker-stage.final {
  border-inline-start-color: var(--_accent);
}

.docker-stage-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-1) var(--_space-2);
}

.docker-stage-head h3 {
  margin: 0;
  font-size: 1em;
}

.docker-stage-head code,
.docker-code,
.docker-heredoc,
.docker-source {
  font-family: var(--_font-mono);
}

.docker-image {
  font-weight: 600;
}

.docker-chip {
  padding: 0 var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-full);
  font-size: var(--_font-size-small);
}

.docker-chip.final {
  border-color: var(--_accent);
  font-weight: 600;
}

.docker-chip.warn {
  border-color: var(--_warning);
}

.docker-list {
  display: grid;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.docker-ins {
  display: grid;
  grid-template-columns: 3ch minmax(0, 1fr);
  gap: var(--_space-2);
  padding: 3px var(--_space-2);
  border-inline-start: 3px solid transparent;
  border-radius: var(--_radius-sm);
}

.docker-ins.danger {
  border-inline-start-color: var(--_danger);
  background: var(--_surface-sunken);
}

.docker-ins.warning {
  border-inline-start-color: var(--_warning);
  background: var(--_surface-sunken);
}

.docker-ins.info {
  border-inline-start-color: var(--_info);
}

.docker-line {
  color: var(--_fg-muted);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  text-align: end;
  user-select: none;
}

.docker-ins-body {
  display: grid;
  gap: 2px;
  min-width: 0;
}

.docker-code {
  font-size: var(--_font-size);
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.d-kw {
  color: var(--_syntax-keyword);
  font-weight: 700;
  cursor: help;
}

.d-kw.layer {
  text-decoration: underline dotted;
  text-underline-offset: 3px;
}

.d-flag {
  color: var(--_syntax-attr);
}

.d-var {
  color: var(--_syntax-number);
}

.d-str {
  color: var(--_syntax-string);
}

.d-comment {
  color: var(--_syntax-comment);
  font-style: italic;
}

.docker-heredoc {
  margin: 0;
  padding: var(--_space-1) var(--_space-2);
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
  color: var(--_code-fg);
  font-size: var(--_font-size-small);
  white-space: pre-wrap;
}

.docker-source {
  margin: 0;
  padding: var(--_space-2) var(--_space-3);
  overflow-x: auto;
  border-radius: var(--_radius-sm);
  background: var(--_code-bg);
  color: var(--_code-fg);
  font-size: var(--_font-size);
  line-height: var(--_line-height);
}

.docker-src-line .docker-line {
  display: inline-block;
  width: 4ch;
  margin-inline-end: var(--_space-2);
}

.docker-src-line.danger .docker-line {
  color: var(--_danger);
  font-weight: 700;
}

.docker-src-line.warning .docker-line {
  color: var(--_warning);
  font-weight: 700;
}

.docker-edit > .editor-body {
  max-height: min(40vh, 320px);
  border-bottom: 1px solid var(--_border);
}
`;var D=Object.freeze({dockerTabs:"Dockerfile views",dockerTabStages:"Stages ({count})",dockerTabSource:"Source",dockerEmpty:"No Dockerfile.",dockerStages:"{count} stages",dockerOneStage:"1 stage",dockerStage:"Stage {index}",dockerFinal:"final image",dockerFrom:"from {image}",dockerOnStage:"built on stage {name}",dockerCopiesFrom:"copies from {list}",dockerUser:"runs as {user}",dockerRoot:"runs as root",dockerPorts:"ports {list}",dockerPlatform:"platform {platform}",dockerArgs:"Build arguments: {list}",dockerInstructions:"{count} instructions",dockerLayers:"{count} layers",dockerLine:"line {line}",dockerProblems:"{count} problems",dockerProblem:"1 problem",dockerNoProblem:"No problem",dockerFindings:"Problems",dockerCopy:"Copy the Dockerfile",dockerKw_FROM:"Starts a stage from a base image.",dockerKw_RUN:"Runs a command while building: a new layer.",dockerKw_CMD:"The default command of the container.",dockerKw_LABEL:"Metadata of the image.",dockerKw_MAINTAINER:"Author of the image (deprecated: use a label).",dockerKw_EXPOSE:"Ports the container listens on (documentation only).",dockerKw_ENV:"Environment variables, kept in the image.",dockerKw_ADD:"Copies files, URLs or archives (unpacked) into the image: a new layer.",dockerKw_COPY:"Copies files into the image: a new layer.",dockerKw_ENTRYPOINT:"The program the container runs.",dockerKw_VOLUME:"A mount point for data.",dockerKw_USER:"The user the next instructions and the container run as.",dockerKw_WORKDIR:"The working directory of the next instructions.",dockerKw_ARG:"A build argument, not kept in the final environment.",dockerKw_ONBUILD:"An instruction run when another image is built from this one.",dockerKw_STOPSIGNAL:"The signal sent to stop the container.",dockerKw_HEALTHCHECK:"How to check that the container works.",dockerKw_SHELL:"The shell used by the shell form of the next instructions.",dockerFinding_unknown:"Unknown instruction: {text}",dockerFinding_beforeFrom:"{keyword} before the first FROM: only ARG is allowed there.",dockerFinding_noFrom:"No FROM instruction.",dockerFinding_duplicateStage:"Another stage is already named {name}.",dockerFinding_untagged:"{image} has no tag: it means latest, and the build changes when the image does.",dockerFinding_latest:"{image}: the latest tag changes without notice; pin a version (or a digest).",dockerFinding_variableImage:"The base image comes from a variable ({image}): check its default.",dockerFinding_unknownStage:"COPY --from={name}: no stage has that name, so it is read as an image.",dockerFinding_noUser:"The final image runs as root: add a USER with a non-root user.",dockerFinding_rootUser:"The last USER is root: the container runs as root.",dockerFinding_several:"Several {keyword} instructions: only the last one counts.",dockerFinding_noHealthcheck:"No HEALTHCHECK: the orchestrator cannot tell whether the service works.",dockerFinding_unusedStage:"Stage {name} is not used by the final image (BuildKit skips it).",dockerFinding_maintainer:"MAINTAINER is deprecated: use LABEL org.opencontainers.image.authors.",dockerFinding_ssh:"Port 22 is exposed: an SSH server in a container is rarely needed.",dockerFinding_relativeWorkdir:"WORKDIR {dir} is relative: use an absolute path.",dockerFinding_addUrl:"ADD downloads a URL without checking it: use curl with a checksum, or ADD --checksum.",dockerFinding_addCopy:"ADD where COPY does: ADD also unpacks archives and fetches URLs.",dockerFinding_copyAllFirst:"COPY . before installing dependencies: every code change reinstalls them. Copy the dependency files first.",dockerFinding_secret:"{keyword} {name} looks like a secret: it stays in the image history. Use a build secret (RUN --mount=type=secret).",dockerFinding_shellForm:"{keyword} in shell form: the program does not receive stop signals. Use the JSON form.",dockerFinding_sudo:"sudo in RUN: the build already runs as root, or use USER.",dockerFinding_cd:"cd in RUN: use WORKDIR, which also applies to the next instructions.",dockerFinding_pipeShell:"A script downloaded and piped to a shell runs without being checked.",dockerFinding_chmod777:"chmod 777 makes files writable by every user.",dockerFinding_upgrade:"Upgrading every package makes the build depend on the day: update the base image instead.",dockerFinding_aptRecommends:"apt-get install without --no-install-recommends adds packages you did not ask for.",dockerFinding_aptLists:"The apt lists stay in the layer: end with rm -rf /var/lib/apt/lists/*.",dockerFinding_aptYes:"apt-get install without -y waits for an answer and fails the build.",dockerFinding_aptUpdateAlone:"apt-get update alone in a RUN: its cached layer gets old. Join it to the install.",dockerFinding_apkCache:"apk add without --no-cache keeps the package index in the layer.",dockerFinding_pipCache:"pip install without --no-cache-dir keeps its cache in the layer.",dockerFinding_npmCi:"npm install with no package: npm ci installs the lockfile exactly.",dockerFinding_pipefail:"A pipe hides the failure of its first command: set -o pipefail (or SHELL with -o pipefail)."}),K={dockerTabs:"Vues du Dockerfile",dockerTabStages:"\xC9tapes ({count})",dockerTabSource:"Source",dockerEmpty:"Aucun Dockerfile.",dockerStages:"{count} \xE9tapes",dockerOneStage:"1 \xE9tape",dockerStage:"\xC9tape {index}",dockerFinal:"image finale",dockerFrom:"depuis {image}",dockerOnStage:"construite sur l\u2019\xE9tape {name}",dockerCopiesFrom:"copie depuis {list}",dockerUser:"tourne en {user}",dockerRoot:"tourne en root",dockerPorts:"ports {list}",dockerPlatform:"plateforme {platform}",dockerArgs:"Arguments de build : {list}",dockerInstructions:"{count} instructions",dockerLayers:"{count} couches",dockerLine:"ligne {line}",dockerProblems:"{count} probl\xE8mes",dockerProblem:"1 probl\xE8me",dockerNoProblem:"Aucun probl\xE8me",dockerFindings:"Probl\xE8mes",dockerCopy:"Copier le Dockerfile",dockerKw_FROM:"Commence une \xE9tape \xE0 partir d\u2019une image de base.",dockerKw_RUN:"Ex\xE9cute une commande pendant le build : une nouvelle couche.",dockerKw_CMD:"La commande par d\xE9faut du conteneur.",dockerKw_LABEL:"M\xE9tadonn\xE9es de l\u2019image.",dockerKw_MAINTAINER:"Auteur de l\u2019image (obsol\xE8te : utiliser un label).",dockerKw_EXPOSE:"Ports \xE9cout\xE9s par le conteneur (documentation seulement).",dockerKw_ENV:"Variables d\u2019environnement, gard\xE9es dans l\u2019image.",dockerKw_ADD:"Copie des fichiers, URL ou archives (d\xE9compress\xE9es) dans l\u2019image : une nouvelle couche.",dockerKw_COPY:"Copie des fichiers dans l\u2019image : une nouvelle couche.",dockerKw_ENTRYPOINT:"Le programme lanc\xE9 par le conteneur.",dockerKw_VOLUME:"Un point de montage pour les donn\xE9es.",dockerKw_USER:"L\u2019utilisateur des instructions suivantes et du conteneur.",dockerKw_WORKDIR:"Le r\xE9pertoire de travail des instructions suivantes.",dockerKw_ARG:"Un argument de build, absent de l\u2019environnement final.",dockerKw_ONBUILD:"Une instruction ex\xE9cut\xE9e quand une autre image est construite sur celle-ci.",dockerKw_STOPSIGNAL:"Le signal envoy\xE9 pour arr\xEAter le conteneur.",dockerKw_HEALTHCHECK:"Comment v\xE9rifier que le conteneur fonctionne.",dockerKw_SHELL:"Le shell de la forme shell des instructions suivantes.",dockerFinding_unknown:"Instruction inconnue : {text}",dockerFinding_beforeFrom:"{keyword} avant le premier FROM : seul ARG y est permis.",dockerFinding_noFrom:"Aucune instruction FROM.",dockerFinding_duplicateStage:"Une autre \xE9tape s\u2019appelle d\xE9j\xE0 {name}.",dockerFinding_untagged:"{image} n\u2019a pas de tag : c\u2019est latest, et le build change quand l\u2019image change.",dockerFinding_latest:"{image} : le tag latest change sans pr\xE9venir ; fixer une version (ou un digest).",dockerFinding_variableImage:"L\u2019image de base vient d\u2019une variable ({image}) : v\xE9rifier sa valeur par d\xE9faut.",dockerFinding_unknownStage:"COPY --from={name} : aucune \xE9tape ne porte ce nom, il est lu comme une image.",dockerFinding_noUser:"L\u2019image finale tourne en root : ajouter un USER non root.",dockerFinding_rootUser:"Le dernier USER est root : le conteneur tourne en root.",dockerFinding_several:"Plusieurs instructions {keyword} : seule la derni\xE8re compte.",dockerFinding_noHealthcheck:"Pas de HEALTHCHECK : l\u2019orchestrateur ne sait pas si le service fonctionne.",dockerFinding_unusedStage:"L\u2019\xE9tape {name} ne sert pas \xE0 l\u2019image finale (BuildKit la saute).",dockerFinding_maintainer:"MAINTAINER est obsol\xE8te : utiliser LABEL org.opencontainers.image.authors.",dockerFinding_ssh:"Le port 22 est expos\xE9 : un serveur SSH dans un conteneur est rarement utile.",dockerFinding_relativeWorkdir:"WORKDIR {dir} est relatif : utiliser un chemin absolu.",dockerFinding_addUrl:"ADD t\xE9l\xE9charge une URL sans la v\xE9rifier : utiliser curl avec une empreinte, ou ADD --checksum.",dockerFinding_addCopy:"ADD l\xE0 o\xF9 COPY suffit : ADD d\xE9compresse aussi les archives et t\xE9l\xE9charge les URL.",dockerFinding_copyAllFirst:"COPY . avant d\u2019installer les d\xE9pendances : chaque changement de code les r\xE9installe. Copier d\u2019abord les fichiers de d\xE9pendances.",dockerFinding_secret:"{keyword} {name} ressemble \xE0 un secret : il reste dans l\u2019historique de l\u2019image. Utiliser un secret de build (RUN --mount=type=secret).",dockerFinding_shellForm:"{keyword} en forme shell : le programme ne re\xE7oit pas les signaux d\u2019arr\xEAt. Utiliser la forme JSON.",dockerFinding_sudo:"sudo dans RUN : le build tourne d\xE9j\xE0 en root, ou utiliser USER.",dockerFinding_cd:"cd dans RUN : utiliser WORKDIR, qui vaut aussi pour les instructions suivantes.",dockerFinding_pipeShell:"Un script t\xE9l\xE9charg\xE9 et pass\xE9 \xE0 un shell s\u2019ex\xE9cute sans v\xE9rification.",dockerFinding_chmod777:"chmod 777 rend les fichiers modifiables par tous.",dockerFinding_upgrade:"Mettre \xE0 jour tous les paquets fait d\xE9pendre le build du jour : mettre \xE0 jour l\u2019image de base.",dockerFinding_aptRecommends:"apt-get install sans --no-install-recommends ajoute des paquets non demand\xE9s.",dockerFinding_aptLists:"Les listes apt restent dans la couche : finir par rm -rf /var/lib/apt/lists/*.",dockerFinding_aptYes:"apt-get install sans -y attend une r\xE9ponse et fait \xE9chouer le build.",dockerFinding_aptUpdateAlone:"apt-get update seul dans un RUN : sa couche en cache vieillit. Le joindre \xE0 l\u2019install.",dockerFinding_apkCache:"apk add sans --no-cache garde l\u2019index des paquets dans la couche.",dockerFinding_pipCache:"pip install sans --no-cache-dir garde son cache dans la couche.",dockerFinding_npmCi:"npm install sans paquet : npm ci installe exactement le lockfile.",dockerFinding_pipefail:"Un pipe cache l\u2019\xE9chec de sa premi\xE8re commande : set -o pipefail (ou SHELL avec -o pipefail)."};var H=new Set(["FROM","RUN","CMD","LABEL","MAINTAINER","EXPOSE","ENV","ADD","COPY","ENTRYPOINT","VOLUME","USER","WORKDIR","ARG","ONBUILD","STOPSIGNAL","HEALTHCHECK","SHELL"]);function M(u){let a=(u.length>524288?u.slice(0,524288):u).split(/\r?\n/),n="\\";for(let t of a){let s=/^#\s*escape\s*=\s*(\S)\s*$/i.exec(t);if(s&&(n=s[1]),!/^#\s*\w+\s*=/.test(t))break}let r=[],i=[];for(let t=0;t<a.length;t+=1){let s=a[t];if(!s.trim()||/^\s*#/.test(s))continue;let l=t,c=[s];for(;c.at(-1)?.trimEnd().endsWith(n)&&t+1<a.length;)t+=1,!/^\s*#/.test(a[t])&&c.push(a[t]);let g=c.map((k,h)=>h<c.length-1?k.trimEnd().slice(0,-1):k).join(" "),o=/^\s*([A-Za-z]+)(?:\s+([\s\S]*))?$/.exec(g);if(!o||!H.has(o[1].toUpperCase())){i.push({line:l+1,text:s.trim().slice(0,60)});continue}let p=o[1].toUpperCase(),m=(o[2]??"").trim(),f=[];for(let k of[...m.matchAll(/<<-?\s*["']?([A-Za-z_][A-Za-z0-9_]*)["']?/g)]){let h=k[1],_=[];for(;t+1<a.length&&a[t+1].trim()!==h;)_.push(a[++t]);t+1<a.length&&(t+=1),f.push(_.join(`
`)),c.push(..._,h)}let w=[];for(;/^--[a-z-]+(=\S*)?(\s|$)/.test(m);){let k=/^(--[a-z-]+(?:=(?:"[^"]*"|\S*))?)\s*/.exec(m);w.push(k[1]),m=m.slice(k[0].length)}r.push({keyword:p,args:m,raw:c.join(`
`),flags:w,line:l+1,lines:t-l+1,json:/^\[.*\]$/s.test(m),heredocs:f})}return{instructions:r,escape:n,unknown:i}}function b(u){if(/^\[.*\]$/s.test(u))try{let e=JSON.parse(u);if(Array.isArray(e))return e.map(String)}catch{}return u.match(/"[^"]*"|'[^']*'|\S+/g)?.map(e=>e.replace(/^["']|["']$/g,""))??[]}function V(u){let e=/@(sha256:[0-9a-f]{64})$/i.exec(u)?.[1]??"",a=e?u.slice(0,u.length-e.length-1):u,n=a.lastIndexOf("/"),r=a.lastIndexOf(":"),i=r>n?a.slice(r+1):"";return{name:r>n?a.slice(0,r):a,tag:i,digest:e,variable:/\$/.test(u)}}var j=/(?:PASSWORD|PASSWD|SECRET|TOKEN|API_?KEY|PRIVATE_?KEY|ACCESS_?KEY|CREDENTIALS?)\b/i;function I(u){let{instructions:e,escape:a,unknown:n}=M(u),r=[],i=(o,p,m,f={})=>r.push({id:o,level:p,line:m,params:f});for(let o of n)i("unknown","danger",o.line,{text:o.text});let t=[],s=[],l=null;for(let o of e){if(o.keyword==="FROM"){let p=b(o.args),m=p[0]??"",f=p[1]?.toUpperCase()==="AS"?p[2]??"":"",w=o.flags.find(h=>h.startsWith("--platform="))?.slice(11)??"",k=t.findIndex(h=>h.name&&h.name.toLowerCase()===m.toLowerCase());if(l={index:t.length,name:f,image:m,platform:w,instructions:[],from:[],user:"",ports:[],final:!1,parent:k,origin:o},k>=0&&(l.user=t[k].user),t.push(l),k<0&&m.toLowerCase()!=="scratch"){let h=V(m);h.variable?i("variableImage","info",o.line,{image:m}):!h.tag&&!h.digest?i("untagged","warning",o.line,{image:m}):h.tag==="latest"&&i("latest","warning",o.line,{image:m})}f&&t.slice(0,-1).some(h=>h.name.toLowerCase()===f.toLowerCase())&&i("duplicateStage","danger",o.line,{name:f});continue}if(!l){o.keyword==="ARG"?s.push(b(o.args)[0]?.split("=")[0]??""):i("beforeFrom","danger",o.line,{keyword:o.keyword});continue}l.instructions.push(o),Y(o,l,t,i)}!t.length&&e.length&&i("noFrom","danger",1);let c=t.at(-1);if(c){c.final=!0;let o=c.instructions.some(p=>p.keyword==="CMD"||p.keyword==="ENTRYPOINT");if(!c.user||/^(root|0)(:|$)/.test(c.user)){let p=[...c.instructions].reverse().find(m=>m.keyword==="USER")?.line;i(c.user?"rootUser":"noUser","warning",p??c.instructions.at(-1)?.line??1)}for(let p of["CMD","ENTRYPOINT"]){let m=c.instructions.filter(f=>f.keyword===p);m.length>1&&i("several","warning",m[1].line,{keyword:p})}o&&!c.instructions.some(p=>p.keyword==="HEALTHCHECK")&&c.image!=="scratch"&&i("noHealthcheck","info",c.instructions.at(-1)?.line??1)}let g=new Set(c?[c.index]:[]);for(let o=t.length-1;o>=0;o-=1){if(!g.has(o))continue;let p=t[o];p.parent>=0&&g.add(p.parent);for(let m of p.from){let f=t.findIndex(w=>w.name.toLowerCase()===m.toLowerCase()||String(w.index)===m);f>=0&&g.add(f)}}for(let o of t)g.has(o.index)||i("unusedStage","info",o.instructions[0]?.line??1,{name:o.name||String(o.index)});return r.sort((o,p)=>o.line-p.line),{instructions:e,stages:t,args:s,findings:r,escape:a}}function Y(u,e,a,n){let{keyword:r,args:i,line:t}=u,s=[i,...u.heredocs].join(`
`);if(r==="MAINTAINER"&&n("maintainer","info",t),r==="USER"&&(e.user=i.trim()),r==="EXPOSE")for(let l of i.split(/\s+/).filter(Boolean))e.ports.push(l),/^22(\/tcp)?$/.test(l)&&n("ssh","warning",t);if(r==="WORKDIR"&&!/^(\/|\$|[A-Za-z]:[\\/])/.test(i.trim())&&n("relativeWorkdir","warning",t,{dir:i.trim()}),r==="ADD"){let c=b(i).filter(g=>!g.startsWith("--")).slice(0,-1);c.some(g=>/^https?:\/\//i.test(g))?n("addUrl","warning",t):c.some(g=>/\.(tar|tar\.gz|tgz|tar\.bz2|tar\.xz|txz)$/i.test(g)||/^git@|\.git(#|$)/.test(g))||n("addCopy","warning",t)}if(r==="COPY"||r==="ADD"){let l=u.flags.find(g=>g.startsWith("--from="))?.slice(7);l&&(e.from.push(l),!(a.some(o=>o.name.toLowerCase()===l.toLowerCase())||/^\d+$/.test(l))&&!/[/:.]/.test(l)&&n("unknownStage","danger",t,{name:l}));let c=b(i);c.length>=2&&c[0]==="."&&!u.flags.some(g=>g.startsWith("--from="))&&e.instructions.slice(e.instructions.indexOf(u)+1).some(o=>o.keyword==="RUN"&&/\b(npm (ci|install)|yarn( install)?\b|pnpm install|pip3? install|poetry install|bundle install|go mod download|composer install|mvn |gradle )/.test(o.args))&&n("copyAllFirst","info",t)}if(r==="ENV"||r==="ARG"){let l=r==="ENV"&&!/=/.test(i)?[i.split(/\s+/)[0]]:(i.match(/(?:^|\s)([A-Za-z_][A-Za-z0-9_]*)(?==|\s|$)/g)??[]).map(c=>c.trim());for(let c of l)j.test(c)&&n("secret","danger",t,{keyword:r,name:c})}(r==="CMD"||r==="ENTRYPOINT")&&!u.json&&i.trim()&&n("shellForm","info",t,{keyword:r}),r==="RUN"&&(/\bsudo\b/.test(s)&&n("sudo","warning",t),/(^|[;&|]\s*)cd\s+\S/.test(s)&&!/&&\s*cd\s+-/.test(s)&&n("cd","info",t),/\b(curl|wget)\b[^|;&]*\|\s*(sudo\s+)?(ba|z|da)?sh\b/.test(s)&&n("pipeShell","warning",t),/\bchmod\s+(-R\s+)?0?777\b/.test(s)&&n("chmod777","warning",t),/\bapt-get\s+(-\S+\s+)*upgrade\b|\bapt-get\s+dist-upgrade\b/.test(s)&&n("upgrade","info",t),/\bapt-get\s+(-\S+\s+)*install\b/.test(s)&&(/--no-install-recommends/.test(s)||n("aptRecommends","info",t),!/rm\s+-[rf]+\s+\/var\/lib\/apt\/lists/.test(s)&&!u.flags.some(l=>/--mount=type=cache/.test(l))&&n("aptLists","warning",t),/\s-y\b|--yes|--assume-yes|-qq?y/.test(s)||n("aptYes","danger",t)),/\bapt-get\s+update\b/.test(s)&&!/\binstall\b/.test(s)&&n("aptUpdateAlone","warning",t),/\bapk\s+add\b/.test(s)&&!/--no-cache/.test(s)&&n("apkCache","info",t),/\bpip3?\s+install\b/.test(s)&&!/--no-cache-dir/.test(s)&&!u.flags.some(l=>/--mount=type=cache/.test(l))&&n("pipCache","info",t),/\bnpm\s+install\b/.test(s)&&!/\bnpm\s+install\s+(?:-g\b|--global\b|[^-\s&;|])/.test(s)&&n("npmCi","info",t),!u.json&&/[^|]\|[^|]/.test(s)&&!/pipefail/.test(s)&&n("pipefail","info",t))}function S(u){for(let e of["danger","warning","info"])if(u.some(a=>a.level===e))return e;return"none"}C({en:D,fr:K});var W=Object.freeze(["stages","source"]),P=new Set(["RUN","COPY","ADD"]),z=class extends U{static type="dockerfile";static componentAttributes=Object.freeze(["view","lint","explain","tabs"]);static presets={simple:{tabs:!0},full:{header:!0,dot:!0,copy:!0,fullscreen:!0,tabs:!0}};static styles=[O];static upgradeProperties=["content"];constructor(){super(),this.panelId=R("panel"),this.viewState=null,this.parsed=null,this.editor=null,this.previewTimer=void 0}get dockerfile(){let e=this.text??"";return this.parsed?.text!==e&&(this.parsed={text:e,file:I(e)}),this.parsed.file}get view(){return this.viewState??A(this.getAttribute("view"),W,"stages")}flag(e,a){return F(this.getAttribute(e))??a}renderContent(e){let a=this.t,n=this.dockerfile,r=this.feature("tabs")?L({tabs:[{id:"stages",label:a("dockerTabStages",{count:n.stages.length})},{id:"source",label:a("dockerTabSource")}],selected:this.view,label:a("dockerTabs"),panelId:this.panelId,onSelect:c=>this.selectView(c)}):null,i=d("div",{class:"body docker-body",part:"body"});if(!n.instructions.length)i.append(T(a("dockerEmpty")));else if(this.view==="source"&&r)i.append(this.sourceView(n));else{i.append(this.summaryView(n));let c=n.findings.filter(g=>!n.instructions.some(o=>o.line===g.line));this.flag("lint",!0)&&c.length&&i.append(this.findingsView(c,!0));for(let g of n.stages)i.append(this.stageView(g,n))}let t=d("div",{class:"panel",attrs:{id:this.panelId,role:r?"tabpanel":null}}),s=[];if(this.editing){let c=this.createEditor();t.classList.add("docker-edit"),t.append(d("div",{class:"body editor-body",part:"body editor"},c.element),i),s=this.historyButtons(c)}else t.append(i);let l=[...s,this.editToggleButton(),this.fullscreenButton(),this.feature("copy")&&this.text?this.copyButton(()=>this.text??"",a("dockerCopy")):null];e.append(...this.chrome({badge:"Dockerfile",tabs:r,actions:l}),t),this.editor?.align()}selectView(e){e!==this.view&&(this.viewState=e,this.render(),this.root.querySelector(`[data-tab="${e}"]`)?.focus(),y(this,v.TAB_CHANGE,{tab:e}))}summaryView(e){let a=this.t,n=S(e.findings.filter(s=>s.level!=="info")),r=e.findings.filter(s=>s.level==="danger"||s.level==="warning").length,i=e.stages.at(-1),t=i?this.chainOf(i,e).flatMap(s=>s.instructions).filter(s=>P.has(s.keyword)).length:0;return d("div",{class:"docker-summary",part:"summary"},d("strong",{text:e.stages.length===1?a("dockerOneStage"):a("dockerStages",{count:e.stages.length})}),d("span",{text:a("dockerInstructions",{count:e.instructions.length})}),i?d("span",{text:a("dockerLayers",{count:t})}):null,e.args.length?d("span",{class:"docker-muted",text:a("dockerArgs",{list:e.args.join(", ")})}):null,this.flag("lint",!0)?d("span",{class:`docker-verdict ${n}`},x(n==="none"?"check":"alert"),d("span",{text:r?r===1?a("dockerProblem"):a("dockerProblems",{count:r}):a("dockerNoProblem")})):null)}chainOf(e,a){let n=[e],r=e;for(;r.parent>=0&&n.length<50;)r=a.stages[r.parent],n.unshift(r);return n}findingsView(e,a=!1){let n=this.t;return d("ul",{class:"docker-findings",part:"findings",attrs:{"aria-label":n("dockerFindings")}},...e.map(r=>d("li",{class:`docker-finding ${r.level}`,attrs:{"data-finding":r.id}},x(r.level==="info"?"help":"alert"),d("span",{text:n(`dockerFinding_${r.id}`,r.params)}),a&&r.line?d("span",{class:"docker-muted",text:` ${n("dockerLine",{line:r.line})}`}):null)))}stageView(e,a){let n=this.t,r=e.parent>=0?a.stages[e.parent]:null,i=[e.final?d("span",{class:"docker-chip final",text:n("dockerFinal")}):null,r?d("span",{class:"docker-chip",text:n("dockerOnStage",{name:r.name||String(r.index)})}):null,e.from.length?d("span",{class:"docker-chip",text:n("dockerCopiesFrom",{list:[...new Set(e.from)].join(", ")})}):null,e.platform?d("span",{class:"docker-chip",text:n("dockerPlatform",{platform:e.platform})}):null,e.final?d("span",{class:`docker-chip ${!e.user||/^(root|0)(:|$)/.test(e.user)?"warn":""}`,text:e.user&&!/^(root|0)(:|$)/.test(e.user)?n("dockerUser",{user:e.user}):n("dockerRoot")}):null,e.ports.length?d("span",{class:"docker-chip",text:n("dockerPorts",{list:e.ports.join(", ")})}):null],t=[e.origin,...e.instructions];return d("section",{class:`docker-stage${e.final?" final":""}`,part:"stage",attrs:{"aria-label":e.name||n("dockerStage",{index:e.index+1}),"data-stage":e.name||String(e.index)}},d("header",{class:"docker-stage-head"},d("h3",{},d("span",{class:"docker-muted",text:`${n("dockerStage",{index:e.index+1})} `}),e.name?d("code",{text:e.name}):null),d("code",{class:"docker-image",text:n("dockerFrom",{image:e.image})}),...i),d("ol",{class:"docker-list"},...t.map(s=>this.instructionView(s,a))))}instructionView(e,a){let n=this.t,r=this.flag("lint",!0)?a.findings.filter(s=>s.line===e.line):[],i=this.flag("explain",!0)?n(`dockerKw_${e.keyword}`):"",t=[e.flags.join(" "),e.args].filter(Boolean).join(" ");return d("li",{class:`docker-ins ${S(r)}`,part:"instruction",attrs:{"data-line":e.line}},d("span",{class:"docker-line",text:String(e.line)}),d("div",{class:"docker-ins-body"},d("code",{class:"docker-code"},d("span",{class:`d-kw${P.has(e.keyword)?" layer":""}`,attrs:{title:i||null},text:e.keyword}),i?d("span",{class:"sr-only",text:` (${i})`}):null," ",d("span",{text:t.length>600?`${t.slice(0,600)} \u2026`:t})),...e.heredocs.map(s=>d("pre",{class:"docker-heredoc"},d("code",{text:s.slice(0,4e3)}))),r.length?this.findingsView(r):null))}sourceView(e){let a=(this.text??"").split(/\r?\n/).slice(0,1e4),n=new Set(e.instructions.map(i=>i.line)),r=new Map(e.findings.map(i=>[i.line,i.level]));return d("pre",{class:"docker-source",part:"source"},d("code",{},...a.map((i,t)=>{let s=t+1,l=d("span",{class:`docker-src-line ${r.get(s)??""}`},d("span",{class:"docker-line",attrs:{"aria-hidden":"true"},text:String(s)}));if(/^\s*#/.test(i))l.append(d("span",{class:"d-comment",text:i}));else{let c=n.has(s)?/^(\s*)([A-Za-z]+)(.*)$/.exec(i):null,g=c?c[3]:i;c&&l.append(c[1],d("span",{class:"d-kw",text:c[2]}));for(let o of g.split(/(--[a-z-]+(?:=\S*)?|\$\{?[A-Za-z_][A-Za-z0-9_]*\}?|"[^"]*")/)){if(!o)continue;let p=o.startsWith("--")?"d-flag":o.startsWith("$")?"d-var":o.startsWith('"')?"d-str":"";l.append(p?d("span",{class:p,text:o}):o)}}return l.append(`
`),l})))}createEditor(){return this.editor?.destroy(),this.editor=new N({text:this.text??"",language:"plaintext",lineNumbers:!0,wrap:!1,highlightLimit:E().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:e=>this.edited(e),onChange:e=>y(this,v.CHANGE,{value:e}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),300)}};export{z as a};
