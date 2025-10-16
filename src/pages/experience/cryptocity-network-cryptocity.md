---
layout: ../../layouts/MarkdownLayout.astro
title: "cryptocity"
organization: "cryptocity-network"
role: "Major External Contributor"
category: "external"
duration:
  start: "2024-08-20"
  end: "2025-04-15"
  human: "7m"
commit_count: 42
tech:
  - "Nuxt 3"
  - "UnoCSS"
  - "DattoCMS"
  - "PostgreSQL (PostGIS)"
  - "Netlify"
links:
  github: "https://github.com/cryptocity-network/cryptocity"
  live: "https://cryptocity.network/"
stars: 0
created_at: "2024-01-17"
updated_at: "2025-04-16"
---
## Overview
Multi-city Nuxt 3 platform powering Cryptocity microsites with DattoCMS-driven content and reusable marketing components.

## Responsibilities
- Role: Major External Contributor
- Category: external
- Timeline: 2024-08-20 -> 2025-04-15 (7m)
- Team: 2 engineers + 1 designer; embedded with marketing stakeholders
- Stack: Nuxt 3 · UnoCSS · DattoCMS · Postgres (PostGIS) · Netlify
- Focus: Built multi-tenant content models, localization tooling, and CI so marketing could self-serve city launches

## Highlights
- **Tooling & dependency upkeep**: 13 updates (examples: chore: the use of v-deep is deprecated; chore: convert München to Munich for supabase query)
- **Feature development**: 8 updates (examples: Merge pull request #15 from cryptocity-network/feature/employee-contact-cards; feature: add phone number and whatsapp to contact cards)
- **Bug fixing**: 3 updates (examples: fix: show the correct total number of locations; fix: normalize sao-paulo)

## Collaboration
- Pull requests: merged: 2, closed: 1
- Sample PRs:
  - feat: use pagination in locations (merged): https://github.com/cryptocity-network/cryptocity/pull/11
  - Onmax/locations pagination (closed): https://github.com/cryptocity-network/cryptocity/pull/10
  - chore: add portuguese (merged): https://github.com/cryptocity-network/cryptocity/pull/14

## Impact
- Enabled marketing to ship 10+ city microsites across 7 domains without engineering support; non-technical staff spin up a city in <5 minutes via templated DattoCMS forms and automated Netlify deploys.
- Integrated the Cryptomap API with PostGIS polygon indexing and virtualized pagination, serving 50k+ location entries while eliminating carousel crashes and trimming mobile load times by ~7 s.
- Delivered localized static builds (EN/DE/ES/FR) using a custom UnoCSS preset and the Nimiq UI kit, achieving perfect SEO scores and all-green Lighthouse audits that gave sales credible collateral to secure new city partnerships.
