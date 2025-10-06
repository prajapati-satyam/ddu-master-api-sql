-- CreateTable
CREATE TABLE "batch_2024_25" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "pincode" TEXT NOT NULL,
    "student_mobile" TEXT NOT NULL,
    "parent_mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "aadhar_no" TEXT NOT NULL,
    "religion" TEXT NOT NULL,
    "cast" TEXT NOT NULL,
    "stream" TEXT NOT NULL,
    "tenth_percent" TEXT NOT NULL,
    "twelfth_percent" TEXT NOT NULL,
    "admission_no" INTEGER NOT NULL,

    CONSTRAINT "batch_2024_25_pkey" PRIMARY KEY ("id")
);
