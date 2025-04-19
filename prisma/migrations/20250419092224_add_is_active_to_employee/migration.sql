/*
  Warnings:

  - The primary key for the `Employee` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `isActive` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_managerID_fkey";

-- AlterTable
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_pkey",
ADD COLUMN     "isActive" BOOLEAN NOT NULL,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "managerID" SET DATA TYPE TEXT,
ADD CONSTRAINT "Employee_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_managerID_fkey" FOREIGN KEY ("managerID") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
