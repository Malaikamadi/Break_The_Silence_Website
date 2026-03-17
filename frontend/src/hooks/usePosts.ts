"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPostBySlug, fetchPosts } from "@/services/blog";

export function usePosts(params: { page?: number; search?: string } = {}) {
  return useQuery({
    queryKey: ["posts", params],
    queryFn: () => fetchPosts(params),
  });
}

export function usePost(slug: string) {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPostBySlug(slug),
    enabled: !!slug,
  });
}
