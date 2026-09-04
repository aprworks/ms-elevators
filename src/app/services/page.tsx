import type { Metadata } from "next";
import Link from "next/link";
import { business, services } from "@/lib/content";
import ServiceIcon from "@/components/ServiceIcon";
import PageHeader from "@/components/PageHeader";

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
            <div
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 flex flex-col gap-5 rounded-2xl border border-slate-200 p-7 transition-shadow hover:shadow-lg sm:flex-row sm:items-start"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-md shadow-amber-500/20">
                <ServiceIcon slug={service.slug} />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-amber-600">
                  Service {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
            </div>
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
          <a
            href={`tel:${business.phoneHref}`}
            className="shrink-0 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-amber-400"
          >
            Call {business.phoneDisplay}
          </a>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          <Link href="/contact" className="font-medium text-amber-600 hover:text-amber-700">
            Prefer to send details instead? Contact us here.
          </Link>
        </p>
      </div>
    </>
  );
}
