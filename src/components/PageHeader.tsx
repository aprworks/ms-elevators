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
    <section className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <Badge className="h-auto rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-300 hover:bg-brand-400/10">
          {eyebrow}
        </Badge>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-slate-300">{description}</p>
        )}
      </div>
    </section>
  );
}
