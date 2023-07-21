import constants from "@/constants/constants";
import authApi from "@/modules/auth/api/authApi";
import axios from "axios";

const $authedApi = axios.create({
  baseURL: process.env.API_URL
});

$authedApi.interceptors.request.use((config) => {
  const token = localStorage.getItem(constants.token);

  config.headers.set('Access-Control-Allow-Credentials', true);
  config.headers.set('Content-Type', "application/json; charset=utf-8");
  config.headers.set('Access-Control-Allow-Origin', '*');
  config.headers.set('Authorization', `Bearer ${token}`);
  
  return config;
});

export const handleError = async(error: any) => {
  const originalRequest = error.config;

  if (error.response.status === 401 && originalRequest && !originalRequest._isRetry) {
    originalRequest._isRetry = true;
    
    try {
      const response = await authApi.refresh();

      localStorage.setItem(constants.token, response.data);

      return $authedApi.request(originalRequest);

    } catch {}
  }
  return Promise.reject(error);
}

$authedApi.interceptors.response.use((config) => config,
  (error) => handleError(error));

export default $authedApi;