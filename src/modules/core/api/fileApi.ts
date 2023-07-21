import constants from "@/constants/constants";
import axios from "axios";
import { handleError } from "./authedApi";

const $fileApi = axios.create({
  baseURL: process.env.API_URL,
  transformRequest: (data) => {
    return data;
  }
});

$fileApi.interceptors.request.use((config) => {
  const token = localStorage.getItem(constants.token);

  config.headers.set('Access-Control-Allow-Credentials', true);
  config.headers.set('Access-Control-Allow-Origin', '*');
  config.headers.set('Authorization', `Bearer ${token}`);
  config.headers.set('Content-Type', 'multipart/form-data');
  
  return config;
});

$fileApi.interceptors.response.use((config) => config,
  (error) => handleError(error));

export default $fileApi;