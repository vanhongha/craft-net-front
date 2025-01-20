import InformationAlert from "@/components/alerts/informationAlert";
import CardInner from "@/components/common/CardInner";

export default function LifeEventsNavMenu() {
  return (
    <CardInner className="p-4 border shadow">
      <div className="flex justify-between mb-8">
        <span className="font-semibold">Life events</span>
        <a className="text-blue-700" href="localhost:8080">
          See all life events
        </a>
      </div>
      <InformationAlert message="You don't have any life event." />
    </CardInner>
  );
}
