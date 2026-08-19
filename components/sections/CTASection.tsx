"use client";

import Reveal from "@/components/animations/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/animations/MagneticButton";

export default function CTASection() {
  return (
    <section className="section-padding section-padding-x bg-[var(--color-navy)] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--color-emerald-darker)]/60 to-transparent" />
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10">
        <SectionHeader
          label="Get Started"
          title="Ready to build what's next?"
          subtitle="Tell us your idea — we'll guide the next step."
          align="center"
          className="mb-10"
        />

        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <MagneticButton>
              <Button href="/contact" variant="primary" size="lg" showArrow>
                Let&apos;s Talk
              </Button>
            </MagneticButton>
            <a
              href="mailto:loopx@gmail.com"
              className="text-body-lg text-[var(--color-surface-light)]/80 link-underline hover:text-[var(--color-light)] transition-colors"
            >
              loopx@gmail.com
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-6 text-center text-[var(--color-muted)]">
            <a
              href="tel:03191718420"
              className="link-underline hover:text-[var(--color-light)] transition-colors"
            >
              03191718420
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
