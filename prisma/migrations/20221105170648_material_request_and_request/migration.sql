/*
  Warnings:

  - You are about to drop the column `amount` on the `Request` table. All the data in the column will be lost.
  - Added the required column `amount_requested` to the `Material_Request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Material_Request" ADD COLUMN     "amount_requested" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Request" DROP COLUMN "amount";
