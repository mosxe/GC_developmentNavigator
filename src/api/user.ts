import { fetchClient, fetchMock } from "./fetch";
import { ApiResponse } from "@/types/api";
import { UserInfo, UserActivity } from "@/types";
import { mockData } from "./mockData";

export const getUserInfo = async (): Promise<ApiResponse<UserInfo>> => {
  if (import.meta.env.DEV) {
    return fetchMock<ApiResponse<UserInfo>>(mockData.userInfo);
  }
  return await fetchClient<ApiResponse<UserInfo>>("getPersonInfo");
};

export const getUserActivities = async (): Promise<
  ApiResponse<UserActivity[]>
> => {
  if (import.meta.env.DEV) {
    return fetchMock<ApiResponse<UserActivity[]>>(
      mockData.userActivities as ApiResponse<UserActivity[]>
    );
  }
  return await fetchClient<ApiResponse<UserActivity[]>>("getPersonActivity");
};

export const createIpr = async (): Promise<ApiResponse<UserActivity>> => {
  if (import.meta.env.DEV) {
    return fetchMock<ApiResponse<UserActivity>>(
      mockData.createIpr as ApiResponse<UserActivity>
    );
  }
  return await fetchClient<ApiResponse<UserActivity>>("createIpr");
};
