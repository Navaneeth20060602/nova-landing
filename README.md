# NOVA — Build Better. Work Smarter.

A responsive marketing landing page for **NOVA**, a fictional AI-powered team
productivity platform, built for the Front-End Development Intern assignment.


**Repo:** https://github.com/Navaneeth20060602/nova-landing

## Tech stack

- React 19 + Vite
- Plain CSS (component-scoped stylesheets, CSS custom properties for theming)
- No UI framework/library — every component, including the FAQ accordion,
  pricing toggle and testimonial carousel, is hand-built

## Features

- Responsive navbar with a mobile hamburger menu (scroll-locks the page while open)
- Hero section with a hand-built product mockup (no stock imagery)
- Trusted-by logo strip
- 6 feature cards
- Product/about section with a progress panel
- 4-step "How it works" sequence
- Animated statistics that count up when scrolled into view (IntersectionObserver)
- 4 solution/use-case cards
- Testimonial carousel (4 testimonials, dot navigation + arrows)
- Pricing with 3 plans and a working monthly/annual toggle
- FAQ accordion (6 questions, single-open behavior)
- Final CTA band
- Footer with an email newsletter field that validates input client-side
- Back-to-top button that appears after scrolling
- Dark/light mode toggle (remembers the visitor's preference locally)
- Smooth scrolling to in-page anchors
- Reduced-motion support (`prefers-reduced-motion`) and visible keyboard focus states throughout

## Installation

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build to /dist
npm run preview   # preview the production build locally
```

No environment variables or backend are required — this is a fully static site.

## Deploying

The project builds to a static `dist/` folder, so any static host works.

**Vercel (recommended, fastest):**

1. Push this project to a GitHub repo
2. Go to https://vercel.com -> Add New Project -> import the repo
3. Framework preset: Vite (auto-detected) -- leave build command/output as default
4. Click Deploy

**Netlify:**

1. Push to GitHub
2. https://app.netlify.com -> Add new site -> Import an existing project
3. Build command: `npm run build`, publish directory: `dist`
4. Deploy

## AI tools used

Codex was used as a pair-programmer to scaffold components and CSS from a
design plan (color/type/layout tokens decided first), and to review the
result against the assignment brief. All copy, section content and design
decisions were reviewed and adjusted rather than accepted as generated --
see `EXPLANATION.md` for the reasoning behind specific choices and how each
interactive piece works.
