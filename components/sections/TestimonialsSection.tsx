"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
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
        <SectionHeader
          light
          label="Testimonials"
          title="What people say."
          subtitle="Feedback from founders and product teams."
          className="mb-10 md:mb-12"
        />

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
                  <span className="font-medium text-[var(--color-black)]">
                    {active.author}
                  </span>
                  <span className="text-[var(--color-muted-on-light)]">
                    {" "}
                    — {active.role}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="flex gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? "w-8 bg-[var(--color-emerald)]"
                  : "w-1.5 bg-[var(--color-black)]/20 hover:bg-[var(--color-black)]/40"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
