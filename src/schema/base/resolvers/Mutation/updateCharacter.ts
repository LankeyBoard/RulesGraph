import culturesData from "../../../../rules/1b/cultures";
import lineagesData from "../../../../rules/1b/lineages";
import playerClasses from "../../../../rules/1b/playerClasses";
import type { MutationResolvers } from "./../../../types.generated";
export const updateCharacter: NonNullable<MutationResolvers['updateCharacter']> = async (_parent, _arg, _ctx) => {
  if (!_ctx.currentUser) {
    throw new Error("You must be logged in to create a character");
  }
  if (!_arg.input || _arg.input === undefined) {
    throw new Error("You must provide a character input");
  }
  /* Implement Mutation.createCharacter resolver logic here */
  const updatedCharacter = await _ctx.prisma.character.update({
    where: {
      id: Number(_arg.id),
    },
    data: {
      ..._arg.input,
      createdBy: { connect: { id: _ctx.currentUser.id } },
    },
  });
  updatedCharacter.createdBy = _ctx.currentUser;
  if (!updatedCharacter.items) updatedCharacter.items = [];
  updatedCharacter.characterClass = playerClasses.find(
    (playerClass) =>
      playerClass.slug.toLocaleUpperCase() ===
      _arg.input?.characterClass.toLocaleUpperCase(),
  );
  if (!updatedCharacter.characterClass)
    throw new Error(
      `Player class ${updatedCharacter.playerClassSlug} not found in the player classes`,
    );
  updatedCharacter.characterLineage = lineagesData.find(
    (lineage) =>
      lineage.slug.toLocaleUpperCase() ===
      _arg.input?.characterLineage.toLocaleUpperCase(),
  );
  if (!updatedCharacter.characterLineage)
    throw new Error(
      `Lineage ${updatedCharacter.characterLineage} not found in the player lineages`,
    );
  updatedCharacter.characterCulture = culturesData.find(
    (culture) =>
      culture.slug.toLocaleUpperCase() ===
      _arg.input?.characterCulture.toLocaleUpperCase(),
  );
  if (!updatedCharacter.characterCulture)
    throw new Error(
      `Culture ${updatedCharacter.characterCulture} not found in the player cultures`,
    );
  console.log("newCharacter", updatedCharacter);
  return updatedCharacter;
};
