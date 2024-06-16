import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="logo"><span> &lt; / </span>SVB &gt;</h3>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <li>
          <Link
            activeClass='active'
            to='hero'
            smooth={true}
            offset={-200}
            duration={100}
            spy={true}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='about' 
            smooth={true}
            offset={-300} 
            duration={100} 
            spy={true}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link 
            activeClass='active' 
            to='skill' 
            smooth={true} 
            offset={-200} 
            duration={100} 
            spy={true}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link 
            activeClass='active' 
            to='project' 
            smooth={true} 
            offset={-200} 
            duration={100} 
            spy={true}
          >
            Projects
          </Link>
        </li>
      </ul>
      <Link 
          id='contact' 
          to='contactme' 
          smooth={true} 
          offset={-200} 
          duration={100} 
          spy={true}
      >
        Contact me
      </Link>
      <button 
        className="mobile-menu-icon" 
          onClick = {() => 
            setIsMobile(!isMobile)}>
              {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
