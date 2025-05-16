/*
  Warnings:

  - A unique constraint covering the columns `[studentid]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `studentid` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "studentid" VARCHAR(20) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_studentid_key" ON "User"("studentid");
