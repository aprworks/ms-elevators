import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { business, services } from "@/lib/content";
import ServiceIcon from "@/components/ServiceIcon";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
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

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
        <div className="space-y-6">
          {services.map((service, i) => (
            <Card
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 rounded-2xl p-7 shadow-none transition-shadow hover:shadow-lg"
            >
              <CardContent className="flex flex-col gap-5 p-0 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-600/20">
                  <ServiceIcon slug={service.slug} className="h-7 w-7" />
                </div>
                <div>
                  <Badge variant="secondary" className="uppercase tracking-wide text-brand-700">
                    Service {String(i + 1).padStart(2, "0")}
                  </Badge>
                  <h2 className="mt-2 text-xl font-bold text-slate-900">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl bg-slate-950 px-8 py-10 text-center text-white md:flex-row md:text-left">
          <div>
            <h2 className="text-xl font-bold">
              Not sure which service you need?
            </h2>
            <p className="mt-2 text-slate-300">
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

        <p className="mt-8 text-center text-sm text-slate-500">
          <Link href="/contact" className="font-medium text-brand-600 hover:text-brand-700">
            Prefer to send details instead? Contact us here.
          </Link>
        </p>
      </div>
    </>
  );
}
