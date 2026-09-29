import type { Metadata } from "next";
import { Phone, MapPin, Mail } from "lucide-react";
import { business } from "@/lib/content";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

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

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-8">
              <div className="rounded-3xl bg-paper-100 p-7">
                <h2 className="font-display text-lg font-semibold text-ink-950">
                  Contact Details
                </h2>
                <dl className="mt-5 space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                      <Phone className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                    </span>
                    <div>
                      <dt className="font-medium text-mist-500">Phone</dt>
                      <dd className="mt-0.5 space-x-3">
                        <a
                          href={`tel:${business.phoneHref}`}
                          className="font-medium text-ink-950 hover:text-brand-600"
                        >
                          {business.phoneDisplay}
                        </a>
                        <a
                          href={`tel:${business.phoneSecondaryHref}`}
                          className="font-medium text-ink-950 hover:text-brand-600"
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
                      <dt className="font-medium text-mist-500">Address</dt>
                      <dd className="mt-0.5 leading-relaxed text-ink-950">
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
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.17c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.73 2.64 4.2 3.7.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
                      </svg>
                    </span>
                    <div>
                      <dt className="font-medium text-mist-500">WhatsApp</dt>
                      <dd className="mt-0.5">
                        <a
                          href={`https://wa.me/${business.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-ink-950 hover:text-brand-600"
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
                      <dt className="font-medium text-mist-500">Email</dt>
                      <dd className="mt-0.5">
                        <a
                          href={`mailto:${business.email}`}
                          className="font-medium text-ink-950 hover:text-brand-600"
                        >
                          {business.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="overflow-hidden rounded-3xl ring-1 ring-ink-950/5">
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
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-paper-100 p-7">
              <h2 className="font-display text-lg font-semibold text-ink-950">
                Send Us a Message
              </h2>
              <p className="mt-1 text-sm text-mist-500">
                We&apos;ll open WhatsApp with your details filled in.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
