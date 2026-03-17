import api from "@/lib/api";
import type { PaginatedResponse, Project } from "@/types";

interface ProjectParams {
  page?: number;
  search?: string;
  status?: string;
  ordering?: string;
}

export async function fetchProjects(params: ProjectParams = {}) {
  const { data } = await api.get<PaginatedResponse<Project>>("/projects/", {
    params,
  });
  return data;
}

export async function fetchProjectBySlug(slug: string) {
  const { data } = await api.get<Project>(`/projects/${slug}/`);
  return data;
}
