"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { PostSummary } from "@/types";

export default function BlogCard({ post }: { post: PostSummary }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        {post.featured_image ? (
          <Image
            src={post.featured_image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-secondary">
            No image
          </div>
        )}
      </div>

      <div className="p-5">
        {post.published_date && (
          <p className="mb-1 text-xs text-secondary">
            {new Date(post.published_date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        )}
        <h3 className="mb-2 text-lg font-bold text-charcoal line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-secondary line-clamp-3">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-semibold text-primary hover:underline"
        >
          Read More &rarr;
        </Link>
      </div>
    </motion.article>
  );
}
