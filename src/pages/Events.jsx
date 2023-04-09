import SideBarEvents from "../components/SideBarEvents";
import EventCards from "../components/EventCards";

const Events = () => {
  return (
    <section className="h-full pt-16  flex flex-row justify-between ">
      <SideBarEvents />
      <EventCards />
    </section>
  );
};

export default Events;
