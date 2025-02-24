import { PrismaClient, User } from "@prisma/client";
import { JwtPayload, verify } from "jsonwebtoken";

export const AUTH_SIGNING_SECRET =
  process.env.AUTH_SIGNING_SECRET || "UNSAFE_SIGNING_SECRET";

export async function authenticateUser(
  prisma: PrismaClient,
  request: Request,
): Promise<User | null> {
  const header = request.headers.get("authorization");
  if (header !== null) {
    const token = header.split(" ")[1];
    const tokenPayload = verify(token, AUTH_SIGNING_SECRET) as JwtPayload;
    const userId = tokenPayload.userId;
    return await prisma.user.findUnique({ where: { id: userId } });
  }

  return null;
}
