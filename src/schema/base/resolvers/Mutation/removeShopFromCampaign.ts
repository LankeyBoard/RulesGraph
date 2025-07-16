import type { MutationResolvers } from './../../../types.generated';

export const removeShopFromCampaign: NonNullable<MutationResolvers['removeShopFromCampaign']> = async (
  _parent,
  { campaignId, shopId },
  _ctx
) => {
  // Set the shop's campaignId to null if it matches the given campaign
  await _ctx.prisma.itemShop.updateMany({
    where: {
      id: Number(shopId),
      campaignId: Number(campaignId),
    },
    data: {
      campaignId: null,
    },
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