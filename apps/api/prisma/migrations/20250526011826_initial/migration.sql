-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "avatar" TEXT,
    "isSupporter" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Calculation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finalScore" INTEGER NOT NULL,
    "bsoluteCinemaMoment" BOOLEAN NOT NULL DEFAULT false,
    "artDirection" INTEGER NOT NULL DEFAULT 0,
    "gameplay" INTEGER NOT NULL DEFAULT 0,
    "audio" INTEGER NOT NULL DEFAULT 0,
    "soundtrack" INTEGER NOT NULL DEFAULT 0,
    "accessibility" INTEGER NOT NULL DEFAULT 0,
    "performance" INTEGER NOT NULL DEFAULT 0,
    "polish" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Calculation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Calculation" ADD CONSTRAINT "Calculation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
