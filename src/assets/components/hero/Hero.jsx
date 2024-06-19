import React from 'react'
import './Hero.css'
import { Typewriter } from 'react-simple-typewriter'
import { FaGithub, FaFacebook, FaInstagramSquare } from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"
import svb from "../../images/Samindu.jpg"
import CountUp from 'react-countup';

const Hero = () => {



  return (
    <div id='home'>
      <div className='hero'>
        <div className="hero-content">
          <h3>Hello,</h3>
          <h1>It's me <span className='name'>Samindu</span> </h1>
          <h1>
            I'm a {' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              <Typewriter
                words={['Web Designer.', 'Web Developer.']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={800}
              />
            </span>
          </h1>
          <p>Hi, I'm Samindu Virajith Bandara from Sri Lanka, a passionate web developer and designer. I create beautiful,
            responsive websites and intuitive user experiences. Let's build something amazing together!
          </p>

          <div className="hero-btn">
            <a
              href="https://github.com/SaminduVirajith"
              target='_blank'
              rel="noopener noreferrer"
            >
              <FaGithub className='social social1' />
            </a>
            <a
              href="https://www.linkedin.com/in/samindu-virajith-943070270/"
              target='_blank'
              rel="noopener noreferrer"
            >
              <BsLinkedin className='social social2' />
            </a>
            <a
              href="https://web.facebook.com/samidu.samidu.5817"
              target='_blank'
              rel="noopener noreferrer"
            >
              <FaFacebook className='social social3' />
            </a>
            <a
              href="https://www.instagram.com/samiduvirajith/"
              target='_blank'
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className='social social4' />
            </a>
          </div>
          <button className='cv'>Download CV</button>
        </div>
        <div className="hero-img">
          <img src={svb} alt="owner image" />
        </div>
      </div>
      <div className="counter">
        <div className="counert-single">
          <CountUp start={0} end={2} duration={3} className='numbers'/>
          <p>Year Of Experience</p>
        </div>
        <div className="counert-single">
          <CountUp start={0} end={12} duration={3} className='numbers'/>
          <p>Projects Completed</p>
        </div>
        <div className="counert-single">
          <CountUp start={0} end={8} duration={3} className='numbers'/>
          <p>Technologies Mastered</p>
        </div>
        <div className="counert-single">
          <CountUp start={0} end={350} duration={3} className='numbers'/>
          <p>Code Commits</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
