# DESIGN.md

# Grandir Design System

Version: 1.0

---

# Philosophy

Grandir is a premium commerce platform for local businesses.

The interface should communicate:

- trust
- craftsmanship
- simplicity
- warmth
- quality

Users should feel like they are browsing an artisan bakery or boutique café rather than using enterprise software.

The design should be timeless rather than trendy.

When unsure between two designs, prefer the simpler one.

---

# Design Principles

Every screen should prioritize:

- generous whitespace
- readable typography
- calm color palette
- subtle interactions
- consistency
- accessibility

Avoid visual clutter.

Avoid decoration without purpose.

---

# Visual Personality

Grandir should feel:

- Modern
- Premium
- Warm
- Minimal
- Elegant
- Inviting

Avoid:

- Corporate dashboard appearance
- Neon colors
- Heavy gradients
- Excessive shadows
- Overly playful styling
- Glassmorphism
- Skeuomorphism

---

# Color Palette

## Background

Primary

White

```text
#FFFFFF
```

Secondary

```text
#F8FAFC
```

(Tailwind: slate-50)

---

## Text

Primary

```text
#0F172A
```

(Tailwind: slate-900)

Secondary

```text
#475569
```

(Tailwind: slate-600)

Muted

```text
#94A3B8
```

(Tailwind: slate-400)

---

## Primary Accent

Warm Amber

```text
amber-600
```

Hover

```text
amber-700
```

Use only for:

- Primary buttons
- Important actions
- Active highlights

Do not overuse.

---

## Borders

```text
slate-200
```

---

## Shadows

Prefer subtle shadows only.

Example:

```text
shadow-sm
```

Avoid:

```text
shadow-2xl
```

unless specifically required.

---

# Typography

Use clean modern sans-serif typography.

Primary font:

Inter

Fallback:

system-ui

Do not mix multiple font families.

---

## Heading Hierarchy

H1

Large, bold, confident.

H2

Section titles.

H3

Cards and subsections.

Maintain a clear hierarchy.

---

# Spacing

Whitespace is a feature.

Prefer:

- px-6
- px-8
- py-12
- py-16

over cramped layouts.

Maximum content width:

```text
max-w-6xl
```

Center all major sections.

---

# Border Radius

Buttons

```text
rounded-lg
```

Cards

```text
rounded-xl
```

Feature containers

```text
rounded-2xl
```

Avoid sharp corners.

---

# Buttons

## Primary

Background

amber-600

Hover

amber-700

Text

white

Rounded

rounded-lg

Transition

200ms ease

---

## Secondary

White background

Slate border

Slate text

Hover:

Light slate background

---

# Cards

Cards should have:

- white background
- rounded-xl
- subtle border
- shadow-sm

Avoid heavy elevation.

---

# Navigation

The navigation bar represents the product identity.

It should:

- remain sticky
- use semantic HTML
- have generous spacing
- use subtle borders
- avoid excessive decoration

The brand should always appear on the left.

Primary CTA should appear on the right.

---

# Forms

Inputs should:

- have rounded corners
- clear focus states
- comfortable padding
- consistent spacing

Validation should be simple and unobtrusive.

---

# Images

Product images should:

- dominate the card
- maintain consistent aspect ratio
- avoid distortion

Use high-quality photography.

---

# Icons

Use icons sparingly.

Icons should support content rather than replace text.

---

# Motion

Animations should be subtle.

Use transitions around:

150–250ms

Avoid dramatic movement.

---

# Responsive Design

Mobile-first.

Layouts should gracefully expand.

Avoid horizontal scrolling.

Navigation should eventually collapse into a mobile menu.

---

# Accessibility

Every interactive element must:

- be keyboard accessible
- have visible focus states
- maintain sufficient contrast
- use semantic HTML

Accessibility is a requirement, not an enhancement.

---

# Implementation Rules

All UI work should follow this document.

When implementing new components:

- prefer composition over duplication
- reuse spacing
- reuse typography
- reuse button styles
- maintain visual consistency

No component should introduce a conflicting design language.

---

# Future Design Tokens

Future milestones may introduce:

- Tailwind theme tokens
- Shared button component
- Shared typography utilities
- Shared spacing utilities
- Dark mode

Until then, follow the principles defined in this document.
