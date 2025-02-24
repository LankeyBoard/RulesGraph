import { GraphQLContext } from "../../../../context";
import type { QueryResolvers } from "./../../../types.generated";
export const users: NonNullable<QueryResolvers['users']> = async (
  parent: unknown,
  args: Record<string, never>,
  context: GraphQLContext,
) => {
  /* Implement Query.users resolver logic here */
  return context.prisma.user.findMany() || [];
};
