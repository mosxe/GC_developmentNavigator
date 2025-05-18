import { fetchClient, fetchMock } from "./fetch";
import { ApiResponse } from "@/types/api";
import { Recommendation } from "@/types";
import { mockData } from "./mockData";

export const getRecommendations = async (): Promise<
  ApiResponse<Recommendation[]>
> => {
  if (import.meta.env.DEV) {
    return fetchMock<ApiResponse<Recommendation[]>>(mockData.recommendations);
  }
  return await fetchClient<ApiResponse<Recommendation[]>>("getRecommendations");
};
