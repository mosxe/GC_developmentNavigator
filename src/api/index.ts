import { mockData } from "./mockData";

const isDevelopment = import.meta.env.DEV;
const API_BASE = "oapi/DevelopmentNavigator";
const HEADERS = {
  "x-app-id": "devnav",
  "Content-Type": "application/json",
};

const fetchMock = <T>(mockData: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, Math.random() * 2000);
  });
};

const getEmployeeInfo = async <T>(): Promise<T> => {
  if (isDevelopment) {
    return fetchMock(mockData.employeeInfo) as T;
  }

  try {
    const response = await fetch(`${API_BASE}/getPersonInfo`, {
      method: "post",
      headers: HEADERS,
    });

    if (!response.ok) throw new Error(response.statusText);

    const data: T = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(`Неизвестная ошибка getEmployeeInfo: ${error}`);
    }
  }
};

const getEmployeeActivity = async <T>(): Promise<T> => {
  if (isDevelopment) {
    return fetchMock(mockData.employeeActivity) as T;
  }

  try {
    const response = await fetch(`${API_BASE}/getPersonActivity`, {
      method: "post",
      headers: HEADERS,
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(`Неизвестная ошибка getEmployeeActivity: ${error}`);
    }
  }
};

const getMaterials = async <T>(): Promise<T> => {
  if (isDevelopment) {
    return fetchMock(mockData.materials) as T;
  }

  try {
    const response = await fetch(`${API_BASE}/getMaterials`, {
      method: "post",
      headers: HEADERS,
    });

    if (!response.ok) throw new Error(response.statusText);

    const data: T = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(`Неизвестная ошибка getEmployeeInfo: ${error}`);
    }
  }
};

const getRecommendations = async <T>(): Promise<T> => {
  if (isDevelopment) {
    return fetchMock(mockData.recommendations) as T;
  }

  try {
    const response = await fetch(`${API_BASE}/getRecommendations`, {
      method: "post",
      headers: HEADERS,
    });

    if (!response.ok) throw new Error(response.statusText);

    const data: T = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(`Неизвестная ошибка getRecommendations: ${error}`);
    }
  }
};

const createIpr = async <T>(): Promise<T> => {
  if (isDevelopment) {
    return fetchMock(mockData.createIpr) as T;
  }

  try {
    const response = await fetch(`${API_BASE}/createIpr`, {
      method: "post",
      headers: HEADERS,
    });

    if (!response.ok) throw new Error(response.statusText);

    const data: T = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(`Неизвестная ошибка createIpr: ${error}`);
    }
  }
};

export {
  getEmployeeInfo,
  getEmployeeActivity,
  getMaterials,
  getRecommendations,
  createIpr,
};
