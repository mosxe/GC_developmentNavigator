import { fetchClient, fetchMock } from "./fetch";
import { ApiResponse } from "@/types/api";
import { NavLink } from "@/types";
import { mockData } from "./mockData";

export const getNavLinks = async (): Promise<ApiResponse<NavLink[]>> => {
  if (import.meta.env.DEV) {
    return fetchMock<ApiResponse<NavLink[]>>(mockData.navLinks);
  }
  return await fetchClient<ApiResponse<NavLink[]>>("getNavLinks");
};
