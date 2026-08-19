import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
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
          <SectionHeader
            as="h1"
            label="What We Do"
            title="Software services."
            subtitle="Apps, SaaS, websites, and custom software."
            className="mb-8"
          />
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
