import React from "react";
import TourHeader from "../components/TourHeader";
import TourCarosuel from "../components/TourCarosuel";

const Tour = () => {
  return (
    <>
      <section className="h-screen pt-20 bg-white">
        <TourHeader />
        <TourCarosuel />
      </section>
    </>
  );
};

export default Tour;
