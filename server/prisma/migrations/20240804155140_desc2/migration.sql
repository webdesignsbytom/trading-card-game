/*
  Warnings:

  - You are about to alter the column `imageUrl` on the `Card` table. The data in that column could be lost. The data in that column will be cast from `VarChar(5000)` to `VarChar(4096)`.
  - Added the required column `description` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statName` to the `CardStat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "description" VARCHAR(512) NOT NULL,
ALTER COLUMN "imageUrl" SET DATA TYPE VARCHAR(4096);

-- AlterTable
ALTER TABLE "CardStat" ADD COLUMN     "statName" VARCHAR(128) NOT NULL;
