import React from 'react';
import './contacts.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp}from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contacts = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ew0xnlk', 'template_2xoult4', form.current, 'hsSgiXvGR4VQHVndn')
    e.target.reset();
  };

  return (
    <section id="contact">

      <div>
      <div className="title">  
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>{"daniel[dot]burlacu1983[at]yahoo[dot]se"}</h5>
            <a href="mailto:daniel.burlacu1983@yahoo.se" target="_blank" rel="noreferrer">Send a email</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Facebook</h5>
            <a href="https://m.me/dani.83.rsr" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Whatsapp</h5>
            <a href="https://api.whatsapp.com/send?phone=34617726453" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required/>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        <div>
        <a href="#" className="scroll__up">Scroll Up</a>
        </div>
      </div>    
      </div>
    </section>
  )
}

export default Contacts