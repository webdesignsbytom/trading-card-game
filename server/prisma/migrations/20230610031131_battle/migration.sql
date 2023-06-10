-- AlterTable
ALTER TABLE "CardInstance" ADD COLUMN     "deckId" TEXT;

-- CreateTable
CREATE TABLE "Battle" (
    "id" TEXT NOT NULL,
    "playerOneUserName" TEXT NOT NULL,
    "playerTwoUserName" TEXT NOT NULL,
    "playerOneDeck" TEXT[],
    "playerTwoDeck" TEXT[],
    "inProgress" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Battle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deck" (
    "id" TEXT NOT NULL,
    "deckName" TEXT NOT NULL DEFAULT 'Deck Name x',
    "maxNumOfCards" INTEGER NOT NULL DEFAULT 72,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Deck_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Deck" ADD CONSTRAINT "Deck_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardInstance" ADD CONSTRAINT "CardInstance_deckId_fkey" FOREIGN KEY ("deckId") REFERENCES "Deck"("id") ON DELETE SET NULL ON UPDATE CASCADE;
