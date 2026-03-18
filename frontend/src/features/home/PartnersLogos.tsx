"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { partners } from "@/config/site";

export default function PartnersLogos() {
  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="Our Partners"
          subtitle="Together we amplify impact and reach more communities."
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className="flex flex-wrap items-center justify-center gap-12 md:gap-16"
        >
          {partners.map((p) => (
            <motion.a
              key={p.name}
              href={p.href ?? "#"}
              variants={staggerItem}
              className="flex h-16 w-32 items-center justify-center rounded-lg bg-muted/80 text-secondary transition-colors hover:bg-muted hover:text-primary"
              target={p.href?.startsWith("http") ? "_blank" : undefined}
              rel={p.href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {p.logo ? (
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={128}
                  height={64}
                  className="object-contain"
                />
              ) : (
                <span className="text-sm font-medium opacity-60">{p.name}</span>
              )}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
