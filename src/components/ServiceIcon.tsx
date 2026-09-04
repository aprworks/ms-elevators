const paths: Record<string, string> = {
  "new-lift-installation":
    "M9 3v18M15 3v18M6 8l3-3 3 3M18 8l-3-3-3 3M6 16l3 3 3-3M18 16l-3 3-3-3",
  maintenance: "M12 8v4l3 3 M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z",
  service:
    "M14.7 6.3a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4l-8 8-3.5.6.6-3.5 8-8Z M4 20h16",
  "modification-spares":
    "M4 4v5h5 M20 20v-5h-5 M5 9a7 7 0 0 1 12-3.5L20 8 M19 15a7 7 0 0 1-12 3.5L4 16",
};

export default function ServiceIcon({ slug }: { slug: string }) {
  const d = paths[slug] ?? paths["maintenance"];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
    >
      <path d={d} />
    </svg>
  );
}
