-- CreateTable
CREATE TABLE "Trade" (
    "id" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "receivedById" TEXT,
    "tradingCardId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Trade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TradeOffer" (
    "id" TEXT NOT NULL,
    "tradeId" TEXT NOT NULL,
    "offeredById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "TradeOffer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CardOffers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Trade_tradingCardId_key" ON "Trade"("tradingCardId");

-- CreateIndex
CREATE UNIQUE INDEX "_CardOffers_AB_unique" ON "_CardOffers"("A", "B");

-- CreateIndex
CREATE INDEX "_CardOffers_B_index" ON "_CardOffers"("B");

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_receivedById_fkey" FOREIGN KEY ("receivedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trade" ADD CONSTRAINT "Trade_tradingCardId_fkey" FOREIGN KEY ("tradingCardId") REFERENCES "CardInstance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeOffer" ADD CONSTRAINT "TradeOffer_tradeId_fkey" FOREIGN KEY ("tradeId") REFERENCES "Trade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TradeOffer" ADD CONSTRAINT "TradeOffer_offeredById_fkey" FOREIGN KEY ("offeredById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardOffers" ADD CONSTRAINT "_CardOffers_A_fkey" FOREIGN KEY ("A") REFERENCES "CardInstance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CardOffers" ADD CONSTRAINT "_CardOffers_B_fkey" FOREIGN KEY ("B") REFERENCES "TradeOffer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
