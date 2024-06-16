import React from 'react'
import './ContactMe.css'

const ContactMe = () => {
  return (
    <div id='contactme'>
      <h1 className='contact-title'>Contact Me</h1>
      <section>
        <div className="contact-text">
            <h1>Let's Chat.</h1>
            <h1>Tell me about your project.</h1>
            <p>Let's create somthing together 🤟</p>
        </div>
        <div className="contact-form">
            <h2>Send me a message 🚀</h2>
            <form action="POST"></form>
        </div>
      </section>
    </div>
  )
}

export default ContactMe
