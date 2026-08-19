import TextReveal from "@/components/animations/TextReveal";
import ImageReveal from "@/components/animations/ImageReveal";
import Reveal from "@/components/animations/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { companyValues } from "@/data/testimonials";
import { images } from "@/data/images";

export default function AboutSection() {
  return (
    <section className="section-padding section-padding-x bg-[var(--color-black)]">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <SectionLabel>About</SectionLabel>
            <TextReveal
              text={"WHO IS\nLOOPX?"}
              as="h2"
              className="text-display max-w-lg mb-8"
            />

            <Reveal delay={0.2}>
              <p className="text-body-lg text-[var(--color-muted)] mb-6">
                LOOPX is a software company focused on turning ideas into useful,
                scalable digital products. We&apos;re not a generic dev shop — we&apos;re
                a product studio that thinks before it builds.
              </p>
              <p className="text-body-lg text-[var(--color-muted)] mb-6">
                We work across product strategy, UI/UX design, development, and
                launch — helping founders, organizations, and businesses move from
                a rough concept to software that works in the real world.
              </p>
              <p className="text-base text-[var(--color-muted)]/70 mb-10">
                Based on a simple belief: your idea deserves to exist as a product
                people actually use.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <ul className="space-y-6 mb-10">
                {companyValues.map((value) => (
                  <li key={value.title} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-cyan)] mt-2.5 shrink-0" />
                    <div>
                      <p className="text-[var(--color-off-white)] font-medium mb-1">
                        {value.title}
                      </p>
                      <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.4}>
              <Button href="/about" variant="secondary" showArrow>
                More About Us
              </Button>
            </Reveal>
          </div>

          <ImageReveal
            src={images.about.team}
            alt="Team collaborating on software product"
            className="aspect-[4/5] relative"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
