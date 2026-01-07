import spells from "../../../../rules/2a/spells/spells";
import type { QueryResolvers, Spell } from "./../../../types.generated";
export const allSpells: NonNullable<QueryResolvers['allSpells']> = async (
  _parent,
  _arg,
) => {
  const allSpells: Spell[] = spells;
  if (_arg.version) {
    return await import(`../../../../rules/${_arg.version.slice(1)}/spells`);
  }
  return allSpells;
};
