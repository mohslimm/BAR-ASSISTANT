# 🍸 Bar Assistant Pro — Master Mixology & Bar Operations Suite

[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Mobile%20%7C%20Modular-0f0f20.svg)]()
[![Live Demo](https://img.shields.io/badge/Demo-GitHub%20Pages-c5a059.svg)](https://mohslimm.github.io/BAR-ASSISTANT/)
[![Architecture](https://img.shields.io/badge/Architecture-Single%20File%20%2B%20Modular%20V2-22c55e.svg)]()

> A premier digital mixology guide and bar intelligence engine engineered with a **Quiet Luxury** aesthetic. Built for high-volume mixologists, speakeasy managers, craft cocktail enthusiasts, and hospitality staff who demand instant, zero-latency access to verified cocktail recipes, ingredient breakdowns, glassware pairings, and spirit classifications.

---

## 🌟 Live Application & Highlights

- 🚀 **Live Demo on GitHub Pages**: [https://mohslimm.github.io/BAR-ASSISTANT/](https://mohslimm.github.io/BAR-ASSISTANT/)
- 📱 **Mobile Edition**: Dedicated touch-optimized client (`/mobile/index.html`)
- 🧩 **Modular V2 Engine**: Componentized edition featuring user custom cocktail creation & local persistence (`/v2/index.html`)

---

## 💎 Key Features & Capabilities

### 1. Comprehensive Beverage Catalog
- **Cocktails**: From timeless IBA classics (Old Fashioned, Negroni, Margarita, Manhattan, Daiquiri, Ramos Gin Fizz) to modern craft creations with exact proportions, spirit classifications, and preparation techniques.
- **Liquors & Spirits**: Deep dive into single malts, small-batch rums, botanic gins, tequilas, amaros, and liqueurs with ABV specifications and tasting notes.
- **Craft Beers & Ciders**: Styles, bitterness (IBU), body profile, and origins.
- **Fine Wines**: Varietals, regions, sweetness classifications, and food pairing guides.

### 2. High-Performance Search & Discovery
- **Debounced Real-Time Search**: Sub-millisecond keyword filtering across recipe names, spirit bases, garnishes, and ingredients.
- **Spirit Base Segmentation**: Fast-toggle filtering by primary base spirit (Vodka, Gin, Rum, Tequila, Whiskey, Brandy, Liquors).
- **Difficulty & Strength Indexing**: Categorized from *Beginner/Easy* to *Complex/Master Mixologist*.

### 3. Rich Recipe Modals
- High-fidelity imagery with fallback CDN fallbacks.
- Exact unit measurements with step-by-step preparation protocol (stir, shake, muddle, build).
- Specific glassware pairing (Coupe, Nick & Nora, Highball, Rocks, Collins) and garnish recommendations.

### 4. Modular V2 & Custom Recipe Creator
- Create and persist your own bespoke bar recipes directly to client-side storage (`localStorage`).
- Sidebar navigation with live item counts across all beverage categories.
- Built-in prompt surface for AI mixology assistant workflows.

---

## 📂 Repository Architecture

```text
BAR-ASSISTANT/
├── index.html                   # Core Production Application (Single-file, Zero-dependency)
├── README.md                    # System Documentation & Architectural Overview
├── LICENSE                      # MIT Open Source License
├── .gitignore                   # Enterprise git exclusion standards
│
├── public/                      # Static assets & historical builds
│   └── bar-assistant.html       # Standalone build distribution
│
├── v2/                          # Modular V2 Web Architecture
│   ├── index.html               # Multi-view dashboard layout with sidebar
│   ├── styles.css               # Design system tokens & animations
│   ├── app.js                   # Application lifecycle & state manager
│   └── database.js              # Normalized recipe schema & data layer
│
└── mobile/                      # Mobile-Optimized Client
    ├── index.html               # Responsive viewport & touch container
    ├── styles.css               # Touch targets, gestures & card layouts
    ├── app.js                   # Mobile event listeners & view routers
    └── data.js                  # Lightweight dataset bundle
```

---

## 🚀 Quickstart & Local Setup

### Direct Browser Execution
The core production app is zero-dependency and runs instantly out of the box in any modern browser:

```bash
# Clone the repository
git clone https://github.com/mohslimm/BAR-ASSISTANT.git
cd BAR-ASSISTANT

# Open directly in your default browser
# macOS:
open index.html
# Linux:
xdg-open index.html
# Windows:
start index.html
```

### Local Development Server
For hot-reloading or testing with a local static server:

```bash
# Using Python 3:
python -m http.server 8080

# Or using Node (npx serve):
npx serve .
```
Navigate to `http://localhost:8080` in your browser.

---

## 🎨 Design Philosophy & Tokens

Bar Assistant adheres to the **Quiet Luxury** design doctrine:
- **Color Palette**: Deep abyss void (`#0f0f1e` / `#060610`), rich gold accents (`#d4af37` / `#c5a059`), and warm mineral typography.
- **Typography**: Editorial header typography (`Playfair Display` & `Cormorant Garamond`) paired with high-legibility UI typography (`Inter` & `Outfit`).
- **Micro-Interactions**: Smooth CSS cubic-bezier transitions, card hover elevations, and interactive modals.

---

## 📜 License & Agency

Developed by **Mohamed Slimani** ([@mohslimm](https://github.com/mohslimm)) / **Stepping Stones Agency**.  
Licensed under the [MIT License](LICENSE).
