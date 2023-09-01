import React from "react";

const Footer = () => {
  return (
    <footer className="lg:px-16 md:px-10 px-5 md:py-10 py-4">
      <hr className="border border-violet-500 my-5" />
      <section className="flex flex-col gap-10">
        <div>
          <p className="text-3xl font-Manrope">Stay in the loop</p>
          <p className="text-3xl font-Manrope">Sign up for the updates</p>
        </div>

        <div className="flex gap-3">
          <input
            placeholder="email@framer.com"
            className="px-6 py-3 bg-slate-200 rounded-2xl"
          />
          <button className="px-3 py-3 bg-violet-700 text-white font-Manrope rounded-lg">
            Sign Up
          </button>
        </div>
        <section>
          <container className="flex justify-between md:text-xl font-light font-Manrope capitalize">
            <div className="flex flex-col gap-1">
              <p className=" text-violet-600">Solutions</p>
              <p>Marketing</p>
              <p>Analytics</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className=" text-violet-600">Support</p>
              <p>Pricing</p>
              <p>Documentation</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className=" text-violet-600">Legal</p>
              <p>Solutions</p>
              <p>Solutions</p>
            </div>
          </container>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
