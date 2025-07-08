import type { MutationResolvers } from "./../../../types.generated";

export const createCampaign: NonNullable<MutationResolvers['createCampaign']> = async (_parent, { input }, _ctx) => {
  if (!_ctx.currentUser) {
    throw new Error("Not authenticated");
  }

  const campaign = await _ctx.prisma.campaign.create({
    data: {
      name: input.name,
      description: input.description,
      status: input.status,
      startDate: new Date(input.startDate),
      endDate: input.endDate ? new Date(input.endDate) : null,
      owner: { connect: { id: _ctx.currentUser.id } },
    },
    include: {
      owner: true,
      characters: true,
      shops: true,
    },
  });

  return campaign;
};
