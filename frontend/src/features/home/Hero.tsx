"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useHeroSlides } from "@/hooks/useHeroSlides";

function getImageUrl(image: string): string {
  if (!image) return "";
  if (image.startsWith("http")) return image;
  const base = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/?$/, "") ?? "";
  const path = image.startsWith("/") ? image : `/media/${image}`;
  return `${base}${path}`;
}

export default function Hero() {
  const { data: slides, isLoading } = useHeroSlides();
  const [index, setIndex] = useState(0);

  const images = slides ?? [];
  const hasSlides = images.length > 0;

  const goTo = useCallback(
    (i: number) => {
      if (!hasSlides) return;
      setIndex(((i % images.length) + images.length) % images.length);
    },
    [hasSlides, images.length]
  );

  const next = useCallback(() => goTo(index + 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1), [index, goTo]);

  useEffect(() => {
    if (!hasSlides || images.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      6000
    );
    return () => clearInterval(id);
  }, [hasSlides, images.length]);

  return (
    <section className="relative flex min-h-[90vh] overflow-hidden">
      {/* Image slider background */}
      {hasSlides ? (
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={getImageUrl(images[index].image)}
                alt={images[index].caption || "Break the Silence activity"}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
          {/* Dark overlay for text readability */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-charcoal/85 via-primary-dark/75 to-charcoal/85"
            aria-hidden
          />
        </div>
      ) : (
        /* Fallback gradient when no images */
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-primary-dark/90 to-charcoal" />
      )}

      {/* Decorative accents */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-terracotta/10 blur-3xl" />

      {/* Content overlay */}
      <div className="relative z-10 flex min-h-[90vh] w-full items-center">
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block rounded-full bg-primary/30 px-4 py-1.5 text-sm font-semibold text-white"
            >
              GBV Prevention &bull; Youth Empowerment &bull; Breaking the Silence
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Every Voice Matters.{" "}
              <span className="text-primary-light">
                Every Girl Deserves Safety.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 max-w-xl text-lg leading-relaxed text-stone-300"
            >
              We prevent gender-based violence, protect and empower young girls,
              and build communities where survivors heal and thrive. Join us in
              ending the silence.
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
          </div>
        </div>
      </div>

      {/* Slider controls */}
      {hasSlides && images.length > 1 && (
        <>
          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-primary-light" : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Prev/Next arrows */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </section>
  );
}
