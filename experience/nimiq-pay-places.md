---
title: "Nimiq Pay Places (Pay App – Places)"
organization: "nimiq"
role: "Core Maintainer & Fullstack Engineer (Nimiq)"
category: "nimiq"
duration:
  start: "2025-09-30"
  end: "2025-10-16"
  human: "1m"
commit_count: 150
tech:
  - "TypeScript"
  - "Nuxt 4"
  - "Drizzle ORM"
  - "PostgreSQL"
  - "PostGIS"
  - "pgvector (HNSW)"
  - "OpenAI (Vercel AI SDK)"
  - "NuxtHub (Cloudflare KV/Blob/Cache)"
  - "Cloudflare Hyperdrive"
  - "Valibot"
  - "UnoCSS"
  - "Reka UI"
links:
  github: "https://github.com/nimiq/crypto-map-next"
  live: "https://places.je-cf9.workers.dev/"
created_at: "2025-09-30"
updated_at: "2025-10-16"
---
## Overview
Search‑first, no‑map widget (embedded in the Nimiq Pay context) for discovering crypto‑friendly locations. Current PoC focuses on Lugano with top‑notch UX and fast results. Hybrid search combines PostgreSQL full‑text search with semantic category matching (OpenAI embeddings via pgvector). Deployed on NuxtHub/Cloudflare with edge caches and on‑demand image proxying to keep Google costs under control.

## Background
- Not the Nimiq Pay app itself: this is the Pay App – Crypto Map widget, a standalone, search‑first experience without a map UI.
- Goal: replace the legacy map with a lean product that fixes data quality and performance while reducing third‑party costs.
- Stack reset: converged on a single repo and stack (Nuxt + Postgres) and avoided multi‑framework drift from earlier PHP/Laravel experiments.
- Cost control: GB API usage minimized; photos fetched on first view and cached in NuxtHub Blob storage; embeddings cached in KV.
- Scope: initial focus on Lugano PoC; designed to generalize, but no immediate plan to scale data.

## Responsibilities
- Schema design with Drizzle: PostGIS point geometry, normalized category taxonomy, many‑to‑many joins, and RLS policies.
- Vector search: pgvector + HNSW index for category embeddings; semantic similarity blended with FTS.
- Search API: `/api/search` (hybrid), `/api/search/autocomplete` (fast FTS + background embedding warm), `/api/locations/[uuid]`, `/api/categories` (counts + caching).
- Caching strategy: Nitro `defineCachedEventHandler` with TTL + SWR and route rules; KV cache for embeddings; Blob storage for images.
- i18n & UI: UnoCSS + Nimiq tokens, Reka UI components, safe runtime config, keyboard‑friendly flows.
- Deployment: NuxtHub/Cloudflare (KV/Blob/Cache, optional Hyperdrive binding for Postgres).

## Highlights
- Hybrid search engine: PostgreSQL FTS for exact/prefix matches + pgvector cosine similarity for semantic category expansion; deduped + ranked merge.
- Embedding pipeline: OpenAI `text-embedding-3-small` (1536‑dim) with KV caching and one‑shot batch generation for the category set.
- Geospatial filters: PostGIS distance/within filters with optional “near me” (Cloudflare IP geo fallback) and opening‑hours filtering.
- RLS hardening: read‑only anon/auth access; write paths restricted to `service_role`; separate seed‑only policies for taxonomy tables.
- Cost savings: on‑demand image proxy cached to Blob, minimizing expensive Google endpoints; avoids duplicate fetches.
- Edge‑ready: route rules + cache headers for Cloudflare; compatibility with NuxtHub’s cache/KV/Blob primitives.
 - Admin: simple read‑only `/admin` page for now.

## Impact
- Search UX: sub‑100ms autocomplete (FTS), responsive hybrid queries with pagination and distance sorting when origin is available.
- Maintainability: single‑repo, single‑stack approach cut overhead versus prior monorepo sprawl; typed queries and shared fragments reduce bugs.
- Cost posture: greatly reduced GB API usage through on‑demand media and server‑side cache; embeddings reuse avoids repeated AI calls.
- Success metric: qualitative — “happy users” over numeric dashboards.

## Current Status
- Region: Lugano (PoC). No plan to scale data yet; focus is UX quality and fast search results.
- Map: intentionally none — this is a list/search experience.
- Admin: `/admin` exists but is read‑only and minimal.

## Collaboration
- Team: Solo lead; two minor contributors supporting selectively.

## Notes
- Codebase: `~/nimiq/map/pay-app` (public repo: `nimiq/crypto-map-next`).
- Status: active development; initial region (Lugano). Further exploration can extend sections for data sources, admin tooling, and metrics as they firm up.
