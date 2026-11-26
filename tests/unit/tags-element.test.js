// @ts-check
import { afterEach, describe, expect, it } from 'vitest';
import { VtTags } from '../../src/components/tags/vt-tags.js';

if (!customElements.get('vt-tags')) customElements.define('vt-tags', VtTags);

afterEach(() => document.body.replaceChildren());

describe('<vt-tags> validity API', () => {
  it('answers as valid where ElementInternals is missing, without throwing', async () => {
    const el = /** @type {VtTags} */ (document.createElement('vt-tags'));
    el.setAttribute('required', '');
    el.setAttribute('mode', 'edit');
    document.body.append(el);
    await new Promise((resolve) => setTimeout(resolve, 0));
    // happy-dom has no attachInternals(): the browser behavior is covered by tests/e2e/tags.spec.js.
    expect(el.validity).toBeUndefined();
    expect(el.validationMessage).toBe('');
    expect(el.checkValidity()).toBe(true);
    expect(el.reportValidity()).toBe(true);
  });
});

describe('<vt-tags> error state', () => {
  it('shows the message under the field after reportValidity() and clears it', async () => {
    const el = /** @type {VtTags} */ (document.createElement('vt-tags'));
    el.setAttribute('required', '');
    el.setAttribute('mode', 'edit');
    document.body.append(el);
    await new Promise((resolve) => setTimeout(resolve, 0));
    const error = /** @type {HTMLElement} */ (el.shadowRoot?.querySelector('[part="error"]'));
    const input = /** @type {HTMLElement} */ (el.shadowRoot?.querySelector('.tag-input'));
    expect(error.textContent).toBe('');
    expect(input.hasAttribute('aria-invalid')).toBe(false);
    el.reportValidity();
    expect(error.textContent).not.toBe('');
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(input.getAttribute('aria-describedby')).toContain(error.id);
    el.value = ['design'];
    expect(error.textContent).toBe('');
    expect(input.hasAttribute('aria-invalid')).toBe(false);
  });
});
