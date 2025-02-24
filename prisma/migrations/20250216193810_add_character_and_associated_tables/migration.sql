/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TEST` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('COMMON', 'UNCOMMON', 'RARE', 'LEGENDARY', 'UNIQUE');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "TEST";

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "mettle" INTEGER NOT NULL DEFAULT 0,
    "agility" INTEGER NOT NULL DEFAULT 0,
    "heart" INTEGER NOT NULL DEFAULT 0,
    "intellect" INTEGER NOT NULL DEFAULT 0,
    "coin" INTEGER NOT NULL DEFAULT 5,
    "languages" TEXT[] DEFAULT ARRAY['allspeak']::TEXT[],
    "characterClass" TEXT NOT NULL,
    "characterLineage" TEXT NOT NULL,
    "characterCulture" TEXT NOT NULL,
    "currentHealth" INTEGER NOT NULL DEFAULT 0,
    "currentStamina" INTEGER NOT NULL DEFAULT 0,
    "maxHealth" INTEGER NOT NULL DEFAULT 0,
    "maxStamina" INTEGER NOT NULL DEFAULT 0,
    "armorName" TEXT NOT NULL DEFAULT 'None',
    "shieldName" TEXT NOT NULL DEFAULT 'None',
    "counter" INTEGER NOT NULL,
    "baseDamage" INTEGER NOT NULL DEFAULT 0,
    "rangeMin" INTEGER NOT NULL DEFAULT 0,
    "rangeMax" INTEGER NOT NULL DEFAULT 0,
    "featureChoiceSlugs" TEXT[],

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "type" TEXT NOT NULL,
    "isMagic" BOOLEAN NOT NULL,
    "rarity" "Rarity" NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RuleText" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "type" TEXT,
    "choice" TEXT[],
    "itemId" INTEGER,

    CONSTRAINT "RuleText_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Effect" (
    "id" SERIAL NOT NULL,
    "target" TEXT NOT NULL,
    "calculation" TEXT NOT NULL,

    CONSTRAINT "Effect_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CharacterToItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CharacterToItem_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_EffectToItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_EffectToItem_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CharacterToItem_B_index" ON "_CharacterToItem"("B");

-- CreateIndex
CREATE INDEX "_EffectToItem_B_index" ON "_EffectToItem"("B");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RuleText" ADD CONSTRAINT "RuleText_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToItem" ADD CONSTRAINT "_CharacterToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToItem" ADD CONSTRAINT "_CharacterToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EffectToItem" ADD CONSTRAINT "_EffectToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Effect"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EffectToItem" ADD CONSTRAINT "_EffectToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
