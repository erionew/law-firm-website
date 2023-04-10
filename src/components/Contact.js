import React from 'react'
import '../stylesheets/Contact.css'

export default function Contact() {
  return (
    <section id="contact" className='container--contact'>
      <iframe className="contact__map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3023.4189041524564!2d-73.98931768501205!3d40.730807044402546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQzJzUwLjkiTiA3M8KwNTknMTMuNyJX!5e0!3m2!1sen!2sus!4v1678295086704!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
      <form className='contact__form'>
        <h2>Contact Us</h2>
        <p>Donec vitae consectetur leo. Praesent imperdiet blandit elit, sodales viverra lacus efficitur vel. Integer <span className='text--gold'>nulla urna</span> faucibus eu erat eget, tempor vehicula arcu. </p>
        <input type="text" placeholder="Name" /> 
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone Number" />
        <textarea placeholder="Case details..."></textarea> 
        <button className='button--gold'>Send Request</button>
      </form>
    </section>
  )
}
