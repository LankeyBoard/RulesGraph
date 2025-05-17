import type { QueryResolvers } from "./../../../types.generated";
export const itemShop: NonNullable<QueryResolvers['itemShop']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { id } = _arg;

  if (id) {
    // Fetch a specific ItemShop by ID
    const shop = await _ctx.prisma.itemShop.findUnique({
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

    if (!shop) {
      throw new Error(`ItemShop with ID ${id} not found.`);
    }
    console.log("item shop: ", shop);
    return { ...shop, itemsInStock: shop.ItemsStockedByShop };
  } else throw new Error("A shop id must be included");
};
