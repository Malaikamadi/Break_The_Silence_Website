"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useHeroProjects } from "@/hooks/useHeroProjects";
import { getMediaUrl } from "@/lib/media";
import type { Project } from "@/types";

function truncate(str: string, max: number): string {
  if (str.length <= max) return str;
  return str.slice(0, max).trim() + "…";
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
  }),
};

export default function Hero() {
  const { data: projects } = useHeroProjects();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const items = Array.isArray(projects) ? projects : [];
  const hasSlides = items.length > 0;
  const current = hasSlides ? items[index] : null;

  const goTo = useCallback(
    (i: number) => {
      if (!hasSlides) return;
      setDirection(i > index ? 1 : -1);
      setIndex(((i % items.length) + items.length) % items.length);
    },
    [hasSlides, items.length, index]
  );

  const next = useCallback(() => {
    if (!hasSlides) return;
    setDirection(1);
    setIndex((i) => (i + 1) % items.length);
  }, [hasSlides, items.length]);

  const prev = useCallback(() => {
    if (!hasSlides) return;
    setDirection(-1);
    setIndex((i) => (i - 1 + items.length) % items.length);
  }, [hasSlides, items.length]);

  useEffect(() => {
    if (!hasSlides || items.length <= 1) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [hasSlides, items.length, next]);

  return (
    <section className="relative flex min-h-[90vh] overflow-hidden">
      {/* Image slider background */}
      {hasSlides && current ? (
        <div className="absolute inset-0">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
              className="absolute inset-0"
            >
              {current.featured_image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={getMediaUrl(current.featured_image)}
                  alt={current.title}
                  className="h-full w-full object-cover"
                  style={{
                    imageRendering: "auto",
                    filter: "contrast(1.07) saturate(1.05)",
                  }}
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-charcoal via-primary-dark/90 to-charcoal" />
              )}
            </motion.div>
          </AnimatePresence>
          {/* Light overlay for text readability — images stay visible */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/50"
            aria-hidden
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-primary-dark/90 to-charcoal" />
      )}

      {/* Decorative accents */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-terracotta/10 blur-3xl" />

      {/* Animated purple dots — floating motion */}
      <motion.div
        className="pointer-events-none absolute right-[15%] top-[25%] z-10 h-4 w-4 rounded-full bg-primary-light shadow-[0_0_30px_rgba(124,58,237,0.6)]"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[30%] right-[25%] z-10 h-3 w-3 rounded-full bg-primary-light/80"
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      <motion.div
        className="pointer-events-none absolute left-[20%] top-[40%] z-10 h-2 w-2 rounded-full bg-primary/70"
        animate={{
          y: [0, -12, 0],
          x: [0, 8, 0],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="pointer-events-none absolute right-[30%] bottom-[35%] z-10 h-2.5 w-2.5 rounded-full bg-primary-light/60"
        animate={{
          y: [0, 10, 0],
          x: [0, -12, 0],
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.85, 0.5],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      />

      {/* Content overlay — dynamic from backend */}
      <div className="relative z-10 flex min-h-[90vh] w-full items-center">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="max-w-2xl text-sharp">
            <AnimatePresence mode="wait">
              {current ? (
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="mb-4 inline-block rounded-full bg-primary/30 px-4 py-1.5 text-sm font-semibold text-white"
                  >
                    {current.location}
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mb-6 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl"
                  >
                    {current.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-10 max-w-lg text-base font-medium leading-relaxed text-white"
                  >
                    {truncate(current.description, 180)}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Link
                      href={`/projects/${current.slug}`}
                      className="rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/40 transition-colors hover:bg-primary-light"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/volunteer"
                      className="rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:border-primary-light hover:text-primary-light"
                    >
                      Volunteer
                    </Link>
                    <Link
                      href="/projects"
                      className="rounded-full bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                    >
                      All Projects
                    </Link>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="max-w-2xl text-sharp"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 inline-block rounded-full bg-primary/30 px-4 py-1.5 text-sm font-semibold text-white"
                  >
                    GBV Prevention • Youth Empowerment • Breaking the Silence
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-6 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl"
                  >
                    Every Voice Matters.{" "}
                    <span className="text-white">Every Girl Deserves Safety.</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-10 max-w-lg text-base font-medium leading-relaxed text-white"
                  >
                    We prevent gender-based violence, protect and empower young
                    girls, and build communities where survivors heal and thrive.
                    Join us in ending the silence.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Link
                      href="/volunteer"
                      className="rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/40 transition-colors hover:bg-primary-light"
                    >
                      Volunteer Now
                    </Link>
                    <Link
                      href="/donate"
                      className="rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:border-primary-light hover:text-primary-light"
                    >
                      Donate
                    </Link>
                    <Link
                      href="/projects"
                      className="rounded-full bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                    >
                      Explore Projects
                    </Link>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slider controls — arrows always when slides exist, dots when multiple */}
      {hasSlides && (
        <>
          {items.length > 1 && (
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
            {items.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full ${
                  i === index ? "h-2 w-6 bg-primary-light" : "h-2 w-2 bg-white/50 hover:bg-white/70"
                }`}
                animate={
                  i === index
                    ? {
                        scale: [1, 1.15, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(124, 58, 237, 0.3)",
                          "0 0 0 6px rgba(124, 58, 237, 0)",
                          "0 0 0 0 rgba(124, 58, 237, 0.3)",
                        ],
                      }
                    : {}
                }
                transition={
                  i === index
                    ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                    : {}
                }
              />
            ))}
          </div>
          )}

          {/* Navigation arrows — circular, semi-transparent, bordered */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-stone-900/60 text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-stone-900/80"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-stone-900/60 text-white backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-stone-900/80"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </section>
  );
}
