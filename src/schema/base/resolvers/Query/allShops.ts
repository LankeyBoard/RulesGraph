import type { QueryResolvers } from "./../../../types.generated";
export const allShops: NonNullable<QueryResolvers['allShops']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  // Fetch all ItemShops if no ID is provided
  const shops = await _ctx.prisma.itemShop.findMany({
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
  const mappedShops = shops.map(
    (shop: { ItemsStockedByShop: object; createdBy: number }) => ({
      ...shop,
      itemsInStock: shop.ItemsStockedByShop,
      canEdit: _ctx.currentUser && shop.createdBy === _ctx.currentUser.id,
    }),
  );
  console.log("Item shop: ", mappedShops);
  return mappedShops;
};
