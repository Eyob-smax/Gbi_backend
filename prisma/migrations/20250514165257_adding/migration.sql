/*
  Warnings:

  - The values [yes,no] on the enum `disability_type` will be removed. If these variants are still used in the database, this will fail.
  - The values [yes,no] on the enum `haveadvisor_type` will be removed. If these variants are still used in the database, this will fail.
  - The values [amharic,oromifa] on the enum `languages_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "disability_type_new" AS ENUM ('Yes', 'No');
ALTER TABLE "User" ALTER COLUMN "disability" TYPE "disability_type_new" USING ("disability"::text::"disability_type_new");
ALTER TYPE "disability_type" RENAME TO "disability_type_old";
ALTER TYPE "disability_type_new" RENAME TO "disability_type";
DROP TYPE "disability_type_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "haveadvisor_type_new" AS ENUM ('Yes', 'No');
ALTER TABLE "universityusers" ALTER COLUMN "advisors" TYPE "haveadvisor_type_new" USING ("advisors"::text::"haveadvisor_type_new");
ALTER TYPE "haveadvisor_type" RENAME TO "haveadvisor_type_old";
ALTER TYPE "haveadvisor_type_new" RENAME TO "haveadvisor_type";
DROP TYPE "haveadvisor_type_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "languages_type_new" AS ENUM ('Amharic', 'Oromifa', 'not_specified');
ALTER TABLE "User" ALTER COLUMN "mothertougue" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "mothertougue" TYPE "languages_type_new" USING ("mothertougue"::text::"languages_type_new");
ALTER TYPE "languages_type" RENAME TO "languages_type_old";
ALTER TYPE "languages_type_new" RENAME TO "languages_type";
DROP TYPE "languages_type_old";
ALTER TABLE "User" ALTER COLUMN "mothertougue" SET DEFAULT 'not_specified';
COMMIT;
