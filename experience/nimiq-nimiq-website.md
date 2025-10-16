---
title: "nimiq-website"
organization: "nimiq"
role: "Core Maintainer & Frontend Engineer (Nimiq)"
category: "nimiq"
duration:
  start: "2024-09-05"
  end: "2025-09-15"
  human: "1y"
commit_count: 689
tech:
  - "Nuxt (v2 → v4 Migration)"
  - "Vue"
  - "Prismic CMS"
  - "Tailwind CSS"
  - "Cloudflare Pages/Workers"
  - "Open Graph automation"
links:
  github: "https://github.com/nimiq/nimiq-website"
  live: "https://www.nimiq.com"
stars: 3
created_at: "2024-09-05"
updated_at: "2025-10-16"
---
## Overview
Marketing website and content platform for Nimiq with a reusable, component‑driven page system on top of Prismic CMS. Owns performance, page builder components, and infrastructure evolution (Nuxt 2 → 4, Cloudflare Pages/Workers) while keeping SSR disabled for security/domain constraints.

## Background
- Early project: inherited a partially planned site and a CMS choice (Prismic) made before I joined. While not ideal, I embraced it and designed around its strengths.
- Rebuild: most code was not salvageable; rebuilt from scratch with a section/component system designed for reuse across many pages.
- Tailwind introduction: pushed for Tailwind adoption across the team despite low prior exposure—proved a great fit for speed and consistency.
- Nuxt decision: initially shipped on Nuxt 2 (Nuxt 3 was too early then). Later led the staged migration to Nuxt 4 bringing modern modules and significant perf wins.
- Constraint: no server‑side HTML rendering on the shared nimiq.com domain (Wallet + site). The site is static/SSG, with server endpoints offloaded to Cloudflare Workers.

## Responsibilities
- Role: Core Maintainer & Frontend Engineer (Nimiq)
- Category: nimiq
- Timeline: 2024-09-05 -> 2025-09-15 (1y)
- Stack: Nuxt 2 → 4 · Vue · Prismic CMS · Tailwind CSS · Cloudflare Pages/Workers
- Ownership: page builder architecture; performance budgets and audits; CMS modeling; deployment environments; SEO/OG automation; and bespoke homepage components (blockchain live view, roadmap).

## Highlights
- **Performance wins**: reduced mobile homepage load from ~3.5 s to ~1.0–1.2 s via image optimization, deferring non‑critical work, render‑order tuning, and avoiding unnecessary JS.
- **Component system**: shipped a reusable section/component model so comms/marketing can compose pages rapidly with consistent UI.
- **Blockchain live view**: built a real‑time block stream on the homepage using my typed Albatross RPC client; server subscribes to RPC, web client renders a smooth translate‑based animation optimized for mobile devices.
- **Roadmap component**: complex, asymmetric layout implemented with CSS Grid + variables; data‑driven from a single JSON so non‑engineers can add/edit items; items snap to months automatically.
- **SEO & OG**: improved SEO hygiene, added dynamic Open Graph image generation, and tightened lighthouse scores across key pages.
- **Nuxt migration**: led Nuxt 2 → 4 migration; adopted new Prismic/Nuxt modules; overall faster loads and simpler DX.
- **Static by design**: SSG with Cloudflare endpoints for newsletters and misc server tasks, satisfying security constraints on the shared domain.
 - **Roadmap source (permalink)**: page `app/pages/roadmap.vue` and component `app/components/Roadmap/index.vue` at commit `94eb268`:
   - Page: https://github.com/nimiq/nimiq-website/blob/94eb26819ccf207ff3bcf7a667300aa55907fdad/app/pages/roadmap.vue
   - Component: https://github.com/nimiq/nimiq-website/blob/94eb26819ccf207ff3bcf7a667300aa55907fdad/app/components/Roadmap/index.vue
   - Data: https://github.com/nimiq/nimiq-website/blob/94eb26819ccf207ff3bcf7a667300aa55907fdad/app/components/Roadmap/roadmap-data.ts
 - **Newsletter (Zoho) endpoint**: server util and endpoint sources (permalinks):
   - Util: https://github.com/nimiq/nimiq-website/blob/94eb26819ccf207ff3bcf7a667300aa55907fdad/server/utils/newsletter.ts
   - Subscribe API: https://github.com/nimiq/nimiq-website/blob/94eb26819ccf207ff3bcf7a667300aa55907fdad/server/api/newsletter/subscribe.post.ts
 - **Albatross LiveView**: iframe page, live blockchain component, and server route (permalinks):
   - Iframe page: https://github.com/nimiq/nimiq-website/blob/94eb26819ccf207ff3bcf7a667300aa55907fdad/app/pages/iframes/albatross-liveview.vue
   - Liveview Blockchain: https://github.com/nimiq/nimiq-website/blob/94eb26819ccf207ff3bcf7a667300aa55907fdad/app/components/Albatross/liveview/Blockchain.vue
   - Server route: https://github.com/nimiq/nimiq-website/blob/94eb26819ccf207ff3bcf7a667300aa55907fdad/server/routes/albatross-blocks.ts

## Collaboration
- Pull requests: merged: 39, closed: 10
- Issues: open: 28, closed: 72
- Sample PRs:
  - chore: update Claude workflows for improved review process (merged): https://github.com/nimiq/nimiq-website/pull/191
  - Claude PR Assistant workflow (merged): https://github.com/nimiq/nimiq-website/pull/190
  - New internal dynamic (merged): https://github.com/nimiq/nimiq-website/pull/178
- Sample Issues:
  - provenance-action (open): https://github.com/nimiq/nimiq-website/issues/199
  - Overflow Y missing scroll (open): https://github.com/nimiq/nimiq-website/issues/198
  - Iframe has not the right side (open): https://github.com/nimiq/nimiq-website/issues/196

## Impact
- Faster page loads on mobile improve first‑impression UX and reduce bounce on the homepage.
- Reusable builder + Prismic model enables rapid publishing without engineer intervention.
- Static architecture keeps security posture tight while Cloudflare endpoints handle the few dynamic needs (e.g., newsletters) reliably.
