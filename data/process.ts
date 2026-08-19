import { images } from "./images";

export interface ProcessStage {
  number: string;
  title: string;
  description: string;
  detail: string;
  image: string;
}

export const processStages: ProcessStage[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand the problem, users and business.",
    detail:
      "We map your goals, audience, and constraints through stakeholder interviews, user research, and competitive analysis. No assumptions — just clarity about what the product needs to solve.",
    image: images.process.discover,
  },
  {
    number: "02",
    title: "DEFINE",
    description: "Shape the idea into a clear product direction.",
    detail:
      "We translate insights into a focused product scope: core features, user flows, technical requirements, and a realistic timeline. You leave with a roadmap, not a vague pitch deck.",
    image: images.process.define,
  },
  {
    number: "03",
    title: "DESIGN",
    description: "Create the user experience and visual system.",
    detail:
      "Wireframes evolve into polished interfaces. We design every screen, interaction, and state — building a cohesive visual system that feels intentional on mobile, tablet, and desktop.",
    image: images.process.design,
  },
  {
    number: "04",
    title: "BUILD",
    description: "Develop the actual product with scalable technology.",
    detail:
      "Our engineers write clean, tested, maintainable code. We work in structured sprints with regular demos, so you see progress weekly — not just at the end.",
    image: images.process.build,
  },
  {
    number: "05",
    title: "LAUNCH",
    description: "Deploy, test and bring the product to users.",
    detail:
      "We handle deployment, QA, App Store submissions, performance checks, and launch monitoring. Your product goes live with confidence, not crossed fingers.",
    image: images.process.launch,
  },
  {
    number: "06",
    title: "GROW",
    description: "Improve, maintain and scale the product.",
    detail:
      "Post-launch, we track usage, fix issues, ship improvements, and help you scale infrastructure as your user base grows. The relationship doesn't end at deployment.",
    image: images.process.grow,
  },
];
