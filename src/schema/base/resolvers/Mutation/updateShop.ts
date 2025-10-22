import type { MutationResolvers } from "../../../types.generated";

export const updateShop: NonNullable<MutationResolvers["updateShop"]> = async (
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

  if (!input) {
    throw new Error("Shop info must be provided");
  }
  console.log("update Shop mutation with id and input", id, input);
  // Find the shop to ensure it exists
  const existingShop = await ctx.prisma.itemShop.findUnique({
    where: { id },
  });

  if (!existingShop) {
    throw new Error(`ItemShop with ID ${id} not found.`);
  }
  input.itemsInStock.forEach((item) => {
    console.log(item);
  });
  // Update the ItemShop in the database
  await ctx.prisma.itemShop.update({
    where: { id },
    data: {
      name: input?.name || existingShop.name,
      description: input?.description || existingShop.description,
      ItemsStockedByShop: {
        deleteMany: {},
        create: input.itemsInStock.map((item) => ({
          salePrice: item?.salePrice,
          item: {
            create: {
              title: item?.title,
              isMagic: item?.isMagic,
              rarity: item?.rarity,
              slots: item?.slots,
              uses: item?.uses,
              text: {
                create: item?.text.map((ruleText) => ({
                  text: ruleText?.text,
                  type: ruleText?.type,
                  choice: ruleText?.choices || [],
                })),
              },
              effects: item?.effects,
              defaultPrice: item?.defaultPrice,
              tags: item?.tags,
            },
          },
        })),
      },
      itemsCouldStock: {
        deleteMany: {},
        create: input?.itemsCouldStock.map((item) => ({
          title: item?.title,
          isMagic: item?.isMagic,
          rarity: item?.rarity,
          slots: item?.slots,
          uses: item?.uses
            ? {
                used: item.uses?.used,
                max: item.uses?.max,
                rechargeOn: item.uses?.rechargeOn,
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

  const updatedShop = await ctx.prisma.itemShop.findUnique({
    where: { id },
    include: {
      ItemsStockedByShop: {
        include: {
          item: {
            include: {
              text: true,
            },
          },
        },
      },
      itemsCouldStock: {
        include: {
          text: true,
        },
      },
      createdBy: true,
    },
  });

  console.log("Updated shop", updatedShop);
  updatedShop.ItemsStockedByShop.forEach((item: unknown) => {
    console.log(item);
  });

  return {
    ...updatedShop,
    canEdit: ctx.currentUser
      ? updatedShop.createdBy?.id === ctx.currentUser.id
      : false,
    itemsInStock: updatedShop.ItemsStockedByShop.map(
      (item: {
        item: (typeof updatedShop.ItemsStockedByShop)[0]["item"];
        salePrice: number;
      }) => ({
        ...item.item,
        salePrice: item.salePrice,
      }),
    ),
  };
};
