import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import TextReveal from "@/components/animations/TextReveal";
import Reveal from "@/components/animations/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { projects, getProjectBySlug } from "@/data/projects";
import CTASection from "@/components/sections/CTASection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <section className="pt-32 md:pt-40 section-padding-x">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <SectionLabel>{project.category}</SectionLabel>
            <span className="text-label opacity-50">{project.year}</span>
          </div>
          <TextReveal
            text={project.title}
            as="h1"
            className="text-display max-w-4xl mb-8"
          />
          <Reveal delay={0.2}>
            <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mb-4">
              {project.description}
            </p>
            <p className="text-base text-[var(--color-muted)]/70 max-w-3xl">
              {project.longDescription}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding-x mb-16">
        <div className="max-w-[1920px] mx-auto">
          <div className="relative aspect-[16/9] overflow-hidden mb-12">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-3 mb-16">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-label border border-[var(--color-border)] px-4 py-2"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-t border-[var(--color-border)] pt-12">
            <Reveal>
              <h2 className="text-label text-[var(--color-cyan)] mb-4">Challenge</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                {project.challenge}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-label text-[var(--color-cyan)] mb-4">Solution</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                {project.solution}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-label text-[var(--color-cyan)] mb-4">Outcome</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">
                {project.outcome}
              </p>
            </Reveal>
          </div>

          <p className="text-sm text-[var(--color-muted)] italic mb-12">
            Fictional case study — created to showcase LOOPX capabilities, not a
            real client engagement.
          </p>

          <Button href="/contact" variant="primary" showArrow>
            Start a Similar Project
          </Button>
        </div>
      </section>

      <CTASection />
    </>
  );
}
