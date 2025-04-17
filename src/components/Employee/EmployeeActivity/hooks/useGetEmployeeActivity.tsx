import { useState, useEffect } from "react";
import { getEmployeeActivity } from "api";
import { ResponseEmployeeActivity } from "./index.types";

export const useGetEmployeeActivity = () => {
  const [data, setData] = useState<ResponseEmployeeActivity | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  console.log("hook useGetEmployeeActivity");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEmployeeActivity<ResponseEmployeeActivity>();
        console.log("hook useGetEmployeeActivity response: ");
        console.log(response);
        setData(response);
      } catch (error) {
        console.log("popali v hook v fetc error: " + error);
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
