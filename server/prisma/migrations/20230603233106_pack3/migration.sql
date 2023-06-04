/*
  Warnings:

  - The primary key for the `Card` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cardId` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `packId` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Card` table. All the data in the column will be lost.
  - The `id` column on the `Card` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `cardId` on the `MemberCard` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `cardId` on the `PartyCard` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `cardId` on the `PolicyCard` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_packId_fkey";

-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_userId_fkey";

-- DropForeignKey
ALTER TABLE "MemberCard" DROP CONSTRAINT "MemberCard_cardId_fkey";

-- DropForeignKey
ALTER TABLE "PartyCard" DROP CONSTRAINT "PartyCard_cardId_fkey";

-- DropForeignKey
ALTER TABLE "PolicyCard" DROP CONSTRAINT "PolicyCard_cardId_fkey";

-- DropIndex
DROP INDEX "Card_userId_key";

-- AlterTable
ALTER TABLE "Card" DROP CONSTRAINT "Card_pkey",
DROP COLUMN "cardId",
DROP COLUMN "packId",
DROP COLUMN "userId",
ADD COLUMN     "availability" BOOLEAN NOT NULL DEFAULT true,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Card_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "MemberCard" DROP COLUMN "cardId",
ADD COLUMN     "cardId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Pack" ADD COLUMN     "cards" TEXT[];

-- AlterTable
ALTER TABLE "PartyCard" DROP COLUMN "cardId",
ADD COLUMN     "cardId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PolicyCard" DROP COLUMN "cardId",
ADD COLUMN     "cardId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "cards" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "MemberCard_cardId_key" ON "MemberCard"("cardId");

-- CreateIndex
CREATE UNIQUE INDEX "PartyCard_cardId_key" ON "PartyCard"("cardId");

-- CreateIndex
CREATE UNIQUE INDEX "PolicyCard_cardId_key" ON "PolicyCard"("cardId");

-- AddForeignKey
ALTER TABLE "MemberCard" ADD CONSTRAINT "MemberCard_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartyCard" ADD CONSTRAINT "PartyCard_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PolicyCard" ADD CONSTRAINT "PolicyCard_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;
