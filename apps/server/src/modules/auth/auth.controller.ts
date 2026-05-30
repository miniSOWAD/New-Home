import type { Request, Response } from "express";

import { sendSuccess } from "../../utils/api-response";
import { authService } from "./auth.service";
import {
  loginValidationSchema,
  registerValidationSchema
} from "./auth.validation";
import { verifyAccessToken } from "./auth.utils";

function getBearerToken(req: Request) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return null;
  }

  const [type, token] = authHeader.split(" ");

  if (type !== "Bearer" || !token) {
    return null;
  }

  return token;
}

export const authController = {
  async register(req: Request, res: Response) {
    const payload = registerValidationSchema.parse(req.body);

    const user = await authService.register(payload);

    return sendSuccess(
      res,
      "Registration successful. Please wait for approval.",
      user,
      201
    );
  },

  async login(req: Request, res: Response) {
    const payload = loginValidationSchema.parse(req.body);

    const result = await authService.login(payload);

    res.cookie("accessToken", result.accessToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: false
    });

    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: false
    });

    return sendSuccess(res, "Login successful.", result);
  },

  async me(req: Request, res: Response) {
    const token = getBearerToken(req) ?? req.cookies?.accessToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized. No token provided."
      });
    }

    const decoded = verifyAccessToken(token);
    const user = await authService.getMe(decoded.id);

    return sendSuccess(res, "Authenticated user fetched successfully.", user);
  },

  async logout(_req: Request, res: Response) {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    return sendSuccess(res, "Logged out successfully.", null);
  }
};