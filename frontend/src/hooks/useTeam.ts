"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchTeamMembers } from "@/services/team";

export function useTeamMembers() {
  return useQuery({
    queryKey: ["team"],
    queryFn: fetchTeamMembers,
  });
}
