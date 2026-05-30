import jwt, { type Secret, type SignOptions } from "jsonwebtoken";

import { env } from "../../config/env";

type TokenPayload = {
  id: string;
  email: string;
  role: string;
};

const accessTokenSecret: Secret = env.jwtAccessSecret;
const refreshTokenSecret: Secret = env.jwtRefreshSecret;

const accessTokenOptions: SignOptions = {
  expiresIn: env.jwtAccessExpiresIn as SignOptions["expiresIn"]
};

const refreshTokenOptions: SignOptions = {
  expiresIn: env.jwtRefreshExpiresIn as SignOptions["expiresIn"]
};

export function createAccessToken(payload: TokenPayload) {
  return jwt.sign(payload, accessTokenSecret, accessTokenOptions);
}

export function createRefreshToken(payload: TokenPayload) {
  return jwt.sign(payload, refreshTokenSecret, refreshTokenOptions);
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, accessTokenSecret) as TokenPayload;
}