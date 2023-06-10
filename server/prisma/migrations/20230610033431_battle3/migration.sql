-- AlterTable
ALTER TABLE "Battle" ADD COLUMN     "playerOneConfirmed" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "playerTwoConfirmed" BOOLEAN NOT NULL DEFAULT false;
