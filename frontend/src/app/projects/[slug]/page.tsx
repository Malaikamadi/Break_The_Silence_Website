"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft, HiCalendar, HiLocationMarker } from "react-icons/hi";
import { useProject } from "@/hooks/useProjects";
import { DetailSkeleton } from "@/components/ui/Skeleton";

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: project, isLoading, isError } = useProject(slug);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
        <DetailSkeleton />
      </div>
    );
  }

  if (isError || !project) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <h2 className="mb-4 text-2xl font-bold text-charcoal">
          Project not found
        </h2>
        <Link href="/projects" className="text-primary hover:underline">
          &larr; Back to projects
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
      <Link
        href="/projects"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-secondary hover:text-primary"
      >
        <HiArrowLeft /> Back to Projects
      </Link>

      {/* Image */}
      {project.featured_image && (
        <div className="relative mb-8 h-72 w-full overflow-hidden rounded-2xl bg-muted sm:h-96">
          <Image
            src={project.featured_image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <span className="mb-3 inline-block rounded-full bg-sage px-3 py-1 text-xs font-semibold capitalize text-primary">
          {project.status}
        </span>
        <h1 className="mb-4 text-3xl font-extrabold text-charcoal sm:text-4xl">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-secondary">
          <span className="flex items-center gap-1">
            <HiLocationMarker className="text-primary" /> {project.location}
          </span>
          <span className="flex items-center gap-1">
            <HiCalendar className="text-primary" />
            {new Date(project.start_date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            {project.end_date &&
              ` — ${new Date(project.end_date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}`}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="prose mb-10 max-w-none leading-relaxed text-secondary">
        {project.description.split("\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* Impact Metrics */}
      {Object.keys(project.impact_metrics).length > 0 && (
        <div className="rounded-2xl bg-sage p-8">
          <h2 className="mb-6 text-xl font-bold text-charcoal">
            Impact Metrics
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {Object.entries(project.impact_metrics).map(([key, val]) => (
              <div key={key} className="text-center">
                <p className="text-2xl font-extrabold text-primary">
                  {typeof val === "number" ? val.toLocaleString() : val}
                </p>
                <p className="mt-1 text-sm capitalize text-secondary">
                  {key.replace(/_/g, " ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
