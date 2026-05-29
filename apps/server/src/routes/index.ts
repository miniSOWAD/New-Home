import { Router } from "express";

import { dashboardRouter } from "@modules/dashboard/dashboard.route";

const router = Router();

router.get("/health", (_req, res) => {
  return res.status(200).json({
    success: true,
    message: "New Home backend API is running.",
    service: "server",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

router.use("/dashboard", dashboardRouter);

export const appRouter = router;