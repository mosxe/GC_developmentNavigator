import { useState, useEffect } from "react";
import { getRecommendations } from "api";
import { ResponseRecommendations } from "./index.types";

export const useGetRecommendations = () => {
  const [data, setData] = useState<ResponseRecommendations | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRecommendations<ResponseRecommendations>();
        setData(response);
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(
            new Error(
              "Ошибка получения данных по API в методе useGetRecommendations"
            )
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
