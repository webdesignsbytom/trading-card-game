/*
  Warnings:

  - You are about to drop the column `playerOneUserName` on the `Battle` table. All the data in the column will be lost.
  - You are about to drop the column `playerTwoUserName` on the `Battle` table. All the data in the column will be lost.
  - Added the required column `playerOneUsername` to the `Battle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerTwoUsername` to the `Battle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Battle" DROP COLUMN "playerOneUserName",
DROP COLUMN "playerTwoUserName",
ADD COLUMN     "coinFlipResult" TEXT NOT NULL DEFAULT 'HEADS',
ADD COLUMN     "currentPlayerTurn" TEXT NOT NULL DEFAULT 'playerOne',
ADD COLUMN     "loserXP" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "playerOneUsername" TEXT NOT NULL,
ADD COLUMN     "playerTwoUsername" TEXT NOT NULL,
ADD COLUMN     "winnerXP" INTEGER NOT NULL DEFAULT 10;

-- AlterTable
ALTER TABLE "TradeRecord" ALTER COLUMN "creatorCardName" SET DEFAULT 'Name xx',
ALTER COLUMN "recieverUsername" SET DEFAULT 'reciever username xx';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "battlesLost" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "battlesWon" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "playerXP" INTEGER NOT NULL DEFAULT 0;
