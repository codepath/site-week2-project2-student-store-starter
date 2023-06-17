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
                  <a href="https://www.linkedin.com/school/codepath-org/" > <img src={"https://www.transparentpng.com/download/linkedin/linkedin-shiny-icon-png-0.png"} alt="linked in logo" className="linkedin-logo-img"></img></a>
                  <a href="https://www.google.com/search?q=codepath+instagram&oq=codepath+instagram&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYQDIGCAMQRRhAMgYIBBBFGDwyBggFEEUYPDIGCAYQRRhA0gEIMjAxNGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#ip=1" > <img src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"} alt="insta logo" className="insta-logo-img"></img></a>
                  <a href="https://www.facebook.com/codepath.org/" ><img src={"https://www.transparentpng.com/download/facebook-logo-png/facebook-logo-free-download-transparent-3.png"} alt="facebook logo" className="facebook-logo-img"></img></a>
                  <a href="https://twitter.com/codepath?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" > <img src={"https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"} alt="twitter logo" className="twitter-logo-img"></img></a>
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