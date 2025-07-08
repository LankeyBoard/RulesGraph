import type { MutationResolvers } from "./../../../types.generated";

export const addShopToCampaign: NonNullable<MutationResolvers['addShopToCampaign']> = async (_parent, { campaignId, shopId }, _ctx) => {
  // Update the shop to set its campaignId (removing from any previous campaign)
  await _ctx.prisma.itemShop.update({
    where: { id: shopId },
    data: { campaignId: Number(campaignId) },
  });

  // Return the updated campaign with all relations
  return _ctx.prisma.campaign.findUnique({
    where: { id: Number(campaignId) },
    include: {
      owner: true,
      characters: true,
      shops: true,
    },
  });
};
