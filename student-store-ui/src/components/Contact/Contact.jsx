import * as React from "react"
import "./Contact.css"

export default function Contact(){
  return (
    <div id="Contact" className="contact">
        <div className="content">
          <h3>Contact Us</h3>
          <div className="summary">
            <ul className="info">
              <li>
                <span className="label">Email:</span>
                <span>code@path.org</span>
              </li>
              <li>
                <span className="label">Phone:</span>
                <span>1-800-CODEPATH</span>
              </li>
              <li>
                <span className="label">Address:</span>
                <span>123 Fake Street, San Francisco, CA</span>
              </li>
              <li>
                <span>Socials: </span> 
                <span className="socials">
                    <img src={"https://www.transparentpng.com/download/facebook-logo-png/facebook-logo-free-download-transparent-3.png"} alt="facebook logo" className="facebook-logo-img"></img>
                    <img src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"} alt="insta logo" className="insta-logo-img"></img>
                    <img src={"https://www.transparentpng.com/download/linkedin/linkedin-shiny-icon-png-0.png"} alt="linked in logo" className="linkedin-logo-img"></img>
                    <img src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"} alt="twitter logo" className="twitter-logo-img"></img>
                </span>
              </li>
            </ul>
            <div className="media">
              <img src={"https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg"} alt="codepath large"></img>
            </div>
          </div>
        </div>
        {/* <Outlet /> */}
      </div>
  )
}