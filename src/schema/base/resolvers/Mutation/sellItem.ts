import type { MutationResolvers } from "./../../../types.generated";

export const sellItem: NonNullable<MutationResolvers['sellItem']> = async (
  _parent,
  { shopId, itemId, characterId },
  _ctx,
) => {
  // 1. Fetch shop, item, and character
  const shop = await _ctx.prisma.itemShop.findUnique({
    where: { id: String(shopId) },
    include: {
      ItemsStockedByShop: true,
      itemsCouldStock: true,
    },
  });
  if (!shop) throw new Error("Shop not found");
  const itemStocked = shop.ItemsStockedByShop.find(
    (item: { itemId: string }) => {
      return item.itemId.toString() === itemId;
    },
  );
  if (!itemStocked)
    throw new Error(
      `Item not in shop's stock. Looking for id: ${itemId}. Current Stock: ${shop.ItemsStockedByShop}`,
    );

  const itemFromShop = await _ctx.prisma.item.findUnique({
    where: { id: Number(itemId) },
    include: {
      text: true,
    },
  });

  const character = await _ctx.prisma.character.findUnique({
    where: { id: Number(characterId) },
    include: { items: true },
  });
  if (!character) throw new Error("Character not found");

  const price = itemFromShop.salePrice ?? itemFromShop.defaultPrice ?? 0;
  if (character.coin < price) throw new Error("Not enough coin");

  // 2. Copy the item for the character (excluding id and relations)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, createdById, ...itemData } = itemFromShop;
  const newItem = await _ctx.prisma.item.create({
    data: {
      ...itemData,
      createdBy: { connect: { id: createdById } },
      heldBy: { connect: { id: character.id } },
      text: {
        create: itemFromShop.text?.map(
          (t: { text: string; type: string; choice: [string] }) => ({
            text: t.text,
            type: t.type,
            choice: t.choice,
          }),
        ),
      },
    },
    include: { text: true },
  });
  console.debug("item created for character: ", newItem);

  // 3. Deduct coin from character
  await _ctx.prisma.character.update({
    where: { id: character.id },
    data: { coin: { decrement: price } },
  });

  // 4. Remove item from ItemsStockedByShop
  await _ctx.prisma.itemsStockedByShop.delete({
    where: {
      shopId_itemId: {
        shopId: String(shopId),
        itemId: Number(itemId),
      },
    },
  });

  // 5. Add item to itemsCouldStock for the shop (if not already present)
  await _ctx.prisma.itemShop.update({
    where: { id: String(shopId) },
    data: {
      itemsCouldStock: {
        connect: { id: itemFromShop.id },
      },
    },
  });

  // 6. Return the updated shop
  const updatedShop = await _ctx.prisma.itemShop.findUnique({
    where: { id: String(shopId) },
    include: {
      Campaign: true,
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

  if (!updatedShop) {
    throw new Error(`ItemShop with ID ${id} not found.`);
  }

  updatedShop.ItemsStockedByShop.sort(
    (a: { item: { title: string } }, b: { item: { title: string } }) =>
      a.item.title.localeCompare(b.item.title),
  );

  const returnShop = {
    ...updatedShop,
    campaign: updatedShop.Campaign,
    canEdit: _ctx.currentUser
      ? updatedShop.createdById === _ctx.currentUser.id
      : false,
    itemsInStock: updatedShop.ItemsStockedByShop.map(
      (item: {
        item: (typeof updatedShop.ItemsStockedByShop)[0]["item"];
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
    itemsCouldStock: updatedShop.itemsCouldStock.map(
      (item: { uses: object }) => ({
        ...item,
        uses:
          item.uses && Object.keys(item.uses).length === 0
            ? undefined
            : item.uses,
      }),
    ),
  };
  console.debug("sellItem mutation returns", returnShop);
  return returnShop;
};
