/*
  Warnings:

  - You are about to drop the column `creatorCardId` on the `TradeRecord` table. All the data in the column will be lost.
  - You are about to drop the column `recieverCardId` on the `TradeRecord` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "TradeRecord" DROP CONSTRAINT "TradeRecord_creatorCardId_fkey";

-- DropForeignKey
ALTER TABLE "TradeRecord" DROP CONSTRAINT "TradeRecord_recieverCardId_fkey";

-- AlterTable
ALTER TABLE "TradeRecord" DROP COLUMN "creatorCardId",
DROP COLUMN "recieverCardId",
ADD COLUMN     "creatorCardInstnaceId" TEXT NOT NULL DEFAULT 'creatorCard',
ADD COLUMN     "creatorCardName" TEXT NOT NULL DEFAULT 'Name',
ADD COLUMN     "creatorUsername" TEXT NOT NULL DEFAULT 'username',
ADD COLUMN     "recieverCardInstanceId" TEXT,
ADD COLUMN     "recieverCardName" TEXT,
ADD COLUMN     "recieverUsername" TEXT NOT NULL DEFAULT 'reciever uername';

-- AddForeignKey
ALTER TABLE "TradeRecord" ADD CONSTRAINT "TradeRecord_creatorCardInstnaceId_fkey" FOREIGN KEY ("creatorCardInstnaceId") REFERENCES "CardInstance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeRecord" ADD CONSTRAINT "TradeRecord_recieverCardInstanceId_fkey" FOREIGN KEY ("recieverCardInstanceId") REFERENCES "CardInstance"("id") ON DELETE CASCADE ON UPDATE CASCADE;
