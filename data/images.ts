/**
 * Central image registry — single source of truth for all site imagery.
 * Images sourced from Pexels (free license). Each path maps to a themed photo
 * that matches its section content.
 */
export const images = {
  /** Dark tech/code hero background */
  hero: "/images/hero-bg.jpg",
  og: "/images/og-image.jpg",

  about: {
    /** Modern office interior */
    hero: "/images/about-hero.jpg",
    /** Team collaboration meeting */
    team: "/images/about-team.jpg",
  },

  services: {
    /** Smartphone on desk */
    mobile: "/images/service-mobile.jpg",
    /** Laptop with code on screen */
    web: "/images/service-web.jpg",
    /** Analytics dashboard on monitor */
    saas: "/images/service-saas.jpg",
    /** Modern office building */
    business: "/images/service-business.jpg",
    /** Creative workspace / laptop */
    portfolio: "/images/service-portfolio.jpg",
    /** Developer coding at desk */
    custom: "/images/service-custom.jpg",
    /** UI design on screen */
    design: "/images/service-design.jpg",
    /** Team meeting / collaboration */
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
