import SendMail from "../../../../extras/sendMail";
import type { MutationResolvers } from "./../../../types.generated";
export const forgotPassword: NonNullable<MutationResolvers['forgotPassword']> = async (_parent, _arg, _ctx) => {
  const user: { id: string; email: string } = await _ctx.prisma.user.findUnique(
    {
      where: { email: _arg.email },
    },
  );
  const baseUrl = _arg.baseUrl || "fortunes-favor-alpha.netlify.app";

  if (!user) {
    throw new Error("Email address incorrect");
  }
  const forgotPasswordEntry = await _ctx.prisma.forgottenPasswordLink.create({
    data: {
      user: { connect: { id: user.id } },
      createdAt: new Date(),
    },
  });
  if (!forgotPasswordEntry)
    throw new Error("Error creating forgot password link");
  SendMail(
    user.email,
    "Forgotten Password",
    `<!doctype html>
<html lang=en>
 <head>
  <title>Forgotten Password</title>
 </head>
 <body>
 <p>Looks like you forgot your password click this link or paste it into your browser to reset your password</p>
 <a href="https://${baseUrl}/passwordReset/${forgotPasswordEntry.id}">https://fortunes-favor-alpha.netlify.app/passwordRest/${forgotPasswordEntry.id}</a>
 </body>
 </html>`,
  );
  return true;
};
