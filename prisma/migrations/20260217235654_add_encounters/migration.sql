-- CreateTable
CREATE TABLE "EncounterMonster" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "maxHP" INTEGER NOT NULL,
    "currentHP" INTEGER NOT NULL,
    "encounterId" TEXT NOT NULL,

    CONSTRAINT "EncounterMonster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Encounter" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Encounter_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EncounterMonster" ADD CONSTRAINT "EncounterMonster_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "Encounter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encounter" ADD CONSTRAINT "Encounter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
