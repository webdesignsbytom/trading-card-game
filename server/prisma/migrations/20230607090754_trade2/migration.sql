/*
  Warnings:

  - Added the required column `name` to the `CardInstance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CardInstance" ADD COLUMN     "name" TEXT NOT NULL;
