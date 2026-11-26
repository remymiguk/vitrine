# `<vt-form-steps>`

`<vt-form-steps>` shows the `<fieldset>` children of a form one step at a time. It does not draw fields of its own: the fields are the ones you already use ([`<vt-field>`](field.md), [`<vt-tags>`](tags.md), [`<vt-date-picker>`](date-picker.md), [`<vt-upload>`](upload.md), [`<vt-password>`](password.md), or native inputs), so each keeps its own labels, rules, messages and value in the form. The element adds what a multi-step form needs: Back and Next, a progress bar or a list of steps, a check of the fields of the step before Next, "Step 2 of 6: Contact" read aloud, and a review screen.

```html
<form action="/signup" method="post">
  <vt-form-steps progress="bar" review>
    <fieldset>
      <legend>Contact</legend>
      <vt-field name="email" type="email" required label="Email"></vt-field>
    </fieldset>
    <fieldset>
      <legend>Your needs</legend>
      <vt-field name="topics" type="checkboxes" required label="Topics">
        code | Code blocks
        json | JSON viewer
      </vt-field>
      <vt-upload name="files" label="Files"></vt-upload>
    </fieldset>
  </vt-form-steps>
</form>
```

Before the script loads, or without JavaScript, the page is an ordinary form with every fieldset visible: nothing is lost.

## Steps

A step is a `<fieldset>` that is a direct child of the element, with a `<legend>` that names it. The legend is the title of the step in the list of steps, in the announcement and on the review screen; a step without one is called "Step 3". A fieldset deeper inside a step is a group of fields, not a step. Anything else you put in the element (a paragraph, a heading) is part of every screen of the steps.

Only the current step is shown. The other fieldsets get the `hidden` and `inert` attributes: they take no room, nothing in them can take the focus or be clicked, and screen readers skip them, even if your own style sets `display` on `fieldset` (the element wins over it for a step that is not shown). Their fields stay in the page and in the form, so they are still submitted. The element adds and removes these two attributes itself, and a `tabindex="-1"` to the legend when it moves the focus there; a fieldset that leaves the element, or the element leaving the page, gets them removed.

Steps are read again when fieldsets are added, removed, moved or renamed (a legend edited); changes inside a field do not matter. The element tracks each step by its fieldset, so the reader stays on the same step, and the steps already passed keep their mark, when others are added, removed or reordered.

## What Next checks

The element does not validate anything. When the reader presses Next, it asks every form control of the current step, with `checkValidity()`:

- native `<input>`, `<select>` and `<textarea>` (the browser's rules: `required`, `pattern`, `min`, `max`, `minlength`…);
- form-associated custom elements that have `checkValidity()` and `reportValidity()`: `<vt-field>` (its rules: `required`, `pattern`, `min`/`max`, `minlength`/`maxlength`, the format of an email, `min-selected`/`max-selected`, `setCustomValidity()`), `<vt-date-picker>`, `<vt-upload>`, `<vt-password>` and `<vt-version>`. Your own custom element works the same way. A field that has no `checkValidity()` and `reportValidity()` is skipped: it never blocks Next, though it is still shown in the review.

If one fails, the step stays, `reportValidity()` is called on the first failing control, and the focus goes to it: the field shows its own message, in its own words. Back never checks. `goTo()` forward checks every step on the way and stops at the first with a problem.

Submit checks every step, not only the last: it goes to the first step with a problem and reports it, and after that Next goes straight back to the last screen.

## Progress

`progress` is `bar` (default), `steps` or `none`; the full variant defaults to `steps`.

- `bar` writes "Step 2 of 6" above a bar. The bar is a `progressbar` whose value counts the steps like the text; on the review screen it is full.
- `steps` writes the same text above a list in the look of the horizontal [`<vt-loading-steps>`](loading-steps.md): a mark per step joined by a line, a check mark on the steps passed. A step already reached is a button, so the reader can go back (or forward again). The review screen is an entry of the list, but it is not a step: it has no number. In a narrow space only the current step keeps its name on screen; the others keep it for screen readers.
- `none` shows nothing.

## Review

`review` (on in the full variant) adds a screen after the last step that lists, for each step, its legend and each named field as "label: value", with an Edit button that goes back to the step. After an Edit, Next goes straight back to the review.

The label is the `label` attribute of the field, the text of its `<label>`, its `aria-label`, or its name. The value is written in words: the label of a chosen option and not its value, "Yes" or "No" for a check box or a switch, the names of the files of an upload, and eight dots for a password (the value of `<vt-password>`, `<vt-secret>` and `type="password"` is never written). A field with no value says "Not answered". Disabled fields and fields without a `name` are left out, like in the submitted form; a group of native check boxes or radio buttons is one line.

The button of the last step then reads "Review answers", and the review screen has the Submit button.

## Submitting

On the last screen (the last step, or the review) the main button is a plain button that reads "Submit", styled like Next. `submit()` and that button do the same thing:

1. Every step is checked. At the first problem the element shows that step, reports it, and stops.
2. If they all pass, the element calls `requestSubmit()` on the form around it, so the browser checks the other fields of the form, your `submit` listeners run and a native submission works. The page's own form handling does the rest.

Put the element in a `<form>`: without one, Submit only checks the steps and does nothing more. `submit()` returns `true` when the form was asked to submit, and `false` when a step has a problem or there is no form.

The fields keep their own value in the form, so the form's data (`new FormData(form)`) is what your handler reads: the element has no value of its own.

## Styling

The steps are your own elements, in the light DOM, so style them from your page: the legend is a normal `<legend>`, and the element cannot reach it from its shadow DOM. Out of the box it is plain text, smaller than the bold field labels under it. To make the step title read as a heading:

```css
/* Step titles only: `>` leaves the legend of a group inside a step alone. */
vt-form-steps > fieldset > legend {
  font-size: 1.125rem;
  font-weight: 650;
  line-height: 1.3;
}
```

The space between the title and the first field is the fieldset's top padding, which the element sets.

The fields are the page's own elements and follow the theme of the page, like any other field. The progress, the buttons and the review use the element's own theme (`theme` attribute, or the page's).

The progress follows `prefers-reduced-motion`: the bar does not animate.

## Accessibility

- Each step is the `<fieldset>` itself: a group named by its `<legend>`.
- When the step changes, the focus goes to the new legend if the focus was inside the element (the reader pressed Next, Back, a step or Edit); when a script calls `goTo()`, `next()` or `back()` with the focus elsewhere, the focus stays where it is. Call `focus()` to take it.
- "Step 2 of 6: Contact" is announced through a polite live region; the bar is a `progressbar` with that text as its value.
- The list of steps is an ordered list; the current step is `aria-current="step"`, and the steps reached are buttons. Each entry has visually hidden text such as "Step 1: Contact, completed", since the number and the check mark are only drawn.
- Errors are the fields' own: the message, `aria-invalid` and `aria-describedby` of `<vt-field>`, the browser's bubble for native inputs. Next puts the focus in the first field with a problem.
- Nothing depends on colour: the steps have numbers and check marks, and the buttons have text.

## Keyboard

| Key                         | Action                                                                                   |
| --------------------------- | ---------------------------------------------------------------------------------------- |
| Enter in a text input       | Goes to the next step after checking it; on the last screen, submits                     |
| Enter in a text area        | New line                                                                                 |
| Enter in a list, tags, date | What the field does with it (choose, add a tag, commit a date); the step does not change |
| Tab                         | Moves through the fields of the current step, then the buttons                           |

Enter in a text input would otherwise submit the form with the steps still to fill in.

## Attributes

| Attribute  | Values                        | Default                            | Description                                      |
| ---------- | ----------------------------- | ---------------------------------- | ------------------------------------------------ |
| `variant`  | `simple`, `full`              | `simple`                           | `full` turns on the review and the list of steps |
| `progress` | `none`, `bar`, `steps`        | `bar`; `steps` in the full variant | The progress indicator                           |
| `review`   | boolean                       | off; on in the full variant        | The review screen before Submit                  |
| `label`    | text                          | none                               | Accessible name of the whole form                |
| `lang-ui`  | `en`, `fr`, a registered code | the page language                  | Language of the interface                        |
| `theme`    | a theme name or `auto`        | the page theme                     | Theme of the element's own parts                 |

The boolean attributes follow the [common rules](../common-attributes.md#how-attribute-values-are-read): present means on, and `"false"`, `"off"`, `"no"` or `"0"` means off, which turns off what the full variant switches on (`<vt-form-steps variant="full" review="false">`). The element has no `src` and no text content.

## Properties

| Property | Type     | Description                                                                        |
| -------- | -------- | ---------------------------------------------------------------------------------- |
| `step`   | `number` | Index of the current step; the review screen comes after the last step. Read-only. |
| `steps`  | `number` | Number of steps. Read-only.                                                        |
| `form`   | `form`   | The form around the element, or `null`. Read-only.                                 |

## Methods

| Method         | Description                                                                                                                         |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `next()`       | Checks the current step and goes to the next; on the last screen, submits. Returns `true` when it moved or submitted.               |
| `back()`       | Goes to the previous step without checking. Returns `true` when it moved.                                                           |
| `goTo(target)` | Goes to a step by index, by the `id` of its fieldset, or to `"review"`. Forward checks every step on the way.                       |
| `submit()`     | Checks every step, then calls `requestSubmit()` on the form around the element, as the button does (see [Submitting](#submitting)). |
| `focus()`      | Focuses the first field of the current step.                                                                                        |

## Events

| Event      | Detail                | When                                                                                                                                       |
| ---------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `vt-step`  | `{ from, to, title }` | The step changed, by the reader or from code (`to` is the number of steps for the review screen). A call that does not move fires nothing. |
| `vt-ready` | `{ type }`            | The steps were read and drawn.                                                                                                             |

The fields' own `vt-input` and `vt-change` events bubble through the element as usual.

## Slots

| Slot    | Content                                                                            |
| ------- | ---------------------------------------------------------------------------------- |
| default | The steps: one `<fieldset>` with a `<legend>` each. Only the current one is shown. |

## CSS parts

| Part       | Element                                    |
| ---------- | ------------------------------------------ |
| `progress` | "Step 2 of 6" and the bar or list of steps |
| `step`     | The area holding the current step          |
| `nav`      | The Back and Next (or Submit) buttons      |
| `review`   | The review screen                          |

`--vt-accent` and `--vt-radius` (and the other [theme tokens](../theming.md)) change the colours and corners.

## Notes

- Fields without `checkValidity()` and `reportValidity()` are not checked (they never block Next).
- The element is not form-associated: it has no name and no value, and a form reset does not return it to the first step.
