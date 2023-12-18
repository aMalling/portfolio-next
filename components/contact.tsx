"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div>
      <h2 className="text-4xl font-bold mt-28 text-center mb-2">Contact</h2>
      <motion.div
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 bg-gray-700 text-white py-5 rounded-full px-16 shadow-2xl border border-white"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="contact"
      >
        <p className="text-lg font-semibold">
          Dont hesitate to contact me.
          <p className="mt-3">Email: andersmalling@gmail.com</p>
          <p className="mt-3">Phone: +4560677555</p>
        </p>
      </motion.div>
    </div>
  );
}
