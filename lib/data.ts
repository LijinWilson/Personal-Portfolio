import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaSchool, FaSuitcase } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fibi from "@/public/fibi.png";
import personalPortfolio from "@/public/personalPortfolio.png"
import BankingApplication from "@/public/BankingApplication.jpg"
import Ecommerce from "@/public/Ecommerce.jpg"; 

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  
] as const;

// export const educationData = [
//   {
//     education: "10th (high school)",
//     institution: "Arya Bharathy high school",
//     location: "Omallur pathanamthitta",
//     percentage: "95%",
//     date: "2016",
//     icon: React.createElement(FaSchool)
//   },
//   {
//     education: "10th (high school)",
//     institution: "Arya Bharathy high school",
//     location: "pathanamthitta",
//     percentage: "85%",
//     date: "2018",
//     icon: React.createElement(FaSchool)
//   },
//   {
//     education: "B-Tech Electronics and Communication",
//     institution: "Mar Baselios Christian college of engineering and technology",
//     location: "Peerumade, Kuttikanam, Idukki",
//     percentage: "7.13 CGPA",
//     date: "2018 - 2022",
//     icon: React.createElement(FaSchool)
//   },
// ] as const;

export const experiencesData = [
  // {
  //   title: "Graduated bootcamp",
  //   location: "Miami, FL",
  //   description:
  //     "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2019",
  // },
  {
    title: "10th - High School",
    location: "Arya Bharathy high school Omallur pathanamthitta Kerala",
    description:
      "Percentage: 95%",
    icon: React.createElement(FaSchool),
    date: "2015",
  },
  {
    title: "12th - Higher Secondary",
    location: "Catholicate Higher Secondary school Pathanamtitta kerala",
    description:
      "Percentage: 85%",
    icon: React.createElement(FaSchool),
    date: "2018",
  },
  {
    title: "B-Tech Electronics and Communication Engineering",
    location: "Mar Baselios Christian College of Engineering and Technology Kuttikkanam Peermade Idukki Kerala",
    description:
      "CGPA: 7.13",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Full Stack Developer Intern",
    location: "Luminar TehnoLab Kochi Kerala",
    description:
      "Get hand on experience in building realtime Application. Have get enough skill in front framerwork such as Angular, React also get experience in backend developement using node Js express MongoDB. Completed self Project like Bank application, Eccommerce website, Clone of Instagram UI and numerous micro project",
    icon: React.createElement(FaSuitcase),
    date: "2022 jan - 2022 Sept",
  },
  {
    title: "Software Engineer Trainee",
    location: "Polus Solutions pvt ltd Trivandrum Kerala",
    description:
      "A frontEnd developer creates clear and concise documentation, including flowcharts, layouts, diagrams, charts, code comments, and well-organized code to demonstrate solutions. Build application using angular. Also get hands on experience in Java, SQL also. Implement the scheduler to the application",
    icon: React.createElement(FaSuitcase),
    date: "2023 feb - 2022 Sept",
  },
] as const;

export const projectsData = [
 
  {
    title: "FIBI",
    description:
      "It was an research administration tool used by most prominant universities which i was working on Polus Software as frontEnd developer.",
    tags: ["Angular", "SQL", "Type script", "Java"],
    imageUrl: fibi,
  },
  {
    title: "Banking Application",
    description:
      "A banking application. It was an project i done as an full Stack developer intern on Luminar TechnoLab",
    tags: ["Angular", "Node Js", "Mongo DB", "Express", "TypeScript"],
    imageUrl: BankingApplication,
  },
  {
    title: "Ec-Commerce Website",
    description:
      "A shopping application. It was an project i done as an full Stack developer intern on Luminar TechnoLab",
    tags: ["Angular", "Node Js", "Mongo DB", "Express", "TypeScript"],
    imageUrl: Ecommerce,
  }, {
    title: "Personal Portfolio",
    description:
      "A personal portfolio which desctibes about me",
    tags: ["Next Js", "Type script", "tailwind", "Framer motion",],
    imageUrl: personalPortfolio,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "TypeScript",
  "Angular",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "SQL",
  "Framer Motion",
  "ShadeCN"
] as const;