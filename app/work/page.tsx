import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
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
          <SectionHeader
            as="h1"
            label="Portfolio"
            title="Selected work."
            subtitle="Case studies across hospitality, commerce, and SaaS."
            className="mb-8"
          />
        </div>
      </section>

      <section className="section-padding-x pb-24">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
