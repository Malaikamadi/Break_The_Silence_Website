import api from "@/lib/api";
import type { PaginatedResponse, Post, PostSummary } from "@/types";

interface BlogParams {
  page?: number;
  search?: string;
  ordering?: string;
}

export async function fetchPosts(params: BlogParams = {}) {
  const { data } = await api.get<PaginatedResponse<PostSummary>>("/blog/", {
    params,
  });
  return data;
}

export async function fetchPostBySlug(slug: string) {
  const { data } = await api.get<Post>(`/blog/${slug}/`);
  return data;
}
