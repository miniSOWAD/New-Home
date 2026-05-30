import dotenv from "dotenv";

dotenv.config();

function getEnv(key: string, fallback?: string) {
  const value = process.env[key] ?? fallback;

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
}

export const env = {
  nodeEnv: getEnv("NODE_ENV", "development"),
  port: Number(getEnv("PORT", "5000")),
  databaseUrl: getEnv("DATABASE_URL"),
  clientUrl: getEnv("CLIENT_URL", "http://localhost:3000"),
  jwtAccessSecret: getEnv("JWT_ACCESS_SECRET", "access_secret"),
  jwtRefreshSecret: getEnv("JWT_REFRESH_SECRET", "refresh_secret"),
  jwtAccessExpiresIn: getEnv("JWT_ACCESS_EXPIRES_IN", "7d"),
  jwtRefreshExpiresIn: getEnv("JWT_REFRESH_EXPIRES_IN", "30d")
};