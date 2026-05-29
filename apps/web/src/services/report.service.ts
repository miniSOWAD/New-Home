import { apiGet, apiPatch, apiPost } from "@/lib/api";
import type {
  CreateReportSchema,
  UpdateReportStatusSchema
} from "@/schemas/report.schema";
import type { Report, ReportStatus } from "@/types/report.types";

export const reportService = {
  async getReports(params?: { status?: ReportStatus }) {
    return apiGet<Report[]>("/reports", params);
  },

  async getReportById(id: string) {
    return apiGet<Report>(`/reports/${id}`);
  },

  async createReport(payload: CreateReportSchema) {
    return apiPost<Report, CreateReportSchema>("/reports", payload);
  },

  async updateReportStatus(id: string, payload: UpdateReportStatusSchema) {
    return apiPatch<Report, UpdateReportStatusSchema>(
      `/reports/${id}/status`,
      payload
    );
  }
};