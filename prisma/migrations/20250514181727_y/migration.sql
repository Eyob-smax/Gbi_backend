/*
  Warnings:

  - You are about to drop the column `disability` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `mothertougue` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `zone` on the `User` table. All the data in the column will be lost.
  - Added the required column `disabled` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `advisors` on the `universityusers` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "advisor_type" AS ENUM ('Yes', 'No');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "disability",
DROP COLUMN "mothertougue",
DROP COLUMN "zone",
ADD COLUMN     "disabled" "disability_type" NOT NULL,
ADD COLUMN     "mothertongue" "languages_type" NOT NULL DEFAULT 'not_specified',
ADD COLUMN     "zonename" VARCHAR(50) NOT NULL DEFAULT 'not_specified';

-- AlterTable
ALTER TABLE "universityusers" DROP COLUMN "advisors",
ADD COLUMN     "advisors" "advisor_type" NOT NULL;
