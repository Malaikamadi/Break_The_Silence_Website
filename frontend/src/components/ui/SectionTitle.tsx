"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = true }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-10 ${centered ? "text-center" : ""}`}
    >
      <h2 className="text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-secondary">{subtitle}</p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-primary ${
          centered ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
