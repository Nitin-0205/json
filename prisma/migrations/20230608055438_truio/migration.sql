/*
  Warnings:

  - Added the required column `CustomerPan` to the `CAIS_Account` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CAPS_Application_Details_CustomerPan_key";

-- AlterTable
ALTER TABLE "CAIS_Account" ADD COLUMN     "CustomerPan" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "CAIS_Account" ADD CONSTRAINT "CAIS_Account_CustomerPan_fkey" FOREIGN KEY ("CustomerPan") REFERENCES "User"("IncomeTaxPan") ON DELETE RESTRICT ON UPDATE CASCADE;
