-- DropForeignKey
ALTER TABLE "EncounterMonster" DROP CONSTRAINT "EncounterMonster_encounterId_fkey";

-- AddForeignKey
ALTER TABLE "EncounterMonster" ADD CONSTRAINT "EncounterMonster_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "Encounter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
