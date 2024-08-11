/*
  Warnings:

  - Added the required column `cardId` to the `Trade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardName` to the `Trade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trade" ADD COLUMN     "cardId" TEXT NOT NULL,
ADD COLUMN     "cardName" TEXT NOT NULL;
