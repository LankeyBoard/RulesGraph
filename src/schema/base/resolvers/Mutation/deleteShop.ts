import type { MutationResolvers } from "../../../types.generated";

export const deleteShop: NonNullable<MutationResolvers['deleteShop']> = async (
  _parent,
  args,
  ctx,
) => {
  const { id } = args;

  // Ensure the user is authenticated
  if (!ctx.currentUser) {
    throw new Error("You must be logged in to delete a shop.");
  }

  // Ensure the shop ID is provided
  if (!id) {
    throw new Error("Shop ID must be provided.");
  }

  // Find the shop to ensure it exists
  const existingShop = await ctx.prisma.itemShop.findUnique({
    where: { id },
  });

  if (!existingShop) {
    throw new Error(`ItemShop with ID ${id} not found.`);
  }

  // Delete the ItemShop from the database
  await ctx.prisma.itemShop.delete({
    where: { id },
  });

  return true;
};
