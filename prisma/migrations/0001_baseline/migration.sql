-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "public"."activity_type" AS ENUM ('Very_Active', 'Active', 'Less_Active', 'Not_Active');

-- CreateEnum
CREATE TYPE "public"."advisor_type" AS ENUM ('Yes', 'No');

-- CreateEnum
CREATE TYPE "public"."clerical_status" AS ENUM ('Deacon', 'Priest', 'Other', 'None');

-- CreateEnum
CREATE TYPE "public"."disability_type" AS ENUM ('None', 'Physical', 'Visual', 'Hearing', 'Intellectual', 'Psychosocial', 'Other');

-- CreateEnum
CREATE TYPE "public"."gender_type" AS ENUM ('Female', 'Male');

-- CreateEnum
CREATE TYPE "public"."languages_type" AS ENUM ('Amharic', 'Oromifa', 'Tigrigna', 'Not_Specified', 'English', 'Other');

-- CreateEnum
CREATE TYPE "public"."participation_type" AS ENUM ('Gbi Gubaye Secretariat', 'Audit and Inspection Section', 'Education and Apostolic Service Section', 'Accounting and Assets Section', 'Development and Income Collection Section', 'Languages and Special Interests Section', 'Hymns and Arts Section', 'Planning Monitoring Reports and Information Management Section', 'Professional and Community Development Section', 'Batch and Programs Coordination Section', 'Member Care Advice and Capacity Building Section', 'None');

-- CreateEnum
CREATE TYPE "public"."regions_type" AS ENUM ('Addis_Ababa', 'Dire_Dawa', 'Tigray', 'Afar', 'Amhara', 'Oromia', 'Somali', 'Benishangul_Gumuz', 'SNNPR', 'Sidama', 'South_West_Ethiopia_Peoples_Region', 'Central_Ethiopia_Region', 'South_Ethiopia_Region', 'Harari', 'Not_Specified');

-- CreateEnum
CREATE TYPE "public"."role_type" AS ENUM ('Member', 'ClassSecretary', 'ClassTeamLead', 'ClassManager', 'SubclassSecretary', 'SubclassTeamLead', 'SubclassManager', 'None');

-- CreateEnum
CREATE TYPE "public"."sponsorship_type" AS ENUM ('Government', 'Self_Sponsored', 'Scholarship');

-- CreateTable
CREATE TABLE "public"."User" (
    "userid" SERIAL NOT NULL,
    "studentid" VARCHAR(20) NOT NULL,
    "firstname" VARCHAR(50) NOT NULL,
    "middlename" VARCHAR(50) NOT NULL,
    "lastname" VARCHAR(50) NOT NULL,
    "gender" "public"."gender_type" NOT NULL,
    "baptismalname" VARCHAR(50) NOT NULL DEFAULT 'None',
    "phone" VARCHAR(20) NOT NULL,
    "birthdate" DATE NOT NULL,
    "useremail" VARCHAR(320) DEFAULT 'not_specified',
    "nationality" VARCHAR(50) NOT NULL,
    "isphysicallydisabled" "public"."disability_type" NOT NULL DEFAULT 'None',
    "zonename" VARCHAR(50) NOT NULL DEFAULT 'not_specified',
    "mothertongue" "public"."languages_type" NOT NULL DEFAULT 'Not_Specified',
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "region" "public"."regions_type" NOT NULL DEFAULT 'Not_Specified',
    "clergicalstatus" "public"."clerical_status" NOT NULL DEFAULT 'None',
    "telegram_username" VARCHAR(50) NOT NULL DEFAULT 'not_specified',

    CONSTRAINT "User_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "public"."admin" (
    "adminid" SERIAL NOT NULL,
    "studentid" VARCHAR(20) NOT NULL,
    "adminusername" VARCHAR(50) NOT NULL,
    "adminpassword" VARCHAR(1000) NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("adminid")
);

-- CreateTable
CREATE TABLE "public"."universityusers" (
    "userid" INTEGER NOT NULL,
    "departmentname" VARCHAR(100) NOT NULL,
    "sponsorshiptype" "public"."sponsorship_type" NOT NULL,
    "participation" "public"."participation_type" NOT NULL DEFAULT 'None',
    "cafeteriaaccess" BOOLEAN DEFAULT false,
    "mealcard" VARCHAR(100) DEFAULT 'not_specified',
    "cafeterianame" VARCHAR(100),
    "emergencyname" VARCHAR(100),
    "emergencyphone" VARCHAR(20),
    "batch" INTEGER NOT NULL,
    "confessionfather" VARCHAR(100) DEFAULT 'not_specified',
    "advisors" "public"."advisor_type" NOT NULL DEFAULT 'No',
    "role" "public"."role_type" NOT NULL DEFAULT 'None',
    "coursetaken" BOOLEAN NOT NULL DEFAULT true,
    "holidayincampus" BOOLEAN DEFAULT false,
    "tookcourse" BOOLEAN DEFAULT false,
    "activitylevel" "public"."activity_type" NOT NULL DEFAULT 'Active',

    CONSTRAINT "universityusers_pkey" PRIMARY KEY ("userid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "public"."User"("phone" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_studentid_key" ON "public"."User"("studentid" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "User_useremail_key" ON "public"."User"("useremail" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "admin_studentid_key" ON "public"."admin"("studentid" ASC);

-- AddForeignKey
ALTER TABLE "public"."universityusers" ADD CONSTRAINT "universityusers_userid_fkey" FOREIGN KEY ("userid") REFERENCES "public"."User"("userid") ON DELETE CASCADE ON UPDATE CASCADE;

