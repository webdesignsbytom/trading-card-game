-- CreateTable
CREATE TABLE "TradeRecord" (
    "id" TEXT NOT NULL,
    "creatorCardId" TEXT NOT NULL,
    "recieverCardId" TEXT NOT NULL,
    "createdById" TEXT,
    "receivedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "TradeRecord_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TradeRecord" ADD CONSTRAINT "TradeRecord_creatorCardId_fkey" FOREIGN KEY ("creatorCardId") REFERENCES "CardInstance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeRecord" ADD CONSTRAINT "TradeRecord_recieverCardId_fkey" FOREIGN KEY ("recieverCardId") REFERENCES "CardInstance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeRecord" ADD CONSTRAINT "TradeRecord_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeRecord" ADD CONSTRAINT "TradeRecord_receivedById_fkey" FOREIGN KEY ("receivedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
