import { PrismaClient } from "../prisma/client/index.js";
export const prisma = new PrismaClient();

(async function connectPrisma() {
  try {
    await prisma.$connect();
    console.log("✅ Connected to database via Prisma");
  } catch (error) {
    console.error("❌ Prisma connection error:", error);
    process.exit(1);
  }
})();

process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit();
});
