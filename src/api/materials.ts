import { fetchClient, fetchMock } from "./fetch";
import { ApiResponse } from "@/types/api";
import { Material } from "@/types";
import { mockData } from "./mockData";

export const getMaterials = async (): Promise<ApiResponse<Material[]>> => {
  if (import.meta.env.DEV) {
    return fetchMock<ApiResponse<Material[]>>(mockData.materials);
  }
  return await fetchClient<ApiResponse<Material[]>>("getMaterials");
};
