"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/animations/MagneticButton";
import { images } from "@/data/images";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={prefersReducedMotion ? {} : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={images.hero}
          alt="Abstract technology workspace"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[var(--color-emerald-darker)]/50 via-[var(--color-emerald-dark)]/70 to-[var(--color-emerald-darker)]"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
      </motion.div>

      <div className="relative z-10 section-padding-x w-full pb-16 md:pb-24 pt-32">
        <div className="max-w-[1920px] mx-auto">
          <motion.p
            className="text-label text-[var(--color-cyan)] mb-6 md:mb-8"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Software Studio — Idea to Production
          </motion.p>

          <h1 className="text-hero font-medium mb-8 md:mb-12" aria-label="From Idea To Production">
            {["FROM IDEA", "TO PRODUCTION."].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={prefersReducedMotion ? {} : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.1,
                    delay: 0.5 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="text-body-lg text-[var(--color-muted)] max-w-2xl mb-4"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            We design and build software that turns ambitious ideas into products
            people use — mobile apps, web platforms, SaaS products, and custom
            solutions for businesses ready to move forward.
          </motion.p>

          <motion.p
            className="text-base text-[var(--color-muted)]/70 max-w-xl mb-10 md:mb-14"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Strategy. Design. Development. Launch. Growth.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <MagneticButton>
              <Button href="/contact" variant="primary" showArrow>
                Start a Project
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href="/work" variant="secondary">
                Explore Our Work
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        aria-hidden="true"
      >
        <span className="text-label opacity-50">Scroll</span>
        <motion.div
          className="w-px h-12 bg-[var(--color-off-white)]/30"
          animate={prefersReducedMotion ? {} : { scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
