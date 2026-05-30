import { Router } from "express";

import { authController } from "./auth.controller";

export const authRouter = Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.get("/me", authController.me);
authRouter.post("/logout", authController.logout);