/*
  Warnings:

  - Added the required column `packType` to the `Pack` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pack" ADD COLUMN     "packType" "PackType" NOT NULL;
