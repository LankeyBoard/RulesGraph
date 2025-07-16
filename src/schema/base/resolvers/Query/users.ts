import { GraphQLContext } from "../../../../context";
import type { QueryResolvers } from "./../../../types.generated";
export const users: NonNullable<QueryResolvers["users"]> = async (
  parent: unknown,
  args: Record<string, never>,
  context: GraphQLContext,
) => {
  return context.prisma.user.findMany() || [];
};
