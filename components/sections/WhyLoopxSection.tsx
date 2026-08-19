import Reveal from "@/components/animations/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { principles } from "@/data/testimonials";

export default function WhyLoopxSection() {
  return (
    <section className="section-padding section-padding-x bg-[var(--color-navy)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-emerald)]/20 to-transparent" />
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10">
        <SectionHeader
          label="Why LOOPX"
          title="We don't just write code."
          subtitle="Product thinking before development."
          className="mb-10 md:mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {principles.map((principle, index) => (
            <Reveal key={principle.number} delay={0.1 + index * 0.05}>
              <span className="text-label text-[var(--color-cyan)] block mb-3">
                {principle.number}
              </span>
              <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2 text-[var(--color-text-light)]">
                {principle.title}
              </h3>
              <p className="text-[var(--color-muted)] mb-2 text-sm md:text-base">
                {principle.description}
              </p>
              <p className="text-sm text-[var(--color-muted)]/60 leading-relaxed">
                {principle.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
