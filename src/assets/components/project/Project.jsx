import React from 'react'
import './Project.css'
import hms from '../../images/hms.png'
import bakery from '../../images/bakery.png'
import portfolio from '../../images/portfolio.png'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Project = () => {
  return (

    <div className='project'>
      <h1>Latest Projects</h1>
      <div className="container">
        <a href=""
           target='_blank'
           rel="noopener noreferrer"
        >
          <div className="project-content">
            <img src={hms} loading='lazy' />
            <div className="text">
              <h3>Hotel Booking System</h3>
              <IoMdCheckmarkCircleOutline className='check-icon' />
              <p>Check out my Github Account for more details</p>
            </div>
          </div>
        </a>
        <a href="https://github.com/SaminduVirajith/BreezyBite_Bakery"
           target='_blank'
           rel="noopener noreferrer"
        >
          <div className="project-content">
            <img src={bakery} loading='lazy' />
            <div className="text">
              <h3>Bakery Web Site</h3>
              <IoMdCheckmarkCircleOutline className='check-icon' />
              <p>Check out my Github Account for more details</p>
            </div>
          </div>
        </a>
        <a href=""
           target='_blank'
           rel="noopener noreferrer"
        >
          <div className="project-content">
            <img src={portfolio} loading='lazy' />
            <div className="text">
              <h3>Portfolio Web Site</h3>
              <IoMdCheckmarkCircleOutline className='check-icon' />
              <p>Check out my Github Account for more details</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Project
