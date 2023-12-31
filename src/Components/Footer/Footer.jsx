import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo.jpg";
import { useSidebar } from "../Header/zustand";
import { Link } from "react-router-dom";
const Footer = () => {
  const { isSidebarOpen } = useSidebar();
  return (
    <footer
      id="contact-us"
      className={`${
        isSidebarOpen && "-z-50"
      } lg:px-40 md:px-10 px-5 md:py-10 py-4`}
    >
      <hr className="border border-[#050757] my-5" />
      <container className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-4">
        <section className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0.5, y: "10vh" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "linear" }}
          >
            <p
              className={`text-3xl font-Manrope ${
                isSidebarOpen && "-z-50 opacity-0"
              }`}
            >
              Contact Us.
            </p>
            {/* <p className="text-3xl font-Manrope">Sign up for the updates</p> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0.5, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "linear", delay: 0.3 }}
            className="flex gap-3"
          >
            <input
              placeholder="info@turbofederal.com"
              className="px-6 py-3 bg-slate-200 rounded-2xl"
            />
            <a
              href={`mailto:info@turbofederal.com`}
              className="px-3 py-3 bg-[#383a9b] text-white font-Manrope rounded-lg"
            >
              Send Email
            </a>
          </motion.div>
          {/* <section>
          <container className="flex justify-between md:text-xl font-light font-Manrope capitalize">
            <div className="flex flex-col gap-1">
              <p className=" text-[#050757]">Solutions</p>
              <p>Marketing</p>
              <p>Analytics</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className=" text-[#050757]">Support</p>
              <p>Pricing</p>
              <p>Documentation</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className=" text-[#050757]">Legal</p>
              <p>Solutions</p>
              <p>Solutions</p>
            </div>
          </container>
        </section> */}
        </section>
        <Link to="/">
          <img loading="lazy" className="max-h-20" src={logo} />
        </Link>
      </container>
    </footer>
  );
};

export default Footer;
