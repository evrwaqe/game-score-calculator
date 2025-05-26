/*
  Warnings:

  - You are about to drop the column `bsoluteCinemaMoment` on the `Calculation` table. All the data in the column will be lost.
  - Added the required column `externalGameId` to the `Calculation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gameName` to the `Calculation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Calculation" DROP COLUMN "bsoluteCinemaMoment",
ADD COLUMN     "absoluteCinemaMoment" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "externalGameId" INTEGER NOT NULL,
ADD COLUMN     "gameName" TEXT NOT NULL;
