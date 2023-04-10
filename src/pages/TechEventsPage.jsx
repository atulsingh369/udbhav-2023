import SideBarEvents from "../components/SideBarEvents";
import TechEvents from "../components/TechEvents";
import EventTopBar from "../components/EventTopBar";

const TechEventsPage = () => {
  return (
    <div className=" pt-16 h-full flex flex-row justify-between ">
      <EventTopBar />
      <SideBarEvents />
      <TechEvents />
    </div>
  );
};

export default TechEventsPage;
