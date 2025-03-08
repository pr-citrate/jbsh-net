import { getCurrentSession } from "@/lib/server/session";
import { LogoutButton } from "@/components/commons/LogoutButton";

export default async function Navbar() {
  const { user } = await getCurrentSession();

  return (
    <div className={"navbar bg-base-100 shadow-sm"}>
      <div className={"navbar-start"}>
        <div className="drawer flex flex-row">

          {/* mobile drawer */}
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
          <div className="drawer-content">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
          </div>

          {/* desktop navbar */}
          <div className=" flex flex-row justify-start items-center px-2">jbsh-net
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                <li><a>Navbar Item 1</a></li>
                <li><a>Navbar Item 2</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={"navbar-end"}>
        {
          user ? (
            <div className={"flex items-center gap-2"}>
              <img src={user.picture} alt={"profile"} className={"avatar w-8 h-8 rounded-full"}/>
              <div className={"dropdown dropdown-hover"}>
                <div tabIndex={0} className={"btn btn-ghost bg-base-100"}>
                  {user.name}
                </div>
                <ul tabIndex={0} className={"menu dropdown-content rounded-box bg-base-100 min-w-full shadow-sm"}>
                  <LogoutButton />
                </ul>
              </div>
            </div>
          ) : (
            <a href={"/login/google"}>Sign in with Google</a>
          )
        }
      </div>
    </div>
  );
}