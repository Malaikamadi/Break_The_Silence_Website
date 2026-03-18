"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { useTestimonials } from "@/hooks/useTestimonials";

export default function Testimonies() {
  const { testimonials } = useTestimonials();

  return (
    <section className="bg-sage py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="Community Voices"
          subtitle="Stories of hope, healing, and empowerment from those we serve."
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportOnce}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={`${t.author}-${i}`}
              variants={staggerItem}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm"
            >
              <p className="mb-6 text-lg leading-relaxed text-charcoal sm:text-xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer>
                <cite className="not-italic font-semibold text-primary">
                  {t.author}
                </cite>
                <p className="text-sm text-secondary">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
