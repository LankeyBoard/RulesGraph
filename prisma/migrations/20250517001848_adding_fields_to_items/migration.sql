/*
  Warnings:

  - You are about to drop the `_InStockToItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_InStockToItem" DROP CONSTRAINT "_InStockToItem_A_fkey";

-- DropForeignKey
ALTER TABLE "_InStockToItem" DROP CONSTRAINT "_InStockToItem_B_fkey";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "defaultPrice" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "tags" TEXT[];

-- DropTable
DROP TABLE "_InStockToItem";

-- CreateTable
CREATE TABLE "ItemsStockedByShop" (
    "itemId" INTEGER NOT NULL,
    "shopId" TEXT NOT NULL,
    "salePrice" INTEGER NOT NULL,

    CONSTRAINT "ItemsStockedByShop_pkey" PRIMARY KEY ("shopId","itemId")
);

-- AddForeignKey
ALTER TABLE "ItemsStockedByShop" ADD CONSTRAINT "ItemsStockedByShop_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemsStockedByShop" ADD CONSTRAINT "ItemsStockedByShop_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "ItemShop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
