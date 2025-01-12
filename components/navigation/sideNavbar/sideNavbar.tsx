import { useContext } from "react";

import SideNavbarButton from "./sideNavbarBtn";

import { UserContext } from "@/store/user-context";

export default function SideNavbar() {
  const userCtx = useContext(UserContext);

  return (
    <aside
      aria-label="Sidebar"
      className="fixed left-0 w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
      id="default-sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <SideNavbarButton svgSrc="" text={userCtx.user.getFullName()} />
          </li>
          <li>
            <SideNavbarButton svgSrc="/svg/activity.svg" text="Activities" />
          </li>
          <li>
            <SideNavbarButton svgSrc="/svg/friends.svg" text="Friends" />
          </li>
          <li>
            <SideNavbarButton svgSrc="/svg/groups.svg" text="Groups" />
          </li>
          <li>
            <SideNavbarButton svgSrc="/svg/pages.svg" text="Pages" />
          </li>
        </ul>
      </div>
    </aside>
  );
}
