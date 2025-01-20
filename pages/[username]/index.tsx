import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

import MenuTab from "../../components/userProfile/menuTab";
import ProfileHeader from "../../components/userProfile/profileHeader";

import { USER_ID_KEY } from "@/constant/auth";
import DefaultLayout from "@/layouts/default";
import "../../styles/userProfile.css";
import ProfileNavMenu from "@/components/userProfile/customNavMenu/profileNavMenu";

export default function Home() {
  const router = useRouter();
  const { username } = router.query;
  const [cookies] = useCookies([USER_ID_KEY]);
  const myUserId = cookies[USER_ID_KEY];

  return (
    <DefaultLayout>
      <div className="max-w-screen-xl w-full mx-auto">
        <ProfileHeader />
        <MenuTab />
        <div className="flex mt-6">
          <ProfileNavMenu />
          <div className="px-5">
            Hello {username} {myUserId}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
