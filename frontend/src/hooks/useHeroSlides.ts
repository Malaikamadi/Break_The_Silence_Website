"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchHeroSlides } from "@/services/gallery";

export function useHeroSlides() {
  return useQuery({
    queryKey: ["hero-slides"],
    queryFn: fetchHeroSlides,
    staleTime: 5 * 60 * 1000,
  });
}
