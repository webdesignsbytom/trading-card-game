/*
  Warnings:

  - A unique constraint covering the columns `[serialNumber]` on the table `Card` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
ALTER TYPE "Rarity" ADD VALUE 'ULTIMATE';

-- CreateIndex
CREATE UNIQUE INDEX "Card_serialNumber_key" ON "Card"("serialNumber");
