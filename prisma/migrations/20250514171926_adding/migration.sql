/*
  Warnings:

  - Changed the type of `advisors` on the `universityusers` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "universityusers" DROP COLUMN "advisors",
ADD COLUMN     "advisors" VARCHAR(20) NOT NULL;
