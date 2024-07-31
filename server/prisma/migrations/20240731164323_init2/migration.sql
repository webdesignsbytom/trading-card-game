-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'DEVELOPER');

-- CreateEnum
CREATE TYPE "PackType" AS ENUM ('ALPHA', 'BETA', 'GAMMA');

-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('MONSTER', 'ITEM', 'POWERUP', 'SPECIAL');

-- CreateEnum
CREATE TYPE "MonsterClass" AS ENUM ('ELEMENTAL', 'DEMONIC', 'ANGEL', 'WATER', 'SPACE', 'TREE', 'ELECTRIC', 'TRICKSTER', 'DEMIGOD');

-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('COMMON', 'UNCOMMON', 'RARE', 'RAREHOLO', 'MEGARARE', 'MEGARAREHOLO', 'ULTIMATE');

-- CreateEnum
CREATE TYPE "BackgroundColour" AS ENUM ('WHITE', 'BLACK', 'RED', 'PURPLE', 'BLUE', 'YELLOW', 'GREEN');

-- CreateEnum
CREATE TYPE "ItemEffectType" AS ENUM ('SKIP', 'DISCARD', 'RETRIEVE', 'SHUFFLE', 'DRAW', 'TEMPERAL', 'STATUS');

-- CreateEnum
CREATE TYPE "PowerUpEffectType" AS ENUM ('HEALTH', 'STRENGTH', 'DEFENCE', 'HEAL', 'TEMPERAL');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('ERROR', 'USER', 'ADMIN', 'VISITOR', 'DEVELOPER', 'PURCHASE', 'MINING', 'TEST');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" VARCHAR(250) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "collectedStartedPacks" BOOLEAN NOT NULL DEFAULT false,
    "lastLoggedIn" TIMESTAMP(3) NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "agreedToTerms" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "battlesWon" INTEGER NOT NULL DEFAULT 0,
    "battlesLost" INTEGER NOT NULL DEFAULT 0,
    "playerXP" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "username" VARCHAR(28),
    "country" TEXT NOT NULL DEFAULT 'United Kingdom',
    "gender" TEXT,
    "dob" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "firstName" VARCHAR(50) DEFAULT '',
    "lastName" VARCHAR(50) DEFAULT '',
    "profileimageUrl" TEXT DEFAULT 'https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png',
    "isPrivate" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Battle" (
    "id" TEXT NOT NULL,
    "playerOneUsername" TEXT NOT NULL,
    "playerTwoUsername" TEXT NOT NULL,
    "playerOneConfirmed" BOOLEAN NOT NULL DEFAULT true,
    "playerTwoConfirmed" BOOLEAN NOT NULL DEFAULT false,
    "playerOneDeck" TEXT[],
    "playerTwoDeck" TEXT[],
    "coinFlipResult" TEXT NOT NULL DEFAULT 'HEADS',
    "currentPlayerTurn" TEXT NOT NULL DEFAULT 'playerOne',
    "winnerXP" INTEGER NOT NULL DEFAULT 10,
    "loserXP" INTEGER NOT NULL DEFAULT 1,
    "createdById" TEXT NOT NULL,
    "receivedById" TEXT,
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

-- CreateTable
CREATE TABLE "Bank" (
    "id" TEXT NOT NULL,
    "funds" DECIMAL(65,30) NOT NULL DEFAULT 1000,
    "gems" INTEGER NOT NULL DEFAULT 25,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoginRecord" (
    "id" TEXT NOT NULL,
    "lastLoginDateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "collectedReward" BOOLEAN NOT NULL DEFAULT false,
    "daysInARow" INTEGER NOT NULL DEFAULT 1,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "LoginRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialMediaLink" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "profileId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "SocialMediaLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserVerification" (
    "id" TEXT NOT NULL,
    "uniqueString" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "UserVerification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PasswordReset" (
    "id" TEXT NOT NULL,
    "uniqueString" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "PasswordReset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pack" (
    "id" TEXT NOT NULL,
    "packType" TEXT NOT NULL,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Pack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "serialNumber" VARCHAR(128) NOT NULL DEFAULT '',
    "cardName" VARCHAR(255) NOT NULL,
    "edition" VARCHAR(128) NOT NULL DEFAULT '',
    "rarity" "Rarity" NOT NULL DEFAULT 'COMMON',
    "holographic" BOOLEAN NOT NULL DEFAULT false,
    "backgroundColour" "BackgroundColour" NOT NULL DEFAULT 'WHITE',
    "packType" "PackType" NOT NULL,
    "cardType" "CardType" NOT NULL,
    "editable" BOOLEAN NOT NULL DEFAULT false,
    "imageUrl" VARCHAR(5000) NOT NULL DEFAULT 'imageUrl',
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardInstance" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Name',
    "userId" TEXT,
    "cardId" INTEGER NOT NULL,
    "packId" TEXT,
    "deckId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "CardInstance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonsterDetail" (
    "cardId" INTEGER NOT NULL,
    "monsterClass" "MonsterClass" NOT NULL,
    "attack" INTEGER DEFAULT 0,
    "attackDescription" VARCHAR(255),
    "defense" INTEGER DEFAULT 0,
    "defenseDescription" VARCHAR(255),
    "health" INTEGER DEFAULT 0,
    "healthDescription" VARCHAR(255),

    CONSTRAINT "MonsterDetail_pkey" PRIMARY KEY ("cardId")
);

-- CreateTable
CREATE TABLE "ItemDetail" (
    "cardId" INTEGER NOT NULL,
    "effectType" "ItemEffectType" NOT NULL,
    "effectValue" INTEGER NOT NULL,

    CONSTRAINT "ItemDetail_pkey" PRIMARY KEY ("cardId")
);

-- CreateTable
CREATE TABLE "PowerUpDetail" (
    "cardId" INTEGER NOT NULL,
    "effectType" "PowerUpEffectType" NOT NULL,
    "effectValue" INTEGER NOT NULL,

    CONSTRAINT "PowerUpDetail_pkey" PRIMARY KEY ("cardId")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "type" "EventType" NOT NULL,
    "topic" TEXT,
    "code" INTEGER,
    "content" TEXT,
    "createdById" TEXT,
    "receivedById" TEXT,
    "viewed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_username_key" ON "Profile"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Bank_userId_key" ON "Bank"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "LoginRecord_userId_key" ON "LoginRecord"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserVerification_uniqueString_key" ON "UserVerification"("uniqueString");

-- CreateIndex
CREATE UNIQUE INDEX "UserVerification_userId_key" ON "UserVerification"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordReset_uniqueString_key" ON "PasswordReset"("uniqueString");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordReset_userId_key" ON "PasswordReset"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Card_serialNumber_key" ON "Card"("serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Card_cardName_key" ON "Card"("cardName");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Battle" ADD CONSTRAINT "Battle_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Battle" ADD CONSTRAINT "Battle_receivedById_fkey" FOREIGN KEY ("receivedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deck" ADD CONSTRAINT "Deck_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bank" ADD CONSTRAINT "Bank_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoginRecord" ADD CONSTRAINT "LoginRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialMediaLink" ADD CONSTRAINT "SocialMediaLink_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserVerification" ADD CONSTRAINT "UserVerification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordReset" ADD CONSTRAINT "PasswordReset_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pack" ADD CONSTRAINT "Pack_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardInstance" ADD CONSTRAINT "CardInstance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardInstance" ADD CONSTRAINT "CardInstance_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardInstance" ADD CONSTRAINT "CardInstance_packId_fkey" FOREIGN KEY ("packId") REFERENCES "Pack"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardInstance" ADD CONSTRAINT "CardInstance_deckId_fkey" FOREIGN KEY ("deckId") REFERENCES "Deck"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonsterDetail" ADD CONSTRAINT "MonsterDetail_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemDetail" ADD CONSTRAINT "ItemDetail_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PowerUpDetail" ADD CONSTRAINT "PowerUpDetail_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_receivedById_fkey" FOREIGN KEY ("receivedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
