import { compare } from "bcryptjs";
import type { MutationResolvers } from "./../../../types.generated";
import { sign } from "jsonwebtoken";
import { AUTH_SIGNING_SECRET } from "../../../../auth";
export const login: NonNullable<MutationResolvers['login']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Mutation.login resolver logic here */
  const user: { id: string; password: string; email: string } =
    await _ctx.prisma.user.findUnique({
      where: { email: _arg.email },
    });

  if (!user) {
    throw new Error("No user found");
  }
  console.log(_arg.password, user.password);

  const valid = await compare(_arg.password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }
  const token = sign({ userId: user.id }, AUTH_SIGNING_SECRET);

  return { token, user };
};
