import type { QueryResolvers } from "./../../../types.generated";
export const allItems: NonNullable<QueryResolvers['allItems']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const items = await _ctx.prisma.item.findMany();
  return items;
};
