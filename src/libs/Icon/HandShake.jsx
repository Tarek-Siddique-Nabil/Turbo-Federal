import Lottie from "lottie-react";
import React from "react";
import AnimatedHandShake from "../../assets/json/animated_handshake.json";
const HandShake = () => {
  return (
    <div>
      <Lottie
        style={{ width: "52px", height: "42px" }}
        animationData={AnimatedHandShake}
        loop={true}
      />
    </div>
  );
};

export default HandShake;
