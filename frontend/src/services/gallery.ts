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
