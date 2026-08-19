import Reveal from "@/components/animations/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { capabilities } from "@/data/testimonials";

export default function TechnologySection() {
  return (
    <section className="section-padding section-padding-x bg-[var(--color-black)]">
      <div className="max-w-[1920px] mx-auto">
        <SectionHeader
          label="Capabilities"
          title="Technology that delivers."
          subtitle="A curated stack for scalable products."
          className="mb-10 md:mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {capabilities.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.05}>
              <h3 className="text-label text-[var(--color-cyan)] mb-2">
                {group.category}
              </h3>
              <p className="text-sm text-[var(--color-muted)]/70 mb-5 leading-relaxed">
                {group.description}
              </p>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-lg font-medium tracking-tight opacity-80 hover:opacity-100 hover:text-[var(--color-light)] transition-all duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
