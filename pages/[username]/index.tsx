import MenuTab from "../../components/userProfile/menuTab";
import ProfileHeader from "../../components/userProfile/profileHeader";

import DefaultLayout from "@/layouts/default";
import "../../styles/userProfile.css";
import ProfileNavMenu from "@/components/userProfile/customNavMenu/profileNavMenu";
import InputPost from "@/components/userProfile/inputPost";
import InformationAlert from "@/components/alerts/informationAlert";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="max-w-screen-xl w-full mx-auto">
        <ProfileHeader />
        <MenuTab />
        <div className="flex mt-6">
          <ProfileNavMenu />
          <div className="pl-5 grow">
            <InputPost />
            <div className="mt-5">
              <InformationAlert message="You don't have any post." />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
