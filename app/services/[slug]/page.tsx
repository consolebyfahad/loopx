import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";
import { services, getServiceBySlug } from "@/data/services";
import CTASection from "@/components/sections/CTASection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <section className="pt-32 md:pt-40 section-padding-x">
        <div className="max-w-[1920px] mx-auto">
          <SectionHeader
            as="h1"
            label={service.number}
            title={service.title.endsWith(".") ? service.title : `${service.title}.`}
            subtitle={service.description}
            className="mb-8"
          />
          <Reveal delay={0.2}>
            <p className="text-body-lg text-[var(--color-muted)] max-w-2xl mb-4">
              {service.description}
            </p>
            <p className="text-base text-[var(--color-muted)]/70 max-w-3xl">
              {service.longDescription}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding-x mb-16">
        <div className="max-w-[1920px] mx-auto">
          <div className="relative aspect-[21/9] overflow-hidden mb-16">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-medium mb-6">What we deliver</h2>
              <ul className="space-y-4 mb-10">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-4 text-[var(--color-muted)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-cyan)] shrink-0 mt-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-medium mb-6">Ideal for</h2>
              <ul className="space-y-4 mb-10">
                {service.idealFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-[var(--color-muted)]"
                  >
                    <span className="text-label text-[var(--color-cyan)] shrink-0 mt-1">
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="primary" showArrow>
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
