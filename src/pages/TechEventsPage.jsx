import React from "react";
import EandS from "../components/EandS";
import TechEvents from "../components/TechEvents";

const TechEventsPage = () => {
  return (
    <>
      <section className=" bg-home-background bg-no-repeat bg-cover pt-20 ">
        {" "}
        <EandS />
        <TechEvents />
      </section>
    </>
  );
};

export default TechEventsPage;
