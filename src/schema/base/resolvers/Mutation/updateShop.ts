import type { MutationResolvers } from "../../../types.generated";

export const updateShop: NonNullable<MutationResolvers['updateShop']> = async (
  _parent,
  args,
  ctx,
) => {
  const { id, input } = args;

  // Ensure the user is authenticated
  if (!ctx.currentUser) {
    throw new Error("You must be logged in to update a shop.");
  }

  // Ensure the shop ID is provided
  if (!id) {
    throw new Error("Shop ID must be provided.");
  }

  // Find the shop to ensure it exists
  const existingShop = await ctx.prisma.itemShop.findUnique({
    where: { id },
  });

  if (!existingShop) {
    throw new Error(`ItemShop with ID ${id} not found.`);
  }

  // Update the ItemShop in the database
  const updatedShop = await ctx.prisma.itemShop.update({
    where: { id },
    data: {
      name: input?.name || existingShop.name,
      description: input?.description || existingShop.description,
      itemsInStock: {
        deleteMany: {}, // Clear existing items
        create: input?.itemsInStock.map((item) => ({
          title: item?.title,
          isMagic: item?.isMagic,
          rarity: item?.rarity,
          uses: item?.uses
            ? {
                used: item?.uses.used,
                max: item?.uses.max,
                rechargeOn: item?.uses.rechargeOn,
              }
            : undefined,
          text: {
            create: item?.text.map((ruleText) => ({
              text: ruleText?.text,
              type: ruleText?.type,
              choice: ruleText?.choices || [],
            })),
          },
          effects: item?.effects.map((effect) => ({
            target: effect?.target,
            operation: effect?.operation,
            value: effect?.value,
            condition: effect?.condition,
          })),
        })),
      },
      itemsCouldStock: {
        deleteMany: {}, // Clear existing items
        create: input?.itemsCouldStock.map((item) => ({
          title: item?.title,
          isMagic: item?.isMagic,
          rarity: item?.rarity,
          uses: item?.uses
            ? {
                used: item.uses.used,
                max: item.uses.max,
                rechargeOn: item.uses.rechargeOn,
              }
            : undefined,
          text: {
            create: item?.text.map((ruleText) => ({
              text: ruleText?.text,
              type: ruleText?.type,
              choice: ruleText?.choices || [],
            })),
          },
          effects: item?.effects.map((effect) => ({
            target: effect?.target,
            operation: effect?.operation,
            value: effect?.value,
            condition: effect?.condition,
          })),
        })),
      },
    },
  });

  return updatedShop;
};
