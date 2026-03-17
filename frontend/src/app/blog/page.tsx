"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import BlogCard from "@/components/ui/BlogCard";
import { CardGridSkeleton } from "@/components/ui/Skeleton";
import EmptyState from "@/components/ui/EmptyState";
import FilterBar from "@/components/ui/FilterBar";
import Pagination from "@/components/ui/Pagination";
import { usePosts } from "@/hooks/usePosts";

export default function BlogPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, isLoading } = usePosts({ page, search });

  return (
    <>
      <section className="bg-sage py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="Our Blog"
            subtitle="Stories, updates, and insights from the frontlines of youth empowerment and climate action."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <FilterBar
            search={search}
            onSearchChange={(v) => { setSearch(v); setPage(1); }}
            placeholder="Search articles..."
          />

          {isLoading ? (
            <CardGridSkeleton />
          ) : !data || data.results.length === 0 ? (
            <EmptyState message="No articles published yet." />
          ) : (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.results.map((post) => (
                  <BlogCard key={post.id} post={post} />
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
