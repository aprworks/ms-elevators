// Curated, license-verified Unsplash photography (standard free Unsplash License).
// Used for hero/section backdrops only — the real product/gallery photos in
// `src/lib/gallery.ts` remain the source of truth for actual elevator imagery.

export type CuratedImage = {
  src: string;
  alt: string;
};

function unsplash(id: string, width = 1800) {
  return `https://images.unsplash.com/photo-${id}?q=80&w=${width}&auto=format&fit=crop`;
}

export const heroImage: CuratedImage = {
  src: unsplash("1435575653489-b0873ec954e2", 2400),
  alt: "Looking up at glass high-rise towers from street level",
};

export const serviceImages: Record<string, CuratedImage> = {
  "new-lift-installation": {
    src: unsplash("1768505005984-689020c196fe"),
    alt: "Modern building facade with a glass-enclosed elevator shaft",
  },
  maintenance: {
    src: unsplash("1635375113080-2bcee0c02ba4"),
    alt: "Clean, well-maintained glass-partitioned office corridor",
  },
  service: {
    src: unsplash("1660893978186-04bb33247dc0"),
    alt: "Modern glass building facade with repeating windows",
  },
  "modification-spares": {
    src: unsplash("1767739791243-af1facf4b87b"),
    alt: "Close-up of precision industrial gears and machinery",
  },
};

export const residentialImage: CuratedImage = {
  src: unsplash("1766321258844-6541b34b2940"),
  alt: "Modern apartment building with balconies against a clear blue sky",
};

export const ctaImage: CuratedImage = {
  src: unsplash("1765145138073-9c6dc00a9f84"),
  alt: "City office buildings illuminated at dusk",
};
