"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

// A one-time "doors sliding open" reveal — used sparingly (hero load-in)
// as the site's signature moment. Panels are plain CSS-transform divs,
// no WebGL, and skip straight to the open state under reduced motion.
export default function ElevatorDoors({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`relative isolate overflow-hidden ${className ?? ""}`}>
      {children}
      {!prefersReducedMotion && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-30 w-1/2 bg-ink-950"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-30 w-1/2 bg-ink-950"
            initial={{ x: "0%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-1/2 z-40 w-px -translate-x-1/2 bg-brand-400/40"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 1.3 }}
          />
        </>
      )}
    </div>
  );
}
