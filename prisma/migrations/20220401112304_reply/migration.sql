-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "replyId" INTEGER;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
