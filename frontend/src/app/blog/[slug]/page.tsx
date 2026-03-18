"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getMediaUrl } from "@/lib/media";
import { HiArrowLeft } from "react-icons/hi";
import { usePost } from "@/hooks/usePosts";
import { DetailSkeleton } from "@/components/ui/Skeleton";

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, isError } = usePost(slug);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <DetailSkeleton />
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <h2 className="mb-4 text-2xl font-bold text-charcoal">
          Article not found
        </h2>
        <Link href="/blog" className="text-primary hover:underline">
          &larr; Back to blog
        </Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
      <Link
        href="/blog"
        className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-secondary hover:text-primary"
      >
        <HiArrowLeft /> Back to Blog
      </Link>

      {post.featured_image && (
        <div className="relative mb-8 h-64 w-full overflow-hidden rounded-2xl bg-muted sm:h-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getMediaUrl(post.featured_image)}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <header className="mb-8">
        <h1 className="mb-3 text-3xl font-extrabold text-charcoal sm:text-4xl">
          {post.title}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-secondary">
          {post.author && <span>By {post.author}</span>}
          {post.published_date && (
            <span>
              {new Date(post.published_date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          )}
        </div>
      </header>

      <div className="prose max-w-none leading-relaxed text-secondary">
        {post.content.split("\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </article>
  );
}
