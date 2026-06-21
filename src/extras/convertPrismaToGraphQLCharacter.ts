import culturesData from "../rules/2a/cultures";
import lineagesData from "../rules/2a/lineages";
import playerClasses from "../rules/2a/playerClasses";
import findClass from "./findClassWithSlug";
import findLineage from "./findLineageWithSlug";
import findCulture from "./findCultureWithSlug";
import { Character } from "../schema/types.generated";
import { applyCharacterChoices } from "./applyCharacterChoices";
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @param character - Character object from prisma
 * @returns a character matching the graphQL schema
 */
const convertPrismaToGraphQLCharacter = (data: any): Character => {
  // deep-clone input so we don't mutate the original prisma object
  const character: any = JSON.parse(JSON.stringify(data));
  console.log("Converting character from Prisma to GraphQL format:", character);

  const getSlug = (val: any) => {
    if (!val && val !== "") return "";
    if (typeof val === "string") return val;
    if (typeof val === "object" && val !== null && "slug" in val)
      return val.slug;
    return String(val);
  };

  const classSlug = getSlug(character.characterClass);
  character.characterClass = findClass(playerClasses, classSlug);

  const lineageSlug = getSlug(character.characterLineage);
  character.characterLineage = findLineage(lineagesData, lineageSlug);

  const cultureSlug = getSlug(character.characterCulture);
  character.characterCulture = findCulture(culturesData, cultureSlug);

  // Apply chosen feature choices to the character
  const characterWithChoices = applyCharacterChoices(
    character,
    character.chosen as Record<string, string[]> | undefined,
  );

  // Ensure items is an array and normalize `uses` to undefined when empty
  const items = (character.items || []).map((item: any) => ({
    ...item,
    uses: item.uses && Object.keys(item.uses || {}).length > 0 ? item.uses : undefined,
  }));
  characterWithChoices.items = items;
  return characterWithChoices;
};
export default convertPrismaToGraphQLCharacter;
