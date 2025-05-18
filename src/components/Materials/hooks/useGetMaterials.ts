import { useState, useEffect } from "react";
import { getMaterials } from "@/api";
import { ResponseMaterials } from "./index.types";

export const useGetMaterials = () => {
  const [data, setData] = useState<ResponseMaterials | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMaterials<ResponseMaterials>();
        setData(response);
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(
            new Error("Ошибка получения данных по API в методе getMaterials")
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
