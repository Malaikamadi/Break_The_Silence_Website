"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { CardGridSkeleton } from "@/components/ui/Skeleton";
import EmptyState from "@/components/ui/EmptyState";
import FilterBar from "@/components/ui/FilterBar";
import Pagination from "@/components/ui/Pagination";
import { useProjects } from "@/hooks/useProjects";

const statusOptions = [
  { value: "planned", label: "Planned" },
  { value: "ongoing", label: "Ongoing" },
  { value: "completed", label: "Completed" },
];

export default function ProjectsPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const { data, isLoading } = useProjects({ page, search, status });

  return (
    <>
      <section className="bg-sage py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="Our Projects"
            subtitle="Explore our initiatives in plastic recycling, climate innovation, and youth empowerment."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FilterBar
            search={search}
            onSearchChange={(v) => { setSearch(v); setPage(1); }}
            filterValue={status}
            onFilterChange={(v) => { setStatus(v); setPage(1); }}
            filterOptions={statusOptions}
            filterLabel="Status"
            placeholder="Search projects..."
          />

          {isLoading ? (
            <CardGridSkeleton />
          ) : !data || data.results.length === 0 ? (
            <EmptyState message="No projects match your search." />
          ) : (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.results.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
              <Pagination
                page={page}
                hasNext={!!data.next}
                hasPrev={!!data.previous}
                onPageChange={setPage}
              />
            </>
          )}
        </div>
      </section>
    </>
  );
}
