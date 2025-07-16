import type { MutationResolvers } from "./../../../types.generated";

export const deleteCampaign: NonNullable<MutationResolvers['deleteCampaign']> = async (_parent, { id }, _ctx) => {
  if (!_ctx.currentUser) {
    throw new Error("Not authenticated");
  }

  // Find the campaign and check ownership
  const campaign = await _ctx.prisma.campaign.findUnique({
    where: { id: Number(id) },
  });

  if (!campaign) {
    throw new Error(`Campaign with ID ${id} not found.`);
  }

  if (campaign.ownerId !== _ctx.currentUser.id) {
    throw new Error("You do not have permission to delete this campaign.");
  }

  // Unlink characters and shops from the campaign
  await _ctx.prisma.character.updateMany({
    where: { campaignId: Number(id) },
    data: { campaignId: null },
  });

  await _ctx.prisma.itemShop.updateMany({
    where: { campaignId: Number(id) },
    data: { campaignId: null },
  });

  // Delete the campaign
  await _ctx.prisma.campaign.delete({
    where: { id: Number(id) },
  });

  return true;
};
