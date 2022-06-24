import * as React from "react"
import "./About.css"

export default function About() {
    return (
        <div className="about" id="About">
            <h3>About</h3>
            <div className="aboutContent">
                <div className="text">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className="aboutImage">
                    <img src="/images/about.svg" alt="aboutImage"></img>
                </div>
            </div>
        </div>
        
    );
}