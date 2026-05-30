import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { env } from "./config/env";
import { appRouter } from "./routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import { notFoundMiddleware } from "./middlewares/not-found.middleware";

export const app = express();

app.use(
  cors({
    origin: env.clientUrl,
    credentials: true
  })
);

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", appRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);