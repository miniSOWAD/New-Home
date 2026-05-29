import { Router } from "express";

import { dashboardController } from "@/modules/dashboard/dashboard.controller";

export const dashboardRouter = Router();

dashboardRouter.get("/users", dashboardController.getUsers);
dashboardRouter.get("/approvals", dashboardController.getApprovals);
dashboardRouter.get("/listings", dashboardController.getListings);
dashboardRouter.get("/reports", dashboardController.getReports);
dashboardRouter.get("/analytics", dashboardController.getAnalytics);
dashboardRouter.get(
  "/recent-activities",
  dashboardController.getRecentActivities
);