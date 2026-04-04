# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
npm run deploy     # Build and deploy to GitHub Pages
```

## Architecture

React 19 SPA built with Vite + SWC. Styled with Tailwind CSS v4. Deployed to GitHub Pages at `/lostworlds/`.

**Routing:** React Router v7 using `HashRouter` (required for GitHub Pages — do not switch to `BrowserRouter`). Routes are defined in `src/App.jsx`.

**Structure:**
- `src/pages/` — one component per route
- `src/components/` — shared layout components (`Navbar`, `Footer`)
- `src/index.css` — single `@import "tailwindcss"` line; all styling is done via Tailwind utility classes

**Vite base path** is set to `/lostworlds/` in `vite.config.js` for GitHub Pages compatibility. Keep this when adding assets or absolute paths.
