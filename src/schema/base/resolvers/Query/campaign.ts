import cultures from "../../../../rules/1b/cultures";
import lineages from "../../../../rules/1b/lineages";
import playerClasses from "../../../../rules/1b/playerClasses";
import type { QueryResolvers } from "./../../../types.generated";

export const campaign: NonNullable<QueryResolvers['campaign']> = async (
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
  console.log("campaign characters before search", campaign.characters);

  campaign.characters = campaign.characters.map(
    (character: {
      characterClass: string;
      characterLineage: string;
      characterCulture: string;
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
      console.log("characterClass", characterClass);
      return {
        ...character,
        characterClass,
        characterLineage,
        characterCulture,
      };
    },
  );
  console.log("campaign characters after search", campaign.characters);
  campaign.characters = campaign.characters.filter(
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
  console.log("campaign characters after filter", campaign.characters);
  campaign.startDate = new Date(Number(campaign.startDate)).toDateString();
  campaign.endDate = new Date(Number(campaign.endDate)).toDateString();
  return campaign;
};
