"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        bom bom{" "}
      </motion.div>
    </main>
  );
}
