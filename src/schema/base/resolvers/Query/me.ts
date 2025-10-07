import cultures from "../../../../rules/1b/cultures";
import lineages from "../../../../rules/1b/lineages";
import playerClasses from "../../../../rules/1b/playerClasses";
import type { QueryResolvers } from "./../../../types.generated";
export const me: NonNullable<QueryResolvers['me']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  if (!_ctx.currentUser) {
    return Promise.reject("User not authenticated");
  }
  const user = await _ctx.prisma.user.findUnique({
    where: { id: _ctx.currentUser.id },
    include: {
      createdCampaigns: true,
      createdItemShops: true,
      characters: true,
    },
  });

  if (!user) {
    return Promise.reject("User not found");
  }
  if (!user.createdCampaigns) user.createdCampaigns = [];
  if (!user.createdItemShops) user.createdItemShops = [];
  if (!user.characters) user.characters = [];
  user.characters = user.characters.filter(
    (character: {
      characterClass: string;
      characterLineage: string;
      characterCulture: string;
    }) => {
      return (
        character.characterClass &&
        character.characterLineage &&
        character.characterCulture
      );
    },
  );
  user.characters = user.characters.map(
    (character: {
      campaign: unknown;
      id: number;
      characterClass: string;
      characterLineage: string;
      characterCulture: string;
      campaignId?: number;
    }) => {
      const characterClass = playerClasses.find(
        (c) =>
          c.slug.toLocaleUpperCase() ===
          character.characterClass.toLocaleUpperCase(),
      );
      const characterLineage = lineages.find(
        (c) =>
          c.slug.toLocaleUpperCase() ===
          character.characterLineage.toLocaleUpperCase(),
      );
      const characterCulture = cultures.find(
        (c) =>
          c.slug.toLocaleUpperCase() ===
          character.characterCulture.toLocaleUpperCase(),
      );
      if (character.campaignId) {
        character.campaign = _ctx.prisma.campaign.findUnique({
          where: { id: character.campaignId },
        });
      }
      return {
        ...character,
        characterClass,
        characterLineage,
        characterCulture,
      };
    },
  );
  user.characters = user.characters.filter(
    (character: {
      characterClass: object;
      characterLineage: object;
      characterCulture: object;
    }) => {
      return (
        character.characterClass &&
        character.characterLineage &&
        character.characterCulture
      );
    },
  );

  console.log("User found", user);
  return user;
};
