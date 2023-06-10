-- AlterTable
ALTER TABLE "Battle" ADD COLUMN     "createdById" TEXT,
ADD COLUMN     "receivedById" TEXT;

-- AddForeignKey
ALTER TABLE "Battle" ADD CONSTRAINT "Battle_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Battle" ADD CONSTRAINT "Battle_receivedById_fkey" FOREIGN KEY ("receivedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
