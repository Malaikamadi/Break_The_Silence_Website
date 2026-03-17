import api from "@/lib/api";
import type { Event, PaginatedResponse } from "@/types";

interface EventParams {
  page?: number;
  search?: string;
  ordering?: string;
}

export async function fetchEvents(params: EventParams = {}) {
  const { data } = await api.get<PaginatedResponse<Event>>("/events/", {
    params,
  });
  return data;
}

export async function fetchEventBySlug(slug: string) {
  const { data } = await api.get<Event>(`/events/${slug}/`);
  return data;
}
