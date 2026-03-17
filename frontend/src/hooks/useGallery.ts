"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchGalleryImages } from "@/services/gallery";

export function useGallery(params: { page?: number; project?: number } = {}) {
  return useQuery({
    queryKey: ["gallery", params],
    queryFn: () => fetchGalleryImages(params),
  });
}
