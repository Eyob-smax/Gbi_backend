import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../prisma/generated/client/index.js";
import "dotenv/config";

let prismaInstance = null;

export const createPrismaClient = () => {
  if (prismaInstance) return prismaInstance;

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is required");
  }

  const pool = new PrismaPg({ connectionString });
  const client = new PrismaClient({ adapter: pool });

  const MAX_RETRIES = 5;
  const INITIAL_RETRY_DELAY_MS = 1000;

  const getRetryDelay = (attempt) =>
    INITIAL_RETRY_DELAY_MS * Math.pow(2, attempt - 1);

  const connectWithRetry = async (attempt = 1) => {
    try {
      await client.$connect();
      console.log("✅ Connected to the database successfully!");
    } catch (error) {
      console.error(
        `❌ Database connection failed (attempt ${attempt}):`,
        error.message,
      );

      if (attempt >= MAX_RETRIES) {
        console.error(
          "🚫 Max retries reached. Could not connect to the database. Exiting...",
        );
        process.exit(1);
      }

      const delay = getRetryDelay(attempt);
      console.log(`🔄 Retrying in ${delay / 1000} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, delay));

      return connectWithRetry(attempt + 1);
    }
  };

  const disconnect = async () => {
    await client.$disconnect();
    console.log("🛑 Disconnected from the database");
  };

  const onModuleInit = () => connectWithRetry();
  const onModuleDestroy = () => disconnect();

  prismaInstance = {
    client,
    onModuleInit,
    onModuleDestroy,
  };

  return prismaInstance;
};
