import React from "react";
import Hero from "./Pages/Hero";
import Carousel from "./Pages/Carousel";
import Work from "./Pages/Work";
import Team from "./Pages/Team";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Carousel />

      <Work />
      <Team />
    </div>
  );
};

export default Home;
