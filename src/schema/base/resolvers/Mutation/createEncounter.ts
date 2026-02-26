import type { MutationResolvers } from "./../../../types.generated";
import { enrichEncounterMonstersWithRuleData } from "../../../../extras/enrichEncounterMonsters";

export const createEncounter: NonNullable<MutationResolvers['createEncounter']> = async (_parent, _arg, _ctx) => {
  if (!_ctx.currentUser) {
    throw new Error("Not authenticated");
  }

  // Create encounter with associated monsters
  const encounter = await _ctx.prisma.encounter.create({
    data: {
      title: _arg.input?.title,
      description: _arg.input?.description,
      createdBy: {
        connect: { id: _ctx.currentUser.id },
      },
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
    ...encounter,
    monsters: enrichEncounterMonstersWithRuleData(encounter.monsters),
  };
};
