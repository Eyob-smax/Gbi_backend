-- AlterTable
ALTER TABLE "User" ALTER COLUMN "regionnumber" DROP NOT NULL,
ALTER COLUMN "disabled" SET DEFAULT 'No';

-- AlterTable
ALTER TABLE "universityusers" ALTER COLUMN "participation" SET DEFAULT 'None',
ALTER COLUMN "role" SET DEFAULT 'None';
