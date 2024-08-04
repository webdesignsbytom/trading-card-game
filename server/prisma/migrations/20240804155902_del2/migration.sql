-- DropForeignKey
ALTER TABLE "CardInstance" DROP CONSTRAINT "CardInstance_deckId_fkey";

-- DropForeignKey
ALTER TABLE "CardInstance" DROP CONSTRAINT "CardInstance_packId_fkey";

-- DropForeignKey
ALTER TABLE "Pack" DROP CONSTRAINT "Pack_userId_fkey";

-- AddForeignKey
ALTER TABLE "Pack" ADD CONSTRAINT "Pack_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardInstance" ADD CONSTRAINT "CardInstance_packId_fkey" FOREIGN KEY ("packId") REFERENCES "Pack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardInstance" ADD CONSTRAINT "CardInstance_deckId_fkey" FOREIGN KEY ("deckId") REFERENCES "Deck"("id") ON DELETE CASCADE ON UPDATE CASCADE;
