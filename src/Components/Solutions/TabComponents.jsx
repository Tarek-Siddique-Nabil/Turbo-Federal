import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const TabComponents = ({ header, secondary_header, image, image_alt }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="flex flex-col gap-3 items-center lg:items-start"
    >
      <p className="tab-content-header lg:text-justify text-center">{header}</p>
      <p
        className="text-xl font-Manrope"
        dangerouslySetInnerHTML={{ __html: secondary_header }}
      />

      <img className="w-[275px] h-[255px] mt-3" src={image} alt={image_alt} />
    </motion.div>
  );
};

export default TabComponents;
