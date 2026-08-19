export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  project: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "LOOPX took our rough concept — literally a napkin sketch and a pitch — and turned it into a product our users actually love. The process was transparent, collaborative, and the result exceeded what we imagined was possible on our budget.",
    author: "Alex M.",
    role: "Founder, SaaS Startup",
    project: "Mobile & Web Application",
  },
  {
    id: "2",
    quote:
      "What stood out was their product thinking. They didn't just build what we asked for — they challenged our assumptions, simplified the scope, and helped us figure out what we actually needed to launch.",
    author: "Sarah K.",
    role: "Director, Digital Business",
    project: "Business Website & Portal",
  },
  {
    id: "3",
    quote:
      "From the first conversation to launch, everything felt intentional. Weekly demos, clear communication, and design quality that made our small team look like we had a full product department.",
    author: "James R.",
    role: "Product Lead",
    project: "Custom Internal Tool",
  },
  {
    id: "4",
    quote:
      "We needed a partner who could handle design and development together without losing coherence. LOOPX delivered a unified product that works beautifully on desktop, tablet, and mobile.",
    author: "Maria L.",
    role: "Operations Manager",
    project: "Operations Platform",
  },
  {
    id: "5",
    quote:
      "The attention to detail in both the user experience and the codebase gave us confidence that our product was built to last. Six months post-launch, they're still our go-to team for new features.",
    author: "David T.",
    role: "CTO, Tech Company",
    project: "SaaS Platform",
  },
];

export interface CompanyValue {
  title: string;
  description: string;
}

export const companyValues: CompanyValue[] = [
  {
    title: "Product thinking over feature lists",
    description:
      "We ask why before we ask what. Every feature must serve the user and the business — not fill a slide deck.",
  },
  {
    title: "Honest communication, always",
    description:
      "No surprises, no jargon, no overpromising. You'll always know where the project stands, what's next, and what it costs.",
  },
  {
    title: "Quality that lasts beyond launch",
    description:
      "We write code and design systems meant to scale — not prototypes that break the moment real users arrive.",
  },
  {
    title: "Partnership, not vendor relationships",
    description:
      "We invest in understanding your business. The best results come when we work as an extension of your team, not a ticket queue.",
  },
];

export interface Principle {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export const principles: Principle[] = [
  {
    number: "01",
    title: "Think Product First",
    description:
      "We start with the problem and the people who will use what we build — not the technology stack.",
    detail:
      "Before writing a line of code, we understand who you're building for, what pain you're solving, and how success is measured. Technology is a means, not the starting point.",
  },
  {
    number: "02",
    title: "Build For Reality",
    description:
      "Real users, real devices, real network conditions, real business constraints.",
    detail:
      "We design and develop for the world as it is — slow connections, small screens, distracted users, and changing requirements. Products that only work in demos don't ship with us.",
  },
  {
    number: "03",
    title: "Keep It Simple",
    description:
      "Complexity is easy. Simplicity takes discipline, editing, and courage.",
    detail:
      "We cut scope ruthlessly to find the core value. Every screen, every interaction, every line of code should earn its place. Clarity beats cleverness every time.",
  },
  {
    number: "04",
    title: "Move With Purpose",
    description:
      "Every decision serves the product. We move fast where it matters and slow where it counts.",
    detail:
      "Speed without direction is waste. We prioritize what gets you to launch, validate with users early, and iterate based on evidence — not opinions.",
  },
];

export interface CapabilityGroup {
  category: string;
  description: string;
  items: string[];
}

export const capabilities: CapabilityGroup[] = [
  {
    category: "Frontend",
    description: "Modern, performant interfaces built with industry-leading frameworks.",
    items: ["React", "Next.js", "React Native", "TypeScript"],
  },
  {
    category: "Backend",
    description: "Scalable server architecture, APIs, and database design.",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Cloud",
    description: "Deployment, authentication, notifications, and cloud infrastructure.",
    items: ["Firebase", "Cloud Services", "REST APIs", "Authentication", "Push Notifications"],
  },
  {
    category: "Mobile",
    description: "Cross-platform mobile development for iOS and Android.",
    items: ["React Native", "Expo", "iOS Deployment", "Android Deployment"],
  },
];
