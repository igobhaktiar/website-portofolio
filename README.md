# Firgo Bhaktiar Hamsah — Portfolio

Mobile Engineer portfolio, restructured from a single HTML file into a
component-based **React + Vite** app. The design is identical to the original;
the content is now data-driven and the UI is split into reusable components.

## Getting started

Requires **Node.js 18+** (install from https://nodejs.org or via `nvm`).

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Project structure

```
index.html                 Vite entry — loads fonts + mounts React
public/                    Static assets (drop the résumé PDF here)
legacy/index.html          The original single-file version, kept for reference
src/
├── main.jsx               React entry point
├── App.jsx                Page composition
├── index.css             All styles (unchanged from the original)
├── data/portfolio.js      ← Single source of truth for ALL content
├── hooks/
│   └── useClock.js        Live status-bar clock
└── components/
    ├── Reveal.jsx         Scroll-into-view fade animation (IntersectionObserver)
    ├── StatusBar.jsx      Sticky nav styled as a phone status bar
    ├── Hero.jsx
    ├── TechBelt.jsx       Auto-scrolling tech marquee
    ├── Work.jsx           Project cards
    ├── Skills.jsx
    ├── Experience.jsx     Career/education timeline
    ├── Contact.jsx
    ├── Footer.jsx
    ├── Phone.jsx          Reusable device frame
    └── screens/           The mock phone-UI screens per project
        ├── QuranScreen.jsx
        ├── PropertyScreen.jsx
        ├── QuranListScreen.jsx
        ├── AgriScreen.jsx
        └── index.js       Maps a project's `screen` key → its component
```

## Editing content

Almost everything — profile text, stats, projects, skills, experience,
social links — lives in **`src/data/portfolio.js`**. Update it there and the
components re-render automatically. To swap a hand-built mock screen for a real
screenshot, replace the screen component's markup with an `<img>`.
