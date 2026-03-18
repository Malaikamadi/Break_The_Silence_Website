"use client";

import { useState } from "react";
import { getMediaUrl } from "@/lib/media";
import SectionTitle from "@/components/ui/SectionTitle";
import { CardGridSkeleton } from "@/components/ui/Skeleton";
import EmptyState from "@/components/ui/EmptyState";
import Pagination from "@/components/ui/Pagination";
import { useGallery } from "@/hooks/useGallery";
import { motion } from "framer-motion";

export default function GalleryPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGallery({ page });

  return (
    <>
      <section className="bg-sage py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="Gallery"
            subtitle="A visual journey through our projects, events, and community impact."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {isLoading ? (
            <CardGridSkeleton />
          ) : !data || data.results.length === 0 ? (
            <EmptyState message="No photos yet — check back soon!" />
          ) : (
            <>
              {/* Masonry-style grid using CSS columns */}
              <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                {data.results.map((img, i) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
                  >
                    <div className="relative aspect-auto">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={getMediaUrl(img.image)}
                        alt={img.caption || "Gallery image"}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                    {(img.caption || img.project_title) && (
                      <div className="p-3">
                        {img.caption && (
                          <p className="text-sm font-medium text-charcoal">
                            {img.caption}
                          </p>
                        )}
                        {img.project_title && (
                          <p className="text-xs text-secondary">
                            {img.project_title}
                          </p>
                        )}
                      </div>
                    )}
                  </motion.div>
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
