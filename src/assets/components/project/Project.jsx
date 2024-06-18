import React from 'react'
import './Project.css'
import hms from '../../images/hms.png'
import bakery from '../../images/bakery.png'
import portfolio from '../../images/portfolio.png'
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { motion } from 'framer-motion'
import { fadeInn } from '../../variants/variants'

const Project = () => {
  return (

    <div className='project' id='projects'>
      <h1>Latest Projects</h1>
      <div className="container">
        <motion.a 
          href=""
          target='_blank'
          rel="noopener noreferrer"
          variants={fadeInn('up')}
          initial='hidden'
          whileInView={'show'}
        >
          <div className="project-content">
            <img src={hms} loading='lazy' />
            <div className="text">
              <h3>Hotel Booking System</h3>
              <IoMdCheckmarkCircleOutline className='check-icon' />
              <p>Check out my Github Account for more details</p>
            </div>
          </div>
        </motion.a>
        <motion.a 
          href="https://github.com/SaminduVirajith/BreezyBite_Bakery"
          target='_blank'
          rel="noopener noreferrer"
          variants={fadeInn('down')}
          initial='hidden'
          whileInView={'show'}
        >
          <div className="project-content">
            <img src={bakery} loading='lazy' />
            <div className="text">
              <h3>Bakery Web Site</h3>
              <IoMdCheckmarkCircleOutline className='check-icon' />
              <p>Check out my Github Account for more details</p>
            </div>
          </div>
        </motion.a>
        <motion.a 
          href=""
          target='_blank'
          rel="noopener noreferrer"
          variants={fadeInn('up')}
          initial='hidden'
          whileInView={'show'}
        >
          <div className="project-content">
            <img src={portfolio} loading='lazy' />
            <div className="text">
              <h3>Portfolio Web Site</h3>
              <IoMdCheckmarkCircleOutline className='check-icon' />
              <p>Check out my Github Account for more details</p>
            </div>
          </div>
        </motion.a>
      </div>
    </div>
  )
}

export default Project
