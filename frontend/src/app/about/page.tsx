import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import CTABanner from "@/components/ui/CTABanner";
import { HiEye, HiHeart, HiSparkles } from "react-icons/hi";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Break the Silence — our mission, vision, and the team driving youth empowerment and climate action.",
};

const values = [
  {
    icon: HiHeart,
    title: "Our Mission",
    text: "To empower young people and communities with the tools, training, and platforms needed to drive environmental sustainability and social impact.",
  },
  {
    icon: HiEye,
    title: "Our Vision",
    text: "A world where every young person is equipped to break the silence on climate injustice and lead transformative change in their communities.",
  },
  {
    icon: HiSparkles,
    title: "Our Values",
    text: "Integrity, inclusivity, innovation, and community-first action. We believe that lasting change starts with empowered individuals.",
  },
];

const team = [
  { name: "Amina Wanjiru", role: "Executive Director", initials: "AW" },
  { name: "David Ochieng", role: "Programs Manager", initials: "DO" },
  { name: "Grace Muthoni", role: "Community Lead", initials: "GM" },
  { name: "James Kiprop", role: "Volunteer Coordinator", initials: "JK" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-sage py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="About Break the Silence"
            subtitle="We are a youth-led NGO championing climate innovation, plastic recycling, and community empowerment since 2018."
          />
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3 lg:px-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-sage text-2xl text-primary">
                <v.icon />
              </div>
              <h3 className="mb-3 text-lg font-bold text-charcoal">
                {v.title}
              </h3>
              <p className="text-sm leading-relaxed text-secondary">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="mb-6 text-3xl font-extrabold text-charcoal">
            Our Story
          </h2>
          <div className="space-y-4 text-secondary leading-relaxed">
            <p>
              Break the Silence was founded in 2018 by a group of passionate
              young Kenyans who saw their communities drowning in plastic waste
              while youth unemployment soared. They asked a simple question:
              what if we could solve both problems at once?
            </p>
            <p>
              Since then, we&apos;ve grown from a small campus initiative into a
              recognized NGO operating across multiple counties. Our programs
              have trained thousands of young people in green entrepreneurship,
              recycled over 120 tons of plastic, and built a volunteer network
              that spans the country.
            </p>
            <p>
              Today, we continue to innovate — launching climate-smart projects,
              hosting community events, and advocating for policies that put
              youth and the environment first.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="Meet the Team"
            subtitle="The dedicated individuals behind our mission."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-sage text-xl font-bold text-primary">
                  {t.initials}
                </div>
                <h3 className="font-bold text-charcoal">{t.name}</h3>
                <p className="text-sm text-secondary">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Join Our Mission"
        description="Whether you volunteer your time, donate, or simply spread the word — every action counts."
        buttonText="Get Involved"
        buttonHref="/volunteer"
      />
    </>
  );
}
