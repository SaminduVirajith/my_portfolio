import React, { useState } from 'react'
import './ContactMe.css'
import { IoIosMail } from "react-icons/io";

const ContactMe = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");

  function handleSubmit(event){
    event.preventDefault();

    setComment("");
    setName("");
    setSubject("");
    setEmail("");
  }

  const submitForm = (e) =>{
    if(!comment ||!name ||!subject || !email){
      alert("Pleace fill the all field");
    }
    else{
      alert("Form Submited!");
    }
  }

  return (
    <div id='contactme'>
      <h1 className='contact-title'>Contact Me</h1>
      <section>
        <div className="contact-text">
            <h1>Let's Chat.</h1>
            <h1>Tell me about your project.</h1>
            <p className='contact-text-phara'>Let's create somthing together 🤟</p>
            <div className="contact-text-mail">
              <IoIosMail className='mail-icon'/>
              <div className="contact-text-mail-text">
                <p>Mail me at</p>
                <p>samidu.virajith@gmail.com</p>
              </div>
            </div>
        </div>
        <div className="contact-form">
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
              <br/>
              <input 
                type="email"
                placeholder='E-mail'
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
                placeholder='Type Your Comment Here'
                raws = "10"
                onChange={event => 
                  setComment(event.target.value)
                }
              />
              <button type='submit'
                onClick={submitForm}
              >Send Message</button>
            </form>
        </div>
      </section>
    </div>
  )
}

export default ContactMe
