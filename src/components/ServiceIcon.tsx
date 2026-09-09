import { ArrowUpDown, CalendarClock, Wrench, Cog, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "new-lift-installation": ArrowUpDown,
  maintenance: CalendarClock,
  service: Wrench,
  "modification-spares": Cog,
};

export default function ServiceIcon({ slug, className }: { slug: string; className?: string }) {
  const Icon = icons[slug] ?? Wrench;
  return <Icon className={className ?? "h-6 w-6"} strokeWidth={1.75} />;
}
