---
theme: default
title: "Máximo García — Fullstack Developer"
info: "MAX IV Interview - Friday 17 October 14:00"
transition: slide-left
layout: cover
class: text-center
---

# Hi, I'm Máximo García

**Fullstack developer** who turns complex data & domain needs into **reliable web tools**

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: center
---

## Who I Am

- Born in **Spain**; started coding at **15**
- **Freelanced** during university, shipped for real users
- **7 years** building web apps: Vue/React/Angular ecosystems
- Today: fullstack with focus on **TypeScript**, **data-heavy UIs**, and **developer experience**

<div class="mt-8 text-sm opacity-75">
  <strong>Stack:</strong> Vue 3 • React • TypeScript • Node.js • Docker • PostgreSQL • CI/CD
</div>

---
layout: two-cols
---

## Project 1 — Crypto Map

**Problem**
Users needed to discover businesses accepting crypto payments worldwide — data scattered across multiple sources

**Action**
- Stack: **Vue 3**, **Supabase** (PostgreSQL), **Google Maps API**
- Built ETL pipeline to fetch, clean, and group data from multiple sources
- Optimized frontend for fast map rendering with thousands of markers
- Created **Slack bot** as admin panel for user suggestions & reports

::right::

**Result**
- Launched with **5,000+ locations** indexed
- **Open source** project enabling community contributions
- Fast, reliable performance even with large datasets

```txt
Architecture
[Sources] → [ETL Scripts] → [Supabase DB]
                                  ↓
[Vue 3 App] ← [Google Maps API]
      ↓
[Slack Bot] (admin panel)
```

<div class="text-sm opacity-75 mt-4">
🔗 <a href="https://map.nimiq.com" target="_blank">map.nimiq.com</a> • Open Source
</div>

---
layout: two-cols
---

## Project 2 — Nimiq Design System

**Problem**
Multiple projects lacked visual consistency; designers & devs duplicated work; slow onboarding for new contributors

**Action**
- Created **Tailwind CSS config** with reusable classes
- Built **icon framework**: automated export from Figma → Iconify
- Developed **typography package** (Tailwind-inspired)
- **Collaborated** with design team to align on tokens & components

::right::

**Result**
- **3× faster** component development across projects
- **Onboarding time** reduced by ~50% for new contributors
- Adopted across entire organization and community

```ts
// Type-safe design tokens
import { colors, spacing } from '@nimiq/themes'

const Button = styled.button`
  background: ${colors.primary};
  padding: ${spacing.md};
`
```

<div class="text-sm opacity-75 mt-4">
Used in Wallet, Crypto Map, and 10+ community projects
</div>

---
layout: center
---

## Technical Approach & Quality

<div class="grid grid-cols-2 gap-8 mt-8">
<div>

### Development
- **Testing**: Vitest, Playwright (e2e)
- **CI/CD**: GitHub Actions — lint, test, build, deploy
- **Type Safety**: TypeScript across frontend & backend
- **Version Control**: Git, clean PRs, code reviews

</div>
<div>

### Collaboration
- **Documentation**: Technical specs, ADRs, clear READMEs
- **Cross-functional**: Worked with designers, PMs, blockchain researchers
- **Mentorship**: Led junior devs; thorough PR reviews
- **Open Source**: Community contributions, issue triage

</div>
</div>

---
layout: center
---

## Why MAX IV / Why Me

<div class="text-left mt-8 space-y-4">

✓ **Data-centric UIs** — Built tools managing complex datasets (maps, blockchain explorers)

✓ **Internal tools expertise** — Created admin panels, Slack bots, developer tooling

✓ **Domain collaboration** — Worked with blockchain researchers & compliance experts at LACChain/Alastria

✓ **Fast learner** — Picked up SSI, GDPR compliance, and blockchain protocols; eager to learn scientific domains

✓ **Quality focus** — I document decisions, write maintainable code, and leave systems easier to change

</div>

<div class="mt-8 text-sm opacity-75">
Excited to build tools that empower scientists at MAX IV!
</div>

---
layout: center
class: text-center
---

## Thanks!

<div class="mt-8">
  <div class="text-2xl mb-4">Happy to dive deeper into any project or walk through code</div>

  <div class="flex justify-center gap-8 mt-8">
    <a href="https://github.com/onmax" target="_blank" class="text-lg hover:text-blue-400">
      <carbon:logo-github class="inline text-2xl"/> github.com/onmax
    </a>
    <a href="https://onmax.dev" target="_blank" class="text-lg hover:text-blue-400">
      <carbon:link class="inline text-2xl"/> onmax.dev
    </a>
  </div>
</div>

<div class="mt-12 text-sm opacity-50">
  📧 maximogarciamtnez@gmail.com
</div>