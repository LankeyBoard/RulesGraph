import type { FeatureWithoutChoicesResolvers } from "./../../types.generated";
const verifyType = (object: object) => {
  if ("__typename" in object && object.__typename === "FeatureWithoutChoices")
    return true;
  if ("text" in object && typeof object.text !== "string") return true;
  return false;
};
export const FeatureWithoutChoices: FeatureWithoutChoicesResolvers = {
  __isTypeOf: (object) => verifyType(object),
  staminaCost: (parent) => {
    const { staminaCost } = parent;
    return staminaCost || 0;
  },
};
