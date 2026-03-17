import api from "@/lib/api";
import type { Volunteer, VolunteerApplication } from "@/types";

export async function submitVolunteerForm(data: VolunteerApplication) {
  const { data: result } = await api.post<Volunteer>("/volunteers/", data);
  return result;
}
