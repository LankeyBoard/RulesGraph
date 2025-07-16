import type { MutationResolvers } from "./../../../types.generated";

export const addCharacterToCampaign: NonNullable<MutationResolvers['addCharacterToCampaign']> = async (_parent, { campaignId, characterId }, _ctx) => {
  // Update the character to set its campaignId (removing from any previous campaign)
  await _ctx.prisma.character.update({
    where: { id: Number(characterId) },
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
