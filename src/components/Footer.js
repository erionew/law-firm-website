import React from 'react'
import '../stylesheets/Footer.css'

export default function Footer() {
  return (
    <footer>
      <div>
        <h3>Justice Law Firm<span className='text--gold'>.</span></h3>
        <p>Aenean a lectus pharetra, tempus risus tempor, viverra ipsum.</p>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>
      <div>
        <h3>Contact</h3>
        <p>353 South West St<br />New York, NY 10012</p>
        <p>justice@lawfirm.com <br />&#40;888&#41; 888 - 8888</p>
      </div>
      <div>
        <h3>Hours</h3>
        <div className='container--hours'>
            <div>
                <p>Monday</p>
                <p>Tuesday</p>
                <p>Wednesday</p>
                <p>Thursday</p>
                <p>Friday</p>
                <p>Saturday</p>
                <p>Sunday</p>
            </div>
            <div>
                <p>9AM - 5PM</p>
                <p>9AM - 5PM</p>
                <p>9AM - 5PM</p>
                <p>9AM - 5PM</p>
                <p>9AM - 5PM</p>
                <p>9AM - 12PM</p>
                <p>Closed</p>
            </div>
        </div>
      </div>
    </footer>
  )
}
