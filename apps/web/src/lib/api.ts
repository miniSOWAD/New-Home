import { apiClient } from "@/lib/axios";
import type { ApiResponse, PaginatedResponse } from "@/types/api.types";

export async function apiGet<T>(url: string, params?: unknown) {
  const response = await apiClient.get<ApiResponse<T>>(url, { params });
  return response.data;
}

export async function apiPost<T, P = unknown>(url: string, payload?: P) {
  const response = await apiClient.post<ApiResponse<T>>(url, payload);
  return response.data;
}

export async function apiPatch<T, P = unknown>(url: string, payload?: P) {
  const response = await apiClient.patch<ApiResponse<T>>(url, payload);
  return response.data;
}

export async function apiDelete<T>(url: string) {
  const response = await apiClient.delete<ApiResponse<T>>(url);
  return response.data;
}

export async function apiPaginatedGet<T>(url: string, params?: unknown) {
  const response = await apiClient.get<PaginatedResponse<T>>(url, { params });
  return response.data;
}