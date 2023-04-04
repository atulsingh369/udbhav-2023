import React from "react";
import CulturalEvents from "../components/CulturalEvents";
import SideBarEvents from "../components/SideBarEvents";

const CulturalEventPage = () => {
  return (
    <div className="h-full pt-16 flex flex-row justify-between ">
      <SideBarEvents />
      <CulturalEvents />
    </div>
  );
};

export default CulturalEventPage;
