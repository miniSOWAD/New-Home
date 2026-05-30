import bcrypt from "bcryptjs";

import { prisma } from "../../db/prisma";
import type { LoginInput, RegisterInput } from "./auth.validation";
import { createAccessToken, createRefreshToken } from "./auth.utils";

function sanitizeUser(user: {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  avatarUrl: string | null;
  role: string;
  approvalStatus: string;
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
    avatarUrl: user.avatarUrl,
    role: user.role,
    approvalStatus: user.approvalStatus,
    isEmailVerified: user.isEmailVerified,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  };
}

export const authService = {
  async register(payload: RegisterInput) {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: payload.email
      }
    });

    if (existingUser) {
      throw new Error("An account with this email already exists.");
    }

    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const user = await prisma.user.create({
      data: {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        address: payload.address,
        password: hashedPassword,
        role: payload.role,
        approvalStatus: "PENDING",
        isEmailVerified: false
      }
    });

    await prisma.notification.createMany({
      data: [
        {
          userId: user.id,
          title: "Registration submitted",
          message:
            "Your account has been created. Please wait for admin approval.",
          type: "AUTH",
          isRead: false
        }
      ]
    });

    return sanitizeUser(user);
  },

  async login(payload: LoginInput) {
    const user = await prisma.user.findUnique({
      where: {
        email: payload.email
      }
    });

    if (!user) {
      throw new Error("Invalid email or password.");
    }

    const isPasswordMatched = await bcrypt.compare(
      payload.password,
      user.password
    );

    if (!isPasswordMatched) {
      throw new Error("Invalid email or password.");
    }

    const safeUser = sanitizeUser(user);

    const tokenPayload = {
      id: user.id,
      email: user.email,
      role: user.role
    };

    const accessToken = createAccessToken(tokenPayload);
    const refreshToken = createRefreshToken(tokenPayload);

    return {
      user: safeUser,
      accessToken,
      refreshToken
    };
  },

  async getMe(userId: string) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });

    if (!user) {
      throw new Error("User not found.");
    }

    return sanitizeUser(user);
  }
};