"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

const statusColor: Record<string, string> = {
  planned: "bg-amber-100 text-amber-800",
  ongoing: "bg-green-100 text-green-800",
  completed: "bg-blue-100 text-blue-800",
  suspended: "bg-red-100 text-red-800",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden bg-muted">
        {project.featured_image ? (
          <Image
            src={project.featured_image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-secondary">
            No image
          </div>
        )}
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold capitalize ${
            statusColor[project.status] ?? "bg-gray-100 text-gray-700"
          }`}
        >
          {project.status}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-secondary">
          {project.location}
        </p>
        <h3 className="mb-2 text-lg font-bold text-charcoal line-clamp-2">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-secondary line-clamp-3">
          {project.description}
        </p>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-block rounded-full bg-sage px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
        >
          Learn More
        </Link>
      </div>
    </motion.article>
  );
}
