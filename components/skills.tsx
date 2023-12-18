"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Framer",
  "Next.js",
  "Vue",
  "Typescript",
  "Javascript",
  "SQLserver",
  "Tailwind",
  "Python",
  "Flask",
  "Data managment",
  "Data Engineering",
  "Statistics",
  "ML",
  "AI",
  "Design Patterns",
  "OOP",
  "CSS",
  "SQL",
  "Node.js",
  "UX",
  "Web Design",
  "Front-End Development",
  "Back-End Development",
  "REST APIs",
  "Git",

  "SQL Server",
];
export default function Skills() {
  return (
    <div className="w-[98.5vw] bg-gray-200 text-center mt-40">
      <motion.section
        className=" leading-8 my-6 sm:mt-28 sm:mb-52 mx-auto max-w-[42rem] scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="skills"
      >
        <h2 className="text-4xl font-bold mb-4 sm:mb-12">Skills:</h2>
        <ul className="flex flex-wrap mt-4 gap-2 justify-center sm:mt-auto">
          {skills.map((skill, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
}
