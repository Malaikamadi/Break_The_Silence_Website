"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/contact", label: "Contact Us" },
];

const resources = [
  { href: "/blog", label: "Blog" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact#faq", label: "FAQs" },
  { href: "/contact", label: "Terms of Service" },
];

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to newsletter API
    setEmail("");
  };

  return (
    <footer className="border-t border-border bg-primary-muted/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <Link href="/" className="inline-block">
              <h2 className="text-xl font-extrabold tracking-tight text-primary">
                Break<span className="text-charcoal">The</span>Silence
              </h2>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-charcoal">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-secondary transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-charcoal">
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-secondary transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-charcoal">
              Join Our Mailing List
            </h3>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-charcoal placeholder-stone-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row lg:px-8">
          <p className="text-xs text-secondary">
            © {new Date().getFullYear()} Break the Silence. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-secondary">Follow us</span>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:border-primary hover:text-primary"
                >
                  <s.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
