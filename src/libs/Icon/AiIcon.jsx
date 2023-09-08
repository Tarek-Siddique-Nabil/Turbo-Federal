import React from "react";
import Lottie from "lottie-react";
import Ai_ICON from "../../../src/assets/animated_brain.json";
const AiIcon = () => {
  return (
    <div className="w-36 h-36">
      {" "}
      <Lottie animationData={Ai_ICON} loop={true} />
    </div>
  );
};

export default AiIcon;
