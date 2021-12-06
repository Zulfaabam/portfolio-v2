import React from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'
import '../Profile.css'
import { dataLists } from './Lists'

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
      <div className="content-profile">
        <motion.div
          className="theme-changer"
          initial={{ y: '-100vh' }}
          animate={{ y: 0 }}
          transition={{
            type: 'spring',
          }}
          onClick={() => {
            document.body.classList.toggle('light')
          }}
        ></motion.div>
        <div className="resume-wrapper">
          <h1 className="title">Résumé</h1>
          <div className="resume-detail">
            <h2>Zulfa Fatah Akbar Ahmad - Front-end Web Developer</h2>
            <ul>
              {dataLists.map((dataList, index) => {
                return (
                  <Data
                    content={dataList.content}
                    link={dataList.link}
                    name={dataList.name}
                  />
                )
              })}
            </ul>
            <h2>Skills</h2>
            <ul>
              <Skill type="JavaScript" content="React.js" />
              <Skill type="Web" content="HTML, CSS, Sass, Tailwind" />
              <Skill type="Design" content="Figma" />
            </ul>
            <h2>Education History</h2>
            <div className="timeline">
              <div className="container right">
                <div className="content">
                  <h3>2019 - Now</h3>
                  <p>Computer Engineering, Diponegoro University, GPA: 3,92</p>
                </div>
              </div>
              <div className="container right">
                <div className="content">
                  <h3>2016 - 2019</h3>
                  <p>SMA Negeri 1 Salatiga</p>
                </div>
              </div>
            </div>
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
      <li>
        <strong>{content}</strong>
        <a href={link} target="_blank" rel="noreferrer">
          {name}
        </a>
      </li>
    </>
  )
}

const Skill = ({ content, type }) => {
  return (
    <>
      <li>
        <strong>{type}</strong>
        <span>{content}</span>
      </li>
    </>
  )
}
