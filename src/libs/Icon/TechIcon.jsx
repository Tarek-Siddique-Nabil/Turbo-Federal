import Lottie from "lottie-react";
import React from "react";
import TECH_ICON from "../../../src/assets/json/animation_tech.json";
const TechIcon = () => {
  return (
    <div className="w-28 h-28 -z-50">
      {" "}
      <Lottie animationData={TECH_ICON} loop={true} />
    </div>
  );
};

export default TechIcon;
