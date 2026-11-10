---
name: Yash Portfolio Design System
description: Premium dark editorial identity for an AI/ML engineering portfolio.
---

# Design direction

## Identity

Present a thoughtful AI/ML engineer who builds useful, production-minded applications with generative AI, LLMs, retrieval augmented generation, and applied machine learning. The visual character is precise, calm, and technically credible. Editorial typography and open space lead; blue and violet signal interaction and selected emphasis.

## Visual system

- Canvas: deep charcoal `#090B12`; raised surfaces use `#10131C` and `#171B27`.
- Primary action and key emphasis: electric blue `#6EA4FF`.
- Secondary emphasis: violet `#A58AFF`; use sparingly for diagrams and supporting accents.
- Foreground: near-white `#F4F6FB`, with slate secondary text.
- Borders are low contrast and thin. Use one elevation treatment per surface; avoid nested panels.
- Use Space Grotesk for display and body copy, IBM Plex Mono for code, metadata, and small labels. Keep mono out of long-form prose.
- Editorial pages use a centered 72.5rem maximum container, generous section spacing, and asymmetric columns where content supports them.
- Prefer project rows and image-led case study compositions to repetitive icon cards.

## Tokens and implementation

The source of truth is `assets/css/tokens.css`. It defines primitive, semantic, and component tokens plus temporary aliases used by the existing site. `assets/css/components.css` defines shared interaction and card rules. `assets/css/site.css` imports both and owns portfolio-specific composition. The site remains static HTML/CSS/vanilla JS and needs no build step.

## Typography

| Role | Size | Use |
| --- | --- | --- |
| Display | `clamp(3.25rem, 8.4vw, 6rem)` | Home hero heading |
| Heading 2 | `clamp(2.5rem, 6.7vw, 5.125rem)` | Page and section headings |
| Heading 3 | `clamp(1.25rem, 2.4vw, 1.8125rem)` | Project titles |
| Lead | `clamp(1.0625rem, 1.7vw, 1.2rem)` | Introductory copy |
| Body | `1rem / 1.65` | Main reading text |
| Small | `0.875rem` | Supporting information |
| Micro | `0.75rem` | Metadata and control labels |

Headings use tight leading and modest negative tracking. Body copy stays comfortably readable, with a preferred measure of 65–75 characters.

## Layout and spacing

Use the 4px-based spacing rhythm in `tokens.css` (`--space-1` through `--space-24`). Page content is capped at 72.5rem, with fluid side gutters. Major sections use `clamp(4.75rem, 10vw, 8.5rem)` vertical padding. Align content to a consistent outer edge; use a 12-column mental grid with 24–32px desktop gutters and collapse to one column on narrow screens.

## Components

- Primary button: blue fill, dark foreground, 48px minimum height, 5px radius. Secondary button: transparent surface, quiet border, light text.
- Navigation: sticky charcoal bar, subtle bottom rule, clear current-page marker. Collapse to a full-width vertical menu at 760px.
- Cards: 14px radius, one subtle border and soft offset shadow, 20–32px padding. Apply interactive lift only when the card itself is interactive.
- Project lists: editorial rows with title, category, compact stack tags, and a clear destination affordance.
- Focus: 2px electric-blue outline with 4px offset. Hover and focus retain readable text and visible boundaries.
- Disabled controls: reduced opacity and disabled cursor; do not rely on color alone.

## Responsive behavior

Reference breakpoints: 30rem (480px), 47.5rem (760px), 64rem (1024px), and 80rem (1280px). The existing navigation and page composition currently use 760px and 420px cutovers; retain those where they avoid regressions and migrate toward the reference values as layouts are revised. Content should remain single-column on mobile, with 44px minimum navigation targets and no horizontal overflow.

## Motion and accessibility

Use 160ms for small affordance changes and about 220ms for component transitions. Reserve the longer entrance animation for the hero; avoid animating every section. Prefer subtle color, border, and 2px lift transitions. Honor `prefers-reduced-motion`. Preserve keyboard access, semantic controls, visible focus, readable contrast, and non-color state cues.

## Content and imagery

Lead with the engineering outcome and the candidate’s role. Explain architecture and tradeoffs in case studies. Use real project screenshots or supplied photography; avoid decorative pseudo-technical gradients, fake metrics, and generic AI imagery.
