# Julior.dev — Software Engineer Portfolio

A single-page, dependency-free portfolio built with vanilla HTML, CSS and JavaScript (ES modules). No build step required — open `index.html` directly or serve the folder statically.

## Project Structure

```
myport/
├── index.html          # Single-page markup (all sections in one file)
├── assets/
│   ├── cv/             # Downloadable resume (Julior_CV.pdf)
│   └── images/
│       ├── profile/    # Profile picture
│       └── projects/   # Project thumbnails
└── src/
    ├── css/
    │   ├── variables.css    # Design tokens (colors, shadows, radii)
    │   ├── base.css         # Reset, typography, background layers
    │   ├── layout.css       # Top nav, sidebar, footer, mobile nav
    │   ├── components.css   # Shared UI primitives (buttons, badges, timeline…)
    │   ├── pages.css        # Page-specific styles (home, skills, projects…)
    │   ├── effects.css      # Optional 3D hover effect classes
    │   └── responsive.css   # Media queries / breakpoints
    └── js/
        ├── main.js          # Entry point — bootstraps all modules
        ├── state.js         # Shared application state
        ├── utils.js         # DOM/format helpers
        ├── i18n.js          # Translations + language switching + typing/rotating text
        ├── particles.js     # Background particle canvas
        ├── cursor.js        # Cursor glow + magnetic buttons
        ├── effects.js       # 3D tilt, staggered reveals, counters, body effect classes
        ├── navigation.js    # SPA page switching, active links, mobile menu
        ├── settings.js      # Theme, mode, language, font size, sidebar position, toggles
        └── ui.js            # FAQ accordion
```

## Getting Started

Serve the folder with any static server:

```bash
# e.g. with Python
python -m http.server 8000

# or with Node
npx serve .
```

Then open http://localhost:8000.

> Note: JavaScript runs as ES modules, so the page must be served over HTTP(S) — opening `index.html` via `file://` will block the modules in some browsers.

## Features

- Seven sections: Home, About, Skills, Projects, Experience, Contact, plus Settings & Support
- 6 languages (EN, ID, JA, KO, ES, DE) with live switching
- 8 color themes, light/dark/auto appearance, font-size and sidebar-position controls
- Particle background, 3D tilt cards, cursor glow and staggered page transitions (all toggleable in Settings)
- Fully responsive layout with a mobile drawer + bottom nav

## Browser Support

Requires a modern browser with native ES module and CSS custom-property support (Chrome, Firefox, Safari, Edge — recent versions).
