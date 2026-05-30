import { app } from "./app";
import { env } from "./config/env";
import { prisma } from "./db/prisma";

async function main() {
  try {
    await prisma.$connect();

    app.listen(env.port, () => {
      console.log(`New Home server running on http://localhost:${env.port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();