"use client";

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

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-lg font-bold text-brand-400 shadow-sm">
            MS
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-slate-900">{business.name}</span>
            <span className="text-xs text-slate-500">Erragadda, Hyderabad</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
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
                className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 md:hidden"
              />
            }
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full gap-0 sm:max-w-xs">
            <SheetHeader className="border-b border-slate-100">
              <SheetTitle>{business.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-1 flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <SheetClose key={link.href} render={<Link href={link.href} />}>
                    <span
                      className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                        active
                          ? "bg-brand-50 text-brand-700"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
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
