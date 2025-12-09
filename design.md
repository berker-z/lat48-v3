# LAT48 Design System

A terse, documented reference for all design tokens and utilities.
Source of truth: `styles.css` (Tailwind v4 with `@theme` tokens).

---

## Colors — Nord Palette

```
┌─────────────────────────────────────────────────────────────────┐
│  POLAR NIGHT (Backgrounds)                                      │
├─────────────────────────────────────────────────────────────────┤
│  nord-0   #2E3440   Base background, body                       │
│  nord-1   #3B4252   Elevated surfaces, hover states             │
│  nord-2   #434C5E   Secondary surfaces                          │
│  nord-3   #4C566A   Borders (subtle), comments, grid lines      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  SNOW STORM (Text)                                              │
├─────────────────────────────────────────────────────────────────┤
│  nord-4   #D8DEE9   Primary body text                           │
│  nord-5   #E5E9F0   Emphasized text                             │
│  nord-6   #ECEFF4   Headings, high contrast text                │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  FROST (Accents)                                                │
├─────────────────────────────────────────────────────────────────┤
│  nord-7   #8FBCBB   Accent alternate                            │
│  nord-8   #88C0D0   Primary accent, links, hover highlights     │
│  nord-9   #81A1C1   Selection backgrounds                       │
│  nord-10  #5E81AC   Tertiary accent                             │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  AURORA (Status)                                                │
├─────────────────────────────────────────────────────────────────┤
│  nord-11  #BF616A   Error, destructive actions                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Typography

All type styles live in `styles.css` (Tailwind utilities).
**Font:** JetBrains Mono (monospace)

| Utility         | Size (mobile → desktop)   | Weight | Case  | Tracking   | Leading | Use Case              |
|-----------------|---------------------------|--------|-------|------------|---------|-----------------------|
| `.type-display` | 8xl → 9xl → 10rem → 13rem | bold   | —     | tighter    | 1.06    | Hero headlines        |
| `.type-h1`      | 5xl → 7xl                 | bold   | UPPER | tighter    | default | Section headers       |
| `.type-h2`      | 2xl → 4xl                 | bold   | UPPER | tight      | default | Card/item titles      |
| `.type-h3`      | 2xl → 3xl                 | bold   | UPPER | tight      | default | Brand/subtitles       |
| `.type-body`    | lg → xl                   | normal | —     | —          | 1.2     | Readable paragraphs   |
| `.type-nav`     | lg → xl                   | normal | UPPER | widest     | default | Navigation links      |
| `.type-label`   | lg → xl                   | bold   | UPPER | wider      | default | Labels, small headers |
| `.type-meta`    | sm                        | normal | UPPER | widest     | default | Copyright, metadata   |

**Leading:** `.type-display` uses a responsive 1.06 line-height; `.type-body` uses 1.2; the rest use the Tailwind defaults for their sizes.  
**Breakpoints:** Mobile-first. Sizes scale up at `md:` (768px) and beyond.

---

## Spacing

Standard Tailwind 4px base scale. Common patterns:

| Token     | Value   | Use Case                              |
|-----------|---------|---------------------------------------|
| `py-24`   | 6rem    | Hero section vertical padding         |
| `py-12`   | 3rem    | Standard section padding              |
| `px-4`    | 1rem    | Container horizontal padding (mobile) |
| `gap-3`   | 0.75rem | Icon + text pairing                   |
| `gap-6`   | 1.5rem  | Content blocks, form elements         |
| `gap-12`  | 3rem    | Major content sections                |
| `gap-24`  | 6rem    | Large desktop gaps (lg:)              |
| `p-6`     | 1.5rem  | Card internal padding                 |
| `p-8`     | 2rem    | Card internal padding (roomy)         |
| `mb-4`    | 1rem    | Inline element spacing                |
| `mb-8`    | 2rem    | Block element spacing                 |
| `spacing-128` | 32rem  | Extra-large offsets / hero vertical space |

Custom token: `--spacing-128` is available via Tailwind's spacing scale.

---

## Base Styles

- `html`: `scroll-padding-top: 4rem` to offset the sticky nav.
- `body`: `bg-nord-0`, `text-nord-4`, `font-mono`.
- `::selection`: Nord-3 background with Nord-6 text.

---

## Borders

| Pattern                         | Use Case                        |
|---------------------------------|---------------------------------|
| `border-nord-4`                 | Primary visible borders         |
| `border-nord-3`                 | Subtle dividers, grid lines     |
| `border border-nord-3`          | Card outline (1px)              |
| `border-2 border-nord-3`        | Decorative offset (hero image)  |
| `border-2 border-nord-8`        | Accent highlight offset         |
| `border-l-[6px] border-nord-8`  | Hero title accent bar           |
| `border-b border-nord-4`        | Section separator               |
| `border-t-2 border-nord-4`      | Footer top edge                 |

**Rule:** Solid lines only. No dashed/dotted.

---

## Utilities / Components

- `.card`: `border border-nord-3 bg-nord-0/80 backdrop-blur-sm`
- `.card-hover`: `hover:bg-nord-1 transition-colors duration-200`
- `.section`: `px-4 pb-12`
- `.container-main`: `container mx-auto px-4 max-w-screen-2xl`
- `.social-link`: `text-nord-4 hover:text-nord-8 transition-colors`
- `.grid-bg`: Fixed 40px Nord-3 grid overlay (`opacity-20`, `z-0`)

---

## Transitions

| Pattern                      | Use Case                    |
|------------------------------|-----------------------------|
| `transition-colors`          | Color changes only          |
| `transition-all`             | Multi-property animations   |
| `transition-transform`       | Position/scale animations   |
| `transition-opacity`         | Fade effects                |
| `duration-200`               | Fast interactions           |
| `duration-300`               | Standard interactions       |
| `duration-500`               | Decorative animations       |

---

## Z-Index Layers

```
z-0    Decorative offsets (gray borders)
z-10   Main content (images, text)
z-20   Active overlays (cyan borders)
z-50   Navigation, floating elements
```

---

## Component Patterns

### Card
```html
<div class="border border-nord-3 p-6 bg-nord-0/80 backdrop-blur-sm 
            hover:bg-nord-1 transition-colors duration-200">
```

### Image with Layered Borders
See Hero.tsx for full pattern (gray offset → image → cyan offset)

### Hover States
- Background: `hover:bg-nord-1` (surface) or `hover:bg-nord-6` (inverse)
- Text: `hover:text-nord-8` (accent)
- Border: `hover:border-nord-6` (inverse)

---

## Files

| File          | Contains                                |
|---------------|-----------------------------------------|
| `styles.css`  | Tailwind v4 `@theme` tokens + utilities |
| `agents.md`   | Design philosophy, component guidance   |
| `design.md`   | This file (token reference)             |
