# Handoff: Disney After 60 — Marketing Homepage

## Overview

A long-scroll marketing homepage for **Disney After 60**, a concierge travel agency
that plans bespoke Walt Disney World and Disney Cruise vacations for travelers 60
and beyond. The page is single-page, marketing-focused, and ends in a strong
"request an itinerary" CTA. Visual direction is **luxury hospitality** —
think Aman Resorts or Cereal magazine: midnight + gold palette, wide editorial
serif headlines, generous whitespace, large photography in framed plates.

---

## About the Design Files

The HTML/JSX files in this bundle are **design references**, not production code
to copy verbatim. They were prototyped in plain React + inline `style` objects so
the visual intent is unambiguous.

Your job is to **recreate this design in the target codebase** using its
established framework, design tokens, component library, and routing. If no
codebase exists yet, **Next.js (App Router) + Tailwind CSS** is the recommended
starting point — it maps cleanly to the long-scroll, image-heavy nature of the
page and supports the typography stack out of the box.

Treat the inline styles as **specs**, not implementation. Lift the values into
proper tokens / CSS variables / Tailwind config as appropriate for the target
codebase.

---

## Fidelity

**High-fidelity.** Final colors, typography, spacing, copy, and imagery are
locked. Recreate pixel-perfectly at the design width (1440px) and then build
the responsive breakpoints described in the *Responsive Behavior* section.

---

## Design Tokens

### Colors

| Token            | Hex                          | Usage                                           |
|------------------|------------------------------|-------------------------------------------------|
| `--bg`           | `#0e1220`                    | Page background (midnight blue)                 |
| `--surface`      | `#171b2c`                    | Card / section surface                          |
| `--surface-deep` | `#080b16`                    | Footer background                               |
| `--ink`          | `#f4ede0`                    | Primary text (warm cream)                       |
| `--muted`        | `rgba(244,237,224,0.65)`     | Secondary text                                  |
| `--faint`        | `rgba(244,237,224,0.18)`     | Hairline borders, dividers                      |
| `--gold`         | `#d4a64a`                    | Brand accent — italic words, rules, CTA         |
| `--rose`         | `#e8a4a4`                    | Reserved tertiary accent (unused on this page)  |

### Typography

Two families, loaded via Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

| Token       | Stack                                                                           | Usage                              |
|-------------|---------------------------------------------------------------------------------|------------------------------------|
| `--display` | `"Cormorant Garamond", "Playfair Display", Georgia, serif`                      | Headlines, eyebrows, prices        |
| `--body`    | `"Inter", "Helvetica Neue", system-ui, sans-serif`                              | Body, nav, buttons, micro-labels   |

**Type scale (px / line-height / weight / letter-spacing):**

| Role             | Size   | LH    | Weight | Tracking   | Family   |
|------------------|--------|-------|--------|------------|----------|
| Hero H1          | 108    | 0.95  | 300    | -0.02em    | display  |
| Section H2 large | 64     | 1.05  | 300    | -0.01em    | display  |
| Section H2       | 56     | 1     | 300    | -0.01em    | display  |
| Sub-headline     | 44     | 1.25  | 300    | -0.01em    | display  |
| Card title       | 32     | 1     | 400    | -0.01em    | display  |
| Process H3       | 28     | 1     | 400    | -0.01em    | display  |
| Stat number      | 36     | 1     | 400    | normal     | display  |
| Lede / intro     | 17     | 1.55  | 400    | normal     | body     |
| Body             | 16     | 1.7   | 400    | normal     | body     |
| Card body        | 14     | 1.55  | 400    | normal     | body     |
| Eyebrow          | 11     | 1     | 500    | 0.36em UC  | body     |
| Micro-label      | 10–12  | 1     | 500    | 0.18em UC  | body     |
| Disclaimer       | 10.5   | 1.6   | 400    | normal     | body     |

`UC` = uppercase. *Italic* style is used heavily on the display face for the
key word in every headline (e.g. "*at your pace.*", "*Itineraries*", "*2008.*").
Italic words almost always pick up `--gold`.

### Spacing

Section padding uses an 8-px base. Common values:

- Page horizontal padding: **64px**
- Vertical section padding: **120px** (compact: **100px**, large: **140px**)
- Grid gaps: **32px** (cards), **80px** (split layouts), **56px** (footer)
- Card inner padding: **32px 28px 36px**
- Button padding: **16px 28px** (primary), **18px 32px** (CTA), **12px 22px** (nav)

### Border Radius

**0px globally.** This design is intentionally hard-edged — no rounded corners
anywhere except for circles (footer social pips). Resist Tailwind defaults.

### Borders & Rules

All hairlines: `1px solid var(--faint)` except gold accent rules at
`1px solid var(--gold)`. Caption plates use a `2px` left-border in gold.

### Shadows

One shadow exists in the design, on the hero's framed image:

```css
box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
```

Otherwise, no shadows. Depth comes from color and framing, not elevation.

---

## Page Structure (top to bottom)

1. **Nav** (overlays hero)
2. **Hero** — split layout: copy left, framed photo right
3. **Intro statement** — centered "Our Promise" block
4. **Signature Itineraries** — three large cards
5. **About / Why us** — split layout with founder portrait + stats
6. **Process** — four-column "How it works" row
7. **CTA** — full-bleed image with overlay copy
8. **Footer** — five-column links + newsletter + legal

---

## Sections

### 1. Nav

- Position: `absolute; top: 0; left: 0; right: 0; z-index: 5;` overlaying the hero.
- Height: ~94px. Padding `32px 64px`.
- Three columns: **logo (left)**, **nav links (center)**, **CTA button (right)**.
- Background: transparent (relies on hero's dark imagery for contrast).

**Logo lockup (left):**
- 42×42px gold-stroked circle with concentric inner ring at 30px diameter and an
  italic "**60**" centered, in display face, gold. (Replace with the real
  Disney After 60 mark when supplied.)
- 14px gap to the wordmark.
- Wordmark: "Disney" in display 22 / regular, *"After 60"* italic gold.
- Underneath: micro-label "**CONCIERGE TRAVEL · EST. 2008**", 9px, tracking 0.34em.

**Center nav:** ITINERARIES · RESORTS · DINING · CONCIERGE — 13px Inter,
uppercase, tracking 0.08em, gap 40px.

**Right CTA:** "BEGIN PLANNING" — transparent bg, 1px gold border, 12px text,
tracking 0.14em, padding 12px 22px.

### 2. Hero — "Split"

Two-column grid `1fr 1fr`, height **820px**, background `--bg`.

**Left column** — solid midnight panel.
- Padding `180px 64px 80px 80px`. Vertically centered content.
- Eyebrow (gold, 11px, 0.36em UC): "✦  Bespoke Disney travel"
- H1, two lines:
  - "The magic," (regular)
  - "*at your pace.*" (italic, gold)
  - 108 / 0.95 / -0.02em / display 300.
- Lede (17px, --muted, max-width 460): "Concierge planning for travelers 60 and beyond. Curated itineraries. Comfortable resorts. Tables you'll want to linger at."
- Two buttons, gap 16, margin-top 44:
  - **Primary**: gold bg, midnight text, no border, "BEGIN A CONSULTATION".
  - **Secondary**: transparent, 1px faint border, ink text, "VIEW ITINERARIES".
- **Bottom-anchored credit row** (absolute, bottom 60, left 80): 32×1px gold rule + "1,400+ TRIPS PLANNED SINCE 2008" — 11px UC tracking 0.18em, color --muted.

**Right column** — framed photograph.
- Padding `120px 80px 60px 0` (the **120px top** is what clears the nav button — do not reduce).
- The image fills the inner box. `object-fit: cover`. `filter: brightness(0.92) saturate(0.9)`.
- A 1px gold border floats inset 18px from the image edge as a frame (`position: absolute; inset: 18px; border: 1px solid var(--gold); pointer-events: none`).
- **Caption plate** (absolute, bottom 36 left 36): rgba(14,18,32,0.85) bg, 2px gold left border, padding 14px 20px:
  - "*Plate Nº 01*" — display italic, 18px.
  - "CINDERELLA CASTLE · MAGIC KINGDOM" — 11px UC, tracking 0.18em, --muted.

> **Photo:** Disney's Cinderella Castle (Magic Kingdom). Use a licensed editorial
> photograph at minimum 1800px wide. The reference uses
> `https://images.unsplash.com/photo-1597466599360-3b9775841aec` — replace with a
> properly-licensed asset before launch.

### 3. Intro Statement

- Padding `140px 64px 100px`, max-width 1000, centered.
- Eyebrow gold: "OUR PROMISE".
- Body in display 44 / 1.25 / 300:
  > "Twenty years of planning Disney trips for grandparents, retirees, and golden-anniversary couples has taught us one thing — *doing less is doing it right.*"
- Closing italic phrase is gold.

### 4. Signature Itineraries

- Padding `40px 64px 100px`.
- Header row: H2 "Signature *Itineraries*" (56/300, italic gold on second word) + right-side "VIEW ALL 14 →" micro-label. Bottom-rule: 1px faint with 24px padding-bottom + 48px margin-bottom.
- Three-column grid, gap 32.

**Card** (3 instances):
- Background `--surface`. Square corners.
- **Image area**: 380px tall, full-width, `object-fit: cover`.
  - Tag pill (absolute, top 20 left 20): rgba(14,18,32,0.7) bg, 1px gold border, gold text 10px UC tracking 0.18em, padding 6px 12px.
- **Content area** (padding 32 28 36):
  - H3 (display 32 / 400 / -0.01em).
  - Body (14 / 1.55 / --muted), margin 12 0 24.
  - Footer row (paddingTop 18, 1px faint top border): price (12px gold, tracking 0.06em) on left, "EXPLORE →" (12px UC, tracking 0.18em, --ink) on right.

**Card content (exact):**

| # | Tag       | Title          | Body                                                                       | Price                  | Image (placeholder)                                |
|---|-----------|----------------|----------------------------------------------------------------------------|------------------------|----------------------------------------------------|
| 1 | 7 NIGHTS  | Monorail Loop  | Three deluxe resorts, no buses, every park within nine minutes.            | from $4,820 / couple   | photo-1597466765990-64ad1c35dafc (fireworks)       |
| 2 | 5 NIGHTS  | Epcot in Bloom | Flower & Garden festival, World Showcase, evening fireworks cruise.        | from $3,640 / couple   | photo-1594909122845-11baa439b7bf                   |
| 3 | 10 NIGHTS | Disney by Sea  | Three nights at Grand Floridian, then a Caribbean Disney Cruise.           | from $7,200 / couple   | photo-1610641818989-c2051b5e2cfd                   |

### 5. About / Why us

- Padding `120px 64px`, background `--surface`.
- Two-column grid `1fr 1.3fr`, gap 80, vertically centered.

**Left column** — founder portrait.
- 600px tall image, full width of column, `object-fit: cover`.
- Caption plate (absolute, bottom 24, left+right 24): rgba(14,18,32,0.85), 2px gold left border, padding 20 24.
  - "*Carol & James Whitaker*" — display italic 18.
  - "FOUNDERS · EARMARKED DIAMOND PLANNERS" — 11px UC, 0.18em, --muted.

**Right column** — copy + stats.
- Eyebrow gold "ABOUT".
- H2 (display 64 / 1.05 / 300): "We've been planning Disney for grandparents since *2008.*" (italic year in gold).
- Lede (16 / 1.7 / --muted, marginTop 28): "We know which resort buses run on time. Which restaurants have the quietest corner. Which rides are gentle, which are not, and which are worth the extra wait. We do this so you arrive without a checklist — only a plan that fits how you travel now."
- **Stats grid** (3 cols, gap 32, marginTop 56). Each cell: 1px faint top border + 16px paddingTop, then:
  - Value (display 36, gold)
  - Label (12px UC, 0.06em, --muted, marginTop 4)

| Value  | Label                       |
|--------|-----------------------------|
| 18 yr  | Authorized Disney Planner   |
| 1,400+ | Trips planned               |
| $0     | Our planning fee            |

### 6. Process — "From hello to Magic Kingdom"

- Padding `120px 64px`.
- Centered header (marginBottom 72): eyebrow "HOW IT WORKS" + H2 "From hello to *Magic Kingdom*" (56/300, italic gold).
- Four-column grid (no gap). Each step is `padding: 8px 28px`. The 2nd, 3rd, and 4th columns get `border-left: 1px solid var(--faint)`; the 4th also gets `border-right`.

| #  | Title         | Body                                                              |
|----|---------------|-------------------------------------------------------------------|
| 01 | Conversation  | A 30-minute call. We learn what magic looks like for you.         |
| 02 | Curated Plan  | A draft itinerary in 48 hours — resort, dining, days at the parks.|
| 03 | We Refine     | Adjust until it feels right. We handle every booking.             |
| 04 | You Travel    | Daily concierge by text. We are one call away, every day.         |

Each step: number (display 14, gold, tracking 0.18em UC), title (display 28 / 400, margin 14 0 12), body (14 / 1.6 / --muted).

### 7. CTA

- 540px tall, position relative, overflow hidden.
- Full-bleed image (`photo-1610641818989-c2051b5e2cfd`).
- Gradient overlay: `linear-gradient(90deg, rgba(14,18,32,0.92), rgba(14,18,32,0.55))`.
- Content (absolute inset 0, padding 0 64, max-width 720, vertically centered):
  - H2: "Let us draft your *perfect week.*" (64 / 1.05 / 300, italic gold).
  - Body (16 / 1.6 / --muted, marginTop 20): "Tell us a little about your trip. We'll send a complete itinerary within 48 hours. No fees, no obligation, no pressure."
  - Two buttons (gap 16, marginTop 36):
    - Primary: gold bg / midnight text, padding 18 32, "REQUEST ITINERARY".
    - Secondary: transparent / 1px faint border, "SCHEDULE A CALL".

### 8. Footer

- Padding `90px 64px 32px`, background `#080b16`, border-top 1px faint.

**Top row** — five-column grid `1.4fr 1fr 1fr 1fr 1fr`, gap 56, paddingBottom 64, border-bottom 1px faint.

- **Brand column**: wordmark (display 28), descriptor paragraph (14 / 1.65 / --muted, max-width 320), then 4 social pips (36×36 circles, 1px faint border, two-letter labels: IG / FB / YT / PT).
- **Plan**: Itineraries · Resorts · Disney Cruise · Adventures by Disney · Universal add-ons
- **Concierge**: Dining reservations · Lightning Lane · DAS guidance · ECV & mobility · Accessible transport
- **Resources**: Field guide · Crowd calendar · Park comparison · First-timer FAQs · The journal
- **Company**: About Carol & James · Reviews · Press · Contact · Schedule a call

Each link column: header is gold 11px UC tracking 0.24em, marginBottom 22. Items are 14px ink at 0.85 opacity, gap 14, column flex.

**Newsletter row** — `padding: 40px 0`, two columns `1fr 1fr`, gap 64, border-bottom 1px faint.

- Left: heading "The Quiet List *— our monthly letter.*" (26/300, italic gold) + small descriptor.
- Right: email input + "SUBSCRIBE →" inline button. The whole thing sits on a 1px gold bottom border, no other styling — feels like a stationery underline.

**Legal row** — paddingTop 32, 11px UC tracking 0.1em --muted, three groups:

- "© 2026 Disney After Sixty · An independent travel agency"
- Privacy · Terms · Accessibility · Sitemap
- Right-aligned gold: "◆ Earmarked Diamond · Authorized Disney Vacation Planner"

**Disclaimer** — paddingTop 28, 10.5px / 1.6 / `rgba(244,237,224,0.4)`, max-width 1100:
> "Disney After Sixty is an independent travel agency and is not affiliated with, owned by, or in any way associated with The Walt Disney Company. As to Disney artwork, logos and properties: ©Disney. Ships of Disney Cruise Line registered in The Bahamas."

---

## Interactions & Behavior

The reference is static. Implement the following live behaviors:

### Nav
- **Scroll state**: when the user has scrolled > 60px, fade in a `rgba(14,18,32,0.92)` background under the nav with a `backdrop-filter: blur(12px)` and a 1px faint bottom border. Transition 200ms ease.
- All five nav items (logo + 4 links) anchor-jump to corresponding sections; smooth-scroll with `scroll-behavior: smooth`.
- "BEGIN PLANNING" opens a contact modal (or routes to `/plan`).

### Hover states (apply consistently)
- Buttons (primary gold): on hover, brighten 8% and shift a 1px gold rule to outline beneath; cursor pointer.
- Buttons (secondary): on hover, the faint border becomes gold; text stays ink. 200ms transition.
- Cards: on hover, the card image scales 1.04 over 600ms ease-out; the "EXPLORE →" arrow translates 6px right over 200ms.
- Footer links: on hover, color shifts from `--ink @ 0.85` to `--gold`.

### Forms
- Newsletter input: validate with HTML5 `type="email" required`. On submit, replace input with "Welcome to The Quiet List." in display italic gold.

### Animations on scroll (optional but recommended)
- Each section fades up 24px / opacity 0→1 over 700ms when entering viewport (use IntersectionObserver, threshold 0.15). Stagger child cards by 80ms.

### Loading
- Hero image: blur-up placeholder via Next.js `<Image placeholder="blur">` or a 24px-wide LQIP. Avoid a hard pop.

---

## Responsive Behavior

The design is locked at 1440. Breakpoints:

- **≥1280px**: as designed.
- **1024–1279**: page padding shrinks to 48px; hero H1 shrinks to 88; section H2s to 48; itinerary grid stays 3 columns.
- **768–1023**: hero collapses to a single column with the framed image stacked **above** the copy at 520px tall; itinerary grid becomes 2 columns; About split stacks (image on top); Process becomes a 2×2 grid.
- **<768**: page padding 24px; hero H1 60 / 1; both hero buttons full-width stacked; itinerary cards stack 1-up; About stacks; Process stacks 1-up with separators on top borders only; Footer columns collapse: brand on top, then 2 columns of links, then newsletter full-width, then legal stacked.

Maintain typography scale ratios (don't drop the display face — it carries the brand). Always preserve the gold italic accent on the keyword in every headline.

---

## State Management

This is a marketing page; minimal state needed:

- `navScrolled: boolean` — derived from `window.scrollY > 60`.
- `mobileNavOpen: boolean` — for the <768 hamburger menu.
- `newsletterStatus: 'idle' | 'submitting' | 'success' | 'error'`.

Itinerary card data should be a typed array (consider a CMS-backed model later):

```ts
type Itinerary = {
  slug: string;
  nights: number;
  title: string;
  blurb: string;
  priceFrom: number;          // store as cents internally
  heroImage: { src: string; alt: string; blurDataURL?: string };
};
```

---

## Assets

All photography in the reference is **placeholder** from Unsplash, used only for
visual fidelity. **Do not ship Unsplash URLs.** Replace with licensed
editorial photography before launch:

- Hero: Cinderella Castle, Magic Kingdom — golden-hour or blue-hour exterior.
- Itinerary 1: Monorail / castle fireworks composite or Polynesian beachfront.
- Itinerary 2: Epcot — Spaceship Earth at dusk or World Showcase pavilion.
- Itinerary 3: Disney Cruise Line ship — exterior or pool deck at sea.
- Founder portrait: Carol & James Whitaker headshot or working at a planning desk.
- CTA: same Disney Cruise photo as itinerary 3, full-bleed.

The temporary logo mark (gold circle + italic "60") is a placeholder until the
real Disney After 60 brand mark is supplied. Drop the SVG into the nav (`Nav`
component, `Logo` slot) and remove the placeholder.

---

## Files

| Path                                    | What it is                                                     |
|-----------------------------------------|----------------------------------------------------------------|
| `Homepage Concepts.html`                | Entry HTML — loads React, Babel, fonts, then mounts the page.  |
| `variants/v2-cinematic.jsx`             | The full page component — nav, intro, cards, about, process, CTA, footer. |
| `variants/v2-hero-variants.jsx`         | Hero treatments. **Use only `HeroSplit` (Variant B).** A and C are deprecated and present for reference. |
| `design-canvas.jsx`                     | Pan/zoom canvas wrapper used to present the design — not part of the production page. |

Open `Homepage Concepts.html` in a browser to view the design as it was approved.

---

## Implementation Notes for Claude Code

1. Start fresh with **Next.js 14+ App Router** unless directed otherwise. Tailwind CSS for styling, with the tokens above mapped into `tailwind.config.ts` under `theme.extend.colors`, `fontFamily`, and `letterSpacing`.
2. Build as one route (`app/page.tsx`) with each section as its own component (`components/site/Nav.tsx`, `Hero.tsx`, `Promise.tsx`, `Itineraries.tsx`, `About.tsx`, `Process.tsx`, `CTA.tsx`, `Footer.tsx`).
3. Use `next/font/google` for Cormorant Garamond + Inter (no external `<link>`).
4. Use `next/image` everywhere with `priority` on the hero image only.
5. Don't introduce border radius. Don't introduce gradients beyond the two specified. Don't introduce shadows beyond the one specified.
6. The italic-gold-accent-on-headlines pattern is the brand's load-bearing visual move. Apply it consistently.
7. Confirm with the design owner before adding any sections, copy, icons, or imagery beyond what is documented here.
