/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
function r(t){if(t==null)return"";let n=String(t),e=typeof t!="number"&&/^[=+\-@\t\r]/.test(n)&&!/^-\d+(?:\.\d+)?$/.test(n)?`'${n}`:n;return/[",\n\r]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function s(t){return t.map(n=>n.map(r).join(",")).join(`
`)}export{s as a};
