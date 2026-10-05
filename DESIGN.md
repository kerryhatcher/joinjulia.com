---
name: Julia Adele Callahan — The Playbook
description: A bold civic playbook with angular athletic lettering, ruled reading surfaces, and direct actions.
colors:
  blue: "#103ca6"
  navy: "#102644"
  lime: "#ddf888"
  white: "#fff"
  pale: "#f2f6fc"
  border-soft: "#bdcbe2"
  border-action: "#9db97e"
typography:
  display:
    fontFamily: "'Julia Playbook', sans-serif"
    fontSize: "clamp(52px, 9.44vw, 142px)"
    fontWeight: 700
    lineHeight: 0.865
    letterSpacing: "-.025em"
  candidate:
    fontFamily: "'Julia Playbook', sans-serif"
    fontSize: "clamp(24px, 4.32vw, 65px)"
    fontWeight: 700
    lineHeight: 0.87
    letterSpacing: "-.015em"
  headline:
    fontFamily: "'Julia Playbook', sans-serif"
    fontSize: "clamp(36px, 3.4vw, 51px)"
    fontWeight: 700
    lineHeight: 1.07
    letterSpacing: "-.015em"
  title:
    fontFamily: "'Julia Playbook', sans-serif"
    fontSize: "clamp(28px, 3vw, 44px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-.015em"
  body:
    fontFamily: "'Barlow', sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  story-body:
    fontFamily: "'Barlow', sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.7
  priority-title:
    fontFamily: "'Barlow', sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.3
  publication:
    fontFamily: "'Barlow', sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.4
  display-mobile:
    fontFamily: "'Julia Playbook', sans-serif"
    fontSize: "clamp(56px, 16vw, 105px)"
    fontWeight: 700
    lineHeight: 0.95
  candidate-mobile:
    fontFamily: "'Julia Playbook', sans-serif"
    fontSize: "clamp(25px, 6.7vw, 45px)"
    fontWeight: 700
    lineHeight: 0.87
  office:
    fontFamily: "'Barlow', sans-serif"
    fontSize: "clamp(18px, 2.1vw, 32px)"
    fontWeight: 600
    lineHeight: 1.35
  close-headline:
    fontFamily: "'Julia Playbook', sans-serif"
    fontSize: "clamp(34px, 4.3vw, 64px)"
    fontWeight: 700
    lineHeight: 1.1
  close-headline-mobile:
    fontFamily: "'Julia Playbook', sans-serif"
    fontSize: "clamp(32px, 8vw, 54px)"
    fontWeight: 700
    lineHeight: 1.1
  play-number:
    fontFamily: "'Julia Playbook', sans-serif"
    fontSize: "62px"
    fontWeight: 700
    lineHeight: 1
  play-number-mobile:
    fontFamily: "'Julia Playbook', sans-serif"
    fontSize: "42px"
    fontWeight: 700
    lineHeight: 1
  story-index-mobile:
    fontFamily: "'Julia Playbook', sans-serif"
    fontSize: "29px"
    fontWeight: 700
    lineHeight: 1.07
  navigation:
    fontFamily: "'Barlow', sans-serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.6
  navigation-small:
    fontFamily: "'Barlow', sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1.6
  wordmark-mobile:
    fontFamily: "'Barlow', sans-serif"
    fontSize: "23px"
    fontWeight: 700
    lineHeight: 1.6
  action-mobile:
    fontFamily: "'Barlow', sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.2
  action-small:
    fontFamily: "'Barlow', sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1.2
  close-copy:
    fontFamily: "'Barlow', sans-serif"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.5
  reading-title:
    fontFamily: "'Barlow', sans-serif"
    fontSize: "25px"
    fontWeight: 600
    lineHeight: 1.35
  caption:
    fontFamily: "'Barlow', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  square: "0px"
spacing:
  gutter: "clamp(20px, 3.72vw, 64px)"
  small: "8px"
  inline: "16px"
  group: "24px"
  passage-gap: "28px"
  section-mobile: "44px"
  section-end: "48px"
  section-desktop: "80px"
components:
  button-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.navy}"
    rounded: "{rounded.square}"
    padding: "10px 30px"
  button-primary-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
  priority-row:
    textColor: "{colors.navy}"
    typography: "{typography.priority-title}"
  story-strip:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
  publication-label:
    textColor: "{colors.navy}"
    typography: "{typography.publication}"
---

# Design System: Julia Adele Callahan

## Overview

**Creative North Star: "The Playbook"**

A civic offensive playbook carries the user-confirmed football theme through angular athletic lettering, advancing route marks, numbered plays, and decisive lime actions. Royal blue establishes the campaign's voice; open white and pale reading surfaces let longer stories breathe.

The visual system is direct and flat. Rules organize content into continuous passages rather than floating cards. Display lettering supplies energy while Barlow keeps navigation, controls, and prose readable. The selected homepage composition remains in `.impeccable/surfaces/src-pages-index-astro.md`; the political story extension is recorded in `.impeccable/surfaces/src-pages-my-journey-into-politics-astro.md`. This document records the reusable implementation.

**Key Characteristics:**

- Angular uppercase display lettering with readable sentence-case prose.
- Royal blue campaign bands, lime actions, and navy reading text.
- Continuous ruled rows and open story passages.
- Native disclosures and restrained directional motion.

## Colors

A strong blue-and-lime campaign palette sits beside quiet white and pale blue reading surfaces; normative values are in the frontmatter.

### Primary

- **Campaign Blue** (`blue`): campaign bands, play numbers, hover text, and focus on light backgrounds.

### Secondary

- **Offensive Lime** (`lime`): primary actions, text selection, and focus against blue. The football graphic uses its own authored ink colors.

### Neutral

- **Reading Navy** (`navy`): body text, headings on light surfaces, and structural rules.
- **White** (`white`): ordinary page surfaces, campaign lettering, and action hover fill.
- **Story Pale Blue** (`pale`): the continuous story surface.
- **Soft Rule** (`border-soft`): story and publication separators.
- **Action Edge** (`border-action`): the thin primary-action border.

**The Campaign Contrast Rule.** Use white text on campaign blue and navy text on lime or light reading surfaces. Focus switches to lime on blue bands.

## Typography

**Display Font:** Julia Playbook, with sans-serif fallback. **Body Font:** Barlow, with sans-serif fallback.

Julia Playbook is a renamed sharp-corner derivative of Jamie Wilson's Norwester. `assets/fonts/build-playbook-font.mjs` replaces curve runs with straight chamfers while retaining glyph metrics and Unicode mappings. The local font, attribution, and SIL OFL are in `public/fonts/`; the served regular master is declared at weight 400, with the display rules requesting 700. Barlow's local package provides real 400, 600, and 700 weights.

### Hierarchy

- **Display:** the compact two-line campaign headline; uppercase, with a desktop horizontal fit of 1.1. Mobile removes that transform and uses `clamp(56px, 16vw, 105px)` with line-height .95; the smallest breakpoint uses 52px.
- **Candidate:** the name has its own fluid scale and desktop horizontal fit of 1.14. Mobile removes the fit and uses `clamp(25px, 6.7vw, 45px)`; the smallest breakpoint uses 21px.
- **Headline:** section headings; mobile uses 36px, falling to 29px at the smallest breakpoint. Long reading headings use a smaller fluid scale and natural wrapping. The campaign close uses its own larger fluid heading.
- **Title:** story headings; balanced uppercase text, normally limited to 15ch, expanding to 19ch on mobile with a 32px size.
- **Body / story body:** sentence-case reading at the frontmatter values, with passages limited to 65ch. Story prose becomes 18px on mobile.
- **Priority title / publication:** bold issue names and smaller semibold source names. Mobile issue names use 22px, falling to 20px; publication names use 15px. Navigation, links, and actions also use Barlow rather than the display face.

**The Two Voices Rule.** Julia Playbook carries headings and play numbers; Barlow carries explanations and interaction labels.

## Layout

Centered shells stop at 1680px and use the fluid gutter token. Desktop layouts use unequal columns: hero `1fr .94fr` with a 5% gap, story passages `1fr 1.25fr` with a 9% gap, and campaign close `1.25fr 1fr` with a 9% gap. Content is continuous across each band; individual rows have separators instead of card enclosures.

At 1100px and below, issue columns and gaps tighten and actions become narrower. At 760px and below, hero, stories, publication links, and campaign close stack into one column. The diagram stays contained, capped at 520px wide with its natural aspect ratio on mobile. The story index keeps the portrait beside a vertical list of links; publication names sit above their titles. The footer uses two columns with a separate back-to-top row. At 360px and below, type and issue-column widths reduce again. Above 1680px, the header aligns to the centered content.

Issue summaries use desktop columns of `130px 1fr 28px`, a 46px gap, and a 73px minimum height; mobile uses `64px 1fr 24px`, an 18px gap, and an 86px minimum height. Reading sections use more vertical space than the compact playbook. Reused spacing values are recorded in the frontmatter; component-specific measurements stay in the stylesheet.

**The Continuous Field Rule.** Use shared section gutters, full-width bands, and ruled rows to connect content. Stack the reading order naturally when columns no longer fit.

## Elevation & Depth

There are no decorative shadows or gradients. Color bands, whitespace, and thin rules separate regions. Hover changes fill, text, underline, or arrow position rather than lifting a surface. Arrow movement uses the authored ease curve over 260ms; action fill changes over 180ms. Reduced-motion mode removes transitions and smooth scrolling.

## Shapes

Actions and reading surfaces have square corners. One-pixel rules define rows; the number column has a vertical divider. Inline arrows use square stroke caps and miter joins, matching the angular display face. Football circles, crosses, and curved routes are native parts of the chosen visual world and remain appropriate within its graphics.

## Components

### Buttons

Primary actions are rectangular lime links with navy text, a thin action-edge border, and an inline arrow. Desktop hero actions have a 60px minimum height, a 380px minimum width, and 28px bold text; the narrower desktop breakpoint removes the minimum width and reduces text and padding. Mobile uses a 56px minimum height and 21px text, falling to 19px at the smallest breakpoint. Closing-band actions use a narrower variant. Hover changes the fill to white and advances the arrow by 4px.

Keyboard focus uses a 3px outline with a 5px offset, blue on light surfaces and lime on campaign bands. These are anchors with real destinations, including same-page sections and existing social profiles.

### Navigation

The compact white header pairs a bold Barlow domain wordmark with two sentence-case links. Links underline on hover; wordmarks, navigation, footer links, and inline reading links have a 44px minimum touch height at every breakpoint. Footer social links follow the same type family and inline-arrow language. A focus-revealed skip link precedes navigation.

### Numbered priority disclosures

Native `details` and `summary` form an exclusive group named `playbook`. Large blue two-digit numbers, navy issue titles, vertical number rules, and a right arrow create the repeated signature. The open arrow rotates 90 degrees; hover changes the title to blue. The expanded reading panel aligns with the title column and works without client JavaScript.

The section states upfront that full priority statements are forthcoming. The hero action points to Julia’s story while priority statements remain unfinished. These are current content states, not permanent design rules.

### Story strips and passages

The blue story index holds a portrait, heading, and two directional anchor links above pale two-column passages with soft separators. On mobile, the links stack beside the portrait and passage headings sit above their prose. Story text preserves readable measure and natural document flow; design documentation does not establish approval of campaign facts.

### Political story page

`/my-journey-into-politics/` extends the same identity with a royal-blue title band, the homepage play diagram beside the title, and a white reading surface. Its route-local heading uses `clamp(44px, 6vw, 96px)` at 1.05 line height, becoming `clamp(36px, 8vw, 56px)` on mobile. A three-column section index sits above paired chapters within a 1440px shell. Each pale chapter has 32px inset padding, a 42% photo column and 48px column gap. Photos alternate left, right, then left. At 760px and below, the index and chapters stack, keeping prose before each photo. Prose retains the 65ch measure and story-body scale. The account of denied care begins the narrative, followed by party rebuilding and the next generation. The homepage presents a shorter political teaser linking to this full account before the business story.

### Reading links

Publication labels, larger article descriptions, and inline arrows form ruled external-link rows. Hover underlines the description and advances the arrow. On mobile, publication and description stack beside a single spanning arrow. Ordinary inline text links remain underlined and use smaller arrows.

### Football graphic

`public/images/offensive-playbook.webp` is a generated transparent route illustration derived from the selected Playbook reference, with prompt provenance alongside it. It is decorative, rendered with empty alt text, intrinsic dimensions, and contained scaling. Astro generates 360, 540, 720, 1080, and 1469px WebP variants at quality 85; responsive sizes follow the mobile width cap and desktop column. The hero graphic loads eagerly. Its field marks remain on the blue surface. The concept screenshot itself is not a shipping page asset.

## Do's and Don'ts

### Do:

- **Do** keep angular uppercase display type paired with Barlow prose and controls.
- **Do** maintain navy-on-light and white-on-blue reading contrast, with visible focus in the appropriate accent.
- **Do** use continuous ruled rows and responsive reading order for related content.
- **Do** preserve native disclosure semantics, real link destinations, and reduced-motion behavior.
- **Do** retain font attribution, licensing, modification source, and generated-asset provenance.

### Don't:

- **Don't** introduce rounded card grids, decorative gradients, or shadow elevation into this flat playbook system.
- **Don't** replace the established angular athletic display with slab-serif or generic system display typography.
- **Don't** treat biography placeholders or forthcoming priority statements as confirmed campaign facts.
- **Don't** use the selected concept screenshot as a production graphic.

Not canonized: lorem ipsum and forthcoming statements are content gaps, not reusable copy; no unresolved visual defect was established by the final scoped finish verdict. Preview-only tonal ramps in the sidecar do not extend the production palette.

## Homepage photography

User-supplied photographs now anchor the campaign: the square headshot introduces My story in a compact royal blue band, beside a white heading and two lime-ruled story links, with an 8px lime baseline. The portrait is 160px wide on desktop and 96px on mobile. The unobstructed route diagram leads the hero’s visual column at full opacity. The homepage politics teaser keeps a vertical speaking photograph in its heading column. The landscape discussion photograph with Sen. Raphael Warnock appears below the party-rebuilding prose on the political story page. Mobile keeps the compact portrait beside the story heading and stacked links, and stacks passage photographs in reading order. Frames stay square-edged, without shadows or masks.

Astro generates responsive WebP sources from the original uploads. The headshot and story photographs load lazily. Intrinsic dimensions and explicit aspect ratios reserve space. The discussion image uses a 3:2 crop at vertical position 37.5% to remove its embedded white bands. Caption text uses Barlow at 16px with 1.5 line height, matching the existing footer’s small reading scale. Captions describe observed scenes and leave unverified event details out. Source filenames, review notes, and fingerprints are recorded in IMAGE_INDEX.md.

The contact introduction uses the uploaded four-person mural photograph beneath its copy, at 85% of the left column width with a 32px gap and an 8px lime baseline. The full square composition preserves all four people; responsive WebP derivatives load lazily. On mobile the introduction and photograph precede the form.
