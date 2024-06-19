import React, { useState } from 'react'
import './ContactMe.css'
import { IoIosMail } from "react-icons/io"
import { motion } from 'framer-motion'
import { fadeInn } from '../../variants/variants'

const ContactMe = () => {

  const [formMessage, setFormMessage] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = data

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/samindu/google_sheets/IgMojZAJpgOxNyEF?tabId=Sheet1",
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify([
            [name, email, subject, message, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json()
      setData({ ...data, name: "", email: "", subject: "", message: "" })
      setFormMessage("Message sent successfully!");

    } catch (error) {
      alert(error);
    }
    setTimeout(() => {
      setFormMessage("");
    }, 5000);
  };

  return (
    <div id='contactme'>
      <h1 className='contact-title'>Contact Me</h1>
      <section>
        <motion.div
          className="contact-text"
          variants={fadeInn('right')}
          initial='hidden'
          whileInView={'show'}
        >
          <h1>Let's Chat.</h1>
          <h1>Tell me about your project.</h1>
          <p className='contact-text-phara'>Let's create something together 🤟</p>
          <div className="contact-text-mail">
            <IoIosMail className='mail-icon' />
            <div className="contact-text-mail-text">
              <p>Mail me at</p>
              <p>samidu.virajith@gmail.com</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="contact-form"
          variants={fadeInn('left')}
          initial='hidden'
          whileInView={'show'}
        >
          <h2>Send me a message 🚀</h2>
          <form
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder='Full Name'
              required
              value={name}
              name='name'
              onChange={handleChange}
            />
            <br />
            <input
              type="email"
              placeholder='Email'
              required
              value={email}
              name='email'
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              placeholder='Subject'
              required
              value={subject}
              name='subject'
              onChange={handleChange}
            />
            <br />
            <textarea
              value={message}
              required
              placeholder='Type your message here .........'
              name='message'
              onChange={handleChange}
            />
            <button 
              type='submit'
            >
              Send Message
            </button>
          </form>
          {formMessage && <p className='formMessage'>{formMessage}</p>}
        </motion.div>
      </section>
    </div>
  )
}

export default ContactMe
