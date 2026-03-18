import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Projects' },
  { href: '/events', label: 'Events' },
  { href: '/blog', label: 'Blog' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/contact', label: 'Contact' },
  { href: '/donate', label: 'Donate' },
];

const socials = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaXTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-stone-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div>
          <h2 className="mb-3 text-xl font-extrabold text-white">
            Break<span className="text-primary-light">The</span>Silence
          </h2>
          <p className="text-sm leading-relaxed text-stone-400">
            Preventing gender-based violence, protecting young girls, and
            empowering youth and women through community education and advocacy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm transition-colors hover:text-primary-light"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
            Get In Touch
          </h3>
          <address className="space-y-2 text-sm not-italic text-stone-400">
            <p>Freetown, Sierra Leone</p>
            <p>info@breakthesilence.org</p>
            <p>+232 78 95 09 10</p>
          </address>
        </div>

        {/* Socials */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
            Follow Us
          </h3>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-700 text-sm transition-colors hover:bg-primary hover:text-white"
              >
                <s.icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-stone-700 py-5 text-center text-xs text-stone-500">
        &copy; {new Date().getFullYear()} Break the Silence. All rights
        reserved.
      </div>
    </footer>
  );
}
