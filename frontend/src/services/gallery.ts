import api from "@/lib/api";
import type { GalleryImage, PaginatedResponse } from "@/types";

interface GalleryParams {
  page?: number;
  project?: number;
  is_featured?: boolean;
}

export async function fetchGalleryImages(params: GalleryParams = {}) {
  const { data } = await api.get<PaginatedResponse<GalleryImage>>("/gallery/", {
    params,
  });
  return data;
}

/**
 * Fetches images for the hero slider — featured gallery first, then recent.
 */
export async function fetchHeroSlides(): Promise<GalleryImage[]> {
  if (!process.env.NEXT_PUBLIC_API_URL) return [];
  try {
    const { data } = await api.get<PaginatedResponse<GalleryImage>>(
      "/gallery/",
      { params: { is_featured: true } }
    );
    if (data.results.length > 0) return data.results;
    const fallback = await api.get<PaginatedResponse<GalleryImage>>(
      "/gallery/"
    );
    return fallback.data.results;
  } catch {
    return [];
  }
}
