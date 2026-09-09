import Link from "next/link";
import { business, services } from "@/lib/content";
import { Badge } from "@/components/ui/badge";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
              MS
            </span>
            <span className="text-lg font-bold tracking-tight text-white">{business.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">{business.tagline}</p>
          <Badge className="mt-5 h-auto rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-brand-300 ring-1 ring-slate-800 hover:bg-slate-900">
            ★ {business.rating}/5 from {business.reviewCount}+ customers
          </Badge>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services#${service.slug}`} className="text-slate-400 transition-colors hover:text-brand-400">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <address className="mt-5 space-y-4 text-sm not-italic text-slate-400">
            <p className="leading-relaxed">
              {business.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p>
              <a href={`tel:${business.phoneHref}`} className="font-medium text-white transition-colors hover:text-brand-400">
                {business.phoneDisplay}
              </a>
              {" / "}
              <a href={`tel:${business.phoneSecondaryHref}`} className="font-medium text-white transition-colors hover:text-brand-400">
                {business.phoneSecondaryDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${business.email}`} className="transition-colors hover:text-brand-400">
                {business.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
