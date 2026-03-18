"use client";

import { motion } from "framer-motion";
import {
  HiShieldCheck,
  HiHeart,
  HiAcademicCap,
  HiLightningBolt,
  HiCog,
  HiBriefcase,
} from "react-icons/hi";
import SectionTitle from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const primaryPrograms = [
  {
    icon: HiShieldCheck,
    title: "GBV Prevention",
    description:
      "Community education, awareness campaigns, and safe-space initiatives to prevent gender-based violence.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: HiHeart,
    title: "Sexual Violence Advocacy",
    description:
      "Supporting survivors, advocating for justice, and raising voices against sexual violence.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: HiAcademicCap,
    title: "Protection & Empowerment of Young Girls",
    description:
      "Mentorship, life skills, and safe environments for girls to grow, learn, and lead.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: HiLightningBolt,
    title: "Youth & Women Empowerment",
    description:
      "Leadership development, economic opportunities, and community-led change.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: HiCog,
    title: "Community Education & Leadership",
    description:
      "Training community champions to drive prevention and support at the grassroots level.",
    color: "bg-primary/10 text-primary",
  },
];

const secondaryPrograms = [
  {
    icon: HiLightningBolt,
    title: "Climate Innovation",
    description: "Plastic recycling and environmental projects that create jobs and protect communities.",
    color: "bg-terracotta/10 text-terracotta",
  },
  {
    icon: HiCog,
    title: "Skills Training",
    description: "Vocational and digital skills for youth employability and entrepreneurship.",
    color: "bg-terracotta/10 text-terracotta",
  },
  {
    icon: HiBriefcase,
    title: "Youth Employment",
    description: "Connecting young people with opportunities and pathways to dignified work.",
    color: "bg-terracotta/10 text-terracotta",
  },
];

export default function ProgramAreas() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="Our Program Areas"
          subtitle="From GBV prevention to climate innovation — we build holistic change for communities."
        />

        {/* Primary focus */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className="mb-16"
        >
          <h3 className="mb-8 text-center text-lg font-semibold uppercase tracking-wider text-primary">
            Primary Focus
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {primaryPrograms.map((p, i) => (
              <motion.article
                key={p.title}
                variants={staggerItem}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${p.color}`}
                >
                  <p.icon className="text-xl" />
                </div>
                <h4 className="mb-2 font-bold text-charcoal">{p.title}</h4>
                <p className="text-sm leading-relaxed text-secondary">
                  {p.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Secondary programs */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
        >
          <h3 className="mb-8 text-center text-lg font-semibold uppercase tracking-wider text-terracotta">
            Secondary Programs
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {secondaryPrograms.map((p) => (
              <motion.article
                key={p.title}
                variants={staggerItem}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${p.color}`}
                >
                  <p.icon className="text-xl" />
                </div>
                <h4 className="mb-2 font-bold text-charcoal">{p.title}</h4>
                <p className="text-sm leading-relaxed text-secondary">
                  {p.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
