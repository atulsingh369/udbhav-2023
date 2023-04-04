import React from "react";
import { Link } from "react-router-dom";
import SideBarEvents from "../components/SideBarEvents";

const Events = () => {
  return (
    <section className="h-full pt-16  flex flex-row justify-between ">
      <SideBarEvents />
    </section>
  );
};

export default Events;
