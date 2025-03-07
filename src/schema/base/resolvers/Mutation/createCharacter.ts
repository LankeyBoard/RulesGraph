import culturesData from "../../../../rules/1b/cultures";
import lineagesData from "../../../../rules/1b/lineages";
import playerClasses from "../../../../rules/1b/playerClasses";
import type { MutationResolvers } from "./../../../types.generated";
export const createCharacter: NonNullable<MutationResolvers['createCharacter']> = async (_parent, _arg, _ctx) => {
  if (!_ctx.currentUser) {
    throw new Error("You must be logged in to create a character");
  }
  if (!_arg.input || _arg.input === undefined) {
    throw new Error("You must provide a character input");
  }
  /* Implement Mutation.createCharacter resolver logic here */
  const newCharacter = await _ctx.prisma.character.create({
    data: {
      ..._arg.input,
      createdBy: { connect: { id: _ctx.currentUser.id } },
    },
  });
  newCharacter.createdBy = _ctx.currentUser;
  if (!newCharacter.items) newCharacter.items = [];
  newCharacter.characterClass = playerClasses.find(
    (playerClass) =>
      playerClass.slug.toLocaleUpperCase() ===
      _arg.input?.characterClass.toLocaleUpperCase(),
  );
  if (!newCharacter.characterClass)
    throw new Error(
      `Player class ${newCharacter.playerClassSlug} not found in the player classes`,
    );
  newCharacter.characterLineage = lineagesData.find(
    (lineage) =>
      lineage.slug.toLocaleUpperCase() ===
      _arg.input?.characterLineage.toLocaleUpperCase(),
  );
  if (!newCharacter.characterLineage)
    throw new Error(
      `Lineage ${newCharacter.characterLineage} not found in the player lineages`,
    );
  newCharacter.characterCulture = culturesData.find(
    (culture) =>
      culture.slug.toLocaleUpperCase() ===
      _arg.input?.characterCulture.toLocaleUpperCase(),
  );
  if (!newCharacter.characterCulture)
    throw new Error(
      `Culture ${newCharacter.characterCulture} not found in the player cultures`,
    );
  console.log("newCharacter", newCharacter);
  return newCharacter;
};
