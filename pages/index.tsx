import DefaultLayout from "@/layouts/default";
import SideNavbar from "@/components/navigation/sideNavbar/sideNavbar";

export default function IndexPage() {
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
