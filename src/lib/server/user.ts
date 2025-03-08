import { User } from "@prisma/client";
import { prisma } from "@/lib/server/db";

export async function createUser(
  googleId: string,
  email: string,
  name: string,
  picture: string,
): Promise<User> {
  const user = await prisma.user.create({
    data: {
      googleId,
      email,
      name,
      picture,
    },
  });
  return user;
}

export async function getUserFromGoogleId(
  googleId: string,
): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: { googleId },
  });
  return user;
}
