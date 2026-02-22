import { enrichEncounterMonstersWithRuleData } from "../../../../extras/enrichEncounterMonsters";
import type { QueryResolvers } from "./../../../types.generated";

export const myEncounters: NonNullable<QueryResolvers['myEncounters']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  if (!_ctx.currentUser) {
    throw new Error("Not authenticated");
  }

  const encounters = await _ctx.prisma.encounter.findMany({
    where: { userId: _ctx.currentUser.id },
    include: { createdBy: true, monsters: true },
  });
  console.debug("Encounters found for user", _ctx.currentUser, encounters);

  // Enrich monsters with rule data from basicMonsters
  const enrichedEncounters = encounters.map(
    (encounter: { monsters: unknown[] }) => ({
      ...encounter,
      monsters: enrichEncounterMonstersWithRuleData(encounter.monsters),
    }),
  );

  return enrichedEncounters;
};
