# LOOPX

Premium software company website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Lenis smooth scrolling.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Tech Stack

- **Next.js 15** — App Router
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll & entrance animations
- **Lenis** — smooth scrolling
- **GSAP** — available for advanced scroll animations

## Project Structure

```
app/                  # Pages & routing
components/
  animations/         # Reveal, Parallax, SmoothScroll, etc.
  hero/               # Hero section
  layout/             # Navbar, Footer, MobileMenu
  sections/           # Homepage & page sections
  ui/                 # Button, cards, labels
data/                 # Services, projects, testimonials
lib/                  # Utilities
public/images/        # Placeholder imagery
```

## Pages

- `/` — Homepage
- `/services` — Services overview
- `/services/[slug]` — Service detail
- `/work` — Project showcase
- `/work/[slug]` — Project detail
- `/about` — About LOOPX
- `/contact` — Contact form

## Contact

- Email: loopx@gmail.com
- Phone: 03191718420

## Build

```bash
npm run build
npm start
```
