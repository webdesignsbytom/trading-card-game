/*
  Warnings:

  - You are about to drop the column `packType` on the `Box` table. All the data in the column will be lost.
  - Added the required column `boxType` to the `Box` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Box" DROP COLUMN "packType",
ADD COLUMN     "boxType" "BoxType" NOT NULL;
