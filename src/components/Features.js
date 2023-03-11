import React from 'react'
import '../stylesheets/Features.css'

export default function Features() {
  return (
    <div id="features" className='container--some-features'>
      <div>
        <i class="fa-solid fa-house"></i>
        <h3>Real Estate</h3>
        <p>Suspendisse rhoncus, velit in aliquet tristique.</p>
      </div>

      <div>
        <i class="fa-solid fa-wheelchair-move"></i>
        <h3>Workplace Injury</h3>
        <p>A nisi id, posuere vestibulum sem. </p>
      </div>

      <div>
        <i class="fa-solid fa-person"></i>
        <h3>Personal Jurisdiction</h3>
        <p>Duis efficitur pellentesque ante, vel.</p>
      </div>
    </div>
  )
}
