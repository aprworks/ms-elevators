import type { Metadata } from "next";
import Image from "next/image";
import { business } from "@/lib/content";
import { galleryItems } from "@/lib/gallery";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: `Gallery | ${business.name}`,
  description: `Browse the range of elevator types, cabins, doors, and parts ${business.name} works with in Erragadda, Hyderabad.`,
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Elevator Types We Work With"
        description="A look at the range of elevator types, cabins, doors, and components we install, repair, and maintain."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.image}
              className="group relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100 shadow-sm ring-1 ring-slate-200"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="(min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 px-3 pb-3 text-sm font-medium text-white">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
