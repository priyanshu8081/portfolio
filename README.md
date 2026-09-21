# Priyanshu Chauhan — Developer Portfolio

A modern, responsive MERN-stack developer portfolio built with **React** and
**React Router**, featuring a dark/light theme, scroll-reveal animations,
an active-section navbar, and project filtering by technology.

## Getting started

```bash
npm install
npm start
```

Open http://localhost:3000. The app hot-reloads as you edit files.

To build for production:

```bash
npm run build
```

This outputs a static, deployable `build/` folder.

## Project structure

```
src/
├── components/       # Reusable UI pieces (Navbar, Hero, Skills, Projects, ...)
├── pages/            # Route-level pages (Home, NotFound)
├── context/          # ThemeContext (dark/light mode)
├── hooks/            # useScrollReveal, useActiveSection
├── data/             # Edit these to update content without touching components
│   ├── skills.js
│   ├── projects.js
│   └── navLinks.js
├── styles/           # One CSS file per component + global index.css
├── App.jsx
└── index.js
```

## Things to personalize before deploying

1. **Resume** — drop your actual resume PDF at `public/resume.pdf`. The
   "Download Resume" button in `About.jsx` already links to `/resume.pdf`.
2. **Project links** — open `src/data/projects.js` and replace the
   `github` / `demo` URLs with your real repo and deployed links.
3. **Contact form** — `src/components/Contact.jsx` validates input but
   isn't wired to a backend yet. Easiest options:
   - [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/) — no backend needed, just swap the `handleSubmit` body for their SDK/fetch call.
   - Or point it at your own Express endpoint if you build one.
4. **Skills list** — `src/data/skills.js` has a placeholder note under
   "Programming Languages"; add any languages you actually know.
5. Favicon/meta tags are in `public/index.html` if you want to adjust them.

## Deploying

This is a standard Create React App project, so it deploys anywhere static:

- **Vercel**: `vercel` (auto-detects CRA)
- **Netlify**: drag-and-drop the `build/` folder, or connect the repo
- **GitHub Pages**: add the `gh-pages` package and a `homepage` field to `package.json`

## Notes

- Theming is handled via a `data-theme` attribute on `<html>` and CSS
  variables in `src/styles/index.css` — no UI library dependency.
- All animations respect `prefers-reduced-motion`.
- Skills are listed as categorized tags rather than percentage bars, since
  numeric "proficiency" claims are usually more marketing than fact.
