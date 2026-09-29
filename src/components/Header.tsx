"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { business } from "@/lib/content";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-ink-950/10 bg-paper-50/85 backdrop-blur-lg"
          : "border-transparent bg-paper-50"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-4 transition-[padding] duration-300 sm:px-6",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink-950 text-lg font-bold text-brand-400 shadow-sm">
            MS
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight text-ink-950">
              {business.name}
            </span>
            <span className="text-xs text-mist-500">Erragadda, Hyderabad</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink-700/70 hover:bg-paper-100 hover:text-ink-950"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button
            render={<a href={`tel:${business.phoneHref}`} />}
            nativeButton={false}
            className="rounded-full px-5 shadow-sm shadow-brand-600/20"
          >
            <Phone className="size-3.5" />
            Call {business.phoneDisplay}
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <button
                aria-label="Open menu"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-ink-950/10 md:hidden"
              />
            }
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full gap-0 sm:max-w-xs">
            <SheetHeader className="border-b border-ink-950/10">
              <SheetTitle className="font-display">{business.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-1 flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <SheetClose key={link.href} render={<Link href={link.href} />}>
                    <span
                      className={cn(
                        "block rounded-lg px-3 py-2.5 text-sm font-medium",
                        active
                          ? "bg-brand-50 text-brand-700"
                          : "text-ink-700 hover:bg-paper-100"
                      )}
                    >
                      {link.label}
                    </span>
                  </SheetClose>
                );
              })}
            </nav>
            <div className="px-4 pb-4">
              <Button
                render={<a href={`tel:${business.phoneHref}`} />}
                nativeButton={false}
                className="w-full rounded-full"
              >
                <Phone className="size-3.5" />
                Call {business.phoneDisplay}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
