import React,{ useEffect} from "react";
import Hero from "./Pages/Hero";
import Carousel from "./Pages/Carousel";
import Work from "./Pages/Work";
import Team from "./Pages/Team";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);
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
