-- CreateTable
CREATE TABLE "LoginRecords" (
    "id" TEXT NOT NULL,
    "startingDateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastDateTimeCollectedReward" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "daysInARow" INTEGER NOT NULL DEFAULT 1,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "LoginRecords_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LoginRecords_userId_key" ON "LoginRecords"("userId");

-- AddForeignKey
ALTER TABLE "LoginRecords" ADD CONSTRAINT "LoginRecords_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
