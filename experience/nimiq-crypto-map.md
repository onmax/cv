---
title: "crypto-map"
organization: "nimiq"
role: "Core Maintainer & Frontend Engineer (Nimiq)"
category: "nimiq"
duration:
  start: "2022-10-10"
  end: "2025-09-18"
  human: "2y 11m"
commit_count: 1060
tech:
  - "TypeScript"
  - "Vue 3"
  - "Nuxt 3"
  - "Vite"
  - "Supabase"
  - "PostgreSQL"
  - "PostGIS"
  - "Supabase Edge Functions"
  - "Slack SDK (Deno)"
  - "Google Business API"
  - "Cloudflare Workers"
links:
  github: "https://github.com/nimiq/crypto-map"
  live: "https://map.nimiq.com"
stars: 6
created_at: "2022-07-13"
updated_at: "2025-10-16"
---
## Overview
Global merchant discovery platform addressing Nimiq’s “spend crypto” discovery gap. Shows 29k+ (peaked >30k) crypto-friendly locations with Supabase/PostGIS-backed clustering, Vue/Nuxt frontends, and Slack-powered moderation.

## Current Status
- Adoption: minimal active users today; retention suffered due to legacy data quality issues. Some internal Nimiq surfaces reuse the data, but there have been no notable spikes or public launches.
- Focus: maintenance mode for the current map while exploring a new, non‑map approach with fresher, higher‑quality data.
- Performance today: initial load ≈2.5 s on typical connections (down from 12–15 s pre‑rewrite), with room to improve.
 - Successor (exploration): search‑first "Nimiq Pay Places" widget with no map UI, Lugano‑only PoC, and top‑notch UX focus. Live: https://places.je-cf9.workers.dev/

## Background
- Origin: started as a local initiative in Costa Rica using Google My Maps with ~31 locations. The concept resonated, but the tool could not scale or cluster efficiently.
- Internal attempt: a comms teammate (light programming background) tried to extend the map; progress was slow and the project was cancelled.
- External attempt: later, an outside contractor plus a community member shipped a PHP backend with a Vue 2 frontend. It functioned but was over-engineered, low quality, and did not meet needs—cancelled again.
- Reboot: I took over solo and rebuilt from scratch with a “simple-first” approach. Chose PostgreSQL + PostGIS (via Supabase) for native geo queries and clustering, replaced My Maps, and focused on fast, cacheable data flows.
- Impact on performance: reduced initial load from 10–15 s to ~3–4 s through PostGIS queries, pre-computed clusters, and lean payloads.
- Team needs: communications asked for richer filters, an editable dataset, and automated partner ingestions. I added moderation workflows, admin utilities, and repeatable ETL so non-engineers could keep data fresh.
- UI consistency: spun up a small CSS/UI library (“nimiq‑ui”) to align look-and-feel across multiple Nimiq properties maintained in parallel.
- Strategic fit: framed Crypto Map against the three crypto phases—acquire, hold, spend—focusing on the under-served “spend” exploration and merchant discovery.
- Solo lead & upskilling: first fully solo product ownership; learned PostgreSQL/PostGIS on the job and established pragmatic conventions for data ingestion, validation, and caching.
- Scale reality: dataset grew from ~30 to >30k locations; automation and validations (dedupe, geo-precision checks, category normalization) became mandatory to keep quality high.

## Responsibilities
- Role: Core Maintainer & Frontend Engineer (Nimiq)
- Category: nimiq
- Timeline: 2022-10-10 -> 2025-09-18 (2y 11m)
- Stack evolution: bootstrapped as a Vue 3 + Vite SPA, migrated into a pnpm monorepo with shared packages (`database`, `geo`, `types`), and now leading the Nuxt 3 rewrite to gain first-class SSR, caching backends, and partner-specific portals.
- End-to-end ownership: Supabase/PostGIS schema, PL/pgSQL RPCs, cluster algorithms, Slack ops bot, Google Business ingestion, CDN/cache strategy, deployments, documentation, and roadmap.
- Python data wrangler: maintain a toolbox of Python 3 scripts for ingesting partner CSVs, orchestrating Google Business API pulls, and running ad-hoc analytics for marketing/stakeholder requests.

## Highlights
 - **PostGIS-powered clustering**: designed Supabase functions (`get_locations`, `get_markers`, etc.) and Deno Edge Functions to pre-compute 720 zoom-bounded clusters per epoch, cutting initial map load from >10 s to ~2.5–4 s and enabling dataset-scoped rollouts.
- **Cost-aware media pipeline**: built importer scripts and lazy Google Business fetchers that download high-res assets once, cache them in Nimiq buckets, and prevent duplicate API calls—avoiding another $2k+ billing incident.
- **Dataset onboarding scripts**: deliver repeatable Python/OCR pipelines that whip raw partner exports into geo-coded Supabase records within hours, enabling lean monthly refreshes without extra engineering support.
- **Operational tooling**: shipped a Slack moderation bot plus CI workflows so a single maintainer can vet submissions, triage issues, and warm caches across four Supabase datasets and multiple frontends.
- **Dataset hygiene**: introduced "prod"/"next" dataset toggles with memoized caches, allowing the team to QA higher-quality merchant feeds privately before public release.
 - **Forward-looking tiling**: prototyped vector tile (MVT) delivery that trims cluster payload sizes by ~70%. Migration to OSM/MapLibre is planned but currently paused due to time constraints.
 - **Map stack tradeoffs**: used Google Maps initially for speed of implementation; drawbacks include paid billing and blocked regions (e.g., China). Migration plan targets MapLibre GL + OSM to avoid lock‑in and reduce costs.
 - **Lean UX flows**: focus on browse, search, and report. Deep‑link to Google Maps for richer place details/directions rather than rebuilding everything in‑app.
- **Merchant editing & filters**: implemented public submission forms, admin edit flows, and a scalable filter architecture (categories, payment types, regions) so non-engineers can curate the map continuously.

## Collaboration
- Pull requests: merged: 8, closed: 1
- Issues: open: 4
- Sample PRs:
  - Matheo/wip (merged): https://github.com/nimiq/crypto-map/pull/4
  - Matheo/wip (merged): https://github.com/nimiq/crypto-map/pull/3
  - Forms (merged): https://github.com/nimiq/crypto-map/pull/1
- Sample Issues:
  - Change default map (open): https://github.com/nimiq/crypto-map/issues/18
  - Add dark uri (open): https://github.com/nimiq/crypto-map/issues/17
  - Add cryptocity info  (open): https://github.com/nimiq/crypto-map/issues/12

## Impact
- Performance: initial load reduced from 12–15 s to ~2.5 s via clustering, payload trimming, and caching.
- Operations: moderation and import tooling allow a single maintainer to manage submissions and periodic updates efficiently.
- Cost control: Google Business API usage minimized; images fetched on‑demand (first open) and cached on our buckets to avoid high‑cost endpoints.
- Data quality path: `?dataset=next` toggle enables safe validation of improved datasets before flipping to prod.
- Reality check: usage today is low, reflecting legacy data quality; current roadmap prioritizes a new non‑map experience with up‑to‑date sources.

## Lessons Learned
- Keep it simple when you’re the only maintainer: Supabase + PostGIS covered 90% of needs without bespoke infra.
- Avoid premature monorepo sprawl: an early pnpm workspace with `database`, `geo`, and `utils` packages added maintenance drag; consolidating reduced friction.
- Invest in data hygiene early: validations and automated ETL guardrails matter once datasets pass ~30k records.
- Ship operational tooling alongside product features: Slack moderation and cache warmers save hours every month at small scale.
 - Favour one repo, one stack: converged on Nuxt + Postgres as the default; avoid multi‑framework drift (e.g., prior PHP/Laravel experiments) and keep client code surface area small.
