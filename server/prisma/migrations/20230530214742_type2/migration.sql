/*
  Warnings:

  - You are about to drop the column `cardType` on the `MemberCard` table. All the data in the column will be lost.
  - You are about to drop the column `cardType` on the `PartyCard` table. All the data in the column will be lost.
  - You are about to drop the column `cardType` on the `PolicyCard` table. All the data in the column will be lost.
  - Added the required column `cardType` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "cardType" "CardType" NOT NULL;

-- AlterTable
ALTER TABLE "MemberCard" DROP COLUMN "cardType";

-- AlterTable
ALTER TABLE "PartyCard" DROP COLUMN "cardType";

-- AlterTable
ALTER TABLE "PolicyCard" DROP COLUMN "cardType";
