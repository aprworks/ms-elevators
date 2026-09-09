import type { Metadata } from "next";
import { business, whyChooseUs } from "@/lib/content";
import PageHeader from "@/components/PageHeader";
import FeatureIcon from "@/components/FeatureIcon";
import { Card, CardContent } from "@/components/ui/card";

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

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
        <div className="space-y-5 text-base leading-relaxed text-slate-700">
          <p>
            {business.name} is a top and well-known lift repair and services
            company in Erragadda, Hyderabad, also recognised for elevator
            service and elevator installation. Run by proprietor{" "}
            {business.proprietor}, we are one of the leading firms in the
            area, set up to cater to the growing elevator requirements of
            commercial and residential spaces across sectors.
          </p>
          <p>
            We undertake new lift installation for buildings of every size,
            backed by trusted and skilled professionals who deliver
            dependable service when something goes wrong. Beyond
            installation and service, we handle all types of maintenance,
            so building owners can keep their elevators compliant and
            running smoothly year-round.
          </p>
          <p>
            We also modify and modernise all types of existing lifts,
            supplying genuine spares to bring older elevators up to current
            safety and performance standards, wherever you are in
            Hyderabad.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-4 rounded-2xl border border-brand-200 bg-brand-50 p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
            {business.rating}★
          </div>
          <div>
            <p className="text-sm font-semibold text-brand-900">
              Rated {business.rating} out of 5 from {business.reviewCount}+
              customer ratings
            </p>
            <p className="mt-0.5 text-sm text-brand-700">
              Consistent, dependable service across Erragadda and Hyderabad.
            </p>
          </div>
        </div>

        <h2 className="mt-16 text-2xl font-extrabold text-slate-900">
          What Sets Us Apart
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
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
    </>
  );
}
