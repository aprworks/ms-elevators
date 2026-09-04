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
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-400">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-slate-300">{description}</p>
        )}
      </div>
    </section>
  );
}
