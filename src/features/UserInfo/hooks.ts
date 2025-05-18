import { useState, useEffect } from "react";
import { getUserInfo } from "@/api";
import { UserInfo } from "@/types";

const initialState = {
  fullname: "",
  position: "",
  avatar: "",
};

export const useGetUserInfo = () => {
  const [data, setData] = useState<UserInfo>(initialState);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserInfo();
        setData(response.data);
        if (response.error) {
          setError(
            response.errorText ||
              "Ошибка получения данных по API в методе getUserInfo"
          );
        }
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Ошибка получения данных по API в методе getUserInfo");
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
