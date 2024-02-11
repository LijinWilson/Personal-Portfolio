"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionView } from "@/lib/hook";
import { animate, motion } from "framer-motion";

export default function Skills() {
  // Custom hooks used for changing the section header while scrolling
  const { ref } = useSectionView("Skills");

  //   framer animation
  const fadInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      },
    }),
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skills, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
            key={index}
            variants={fadInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              // it will only show the animation on single visit not on multiple visits.
              once: true,
            }}
            // through this we can pass any parameters to our animation function.
            custom={index}
          >
            {skills}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
