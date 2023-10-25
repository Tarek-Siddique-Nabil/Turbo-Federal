import React from "react";
import {
  tabTwo_Image2,
  tabTwo_Image3,
  tabTwo_Image4,
  tabTwo_Image5,
} from "../../libs/assets/tabContentImage/tab2";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollableCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-370%", "1%"]);
  const imageCard = [
    {
      image: tabTwo_Image2,
      id: 1,
    },
    {
      image: tabTwo_Image3,
      id: 2,
    },
    {
      image: tabTwo_Image4,
      id: 3,
    },
    {
      image: tabTwo_Image5,
      id: 4,
    },
  ];

  return (
    <>
      <section ref={targetRef} className="block xl:hidden relative h-[370px] ">
        <div className="absolute inset-0 flex  items-center overflow-hidden ">
          <motion.div style={{ x }} className="flex gap-4">
            {imageCard.map((card, index) => {
              return (
                <img
                  className="w-[400px] h-[350px] "
                  src={card.image}
                  key={index}
                />
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ScrollableCarousel;
