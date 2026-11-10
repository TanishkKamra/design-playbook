# design-playbook

A Claude Code plugin that supervises design work. It takes an agent through six stages:
1. Brief
2. Direction
3. Structure
4. Build
5. Verify
6. Audit

Each stage ends in a gate that needs proof (contrast numbers, screenshots at 375 and 1440 px, a filled audit) before the agent moves on. It also carries the rules agents need to get a design right the first time: layout, spacing, type, colour and contrast, light and dark themes, components and UX copy, page and hero structures, motion numbers, polish, anti-slop tells and ship-readiness.

It works alongside other design skills. They can do the creative work; this one makes sure the result clears the bar.

## Install

In Claude Code:

```
/plugin marketplace add TanishkKamra/design-playbook
/plugin install design-playbook@design-playbook
```

The skill then loads itself for any design or UI task. You can also call it directly with `/design-playbook`.

## What's inside

```
skills/design-playbook/
  SKILL.md                 the supervisor: paths, modes, the six gated stages, the audit path
  references/
    foundations.md         layout, spacing, type, colour, contrast, light/dark, basics
    components.md          fields, buttons, errors, empty states, modal vs sheet, dashboards, charts, UX copy
    pages.md               homepage process, hero and section structures, interactions with a job, the award-level bar
    motion.md              frequency gate, UI curves and durations, springs, gestures, choreography, lag-free rules
    polish.md              what premium work adds, material backgrounds, polish checklist
    anti-slop.md           the tells that make a design read as AI-made
    ship-readiness.md      performance, fonts, privacy
    audit.md               the pre-ship audit with the proof each line needs
    examples.md            before/after snippets of the rules in code
    resources.md           where to find references, components, charts and tools
  assets/tokens.css        starter tokens (every colour pair passes WCAG AA)
  scripts/contrast.mjs     WCAG contrast checker (hex, rgb, oklch, alpha), exits 1 on failure
```

## Contrast checker

```
node skills/design-playbook/scripts/contrast.mjs [--min 4.5] <fg> <bg> [<fg> <bg> ...]
```

It prints the ratio and the pass/fail result for body text (4.5), large text and UI shapes (3), and AAA (7). It exits with code 1 if any pair falls below `--min`, so it can gate a build. It needs Node 18 or newer and has no dependencies.

## Test

```
node --test skills/design-playbook/scripts/contrast.test.mjs
```

## Contributing

Issues and pull requests are welcome. A good rule:
- is specific (a number, a test or a before/after);
- says when it applies;
- doesn't contradict a WCAG floor.

Where good sources disagree, add both views under "Both views" rather than picking one silently.

## Licence

MIT
