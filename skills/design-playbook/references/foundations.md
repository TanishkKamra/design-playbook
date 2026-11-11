# Foundations: layout, spacing, type, colour, basics

These are the floor for every site and app screen. The brief and taste build on top. "Convention" marks a working default rather than a hard standard.

## The short version
- Decide the systems before the pixels: one spacing scale, one type scale, one palette, one radius set and one icon set. Then use only those values.
- Hierarchy comes from four levers used together: size, colour and contrast, grouping (proximity) and whitespace. Squint test: the most important thing still reads first.
- Restraint scales. Use 1–2 typefaces, 1 accent and a neutral ramp, with semantic colours only for states.
- Accessibility numbers are hard floors, not targets.

## 1. Starting a layout
1. **Content first.** List what the screen must say and do, ranked by importance. Write real copy, never lorem.
2. **Mobile first at 375 px.** Stack in priority order, then widen and use the room.
3. **Breakpoints.** Pick one set and keep it, for example 640/768/1024/1280/1536 or <600/600/840/1200/1600.
4. **Grid.**
   - 4 columns on a phone, 8 on a tablet, 12 on a desktop.
   - The gutter is about 24 px.
   - Cap the content container at about 1140–1440 px and let the margins grow.
5. **Plan for scanning.** People read headings first (a layer-cake pattern), so front-load headings and subheads with meaning. Without those cues people fall back to an F-pattern.
6. **Greyscale first.** Grey-box the hierarchy, then add type, then colour last. If it fails in greyscale, colour won't save it.

## 2. Spacing
- **The scale.** The base unit is 4 px and most steps fall on 8. Steps sit at least about 25% apart: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. No off-scale values.
- **Proximity.**
  - The space inside a group is smaller than the space between groups.
  - A heading sits closer to its own content than to the section above it.
  - Recheck this when columns stack on narrow screens.
  - Padding inside a card is never larger than the gap between cards. 40 px inside with a 12 px gap merges the cards into one block; 16 px inside with 32 px between keeps them separate.
- **Start with too much whitespace, then remove some.** Cramped reads as cheap.
- **Fluid space.** Use `clamp()` on each step between a 360 px and a ~1240 px viewport, instead of adding breakpoints.
- **Section padding.** About 64–96 px on desktop and 40–56 px on a phone, tuned to the brief's density (convention).

## 3. Typography
- **How many faces.**
  - 1 is enough, 2 is common, 3 is rare and 4 is almost never right.
  - Each face gets one fixed role: display, body, or mono for data.
  - Pair faces with low contrast between them, and never mix faces inside a paragraph.
- **Weights.** 2–3 per family (e.g. 400, 500/600, 700). For UI, one family in two weights is usually enough.
- **The scale.**
  - The ratio is about 1.2 for dense UI and 1.25–1.333 for content and marketing; go larger only for expressive heroes.
  - Use about 5–7 sizes in total.
  - Make the scale fluid with `clamp()`, e.g. 1.2 at 360 px rising to 1.333 at 1240 px.
  - Worked example: a 1.25 ratio from 16 gives 20, 25, 31 and 39.
- **Body size.** 16–18 px on the web, with a range of 15–25 depending on the face.
- **Line-height.**
  - Body 1.4–1.5; use 1.5 for long reading and 1.4 for UI.
  - Headings 1.0–1.25, getting tighter as the size grows. About 1.1 is a good default.
- **Line length.** 50–75 characters. Set `max-width: ~65–70ch` on text blocks.
- **Letter-spacing.**
  - +0.05 to +0.12em on all caps and small caps.
  - 0 on lowercase body text.
  - Slightly negative on large display text, no tighter than about -0.04em.
- **Caps** are for short labels only.
- **Line breaks.** Use `text-wrap: balance` on headings and `text-wrap: pretty` on paragraphs, so no single word is left alone on a last line (a widow) and no lone line is stranded at the top of a column (an orphan). `pretty` is not in Firefox yet and degrades harmlessly. `balance` only acts on short blocks (up to about 6 lines in Chromium and 10 in Firefox), so keep it for headings and short text and never set it on long paragraphs. Use `pretty` for short and medium text, and leave long text (10+ lines) and code on default wrapping.
- **Optical left edge.** Side bearings grow with size, so a large headline looks indented against the body text below it. Nudge the headline left until the stems line up, which is several px at display sizes. Hang opening quotation marks outside the text edge: `hanging-punctuation: first` works only in Safari, so elsewhere pull the quote out with a negative `text-indent` of about its width.
- **Build hierarchy** from size, weight, colour and space, not by making everything bold.
- **Pairings for marketing work.** Pair an expressive display face with a neutral grotesk for the body. Check every face's licence before use.
  - Starting points by mood, all free on Google Fonts: elegant (Bodoni Moda or Playfair Display over a geometric sans), luxury (Cormorant Garamond over Lato), editorial and fresh (Fraunces over Inter), poster and loud (Anton over Mulish), tech (Rajdhani over Roboto), soft and friendly (Quicksand over Nunito).
  - These are the most-used pairings on the web, so a brief that wants to stand out needs a less common face in the display role. Montserrat, Poppins, Lato and Open Sans in the display role read as a template.
  - Thin display faces (Cormorant Garamond's light weights, Bodoni's hairlines) are for 24 px and up. Scripts such as Pacifico are for a few words of display only, never body text or all caps.
  - Use the current family names: Mulish (not Muli) and Source Sans 3 (not Source Sans Pro). Google Fonts still serves the old names, but they are legacy. Helvetica Neue needs a paid licence; Inter is the free fallback.
- **Italic accent in a headline.** Set one word in the italic of the same serif and the rest in roman, at the same size, so the emphasis comes from voice rather than weight or colour. Use a family with a true italic, not a slanted roman.
- **Survive user overrides.** Layouts must hold with line-height 1.5, paragraph spacing at 2×, letter-spacing 0.12em and word-spacing 0.16em (WCAG 1.4.12).
- **Numbers.** In tables, stats and counters, use tabular numerals: `font-variant-numeric: tabular-nums`.
- **Rendering on macOS.** Set `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` once on the root, so text renders crisper and no heavier than drawn. Never set it per element, which makes weights inconsistent. Other platforms ignore both properties.
- **Loading.** Font hosting and licences are covered in `ship-readiness.md`.

## 4. Colour

### How many and in what proportion
- **How many.**
  - A neutral ramp of 8–10 shades.
  - One primary or accent colour with 5–10 shades (100–900).
  - Semantic colours (success, warning, danger, info) used only for state.
  - Most products need one accent; a second accent has to earn its place.
- **Proportion (60-30-10).**
  - About 60% dominant: the canvas and surfaces.
  - About 30% secondary: text and panels.
  - About 10% accent: actions and the key highlight.
  - This is a guideline, not a law.
- **Three working colours.** A UI needs three colours, not five brand colours: ink for the words, a surface for them to sit on, and one colour that means "tap here".
- **Harmony.** Hue, saturation (chroma) and lightness are the dials.
  - Complementary (opposites): strong contrast; use one of the pair as the accent.
  - Analogous (neighbours): calm.
  - Triadic (three evenly spaced hues): lively, but hard to balance.
  - Pick the harmony that fits the mood, then let one hue lead.
- **Build in OKLCH.**
  - Equal L steps look equally light across hues, which plain HSL does not give you.
  - Derive hover and active states with relative colour, e.g. `oklch(from var(--accent) calc(l - .1) c h)`.
  - Add a P3 override inside `@media (color-gamut: p3)`.
- **Hand-pick shades.** Choose 700 and 300 first, then fill the gaps. Don't generate shades with lighten/darken, and avoid true #000.
- **Tinted neutrals.** Neutrals tinted slightly toward the brand hue feel intentional (convention).

### An accent has jobs; each job has its own contrast test
Test each pair on the surface it actually sits on, with `scripts/contrast.mjs`.
- **Button label:** 4.5:1 against the button.
- **Button shape:** 3:1 against the page. Lime with dark text scores 8.1:1 on the label but only 1.9:1 against a pale page, so the button melts away. Fix it with an outline or a deeper surface.
- **Link in running text:** 4.5:1 against the page. Sky blue and coral pass as buttons (3.2:1) but fail as links; set links in the ink colour, underlined.
- **Badge** (accent at about 15% as the background, accent as the text): the tint lifts the background, so mid-tone accents fail here. Set badge text in the ink.
- **The dead zone:** accents at mid lightness take neither a white nor a dark label at 4.5:1 (for example 4.1:1 and 3.8:1). Nudge the accent one shade darker or lighter before building any button.
- **Themes:** a light-mode accent can sink in dark mode (a blue at 6.8:1 on white drops to 2.7:1 on midnight), while lime or amber do the opposite. Use a mid-tone checked in both themes, or give each theme its own shade.

### Using the accent
- **Where it goes.** Only on what people should tap. Never make it the only carrier of meaning: about 1 in 12 men confuse red and green.
- **Big areas get a tint.** Keep the full colour for buttons.
- **Text colour.** Darken a light brand colour for text (e.g. #9A79FC → #6440E0), and put dark text on yellow (e.g. #FED480).
- **One shade per state.** Default, pressed (e.g. #6440E0 → #4422B2), and disabled as a pale tint with a readable label.

### Secondary text
- Make it the ink at about 60–65%.
- Check it on its real surface, not on white. On a strong tint (pistachio, lavender) push it to about 70%.
- #B0B0B0 on white looks elegant and disappears; #6B6B6B stays quiet and readable.

### Errors
- Not #FF0000: it is hard to read at small sizes and buzzes on dark grounds.
- An error is a colour, a shape (icon) and words. Check it in greyscale.
- Use a soft container with dark red text instead of white text on a full red banner.

| Role | Light | Dark |
|---|---|---|
| error | #B3261E | #F2B8B5 |
| on-error | #FFFFFF | #601410 |
| error container | #F6CBC8 (spec value #F9DEDC) | #8C1D18 |
| on-container | #410E0B | #F9DEDC |

Older alternatives: #B00020 for light, #CF6679 for dark.

### Light mode is a theme, not "#FFFFFF everywhere"
- **Canvas and cards.** Put the canvas a step off white (e.g. #F2F2F7) and the cards in #FFFFFF on top. The contrast between levels gives the structure.
- **Text.**
  - Near-black, not black: primary #1D1B20, secondary #49454F.
  - Disabled at about 38% ink (#A9A8AA). Disabled text is exempt from WCAG contrast; nothing else is.
- **Elevation comes from shadow,** because the surfaces stay white.
  - The levels: 0 dp base, 1 card, 4 app bar, 8 menu, 24 dialog.
  - In practice that is 3 shadow tokens: card, raised (menus, popovers) and modal.
- **Deepen the accent for white grounds.** A pastel that works on dark (#BB86FC) fails on white; use its deep tone (#6200EE, about 7.9:1).
- **Cheat sheet:** #F2F2F7 base, #FFFFFF card, #E5E5EA divider, #1D1B20 text, #49454F secondary, #A9A8AA disabled.
- **Warmer or cooler off-white grounds** for the mood: Ivory #FFFFF0, Linen #FAF0E6, Cream #FFFDD0, Seashell #FFF5EE, Alabaster #EDEAE0, Ghost White #F8F8FF.

### Dark mode is its own theme, not light mode inverted
- **The base is dark grey, not black.** Use #121212, or #1C1C1E for raised and grouped surfaces. Pure #000 is only for a product that is truly OLED-first.
- **The full ramp:**

| Surface | Hex | Elevation |
|---|---|---|
| Base | #121212 | — |
| Cards | #1E1E1E | 1 dp |
| App bar | #272727 | 4 dp |
| Menus | #2E2E2E | 8 dp |
| Dialogs | #383838 | 24 dp |

- **Check text on every elevation, not only the base.** Each step up lowers contrast: #A0A0A0 secondary text is 6.4:1 on #1E1E1E but 4.48:1 on #383838, and a #BB86FC accent 4.43:1. Lift the text tone or keep dialogs at about #333333.
- **Text** is white at 87 / 60 / 38%:
  - #E0E0E0 (14.2:1) for primary text.
  - #A0A0A0 (7.2:1) for secondary text.
  - #6C6C6C (3.6:1) for disabled text only.
  - Avoid full #FFFFFF for running text (18.7:1): it glares and haloes on dark grounds. Keep it for rare emphasis.
- **Desaturate accents** to about the 200 tone: #6200EE is 2.5:1 on #121212, while #BB86FC is 7.1:1.
- **Show elevation by lightening the surface,** not by adding shadow. This mirrors light mode, where the shadow grows and the surface stays white.
- **Marketing pages** can use a near-black tinted toward the product's world, which reads richer than flat grey: warm #0D0907, #040200, #252321; neutral #060606; cool #151922; warm brown #4D423E.
- **Text stays at 4.5:1 or better.**

### Dividers are the quietest thing on screen
- **Try space first:** a bigger gap between groups instead of a line under every row.
- **When a line is needed:**
  - Make it 1 px and light. #E5E5EA is the hairline between white cards on an off-white canvas; #C6C6C8 or #CAC4D0 is a visible line on white; black at about 12% alpha adapts to any surface.
  - On dark grounds use #38383A on #1C1C1E, never white lines.
- **Inset list dividers** so they start at the text, not under the icon or avatar.
- **Contrast.** Decorative dividers need no 3:1 contrast, but borders that identify a control (input fields, toggles) do (WCAG 1.4.11). Never use a faint divider tone for an input border.

### Contrast floors (WCAG 2.2 AA)
- **Body text:** 4.5:1.
- **Large text** (24 px and up, or 18.66 px (14 pt) bold and up): 3:1.
- **UI components, focus rings and meaningful graphics:** 3:1 against adjacent colours.
- **APCA** (advisory only): body text Lc 75–90, large headlines Lc 45 or more.
- **Never colour alone:** pair colour with an icon, a label or a shape.

## 5. Other basics
- **Alignment.** Every element snaps to shared edges. Margins, gutters and rows come from one base unit.
- **Radius.** Use a small set (e.g. 4 / 8 / 12 / 16 / 28 px, plus full for pills). Nested shapes are concentric: the outer radius equals the inner radius plus the padding between them, so an inner radius is the outer one minus the padding. The same radius on both makes the inner shape look pinched. Once the padding grows past about 24 px, the layers read as separate surfaces, so pick each radius on its own.
- **Shadows.**
  - At most 2–3 elevation levels (card, raised, modal), all from one light direction.
  - Shadows carry elevation in light mode only; dark mode lightens the surface instead.
  - Tint shadows toward the hue of the surface beneath, at low opacity; pure black shadows look muddy. A starting point is a blur about twice the Y offset (e.g. `0 8px 16px` at about 8%), then tune by eye.
  - **A shadow ring instead of a border** for cards, panels and other containers whose border only fakes depth. A transparent ring works on any background, while a solid border colour only suits the surface it was picked for.
    - Never use the ring where the outline is what shows that something is a control (an outline button, a field). Those boundaries must pass 3:1 (WCAG 1.4.11), and a 6–8% ring does not. Use a real border or a filled surface there.
    - Light mode stacks three layers: a 1 px spread ring at about 6% black, a lift of `0 1px 2px -1px` at about 6%, and an ambient `0 2px 4px` at about 4%. On hover, raise them to about 8%, 8% and 6% with a 150 ms ease-out transition on `box-shadow`.
    - Dark mode uses only the ring, in white at about 8%, rising to about 13% on hover.
    - The tokens are `--shadow-ring` and `--shadow-ring-hover` in `assets/tokens.css`.
    - Keep real borders for dividers, table cells, input outlines (which must pass 3:1) and selected or focus states. Those borders carry structure or state, not depth.
- **Image edges.** Photos and screenshots get a 1 px inset outline (`outline: 1px solid`, `outline-offset: -1px`, so the size does not change). Use pure black at 10% in light mode and pure white at 10% in dark mode. A tinted neutral or the brand ink picks up the surface colour and reads as dirt on the edge. Transparent logos and cut-out illustrations get no outline.
- **Icons.** One set and one grid (usually 24 px). The rule is one *style*; stamping the same default icon on every card regardless of meaning is a slop tell.
  - **Stroke matches the text beside it.** On a 24 px grid, use 1.5 px next to regular (400) text, 2 px next to medium or semibold (500–600), and 2.5 px next to bold (700). Keep one stroke weight per surface, and never mix icon libraries on one surface.
  - **Size:** inline icons are 1–1.25em. Use the set's native sizes (16, 20, 24) rather than fractional scales. Test every icon at its smallest rendered size, often 16 px, and use a simpler glyph there instead of shrinking a detailed one. Icons are SVG, never raster.
  - **One SVG per icon, coloured with `currentColor`.** Strip hard-coded fills and strokes when importing, and let CSS colour and opacity drive hover, selected and disabled states. Outline is the default; the filled variant marks the active or selected state (active tab, saved bookmark, liked heart).
  - **Right-to-left layouts:** flip back and forward arrows, navigation chevrons, send glyphs and list or indent icons. Never flip logos, checkmarks, clocks or media playback controls. Check composite icons part by part.
  - Icon-only controls have an accessible name; decorative icons are hidden from assistive technology.
  - Beside text, centre the icon on the x-height for lowercase labels or the cap height for caps, not on the line box.
- **Optical corrections.** Maths gives the starting point; the eye decides.
  - A play triangle centred by its box looks pushed left, because its centroid sits a sixth of its width left of the box centre. Nudge it right by up to that much, which is about 2 px on a 12–16 px glyph.
  - On a button with an icon and a label, the icon side gets about 2 px less padding than the text side (e.g. 16 px by the text, 14 px by the icon). Equal padding makes the icon look pushed out.
  - Lopsided icons (stars, arrows, carets) are fixed once in the SVG's path or viewBox, not with margins in every component.
  - Circles and points look smaller than squares of the same height. Make circles a few percent larger (about 3–5%) and let points overshoot the line further, as type designers do with O and A.
  - A row of logos is balanced by visual area, not equal height: wide wordmarks go shorter and compact marks taller.
- **Targets.**
  - The WCAG AA floor is 24×24 px.
  - Aim for 44 pt (iOS) or 48 dp (Android) on touch, with about 8 px between targets. In dense desktop UI, use at least 40×40 px.
  - When the visible control is smaller (a 20 px checkbox, a close icon), extend the hit area with an invisible pseudo-element. Two hit areas never overlap: shrink the extension until they stop colliding.
- **Motion basics.**
  - Durations: 100–160 ms for UI feedback, most UI under 300 ms, modals and drawers 200–500 ms. The exact tokens and curves are in `motion.md`.
  - Ease-out on enter, faster exits, never linear for movement.
  - Honour `prefers-reduced-motion`.
  - Full rules are in `motion.md`.
- **Every state is designed:** hover, focus-visible, active, disabled, empty, loading, error and long content.

## Both views (choose by context, say why in one line)
- **Line length:** 45–90, 50–75 or ≤80 characters, depending on the standard. Default to 50–75.
- **Body line-height:** 1.2–1.45 in classic typography; at least 1.5 for accessibility. Use 1.5 for reading and 1.4 for UI.
- **Touch targets:** 24 px (WCAG AA), 44 pt (iOS), 48 dp (Android). Treat 24 as the floor and 44–48 as the target.
- **Breakpoints** differ by framework. Choose one set per project.
- **Dark base:** #121212 or #1C1C1E for product UI; pure #000 only for an OLED-first product.
- **Dark ramps:**
  - Neutral greys (#121212 to #383838) suit product UI.
  - Marketing sites often use a near-black tinted to the brand (#0D0907, #151922).
  - Both avoid pure #000. Choose by the surface's job.
- **"Avoid true #000" vs "dividers at #000 12%":** these do not conflict. Black at low alpha over a surface is a tint, not a black fill.
- **Motion durations:**
  - Generic durations and ease-out tokens suit UI feedback.
  - Authored moments reject one preset everywhere; pick a curve and duration per move.
  - Both hold: tokens for UI, choreography for authored moments (see `motion.md`).
