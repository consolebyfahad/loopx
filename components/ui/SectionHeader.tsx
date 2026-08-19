"use client";

import Reveal from "@/components/animations/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle: string;
  light?: boolean;
  align?: "left" | "center";
  size?: "default" | "sm";
  as?: "h1" | "h2";
  className?: string;
  labelClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  light = false,
  align = "left",
  size = "default",
  as: Heading = "h2",
  className,
  labelClassName,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  const titleColor = light
    ? "text-[var(--color-black)]"
    : "text-[var(--color-text-light)]";
  const subtitleColor = light
    ? "text-[var(--color-muted-on-light)]"
    : "text-[var(--color-muted)]";

  return (
    <header className={cn(align === "center" && "text-center", className)}>
      <SectionLabel light={light} className={labelClassName}>
        {label}
      </SectionLabel>

      <Reveal>
        <Heading
          className={cn(
            size === "sm" ? "text-display-sm" : "text-display",
            "mb-4 md:whitespace-nowrap",
            titleColor,
            titleClassName
          )}
        >
          {title}
        </Heading>
      </Reveal>

      <Reveal delay={0.08}>
        <p
          className={cn(
            "text-base leading-relaxed max-w-2xl md:whitespace-nowrap md:truncate",
            subtitleColor,
            align === "center" && "mx-auto",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      </Reveal>
    </header>
  );
}
