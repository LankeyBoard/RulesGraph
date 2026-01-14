import type { MonsterGroupResolvers } from "./../../types.generated";
export const MonsterGroup: MonsterGroupResolvers = {
  __isTypeOf: (object: object) => {
    if ("__typename" in object && object.__typename === "MonsterGroup")
      return true;
    if ("monsters" in object) return true;
    return false;
  },
};
