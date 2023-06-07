/*
  Warnings:

  - The `revieverCardId` column on the `TradeRecord` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `creatorCardId` on the `TradeRecord` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "TradeRecord" DROP COLUMN "creatorCardId",
ADD COLUMN     "creatorCardId" INTEGER NOT NULL,
DROP COLUMN "revieverCardId",
ADD COLUMN     "revieverCardId" INTEGER;
