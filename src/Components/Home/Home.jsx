import React from "react";
import Hero from "./Pages/Hero";
import Carousel from "./Pages/Carousel";
import Cases from "./Pages/Cases";
import Work from "./Pages/Work";
import Team from "./Pages/Team";
import Footer from "./Pages/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Carousel />
      <Cases />
      <Work />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
