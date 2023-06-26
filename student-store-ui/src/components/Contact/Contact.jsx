import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    //returns the contact information info
    <div className="contact-box">
      <div>
        <div className="content">
          <h3>Contact Us</h3>
          <div className="summary">
            <ul className="info">
              <li className="list">
                <span className="label">Email:</span>
                <span>code@path.org</span>
              </li>
              <li className="list">
                <span className="label">Phone:</span>
                <span>1-800-CODEPATH</span>
              </li>
              <li>
                <span className="label">Address:</span>
                <span>123 Fake Street, San Francisco, CA</span>
              </li>
            </ul>
            <div className="media">
              <img src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
