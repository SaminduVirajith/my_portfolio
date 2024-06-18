import React, { useState } from 'react'
import './ContactMe.css'
import { IoIosMail } from "react-icons/io"
import { motion } from 'framer-motion'
import { fadeInn } from '../../variants/variants'

const ContactMe = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (name && email && subject && comment) {
      setFormMessage("Message sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setComment("");
    }
    setTimeout(() => {
      setFormMessage("");
    }, 5000);
  }

 
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
              onChange={event =>
                setName(event.target.value)
              }

            />
            <br />
            <input
              type="email"
              placeholder='Email'
              required
              value={email}
              onChange={event =>
                setEmail(event.target.value)
              }
            />
            <br />
            <input
              type="text"
              placeholder='Subject'
              required
              value={subject}
              onChange={event =>
                setSubject(event.target.value)
              }
            />
            <br />
            <textarea
              value={comment}
              required
              placeholder='Type your message here .........'
              raws="10"
              onChange={event =>
                setComment(event.target.value)
              }
            />
            <button type='submit'>
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
