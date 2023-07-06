import React from "react";
import './Contact.css'

function Contact() {
  return (
    <div className="contact-us">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <ul className="contacts-container">
        <li className="contacts">
          <span> Email: </span>
          <span> gebeya@gmail.com </span>
        </li>
        <li className="contacts">
          <span> Phone: </span>
          <span> 1-800-GEBEYA </span>
        </li>
        <li className="contacts">
          <span> Adress: </span>
          <span> 123 Fake Street, Addis Ababa, Ethiopia </span>
        </li>
        <li className="contacts">
          <span> Socials: </span>
          <span>
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-instagram"></a>
            <a href="#" className="fa fa-linkedin"></a>


          </span>
        </li>
      </ul>
    <div>
      <img src='https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg'/>

    </div>
    </div>
  );
}

export default Contact;
