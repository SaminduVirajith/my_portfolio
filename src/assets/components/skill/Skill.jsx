import React from 'react'
import './Skill.css'
import { useInView } from 'react-intersection-observer'
import ProgressBar from '../progressBar/ProgressBar'
import { TiHtml5 } from "react-icons/ti"
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from "react-icons/io5"
import { FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiMysql, SiMongodb } from "react-icons/si"


const Skill = () => {

  const { ref, inView } = useInView({
    threshold: 0.5, 
    triggerOnce: true, 
  });

  return (
    <div ref={ref} className='skill'>
      <h1 className='skill-heading'>Skills</h1>
      <div className="Skill-content">
        <div className="technical">
          <h2>Technical Skills</h2>
          <h4><TiHtml5 /> HTML</h4>
            <ProgressBar 
              progress={inView ? 95 : 0} 
            />
          <h4><IoLogoCss3 /> Css</h4>
            <ProgressBar 
              progress={inView ? 80 : 0} 
            />
          <h4><IoLogoJavascript /> JavaScript</h4>
            <ProgressBar 
              progress={inView ? 52 : 0} 
            />
            <h4><FaReact /> React Js</h4>
            <ProgressBar 
              progress={inView ? 60 : 0} 
            />
            <h4><RiTailwindCssFill /> Tailwind Css</h4>
            <ProgressBar 
              progress={inView ? 80 : 0} 
            />
            <h4><IoLogoNodejs /> Node Js</h4>
            <ProgressBar 
              progress={inView ? 30 : 0} 
            />
            <h4><SiMysql /> MySQL</h4>
            <ProgressBar 
              progress={inView ? 72 : 0} 
            />
            <h4><SiMongodb /> MongoDB</h4>
            <ProgressBar 
              progress={inView ? 35 : 0} 
            />
        </div>
        <div className="soft">
          
          <h2>Soft Skills</h2>
        </div>
      </div>
    </div>
  )
}

export default Skill
