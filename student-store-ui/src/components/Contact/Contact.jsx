import * as React from "react"
import "./Contact.css"
import person from '../person.svg'

export default function Contact() {
  return (
    <div className="Contact">
        <div className = "text-container">
            <ul>
                <li className = "info">
                    <h3>Email:</h3> <p className = "personal-info">code@path.org</p>
                </li>
                <li className = "info">
                    <h3>Phone:</h3> <p className = "personal-info">1-800-CODEPATH</p>
                </li>
                <li className = "info">
                    <h3>Address:</h3> <p className = "personal-info">123 Fake Street, San Francisco, CA</p>
                </li>
                <li className = "info">
                    <h3>Socials:</h3> <p className = "personal-info"><i class="fa-brands fa-linkedin"></i> <i class="fa-brands fa-facebook-square"></i> <i class="fa-brands fa-youtube-square"></i></p>
                </li>
            </ul>
            <div className = "image-container">
                <img className ="happy-person" src={person} alt="Happy Person" />
            </div>
        </div>

    </div>
  )
}