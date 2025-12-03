import { Prisma } from "@prisma/client";
import culturesData from "../../../../rules/2a/cultures";
import lineagesData from "../../../../rules/2a/lineages";
import playerClasses from "../../../../rules/2a/playerClasses";
import type { MutationResolvers } from "./../../../types.generated";
export const createCharacter: NonNullable<MutationResolvers['createCharacter']> = async (_parent, _arg, _ctx) => {
  if (!_ctx.currentUser) {
    throw new Error("You must be logged in to create a character");
  }
  if (!_arg.input || _arg.input === undefined) {
    throw new Error("You must provide a character input");
  }

  const newCharacterData: Prisma.CharacterCreateInput = {
    ..._arg.input,
    currentHealth: _arg.input.currentHealth ?? undefined, // Ensure null is converted to undefined
    currentStamina: _arg.input.currentStamina ?? undefined, // Ensure null is converted to undefined
    items: {
      create:
        _arg.input.items
          ?.filter((item) => item !== null && item !== undefined)
          .map((item) => ({
            title: item.title,
            isMagic: item.isMagic,
            rarity: item.rarity,
            uses: item.uses !== null ? item.uses : undefined,
            text: {
              create: item.text?.map((textItem) => ({
                text: textItem?.text || "", // Ensure text is a non-optional string
                type: textItem?.type,
              })),
            },
          })) || [],
    },
    languages: _arg.input.languages?.filter(
      (language) => language !== undefined,
    ) as string[],
    featureChoiceSlugs: _arg.input.featureChoiceSlugs?.filter(
      (slug) => slug !== null && slug !== undefined,
    ) as string[],
    createdBy: { connect: { id: _ctx.currentUser.id } },
  };

  const newCharacter = await _ctx.prisma.character.create({
    data: newCharacterData,
  });
  newCharacter.createdBy = _ctx.currentUser;
  newCharacter.createdById = _ctx.currentUser.id;
  console.log(newCharacter);
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

  newCharacter.items = await _ctx.prisma.item.findMany({
    where: {
      heldBy: { every: { id: Number(newCharacter.id) } },
    },
  });
  console.log("newCharacter items", newCharacter.items);
  newCharacter.maxSlots =
    7 +
    Math.trunc(0.5 * newCharacter.mettle) +
    Math.floor(0.5 * newCharacter.level);
  newCharacter.slots = !newCharacter.items
    ? 0
    : newCharacter.items.reduce(
        (accumulator: number, currentValue: { slots: number }) => {
          return accumulator + currentValue.slots;
        },
        0,
      );
  return newCharacter;
};
