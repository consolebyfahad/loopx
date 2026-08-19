import type { Metadata } from "next";
import Reveal from "@/components/animations/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with LOOPX to discuss your software project. We build mobile apps, web applications, SaaS products, and custom software.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 section-padding-x pb-16">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <SectionHeader
                as="h1"
                label="Contact"
                title="Let's build something."
                subtitle="We respond within one business day."
                className="mb-8"
              />

              <Reveal delay={0.3}>
                <div className="space-y-4 text-[var(--color-muted)]">
                  <div>
                    <span className="text-label block mb-1 opacity-50">Email</span>
                    <a
                      href="mailto:loopx@gmail.com"
                      className="text-lg link-underline hover:text-[var(--color-cyan)] transition-colors"
                    >
                      loopx@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="text-label block mb-1 opacity-50">Phone</span>
                    <a
                      href="tel:03191718420"
                      className="text-lg link-underline hover:text-[var(--color-cyan)] transition-colors"
                    >
                      03191718420
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
