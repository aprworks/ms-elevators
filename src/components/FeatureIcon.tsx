const paths: Record<string, string> = {
  "map-pin":
    "M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  shield: "M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z",
  star: "M12 3.5l2.4 5 5.5.6-4 3.9 1 5.5-4.9-2.6-4.9 2.6 1-5.5-4-3.9 5.5-.6 2.4-5Z",
  building:
    "M4 21V6l8-3 8 3v15 M9 21v-4h6v4 M9 10h.01 M9 14h.01 M15 10h.01 M15 14h.01",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z M12 7v5l3.5 2",
  truck:
    "M3 7h11v9H3z M14 10h4l3 3v3h-7z M6.5 19a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Z M17.5 19a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Z",
};

export default function FeatureIcon({ name }: { name: string }) {
  const d = paths[name] ?? paths.star;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d={d} />
    </svg>
  );
}
