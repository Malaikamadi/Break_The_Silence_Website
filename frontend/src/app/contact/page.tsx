import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Break the Silence. Reach out for partnerships, questions about GBV prevention programs, or media inquiries.",
  keywords: ["contact NGO", "partnerships", "GBV prevention", "Break the Silence"],
};

const contacts = [
  {
    icon: HiLocationMarker,
    title: "Visit Us",
    lines: ["Nairobi, Kenya", "P.O. Box 00100"],
  },
  {
    icon: HiMail,
    title: "Email Us",
    lines: ["info@breakthesilence.org", "programs@breakthesilence.org"],
  },
  {
    icon: HiPhone,
    title: "Call Us",
    lines: ["+254 700 000 000", "Mon – Fri, 8am – 5pm EAT"],
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-sage py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="Contact Us"
            subtitle="Have a question, partnership idea, or media inquiry? We'd love to hear from you."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-8">
          {/* Contact info cards */}
          <div className="space-y-6">
            {contacts.map((c) => (
              <div
                key={c.title}
                className="flex gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage text-xl text-primary">
                  <c.icon />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-charcoal">{c.title}</h3>
                  {c.lines.map((l) => (
                    <p key={l} className="text-sm text-secondary">
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <form className="space-y-5 rounded-2xl border border-border bg-white p-8 shadow-sm">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-charcoal">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-charcoal">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-charcoal">
                Subject
              </label>
              <input
                type="text"
                required
                placeholder="How can we help?"
                className="w-full rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-charcoal">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-y rounded-lg border border-border px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
