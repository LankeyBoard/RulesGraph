import type { QueryResolvers } from "./../../../types.generated";
import allMonstersData from "../../../../rules/2a/allMonstersData";
export const allMonsters: NonNullable<QueryResolvers['allMonsters']> = async (
  _parent,
  _arg,
) => {
  if (_arg.version) {
    return await import(
      `../../../../rules/${_arg.version.slice(1)}/allMonsters`
    );
  }
  return allMonstersData;
};
