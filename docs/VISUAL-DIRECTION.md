# Casa Luma — Visual Direction

## Positioning

Casa Luma should feel like a small independent boutique hotel with a strong sense of place rather than a generic luxury template.

Target perception:

- calm
- warm
- contemporary
- editorial
- intimate
- design-conscious
- natural
- premium without feeling exclusive or formal

The visual system should support trust and booking clarity first, then atmosphere.

## Creative concept

**Quiet modernism in the Sierras de Córdoba.**

The visual language should combine restrained editorial typography, natural textures, generous whitespace, warm materials, and photography that communicates light, architecture, landscape, and stillness.

It should not look like:

- a tropical resort
- a wedding venue
- a generic beige “luxury” template
- a corporate hotel chain
- an Airbnb clone
- an overly rustic cabin site
- a wellness / spirituality brand

## Reference principles

References should be chosen for qualities, not copied layouts.

Useful qualities to borrow:

- boutique-hotel editorial pacing
- strong full-bleed photography used selectively
- room pages that balance image impact with practical information
- visible booking action without aggressive sales UI
- restrained color systems derived from architecture and landscape
- typography with a distinctive display voice and highly readable supporting text

Avoid collecting references only because they are visually dramatic. Every reference should answer one of these questions:

- How should Casa Luma communicate place?
- How should rooms be compared?
- How visible should booking controls be?
- How do we keep practical information elegant?
- How does mobile preserve the same level of confidence as desktop?

## Art direction

### Keywords

```text
warm stone
late-afternoon light
linen
olive vegetation
raw wood
plaster
quiet water
mountain air
architectural shadows
understated hospitality
```

The art direction should feel regionally plausible for Córdoba without becoming folkloric.

## Typography

Use two primary roles.

### Display / editorial

A serif with personality but high legibility for:

- hero headline
- room names
- editorial section headings
- selected pull quotes / short statements

Candidate direction: **DM Serif Display** or another open-source editorial serif with controlled contrast.

### Body / UI

A neutral modern sans-serif for:

- navigation
- paragraphs
- labels
- forms
- pricing
- buttons
- utilities

Candidate direction: **Manrope** or a similar open-source sans-serif.

### Type behavior

- avoid very small uppercase text as a primary information device
- body copy should prioritize readability over visual delicacy
- reserve display typography for short statements
- use tabular or visually stable numerals for prices and dates if available
- do not use more than two font families in v1

## Color system

The palette should be architectural and landscape-led rather than trend-led.

Proposed semantic direction:

- **Warm chalk** — main page background
- **Soft stone** — secondary surfaces
- **Deep olive / charcoal-olive** — primary text and dark sections
- **Terracotta / muted clay** — restrained accent
- **Warm white** — contrast surface
- **Muted gray-green** — secondary information

Exact color values should be finalized during implementation after contrast testing.

### Contrast rules

- normal body text must target WCAG AA contrast
- decorative accent colors should not be relied on for critical text
- muted text must remain readable on mobile outdoors / lower-quality screens
- primary CTA should be visually obvious without fluorescent or high-saturation colors

## Photography / imagery

Photography carries much of the emotional value, so consistency matters more than quantity.

### Subjects

- exterior architecture integrated with landscape
- rooms with believable scale
- material details: stone, wood, linen, ceramic, plaster
- windows, terraces, shadows, and surrounding hills
- breakfast / small hospitality details used sparingly
- real-feeling local landscape and vegetation

### Lighting

Prefer:

- natural light
- morning or late-afternoon warmth
- soft contrast
- believable interiors

Avoid:

- HDR-looking real-estate photography
- extreme wide-angle distortion
- oversaturated skies
- artificial tropical vegetation
- excessive staged lifestyle imagery
- images where the hotel feels impossible to locate geographically

### Human presence

Human presence can be used minimally to communicate scale or experience, but faces are not necessary. The project should not depend on influencer-style imagery.

## Image composition

Desktop:

- selective full-width or asymmetric crops
- room imagery large enough to feel premium
- allow architectural negative space

Mobile:

- crop intentionally rather than shrinking desktop compositions
- maintain clear focal points
- avoid stacking many full-screen images before useful information appears

## Logo / wordmark

For v1, Casa Luma can use a simple typographic wordmark rather than spending time designing a complex logo system.

Suggested treatment:

```text
CASA LUMA
Boutique Hotel · Sierras de Córdoba
```

The wordmark should feel like a credible property identity but should not become a separate branding project.

## Layout language

### Spacing

- generous vertical rhythm
- tighter spacing inside functional booking modules
- clear visual distinction between editorial and transactional sections

### Grid

- content max-width for readability
- wider image / gallery grid where appropriate
- room cards align consistently
- avoid arbitrary asymmetry that complicates responsive behavior

### Corners

Use modest radii, not pill-shaped everything.

Indicative direction:

- cards: 10–14 px
- controls: 8–12 px
- primary buttons: 8–12 px

These are implementation starting points, not immutable design tokens.

### Borders and shadows

- thin low-contrast borders
- shadows used only where hierarchy requires them
- avoid floating-card visual noise

## Buttons

### Primary

`Check availability` / `Book direct`

- solid high-contrast treatment
- clear hover, focus, active, and disabled states
- generous touch target

### Secondary

- text + arrow or quiet outline treatment
- visually subordinate to booking action

Avoid excessive rounded pill CTAs or more than two button hierarchies on the same screen.

## Forms and booking controls

Booking UI should feel integrated with the hotel brand while remaining obviously functional.

- strong labels
- clear selected states
- visible focus ring
- calendar controls with comfortable targets
- guest selector with simple increment / decrement behavior
- avoid ornamental form styling that reduces clarity

## Room cards

Room cards should communicate enough to compare without opening each page.

Each should include:

- image
- room name
- short differentiator
- capacity
- 2–3 key attributes
- price / indicative rate if shown
- clear next action

Image-heavy cards with no practical information are not acceptable.

## Motion

Motion should be subtle and purposeful.

Use:

- short fade / translate reveals where they improve hierarchy
- restrained image transitions
- smooth menu / dialog opening
- clear interaction feedback

Avoid:

- parallax-heavy scrolling
- long cinematic page transitions
- motion that delays booking actions
- animation on every section

Respect `prefers-reduced-motion`.

## Iconography

Use a single simple line-icon family if icons are needed for amenities or UI cues.

Do not mix icon styles or use decorative icons in place of readable labels.

## Visual QA questions

Before finalizing visual design, ask:

- Does the page still look credible with all marketing copy removed?
- Can a guest find the booking action immediately?
- Does the photography feel geographically coherent?
- Are room differences visible without reading long paragraphs?
- Does mobile feel intentionally designed rather than collapsed desktop?
- Is the visual system distinct enough to avoid looking like a stock hotel template?
