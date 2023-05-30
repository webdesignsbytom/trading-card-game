/*
  Warnings:

  - You are about to drop the column `packType` on the `PartyCard` table. All the data in the column will be lost.
  - You are about to drop the column `packType` on the `PolicyCard` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PartyCard" DROP COLUMN "packType";

-- AlterTable
ALTER TABLE "PolicyCard" DROP COLUMN "packType";
