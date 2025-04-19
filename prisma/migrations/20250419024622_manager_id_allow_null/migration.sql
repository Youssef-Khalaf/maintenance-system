-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_managerID_fkey";

-- AlterTable
ALTER TABLE "Employee" ALTER COLUMN "managerID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_managerID_fkey" FOREIGN KEY ("managerID") REFERENCES "Employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
