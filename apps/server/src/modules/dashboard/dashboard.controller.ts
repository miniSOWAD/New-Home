import type { Request, Response } from "express";

import { dashboardService } from "@/modules/dashboard/dashboard.service";
import { sendSuccess } from "@/utils/api-response";

export const dashboardController = {
  async getUsers(req: Request, res: Response) {
    const users = await dashboardService.getUsers({
      role: req.query.role as string | undefined,
      status: req.query.status as never
    });

    return sendSuccess(res, "Dashboard users fetched successfully.", users);
  },

  async getApprovals(_req: Request, res: Response) {
    const approvals = await dashboardService.getApprovals();

    return sendSuccess(
      res,
      "Dashboard approvals fetched successfully.",
      approvals
    );
  },

  async getListings(req: Request, res: Response) {
    const listings = await dashboardService.getListings({
      type: req.query.type as "TOLET" | "SERVICE" | undefined
    });

    return sendSuccess(
      res,
      "Dashboard listings fetched successfully.",
      listings
    );
  },

  async getReports(req: Request, res: Response) {
    const reports = await dashboardService.getReports({
      status: req.query.status as never
    });

    return sendSuccess(res, "Dashboard reports fetched successfully.", reports);
  },

  async getAnalytics(_req: Request, res: Response) {
    const analytics = await dashboardService.getAnalytics();

    return sendSuccess(
      res,
      "Dashboard analytics fetched successfully.",
      analytics
    );
  },

  async getRecentActivities(_req: Request, res: Response) {
    const activities = await dashboardService.getRecentActivities();

    return sendSuccess(
      res,
      "Dashboard recent activities fetched successfully.",
      activities
    );
  }
};