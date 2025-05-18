import { useState, useEffect } from "react";
import { getRecommendations } from "@/api";
import { Recommendation } from "@/types";

export const useGetRecommendations = () => {
  const [data, setData] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRecommendations();
        setData(response.data);
        if (response.error) {
          setError(
            response.errorText ||
              "Ошибка получения данных по API в методе getRecommendations"
          );
        }
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(
            "Ошибка получения данных по API в методе getRecommendations"
          );
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
