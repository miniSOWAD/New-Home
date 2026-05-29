export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
};

export type ApiErrorResponse = {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
};

export type PaginationMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type PaginatedResponse<T> = ApiResponse<{
  items: T[];
  meta: PaginationMeta;
}>;