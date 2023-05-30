/*
  Warnings:

  - You are about to drop the column `cardName` on the `MemberCard` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cardId]` on the table `MemberCard` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cardId` to the `MemberCard` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "MemberCard_cardName_key";

-- AlterTable
ALTER TABLE "MemberCard" DROP COLUMN "cardName",
ADD COLUMN     "cardId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "cardName" VARCHAR(48) NOT NULL,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartyCard" (
    "id" SERIAL NOT NULL,
    "serialNumber" VARCHAR(28) NOT NULL DEFAULT '',
    "image" VARCHAR(1000) NOT NULL DEFAULT '',
    "name" VARCHAR(250) NOT NULL DEFAULT '',
    "edition" VARCHAR(28) NOT NULL DEFAULT '',
    "rarity" INTEGER NOT NULL DEFAULT 1,
    "holographic" BOOLEAN NOT NULL DEFAULT false,
    "health" INTEGER NOT NULL DEFAULT 40,
    "attack" INTEGER NOT NULL DEFAULT 10,
    "packType" "PackType" NOT NULL,
    "cardStat" VARCHAR(500) NOT NULL DEFAULT '',
    "cardId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "PartyCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PolicyCard" (
    "id" SERIAL NOT NULL,
    "serialNumber" VARCHAR(28) NOT NULL DEFAULT '',
    "image" VARCHAR(1000) NOT NULL DEFAULT '',
    "name" VARCHAR(250) NOT NULL DEFAULT '',
    "edition" VARCHAR(28) NOT NULL DEFAULT '',
    "rarity" INTEGER NOT NULL DEFAULT 1,
    "holographic" BOOLEAN NOT NULL DEFAULT false,
    "health" INTEGER NOT NULL DEFAULT 40,
    "attack" INTEGER NOT NULL DEFAULT 10,
    "packType" "PackType" NOT NULL,
    "cardStat" VARCHAR(500) NOT NULL DEFAULT '',
    "cardId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "PolicyCard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Card_cardName_key" ON "Card"("cardName");

-- CreateIndex
CREATE UNIQUE INDEX "Card_userId_key" ON "Card"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PartyCard_cardId_key" ON "PartyCard"("cardId");

-- CreateIndex
CREATE UNIQUE INDEX "PolicyCard_cardId_key" ON "PolicyCard"("cardId");

-- CreateIndex
CREATE UNIQUE INDEX "MemberCard_cardId_key" ON "MemberCard"("cardId");

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberCard" ADD CONSTRAINT "MemberCard_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartyCard" ADD CONSTRAINT "PartyCard_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PolicyCard" ADD CONSTRAINT "PolicyCard_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;
