import SideBarEvents from "../components/SideBarEvents";
import TechEvents from "../components/TechEvents";
import EventTopBar from "../components/EventTopBar";

const TechEventsPage = () => {
  return (
    <div className="h-full pt-16 flex flex-row justify-between ">
      <EventTopBar />
      <SideBarEvents />
      <TechEvents />
    </div>
  );
};

export default TechEventsPage;
