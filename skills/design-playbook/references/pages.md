# Websites, landing pages and portfolios

## The short version
- One clear promise above the fold, one primary action, and product proof (real UI, real output, real work) within the first scroll.
- A strong, limited palette and one or two typefaces; contrast and spacing do the branding.
- Each section makes one argument and ends in a way forward.
- Show the product rather than describing it: live-looking UI, demos, real artefacts.
- Personal sites and portfolios win by voice and restraint, not by feature count.
- None of the best stack the slop tells (see `anti-slop.md`).

## Process before pixels
1. Audit what exists and learn how the business makes money; that decides the homepage's job.
2. Pull in the real content.
3. Answer the three questions: what do you do, is this for me, why should I trust you.
4. Write down the hierarchy: the hook, and the one scroll-stopping moment.
5. Choose the palette and type only after that.
6. Make a grey-box wireframe last, while a structural fix still costs an afternoon.

**Landing-page order once the content is known:**
1. Wireframe the hero first (what it is and who it is for).
2. Build the skeleton of all sections.
3. Make a per-section moodboard from the whole market, not only direct competitors.
4. Set one font in two weights, black on white, with one accent for buttons.
5. Tighten the spacing.
6. Add your own assets and smooth scrolling.

**For a shop, write the failure list first:** out of stock, wrong postcode, expired coupon, failed payment, late delivery. That list is the design. A serious store checks well over a hundred such cases across every section before launch.

## Five homepage decisions that beat a redesign
1. **One filled call to action.** The secondary action is a quiet outline.
2. **One CTA colour used for nothing else.** The eye learns that the colour means "go". The trade-off is that people stop reading the label, so the label must be clear.
3. **A footer that proves the business is real:** address, hours, information and legal columns, socials and a newsletter.
4. **The logo always links home.**
5. **No hero slider.** A slider means nobody agreed on one message, and few people wait for slide two.

## Hero structures beyond "centred title and two buttons"
Start from the wireframe (what each block is and how big), then choose one structure for the brief. Centring is allowed when it is framed with intent; the ban is on the default scaffold.

| Hero | What it looks like |
|---|---|
| Bento | Title, media, text, a card and the CTA sit in an asymmetric grid of unequal tiles, anchored by one large image tile. |
| Product-led split | A tall product image fills the centre column, with title, price or specs and the CTA in narrow side tiles. |
| Organic masks | Images are cut into soft, interlocking blob or arc shapes. Text tiles stay small, so the shapes carry the layout. |
| Overlapping product shot | An editorial wordmark with the product photo breaking out of its frame or across a diagonal cut. |
| Framed centre | If it stays centred, a shape frames it: a background arc, a glowing ring behind the title, or a wordmark lit from behind. |
| Cinematic product | A near-black stage, the product lit with a coloured rim light, and the wordmark passing behind or through it. |
| Gallery | A fan or arc of cards over a photo sky, or a row of portraits with a marquee of short words. |
| Bento of product photos | Product photos cut into tiles around a small text block. |
| Product interface | A light beam or arc frames a short headline, and the real dashboard rises from below. |

## Section structures (scroll-driven, from wireframe to finished)
- A concave tunnel carousel of cards.
- A ring or orbit of cards.
- A loose collage of tilted, floating cards.
- A stage with concave side panels around a centre card.
- A diagonal cascade of cards.
- A sticky visual with scrolling captions beside it, for editorial or data stories.
- One feature per pinned scroll scene, with a sequence scrubbed by scroll progress and the copy following the visual.
- Animated diagrams for specs instead of tables. Switch between dark and light grounds by content type (a dark hero, light specs).

## What "keep scrolling" sites share
- One cinematic subject per screen: a product render, a 3D object or a hero photograph.
- A short two-line headline set small in a corner.
- The subject moves or assembles as you scroll.
- Few sections, but every one is an event.

## Ground and accent pairs that work
One ground plus one accent, with the rest neutral:
- #18191A with rust #87482D on warm paper.
- #F8F9F3 with lime #C6FE56.
- #28282A with cream #F5E8D3 (luxury).
- #EEEEEE with coral #FF5E4E on a sky-blue image.
- Navy #152E40 with lime #CEFF52.

Always check the accent's jobs with the contrast script; lime fails as a button shape on a pale ground (see `foundations.md`).

## Quiet-luxury palettes
Four or five colours, built the same way every time:
- **A warm near-black, never #000:** #1A1918, #141413, #22201B.
- **An off-white, never #FFF:** #F8F5F2, #FAFAF4, #F5EFDB.
- **One or two mid neutrals** (stone, greige, taupe): #B7AEA1, #C9BFAD, #635E5A.
- **One deep, low-chroma accent:** oxblood #641917, plum #461222, bottle navy #14384C, cognac #503125, olive #88876D or camel #C69E6A.
- **No bright, saturated hue anywhere.** Grade the photography into the same palette (warm shadows, muted highlights) so the image and the interface read as one.
- **Mid-tones are for surfaces and large type only.** Olive #88876D on #22201B is 4.44:1 and #F8F5F2 on cognac #9E7C5D is 3.52:1, so both fail body text. Set body text in the near-black or the off-white; pairs like #F5EFDB on #461222 (13.3:1) and #B7AEA1 on #1A1918 (8.0:1) pass easily.

Sets that work: #1A1918 · #B7AEA1 · #F8F8F8 · #503125 (leather), #250D13 · #641917 · #F3F5F4 · #C69E6A (oxblood and camel), #141413 · #D4E6DF · #FAFAF4 · #635E5A (celadon), #461222 · #EFEEE8 · #33241F · #F5EFDB (plum and cream).

## Interactions: keep one only if its job applies here
| Interaction | Its job | Watch out for |
|---|---|---|
| Magnetic button | The interface answers the pointer | Pointer devices only |
| Staggered reveal | Paces how one group is read | Never on every section |
| Page transition | One continuous experience, e.g. the brand mark morphing through a wipe (View Transitions) | |
| Controlled parallax | Depth that is felt, not noticed (a few % of travel) | Overdone, it is what people complain about |
| Easter egg | Rewards curiosity, e.g. a surprise at the end of a loader | |
| Contextual cursor | Shows what a click will do before it happens (e.g. a preview card) | Pointer devices only |
| Browse-mode toggle | Lets people wander, or scan and compare | |
| Designed loader with a visible counter | Perceived waiting drops when the uncertainty goes | Never hide ready content behind a loader for effect |
| Horizontal scroll | Slows attention for a story | Wrong for a list people scan |
| "Lights on" toggle on a product photo | Shows what a still photo cannot | |
| Cloth or physics poster that reacts to the cursor | One memorable moment | Must pause off-screen and have a still fallback |

Pick the few that serve the brief, with one authored moment per view.

## Drag-to-explore (infinite canvas)
- **Why it works:**
  - Curiosity: half-seen edges invite a look.
  - Ownership: people move things themselves.
  - Spatial memory: people remember where things were.
  - It fits taste products: ceramics, fashion, furniture, portfolios.
- **Where it fails:**
  - People don't know they can drag.
  - It is wrong for visitors who came for one specific task.
  - WCAG 2.2 (2.5.7) requires a non-drag alternative: buttons, arrow keys or a list view.
- **Rule:** use it when people browse; skip it when they have a task.

## Portfolios
- The work leads; the interface steps back.
- Voice beats features: one clear line about who you are and what you do, then the work.
- Case studies show the problem, the decision and the result, with real artefacts.
- Every project card links to something real. No placeholder projects.

## The award-level bar
Awards juries score Design 40%, Usability 30%, Creativity 20% and Content 10%; an honourable mention needs about 6.5/10. Targets that award-level builds hold themselves to:
- **Speed:** LCP under 1.5 s, CLS under 0.05, INP under 100 ms. Under 3 MB on first view, and 60 fps on a throttled mid-range device.
- **One signature interaction,** not many.
- **Real content:** real copy and photography, never placeholder.
- **Touch and keyboard:** every hover-only interaction has a touch equivalent.
- **The hero works without JavaScript.**
- **Under the hood:**
  - One smooth-scroll engine, never two.
  - WebGL paused when off-screen.
  - `devicePixelRatio` capped.
- **Honest claims:** never call a site "award-winning" without evidence.
