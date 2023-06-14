import * as React from "react"
import "./Contact.css"

export default function Contact() {
  return (
    <div className="contact-container">
        <h3>Contact Us</h3>

        <div className="contact-info">
            <ul class="info">
                <li>
                    <span class="label">Email:</span>
                    <span>code@path.org</span>
                </li>
                <li>
                    <span class="label">Phone:</span>
                    <span>1-800-CODEPATH</span>
                </li>
                <li>
                    <span class="label">Address:</span>
                    <span>123 Fake Street, San Francisco, CA</span>
                </li>
            </ul>
            <div className="contact-info-img"></div>
        </div>
    </div>
  )
}
