import type { MutationResolvers } from "./../../../types.generated";
import { enrichEncounterMonstersWithRuleData } from "../../../../extras/enrichEncounterMonsters";

export const updateEncounter: NonNullable<MutationResolvers['updateEncounter']> = async (_parent, _arg, _ctx) => {
  if (!_ctx.currentUser) {
    throw new Error("Not authenticated");
  }

  // Verify user owns the encounter
  const encounter = await _ctx.prisma.encounter.findUnique({
    where: { id: _arg.id },
  });

  if (!encounter || encounter.userId !== _ctx.currentUser.id) {
    throw new Error("Encounter not found or you did not create it.");
  }

  // Delete existing monsters
  await _ctx.prisma.encounterMonster.deleteMany({
    where: { encounterId: _arg.id },
  });

  // Update encounter and create new monsters
  const updatedEncounter = await _ctx.prisma.encounter.update({
    where: { id: _arg.id },
    data: {
      description: _arg.input?.description,
      monsters: {
        create:
          _arg.input?.monsters
            ?.filter((m) => m != null)
            .map((monster) => ({
              name: monster.name,
              maxHP: monster.maxHealth ?? 0,
              currentHP: monster.currentHealth ?? monster.maxHealth ?? 0,
            })) || [],
      },
    },
    include: {
      monsters: true,
      createdBy: true,
    },
  });

  // Enrich monsters with rule data
  return {
    ...updatedEncounter,
    monsters: enrichEncounterMonstersWithRuleData(updatedEncounter.monsters),
  };
};
