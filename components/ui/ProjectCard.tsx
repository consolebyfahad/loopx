"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Arrow from "./Arrow";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  variant?: "large" | "medium";
  className?: string;
}

export default function ProjectCard({
  project,
  variant = "large",
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn("group block", className)}
    >
      <div
        className={cn(
          "relative overflow-hidden mb-6",
          variant === "large" ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-[3/2]"
        )}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <span className="text-label opacity-50">{project.category}</span>
            <span className="text-label opacity-50">{project.year}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight group-hover:translate-x-1 transition-transform duration-500">
            {project.title}
          </h3>
          <p className="text-[var(--color-muted)] mt-2 max-w-md hidden md:block">
            {project.description}
          </p>
        </div>
        <Arrow className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2" />
      </div>
    </Link>
  );
}
