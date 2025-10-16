---
title: "albatross-rpc-client-ts"
organization: "onmax"
role: "Creator & Lead Maintainer"
category: "personal"
duration:
  start: "2023-03-14"
  end: "2025-09-12"
  human: "2y 6m"
commit_count: 371
tech:
  - "TypeScript"
  - "Valibot"
  - "JSON Schema"
  - "WebSocket"
  - "pnpm"
links:
  github: "https://github.com/onmax/albatross-rpc-client-ts"
  live: "https://nimiq.github.io/developer-center/build/rpc-docs/"
stars: 2
created_at: "2023-03-14"
updated_at: "2025-09-12"
---
## Overview
Fully typed RPC client for the Nimiq Albatross protocol with optional runtime validation, JSON Schema exports, and HTTP/WebSocket support.

## Responsibilities
- Role: Creator & Lead Maintainer
- Category: personal
- Timeline: 2023-03-14 -> 2025-09-12 (2y 6m)
- Stack: TypeScript · Valibot validation · JSON Schema generation · WebSocket + HTTP transport utilities
- Ownership: reverse-engineered the Albatross RPC surface, authored strongly typed helpers, added validation + schema tooling, automated releases, and integrated the package with Developer Center docs and internal services.

## Highlights
- **Schema fidelity**: implemented Valibot validators + JSON Schema export so downstream tools (OpenRPC docs, tutorials) stay in sync with protocol changes.
- **Transport adapters**: shipped HTTP and WebSocket wrappers with retry helpers, environment variable support, and per-request overrides.
- **Testing harness**: added mock servers and CI suites that catch breaking RPC changes before publishing.
- **DX niceties**: exposed ergonomic helpers (`initRpcClient`, typed result tuples) adopted by validators-api, tutorial exercises, and starter templates.

## Collaboration
- Pull requests: merged: 4
- Issues: open: 5, closed: 13
- Sample PRs:
  - Simplify types (merged): https://github.com/onmax/albatross-rpc-client-ts/pull/37
  - Onmax/testing no ws (merged): https://github.com/onmax/albatross-rpc-client-ts/pull/52
  - feat: Add Valibot validation with JSON schema export (merged): https://github.com/onmax/albatross-rpc-client-ts/pull/78
- Sample Issues:
  - Rename to albatross-rpc-client-ts or something with `albatross` (closed): https://github.com/onmax/albatross-rpc-client-ts/issues/32
  - Enable `yarn test` (closed): https://github.com/onmax/albatross-rpc-client-ts/issues/28
  - Removed getEpochNumberAt (closed): https://github.com/onmax/albatross-rpc-client-ts/issues/49

## Impact
- Powers automated API references in the Developer Center and feeds the validators dashboard with validated data.
- Provides a single source of truth for Nimiq RPC integrations, reducing onboarding time for internal teams and community projects.
- Prevents breaking changes from shipping unnoticed by catching schema drift during CI and surfacing detailed errors to consumers.
