import * as React from "react"

function About(){
    return(
        <div className="About-container">
            <div className="About">
                <h1>About Us</h1>
                <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
                <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
                <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
            </div>
            <img className="About-img"src = "https://www.deepit.com/image/about-us-vector.png"/>
            <img className="About-img2" src = "https://png.pngtree.com/png-clipart/20210509/original/pngtree-world-graphic-day-bright-cartoon-light-bulb-png-image_6274173.png"/>
        </div>
    )
}
export default About