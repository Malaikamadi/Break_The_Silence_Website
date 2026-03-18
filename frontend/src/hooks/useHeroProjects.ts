"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchFeaturedProjects } from "@/services/projects";

export function useHeroProjects() {
  return useQuery({
    queryKey: ["hero-projects"],
    queryFn: fetchFeaturedProjects,
    staleTime: 5 * 60 * 1000,
  });
}
