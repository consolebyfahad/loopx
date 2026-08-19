import Reveal from "@/components/animations/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { capabilities } from "@/data/testimonials";

export default function TechnologySection() {
  return (
    <section className="section-padding section-padding-x bg-[var(--color-black)]">
      <div className="max-w-[1920px] mx-auto">
        <SectionLabel>Capabilities</SectionLabel>
        <h2 className="text-display max-w-3xl mb-4">
          TECHNOLOGY
          <br />
          THAT DELIVERS.
        </h2>

        <Reveal delay={0.1}>
          <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mb-10 md:mb-12">
            We use a curated, battle-tested stack — not every framework under the
            sun. The right tools for maintainable, scalable products that your team
            can grow with long after launch.
          </p>
        </Reveal>

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
