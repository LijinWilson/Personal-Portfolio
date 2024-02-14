"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionView } from "@/lib/hook";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  /* custom hook used for changing the section name in header on scrolling */
  const { ref } = useSectionView("Home", 0.5);
  // avoid get stucking of moving background in between header section.
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
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
              src="/Lijin-Wilson.jpg"
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
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I am Lijin Wilson.</span> I am a{" "}
        <span className="font-bold">Web developer</span> I enjoy building{" "}
        <span className="italic">sites</span>. My focus is{" "}
        <span className="underline">React (Next.js) Angular</span>.
      </motion.h1>

      {/* Contact me, download CV, Linkedin, Git hub section */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {/* contact me here */}
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        {/* download cv */}
        <a
          className="group flex items-center gap-2 bg-white rounded-full px-7 py-3 outline-none focus:scale-110 hover:scale-105  active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
          href="/Lijin-Wilson.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        {/* Linkedin */}
        <a
          className="flex items-center gap-2 bg-white text-gray-700 rounded-full p-4 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/lijinwilson/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        {/* github */}
        <a
          className="flex items-center gap-2 bg-white text-gray-700 rounded-full p-4 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 text-[1.35rem] transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/LijinWilson"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
