import convertPrismaToGraphQLCharacter from "../../../../extras/convertPrismaToGraphQLCharacter";
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
      createdBy: true,
      items: {
        orderBy: { id: "asc" },
        include: { text: true },
      },
      campaign: true,
    },
  });
  if (!character) {
    throw new Error(`Failed to retrieve character with id: ${_arg.id}`);
  }

  const characterWithChoices = convertPrismaToGraphQLCharacter(character);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return characterWithChoices as any;
};
