"use client";

import React from "react";
import { motion } from "framer-motion";

export default function sectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="bg-gray-200 my-11 h-16 w-1 rounded-full hidden sm:block"
    ></motion.div>
  );
}