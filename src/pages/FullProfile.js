import React from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
// import './Profile.css'
import { dataLists } from '../components/Lists'
import TopNav from '../components/TopNav'

export default function FullProfile() {
  return (
    <motion.div
      className="full-profile"
      id="full-profile"
      initial={{ y: '-100vh' }}
      animate={{ y: 0 }}
      exit={{ y: '-100vh' }}
      transition={{ duration: 0.5 }}
    >
      <div className="content-profile w-full h-screen py-20 bg-white dark:bg-dark bg-cover bg-center transition-all">
        <TopNav />
        <div className="resume-wrapper flex flex-col justify-center px-4 overflow-hidden max-w-3xl mx-auto">
          <h1 className="subtitle mb-8">Résumé</h1>
          <div className="resume-detail">
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
                )
              })}
            </ul>
            <h2 className="dark:text-white text-2xl">Skills</h2>
            <ul>
              <Skill type="JavaScript" content="React.js" />
              <Skill type="Web" content="HTML, CSS, Sass, Tailwind" />
              <Skill type="Design" content="Figma" />
            </ul>
            <h2 className="dark:text-white text-2xl">Education History</h2>
            <div className="circles">
              <div className="px-2">
                <h3 className="dark:text-white text-base ">2019 - Now</h3>
                <p className="dark:text-white my-2 text-sm font-medium">
                  Computer Engineering, Diponegoro University, GPA: 3,92
                </p>
              </div>
            </div>
            <div className="circles">
              <div className="px-2">
                <h3 className="dark:text-white text-base ">2016 - 2019</h3>
                <p className="dark:text-white my-2 text-sm font-medium">
                  SMA Negeri 1 Salatiga
                </p>
              </div>
            </div>
            <div className="timeline relative w-[300px] after:absolute after:w-[3px] after:bg-white after:top-0 after:bottom-0 after:left-3"></div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}

const Data = ({ content, link, name }) => {
  return (
    <>
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
    </>
  )
}

const Skill = ({ content, type }) => {
  return (
    <>
      <li className="relative mb-4 transition-all before:bg-blue-light before:absolute before:w-0 before:h-[2px] before:transition-all before:top-[23px] before:right-full hover:before:w-full hover:before:right-0">
        <strong className="text-dark dark:text-blue-light">{type}</strong>
        <span className="dark:text-white ml-1">{content}</span>
      </li>
    </>
  )
}
