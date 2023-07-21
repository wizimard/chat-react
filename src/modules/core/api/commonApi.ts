import axios from "axios";

const commonApi = axios.create({
  baseURL: process.env.API_URL
});

export default commonApi;