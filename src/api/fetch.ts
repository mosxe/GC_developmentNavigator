const APP_KEY = import.meta.env.VITE_APP_KEY;
const API_BASE = "oapi/DevelopmentNavigator";
const HEADERS = {
  "x-app-id": APP_KEY,
  "Content-Type": "application/json",
};

export const fetchClient = async <T>(url: string): Promise<T> => {
  const response = await fetch(`${API_BASE}/${url}`, {
    method: "post",
    headers: HEADERS,
  });

  if (!response.ok) throw new Error(response.statusText);

  return await response.json();
};

export const fetchMock = <T>(mockData: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, Math.random() * 2000);
  });
};
