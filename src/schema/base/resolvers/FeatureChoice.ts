import type { FeatureChoiceResolvers } from "./../../types.generated";

export const FeatureChoice: FeatureChoiceResolvers = {
  __resolveType(parent) {
    if ("text" in parent) {
      return typeof parent.text === "string"
        ? "RuleText"
        : "FeatureWithoutChoices";
    }

    return null;
  },
};
