import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
    <div className="about" id='about'>
    <div className="content">
      
      <div className="summary">
        <div className='text'>
          <h2>About Codepath</h2>
          <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
          <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
          <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
        </div>
        <div className="media">
          <img src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg" alt="codepath logo"/>
        </div>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default About