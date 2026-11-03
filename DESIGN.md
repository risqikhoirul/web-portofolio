---
version: alpha
name: Style
description: |
  Style UI presents a premium, cutting-edge design language rooted in deep
  cosmic minimalism. The visual identity centers on a pristine white-on-black
  contrast scheme punctuated by carefully restrained accent colors and
  elaborate, gradient-rich hero imagery. The aesthetic is deliberately stark and
  unfussy—infinite black canvases interrupted only by pure white typography and
  subtle interactive states. The hero features a spectacular gold and white
  wormhole visual, establishing a sense of boundless possibility and advanced
  technology. This is a design system built for modern developers who demand
  both visual sophistication and functional clarity; every element serves
  purpose, nothing decorates without intention.
source:
  url: "https://style.ai.id/"
  pagesAnalyzed: 1
  extractedAt: 2026-11-03
  tokensMeasured: true
colors:
  primary: "#FFFFFF"
  canvas: "#000000"
  on-primary: "#222222"
  ink: "#FFFFFF"
  accent-1: "#4ADE80"
  accent-2: "#18181B"
  accent-3: "#22C55E"
  neutral-1: "#71717A"
  neutral-2: "#A1A1AA"
  neutral-3: "#0F0F10"
typography:
  display-xl:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 68px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -1.7px
  display-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 60px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -2.1px
  heading:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: -0.17px
  body-xl:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  body-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 15.2px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: -0.23px
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 13.2px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body-sm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  body-xs:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 12.8px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0.13px
  body-xs-2:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 12.4px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.12px
  nav:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 13.2px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.13px
rounded:
  none: 0px
  xs: 6px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 28px
  xxl: 32px
  xxxl: 40px
  section: 44px
  band: 48px
borderWidths:
  thin: 1px
shadows:
  sm: "rgba(255, 255, 255, 0.08) 0px 1px 0px 0px inset"
  md: "rgba(0, 0, 0, 0.4) 0px 4px 16px 0px"
  lg: "rgba(0, 0, 0, 0.25) 0px 4px 16px 0px"
  xl: "rgba(255, 255, 255, 0.22) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.6) 0px 12px 28px -6px"
elevationStrategy: progressive
themes:
  derived: light # the other theme is the site's measured palette
  light:
    bg: "#FBFBFB"
    surface: "#F1F1F1"
    surfaceRaised: "#E9E9E9"
    text: "#1D1D1D"
    textMuted: "#707070"
    border: "#D8D8D8"
    accent: "#707070"
    accentFg: "#FFFFFF"
    focusRing: "#8F8F8F"
    elevation: shadow
  dark:
    bg: "#000000"
    surface: "#000000"
    surfaceRaised: "#141414"
    text: "#FFFFFF"
    textMuted: "#A6A6A6"
    border: "#1F1F1F"
    accent: "#FFFFFF"
    accentFg: "#0B0B0C"
    focusRing: "#FFFFFF"
    elevation: "border+surface"
components:
  button-filled:
    typography: "{typography.body-xs}"
    textColor: "{colors.ink}"
    border: "1px solid rgba(255, 255, 255, 0.12)"
    height: 37.8125px
    padding: "8.32px 21.6px 8.32px 21.6px"
    boxShadow: "rgba(255, 255, 255, 0.22) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.6) 0px 12px 28px -6px"
    rounded: "{rounded.full}"
    backgroundColor: "rgba(15, 15, 16, 0.75)"
  button-primary:
    textColor: "{colors.canvas}"
    border: "1px solid {colors.primary}"
    height: 32px
    padding: "0px 15.2px 0px 15.2px"
    fontSize: 12.4px
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 16px 0px"
    fontFamily: "Plus Jakarta Sans"
    fontWeight: 600
    lineHeight: 1
    rounded: "{rounded.full}"
    backgroundColor: "{colors.primary}"
  card:
    typography: "{typography.body-xl}"
    textColor: "oklch(0.975 0.002 286)"
  navigation:
    typography: "{typography.body-xl}"
    textColor: "oklch(0.975 0.002 286)"
    height: 19.7969px
  footer:
    typography: "{typography.body-sm}"
    textColor: "{colors.neutral-1}"
    border: "1px solid rgba(255, 255, 255, 0.08)"
    padding: "40px 32px 60px 32px"
  link:
    typography: "{typography.body-xs-2}"
    textColor: "rgba(255, 255, 255, 0.72)"
    border: "1px solid rgba(255, 255, 255, 0.12)"
    padding: "5.6px 13.6px 5.6px 13.6px"
    rounded: "{rounded.full}"
    backgroundColor: "rgba(255, 255, 255, 0.04)"
  link-lg:
    textColor: "{colors.ink}"
    padding: "0px 13.6px 0px 13.6px"
    fontSize: 12.4px
    boxShadow: "rgba(0, 0, 0, 0.4) 0px 4px 16px 0px"
    fontFamily: "Plus Jakarta Sans"
    fontWeight: 600
    lineHeight: 1
    rounded: "{rounded.full}"
    backgroundColor: "{colors.canvas}"
states:
  other-focus:
    target: other
    state: focus
    outline: none
  nav-hover:
    target: nav
    state: hover
    boxShadow: "rgba(255, 255, 255, 0.4) 0px 1px 1px 0px inset, rgba(0, 0, 0, 0.5) 0px 10px 36px"
    borderColor: "rgba(255, 255, 255, 0.25)"
  button-hover:
    target: button
    state: hover
    boxShadow: "rgba(0, 0, 0, 0.5) 0px 6px 20px"
    transform: "translateY(-1px)"
    borderColor: transparent
    backgroundColor: "{colors.accent-2}"
  link-hover:
    target: link
    state: hover
    textColor: "{colors.ink}"
    transform: "translateY(-1px)"
    borderColor: "rgba(255, 255, 255, 0.25)"
    backgroundColor: "rgba(255, 255, 255, 0.09)"
  other-hover:
    target: other
    state: hover
    backgroundColor: "rgba(255, 255, 255, 0.24)"
  card-hover:
    target: card
    state: hover
    boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.6) 0px 12px 28px -4px"
    transform: "translateY(-3px)"
breakpoints:
  - width: 375
    containerWidth: 335
    gridColumns: 4
    navLinksVisible: 0
    menuToggleVisible: false
    headingPx: 32
    bodyPx: 16
    sectionPaddingX: 20
  - width: 768
    containerWidth: 728
    gridColumns: 4
    navLinksVisible: 0
    menuToggleVisible: false
    headingPx: 40
    bodyPx: 16
    sectionPaddingX: 20
  - width: 1024
    containerWidth: 960
    gridColumns: 4
    navLinksVisible: 3
    menuToggleVisible: false
    headingPx: 51
    bodyPx: 16
    sectionPaddingX: 32
  - width: 1280
    containerWidth: 1216
    gridColumns: 4
    navLinksVisible: 3
    menuToggleVisible: false
    headingPx: 60
    bodyPx: 16
    sectionPaddingX: 32
  - width: 1440
    containerWidth: 1360
    gridColumns: 4
    navLinksVisible: 3
    menuToggleVisible: false
    headingPx: 60
    bodyPx: 16
    sectionPaddingX: 32
coverage:
  statesFound: 41
  gradientsFound: 0
  rolesUnassigned: 6
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: true
  semanticRampDeclared: false
---

# Design System Inspired by Style UI

## 1. Visual Theme & Atmosphere

Style UI presents a premium, cutting-edge design language rooted in deep cosmic minimalism. The visual identity centers on a pristine white-on-black contrast scheme punctuated by carefully restrained accent colors and elaborate, gradient-rich hero imagery. The aesthetic is deliberately stark and unfussy—infinite black canvases interrupted only by pure white typography and subtle interactive states. The hero features a spectacular gold and white wormhole visual, establishing a sense of boundless possibility and advanced technology. This is a design system built for modern developers who demand both visual sophistication and functional clarity; every element serves purpose, nothing decorates without intention.

**Key Characteristics:**

- Pure monochromatic foundation (pure black canvas, pure white text)
- Pill-shaped interactive elements (fully rounded buttons, badges, links)
- Restrained accent palette (greens and near-black tones used sparingly)
- Inset highlight shadows on light-background interactive states
- Micro-interactions: subtle elevation lifts on hover, tiny translateY shifts
- Premium typeface (Plus Jakarta Sans) with tight tracking on display sizes
- High contrast accessibility; no gradients or decorative meshes

## 2. Color Palette & Roles

### Primary

- **Primary** (`#FFFFFF`): Pure white used as primary CTA fill, brand accent, active state indicators, and all heading and primary text. Provides maximum contrast against the black canvas.

### Interactive

- **On Primary** (`#222222`): Label and text color on brand surfaces; used for dark-mode text on white backgrounds.

### Accent Colors (Decorative)

- **Accent 1** (`#4ADE80`): Unassigned; no measured role. Decorative green accent available for supplementary visual flourishes.
- **Accent 2** (`#18181B`): Unassigned; no measured role. Near-black decorative tone for depth layering.
- **Accent 3** (`#22C55E`): Unassigned; no measured role. Bright green accent available for secondary flourishes.

### Neutral Scale

- **Canvas** (`#000000`): Default page background; deep black creates the system's core visual foundation.
- **Neutral 1** (`#71717A`): Mid-gray used for secondary text and subtle UI elements; sits above the black canvas.
- **Neutral 2** (`#A1A1AA`): Lighter gray for tertiary text and disabled states.
- **Neutral 3** (`#0F0F10`): Near-black neutral for layering and depth.

### Surface & Borders

- **Border Subtle** (`rgba(255, 255, 255, 0.12)`): Ultra-light white border for high-contrast button and input outlines on dark backgrounds.
- **Border Accent** (`rgba(255, 255, 255, 0.25)`): Brighter white border used on interactive hover states and accent surfaces.
- **Surface Overlay** (`rgba(255, 255, 255, 0.08)`): Faint white semi-transparent surface for nested backgrounds and link containers.
- **Surface Interactive** (`rgba(255, 255, 255, 0.18)`): Slightly more opaque white overlay for interactive button backgrounds.

## 3. Typography Rules

### Font Family

**Primary:** Plus Jakarta Sans (served from Google Fonts: https://fonts.googleapis.com/)
**Fallback Stack:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

### Hierarchy

| Role       | Font              | Size   | Weight | Line Height   | Letter Spacing | Notes                                                             |
| ---------- | ----------------- | ------ | ------ | ------------- | -------------- | ----------------------------------------------------------------- |
| Display LG | Plus Jakarta Sans | 60px   | 600    | 1.08 (64.8px) | -2.1px         | Hero heading, max visual impact                                   |
| Display XL | Plus Jakarta Sans | 68px   | 500    | 1.25 (85px)   | -1.7px         | Large hero display text; generous line height despite compression |
| Heading    | Plus Jakarta Sans | 17px   | 600    | 1.5 (25.5px)  | -0.17px        | Section subheadings and subsection titles                         |
| Body LG    | Plus Jakarta Sans | 15.2px | 700    | 1.5 (22.8px)  | -0.23px        | Emphasized body copy and call-to-action text                      |
| Body XL    | Plus Jakarta Sans | 16px   | 400    | 1.5 (24px)    | 0px            | Primary link text and large body paragraphs                       |
| Body MD    | Plus Jakarta Sans | 13.2px | 400    | 1.6 (21.1px)  | 0px            | Standard body text; tighter line-height variant                   |
| Body SM    | Plus Jakarta Sans | 13px   | 400    | 1.5 (19.5px)  | 0px            | Small body copy, captions                                         |
| Body XS    | Plus Jakarta Sans | 12.8px | 600    | 1.5 (19.2px)  | 0.13px         | Emphasized small text, badge labels                               |
| Body XS-2  | Plus Jakarta Sans | 12.4px | 400    | 1.5 (18.6px)  | 0.12px         | Smallest body variant, fine print                                 |
| Navigation | Plus Jakarta Sans | 13.2px | 500    | 1.5 (19.8px)  | 0.13px         | Navigation links, secondary UI text                               |

### Principles

- **Negative tracking on display sizes** is a defining trait: Display LG measures -2.1px letter-spacing, Display XL measures -1.7px. This tight compression creates visual impact and luxury.
- **Body text remains neutral** with 0px letter-spacing, ensuring readability.
- **Navigation and small text** receive +0.12 to +0.13px letter-spacing to compensate for reduced size.
- **Weights range from 400 to 700**, never lighter; this system has no 300-weight text.
- **Line-height ratios** stay between 1.08 and 1.6, with display sizes more compressed (1.08–1.25) and body more generous (1.5–1.6).

## 4. Component Stylings

### Buttons

**Primary Button**

- **Font:** Plus Jakarta Sans, 12.4px, weight 600
- **Color:** `#000000` (black text)
- **Background:** `#FFFFFF` (pure white)
- **Padding:** `0px 15.2px` (horizontal), `0px` (vertical, relying on line-height)
- **Height:** 32px
- **Border:** `1px solid #FFFFFF`
- **Border Radius:** `{rounded.full}` (9999px — fully pill-shaped)
- **Box Shadow:** `rgba(0, 0, 0, 0.25) 0px 4px 16px 0px` (lg elevation)
- **Line Height:** 12.4px
- **Hover State:** Lift via `box-shadow: rgba(0, 0, 0, 0.35) 0px 6px 20px`, subtle upward translate `transform: translateY(-1px)`, background remains `#FFFFFF`

**Filled Button (Dark)**

- **Font:** Plus Jakarta Sans, 12.8px, weight 600
- **Color:** `#FFFFFF` (white text)
- **Background:** `rgba(15, 15, 16, 0.75)` (near-black translucent)
- **Padding:** `8.32px 21.6px`
- **Height:** 37.8125px
- **Border:** `1px solid rgba(255, 255, 255, 0.12)` (subtle white edge)
- **Border Radius:** `{rounded.full}` (9999px)
- **Box Shadow:** `rgba(255, 255, 255, 0.22) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.6) 0px 12px 28px -6px` (xl elevation with inset highlight)
- **Line Height:** 19.2px
- **Hover State:** `transform: translateY(-1px)`, `box-shadow: rgba(255, 255, 255, 0.32) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.7) 0px 14px 32px -6px`

### Cards

**Default Card**

- **Background:** `rgba(0, 0, 0, 0)` (transparent; inherits canvas)
- **Border:** None (`0px`)
- **Border Radius:** `{rounded.none}` (0px — sharp edges)
- **Padding:** `0px` (no internal spacing; card is a container)
- **Box Shadow:** None (flat)
- **Hover State:** `box-shadow: rgba(255, 255, 255, 0.15) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.6) 0px 12px 28px -4px`, `transform: translateY(-3px)` (subtle lift with inset border glow)

### Inputs & Forms

**Link (Small Variant)**

- **Font:** Plus Jakarta Sans, 12.4px, weight 400
- **Color:** `rgba(255, 255, 255, 0.72)` (muted white text)
- **Background:** `rgba(255, 255, 255, 0.04)` (barely-there white overlay)
- **Padding:** `5.6px 13.6px`
- **Height:** 31.7969px
- **Border:** `1px solid rgba(255, 255, 255, 0.12)` (subtle highlight)
- **Border Radius:** `{rounded.full}` (9999px — pill-shaped)
- **Box Shadow:** None (flat)
- **Line Height:** 18.6px
- **Hover State:** `color: rgb(255, 255, 255)` (brighten text), `background-color: rgba(255, 255, 255, 0.08)` (slightly more opaque), `box-shadow: none`, `border-color: rgba(255, 255, 255, 0.22)` (brighten border)

**Link (Large Dark Variant)**

- **Font:** Plus Jakarta Sans, 12.4px, weight 600
- **Color:** `#FFFFFF` (pure white)
- **Background:** `#000000` (pure black)
- **Padding:** `0px 13.6px`
- **Height:** 32px
- **Border:** `1px solid rgba(0, 0, 0, 0)` (no border)
- **Border Radius:** `{rounded.full}` (9999px)
- **Box Shadow:** `rgba(0, 0, 0, 0.4) 0px 4px 16px 0px` (md elevation)
- **Line Height:** 12.4px
- **Hover State:** `box-shadow: rgba(0, 0, 0, 0.5) 0px 6px 20px`, `background-color: rgb(24, 24, 27)` (slight lift in dark), `transform: translateY(-1px)`

### Navigation

**Nav Link (Default)**

- **Font:** Plus Jakarta Sans, 13.2px, weight 500
- **Color:** `oklch(0.975 0.002 286)` (near-white)
- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Border:** None (`0px`)
- **Border Radius:** `{rounded.none}` (0px)
- **Padding:** `0px` (no spacing; inherits from container)
- **Box Shadow:** None (flat)
- **Hover State:** `color: rgb(255, 255, 255)` (brighten to pure white), `box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 1px 0px inset, rgba(0, 0, 0, 0.5) 0px 10px 36px` (inset highlight + depth), `border-color: rgba(255, 255, 255, 0.25)`, `background-color: rgba(255, 255, 255, 0.18)` (subtle white overlay), `opacity: 0.88`

### Footer

**Footer Container**

- **Font:** Plus Jakarta Sans, 13px, weight 400
- **Color:** `#71717A` (mid-gray neutral text)
- **Background:** `rgba(0, 0, 0, 0)` (transparent; inherits canvas)
- **Border:** `1px solid rgba(255, 255, 255, 0.08)` (hairline subtle border)
- **Border Radius:** `{rounded.none}` (0px — sharp edge)
- **Padding:** `40px 32px 60px 32px` (`{spacing.xxxl}` top, `{spacing.xxl}` horizontal, `60px` bottom)
- **Line Height:** 19.5px

## 5. Layout Principles

### Spacing System

Style UI uses a proportional 4px base unit, scaling to **10 spacing tokens**:

- `{spacing.xxs}` = 4px (minimal gaps, very tight spacing)
- `{spacing.xs}` = 8px (small component internal spacing)
- `{spacing.sm}` = 12px (compact padding)
- `{spacing.md}` = 16px (standard padding and margins)
- `{spacing.lg}` = 20px (comfortable spacing between elements)
- `{spacing.xl}` = 28px (generous spacing for visual separation)
- `{spacing.xxl}` = 32px (large section padding)
- `{spacing.xxxl}` = 40px (deep rhythm, footer/header padding)
- `{spacing.section}` = 44px (section break spacing)
- `{spacing.band}` = 48px (major band separation)

**Usage context:**

- Button internal padding uses `{spacing.xs}` to `{spacing.md}` ranges.
- Card and container padding ranges from `{spacing.xxl}` (32px) to `{spacing.band}` (48px).
- Section vertical rhythm typically uses `{spacing.section}` (44px) or `{spacing.band}` (48px).

### Grid & Container

- **Desktop (1280px+):** Content column width = 1216px–1360px; 4-column grid system
- **Tablet (768px):** Content column = 728px; 4-column grid system maintained
- **Mobile (375px):** Content column = 335px; 4-column grid (at mobile scale)
- **Max container width:** 1360px (observed at 1440px viewport)
- **Horizontal section padding:**
  - Mobile (375px–768px): `{spacing.lg}` (20px)
  - Desktop (1024px+): `{spacing.xxl}` (32px)

### Whitespace Philosophy

Style UI employs **generous, purposeful whitespace** that emphasizes content over decoration. The black canvas provides infinite negative space, and the system relies on this emptiness rather than layering. Padding is abundant but never wastes horizontal space; vertical rhythm uses large section breaks to segment content into digestible chunks. Interactive elements float in this void, anchored by subtle shadows and inset highlights rather than visual clutter.

### Border Radius Scale

- `{rounded.none}` = 0px — Cards, containers, footer, overlays (sharp, architectural aesthetic)
- `{rounded.xs}` = 6px — Secondary elements (6px appears in extracted data but no specific role measured)
- `{rounded.full}` = 9999px — All interactive elements (buttons, badges, links, pill-shaped pill-shaped interaction targets)

### Border Widths

- **Thin** = 1px — Primary border width for buttons, links, cards, and footer dividers. Used consistently across interactive and structural elements.

## 6. Depth & Elevation

Style UI uses a **progressive shadow ladder** to communicate depth. Shadows are deeply dark (often using `rgba(0, 0, 0, 0.4)` to `rgba(0, 0, 0, 0.7)`), while inset highlights use bright white (`rgba(255, 255, 255, 0.08)` to `rgba(255, 255, 255, 0.32)`) to sculpt form against the black canvas.

| Level       | Treatment                                                                                | Use                                                           |
| ----------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Flat (0)    | No shadow                                                                                | Cards at rest, navigation links, static text                  |
| Small (sm)  | `rgba(255, 255, 255, 0.08) 0px 1px 0px 0px inset`                                        | Inset highlight only; adds beveled edge                       |
| Medium (md) | `rgba(0, 0, 0, 0.4) 0px 4px 16px 0px`                                                    | Primary button hover, link default state                      |
| Large (lg)  | `rgba(0, 0, 0, 0.25) 0px 4px 16px 0px`                                                   | Primary button default elevation                              |
| XL (xl)     | `rgba(255, 255, 255, 0.22) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.6) 0px 12px 28px -6px` | Filled button default; combines inset highlight + deep shadow |

**Shadow philosophy:** Shadows are sparse and intentional. The system never uses multiple stacked shadows except for inset + outset pairs (bright highlight + dark depth). This creates a "chiseled" effect—elements appear carved from the black canvas rather than floating loosely above it.

### Opacity Levels

- **10% opacity** (`0.10`) — Extremely subtle overlays and borders; nearly imperceptible against black canvas
- **81% opacity** (`0.81`) — Near-opaque surfaces; used for translucent button backgrounds to retain depth impression

These two opacity values suggest a binary approach: either barely-there (cosmetic border) or nearly-solid (interactive surface).

### Z-index / Layering

- **Dropdown/Overlay**: z-index 10 and z-index 50 (measured as two distinct values; dropdowns and overlays layer at these two tiers to manage stacking conflicts)

## 7. Do's and Don'ts

### Do

- **Use pure white text on black canvas** for maximum readability and brand consistency. This is the dominant text color.
- **Apply inset highlights to interactive elements** (buttons, cards on hover). Combine `rgba(255, 255, 255, 0.22) inset` with a dark shadow to create the brand's signature sculptural feel.
- **Pill-shape all interactive targets** (buttons, badges, small links). Use `border-radius: 9999px` to ensure a cohesive, modern tactile aesthetic.
- **Use micro-interactions conservatively**: `translateY(-1px)` to `-3px` on hover, never excessive. Pair with shadow deepening for subtle elevation.
- **Maintain sharp edges on containers and cards** (`border-radius: 0px`). Reserve rounded corners exclusively for interactive elements.
- **Respect the 4px base unit** for all spacing. Scale consistently using the 10-token system.
- **Layer shadows intentionally**: never stack more than two shadows (inset highlight + outset depth). The system relies on this restraint.

### Don't

- **Avoid light gray text on black**. The system uses pure white for primary text and mid-gray (`#71717A`) only for secondary/disabled states.
- **Do not add rounded corners to cards, containers, or sections.** Reserve `border-radius: 9999px` for buttons, badges, and links only.
- **Never use gradients or color blends.** Style UI is monochromatic and flat; decorative meshes and gradients break the minimalist intent.
- **Avoid multiple colored accents on a single component.** The green and near-black accent colors are unassigned; they do not have defined UI roles.
- **Do not invent semantic states (error/warning/success colors).** The site declares none; use neutrals or white for all interactive feedback.
- **Avoid shadow stacking beyond the inset+outset pair.** Multiple stacked shadows feel dated and contradict the clean aesthetic.
- **Do not use opacity values other than the measured 10% and 81%.** The system has no intermediate opacity ladder.
- **Never center-align body text.** Maintain left alignment for legibility and hierarchy.

## 8. Responsive Behavior

### Breakpoints

| Breakpoint    | Viewport Width | Content Width | Grid Columns | Nav Links Visible | Key Changes                                                                         |
| ------------- | -------------- | ------------- | ------------ | ----------------- | ----------------------------------------------------------------------------------- |
| Mobile        | 375px          | 335px         | 4            | 0                 | Smallest heading (32px), section padding `{spacing.lg}` (20px)                      |
| Tablet        | 768px          | 728px         | 4            | 0                 | Heading grows to 40px, layout remains 4-column                                      |
| Desktop       | 1024px         | 960px         | 4            | 3                 | Heading expands to 51px, nav links emerge, section padding → `{spacing.xxl}` (32px) |
| Large Desktop | 1280px         | 1216px        | 4            | 3                 | Heading stabilizes at 60px, content width maxes at 1216px                           |
| XL Desktop    | 1440px         | 1360px        | 4            | 3                 | Maximum content width 1360px; all typography locked to final sizes                  |

**Derived logic:**

- Heading scales responsively: 32px → 40px → 51px → 60px–68px, tracking the display role sizes.
- Body text remains 16px across all breakpoints (consistency for readability).
- Section padding shifts from 20px to 32px at the 1024px breakpoint.
- Navigation link visibility toggles at 1024px (the collapse point where menu UI might shift, though a menu toggle was not observed).
- 4-column grid is maintained across all sizes; no multi-column layouts at mobile.

### Touch Targets

- **Minimum interactive height:** 32px (buttons and links)
- **Minimum interactive width:** Varies by component; buttons measure ~77px (primary) to ~178px (filled variant)
- **Padding around clickable regions:** `{spacing.xs}` to `{spacing.md}` (8px–16px) ensures comfortable spacing

### Collapsing Strategy

- **Horizontal:** Section padding shrinks from `{spacing.xxl}` (32px) to `{spacing.lg}` (20px) below 1024px.
- **Typography:** Display sizes compress proportionally; largest heading at 375px is 32px, scaling to 60px at 1280px+.
- **Grid:** 4-column system is maintained throughout; no collapse to single column observed.
- **Navigation:** Nav link count drops to 0 at mobile (375px–768px), suggesting a hidden menu or sidebar; link count rises to 3 at 1024px+.

## 9. Agent Prompt Guide

### Quick Color Reference

When implementing UI, use these roles:

- **Primary CTA / Brand Accent**: White (`#FFFFFF` — `{colors.primary}`)
- **Background / Canvas**: Pure Black (`#000000` — `{colors.canvas}`)
- **Heading & Primary Text**: White (`#FFFFFF` — `{colors.primary}`)
- **Secondary Text**: Mid-Gray (`#71717A` — `{colors.neutral-1}`)
- **Subtle Borders & Overlays**: White at 4–18% opacity (`rgba(255, 255, 255, 0.04)` to `rgba(255, 255, 255, 0.18)`)
- **Button Border (Light)**: White at 12% opacity (`rgba(255, 255, 255, 0.12)`)
- **Interactive Hover Overlay**: White at 18% opacity (`rgba(255, 255, 255, 0.18)`)
- **Decorative Accents** (unassigned): Green (`#4ADE80`, `#22C55E`) and near-black (`#18181B`)

### Iteration Guide

1. **Start with a black canvas** (`#000000`) and white typography (`#FFFFFF`). This is the non-negotiable foundation.

2. **All interactive elements are pill-shaped** (`border-radius: 9999px`): buttons, badges, small links. Containers and cards remain sharp (`border-radius: 0px`).

3. **Combine inset and outset shadows on interactive states.** Bright inset highlight (`rgba(255, 255, 255, 0.22)` inset) + dark outset shadow (`rgba(0, 0, 0, 0.6)` or darker) creates the signature sculpted look.

4. **Typography hierarchy is built on Plus Jakarta Sans at fixed sizes and weights.** No font-size interpolation; use the 10 measured roles exactly as specified in Section 3.

5. **Hover states apply micro-transforms only** (`translateY(-1px)` to `-3px`) and deepen shadows. Text color may brighten from muted white to pure white, but never changes hue.

6. **Spacing always uses the 4px-based system** (4, 8, 12, 16, 20, 28, 32, 40, 44, 48px). Never invent intermediate values.

7. **No semantic color system exists** (no error red, success green, warning yellow). Use white, black, and neutrals for all feedback.

8. **Borders are always 1px** and use subtle white overlays. Never use thick or colored borders.

9. **Responsive design scales typography and padding, not layout.** The 4-column grid persists at all breakpoints; collapse happens via padding reduction and heading size scaling.

10. **Opacity is binary**: 10% for cosmetic borders/overlays, 81% for translucent surfaces. No intermediate opacity values.

## 10. Known Gaps

- **No interaction states beyond hover.** The extraction observed `:hover`, `:focus`, and `:focus-visible` on some elements, but the site may declare additional active, disabled, or focus-ring states not captured in the sample. Implementation should assume these where standard UI patterns demand them (e.g., pressed buttons, disabled inputs).

- **No error/success/warning/info semantic colors.** The site does not declare or use a status color ramp. All feedback must rely on white, black, and the neutral scale.

- **Accent colors have no measured UI roles.** Green (`#4ADE80`, `#22C55E`) and near-black (`#18181B`) appear in the token extract but have no assigned semantic function. They are available for future use or decoration but should not be assumed to carry meaning.

- **No dark/light mode observed.** The extraction captured one theme (dark canvas, white text). If light-mode variants exist, they were not visited.

- **Border-radius value "6px" (`{rounded.xs}`) was extracted but no specific component role was measured** using it. Only `{rounded.none}` (0px) and `{rounded.full}` (9999px) have confirmed component assignments.

- **Z-index values appear twice** (dropdown: 10 and dropdown: 50), suggesting a potential two-tier layering system, but the specific use cases (which elements use 10 vs. 50) were not fully disambiguated.

- **Gradient, mesh, or animated background data were not extracted.** The hero wormhole imagery is likely a background image or video, not a CSS gradient declared in stylesheets.

- **Surfaces behind authentication (e.g., member-only pages, form submissions) were not analyzed.** The extraction covers the public homepage only.

- **No CSS custom properties or design tokens in the original HTML/CSS** were directly read; all values were computed from applied styles. Variable names (e.g., `--border-accent`) may exist in the source but their definitions were inferred from usage.

- **Only 1 page analyzed** (the homepage). Interior pages, documentation, or component library pages may follow different patterns.
