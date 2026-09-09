"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand, ImageOff } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/lib/gallery";

export default function GalleryImage({
  item,
  sizes,
  className,
}: {
  item: GalleryItem;
  sizes: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        disabled={errored}
        aria-label={`View larger image: ${item.label}`}
        className={cn(
          "group relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100 text-left disabled:cursor-default",
          className
        )}
      >
        {!loaded && !errored && <Skeleton className="absolute inset-0 rounded-xl" />}
        {errored ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-slate-400">
            <ImageOff className="h-6 w-6" />
            <span className="px-2 text-center text-[11px] font-medium">{item.label}</span>
          </div>
        ) : (
          <>
            <Image
              src={item.image}
              alt={item.label}
              fill
              sizes={sizes}
              onLoad={() => setLoaded(true)}
              onError={() => setErrored(true)}
              className={cn(
                "object-cover transition-all duration-300 group-hover:scale-110",
                loaded ? "opacity-100" : "opacity-0"
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent transition-opacity group-hover:from-slate-950/90" />
            <Expand className="absolute right-2 top-2 h-4 w-4 text-white opacity-0 transition-opacity group-hover:opacity-90" />
            <span className="absolute inset-x-0 bottom-0 px-2 pb-2 text-center text-[11px] font-medium text-white">
              {item.label}
            </span>
          </>
        )}
      </button>

      {!errored && (
        <DialogContent className="sm:max-w-xl" showCloseButton>
          <DialogTitle className="sr-only">{item.label}</DialogTitle>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-slate-100">
            <Image src={item.image} alt={item.label} fill sizes="90vw" className="object-cover" />
          </div>
          <p className="text-center text-sm font-medium text-slate-700">{item.label}</p>
        </DialogContent>
      )}
    </Dialog>
  );
}
