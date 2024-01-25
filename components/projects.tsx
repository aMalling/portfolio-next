"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const tags = ["Vue", "Typescript", "SQLserver", "Tailwind", "Flask"];
const tags2 = ["React", "Next.js", "Tailwind", "Framer"];

export default function Projects() {
  return (
    <motion.section
      className="max-w-[60rem] text-center leading-8  scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.275 }}
      id="projects"
    >
      <h2 className="text-4xl font-bold mt-5 md:mt-0 mb-4">Projects</h2>
      <div className="flex flex-col sm:grid grid-cols-2 mb-16 w-screen sm:w-auto pt-6 pb-0 bg-gray-100 dark:bg-gray-100/10 rounded-lg shadow-md">
        <div className="sm:mx-2 sm:pt-3 sm:px-6 sm:py-6">
          <h3 className="text-xl font-bold sm:pt-6 mb-3">
            AUH Cancer department
          </h3>
          <div className=" text-left mb-5 px-2">
            Internal Web App streamlines and provides intuitive access to
            clinical research data, serving the purpose of efficiently{" "}
            <span className=" text-orange-500 font-semibold">
              {" "}
              managing and tracking all clinical research and patient{" "}
            </span>{" "}
            participation within the Department of Oncology at Aarhus University
            Hospital. The application offers three distinct levels of access and
            functionalities, catering to its design for three specific user
            groups:
            <ol className="pt-2 pb-4 list-disc px-4 ">
              <li className="mb-1">
                {" "}
                For <span className="font-semibold">clinical personnel, </span>
                the focus is on delivering easy and intuitive access to{" "}
                <span className=" text-orange-500 font-semibold">
                  swiftly look up{" "}
                </span>{" "}
                specific studies amidst their hectic schedules, ensuring minimal
                time away from patient care.
              </li>
              <li className="mb-1">
                <span className="font-semibold">Administrative personnel </span>
                benefit from an interface that simplifies and accelerates{" "}
                <span className=" text-orange-500 font-semibold">
                  {" "}
                  data entry{" "}
                </span>{" "}
                tasks, providing them with quick and straightforward access.
              </li>
              <li>
                <span className="font-bold ">
                  Management and research teams
                </span>{" "}
                find the application valuable for easily{" "}
                <span className=" text-orange-500 font-semibold">
                  monitoring the performance
                </span>{" "}
                of research projects, verifying if recruitment aligns with
                intended rates.
              </li>
            </ol>
            These requirements have been met by migrating data to a SQL server
            and constructing a Vue frontend along with a Flask REST API. The
            result is a CRUD application incorporating data from clinical
            oncological research conducted at Aarhus University Hospital.
          </div>
          <div className="bg-black">
            <span className="font-semibold mx-2 sm:p-6 sm:text-left pt-1 text-white">
              Not suiteable for phones - since its not going to be accessable
              through phones anyway for security reasons.
            </span>
          </div>
        </div>
        <div className=" sm:py-6 sm:pr-4">
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
          <a
            className="cursor-pointer"
            href="https://kfeappen-clone.vercel.app/"
          >
            <Image
              className="border-2 mb-4 "
              src={require("@/assets/ss-webapp4.png")}
              alt="Screenshot of med app"
            />
          </a>
          <ul className="flex flex-wrap mt-4 mx-2 mb-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7]  px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:grid grid-cols-2 pt-6 pb-0 mb-16  bg-gray-100 dark:bg-gray-100/10 rounded-lg shadow-md">
        <div className="sm:mx-2 sm:pt-3 sm:px-6 sm:py-6">
          <h3 className="text-xl font-bold sm:pt-6 mb-3 ">
            ØLJULEKALENDEREN 2023
          </h3>
          <div className="mb-5 text-left ">
            BajerBiksen, a community-oriented establishment, annually curates a{" "}
            <span className=" text-orange-500 font-semibold">
              Christmas beer calendar{" "}
            </span>
            featuring handpicked selections of 24 unique beers for their
            customers. Seeking an innovative and playful approach to unveil each
            beer day by day, they entrusted me to bring this concept to life,
            and here's what I crafted for them...
          </div>
        </div>
        <div className="sm:py-6 sm:pr-4">
          <a
            className="cursor-pointer"
            href="https://julekalenderen.vercel.app/"
          >
            <Image
              className="border-2 mb-4 "
              src={require("@/assets/ss-webapp2.png")}
              alt="Screenshot of med app"
            />
          </a>
          <ul className="flex flex-wrap my-4 gap-2 sm:mt-auto">
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
      <div className="flex flex-col sm:grid grid-cols-2 pt-6 pb-0 bg-gray-100 dark:bg-gray-100/10 rounded-lg shadow-md">
        <div className="sm:mx-2 sm:pt-3 sm:px-6 sm:py-6">
          <h3 className="text-xl font-bold sm:pt-6 mb-3 ">PsykologTidVejle</h3>
          <div className=" mb-5 text-left ">
            This page is crafted for a pair of recently-established{" "}
            <span className=" text-orange-500 font-semibold">
              psychologists.
            </span>{" "}
            This landing page and straightforward website are designed to{" "}
            <span className=" text-orange-500 font-semibold">
              captivate potential clients.
            </span>
            The goal is to create an environment that instills a sense of
            safety, warmth, and confidence from the very moment visitors arrive,
            ensuring they feel embraced by competent and professional hands.
          </div>
        </div>
        <div className="sm:py-6 sm:pr-4">
          <a
            className="cursor-pointer"
            href="https://julekalenderen.vercel.app/"
          >
            <Image
              className="border-2 mb-4 "
              src={require("@/assets/ss-webapp3.png")}
              alt="Screenshot of med app"
            />
          </a>
          <ul className="flex flex-wrap my-4 gap-2 sm:mt-auto">
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
