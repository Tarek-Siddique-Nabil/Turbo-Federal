import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const TabComponents = ({
  id,
  header,
  secondary_header,
  image,
  image_alt,
  extra_header,
  extra_des,
}) => {
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
      className="flex flex-col gap-3 items-center lg:items-start w-full"
    >
      <p
        className="tab-content-header text-center md:text-left w-[80%]"
        dangerouslySetInnerHTML={{ __html: header }}
      />
      <p
        className="text-xl font-Manrope w-3/4"
        dangerouslySetInnerHTML={{ __html: secondary_header }}
      />

      {image && (
        <img
          className={`${
            id === 6 ? "w-full h-full" : "w-[285px] h-[255px]"
          }  mt-3`}
          src={image}
          alt={image_alt}
        />
      )}

      {extra_header && (
        <p
          className="tab-content-header lg:text-justify text-center mt-4"
          dangerouslySetInnerHTML={{ __html: extra_header }}
        />
      )}
      {extra_des && (
        <p
          className="text-xl font-Manrope w-4/5"
          dangerouslySetInnerHTML={{ __html: extra_des }}
        />
      )}
    </motion.div>
  );
};

export default TabComponents;
