# Casa Luma — Project Brief

## Project classification

- **Project ID:** DEMO-001
- **Type:** Business Demo / concept project
- **Domain:** Hospitality
- **Primary use:** Portfolio, Upwork, sales demo, capability proof
- **Client status:** Fictional. This is not paid client work.

## Business context

Casa Luma is a fictional independent boutique hotel located in the Sierras de Córdoba, Argentina. It is imagined as a small, design-led property with a limited number of rooms, a strong sense of place, and an audience that values calm, architecture, nature, privacy, and local experiences.

The commercial scenario is representative of a common hospitality problem: an independent property may receive visibility from Google, Instagram, referrals, travel content, and OTAs, but still lacks a strong first-party website experience that helps potential guests understand the property and continue toward a direct reservation.

The site should therefore do more than look attractive. It should reduce uncertainty, present room options clearly, communicate why booking direct is valuable, and create a credible handoff to the hotel's existing booking infrastructure.

## Primary problem

**Potential guests can discover the hotel, but the hotel's own website does not yet provide a clear, premium, low-friction path from interest to a direct-booking decision.**

## Target users

### Primary user

Leisure travelers and couples, approximately 28–55, planning a short stay in the Córdoba hills. They are comfortable researching on mobile, comparing options visually, and moving between Google, Instagram, OTAs, and hotel websites before booking.

Typical motivations:

- weekend escape
- romantic stay
- slow travel
- nature and design
- remote-work break
- short regional trip

### Secondary user

International or out-of-province visitors researching Córdoba who need more context about the property, location, room differences, direct-booking benefits, and practical details before committing.

## User needs

Before taking action, the visitor needs to understand:

1. What kind of hotel is this?
2. Where is it and what does the stay feel like?
3. What rooms are available and how are they different?
4. What does each room cost or how is pricing presented?
5. What is included?
6. Why book directly rather than return to an OTA?
7. What are the cancellation / change expectations?
8. What happens after pressing “Book direct”?
9. How can the hotel be contacted if something is unclear?

## Business objective

The primary action is:

**Move qualified visitors toward a direct-booking handoff.**

The website is not intended to replace hotel operations software. In a real deployment, the final booking action would connect to the property's existing booking engine, PMS-connected reservation flow, or another approved booking provider.

Secondary objectives:

- increase confidence in the property before booking
- make room comparison easier
- reduce dependency on OTA presentation for brand storytelling
- create a professional first-party destination for ads, social traffic, and Google searches
- make contact and location information easy to find

## Concept property

Casa Luma is imagined as a small boutique property with **10 rooms across three room categories**.

Proposed categories:

- **Luma Garden Room** — entry category, calm garden orientation
- **Sierra Suite** — larger room with sitting area and mountain views
- **Casa Suite** — premium category with private terrace and expanded amenities

These categories are fictional and exist only to create a realistic room-discovery and booking journey.

## Scope

### Pages

- `/` — Home
- `/rooms` — Room overview and comparison
- `/rooms/[slug]` — Individual room detail
- `/experiences` — Property, area, and stay experiences
- `/about` — Brand / property story
- `/contact` — Contact, location, practical information
- `/booking` — Demo availability and room-selection flow

### Core flows

- explore the property from the homepage
- initiate “Check availability” from prominent CTAs
- select dates and guest count
- view room options
- open room details
- continue toward “Book direct”
- represent the handoff point to an external booking engine

### Core interface elements

- responsive navigation
- hero and positioning statement
- booking / availability bar
- room cards
- room-detail gallery and amenity summary
- direct-booking benefit module
- experience / location sections
- contact module
- mobile sticky booking action where appropriate

### Portfolio deliverables

- production-quality responsive demo
- public GitHub repository
- public deployment
- desktop and mobile screenshots
- concise portfolio case study
- clear documentation of integration boundaries

## Content strategy

The site copy should feel concise, specific, and premium without becoming poetic to the point of obscuring practical information.

The content hierarchy should prioritize:

1. sense of place
2. rooms
3. booking action
4. direct-booking confidence
5. practical information

The project must not use fake real-world testimonials, fake press mentions, fake awards, or invented performance claims.

## Direct-booking proposition

The concept may communicate benefits such as:

- direct contact with the property
- clear change / cancellation support
- local assistance before arrival
- selected direct-booking amenity or welcome benefit

Any such benefit is fictional demo content and must not be represented as an existing commercial policy outside the concept.

## Non-goals

This project intentionally does **not** implement:

- a real PMS
- a real channel manager
- live room inventory
- dynamic pricing
- real payment processing
- guest authentication
- booking modification / cancellation backend
- OTA synchronization
- hotel operations dashboards
- production CRM
- production analytics data
- real multilingual content in v1

It may be architected so those systems can be integrated later without rebuilding the core UI.

## Integration boundary

For the demo, room availability and booking data are mocked or static.

In a real client project, the website would stop owning responsibility at the booking-engine boundary:

```text
Marketing website
    -> booking intent
    -> dates + guests
    -> room / rate selection
    -> external or embedded booking engine
    -> PMS / channel manager / payment systems
```

The site should make that boundary explicit in both code and documentation.

## Success criteria

The project is successful as a portfolio demo if it can truthfully demonstrate the following:

### Business clarity

- a first-time visitor understands what Casa Luma is within seconds
- the primary booking action is obvious
- room categories are easy to compare
- the direct-booking path is understandable without explanation

### Mobile usability

- the main journey works cleanly at 320 px and above
- primary actions remain reachable with one hand
- booking controls do not create horizontal overflow
- room imagery and details remain legible without excessive scrolling friction

### Accessibility

- semantic page structure
- keyboard-accessible navigation and controls
- visible focus states
- form labels and understandable errors
- WCAG AA-oriented contrast choices
- meaningful image alt text where content is not decorative

### Performance

Targets, not pre-claimed results:

- responsive optimized images
- minimal client-side JavaScript where practical
- no layout shift caused by unsized media
- target Core Web Vitals in the “good” range on the deployed demo

### Portfolio credibility

- code is inspectable and reasonably structured
- no fake client history or fabricated metrics
- integration boundaries are documented
- the finished demo looks credible enough to show in an Upwork proposal or direct-sales conversation

## Definition of done

Casa Luma can move from `planning` to `building` when:

- this brief is accepted as the scope baseline
- the UX journey is documented
- visual direction is defined
- implementation architecture is defined
- no major unanswered product decision blocks the first frontend build
