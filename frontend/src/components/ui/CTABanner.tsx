"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant?: "primary" | "accent";
}

export default function CTABanner({
  title,
  description,
  buttonText,
  buttonHref,
  variant = "primary",
}: Props) {
  const bg = variant === "primary" ? "bg-primary" : "bg-accent";
  const btnClass =
    variant === "primary"
      ? "bg-white text-primary hover:bg-sage"
      : "bg-charcoal text-white hover:bg-stone-800";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${bg} py-16`}
    >
      <div className="mx-auto max-w-3xl px-4 text-center text-white">
        <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">{title}</h2>
        <p className="mb-8 text-lg opacity-90">{description}</p>
        <Link
          href={buttonHref}
          className={`inline-block rounded-full px-8 py-3 text-sm font-bold transition-colors ${btnClass}`}
        >
          {buttonText}
        </Link>
      </div>
    </motion.section>
  );
}
