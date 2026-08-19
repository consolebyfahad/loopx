"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [next]);

  const active = testimonials[activeIndex];

  return (
    <section className="section-padding section-padding-x bg-[var(--color-surface-light)] text-[var(--color-black)]">
      <div className="max-w-[1920px] mx-auto">
        <SectionLabel light>Testimonials</SectionLabel>
        <h2 className="text-display max-w-2xl mb-4 text-[var(--color-black)]">
          WHAT PEOPLE
          <br />
          SAY.
        </h2>
        <p className="text-base text-[var(--color-muted-on-light)] max-w-xl mb-10 md:mb-12">
          Placeholder feedback from representative client roles — not attributed
          to real companies.
        </p>

        <div className="relative min-h-[240px] md:min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <p className="text-xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-snug mb-6 text-[var(--color-black)]">
                &ldquo;{active.quote}&rdquo;
              </p>
              <footer className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <cite className="not-italic">
                  <span className="font-medium text-[var(--color-black)]">{active.author}</span>
                  <span className="text-[var(--color-muted-on-light)] ml-3">
                    {active.role}
                  </span>
                </cite>
                <span className="hidden sm:block text-[var(--color-border-light)]">|</span>
                <span className="text-sm text-[var(--color-muted-on-light)]">
                  {active.project}
                </span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="flex gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="group p-1"
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <span
                className={`block h-px transition-all duration-500 ${
                  activeIndex === index
                    ? "w-12 bg-[var(--color-emerald)]"
                    : "w-6 bg-[var(--color-black)]/15 group-hover:bg-[var(--color-black)]/30"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
