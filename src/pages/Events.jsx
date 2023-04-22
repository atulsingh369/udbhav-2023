import SideBarEvents from "../components/SideBarEvents";
import EventCards from "../components/EventCards";

const Events = () => {
  return (
    <section className=" pt-16 h-screen md:h-full bg-home-background bg-cover flex flex-row justify-between  ">
      <SideBarEvents />
      <EventCards />
    </section>
  );
};

export default Events;
