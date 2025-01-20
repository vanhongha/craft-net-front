import FriendsNavMenu from "./friends";
import LifeEventsNavMenu from "./lifeEvents";

export default function profileNavMenu() {
  return (
    <div className="hidden lg:block w-96">
      <FriendsNavMenu />
      <div className="mb-2" />
      <LifeEventsNavMenu />
    </div>
  );
}
