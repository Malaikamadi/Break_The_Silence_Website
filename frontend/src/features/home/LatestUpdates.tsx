"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getMediaUrl } from "@/lib/media";
import { useProjects, useProjectCategories } from "@/hooks/useProjects";
import EmptyState from "@/components/ui/EmptyState";
import type { Project } from "@/types";

const statusColor: Record<string, string> = {
  planned: "bg-amber-100 text-amber-800",
  ongoing: "bg-green-100 text-green-800",
  completed: "bg-blue-100 text-blue-800",
  suspended: "bg-red-100 text-red-800",
};

function FeaturedCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-lg sm:flex-row"
    >
      <div className="relative h-56 shrink-0 overflow-hidden bg-muted sm:h-auto sm:w-2/5">
        {project.featured_image ? (
          <img
            src={getMediaUrl(project.featured_image)}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-primary/5 text-secondary">
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
      <div className="flex flex-1 flex-col justify-between bg-primary-dark p-6 text-white">
        <div>
          <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-stone-300">
            {project.location}
          </span>
          <h3 className="mb-3 text-xl font-extrabold leading-tight sm:text-2xl group-hover:text-primary-light transition-colors">
            {project.title}
          </h3>
          <p className="line-clamp-4 text-sm font-semibold leading-relaxed text-stone-200">
            {project.description}
          </p>
        </div>
        <span className="mt-4 inline-block w-fit rounded-full bg-primary-light px-6 py-2.5 text-sm font-semibold text-white">
          Learn More
        </span>
      </div>
    </Link>
  );
}

function SidebarItem({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex gap-4 border-b border-border py-4 last:border-0"
    >
      {project.featured_image ? (
        <div className="h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
          <img
            src={getMediaUrl(project.featured_image)}
            alt={project.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="h-16 w-20 shrink-0 rounded-lg bg-muted" />
      )}
      <div className="min-w-0 flex-1">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-secondary">
          {project.location}
        </span>
        <h4 className="font-bold text-charcoal line-clamp-2 group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <p className="mt-1 line-clamp-2 text-sm text-secondary">
          {project.description}
        </p>
      </div>
    </Link>
  );
}

export default function LatestUpdates() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { data: categoriesData } = useProjectCategories();
  const categories = categoriesData ?? [];
  const filters = [
    { id: "all", label: "All" },
    ...categories.map((c) => ({ id: c.slug, label: c.label })),
  ];
  const { data, isLoading } = useProjects({
    page: 1,
    category: activeFilter === "all" ? undefined : activeFilter,
  });
  const projects = data?.results ?? [];
  const featured = projects[0];
  const sidebarProjects = projects.slice(1, 4);

  return (
    <section className="bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-charcoal sm:text-4xl">
            Featured Projects
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-primary" />
          <p className="mx-auto mt-4 max-w-2xl text-secondary">
            From GBV prevention to youth empowerment — explore the initiatives
            making a difference.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === f.id
                  ? "bg-primary/10 text-primary border-b-2 border-primary"
                  : "text-secondary hover:bg-white hover:text-charcoal"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="animate-pulse lg:col-span-2">
              <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white sm:flex-row">
                <div className="h-56 w-full bg-muted sm:w-2/5" />
                <div className="flex-1 space-y-4 p-6">
                  <div className="h-4 w-24 rounded bg-muted" />
                  <div className="h-6 w-3/4 rounded bg-muted" />
                  <div className="h-4 w-full rounded bg-muted" />
                  <div className="h-4 w-4/5 rounded bg-muted" />
                </div>
              </div>
            </div>
            <div className="animate-pulse rounded-2xl border border-border bg-white p-6">
              <div className="mb-4 h-6 w-32 rounded bg-muted" />
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-16 w-20 shrink-0 rounded-lg bg-muted" />
                    <div className="min-w-0 flex-1 space-y-2">
                      <div className="h-3 w-full rounded bg-muted" />
                      <div className="h-4 w-4/5 rounded bg-muted" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : projects.length === 0 ? (
          <EmptyState message="No projects yet — check back soon!" />
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Featured card — takes 2 columns */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <FeaturedCard project={featured} />
              </motion.div>
            </div>

            {/* Sidebar list */}
            <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h3 className="mb-4 border-b-2 border-primary pb-2 text-lg font-bold text-charcoal">
                More Projects
              </h3>
              <div className="space-y-0">
                {sidebarProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                  >
                    <SidebarItem project={project} />
                  </motion.div>
                ))}
              </div>
              <Link
                href={
                  activeFilter === "all"
                    ? "/projects"
                    : `/projects?category=${activeFilter}`
                }
                className="mt-4 block text-center text-sm font-semibold text-primary hover:underline"
              >
                View All Projects →
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
