import cultures from "../../../../rules/1b/cultures";
import lineages from "../../../../rules/1b/lineages";
import playerClasses from "../../../../rules/1b/playerClasses";
import type { QueryResolvers } from "./../../../types.generated";
export const me: NonNullable<QueryResolvers['me']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.me resolver logic here */
  if (!_ctx.currentUser) {
    throw new Error("Not authenticated");
  }
  const user = await _ctx.prisma.user.findUnique({
    where: { id: _ctx.currentUser.id },
  });

  if (!user) {
    throw new Error("User not found");
  }
  user.characters = await _ctx.prisma.character.findMany({
    where: { userId: user.id },
  });
  // remove characters if they have null values for character.characterClass, character.characterLineage, or character.characterCulture
  user.characters = user.characters.filter(
    (character: {
      characterClass: string;
      characterLineage: string;
      characterCulture: string;
    }) => {
      return (
        character.characterClass &&
        character.characterLineage &&
        character.characterCulture
      );
    },
  );
  user.characters = user.characters.map(
    (character: {
      characterClass: string;
      characterLineage: string;
      characterCulture: string;
    }) => {
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
    },
  );
  user.characters = user.characters.filter(
    (character: {
      characterClass: object;
      characterLineage: object;
      characterCulture: object;
    }) => {
      return (
        character.characterClass &&
        character.characterLineage &&
        character.characterCulture
      );
    },
  );
  console.log(user.characters);

  return user;
};
