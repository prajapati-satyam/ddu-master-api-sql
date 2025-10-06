-- CreateTable
CREATE TABLE "Tjpatel_batch_2023_24" (
    "id" SERIAL NOT NULL,
    "SrNo" INTEGER NOT NULL,
    "ApplicantName" TEXT NOT NULL,
    "ApplicationNo" TEXT NOT NULL,
    "Gender" TEXT NOT NULL,
    "Category" TEXT NOT NULL,
    "Disability" TEXT NOT NULL,
    "Minority" TEXT NOT NULL,
    "Nationality" TEXT NOT NULL,
    "PaymentByCollege" TEXT NOT NULL,
    "PaymentByStudent" TEXT NOT NULL,
    "EnrolmentNumber" TEXT NOT NULL,
    "ProgramType" TEXT NOT NULL,
    "Verification" TEXT NOT NULL,
    "spid" TEXT NOT NULL,

    CONSTRAINT "Tjpatel_batch_2023_24_pkey" PRIMARY KEY ("id")
);
