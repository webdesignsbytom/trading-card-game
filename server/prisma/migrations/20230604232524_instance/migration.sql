/*
  Warnings:

  - You are about to drop the column `cards` on the `Pack` table. All the data in the column will be lost.
  - You are about to drop the column `cards` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pack" DROP COLUMN "cards";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "cards";

-- CreateTable
CREATE TABLE "CardInstance" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "cardId" INTEGER NOT NULL,
    "packId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "CardInstance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CardInstance_cardId_key" ON "CardInstance"("cardId");

-- CreateIndex
CREATE UNIQUE INDEX "CardInstance_packId_key" ON "CardInstance"("packId");

-- AddForeignKey
ALTER TABLE "CardInstance" ADD CONSTRAINT "CardInstance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardInstance" ADD CONSTRAINT "CardInstance_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardInstance" ADD CONSTRAINT "CardInstance_packId_fkey" FOREIGN KEY ("packId") REFERENCES "Pack"("id") ON DELETE CASCADE ON UPDATE CASCADE;
