import React from 'react'
import '../stylesheets/Header.css'
import balanceIcon from '../pics/balance.png'

export default function Header({ aboutPath, testimonialsPath, expertisePath, contactPath }) {

  return (
    <header className='container--header'>
      <div className='container--desktop-menu'>
        <div>
            <h1>Justice Law Firm<span className='text--gold'>.</span></h1>
            <button className='button--white'>Free Evaluation<img src={balanceIcon}></img></button>
        </div>
        <ul className='container--nav-links'>
            <li><a className='nav-link' href={aboutPath}>About</a></li>
            <li><a className='nav-link' href={testimonialsPath}>Testimonials</a></li>
            <li><a className='nav-link' href={expertisePath}>Our Expertise</a></li>
            <li><a className='nav-link' href={contactPath}>Contact</a></li>
        </ul>
      </div>

      <div className='container--mobile-menu'>
        <div className='mobile--nav-bar'>
            <h1>Justice Law Firm<span className='text--gold'>.</span></h1>
            <i className="fa-solid fa-bars" onClick={() => {
              document.querySelector('.mobile--nav-links').classList.toggle('active')
            }
            }></i>
        </div>
        <ul className='mobile--nav-links'>
            <li><a className='nav-link' href={aboutPath}>About</a></li>
            <li><a className='nav-link' href={testimonialsPath}>Testimonials</a></li>
            <li><a className='nav-link' href={expertisePath}>Our Expertise</a></li>
            <li><a className='nav-link' href={contactPath}>Contact</a></li>
            <button className='button--white'>Free Evaluation<img src={balanceIcon}></img></button>
            
        </ul>
      </div>
      <div className='container--header-img'>
        <h2 className='header-img--caption'>Justice Oriented.</h2>
        <p className='header-img--sub-caption'>We're here to help you.</p>
        <button className='button--white'>Free Evaluation<img src={balanceIcon}></img></button>
      </div>
    </header>
  )
}
