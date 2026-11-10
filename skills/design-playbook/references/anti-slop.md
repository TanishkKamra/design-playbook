# Anti-slop: what makes a design read as AI-made

Run this before gate 6 and on every audit.
- **One tell proves nothing; the stack does.** About half of AI-built sites show six or more tells at once.
- **Keep a tell only if you chose it on purpose** for this brief, and say why.
- **Premium reads as restraint plus specificity:** a chosen palette and typeface, real content and one authored moment.
- **In a directory or gallery, the items carry the colour** and the frame stays quiet.

## Layout and chrome
- [ ] **Headings:** no pill badge or small uppercase, wide-tracked eyebrow above headings.
- [ ] **Gradients:** no accent-coloured or gradient word in a headline, and no gradient text as decoration.
- [ ] **Default scaffolds:** none of these:
  - A centred hero with three icon cards.
  - A hero-metric row (big numbers with labels).
  - Three or four identical feature cards.
  - Nested cards.
- [ ] **Scroll reveals:** sections don't all fade up on scroll, and nothing starts invisible waiting for an observer.
- [ ] **Hover lift and glow:** only on things that are clickable.
- [ ] **Icons:**
  - No sparkle, lightning or brain icons.
  - No emoji as icons, and no emoji glued onto buttons or headings.
  - One drawn icon set with one stroke weight.
  - Not the same stock icon stamped on every card.
- [ ] **Borders, halos and glass:**
  - No coloured left border thicker than 1 px on cards or callouts.
  - No zero-offset coloured halos.
  - Glass and blur only as a specific, chosen effect.
- [ ] **Colour bands:** the page isn't a stack of random full-bleed colour bands.
- [ ] **Hero:** no purple gradient hero with a badge above the headline.
- [ ] **Sliders:** no homepage hero slider or carousel; one decided message.
- [ ] **Second-screen test:** button roles, title scale, field heights and radii match on every route.

## Type and colour
- [ ] **Typeface:** chosen for the brief, not Inter or the system font by default.
  - The scale has real steps.
  - Tracking is no tighter than -0.04em.
- [ ] **Mono:** only for code, data and measurements, never as "technical" costume.
- [ ] **Palette:** chosen for the subject, not default SaaS blue or AI purple.
  - Contrast meets WCAG AA in every theme.
- [ ] **Light mode:** not pure #FFFFFF everywhere.
  - An off-white canvas, white cards and near-black text.
  - Dividers light and inset (or replaced by space), never black lines.
- [ ] **Browser surfaces themed:** `::selection`, caret, scrollbars, focus rings, underline offset and tabular numerals.

## Content
- [ ] **Copy:** names real things, with none of "seamless", "unlock", "elevate", "everything you need" or "supercharge".
- [ ] **Placeholders:** none left in.
  - Mock content is specific and believable (names, places, numbers), never lorem or generic SaaS features.
- [ ] **No fake proof:**
  - No fake testimonials ("Sarah M., Marketing Director").
  - Testimonials name what the product did, not just the vibe.
  - No fake metric block (99.9% uptime, 10x) and no fake terminal window.
  - No "Trusted by" logo strip without real customers.
  - No pricing mocks used as filler.
- [ ] **Imagery:**
  - Illustrations are drawn with intent, not geometric blobs standing in for subjects.
  - No stock photos that could belong to any brand.
- [ ] **Closing CTA:** doesn't tell people to go ask an AI.
- [ ] **Uncomfortable states designed:** empty, long names, errors, and a composed 375 px layout (not just stacked).

## Dashboards and app screens
- [ ] **Spacing:** every gap and inset comes from the spacing scale, and panel edges and text edges align.
- [ ] **Section labels:** sentence case and muted, not bold caps with an emoji.
- [ ] **Display weight:** lighter than you think.
- [ ] **Numbers:** carry context ("+12% vs last month").
  - Secondary figures are muted and tabular.
- [ ] **Charts:** show real data with axes and a comparison.
  - No decorative bar strips or gradient bars.
- [ ] **Badges, counts and chips:** neutral by default.
  - The accent is reserved for one state or action.
- [ ] **Delight:** at most one tactile hero object; everything else stays systematic.
- [ ] **Controls:** not the AI default (a gradient slider, emoji, "Step 3 of 7").
  - Each control decision names its principle (see `components.md`).

## Motion
- [ ] Each animation has a job, with one authored moment per view, and `prefers-reduced-motion` is honoured.
- [ ] **No preset stack:**
  - Not the same ease-out at 0.6 s with a 24 px fade-up and a 0.08 s stagger on everything.
  - Curves and durations fit each move.
  - One element leads, and the rest react at uneven offsets.
- [ ] Nothing frequent or keyboard-triggered animates (see the frequency gate in `motion.md`).
