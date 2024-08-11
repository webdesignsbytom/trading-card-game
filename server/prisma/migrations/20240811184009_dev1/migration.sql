/*
  Warnings:

  - You are about to drop the column `editable` on the `Card` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "editable",
ADD COLUMN     "health" INTEGER DEFAULT 30;
