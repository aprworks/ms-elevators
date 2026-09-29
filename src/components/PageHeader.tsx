import { Badge } from "@/components/ui/badge";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink-950">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.4))]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Badge className="h-auto rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-300 hover:bg-brand-400/10">
          {eyebrow}
        </Badge>
        <h1 className="mt-4 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
