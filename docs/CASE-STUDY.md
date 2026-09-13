# Casa Luma — Portfolio Case Study

> **Status:** Draft. This document will be finalized only after the demo is implemented, deployed, and verified.

## Context

Casa Luma is a fictional boutique-hotel concept created as `DEMO-001` in the VionWorks portfolio system.

It is not paid client work and does not represent a real hotel. The purpose is to demonstrate how an independent hospitality property could translate a direct-booking business objective into a polished web experience and implementation architecture.

## Problem

Independent hotels often need their first-party website to do more than present photographs. A prospective guest must be able to understand the property, compare room options, build confidence, and move toward a direct reservation without being forced back into an OTA discovery flow.

The design problem for this concept is therefore:

**How can a small boutique hotel create a premium first-party digital experience that supports room discovery and direct-booking intent while remaining compatible with existing hospitality infrastructure?**

## Proposed solution

Casa Luma is designed around a short booking-oriented journey:

```text
Discovery
  -> property orientation
  -> availability intent
  -> room comparison
  -> room detail
  -> direct-booking handoff
```

The website owns the marketing and decision experience. In a real deployment, authoritative inventory, rates, reservations, payments, PMS data, and channel synchronization would remain with the hotel's connected booking systems.

## What this project is intended to demonstrate

- hospitality-oriented information architecture
- mobile-first booking UX
- premium but conversion-aware visual design
- room listing and room-detail architecture
- date / guest booking intent state
- deterministic mocked availability
- explicit booking-engine adapter boundary
- responsive frontend implementation
- accessibility and performance discipline
- honest technical / commercial documentation

## Planned deliverables

- responsive multi-page hotel website
- room overview
- individual room pages
- availability / booking demo
- experiences / location content
- about and contact pages
- direct-booking value proposition
- mobile booking behavior
- public deployment
- desktop and mobile portfolio screenshots

## Role

Planned role coverage:

- business framing
- UX strategy
- information architecture
- visual direction
- frontend development
- booking-flow modeling
- integration architecture
- responsive QA
- accessibility QA
- deployment
- case-study documentation

The final version should distinguish clearly between work actually completed and anything left conceptual.

## Technology

Planned:

- Next.js
- TypeScript
- Tailwind CSS
- Vercel

The final case study should list only technologies materially used in the finished implementation.

## Evidence

To be added after implementation:

- live demo URL
- repository
- desktop screenshots
- mobile screenshots
- room flow screenshots
- booking-flow screenshots
- measured performance / accessibility evidence where available

## Outcome

No conversion, revenue, booking, or client-impact metric is claimed for this concept project.

The valid outcome statement, once finished, should describe what the project **demonstrates**, for example:

> A complete, deployable hospitality web concept showing how a boutique hotel can structure room discovery and a direct-booking journey while keeping PMS, inventory, and payment responsibilities behind a clear integration boundary.

Any stronger outcome must be backed by verifiable evidence.
