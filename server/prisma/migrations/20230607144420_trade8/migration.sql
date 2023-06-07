/*
  Warnings:

  - You are about to drop the column `creatorCardInstnaceId` on the `TradeRecord` table. All the data in the column will be lost.
  - Added the required column `creatorCardId` to the `TradeRecord` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TradeRecord" DROP CONSTRAINT "TradeRecord_creatorCardInstnaceId_fkey";

-- AlterTable
ALTER TABLE "TradeRecord" DROP COLUMN "creatorCardInstnaceId",
ADD COLUMN     "creatorCardId" TEXT NOT NULL,
ADD COLUMN     "creatorCardInstanceId" TEXT NOT NULL DEFAULT 'creatorCard',
ADD COLUMN     "revieverCardId" TEXT;

-- AddForeignKey
ALTER TABLE "TradeRecord" ADD CONSTRAINT "TradeRecord_creatorCardInstanceId_fkey" FOREIGN KEY ("creatorCardInstanceId") REFERENCES "CardInstance"("id") ON DELETE CASCADE ON UPDATE CASCADE;
