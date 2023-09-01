import React, { useState } from "react";
import logo from "../../../src/assets/logo.jpg";
import { motion } from "framer-motion";
import navItem from ".";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const Path = (props) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="currentColor"
      strokeLinecap="round"
      className={!isSidebarOpen ? "text-blue-600" : "text-red-500"}
      {...props}
    />
  );

  return (
    <>
      <motion.header
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
        className="flex  justify-between items-center lg:px-16 md:px-10 px-5 md:py-10 py-4"
      >
        <div>
          <img className="w-64 h-12" src={logo} alt="" />
        </div>
        <div className="hidden text-lg lg:flex gap-5 ">
          {navItem.map((i, index) => (
            <button key={index}>{i.label}</button>
          ))}
        </div>
        <div className="lg:hidden">
          <button
            className="flex items-center px-4 py-2 text-gray-500"
            onClick={handleSidebarToggle}
          >
            <svg width="23" height="23" viewBox="0 0 23 23">
              <Path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
                initial={isSidebarOpen ? "open" : "closed"}
                animate={isSidebarOpen ? "open" : "closed"}
              />
              <Path
                initial={isSidebarOpen ? "open" : "closed"}
                animate={isSidebarOpen ? "open" : "closed"}
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
              <Path
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
                initial={isSidebarOpen ? "open" : "closed"}
                animate={isSidebarOpen ? "open" : "closed"}
              />
            </svg>
          </button>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: isSidebarOpen ? "0" : "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-screen w-56 bg-white shadow-md p-4"
          >
            <motion.ul
              transition={{
                staggerChildren: 0.07, // Adjust this value as needed for your desired delay
                delayChildren: 0.2,
                staggerDirection: 1, // Positive direction to animate sequentially
              }}
              className="flex flex-col items-baseline gap-4"
            >
              {navItem?.map((i, index) => (
                <motion.li
                  className="text-lg font-semibold"
                  animate={{
                    x: isSidebarOpen ? 0 : -50,
                    opacity: isSidebarOpen ? 1 : 0,
                  }}
                  transition={{
                    stiffness: 1000,
                    velocity: -1000,
                    duration: 0.5,
                    delay: 0.2 * index, // Adjust the delay based on the index
                    ease: "linear",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key={index}
                >
                  {i.label}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 left-0 z-50  h-screen w-screen "
              onClick={handleSidebarToggle}
            ></motion.div>
          )}
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
