import * as React from "react"
import "./About.css"
import codepathLogo from '../codepath_icon.webp'

export default function About() {
  return (
    <div className="About">
    
      <div className="about-container">

        <div className = "about-texts">
            <p className = "about-text1">The codepath student store offers great products at great prices from a great team and for a great cause.</p>
            <p className = "about-text2">We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
            <p className = "about-text3">All proceeds go towards bringing high quality CS education to college students around the country.</p>
        </div>
        <div className ="codepath-logo">
            <CodePathIcon/>
        </div>
      </div>
    </div>
  )
}



export function CodePathIcon() {
    return (
      <div className="codepath-icon">
          <img className = "logo-about" src={codepathLogo} alt = "Logo for CodePath"/>
      </div>
    )
  }