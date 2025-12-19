import { FeatureChoicesResolvers } from "../../types.generated";
const findType = (object: object) => {
  if ("text" in object) {
    if (typeof object.text === "string") return "RuleText";
    else if (typeof object.text === "object") return "FeatureWithoutChoices";
  }
  console.warn(`undefined type for ${object}`);
  return undefined;
};
export const FeatureChoices: FeatureChoicesResolvers = {
  __resolveType: (object) => findType(object),
};
