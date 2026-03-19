import api from "@/lib/api";
import type { TeamMember } from "@/types";

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  const { data } = await api.get<TeamMember[]>("/team/");
  return data;
}
