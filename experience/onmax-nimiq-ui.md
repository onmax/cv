---
title: "nimiq-ui"
organization: "onmax"
role: "Creator & Lead Maintainer"
category: "personal"
duration:
  start: "2024-01-10"
  end: "2025-09-24"
  human: "1y 8m"
commit_count: 1150
tech:
  - "TypeScript"
  - "Vue 3"
  - "Vite"
  - "VitePress"
  - "UnoCSS"
  - "MapLibre"
  - "Design Tokens"
links:
  github: "https://github.com/onmax/nimiq-ui"
  live: "https://onmax.github.io/nimiq-ui/"
stars: 2
created_at: "2023-11-20"
updated_at: "2025-09-24"
---
## Overview
Modular Nimiq design system: CSS/UnoCSS presets, icon pipelines, VitePress theme, and MapLibre styles that power Nimiq web properties.

## Responsibilities
- Role: Creator & Lead Maintainer
- Category: personal
- Timeline: 2024-01-10 -> 2025-09-24 (1y 8m)
- Stack: TypeScript · UnoCSS presets · Vue/Vite tooling · VitePress docs · MapLibre themes
- Ownership: defined tokens, built component blueprints, automated icon ingestion from Figma, published npm packages (`nimiq-css`, `nimiq-vitepress-theme`, `nimiq-maplibre-styles`, `nimiq-theme`), and maintained documentation.

## Highlights
- **Design tokens**: rolled out consistent spacing, typography, color primitives consumed by Developer Center, Crypto Map, Tutorials, and feedback widget.
- **Icon + asset pipeline**: scripted Figma exports → SVG optimization → package releases so products get fresh icons with one version bump.
- **VitePress theme**: shipped `nimiq-vitepress-theme`, enabling the Developer Center’s custom layout and widget slots while remaining framework-agnostic.
- **Map styles**: authored MapLibre theme presets reused by the Crypto Map and partner dashboards for branded geospatial visuals.
- **Release automation**: set up pnpm monorepo scripts, docs site, and sandbox apps to dogfood components before publishing beta releases.

## Collaboration
- Pull requests: merged: 1, closed: 1
- Issues: open: 59, closed: 8
- Sample PRs:
  - feat(theme): Update active sidebar item styling (closed): https://github.com/onmax/nimiq-ui/pull/69
  - feat: Use lh units for typography margins (merged): https://github.com/onmax/nimiq-ui/pull/66
- Sample Issues:
  - Fix switch in Safari (open): https://github.com/onmax/nimiq-ui/issues/18
  - Add easing  (open): https://github.com/onmax/nimiq-ui/issues/17
  - Add `scroll-padding-block` in a `textarea`  (open): https://github.com/onmax/nimiq-ui/issues/16

## Impact
- Gave every Nimiq DX surface a shared visual language, cutting UI divergence and accelerating new product styling.
- Reduced onboarding time for new projects: teams scaffold apps with starter templates already wired to `nimiq-css` and the VitePress theme.
- Enabled rapid iteration on icons and components—updates propagate across Developer Center, tutorials, feedback widget, and marketing sites with a single package bump.
