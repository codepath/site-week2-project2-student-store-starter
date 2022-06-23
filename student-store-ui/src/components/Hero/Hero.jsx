import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='header'>
        <div className='headerTitle'>
            <h1>Welcome! <br/>
                Find Your <span>Merch</span></h1>
            <hr align="left"/>
            <p>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
        </div>
    </div>
  )
}

export default Hero