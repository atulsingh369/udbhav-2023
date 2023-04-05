const techEvents = {
  webathon: [
    {
      title: "WEB-A-THON",
      describe:
        "Code your way to innovation - break barriers and bring your ideas to life at the hackathon!",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/wabathon.png?updatedAt=1680496248059",
      link: "",
    },
  ],
  pathik: [
    {
      title: "PATHIK",
      describe:
        "Efficiently navigate your world - let your robot pave the way with intelligent path routing!",
      image:
        "https://ik.imagekit.io/e5ixuxrlb/Udbhav/pathik.png?updatedAt=1680497789564",
      link: "",
    },
  ],
};
import { Link } from "react-router-dom";
import SideBarEvents from "../components/SideBarEvents";
import EventTopBar from "../components/EventTopBar";
import EventCards from "../components/EventCards";

const Events = () => {
  return (
    <section className="h-full pt-16  flex flex-row justify-between ">
      <EventTopBar />
      <SideBarEvents />
      <EventCards />
    </section>
  );
};

export default Events;
