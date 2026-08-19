/**
 * Central image registry — single source of truth for all site imagery.
 * Images sourced from Pexels (free license). Each path maps to a themed photo
 * that matches its section content.
 */
export const images = {
  /** Original hero background */
  hero: "/images/hero-bg.jpg",
  earth: "/images/earth.jpg",
  og: "/images/og-image.jpg",

  about: {
    /** Modern office interior */
    hero: "/images/about-hero.jpg",
    /** Team collaboration meeting */
    team: "/images/about-team.jpg",
  },

  services: {
    /** Mobile app development — smartphones & devices */
    mobile: "/images/service-mobile.jpg",
    /** Web development — coding & full-stack build */
    web: "/images/service-web.jpg",
    /** SaaS product — analytics dashboard & metrics */
    saas: "/images/service-saas.jpg",
    /** Business website — professional web presence */
    business: "/images/service-business.jpg",
    /** Portfolio website — creative single-page showcase */
    portfolio: "/images/service-portfolio.jpg",
    /** Custom software — tailored development at desk */
    custom: "/images/service-custom.jpg",
    /** UI/UX design — wireframes, prototypes & product design */
    design: "/images/service-design.jpg",
    /** Maintenance & growth — team strategy & scaling */
    growth: "/images/service-growth.jpg",
  },

  process: {
    /** Team brainstorming session */
    discover: "/images/process-discover.jpg",
    /** Business strategy / laptop analysis */
    define: "/images/process-define.jpg",
    /** Design / creative work */
    design: "/images/process-design.jpg",
    /** Developer writing code */
    build: "/images/process-build.jpg",
    /** Team celebrating / handshake */
    launch: "/images/process-launch.jpg",
    /** Business growth / team planning */
    grow: "/images/process-grow.jpg",
  },

  projects: {
    /** Hotel room interior */
    osstel: "/images/project-osstel.jpg",
    /** Retail / shopping store */
    commerce: "/images/project-commerce.jpg",
    /** Business analytics dashboard */
    nexa: "/images/project-nexa.jpg",
    /** Diverse team / community */
    arc: "/images/project-arc.jpg",
  },
} as const;
