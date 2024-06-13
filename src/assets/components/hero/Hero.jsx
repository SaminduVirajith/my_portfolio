import React from 'react'
import './Hero.css'
import { Typewriter } from 'react-simple-typewriter'
import { FaGithub, FaFacebook, FaInstagramSquare} from "react-icons/fa"
import { BsLinkedin } from "react-icons/bs"
// import { BiLogoInstagramAlt } from "react-icons/bi"
import svb from "../../images/Samindu.jpg"

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-content">
        <h4>Hello,</h4>
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
        <p>Hi, I'm Samindu Virajith Bandara from Sri Lanka, a passionate web developer and designer. I create beautiful, responsive 
          websites and intuitive user experiences. Let's build something amazing together!
        </p>
        <div className="hero-btn">
          <a 
            href="https://github.com/SaminduVirajith"
            target='_blank'
            rel="noopener noreferrer"
          >
              <FaGithub className='social'/>
          </a>
          <a 
            href="https://www.linkedin.com/in/samindu-virajith-943070270/"
            target='_blank'
            rel="noopener noreferrer"
          >
            <BsLinkedin className='social'/>
          </a>
          <a 
            href=""
            target='_blank'
            rel="noopener noreferrer"
          >
          <FaFacebook className='social'/>
          </a>
          <a 
            href=""
            target='_blank'
            rel="noopener noreferrer"
          >
          <FaInstagramSquare className='social'/>
          </a>
        </div>
        <button className='cv'>Download CV</button>
      </div>
      <div className="hero-img">
        <img src={svb} alt="owner image" />
      </div>
    </div>
  )
}

export default Hero
