import type { Metadata } from "next";
import Image from "next/image";
import { business, whyChooseUs } from "@/lib/content";
import { residentialImage } from "@/lib/images";
import PageHeader from "@/components/PageHeader";
import FeatureIcon from "@/components/FeatureIcon";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: `About Us | ${business.name}`,
  description: `Learn about ${business.name}, a leading elevator installation, repair, and maintenance company based in Erragadda, Hyderabad.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={`About ${business.name}`}
        description="A trusted name in elevator installation, repair, and maintenance in Erragadda, Hyderabad."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <Reveal>
            <div>
              <p className="font-display text-2xl leading-snug text-ink-950 sm:text-3xl">
                Run by proprietor {business.proprietor}, {business.name} is a
                top and well-known lift repair and services company in
                Erragadda, Hyderabad.
              </p>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-mist-500">
                <p>
                  We are one of the leading firms in the area, set up to
                  cater to the growing elevator requirements of commercial
                  and residential spaces across sectors.
                </p>
                <p>
                  We undertake new lift installation for buildings of every
                  size, backed by trusted and skilled professionals who
                  deliver dependable service when something goes wrong.
                  Beyond installation and service, we handle all types of
                  maintenance, so building owners can keep their elevators
                  compliant and running smoothly year-round.
                </p>
                <p>
                  We also modify and modernise all types of existing lifts,
                  supplying genuine spares to bring older elevators up to
                  current safety and performance standards, wherever you are
                  in Hyderabad.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4 rounded-2xl border border-brand-200 bg-brand-50 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                  {business.rating}★
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-900">
                    Rated {business.rating} out of 5 from {business.reviewCount}
                    + customer ratings
                  </p>
                  <p className="mt-0.5 text-sm text-brand-700">
                    Consistent, dependable service across Erragadda and
                    Hyderabad.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-paper-100">
              <Image
                src={residentialImage.src}
                alt={residentialImage.alt}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <h2 className="mt-24 text-center font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
            What Sets Us Apart
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {whyChooseUs.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * i}>
              <div className="h-full rounded-2xl bg-paper-100 p-6 ring-1 ring-ink-950/5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-white">
                  <FeatureIcon name={item.icon} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-500">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
