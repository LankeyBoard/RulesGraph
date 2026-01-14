import type { MonsterResolvers } from "./../../types.generated";
export const Monster: MonsterResolvers = {
  __isTypeOf: (object: object) => {
    if ("__typename" in object && object.__typename === "Monster") return true;
    if ("level" in object && typeof object.level === "number") return true;
    return false;
  },
};
