/*
  Warnings:

  - You are about to drop the `UserFunds` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserFunds" DROP CONSTRAINT "UserFunds_userId_fkey";

-- DropTable
DROP TABLE "UserFunds";

-- CreateTable
CREATE TABLE "Bank" (
    "id" TEXT NOT NULL,
    "funds" DECIMAL(65,30) NOT NULL DEFAULT 1000,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bank_userId_key" ON "Bank"("userId");

-- AddForeignKey
ALTER TABLE "Bank" ADD CONSTRAINT "Bank_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
