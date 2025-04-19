/*
  Warnings:

  - The primary key for the `Employee` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `managerID` column on the `Employee` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `id` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_managerID_fkey";

-- AlterTable
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" BIGINT NOT NULL,
DROP COLUMN "managerID",
ADD COLUMN     "managerID" BIGINT,
ADD CONSTRAINT "Employee_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_managerID_fkey" FOREIGN KEY ("managerID") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
