---
layout: ../../layouts/MarkdownLayout.astro
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
updated_at: "2025-09-18"
---
## Overview
Global merchant discovery platform showing 29k+ crypto-friendly locations with Supabase/PostGIS-backed clustering, Vue/Nuxt frontends, and Slack-powered moderation.

## Responsibilities
- Role: Core Maintainer & Frontend Engineer (Nimiq)
- Category: nimiq
- Timeline: 2022-10-10 -> 2025-09-18 (2y 11m)
- Stack evolution: bootstrapped as a Vue 3 + Vite SPA, migrated into a pnpm monorepo with shared packages (`database`, `geo`, `types`), and now leading the Nuxt 3 rewrite to gain first-class SSR, caching backends, and partner-specific portals.
- End-to-end ownership: Supabase/PostGIS schema, PL/pgSQL RPCs, cluster algorithms, Slack ops bot, Google Business ingestion, CDN/cache strategy, deployments, documentation, and roadmap.
- Python data wrangler: maintain a toolbox of Python 3 scripts for ingesting partner CSVs, orchestrating Google Business API pulls, and running ad-hoc analytics for marketing/stakeholder requests.

## Highlights
- **PostGIS-powered clustering**: designed Supabase functions (`get_locations`, `get_markers`, etc.) and Deno Edge Functions to pre-compute 720 zoom-bounded clusters per epoch, cutting initial map load from >10 s to ~4 s and enabling dataset-scoped rollouts.
- **Cost-aware media pipeline**: built importer scripts and lazy Google Business fetchers that download high-res assets once, cache them in Nimiq buckets, and prevent duplicate API calls—avoiding another $2k+ billing incident.
- **Dataset onboarding scripts**: deliver repeatable Python/OCR pipelines that whip raw partner exports into geo-coded Supabase records within hours, enabling lean monthly refreshes without extra engineering support.
- **Operational tooling**: shipped a Slack moderation bot plus CI workflows so a single maintainer can vet submissions, triage issues, and warm caches across four Supabase datasets and multiple frontends.
- **Dataset hygiene**: introduced "prod"/"next" dataset toggles with memoized caches, allowing the team to QA higher-quality merchant feeds privately before public release.
- **Forward-looking tiling**: prototyped vector tile (MVT) delivery that trims cluster payload sizes by ~70%, with ongoing work to swap Google Maps for OSM layers and city landing pages for long-tail SEO.

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
- Serves ~150 monthly users across web and embedded surfaces, supplying ~29k locations from vetted partners while keeping map load times at ~4 s (down from >10 s pre-clustering).
- Automates moderation and importer workflows so one engineer can manage 20+ data submissions and recurring updates without manual review queues.
- Keeps Google Business spend sustainable by deferring media downloads until first request and caching assets locally—protecting budgets while improving repeat load latency.
- Enables stakeholders to validate new high-trust datasets safely via `?dataset=next`, expediting migration away from noisy legacy feeds without risking production data quality.
