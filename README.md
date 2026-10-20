# Caio Stato — Portfolio (`goat-portfolio`)

Portfolio and interactive architecture showcase for **Caio Stato** (Frontend / Fullstack Engineer specializing in React, Next.js, and fintech systems).

- **Email:** [caiobnstato@gmail.com](mailto:caiobnstato@gmail.com)
- **LinkedIn:** [linkedin.com/in/caiostato](https://linkedin.com/in/caiostato)
- **GitHub:** [github.com/caiostato](https://github.com/caiostato)

---

## Architecture & Stack

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript 5
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`) + OKLCH color tokens
- **UI Primitives:** `@base-ui/react` (mobile navigation drawer), `lucide-react` icons, `class-variance-authority`
- **Typography (`next/font/google`):**
  - `Space Grotesk` (`--font-space-grotesk`) — Display & section headings
  - `Geist` (`--font-geist`) — Body copy
  - `JetBrains Mono` (`--font-jetbrains-mono`) — Labels, metrics, and telemetry
- **Internationalization (`src/proxy.ts` & `src/i18n/config.ts`):**
  - Default locale is **Portuguese (`pt-br`)**, served directly at the root `/` without a URL slug (`NextResponse.rewrite` to `/pt-br`, while `/pt-br` redirects to `/`).
  - Secondary locale is **English (`en-us`)**, served at `/en-us`.

---

## Design System & Surface Hierarchy

Defined in `src/app/globals.css`:

- **Palette:** Matte Carbon (`--background: oklch(0.115 0.004 260)`), Alternating Slate-Graphite Section Contrast (`--surface-contrast: oklch(0.162 0.008 255)`), Elevated Card Surfaces (`--card` / `--card-elevated`), and **International Signal Orange** (`--brand: oklch(0.7 0.195 42)`).
- **Interactive Hero Canvas (`src/components/hero-interactive-bg.tsx`):**
  - Hardware-accelerated HTML5 `<canvas>` rendering a structural grid, spring-physics nodes that react to cursor proximity, constellation links, and autonomous Signal Orange data pulses.
- **Mobile-Proportioned Live Project Cards (`src/components/site-preview.tsx`):**
  - Fixed-dimension portrait cards (`max-w-[390px]`, `h-[540px]` viewport) so embedded live deployments (`https://cerasos.com.br/` and `https://arkealabs.com/`) naturally render their responsive mobile layouts.
  - Per-card isolated view toggle between **Live Preview (`<iframe>`)** and **System Architecture (3-node topology)** with zero height shift.
- **Interactive Architecture Sandbox (`src/components/live-sandbox-section.tsx`):**
  - In-page simulator allowing visitors to step through production event pipelines (WhatsApp Uazapi order ingress, Getnet PCI tokenization, and SAP/Totvs/Bling ERP synchronization).

---

## Project Structure

```text
src/
├── proxy.ts                          # Next.js 16 request proxy (clean "/" for pt-br, "/en-us" for English)
├── i18n/
│   └── config.ts                     # Locales, defaultLocale ("pt-br"), and localePath() helper
├── dictionaries/
│   ├── types.ts                      # Strict TypeScript dictionary contract
│   ├── pt-br.ts                      # Default Portuguese content
│   └── en-us.ts                      # English content
├── app/
│   ├── globals.css                   # Tailwind v4 theme, OKLCH palette, typography & reveal utilities
│   └── [lang]/
│       ├── dictionaries.ts           # Dynamic dictionary loader
│       ├── layout.tsx                # Root HTML shell, fonts & metadata
│       └── page.tsx                  # Main portfolio page composition
└── components/
    ├── site-header.tsx               # Scroll-morphing capsule header & locale switcher
    ├── mobile-nav.tsx                # Mobile bottom sheet drawer (@base-ui/react)
    ├── hero-interactive-bg.tsx       # Interactive kinetic grid & constellation canvas
    ├── hero-section.tsx              # Hero stage & integrated 3-column metrics strip
    ├── projects-section.tsx          # Selected projects & live deployments showcase
    ├── site-preview.tsx              # Fixed-height 390x540 mobile live preview & architecture card
    ├── live-sandbox-section.tsx      # Interactive production pipeline simulator
    ├── experience-section.tsx        # Career timeline & stack highlights
    ├── capabilities-section.tsx      # Core capabilities & 4-column categorized stack matrix
    ├── philosophy-section.tsx        # Engineering doctrine quote block
    ├── connect-section.tsx           # Direct email CTA & clipboard copy action
    ├── site-footer.tsx               # Footer links & copyright
    ├── scroll-reveal.tsx             # IntersectionObserver reveal controller
    └── ui/
        ├── button.tsx                # Button primitive
        └── section.tsx               # Section wrapper (alternating surfaces & rhythm)
```

---

## Development & Build Commands

```bash
# Start local development server (http://localhost:3000)
npm run dev

# Run ESLint checks
npm run lint

# Build production bundle
npm run build

# Start production server
npm run start
```
