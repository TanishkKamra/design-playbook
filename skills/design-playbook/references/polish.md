# Polish: what paid-designer work adds

Use this with `anti-slop.md`: that file says what to avoid, and this one says what to add.

## The one big gap
- Premium work carries **real imagery or rendered material**: product photography, portraits, landscapes, or 3D renders of gold, chrome or glass with real lighting.
- Flat CSS-gradient shapes standing in for subjects read as placeholder or AI-made at once.
- Fix it in this order of preference:
  1. Licensed photography.
  2. Rendered 3D (WebGL, or pre-rendered).
  3. A detailed, lit illustration (SVG with gradients, highlights, shadows and grain).
  Never bare geometric blobs.

## What premium work does
- **One hero object per view,** lit like a product shot: a key light, a rim light, falloff into the ground and a soft contact shadow.
- **Extreme type contrast:** one huge display line against tiny labels, in a face chosen for the subject:
  - A didone for jewellery.
  - A condensed grotesk for an event.
  - A light grotesk for fintech.
  - An editorial serif for culture.
- **Material consistency:** every element comes from the same world (all gold, all glass, all paper, all ice).
- **Engineered micro-detail:** hairlines, corner brackets, leader lines from a callout to its object, status dots, faint grid lines and crosshairs, tabular numbers and optical alignment. These are the small things that show someone cared.
- **Tactile controls:** inner shadows on tracks, highlights on knobs, pressed states that compress, and colour that carries the state.
- **Motion with weight:** blur on fast moves, a slight scale on entry and colour interpolation. Nothing is linear, and settles overshoot only when the motion is physical.
- **Restraint:** few elements, plenty of space and small CTAs. The image and the headline do the selling.
- **Chrome stays tiny:** small pill buttons and tiny-label navigation, so the object leads.

## Typical looks that work
These are directions, not templates:
- **Dark stage:** a near-black ground and one luminous object (glass, x-ray, metal) as the only image, with hairline HUD details and a light-weight sans headline.
- **Editorial luxury:** a giant high-contrast wordmark, real product photography on a pale field, serif headings in mixed weights, small pill CTAs and a soft natural palette.
- **Airy fintech:** a soft sky gradient field, frosted panels with real blur, one huge confident number and small quiet labels.
- **Event:** a near-black ground, an extruded or metal hero object with a hard rim light, condensed heavy caps, and a rotating circular badge.

## Backgrounds with material, so nothing is flat
Choose the one that belongs to the subject's world:

| Background | Suits |
|---|---|
| Felt texture | Craft, play |
| Fluted (reeded) glass | Calm premium, wellness; with saturated light streaks behind it, audio and tech launches |
| Thermal gradients | Energy, health, heat |
| Water ripples | Calm, water, wellness |
| Speckled graphite | Industrial, tools |
| Single-hue landscapes | Travel, outdoor, calm |
| Blueprint grids | Engineering, building |
| Halftone | Print, editorial, retro |
| Grainy gradients | Modern brand grounds |
| Grass texture | Outdoor, sport, nature |
| Dithered images | Tech, retro computing |
| Paper texture (smooth, crumpled, kraft) | Editorial, writing; crumpled for zines and handmade |
| Self-healing cutting mat (grid with ruler ticks) | Making, craft, design tools, workshops |
| Fabric (satin, rib knit, jacquard, houndstooth) | Fashion, interiors, comfort products |
| Hand-printed and woven patterns | Homeware, hospitality, slow and sustainable brands |
| Plastic-wrap overlay (crinkled clear film) | Streetwear, zines, club and music posters |
| Contour lines | Maps, outdoor, data |
| Cloud sky | Openness, travel |
| Pixel mosaics | Games, digital |
| Lens distortion | Optics, camera, experimental |
| Stippled gradients | Illustrative, print |
| Square-dot grids | Tools, notebooks |
| Blurred photos | Ambient grounds behind text |
| Iridescent shapes | Fashion, beauty, crypto |
| Impressionist paintings | Art, culture, luxury |
| ASCII and pixel art | Developer, retro |

Rules:
- **One material per piece.** The background joins the material world.
- **Keep it behind the content:** low contrast under text, and a scrim or a solid panel where body copy sits. Text still meets 4.5:1.
- **Measure text on a texture at its extremes:** check it against the lightest and the darkest patch it crosses, not the average colour. Both must pass.
- **Build it cheaply:**
  - Grain and paper: an SVG `feTurbulence` filter or a tiny tiled PNG at about 3–8% opacity.
  - One neutral grey paper or fabric scan serves every brand colour: tile it over the colour with `background-blend-mode: multiply`. Check the tile repeated at least 2×2 on screen; a visible seam means it is not seamless.
  - Halftone, dots and grids: CSS gradients.
  - Cutting mat: two layered `repeating-linear-gradient` grids (fine lines faint, every fifth line stronger), with ruler numbers as real text marked `aria-hidden`.
  - Fabric and woven patterns: a seamless scanned tile (WebP or AVIF, about 100 KB or less) with `background-size` in px so the weave keeps its real scale at every width. Draped satin does not tile, so use it as a cover image.
  - Dither, ASCII, ripples and thermal: one shader or a pre-rendered image.
  - Fluted glass: `backdrop-filter` over a repeating gradient, or a shader.
- **Animated backgrounds pause off-screen** and show a still under reduced motion.
  - Plastic wrap: a pre-rendered overlay with `mix-blend-mode: screen` or `soft-light`.
- **Blurred or grainy type** works on one large display word only; every other piece of text on the page stays sharp.
- **A textured ground fixes "flat" cheaply,** but it never replaces the hero object or real imagery.

## Building a glowing object in layers
Build it up in passes and judge each one before adding the next:
1. A thin stroke shape.
2. Soft light rays.
3. A radial wipe that reveals the lit edge.
4. A deep glow.
5. A contrast pass.
6. A second, fainter ray layer.
7. A film finish: grain and a slight colour fringe on the brightest edge.

On the web, use layered SVG with blur filters and `mix-blend-mode: screen`, or one shader. Animate only opacity and transform.

## Polish checklist
- [ ] A real image, render or lit illustration wherever a subject is shown. No flat blobs.
- [ ] One clear hero element, lit or composed like a product shot.
- [ ] The typeface fits the subject, with a real size jump between display and labels.
- [ ] Every element comes from one material world.
- [ ] At least two micro-details show care: a hairline, a highlight, an inner shadow, tabular numerals, a bracket or grain.
- [ ] The motion has weight (easing, plus blur or overshoot where physical) and a clear job.
- [ ] The ground is a chosen material (texture, grain, image) rather than a flat fill, where the brief allows.
- [ ] Shrunk to thumbnail size, would someone stop scrolling for it? If not, it is not done.
