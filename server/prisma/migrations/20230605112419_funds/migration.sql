-- CreateTable
CREATE TABLE "UserFunds" (
    "id" TEXT NOT NULL,
    "bank" DECIMAL(65,30) NOT NULL DEFAULT 1000,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "UserFunds_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserFunds_userId_key" ON "UserFunds"("userId");

-- AddForeignKey
ALTER TABLE "UserFunds" ADD CONSTRAINT "UserFunds_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
