# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from the `client/` directory:

```bash
cd client
npm run dev      # start dev server (Vite, localhost:5173)
npm run build    # production build → client/dist/
npm run preview  # preview the production build
npm run lint     # ESLint check
```

There are no tests.

## Architecture

Single-page React app with client-side routing, built with Vite + Tailwind CSS v4 + DaisyUI v5.

**Stack:** React 19, React Router v6, Tailwind CSS v4 (PostCSS plugin), DaisyUI v5, Vite 7

**Routing:**
- `/` → `Home` (all sections stacked vertically, single-page layout)
- `/projects/:id` → `ProjectPage` (detail view for a project)

**Data:** All project data lives in `client/src/data/projects.js` as a static array. Each project has `id`, `title`, `description`, `longDescription`, `tech`, `link`, `repo`, and `image` fields. `FeaturedProject` always renders `projects[0]`.

**Styling:** Tailwind utility classes used throughout. Global styles and DaisyUI theme configuration are in `client/src/index.css` — this is where the custom `light` and `dark` themes are defined using `@plugin "daisyui/theme"` blocks with OKLCH color tokens. `App.css` is intentionally empty (reserved for future component styles). Theme toggling is done by setting `data-theme` on `<html>` and persisting to `localStorage` (see `Header.jsx`).

**Layout convention:** Sections use `max-w-6xl mx-auto px-6` for consistent centering. Section wrappers use `py-16 md:py-24`.

**Static assets:** Project images are served from `public/images/projects/`. A placeholder at `/images/projects/wip.png` is used for any project without a real image.

**No backend.** This is a fully static frontend site.
