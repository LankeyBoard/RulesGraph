import type { MutationResolvers } from "./../../../types.generated";

export const deleteEncounter: NonNullable<MutationResolvers['deleteEncounter']> = async (_parent, _arg, _ctx) => {
  if (!_ctx.currentUser) {
    throw new Error("Not authenticated");
  }

  // Verify user owns the encounter
  const encounter = await _ctx.prisma.encounter.findUnique({
    where: { id: _arg.id },
  });

  if (!encounter || encounter.userId !== _ctx.currentUser.id) {
    throw new Error("Encounter not found or you are not the creator.");
  }

  // Delete the encounter (monsters will be cascade deleted)
  await _ctx.prisma.encounter.delete({
    where: { id: _arg.id },
  });

  console.warn("Encounter deleted", encounter);

  return true;
};
