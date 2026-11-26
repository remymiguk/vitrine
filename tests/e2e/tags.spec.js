import { expect, test } from '@playwright/test';
import { STRICT, collectErrors, events, recordEvents } from './helpers.js';

const OPTIONS = JSON.stringify({
  value: ['design'],
  options: [
    { value: 'design', group: 'Product', count: 8 },
    { value: 'research', group: 'Product' },
    { value: 'a11y', label: 'accessibility', group: 'Quality' },
    { value: 'security', group: 'Quality', disabled: true },
  ],
});

/** Mounts a vt-tags element inside a form. */
async function mountTags(page, attrs, content = OPTIONS) {
  await page.evaluate(
    ({ attrs, content }) => {
      const form = document.createElement('form');
      form.id = 'form';
      const el = document.createElement('vt-tags');
      el.id = 'el';
      for (const [name, value] of Object.entries(attrs)) el.setAttribute(name, value);
      el.content = content;
      form.append(el);
      document.getElementById('root').replaceChildren(form);
    },
    { attrs, content },
  );
  await page.locator('#el .tags-body').waitFor();
}

const formValue = (page) =>
  page.evaluate(() => new FormData(document.getElementById('form')).get('topics'));

test.describe('<vt-tags>', () => {
  /** @type {string[]} */
  let errors;
  test.beforeEach(async ({ page }) => {
    errors = collectErrors(page);
    await page.goto(STRICT);
  });
  test.afterEach(() => expect(errors).toEqual([]));

  test('view mode shows chips with counts, colors and per-tag parts', async ({ page }) => {
    await mountTags(
      page,
      { counts: '' },
      JSON.stringify([{ value: 'urgent', color: '#e5484d', count: 3, kind: 'danger' }, 'plain']),
    );
    const tags = page.locator('#el [part~="tag"]');
    await expect(tags).toHaveCount(2);
    await expect(tags.first()).toHaveAttribute('part', 'tag tag-urgent tag-kind-danger');
    await expect(page.locator('#el [part="tag-count"]')).toHaveText('3');
    await expect(page.locator('#el textarea, #el input')).toHaveCount(0);
  });

  test('autocomplete: Enter picks the best match', async ({ page }) => {
    await mountTags(page, { mode: 'edit', name: 'topics' });
    const input = page.locator('#el').getByRole('combobox');
    await input.click();
    await page.keyboard.type('res');
    await expect(page.locator('#el [role="option"]').first()).toHaveAttribute(
      'part',
      'option option-active',
    );
    await page.keyboard.press('Enter');
    expect(await formValue(page)).toBe('["design","research"]');
  });

  test('labels are searched too, and Create is offered last', async ({ page }) => {
    await mountTags(page, { mode: 'edit', name: 'topics' });
    await page.locator('#el').getByRole('combobox').click();
    await page.keyboard.type('access');
    const options = page.locator('#el [role="option"]');
    await expect(options.first()).toContainText('accessibility');
    await page.keyboard.press('Enter');
    expect(await formValue(page)).toBe('["design","a11y"]');
    await page.keyboard.type('brand-new');
    await expect(options.last()).toContainText('Create "brand-new"');
  });

  test('separators and a prefix create tags', async ({ page }) => {
    await mountTags(page, { mode: 'edit', name: 'topics', prefix: '#' }, '[]');
    await page.locator('#el').getByRole('combobox').click();
    await page.keyboard.type('#alpha #beta,gamma;');
    expect(await formValue(page)).toBe('["alpha","beta","gamma"]');
  });

  test('pasted lists create tags', async ({ page, browserName }) => {
    // Firefox does not let scripts build a ClipboardEvent with clipboard data.
    test.skip(browserName === 'firefox', 'Synthetic paste events carry no data in Firefox.');
    await mountTags(page, { mode: 'edit', name: 'topics', prefix: '#' }, '[]');
    const input = page.locator('#el').getByRole('combobox');
    await input.click();
    await page.keyboard.type('#alpha #beta,');
    await page.evaluate(() => {
      const field = document.getElementById('el').shadowRoot.querySelector('input');
      const data = new DataTransfer();
      data.setData('text/plain', '#gamma, #delta\n#alpha');
      field.dispatchEvent(
        new ClipboardEvent('paste', { clipboardData: data, bubbles: true, cancelable: true }),
      );
    });
    expect(await formValue(page)).toBe('["alpha","beta","gamma","delta"]');
  });

  test('Backspace twice removes the last tag', async ({ page }) => {
    await mountTags(page, { mode: 'edit', name: 'topics' });
    await page.locator('#el').getByRole('combobox').click();
    await page.keyboard.press('Backspace');
    await expect(page.locator('#el .tag.armed')).toHaveCount(1);
    await page.keyboard.press('Backspace');
    expect(await formValue(page)).toBe('[]');
  });

  test('limits: max-tags, maxlength, pattern, disabled options, allow-create="false"', async ({
    page,
  }) => {
    await mountTags(
      page,
      { mode: 'edit', name: 'topics', 'max-tags': '2', maxlength: '5', pattern: '[a-z]+' },
      '[]',
    );
    const input = page.locator('#el').getByRole('combobox');
    await input.click();
    await page.keyboard.type('toolong,');
    await expect(page.locator('#el .tags-message')).toHaveText('toolong is too long.');
    await page.keyboard.type('a1,');
    await expect(page.locator('#el .tags-message')).toHaveText('a1 is not a valid tag.');
    await page.keyboard.type('one,two,three,');
    expect(await formValue(page)).toBe('["one","two"]');
    // Once full, the field is read-only and says why.
    await expect(input).toHaveAttribute('readonly', '');
    await expect(page.locator('#el [part="tags-status"]')).toContainText('2 / 2 tags');

    await mountTags(page, { mode: 'edit', name: 'topics', 'allow-create': 'false' });
    await page.locator('#el').getByRole('combobox').click();
    await page.keyboard.type('unknown,');
    await expect(page.locator('#el .tags-message')).toHaveText('unknown is not in the list.');
    await page.keyboard.type('secu');
    await expect(page.locator('#el [role="option"]').first()).toHaveAttribute(
      'aria-disabled',
      'true',
    );
  });

  test('vt-tag-create can refuse a tag, events describe each change', async ({ page }) => {
    await mountTags(page, { mode: 'edit', name: 'topics' }, '[]');
    await page.evaluate(() =>
      document.getElementById('el').addEventListener('vt-tag-create', (event) => {
        if (event.detail.tag.value === 'nope') event.preventDefault();
      }),
    );
    await recordEvents(page, ['vt-change']);
    await page.locator('#el').getByRole('combobox').click();
    await page.keyboard.type('nope,yes,');
    expect(await formValue(page)).toBe('["yes"]');
    const changes = await events(page);
    expect(changes).toEqual([
      {
        type: 'vt-change',
        detail: { value: ['yes'], added: [{ value: 'yes', label: 'yes' }], removed: [] },
      },
    ]);
  });

  test('form integration: required, reset, value-format', async ({ page }) => {
    await mountTags(
      page,
      { mode: 'edit', name: 'topics', required: '', 'value-format': 'csv' },
      '["a,b"]',
    );
    expect(await formValue(page)).toBe('"a,b"');
    await page
      .locator('#el')
      .getByRole('button', { name: /Remove a,b/ })
      .click();
    expect(await page.evaluate(() => document.getElementById('form').checkValidity())).toBe(false);
    await page.evaluate(() => document.getElementById('form').reset());
    expect(await formValue(page)).toBe('"a,b"');
  });

  test('answers checkValidity(), reportValidity(), validity and validationMessage', async ({
    page,
  }) => {
    await mountTags(page, { mode: 'edit', name: 'topics', required: '' }, '[]');
    const state = () =>
      page.evaluate(() => {
        const el = /** @type {any} */ (document.getElementById('el'));
        const probe = {
          valid: el.checkValidity(),
          validity: el.validity.valid,
          valueMissing: el.validity.valueMissing,
          message: el.validationMessage,
        };
        return probe;
      });
    const empty = await state();
    expect(empty.valid).toBe(false);
    expect(empty.validity).toBe(false);
    expect(empty.valueMissing).toBe(true);
    expect(empty.message).not.toBe('');
    expect(await page.evaluate(() => /** @type {any} */ (document.getElementById('el')).reportValidity())).toBe(false); // prettier-ignore
    await page.evaluate(() => {
      /** @type {any} */ (document.getElementById('el')).value = ['design'];
    });
    expect(await state()).toEqual({
      valid: true,
      validity: true,
      valueMissing: false,
      message: '',
    });
    expect(await page.evaluate(() => /** @type {any} */ (document.getElementById('el')).reportValidity())).toBe(true); // prettier-ignore
  });

  test('shows a persistent error and aria-invalid after reportValidity(), and clears it', async ({
    page,
  }) => {
    await mountTags(page, { mode: 'edit', name: 'topics', required: '' }, '[]');
    const error = page.locator('#el [part="error"]');
    const input = page.locator('#el .tag-input');
    await expect(error).toBeHidden();
    await expect(input).not.toHaveAttribute('aria-invalid', 'true');
    expect(await page.evaluate(() => /** @type {any} */ (document.getElementById('el')).reportValidity())).toBe(false); // prettier-ignore
    await expect(error).toBeVisible();
    await expect(error).toHaveText('Select at least one tag.');
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    const errorId = await error.getAttribute('id');
    expect(await input.getAttribute('aria-describedby')).toContain(errorId);
    await expect(page.locator('#el .field')).toHaveClass(/invalid/);
    // Still there after the 4 s status message would be gone.
    await page.waitForTimeout(4200);
    await expect(error).toBeVisible();
    await input.fill('design');
    await input.press('Enter');
    await expect(error).toBeHidden();
    await expect(input).not.toHaveAttribute('aria-invalid', 'true');
  });

  test('a refused native submit focuses the tag input without a "not focusable" error', async ({
    page,
  }) => {
    await mountTags(page, { mode: 'edit', name: 'topics', required: '' }, '[]');
    await page.evaluate(() => {
      const form = /** @type {HTMLFormElement} */ (document.getElementById('form'));
      const go = document.createElement('button');
      go.type = 'submit';
      go.id = 'go';
      go.textContent = 'Go';
      form.append(go);
    });
    await page.locator('#go').click();
    const error = page.locator('#el [part="error"]');
    await expect(error).toBeVisible();
    await expect(page.locator('#el .tag-input')).toBeFocused();
    expect(errors.filter((text) => /not focusable/i.test(text))).toEqual([]);
    await page.locator('#el .tag-input').fill('design');
    await page.locator('#el .tag-input').press('Enter');
    await expect(error).toBeHidden();
    await page.evaluate(() => {
      /** @type {any} */ (document.getElementById('el')).value = [];
    });
    await page.locator('#go').click();
    await expect(error).toBeVisible();
    await page.evaluate(() => /** @type {HTMLFormElement} */ (document.getElementById('form')).reset()); // prettier-ignore
    await expect(error).toBeHidden();
  });

  test('browse panel lists every option with checkboxes', async ({ page }) => {
    await mountTags(page, { mode: 'edit', name: 'topics', variant: 'full' });
    await page.locator('#el').getByRole('button', { name: 'Browse all tags' }).click();
    const panel = page.locator('#el [part="browse-panel"]');
    await expect(panel.getByRole('group', { name: 'Product' })).toBeVisible();
    await panel.getByLabel('accessibility').check();
    expect(await formValue(page)).toBe('["design","a11y"]');
    await panel.getByRole('searchbox').fill('res');
    await expect(panel.locator('.browse-option')).toHaveCount(1);
  });

  test('suggest property asks a backend', async ({ page }) => {
    await mountTags(page, { mode: 'edit', name: 'topics' }, '[]');
    await page.evaluate(() => {
      document.getElementById('el').suggest = async (query) => [`${query}-from-api`];
    });
    await page.locator('#el').getByRole('combobox').click();
    await page.keyboard.type('zed');
    await expect(page.locator('#el [role="option"]', { hasText: 'zed-from-api' })).toBeVisible();
  });
});
