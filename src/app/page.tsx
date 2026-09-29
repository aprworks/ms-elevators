import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { business, services, whyChooseUs } from "@/lib/content";
import { galleryItems } from "@/lib/gallery";
import { heroImage, serviceImages, ctaImage } from "@/lib/images";
import ServiceIcon from "@/components/ServiceIcon";
import FeatureIcon from "@/components/FeatureIcon";
import GalleryImage from "@/components/GalleryImage";
import Reveal from "@/components/Reveal";
import ElevatorDoors from "@/components/ElevatorDoors";
import StatCounter from "@/components/StatCounter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categoryLabels = [
  "Residential Elevator",
  "Passenger Elevator",
  "Hospital Lift",
  "Glass Elevator",
  "Hydraulic Elevator",
  "Goods Elevator",
];

const interiorLabels = ["Elevator Cabin", "Elevator Button", "Elevator Door"];

export default function Home() {
  const categories = categoryLabels
    .map((label) => galleryItems.find((item) => item.label === label))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const interiorShots = interiorLabels
    .map((label) => galleryItems.find((item) => item.label === label))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      {/* Hero */}
      <ElevatorDoors>
        <section className="relative isolate overflow-hidden bg-ink-950">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />

          <div className="relative mx-auto max-w-6xl px-4 pb-28 pt-24 sm:px-6 md:pb-36 md:pt-32">
            <div className="max-w-2xl">
              <Badge className="h-auto rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-brand-300 hover:bg-brand-400/10">
                ★ {business.rating} RATING · {business.reviewCount}+ CUSTOMERS
              </Badge>
              <h1 className="mt-6 font-display text-5xl leading-[1.05] font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
                Engineering the way up.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
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
      </ElevatorDoors>

      {/* Floating stats bar */}
      <div className="relative z-10 mx-auto -mt-14 max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="grid grid-cols-2 gap-0 divide-y divide-ink-950/10 rounded-2xl border border-ink-950/5 bg-paper-50 p-0 shadow-xl shadow-ink-950/10 sm:divide-y-0 sm:divide-x md:grid-cols-4">
            {[
              { label: "Customer Rating", value: business.rating, decimals: 1, suffix: "★" },
              { label: "Customer Ratings", value: business.reviewCount, suffix: "+" },
              { label: "Services Offered", value: services.length, suffix: "" },
            ].map((stat) => (
              <div key={stat.label} className="px-4 py-7 text-center sm:px-6">
                <div className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
                  <StatCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </div>
                <div className="mt-1.5 text-xs font-medium uppercase tracking-widest text-mist-500">
                  {stat.label}
                </div>
              </div>
            ))}
            <div className="px-4 py-7 text-center sm:px-6">
              <div className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
                Erragadda
              </div>
              <div className="mt-1.5 text-xs font-medium uppercase tracking-widest text-mist-500">
                Based In
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Services showcase */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="uppercase tracking-widest text-brand-700">
              Our Services
            </Badge>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink-950 sm:text-4xl md:text-5xl">
              Elevator solutions, end to end
            </h2>
            <p className="mt-4 text-mist-500">
              From first installation to ongoing maintenance, every service is
              handled by trusted, skilled professionals.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-4">
          {services.map((service, i) => {
            const image = serviceImages[service.slug];
            const reversed = i % 2 === 1;
            return (
              <Reveal key={service.slug} delay={0.05 * i}>
                <div
                  id={service.slug}
                  className="group scroll-mt-24 overflow-hidden rounded-3xl bg-paper-100"
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
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-12">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-md shadow-brand-600/20">
                        <ServiceIcon slug={service.slug} />
                      </div>
                      <Badge
                        variant="secondary"
                        className="mt-5 w-fit uppercase tracking-widest text-brand-700"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </Badge>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-mist-500 sm:text-base">
                        {service.description}
                      </p>
                      <Button
                        render={<Link href={`/services#${service.slug}`} />}
                        nativeButton={false}
                        variant="link"
                        className="mt-6 h-auto w-fit p-0 text-sm font-semibold text-brand-600 hover:text-brand-700"
                      >
                        Learn more
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="border-y border-ink-950/5 bg-paper-100">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <Badge variant="secondary" className="uppercase tracking-widest text-brand-700">
                  Explore Categories
                </Badge>
                <h2 className="mt-4 font-display text-3xl font-semibold text-ink-950 sm:text-4xl md:text-5xl">
                  Elevator types we work with
                </h2>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5">
              {categories.map((item, i) => (
                <Reveal key={item.image} delay={0.04 * i}>
                  <Link
                    href="/gallery"
                    className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-ink-950"
                  >
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      sizes="(min-width: 768px) 30vw, 45vw"
                      className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />
                    <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                      <span className="font-display text-sm font-medium text-white sm:text-base">
                        {item.label}
                      </span>
                      <ArrowUpRight className="size-4 text-white/70 opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Interior Experience */}
      {interiorShots.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <Reveal>
              <div>
                <Badge variant="secondary" className="uppercase tracking-widest text-brand-700">
                  Interior Experience
                </Badge>
                <h2 className="mt-4 font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
                  Designed around the way you move.
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-mist-500 sm:text-base">
                  {services.find((s) => s.slug === "new-lift-installation")?.description}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-mist-500 sm:text-base">
                  {services.find((s) => s.slug === "modification-spares")?.description}
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              {interiorShots.map((item, i) => (
                <Reveal
                  key={item.image}
                  delay={0.08 * i}
                  className={i === 0 ? "col-span-2" : ""}
                >
                  <div
                    className={`group relative overflow-hidden rounded-2xl bg-paper-100 ${
                      i === 0 ? "aspect-[16/9]" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      sizes="(min-width: 768px) 25vw, 45vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why choose us */}
      <section className="border-y border-ink-950/5 bg-paper-100">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Badge variant="secondary" className="uppercase tracking-widest text-brand-700">
                Why Us
              </Badge>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink-950 sm:text-4xl md:text-5xl">
                Why choose {business.name}
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={0.05 * i}>
                <div className="group h-full rounded-2xl bg-paper-50 p-7 ring-1 ring-ink-950/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-950/5">
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
      </section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <Reveal>
          <div className="flex flex-col items-end justify-between gap-4 sm:flex-row">
            <div>
              <Badge variant="secondary" className="uppercase tracking-widest text-brand-700">
                Gallery
              </Badge>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink-950 sm:text-4xl">
                Elevator types we work with
              </h2>
              <p className="mt-4 max-w-2xl text-mist-500">
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
        </Reveal>

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
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 md:pb-32">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-ink-950">
            <Image
              src={ctaImage.src}
              alt={ctaImage.alt}
              fill
              sizes="100vw"
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/60" />
            <div className="relative flex flex-col items-center justify-between gap-6 px-8 py-14 text-center text-white md:flex-row md:px-14 md:text-left">
              <div>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl md:text-4xl">
                  Let&apos;s elevate your next space.
                </h2>
                <p className="mt-3 text-white/70">
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
        </Reveal>
      </section>
    </>
  );
}
