"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const tags = ["Vue", "Typescript", "SQLserver", "Tailwind", "Flask"];
const tags2 = ["React", "Next.js", "Tailwind", "Framer"];

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
      <div className="grid grid-cols-2 mb-16 pt-6 pb-0 bg-gray-100 rounded-lg shadow-md">
        <div className="mx-2 pt-3 px-6 py-6">
          <h3 className="text-xl font-bold pt-6  ">AUHKRAEFT.RM.DK</h3>
          <div className=" italic mb-5">
            Internal database CRUD application, with data from clinical
            Oncological reasearch done at Aarhus University Hostpital. The
            application offers three levels of access and functionalities.
          </div>
          <div className="bg-black">
            <span className="font-semibold p-4 text-left pt-1 text-yellow-500">
              Not suiteable for phones - since its not going to be accessable
              through phones anyway for security reasons.
            </span>
          </div>
        </div>
        <div className="py-6 pr-4">
          <a
            className="cursor-pointer"
            href="https://kfeappen-clone.vercel.app/"
          >
            <Image
              className="border-2 mb-4 "
              src={require("@/assets/ss-webapp1.png")}
              alt="Screenshot of med app"
            />
          </a>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 mb-16 py-6 pb-0 bg-gray-100 rounded-lg shadow-md">
        <div className="mx-2 pt-3 px-6 py-6">
          <h3 className="text-xl font-bold pt-6  ">ØLJULEKALENDEREN 2023</h3>
          <div className=" italic mb-5">
            BajerBiksen is a local business that every year make a chrismas
            beercalender, they hand pick 24 beers and pack for their customers.
            They wanted a novel and playfull way of revealing the beers one day
            at the time. So that what i made for them...
          </div>
        </div>
        <div className="py-6 pr-4">
          <a
            className="cursor-pointer"
            href="https://kfeappen-clone.vercel.app/"
          >
            <Image
              className="border-2 mb-4 "
              src={require("@/assets/ss-webapp2.png")}
              alt="Screenshot of med app"
            />
          </a>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags2.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
