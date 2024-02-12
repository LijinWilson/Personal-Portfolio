"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionView } from "@/lib/hook";
import { sendEmail } from "@/server_action/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  // custom hook for changing the header name when reaches on the section on scrolling.
  const { ref } = useSectionView("Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:lijinwilson2018@gmail.com">
          lijinwilson2018@gmail.com
        </a>{" "}
        or through this form
      </p>
      {/* Form */}
      <form
        /* 
       - these is done by using the server action principle of next js
       - this is custom feature for next js to get the value we input inside the form using the action attribute
       - we have to use the name parameter to get the data
       - make changes to next config file, 
       - this form data contains the data that we are sending from input.
       */
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!..");
        }}
        className="mt-10 flex flex-col"
      >
        <input
          type="email"
          name="sender Email"
          className="h-14 rounded-lg border border-black/10 px-4"
          placeholder="your email"
          required={true}
          maxLength={500}
        />
        <textarea
          name="sender message"
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
          placeholder="Your message"
          required={true}
          maxLength={5000}
        />
        <SubmitBtn></SubmitBtn>
      </form>
    </motion.section>
  );
}
