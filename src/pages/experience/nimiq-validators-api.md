---
layout: ../../layouts/MarkdownLayout.astro
title: "validators-api"
organization: "nimiq"
role: "Core Maintainer & Frontend Engineer (Nimiq)"
category: "nimiq"
duration:
  start: "2024-05-16"
  end: "2025-07-24"
  human: "1y 2m"
commit_count: 519
tech:
  - "TypeScript"
  - "Nuxt 3"
  - "Cloudflare Workers"
  - "Cloudflare D1"
  - "Drizzle ORM"
  - "Slack Webhooks"
  - "Valibot"
links:
  github: "https://github.com/nimiq/validators-api"
  live: "https://validators-api-mainnet.pages.dev"
  docs: "https://www.nimiq.com/developers/validators/validator-trustscore"
stars: 3
created_at: "2024-05-16"
updated_at: "2025-08-04"
---
## Overview
Trust-score platform powering the Nimiq Wallet and partner sites with validator telemetry, rankings, and transparent staking pool metadata refreshed every epoch.

## Responsibilities
- Role: Core Maintainer & Frontend Engineer (Nimiq)
- Category: nimiq
- Timeline: 2024-05-16 -> 2025-07-24 (1y 2m)
- Stack: Nuxt 3 · TypeScript · Cloudflare Workers/D1 · Drizzle ORM · Valibot · Slack Webhooks
- Ownership: adapted and productionised the Validator Trust Score algorithm; engineered the ingestion pipeline that processes ~720 blockchain batches per epoch; designed the public REST API & JSON schema; built the dashboard UI; and operated four Nuxt Hub environments (mainnet/testnet × preview/production) with automated syncing and alerting.
- Reliability & CI: act as first responder when validator telemetry drifts, enforce GitHub Actions gates for lint/type/test on every repo touching the API, and maintain a slim Vitest suite safeguarding core scoring paths.
- Docs: authored the [Validator Trust Score handbook](https://www.nimiq.com/developers/validators/validator-trustscore)

## Highlights
- **Validator Trust Score implementation**: validated the core-team draft, closed data gaps by reverse-engineering Albatross RPC responses, and hardened the scoring logic against manipulation scenarios before shipment to wallet users.
- **High-frequency data ingestion**: built a Cloudflare Worker cron that fan-outs and retries batch fetches in parallel, keeping epoch-sync runs under 3 minutes while writing normalised records via Drizzle ORM into D1.
- **Operational visibility**: added Slack incident hooks, structured logs, and a Nuxt dashboard health view so wallet engineers and community managers can audit validator behaviour and spot anomalies without touching the database.
- **Mid-2025 validator gap fix**: diagnosed a stakingrewards.com report pointing to missing epoch data for non-elected validators, shipped a four-hour hotfix to backfill live responses, and closed the root-cause bug within 48 hours without downtime.

## Collaboration
- Pull requests: merged: 23, closed: 3
- Issues: open: 11, closed: 19
- Sample PRs:
  - Retrieve size from ended epochs (merged): https://github.com/nimiq/validators-api/pull/4
  - Onmax/new validators just in current epoch (merged): https://github.com/nimiq/validators-api/pull/3
  - feat: enhance grid utilities and improve validator table functionality (merged): https://github.com/nimiq/validators-api/pull/115
- Sample Issues:
  - Epoch size (closed): https://github.com/nimiq/validators-api/issues/2
  - incorrect window size (closed): https://github.com/nimiq/validators-api/issues/1
  - Run `nr release` for v1 (open): https://github.com/nimiq/validators-api/issues/110

## Impact
- Surfaces live telemetry for 40+ tracked validators (≈15 payout pools) to the Nimiq Wallet, reducing manual validator vetting and supporting ~20 community submissions maintained via GitHub PR workflow.
- Serves ~8k cached API requests per day for the wallet, stakingwards.com, and internal tooling, keeping response times low while shielding blockchain nodes from direct traffic.
- Maintained >12-hour sync cadence with only one recoverable incident in the first year; issued a rapid hotfix and two-day permanent patch that replayed historical epochs while keeping the API online, so stakers saw up-to-date trust scores and pool status.
