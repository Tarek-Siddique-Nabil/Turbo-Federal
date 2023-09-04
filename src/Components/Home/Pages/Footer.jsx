import React from "react";
import { motion } from "framer-motion";
import logo from "../../../assets/logo.jpg";
const Footer = () => {
  return (
    <footer className="lg:px-40 md:px-10 px-5 md:py-10 py-4">
      <hr className="border border-[#050757] my-5" />
      <container className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-4">
        <section className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0.5, y: "10vh" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "linear" }}
          >
            <p className="text-3xl font-Manrope">Stay in the loop</p>
            <p className="text-3xl font-Manrope">Sign up for the updates</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0.5, y: "10vh" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "linear" }}
            className="flex gap-3"
          >
            <input
              placeholder="email@framer.com"
              className="px-6 py-3 bg-slate-200 rounded-2xl"
            />
            <button className="px-3 py-3 bg-[#383a9b] text-white font-Manrope rounded-lg">
              Sign Up
            </button>
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
        <section>
          <img className="max-h-20" src={logo} />
        </section>
      </container>
    </footer>
  );
};

export default Footer;
