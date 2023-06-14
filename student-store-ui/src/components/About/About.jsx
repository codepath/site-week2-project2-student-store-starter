import * as React from "react"
import "./About.css"
import Logo from "../Logo/Logo";

export default function About(){
    return(
        <div id="about">
            <div className="about-info">
                <p>The codepath student store offers great products at great prives from a great team and for a great cause. <br />
                    We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place. <br />
                    All proveeds go towards bringing high quality CS education to college students around the country.
                </p>
            </div>
            <Logo prop={"about-logo"} />  
 </div>

    )
}