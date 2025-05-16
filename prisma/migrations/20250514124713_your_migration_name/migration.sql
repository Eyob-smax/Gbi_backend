/*
  Warnings:

  - A unique constraint covering the columns `[studentid]` on the table `admin` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "admin" ADD COLUMN     "studentid" VARCHAR(10) NOT NULL DEFAULT 'non';

-- CreateIndex
CREATE UNIQUE INDEX "admin_studentid_key" ON "admin"("studentid");
