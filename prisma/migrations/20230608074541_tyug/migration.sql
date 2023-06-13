/*
  Warnings:

  - The `Credit_Limit_Amount` column on the `CAIS_Account` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CAIS_Account" DROP COLUMN "Credit_Limit_Amount",
ADD COLUMN     "Credit_Limit_Amount" INTEGER;
