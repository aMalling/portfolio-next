"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 px-4 w-screen sm:w-auto max-w-[35rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h2 className="text-4xl font-bold mt-5 md:mt-0">About me</h2>
      <p className="text-lg font-semibold text-gray-800 mt-4">
        I am Anders Helle Malling, a passionate and dependable web developer
        based in Aarhus, Denmark, and I run a solo web agency.
        <p className="mt-3">
          I take on projects of all sizes. Whether you require minor bug fixes,
          additional functionalities for your existing codebase, a brand-new web
          application or webshop built from scratch, I've got you covered. Both
          freelance assignments or full-time employment are of interest.
        </p>
        <p className="mt-3">
          But don't just take my word for it. Explore my portfolio to see for
          your self.
        </p>
      </p>
    </motion.section>
  );
}
