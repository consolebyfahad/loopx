"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Arrow from "@/components/ui/Arrow";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function WorkSlide({ project, isActive }: { project: Project; isActive: boolean }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group block w-full shrink-0 px-0 md:px-2 transition-opacity duration-500",
        isActive ? "opacity-100" : "opacity-40"
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
        </div>

        <div className="lg:col-span-5">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-label text-[var(--color-cyan)]">{project.category}</span>
            <span className="text-label opacity-50">{project.year}</span>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-3 group-hover:translate-x-1 transition-transform duration-500">
            {project.title}
          </h3>
          <p className="text-base md:text-lg text-[var(--color-muted)] mb-5 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-label border border-[var(--color-border)] px-3 py-1.5 opacity-60"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-2 text-sm tracking-wide uppercase opacity-70 group-hover:opacity-100 group-hover:text-[var(--color-cyan)] transition-all duration-300">
            View project
            <Arrow className="group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function WorkSectionFallback() {
  return (
    <section className="section-padding section-padding-x bg-[var(--color-black)]">
      <div className="max-w-[1920px] mx-auto">
        <SectionHeader
          size="sm"
          label="Selected Work"
          title="Built for the real world."
          subtitle="Hospitality, commerce, analytics, and community."
          className="mb-10"
        />
        <div className="space-y-16">
          {projects.map((project) => (
            <WorkSlide key={project.id} project={project} isActive />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.floor(latest * projects.length),
      projects.length - 1
    );
    setActiveIndex(Math.max(0, index));
  });

  if (prefersReducedMotion) {
    return <WorkSectionFallback />;
  }

  return (
    <section
      ref={containerRef}
      className="relative bg-[var(--color-black)]"
      style={{ height: `${projects.length * 100}vh` }}
      aria-label="Selected work showcase"
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Compact header — gives more room to project slides */}
        <div className="section-padding-x pt-20 md:pt-24 pb-4 md:pb-5 shrink-0">
          <div className="max-w-[1920px] mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <SectionHeader
              size="sm"
              label="Selected Work"
              title="Built for the real world."
              subtitle="Hospitality, commerce, analytics, and community."
              className="mb-0"
            />
            <Button href="/work" variant="secondary" size="sm" showArrow>
              View All Work
            </Button>
          </div>
        </div>

        {/* Horizontal track — takes most of the viewport */}
        <div className="flex-1 section-padding-x overflow-hidden min-h-0 pb-2">
          <div className="max-w-[1920px] mx-auto h-full flex flex-col justify-center overflow-hidden">
            <motion.div
              className="flex"
              style={{ width: `${projects.length * 100}%` }}
              animate={{ x: `-${activeIndex * (100 / projects.length)}%` }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="shrink-0"
                  style={{ width: `${100 / projects.length}%` }}
                >
                  <WorkSlide project={project} isActive={activeIndex === index} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Progress */}
        <div className="section-padding-x pb-8 md:pb-10 shrink-0">
          <div className="max-w-[1920px] mx-auto flex items-center justify-between gap-8">
            <div className="flex items-center gap-4 md:gap-6">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  className="group flex items-center gap-2"
                  aria-label={`Project ${index + 1}: ${project.title}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                >
                  <span
                    className={cn(
                      "text-label transition-colors duration-500",
                      activeIndex === index
                        ? "text-[var(--color-cyan)]"
                        : "text-[var(--color-muted)] opacity-40"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "hidden sm:block text-sm transition-all duration-500",
                      activeIndex === index
                        ? "opacity-100"
                        : "opacity-0 w-0 overflow-hidden"
                    )}
                  >
                    {project.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="w-20 md:w-32 h-px bg-[var(--color-border)] overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--color-cyan)] origin-left"
                  style={{ scaleX: scrollYProgress }}
                />
              </div>
              <span className="text-label opacity-50">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
