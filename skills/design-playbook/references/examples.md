# Worked examples: the rules applied

Each example shows a common default ("Before"), then the playbook version ("After"). The values come from `assets/tokens.css`. Hairline literals (1–3 px borders, outline offsets) are the only raw numbers allowed.

## 1. A text field

Before: the placeholder stands in for the label, the border is ghostly, and the text is small enough that iOS zooms in.
```html
<input placeholder="Email" style="border:1px solid #E5E5E5;font-size:14px;height:36px">
```

After:
```html
<div class="field">
  <label for="email">Email</label>
  <input id="email" type="email" inputmode="email" autocomplete="email"
         placeholder="name@company.com" aria-describedby="email-hint">
  <p id="email-hint" class="hint">We'll send the receipt here.</p>
</div>
```
```css
.field { display: grid; gap: var(--space-2); }
.field label { font-size: var(--text-label); font-weight: var(--weight-medium); }
.field input {
  height: var(--field-height); padding-inline: var(--space-4);
  font-size: var(--text-base);                 /* 16 px: no iOS zoom */
  border: var(--border-w) solid var(--field-border);  /* passes 3:1 */
  border-radius: var(--radius-lg);
  background: var(--surface); color: var(--ink);
}
.field input:focus-visible { outline: var(--ring-w) solid var(--focus-ring); outline-offset: 1px; }
.field .hint { font-size: var(--text-sm); color: var(--ink-2); margin: 0; }
.field[data-invalid] input { border-color: var(--error); }
```

## 2. An error message
- Before: `Error 403: Forbidden`
- After: **This file is private.** Ask the owner for access, and we'll email you when it's shared. `[Request access]`
- Before: `Payment failed`
- After: **Your card was declined.** The bank didn't say why; this usually means a limit or an expired card. Try another card, or call your bank. `[Use another card]`
- Before: `Upload error`
- After: **That file is 48 MB; the limit is 25 MB.** Compress it or upload a shorter clip. `[Choose another file]`

## 3. An empty state
- Before: an icon of a box, plus "No data".
- After: **No trips yet.** Save places as you browse and they'll turn into a plan here. `[Plan a trip]`

## 4. A button with press feedback and no stuck hover on touch
```css
.btn {
  min-height: var(--target-touch); padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-full); border: 0;
  background: var(--accent); color: var(--on-accent);
  font: var(--weight-medium) var(--text-base) / 1 var(--font-body);
  transition: transform var(--dur-press) var(--ease-out),
              background-color var(--dur-press) var(--ease-out);
}
@media (hover: hover) and (pointer: fine) {
  .btn:hover { background: color-mix(in oklch, var(--accent) 88%, black); }
}
.btn:active { transform: scale(var(--press-scale)); background: var(--accent-pressed); }
.btn:focus-visible { outline: var(--ring-w) solid var(--focus-ring); outline-offset: 3px; }
.btn:disabled { background: var(--accent-tint); color: var(--ink-2); }
.btn--secondary { background: transparent; color: var(--ink); box-shadow: inset 0 0 0 var(--border-w) var(--field-border); }
```

## 5. A popover that grows from its trigger
Before: it scales from 0 at the centre and eases in.

After:
```css
.popover {
  transform-origin: var(--origin, top left);      /* set from the trigger side */
  transition: opacity var(--dur-dropdown) var(--ease-out),
              transform var(--dur-dropdown) var(--ease-out);
}
.popover[data-state="closed"] { opacity: 0; transform: scale(var(--enter-scale)); pointer-events: none; }
.popover[data-state="open"]   { opacity: 1; transform: scale(1); }
.popover[data-state="closed"] { transition-duration: var(--dur-exit); }  /* exit faster */
```

## 6. Fixing an accent in the dead zone
```
node scripts/contrast.mjs "#FFFFFF" "#2F8FD8" "#1D1B20" "#2F8FD8"
#FFFFFF on #2F8FD8 | 3.48:1 | fail ...
#1D1B20 on #2F8FD8 | 4.91:1 | pass ...
```
A white label fails on this mid-tone blue. You have three ways out:
- Use a dark label.
- Darken the accent one shade (e.g. #1F6FB0: 5.30:1 with white).
- Keep the accent for shapes only, and put the label in the ink colour.

Check the button shape against the page too, at 3:1 or more.

## 7. A link that passes
Before: a coral link (#FF6B57) in body text on white, at 2.8:1.

After:
```css
.prose a { color: var(--ink); text-decoration: underline; text-decoration-color: var(--accent);
           text-decoration-thickness: 2px; text-underline-offset: 0.2em; }
```

## 8. A scroll reveal that never hides content
Before: every section starts at `opacity: 0` and waits for an observer, so content above the fold flashes in, and nothing shows if the script fails.

After: content is visible by default. Script marks only the elements below the fold as pending, then reveals them as they enter.
```css
.reveal { transition: opacity var(--dur-reveal) var(--ease-reveal),
                      transform var(--dur-reveal) var(--ease-reveal); }
.reveal.is-pending { opacity: 0; transform: translateY(var(--reveal-shift)); }
@media (prefers-reduced-motion: reduce) {
  .reveal { transition: opacity var(--dur-fade) linear; }  /* keep the fade */
  .reveal.is-pending { transform: none; }                  /* drop the travel */
}
```
```js
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) { e.target.classList.remove('is-pending'); io.unobserve(e.target); }
  }
}, { rootMargin: '0px 0px -10% 0px' });
const els = [...document.querySelectorAll('.reveal')];
const below = els.filter((el) => el.getBoundingClientRect().top > innerHeight); // read everything first
below.forEach((el) => { el.classList.add('is-pending'); io.observe(el); });      // then write
```

## 9. Choreography with one lead and uneven offsets
Before: five cards fade up together, staggered by 0.08 s each.

After:
- The headline lands first: 0 ms, 420 ms, "land" curve.
- The product image answers at 120 ms with 520 ms on the "heavy" curve, plus a slight scale from 0.96.
- Two supporting labels cut on at 300 ms and 470 ms (opacity only).
- The CTA arrives last at 640 ms with 240 ms ease-out.
- Nothing else moves.

## 10. Hover-only effects with a touch equivalent
```css
.card .preview { opacity: 0; }
@media (hover: hover) and (pointer: fine) {
  .card:hover .preview { opacity: 1; }
}
.card:focus-within .preview { opacity: 1; }   /* keyboard users get it too */
@media (hover: none) {
  .card .preview { opacity: 1; }   /* touch: always visible, or reveal on tap via a button */
}
```
