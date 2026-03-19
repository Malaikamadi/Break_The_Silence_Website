import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import CTABanner from "@/components/ui/CTABanner";
import Leadership from "@/features/about/Leadership";
import { HiEye, HiHeart, HiSparkles } from "react-icons/hi";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Break the Silence — our mission, vision, founder story, and team driving GBV prevention, youth empowerment, and gender justice.",
  keywords: ["gender-based violence", "youth empowerment", "women empowerment", "founder story", "NGO Kenya"],
};

const values = [
  {
    icon: HiHeart,
    title: "Our Mission",
    text: "To prevent gender-based violence, protect and empower young girls, and build communities where survivors heal and thrive through education, advocacy, and leadership development.",
  },
  {
    icon: HiEye,
    title: "Our Vision",
    text: "A world where every girl is safe, every voice is heard, and communities stand together to end gender-based violence and sexual violence.",
  },
  {
    icon: HiSparkles,
    title: "Our Values",
    text: "Integrity, inclusivity, survivor-centered care, and community-led action. We believe that lasting change starts with empowered individuals and safe spaces.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-sage py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="About Break the Silence"
            subtitle="We are a community-led NGO preventing gender-based violence and empowering youth and women through advocacy, education, and safe spaces."
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
              Break the Silence was born from a grassroots response to
              gender-based violence. Our founder&apos;s journey from survivor to
              advocate inspired a movement: every young girl deserves safety,
              dignity, and the chance to thrive.
            </p>
            <p>
              Since our founding, we&apos;ve grown into a recognized NGO
              operating across communities. Our programs have reached thousands of
              young girls, trained community champions in GBV prevention, and
              created safe spaces where survivors can heal and rebuild.
            </p>
            <p>
              Today, we continue to expand — combining advocacy with action,
              community education with leadership development, and prevention with
              empowerment. We also run secondary programs in climate innovation
              and youth employment to build holistic change.
            </p>
          </div>
        </div>
      </section>

      <Leadership />

      <CTABanner
        title="Join Our Mission"
        description="Whether you volunteer your time, donate, or simply spread the word — every action counts."
        buttonText="Get Involved"
        buttonHref="/volunteer"
      />
    </>
  );
}
