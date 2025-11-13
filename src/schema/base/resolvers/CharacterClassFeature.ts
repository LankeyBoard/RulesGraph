import type { CharacterClassFeatureResolvers } from "./../../types.generated";
export const CharacterClassFeature: CharacterClassFeatureResolvers = {
  isVariant: (object) => object.isVariant || false,
};
