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
          orderBy: [
            {
              title: "desc",
            },
          ],
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

    shop.ItemsStockedByShop.sort(
      (a: { item: { title: string } }, b: { item: { title: string } }) =>
        a.item.title.localeCompare(b.item.title),
    );
    const returnShop = {
      ...shop,
      canEdit: _ctx.currentUser
        ? shop.createdById === _ctx.currentUser.id
        : false,
      itemsInStock: shop.ItemsStockedByShop.map(
        (item: {
          item: (typeof shop.ItemsStockedByShop)[0]["item"];
          salePrice: number;
        }) => ({
          ...item.item,
          uses:
            item.item.uses && Object.keys(item.item.uses).length === 0
              ? undefined
              : item.item.uses,
          salePrice: item.salePrice,
        }),
      ),
      itemsCouldStock: shop.itemsCouldStock.map((item: { uses: object }) => ({
        ...item,
        uses:
          item.uses && Object.keys(item.uses).length === 0
            ? undefined
            : item.uses,
      })),
    };
    returnShop.itemsCouldStock.forEach((element: { text: unknown }) => {
      console.log(element.text);
    });
    return returnShop;
  } else throw new Error("A shop id must be included");
};
