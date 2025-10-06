/*
  Warnings:

  - A unique constraint covering the columns `[EnrollmentNo]` on the table `Sem5` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[AdmissionApplicationNo]` on the table `Sem5` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Sem5_EnrollmentNo_key" ON "Sem5"("EnrollmentNo");

-- CreateIndex
CREATE UNIQUE INDEX "Sem5_AdmissionApplicationNo_key" ON "Sem5"("AdmissionApplicationNo");
