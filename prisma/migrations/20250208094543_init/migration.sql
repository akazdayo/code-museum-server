/*
  Warnings:

  - You are about to drop the column `evaluation` on the `code` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "code" DROP COLUMN "evaluation",
ADD COLUMN     "likes" INTEGER NOT NULL DEFAULT 0;
