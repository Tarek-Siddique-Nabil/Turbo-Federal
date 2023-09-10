import React from "react";
import Lottie from "lottie-react";
import Ai_ICON from "../../../src/assets/json/animated_brain.json";
const AiIcon = () => {
  return (
    <div className="w-36 h-36 -z-50">
      {" "}
      <Lottie animationData={Ai_ICON} loop={true} />
    </div>
  );
};

export default AiIcon;
