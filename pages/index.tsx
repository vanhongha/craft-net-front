import { useContext, useEffect } from "react";
import _ from "lodash";

import DefaultLayout from "@/layouts/default";
import SideNavbar from "@/components/navigation/sideNavbar/sideNavbar";
import { useGetUser } from "@/hooks/useGetUser";
import { UserContext } from "@/store/user-context";
import { User } from "@/models/user";
import Loading from "@/components/loading/loading";

export default function IndexPage() {
  const userCtx = useContext(UserContext);
  const { loading, data } = useGetUser();

  useEffect(() => {
    if (!loading && _.isNil(userCtx.user?.id)) {
      userCtx.setUser(data.user.user as User);
    }
  }, [loading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <DefaultLayout>
      <SideNavbar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          The website is currently under construction.
        </div>
      </div>
    </DefaultLayout>
  );
}
