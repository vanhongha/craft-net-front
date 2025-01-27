import DefaultLayout from "@/layouts/default";
import SideNavbar from "@/components/navigation/sideNavbar/sideNavbar";
import InputPost from "@/components/userProfile/inputPost";
import InformationAlert from "@/components/alerts/informationAlert";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <SideNavbar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <InputPost />
          <div className="mt-5" />
          <InformationAlert message="The website is currently under construction." />
        </div>
      </div>
    </DefaultLayout>
  );
}
