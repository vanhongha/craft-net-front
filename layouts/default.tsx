import { Link } from "@nextui-org/link";
import { useContext, useEffect } from "react";
import { initFlowbite } from "flowbite";
import _ from "lodash";

import { Navbar } from "@/components/navigation/navbar";
import Loading from "@/components/loading/loading";
import { UserContext } from "@/store/user-context";
import { useGetUser } from "@/hooks/useGetUser";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userCtx = useContext(UserContext);
  const { loading, data, error } = useGetUser();

  useEffect(() => {
    const userId = _.get(userCtx, "user.id", null);

    if (!loading) {
      // Initialize Flowbite components
      initFlowbite();
      if (_.isNil(userId)) {
        const userData = _.get(data, "user.user", null);

        if (userData) {
          const userDataInfo = {
            ...userData,
            avatarUrl: data.user.avatarUrl,
            coverUrl: data.user.coverUrl,
          };

          userCtx.setUser(userDataInfo);
        }
      }
    }
  }, [loading]);

  if (loading || error) {
    return <Loading />;
  }

  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
          title="nextui.org homepage"
        />
      </footer>
    </div>
  );
}
