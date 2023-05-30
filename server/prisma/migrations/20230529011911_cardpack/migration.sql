/*
  Warnings:

  - You are about to drop the column `edition` on the `MemberCard` table. All the data in the column will be lost.
  - You are about to drop the column `holographic` on the `MemberCard` table. All the data in the column will be lost.
  - You are about to drop the column `packType` on the `MemberCard` table. All the data in the column will be lost.
  - You are about to drop the column `rarity` on the `MemberCard` table. All the data in the column will be lost.
  - Added the required column `packType` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "edition" VARCHAR(28) NOT NULL DEFAULT '',
ADD COLUMN     "holographic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "packType" "PackType" NOT NULL,
ADD COLUMN     "rarity" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "MemberCard" DROP COLUMN "edition",
DROP COLUMN "holographic",
DROP COLUMN "packType",
DROP COLUMN "rarity";
