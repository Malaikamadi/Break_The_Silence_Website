"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { CardGridSkeleton } from "@/components/ui/Skeleton";
import EmptyState from "@/components/ui/EmptyState";
import { useProjects } from "@/hooks/useProjects";
import Link from "next/link";

export default function FeaturedProjects() {
  const { data, isLoading } = useProjects({ page: 1 });
  const projects = data?.results.slice(0, 3) ?? [];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="From GBV prevention to youth empowerment — explore the initiatives making a difference."
        />

        {isLoading ? (
          <CardGridSkeleton count={3} />
        ) : projects.length === 0 ? (
          <EmptyState message="No projects yet — check back soon!" />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="rounded-full border-2 border-primary px-8 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
