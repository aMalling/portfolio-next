"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h2 className="text-4xl font-bold mt-5 md:mt-0">About me</h2>
      <p class="text-lg font-semibold text-gray-500 mt-4">
        Welcome to Vanaheim, your go-to destination for all your web development
        needs! I'm Anders Helle Malling, a passionate and dependable web
        developer based in Aarhus, Denmark, and I run this solo web agency.
        <p class="mt-3">
          At Vanaheim, I take on projects of all sizes. Whether you require
          minor bug fixes, additional functionalities for your existing
          codebase, or a brand-new web application or webshop built from
          scratch, I've got you covered.
        </p>
        <p class="mt-3">
          But don't just take my word for it. Explore my portfolio to see for
          your self. With Vanaheim, you can trust that your web projects are in
          save hands, and I'm here to turn your digital aspirations into
          reality.
        </p>
      </p>
    </motion.section>
  );
}
