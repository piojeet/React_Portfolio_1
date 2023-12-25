import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__option__icon' />
            <h4>Email</h4>
            <h5>example@gmail.com</h5>
            <a href="milto:example@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option__icon' />
            <h4>Messanger</h4>
            <h5>example</h5>
            <a href="https://m.me/priyjeet.manjhi">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__option__icon' />
            <h4>Whatsapp</h4>
            <h5>+919876543210</h5>
            <a href="https://api.whatsapp.com/send?phone=+919876543210">Send a message</a>
          </article>

        </div>
        {/* END OF CONTACT OPTION */}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" cols="30" rows="7" placeholder='message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
export default Contact
