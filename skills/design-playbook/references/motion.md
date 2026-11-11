# Motion

## The short version
- Motion explains a change of state (what moved where, what is now active) before it decorates.
- **The frequency gate decides whether anything moves at all:**
  - 100+ times a day (a command palette, shortcuts): no animation.
  - Tens of times a day: little or none.
  - Modals, drawers and toasts: standard motion.
  - Rare moments (onboarding, a success, a launch): delight is allowed.
  - Keyboard-triggered actions never animate.
  - Frequent interactions get instant feedback or, at most, an opacity or colour change of 150 ms or less.
- **Motion is never the only feedback.** Every animated state change also has a static cue (a colour, an icon or a label) that stays once the motion ends or is turned off.
- **Product UI and authored moments follow different rules:**
  - UI: ease-out, never ease-in, under 300 ms, exits faster than entries, springs without bounce unless the gesture carried momentum.
  - Authored scenes (a hero, a scroll story, a demo): a named-curve vocabulary and choreography.
- Animate only `transform` and `opacity` (plus `filter` and `clip-path` with care).
- Every animation has a `prefers-reduced-motion` path: keep opacity and colour changes, drop the movement, and use about a 200 ms fade instead of slides.

## UI motion numbers
**Curves (as CSS tokens):**
- `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` for things entering and responding. This is the default.
- `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)` for on-screen movement from A to B.
- `--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1)` for drawers and sheets.
- Never ease-in for UI: it starts slow, so the interface feels late. Never linear for movement; linear is only for progress fills and hold-to-confirm.

**Durations:**

| Element | Duration |
|---|---|
| Button press | 100–160 ms |
| Tooltip | 125–200 ms |
| Dropdown or popover | 150–250 ms |
| Modal or drawer | 200–500 ms |
| Anything else in UI | under 300 ms |

Exits run faster than entries. Perceived speed matters as much as real speed: ease-out at 200 ms feels faster than ease-in at 200 ms.

**Exits** are quieter than entries, because attention is already moving on:
- A short fixed move (about 12 px, never the element's full height) with a fade, at about half the entry's duration (e.g. 150 ms against 300 ms), on ease-out like the entry.
- Slide fully out only when where it went matters (a drawer closing, a card returning to its list).
- Remove the element instantly when movement adds nothing, the action repeats often, or reduced motion is on.

**Scale and origin:**
- Press feedback is `scale(0.97)` on `:active` (range 0.95–0.98; 0.96 is also common). Never go below 0.95, which looks exaggerated.
  - Run it as a transition, so releasing mid-press eases back.
  - Skip it on disabled controls.
  - Give the button component an opt-out for places where the movement distracts.
- Entries start from `scale(0.95)` plus `opacity: 0`, never from `scale(0)`.
- Popovers and menus use a `transform-origin` at their trigger; modals stay centred.

**Stagger:** 30–80 ms between items in a list, and only to pace how one group is read.
- For a rare staged entrance (a hero's title, text and buttons, a success state), split the content into its meaningful chunks and leave about 100 ms between them, or about 80 ms per word when a title is split into words.
- Never stagger frequent interactions such as row hovers, tab changes or keystrokes.
- Authored heroes still use uneven offsets (see "One lead and its reactions").

**Icon swaps** (play to pause, copy to check, an action icon appearing on hover) never just toggle visibility:
- Animate scale 0.25 → 1, opacity 0 → 1 and blur 4 px → 0, on a spring with a duration of 0.3 s and no bounce.
- Without a motion library, keep both icons in the DOM, one absolutely positioned over the other, and cross-fade them with transitions on `cubic-bezier(0.2, 0, 0, 1)` over about 300 ms, so both directions animate.
- Static navigation and decorative icons do not animate.

**No animation on first render** for anything already in its default state (toggles, tabs, segmented controls, icon swaps). In Motion, use `AnimatePresence initial={false}`; in CSS, turn the transitions on after the first frame. Intentional entrances (a staged hero, a loading state) keep theirs, so check a full reload.

**Crossfades:** if one still feels wrong after tuning the easing and duration, add `filter: blur(2px)` during the change (always under 20 px).

**Hover:** put hover effects inside `@media (hover: hover) and (pointer: fine)` so touch devices don't get stuck hovers.

**Hold-to-confirm:** a `clip-path: inset(0 100% 0 0)` overlay fills to `inset(0 0 0 0)` over 2 s, linear. On release it snaps back in 200 ms with ease-out.

**Interruptible:** UI motion can be interrupted mid-way and retargets from its current value. CSS transitions retarget; keyframe animations restart, so prefer transitions or springs for anything people can toggle quickly.

**Ways to open a menu,** picked by how often it is used and the product's character:
- Daily tools: anchor pop (springs out from the button's edge and shrinks back into it on pick), fold down, kebab popover, or a command palette for power users.
- Content that changes context: push back (the page recedes as the menu comes forward) or button to panel (the button itself grows into the menu).
- Show and Sell surfaces only: turn over (the card flips to reveal the menu), card deal (items dealt out like cards, the picked one flies into the button), drum roll (items roll on a 3D drum), outline trace (a line traces the panel, then the rows wipe in), tile build (the panel assembles from tiles in a wave), gooey menu.
- Whichever you choose: it grows from its trigger, the picked item returns to the trigger so the change is visible, it stays under about 300 ms and is interruptible, and under reduced motion it becomes a plain fade.

**Shared element:** when an item opens into its detail view, the same element grows into place instead of the view cutting. Use View Transitions with `view-transition-name` (Chrome 111, Safari 18, Firefox 144).

**Debugging:**
- Slow everything down 2–5x to judge timing, then return to normal speed.
- To catch first-frame flashes, wrong transform origins and blur artefacts, replay at 10% speed in the DevTools Animations panel, walking hover, focus, active, loading and empty.
- What feels off when slowed is what feels subtly wrong at full speed.

## Springs
- Think in damping and response rather than mass, stiffness and damping.
  - **Damping** controls overshoot: 1.0 settles without bounce, and lower values bounce.
  - **Response** is how quickly the value arrives, in seconds. It is not a duration.

| Use | Damping | Response |
|---|---|---|
| Default UI | 1.0 (no overshoot) | 0.3–0.4 s |
| Rotation | 0.8 | 0.4 s |
| Sheet | 0.8 | 0.3 s |
| After a flick or drag release only | ~0.8 | 0.3–0.4 s |

- In Motion / Framer Motion: `{ type: "spring", duration: 0.5, bounce: 0 }` for plain UI, and bounce 0.1–0.3 only where momentum earns it. `mass 1, stiffness 100, damping 10` is clearly bouncy; keep it for playful moments.
- Bounce is earned by momentum. Overshoot on a menu that merely faded in feels wrong; overshoot after a throw feels right.
- Springs keep their velocity when interrupted, which is why they suit gestures.

## Gestures
- **Commit point:** require about 10 px of movement before a drag commits, and add about 10 px of invisible hit padding.
- **Dismiss:** a swipe dismisses when its velocity passes about 0.11 px/ms, even when the distance is short.
- **Flick landing point:** `current + (v / 1000) * d / (1 - d)`, with d ≈ 0.998 for a normal scroll feel and 0.99 for a snappier one.
- **Edges rubber-band** instead of stopping hard, with a constant of 0.55.
- **Tap feedback:** `scale(0.97)` over 100–160 ms.
- **Translucent bars:** `rgba(255,255,255,0.6)` with `backdrop-filter: blur(20px) saturate(180%)` and a 1 px `rgba(255,255,255,0.4)` top edge. Check that text over them still passes contrast.

## Authored motion (heroes, scroll stories, demos)
- **A small vocabulary of named curves, each with a role:**
  - "land" for a soft arrival.
  - "heavy" for a big mass.
  - "whip" for a fast snap.
  - "exit" for leaving quickly.
  Each move picks the curve that fits it, and the duration scales with distance and weight.
- **The AI tell is one preset on everything:** a power3-style ease-out at 0.6 s, a 24 px fade-up and a 0.08 s stagger. Variety comes from choreography and the right curve per move, not from random curves.
- **Curve shape:** a move that travels reads as authored with a strong S-shaped ease-in-out, and as a preset with power3. Use springs for movement and tweens for opacity and colour. Chart values that count up ride the top of their bar instead of sitting in a fixed label.
- **One lead and its reactions:** a single element moves first and the rest answer at uneven offsets (e.g. frames 0, 8, 18, 30, 44), never in lockstep or at an even stagger.
- **Text:** most text just cuts on. Only the one line that matters animates.
- **Holds stay alive:** a slow drift or a breathing light, never a dead freeze.
- **State continuity:** one object changes form instead of being swapped (button → spinner → check → "Done" pill).
- **Physical cues:** a moving object can squash and stretch with its speed, and a light can flash when the lead element lands.
- **Accent:** only the hero datum or lead element takes the accent; the rest stay neutral.
- **Scroll:**
  - Scroll is smoothed (inertia scrolling).
  - Each section is a scene with a single reveal idea, bound to scroll progress rather than hand-timed triggers.
  - Parallax is small enough to be felt rather than noticed.
- **Micro-animations** are small state machines (hover, active, in-view) that react instead of looping. Drive vector animations from named states plus scroll markers instead of long timelines.
- **Shared tokens:** route every reveal (especially clip-path masks) through `--dur-reveal`, `--ease-reveal` and `--reveal-shift`, and authored moves through `--ease-land`, `--ease-heavy`, `--ease-whip` and `--ease-exit` (all in `assets/tokens.css`, tuned per project).
- **Restraint:** one authored moment per view. Nothing starts invisible waiting for an observer unless that reveal is the moment.

## Lag-free rules (60 fps or it is not done)
1. **One clock.** Drive everything from a single `requestAnimationFrame` loop (a GSAP ticker or the smooth-scroll loop). No `scroll` handlers that touch layout. Use delta-time motion so 120 Hz screens stay correct.
2. **Smooth the input, not the layout.** Lerp scroll and pointer values and render from the lerped value; never animate layout properties.
3. **Composited properties only:** `transform`, `opacity`, `filter`, `clip-path`, `scale`, `translate`, `rotate`. Never animate width, height, top, margin or font-size.
   - Name the properties you transition. Never use `transition: all` (or Tailwind's `transition-all`): it animates changes you did not intend and blocks browser optimisations.
   - Use `will-change` only on transform, opacity or filter, only on elements that visibly stutter on their first frame (most often in Safari), and never `will-change: all`. Each promoted layer costs memory, so never add it preemptively.
4. **Read, then write.** Cache sizes with ResizeObserver and IntersectionObserver, and never read layout inside the loop after a write.
5. **Prepare before showing:**
   - Preload and decode images (`img.decode()`).
   - Precompile shaders and upload textures before the reveal (in three.js: `renderer.compile`, `renderer.initTexture`).
   - Use GPU-compressed textures (KTX2/Basis) and compressed geometry (Draco or meshopt).
6. **Get work off the main thread:**
   - Decode in workers.
   - Prefer CSS scroll-driven animations (`animation-timeline`) and View Transitions, which run on the compositor.
   - Use OffscreenCanvas where it helps.
7. **Budget and adapt:**
   - Measure frame time.
   - Cap `devicePixelRatio` at 2 and drop it to 1.5 or 1 (or lower the effect quality) when frames run long.
   - Pause anything off-screen or in a hidden tab.
   - Use `content-visibility: auto` for long grids.
8. **No garbage in the loop.** Reuse vectors and arrays and allocate nothing per frame; GC pauses are visible stutters.
9. **Text without relayout.** Animate per-glyph transforms on pre-split spans, or use canvas or SDF text. Never animate the layout of text.
10. **Reduced motion:** keep the scene and drop the travel. Provide a still or a crossfade, never a broken state.
11. **First-paint stalls.** The browser compiles a GPU pipeline the first time each new combination of paint effects appears (conic or repeating gradients, clip-path, masks, blend modes, SVG filters). That can cost hundreds of ms per card on the first scroll.
    - Browse grids show pre-rendered stills or video loops and keep the live effect for the detail view.
    - Or precompile everything behind a loader.
    - Measure it on the first, cold pass in a fresh tab: a card can cost 300+ ms on its first paint and 17 ms on the next, so a warm second pass hides the problem.

**How the smoothest sites do it:**
- Rich visuals arrive as GPU-ready textures, video, or one canvas, prepared behind a loader or an "Enter" gate.
- None of them paint heavy, varied CSS art live while scrolling.
- Procedural generation keeps downloads small.
- They measure performance continuously on low-end devices.

## Making it an event (Sell and Show work)
- A single world with its own physics, material and light, shown one camera move at a time.
- Real-time response: the cursor, scroll and clicks each get a reply within a frame.
- Sound synced to motion where it fits. It is optional and off under mute or reduced-motion preferences.
- Something the visitor did not expect: shatter, grow, refract, morph.
- Type and UI kept tiny and precise, so the object gets the applause.
