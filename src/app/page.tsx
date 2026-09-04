import Link from "next/link";
import Image from "next/image";
import { business, services, whyChooseUs } from "@/lib/content";
import { galleryItems } from "@/lib/gallery";
import ServiceIcon from "@/components/ServiceIcon";
import FeatureIcon from "@/components/FeatureIcon";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <Image
          src="https://images.jdmagicbox.com/quickquotes/images_main/amplo-elevators-cabin-008-2217805231-whca1ihf.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-6xl px-4 pb-28 pt-20 sm:px-6 md:pb-32 md:pt-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-amber-300">
              ★ {business.rating} RATING · {business.reviewCount}+ CUSTOMERS
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              {business.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {business.name} installs, repairs, and maintains elevators for
              commercial and residential buildings across Hyderabad, with
              skilled technicians and dependable doorstep service.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={`tel:${business.phoneHref}`}
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-500/20 transition-all hover:bg-amber-400 hover:shadow-amber-500/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                </svg>
                Call {business.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating stats bar */}
      <div className="relative z-10 mx-auto -mt-14 max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-xl md:grid-cols-4">
          {[
            { label: "Customer Rating", value: `${business.rating}★` },
            { label: "Customer Ratings", value: `${business.reviewCount}+` },
            { label: "Services Offered", value: `${services.length}` },
            { label: "Based In", value: "Erragadda" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white px-4 py-6 text-center sm:px-6"
            >
              <div className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            Our Services
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-slate-600">
            End-to-end elevator solutions, from first installation to
            ongoing maintenance.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="group rounded-2xl border border-slate-200 p-7 transition-all hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-200/60"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-md shadow-amber-500/20">
                <ServiceIcon slug={service.slug} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.short}
              </p>
              <Link
                href={`/services#${service.slug}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 transition-colors group-hover:text-amber-700"
              >
                Learn more
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
              Why Us
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Why Choose {business.name}
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-amber-400">
                  <FeatureIcon name={item.icon} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="flex flex-col items-end justify-between gap-4 sm:flex-row">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
              Gallery
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Elevator Types We Work With
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              From passenger and hospital lifts to hydraulic and MRL
              systems, we install and service a wide range of elevators.
            </p>
          </div>
          <Link
            href="/gallery"
            className="shrink-0 text-sm font-semibold text-amber-600 hover:text-amber-700"
          >
            View full gallery →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-8">
          {galleryItems.slice(0, 8).map((item) => (
            <div
              key={item.image}
              className="group relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="(min-width: 768px) 12vw, (min-width: 640px) 25vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0 to-slate-950/0 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 px-2 pb-2 text-center text-[11px] font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 md:pb-28">
        <div className="relative isolate overflow-hidden rounded-3xl bg-slate-950">
          <Image
            src="https://images.jdmagicbox.com/quickquotes/images_main/automatic-passenger-elevator-lift-2217805222-3wi95wrj.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
          <div className="relative flex flex-col items-center justify-between gap-6 px-8 py-12 text-center text-white md:flex-row md:text-left md:px-14">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Need an elevator installed, repaired, or serviced?
              </h2>
              <p className="mt-2 text-slate-300">
                Talk to {business.name} in Erragadda, Hyderabad today.
              </p>
            </div>
            <a
              href={`tel:${business.phoneHref}`}
              className="shrink-0 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-500/20 transition-all hover:bg-amber-400"
            >
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
