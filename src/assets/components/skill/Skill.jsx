import React from 'react'
import './Skill.css'
import Technical from '../technical/Technical'
import Professional from '../professional/Professional'
import { motion } from 'framer-motion'
import { fadeInn } from '../../variants/variants'

const Skill = () => {

  return (
    <div className='skill' id='skills'>
      <h1 className='skill-heading'>Skills</h1>
      <div className="Skill-content">
        <motion.div
          className="technical"
          variants={fadeInn('right')}
          initial='hidden'
          whileInView={'show'}
        >
          <h2>Technical Skills</h2>
          <Technical />
        </motion.div>
        <motion.div
          className="soft"
          variants={fadeInn('left')}
          initial='hidden'
          whileInView={'show'}
        >
          <h2>Professional Skills</h2>
          <Professional />
        </motion.div>
      </div>
    </div>
  )
}

export default Skill
