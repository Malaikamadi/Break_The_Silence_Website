"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import GoogleTranslate from "./GoogleTranslate";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        {/* Logo + Translate */}
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-extrabold tracking-tight text-primary">
          Break<span className="text-charcoal">The</span>Silence
          </Link>
          <GoogleTranslate />
        </div>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-sage hover:text-primary ${
                  pathname === l.href
                    ? "bg-sage text-primary"
                    : "text-secondary"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/donate"
              className="ml-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Donate
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-2xl text-charcoal md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-white px-4 pb-4 md:hidden">
          <div className="flex items-center gap-2 border-b border-border py-3">
            <span className="text-xs text-secondary">Language:</span>
            <GoogleTranslate />
          </div>
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-sage ${
                    pathname === l.href
                      ? "bg-sage text-primary"
                      : "text-secondary"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/donate"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-primary py-2.5 text-center text-sm font-semibold text-white hover:bg-primary-dark"
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
