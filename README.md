# Portfolio Site

This repository now contains a client-only React (Vite) portfolio site. The previous Express backend has been removed and the app is served purely from the client.

## Project structure

```
portfolio-site-repo/
├── client/          # React Vite frontend (src, public, package.json)
└── package.json     # root scripts to run the client
```

## Getting started

Install client dependencies and run the dev server:

```bash
npm --prefix client install
npm --prefix client run dev
```

Build for production:

```bash
npm --prefix client run build
npm --prefix client run preview
```

## Project pages

- Projects now have a dedicated detail page at `/projects/:id`.
- Project data is in `client/src/data/projects.js` and the template is `client/src/pages/ProjectPage.jsx`.

## Notes

- The backend (server/) was removed. To restore, use git history.
- Root package.json was updated to only manage client scripts.
