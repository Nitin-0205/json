/*
  Warnings:

  - The `Amount_Past_Due` column on the `CAIS_Account` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `Date_Closed` column on the `CAIS_Account` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `Value_of_Collateral` column on the `CAIS_Account` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `AccountHoldertypeCode` column on the `CAIS_Account` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "CAIS_Account" ALTER COLUMN "Credit_Limit_Amount" SET DATA TYPE TEXT,
DROP COLUMN "Amount_Past_Due",
ADD COLUMN     "Amount_Past_Due" DECIMAL(65,30),
DROP COLUMN "Date_Closed",
ADD COLUMN     "Date_Closed" DECIMAL(65,30),
DROP COLUMN "Value_of_Collateral",
ADD COLUMN     "Value_of_Collateral" DECIMAL(65,30),
DROP COLUMN "AccountHoldertypeCode",
ADD COLUMN     "AccountHoldertypeCode" INTEGER;
