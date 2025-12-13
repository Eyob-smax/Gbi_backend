import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../prisma/generated/client/client.ts";

export class prisma extends PrismaClient {
  constructor(config) {
    const connectionString = config.get < string > "DATABASE_URL";
    if (!connectionString) {
      throw new Error("DATABASE_URL environment variable is required");
    }
    const pool = new PrismaPg({ connectionString: connectionString });
    if (!pool) {
      throw new Error("Can't connect with the db");
    }
    super({ adapter: pool });
  }
  MAX_RETRIES = 5;
  RETRIES = 0;
  INITIAL_RETRY_DELAY_MS = 1000;

  async onModuleInit() {
    while (this.RETRIES < this.MAX_RETRIES) {
      try {
        await this.$connect();
        console.log("✅ Connected to the database successfully!");
        return;
      } catch (err) {
        this.RETRIES++;
        console.error(
          `❌ Database connection failed (attempt ${this.RETRIES}):`,
          err.message
        );

        if (this.RETRIES >= this.MAX_RETRIES) {
          console.error("🚫 Could not connect to the database. Exiting now...");
          process.exit(1);
        }

        const delay =
          this.INITIAL_RETRY_DELAY_MS * Math.pow(2, this.RETRIES - 1);
        console.log(`🔄 Retrying in ${delay / 1000} seconds...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log("🛑 Disconnected from the database");
  }
}
