import { MapPin, ShieldCheck, Star, Building2, Clock, Truck, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  "map-pin": MapPin,
  shield: ShieldCheck,
  star: Star,
  building: Building2,
  clock: Clock,
  truck: Truck,
};

export default function FeatureIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Star;
  return <Icon className={className ?? "h-5 w-5"} strokeWidth={1.75} />;
}
