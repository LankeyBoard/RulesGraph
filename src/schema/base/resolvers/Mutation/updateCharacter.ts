import { Prisma } from "@prisma/client";
import culturesData from "../../../../rules/2a/cultures";
import lineagesData from "../../../../rules/2a/lineages";
import playerClasses from "../../../../rules/2a/playerClasses";
import type { MutationResolvers } from "./../../../types.generated";
import findClass from "../../../../extras/findClassWithSlug";
import findCulture from "../../../../extras/findCultureWithSlug";
import findLineage from "../../../../extras/findLineageWithSlug";
export const updateCharacter: NonNullable<MutationResolvers['updateCharacter']> = async (_parent, _arg, _ctx) => {
  if (!_ctx.currentUser) {
    throw new Error("You must be logged in to create a character");
  }
  if (!_arg.input || _arg.input === undefined) {
    throw new Error("You must provide a character input");
  }

  if (_arg.input.items) {
    const mappedItems = _arg.input.items.map((item) => {
      if (!item) return;
      const updatedItemData = {
        ...item,
        id: Number(item.id) || undefined,
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
            text: textItem?.text || "",
            type: textItem?.type,
          })),
        },
      };
      return updatedItemData;
    });
    const upsertItems: { id: number }[] = [];
    await Promise.all(
      mappedItems.map(async (item) => {
        console.log("item", item);
        if (item) {
          let i;
          if (item.id) {
            i = await _ctx.prisma.item.upsert({
              where: { id: Number(item.id) },
              update: { ...item },
              create: { ...item },
            });
          } else {
            i = await _ctx.prisma.item.create({
              data: { ...item },
            });
          }
          console.log("item from the upsert", i);
          if (i) upsertItems.push(i);
        }
      }),
    );

    const charactersItemIds: Prisma.ItemWhereUniqueInput[] = upsertItems.map(
      (item: { id: number }) => {
        return { id: item.id };
      },
    );

    console.log("character item ids", charactersItemIds, upsertItems);

    const updateCharacterData: Prisma.CharacterUpdateInput = {
      ..._arg.input,
      currentHealth: _arg.input.currentHealth ?? undefined,
      currentStamina: _arg.input.currentStamina ?? undefined,
      languages: _arg.input.languages?.filter(
        (language) => language !== undefined,
      ) as string[],
      featureChoiceSlugs: _arg.input.featureChoiceSlugs?.filter(
        (slug) => slug !== null && slug !== undefined,
      ) as string[],
      createdBy: { connect: { id: _ctx.currentUser.id } },
      items: {
        set: charactersItemIds,
      },
    };

    console.log(
      "Update Character Input Data",
      updateCharacterData,
      "items",
      updateCharacterData.items,
    );

    const updatedCharacter = await _ctx.prisma.character.update({
      where: {
        id: Number(_arg.id),
      },
      include: { items: { include: { text: true } } },
      data: updateCharacterData,
    });

    if (!updatedCharacter.items) updatedCharacter.items = [];

    updatedCharacter.characterClass = findClass(
      playerClasses,
      _arg.input?.characterClass.toUpperCase(),
    );
    updatedCharacter.characterCulture = findCulture(
      culturesData,
      _arg.input?.characterCulture.toUpperCase(),
    );
    updatedCharacter.characterLineage = findLineage(
      lineagesData,
      _arg.input?.characterLineage.toLocaleUpperCase(),
    );
    if (!updatedCharacter.characterClass)
      throw new Error(
        `Player class ${updatedCharacter.playerClassSlug} not found in the player classes`,
      );

    if (!updatedCharacter.characterLineage)
      throw new Error(
        `Lineage ${updatedCharacter.characterLineage} not found in the player lineages`,
      );

    if (!updatedCharacter.characterCulture)
      throw new Error(
        `Culture ${updatedCharacter.characterCulture} not found in the player cultures`,
      );

    updatedCharacter.maxSlots =
      7 +
      Math.trunc(0.5 * updatedCharacter.mettle) +
      Math.floor(0.5 * updatedCharacter.level);
    updatedCharacter.slots = !updatedCharacter.items
      ? 0
      : updatedCharacter.items.reduce(
          (accumulator: number, currentValue: { slots: number }) => {
            return accumulator + currentValue.slots;
          },
          0,
        );
    console.log("updatedCharacter", updatedCharacter);
    return updatedCharacter;
  }
};
