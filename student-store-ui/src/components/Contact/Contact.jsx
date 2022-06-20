import React from 'react'
import "./Contact.css"

export default function Contact() {
  return(
    <div className= "contact">
    <div className="contact-content">
    <h3 className="contact-title">Contact Us</h3>
      <div className="contact-summary">
        <ul>
          <li>
          <span class="contact-label">Email:</span>
          <span class="contact-label">code@path.org</span>
          </li>
          <li>
          <span class="contact-label">Phone:</span>
          <span class="contact-label">1-800-CODEPATH</span>
          </li>
          <li>
          <span class="contact-label">Address:</span>
          <span class="contact-label">123 Fake Street, San Francisco, CA</span>
          </li>
          <li>
          <span class="contact-label">Socials: </span>
          <span class="contact-socials"></span>
          </li>
        </ul>
        <div className="contact-photo">
        <img className="contact-media" src='https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg'/>
      </div>
      </div>
    </div>
    </div>
    
  )
}
