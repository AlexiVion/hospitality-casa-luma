# Casa Luma — UX Strategy

## UX objective

The experience should help a potential guest move from curiosity to booking intent with as little ambiguity as possible while preserving the premium, calm character of the brand.

The website must not behave like a decorative brochure. Every major page should either help the visitor understand the property, compare accommodation, reduce booking uncertainty, or continue toward a direct reservation.

## Primary journey

```text
Google / Instagram / referral / OTA discovery
    -> Home
    -> Check availability
    -> Dates + guests
    -> Available room options
    -> Room detail
    -> Book direct
    -> External booking engine in a real deployment
```

A visitor should also be able to enter through a room page or content page and still find a clear path into the same booking flow.

## Homepage journey

Recommended order:

1. **Hero** — establish place and positioning immediately
2. **Availability bar** — dates, guests, primary CTA
3. **Short property proposition** — what makes the stay distinct
4. **Featured rooms** — quick comparison and entry into room details
5. **Why book direct** — practical reasons, not vague marketing language
6. **Experience / location preview** — what the guest can do and where the property sits
7. **Practical confidence** — contact, arrival context, policies, support
8. **Final booking CTA**

The homepage should avoid forcing users through a long brand story before they can see rooms or start booking.

## Key user questions

### Orientation

- Is this a hotel, rental, retreat, or something else?
- Where is it?
- What level of property is it?
- Is it suitable for the kind of trip I am planning?

### Evaluation

- What room types are available?
- How many guests can each room accommodate?
- What differentiates the room categories?
- What amenities matter?
- What does the property / surrounding area offer?

### Decision

- Can I check availability quickly?
- Is booking direct credible and safe?
- What happens after I click the CTA?
- Can I ask a question before booking?

The information architecture should answer these in roughly that order.

## Primary conversion points

### `Check availability`

Primary CTA across the site.

Placement:

- main navigation
- hero / booking bar
- after room overview
- room detail pages
- mobile sticky action on high-intent pages
- final CTA sections

The label should stay consistent rather than alternating between many synonyms.

### `Book direct`

Used after the user has selected or evaluated a room. This CTA represents movement toward the booking-engine handoff.

### Secondary actions

- `View rooms`
- `Explore the stay`
- `Contact Casa Luma`
- `Get directions`

Secondary CTAs must not visually compete with the primary booking action.

## Booking flow

### Step 1 — Search criteria

Inputs:

- check-in
- check-out
- guests

The demo should validate obvious errors such as checkout before check-in or missing dates.

### Step 2 — Room options

The visitor sees plausible room options based on mocked availability.

Each result should show:

- room name
- key image
- guest capacity
- essential room differentiators
- indicative / sample nightly price presentation
- `View room`
- `Select room` or `Book direct`

Any price used in the concept must be clearly part of fictional demo content.

### Step 3 — Room detail

High-intent information:

- image gallery
- short positioning sentence
- capacity
- bed configuration
- room size if used
- core amenities
- cancellation / booking note
- selected dates and guest count retained where practical
- strong booking CTA

### Step 4 — Handoff

The demo ends with a clearly designed handoff state explaining that, in production, the user would continue into the property's connected booking engine.

The demo must never imitate a completed real payment or reservation confirmation.

## Room discovery

The `/rooms` page should support comparison rather than simply showing large photographs.

Recommended comparison dimensions:

- guest capacity
- view / orientation
- size or spatial character
- standout amenity
- relative category position

Avoid an overly dense comparison table on mobile. Cards should contain enough information to make the next click meaningful.

## Trust strategy

Because this is a concept project, trust should be created without fake social proof.

Use:

- clear location context
- transparent room information
- practical policies / booking notes
- direct contact options
- clear description of the booking process
- secure-looking, predictable UI patterns
- consistent pricing presentation
- credible photography and copy

Do **not** use fabricated real reviews, review counts, press logos, awards, or “trusted by” claims.

## Direct-booking benefits

The interface can demonstrate a direct-booking proposition using fictional benefits clearly framed as part of the concept, for example:

- direct support from the property
- flexible assistance with changes
- local pre-arrival recommendations
- a small direct-booking welcome amenity

The UX goal is to make “book direct” feel understandable and valuable, not aggressive.

## Navigation

Desktop navigation:

```text
Casa Luma logo
Rooms
Experiences
About
Contact
[Check availability]
```

Mobile:

- compact header
- accessible menu trigger
- primary booking action remains easy to reach
- menu should not hide critical booking access several interactions deep

## Mobile-first priorities

Most discovery and comparison traffic may begin on mobile, so the mobile version is not a reduced afterthought.

Priorities:

1. fast visual orientation
2. immediately reachable availability action
3. thumb-friendly controls
4. date / guest inputs with adequate hit targets
5. room cards that communicate differences before the user opens them
6. images that preserve impact without blocking useful content
7. no hover-dependent interactions
8. sticky booking CTA only where it adds clarity rather than covering content

## Desktop behavior

Desktop can use more editorial layouts and larger photography, but should not become visually impressive at the expense of conversion clarity.

Use additional width to improve:

- room comparison
- image composition
- booking-bar visibility
- paired storytelling / practical content

Do not introduce different information architecture merely for desktop.

## Contact and support

The site should make it possible to ask a question without derailing the booking journey.

Planned channels in the demo:

- email contact
- phone / WhatsApp-style contact CTA as a conceptual option
- contact form
- map / directions link

No real personal or client contact information should be used in the public demo unless intentionally provided for the project.

## Empty, error, and validation states

The demo should include intentional UX for:

- missing dates
- invalid date order
- no mocked rooms available for a selected scenario
- contact-form validation
- failed / unavailable external booking handoff simulation if implemented

A polished portfolio project should demonstrate these states rather than only the ideal path.

## Accessibility behavior

- booking controls usable by keyboard
- focus moves predictably in dialogs / menus
- menu closes with Escape where appropriate
- no important information communicated by color alone
- touch targets sized appropriately
- forms use real labels, not placeholder-only labels
- motion respects `prefers-reduced-motion`

## Integration boundary

Production ownership would be divided as follows:

### Website owns

- discovery
- property storytelling
- room presentation
- dates / guest intent capture where supported
- booking CTA and handoff
- marketing analytics events

### External hospitality system owns

- authoritative inventory
- rates
- restrictions
- reservation record
- guest payment
- reservation modification / cancellation
- PMS synchronization
- channel synchronization

The demo represents the first layer and the transition into the second; it does not fake the second layer.

## UX acceptance checklist

Before implementation is considered complete, verify:

- a new visitor can identify the primary CTA without explanation
- every major page offers a sensible next action
- dates / guests can be retained through the mocked flow
- room differences are visible before opening details
- mobile booking does not require precision tapping
- no fake trust signals are used
- the external booking-engine boundary is obvious in documentation and code
