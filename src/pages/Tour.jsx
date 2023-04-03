import React from "react";
import TourHeader from "../components/TourHeader";
import TourCarosuel from "../components/TourCarosuel";

const Tour = () => {
  return (
    <>
      <section className="h-screen pt-20 bg-home-background bg-no-repeat bg-cover">
        <TourHeader />
        <TourCarosuel />
      </section>
    </>
  );
};

export default Tour;
