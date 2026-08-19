import { images } from "./images";

export interface Service {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  idealFor: string[];
}

export const services: Service[] = [
  {
    id: "mobile-applications",
    slug: "mobile-applications",
    number: "01",
    title: "Mobile Applications",
    shortDescription:
      "Native-feeling iOS and Android apps built for real users, real devices, and real-world conditions.",
    description:
      "We design and develop mobile applications that people reach for every day — consumer apps, on-demand platforms, field tools, and enterprise mobility solutions.",
    longDescription:
      "Mobile is where most users experience software first. We build apps that feel fast, intuitive, and native on both iOS and Android using React Native and Expo — giving you one codebase without compromising quality. From onboarding flows to push notifications, offline sync, and App Store deployment, we handle the complete mobile product lifecycle.",
    image: images.services.mobile,
    features: [
      "Cross-platform iOS & Android development",
      "React Native & Expo expertise",
      "App Store & Play Store deployment",
      "Push notifications & deep linking",
      "Offline-first architecture",
      "Performance optimization & analytics",
    ],
    idealFor: [
      "Startups launching a mobile-first product",
      "Businesses replacing paper or manual workflows",
      "Brands extending their web product to mobile",
    ],
  },
  {
    id: "web-applications",
    slug: "web-applications",
    number: "02",
    title: "Web Applications",
    shortDescription:
      "Fast, scalable web applications with modern architecture and interfaces people rely on daily.",
    description:
      "We build web applications that perform under load — dashboards, admin panels, client portals, and customer-facing platforms powered by React and Next.js.",
    longDescription:
      "A web application is more than a website. It's a product with authentication, real-time data, complex workflows, and business logic. We architect and build web apps that scale — from MVP to thousands of concurrent users — with clean code, responsive design, and thoughtful UX at every layer.",
    image: images.services.web,
    features: [
      "React & Next.js development",
      "Real-time features & WebSockets",
      "Admin dashboards & client portals",
      "REST & GraphQL API integration",
      "Role-based access control",
      "Performance & SEO optimization",
    ],
    idealFor: [
      "Teams replacing spreadsheets with proper software",
      "SaaS products needing a robust web platform",
      "Organizations building internal tools",
    ],
  },
  {
    id: "saas-products",
    slug: "saas-products",
    number: "03",
    title: "SaaS Products",
    shortDescription:
      "End-to-end SaaS development — from product architecture and billing to launch and iteration.",
    description:
      "We help founders and product teams take SaaS ideas from whiteboard to paying customers with multi-tenant architecture, subscription billing, and growth-ready infrastructure.",
    longDescription:
      "Building SaaS requires more than features — it requires subscription models, tenant isolation, onboarding flows, usage analytics, and infrastructure that scales. We've built SaaS products from scratch and know the decisions that matter early: auth, billing, data architecture, and the MVP scope that gets you to market fast without cutting corners.",
    image: images.services.saas,
    features: [
      "Multi-tenant architecture",
      "Subscription & payment integration",
      "User onboarding & authentication",
      "Analytics dashboards & reporting",
      "Scalable cloud infrastructure",
      "Feature flags & A/B testing setup",
    ],
    idealFor: [
      "Founders validating a SaaS idea",
      "Agencies productizing a service",
      "Businesses digitizing a manual process",
    ],
  },
  {
    id: "business-websites",
    slug: "business-websites",
    number: "04",
    title: "Business Websites",
    shortDescription:
      "High-performance company and organization websites that communicate clearly and convert.",
    description:
      "Your website is often the first impression. We create editorial, fast-loading websites for companies, agencies, and institutions that tell your story and drive action.",
    longDescription:
      "Generic templates don't represent premium businesses. We design and build custom websites with strong typography, cinematic imagery, smooth interactions, and SEO foundations — so your digital presence matches the quality of your work. CMS integration included when you need to update content yourself.",
    image: images.services.business,
    features: [
      "Custom design & brand alignment",
      "Headless CMS integration",
      "Technical SEO & metadata",
      "Performance-first architecture",
      "Responsive across all devices",
      "Contact forms & lead capture",
    ],
    idealFor: [
      "Companies modernizing an outdated site",
      "Organizations needing a credible web presence",
      "Professional services firms",
    ],
  },
  {
    id: "portfolio-websites",
    slug: "portfolio-websites",
    number: "05",
    title: "Portfolio Websites",
    shortDescription:
      "Distinctive portfolio experiences for designers, developers, photographers, and creatives.",
    description:
      "Stand out with a portfolio that reflects your craft. We build memorable, animation-rich portfolio sites that showcase your work and make hiring you an easy decision.",
    longDescription:
      "Your portfolio is your most important sales tool. We create editorial layouts, smooth scroll experiences, project case studies, and contact flows that feel as polished as the work you produce. Every detail — typography, pacing, image treatment — is designed to leave a lasting impression.",
    image: images.services.portfolio,
    features: [
      "Unique visual identity & layout",
      "Project case study pages",
      "Smooth scroll & motion design",
      "Contact & inquiry integration",
      "Mobile-optimized experience",
      "Fast loading & SEO ready",
    ],
    idealFor: [
      "Designers and creative directors",
      "Developers and engineers",
      "Photographers and visual artists",
    ],
  },
  {
    id: "custom-software",
    slug: "custom-software",
    number: "06",
    title: "Custom Software",
    shortDescription:
      "Bespoke software built around your workflows, data, and business logic — not the other way around.",
    description:
      "When off-the-shelf tools don't fit, we build custom software: internal tools, automation systems, integrations, and platforms tailored to how your business actually operates.",
    longDescription:
      "Every business has unique processes that generic software can't handle. We analyze your workflows, identify bottlenecks, and build custom solutions — from inventory systems to CRM extensions, API integrations, and legacy modernization. Software that fits your team, not software your team has to fit around.",
    image: images.services.custom,
    features: [
      "Workflow automation & internal tools",
      "Legacy system modernization",
      "Third-party API integrations",
      "Custom reporting & dashboards",
      "Data migration & synchronization",
      "Dedicated support & maintenance",
    ],
    idealFor: [
      "Businesses outgrowing spreadsheets",
      "Teams with unique operational needs",
      "Companies integrating multiple systems",
    ],
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    number: "07",
    title: "UI/UX & Product Design",
    shortDescription:
      "User experiences and visual systems that are simple, useful, accessible, and memorable.",
    description:
      "Great products start with great design. We craft interfaces from research and wireframes through high-fidelity prototypes and design systems ready for development.",
    longDescription:
      "Design is not decoration — it's how users understand and trust your product. We run user research, map journeys, wireframe flows, and deliver pixel-perfect designs with component libraries your developers can build from directly. Accessible, responsive, and aligned with your brand.",
    image: images.services.design,
    features: [
      "User research & journey mapping",
      "Wireframing & interactive prototypes",
      "Design systems & component libraries",
      "Usability testing & iteration",
      "Brand integration & visual identity",
      "Developer-ready design handoff",
    ],
    idealFor: [
      "Products needing a design refresh",
      "Startups before development begins",
      "Teams without in-house design capacity",
    ],
  },
  {
    id: "maintenance-growth",
    slug: "maintenance-growth",
    number: "08",
    title: "Maintenance & Growth",
    shortDescription:
      "Ongoing support, performance monitoring, feature development, and scaling after launch.",
    description:
      "Launch is the beginning, not the end. We keep your product secure, fast, and evolving with bug fixes, new features, infrastructure scaling, and proactive monitoring.",
    longDescription:
      "Software without maintenance degrades. We offer structured support plans covering security patches, dependency updates, performance monitoring, bug resolution, and planned feature development. Whether you need a few hours monthly or a dedicated team, we keep your product healthy as it grows.",
    image: images.services.growth,
    features: [
      "Bug fixes & security updates",
      "Performance monitoring & optimization",
      "Planned feature development",
      "Infrastructure scaling & DevOps",
      "Analytics review & recommendations",
      "SLA-backed response times",
    ],
    idealFor: [
      "Products post-launch needing ongoing care",
      "Teams without dedicated engineering staff",
      "Growing products requiring scaling support",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
