/*
  Warnings:

  - Added the required column `RollNo` to the `Sem4` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sem4" ADD COLUMN     "RollNo" INTEGER NOT NULL;
