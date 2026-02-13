import noviceFeatures from "../rules/2a/noviceFeatures";
import spells from "../rules/2a/spells/spells";
import veteranFeatures from "../rules/2a/veteranFeatures";
import type {
  CharacterClassFeature,
  Character,
  GenericFeature,
  Spell,
} from "../schema/types.generated";

/**
 * Updates feature choices by marking chosen options as isChosen = true
 * Works with both CharacterClassFeature and GenericFeature
 */
const updateFeatureChoices = (
  feature: CharacterClassFeature | GenericFeature,
  chosenForFeature: string[],
): CharacterClassFeature | GenericFeature => {
  if (!chosenForFeature || !feature.choices) {
    return feature;
  }

  const updatedChoices = feature.choices.map((choice) => {
    const choiceSlug =
      "slug" in choice.choiceRule ? choice.choiceRule.slug : undefined;
    const choiceText =
      "text" in choice.choiceRule && typeof choice.choiceRule.text !== "string"
        ? choice.choiceRule.text?.join(" ")
        : undefined;

    const choiceIdentifier = choiceSlug || choiceText;
    const isChosen = choiceIdentifier
      ? chosenForFeature.includes(choiceIdentifier)
      : false;

    return {
      ...choice,
      isChosen,
    };
  });

  return {
    ...feature,
    choices: updatedChoices,
  };
};

/**
 * Updates character features by marking the chosen options as isChosen = true
 * @param character - Character object with features (must have resolved characterClass, characterCulture, characterLineage)
 * @param chosen - Chosen features mapping (feature slug to chosen option slugs/text)
 * @returns Updated character object with choices marked as chosen
 */
export const applyCharacterChoices = (
  character: Character,
  chosen?: Record<string, string[]> | null,
) => {
  if (!chosen) {
    return character;
  }

  const characterNoviceFeatures = chosen.noviceFeature?.map((featureSlug) =>
    noviceFeatures.find((f) => f.slug === featureSlug),
  );
  const characterVeteranFeatures = chosen.veteranFeature?.map((featureSlug) =>
    veteranFeatures.find((f) => f.slug === featureSlug),
  );
  const updatedClassFeatures = character.characterClass?.features?.map(
    (feature) => {
      if (!feature) return feature;
      const chosenForFeature = chosen[feature.slug];
      if (!chosenForFeature) return feature;
      return updateFeatureChoices(feature, chosenForFeature);
    },
  ) as CharacterClassFeature[];

  const updatedCultureFeatures: GenericFeature[] =
    character.characterCulture?.traits?.map((feature) => {
      if (!feature) return feature;
      const chosenForFeature = chosen[feature.slug];
      if (!chosenForFeature) return feature;
      return updateFeatureChoices(feature, chosenForFeature);
    }) as GenericFeature[];

  const updatedLineageFeatures: GenericFeature[] =
    character.characterLineage?.traits?.map((feature) => {
      if (!feature) return feature;
      const chosenForFeature = chosen[feature.slug];
      if (!chosenForFeature) return feature;
      return updateFeatureChoices(feature, chosenForFeature);
    }) as GenericFeature[];
  const characterSpells: Spell[] = chosen.spells
    ?.map((spellName) => spells.find((s) => s.name === spellName))
    .filter((s) => s !== undefined);

  return {
    ...character,
    characterClass: {
      ...character.characterClass,
      features: updatedClassFeatures,
    },
    characterCulture: {
      ...character.characterCulture,
      traits: updatedCultureFeatures,
    },
    characterLineage: {
      ...character.characterLineage,
      traits: updatedLineageFeatures,
    },
    noviceFeatures: characterNoviceFeatures,
    veteranFeatures: characterVeteranFeatures,
    spells: characterSpells,
  };
};
