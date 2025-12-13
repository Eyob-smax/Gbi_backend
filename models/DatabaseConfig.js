import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../prisma/generated/client/client.ts";
import dotenv from "dotenv";
dotenv.config();
export const createPrismaClient = () => {
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
        error.message
      );

      if (attempt >= MAX_RETRIES) {
        console.error(
          "🚫 Max retries reached. Could not connect to the database. Exiting..."
        );
        process.exit(1);
      }

      const delay = getRetryDelay(attempt);
      console.log(`🔄 Retrying in ${delay / 1000} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, delay));

      return connectWithRetry(attempt + 1); // Recursive retry
    }
  };

  // Graceful shutdown
  const disconnect = async () => {
    await client.$disconnect();
    console.log("🛑 Disconnected from the database");
  };

  // Lifecycle hooks (for NestJS or manual use)
  const onModuleInit = () => connectWithRetry();
  const onModuleDestroy = () => disconnect();

  // Return client + lifecycle methods
  return {
    client,
    onModuleInit,
    onModuleDestroy,
  };
};
