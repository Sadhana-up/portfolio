import React from 'react'
import './contacts.css'
import { MdOutlineEmail } from 'react-icons/md'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contacts = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_xyz', // Replace with your EmailJS service ID
        'template_xyz', // Replace with your EmailJS template ID
        form.current,
        'public_key' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text)
          alert('Message sent successfully!')
        },
        (error) => {
          console.log(error.text)
          alert('Failed to send the message. Please try again.')
        }
      )

    e.target.reset()
  }

  return (
    <section id="contacts">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h6>contact@sadhanauprety.com.np</h6>
            <a href="mailto:contact@sadhanauprety.com.np">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contacts