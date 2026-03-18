'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { fadeInUp, viewportOnce } from '@/lib/animations';
import { founderImageUrl } from '@/config/site';

export default function FounderStory() {
  return (
    <section className="overflow-hidden bg-muted py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Image — warm human storytelling */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-clay shadow-lg"
          >
            {founderImageUrl ? (
              <Image
                src={founderImageUrl}
                alt="Young women and girls at Break the Silence Day of Advocacy march"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-terracotta/10">
                <span className="text-6xl text-primary/30" aria-hidden>
                  👩‍💼
                </span>
              </div>
            )}
          </motion.div>

          {/* Narrative */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary"
            >
              Our Story
            </motion.p>
            <motion.h2
              {...fadeInUp}
              viewport={viewportOnce}
              className="mb-6 text-3xl font-extrabold text-charcoal sm:text-4xl"
            >
              One Voice Can Break the Silence
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none text-secondary"
            >
              <p className="mb-4">
                Break the Silence was born from a simple belief: every young
                girl deserves safety, dignity, and the chance to thrive. What
                started as a grassroots response to gender-based violence has
                grown into a movement for prevention, protection, and
                empowerment.
              </p>
              <p className="mb-4">
                We work at the intersection of advocacy and action educating
                communities, training youth leaders, and creating safe spaces
                where survivors can heal and rebuild. Our founder's journey from
                survivor to advocate drives our commitment to turning pain into
                purpose.
              </p>
              <p>
                Today we stand with thousands of young women and girls, their
                families, and communities because together, we can end the
                silence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Link
                href="/about"
                className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-dark"
              >
                Read Our Full Story
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
