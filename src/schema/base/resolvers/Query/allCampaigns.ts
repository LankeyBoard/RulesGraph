import type { QueryResolvers } from "./../../../types.generated";

export const allCampaigns: NonNullable<QueryResolvers["allCampaigns"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return _ctx.prisma.campaign.findMany({
    include: {
      owner: true,
      characters: true,
      shops: true,
    },
  });
};
