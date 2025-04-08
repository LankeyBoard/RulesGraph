import { Prisma } from "@prisma/client";
import culturesData from "../../../../rules/1b/cultures";
import lineagesData from "../../../../rules/1b/lineages";
import playerClasses from "../../../../rules/1b/playerClasses";
import type { MutationResolvers } from "./../../../types.generated";
export const updateCharacter: NonNullable<
  MutationResolvers["updateCharacter"]
> = async (_parent, _arg, _ctx) => {
  if (!_ctx.currentUser) {
    throw new Error("You must be logged in to create a character");
  }
  if (!_arg.input || _arg.input === undefined) {
    throw new Error("You must provide a character input");
  }
  // console.log("updateCharacter inputs", _arg.input);

  if (_arg.input.items) {
    // update items the character already has
    _arg.input.items.forEach(async (item) => {
      if (!item || !item.id) return;
      const updatedItemData: Prisma.ItemUpdateInput = {
        title: item.title,
        isMagic: item.isMagic,
        rarity: item.rarity,
        effects: item.effects
          ?.filter((effect) => effect !== undefined && effect !== null)
          .map((effect) => {
            return {
              target: effect.target,
              operation: effect.operation,
              value: effect.value,
              condition: effect.condition,
            };
          }) as Prisma.InputJsonObject[],
        uses:
          item.uses !== null
            ? {
                used: item.uses?.used,
                max: item.uses?.max,
                rechargeOn: item.uses?.rechargeOn,
              }
            : undefined,
        text: {
          create: item.text?.map((textItem) => ({
            text: textItem?.text || "", // Ensure text is a non-optional string
            type: textItem?.type,
          })),
        },
      };

      await _ctx.prisma.item.update({
        where: {
          id: Number(item.id),
        },
        data: updatedItemData,
      });
    });
    const savedItems = await _ctx.prisma.item.findMany({
      where: {
        heldBy: { every: { id: Number(_arg.id) } },
      },
    });
    if (savedItems.length > _arg.input.items.length) {
      // Find the ids that are present in savedItems and not input.items
      const inputItemIds = _arg.input.items
        .map((item) => (item ? Number(item.id) : undefined))
        .filter((id) => id !== undefined) as number[];

      const savedItemIds: number[] = savedItems.map(
        (item: { id: number }) => item.id,
      );

      const idsToDelete: number[] = savedItemIds.filter(
        (id: number) => !inputItemIds.includes(id),
      );
      console.log("ids to delete", idsToDelete);
      // Delete the ids that were found.
      idsToDelete.forEach(async (id) => {
        const deletedItem = await _ctx.prisma.item.delete({
          where: { id: id },
        });
        console.log("deleted", deletedItem);
      });
    }
  }

  const updatedCharacterData: Prisma.CharacterUpdateInput = {
    ..._arg.input,
    currentHealth: _arg.input.currentHealth ?? undefined, // Ensure null is converted to undefined
    currentStamina: _arg.input.currentStamina ?? undefined, // Ensure null is converted to undefined
    items: {
      create:
        _arg.input.items
          ?.filter((item) => item !== null && item !== undefined)
          .filter((item) => item.id === undefined)
          .map((item) => ({
            title: item.title,
            isMagic: item.isMagic,
            rarity: item.rarity,
            uses:
              item.uses !== null
                ? {
                    used: item.uses?.used,
                    max: item.uses?.max,
                    rechargeOn: item.uses?.rechargeOn,
                  }
                : undefined,
            text: {
              create: item.text?.map((textItem) => ({
                text: textItem?.text || "", // Ensure text is a non-optional string
                type: textItem?.type,
              })),
            },
            effects: item.effects
              ?.filter((effect) => effect !== undefined && effect !== null)
              .map((effect) => {
                return {
                  target: effect.target,
                  operation: effect.operation,
                  value: effect.value,
                  condition: effect.condition,
                };
              }),
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

  const updatedCharacter = await _ctx.prisma.character.update({
    where: {
      id: Number(_arg.id),
    },
    data: updatedCharacterData,
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

  updatedCharacter.items = await _ctx.prisma.item.findMany({
    where: {
      heldBy: { every: { id: Number(updatedCharacter.id) } },
    },
  });
  updatedCharacter.items.sort(
    (a: { id: number }, b: { id: number }) => a.id - b.id,
  );
  // console.log("updatedCharacter", updatedCharacter);
  return updatedCharacter;
};
