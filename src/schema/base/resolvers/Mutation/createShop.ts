import type { MutationResolvers } from "../../../types.generated";

export const createShop: NonNullable<MutationResolvers['createShop']> = async (
  _parent,
  args,
  ctx,
) => {
  const { input } = args;

  // Ensure the user is authenticated
  if (!ctx.currentUser) {
    throw new Error("You must be logged in to create a shop.");
  }

  if (!input) {
    throw new Error("Shop info must be provided");
  }
  // Create the ItemShop in the database
  const newShop = await ctx.prisma.itemShop.create({
    data: {
      name: input.name,
      description: input.description,
      createdBy: { connect: ctx.currentUser },
      ItemsStockedByShop: {
        create: input.itemsInStock.map((item) => ({
          salePrice: item?.salePrice,
          item: {
            create: {
              ...item,
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
            },
          },
        })),
      },
      itemsCouldStock: {
        create: input.itemsCouldStock.map((item) => ({
          ...item,
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
        })),
      },
    },
  });
  console.debug("New shop created", newShop);
  return newShop;
};
