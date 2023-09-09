import React from "react";
import Hero from "./Pages/Hero";
import Carousel from "./Pages/Carousel";
import Cases from "./Pages/Cases";
import Work from "./Pages/Work";
import Team from "./Pages/Team";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Carousel />
      <Cases />
      <Work />
      <Team />
    </div>
  );
};

export default Home;
