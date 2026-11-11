---
name: design-playbook
description: Supervisor for every design and visual front-end task - websites, landing pages, portfolios, app screens, dashboards, components, design systems, motion, posters and UI audits or redesigns. It walks the agent through six gated stages (brief, direction, structure, build, verify, audit) and the full designer workflow inside them (research and discovery, IA and user flows, usability testing, hand-off), and each gate needs proof such as contrast numbers, screenshots at 375 and 1440 px and a ticked audit. It holds the hard rules - layout, spacing, type, colour and contrast, light and dark themes, components and UX copy, page and hero structures, motion numbers, polish, anti-slop tells, smoothness and ship-readiness. Load it at the start of any design or UI work, alongside any other design skill, and before calling a design done.
---

# Design playbook

This skill supervises the work. It says what to do at each stage, which rules apply and what proof ends the stage. A stage is finished only when its gate passes with the proof written out in your notes or reply. If a gate fails, fix the work and run the gate again. Never skip ahead, and never claim a gate you did not run.

## Where it sits

- Other design skills (art direction, style systems, component libraries, critique tools) may do the creative work inside any stage. Their output still has to pass these gates.
- When rules conflict, this order wins:
  1. The user's brief and explicit choices.
  2. Accessibility floors (WCAG 2.2 AA).
  3. This playbook.
  4. Any other skill's style preferences.
- Where a reference file says **Both views**, choose by context and write one line on why.
- Ask the user about anything they have not settled (audience, tone, palette, fonts, imagery, copy, scope) before deciding it. Give options with a recommended pick. A question costs less than a redo.

## Pick the path

| Task | Path |
|---|---|
| New page, screen, component or visual | Stages 1 to 6 in order |
| Improve, polish or redesign something that exists | The audit path (below): the stage 4 rules for each fix, gate 5 after each batch, gate 6 once at the end |
| One small change (a colour, a spacing value, a label) | The rules for that element, then gate 5 for the views it touches. Any colour change reruns `scripts/contrast.mjs` on every pair that uses the colour |
| Review only | The audit path, steps 1 to 3, then the stage 6 report; change nothing |

## Name the mode

The mode sets how bold to be. Write it down at stage 1.

- **Sell** (landing, marketing, launch, pricing, portfolio home): one promise, one main action, proof within the first scroll. One authored moment per view. The bar is "someone would stop scrolling for it".
- **Use** (app screens, dashboards, tools, settings, forms): speed, consistency, density and familiar patterns win. Delight lives in one tactile object at most; the rest is systematic.
- **Read** (docs, articles, case studies): reading comfort first; structure for scanning.
- **Show** (galleries, showcases, project pages): the work leads and the interface steps back.

## Stage 1: Brief

Read: `references/process.md` "Size it to the project" and "Phase 1: Research and discovery".

Do:
- Write down what it is, who it is for, the one job of this surface, the action you want, and the constraints (stack, brand, assets, deadline, platforms).
- Size the work as Light, Standard or Full (see `process.md`), then run Phase 1 at that size:
  - Audience segments.
  - Needs and pain points in the users' own words.
  - A competitor scan.
  - Functional requirements.
  - Accessibility and platform needs.
  - A journey map for Standard and Full work.
  Never invent research; ask the user for real material and quote public evidence.
- Collect the real content: copy, images, data, names. List what is missing. Never invent metrics, testimonials, client logos, awards or quotes. Use clearly marked placeholders only when the user agrees.
- For Sell surfaces, answer three questions in one line each: what do you do, is this for me, why should I trust you.
- For a shop, a form or any flow, write the failure list before designing: out of stock, invalid input, expired code, payment declined, offline, signed out, empty results, slow network, very long names. The list is part of the design.
- Ask every open question about the brief and the content in one round (see "Where it sits"). Direction choices (look, palette, type) wait for stage 2.

**Gate 1 proof:**
- A brief block with the fields above, the mode and the size.
- A research note sized to the project, ending in 3–5 design principles for this product and the one insight that shapes its character.
- The content list, with gaps marked.
- Every open question either answered by the user or listed as an assumption the user approved.

## Stage 2: Direction

Read: `references/foundations.md` (always). Then `references/pages.md` for Sell or Show, `references/components.md` for Use, `references/polish.md` for Sell or Show, and `references/resources.md` to find references.

Do:
- Pick 2 or 3 references of the same kind of product, audience and mood from real, shipped work. For each one, write the principles to borrow (type scale, rhythm, density, motion timing, interaction ideas) and what would count as copying it.
- Choose one material world (paper, glass, metal, ink, felt, photography, a 3D render style). Every element will come from it.
- Choose the hero object or the one authored moment for each view, or for Use surfaces the one tactile object, if any.
- Palette:
  - Three working colours: ink for the words, a surface for them to sit on, and one accent that means "tap here".
  - Add a neutral ramp, plus semantic colours used only for states.
  - Write every hex value. If both light and dark themes ship, write both.
- Type:
  - Faces and their roles, at most 2 families.
  - The scale ratio and the resulting sizes.
  - Weights (2 or 3).
  - Line-heights for headings and body.
- Motion: the UI tokens (curves, durations) and, for Sell or Show, the named curves for authored moments.
- Run `scripts/contrast.mjs` on every pair that will exist, in every theme:
  - Body text on each surface.
  - Secondary text on each surface.
  - The button label on the button.
  - The button shape on the page.
  - Links on the page.
  - Badge text on its tint.
  - The focus ring on its neighbours.
  - Error text on its container.
- How to run it:
  - Text pairs at `--min 4.5` (large text may use 3). Control shapes, focus rings and large text at `--min 3`.
  - A translucent background needs `--over <the solid surface under it>`.
  - Resolve `color-mix()`, variables and gradients to a hex value first (the browser's colour picker or a pixel sample); test text over a gradient or image at its worst spot.
- If the user has not fixed the direction, show 2 or 3 directions with a visual preview each and let them choose.

**Gate 2 proof:**
- A direction note covering the references and their principles, the material, the palette with hex values, the type scale and the motion tokens.
- The contrast script output for every pair, all passing their threshold:
  - 4.5 for text.
  - 3 for large text (24 px and up, or 18.66 px (14 pt) bold).
  - 3 for control shapes and focus rings.
- The user's pick, when you offered directions.

## Stage 3: Structure

Read: `references/process.md` "Phase 2: Design and prototyping", then `references/foundations.md` sections "1. Starting a layout" and "2. Spacing". Then `references/pages.md` "Hero structures" and "Section structures" for Sell or Show, or `references/components.md` "App screens" and "Dashboards" for Use.

Do:
- Structure before screens:
  - Information architecture and a sitemap: every page, its parent and its one job.
  - A user flow for each of the top tasks, including the failure branches.
  - A navigation plan.
  For Light work, a section list and the one main flow are enough.
- Wireframe in grey, 375 px first: rank the content, stack it in priority order, then widen and use the room. Colour comes last; if the hierarchy fails in greyscale, colour will not save it.
- Choose the structure on purpose from the hero and section types in `pages.md`, or the screen patterns in `components.md`. The default centred title, two buttons and three icon cards is not allowed unless chosen and framed deliberately.
- Name the hook and the one scroll-stopping moment (Sell), or the primary task path (Use).
- Give each section one job and one way forward.
- Use only the spacing scale. Space inside a group is smaller than space between groups.

**Gate 3 proof:**
- A greyscale wireframe or screenshot at 375 and 1440 px where the most important thing still reads first when you squint.
- A section list with each section's one job.
- The sitemap and the flows for the top tasks, with the step count of each.

## Stage 4: Build

Read: `references/components.md`, `references/motion.md`, `references/examples.md` as needed. Start from `assets/tokens.css`.

Do:
- Tokens first:
  - Copy `assets/tokens.css` and set the values from gate 2.
  - After that, no raw colour, spacing, radius, font-size or duration values appear outside the tokens file. Hairline literals (1–3 px borders, outline offsets) are the one exception.
- Build components to the rules in `components.md`: fields, buttons, errors, empty states, modal versus sheet, tables and charts.
- Every interactive element gets:
  - Hover (pointer devices only).
  - A visible `:focus-visible` style.
  - A pressed state.
  - Disabled and loading states where they can happen.
- Every view gets an empty, error, loading and long-content state, and a composed (not merely stacked) 375 px layout.
- Motion follows `motion.md`:
  - The frequency gate decides whether anything animates.
  - UI motion uses the token curves and durations.
  - Authored moments have one lead and reactions at uneven offsets.
  - Animate only `transform` and `opacity` (plus `filter` and `clip-path` with care). Short (150 ms or less) `color`, `background-color` and `box-shadow` hover transitions on single small elements, such as buttons or a hovered card's ring, are fine.
  - A `prefers-reduced-motion` path exists.
- Imagery is real photography, a rendered 3D object or a lit illustration, never flat geometric blobs standing in for a subject. Images are sized, compressed (AVIF or WebP) and lazy below the fold.
- Fonts are self-hosted as woff2 with `font-display: swap`, the one display face preloaded, and the licence checked.

**Gate 4 proof:**
- A search of the source for raw values outside the tokens file, with the command and its result. For example, search for `#[0-9a-fA-F]{3,8}\b` and for `\b\d+px\b` in style files, then justify or remove each hit. Hairline literals (1–3 px borders, outline offsets) may stay.
- A state inventory: for each interactive component, the states that exist.
- The console is clean.

## Stage 5: Verify in a real browser

Read: `references/process.md` "Phase 3: Testing and refinement".

Do:
- Screenshot at 375 and about 1440 px, and also at 768 if the layout changes there. Look at every screenshot, list the defects and fix them in batches, then screenshot again.
- Usability walkthrough. For each of the top 3 tasks:
  - Start cold at the entry page as a first-time visitor and finish the task using only what is on screen.
  - Record whether it was completed, the steps taken against the minimum, and every hesitation and error.
  - Fix, then walk again.
  For Standard and Full work, offer the user a test script for 5 real people.
- Check the main flows in Chromium, Firefox and WebKit, and check touch with no hover.
- Walk the whole page with Tab only: every control is reachable, the focus is visible and never hidden behind sticky bars, and the order is logical.
- Trigger the states: hover, pressed, error, empty, loading, long content.
- Emulate `prefers-reduced-motion: reduce`: nothing breaks, and movement drops while opacity and colour changes stay.
- The console has no errors and the network log has no failed requests.
- Run an accessibility scan (axe or Lighthouse) if one is available, and fix every serious or critical issue.
- Performance:
  - LCP, CLS and INP within the budgets in `references/ship-readiness.md`: 2.5 s, 0.1 and 200 ms, or 1.5 s, 0.05 and 100 ms for Sell and award-level work.
  - Animations hold 60 fps. Record a trace of the first, cold scroll pass in a fresh tab, not a warm second pass: first-paint stalls show only once, as long frames with no script attributed and raster time in the trace. Target p95 frame time at 16.8 ms or less and no frame over 33 ms.
- Put the result side by side with the gate 2 references. List the concrete gaps (hierarchy, type scale, rhythm, motion timing, detail) and close them.

**Gate 5 proof:**
- The screenshots.
- The walkthrough log for each task: completed or not, steps against the minimum, hesitations, and what was fixed.
- The browsers checked.
- The list of states and keyboard checks done.
- The scan result.
- The console and network result.
- The frame-time or performance numbers.
- The gap list, with each gap closed or explained.

## Stage 6: Audit and hand-off

Read: `references/audit.md`, `references/anti-slop.md`, `references/ship-readiness.md`, and `references/polish.md` for Sell or Show.

Do:
- Run `references/audit.md` in full. Tick every line with its evidence, or mark it N/A with a reason.
- Count the anti-slop tells. Every tell left must be one you chose on purpose for this brief.
- Thumbnail test: shrink the screenshot to card size. Would someone stop scrolling for it? If not, it is not done.
- Hand-off:
  - Update `DESIGN.md`: principles, tokens, each component with its states and "when to use", motion tokens, and decisions with their reasons.
  - Hand over the assets and the edge cases.
  - Write a post-launch plan: one success metric per goal, how each is measured, and the review dates.
- Report in three parts:
  - **Verified**, with the proof for each item.
  - **Not verified**, with the reason for each.
  - **Risks and follow-ups.**
- Never call anything "done" or "working" that sits under Not verified.

**Gate 6 proof:** the filled audit, the hand-off (`DESIGN.md` and the post-launch plan) and the report.

## The audit path (existing designs)

1. **Baseline first.** Before changing anything:
   - Screenshot every route at 375 and 1440 px.
   - Run `scripts/contrast.mjs` on the live palette.
   - Walk the top 3 tasks as a first-time visitor (`process.md` Phase 3) and log every hesitation and error.
   - Note what works and must be kept: the identity, the content, the flows people rely on.
2. **Audit.** Run `references/audit.md` and `references/anti-slop.md` against it.
3. **Rank the findings.** Each finding names the place, the rule it breaks and the fix. Rank them in this order:
   1. Broken: accessibility failures, contrast failures, layout breaks, errors.
   2. Slop tells.
   3. Polish gaps.
   4. Nice-to-haves.
4. **Ask before identity changes.** Ask the user before anything that changes the identity, the copy, the structure or the content, or that adds new sections. Fixes that only bring the work up to these rules can go ahead.
5. **Fix in small batches.** After each batch, run gate 5 on the affected views and compare with the baseline. Nothing that worked before may break.
6. **Finish.** Run gate 6.

## Reference map

| File | Read when |
|---|---|
| `references/process.md` | Every new piece of work: sizing, research and discovery, IA and flows, usability testing, hand-off and post-launch review |
| `references/foundations.md` | Every task. Layout start, spacing, type, colour and contrast, light and dark themes, dividers, radius, shadow, icons, targets |
| `references/components.md` | App screens, dashboards, forms, any component; UX copy for errors, empty states and labels |
| `references/pages.md` | Websites, landing pages and portfolios: hero and section types, homepage decisions and process |
| `references/motion.md` | Any motion: UI numbers, springs, gestures, choreography, lag-free rules |
| `references/polish.md` | Sell and Show work, and any "make it premium" request |
| `references/anti-slop.md` | Every task before gate 6 |
| `references/ship-readiness.md` | Anything real users will load: performance, privacy, fonts, consent |
| `references/audit.md` | Gate 6 and the audit path |
| `references/examples.md` | When you are unsure how a rule looks in code |
| `references/resources.md` | Finding references, component sources, chart libraries and research tools |
| `assets/tokens.css` | The starting tokens at stage 4 |
| `scripts/contrast.mjs` | Gate 2, every audit, and every colour change: `node scripts/contrast.mjs [--min 4.5] <fg> <bg> ...` |

Paths are relative to this skill's folder.

## Never

- Never go below the WCAG 2.2 AA floors.
- Never let colour carry meaning alone.
- Never invent content: metrics, testimonials, logos, client names or awards.
- Never copy a reference's look, layout signature, assets, copy or branding. Borrow the reasoning, not the surface.
- Never ship motion that ignores `prefers-reduced-motion`, or hover-only interactions with no touch or keyboard equivalent.
- Never claim a gate, a check or "done" without proof from this session.
- Never guess what the user has not settled. Ask.
