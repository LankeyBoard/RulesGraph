/*
  Warnings:

  - You are about to drop the `Effect` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EffectToItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EffectToItem" DROP CONSTRAINT "_EffectToItem_A_fkey";

-- DropForeignKey
ALTER TABLE "_EffectToItem" DROP CONSTRAINT "_EffectToItem_B_fkey";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "effects" JSONB[];

-- DropTable
DROP TABLE "Effect";

-- DropTable
DROP TABLE "_EffectToItem";
