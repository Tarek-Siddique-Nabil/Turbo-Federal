import React from "react";
import Lottie from "lottie-react";
import Ai_ICON from "../../../src/assets/json/animated_brain.json";
const AiIcon = () => {
  return (
    <div className="w-28 h-28 -z-50">
      {" "}
      <Lottie animationData={Ai_ICON} loop={true} />
    </div>
  );
};

export default AiIcon;
