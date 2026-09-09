import type { Metadata } from "next";
import { Phone, MapPin, Mail } from "lucide-react";
import { business } from "@/lib/content";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata: Metadata = {
  title: `Contact Us | ${business.name}`,
  description: `Get in touch with ${business.name} in Erragadda, Hyderabad for elevator installation, service, and maintenance.`,
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    business.mapQuery
  )}&output=embed`;

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title={`Contact ${business.name}`}
        description="Reach out for a free quote on elevator installation, repair, or maintenance in Erragadda, Hyderabad."
      />

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <Card className="rounded-2xl p-7 shadow-sm">
              <CardContent className="p-0">
                <h2 className="text-lg font-semibold text-slate-900">
                  Contact Details
                </h2>
                <dl className="mt-5 space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                      <Phone className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                    </span>
                    <div>
                      <dt className="font-medium text-slate-500">Phone</dt>
                      <dd className="mt-0.5 space-x-3">
                        <a
                          href={`tel:${business.phoneHref}`}
                          className="font-medium text-slate-900 hover:text-brand-600"
                        >
                          {business.phoneDisplay}
                        </a>
                        <a
                          href={`tel:${business.phoneSecondaryHref}`}
                          className="font-medium text-slate-900 hover:text-brand-600"
                        >
                          {business.phoneSecondaryDisplay}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                      <MapPin className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <div>
                      <dt className="font-medium text-slate-500">Address</dt>
                      <dd className="mt-0.5 leading-relaxed text-slate-900">
                        {business.addressLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Z" />
                      </svg>
                    </span>
                    <div>
                      <dt className="font-medium text-slate-500">WhatsApp</dt>
                      <dd className="mt-0.5">
                        <a
                          href={`https://wa.me/${business.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-slate-900 hover:text-brand-600"
                        >
                          Chat with us
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                      <Mail className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <div>
                      <dt className="font-medium text-slate-500">Email</dt>
                      <dd className="mt-0.5">
                        <a
                          href={`mailto:${business.email}`}
                          className="font-medium text-slate-900 hover:text-brand-600"
                        >
                          {business.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>
              </CardContent>
            </Card>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <iframe
                title="MS Elevators location map"
                src={mapSrc}
                width="100%"
                height="280"
                loading="lazy"
                className="border-0"
              />
            </div>
          </div>

          <Card className="rounded-2xl p-7 shadow-sm">
            <CardHeader className="p-0">
              <CardTitle className="text-lg font-semibold text-slate-900">
                Send Us a Message
              </CardTitle>
              <CardDescription>
                We&apos;ll open WhatsApp with your details filled in.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-2 p-0">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
