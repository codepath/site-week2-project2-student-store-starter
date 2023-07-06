
import React, { useState } from 'react';
import './Hero.css'

function Hero() {
    return (
        <div className='hero'>
          <h1 className='intro'> Welcome!</h1> 
          <div>
            <p className='description'>
              You're one stop shop for all that you need. With just a click of a button, you can purchase so much.
            </p>
            <img className='hero-image' src='https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg'/>
          </div> 
          
        </div>
        
    )
}

export default Hero



