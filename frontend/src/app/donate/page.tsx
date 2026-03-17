import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import CTABanner from "@/components/ui/CTABanner";
import { HiHeart, HiShieldCheck, HiCurrencyDollar } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Break the Silence with a donation. Every contribution fuels youth empowerment, plastic recycling, and climate action.",
};

const tiers = [
  { amount: 500, currency: "KES", label: "Supporter" },
  { amount: 2500, currency: "KES", label: "Champion" },
  { amount: 5000, currency: "KES", label: "Partner" },
  { amount: 10000, currency: "KES", label: "Patron" },
];

const reasons = [
  {
    icon: HiHeart,
    title: "Direct Impact",
    text: "100% of donations go toward programs — training youth, recycling plastic, and building community resilience.",
  },
  {
    icon: HiShieldCheck,
    title: "Transparent Reporting",
    text: "We publish quarterly impact reports so you can see exactly how your contribution makes a difference.",
  },
  {
    icon: HiCurrencyDollar,
    title: "Tax Deductible",
    text: "As a registered NGO, your donations may qualify for tax deductions in applicable jurisdictions.",
  },
];

export default function DonatePage() {
  return (
    <>
      <section className="bg-sage py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="Support Our Mission"
            subtitle="Every contribution — big or small — fuels real change in communities across Kenya."
          />
        </div>
      </section>

      {/* Donation tiers */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h3 className="mb-8 text-center text-xl font-bold text-charcoal">
            Choose a Giving Level
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t) => (
              <button
                key={t.amount}
                disabled
                className="rounded-2xl border-2 border-border bg-white p-6 text-center shadow-sm transition-all hover:border-primary hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
              >
                <p className="text-2xl font-extrabold text-primary">
                  {t.currency} {t.amount.toLocaleString()}
                </p>
                <p className="mt-1 text-sm font-medium text-secondary">
                  {t.label}
                </p>
              </button>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-secondary">
            Payment integration coming soon. Contact us directly to donate today.
          </p>
        </div>
      </section>

      {/* Why donate */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h3 className="mb-10 text-center text-2xl font-bold text-charcoal">
            Why Your Support Matters
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sage text-2xl text-primary">
                  <r.icon />
                </div>
                <h4 className="mb-2 font-bold text-charcoal">{r.title}</h4>
                <p className="text-sm leading-relaxed text-secondary">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Can't Donate? Volunteer Instead!"
        description="Your time is just as valuable. Join our volunteer network and create impact on the ground."
        buttonText="Become a Volunteer"
        buttonHref="/volunteer"
        variant="accent"
      />
    </>
  );
}
