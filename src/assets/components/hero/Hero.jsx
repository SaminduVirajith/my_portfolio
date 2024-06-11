import React from 'react'
import './Hero.css'
import { Typewriter } from 'react-simple-typewriter'
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-content">
        <h4>Hello</h4>
        <h1>I'm <span>Samindu</span> </h1>
        <h1 >
          I'm a{' '}
          <span style={{ color: 'red', fontWeight: 'bold' }}>
            <Typewriter
              words={['Web Designer.', 'Web Developer.']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={800}
            />
          </span>
        </h1>
        <p>Hi, I'm Samindu Virajith, a passionate web developer and designer. I create beautiful, responsive websites and intuitive user experiences. Let's build something amazing together!</p>
        <div className="hero-btn">
          <FaGithub className='social'/>
          <BsLinkedin className='social'/>
        </div>
      </div>
      <div className="hero-img">
      </div>
    </div>
  )
}

export default Hero
