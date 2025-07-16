import type { MutationResolvers } from "./../../../types.generated";

export const updateCampaign: NonNullable<MutationResolvers['updateCampaign']> = async (_parent, { id, input, characterIds, shopIds }, _ctx) => {
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
    throw new Error("You do not have permission to update this campaign.");
  }

  const startDate = new Date(input.startDate);
  if (isNaN(startDate.getTime())) {
    throw new Error(`Invalid startDate provided. ${startDate}`);
  }
  const endDate = input.endDate ? new Date(input.endDate) : null;
  if (endDate && isNaN(endDate.getTime())) {
    throw new Error("Invalid endDate provided.");
  }

  // Update campaign fields
  await _ctx.prisma.campaign.update({
    where: { id: Number(id) },
    data: {
      name: input.name,
      description: input.description,
      status: input.status,
      startDate,
      endDate,
    },
  });

  // Update characters if provided
  if (characterIds) {
    // Unlink all current characters from this campaign
    await _ctx.prisma.character.updateMany({
      where: { campaignId: Number(id) },
      data: { campaignId: null },
    });
    // Link provided characters to this campaign
    await _ctx.prisma.character.updateMany({
      where: { id: { in: characterIds.map(Number) } },
      data: { campaignId: Number(id) },
    });
  }

  // Update shops if provided
  if (shopIds) {
    // Unlink all current shops from this campaign
    await _ctx.prisma.itemShop.updateMany({
      where: { campaignId: Number(id) },
      data: { campaignId: null },
    });
    // Link provided shops to this campaign
    await _ctx.prisma.itemShop.updateMany({
      where: { id: { in: shopIds.map(Number) } },
      data: { campaignId: Number(id) },
    });
  }

  // Return the updated campaign with all relations
  return _ctx.prisma.campaign.findUnique({
    where: { id: Number(id) },
    include: {
      owner: true,
      characters: true,
      shops: true,
    },
  });
};
