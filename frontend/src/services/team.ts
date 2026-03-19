import api from "@/lib/api";
import type { TeamMember } from "@/types";

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  try {
    const { data } = await api.get<TeamMember[]>("/team/");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}
