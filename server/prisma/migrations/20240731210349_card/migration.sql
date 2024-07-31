/*
  Warnings:

  - You are about to drop the `ItemDetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MonsterDetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PowerUpDetail` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "MonsterEffectType" AS ENUM ('ATTACK', 'DEFENCE', 'HEALTH');

-- DropForeignKey
ALTER TABLE "ItemDetail" DROP CONSTRAINT "ItemDetail_cardId_fkey";

-- DropForeignKey
ALTER TABLE "MonsterDetail" DROP CONSTRAINT "MonsterDetail_cardId_fkey";

-- DropForeignKey
ALTER TABLE "PowerUpDetail" DROP CONSTRAINT "PowerUpDetail_cardId_fkey";

-- DropTable
DROP TABLE "ItemDetail";

-- DropTable
DROP TABLE "MonsterDetail";

-- DropTable
DROP TABLE "PowerUpDetail";

-- CreateTable
CREATE TABLE "CardStat" (
    "id" SERIAL NOT NULL,
    "value" INTEGER NOT NULL,
    "description" VARCHAR(255),
    "monsterEffectType" "MonsterEffectType",
    "itemEffectType" "ItemEffectType",
    "powerUpEffectType" "PowerUpEffectType",
    "cardId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "CardStat_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CardStat" ADD CONSTRAINT "CardStat_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
