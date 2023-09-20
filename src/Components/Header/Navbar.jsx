import React, { useEffect, useState } from "react";
import logo from "../../../src/assets/logo.jpg";
import { motion } from "framer-motion";
import navItem from ".";
import { useSidebar } from "./zustand";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const [scrollPercentage, setScrollPercentage] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const progressStyle = {
    height: `${scrollPercentage}%`,
  };

  const Path = (props) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="currentColor"
      strokeLinecap="round"
      className={!isSidebarOpen ? "text-[#050757]" : "text-red-500"}
      {...props}
    />
  );

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: "-50%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
        className={`${
          progressStyle?.height > "1%"
            ? "fixed w-full bg-white z-50 shadow-md  shadow-gray-500"
            : "relative  "
        }  flex  justify-between items-center lg:px-40 md:px-10  px-5 md:py- py-4 transition-all duration-150 ease-linear `}
      >
        <Link to="/">
          <img
            loading="lazy"
            className="w-64 h-12 -mt-3 md:mt-0"
            src={logo}
            alt=""
          />
        </Link>
        <div className="hidden text-lg lg:flex gap-5 ">
          {navItem.map((i, index) => (
            <React.Fragment key={index}>
              {i.hashLink !== true ? (
                <NavLink
                  onClick={() => {
                    toggleSidebar(), i?.onclick?.();
                  }}
                  to={i.href}
                >
                  {i.label}
                </NavLink>
              ) : (
                <a onClick={() => toggleSidebar()} href={i.href}>
                  {i.label}
                </a>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="lg:hidden ">
          <button
            className="flex items-center px-4 py-2 text-gray-500"
            onClick={() => toggleSidebar()}
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
            className="fixed  top-0 left-0 h-screen w-1/2  bg-white  p-4 "
          >
            <motion.ul
              transition={{
                staggerChildren: 0.07, // Adjust this value as needed for your desired delay
                delayChildren: 0.2,
                staggerDirection: 1, // Positive direction to animate sequentially
              }}
              className="flex flex-col items-baseline gap-4 "
            >
              {navItem?.map((i, index) => (
                <motion.li
                  className="text-4xl font-semibold"
                  animate={{
                    x: isSidebarOpen ? 0 : -50,
                    opacity: isSidebarOpen ? 1 : 0,
                  }}
                  transition={{
                    stiffness: 1000,
                    velocity: -1000,
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "linear",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  key={index}
                >
                  {i.hashLink !== true ? (
                    <NavLink
                      onClick={() => {
                        toggleSidebar(), i?.onclick?.();
                      }}
                      to={i.href}
                    >
                      {i.label}
                    </NavLink>
                  ) : (
                    <a onClick={() => toggleSidebar()} href={i.href}>
                      {i.label}
                    </a>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 left-0 z-50  h-screen w-screen "
              onClick={() => toggleSidebar()}
            ></motion.div>
          )} */}
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
