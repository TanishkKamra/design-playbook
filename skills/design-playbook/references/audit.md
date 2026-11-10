# Pre-ship audit (gate 6 and the audit path)

Copy this list into your notes and fill it in. Each line ends as **pass** with its proof, **fail** (fix it, then recheck), or **N/A** with a reason. "Looks fine" is not proof. Proof is a number, a screenshot, a command and its output, or a named place in the code.

## A. Brief and content
- [ ] The mode is named, and the surface does its one job. Proof: the brief block.
- [ ] All content is real; nothing is invented (metrics, testimonials, logos, awards). Proof: a content list with sources.
- [ ] For Sell surfaces, the three questions are answered above the fold (what, for whom, why trust). Proof: a 1440 px screenshot.
- [ ] Every item on the failure list has a designed state. Proof: a state screenshot for each.

## B. Foundations (`foundations.md`)
- [ ] Spacing values come only from the scale. Proof: a source search for raw px values outside the tokens, with any hits justified.
- [ ] There are 1–2 typefaces, 2–3 weights, one scale with 5–7 sizes, body text of at least 16 px and lines of 50–75 characters. Proof: the token list plus a measured line.
- [ ] Line-heights are about 1.1 for headings and 1.4–1.5 for body. Proof: the tokens.
- [ ] The palette has one accent, a neutral ramp and semantic colours used only for states. Proof: the token list.
- [ ] Every contrast pair passes in every theme: text 4.5, large text 3, control shapes and focus rings 3. Proof: the output of `scripts/contrast.mjs`.
- [ ] Each of the accent's jobs is tested on its real surface: button label, button shape, link, badge, both themes. Proof: the script output.
- [ ] Secondary text is checked on its real surface (tints included). Proof: the script output.
- [ ] Light mode uses an off-white canvas, white cards and near-black text. Dark mode uses a dark-grey ramp, lighter surfaces for elevation and desaturated accents. Proof: screenshots of both themes.
- [ ] Dividers are light and inset, or replaced by space. Input borders pass 3:1. Proof: a screenshot plus the script output.
- [ ] The radius set and the 2–3 shadow levels are applied consistently, and nested radius equals the outer radius minus the padding. Proof: the tokens plus a screenshot.
- [ ] There is one icon set with one grid and one stroke. Proof: the icon imports.
- [ ] Touch targets are at least 24 px, with 44–48 px on touch layouts. Proof: measured sizes.
- [ ] Nothing relies on colour alone, and the screen still reads in greyscale. Proof: a greyscale screenshot.

## C. Components and states (`components.md`)
- [ ] There is one filled primary action per view, and its colour is used for nothing else. Proof: a screenshot.
- [ ] Every interactive element has hover (pointer only), focus-visible, pressed, disabled and loading states where relevant. Proof: a state inventory table.
- [ ] Fields have a label above, a height of about 48 px, a border that passes 3:1, 16 px input text and a persistent hint. Errors appear under the field with an icon and words, and the right `type`, `inputmode` and `autocomplete` are set. Proof: a screenshot plus markup.
- [ ] Error messages say what happened, why and what next, with an action button. Proof: the copy list.
- [ ] Empty states say what goes here and why, with one verb button. Proof: a screenshot.
- [ ] Modals are used only for must-decide moments with at most two choices; screen options use sheets; popovers open from their trigger. Proof: the component list.
- [ ] Charts and tables have real axes, units and comparisons, tabular numbers and right-aligned figures. Proof: a screenshot.
- [ ] The copy is plain, active and specific, in sentence case, and contains no filler words. Proof: the copy list.

## D. Structure and pages (`pages.md`)
- [ ] The structure was chosen on purpose, not the default centred scaffold. Proof: the wireframe plus the named structure.
- [ ] Each section has one job and one way forward. Proof: the section list.
- [ ] There is no hero slider and the logo links home. If there is a footer, it shows the business is real. Proof: a screenshot.
- [ ] Every interaction kept passes its job test. Drag-only interactions have a non-drag alternative. Proof: an interaction list with each job.
- [ ] The 375 px layout is composed, not just stacked. Proof: a 375 screenshot.

## E. Motion (`motion.md`)
- [ ] The frequency gate is applied: nothing frequent or keyboard-triggered animates. Proof: a motion inventory.
- [ ] UI motion uses the token curves, no ease-in, durations in range and exits faster than entries. Proof: the tokens plus the motion inventory.
- [ ] Only composited properties animate. Proof: a source search for `transition` and `animate` on layout properties.
- [ ] Authored moments have one lead with reactions at uneven offsets, and there is no preset stack. Proof: a timing list.
- [ ] Reduced motion keeps opacity and colour changes and drops the movement, with nothing broken. Proof: an emulated screenshot or recording.
- [ ] It holds 60 fps while scrolling and interacting. Off-screen effects pause and the DPR is capped. Proof: frame-time numbers from the first, cold scroll pass in a fresh tab (p95 at 16.8 ms or less, no frames over 33 ms).

## F. Polish (`polish.md`, for Sell and Show)
- [ ] Real imagery, renders or lit illustration appear wherever a subject is shown. Proof: an asset list.
- [ ] There is one hero object per view, one material world and at least two engineered micro-details. Proof: a screenshot with each one named.
- [ ] It passes the thumbnail test. Proof: the reduced screenshot plus your honest verdict.

## G. Anti-slop (`anti-slop.md`)
- [ ] The full anti-slop list has been run. Every tell left is listed with the reason it was chosen. Proof: the filled list.

## H. Accessibility (WCAG 2.2 AA)
- [ ] The whole page works with the keyboard alone, in a logical order, with focus visible and never hidden behind sticky elements. Proof: notes from a keyboard walk.
- [ ] There is semantic HTML, one h1, headings in order, landmarks, labels on every control and alt text on meaningful images (empty alt on decorative ones). Proof: the scan plus a markup check.
- [ ] An automated scan (axe or Lighthouse) shows zero serious or critical issues. Proof: the scan output.
- [ ] Text spacing overrides (line-height 1.5, paragraph spacing 2× the font size, letter-spacing 0.12em, word-spacing 0.16em) break nothing. Proof: a screenshot with the overrides applied.
- [ ] The page zooms to 200% with no loss of content, and reflows at 320 px wide. Proof: a screenshot.

## I. Performance and shipping (`ship-readiness.md`)
- [ ] LCP, CLS and INP are within budget: 2.5 s / 0.1 / 200 ms, or 1.5 s / 0.05 / 100 ms for Sell and award-level work. Proof: a Lighthouse or trace number.
- [ ] Images are sized, compressed (AVIF or WebP) and lazy below the fold. Proof: the network log.
- [ ] Fonts are self-hosted as woff2 with swap and the licence checked. Proof: the network log plus the licence name.
- [ ] The console has no errors and there are no failed requests. Proof: the log output.
- [ ] Privacy holds: no third-party tracking before consent, and no secrets in client code. Proof: the network log plus a source search.

## J. Verification
- [ ] There are screenshots at 375 and about 1440 px (and 768 if the layout changes there), checked after the final fixes. Proof: the files.
- [ ] The result has been compared side by side with the references, and every gap is closed or explained. Proof: the gap list.
- [ ] In the audit path, a comparison with the baseline shows nothing that worked has broken. Proof: before and after screenshots.

## Report
End with three parts:
- **Verified:** each item with its proof.
- **Not verified:** each item, with the reason.
- **Risks and follow-ups.**

Never write "done" about anything under Not verified.
