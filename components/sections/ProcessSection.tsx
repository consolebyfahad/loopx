"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { processStages } from "@/data/process";
import { cn } from "@/lib/utils";

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.floor(latest * processStages.length),
      processStages.length - 1
    );
    setActiveStage(Math.max(0, index));
  });

  const stage = processStages[activeStage];

  return (
    <section
      ref={containerRef}
      className="relative bg-[var(--color-surface-light)] text-[var(--color-black)]"
      style={{ height: `${processStages.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="section-padding-x w-full max-w-[1920px] mx-auto">
          <SectionHeader
            light
            label="Process"
            title="From idea to real product."
            subtitle="Six stages from discovery through launch."
            className="mb-10 md:mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute left-[1.125rem] top-0 bottom-0 w-px bg-[var(--color-black)]/10 hidden md:block">
                <motion.div
                  className="w-full bg-[var(--color-cyan)] origin-top"
                  style={{ scaleY: scrollYProgress, height: "100%" }}
                />
              </div>

              <div className="space-y-5 md:space-y-6">
                {processStages.map((s, index) => (
                  <motion.div
                    key={s.number}
                    className={cn(
                      "flex items-start gap-6 md:gap-8 transition-all duration-700 pl-0 md:pl-12",
                      activeStage === index ? "opacity-100" : "opacity-30"
                    )}
                    animate={{ x: activeStage === index ? 0 : -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span
                      className={cn(
                        "text-label shrink-0 transition-colors duration-500",
                        activeStage === index
                          ? "text-[var(--color-blue)]"
                          : "text-[var(--color-black)]/30"
                      )}
                    >
                      {s.number}
                    </span>
                    <div>
                      <h3 className="text-xl md:text-3xl font-medium tracking-tight">
                        {s.title}
                      </h3>
                      <p className="text-[var(--color-black)]/50 text-sm mt-1">
                        {s.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={stage.number}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={stage.image}
                    alt={stage.title}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black)]/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-[var(--color-off-white)]">
                    <p className="text-label text-[var(--color-cyan)] mb-2">
                      {stage.title}
                    </p>
                    <p className="text-base leading-relaxed opacity-90">
                      {stage.detail}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
