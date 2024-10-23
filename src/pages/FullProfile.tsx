import React from "react";
import { motion } from "framer-motion";
import { dataLists } from "../components/Lists";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Stepper from "../components/Stepper";

export default function FullProfile() {
  return (
    <motion.div
      className="full-profile"
      id="full-profile"
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.5 }}
    >
      <Layout>
        <div className="resume-wrapper flex flex-col justify-center px-4 overflow-hidden max-w-3xl mx-auto relative">
          <Link
            to="/"
            className="text-dark dark:text-white flex items-center gap-1 transition-all hover:text-blue dark:hover:text-blue-light underline absolute top-4"
          >
            <AiOutlineArrowLeft /> Home
          </Link>
          <h1 className="subtitle mb-8">Résumé</h1>
          <div className="resume-detail space-y-5 pb-4">
            <div className="space-y-2">
              <h2 className="dark:text-white text-2xl">
                Zulfa Fatah Akbar Ahmad - Front-end Web Developer
              </h2>
              <ul>
                {dataLists.map((dataList, index) => {
                  return (
                    <Data
                      key={index}
                      content={dataList.content}
                      link={dataList.link}
                      name={dataList.name}
                    />
                  );
                })}
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="dark:text-white text-2xl">Skills</h2>
              <ul>
                <Skill type="JavaScript" content="React JS" />
                <Skill type="Web" content="HTML, CSS, Sass, Tailwind" />
                <Skill type="Design" content="Figma" />
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="dark:text-white text-2xl">Work History</h2>
              <Stepper
                title="Part-time Front-end Developer at Bukit Vista"
                desc="July 2022 - Now. Responsible for building web app mainly using React JS, Redux, Material UI, and Tailwind CSS"
              />
              <Stepper
                title="Front-end Developer Intern at Bukit Vista"
                desc="Feb 2022 - June 2022. Responsible for building web app mainly using React JS, Redux, Material UI, and Tailwind CSS"
              />
              <Stepper
                title="Front-end Developer Intern at English Learner ID"
                desc=" Sep 2021 - Mar 2022. Responsible for building website with HTML, CSS, JavaScript, and Bootstrap"
              />
            </div>
            <div className="space-y-2">
              <h2 className="dark:text-white text-2xl">Education History</h2>
              <Stepper
                title="2019 - Now"
                desc="Computer Engineering, Diponegoro University, GPA: 3,86"
              />
              <Stepper title="2016 - 2019" desc="SMA Negeri 1 Salatiga" />
            </div>
          </div>
        </div>
      </Layout>
    </motion.div>
  );
}

const Data = ({ content, link, name }) => {
  return (
    <li className="relative mb-4 transition-all before:bg-blue-light before:absolute before:w-0 before:h-[2px] before:transition-all before:top-[23px] before:right-full hover:before:w-full hover:before:right-0">
      <strong className="text-dark dark:text-blue-light">{content}</strong>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="dark:text-white ml-1 transition-all cursor-pointer"
      >
        {name}
      </a>
    </li>
  );
};

const Skill = ({ content, type }) => {
  return (
    <li className="relative mb-4 transition-all before:bg-blue-light before:absolute before:w-0 before:h-[2px] before:transition-all before:top-[23px] before:right-full hover:before:w-full hover:before:right-0">
      <strong className="text-dark dark:text-blue-light">{type}</strong>
      <span className="dark:text-white ml-1">{content}</span>
    </li>
  );
};
