import React from 'react'
import './About.css'
import buildingImg from '../pics/building.jpg'
import meetingImg from '../pics/meeting.jpg'
import signingImg from '../pics/signing.jpg'
export default function About() {
  return (
    <div className='container--about'>
        <div>
            <h2>Experienced Attourneys.<br />Professional Approach.</h2>
            <p className='p--has-dropcap'>Praesent vulputate quam felis, sed iaculis diam dignissim a. Duis faucibus nulla in <span className='text--gold'>ullamcorper suscipit</span> elit lacinia, quis scelerisque dolor facilisis. Curabitur ut arcu nunc. Praesent at leo eget orci aliquam rhoncus non id tellus. Duis suscipit porttitor metus. Morbi faucibus feugiat mauris, ornare varius ligula semper ac. Nunc ullamcorper suscipit viverra. Suspendisse imperdiet turpis et lorem molestie, eu pulvinar metus congue. Integer ut diam efficitur, rhoncus mi nec, elementum turpis. Nulla sed nulla vel enim pellentesque rutrum a eget augue. Cras sit amet sollicitudin urna, vel ultrices sem.</p>
        </div>
        <div className='container--image-row'>
            <div className='image--container'><img src={meetingImg}></img></div>
            <div className='image--container'><img src={buildingImg}></img></div>
            <div className='image--container'><img src={signingImg}></img></div>
        </div>
        <p>Nam lectus enim, consequat non faucibus a magna. Nullam aliquam malesuada sem, vitae egestas augue elementum quis. Cras non imperdiet ante, sit amet lobortis quam. Phasellus in nibh non felis sagittis condimentum. Phasellus auctor, nisl nec finibus fermentum, nisi quam dictum turpis, eget dignissim neque ligula sit amet nibh. Integer egestas accumsan urna, sit amet facilisis quam rutrum id. Cras fringilla cursus aliquam. Donec eu ex nisl.</p>

    </div>
  )
}
