import type { Metadata } from "next";
import { business } from "@/lib/content";
import { galleryItems } from "@/lib/gallery";
import PageHeader from "@/components/PageHeader";
import GalleryImage from "@/components/GalleryImage";
import Reveal from "@/components/Reveal";

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
        description="A look at the range of elevator types, cabins, doors, and components we install, repair, and maintain. Tap any image to view it larger."
      />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {galleryItems.map((item, i) => (
            <Reveal key={item.image} delay={(i % 8) * 0.03}>
              <GalleryImage
                item={item}
                className="ring-1 ring-ink-950/5"
                sizes="(min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
