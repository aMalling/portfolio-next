"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <motion.section
      className="mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.275 }}
      id="projects"
    >
      <h2 className="text-4xl font-bold mt-5 md:mt-0 mb-4">Projects</h2>
      <div className="grid grid-cols-2 mb-10 ">
        <div className="mx-2 pt-3 pb-0 border-2">
          <h3 className="text-xl left font-bold  ">AuhKraeft.rm.dk</h3>
          <div className=" italic ">
            Internal database CRUD application, with data from clinical
            Oncological reasearch done at Aarhus University Hostpital. The
            application offers three levels of access and functionalities.
          </div>
          <div className="bg-black">
            <span className="font-semibold p-2 pt-1 text-yellow-500">
              Not suiteable for phones - since its not going to be accessable
              through phones anyway for security reasons.
            </span>
          </div>
        </div>

        <div className="">
          <a
            className="cursor-pointer"
            href="https://kfeappen-clone.vercel.app/"
          >
            <Image
              className="border-2  "
              src={require("@/assets/ss-webapp1.png")}
              alt="Screenshot of med app"
              alt="Screenshot of med app"
            />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="mx-2 pt-3 pb-0 border-2">
          <h3 className="text-xl left font-bold  ">ØLJULEKALENDERN 2023</h3>
          <div className=" italic ">
            BajerBiksen is a local business that every year make a chrismas
            beercalender, they hand pick 24 beers and pack for their customers.
            They wanted a novel and playfull way of revealing the beers one day
            at the time. So that what i made for them...
          </div>
          <div className="bg-black"></div>
        </div>

        <div className="">
          <a
            className="cursor-pointer"
            href="https://julekalenderen.vercel.app/"
          >
            <Image
              className="border-2  "
              src={require("@/assets/ss-webapp2.png")}
              alt="Screenshot of med app"
              alt="Screenshot of med app"
            />
          </a>
        </div>
      </div>
    </motion.section>
  );
}
