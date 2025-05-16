/*
  Warnings:

  - Added the required column `disability` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "languages_type" AS ENUM ('amharic', 'oromifa', 'not_specified');

-- CreateEnum
CREATE TYPE "disability_type" AS ENUM ('yes', 'no');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "disability" "disability_type" NOT NULL,
ADD COLUMN     "mothertougue" "languages_type" NOT NULL DEFAULT 'not_specified',
ADD COLUMN     "zone" VARCHAR(50) NOT NULL;
