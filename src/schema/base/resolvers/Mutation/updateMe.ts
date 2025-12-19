import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

import type { MutationResolvers } from "./../../../types.generated";
import { AUTH_SIGNING_SECRET } from "../../../../auth";
export const updateMe: NonNullable<MutationResolvers['updateMe']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  const { name, email } = _arg;
  console.debug("Updating profile with ", name, email);
  let { password } = _arg;
  if (password) {
    password = await hash(password, 10);
    console.debug("Password updated");
  }
  const user = await _ctx.prisma.user.update({
    where: { id: _ctx.currentUser.id },
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
  const token = sign({ userId: user.id }, AUTH_SIGNING_SECRET);
  return { token, user };
};
