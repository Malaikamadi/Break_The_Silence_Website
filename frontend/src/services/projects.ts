import api from "@/lib/api";
import type { PaginatedResponse, Project, ProjectCategory } from "@/types";

interface ProjectParams {
  page?: number;
  search?: string;
  status?: string;
  ordering?: string;
  is_featured?: boolean;
  category?: string;
}

export async function fetchProjectCategories(): Promise<ProjectCategory[]> {
  try {
    const { data } = await api.get<ProjectCategory[]>("/projects/categories/");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function fetchProjects(params: ProjectParams = {}) {
  const { data } = await api.get<PaginatedResponse<Project>>("/projects/", {
    params,
  });
  return data;
}

export async function fetchProjectBySlug(slug: string) {
  const { data } = await api.get<Project>(`/projects/${slug}/`);
  return data;
}

/**
 * Fetches featured projects for the hero slider.
 * Uses featured first, then falls back to projects with images.
 */
export async function fetchFeaturedProjects(): Promise<Project[]> {
  if (!process.env.NEXT_PUBLIC_API_URL) return [];
  try {
    const { data } = await api.get<PaginatedResponse<Project>>("/projects/", {
      params: { is_featured: true },
    });
    if (data.results.length > 0) return data.results;
    const fallback = await api.get<PaginatedResponse<Project>>("/projects/");
    const withImages = fallback.data.results.filter((p) => p.featured_image);
    return (withImages.length > 0 ? withImages : fallback.data.results).slice(0, 5);
  } catch {
    return [];
  }
}
