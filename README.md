# Harikrishnan Aji — Developer Portfolio

A responsive one-page React portfolio built with Vite.

## Architecture

This version is intentionally frontend-only. Portfolio content lives in `src/data/portfolioData.js`, so there is no API, database, Axios layer, or backend to configure.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Structure

- `src/App.jsx` — page composition
- `src/components/` — reusable portfolio sections
- `src/data/portfolioData.js` — all editable portfolio content
- `src/styles/index.css` — existing visual design and responsive styles
- `public/banner.jpg` — portfolio background
- `public/Harikrishnan_Aji_SDE_Resume.pdf` — downloadable resume

The UI and section styling are preserved; only the unnecessary backend/API integration has been removed.
