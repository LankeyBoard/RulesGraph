import { enrichEncounterMonstersWithRuleData } from "../../../../extras/enrichEncounterMonsters";
import type { QueryResolvers } from "./../../../types.generated";
export const encounter: NonNullable<QueryResolvers['encounter']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  if (!_ctx.currentUser) {
    throw new Error("Not authenticated");
  }
  console.log(_arg);

  const encounter = await _ctx.prisma.encounter.findUnique({
    where: { id: _arg.id },
    include: { createdBy: true, monsters: true },
  });
  if (!encounter) {
    throw new Error(`Failed to retrieve encounter with id: ${_arg.id}`);
  }
  console.debug("Encounter found for user", _ctx.currentUser, encounter);

  // Enrich monsters with rule data from basicMonsters
  const enrichedEncounter = {
    ...encounter,
    monsters: enrichEncounterMonstersWithRuleData(encounter.monsters),
  };

  return enrichedEncounter;
};
