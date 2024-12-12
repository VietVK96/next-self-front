import axios from "axios";
import { apiConfig } from "config/api";
import { getToken } from "./ultil";

export const request = () => {
  const token = getToken();
  const instance = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
      "X-Call-Header": "nextSelf",
    },
  });

  instance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${token?.accessToken}`;
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async function (error) {
      if(error?.status === 401){
        window.location.href = "/sign-in"
      }
      
      return Promise.reject(error);
    }
  );
  return instance;
};
