import FadeUp from "@/components/animations/FadeUp";
import Reveal from "@/components/animations/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const highlights = [
  "Mobile apps, web platforms & SaaS products",
  "From first wireframe to App Store launch",
  "Design, development & post-launch support",
];

export default function IntroSection() {
  return (
    <section className="section-padding section-padding-x bg-[var(--color-black)]">
      <div className="max-w-[1920px] mx-auto">
        <SectionHeader
          label="Introduction"
          title="Software that moves business forward."
          subtitle="Ideas into products people actually use."
          className="mb-10 md:mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <FadeUp delay={0.2} className="lg:col-span-7">
            <p className="text-body-lg text-[var(--color-muted)] mb-6">
              LOOPX works with founders, organizations and businesses to turn ideas,
              problems and opportunities into thoughtful digital products — software
              people actually use, not just software that exists.
            </p>
            <p className="text-body-lg text-[var(--color-muted)]">
              Whether you need a mobile app, a company website, a SaaS platform, or
              custom internal tools, we handle the complete journey: strategy, design,
              development, deployment, and growth.
            </p>
          </FadeUp>

          <Reveal delay={0.4} className="lg:col-span-5 lg:pt-4">
            <ul className="space-y-5 border-t border-[var(--color-border)] pt-8">
              {highlights.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-[var(--color-off-white)]"
                >
                  <span className="text-label text-[var(--color-cyan)] shrink-0 mt-1">
                    0{i + 1}
                  </span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
