import { useState, useEffect } from "react";
import { getMaterials } from "@/api";
import { Material } from "@/types";

export const useGetMaterials = () => {
  const [data, setData] = useState<Material[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMaterials();
        setData(response.data);
        if (response.error) {
          setError(
            response.errorText ||
              "Ошибка получения данных по API в методе getMaterials"
          );
        }
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Ошибка получения данных по API в методе getMaterials");
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
