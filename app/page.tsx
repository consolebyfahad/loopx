import Hero from "@/components/hero/Hero";
import IntroSection from "@/components/sections/IntroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WorkSection from "@/components/sections/WorkSection";
import WhyLoopxSection from "@/components/sections/WhyLoopxSection";
import TechnologySection from "@/components/sections/TechnologySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutSection from "@/components/sections/AboutSection";
import StatementSection from "@/components/sections/StatementSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <WhyLoopxSection />
      <TestimonialsSection />
      <AboutSection />
      <TechnologySection />
      <StatementSection />
      <CTASection />
    </>
  );
}
