import { useState, useEffect } from "react";
import { getUserActivities } from "@/api";
import { UserActivity } from "@/types";

export const useGetUserActivities = () => {
  const [data, setData] = useState<UserActivity[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserActivities();
        setData(response.data);
        if (response.error) {
          setError(
            response.errorText ||
              "Ошибка получения данных по API в методе getUserActivities"
          );
        }
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          setError(
            error.message ||
              "Ошибка получения данных по API в методе getUserActivities"
          );
        } else {
          setError("Ошибка получения данных по API в методе getUserActivities");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};
