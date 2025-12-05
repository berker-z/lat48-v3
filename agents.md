# LAT48 // DESIGN DIRECTIVE

**STATUS:** ACTIVE
**VERSION:** 1.3
**TARGET:** BLOCKCHAIN ADVISORY FIRM

## 1. CORE AESTHETIC: TTY FUNCTIONALISM

The design language is "Documentation as Shrine". We are avoiding the "shadowy hacker larp" trope (e.g., green text on black, Matrix rain, unnecessary glitches). Instead, we aim for **High-End System Architecture**.

*   **Vibe:** Unemotional, precise, structural, authoritative.
*   **Metaphor:** Neofetch output met Swiss Modernism.
*   **Palette:** Nord Theme (Polar Night backgrounds, Snow Storm text, Frost accents).

## 2. TYPOGRAPHY & LAYOUT (CENTRALIZED SCHEMA)

We utilize a centralized typography schema defined in `index.html`. Do not use raw Tailwind text utilities (e.g., `text-xl`) in components.

*   **Source of Truth:**
    *   `.type-display`: Massive hero text.
    *   `.type-h1`: Section headers.
    *   `.type-h2`: Card/Item titles.
    *   `.type-h3`: Brand/Sub-titles.
    *   `.type-body`: Standard readable text.
    *   `.type-nav`: Navigation links.
    *   `.type-label`: Small headers/labels.
    *   `.type-meta`: Copyright/Footer metadata.

*   **Alignment:** Rigid grid. Use solid border lines to define space and enforce structure. **Symmetry is paramount.** Elements must align perfectly with their container edges.

## 3. COMPONENT LAYERING & Z-INDEX

When layering elements (e.g., images with borders):
*   **Bottom (z-0):** Decorative offsets (e.g., Gray/Nord-3 Borders).
*   **Middle (z-10):** Main Content (Image/Text).
*   **Top (z-20):** Active/Highlight Overlays (e.g., Cyan/Nord-8 Borders).

## 4. MOBILE RESPONSIVENESS STRATEGY

We do not just shrink elements; we reorder the flow of information for immediate context.

*   **Lateral Grids:** On Desktop, we use side-by-side layouts (Text Left / Image Right).
*   **Vertical Stacks:** On Mobile, we stack elements vertically.
*   **Order Rule:** Visual context first. For the Hero section, the **Image** must appear *before* the **Title** on mobile screens (`order-first` on mobile, `order-none` on desktop).

## 5. UI ELEMENTS

*   **Separators:** All separation is handled via **Solid Lines** (`border-solid`). No dashed or dotted lines. We prioritize rigid, unbroken borders to separate logic blocks.
*   **Images:** High contrast, grayscale, often chemically treated (mix-blend-multiply).
*   **Motion:** Zero gratuitous motion. Hover states are acceptable for interactivity feedback (color shifts, subtle border changes), but nothing should fly in or bounce.