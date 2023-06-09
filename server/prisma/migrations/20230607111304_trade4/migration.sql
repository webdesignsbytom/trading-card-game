-- AlterTable
ALTER TABLE "TradeRecord" ADD COLUMN     "creatorAgreed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "recieverAgreed" BOOLEAN NOT NULL DEFAULT false;
