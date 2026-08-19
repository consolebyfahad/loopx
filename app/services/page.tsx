import type { Metadata } from "next";
import TextReveal from "@/components/animations/TextReveal";
import Reveal from "@/components/animations/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ServicesList from "@/components/sections/ServicesList";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "LOOPX offers mobile apps, web applications, SaaS products, business websites, custom software, UI/UX design, and ongoing support.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 section-padding-x">
        <div className="max-w-[1920px] mx-auto">
          <SectionLabel>What We Do</SectionLabel>
          <TextReveal
            text={"SOFTWARE\nSERVICES."}
            as="h1"
            className="text-display max-w-3xl mb-8"
          />
          <Reveal delay={0.2}>
            <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mb-4">
              From mobile applications to SaaS platforms, we build digital products
              that solve real problems and scale with your business.
            </p>
            <p className="text-base text-[var(--color-muted)]/70 max-w-3xl">
              Each service below includes strategy, design, and development — not
              just code delivery. Click any service to see what we deliver and who
              it&apos;s ideal for.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding-x pb-24">
        <div className="max-w-[1920px] mx-auto">
          <ServicesList />
        </div>
      </section>

      <CTASection />
    </>
  );
}
