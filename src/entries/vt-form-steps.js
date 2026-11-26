// @ts-check
/**
 * ES module that defines <vt-form-steps> in dist/esm/vt-form-steps.js. The fields inside the
 * steps are your own: load the elements you use (`vt-field`, `vt-tags`…), or use the loader.
 * Code shared with other components is split into common chunks and loaded once.
 *
 * @example
 * <script type="module" src="https://cdn.jsdelivr.net/gh/ecrou-exact/vitrine@0/dist/esm/vt-form-steps.js"></script>
 */
import { VtFormSteps } from '../components/form-steps/vt-form-steps.js';
import { useAssetsFrom } from './assets.js';

useAssetsFrom(new URL('../', import.meta.url));
if (!customElements.get('vt-form-steps')) customElements.define('vt-form-steps', VtFormSteps);

export { VtFormSteps };
export * from './api.js';
