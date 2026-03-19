"use client";

import { useQuery } from "@tanstack/react-query";
import {
  fetchProjectBySlug,
  fetchProjectCategories,
  fetchProjects,
} from "@/services/projects";

export function useProjects(params: {
  page?: number;
  search?: string;
  status?: string;
  category?: string;
}) {
  return useQuery({
    queryKey: ["projects", params],
    queryFn: () => fetchProjects(params),
  });
}

export function useProjectCategories() {
  return useQuery({
    queryKey: ["projectCategories"],
    queryFn: fetchProjectCategories,
  });
}

export function useProject(slug: string) {
  return useQuery({
    queryKey: ["project", slug],
    queryFn: () => fetchProjectBySlug(slug),
    enabled: !!slug,
  });
}
