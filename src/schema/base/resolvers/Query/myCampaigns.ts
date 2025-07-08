import type { QueryResolvers } from "./../../../types.generated";

export const myCampaigns: NonNullable<QueryResolvers['myCampaigns']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  if (!_ctx.currentUser) {
    throw new Error("Not authenticated");
  }

  // Campaigns owned by the user
  const owned = await _ctx.prisma.campaign.findMany({
    where: { ownerId: _ctx.currentUser.id },
    include: {
      owner: true,
      characters: true,
      shops: true,
    },
  });

  // Campaigns where the user has a character
  const characters = await _ctx.prisma.character.findMany({
    where: { userId: _ctx.currentUser.id, campaignId: { not: null } },
    select: { campaignId: true },
  });

  const campaignIds = [
    ...new Set(
      characters
        .map((c: { campaignId: number }) => c.campaignId)
        .filter(Boolean),
    ),
  ];

  const inCampaigns = campaignIds.length
    ? await _ctx.prisma.campaign.findMany({
        where: {
          id: { in: campaignIds as number[] },
          ownerId: { not: _ctx.currentUser.id },
        },
        include: {
          owner: true,
          characters: true,
          shops: true,
        },
      })
    : [];

  return {
    owned,
    in: inCampaigns,
  };
};
