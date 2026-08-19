import type { Metadata } from "next";
import TextReveal from "@/components/animations/TextReveal";
import ImageReveal from "@/components/animations/ImageReveal";
import Reveal from "@/components/animations/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import CTASection from "@/components/sections/CTASection";
import { companyValues } from "@/data/testimonials";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "LOOPX is a software company focused on turning ideas into useful, scalable digital products through strategy, design, and development.",
};

const approach = [
  {
    title: "Listen First",
    description:
      "We start every project by understanding your goals, constraints, audience, and success metrics. No assumptions — just structured discovery that saves time later.",
  },
  {
    title: "Design With Purpose",
    description:
      "Every interface decision serves the user and the business. We wireframe, prototype, and refine until the experience feels obvious — not decorated.",
  },
  {
    title: "Build To Last",
    description:
      "Clean architecture, tested code, and scalable infrastructure. Products built to grow with your users, not break the moment traffic arrives.",
  },
  {
    title: "Stay Connected",
    description:
      "Launch is a milestone, not an endpoint. We offer ongoing support, feature development, and scaling guidance as your product evolves.",
  },
];

const stats = [
  { label: "Services", value: "8" },
  { label: "Process stages", value: "6" },
  { label: "Focus", value: "Product-first" },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 section-padding-x pb-16">
        <div className="max-w-[1920px] mx-auto">
          <SectionLabel>About LOOPX</SectionLabel>
          <TextReveal
            text={"IDEAS INTO\nPRODUCTS."}
            as="h1"
            className="text-display max-w-3xl mb-8"
          />
          <Reveal delay={0.2}>
            <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mb-4">
              LOOPX is a software company focused on turning ideas into useful,
              scalable digital products. We partner with founders, organizations,
              and businesses that need more than a website — they need software
              that works.
            </p>
            <p className="text-base text-[var(--color-muted)]/70 max-w-2xl">
              From mobile apps and SaaS platforms to company websites and custom
              internal tools, we cover strategy, design, development, launch, and
              growth under one roof.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex gap-12 mt-12 pt-8 border-t border-[var(--color-border)]">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-medium tracking-tight mb-1">
                  {stat.value}
                </p>
                <p className="text-label opacity-50">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-padding-x mb-24">
        <div className="max-w-[1920px] mx-auto">
          <ImageReveal
            src={images.about.hero}
            alt="Modern office workspace"
            className="aspect-[21/9] relative mb-16"
            fill
            sizes="100vw"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
            {approach.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <span className="text-label text-[var(--color-cyan)] block mb-4">
                  0{index + 1}
                </span>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-3">
                  {item.title}
                </h2>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2 className="text-2xl font-medium mb-8">What we stand for</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companyValues.map((value) => (
                <li key={value.title} className="border-t border-[var(--color-border)] pt-6">
                  <p className="font-medium mb-2">{value.title}</p>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-padding section-padding-x bg-[var(--color-navy)]">
        <div className="max-w-[1920px] mx-auto text-center">
          <TextReveal
            text={"BUILT ON\nTRUST & CRAFT."}
            as="h2"
            className="text-display max-w-3xl mx-auto mb-8"
          />
          <Reveal delay={0.2}>
            <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mx-auto mb-4">
              Great software comes from the intersection of product thinking,
              design craft, and engineering excellence. That&apos;s what we bring
              to every project — whether it&apos;s a startup MVP or an enterprise
              platform.
            </p>
            <p className="text-base text-[var(--color-muted)]/60 max-w-xl mx-auto">
              Ready to talk? We&apos;d like to hear what you&apos;re building.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
