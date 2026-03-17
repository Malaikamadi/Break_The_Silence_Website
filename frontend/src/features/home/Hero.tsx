"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-gradient-to-br from-charcoal via-stone-900 to-charcoal">
      {/* Decorative background circles */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary-light"
          >
            Youth Empowerment &bull; Climate Action &bull; Recycling Innovation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Empowering Communities.{" "}
            <span className="text-primary-light">Breaking the Silence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-stone-300"
          >
            We turn plastic waste into opportunity, train young leaders, and
            build climate-resilient communities across Kenya and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-dark"
            >
              Explore Our Projects
            </Link>
            <Link
              href="/volunteer"
              className="rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:border-primary-light hover:text-primary-light"
            >
              Become a Volunteer
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
