import type { Metadata } from "next";
import TextReveal from "@/components/animations/TextReveal";
import Reveal from "@/components/animations/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from LOOPX — mobile apps, web platforms, SaaS products, and digital experiences built for the real world.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 section-padding-x">
        <div className="max-w-[1920px] mx-auto">
          <SectionLabel>Portfolio</SectionLabel>
          <TextReveal
            text={"SELECTED\nWORK."}
            as="h1"
            className="text-display max-w-3xl mb-8"
          />
          <Reveal delay={0.2}>
            <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mb-4">
              Fictional case studies that demonstrate the types of products we
              design and build — each with a defined challenge, solution, and
              outcome.
            </p>
            <p className="text-base text-[var(--color-muted)]/70 max-w-2xl">
              These are not real client projects. They represent our capabilities
              across hospitality, commerce, SaaS, and organization platforms.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding-x pb-24">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
