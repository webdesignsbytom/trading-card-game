-- CreateEnum
CREATE TYPE "PowerUp" AS ENUM ('ATTACK', 'HEALTH', 'DEFENCE');

-- AlterTable
ALTER TABLE "PartyCard" ADD COLUMN     "powerUp" "PowerUp" NOT NULL DEFAULT 'ATTACK';
