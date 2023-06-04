/*
  Warnings:

  - The primary key for the `Card` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Pack` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_packId_fkey";

-- DropForeignKey
ALTER TABLE "MemberCard" DROP CONSTRAINT "MemberCard_cardId_fkey";

-- DropForeignKey
ALTER TABLE "PartyCard" DROP CONSTRAINT "PartyCard_cardId_fkey";

-- DropForeignKey
ALTER TABLE "PolicyCard" DROP CONSTRAINT "PolicyCard_cardId_fkey";

-- AlterTable
ALTER TABLE "Card" DROP CONSTRAINT "Card_pkey",
ADD COLUMN     "cardId" SERIAL NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "packId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Card_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Card_id_seq";

-- AlterTable
ALTER TABLE "MemberCard" ALTER COLUMN "cardId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Pack" DROP CONSTRAINT "Pack_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pack_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Pack_id_seq";

-- AlterTable
ALTER TABLE "PartyCard" ALTER COLUMN "cardId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "PolicyCard" ALTER COLUMN "cardId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_packId_fkey" FOREIGN KEY ("packId") REFERENCES "Pack"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MemberCard" ADD CONSTRAINT "MemberCard_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartyCard" ADD CONSTRAINT "PartyCard_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PolicyCard" ADD CONSTRAINT "PolicyCard_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;
