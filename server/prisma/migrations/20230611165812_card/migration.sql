/*
  Warnings:

  - You are about to drop the column `image` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `profileImage` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "image",
ADD COLUMN     "imageUrl" VARCHAR(5000) NOT NULL DEFAULT 'imageUrl';

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "profileImage",
ADD COLUMN     "profileimageUrl" TEXT DEFAULT 'https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png';
