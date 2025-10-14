import { PrismaClient } from "../prisma/client/index.js";

export const prisma = new PrismaClient();

const MAX_RETRIES = 10;
const RETRY_DELAY_MS = 2000;

async function connectPrismaWithRetry(attempt = 1) {
  try {
    await prisma.$connect();
    console.log("✅ Connected to database via Prisma");
  } catch (error) {
    console.error(
      `❌ Prisma connection error (Attempt ${attempt}):`,
      error.message
    );

    if (attempt < MAX_RETRIES) {
      console.log(`🔄 Retrying in ${RETRY_DELAY_MS / 1000} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
      await connectPrismaWithRetry(attempt + 1);
    } else {
      console.error(
        "❌ All retry attempts(please check your db config) failed. Exiting..."
      );
      process.exit(1);
    }
  }
}

(async () => {
  await connectPrismaWithRetry(3);
})();

process.on("SIGINT", async () => {
  console.warn("📴 Disconnecting Prisma...");
  await prisma.$disconnect();
  process.exit(0);
});
