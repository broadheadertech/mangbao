# Mang Guabao — Design System

> **Hawak ang Sarap.** Holding flavor.
> Filipino fusion bao · Manila, Philippines · Est. 2025

A design system for **Mang Guabao**, a homegrown Manila bao concept that takes the bao wrapper (East-Asian street-food technique) and stuffs it with unapologetically Filipino flavors — Sisig, Lechon, Bicol Express, Longganisa, Adobo. Hand-held, social-media-friendly, and built for the *makulit* (mischievous) Filipino voice.

The brand is anchored by **Mang G**, a smiling bao-shaped mascot wearing a salakot (woven Filipino farmer's hat), with a mustache and chopsticks — half-Lolo, half-product, all heart.

---

## Sources

This system was built from the brand identity document attached at the start of the project (11 screen captures, originally at `Guabao/*.jpg`, copied into `source/`). No production codebase, Figma file, or web URL was provided — visuals are reconstructed from those reference screens.

* `source/01.jpg` — Cover / logo lockup
* `source/02.jpg` — Mascot anatomy ("Meet Mang G")
* `source/03.jpg` — Packaging (bao wrapper, drink cup, tray liner)
* `source/04.jpg` — Menu design ("The Menu Feel")
* `source/05.jpg` — Color palette
* `source/06.jpg` — Typography
* `source/07.jpg` — Brand voice (Makulit, Proud, Generous, Aspirational)
* `source/08.jpg` — Mascot symbolism (Salakot, Bao Body, Mustache, Chopsticks)
* `source/09.jpg` — In-store moment (the Instagram neon wall)
* `source/10.jpg` — Voice pillars continued
* `source/11.jpg` — Tray liner / menu transition

---

## What's in this folder

```
README.md                — this file (start here)
SKILL.md                 — Claude Skill manifest, for Code/agents
colors_and_type.css      — design tokens (CSS custom properties)
fonts/                   — webfonts (Bebas Neue, Lilita One, Nunito, Caveat)
assets/                  — logos, mascot, packaging mockups, illustrations
source/                  — original brand-doc screenshots (raw)
preview/                 — Design System tab cards (one HTML per token)
ui_kits/
  marketing-site/        — homepage, menu page, location, mascot lockups
  packaging/             — bao wrapper, drink cup, tray liner artboards
slides/                  — 16:9 brand-deck slides
```

---

## Content Fundamentals

**Language.** Taglish — playful code-switching between English and Tagalog, leaning Tagalog for emotional / homey moments and English for product copy. The brand is **unapologetically Filipino** and never tries to sound Western.

**Tone pillars** (verbatim from the brand doc):

| Pillar | What it means | Example line |
|---|---|---|
| **Makulit** | Playful, a little cheeky, never annoying. The friend who jokes but means well. | *"Bakit ka pa pumunta ng ibang lugar? Nandito na lahat."* |
| **Proud** | Unapologetically Filipino. Owns its roots like a badge of honor. | *"Ito ang aming bao. Filipino to the bone."* |
| **Generous** | Always makes you feel welcome and fed. Mang Inasal *unli-rice* energy, but cooler. | *"Sulit na sulit ka dito, promise."* |
| **Aspirational** | Street food that made it. Global flavors without losing identity. | *"World-class lasa. Presyo na para sa lahat."* |

**Voice rules:**
* **"You" / "ka" / "mo"** — always second-person, conversational, never corporate.
* Use **Tagalog pet phrases** liberally: *sulit, sarap, lasa, hawak, promise, bestseller, para sa lahat.*
* Casing: **headlines ALL-CAPS** (Bebas Neue does the work). Subheadings & body in **sentence case**. Section eyebrows in **letter-spaced uppercase** ("01 — BRAND COLORS").
* **No emoji in body copy.** Emoji is reserved for menu/mascot illustrations and packaging accents (🥟 🧋 🌶️).
* **Handwritten pull-quotes** in Caveat for the warmest, most personal moments (taglines, store-shouts, quoted feedback). Use sparingly.
* Tag spicy items with the chili pill. Tag bestsellers with the red **BESTSELLER** pill. No other badges.
* Prices in Philippine Peso (**₱**), no decimals on whole-peso items (`₱119`, not `₱119.00`).

**Don't say:** "elevated," "curated," "experience," "journey," "artisanal." Mang G doesn't talk like that.
**Do say:** "Sulit." "Sarap." "Bao'd up." "Hawak mo na 'to." "Filipino to the bone."

---

## Visual Foundations

### Color
Six brand colors, no gradients (the brand explicitly avoids the gradient-y café look).

| Token | Hex | Role |
|---|---|---|
| **Saging Green** | `#1B4332` | Primary — brand anchor. Most surfaces. |
| **Saffron Yellow** | `#F4B942` | Accent — energy, warmth, headlines on dark. |
| **Bao White** | `#FFFDF7` | Background — soft off-white, never pure `#fff`. |
| **Leaf Green** | `#52B788` | Secondary — fresh contrast, success, taglines. |
| **Lechon Brown** | `#6B3A2A` | Shadow & depth — text shadow under Bebas headlines, body of Generous tone card. |
| **Sili Red** | `#C1121F` | Alert — *Bestseller* pill, spicy chili, promo flags. |

**Pairings to use:** Saging on Bao White, Saffron on Saging (the signature lockup), Leaf Green tagline on dark Saging, Brown shadows behind yellow Bebas headlines.
**Pairings to avoid:** Sili Red on Saffron (vibrates), Brown on Saging (too low contrast).

### Type
Four typefaces, each with one job:

* **Bebas Neue** — display headlines, logo, prices. ALL CAPS. Always.
* **Lilita One** — subheadings, card titles, menu item names, section labels. Tight, friendly, slightly chunky.
* **Nunito** (700–900 weight) — body, UI, descriptions, navigation.
* **Caveat** — handwritten pull-quotes, taglines, "Hawak ang Sarap" treatments.

Bebas headlines almost always have a **`#6B3A2A` (Lechon Brown) drop shadow** offset 4–6px down — this is the signature wordmark treatment.

### Background patterns
* Solid Saging Green for hero / dark surfaces.
* **Diagonal pinstripe** at very low opacity (≈4%) overlaid on Saging for texture (visible on the cover screen).
* **Soft blob shapes** in tonal greens or yellows on packaging (corners of bao wrappers).
* No photographic backgrounds. No food-photography heroes. The mascot and emoji icons stand in for product photography (a deliberate, illustration-first choice).

### Shape & geometry
* Pill-shape (`border-radius: 999px`) for badges, CTA wrappers, the "EST. 2025 · MANILA" badge.
* **Card radius: 16–24px** (`--radius-card`). Generous, friendly, never sharp.
* Inner content cards radius: 12px.
* **Stroke weight on outlined chips: 2px.**

### Shadows & depth
* The brand has very few real drop shadows. Depth comes from **text shadow** (the brown offset under Bebas).
* When a real shadow is used (food-card hover), it's soft: `0 8px 24px rgba(27, 67, 50, 0.12)`.
* Borders are usable: 2px Saffron outline for the EST. badge; 1px hairlines inside cards in `rgba(255,255,255,0.08)` on dark surfaces.

### Layout
* Mobile-first content (the original brand doc is portrait).
* Generous breathing room: section paddings ~32–48px, card paddings 24px.
* Section headers are **two-line**: a small uppercase eyebrow ("01 — BRAND COLORS") above a fat Lilita display title ("The Palette").

### Motion
Not strongly defined in the source material. Conservative defaults:
* **Hover**: 8% lift on dark surfaces (Saffron buttons go from `#F4B942` to `#FFC85A`); 4% deepen on light.
* **Press**: scale `0.97` + slight darken. No bounces.
* **Transition timing**: `180ms ease-out` for hovers, `240ms cubic-bezier(.2,.7,.2,1)` for card opens.
* **No parallax. No scroll-jacking. No looping confetti.** The brand smiles; it does not animate at you.

### Iconography style
See ICONOGRAPHY below — short version: **3D Apple-style emoji and tiny illustrated marks**, not line icons.

---

## Iconography

Mang Guabao is **emoji-first**. The brand doc itself uses **Apple-style color emoji glyphs** to label every feature card, packaging mock, and menu badge — there is no custom icon library and no monochrome line-icon set. This is a deliberate choice that reinforces the playful, populist tone (and sidesteps the cold-techy-startup look).

### Working emoji set
The following emoji recur across the brand:

| Emoji | Where it's used |
|---|---|
| 🥟 | Bao body, menu marker, signature-baos header, packaging |
| 🌶️ | Spicy items (Bicol Express Bao) — usually inside a green pill |
| 🧋 | Drink cup (Calamansi Lemonade) |
| 🎉 | Tray-liner accent, "what you hold" packaging |
| 🥢 | Chopsticks — fusion concept, mascot detail |
| 👨 | "The Mustache" mascot card (stands in for the Mang energy) |
| 🌿 / 🎗️ | Salakot hat / green ribbon accent |
| ✨ | Mascot sparkles, "magic" decorations on hero compositions |
| 🇵🇭 | Filipino pride flags (use sparingly, never as a logo) |
| ⭐ | Quality marker, secondary to BESTSELLER pill |

### When to use what
* **Mascot Mang G** — the single most important visual. Use as logo lockup, app icons, packaging cover, social avatar. SVG version in `assets/mascot-mang-g.svg`. Never recolor, never separate the hat from the body.
* **Emoji** — for menu items, feature lists, status pills, packaging accents. *Always Apple-style* (the brand-doc renders show iOS emoji rendering). Don't substitute Twemoji or Noto — they look generic.
* **Custom illustrations** — none in source material. If new ones are needed (e.g. a "store finder" pin), commission flat, hand-drawn-feeling vectors matching the mascot's roundness.
* **Line icons (Lucide / Heroicons / etc.)** — only for utilitarian UI plumbing (close, chevron, hamburger, share). Use **Lucide** at 2px stroke when needed. Loaded from CDN: `https://unpkg.com/lucide@latest`. **Flag this as a substitution** — the source material doesn't define a UI icon set, so we picked the closest minimal match.

### Don'ts
* No emoji *inside* sentence body copy (e.g. "Order now! 😋"). They live on cards, badges, and packaging — not in prose.
* No monochrome flat emoji renders. Always color.
* No SVG illustrations that try to replace the mascot's role. There is one Mang G; he does the heavy lifting.
* No clipart-y food photography stand-ins. Use the bao emoji instead.

### Logos & assets
`assets/mascot-mang-g.svg` is a reconstructed SVG of the brand-doc mascot. It is not pixel-identical to a "production" Mang G illustration the brand team may have. **Flagged**: ask the brand owner for the authoritative master mascot file (likely in Illustrator / Figma) and replace this SVG. Same goes for the wordmark.

---

## Index — what to read next

1. **`colors_and_type.css`** — drop-in CSS custom properties + semantic classes (`.mg-display`, `.mg-tagline`, `.mg-pill--bestseller`, etc.).
2. **`preview/`** — design-system cards (one HTML per token cluster). Used by the Design System tab; great for quick reference.
3. **`assets/mascot-mang-g.svg`** + **`assets/wordmark-on-dark.svg`** — the only brand marks you need.
4. **`ui_kits/marketing-site/index.html`** — a clickable mock of the homepage + menu + locations page, demonstrating components composed together.
5. **`ui_kits/packaging/index.html`** — bao wrapper, drink cup, and tray liner artboards.
6. **`slides/index.html`** — 16:9 brand-deck slides (title, palette, mascot, menu, voice, in-store, packaging) styled after the source document.
7. **`SKILL.md`** — Claude Skill manifest. Drop the whole folder into a Skill loader to brief an agent on the brand.

