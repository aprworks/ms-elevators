import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { business, services, whyChooseUs } from "@/lib/content";
import { galleryItems } from "@/lib/gallery";
import ServiceIcon from "@/components/ServiceIcon";
import FeatureIcon from "@/components/FeatureIcon";
import GalleryImage from "@/components/GalleryImage";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
            <Badge className="h-auto rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-brand-300 hover:bg-brand-400/10">
              ★ {business.rating} RATING · {business.reviewCount}+ CUSTOMERS
            </Badge>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              {business.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {business.name} installs, repairs, and maintains elevators for
              commercial and residential buildings across Hyderabad, with
              skilled technicians and dependable doorstep service.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                render={<a href={`tel:${business.phoneHref}`} />}
                nativeButton={false}
                size="lg"
                className="rounded-full px-7 py-3.5 shadow-lg shadow-brand-600/20"
              >
                <Phone className="size-4" />
                Call {business.phoneDisplay}
              </Button>
              <Button
                render={<Link href="/contact" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="rounded-full border-white/25 bg-white/5 px-7 py-3.5 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
              >
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating stats bar */}
      <div className="relative z-10 mx-auto -mt-14 max-w-5xl px-4 sm:px-6">
        <Card className="grid grid-cols-2 gap-0 divide-y divide-slate-100 rounded-2xl p-0 shadow-xl sm:divide-y-0 sm:divide-x md:grid-cols-4">
          {[
            { label: "Customer Rating", value: `${business.rating}★` },
            { label: "Customer Ratings", value: `${business.reviewCount}+` },
            { label: "Services Offered", value: `${services.length}` },
            { label: "Based In", value: "Erragadda" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-6 text-center sm:px-6">
              <div className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </Card>
      </div>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="uppercase tracking-wide text-brand-700">
            Our Services
          </Badge>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-slate-600">
            End-to-end elevator solutions, from first installation to
            ongoing maintenance.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.slug}
              className="group rounded-2xl p-7 shadow-none ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 hover:ring-brand-300"
            >
              <CardContent className="p-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-600/20">
                  <ServiceIcon slug={service.slug} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.short}
                </p>
                <Button
                  render={<Link href={`/services#${service.slug}`} />}
                  nativeButton={false}
                  variant="link"
                  className="mt-4 h-auto p-0 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Learn more
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="uppercase tracking-wide text-brand-700">
              Why Us
            </Badge>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Why Choose {business.name}
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="rounded-2xl p-6 shadow-sm">
                <CardContent className="p-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-white">
                    <FeatureIcon name={item.icon} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="flex flex-col items-end justify-between gap-4 sm:flex-row">
          <div>
            <Badge variant="secondary" className="uppercase tracking-wide text-brand-700">
              Gallery
            </Badge>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Elevator Types We Work With
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              From passenger and hospital lifts to hydraulic and MRL
              systems, we install and service a wide range of elevators.
            </p>
          </div>
          <Button
            render={<Link href="/gallery" />}
            nativeButton={false}
            variant="link"
            className="h-auto shrink-0 p-0 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            View full gallery
            <ArrowRight className="size-3.5" />
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-8">
          {galleryItems.slice(0, 8).map((item) => (
            <GalleryImage
              key={item.image}
              item={item}
              sizes="(min-width: 768px) 12vw, (min-width: 640px) 25vw, 33vw"
            />
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
            <Button
              render={<a href={`tel:${business.phoneHref}`} />}
              nativeButton={false}
              size="lg"
              className="shrink-0 rounded-full px-7 py-3.5 shadow-lg shadow-brand-600/20"
            >
              <Phone className="size-4" />
              Call {business.phoneDisplay}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
