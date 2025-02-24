import type { QueryResolvers } from "./../../../types.generated";
export const user: NonNullable<QueryResolvers['user']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.user resolver logic here */
  return _ctx.prisma.user.findUnique({
    where: {
      id: _arg.id,
    },
  });
};
