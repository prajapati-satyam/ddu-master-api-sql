-- CreateTable
CREATE TABLE "charusat" (
    "id" SERIAL NOT NULL,
    "roll_no" INTEGER NOT NULL,
    "id_no" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "first_sem_sgpa" DOUBLE PRECISION NOT NULL,
    "first_sem_backlogs" INTEGER NOT NULL,
    "second_sem_sgpa" DOUBLE PRECISION NOT NULL,
    "second_sem_backlogs" INTEGER NOT NULL,
    "first_sem_cgpa" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "charusat_pkey" PRIMARY KEY ("id")
);
