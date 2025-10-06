-- CreateTable
CREATE TABLE "batch_2023_24" (
    "id" SERIAL NOT NULL,
    "StudentId" TEXT NOT NULL,
    "StudentName" TEXT NOT NULL,
    "RollNoSem1" TEXT NOT NULL,
    "AdmissionApplicationNo" TEXT NOT NULL,
    "Altmail" TEXT NOT NULL,
    "FNum" TEXT NOT NULL,
    "Gender" TEXT NOT NULL,
    "MNum" TEXT NOT NULL,
    "PhNum1" TEXT NOT NULL,
    "PhNum2" TEXT NOT NULL,
    "RollNoSem5" INTEGER NOT NULL,
    "aadhaar_number" TEXT NOT NULL,
    "abc_id" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "mobile_number_registered_with_aadhar" TEXT NOT NULL,
    "RollNoSem4" INTEGER NOT NULL,
    "RollNoSem2" TEXT NOT NULL,
    "RollNoSem3" INTEGER NOT NULL,

    CONSTRAINT "batch_2023_24_pkey" PRIMARY KEY ("id")
);
