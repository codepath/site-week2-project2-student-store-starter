import * as React from "react"
import "./Contact.css"
import Navbar from "../Navbar/Navbar"

export default function Contact() {
  return (
    <div>
      <Navbar />
    <section id="contact" className="contact">
      
            <h2>Contact</h2>
            <div className="contact-info">
              <div className="contact-text">
              <ul className="info">
                <li><span className="label">Email: </span><span>mburrows@salesforce.com</span></li>
                <li><span className="label">Phone: </span><span>1-800-MARLEY!</span></li>
                <li><span className="label">Address: </span><span>123 Fake Street, San Francisco, CA</span></li>
            </ul>
              </div>
              <div className="contact-img">
                <img src="https://media.istockphoto.com/id/1286473980/photo/portrait-of-excited-black-woman-using-her-mobile-phone.jpg?s=612x612&w=0&k=20&c=k9ZDRuHLOriFja9mzoZUveAx9bZxDzUhU9Z3sF1RL34=" />
              </div>
            </div>
          </section>
    </div>
  )
}