/*
  Warnings:

  - You are about to drop the `LoginRecords` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LoginRecords" DROP CONSTRAINT "LoginRecords_userId_fkey";

-- DropTable
DROP TABLE "LoginRecords";

-- CreateTable
CREATE TABLE "LoginRecord" (
    "id" TEXT NOT NULL,
    "startingDateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastDateTimeCollectedReward" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "daysInARow" INTEGER NOT NULL DEFAULT 1,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "LoginRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LoginRecord_userId_key" ON "LoginRecord"("userId");

-- AddForeignKey
ALTER TABLE "LoginRecord" ADD CONSTRAINT "LoginRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
