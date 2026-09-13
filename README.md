# VionWorks Business Demo Template

Canonical starting point for public concept projects whose primary purpose is to demonstrate that a concrete business problem can be translated into a credible digital experience and implementation.

## Use this template for

- hospitality / direct-booking websites
- local-service lead generation sites
- restaurant ordering or reservation concepts
- real-estate discovery experiences
- e-commerce concepts
- industry-specific landing pages and web applications

This family is about **commercial problem solving**, not technical novelty.

## Required first steps

1. Replace every `REPLACE-ME` value in `PROJECT.yaml`.
2. Register the project in `VionWorks/portfolio-registry` and allocate its permanent `DEMO-###` ID.
3. Complete `docs/BRIEF.md` before implementation.
4. Define the user journey in `docs/UX.md`.
5. Establish the visual direction before polishing UI.
6. Keep implementation boundaries explicit, especially when a real deployment would connect to third-party business systems.
7. Finish with an honest `docs/CASE-STUDY.md` suitable for Upwork, GitHub, or a portfolio site.

## Documentation structure

```text
docs/
├── BRIEF.md
├── UX.md
├── VISUAL-DIRECTION.md
├── IMPLEMENTATION.md
└── CASE-STUDY.md
```

Application folders such as `app/`, `components/`, `public/`, `src/`, or framework-specific directories should be added by the project rather than hard-coded into the template.

## Portfolio standard

A Business Demo should make it possible for a prospective client to understand, quickly:

- what kind of business this is for
- what commercial problem is being solved
- what the primary user journey is
- what was actually designed and built
- what would connect to existing business infrastructure in production
- what the live experience looks and feels like

Concept projects must be labeled honestly. Do not invent clients, testimonials, revenue, conversion lifts, or production integrations that did not happen.

## Registry

Canonical taxonomy and metadata rules live in [VionWorks/portfolio-registry](https://github.com/VionWorks/portfolio-registry).
