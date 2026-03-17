"use client";

import { motion } from "framer-motion";
import { HiLightBulb, HiGlobeAlt, HiUserGroup } from "react-icons/hi";

const pillars = [
  {
    icon: HiGlobeAlt,
    title: "Climate Innovation",
    text: "Developing scalable solutions that turn environmental challenges into community opportunities.",
  },
  {
    icon: HiLightBulb,
    title: "Youth Empowerment",
    text: "Training the next generation with skills in leadership, entrepreneurship, and green technology.",
  },
  {
    icon: HiUserGroup,
    title: "Community Action",
    text: "Mobilizing volunteers and partners to create lasting change at the grassroots level.",
  },
];

export default function MissionBanner() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-charcoal sm:text-4xl">
            What Drives Us
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-sage text-2xl text-primary">
                <p.icon />
              </div>
              <h3 className="mb-3 text-lg font-bold text-charcoal">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-secondary">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
