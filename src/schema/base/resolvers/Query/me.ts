import type { QueryResolvers } from "./../../../types.generated";
export const me: NonNullable<QueryResolvers['me']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.me resolver logic here */
  if (!_ctx.currentUser) {
    throw new Error("Not authenticated");
  }
  return _ctx.currentUser;
};
