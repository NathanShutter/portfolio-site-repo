# Portfolio Site

A full-stack portfolio website built with React (Vite) frontend and Express.js backend.

## Project Structure

```
portfolio-site-repo/
├── server/          # Express API backend
│   ├── index.js
│   ├── package.json
│   └── .env
└── client/          # React Vite frontend
    ├── src/
    ├── package.json
    └── vite.config.js
```

## Getting Started

### Backend Setup

```bash
cd server
npm install
npm run dev
```

Server runs on `http://localhost:5000`

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

Client runs on `http://localhost:5173`

## Available Scripts

### Server
- `npm start` - Run production server
- `npm run dev` - Run development server with auto-reload

### Client
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Features to Add

- [ ] Create portfolio project showcase page
- [ ] Add contact form
- [ ] Setup database (MongoDB/PostgreSQL)
- [ ] Add authentication
- [ ] Deploy to hosting platform
