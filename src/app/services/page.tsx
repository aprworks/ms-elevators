import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { business, services } from "@/lib/content";
import { serviceImages } from "@/lib/images";
import ServiceIcon from "@/components/ServiceIcon";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: `Services | ${business.name}`,
  description: `New lift installation, maintenance, service, and modification of all lifts & spares from ${business.name} in Erragadda, Hyderabad.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Our Services"
        description={`${business.name} offers end-to-end elevator solutions for commercial and residential buildings across Hyderabad.`}
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="space-y-4">
          {services.map((service, i) => {
            const image = serviceImages[service.slug];
            const reversed = i % 2 === 1;
            return (
              <Reveal key={service.slug} delay={0.05 * i}>
                <div
                  id={service.slug}
                  className="scroll-mt-24 overflow-hidden rounded-3xl bg-paper-100"
                >
                  <div className="grid items-stretch gap-0 md:grid-cols-2">
                    <div
                      className={`relative aspect-[4/3] overflow-hidden md:aspect-auto ${
                        reversed ? "md:order-2" : ""
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-12">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-600/20">
                        <ServiceIcon slug={service.slug} className="h-7 w-7" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="mt-5 w-fit uppercase tracking-widest text-brand-700"
                      >
                        Service {String(i + 1).padStart(2, "0")}
                      </Badge>
                      <h2 className="mt-3 font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-mist-500 sm:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-ink-950 px-8 py-10 text-center text-white md:flex-row md:text-left">
            <div>
              <h2 className="font-display text-xl font-semibold sm:text-2xl">
                Not sure which service you need?
              </h2>
              <p className="mt-2 text-white/70">
                Call us and we&apos;ll help you find the right fit.
              </p>
            </div>
            <Button
              render={<a href={`tel:${business.phoneHref}`} />}
              nativeButton={false}
              size="lg"
              className="shrink-0 rounded-full px-6 py-3"
            >
              <Phone className="size-3.5" />
              Call {business.phoneDisplay}
            </Button>
          </div>
        </Reveal>

        <p className="mt-8 text-center text-sm text-mist-500">
          <Link href="/contact" className="font-medium text-brand-600 hover:text-brand-700">
            Prefer to send details instead? Contact us here.
          </Link>
        </p>
      </div>
    </>
  );
}
