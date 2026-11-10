# Components, app screens and UX copy

## The short version
- A small token set (spacing scale, radius, one accent, a neutral ramp) applied with discipline beats many one-off values.
- Hierarchy comes from weight, colour and spacing, rarely from size alone. De-emphasise secondary information instead of boxing it.
- Keyboard first: a command palette and shortcuts where the product is used daily, and visible focus everywhere.
- Every state is designed: empty, loading, error, disabled, hover, pressed, long content.
- Interaction feedback is fast (under about 200 ms), subtle and consistent.
- Separate behaviour from skin. Build on accessible primitives (focus management, keyboard, ARIA) and expose state as data attributes (`data-state="open"`) that styles and motion can hook into.
- Write "when to use / when not to" beside every component in a design system.

## Name the principle behind every control decision
If no principle explains a choice, it is decoration. The useful ones:
- **Fitts:** big, close targets are faster. For example, the whole width of a picker drags, not only the thumb.
- **Hierarchy:** the chosen value is the biggest thing on the screen.
- **Von Restorff:** one accent on one thing makes it stand out. The accent appears only where the eye must go.
- **Object constancy:** things move rather than swap. Numbers slide, and a button morphs into a spinner, then a check, then a "Done" pill.
- **Natural mapping:** the control moves the way the value moves, so up means more.
- **Multimodal feedback:** sound and haptics alongside the visual. Sound is optional and off under mute or reduced-motion preferences.
- **Snapping and inertia:** values snap to meaningful steps, and a flick glides to a stop.

## Premium components behave like physical objects
- Give a component weight, inertia, snapping and a real-world metaphor (a wheel, a receipt, a stamp, a ticket, a cassette, a dial), with feedback for every step.
- Use one such object per screen; the rest stays systematic.
- Invent the metaphor that fits the product. Never paste a stock object in.
- Destructive actions use hold-to-confirm with an undo instead of a modal where possible: an overlay fills over about 2 s, and releasing early cancels.
- A tactile control looks pressable:
  - An inner shadow on tracks and a soft top highlight on knobs.
  - A pressed state that compresses (`scale(0.97)`).
  - Colour that carries the state, e.g. a fill that moves from red through amber to green with the value.

## Buttons and actions
- One filled primary action per view. Secondary actions are a quiet outline or plain text, never three equal buttons.
- One colour is used for the primary action and for nothing else, so the eye learns that colour means "go".
  - The trade-off: people react to the colour and stop reading the label. That means the label must be unambiguous.
- Labels are verbs naming the outcome ("Save changes", "Plan a trip"), never "Submit" or "Click here".
- The button label passes 4.5:1 on the button, and the button shape passes 3:1 against the page (see `foundations.md`).
- Sizing:
  - The touch target is at least 44–48 px tall even when the visible button is smaller.
  - Padding comes from the spacing scale.
- States: hover only on pointer devices, `:focus-visible` ring at 3:1, pressed `scale(0.97)`, disabled as a pale tint with a readable label, and loading shown inside the button without changing its width.

## Text fields
- **Label:**
  - A real label above the field, about 15 px semibold.
  - Placeholder text is an example or nothing; it never stands in for the label.
- **The field:**
  - About 48 px tall with about a 12 px radius.
  - A 1.5 px border dark enough to pass 3:1 (e.g. #79747E), never a ghostly #E5E5E5.
- **Input text:** 16 px, never smaller. Anything smaller also makes iOS zoom in on focus.
- **Hint:** sits under the field at about 13 px and stays visible while people type.
- **Keyboard and autofill:** ask for the right keyboard and autofill with `type` (`email`, `tel`, `url`, `number`), `inputmode` and `autocomplete` (`email`, `name`, `one-time-code`, `street-address`).
- **Validation:**
  - Validate on blur or submit, not on every keystroke.
  - Show the error under the field in error colour with an icon and words, and link it with `aria-describedby`.
  - Keep what the person typed.
- **Group related fields** and keep one column on mobile.

## Error messages
- Every error says three things: what happened, why, and what to do next, with a button that does it.
- Not "Error 403". Write something like: "This file is private. Ask the owner for access and we'll let you know when it's yours. [Request access]".
- Rewrite the common ones before launch: no access, card declined, file too big, offline, signed out, session expired, not found, rate limited.
- No blame, no jargon, no codes on their own. A code may follow in small text for support.
- Visually: an error container with dark red text, plus an icon and words (see `foundations.md`).

## Empty states
- Say what goes here ("No trips yet", not "No data").
- Say why it is worth doing, in one line in the user's words.
- Give one button named as a verb ("Plan a trip").
- Treat the first-run empty state as onboarding, not as an error.

## Modal or sheet
- **Modal:** for when people must decide before going on, such as an irreversible delete. It offers at most two choices, and the destructive one is named ("Delete project"), not "OK".
- **Sheet:** for options that belong to the current screen when there are more than two. It swipes away and keeps the screen visible behind it.
- Popovers and menus grow from their trigger (`transform-origin` at the trigger); modals stay centred.

## App screens: the junior-to-senior pass
- **Header:** one search plus notifications. The profile lives in the tab bar or a corner, not as a third header control.
- **A media or product hero:**
  - Use the item's own title art or logo, two facts and one primary action.
  - Not a caps title over the poster, six facts in a 9 px line, or three equal buttons.
- **Rows:** "continue" rows show the time left; ranked rows get big rank numbers.
- **Travel or booking:**
  - One search card with dates and guests as chips.
  - Destinations shown as photos.
  - One price per stay.
  - A title that asks a question instead of a slogan.
- **One brand accent only;** no second accent mixed in.

## Dashboards: the unslop pass, in order
1. Snap every gap and inset to the spacing scale. Panel edges and text edges align, with no stray 18 or 36 px values.
2. Swap the purple gradient for a neutral near-black or off-white ramp with one accent.
3. Swap emoji for one line-icon set with one stroke weight.
4. Make section labels sentence case and muted, not bold caps with an emoji.
5. Make the display weight lighter than you think; let size and space carry the headline.
6. Give numbers context ("+12% vs last month", never "+12%!!"). Secondary figures are muted and tabular.
7. Replace decorative bars and gradient strips with real charts that have axes, legends, tooltips and a comparison.
8. Keep badges, counts and chips neutral by default; reserve the accent for one state or action.
9. Allow one tactile hero object (a rendered card, a mascot, a device) as the single moment of delight.

The values come from the project's own scale (start from `assets/tokens.css`); what matters is using only them.

## Charts
- Charts show real data with axes, units, a legend and tooltips. Use tabular numbers.
- Theme them with chart tokens (`--chart-1` to `--chart-5`), checked for contrast and colour-blind safety. Never rely on hue alone; vary lightness or add patterns and labels.
- Highlight the lead value: only the hero datum gets the accent, and the rest stay neutral.
- Live data uses a canvas renderer, and new points ease in without re-laying out the axes.

## Density and data tables
- Dense tools still need hierarchy: muted metadata, strong primary text and one accent.
- Tables:
  - Numbers are right-aligned and tabular; text is left-aligned.
  - The header row is sticky on long tables.
  - Sorting is visible.
  - Each row has one obvious action.
- Admin pattern: a resource index (list, filters, bulk actions), then a detail page.

## UX copy
- Lead with the user's task or outcome. One idea per sentence.
- Use plain language and active voice, and keep terms consistent. Pick one word for each thing and never vary it.
- No filler: "seamless", "unlock", "elevate", "supercharge", "everything you need".
- Voice stays constant; tone shifts with the situation (calm for errors, warm for success).
- Write steps as one action each, and state the result.
- Use sentence case for labels, headings and buttons.
- Mock content is specific and believable: names, places, prices, dates. Never lorem and never generic SaaS features.

## Docs and long-form (Read mode)
- Keep the four kinds apart: tutorial (learn by doing), how-to (solve one task), reference (look it up), explanation (understand why). One page, one kind.
- Pair every concept with a runnable example the reader can copy, and show its output.
- State the tone once in the style guide (for example: direct, friendly, no jokes in errors) and hold it.
- Headings are the questions readers ask ("How do I rotate a key?"), so a scan finds the answer.
- Short sentences, one idea each. Steps are numbered, one action per step, with the expected result.
- Reading layout: 50–75 characters per line, body line-height 1.5, code blocks that scroll sideways instead of wrapping.
