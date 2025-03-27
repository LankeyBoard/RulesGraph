import type { MutationResolvers } from "./../../../types.generated";
export const deleteCharacter: NonNullable<
  MutationResolvers["deleteCharacter"]
> = async (_parent, _arg, _ctx) => {
  if (!_ctx.currentUser) {
    throw new Error("You must be logged in to create a character");
  }
  try {
    await _ctx.prisma.character.delete({
      where: { id: Number(_arg.id), createdBy: { id: _ctx.currentUser.id } },
    });
    return true;
  } catch (error) {
    console.error("Error deleting character", error);
    return false;
  }
};
