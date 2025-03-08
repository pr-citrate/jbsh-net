import { getCurrentSession } from "@/lib/server/session";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/commons/LogoutButton";
import { globalGETRateLimit } from "@/lib/server/request";
import Image from "next/image";

export default async function Page() {
  if (!(await globalGETRateLimit())) {
    return "Too many requests";
  }
  const { user } = await getCurrentSession();

  if (user === null) {
    return redirect("/login");
  }

  return (
    <>
      <h1>Hi, {user.name}!</h1>
      <Image src={user.picture} width={100} height={100} alt="profile" />
      <p>Email: {user.email}</p>
      <LogoutButton />
    </>
  );
}
