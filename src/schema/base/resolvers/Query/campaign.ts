import type { QueryResolvers } from "./../../../types.generated";

export const campaign: NonNullable<QueryResolvers["campaign"]> = async (
  _parent,
  { id },
  _ctx,
) => {
  const campaign = await _ctx.prisma.campaign.findUnique({
    where: { id: Number(id) },
    include: {
      owner: true,
      characters: true,
      shops: true,
    },
  });

  if (!campaign) {
    throw new Error(`Campaign with ID ${id} not found.`);
  }

  return campaign;
};
