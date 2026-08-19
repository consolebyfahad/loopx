import { images } from "./images";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  outcome: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "osstel",
    slug: "osstel",
    title: "OSSTEL",
    category: "Hospitality Platform",
    year: "2025",
    description:
      "Smart hostel management platform for bookings, guest check-ins, room assignments, and operational dashboards.",
    longDescription:
      "OSSTEL is a fictional case study for a hostel chain that needed to replace fragmented spreadsheets and manual booking processes with a unified digital platform. The product handles reservations, guest profiles, room inventory, staff scheduling, and real-time occupancy reporting.",
    challenge:
      "The client managed five properties using disconnected tools — paper logs, WhatsApp groups, and a basic booking widget. Double bookings, lost guest data, and zero visibility across locations were daily problems.",
    solution:
      "We designed and built a centralized web platform with a staff dashboard, guest self-check-in flow, automated room assignment, and multi-property reporting. Mobile-responsive so front-desk staff could operate from any device.",
    outcome:
      "The platform reduced check-in time, eliminated double bookings, and gave management real-time visibility across all properties — demonstrating the kind of operational software LOOPX builds for service businesses.",
    image: images.projects.osstel,
    imageAlt: "Modern hotel lobby representing OSSTEL hospitality platform",
    tags: ["Web App", "Dashboard", "Booking System", "Hospitality"],
  },
  {
    id: "loopx-commerce",
    slug: "loopx-commerce",
    title: "LOOPX COMMERCE",
    category: "E-Commerce",
    year: "2025",
    description:
      "Editorial commerce experience with product storytelling, seamless checkout, and inventory management.",
    longDescription:
      "LOOPX Commerce is a fictional case study for a retail brand that wanted to move beyond generic e-commerce templates. The platform combines editorial product pages, curated collections, cart optimization, and a backend inventory system.",
    challenge:
      "The brand had outgrown Shopify's template constraints. They needed a custom storefront that matched their editorial identity, supported complex product variants, and integrated with their existing warehouse system.",
    solution:
      "We built a headless commerce platform with a Next.js storefront, custom product pages with rich media, optimized checkout flow, and an admin panel for inventory, orders, and customer management.",
    outcome:
      "The case study demonstrates LOOPX's ability to deliver premium commerce experiences — fast, branded, and built to convert — without the limitations of off-the-shelf templates.",
    image: images.projects.commerce,
    imageAlt: "Retail shopping experience representing LOOPX Commerce",
    tags: ["E-Commerce", "Next.js", "Headless CMS", "Payments"],
  },
  {
    id: "nexa",
    slug: "nexa",
    title: "NEXA",
    category: "SaaS Platform",
    year: "2024",
    description:
      "Business management SaaS unifying project tracking, team collaboration, and client communication.",
    longDescription:
      "NEXA is a fictional case study for a B2B SaaS product aimed at agencies and consultancies. It combines project management, time tracking, client portals, invoicing, and team messaging in one workspace.",
    challenge:
      "Agency teams were juggling five separate tools — project boards, time trackers, invoicing software, file storage, and email. Context switching killed productivity and client updates were always delayed.",
    solution:
      "We architected a multi-tenant SaaS platform with role-based dashboards, project timelines, integrated time tracking, automated invoicing, and a client portal for approvals and file sharing.",
    outcome:
      "NEXA showcases LOOPX's SaaS expertise — multi-tenant architecture, subscription billing, onboarding flows, and a product designed for daily use by teams who can't afford friction.",
    image: images.projects.nexa,
    imageAlt: "Business analytics dashboard representing NEXA platform",
    tags: ["SaaS", "Dashboard", "Multi-tenant", "Collaboration"],
  },
  {
    id: "arc",
    slug: "arc",
    title: "ARC",
    category: "Organization Platform",
    year: "2024",
    description:
      "Digital platform for nonprofits — member management, events, donations, and transparent reporting.",
    longDescription:
      "ARC is a fictional case study for a nonprofit federation that needed a modern digital presence and internal tools to manage members, coordinate events, process donations, and publish impact reports.",
    challenge:
      "The organization relied on outdated WordPress plugins, manual membership spreadsheets, and email chains for event coordination. Donors had no visibility into how funds were used.",
    solution:
      "We built a public-facing website with impact storytelling, a member portal for registration and renewals, an event management system, donation processing, and an admin dashboard with financial reporting.",
    outcome:
      "ARC demonstrates LOOPX's work with organizations — combining public websites with backend platforms that simplify operations and build trust with stakeholders.",
    image: images.projects.arc,
    imageAlt: "Community gathering representing ARC organization platform",
    tags: ["Platform", "Nonprofit", "Member Portal", "Events"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
