# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for Disney After 60 — a niche travel offering from Diane Mack of Travel Creations By Di, focused on Disney vacations curated for travelers 60+. Sister site to travelcreationsbydi.com. Hosted on GitHub Pages, will serve at `https://disneyafter60.com` once DNS is pointed (CNAME file already in repo root).

## Tech Stack

- Pure HTML + CSS, no build tools, no JavaScript frameworks
- Single shared `styles.css` linked from all pages
- Google Fonts (TBD until brand kit lands — currently scaffolded with Playfair Display + Montserrat as placeholders matching the TCBD brand family)
- Forms submit via [FormSubmit.co](https://formsubmit.co) to `diane@travelcreationsbydi.com` (same as TCBD)
- Mobile hamburger menu uses CSS-only checkbox hack (no JS)
- Fathom analytics — site code TBD when account/property is added

## Git Workflow

Committing directly to `main` is fine for this repo (pre-launch, fast iteration). GitHub Pages rebuilds in ~30s after push.

## Quality Gates — EVERY Push (Non-Negotiable)

Before pushing any HTML/CSS changes, ALWAYS verify:

1. **SEO meta tags** on every page touched: `<title>`, `<meta name="description">`, `<meta property="og:title">`, `og:description`, `og:image`, `og:url`, `og:type`, `<meta name="twitter:card">`, `<link rel="canonical">`. Match content changes to meta updates.
2. **sitemap.xml** — update when pages are added/removed/renamed. File lives at repo root.
3. **JSON-LD structured data** — refresh on content changes that affect schema (TravelAgency, Service, FAQPage, BlogPosting).
4. **Canonical URLs** — present on every page, pointing to the production https://disneyafter60.com/<path> form.
5. **Heading hierarchy** — h1 → h2 → h3 with no skipped levels.
6. **Semantic HTML** — `<main>`, `<nav>`, `<footer>`, descriptive `alt` text on images, descriptive link text.
7. **Mobile responsive** — grids must stack cleanly, no horizontal scroll, touch targets adequate. Avoid inline grid styles. Test at 1024px (tablet) and 768px (phone) breakpoints.
8. **`llms.txt`** — sync when services, offerings, or featured content change.
9. **Hidden pages** — pages we don't want public yet need `<meta name="robots" content="noindex,nofollow">` and exclusion from sitemap.xml AND no internal links from visible pages.
10. **Accessibility** — site audience is 60+; minimum 16px body text (we use 18px default), high contrast, large touch targets, generous line-height. Don't downsize beyond these.

## Audience Notes

This site targets travelers age 60 and up. Design and copy decisions should reflect that:

- **Type**: 18px minimum body, 22px+ where comfortable. Generous line-height (1.7).
- **Color contrast**: WCAG AA minimum, AAA where possible. No light gray on white.
- **Touch targets**: 48x48px minimum. Buttons feel substantial.
- **Copy**: Direct, warm, never patronizing. Don't say "seniors." Say "travelers 60 and up" or "the after-60 set."
- **Imagery**: Real photos of mature travelers enjoying Disney experiences, not stock-photo clichés.
- **Pacing**: Less is more. Long landing pages with scroll are fine; dense text walls are not.

## Architecture

- **Shared nav/footer**: Every page duplicates the same `<nav>` and `<footer>` markup. When updating nav links or footer, update all HTML files.
- **Page hero**: Inner pages use `.page-hero` class.
- **Active nav**: Add `.active` class to the current page's nav link.
- **styles.css organization**: CSS variables in `:root` (brand colors, type scale, spacing), then base elements, then components, then pages, then responsive overrides at the bottom in tiered media query blocks: `@media (max-width: 1024px)` for tablet+nav, `@media (max-width: 768px)` for phone, `@media (max-width: 480px)` for small phones.
- **Content placeholders**: Pages contain `[BRIEF]` markers where copy is awaiting Diane/Jamie input. Search the repo for `[BRIEF]` to find what's pending.

## Brand Tokens (placeholder — finalize when style guide arrives)

| Variable | Placeholder Value | Purpose |
|---|---|---|
| `--accent` | `#C5A059` | Primary accent (gold, matches TCBD for now) |
| `--accent-dark` | `#A88740` | Hover/active accent |
| `--charcoal` | `#2C3338` | Body text, footer |
| `--ink` | `#1A1F24` | Headings |
| `--cream` | `#FAF8F5` | Section backgrounds |
| `--white` | `#FFFFFF` | Card backgrounds |
| `--border` | `#E8E2D9` | Subtle borders |

Update these once the Disney After 60 style guide lands — comp will likely lean into a different palette (Disney park colors? Vintage poster aesthetic?).

## Key Details

- Domain: disneyafter60.com (CNAME file in place; DNS pending)
- Owner: Diane Mack (same as TCBD)
- Contact: diane@travelcreationsbydi.com / (469) 248-6318
- Sister site: travelcreationsbydi.com
- Logo / favicon: TBD — scaffold uses placeholder-text, swap when assets arrive
