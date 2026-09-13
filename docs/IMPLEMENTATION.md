# Casa Luma — Implementation Plan

## Implementation principle

The demo should be technically credible without becoming an unnecessary hotel-management platform.

The website owns presentation, discovery, booking intent, and handoff. Authoritative rates, inventory, reservations, payments, PMS data, and channel synchronization belong to external hospitality systems in a real deployment.

## Stack

Planned v1 stack:

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Content:** local typed data in v1
- **Images:** Next.js image optimization where practical
- **Forms:** native / lightweight React form handling; avoid unnecessary form libraries unless complexity justifies them
- **Icons:** one lightweight icon set only if required

No backend database is required for the concept demo.

## Why this stack

The goal is to demonstrate modern frontend capability, route architecture, responsive design, and integration-ready thinking while keeping the repository easy to inspect.

The implementation should avoid adding infrastructure merely to make the project appear more complex.

## Information architecture

```text
/
/rooms
/rooms/[slug]
/experiences
/about
/contact
/booking
```

Optional utility routes can be added only if they materially improve the finished demo.

### `/`

Responsibilities:

- establish positioning and location
- expose primary availability action
- preview room categories
- explain direct-booking value
- preview experiences / location
- answer practical confidence questions
- drive final booking action

### `/rooms`

Responsibilities:

- help users compare room categories
- show capacity and key differentiators
- preserve booking context when available
- route into individual room pages or booking

### `/rooms/[slug]`

Responsibilities:

- detailed imagery
- room-specific practical information
- amenities
- capacity
- indicative pricing presentation if used
- booking CTA

### `/experiences`

Responsibilities:

- communicate the stay beyond the room
- add regional / property context
- keep information specific and scannable

### `/about`

Responsibilities:

- explain the property concept and design ethos
- support brand confidence without becoming a long founder story

### `/contact`

Responsibilities:

- contact channels
- location / directions
- practical questions
- simple validated contact form

### `/booking`

Responsibilities:

- receive / edit dates and guests
- show mocked room availability
- support room selection
- represent booking-engine handoff clearly

## Proposed source structure

The exact structure can adapt to the chosen Next.js version, but the intended separation is:

```text
app/
├── page.tsx
├── rooms/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── experiences/page.tsx
├── about/page.tsx
├── contact/page.tsx
└── booking/page.tsx

components/
├── layout/
├── booking/
├── rooms/
├── content/
└── ui/

data/
├── rooms.ts
├── experiences.ts
└── site.ts

lib/
├── booking.ts
├── validation.ts
└── utils.ts

public/
└── images/
```

Do not create layers simply to imitate enterprise architecture. A small project should remain understandable.

## Component architecture

### Layout components

- `SiteHeader`
- `MobileNavigation`
- `SiteFooter`
- `PageContainer`
- `Section`

### Booking components

- `AvailabilityBar`
- `DateRangeField`
- `GuestSelector`
- `BookingSummary`
- `AvailabilityResults`
- `BookingHandoff`

Booking components should receive state / data through clear interfaces so the mocked data source can later be replaced by a real booking-engine adapter.

### Room components

- `RoomCard`
- `RoomGrid`
- `RoomGallery`
- `RoomAmenities`
- `RoomBookingPanel`

### Content components

- `Hero`
- `DirectBookingBenefits`
- `ExperiencePreview`
- `LocationSection`
- `CTASection`

### UI primitives

Only create primitives that are reused enough to justify abstraction:

- `Button`
- `Input`
- `Select` / popover where necessary
- `Badge`
- `Dialog` if necessary

Avoid building a large internal design-system package for one demo.

## Data model

Room content can start as typed local data.

Illustrative shape:

```ts
type Room = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  capacity: number;
  bed: string;
  size?: string;
  highlights: string[];
  amenities: string[];
  images: string[];
  indicativeRate?: number;
};
```

The demo should use fictional data consistently and avoid accidental references to a real hotel.

## Booking state

The booking flow needs only enough state to demonstrate UX:

```ts
type BookingSearch = {
  checkIn: string | null;
  checkOut: string | null;
  adults: number;
  children: number;
};
```

The search can be represented in URL query parameters where useful, for example:

```text
/booking?checkIn=2026-10-10&checkOut=2026-10-12&adults=2
```

Benefits:

- refresh-safe demo state
- shareable booking states
- room pages can preserve search context
- architecture resembles real booking handoff patterns

## Mock availability

V1 should use deterministic mocked availability rather than random results.

Example approach:

- validate dates and guest count
- filter rooms by capacity
- return fixed fictional rates / availability states
- optionally define one test scenario with no availability to demonstrate the empty state

Do not use random availability because screenshots and QA should remain reproducible.

## Booking-engine adapter boundary

Even though v1 is mocked, structure the handoff so a real integration could later replace it.

Conceptual interface:

```ts
interface BookingEngineAdapter {
  buildBookingUrl(input: {
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    roomCode?: string;
  }): string;
}
```

For the public demo, the adapter can route to an internal handoff screen rather than an external provider.

This demonstrates integration thinking without pretending a real provider is connected.

## Integration model for real client work

Possible real-world pattern:

```text
Casa Luma marketing site
        ↓
booking parameters
        ↓
provider adapter
        ↓
existing booking engine
        ↓
PMS / channel manager / payments
```

Provider-specific implementation belongs behind the adapter boundary and should not leak throughout presentation components.

## Forms

Contact form v1 can be demonstration-only unless a safe submission endpoint is intentionally added.

Required states:

- default
- invalid
- submitting if submission exists
- success if submission exists
- error if submission exists

If no real endpoint is connected, label the demo behavior honestly.

## Images

Requirements:

- explicit dimensions / aspect ratios
- responsive `sizes`
- optimized formats through framework tooling where possible
- meaningful alt text for informative images
- empty alt text for decorative imagery
- avoid downloading a huge image for a small mobile card

## SEO

V1 should demonstrate normal hospitality-site fundamentals:

- page-specific metadata
- sensible titles and descriptions
- canonical structure if deployment URL is stable
- semantic headings
- Open Graph metadata
- room pages indexable in the demo unless there is a reason not to
- structured data can be considered only if it can be implemented accurately for the fictional context

Do not add misleading real-business structured data such as a fabricated street address or fake review aggregate.

## Accessibility targets

Implementation requirements:

- semantic landmarks
- keyboard navigation
- visible focus
- mobile menu focus handling
- correctly associated labels
- accessible buttons rather than clickable divs
- sufficient color contrast
- `aria` only where native semantics are insufficient
- reduced-motion support

## Performance targets

These are implementation targets to verify after deployment, not claims made in advance.

- minimize client components
- reserve image dimensions to prevent layout shift
- lazy-load below-the-fold imagery
- avoid autoplay video in v1 unless justified
- keep third-party scripts close to zero
- target Lighthouse / Core Web Vitals results appropriate for a polished portfolio demo

## Responsive breakpoints

Do not design around named devices. Test continuous behavior, with special attention to:

- ~320 px narrow mobile
- ~390–430 px common mobile range
- tablet widths
- 1280 px desktop
- large desktop without over-stretching readable content

## QA matrix

Before publication test:

### Navigation

- desktop navigation
- mobile menu
- keyboard navigation
- active / hover / focus states

### Booking

- valid dates
- invalid date order
- missing dates
- one guest
- multiple guests
- room capacity filtering
- mocked no-availability state
- booking handoff

### Room pages

- each configured slug resolves
- invalid slug returns normal not-found behavior
- booking context retention
- image loading and responsive crops

### Contact

- field labels
- validation
- mobile keyboard / input types where relevant

### Browser / viewport

- recent Chrome
- recent Firefox
- Safari / WebKit behavior if accessible
- mobile viewport checks

## Deployment

Target deployment:

```text
GitHub main
    -> Vercel production deployment
```

Preview deployments may be used for feature branches / pull requests.

Environment variables should only be introduced when needed. No credentials or secrets belong in the public repository.

## Development sequence

Recommended build order:

1. project scaffold and global design tokens
2. header / footer / layout primitives
3. homepage structure
4. room data and `/rooms`
5. room detail route
6. booking state and availability bar
7. `/booking` flow and handoff boundary
8. experiences / about / contact
9. responsive refinement
10. accessibility pass
11. performance pass
12. screenshots and case study
13. deployment QA

## Explicit anti-goals

Do not build:

- custom PMS
- custom channel manager
- payment processor
- admin dashboard
- elaborate CMS
- authentication
- AI chatbot
- CRM
- server infrastructure unrelated to the portfolio objective

Those additions would increase project size without improving the proof this demo is intended to provide.
