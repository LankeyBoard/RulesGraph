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
        itemsInStock: true,
        itemsCouldStock: true,
      },
    });

    if (!shop) {
      throw new Error(`ItemShop with ID ${id} not found.`);
    }

    return shop;
  }

  // Fetch all ItemShops if no ID is provided
  return await _ctx.prisma.itemShop.findMany({
    include: {
      itemsInStock: true,
      itemsCouldStock: true,
    },
  });
};
