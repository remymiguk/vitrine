/*! Vitrine v0.14.0 | MIT License | https://github.com/ecrou-exact/vitrine
 * Includes: highlight.js 11.12.0 (BSD-3-Clause), marked 18.1.3 (MIT), DOMPurify 3.4.17 (Apache-2.0 OR MPL-2.0), Lucide 1.52.0 (ISC; icons derived from Feather: MIT).
 * Full license texts: THIRD_PARTY_NOTICES.md */
import{r as Ct}from"./chunk-37OSRZJK.js";import{O as xt,W as q,Y as St,_ as At,ba as wt,c as vt,o as g,q as I}from"./chunk-JAZI474S.js";import{f as yt,h as Y,k as F,l as O,m as kt}from"./chunk-SCKP2KTO.js";var Nt=`/*
 * World map: menus and search, the SVG map with its base map colors, zoom buttons, the
 * tooltip and coordinates under the pointer, the legend of values and the list of items.
 * Each base map sets the same --map-* colors; item colors are set through CSSOM.
 */
.map-body {
  display: grid;
  gap: var(--_space-2);
  padding: var(--_space-3);
  background: var(--_surface);
  font-family: var(--_font-ui);
  font-size: var(--_font-size-ui);
}

.map-muted,
.map-status {
  margin: 0;
  color: var(--_fg-muted);
  font-size: var(--_font-size-small);
}

.map-status:empty {
  display: none;
}

/* ---- menus and search ---- */
.map-controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_space-2) var(--_space-3);
}

.map-search {
  display: flex;
  flex: 1 1 16em;
  min-width: 0;
}

.map-search-input,
.map-select {
  min-width: 0;
  padding: 4px var(--_space-2);
  border: 1px solid var(--_border-strong);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: inherit;
  font: inherit;
}

.map-search-input {
  flex: 1;
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}

.map-go {
  border: 1px solid var(--_border-strong);
  border-inline-start: 0;
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}

.map-control,
.map-check {
  display: flex;
  align-items: center;
  gap: var(--_space-1);
}

.map-control label {
  color: var(--_fg-muted);
}

.map-search-input:focus-visible,
.map-select:focus-visible,
.map-check input:focus-visible,
.map-item-go:focus-visible,
.map-svg:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

/* ---- the map ---- */
.map-stage {
  --map-ocean: color-mix(in oklab, var(--_accent) 10%, var(--_surface));
  --map-ocean-edge: color-mix(in oklab, var(--_accent) 18%, var(--_surface));
  --map-land: var(--_surface-sunken, color-mix(in oklab, var(--_fg) 8%, var(--_surface)));
  --map-border: var(--_border-strong);
  --map-graticule: color-mix(in oklab, var(--_fg) 12%, transparent);
  --map-highlight: var(--_accent);
  --map-low: color-mix(in oklab, var(--_accent) 18%, var(--_surface));
  --map-high: var(--_accent);
  --map-pin: var(--_danger);
  --map-route: var(--_accent);
  --map-label: var(--_fg);
  --map-halo: var(--_surface);
  --map-space: transparent;
  --map-atmosphere: color-mix(in oklab, var(--_accent) 35%, transparent);

  position: relative;
  overflow: hidden;
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--map-space);
  aspect-ratio: 16 / 9;
  min-height: 200px;
  touch-action: none;
}

.map-stage > .loading,
.map-stage > .notice {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
}

.map-svg {
  display: block;
  width: 100%;
  height: 100%;
  cursor: grab;
  user-select: none;
}

.map-svg.dragging {
  cursor: grabbing;
}

.map-sphere {
  stroke: var(--map-border);
  stroke-width: 0.5;
}

.ocean-a {
  stop-color: var(--map-ocean);
}

.ocean-b {
  stop-color: var(--map-ocean-edge);
}

.map-atmosphere {
  fill: var(--map-atmosphere);
  transform-box: fill-box;
  transform-origin: center;
  scale: 1.04;
}

.map-shading {
  pointer-events: none;
}

.shade-a {
  stop-color: #fff;
  stop-opacity: 0.18;
}

.shade-b {
  stop-color: #000;
  stop-opacity: 0;
}

.shade-c {
  stop-color: #000;
  stop-opacity: 0.35;
}

.map-graticule {
  fill: none;
  stroke: var(--map-graticule);
  stroke-width: 0.6;
  pointer-events: none;
}

.map-country {
  fill: var(--map-land);
  stroke: none;
  transition: fill var(--_duration-fast, 0.12s);
}

.map-stage[data-basemap] .map-country.highlighted {
  fill: var(--map-highlight);
}

.map-country.hover {
  filter: brightness(0.9);
}

.map-country.selected {
  stroke: var(--_fg);
  stroke-width: 1.6;
  paint-order: stroke;
}

.map-borders {
  fill: none;
  stroke: var(--map-border);
  stroke-width: 0.5;
  stroke-linejoin: round;
  pointer-events: none;
}

.map-shape {
  --map-item: var(--map-route);
  stroke: var(--map-item);
  stroke-width: 1.8;
  stroke-linejoin: round;
}

.map-shape.area {
  fill: color-mix(in oklab, var(--map-item) 30%, transparent);
}

.map-shape.line {
  fill: none;
}

.map-route {
  --map-item: var(--map-route);
  fill: none;
  stroke: var(--map-item);
  stroke-width: 2.2;
  stroke-dasharray: 7 4;
  stroke-linecap: round;
  pointer-events: none;
}

.map-pin {
  --map-item: var(--map-pin);
  cursor: pointer;
}

.map-pin.dropped {
  --map-item: var(--_fg);
}

.map-pin-shape {
  fill: var(--map-item);
  stroke: var(--map-halo);
  stroke-width: 1.5;
}

.map-pin-dot {
  fill: var(--map-halo);
}

.map-label,
.map-country-label {
  fill: var(--map-label);
  stroke: var(--map-halo);
  stroke-width: 3px;
  paint-order: stroke;
  font-family: var(--_font-ui);
  font-size: 13px;
  font-weight: 600;
  pointer-events: none;
}

.map-country-label {
  font-size: 11px;
  font-weight: 500;
}

.map-stars circle {
  fill: #fff;
}

.map-zoom {
  position: absolute;
  inset-block-start: var(--_space-2);
  inset-inline-end: var(--_space-2);
  display: grid;
  gap: 2px;
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  box-shadow: 0 1px 4px rgb(0 0 0 / 0.2);
}

.map-tooltip {
  position: absolute;
  z-index: 1;
  max-width: 16em;
  padding: 2px var(--_space-2);
  border: 1px solid var(--_border);
  border-radius: var(--_radius-sm);
  background: var(--_surface);
  color: var(--_fg);
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.2);
  pointer-events: none;
  white-space: nowrap;
}

.map-tooltip[hidden] {
  display: none;
}

.map-readout {
  position: absolute;
  inset-block-end: var(--_space-1);
  inset-inline-start: var(--_space-2);
  padding: 0 var(--_space-1);
  border-radius: var(--_radius-sm);
  background: color-mix(in oklab, var(--_surface) 80%, transparent);
  color: var(--_fg);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  pointer-events: none;
}

.map-readout:empty {
  display: none;
}

/* ---- base maps ---- */
.map-stage[data-basemap='dark'] {
  --map-ocean: #0f1b2b;
  --map-ocean-edge: #0a1320;
  --map-land: #2a3442;
  --map-border: #475569;
  --map-graticule: rgb(255 255 255 / 0.08);
  --map-highlight: #38bdf8;
  --map-low: #1e3a5f;
  --map-high: #38bdf8;
  --map-pin: #f43f5e;
  --map-route: #fbbf24;
  --map-label: #f1f5f9;
  --map-halo: #0f172a;
  --map-space: #0b1220;
}

.map-stage[data-basemap='political'] {
  --map-ocean: #cfe8f7;
  --map-ocean-edge: #b4d8ef;
  --map-border: #ffffff;
  --map-graticule: rgb(30 64 120 / 0.12);
  --map-highlight: #dc2626;
  --map-low: #fde68a;
  --map-high: #b91c1c;
  --map-pin: #111827;
  --map-route: #111827;
  --map-label: #111827;
  --map-halo: #ffffff;
}

.map-stage[data-basemap='political'] .c0 {
  fill: #f4c7a1;
}
.map-stage[data-basemap='political'] .c1 {
  fill: #c9e4a7;
}
.map-stage[data-basemap='political'] .c2 {
  fill: #f7e3a1;
}
.map-stage[data-basemap='political'] .c3 {
  fill: #d7c4ec;
}
.map-stage[data-basemap='political'] .c4 {
  fill: #f3b7c2;
}
.map-stage[data-basemap='political'] .c5 {
  fill: #b8dcd4;
}
.map-stage[data-basemap='political'] .c6 {
  fill: #e9d1b5;
}
.map-stage[data-basemap='political'] .c7 {
  fill: #c5d3ee;
}

.map-stage[data-basemap='satellite'] {
  --map-ocean: #1d4f80;
  --map-ocean-edge: #0c2748;
  --map-border: rgb(255 255 255 / 0.25);
  --map-graticule: rgb(255 255 255 / 0.1);
  --map-highlight: #facc15;
  --map-low: #fef08a;
  --map-high: #dc2626;
  --map-pin: #f43f5e;
  --map-route: #fde047;
  --map-label: #ffffff;
  --map-halo: #0b1a2c;
  --map-space: #050a14;
  --map-atmosphere: rgb(125 200 255 / 0.55);
}

.map-stage[data-basemap='satellite'] .ice {
  fill: #eef3f6;
}
.map-stage[data-basemap='satellite'] .tundra {
  fill: #7d8a6a;
}
.map-stage[data-basemap='satellite'] .forest {
  fill: #3f6b3a;
}
.map-stage[data-basemap='satellite'] .steppe {
  fill: #8f9256;
}
.map-stage[data-basemap='satellite'] .desert {
  fill: #c9a86a;
}
.map-stage[data-basemap='satellite'] .tropic {
  fill: #2f6d34;
}

.map-stage[data-basemap='night'] {
  --map-ocean: #030712;
  --map-ocean-edge: #020409;
  --map-land: #0b1324;
  --map-border: #22d3ee;
  --map-graticule: rgb(34 211 238 / 0.12);
  --map-highlight: #0e7490;
  --map-low: #083344;
  --map-high: #22d3ee;
  --map-pin: #f0abfc;
  --map-route: #f0abfc;
  --map-label: #e0f2fe;
  --map-halo: #020617;
  --map-space: #000000;
  --map-atmosphere: rgb(34 211 238 / 0.35);
}

.map-stage[data-basemap='blueprint'] {
  --map-ocean: #1e3a8a;
  --map-ocean-edge: #1e3a8a;
  --map-land: #2747a3;
  --map-border: #dbeafe;
  --map-graticule: rgb(219 234 254 / 0.25);
  --map-highlight: #60a5fa;
  --map-low: #3b5fc0;
  --map-high: #bfdbfe;
  --map-pin: #fde047;
  --map-route: #fde047;
  --map-label: #eff6ff;
  --map-halo: #1e3a8a;
  --map-space: #1e3a8a;
}

.map-stage[data-basemap='vintage'] {
  --map-ocean: #d9cfae;
  --map-ocean-edge: #c7b98f;
  --map-land: #efe4c4;
  --map-border: #8b6f47;
  --map-graticule: rgb(110 80 40 / 0.22);
  --map-highlight: #b45309;
  --map-low: #f5d9a8;
  --map-high: #9a3412;
  --map-pin: #7f1d1d;
  --map-route: #7f1d1d;
  --map-label: #3f2d14;
  --map-halo: #efe4c4;
  --map-space: #e8dcb8;
}

.map-stage[data-basemap='mono'] {
  --map-ocean: var(--_surface);
  --map-ocean-edge: var(--_surface);
  --map-land: color-mix(in oklab, var(--_fg) 14%, var(--_surface));
  --map-border: var(--_surface);
  --map-highlight: var(--_fg);
  --map-low: color-mix(in oklab, var(--_fg) 20%, var(--_surface));
  --map-high: var(--_fg);
  --map-pin: var(--_fg);
  --map-route: var(--_fg);
}

/* ---- legend and list ---- */
.map-legend {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  font-size: var(--_font-size-small);
}

.map-legend-bar {
  flex: 0 1 14em;
  height: 10px;
  border-radius: var(--_radius-full);
  background: linear-gradient(
    to right,
    var(--map-low, var(--_accent-soft)),
    var(--map-high, var(--_accent))
  );
}

.map-legend-host:empty,
.map-list-host:empty {
  display: none;
}

.map-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  gap: 2px var(--_space-3);
  margin: 0;
  padding: 0;
  list-style: none;
}

.map-item {
  display: flex;
  align-items: center;
  gap: var(--_space-2);
  min-width: 0;
}

.map-item.pending {
  color: var(--_fg-muted);
}

.map-swatch {
  --map-item: var(--_danger);
  flex: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--map-item);
}

.map-swatch.country {
  --map-item: var(--_accent);
  border-radius: 2px;
}

.map-swatch.route,
.map-swatch.shape {
  --map-item: var(--_accent);
  height: 3px;
  border-radius: 0;
}

.map-swatch.pin {
  --map-item: var(--_fg);
}

.map-item-go,
.map-item-name {
  overflow: hidden;
  min-width: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.map-item-go {
  padding: 2px 0;
  border: 0;
  background: none;
  color: var(--_accent-fg);
  font: inherit;
  text-align: start;
  cursor: pointer;
}

.map-item-go:hover {
  text-decoration: underline;
}

.map-item-note {
  margin-inline-start: auto;
  color: var(--_fg-muted);
  font-family: var(--_font-mono);
  font-size: var(--_font-size-small);
  white-space: nowrap;
}

.map-edit {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
}

@media (max-width: 640px) {
  .map-edit {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .map-country {
    transition: none;
  }
}

/* ---- film sequence: a surveillance screen over the map ---- */
.map-stage.movie .map-zoom,
.map-stage.movie .map-readout,
.map-stage.movie .map-tooltip,
.map-stage.movie .map-labels {
  display: none;
}

.map-stage.movie .map-svg {
  filter: saturate(0.75) contrast(1.15);
  pointer-events: none;
}

.map-hud {
  --hud: #5eead4;
  --hud-alert: #ff2d2d;
  position: absolute;
  inset: 0;
  z-index: 2;
  overflow: hidden;
  color: var(--hud);
  font-family: var(--_font-mono);
  font-size: clamp(10px, 1.4vw, 13px);
  letter-spacing: 0.08em;
  text-shadow: 0 0 6px color-mix(in oklab, var(--hud) 60%, transparent);
  background: radial-gradient(ellipse at center, transparent 55%, rgb(0 0 0 / 0.55) 100%);
  pointer-events: none;
}

.hud-scan {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    rgb(255 255 255 / 0.05) 0 1px,
    transparent 1px 3px
  );
  mix-blend-mode: overlay;
}

.hud-scan::after {
  content: '';
  position: absolute;
  inset-inline: 0;
  height: 18%;
  background: linear-gradient(
    to bottom,
    transparent,
    color-mix(in oklab, var(--hud) 14%, transparent),
    transparent
  );
  animation: hud-sweep 3s linear infinite;
}

.hud-corners {
  position: absolute;
  inset: 12px;
  background:
    linear-gradient(var(--hud), var(--hud)) top left / 28px 2px,
    linear-gradient(var(--hud), var(--hud)) top left / 2px 28px,
    linear-gradient(var(--hud), var(--hud)) top right / 28px 2px,
    linear-gradient(var(--hud), var(--hud)) top right / 2px 28px,
    linear-gradient(var(--hud), var(--hud)) bottom left / 28px 2px,
    linear-gradient(var(--hud), var(--hud)) bottom left / 2px 28px,
    linear-gradient(var(--hud), var(--hud)) bottom right / 28px 2px,
    linear-gradient(var(--hud), var(--hud)) bottom right / 2px 28px;
  background-repeat: no-repeat;
  opacity: 0.8;
}

.hud-reticle {
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  width: 26%;
  aspect-ratio: 1;
  translate: -50% -50%;
}

.hud-reticle::before,
.hud-reticle::after {
  content: '';
  position: absolute;
  background: var(--hud);
  opacity: 0.7;
}

.hud-reticle::before {
  inset-block: -30% -30%;
  inset-inline-start: 50%;
  width: 1px;
}

.hud-reticle::after {
  inset-inline: -30% -30%;
  inset-block-start: 50%;
  height: 1px;
}

.hud-ring {
  position: absolute;
  inset: 0;
  border: 1px dashed var(--hud);
  border-radius: 50%;
  animation: hud-spin 8s linear infinite;
}

.hud-box {
  position: absolute;
  inset: 34%;
  border: 2px solid var(--hud);
  transition:
    inset 0.6s var(--_easing, ease),
    border-color 0.3s;
}

.hud-top {
  position: absolute;
  inset-block-start: 22px;
  inset-inline: 28px;
  display: flex;
  justify-content: space-between;
  gap: 1em;
}

.hud-rec {
  color: var(--hud-alert);
  text-shadow: 0 0 6px var(--hud-alert);
  animation: hud-blink 1s steps(2, start) infinite;
}

.hud-rec::before {
  content: '\u25CF ';
}

.hud-log {
  position: absolute;
  inset-block-end: 26px;
  inset-inline-start: 28px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.hud-log li:last-child::after {
  content: '\u258C';
  animation: hud-blink 0.8s steps(2, start) infinite;
}

.hud-coords {
  position: absolute;
  inset-block-end: 26px;
  inset-inline-end: 28px;
  font-size: 1.15em;
  font-variant-numeric: tabular-nums;
}

.hud-locked {
  position: absolute;
  inset-block-start: 50%;
  inset-inline: 0;
  translate: 0 -260%;
  text-align: center;
  opacity: 0;
}

.hud-locked strong {
  display: inline-block;
  padding: 0.3em 0.9em;
  border: 2px solid var(--hud-alert);
  background: rgb(60 0 0 / 0.55);
  color: var(--hud-alert);
  font-size: clamp(16px, 3.4vw, 34px);
  font-weight: 800;
  letter-spacing: 0.25em;
  text-shadow: 0 0 12px var(--hud-alert);
  box-shadow:
    0 0 24px rgb(255 45 45 / 0.45),
    inset 0 0 18px rgb(255 45 45 / 0.35);
}

.map-hud.locked .hud-locked {
  opacity: 1;
  animation:
    hud-lock 0.9s ease-out both,
    hud-pulse 1.2s ease-in-out 0.9s infinite;
}

.map-hud.locked .hud-box {
  inset: 42%;
  border-color: var(--hud-alert);
  box-shadow: 0 0 14px var(--hud-alert);
}

.map-hud.locked .hud-coords,
.map-hud.locked .hud-log li:last-child {
  color: var(--hud-alert);
  text-shadow: 0 0 8px var(--hud-alert);
}

.hud-stop {
  position: absolute;
  inset-block-start: 48px;
  inset-inline-end: 28px;
  padding: 2px 10px;
  border: 1px solid var(--hud);
  border-radius: 2px;
  background: rgb(0 0 0 / 0.5);
  color: var(--hud);
  font: inherit;
  letter-spacing: inherit;
  text-transform: uppercase;
  cursor: pointer;
  pointer-events: auto;
}

.hud-stop:focus-visible {
  outline: 2px solid var(--hud);
  outline-offset: 2px;
}

@keyframes hud-sweep {
  from {
    translate: 0 -100%;
  }
  to {
    translate: 0 600%;
  }
}

@keyframes hud-pulse {
  50% {
    opacity: 0.55;
  }
}

@keyframes hud-spin {
  to {
    rotate: 360deg;
  }
}

@keyframes hud-blink {
  to {
    visibility: hidden;
  }
}

@keyframes hud-lock {
  from {
    opacity: 0;
    scale: 1.8;
    filter: blur(6px);
  }
  to {
    opacity: 1;
    scale: 1;
    filter: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hud-scan::after,
  .hud-ring,
  .hud-rec,
  .hud-log li:last-child::after,
  .map-hud.locked .hud-locked {
    animation: none;
  }
}
`;var Lt=Object.freeze({mapRole:"map",mapSummary:"World map, {projection} projection: {places} places, {countries} countries highlighted, {routes} routes.",mapKeyboardHelp:"Drag or use the arrow keys to move, the wheel or + and - to zoom, 0 to reset. The list under the map gives every item.",mapProjection:"Projection","mapProjection_natural-earth":"Natural Earth","mapProjection_equal-earth":"Equal Earth",mapProjection_mercator:"Mercator",mapProjection_equirectangular:"Equirectangular",mapProjection_globe:"Globe (3D)","mapProjection_azimuthal-equal-area":"Azimuthal equal-area","mapProjection_azimuthal-equidistant":"Azimuthal equidistant",mapProjection_stereographic:"Stereographic",mapProjection_gnomonic:"Gnomonic","mapProjection_transverse-mercator":"Transverse Mercator","mapProjection_conic-equal-area":"Conic equal-area","mapProjection_conic-conformal":"Conic conformal",mapBasemap:"Map style",mapBasemap_light:"Light",mapBasemap_dark:"Dark",mapBasemap_political:"Political",mapBasemap_satellite:"Seen from the sky",mapBasemap_night:"Night",mapBasemap_blueprint:"Blueprint",mapBasemap_vintage:"Vintage",mapBasemap_mono:"Monochrome",mapGraticule:"Grid",mapSearch:"Find a place",mapSearchPlaceholder:"Coordinates, city, country or address",mapZoomIn:"Zoom in",mapZoomOut:"Zoom out",mapReset:"Reset the view",mapPlaces:"{count} places",mapCopyPlaces:"Copy the places",mapLegend:"Color scale",mapList:"Places, countries and routes",mapKind_marker:"Place",mapKind_country:"Country",mapKind_route:"Route",mapKind_shape:"Shape",mapKind_pin:"Pin",mapShow:"Show {label} on the map",mapShape:"Shape",mapDistance:"{km} km",mapLocating:"Locating\u2026",mapNeedsGeocoder:"Address: needs a geocoder",mapNoGeocoder:"\u201C{query}\u201D is an address: this map has no geocoder (geocoder attribute).",mapGeocoding:"Looking for \u201C{query}\u201D\u2026",mapNotFound:"Nothing found for \u201C{query}\u201D.",mapFound:"{label}: {coords}",mapFoundCountry:"{name}",mapSelectedPoint:"{label} selected, {coords}",mapSelectedCountry:"{name} selected",mapInvalidLines:"Lines not understood: {list}",mapLoadFailed:"The map could not be loaded: {message}",mapTrack:"Track the target",mapTracking:"Tracking {label}\u2026",mapTargetLocated:"Target located: {label}, {coords}",mapStop:"Stop"}),Mt={mapRole:"carte",mapSummary:"Carte du monde, projection {projection} : {places} lieux, {countries} pays mis en avant, {routes} trajets.",mapKeyboardHelp:"Glissez ou utilisez les fl\xE8ches pour vous d\xE9placer, la molette ou + et - pour zoomer, 0 pour revenir au d\xE9part. La liste sous la carte donne chaque \xE9l\xE9ment.",mapProjection:"Projection",mapProjection_globe:"Globe (3D)",mapProjection_equirectangular:"\xC9quirectangulaire","mapProjection_azimuthal-equal-area":"Azimutale \xE9quivalente","mapProjection_azimuthal-equidistant":"Azimutale \xE9quidistante",mapProjection_stereographic:"St\xE9r\xE9ographique",mapProjection_gnomonic:"Gnomonique","mapProjection_transverse-mercator":"Mercator transverse","mapProjection_conic-equal-area":"Conique \xE9quivalente","mapProjection_conic-conformal":"Conique conforme",mapBasemap:"Style",mapBasemap_light:"Clair",mapBasemap_dark:"Sombre",mapBasemap_political:"Politique",mapBasemap_satellite:"Vue du ciel",mapBasemap_night:"Nuit",mapBasemap_blueprint:"Plan",mapBasemap_vintage:"Ancien",mapBasemap_mono:"Monochrome",mapGraticule:"Grille",mapSearch:"Trouver un lieu",mapSearchPlaceholder:"Coordonn\xE9es, ville, pays ou adresse",mapZoomIn:"Zoomer",mapZoomOut:"D\xE9zoomer",mapReset:"Revenir \xE0 la vue de d\xE9part",mapPlaces:"{count} lieux",mapCopyPlaces:"Copier les lieux",mapLegend:"\xC9chelle de couleurs",mapList:"Lieux, pays et trajets",mapKind_marker:"Lieu",mapKind_country:"Pays",mapKind_route:"Trajet",mapKind_shape:"Forme",mapKind_pin:"Rep\xE8re",mapShow:"Montrer {label} sur la carte",mapShape:"Forme",mapDistance:"{km} km",mapLocating:"Recherche\u2026",mapNeedsGeocoder:"Adresse : il faut un g\xE9ocodeur",mapNoGeocoder:"\xAB {query} \xBB est une adresse : cette carte n\u2019a pas de g\xE9ocodeur (attribut geocoder).",mapGeocoding:"Recherche de \xAB {query} \xBB\u2026",mapNotFound:"Rien trouv\xE9 pour \xAB {query} \xBB.",mapSelectedPoint:"{label} s\xE9lectionn\xE9, {coords}",mapSelectedCountry:"{name} s\xE9lectionn\xE9",mapInvalidLines:"Lignes non comprises : {list}",mapLoadFailed:"La carte n\u2019a pas pu \xEAtre charg\xE9e : {message}",mapTrack:"Traquer la cible",mapTracking:"Traque de {label}\u2026",mapTargetLocated:"Cible localis\xE9e : {label}, {coords}",mapStop:"Arr\xEAter"};var Yt="004AFAFG 008ALALB 010AQATA 012DZDZA 024AOAGO 031AZAZE 032ARARG 036AUAUS 040ATAUT 044BSBHS 050BDBGD 051AMARM 056BEBEL 064BTBTN 068BOBOL 070BABIH 072BWBWA 076BRBRA 084BZBLZ 090SBSLB 096BNBRN 100BGBGR 104MMMMR 108BIBDI 112BYBLR 116KHKHM 120CMCMR 124CACAN 140CFCAF 144LKLKA 148TDTCD 152CLCHL 156CNCHN 158TWTWN 170COCOL 178CGCOG 180CDCOD 188CRCRI 191HRHRV 192CUCUB 196CYCYP 203CZCZE 204BJBEN 208DKDNK 214DODOM 218ECECU 222SVSLV 226GQGNQ 231ETETH 232ERERI 233EEEST 238FKFLK 242FJFJI 246FIFIN 250FRFRA 260TFATF 262DJDJI 266GAGAB 268GEGEO 270GMGMB 275PSPSE 276DEDEU 288GHGHA 300GRGRC 304GLGRL 320GTGTM 324GNGIN 328GYGUY 332HTHTI 340HNHND 348HUHUN 352ISISL 356ININD 360IDIDN 364IRIRN 368IQIRQ 372IEIRL 376ILISR 380ITITA 384CICIV 388JMJAM 392JPJPN 398KZKAZ 400JOJOR 404KEKEN 408KPPRK 410KRKOR 414KWKWT 417KGKGZ 418LALAO 422LBLBN 426LSLSO 428LVLVA 430LRLBR 434LYLBY 440LTLTU 442LULUX 450MGMDG 454MWMWI 458MYMYS 466MLMLI 478MRMRT 484MXMEX 496MNMNG 498MDMDA 499MEMNE 504MAMAR 508MZMOZ 512OMOMN 516NANAM 524NPNPL 528NLNLD 540NCNCL 548VUVUT 554NZNZL 558NINIC 562NENER 566NGNGA 578NONOR 586PKPAK 591PAPAN 598PGPNG 600PYPRY 604PEPER 608PHPHL 616PLPOL 620PTPRT 624GWGNB 626TLTLS 630PRPRI 634QAQAT 642ROROU 643RURUS 646RWRWA 682SASAU 686SNSEN 688RSSRB 694SLSLE 703SKSVK 704VNVNM 705SISVN 706SOSOM 710ZAZAF 716ZWZWE 724ESESP 728SSSSD 729SDSDN 732EHESH 740SRSUR 748SZSWZ 752SESWE 756CHCHE 760SYSYR 762TJTJK 764THTHA 768TGTGO 780TTTTO 784AEARE 788TNTUN 792TRTUR 795TMTKM 800UGUGA 804UAUKR 807MKMKD 818EGEGY 826GBGBR 834TZTZA 840USUSA 854BFBFA 858UYURY 860UZUZB 862VEVEN 887YEYEM 894ZMZMB",Bt=Object.freeze({Kosovo:["XK","XKX"],"N. Cyprus":["","CYN"],Somaliland:["","SOL"]}),H=new Map,T=new Map;for(let n of Yt.split(" ")){let t={numeric:n.slice(0,3),a2:n.slice(3,5),a3:n.slice(5,8)};H.set(t.numeric,t),T.set(t.a2,t),T.set(t.a3,t)}for(let[n,[t,e]]of Object.entries(Bt)){let a={numeric:n,a2:t,a3:e};H.set(n,a),t&&T.set(t,a),T.set(e,a)}var Jt=Object.freeze({usa:"US","united states of america":"US",america:"US","etats-unis":"US","etats unis":"US",uk:"GB","great britain":"GB",britain:"GB",england:"GB",scotland:"GB",wales:"GB",angleterre:"GB","grande-bretagne":"GB","royaume uni":"GB",holland:"NL","czech republic":"CZ","republique tcheque":"CZ","ivory coast":"CI","cote divoire":"CI",drc:"CD","dr congo":"CD","congo-kinshasa":"CD","congo kinshasa":"CD","congo-brazzaville":"CG",burma:"MM",swaziland:"SZ",eswatini:"SZ",macedonia:"MK","north macedonia":"MK","south korea":"KR","north korea":"KP","coree du sud":"KR","coree du nord":"KP",russia:"RU","russian federation":"RU","east timor":"TL","cape verde":"CV",vatican:"VA",persia:"IR","western sahara":"EH","w. sahara":"EH",bosnia:"BA","bosnia and herzegovina":"BA",turkiye:"TR","the netherlands":"NL","the bahamas":"BS"});function U(n){return n.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/[’'`.]/g,"").replace(/[\s_]+/g," ").trim()}var Et=new Map;function Pt(n){let t=n.split("-")[0]||"en",e=Et.get(t);if(e)return e;let a=new Map(Object.entries(Jt));for(let i of new Set(["en","fr",t])){let r=Tt(i);if(r)for(let{a2:o}of T.values()){if(!o)continue;let s=r.of(o);s&&s!==o&&a.set(U(s),o)}}return Et.set(t,a),a}var J=new Map;function Tt(n){if(!J.has(n))try{J.set(n,new Intl.DisplayNames([n],{type:"region"}))}catch{J.set(n,null)}return J.get(n)??null}function Q(n,t=""){return H.get(n??t)??H.get(t)??{numeric:n??t,a2:"",a3:""}}function R(n,t="en"){let e=n.trim();if(!e)return null;if(/^[A-Za-z]{2,3}$/.test(e)&&T.has(e.toUpperCase())&&(e===e.toUpperCase()||!Pt(t).has(U(e))))return T.get(e.toUpperCase())??null;if(/^\d{3}$/.test(e))return H.get(e)??null;let a=U(e),i=Pt(t).get(a);if(i)return T.get(i)??null;for(let[r,o]of Object.entries(Bt))if(U(r)===a)return T.get(o[1])??null;return null}function L(n,t,e=""){if(!n.a2)return e||n.a3;let a=Tt(t)?.of(n.a2);return a&&a!==n.a2?a:e||n.a2}function it(n){return/^[A-Z]{2}$/.test(n)?String.fromCodePoint(...[...n].map(t=>127462+t.charCodeAt(0)-65)):""}var Qt=`Paris|FR|48.8566|2.3522
Lyon|FR|45.764|4.8357
Marseille|FR|43.2965|5.3698
Toulouse|FR|43.6047|1.4442
Bordeaux|FR|44.8378|-0.5792
Lille|FR|50.6292|3.0573
Nice|FR|43.7102|7.262
Strasbourg|FR|48.5734|7.7521
Nantes|FR|47.2184|-1.5536
London,Londres|GB|51.5072|-0.1276
Manchester|GB|53.4808|-2.2426
Edinburgh,\xC9dimbourg|GB|55.9533|-3.1883
Dublin|IE|53.3498|-6.2603
Brussels,Bruxelles|BE|50.8503|4.3517
Luxembourg|LU|49.6116|6.1319
Amsterdam|NL|52.3676|4.9041
Rotterdam|NL|51.9244|4.4777
The Hague,La Haye|NL|52.0705|4.3007
Berlin|DE|52.52|13.405
Munich,M\xFCnchen|DE|48.1351|11.582
Frankfurt,Francfort|DE|50.1109|8.6821
Hamburg,Hambourg|DE|53.5511|9.9937
Cologne,K\xF6ln|DE|50.9375|6.9603
Zurich,Z\xFCrich|CH|47.3769|8.5417
Geneva,Gen\xE8ve|CH|46.2044|6.1432
Bern,Berne|CH|46.948|7.4474
Vienna,Vienne,Wien|AT|48.2082|16.3738
Prague,Praha|CZ|50.0755|14.4378
Warsaw,Varsovie,Warszawa|PL|52.2297|21.0122
Budapest|HU|47.4979|19.0402
Bratislava|SK|48.1486|17.1077
Ljubljana|SI|46.0569|14.5058
Zagreb|HR|45.815|15.9819
Belgrade,Beograd|RS|44.7866|20.4489
Bucharest,Bucarest|RO|44.4268|26.1025
Sofia|BG|42.6977|23.3219
Athens,Ath\xE8nes|GR|37.9838|23.7275
Rome,Roma|IT|41.9028|12.4964
Milan,Milano|IT|45.4642|9.19
Naples,Napoli|IT|40.8518|14.2681
Venice,Venise,Venezia|IT|45.4408|12.3155
Madrid|ES|40.4168|-3.7038
Barcelona,Barcelone|ES|41.3874|2.1686
Seville,S\xE9ville,Sevilla|ES|37.3891|-5.9845
Valencia,Valence|ES|39.4699|-0.3763
Lisbon,Lisbonne,Lisboa|PT|38.7223|-9.1393
Porto|PT|41.1579|-8.6291
Copenhagen,Copenhague|DK|55.6761|12.5683
Oslo|NO|59.9139|10.7522
Stockholm|SE|59.3293|18.0686
Helsinki|FI|60.1699|24.9384
Reykjavik,Reykjav\xEDk|IS|64.1466|-21.9426
Tallinn|EE|59.437|24.7536
Riga|LV|56.9496|24.1052
Vilnius|LT|54.6872|25.2797
Kyiv,Kiev|UA|50.4501|30.5234
Minsk|BY|53.9006|27.559
Moscow,Moscou|RU|55.7558|37.6173
Saint Petersburg,Saint-P\xE9tersbourg|RU|59.9311|30.3609
Istanbul|TR|41.0082|28.9784
Ankara|TR|39.9334|32.8597
Tbilisi|GE|41.7151|44.8271
Yerevan,Erevan|AM|40.1792|44.4991
Baku,Bakou|AZ|40.4093|49.8671
Tehran,T\xE9h\xE9ran|IR|35.6892|51.389
Baghdad,Bagdad|IQ|33.3152|44.3661
Riyadh,Riyad|SA|24.7136|46.6753
Jeddah,Djeddah|SA|21.4858|39.1925
Dubai,Duba\xEF|AE|25.2048|55.2708
Abu Dhabi|AE|24.4539|54.3773
Doha|QA|25.2854|51.531
Jerusalem,J\xE9rusalem|IL|31.7683|35.2137
Tel Aviv|IL|32.0853|34.7818
Beirut,Beyrouth|LB|33.8938|35.5018
Amman|JO|31.9454|35.9284
Cairo,Le Caire|EG|30.0444|31.2357
Casablanca|MA|33.5731|-7.5898
Rabat|MA|34.0209|-6.8416
Algiers,Alger|DZ|36.7538|3.0588
Tunis|TN|36.8065|10.1815
Dakar|SN|14.7167|-17.4677
Abidjan|CI|5.36|-4.0083
Lagos|NG|6.5244|3.3792
Abuja|NG|9.0765|7.3986
Accra|GH|5.6037|-0.187
Kinshasa|CD|-4.4419|15.2663
Nairobi|KE|-1.2921|36.8219
Addis Ababa,Addis-Abeba|ET|8.9806|38.7578
Kampala|UG|0.3476|32.5825
Dar es Salaam|TZ|-6.7924|39.2083
Luanda|AO|-8.839|13.2894
Johannesburg|ZA|-26.2041|28.0473
Cape Town,Le Cap|ZA|-33.9249|18.4241
Antananarivo|MG|-18.8792|47.5079
Karachi|PK|24.8607|67.0011
Islamabad|PK|33.6844|73.0479
Kabul|AF|34.5553|69.2075
New Delhi,Delhi|IN|28.6139|77.209
Mumbai,Bombay|IN|19.076|72.8777
Bangalore,Bengaluru|IN|12.9716|77.5946
Kolkata,Calcutta|IN|22.5726|88.3639
Chennai|IN|13.0827|80.2707
Dhaka|BD|23.8103|90.4125
Kathmandu,Katmandou|NP|27.7172|85.324
Colombo|LK|6.9271|79.8612
Bangkok|TH|13.7563|100.5018
Hanoi|VN|21.0278|105.8342
Ho Chi Minh City,H\xF4 Chi Minh-Ville,Saigon|VN|10.8231|106.6297
Kuala Lumpur|MY|3.139|101.6869
Singapore,Singapour|SG|1.3521|103.8198
Jakarta|ID|-6.2088|106.8456
Manila,Manille|PH|14.5995|120.9842
Beijing,P\xE9kin|CN|39.9042|116.4074
Shanghai|CN|31.2304|121.4737
Hong Kong|HK|22.3193|114.1694
Shenzhen|CN|22.5431|114.0579
Taipei|TW|25.033|121.5654
Seoul,S\xE9oul|KR|37.5665|126.978
Pyongyang|KP|39.0392|125.7625
Tokyo|JP|35.6762|139.6503
Osaka|JP|34.6937|135.5023
Ulaanbaatar,Oulan-Bator|MN|47.8864|106.9057
Astana|KZ|51.1694|71.4491
Tashkent,Tachkent|UZ|41.2995|69.2401
Sydney|AU|-33.8688|151.2093
Melbourne|AU|-37.8136|144.9631
Brisbane|AU|-27.4698|153.0251
Perth|AU|-31.9505|115.8605
Canberra|AU|-35.2809|149.13
Auckland|NZ|-36.8485|174.7633
Wellington|NZ|-41.2865|174.7762
Honolulu|US|21.3069|-157.8583
Anchorage|US|61.2181|-149.9003
Washington,Washington DC|US|38.9072|-77.0369
New York,New York City,NYC|US|40.7128|-74.006
Boston|US|42.3601|-71.0589
Chicago|US|41.8781|-87.6298
Miami|US|25.7617|-80.1918
Atlanta|US|33.749|-84.388
Houston|US|29.7604|-95.3698
Dallas|US|32.7767|-96.797
Denver|US|39.7392|-104.9903
Seattle|US|47.6062|-122.3321
San Francisco|US|37.7749|-122.4194
Los Angeles|US|34.0522|-118.2437
Las Vegas|US|36.1699|-115.1398
Toronto|CA|43.6532|-79.3832
Montreal,Montr\xE9al|CA|45.5019|-73.5674
Quebec City,Qu\xE9bec|CA|46.8139|-71.208
Vancouver|CA|49.2827|-123.1207
Ottawa|CA|45.4215|-75.6972
Mexico City,Mexico,Ciudad de M\xE9xico|MX|19.4326|-99.1332
Havana,La Havane|CU|23.1136|-82.3666
Panama City,Panama|PA|8.9824|-79.5199
Bogot\xE1,Bogota|CO|4.711|-74.0721
Caracas|VE|10.4806|-66.9036
Lima|PE|-12.0464|-77.0428
Quito|EC|-0.1807|-78.4678
Santiago|CL|-33.4489|-70.6693
Buenos Aires|AR|-34.6037|-58.3816
Montevideo|UY|-34.9011|-56.1645
S\xE3o Paulo,Sao Paulo|BR|-23.5505|-46.6333
Rio de Janeiro|BR|-22.9068|-43.1729
Bras\xEDlia,Brasilia|BR|-15.7975|-47.8919
La Paz|BO|-16.4897|-68.1193
Nuuk|GL|64.1814|-51.6941
North Pole,P\xF4le Nord|AQ|90|0
South Pole,P\xF4le Sud|AQ|-90|0`,V=null;function Rt(n){if(!V){V=new Map;for(let e of Qt.split(`
`)){let[a,i,r,o]=e.split("|"),s=a.split(","),c={name:s[0],country:i,lat:Number(r),lon:Number(o)};for(let d of s)V.set(U(d),c)}}let t=U(n);return V.get(t)??V.get(t.replace(/,.*$/,"").trim())??null}var rt=2e3,st=/^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i,_t=/\s*(?:->|→|=>|⟶)\s*/;function nt(n,t="en"){let e=n.trim();if(/^[[{]/.test(e))try{return te(JSON.parse(e),t)}catch{}let a=[],i=[];for(let r of e.split(/\r?\n/)){let o=r.trim();if(!o||o.startsWith("//")||o.startsWith("; "))continue;if(a.length>=rt)break;let s=Xt(o,t);s?a.push(s):i.push(o)}return{items:a,invalid:i,view:{}}}function Xt(n,t="en"){let e=n,a="",i=e.match(/\s+(#[0-9a-f]{3,8})$/i)??e.match(/^(#[0-9a-f]{3,8})\s+/i);i&&st.test(i[1])&&(a=i[1],e=e.replace(i[0]," ").trim());let r="",o=e.match(/^([^:]{1,80}?)\s*:\s+(.+)$/);if(o&&!/^(?:geo|https?)$/i.test(o[1])&&(r=o[1].trim(),e=o[2].trim()),_t.test(e)){let f=e.split(_t).filter(Boolean).map(p=>z(p,t));return f.length<2||f.some(p=>!p)?null:{kind:"route",label:r,color:a,stops:f,text:n}}let s=e.match(/^(.+?)\s*(?:=\s*)?([+-]?\d+(?:[.,]\d+)?)\s*(%)?$/),c=R(e,t)??(s?R(s[1],t):null);if(c&&!Z(e)){let f=c===R(e,t)||!s?null:Number(s[2].replace(",","."));return{kind:"country",code:c,label:r,color:a,value:f,text:n}}let d=e.match(/^([+-]?\d{1,3}(?:\.\d+)?)\s*[,; ]\s*([+-]?\d{1,3}(?:\.\d+)?)\s+([^\d\s°'"′″].*)$/u);if(d&&!r){let f=Z(`${d[1]}, ${d[2]}`);if(f)return K(d[3].trim(),a,{...f,source:"coords"},n)}if(!r&&!Z(e)){let f=e.split(/\s+/);for(let p=f.length-1;p>=2;p--){let b=Z(f.slice(0,p).join(" "));if(b)return K(f.slice(p).join(" "),a,{...b,source:"coords"},n)}}let u=z(e,t);return u?K(r,a,u,n):null}function K(n,t,e,a){return{kind:"marker",label:n,color:t,place:e,text:a}}function z(n,t="en"){let e=n.trim();if(!e)return null;let a=Z(e);if(a)return{...a,source:"coords"};let i=Rt(e);if(i)return{lat:i.lat,lon:i.lon,source:"city",name:i.name};let r=R(e,t);return r?{country:r}:new RegExp("\\p{L}","u").test(e)&&e.length<=300?{address:e}:null}function Z(n){let t=n.trim();if(!t||t.length>200)return null;let e=t.match(/^geo:([+-]?\d+(?:\.\d+)?),([+-]?\d+(?:\.\d+)?)/i)??t.match(/@([+-]?\d+(?:\.\d+)?),([+-]?\d+(?:\.\d+)?)/)??t.match(/[?&](?:q|ll|query)=([+-]?\d+(?:\.\d+)?)(?:,|%2C)\s*([+-]?\d+(?:\.\d+)?)/i)??t.match(/[#&]map=\d+(?:\.\d+)?\/([+-]?\d+(?:\.\d+)?)\/([+-]?\d+(?:\.\d+)?)/);if(e)return D(Number(e[1]),Number(e[2]));let a=t.match(/[?&]mlat=([+-]?\d+(?:\.\d+)?)/),i=t.match(/[?&]mlon=([+-]?\d+(?:\.\d+)?)/);if(a&&i)return D(Number(a[1]),Number(i[1]));if(!/^[\s\d.,;:+\-°º'′’"″NSEWOnsewo]+$/.test(t)||!/\d/.test(t)||/[a-z]{2}/i.test(t))return null;let r=[],o={},s="",c=t.match(/[NSEWO]|[+-]?\d+(?:\.\d+)?\s*(?:°|º|''|["″]|['′’])?/gi)??[];for(let p of c){let b=p.trim();if(/^[NSEWO]$/i.test(b)){let x=b.toUpperCase()==="O"?"W":b.toUpperCase();o.deg!==void 0&&!o.hem&&!s?o.hem=x:(o.deg!==void 0&&r.push(o),o={},s=x);continue}let l=Number.parseFloat(b),m=b.replace(/^[+-]?\d+(?:\.\d+)?\s*/,"");/^(?:''|["″])$/.test(m)?o.sec=l:/^['′’]$/.test(m)?o.min=l:(o.deg!==void 0&&(r.push(o),o={}),o.deg=Math.abs(l),o.negative=l<0||Object.is(l,-0)||b.startsWith("-"),s&&(o.hem=s,s=""))}if(o.deg!==void 0&&r.push(o),r.length!==2)return null;let d=p=>{if((p.min??0)>=60||(p.sec??0)>=60)return NaN;let b=(p.deg??0)+(p.min??0)/60+(p.sec??0)/3600;return p.negative||p.hem==="S"||p.hem==="W"?-b:b},[u,f]=r;return(u.hem==="E"||u.hem==="W")&&(!f.hem||f.hem==="N"||f.hem==="S")&&([u,f]=[f,u]),u.hem==="E"||u.hem==="W"||f.hem==="N"||f.hem==="S"?null:D(d(u),d(f))}function D(n,t){return!Number.isFinite(n)||!Number.isFinite(t)||Math.abs(n)>90||Math.abs(t)>180?null:{lat:n,lon:t}}function te(n,t="en"){let e=[],a=[],i={},r=l=>typeof l=="string"||typeof l=="number"?String(l):"",o=l=>{let m=r(l?.color??l?.["marker-color"]??l?.stroke??l?.fill);return st.test(m)?m:""},s=l=>r(l?.label??l?.name??l?.title??l?.text).slice(0,200),c=l=>{if(typeof l=="string")return z(l,t);if(Array.isArray(l)&&l.length>=2)return Gt(D(Number(l[1]),Number(l[0])));if(!l||typeof l!="object")return null;let m=l.lat??l.latitude,x=l.lon??l.lng??l.long??l.longitude;if(m!==void 0&&x!==void 0)return Gt(D(Number(m),Number(x)));let A=r(l.address??l.place??l.city??l.query??l.coords);return A?z(A,t):null},d=l=>{let m=l?.type==="Feature"?l.geometry:l,x=l?.type==="Feature"?l.properties??{}:{};if(!m||typeof m.type!="string")return;let A=s(x),P=o(x);if(m.type==="Point"){let M=c(m.coordinates);M?e.push(K(A,P,M,A)):a.push(JSON.stringify(m.coordinates))}else if(m.type==="MultiPoint")for(let M of m.coordinates??[]){let j=c(M);j&&e.push(K(A,P,j,A))}else if(m.type==="GeometryCollection")for(let M of m.geometries??[])d({type:"Feature",properties:x,geometry:M});else/^(?:Multi)?(?:LineString|Polygon)$/.test(m.type)&&e.push({kind:"shape",label:A,color:P,geometry:m,text:A||m.type})};if(n?.type==="FeatureCollection"){for(let l of(n.features??[]).slice(0,rt))d(l);return{items:e,invalid:a,view:i}}if(n?.type==="Feature"||/^(?:Multi)?(?:Point|LineString|Polygon)$|^GeometryCollection$/.test(n?.type??""))return d(n),{items:e,invalid:a,view:i};let u=Array.isArray(n)?n:n?.markers??n?.places??n?.points??[];for(let l of Array.isArray(u)?u.slice(0,rt):[]){let m=c(l);m&&!("country"in m)?e.push(K(s(l),o(l),m,s(l)||JSON.stringify(l))):a.push(typeof l=="string"?l:JSON.stringify(l))}let f=n?.countries??n?.highlight,p=Array.isArray(f)?f.map(l=>typeof l=="string"?[l,null]:[r(l?.code??l?.id??l?.country??l?.name),l]):f&&typeof f=="object"?Object.entries(f):[];for(let[l,m]of p){let x=R(l,t);if(!x){a.push(l);continue}let A=typeof m=="number"?m:typeof m?.value=="number"?m.value:null,P=typeof m=="string"&&st.test(m)?m:o(m);e.push({kind:"country",code:x,label:s(m),color:P,value:A,text:l})}for(let l of Array.isArray(n?.routes)?n.routes:[]){let m=Array.isArray(l)?l:l?.stops??[l?.from,l?.to],x=(Array.isArray(m)?m:[]).map(c);x.length>=2&&x.every(Boolean)?e.push({kind:"route",label:s(l),color:o(l),stops:x,text:s(l)||"route"}):a.push(JSON.stringify(l))}for(let l of Array.isArray(n?.features)?n.features:[])d(l);let b=n?.center?c(n.center):null;return b&&"lat"in b&&(i.center={lat:b.lat,lon:b.lon}),typeof n?.zoom=="number"&&(i.zoom=n.zoom),{items:e,invalid:a,view:i}}function Gt(n){return n?{...n,source:"coords"}:null}function C(n,t,e="decimal"){if(e==="decimal")return`${n.toFixed(5)}, ${t.toFixed(5)}`;let a=(i,r,o)=>{let s=Math.abs(i),c=Math.floor(s),d=Math.floor((s-c)*60),u=Math.round(((s-c)*60-d)*600)/10;return u>=60&&([u,d]=[0,d+1]),d>=60&&([d,c]=[0,c+1]),`${c}\xB0${String(d).padStart(2,"0")}\u2032${u.toFixed(1).padStart(4,"0")}\u2033${i<0?o:r}`};return`${a(n,"N","S")} ${a(t,"E","W")}`}function jt(n,t){let e=Math.PI/180,a=(t.lat-n.lat)*e,i=(t.lon-n.lon)*e,r=Math.sin(a/2)**2+Math.cos(n.lat*e)*Math.cos(t.lat*e)*Math.sin(i/2)**2;return 2*6371.0088*Math.asin(Math.min(1,Math.sqrt(r)))}function It(n){let t=Array.isArray(n)?n[0]:n?.features?.[0]??n?.results?.[0]??n;if(!t||typeof t!="object")return null;let e=String(t.display_name??t.properties?.label??t.properties?.display_name??t.properties?.name??t.formatted_address??t.name??""),a=t.geometry?.coordinates;if(Array.isArray(a)){let o=D(Number(a[1]),Number(a[0]));return o?{...o,name:e}:null}let i=t.geometry?.location??t,r=D(Number(i.lat??i.latitude),Number(i.lon??i.lng??i.longitude));return r?{...r,name:e}:null}function zt(n,t,e="en"){let a=encodeURIComponent(t),r={nominatim:`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&accept-language=${encodeURIComponent(e)}&q={q}`,photon:"https://photon.komoot.io/api/?limit=1&q={q}",ban:"https://api-adresse.data.gouv.fr/search/?limit=1&q={q}"}[n.trim().toLowerCase()]??n.trim();return!/^https?:\/\//i.test(r)||!r.includes("{q}")?null:r.replaceAll("{q}",a)}var X=null;function lt(){if(X)return X;let n=Y().vendorUrl||yt(),t={ready:!1,geo:null,promise:Promise.resolve()};return t.promise=import(new URL("geo.js",n||location.href).href).then(e=>(t.geo=e,t.ready=!0,e),e=>{throw X=null,e}),X=t,t}kt({en:Lt,fr:Mt});var ee="http://www.w3.org/2000/svg",B=960,N=540,ct=60,ae=25,Ft=["natural-earth","equal-earth","mercator","equirectangular","globe","azimuthal-equal-area","azimuthal-equidistant","stereographic","gnomonic","transverse-mercator","conic-equal-area","conic-conformal"],_=new Set(["globe","azimuthal-equal-area","azimuthal-equidistant","stereographic","gnomonic"]),pt={globe:90,stereographic:120,gnomonic:60,"azimuthal-equal-area":179.9,"azimuthal-equidistant":179.9},Ot=["light","dark","political","satellite","night","blueprint","vintage","mono"],Ut=new WeakMap,W=new Map;function y(n,t={}){let e=document.createElementNS(ee,n);for(let[a,i]of Object.entries(t))i!==null&&e.setAttribute(a,String(i));return e}var Dt=class extends wt{static type="map";static componentAttributes=Object.freeze(["projection","basemap","center","zoom","highlight","geocoder","graticule","labels","controls","list","pick","scroll-zoom","coords-format","height","movie"]);static presets={simple:{},full:{header:!0,dot:!0,copy:!0,download:!0,fullscreen:!0,controls:!0,list:!0}};static styles=[Nt];static allowEmpty=!0;static upgradeProperties=["content"];constructor(){super(),this.viewState=null,this.projectionState=null,this.basemapState=null,this.graticuleState=null,this.selected=null,this.pins=[],this.projection=null,this.path=null,this.svgEl=null,this.stage=null,this.tooltip=null,this.readout=null,this.statusLine=null,this.countryEls=[],this.updaters=[],this.frameRequest=0,this.flight=0,this.editor=null,this.previewTimer=void 0,this.geocoding=null,this.movie=null,this.changeTimer=void 0}disconnectedCallback(){cancelAnimationFrame(this.frameRequest),cancelAnimationFrame(this.flight),this.movie?.abort(),clearTimeout(this.previewTimer),clearTimeout(this.changeTimer),this.geocoding?.abort(),this.editor?.destroy(),super.disconnectedCallback()}flag(t,e){return vt(this.getAttribute(t))??e}input(){let t=nt(this.text??"",this.locale);for(let e of(this.getAttribute("highlight")??"").split(/[\s,;]+/).filter(Boolean)){let a=R(e,this.locale);a&&!t.items.some(i=>i.kind==="country"&&i.code.a3===a.a3)&&t.items.push({kind:"country",code:a,label:"",color:"",value:null,text:e})}return t}get projectionName(){let t=(this.projectionState??this.getAttribute("projection")??"").toLowerCase(),a={orthographic:"globe","3d":"globe",flat:"natural-earth","plate-carree":"equirectangular",azimuthal:"azimuthal-equidistant"}[t]??t;return Ft.includes(a)?a:"natural-earth"}get basemap(){let t=(this.basemapState??this.getAttribute("basemap")??"").toLowerCase(),a={sky:"satellite",terrain:"satellite",earth:"satellite",space:"night"}[t]??t;return Ot.includes(a)?a:"light"}initialView(){let t=nt(this.text??"",this.locale).view,e=this.getAttribute("center"),a=e?z(e,this.locale):null,i=t.center??null;a&&"lat"in a?i=a:a&&"country"in a&&(i=this.countryCenter(a.country));let r=Number(this.getAttribute("zoom")??t.zoom??1);return{lon:i?.lon??(this.projectionName==="globe"?10:0),lat:i?.lat??(_.has(this.projectionName)?30:0),zoom:Number.isFinite(r)?Math.min(ct,Math.max(1,r)):1}}get view(){let t=this.viewState??this.initialView();return{lat:t.lat,lon:t.lon,zoom:t.zoom,projection:this.projectionName,basemap:this.basemap}}get items(){return this.input().items.map(t=>{if(t.kind==="country")return{kind:"country",label:t.label||L(t.code,this.locale),code:t.code.a2||t.code.a3,value:t.value};if(t.kind==="marker"){let e=this.locate(t.place);return{kind:"marker",label:this.markerLabel(t),lat:e?.lat,lon:e?.lon}}return{kind:t.kind,label:t.label}})}locate(t){if("lat"in t)return t;if("country"in t)return this.countryCenter(t.country);let e=W.get(t.address.toLowerCase());return e&&e!=="none"&&e!=="pending"?e:null}markerLabel(t){let e=t.place;return t.label?t.label:"name"in e&&e.name?e.name:"address"in e?e.address:"country"in e?L(e.country,this.locale):C(e.lat,e.lon,this.coordsFormat)}get coordsFormat(){return this.getAttribute("coords-format")==="dms"?"dms":"decimal"}renderContent(t){let e=this.t,{items:a,invalid:i}=this.input(),r=g("div",{class:"body map-body",part:"body"});this.feature("controls")&&r.append(this.controlsView()),this.stage=g("div",{class:"map-stage",part:"stage",attrs:{"data-basemap":this.basemap}});let o=this.getAttribute("height");o&&/^[\d.]+(?:px|em|rem|vh|%)$/.test(o)&&(this.stage.style.height=o),r.append(this.stage),this.statusLine=g("p",{class:"map-status",attrs:{role:"status"}}),r.append(this.statusLine);let s=g("div",{class:"map-legend-host"});r.append(s),this.feature("list")&&r.append(g("div",{class:"map-list-host"})),i.length&&r.append(g("p",{class:"map-muted",text:e("mapInvalidLines",{list:i.slice(0,5).join(" \xB7 ")})}));let c=g("div",{class:"panel"}),d=[];if(this.editing){let b=this.createEditor();c.classList.add("map-edit"),c.append(g("div",{class:"body editor-body",part:"body editor"},b.element),r),d=this.historyButtons(b)}else c.append(r);let u=[...d,this.editToggleButton(),this.fullscreenButton(),this.feature("download")?this.downloadButton(()=>this.geoJson(),this.downloadName("map.geojson"),"application/geo+json"):null,this.feature("copy")?this.copyButton(()=>this.report(),e("mapCopyPlaces")):null],f=a.filter(b=>b.kind==="marker").length,p=f?`${e(`mapProjection_${this.projectionName}`)} \xB7 ${e("mapPlaces",{count:f})}`:e(`mapProjection_${this.projectionName}`);t.append(...this.chrome({badge:p,actions:u}),c),this.editor?.align(),this.draw()}controlsView(){let t=this.t,e=(o,s,c,d,u,f)=>{let p=I(o),b=g("select",{class:"map-select",attrs:{id:p,"data-focus-key":o},on:{change:()=>f(b.value)}},...s.map(l=>g("option",{text:u(l),attrs:{value:l,selected:l===c}})));return g("div",{class:"map-control"},g("label",{attrs:{for:p},text:t(d)}),b)},a=I("place"),i=g("input",{class:"map-search-input",attrs:{id:a,type:"search",autocomplete:"off",spellcheck:"false",placeholder:t("mapSearchPlaceholder"),"data-focus-key":"place"}}),r=g("form",{class:"map-search",attrs:{role:"search"},on:{submit:o=>{o.preventDefault(),this.find(i.value)}}},g("label",{class:"sr-only",attrs:{for:a},text:t("mapSearch")}),i,g("button",{class:"btn map-go",attrs:{type:"submit","aria-label":t("mapSearch"),title:t("mapSearch")}},xt("search")));return g("div",{class:"map-controls",part:"controls"},r,e("projection",Ft,this.projectionName,"mapProjection",o=>t(`mapProjection_${o}`),o=>{let s=_.has(this.projectionName);this.projectionState=o,this.viewState&&s!==_.has(o)&&(this.viewState.zoom=1),this.redrawAll(),this.changed()}),e("basemap",Ot,this.basemap,"mapBasemap",o=>t(`mapBasemap_${o}`),o=>{this.basemapState=o,this.redrawAll(),this.changed()}),g("label",{class:"map-check"},g("input",{attrs:{type:"checkbox",checked:this.showGraticule,"data-focus-key":"graticule"},on:{change:o=>{this.graticuleState=o.target.checked,this.redrawAll()}}}),g("span",{text:t("mapGraticule")})))}get showGraticule(){return this.graticuleState??this.flag("graticule",!0)}redrawAll(){if(!this.stage)return;this.stage.dataset.basemap=this.basemap,this.draw();let t=this.root.querySelector(".badge");t&&(t.textContent=t.textContent?.replace(/^[^·]+/,`${this.t(`mapProjection_${this.projectionName}`)} `).trim()??"")}draw(){let t=this.stage;if(!t)return;let e=lt();if(!e.ready){t.replaceChildren(St(this.t)),e.promise.then(()=>{this.stage===t&&(this.draw(),this.renderSide())},a=>{this.stage===t&&t.replaceChildren(At(this.t("mapLoadFailed",{message:String(a?.message??a)})))});return}this.build(e.geo),this.renderSide(),this.geocodeItems()}get geo(){return lt().geo}build(t){let e=this.t,a=this.stage,{items:i}=this.input(),r=this.projectionName,o={glow:I("glow"),shade:I("shade"),clip:I("clip"),ocean:I("ocean")};this.updaters=[],this.countryEls=[];let s=y("svg",{viewBox:`0 0 ${B} ${N}`,class:"map-svg",part:"map",role:"application","aria-roledescription":e("mapRole"),tabindex:"0",preserveAspectRatio:"xMidYMid meet"});s.setAttribute("aria-label",this.summary(i));let c=I("help");s.setAttribute("aria-describedby",c),this.svgEl=s;let d=y("defs"),u=y("radialGradient",{id:o.ocean,cx:"50%",cy:"45%",r:"60%"});u.append(y("stop",{offset:"0%",class:"ocean-a"}),y("stop",{offset:"100%",class:"ocean-b"}));let f=y("radialGradient",{id:o.shade,cx:"35%",cy:"30%",r:"75%"});f.append(y("stop",{offset:"0%",class:"shade-a"}),y("stop",{offset:"65%",class:"shade-b"}),y("stop",{offset:"100%",class:"shade-c"}));let p=y("filter",{id:o.glow,x:"-20%",y:"-20%",width:"140%",height:"140%"});p.append(y("feGaussianBlur",{stdDeviation:"12"}));let b=y("clipPath",{id:o.clip}),l=y("path");b.append(l),d.append(u,f,p,b),s.append(d);let m=_.has(r);if(m&&(this.basemap==="night"||this.basemap==="satellite")){let h=y("g",{class:"map-stars","aria-hidden":"true"}),v=7,k=()=>(v=v*16807%2147483647)/2147483647;for(let w=0;w<140;w++)h.append(y("circle",{cx:(k()*B).toFixed(1),cy:(k()*N).toFixed(1),r:(k()*1.2+.2).toFixed(2),opacity:(k()*.7+.3).toFixed(2)}));s.append(h)}let x=y("path",{class:"map-atmosphere",filter:`url(#${o.glow})`}),A=y("path",{class:"map-sphere",fill:`url(#${o.ocean})`}),P=y("path",{class:"map-graticule"}),M=y("g",{class:"map-countries","clip-path":`url(#${o.clip})`}),j=y("path",{class:"map-borders"}),$=y("g",{class:"map-overlay","clip-path":`url(#${o.clip})`}),dt=y("path",{class:"map-shading",fill:`url(#${o.shade})`}),ut=y("g",{class:"map-pins"}),tt=y("g",{class:"map-labels","aria-hidden":"true"});m&&s.append(x),s.append(A),this.showGraticule&&s.append(P),s.append(M,j,$),r==="globe"&&s.append(dt),s.append(ut,tt);let et=new Map(i.filter(h=>h.kind==="country").map(h=>[h.code.a3,h])),at=[...et.values()].map(h=>h.value).filter(h=>h!==null),ot=Math.min(...at),mt=Math.max(...at);for(let[h,v]of t.countries.entries()){let k=Q(v.id,v.properties?.name),w=L(k,this.locale,v.properties?.name),S=et.get(k.a3),E=y("path",{class:`map-country c${h%8}${this.basemap==="satellite"?` ${oe(t,v,k)}`:""}`,"data-code":k.a2||k.a3});if(S){if(E.classList.add("highlighted"),S.color)E.style.setProperty("fill",S.color);else if(S.value!==null&&at.length){let Zt=mt===ot?100:Math.round((S.value-ot)/(mt-ot)*100);E.style.setProperty("fill",`color-mix(in oklab, var(--map-high) ${Zt}%, var(--map-low))`)}}this.selected===k.a3&&E.classList.add("selected"),M.append(E),this.countryEls.push({el:E,feature:v,code:k,name:w})}let ht=this.flag("labels",!0),ft=h=>!m||t.geoDistance?.([h.lon,h.lat],[-this.projection.rotate()[0],-this.projection.rotate()[1]])<(pt[r]??90)*Math.PI/180;for(let h of i){if(h.kind==="shape"){let v=y("path",{class:`map-shape ${/Polygon/.test(h.geometry.type)?"area":"line"}`});h.color&&v.style.setProperty("--map-item",h.color),v.append(this.titleEl(h.label||e("mapShape"))),$.append(v),this.updaters.push(()=>v.setAttribute("d",this.path(h.geometry)??""))}if(h.kind==="route"){let v=y("path",{class:"map-route"});h.color&&v.style.setProperty("--map-item",h.color),$.append(v),this.updaters.push(()=>{let k=h.stops.map(S=>this.locate(S));if(k.some(S=>!S))return v.removeAttribute("d");let w={type:"LineString",coordinates:k.map(S=>[S.lon,S.lat])};v.setAttribute("d",this.path(w)??"")})}}let qt=[...i.flatMap(h=>h.kind==="marker"?[{place:h.place,label:this.markerLabel(h),color:h.color,dropped:!1}]:[]),...this.pins.map(h=>({place:{lat:h.lat,lon:h.lon,source:"coords"},label:h.label,color:"",dropped:!0}))];for(let h of qt){let v=y("g",{class:`map-pin${h.dropped?" dropped":""}`});h.color&&v.style.setProperty("--map-item",h.color),v.append(y("path",{d:"M0 0C-2-6-8-9-8-15a8 8 0 1 1 16 0c0 6-6 9-8 15Z",class:"map-pin-shape"}),y("circle",{cx:"0",cy:"-15",r:"3",class:"map-pin-dot"}),this.titleEl(h.label)),ut.append(v);let k=ht?y("text",{class:"map-label",dx:"10",dy:"-12"}):null;k&&(k.textContent=h.label,tt.append(k)),v.addEventListener("click",w=>{w.stopPropagation();let S=this.locate(h.place);S&&this.selectPoint(S,h.label)}),this.updaters.push(()=>{let w=this.locate(h.place),S=w&&ft(w)?this.projection([w.lon,w.lat]):null,E=S&&S[0]>-20&&S[0]<B+20&&S[1]>-20&&S[1]<N+40;v.toggleAttribute("hidden",!E),E&&v.setAttribute("transform",`translate(${S[0].toFixed(1)} ${S[1].toFixed(1)})`),k&&(k.toggleAttribute("hidden",!E),E&&(k.setAttribute("x",S[0].toFixed(1)),k.setAttribute("y",S[1].toFixed(1))))})}if(ht)for(let h of et.values()){let v=this.countryCenter(h.code);if(!v)continue;let k=y("text",{class:"map-country-label","text-anchor":"middle"});k.textContent=h.label||L(h.code,this.locale)+(h.value!==null?` \xB7 ${this.number(h.value)}`:""),tt.append(k),this.updaters.push(()=>{let w=ft(v)?this.projection([v.lon,v.lat]):null;k.toggleAttribute("hidden",!w),w&&(k.setAttribute("x",w[0].toFixed(1)),k.setAttribute("y",w[1].toFixed(1)))})}this.updaters.unshift(()=>{let h=this.path({type:"Sphere"})??"";A.setAttribute("d",h),x.setAttribute("d",h),dt.setAttribute("d",h),l.setAttribute("d",h),this.showGraticule&&P.setAttribute("d",this.path(t.geoGraticule10())??"");for(let v of this.countryEls)v.el.setAttribute("d",this.path(v.feature)??"");j.setAttribute("d",this.path(t.borders)??"")});let gt=g("div",{class:"map-tooltip",part:"tooltip",attrs:{hidden:""}}),bt=g("div",{class:"map-readout",attrs:{"aria-hidden":"true"}}),Ht=g("div",{class:"map-zoom"},q({icon:"plus",label:e("mapZoomIn"),key:"zoom-in",onClick:()=>this.zoomBy(2)}),q({icon:"minus",label:e("mapZoomOut"),key:"zoom-out",onClick:()=>this.zoomBy(.5)}),q({icon:"refresh",label:e("mapReset"),key:"reset",onClick:()=>this.reset()}),this.hasAttribute("movie")?this.trackButton():null),Vt=g("p",{class:"sr-only",attrs:{id:c},text:e("mapKeyboardHelp")});this.tooltip=gt,this.readout=bt,a.replaceChildren(s,Ht,gt,bt,Vt),a.classList.toggle("globe",m),this.bindPointer(s),this.update()}titleEl(t){let e=y("title");return e.textContent=t,e}summary(t){let e=this.t,a=i=>t.filter(r=>r.kind===i).length;return e("mapSummary",{projection:e(`mapProjection_${this.projectionName}`),places:a("marker")+this.pins.length,countries:a("country"),routes:a("route")})}update(){let t=this.geo;if(!t||!this.svgEl)return;let e=this.projectionName,a=this.viewState??this.initialView(),i=t.projections[e](),r=_.has(e);r?i.rotate([-a.lon,-a.lat]).clipAngle(pt[e]??90):i.rotate([-a.lon,0]),i.precision(.4);let o=12;if(e==="mercator"||e==="transverse-mercator"?i.fitExtent([[o,o],[B-o,N-o]],{type:"Feature",geometry:{type:"MultiPoint",coordinates:[[a.lon-179.9,-80],[a.lon+179.9,84]]}}):i.fitExtent([[o,o],[B-o,N-o]],{type:"Sphere"}),i.scale(i.scale()*a.zoom),r)i.translate([B/2,N/2]);else{i.translate([B/2,N/2]);let s=i([a.lon,a.lat]),c=i.translate();i.translate([c[0]+B/2-s[0],c[1]+N/2-s[1]]);let d=t.geoPath(i),[[,u],[,f]]=d.bounds({type:"Sphere"}),p=Number.isFinite(u)?u:-1/0,b=Number.isFinite(f)?f:1/0,l=0;b-p<=N?l=N/2-(p+b)/2:p>0?l=-p:b<N&&(l=N-b);let m=i.translate();i.translate([m[0],m[1]+l])}this.projection=i,this.path=t.geoPath(i);for(let s of this.updaters)s()}scheduleUpdate(){this.frameRequest||(this.frameRequest=requestAnimationFrame(()=>{this.frameRequest=0,this.update()}))}unitsPerPixel(){let t=this.svgEl?.getBoundingClientRect();return!t||!t.width?1:Math.max(B/t.width,N/t.height)}pointOf(t){let e=this.svgEl.getBoundingClientRect(),a=this.unitsPerPixel();return[B/2+(t.clientX-e.left-e.width/2)*a,N/2+(t.clientY-e.top-e.height/2)*a]}pan(t,e){let a=this.viewState??=this.initialView(),i=this.projection?.scale()??150,r=180/Math.PI/i;a.lon=G(a.lon-t*r);let o=_.has(this.projectionName)?90:85;a.lat=Math.max(-o,Math.min(o,a.lat+e*r)),this.scheduleUpdate()}zoomBy(t,e){let a=this.viewState??=this.initialView(),i=Math.min(ct,Math.max(1,a.zoom*t));if(i!==a.zoom){if(e&&this.projection){let r=this.projection.invert?.(e);if(r&&Number.isFinite(r[0])){let o=1-a.zoom/i;a.lon=G(a.lon+G(r[0]-a.lon)*o),a.lat=a.lat+(r[1]-a.lat)*o}}a.zoom=i,this.scheduleUpdate(),this.changedSoon()}}reset(){this.viewState=null,this.selected=null,this.pins=[],this.build(this.geo),this.renderSide(),this.changed()}bindPointer(t){let e=new Map,a=0,i=0;t.addEventListener("pointerdown",o=>{o.button===0&&(t.setPointerCapture?.(o.pointerId),e.set(o.pointerId,[o.clientX,o.clientY]),a=0,e.size===2&&(i=$t(e)))}),t.addEventListener("pointermove",o=>{this.hover(o);let s=e.get(o.pointerId);if(!s)return;let c=this.unitsPerPixel();if(e.size===2){e.set(o.pointerId,[o.clientX,o.clientY]);let f=$t(e);i&&this.zoomBy(f/i),i=f,a+=10;return}let d=o.clientX-s[0],u=o.clientY-s[1];a+=Math.abs(d)+Math.abs(u),e.set(o.pointerId,[o.clientX,o.clientY]),a>3&&(t.classList.add("dragging"),this.pan(d*c,u*c))});let r=o=>{e.has(o.pointerId)&&(e.delete(o.pointerId),t.classList.remove("dragging"),!e.size&&a>3&&this.changed(),o.type==="pointerup"&&a<=3&&!e.size&&this.clickAt(o))};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),t.addEventListener("pointerleave",()=>{this.tooltip&&(this.tooltip.hidden=!0),this.readout&&(this.readout.textContent="")}),t.addEventListener("dblclick",o=>{o.preventDefault(),this.zoomBy(2,this.pointOf(o))}),t.addEventListener("wheel",o=>{this.flag("scroll-zoom",!0)&&(o.preventDefault(),this.zoomBy(Math.exp(-o.deltaY*(o.deltaMode===1?.05:.0018)),this.pointOf(o)))},{passive:!1}),t.addEventListener("keydown",o=>{let d={ArrowLeft:()=>this.pan(-40,0),ArrowRight:()=>this.pan(40,0),ArrowUp:()=>this.pan(0,-40),ArrowDown:()=>this.pan(0,40),"+":()=>this.zoomBy(1.5),"=":()=>this.zoomBy(1.5),"-":()=>this.zoomBy(.6666666666666666),_:()=>this.zoomBy(.6666666666666666),0:()=>this.reset(),Home:()=>this.reset()}[o.key];!d||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),d(),o.key.startsWith("Arrow")&&this.changedSoon())})}countryOf(t){return this.countryEls.find(e=>e.el===t)??null}countryAt(t){let e=this.projection?.invert?.(t);if(!e||!Number.isFinite(e[0]))return null;let a=this.geo;return this.countryEls.find(i=>a.geoContains(i.feature,e))??null}hover(t){if(!this.projection||!this.tooltip||!this.readout)return;let e=this.pointOf(t),a=this.projection.invert?.(e),i=a&&Number.isFinite(a[0])&&(!_.has(this.projectionName)||this.geo.geoDistance([a[0],a[1]],[-this.projection.rotate()[0],-this.projection.rotate()[1]])<(pt[this.projectionName]??90)*Math.PI/180);this.readout.textContent=i?C(a[1],G(a[0]),this.coordsFormat):"";let r=i?this.countryOf(t.target):null;for(let d of this.countryEls)d.el.classList.toggle("hover",d===r);if(!r||t.buttons){this.tooltip.hidden=!0;return}let o=this.input().items.find(d=>d.kind==="country"&&d.code.a3===r.code.a3),s=o&&o.kind==="country"&&o.value!==null?` \xB7 ${this.number(o.value)}`:"";this.tooltip.textContent=`${it(r.code.a2)} ${r.name}${s}`.trim();let c=this.stage.getBoundingClientRect();this.tooltip.style.left=`${t.clientX-c.left+14}px`,this.tooltip.style.top=`${t.clientY-c.top+14}px`,this.tooltip.hidden=!1}clickAt(t){let e=this.pointOf(t),a=this.projection?.invert?.(e);if(!a||!Number.isFinite(a[0]))return;if(this.flag("pick",!1)){let r=Kt(a[1]),o=Kt(G(a[0]));this.pins=[{lat:r,lon:o,label:C(r,o,this.coordsFormat)}],this.build(this.geo),this.renderSide(),this.selectPoint({lat:r,lon:o},C(r,o,this.coordsFormat));return}let i=this.countryOf(t.target)??this.countryAt(e);i&&this.selectCountry(i.code,!1)}selectPoint(t,e){this.announce(this.t("mapSelectedPoint",{label:e,coords:C(t.lat,t.lon,this.coordsFormat)})),O(this,F.SELECT,{type:"point",label:e,lat:t.lat,lon:t.lon})}selectCountry(t,e){this.selected=this.selected===t.a3&&!e?null:t.a3;for(let s of this.countryEls)s.el.classList.toggle("selected",s.code.a3===this.selected);let a=L(t,this.locale),i=this.input().items.find(s=>s.kind==="country"&&s.code.a3===t.a3),r=i&&i.kind==="country"?i.value:null,o=this.countryCenter(t);e&&o&&this.flyTo(o,this.countryZoom(t)),this.selected&&(this.announce(this.t("mapSelectedCountry",{name:a})),O(this,F.SELECT,{type:"country",label:a,code:t.a2||t.a3,a3:t.a3,value:r,lat:o?.lat,lon:o?.lon}))}mainland(t){let e=this.geo,a=e?.countries.find(o=>Q(o.id,o.properties?.name).a3===t.a3);if(!a)return null;if(a.geometry.type!=="MultiPolygon")return a;let i=null,r=-1;for(let o of a.geometry.coordinates){let s={type:"Polygon",coordinates:o},c=e.geoArea(s);c>r&&([i,r]=[s,c])}return i}countryCenter(t){if(!this.geo)return null;let e=this.mainland(t);if(!e)return null;let[a,i]=this.geo.geoCentroid(e);return{lat:i,lon:a}}countryZoom(t){let e=this.mainland(t);if(!e)return 3;let a=this.geo.geoArea(e);return Math.min(14,Math.max(1.5,.9/Math.sqrt(a/(4*Math.PI))/4))}flyTo(t,e){let a={...this.viewState??this.initialView()},i={lon:t.lon,lat:Math.max(-85,Math.min(85,t.lat)),zoom:Math.min(ct,Math.max(1,e))};if(cancelAnimationFrame(this.flight),typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches||!this.projection){this.viewState=i,this.update(),this.changed();return}let o=performance.now(),s=G(i.lon-a.lon),c=d=>{let u=Math.min(1,(d-o)/700),f=u<.5?4*u*u*u:1-(-2*u+2)**3/2;this.viewState={lon:G(a.lon+s*f),lat:a.lat+(i.lat-a.lat)*f,zoom:a.zoom*(i.zoom/a.zoom)**f},this.update(),u<1?this.flight=requestAnimationFrame(c):this.changed()};this.flight=requestAnimationFrame(c)}async find(t){let e=this.t,a=t.trim();if(!a||!this.geo)return;let i=a.match(/^(?:track|locate|traquer|localiser)\s+(.+)$/i);if(i){this.track(i[1]);return}let r=R(a,this.locale),o=r?{country:r}:z(a,this.locale);if(o&&"country"in o){this.selectCountry(o.country,!0),this.status(e("mapFoundCountry",{name:L(o.country,this.locale)}));return}if(o&&"lat"in o){this.dropPin(o,o.name??C(o.lat,o.lon,this.coordsFormat));return}if(o&&"address"in o){if(!this.getAttribute("geocoder")){this.status(e("mapNoGeocoder",{query:a}));return}this.status(e("mapGeocoding",{query:a}));let c=await this.geocode(a);c?this.dropPin(c,c.name||a):this.status(e("mapNotFound",{query:a}));return}this.status(e("mapNotFound",{query:a}))}trackButton(){let t=q({icon:"search",label:this.t("mapTrack"),key:"track",part:"track-button",onClick:()=>this.track(this.movieTarget())}),e=y("svg",{class:"icon",viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor","stroke-width":"2.1","stroke-linecap":"round","aria-hidden":"true"});return e.append(y("circle",{cx:"12",cy:"12",r:"10"}),y("path",{d:"M22 12h-4M6 12H2M12 6V2M12 22v-4"}),y("circle",{cx:"12",cy:"12",r:"1.5"})),t.replaceChildren(e),t}movieTarget(){let t=this.getAttribute("movie")?.trim();if(t&&!/^(?:true|on|yes|1)$/i.test(t))return t;let e=this.input().items.find(a=>a.kind==="marker");if(e&&e.kind==="marker"){let a=this.locate(e.place);if(a)return`${this.markerLabel(e)}: ${a.lat}, ${a.lon}`}return"0, 0"}async track(t){let e=this.t;if(!this.geo||!this.stage)return!1;let a=t.match(/^([^:]{1,80}?)\s*:\s+(.+)$/),i=z(a?a[2]:t,this.locale),r=null,o=(a?a[1]:t).trim();if(i&&"lat"in i)[r,o]=[i,a?o:i.name??o];else if(i&&"country"in i)[r,o]=[this.countryCenter(i.country),L(i.country,this.locale)];else if(i&&"address"in i&&this.getAttribute("geocoder")){let m=await this.geocode(i.address);m&&(r=m)}if(!r)return this.status(e("mapNotFound",{query:o})),!1;let s=r;this.movie?.abort(),cancelAnimationFrame(this.flight);let c=new AbortController;this.movie=c;let{signal:d}=c;if(!_.has(this.projectionName)){this.projectionState="globe",this.viewState={lon:s.lon-70,lat:10,zoom:1},this.pins=[],this.redrawAll();let m=this.root.querySelector('[data-focus-key="projection"]');m&&(m.value="globe")}let u=this.hudView();this.stage.append(u.root),this.stage.classList.add("movie");let f=()=>c.abort(),p=m=>m.key==="Escape"&&f();this.root.addEventListener("keydown",p),u.stop.addEventListener("click",f),this.announce(e("mapTracking",{label:o}));let b=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,l=m=>{let x=()=>(Math.random()-.5)*m;u.coords.textContent=C(s.lat+x(),s.lon+x()*2,"dms")};try{if(b)this.viewState={lon:s.lon,lat:Math.max(-85,Math.min(85,s.lat)),zoom:32},this.update();else{let x=[["ESTABLISHING SATELLITE UPLINK",1,1800,60],["SIGNAL ACQUIRED \u2014 TRIANGULATING",2.5,1700,20],["CROSS-REFERENCING RELAY NODES",6,1600,5],["ENHANCE",14,1400,1],["ENHANCE",32,1300,.1]];for(let[A,P,M,j]of x)u.log(A),await this.animateView({lon:s.lon,lat:s.lat,zoom:P},M,d,$=>l(j*(1-$)+j*.15))}if(d.aborted)throw new Error("stopped");l(0),u.log("TARGET LOCATED"),u.root.classList.add("locked"),this.input().items.some(x=>{let A=x.kind==="marker"?this.locate(x.place):null;return A&&Math.abs(A.lat-s.lat)<1e-4&&Math.abs(A.lon-s.lon)<1e-4})||(this.pins=[{lat:s.lat,lon:s.lon,label:o}],this.build(this.geo),this.stage.append(u.root)),this.renderSide(),this.announce(e("mapTargetLocated",{label:o,coords:C(s.lat,s.lon,this.coordsFormat)})),O(this,F.SELECT,{type:"target",label:o,lat:s.lat,lon:s.lon}),this.changed(),await ie(6e3,d)}catch{}finally{this.root.removeEventListener("keydown",p),u.root.remove(),this.stage?.classList.remove("movie"),this.movie===c&&(this.movie=null)}return!0}hudView(){let t=g("ol",{class:"hud-log",attrs:{"aria-hidden":"true"}}),e=g("div",{class:"hud-coords",attrs:{"aria-hidden":"true"}}),a=g("button",{class:"hud-stop",attrs:{type:"button"},text:this.t("mapStop")}),i=g("div",{class:"hud-time",attrs:{"aria-hidden":"true"}});return i.textContent=`${new Date().toISOString().slice(0,19).replace("T"," ")} UTC`,{root:g("div",{class:"map-hud",part:"hud"},g("div",{class:"hud-scan",attrs:{"aria-hidden":"true"}}),g("div",{class:"hud-corners",attrs:{"aria-hidden":"true"}}),g("div",{class:"hud-reticle",attrs:{"aria-hidden":"true"}},g("span",{class:"hud-ring"}),g("span",{class:"hud-box"})),g("div",{class:"hud-top",attrs:{"aria-hidden":"true"}},g("span",{class:"hud-rec",text:"REC"}),g("span",{text:"SAT-7 // ORBITAL FEED"}),i),t,e,g("div",{class:"hud-locked",attrs:{"aria-hidden":"true"}},g("strong",{text:"TARGET LOCATED"})),a),coords:e,stop:a,log:o=>{for(t.append(g("li",{text:`> ${o}`}));t.children.length>5;)t.firstElementChild?.remove()}}}animateView(t,e,a,i){let r={...this.viewState??this.initialView()},o=G(t.lon-r.lon),s=Math.max(-85,Math.min(85,t.lat));return new Promise(c=>{let d=performance.now(),u=f=>{if(a.aborted)return c();let p=Math.min(1,(f-d)/e),b=p<.5?4*p*p*p:1-(-2*p+2)**3/2;this.viewState={lon:G(r.lon+o*b),lat:r.lat+(s-r.lat)*b,zoom:r.zoom*(t.zoom/r.zoom)**b},this.update(),i?.(p),p<1?this.flight=requestAnimationFrame(u):c()};this.flight=requestAnimationFrame(u)})}dropPin(t,e){this.pins=[{lat:t.lat,lon:t.lon,label:e}];let a=this.viewState??this.initialView();this.build(this.geo),this.renderSide(),this.flyTo(t,Math.max(a.zoom,_.has(this.projectionName)?2:4)),this.status(this.t("mapFound",{label:e,coords:C(t.lat,t.lon,this.coordsFormat)})),this.selectPoint(t,e)}status(t){this.statusLine&&(this.statusLine.textContent=t)}async geocode(t,e){let a=t.toLowerCase(),i=W.get(a);if(i==="none")return null;if(i&&i!=="pending")return i;let r=zt(this.getAttribute("geocoder")??"",t,this.locale);if(!r)return null;try{let o=await fetch(r,{credentials:"omit",headers:{Accept:"application/json"},signal:e});if(!o.ok)throw new Error(String(o.status));let s=It(await o.json());return W.set(a,s??"none"),s}catch(o){return o?.name!=="AbortError"&&W.delete(a),null}}async geocodeItems(){let t=this.getAttribute("geocoder"),e=this.input().items.flatMap(i=>i.kind==="marker"&&"address"in i.place?[i.place.address]:i.kind==="route"?i.stops.flatMap(r=>"address"in r?[r.address]:[]):[]).filter(i=>!W.has(i.toLowerCase())).slice(0,ae);if(!t||!e.length)return;this.geocoding?.abort();let a=new AbortController;this.geocoding=a;for(let[i,r]of e.entries()){if(a.signal.aborted||(i&&await new Promise(o=>setTimeout(o,1e3)),await this.geocode(r,a.signal),a.signal.aborted))return;this.update(),this.renderSide()}}renderSide(){let t=this.t,{items:e}=this.input(),a=this.root.querySelector(".map-legend-host"),i=e.flatMap(s=>s.kind==="country"&&s.value!==null&&!s.color?[s.value]:[]);a&&(a.replaceChildren(),i.length&&a.append(g("div",{class:"map-legend",part:"legend",attrs:{role:"group","aria-label":t("mapLegend")}},g("span",{class:"map-legend-value",text:this.number(Math.min(...i))}),g("span",{class:"map-legend-bar",attrs:{"aria-hidden":"true"}}),g("span",{class:"map-legend-value",text:this.number(Math.max(...i))}))));let r=this.root.querySelector(".map-list-host");if(!r)return;r.replaceChildren();let o=[];for(let s of e)if(s.kind==="marker"){let c=this.locate(s.place),d=this.markerLabel(s),u="address"in s.place&&!c,f=c?C(c.lat,c.lon,this.coordsFormat):this.getAttribute("geocoder")?t("mapLocating"):t("mapNeedsGeocoder");o.push(this.rowView("marker",d,f,s.color,c?()=>this.flyTo(c,Math.max((this.viewState??this.initialView()).zoom,4)):null,u))}else if(s.kind==="country"){let c=L(s.code,this.locale),d=[s.code.a2||s.code.a3,s.value!==null?this.number(s.value):""].filter(Boolean).join(" \xB7 ");o.push(this.rowView("country",`${it(s.code.a2)} ${s.label||c}`.trim(),d,s.color,()=>this.selectCountry(s.code,!0),!1))}else if(s.kind==="route"){let c=s.stops.map(p=>this.locate(p)),d=s.stops.map(p=>"name"in p&&p.name?p.name:"address"in p?p.address:"country"in p?L(p.country,this.locale):C(p.lat,p.lon,this.coordsFormat)),u=0;for(let p=1;p<c.length;p++){let b=c[p-1],l=c[p];b&&l&&(u+=jt(b,l))}let f=c[0];o.push(this.rowView("route",s.label||d.join(" \u2192 "),u?t("mapDistance",{km:this.number(Math.round(u))}):"",s.color,f?()=>this.flyTo(f,2):null,!1))}else s.kind==="shape"&&o.push(this.rowView("shape",s.label||t("mapShape"),s.geometry.type,s.color,null,!1));for(let s of this.pins)o.push(this.rowView("pin",s.label,C(s.lat,s.lon,this.coordsFormat),"",()=>this.flyTo(s,Math.max((this.viewState??this.initialView()).zoom,4)),!1));o.length&&r.append(g("ul",{class:"map-list",part:"list",attrs:{"aria-label":t("mapList")}},...o))}rowView(t,e,a,i,r,o){let s=this.t,c=g("span",{class:`map-swatch ${t}`,attrs:{"aria-hidden":"true"}});i&&c.style.setProperty("--map-item",i);let d=g("span",{class:"sr-only",text:`${s(`mapKind_${t}`)}: `}),u=r?g("button",{class:"map-item-go",attrs:{type:"button",title:s("mapShow",{label:e})},on:{click:r}},d,e):g("span",{class:"map-item-name"},d,e);return g("li",{class:`map-item ${t}${o?" pending":""}`},c,u,a?g("span",{class:"map-item-note",text:a}):null)}number(t){return new Intl.NumberFormat(this.locale,{maximumFractionDigits:2}).format(t)}report(){let t=[];for(let e of this.input().items)if(e.kind==="marker"){let a=this.locate(e.place);t.push(`${this.markerLabel(e)}: ${a?C(a.lat,a.lon):"?"}`)}else e.kind==="country"?t.push(`${L(e.code,this.locale)} (${e.code.a2||e.code.a3})${e.value!==null?`: ${e.value}`:""}`):e.kind==="route"&&t.push(e.stops.map(a=>{let i=this.locate(a);return i?C(i.lat,i.lon):"?"}).join(" -> "));for(let e of this.pins)t.push(`${e.label}: ${C(e.lat,e.lon)}`);return t.join(`
`)}geoJson(){let t=[];for(let e of this.input().items){let a={name:e.kind==="marker"?this.markerLabel(e):e.label||void 0,color:e.color||void 0};if(e.kind==="marker"){let i=this.locate(e.place);i&&t.push({type:"Feature",properties:a,geometry:{type:"Point",coordinates:[i.lon,i.lat]}})}else if(e.kind==="route"){let i=e.stops.map(r=>this.locate(r));i.every(Boolean)&&t.push({type:"Feature",properties:a,geometry:{type:"LineString",coordinates:i.map(r=>[r.lon,r.lat])}})}else if(e.kind==="shape")t.push({type:"Feature",properties:a,geometry:e.geometry});else if(e.kind==="country"){let i=this.geo?.countries.find(r=>Q(r.id,r.properties?.name).a3===e.code.a3);t.push({type:"Feature",properties:{...a,name:L(e.code,this.locale),code:e.code.a3,value:e.value??void 0},geometry:i?.geometry??null})}}for(let e of this.pins)t.push({type:"Feature",properties:{name:e.label},geometry:{type:"Point",coordinates:[e.lon,e.lat]}});return JSON.stringify({type:"FeatureCollection",features:t},null,2)}changed(){clearTimeout(this.changeTimer),O(this,F.CHANGE,this.view)}changedSoon(){clearTimeout(this.changeTimer),this.changeTimer=setTimeout(()=>O(this,F.CHANGE,this.view),300)}createEditor(){return this.editor?.destroy(),this.editor=new Ct({text:this.text??"",language:"plaintext",lineNumbers:!0,wrap:!0,highlightLimit:Y().highlightLimit,label:this.heading||this.t("editor"),placeholder:this.getAttribute("placeholder")??void 0,onInput:t=>this.edited(t),onChange:t=>O(this,F.CHANGE,{value:t}),history:this.editHistory??void 0}),this.editor}contentEdited(){clearTimeout(this.previewTimer),this.previewTimer=setTimeout(()=>this.render(),300)}};function oe(n,t,e){if(e.a3==="ATA"||e.a3==="GRL")return"ice";if(new Set(["DZA","LBY","EGY","MRT","MLI","NER","TCD","SDN","ESH","SAU","YEM","OMN","ARE","QAT","KWT","IRQ","JOR","SYR","IRN","AFG","PAK","TKM","UZB","KAZ","MNG","NAM","BWA","AUS","DJI","SOM","SOL","ERI","ISR","PSE","TUN","MAR"]).has(e.a3))return"desert";let i=Ut.get(t);i===void 0&&(i=n.geoCentroid(t)[1],Ut.set(t,i));let r=Math.abs(i);return r>58?"tundra":r>35?"forest":r>20?"steppe":"tropic"}function ie(n,t){return new Promise(e=>{let a=setTimeout(e,n);t.addEventListener("abort",()=>{clearTimeout(a),e()})})}function G(n){return((n+180)%360+360)%360-180}function Kt(n){return Math.round(n*1e5)/1e5}function $t(n){let[t,e]=[...n.values()];return Math.hypot(t[0]-e[0],t[1]-e[1])||1}export{Dt as a};
