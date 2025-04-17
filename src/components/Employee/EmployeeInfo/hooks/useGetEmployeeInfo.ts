import { useState, useEffect } from "react";
import { getEmployeeInfo } from "api";
import { ResponseEmployeeInfo } from "./index.types";

export const useGetEmployeeInfo = () => {
  const [data, setData] = useState<ResponseEmployeeInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEmployeeInfo<ResponseEmployeeInfo>();
        setData(response);
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(
            new Error("Ошибка получения данных по API в методе getEmployeeInfo")
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
