# Process: the whole designer workflow

The look is only one third of the job. Research decides what to build and who it is for. Design and prototyping turn that into structure, then a system, then a surface. Testing and refinement check that it works for real people and keep it working after launch.

Interfaces people love come from all three phases:
- Research finds what people feel and the words they use.
- Design turns those into one memorable idea.
- Testing removes the friction that would spoil it.

Character laid over friction reads as annoying, so usability is the floor that character sits on.

## Size it to the project

Write the size in the brief at stage 1. The user can raise it.

| Size | Typical work | Research | Structure | Testing |
|---|---|---|---|---|
| **Light** | Poster, one landing page, portfolio | 15–30 min. The audience in one paragraph, 3 peer sites, needs in the users' words, a short synthesis | A section list and one flow (visitor to contact or purchase) | Walkthrough of the top 3 tasks; Chromium, Firefox and WebKit |
| **Standard** | Marketing site, shop, small app | Everything in Light, plus segments, a journey map, a 5-site competitor scan, accessibility and platform needs, a requirements list | Sitemap, user flows for the top 3 tasks, a navigation plan, grey wireframes | Light, plus a test round with real people if the user can run one |
| **Full** | Product, dashboard, multi-flow app | Everything in Standard, plus interviews or surveys run through the user, and evidence-based personas | IA from a content inventory, task flows for every key task, an interactive prototype of the main flow | Usability rounds, task metrics, a satisfaction score, A/B tests where there is traffic, a post-launch review |

## Phase 1: Research and discovery (stage 1)

An agent cannot interview strangers. Do this instead:
- Ask the user what they know.
- Ask them for any real material: support tickets, reviews, analytics, interview notes, sales-call notes.
- Gather public evidence: reviews of competing products, forum and community threads, app-store reviews.
- Quote that evidence instead of paraphrasing it into marketing copy.
- Never invent research, users or quotes. Mark every assumption as an assumption.

**The tasks:**
- **Audience and segments:**
  - List 1–3 segments by need and behaviour, not by demographics.
  - For each, write what they came to do and their context: device, time of day, mood, expertise, connection.
- **Needs and pain points, in their words:** collect 5–10 real phrases. They become candidates for headlines and copy, and they show where the design must reassure.
- **Personas, only from evidence:** a persona is a segment with a goal, a context, a frustration and a real quote. No stock photo, and no invented age or hobbies. Skip personas for Light work.
- **Journey map:**
  - Map the stages: discover, evaluate, act, use, return.
  - At each stage, note what people do, think and feel.
  - Mark the low points (anxiety, confusion, waiting) and the high point.
  - The low points get clarity and reassurance. The high point, or the rescue of the worst low point, is where the authored moment goes.
- **Competitor and market scan:**
  - Look at 3–5 direct competitors and 2 products from outside the category.
  - For each, note what it promises, how it is structured, and what users praise and complain about.
  - Name the conventions every competitor shares; Use surfaces keep them, because people already know them.
  - Name the gap no one fills; that is where the product can have character.
- **Behaviour data:** if analytics exist, find where people arrive, where they drop off and what they search for. Design for that, not for the org chart.
- **Functional requirements review:** list what the surface must do:
  - Features and the data each one needs.
  - Integrations.
  - Content types.
  - States.
  - Constraints.
  - What is out of scope.
  Check it with the user before designing.
- **Accessibility research:**
  - Name who could be shut out: people with low vision, colour blindness, motor limits or cognitive load; screen-reader users; older users; slow connections; non-native readers.
  - Name the legal bar for the market. WCAG 2.2 AA is the floor here; the European Accessibility Act has applied to many consumer products and services since 28 June 2025. Check the law where the product ships; this is not legal advice.
- **Platform research:**
  - Where it runs: phone browser, iOS, Android, desktop, tablet, TV, in-app web view.
  - The inputs: touch, mouse, keyboard, remote.
  - That platform's conventions.
  - The browsers the audience actually uses.
- **Reference gathering:** stage 2 (`resources.md`).
- **Synthesis:**
  - End with 3–5 design principles written for this product. Each one is a trade-off, for example "Calm over clever: one action per screen, even if power users want more".
  - Add the one insight that will shape the product's character.
  - Every later decision ties back to a principle or a finding.

## Phase 2: Design and prototyping (stages 2 to 4)

The rules for grids, type, colour, icons, components, buttons, forms, microinteractions and responsive layout live in `foundations.md`, `components.md` and `motion.md`. This phase sets the order, and adds the structure work those files do not cover.

1. **Information architecture:**
   - List every piece of content first.
   - Group the pieces by what people are looking for, and label each group in the users' words, not the company's.
   - Keep the key tasks shallow and the labels predictable.
   - A label people would hesitate over gets renamed.
2. **Sitemap:** list every page with its parent and its one job. Every page someone can land on is reachable, and none is orphaned.
3. **User flows and task flows:**
   - A user flow runs from the entry point through each decision to the goal. It includes the failure branches from the stage 1 failure list.
   - A task flow is one task's steps along one path.
   - Count the steps, and cut any step that people do not need.
4. **Navigation plan:**
   - The primary navigation holds the top tasks by how often they are used, and the rest moves to secondary navigation or the footer.
   - People can always see where they are, and the navigation sits in the same place on every page.
   - Choose the mobile pattern on purpose. An app's bottom bar holds 3–5 top-level destinations; more than that goes in a "More" tab or a menu.
5. **Low fidelity before high fidelity:**
   - Grey wireframes come first (stage 3).
   - Never polish a screen whose flow has not passed a walkthrough.
6. **The system:** grid, type scale, colour system, icons, then components with every state (stages 2 and 4).
7. **Mobile and desktop designed separately:** compose each width on purpose. Never ship one layout stretched or squeezed.
8. **Interactive prototype:**
   - For Standard and Full work, build the primary flow end to end with realistic fake data before building everything else.
   - In code, the prototype is the real build of that one flow.
9. **Design documentation as you go:** keep a `DESIGN.md` with:
   - The principles.
   - The tokens.
   - Each component's "when to use / when not to" and its states.
   - The motion tokens.
   - The decisions, with their reasons.

## Phase 3: Testing and refinement (stages 5 and 6, and after launch)

- **Usability walkthrough (always):**
  - Pick the top 3 tasks.
  - For each, start cold at the entry page as a first-time visitor, at 375 px and at 1440 px, and finish the task using only what is on screen.
  - Record whether it was completed, the steps taken against the flow's minimum, every hesitation (a label or next step that was not obvious) and every error.
  - Fix, then walk again.
  - This stands in for user testing; it does not replace it.
- **Testing with real people (Standard and Full, run through the user):**
  - Test 5 people per round, fix what they hit, then test again.
  - Five people find most of the common problems, roughly 85% of those that affect about 1 person in 3. Rarer problems need more people or more rounds.
  - Give tasks, not instructions: "find a gift under $50", not "click Shop".
  - Never help, and watch where people hesitate.
  - Offer the user a ready test script.
- **Prototype testing:** when a flow is new, test it before high fidelity, while changes are still cheap.
- **Task completion analysis:** measure the completion rate, time on task, errors per task, and steps taken against the minimum.
- **Satisfaction score:**
  - After a round, ask the 10-question System Usability Scale (SUS).
  - 68 is the average across hundreds of studies, so aim for 80 or more.
  - SUS is a score out of 100, not a percentage.
- **A/B testing:**
  - Only with enough traffic to reach the sample size, which is calculated before the test starts.
  - Change one thing per test, and name the metric in advance.
  - Never stop a test the moment it looks good.
  - A site with little traffic tests with people instead.
- **Interaction and navigation testing:**
  - Every control does what its label says.
  - The back button works.
  - Deep links land in the right place.
  - The navigation shows the current page.
  - Unknown URLs reach a useful 404 page.
- **Accessibility testing:**
  - An axe or Lighthouse scan.
  - The whole page with the keyboard only.
  - A screen-reader pass of the primary flow (VoiceOver or NVDA).
  - Reflow at 320 CSS px wide (the same as 400% zoom at 1280 px) with no sideways scroll.
  - Text spacing increased with nothing clipped.
- **Responsive, cross-device and browser testing:**
  - Widths 320, 375, 768, 1024, 1440 and 1920, plus a phone in landscape.
  - Chromium, Firefox and WebKit. Playwright drives all three.
  - Touch with no hover.
  - A real phone whenever one is available.
- **Feedback analysis:**
  - Group the feedback by theme and count it.
  - Rate each issue as a blocker, major, minor or cosmetic, then rank by severity times how often it happens.
  - Fix what blocks tasks first.
- **Refinement passes:** interface, layout, interactions, navigation, error states, empty states and visual consistency (`audit.md`). Every round of changes gets walked again.
- **Design system maintenance:**
  - A changed component is updated in its tokens, its docs and every place it is used.
  - Never leave a one-off fork.
  - Mark old versions as deprecated with a replacement, instead of keeping two that look alike.
- **Developer handoff:** even when you are also the developer, hand over:
  - The tokens file.
  - The component inventory with every state.
  - Spacing and motion specs (curves, durations).
  - Exported assets (SVG; AVIF or WebP at 1x and 2x).
  - The edge cases: long text, empty, error, loading.
  - Accessibility notes: focus order, labels, landmarks.
- **Post-launch evaluation:**
  - Before launch, write what success means, with one metric per goal: task success, adoption, engagement, retention or happiness. Conversion and support tickets count too.
  - Say how each one is measured. Analytics load only with consent (`ship-readiness.md`).
  - Set the review dates, for example 2 and 6 weeks after launch.
  - At each review, feed what you learn into the next iteration.

## What makes it loved, not only usable
- **Character comes from the research:**
  - The users' own words.
  - The moment they feel anxious.
  - The convention every competitor repeats.
  Give the product a point of view on one of these.
- **Put the authored moment at the journey's high point, or use it to rescue the worst low.** Delight anywhere else is decoration.
- **Test the delight too.** If it slows a frequent task, it fails the frequency gate in `motion.md`.
- **The details people notice are care for an edge case:**
  - An error that keeps what they typed.
  - An empty state that teaches.
  - A loading state the same shape as the content.
