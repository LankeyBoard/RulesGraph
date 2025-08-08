import { hash } from "bcryptjs";
import type { MutationResolvers } from "./../../../types.generated";
export const setPassword: NonNullable<MutationResolvers['setPassword']> = async (_parent, _arg, _ctx) => {
  const { forgotPasswordId, newPassword } = _arg;
  const now = new Date();
  const forgotPasswordEntry =
    await _ctx.prisma.ForgottenPasswordLink.findUnique({
      where: { id: forgotPasswordId },
    });
  console.log(forgotPasswordEntry);
  if (!forgotPasswordEntry) throw new Error("Invalid Forgot Password Id");
  if (
    (forgotPasswordEntry.createdAt &&
      now.getTime() - forgotPasswordEntry.createdAt.getTime()) /
      1000 /
      60 >
    10
  ) {
    _ctx.prisma.ForgottenPasswordLink.delete({
      where: { id: forgotPasswordId },
    });
    throw new Error("Forgot Password Ids are only valid for 10 minute.");
  }
  const hashedPassword = await hash(newPassword, 10);
  const user = await _ctx.prisma.user.update({
    where: { id: Number(forgotPasswordEntry.userId) },
    data: {
      password: hashedPassword,
    },
  });
  return user;
};
