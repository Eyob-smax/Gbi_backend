-- CreateEnum
CREATE TYPE "gender_type" AS ENUM ('Female', 'Male');

-- CreateEnum
CREATE TYPE "haveadvisor_type" AS ENUM ('yes', 'no');

-- CreateEnum
CREATE TYPE "participation_type" AS ENUM ('Gbi Gubaye Secretariat', 'Audit and Inspection Section', 'Education and Apostolic Service Section', 'Accounting and Assets Section', 'Development and Income Collection Section', 'Languages and Special Interests Section', 'Hymns and Arts Section', 'Planning Monitoring Reports and Information Management Section', 'Professional and Community Development Section', 'Batch and Programs Coordination Section', 'Member Care Advice and Capacity Building Section', 'None');

-- CreateEnum
CREATE TYPE "role_type" AS ENUM ('Member', 'ClassSecretary', 'ClassTeamLead', 'ClassManager', 'SubclassSecretary', 'SubclassTeamLead', 'SubclassManager', 'None');

-- CreateEnum
CREATE TYPE "sponsorship_type" AS ENUM ('Government', 'Self_Sponsored');

-- CreateTable
CREATE TABLE "User" (
    "userid" SERIAL NOT NULL,
    "firstname" VARCHAR(50) NOT NULL,
    "middlename" VARCHAR(50) NOT NULL,
    "lastname" VARCHAR(50) NOT NULL,
    "gender" "gender_type" NOT NULL,
    "baptismalname" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "birthdate" DATE NOT NULL,
    "useremail" VARCHAR(320) NOT NULL,
    "nationality" VARCHAR(50) NOT NULL,
    "regionnumber" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "admin" (
    "adminid" SERIAL NOT NULL,
    "adminusername" VARCHAR(50) NOT NULL,
    "adminpassword" VARCHAR(50) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("adminid")
);

-- CreateTable
CREATE TABLE "universityusers" (
    "userid" INTEGER NOT NULL,
    "departmentname" VARCHAR(100) NOT NULL,
    "sponsorshiptype" "sponsorship_type" NOT NULL,
    "participation" "participation_type" NOT NULL,
    "cafeteriaaccess" BOOLEAN DEFAULT false,
    "mealcard" VARCHAR(100),
    "batch" VARCHAR(4) NOT NULL,
    "confessionfather" VARCHAR(100),
    "advisors" "haveadvisor_type" NOT NULL,
    "role" "role_type" NOT NULL,

    CONSTRAINT "universityusers_pkey" PRIMARY KEY ("userid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_useremail_key" ON "User"("useremail");

-- AddForeignKey
ALTER TABLE "universityusers" ADD CONSTRAINT "universityusers_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("userid") ON DELETE NO ACTION ON UPDATE NO ACTION;
