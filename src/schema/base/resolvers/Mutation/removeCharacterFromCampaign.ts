import type { MutationResolvers } from "./../../../types.generated";

export const removeCharacterFromCampaign: NonNullable<
  MutationResolvers["removeCharacterFromCampaign"]
> = async (_parent, { campaignId, characterId }, _ctx) => {
  // Set the character's campaignId to null if it matches the given campaign
  await _ctx.prisma.character.updateMany({
    where: {
      id: Number(characterId),
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
