"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import GoogleTranslate from "./GoogleTranslate";

const projectsSubLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
];

const topLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact" },
];

const isProjectsActive = (path: string) =>
  path === "/projects" ||
  path === "/events" ||
  path === "/gallery" ||
  path.startsWith("/projects/") ||
  path.startsWith("/events/") ||
  path.startsWith("/gallery/");

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-primary-muted/95 backdrop-blur-md">
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
          {topLinks.slice(0, 2).map((l) => (
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
          <li
            className="relative"
            onMouseEnter={() => setProjectsDropdownOpen(true)}
            onMouseLeave={() => setProjectsDropdownOpen(false)}
          >
            <Link
              href="/projects"
              className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-sage hover:text-primary ${
                isProjectsActive(pathname)
                  ? "bg-sage text-primary"
                  : "text-secondary"
              }`}
            >
              Projects <HiChevronDown className="text-xs" />
            </Link>
            {projectsDropdownOpen && (
              <div className="absolute left-0 top-full z-[100] pt-2">
                <ul className="min-w-[160px] rounded-lg border border-border bg-white py-1 shadow-lg">
                {projectsSubLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`block px-4 py-2 text-sm transition-colors hover:bg-sage hover:text-primary ${
                        pathname === l.href
                          ? "bg-sage/50 text-primary font-medium"
                          : "text-secondary"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              </div>
            )}
          </li>
          {topLinks.slice(2).map((l) => (
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
            {topLinks.slice(0, 2).map((l) => (
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
              <button
                onClick={() => setProjectsOpen(!projectsOpen)}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-sage ${
                  isProjectsActive(pathname)
                    ? "bg-sage text-primary"
                    : "text-secondary"
                }`}
              >
                Projects <HiChevronDown className={`text-xs transition-transform ${projectsOpen ? "rotate-180" : ""}`} />
              </button>
              {projectsOpen && (
                <ul className="ml-4 mt-1 space-y-1 border-l-2 border-sage pl-3">
                  {projectsSubLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-md px-2 py-2 text-sm transition-colors hover:bg-sage ${
                          pathname === l.href
                            ? "bg-sage/50 text-primary font-medium"
                            : "text-secondary"
                        }`}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {topLinks.slice(2).map((l) => (
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
