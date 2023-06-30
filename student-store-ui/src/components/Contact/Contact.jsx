import "./Contact.css"
import React from "react"

function Contact(){
    return(
        <div className="Contact-Me">
        {/* <h1>Contact Us!</h1> */}
        <div className="contact-info">
          <p>Contact Us</p>
          <p>Email: code@path.org</p>
          <p>Phone: 1-800-CODEPATH</p>
          <p>Address: 123 Fake Street, San Francisco, CA</p>
          <p>Social: Icons</p>
        </div>
          <div className="Contactimg">
            <img
              src="https://img.uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/contact-us-icon.png"
            />
          </div>
       
         </div>
    )
    }
export default Contact;