import React from "react";
import { Link } from "react-router-dom";
import EandS from "../components/EandS";
import EandSText from "../components/EandSText";

const Events = () => {
  return (
    <section className="bg-home-background bg-no-repeat bg-cover h-screen pt-20">
      <EandS />
      <EandSText />
    </section>
  );
};

export default Events;
