# Nathan Shutter — Portfolio

Personal IT portfolio built with React, Vite, Tailwind CSS v4, and DaisyUI v5.

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS v4 + DaisyUI v5 |
| Routing | React Router v6 |
| Icons | Google Material Symbols Outlined |

## Features

- **Light / dark theme toggle** — persisted to localStorage, flash-free on load
- **Responsive layout** — mobile-first, scales across all breakpoints
- **Project detail pages** — each project routes to `/projects/:id`
- **Single-page sections** — Home, Skills, Featured Project, Projects, Experience, Contact

## Project structure

```
portfolio-site-repo/
├── client/
│   ├── public/
│   │   └── images/projects/     # Project thumbnail images
│   ├── src/
│   │   ├── assets/images/hero/  # Headshot (use .webp, keep under 200KB)
│   │   ├── components/          # One file per page section
│   │   ├── data/
│   │   │   └── projects.js      # Add/edit projects here
│   │   ├── pages/
│   │   │   └── ProjectPage.jsx  # Project detail page
│   │   ├── App.jsx
│   │   └── index.css            # Tailwind imports + DaisyUI theme definitions
│   ├── tailwind.config.cjs
│   └── index.html
└── package.json
```

## Getting started

```bash
npm --prefix client install
npm --prefix client run dev
```

Build for production:

```bash
npm --prefix client run build
npm --prefix client run preview
```

## Adding a project

Edit `client/src/data/projects.js` and add an entry to the array:

```js
{
  id: 3,
  title: 'Project Name',
  description: 'Short description shown on the card.',
  longDescription: 'Full description shown on the detail page.',
  tech: ['React', 'Node.js'],
  link: 'https://example.com',
  repo: 'https://github.com/...',
  image: '/images/projects/your-image.png'
}
```

Drop the thumbnail into `client/public/images/projects/`.

## Theming

Themes are defined in `client/src/index.css` using `@plugin "daisyui/theme"`. The toggle in the header switches between `light` and `dark` and saves the preference to localStorage.

## Notes

- The backend (server/) was removed. To restore, use git history.
- Root package.json manages client scripts only.
