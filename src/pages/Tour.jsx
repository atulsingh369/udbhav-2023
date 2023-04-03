import React from "react";
import TourHeader from "../components/TourHeader";
import TourCarosuel from "../components/TourCarosuel";
import Gallery from "../components/Gallery";

const Tour = () => {
  return (
    <>
      <section className="h-screen pt- bg-white">
        <TourHeader />
        <TourCarosuel />
        <div className="flex flex-row items-center justify-evenly bg-base-100 h-56">
          <button className="btn glass w-32 text-lg font-semibold">IERT</button>
          <button className="btn glass w-32 text-lg font-semibold">
            ALUMINAI
          </button>
          <a href="#gallery">
            <button className="btn glass w-32 text-lg font-semibold">
              GALLERY
            </button>
          </a>
        </div>
        <Gallery />
      </section>
    </>
  );
};

export default Tour;
