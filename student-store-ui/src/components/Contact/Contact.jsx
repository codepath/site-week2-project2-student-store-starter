import React from 'react'
import "./Contact.css"

export default function Contact() {
  return(
    <>
    <h2 className="title">About Us</h2>
    <div className="content-div">
      <div className="contact-info-div">
        <p>Email: codepath.org</p>
        <p>Phone: 1-800-CODEPATH</p>
        <p>Address: 123 Fake Avenue, San Francisco, CA</p>
        <p>Socials: 😀 😃 😄 😁 </p>
      </div>
      <div className="contact-photo-div">
        <img className="media" src='https://images.unsplash.com/photo-1559030623-0226b1241edd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80'/>
      </div>

      <p></p>
    </div>
    </>
    
  )
}
