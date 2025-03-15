import cultures from "../../../../rules/1b/cultures";
import lineages from "../../../../rules/1b/lineages";
import playerClasses from "../../../../rules/1b/playerClasses";
import type { QueryResolvers } from "./../../../types.generated";
export const character: NonNullable<QueryResolvers['character']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.character resolver logic here */
  if (!_ctx.currentUser) {
    throw new Error("Not authenticated");
  }
  if (!_arg.id) {
    throw new Error("Character ID not provided");
  }
  const character = await _ctx.prisma.character.findUnique({
    where: { id: Number(_arg.id) },
  });
  if (!character) {
    throw new Error("Character not found");
  }
  const characterClass = playerClasses.find(
    (c) =>
      c.slug.toLocaleUpperCase() ===
      character.characterClass.toLocaleUpperCase(),
  );
  const characterLineage = lineages.find(
    (c) =>
      c.slug.toLocaleUpperCase() ===
      character.characterLineage.toLocaleUpperCase(),
  );
  const characterCulture = cultures.find(
    (c) =>
      c.slug.toLocaleUpperCase() ===
      character.characterCulture.toLocaleUpperCase(),
  );

  return {
    ...character,
    characterClass,
    characterLineage,
    characterCulture,
  };
};
