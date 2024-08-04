-- CreateTable
CREATE TABLE "BattleRequest" (
    "id" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,
    "senderConfirmed" BOOLEAN NOT NULL DEFAULT true,
    "receiverConfirmed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "BattleRequest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BattleRequest" ADD CONSTRAINT "BattleRequest_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BattleRequest" ADD CONSTRAINT "BattleRequest_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
