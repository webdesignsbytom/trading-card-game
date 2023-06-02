/*
  Warnings:

  - You are about to drop the column `image` on the `MemberCard` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `MemberCard` table. All the data in the column will be lost.
  - You are about to drop the column `serialNumber` on the `MemberCard` table. All the data in the column will be lost.
  - You are about to drop the column `attack` on the `PartyCard` table. All the data in the column will be lost.
  - You are about to drop the column `edition` on the `PartyCard` table. All the data in the column will be lost.
  - You are about to drop the column `health` on the `PartyCard` table. All the data in the column will be lost.
  - You are about to drop the column `holographic` on the `PartyCard` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `PartyCard` table. All the data in the column will be lost.
  - You are about to drop the column `rarity` on the `PartyCard` table. All the data in the column will be lost.
  - You are about to drop the column `serialNumber` on the `PartyCard` table. All the data in the column will be lost.
  - You are about to drop the column `attack` on the `PolicyCard` table. All the data in the column will be lost.
  - You are about to drop the column `edition` on the `PolicyCard` table. All the data in the column will be lost.
  - You are about to drop the column `health` on the `PolicyCard` table. All the data in the column will be lost.
  - You are about to drop the column `holographic` on the `PolicyCard` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `PolicyCard` table. All the data in the column will be lost.
  - You are about to drop the column `rarity` on the `PolicyCard` table. All the data in the column will be lost.
  - You are about to drop the column `serialNumber` on the `PolicyCard` table. All the data in the column will be lost.
  - Changed the type of `rarity` on the `Card` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('COMMON', 'UNCOMMON', 'RARE', 'RAREHOLO', 'MEGARARE', 'MEGARAREHOLO');

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "image" VARCHAR(5000) NOT NULL DEFAULT 'image',
ADD COLUMN     "serialNumber" VARCHAR(28) NOT NULL DEFAULT '',
DROP COLUMN "rarity",
ADD COLUMN     "rarity" "Rarity" NOT NULL;

-- AlterTable
ALTER TABLE "MemberCard" DROP COLUMN "image",
DROP COLUMN "name",
DROP COLUMN "serialNumber",
ADD COLUMN     "memberName" VARCHAR(250) NOT NULL DEFAULT 'name';

-- AlterTable
ALTER TABLE "PartyCard" DROP COLUMN "attack",
DROP COLUMN "edition",
DROP COLUMN "health",
DROP COLUMN "holographic",
DROP COLUMN "image",
DROP COLUMN "rarity",
DROP COLUMN "serialNumber",
ADD COLUMN     "effect" VARCHAR(200) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "PolicyCard" DROP COLUMN "attack",
DROP COLUMN "edition",
DROP COLUMN "health",
DROP COLUMN "holographic",
DROP COLUMN "image",
DROP COLUMN "rarity",
DROP COLUMN "serialNumber",
ADD COLUMN     "effect" VARCHAR(200) NOT NULL DEFAULT '';
