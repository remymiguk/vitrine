import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { STRICT, collectErrors } from './helpers.js';

/**
 * Steps written as markup, as a tree the page builds with the DOM API (the strict page forbids
 * `innerHTML`): `[tag, attributes, ...children]`, a string being text.
 */
const STEPS = [
  [
    'fieldset',
    { id: 'contact' },
    ['legend', {}, 'Contact'],
    ['vt-field', { name: 'email', type: 'email', label: 'Email', required: '' }],
  ],
  [
    'fieldset',
    { id: 'needs' },
    ['legend', {}, 'Your needs'],
    ['vt-field', { name: 'topics', type: 'checkboxes', label: 'Topics', required: '' }, 'a | Alpha\nb | Beta\nc | Gamma'], // prettier-ignore
    ['vt-tags', { name: 'tags', mode: 'edit', placeholder: 'Add a tag', 'allow-create': '' }],
  ],
  [
    'fieldset',
    { id: 'when' },
    ['legend', {}, 'When'],
    ['vt-date-picker', { name: 'start', label: 'Start date', required: '' }],
    ['label', {}, 'Note ', ['input', { name: 'note', id: 'note' }]],
  ],
];

/**
 * @param {import('@playwright/test').Page} page
 * @param {{ attrs?: Record<string, string>, steps?: unknown[], inForm?: boolean }} [options]
 */
async function place(page, { attrs = {}, steps = STEPS, inForm = false } = {}) {
  await page.evaluate(
    ({ attrs, steps, inForm }) => {
      const build = (/** @type {any} */ node) => {
        if (typeof node === 'string') return document.createTextNode(node);
        const [tag, props, ...kids] = node;
        const element = document.createElement(tag);
        for (const [name, value] of Object.entries(props))
          element.setAttribute(name, String(value));
        for (const kid of kids) element.append(build(kid));
        return element;
      };
      const el = document.createElement('vt-form-steps');
      el.id = 'el';
      el.setAttribute('lang-ui', 'en');
      for (const [name, value] of Object.entries(attrs)) el.setAttribute(name, value);
      for (const step of steps) el.append(build(step));
      const w = /** @type {any} */ (window);
      w.__events = [];
      w.__sent = null;
      for (const type of ['vt-step', 'vt-ready'])
        el.addEventListener(type, (event) => w.__events.push({ type, detail: /** @type {any} */ (event).detail })); // prettier-ignore
      const root = document.getElementById('root');
      if (!inForm) {
        root?.replaceChildren(el);
        return;
      }
      const form = document.createElement('form');
      form.id = 'form';
      form.append(el);
      const send = document.createElement('button');
      send.id = 'send';
      send.type = 'submit';
      send.textContent = 'Send';
      form.append(send);
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const entries = [...new FormData(form).entries()].map(([k, v]) => [k, typeof v === 'string' ? v : v.name]); // prettier-ignore
        w.__sent = entries;
      });
      root?.replaceChildren(form);
    },
    { attrs, steps, inForm },
  );
  await expect(page.locator('#el')).toBeVisible();
  await page.waitForFunction(() => /** @type {any} */ (window).__events.some((/** @type {any} */ e) => e.type === 'vt-ready')); // prettier-ignore
}

const events = (/** @type {import('@playwright/test').Page} */ page) =>
  page.evaluate(() => /** @type {any} */ (window).__events);

/**
 * Adds a tag and leaves the field: the tag field shows a status line while it has the focus, so
 * a button below it moves up when it loses the focus (a click would then miss it).
 */
async function addTag(
  /** @type {import('@playwright/test').Page} */ page,
  /** @type {string} */ tag,
) {
  await page.locator('vt-tags input').fill(tag);
  await page.keyboard.press('Enter');
  await page.evaluate(() => /** @type {HTMLElement} */ (document.activeElement)?.blur());
}

/** Fills the first step and goes on, as a reader would. */
async function fillContact(/** @type {import('@playwright/test').Page} */ page) {
  await page.locator('vt-field[name="email"] input').fill('nobody@example.com');
}

test.describe('<vt-form-steps>', () => {
  /** @type {string[]} */
  let errors;

  test.beforeEach(async ({ page }) => {
    errors = collectErrors(page);
    await page.goto(STRICT);
  });
  test.afterEach(() => expect(errors).toEqual([]));

  test('shows one step at a time, and the others cannot be reached', async ({ page }) => {
    await place(page);
    await expect(page.locator('#contact')).toBeVisible();
    await expect(page.locator('#needs')).toBeHidden();
    await expect(page.locator('#when')).toBeHidden();
    await expect(page.locator('#needs')).toHaveAttribute('inert', '');
    await expect(page.locator('#el')).toContainText('Step 1 of 3');
    // Tab never goes into a step that is not shown.
    await page.locator('vt-field[name="email"] input').focus();
    await page.keyboard.press('Tab');
    const inside = await page.evaluate(() => {
      const active = document.activeElement;
      return active?.closest('#needs, #when') !== null;
    });
    expect(inside).toBe(false);
  });

  test('a page style cannot bring a hidden step back', async ({ page }) => {
    await place(page);
    await page.evaluate(() => {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync('fieldset { display: grid; } fieldset[hidden] { display: grid; }');
      document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
    });
    await expect(page.locator('#contact')).toBeVisible();
    await expect(page.locator('#needs')).toBeHidden();
  });

  test('checks the fields of the step before Next, with the field own message', async ({
    page,
  }) => {
    await place(page);
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.locator('#contact')).toBeVisible();
    await expect(page.locator('vt-field[name="email"]')).toContainText('This field is required.');
    // The focus is in the invalid field.
    await expect(page.locator('vt-field[name="email"] input')).toBeFocused();
    await page.locator('vt-field[name="email"] input').fill('nope');
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.locator('#contact')).toBeVisible();
    await expect(page.locator('vt-field[name="email"]')).toContainText('email address');
    await fillContact(page);
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.locator('#needs')).toBeVisible();
    await expect(page.locator('#contact')).toBeHidden();
    expect((await events(page)).filter((e) => e.type === 'vt-step').map((e) => e.detail)).toEqual([
      { from: 0, to: 1, title: 'Your needs' },
    ]);
  });

  test('moves the focus to the legend and announces the step', async ({ page }) => {
    await place(page);
    await fillContact(page);
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.locator('#needs legend')).toBeFocused();
    await expect.poll(() => page.locator('#el').evaluate((el) => /** @type {any} */ (el).live.textContent)).toBe('Step 2 of 3: Your needs'); // prettier-ignore
    // The step is a group named by its legend.
    await expect(page.getByRole('group', { name: 'Your needs' })).toBeVisible();
  });

  test('works with any field: checkboxes, tags, a date and a native input', async ({ page }) => {
    await place(page);
    await fillContact(page);
    await page.getByRole('button', { name: 'Next' }).click();
    // Checkboxes are required.
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.locator('#needs')).toBeVisible();
    await page.getByRole('checkbox', { name: 'Beta' }).check();
    await addTag(page, 'urgent');
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.locator('#when')).toBeVisible();
    // The date is required too: Submit checks it.
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#when')).toBeVisible();
    await page.locator('vt-date-picker input').first().fill('2026-12-31');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  });

  for (const [tag, attrs] of /** @type {[string, Record<string, string>][]} */ ([
    ['vt-password', { name: 'secret', label: 'Password', required: '' }],
    ['vt-upload', { name: 'doc', label: 'Document', required: '' }],
  ])) {
    test(`Next waits for a required ${tag}`, async ({ page }) => {
      await place(page, {
        steps: [
          ['fieldset', { id: 'one' }, ['legend', {}, 'One'], [tag, attrs]],
          [
            'fieldset',
            { id: 'two' },
            ['legend', {}, 'Two'],
            ['input', { name: 'x', 'aria-label': 'X' }],
          ],
        ],
      });
      await page.getByRole('button', { name: 'Next' }).click();
      await expect(page.locator('#one')).toBeVisible();
      await expect(page.locator('#two')).toBeHidden();
    });
  }

  test('a field that cannot check itself does not block Next', async ({ page }) => {
    await place(page, {
      steps: [
        [
          'fieldset',
          { id: 'one' },
          ['legend', {}, 'One'],
          [
            'vt-icon-picker',
            { name: 'icon', label: 'Icon', sets: 'lucide', value: 'lucide:heart' },
          ],
          ['vt-tags', { name: 'tags', mode: 'edit', 'allow-create': '' }, '["x"]'],
        ],
        [
          'fieldset',
          { id: 'two' },
          ['legend', {}, 'Two'],
          ['input', { name: 'x', 'aria-label': 'X' }],
        ],
      ],
    });
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.locator('#two')).toBeVisible();
    await expect(page.locator('#one')).toBeHidden();
  });

  test('the navigation buttons are as wide as their text (no icon-button rule leaks in)', async ({
    page,
  }) => {
    await place(page, { attrs: { review: '' } });
    await fillContact(page);
    const widths = async () =>
      page.evaluate(() => {
        const el = /** @type {any} */ (document.getElementById('el'));
        return [...el.root.querySelectorAll('.nav button, .review-head button')].map((b) => {
          const range = document.createRange();
          range.selectNodeContents(b);
          return { text: b.textContent, button: b.getBoundingClientRect().width, label: range.getBoundingClientRect().width }; // prettier-ignore
        });
      });
    await page.getByRole('button', { name: 'Next' }).click();
    const nav = await widths();
    expect(nav.length).toBeGreaterThan(0);
    for (const b of nav) expect(b.button, b.text).toBeGreaterThan(b.label);
    await page.getByRole('checkbox', { name: 'Alpha' }).check();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('vt-date-picker input').first().fill('2026-12-31');
    await page.keyboard.press('Tab');
    await page.getByRole('button', { name: 'Next' }).or(page.getByRole('button', { name: 'Review answers' })).first().click(); // prettier-ignore
    await expect(page.locator('#el .review')).toBeVisible();
    for (const b of await widths()) expect(b.button, b.text).toBeGreaterThan(b.label);
  });

  test('Back never checks, and goes back to the filled-in step', async ({ page }) => {
    await place(page);
    await fillContact(page);
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Back' }).click();
    await expect(page.locator('#contact')).toBeVisible();
    await expect(page.locator('vt-field[name="email"] input')).toHaveValue('nobody@example.com');
    await page.locator('vt-field[name="email"] input').fill('');
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('Enter in a text field goes to the next step', async ({ page }) => {
    await place(page, { inForm: true });
    await page.locator('vt-field[name="email"] input').fill('nobody@example.com');
    await page.keyboard.press('Enter');
    await expect(page.locator('#needs')).toBeVisible();
    // The form was not submitted by it.
    expect(await page.evaluate(() => /** @type {any} */ (window).__sent)).toBeNull();
  });

  test('the list of steps is keyboard accessible and goes back to steps reached', async ({
    page,
  }) => {
    await place(page, { attrs: { progress: 'steps' } });
    await expect(page.getByRole('list', { name: 'Steps' })).toBeVisible();
    await expect(page.locator('#el .progress-steps button')).toHaveCount(0);
    await fillContact(page);
    await page.getByRole('button', { name: 'Next' }).click();
    const back = page.getByRole('button', { name: 'Step 1: Contact' });
    await back.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#contact')).toBeVisible();
    // Step 2 was reached, so it can be clicked; step 3 was not.
    await expect(page.locator('#el .progress-steps button')).toHaveCount(1);
    await page.getByRole('button', { name: 'Step 2: Your needs' }).click();
    await expect(page.locator('#needs')).toBeVisible();
    await expect(page.locator('#el .progress-item.current')).toContainText('Your needs');
  });

  test('a review screen lists every step with an Edit button', async ({ page }) => {
    await place(page, { attrs: { review: '' } });
    await fillContact(page);
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('checkbox', { name: 'Gamma' }).check();
    await addTag(page, 'urgent');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.locator('vt-date-picker input').first().fill('2026-12-31');
    await page.locator('#note').fill('Hello');
    await page.getByRole('button', { name: 'Review answers' }).click();
    const review = page.locator('#el .review');
    await expect(review).toBeVisible();
    await expect(review).toContainText('Contact');
    await expect(review).toContainText('nobody@example.com');
    await expect(review).toContainText('Gamma');
    await expect(review).toContainText('urgent');
    await expect(review).toContainText('Hello');
    await expect(page.locator('#when')).toBeHidden();
    await page.getByRole('button', { name: 'Edit: Contact' }).click();
    await expect(page.locator('#contact')).toBeVisible();
    await page.getByRole('button', { name: 'Next' }).click();
    // Next from an edited step returns to the review at once.
    await expect(review).toBeVisible();
  });

  test('in a form, Submit submits the form with every step, as a normal submit', async ({
    page,
  }) => {
    await place(page, { inForm: true });
    await page.evaluate(() => {
      const el = /** @type {any} */ (document.getElementById('el'));
      el.querySelector('vt-field[name="email"]').value = 'nobody@example.com';
      el.querySelector('vt-field[name="topics"]').value = ['a', 'c'];
      el.querySelector('vt-tags').value = ['x'];
      el.querySelector('vt-date-picker').value = '2026-12-31';
      el.goTo(2);
    });
    const submit = page.getByRole('button', { name: 'Submit' });
    await expect(submit).toHaveJSProperty('localName', 'button');
    await submit.click();
    await expect.poll(() => page.evaluate(() => /** @type {any} */ (window).__sent)).not.toBeNull();
    const sent = await page.evaluate(() => /** @type {any} */ (window).__sent);
    expect(sent).toEqual(
      expect.arrayContaining([
        ['email', 'nobody@example.com'],
        ['topics', 'a'],
        ['topics', 'c'],
        ['start', '2026-12-31'],
      ]),
    );
  });

  test('without a form, Submit only checks the steps', async ({ page }) => {
    await place(page);
    await page.evaluate(() => {
      const el = /** @type {any} */ (document.getElementById('el'));
      el.querySelector('vt-field[name="email"]').value = 'nobody@example.com';
      el.querySelector('vt-field[name="topics"]').value = ['a'];
      el.querySelector('vt-tags').value = ['x'];
      el.querySelector('vt-date-picker').value = '2026-12-31';
      el.goTo(2);
    });
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#when')).toBeVisible();
  });

  test('Submit goes to the first step with a problem', async ({ page }) => {
    await place(page);
    await page.evaluate(() => {
      const el = /** @type {any} */ (document.getElementById('el'));
      el.querySelector('vt-field[name="topics"]').value = ['a'];
      el.querySelector('vt-tags').value = ['x'];
      el.querySelector('vt-date-picker').value = '2026-12-31';
      // The first step is empty.
      el.querySelector('#when').removeAttribute('hidden');
      el.querySelector('#contact').setAttribute('hidden', '');
      /** @type {any} */ (el).index = 2;
      el.render();
    });
    await expect(page.locator('#when')).toBeVisible();
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#contact')).toBeVisible();
    await expect(page.locator('vt-field[name="email"]')).toContainText('This field is required.');
    await expect(page.locator('vt-field[name="email"] input')).toBeFocused();
  });

  for (const theme of /** @type {const} */ (['light', 'dark'])) {
    test(`has no accessibility violations in a step and the review, ${theme} theme`, async ({
      page,
    }) => {
      // The fields are the page's own elements: they follow the theme of the page.
      await page.emulateMedia({ colorScheme: theme });
      await place(page, { attrs: { variant: 'full', label: 'Sign up' } });
      const check = async () => {
        const results = await new AxeBuilder({ page })
          .include('#el')
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
          .analyze();
        return results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`); // prettier-ignore
      };
      expect(await check()).toEqual([]);
      await page.evaluate(() => {
        const el = /** @type {any} */ (document.getElementById('el'));
        el.querySelector('vt-field[name="email"]').value = 'nobody@example.com';
        el.querySelector('vt-field[name="topics"]').value = ['a'];
        el.querySelector('vt-tags').value = ['x'];
        el.querySelector('vt-date-picker').value = '2026-12-31';
        el.goTo('review');
      });
      await expect(page.locator('#el .review')).toBeVisible();
      expect(await check()).toEqual([]);
    });
  }

  test('speaks French and respects reduced motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await place(page, { attrs: { 'lang-ui': 'fr' } });
    await expect(page.locator('#el')).toContainText('Étape 1 sur 3');
    await expect(page.getByRole('button', { name: 'Suivant' })).toBeVisible();
    const transition = await page.locator('#el .bar-fill').evaluate((n) => getComputedStyle(n).transitionDuration); // prettier-ignore
    expect(transition).toBe('0s');
  });
});
