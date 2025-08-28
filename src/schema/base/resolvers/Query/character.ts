import cultures from "../../../../rules/1b/cultures";
import lineages from "../../../../rules/1b/lineages";
import playerClasses from "../../../../rules/1b/playerClasses";
import type { QueryResolvers } from "./../../../types.generated";
export const character: NonNullable<QueryResolvers['character']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  if (!_ctx.currentUser) {
    throw new Error("Not authenticated");
  }
  if (!_arg.id) {
    throw new Error("Character ID not provided");
  }
  const character = await _ctx.prisma.character.findUnique({
    where: { id: Number(_arg.id) },
    include: {
      items: {
        orderBy: { id: "asc" },
        include: { text: true },
      },
    },
  });
  if (!character) {
    throw new Error("Character not found");
  }
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
  character.items = character.items || [];
  character.items = character.items.map((item: { uses: object }) => {
    return {
      ...item,
      uses:
        item.uses && Object.keys(item.uses).length > 0 ? item.uses : undefined,
    };
  });

  character.createdBy = await _ctx.prisma.user.findUnique({
    where: { id: character.userId },
  });
  character.maxSlots =
    7 + Math.trunc(0.5 * character.mettle) + Math.floor(0.5 * character.level);
  character.slots = !character.items
    ? 0
    : character.items.reduce(
        (accumulator: number, currentValue: { slots: number }) => {
          return accumulator + currentValue.slots;
        },
        0,
      );
  console.log("character retrieved", character);

  return {
    ...character,
    characterClass,
    characterLineage,
    characterCulture,
  };
};
