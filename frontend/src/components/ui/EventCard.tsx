"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiCalendar, HiLocationMarker, HiUsers } from "react-icons/hi";
import type { Event } from "@/types";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function EventCard({ event }: { event: Event }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        {event.featured_image ? (
          <Image
            src={event.featured_image}
            alt={event.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-sage text-primary font-bold text-lg">
            {formatDate(event.date)}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="mb-3 text-lg font-bold text-charcoal line-clamp-2">
          {event.name}
        </h3>

        <div className="mb-4 space-y-1.5 text-sm text-secondary">
          <p className="flex items-center gap-2">
            <HiCalendar className="text-primary" />
            {formatDate(event.date)}
          </p>
          <p className="flex items-center gap-2">
            <HiLocationMarker className="text-primary" />
            {event.venue}
          </p>
          {event.capacity > 0 && (
            <p className="flex items-center gap-2">
              <HiUsers className="text-primary" />
              {event.capacity} spots
            </p>
          )}
        </div>

        {event.registration_link && (
          <a
            href={event.registration_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Register
          </a>
        )}
      </div>
    </motion.article>
  );
}
