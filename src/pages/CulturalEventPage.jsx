import React from "react";
import CulturalEvents from "../components/CulturalEvents";
import SideBarEvents from "../components/SideBarEvents";
import EventTopBar from "../components/EventTopBar";

const CulturalEventPage = () => {
  return (
    <div className="h-full pt-16 flex flex-row justify-between ">
      <EventTopBar />
      <SideBarEvents />
      <CulturalEvents />
    </div>
  );
};

export default CulturalEventPage;
