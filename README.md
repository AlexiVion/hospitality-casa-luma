# Casa Luma

**Boutique Hotel Direct-Booking Experience — Concept Project**

Casa Luma is a fictional boutique-hotel website created as `DEMO-001` in the VionWorks portfolio system. Its purpose is to demonstrate how a hospitality website can combine premium presentation, room discovery, mobile-first UX, and a credible direct-booking journey without pretending to replace a hotel's PMS, channel manager, or booking engine.

> This is a concept project, not paid client work. The hotel, guest content, room inventory, rates, and commercial scenario are fictional. No real-world conversion uplift, booking volume, revenue impact, or production integration is claimed unless it is later measured and documented.

## Project objective

Design and build a polished hospitality website that helps a prospective guest move from discovery to a direct-booking handoff with minimal friction.

The project demonstrates capability in:

- hospitality website strategy
- conversion-oriented UX
- room discovery and room-detail architecture
- direct-booking flows
- mobile-first responsive design
- modern frontend implementation
- booking-engine integration boundaries
- honest portfolio case-study documentation

## Concept business

Casa Luma is imagined as a small independent boutique hotel in the Sierras de Córdoba, Argentina. The positioning is quiet, design-led, warm, local, and premium without feeling formal or corporate.

The experience is aimed primarily at leisure travelers and couples who may discover the property through Google, Instagram, travel content, referrals, or an OTA, but who should be able to understand the hotel and continue toward a direct reservation from the property's own site.

## Core journey

```text
Discovery
  -> Home
  -> Check availability
  -> Dates + guests
  -> Room options
  -> Room detail
  -> Book direct
  -> External booking-engine handoff in production
```

The demo represents the full UX up to the integration boundary. It does not implement real inventory, payments, PMS synchronization, or channel management.

## Implemented pages

- Home
- Rooms
- Individual room detail
- Experiences
- About
- Contact
- Booking / availability demo
- Booking-engine handoff state
- Not-found state

## Implemented stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Static / deterministic mocked hospitality content
- GitHub Actions production-build verification
- Vercel-ready deployment structure

The implementation intentionally stays simple enough to inspect while keeping the external booking-engine boundary replaceable.

## Booking demo behavior

The booking flow is deterministic so it can be tested and screenshotted reliably.

- date and guest inputs are carried through URL query parameters
- rooms are filtered by guest capacity
- fictional rates are clearly labeled
- arrivals on the 17th intentionally trigger a no-availability state for QA
- `Book direct` ends at an explicit integration-handoff screen rather than faking a payment or reservation

## Documentation

The project was designed before implementation.

- [`docs/BRIEF.md`](docs/BRIEF.md) — business context, scope, non-goals, and success criteria
- [`docs/UX.md`](docs/UX.md) — booking journey, conversion logic, trust, and mobile behavior
- [`docs/VISUAL-DIRECTION.md`](docs/VISUAL-DIRECTION.md) — positioning, typography, color, imagery, and UI language
- [`docs/IMPLEMENTATION.md`](docs/IMPLEMENTATION.md) — technical architecture, routes, components, data, and integration boundaries
- [`docs/CASE-STUDY.md`](docs/CASE-STUDY.md) — portfolio narrative, finalized only with verifiable evidence

## Project status

`building`

The first functional site version is implemented and passes the repository's production build workflow. Remaining work before `qa` / `published` includes visual review in-browser, responsive QA, deployment, screenshot production, and final case-study evidence.

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Registry

Permanent project ID: **DEMO-001**

Canonical metadata: [VionWorks Portfolio Registry](https://github.com/VionWorks/portfolio-registry/blob/main/projects/DEMO-001.yaml)
