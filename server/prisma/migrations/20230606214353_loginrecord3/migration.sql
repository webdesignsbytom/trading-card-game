/*
  Warnings:

  - You are about to drop the column `lastDateTimeCollectedReward` on the `LoginRecord` table. All the data in the column will be lost.
  - You are about to drop the column `startingDateTime` on the `LoginRecord` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LoginRecord" DROP COLUMN "lastDateTimeCollectedReward",
DROP COLUMN "startingDateTime",
ADD COLUMN     "collectedReward" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "lastLoginDateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
