@AGENTS

# Caio Stato — Portfolio Build Documentation

## Project Overview

This repository is the bilingual (`pt-br` default at `/`, `en-us` at `/en-us`) portfolio for **Caio Stato**, Frontend & Fullstack Engineer specializing in **React**, **Next.js**, fintech payment rails, and scalable UI architecture.

- **Location:** Sorocaba / São Paulo, SP, Brazil
- **Email:** caiobnstato@gmail.com
- **LinkedIn:** [https://linkedin.com/in/caiostato](https://linkedin.com/in/caiostato)
- **GitHub:** [https://github.com/caiostato](https://github.com/caiostato)

---

## Design & Technical Decisions

1. **Color Palette & Surface Contrast (`src/app/globals.css`)**
   - **Plum Noir (`#351E28` / `oklch(0.269 0.039 352.4)`):** Deep, velvety dark background base with rich contrasting surfaces (`--surface-contrast: oklch(0.235 0.035 352.4)` and elevated cards `--card: oklch(0.325 0.042 352.4)`).
   - **Persimmon Orange (`#FF5C34` / `oklch(0.686 0.206 34.8)`):** High-visibility accent for primary CTAs, active toggles, kinetic data pulses, and telemetry markers.
   - **Cool Blue (`#D7EFFF` / `oklch(0.939 0.033 237)`):** High-precision technical highlights, coordinate grid hairlines, technology tags, and payload code blocks.

2. **Interactive Hero Canvas (`src/components/hero-interactive-bg.tsx`)**
   - Zero radial gradients. Uses an HTML5 `<canvas>` (`z-0`) that draws structural Cool Blue grid lines, spring-displaced intersection nodes that react to pointer movement, constellation connectors, and autonomous orthogonal Persimmon Orange data pulses.

3. **Live Mobile Project Previews (`src/components/site-preview.tsx` & `src/components/projects-section.tsx`)**
   - Features live production systems (**Cerasos** at `https://cerasos.com.br/` and **Arkea Labs** at `https://arkealabs.com/`) alongside **AR3 Capital**.
   - Each preview card is sized to a mobile portrait viewport (`max-w-[390px]`, fixed `h-[540px]` body) so live embedded sites render their mobile responsive views cleanly.
   - Each card manages its own isolated state (`isArchMode`) to toggle between **Preview ao vivo (`<iframe>`)** and **Arquitetura (3-node system topology)** without shifting card height or affecting sibling cards.

4. **Interactive Architecture Sandbox (`src/components/live-sandbox-section.tsx`)**
   - Allows visitors to simulate real event pipelines from Cerasos (WhatsApp Uazapi order ingress & Getnet PCI tokenization) and Arkea Labs (Bidirectional ERP sync).

5. **Clean Root Locale Routing (`src/proxy.ts` & `src/i18n/config.ts`)**
   - Default language is `pt-br` served at `/` via `NextResponse.rewrite` (no `/pt-br` slug in the browser bar; visiting `/pt-br` redirects to `/`).
   - English is served explicitly at `/en-us`.

---

## Featured Production Projects

- **Cerasos (`https://cerasos.com.br/`):** Pharmacy sales platform running on WhatsApp via Uazapi with an automated Next.js order engine, Getnet PCI tokenization & webhook listeners, and an administrative analytics dashboard (`99.9%` reliability, `100%` orders automated).
- **Arkea Labs (`https://arkealabs.com/`):** B2B/B2C digital infrastructure and software engineering platform with real-time bidirectional ERP connectors (SAP, Totvs, Omie, Bling), PostgreSQL/Redis resilience, and `99+` Core Web Vitals.
- **AR3 Capital:** Consolidated internal financial platform and Storybook UI component library (`+30%` operational efficiency, `100%` views on shared UI library).
