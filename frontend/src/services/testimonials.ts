import api from "@/lib/api";

export interface Testimonial {
  id?: number;
  quote: string;
  author: string;
  role: string;
}

/**
 * Fetches testimonials from API when endpoint is available.
 * Set NEXT_PUBLIC_API_URL and ensure /testimonials/ endpoint exists.
 * Falls back to empty array (hook uses defaultTestimonials) when API is unavailable.
 */
export async function fetchTestimonials(): Promise<Testimonial[]> {
  if (!process.env.NEXT_PUBLIC_API_URL) return [];
  try {
    const { data } = await api.get<Testimonial[] | { results: Testimonial[] }>(
      "/testimonials/"
    );
    if (Array.isArray(data)) return data;
    if (data && "results" in data) return data.results;
    return [];
  } catch {
    return [];
  }
}
