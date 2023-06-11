/*
  Warnings:

  - Made the column `createdById` on table `Battle` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "PartyEffectType" AS ENUM ('HEALTH', 'STRENGTH', 'DEFENCE', 'HEAL');

-- CreateEnum
CREATE TYPE "PolicyEffectType" AS ENUM ('SKIP', 'DISCARD', 'RETRIEVE', 'SHUFFLE');

-- AlterTable
ALTER TABLE "Battle" ALTER COLUMN "createdById" SET NOT NULL;

-- AlterTable
ALTER TABLE "PartyCard" ADD COLUMN     "effectType" "PartyEffectType" NOT NULL DEFAULT 'HEALTH',
ADD COLUMN     "statMultiplier" INTEGER NOT NULL DEFAULT 10;

-- AlterTable
ALTER TABLE "PolicyCard" ADD COLUMN     "policyEffectType" "PolicyEffectType" NOT NULL DEFAULT 'SHUFFLE',
ADD COLUMN     "statMultiplier" INTEGER NOT NULL DEFAULT 10;
