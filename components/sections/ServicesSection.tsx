"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="section-padding section-padding-x bg-[var(--color-black)] relative">
      <div className="max-w-[1920px] mx-auto">
        <SectionLabel>Services</SectionLabel>
        <h2 className="text-display max-w-4xl mb-4">
          WHAT CAN WE
          <br />
          BUILD TOGETHER?
        </h2>

        <Reveal delay={0.1}>
          <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mb-10 md:mb-12">
            From mobile apps to SaaS platforms and company websites — we cover the
            full spectrum of software development. Hover a service to explore, or tap
            through on mobile.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                isActive={activeIndex === index}
                onHover={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <div className="hidden lg:block lg:col-span-5 sticky top-32 h-fit">
            <div className="relative aspect-[4/5] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    sizes="40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black)]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                      {activeService.longDescription.slice(0, 180)}…
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
