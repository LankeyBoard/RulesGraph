import { Prisma } from "@prisma/client";
import type { MutationResolvers } from "./../../../types.generated";
import convertChosenToJson from "../../../../extras/convertChosenToJson";
import convertPrismaToGraphQLCharacter from "../../../../extras/convertPrismaToGraphQLCharacter";

export const updateCharacter: NonNullable<MutationResolvers['updateCharacter']> = async (_parent, _arg, _ctx) => {
  if (!_ctx.currentUser) {
    throw new Error("You must be logged in to create a character");
  }
  if (!_arg.input || _arg.input === undefined) {
    throw new Error("You must provide a character input");
  }
  console.debug("Beginning character update with inputs", _arg.input);
  if (_arg.input.items) {
    const mappedItems = _arg.input.items.map((item) => {
      if (!item) return;
      const { id, slots, ...itemWithoutIdAndSlots } = item;
      const updatedItemData = {
        ...itemWithoutIdAndSlots,
        id: Number(id) || undefined,
        slots: slots || 0, // Explicitly include slots
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
        if (item) {
          let dbItem;
          try {
            const { id, ...itemData } = item;
            dbItem = await _ctx.prisma.item.upsert({
              where: { id: Number(id) || -1 }, // Use -1 for non-existent IDs
              update: { ...itemData },
              create: { ...itemData },
            });
            console.debug("item from the db", dbItem);
          } catch (error) {
            const errorMessage =
              error instanceof Error ? error.message : String(error);
            console.error(
              `Prisma error during item upsert/create: ${errorMessage}`,
              error,
            );

            return { errors: [errorMessage] };
          }
          if (dbItem) upsertItems.push(dbItem);
        }
      }),
    );

    const charactersItemIds: Prisma.ItemWhereUniqueInput[] = upsertItems.map(
      (item: { id: number }) => {
        return { id: item.id };
      },
    );

    console.debug("character item ids", charactersItemIds, upsertItems);

    const updateCharacterData: Prisma.CharacterUpdateInput = {
      ..._arg.input,
      currentHealth: _arg.input.currentHealth ?? undefined,
      currentStamina: _arg.input.currentStamina ?? undefined,
      chosen: _arg.input.chosen ? convertChosenToJson(_arg.input.chosen) : {},
      languages: _arg.input.languages?.filter(
        (language) => language !== undefined,
      ) as string[],
      createdBy: { connect: { id: _ctx.currentUser.id } },
      items: {
        set: charactersItemIds,
      },
    };

    console.debug(
      "Update Character Input Data",
      updateCharacterData,
      "items",
      updateCharacterData.items,
    );

    const prismaCharacterData = await _ctx.prisma.character.update({
      where: {
        id: Number(_arg.id),
      },
      include: { createdBy: true, items: { include: { text: true } } },
      data: updateCharacterData,
    });

    if (!prismaCharacterData)
      throw new Error(`Error updating character ${_arg.id}`);

    const updatedCharacter =
      await convertPrismaToGraphQLCharacter(prismaCharacterData);

    console.debug("updatedCharacter", updatedCharacter);
    console.info(
      `Updated character id: ${_arg.id}, name: ${updateCharacterData.name}`,
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return updatedCharacter as any;
  }
};
