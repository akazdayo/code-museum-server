-- CreateTable
CREATE TABLE "code" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(20) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "evaluation" INTEGER NOT NULL,
    "code" VARCHAR(5000) NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "code_pkey" PRIMARY KEY ("id")
);
