import React from 'react'
import './Skill.css'
import Technical from '../technical/Technical';
import Professional from '../professional/Professional';

const Skill = () => {

  return (
    <div  className='skill'>
      <h1 className='skill-heading'>Skills</h1>
      <div className="Skill-content">
        <div className="technical">
          <h2>Technical Skills</h2>
          <Technical />
        </div>
        <div className="soft">
          <h2>Professional Skills</h2>
          <Professional />
        </div>
      </div>
    </div>
  )
}

export default Skill
