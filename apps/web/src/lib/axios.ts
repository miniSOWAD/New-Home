import axios from "axios";

import { siteConfig } from "@/config/site.config";

export const apiClient = axios.create({
  baseURL: siteConfig.apiUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);