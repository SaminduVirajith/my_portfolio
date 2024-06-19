import React from 'react'
import './Footer.css'
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6"
import facebook from '../../images/facebook.png'
import intergram from '../../images/instergram.webp'
import github from '../../images/github.jpg'
import linkedin from '../../images/linkedin.png'

const Footer = () => {
    return (
        <div className='footer'>
            <hr />
            <div className="footer-content">
                <section className='footer-about'>
                    <h3>About Me</h3>
                    <p>Hi, I'm Samindu Virajith Bandara from Sri Lanka, a passionate web developer and designer. I create beautiful, responsive websites and intuitive user experiences. Let's build something amazing together!</p>
                </section>
                <section className='footer-links'>
                    <h3>Quick Links</h3>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#aboutme">About Me</a></p>
                    <p><a href="#skills">Skills</a></p>
                    <p><a href="#projects">Projects</a></p>
                </section>
                <section className='footer-contact'>
                    <h3>Contact</h3>
                    <p> <IoIosMail style={{ fontSize: '20px' }} className='footer-contact-icon' /> Email - samidu.virajith@gmail.com</p>
                    <p> <FaPhoneVolume className='footer-contact-icon' /> Phone - 077-1785752</p>
                    <p> <FaLocationDot className='footer-contact-icon' /> Location - No: 252/1 Yatihalagala, Pallegama, Halloluwa</p>
                </section>
                <section className='footer-social'>
                    <h3>Connect with Me</h3>
                    <a
                        href='https://web.facebook.com/samidu.samidu.5817'
                        target='_blank'
                        rel="noopener noreferrer"
                    >

                        <img src={facebook} alt="" />
                    </a>
                    <a
                        href="https://github.com/SaminduVirajith"
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <img src={github} alt="" />
                    </a>
                    <a
                        href="https://www.instagram.com/samiduvirajith/"
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <img src={intergram} alt="" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/samindu-virajith-943070270/"
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <img src={linkedin} alt="" />
                    </a>
                </section>
            </div>

            <p className="copyright">All Right Reserved | Copyright 2024 | Web Solution by SVB</p>

        </div>
    )
}

export default Footer
