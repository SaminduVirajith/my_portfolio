import React from 'react'
import './About.css'
import svb from "../../images/Samindu.jpg"
import { RiCodeSSlashLine } from "react-icons/ri";
import { MdCastForEducation } from "react-icons/md"
import { motion } from 'framer-motion'
import { fadeInn } from '../../variants/variants'

const About = () => {
  return (
    <>
      <h1 className='about-heading'>About Me</h1>
      <div className='about' id='aboutme'>
        <motion.div
          className="about-image"
          variants={fadeInn('right')}
          initial='hidden'
          whileInView={'show'}
        >
          <img src={svb} loading="lazy" />
        </motion.div>

        <motion.div 
          className="about-content"
          variants={fadeInn('left')}
          initial='hidden'
          whileInView={'show'}
          >
          <p>
            Hello! I'm Samindu Virajith Bandara, a passionate frontend developer based in Sri Lanka. With a solid foundation in HTML, CSS, JavaScript, React, MySQL, and Tailwind CSS, I create engaging and user-friendly web interfaces. Currently, I'm an undergraduate student, continually expanding my knowledge and skills. I'm on a learning journey with Node.js and MongoDB to enhance my backend capabilities. My dedication to staying updated with the latest technologies ensures that I can deliver innovative solutions. I thrive on turning complex problems into simple, beautiful designs and love collaborating on projects that make a real impact.
          </p>
          <div className="content-box">
            <div className="education">
              <MdCastForEducation className='content-box-icon' />
              <h3>Education</h3>
              <p>Undergraduate BCAS Kandy Campus, Solent university.</p>
            </div>
            <div className="experiance">
              <RiCodeSSlashLine className='content-box-icon' />
              <h3>Experience</h3>
              <p>2 Years<sup>+</sup> Frontend Development. 10<sup>+</sup> Projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default About
