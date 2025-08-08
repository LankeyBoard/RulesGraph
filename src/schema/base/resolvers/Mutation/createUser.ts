import { hash } from "bcryptjs";
import type { MutationResolvers } from "./../../../types.generated";
import { AUTH_SIGNING_SECRET } from "../../../../auth";
import { sign } from "jsonwebtoken";
export const createUser: NonNullable<MutationResolvers['createUser']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const password = await hash(_arg.password, 10);
  const newUser = await _ctx.prisma.user.create({
    data: {
      name: _arg.name,
      email: _arg.email,
      password,
    },
  });
  const token = sign({ userId: newUser.id }, AUTH_SIGNING_SECRET);
  return { token, newUser };
};
