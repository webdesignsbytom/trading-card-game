/*
  Warnings:

  - Added the required column `backgroundColour` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BackgroundColour" AS ENUM ('WHITE', 'BLACK', 'RED', 'PURPLE', 'BLUE', 'YELLOW', 'GREEN');

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "backgroundColour" "BackgroundColour" NOT NULL;
