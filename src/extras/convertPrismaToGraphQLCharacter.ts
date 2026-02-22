import culturesData from "../rules/2a/cultures";
import lineagesData from "../rules/2a/lineages";
import playerClasses from "../rules/2a/playerClasses";
import { Character } from "../schema/types.generated";
import { applyCharacterChoices } from "./applyCharacterChoices";
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @param character - Character object from prisma
 * @returns a character matching the graphQL schema
 */
const convertPrismaToGraphQLCharacter = (character: any): Character => {
  character.characterClass = playerClasses.find(
    (playerClass) =>
      playerClass.slug.toUpperCase() === character.characterClass.toUpperCase(),
  );

  if (!character.characterClass)
    throw new Error(
      `Player class ${character.playerClassSlug} not found in the player classes`,
    );
  character.characterLineage = lineagesData.find(
    (lineage) =>
      lineage.slug.toLocaleUpperCase() ===
      character.characterLineage.toLocaleUpperCase(),
  );
  if (!character.characterLineage)
    throw new Error(
      `Lineage ${character.characterLineage} not found in the player lineages`,
    );
  character.characterCulture = culturesData.find(
    (culture) =>
      culture.slug.toLocaleUpperCase() ===
      character.characterCulture.toLocaleUpperCase(),
  );
  if (!character.characterCulture)
    throw new Error(
      `Culture ${character.characterCulture} not found in the player cultures`,
    );

  // Apply chosen feature choices to the character
  const characterWithChoices = applyCharacterChoices(
    character,
    character.chosen as Record<string, string[]> | undefined,
  );

  characterWithChoices.items = character.items || [];
  characterWithChoices.items = character.items.map((item: { uses: object }) => {
    return {
      ...item,
      uses:
        item.uses && Object.keys(item.uses).length > 0 ? item.uses : undefined,
    };
  });
  return characterWithChoices;
};
export default convertPrismaToGraphQLCharacter;
