import { useState, useEffect } from "react";
import { getNavLinks } from "@/api";
import { NavLink } from "@/types";

export const useGetNavLinks = () => {
  const [data, setData] = useState<NavLink[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNavLinks();
        setData(response.data);
        if (response.error) {
          setError(
            response.errorText ||
              "Ошибка получения данных по API в методе getNavLinks"
          );
        }
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Ошибка получения данных по API в методе getNavLinks");
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
