# Resources: where to look, what to build from

Use these to find references (stage 2) and component mechanics (stage 4). Everything from a library gets restyled with the project's own tokens, type and motion before it ships. Shipping a library's default look is how every site ends up looking the same. Check each licence before shipping code from it.

## Finding references
- **Lock the references before building** and tie every design decision to one of them. A reference picked after the fact only decorates a guess.
- **Refero** (https://refero.design): a large library of real web and iOS screens and flows; the strongest product-UI reference. The free tier is limited.
- **Mobbin** (https://mobbin.com): real app screens and flows. Compare onboarding, settings and empty states across products.
- **Details.so** (https://details.so): tagged hero, footer, nav and micro-interaction examples from live sites. Paid.
- **Design Spells** (https://designspells.com): curated micro-interactions from real apps. Free.
- **Awwwards** (https://www.awwwards.com): scored marketing and portfolio sites with technology tags. Use it to find current directions.
- **designprompts.dev**: one dataset rendered in many named looks (bauhaus, newsprint, swiss, terminal, art deco and more). Use it to show the user directions, then design original work.
- **shadcn.io/design** (https://shadcn.io/design): DESIGN.md files for hundreds of brands in a token format (colours, typography, rounded, spacing, components, then notes). Use the format for your own design system file. They are unofficial, so never use one as the design itself.

## Component and effect sources
- **Kokonut UI** (https://kokonutui.com): free MIT-licensed animated React components, strong on AI-product patterns (loading shimmer, voice input, dynamic text).
- **Aceternity UI** (https://ui.aceternity.com): free copy-paste React/Tailwind/Motion components and backgrounds (shaders, beams, aurora, spotlights, globe). Blocks and templates are paid.
- **fancycomponents.dev**: free open-source microinteractions (image trail, text highlighter, gravity). Licence not stated, so use it as an idea bank.
- **Skiper UI** (https://skiper-ui.com) and **Vengeance UI** (https://vengenceui.com): animated shadcn-style components. Check the licence first; treat them as reference only.
- **Animmaster Lib** (https://animmasterlib.dev): a paid bundle of GSAP and WebGL effects. Its usage terms are not stated, so ask the seller before shipping its code.
- **HorizonX** (https://horizonx.so) and **Metalforge** (https://metalforge.xyz): paid 3D and perspective components and shader effects. Reference only.
- **Radix Primitives** (https://www.radix-ui.com) and **shadcn/ui** (https://ui.shadcn.com): accessible behaviour to build your own skin on.

## Charts and data
- **Bklit UI** (https://bklit.com/docs/components): MIT composable charts themed by `--chart-1..5` tokens, with spring animation.
- **Liveline** (https://benji.org/liveline): an MIT canvas line chart for real-time data (line, multi-series, candlestick).

## AI interface pieces
- **thinking-orbs** (https://libraries.dev/orbs): animated "thinking" states for AI interfaces. Licence not stated.

## Motion skills and references
- **emilkowalski/skills** (https://github.com/emilkowalski/skills): MIT agent skills for UI motion and review. Useful ones to run on a build: `review-animations`, `improve-animations`, `remove-animations`, `gestures`, `break-ui`.
- **Motion** (https://motion.dev): docs whose pages are live demos, showing springs and scroll-linked progress values.

## Workflow tools
- **Agentation** (https://agentation.com): a dev toolbar that turns clicks on the UI into selectors, file paths and styles for an agent. Free for internal use.
- **Utopia** (https://utopia.fyi): generates fluid type and space scales with `clamp()`.
- **Five levels of AI-assisted building:** (1) pasting chat code you don't understand; (2) one-prompt builders; (3) a real repo where you can fix what breaks; (4) feeding the AI your own references and components; (5) knowing what good looks like, so the AI executes your taste. Work at levels 4 and 5: references and components go in, and taste judges what comes out.

## Fonts
- **Fontshare** (https://www.fontshare.com): free for commercial use but not open source. Read each font's licence for web self-hosting terms.
- **Google Fonts** (https://fonts.google.com): download the files and self-host them; don't hot-link (see `ship-readiness.md`).
