/*
  Warnings:

  - You are about to drop the column `agreedToNewsletter` on the `User` table. All the data in the column will be lost.
  - Added the required column `cardType` to the `MemberCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardType` to the `PartyCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardType` to the `PolicyCard` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('POLICY', 'MEMBER', 'PARTY');

-- AlterTable
ALTER TABLE "MemberCard" ADD COLUMN     "cardType" "CardType" NOT NULL;

-- AlterTable
ALTER TABLE "PartyCard" ADD COLUMN     "cardType" "CardType" NOT NULL;

-- AlterTable
ALTER TABLE "PolicyCard" ADD COLUMN     "cardType" "CardType" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "agreedToNewsletter";
