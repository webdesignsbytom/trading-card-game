/*
  Warnings:

  - Changed the type of `cardId` on the `Trade` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Trade" DROP COLUMN "cardId",
ADD COLUMN     "cardId" INTEGER NOT NULL;
