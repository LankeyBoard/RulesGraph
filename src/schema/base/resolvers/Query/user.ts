import playerClasses from "../../../../rules/1b/playerClasses";
import type { QueryResolvers } from "./../../../types.generated";
export const user: NonNullable<QueryResolvers["user"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const user = _ctx.prisma.user.findUnique({
    where: {
      id: _arg.id,
    },
    include: {
      createdCampaigns: true,
      createdItemShops: true,
      characters: true,
    },
  });
  if (!user) {
    throw new Error(`User with ID ${_arg.id} not found`);
  }

  console.log(user);
  if (user.characters) {
    user.characters = user.characters.map(
      (character: { characterClass: string }) => {
        return {
          ...character,
          characterClass: playerClasses.find(
            (playerClass) => playerClass.slug === character.characterClass,
          ),
        };
      },
    );
  }
  return user;
};
