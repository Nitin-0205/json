/*
  Warnings:

  - You are about to drop the column `Id_Number` on the `CAIS_Account_History` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Account_Number]` on the table `CAIS_Account` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `CAIS_Account_History` will be added. If there are existing duplicate values, this will fail.
  - Made the column `Account_Number` on table `CAIS_Account` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `Acct_Number` to the `CAIS_Account_History` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CAIS_Account_History" DROP CONSTRAINT "CAIS_Account_History_Id_Number_fkey";

-- DropIndex
DROP INDEX "CAIS_Account_History_Id_Number_key";

-- AlterTable
ALTER TABLE "CAIS_Account" ALTER COLUMN "Account_Number" SET NOT NULL;

-- AlterTable
ALTER TABLE "CAIS_Account_History" DROP COLUMN "Id_Number",
ADD COLUMN     "Acct_Number" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CAIS_Account_Account_Number_key" ON "CAIS_Account"("Account_Number");

-- CreateIndex
CREATE UNIQUE INDEX "CAIS_Account_History_id_key" ON "CAIS_Account_History"("id");

-- AddForeignKey
ALTER TABLE "CAIS_Account_History" ADD CONSTRAINT "CAIS_Account_History_Acct_Number_fkey" FOREIGN KEY ("Acct_Number") REFERENCES "CAIS_Account"("Account_Number") ON DELETE RESTRICT ON UPDATE CASCADE;
