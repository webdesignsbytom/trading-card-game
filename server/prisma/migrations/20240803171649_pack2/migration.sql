/*
  Warnings:

  - Changed the type of `packType` on the `Pack` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Pack" DROP COLUMN "packType",
ADD COLUMN     "packType" "PackType" NOT NULL;
