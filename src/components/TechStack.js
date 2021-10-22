import React from 'react'
import { toolLists } from './Lists'
import Tools from './Tools'

export default function TechStack() {
  return (
    <div className="tools" id="tools">
      <h2 className="subtitle">Tools & Languages</h2>
      <div className="tools-wrapper">
        {toolLists.map((toolList, index) => {
          return (
            <Tools
              key={index}
              title={toolList.title}
              image={toolList.image}
              alt={toolList.alt}
              className={toolList.className}
            />
          )
        })}
      </div>
    </div>
  )
}
