-- Add password update timestamp tracking for admins
ALTER TABLE "public"."admin"
ADD COLUMN "passwordUpdatedAt" TIMESTAMP(3);
