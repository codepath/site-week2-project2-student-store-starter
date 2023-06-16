import * as React from "react"
import "./About.css"

export default function About(){

    return(

        <div className="About" id="About">
        <div className="about-content">

          <h2 className="about-title">About Us</h2>
          <div className="about-grid">
            <div className="about-paragraph">
              <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
              <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
              <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
            </div>

            <div className="codepathLogo">

            <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf" alt="codepath large"/>

            </div>



          </div>



        </div>




      </div>


    )

}

