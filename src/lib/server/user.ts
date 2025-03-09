import { User } from "@prisma/client";
import { prisma } from "@/lib/server/db";

export async function createUser(
  googleId: string,
  email: string,
  name: string,
  picture: string,
): Promise<User> {
  return await prisma.user.create({
    data: {
      googleId,
      email,
      name,
      picture,
    },
  });
}

export async function getUserFromGoogleId(
  googleId: string,
): Promise<User | null> {
  return await prisma.user.findUnique({
    where: { googleId },
  });
}
