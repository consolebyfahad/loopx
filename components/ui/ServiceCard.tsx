"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Arrow from "./Arrow";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  isActive: boolean;
  onHover: () => void;
}

export default function ServiceCard({ service, isActive, onHover }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block border-t border-[var(--color-border)] py-8 md:py-10 transition-colors duration-500 hover:border-[var(--color-cyan)]/30"
      onMouseEnter={onHover}
    >
      <div className="flex items-start justify-between gap-6 md:gap-12">
        <div className="flex items-start gap-6 md:gap-12 flex-1 min-w-0">
          <motion.span
            className={cn(
              "text-label shrink-0 transition-opacity duration-500",
              isActive ? "opacity-100 text-[var(--color-cyan)]" : "opacity-40"
            )}
          >
            {service.number}
          </motion.span>

          <div className="flex-1 min-w-0">
            <motion.h3
              className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2"
            >
              {service.title}
            </motion.h3>

            <motion.p
              className={cn(
                "text-body-lg text-[var(--color-muted)] mt-3 max-w-xl transition-all duration-500",
                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 md:opacity-0"
              )}
            >
              {service.shortDescription}
            </motion.p>
          </div>
        </div>

        <motion.div
          className={cn(
            "shrink-0 transition-all duration-500",
            isActive ? "translate-x-2 text-[var(--color-cyan)]" : "opacity-40"
          )}
        >
          <Arrow className="group-hover:translate-x-2" />
        </motion.div>
      </div>

      {/* Mobile image */}
      <div className="mt-6 md:hidden overflow-hidden rounded-sm aspect-[16/9] relative">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </Link>
  );
}
