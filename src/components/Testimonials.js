import React from 'react'
import '../stylesheets/Testimonials.css'
import testimonialImg from '../pics/testimonials.jpg'
import anthonyImg from '../pics/anthony.jpg'
import gabriellaImg from '../pics/gabriella.jpg'
import theresaImg from '../pics/theresa.jpg'

export default function Testimonials() {
  return (
    <div id="testimonials">
    <h2>What Our Clients Say</h2>
    <div className='container--testimonials'>
      <div className='container--testimonials__img'>
          <img src={testimonialImg} alt="man signing document"></img>
          <p className='testimonials__img-caption'>"They answered any question I had."</p>
      </div>
      <div>
        <div className= 'container--testimonial-gallery'>
            <div className='testimonial'>
                <img className='testimonial__icon' src={gabriellaImg} alt="woman smiling"></img>
                <div className='testimonial__bubble'>
                    <p className='testimonial__quote'>Curabitur gravida efficitur nisl. In consequat libero magna, sit amet gravida diam ornare!</p>
                    <p className='testimonial__author'>Gabriella McKay</p>
                </div>
            </div>

            <div className='testimonial'>
                <img className='testimonial__icon' src={theresaImg} alt="woman smiling"></img>
                <div className='testimonial__bubble'>
                    <p className='testimonial__quote'>Donec laoreet felis in nunc congue mollis. Aenean dapibus sagittis mauris.</p>
                    <p className='testimonial__author'>Theresa Coyne</p>
                </div>
            </div>

            <div className='testimonial'>
                <img className='testimonial__icon' src={anthonyImg} alt="man smiling"></img>
                <div className='testimonial__bubble'>
                    <p className='testimonial__quote'>Sed id ex eu libero porttitor rhoncus sit amet sit amet justo.</p>
                    <p className='testimonial__author'>Anthony Sandoval</p>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}
