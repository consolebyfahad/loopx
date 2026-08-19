import Reveal from "@/components/animations/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { principles } from "@/data/testimonials";

export default function WhyLoopxSection() {
  return (
    <section className="section-padding section-padding-x bg-[var(--color-navy)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-emerald)]/20 to-transparent" />
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10">
        <SectionLabel>Why LOOPX</SectionLabel>
        <h2 className="text-display max-w-4xl mb-4">
          WE DON&apos;T JUST
          <br />
          WRITE CODE.
        </h2>

        <Reveal delay={0.1}>
          <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mb-2">
            We think about the product, the people using it, the business behind
            it, and what happens after launch. Code is the output — product
            thinking is the process.
          </p>
          <p className="text-base text-[var(--color-muted)]/70 max-w-xl mb-10 md:mb-12">
            Most agencies build what you ask for. We help you build what you need.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {principles.map((principle, index) => (
            <Reveal key={principle.number} delay={0.1 + index * 0.05}>
              <span className="text-label text-[var(--color-cyan)] block mb-3">
                {principle.number}
              </span>
              <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2">
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
