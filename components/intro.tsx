"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      {/* image and wave hand */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            // initial={{ opacity: 0, scale: 0 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{
            //   type: "tween",
            //   duration: 0.2,
            // }}

            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Image
              src="https://content.wepik.com/statics/21209533/preview-page0.jpg"
              alt="Lijin Wilson"
              width="192"
              height="192"
              quality="100"
              priority={true}
              className="w-24 h-24 object-cover rounded-full border-[0.35rem] border-gray-200 shadow-xl"
            ></Image>
          </motion.div>

          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
              duration: 0.7,
            }}
          >
            👋🏻
          </motion.span>
        </div>
      </div>

      {/* Description */}
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Lijin Wilson.</span> I'm a{" "}
        <span className="font-bold">Web developer</span> I enjoy building{" "}
        <span className="italic">sites</span>. My focus is{" "}
        <span className="underline">React (Next.js) Angular</span>.
      </motion.p>

      {/* Contact me, download CV, Linkedin, Git hub section */}
    </section>
  );
}
