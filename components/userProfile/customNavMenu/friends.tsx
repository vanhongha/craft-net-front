import InformationAlert from "@/components/alerts/informationAlert";
import CardInner from "@/components/common/CardInner";

export default function FriendsNavMenu() {
  return (
    <CardInner className="p-4 border shadow">
      <div className="flex justify-between">
        <span className="font-semibold">Friends</span>
        <a className="text-blue-700" href="localhost:8080">
          See all friends
        </a>
      </div>
      <div className="mb-8">
        <span className="text-sm">0 friend</span>
      </div>
      <InformationAlert message="You don't have any friend." />
    </CardInner>
  );
}
