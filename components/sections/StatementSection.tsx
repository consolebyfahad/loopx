"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function StatementSection() {
  const prefersReducedMotion = useReducedMotion();
  const lines = ["YOUR IDEA", "DESERVES", "TO EXIST."];

  return (
    <section className="section-padding-sm section-padding-x bg-[var(--color-emerald-dark)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-emerald)] to-[var(--color-emerald-darker)]" />
      </div>

      <h2
        className="text-display text-center relative z-10 max-w-5xl mx-auto"
        aria-label="Your idea deserves to exist"
      >
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              className="block"
              initial={prefersReducedMotion ? {} : { y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h2>
    </section>
  );
}
