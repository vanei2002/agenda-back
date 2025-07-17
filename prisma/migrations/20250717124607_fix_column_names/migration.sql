/*
  Warnings:

  - You are about to drop the column `averageDuration` on the `exams` table. All the data in the column will be lost.
  - Added the required column `average_duration` to the `exams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "exams" DROP COLUMN "averageDuration",
ADD COLUMN     "average_duration" TEXT NOT NULL;
