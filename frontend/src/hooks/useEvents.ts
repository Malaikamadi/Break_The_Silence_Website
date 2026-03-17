"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "@/services/events";

export function useEvents(params: { page?: number; search?: string } = {}) {
  return useQuery({
    queryKey: ["events", params],
    queryFn: () => fetchEvents(params),
  });
}
