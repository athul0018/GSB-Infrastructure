## 1. Purpose
This document refines the Phase 3 design system for `GSB INFRASTRUCTURE` using the approved visual direction and current dummy-content model.

- Goal: create a design system that is stable enough for wireframing and component implementation
- Constraint: branding details remain partially provisional until final assets arrive
- Principle: prioritize trust, clarity, whitespace, and technical credibility

## 2. Aesthetic Direction
### 2.1 Core Mood
- Refined industrial minimalism
- Quiet confidence
- Clean engineering precision
- Premium but restrained

### 2.2 Differentiation
- More editorial and architectural than typical contractor websites
- Strong structure, measured typography, and subtle geometry instead of flashy gradients
- Calm technical polish rather than heavy visual marketing language

## 3. Design Tokens
### 3.1 Color Tokens
| Token | Role | Suggested Value |
|-------|------|-----------------|
| `--color-ink-900` | Hero background, footer, major headings | `#0E1A24` |
| `--color-ink-700` | Dark surfaces, secondary dark sections | `#203240` |
| `--color-cloud-50` | Main background | `#F7F5F1` |
| `--color-mist-100` | Alternate section background | `#E8EEF0` |
| `--color-steel-500` | Body copy | `#60707C` |
| `--color-steel-300` | Borders and dividers | `#C8D0D4` |
| `--color-aqua-500` | Primary accent, links, interactive highlight | `#1E8C89` |
| `--color-aqua-600` | Hover/active accent | `#176C69` |
| `--color-sand-300` | Metric highlight or subdued badge background | `#C7B7A2` |
| `--color-white` | Cards and inverted text surfaces | `#FFFFFF` |

### 3.2 Semantic Usage Rules
- Use `ink` for high-trust anchor zones such as hero, header accents, and footer
- Use `cloud` as the dominant page background
- Use `mist` only to create rhythm between large sections
- Use `aqua` consistently for actionable emphasis
- Use `sand` sparingly for premium secondary detail, not for primary calls to action

### 3.3 Typography Tokens
| Token | Usage | Suggested Style |
|-------|-------|-----------------|
| `--font-display` | Hero and key section headings | `Cormorant Garamond`, serif |
| `--font-body` | Body text and UI | `Manrope`, sans-serif |
| `--font-mono` | Small data or labels if needed | `IBM Plex Mono`, monospace |

### 3.4 Type Scale
| Token | Desktop | Mobile | Usage |
|-------|---------|--------|-------|
| `--text-display` | `64px` | `42px` | Hero headline |
| `--text-h1` | `48px` | `34px` | Page title |
| `--text-h2` | `36px` | `28px` | Section title |
| `--text-h3` | `24px` | `20px` | Card heading |
| `--text-body-lg` | `18px` | `17px` | Lead paragraph |
| `--text-body` | `16px` | `16px` | Standard body |
| `--text-sm` | `14px` | `14px` | Metadata and labels |
| `--text-xs` | `12px` | `12px` | Captions |

### 3.5 Spacing Tokens
| Token | Value |
|-------|-------|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-8` | `32px` |
| `--space-10` | `40px` |
| `--space-12` | `48px` |
| `--space-16` | `64px` |
| `--space-20` | `80px` |
| `--space-24` | `96px` |

### 3.6 Radius Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `8px` | Inputs, badges |
| `--radius-md` | `14px` | Buttons, cards |
| `--radius-lg` | `20px` | Image containers, large surfaces |

### 3.7 Shadow Tokens
| Token | Value |
|-------|-------|
| `--shadow-soft` | `0 10px 30px rgba(14, 26, 36, 0.06)` |
| `--shadow-card` | `0 12px 40px rgba(14, 26, 36, 0.08)` |
| `--shadow-focus` | `0 0 0 4px rgba(30, 140, 137, 0.18)` |

## 4. Layout System
### 4.1 Container Rules
- Max content width: `1200px`
- Large text sections should use narrower readable widths around `720px`
- Major sections should have vertical padding between `80px` and `120px` on desktop
- Mobile sections should retain breathing room with `56px` to `72px` vertical padding

### 4.2 Grid Rules
- Use 12 columns on desktop
- Use 6 columns on tablet
- Use 1 column or stacked 2-column rhythm on mobile
- Prefer balanced asymmetry rather than arbitrary broken layouts

### 4.3 Section Rhythm
- Dark-light-dark alternation should be intentional, not repetitive
- Follow proof-heavy sections with calm informational sections
- Keep no more than two card-dense sections back-to-back

## 5. Component Rules
### 5.1 Buttons
- Primary button: dark fill or aqua fill depending on background
- Secondary button: outline with visible border and hover fill
- Tertiary button: text link with arrow icon
- Use clear action verbs only

### 5.2 Cards
- Cards should emphasize spacing and alignment over decoration
- Use soft border, subtle shadow, and restrained hover elevation
- All cards require visible titles, short summaries, and optional icon or tag

### 5.3 Section Titles
- Structure: eyebrow label, title, one supporting paragraph
- Avoid long intros; keep supporting paragraph under 2 lines on desktop where possible

### 5.4 Forms
- Labels stay visible above fields
- Use generous field height and clear focus states
- Validation messaging should be inline and concise

### 5.5 Data/Proof Blocks
- Metrics should use compact captions and strong numeric hierarchy
- Certification badges should avoid implying legal authenticity if still dummy data

## 6. Motion System
### 6.1 Motion Principles
- Motion should reinforce hierarchy, not entertain
- Use subtle fade-and-rise entrances
- Avoid parallax, oversized scaling, or constant ambient motion

### 6.2 Recommended Motion Patterns
- Hero content stagger reveal
- Section fade-up on scroll
- Card hover lift of `2px` to `4px`
- CTA arrow nudge on hover

### 6.3 Accessibility
- Respect reduced motion preferences
- Do not rely on motion to convey meaning

## 7. Responsive Rules
- Collapse complex card grids to clean stacked layouts
- Preserve headline contrast and spacing before preserving decorative layout choices
- Ensure CTA buttons remain easy to tap and visually distinct
- Keep forms one-column on mobile

## 8. Content Styling Rules
- Use sentence case for body and most headings
- Reserve all caps for tiny labels only
- Prefer short paragraphs and compact bullet groups
- Keep technical copy factual and low-hype

## 9. Placeholder Content Guidelines
- Placeholder claims must stay generic and non-legal
- Metrics should be clearly replaceable content tokens
- Avoid exact client names or certifications unless verified

## 10. Phase 3 Output
- Design tokens are now defined
- Typography and layout standards are ready for wireframes
- Component visual rules are stable enough for the implementation plan
