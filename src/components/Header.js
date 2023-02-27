import React from 'react'
import './Header.css'

export default function Header({ aboutPath, testimonialsPath, expertisePath, contactPath }) {
  return (
    <>
      <div className='container--desktop-menu'>
        <div>
            <h1>Justice Firm</h1>
            <button className='button--white'>Free Evaluation</button>
        </div>
        <ul className='container-nav-links'>
            <li><a className='nav-link' href={aboutPath}>About</a></li>
            <li><a className='nav-link' href={testimonialsPath}>Testimonials</a></li>
            <li><a className='nav-link' href={expertisePath}>Our Expertise</a></li>
            <li><a className='nav-link' href={contactPath}>Contact</a></li>
        </ul>
      </div>

      <div className='container--mobile-menu'>
        <div className='mobile-menu--nav-bar'>
            <h1>Justice Firm</h1>
        </div>
        <ul className='container-nav-links'>
            <li><a className='nav-link' href={aboutPath}>About</a></li>
            <li><a className='nav-link' href={testimonialsPath}>Testimonials</a></li>
            <li><a className='nav-link' href={expertisePath}>Our Expertise</a></li>
            <li><a className='nav-link' href={contactPath}>Contact</a></li>
        </ul>
      </div>
      <img></img>
    </>
  )
}
