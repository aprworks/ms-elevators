import type { Metadata } from "next";
import { business } from "@/lib/content";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

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
            <div className="rounded-2xl border border-slate-200 p-7 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Contact Details
              </h2>
              <dl className="mt-5 space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                    </svg>
                  </span>
                  <div>
                    <dt className="font-medium text-slate-500">Phone</dt>
                    <dd className="mt-0.5 space-x-3">
                      <a
                        href={`tel:${business.phoneHref}`}
                        className="font-medium text-slate-900 hover:text-amber-600"
                      >
                        {business.phoneDisplay}
                      </a>
                      <a
                        href={`tel:${business.phoneSecondaryHref}`}
                        className="font-medium text-slate-900 hover:text-amber-600"
                      >
                        {business.phoneSecondaryDisplay}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    </svg>
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
                        className="font-medium text-slate-900 hover:text-amber-600"
                      >
                        Chat with us
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18v12H3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
                    </svg>
                  </span>
                  <div>
                    <dt className="font-medium text-slate-500">Email</dt>
                    <dd className="mt-0.5">
                      <a
                        href={`mailto:${business.email}`}
                        className="font-medium text-slate-900 hover:text-amber-600"
                      >
                        {business.email}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

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

          <div className="rounded-2xl border border-slate-200 p-7 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">
              Send Us a Message
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              We&apos;ll open WhatsApp with your details filled in.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
