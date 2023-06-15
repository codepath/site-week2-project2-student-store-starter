import * as React from "react"
import "./About.css"

import logo from "../../assets/logo.png"

export default function About() {
  return (
    <div className="about-container" id="About">
        <h3>About</h3>

        <div className="about-information">
            <p>
            The codepath student store offers great products at great prices from a great team and for a great cause. 
            <br />
            <br />
            We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.
            <br />
            <br />
            All proceeds go towards bringing high quality CS education to college students around the country.
            </p>
            <div className="logo-image">
                <img src={logo} alt="" />
            </div>
        </div>
    </div>
  )
}
