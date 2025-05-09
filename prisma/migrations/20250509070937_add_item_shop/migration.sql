-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "createdById" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "ItemShop" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdById" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "ItemShop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_InStockToItem" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_InStockToItem_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CouldStockToItem" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CouldStockToItem_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_InStockToItem_B_index" ON "_InStockToItem"("B");

-- CreateIndex
CREATE INDEX "_CouldStockToItem_B_index" ON "_CouldStockToItem"("B");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemShop" ADD CONSTRAINT "ItemShop_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InStockToItem" ADD CONSTRAINT "_InStockToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InStockToItem" ADD CONSTRAINT "_InStockToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "ItemShop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CouldStockToItem" ADD CONSTRAINT "_CouldStockToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CouldStockToItem" ADD CONSTRAINT "_CouldStockToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "ItemShop"("id") ON DELETE CASCADE ON UPDATE CASCADE;
