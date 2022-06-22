import * as React from "react"
import "./Contact.css"

export default function Contact() {
    return (
        <div className="contact">
            <h3>Contact</h3>
            <div className="contactContent">
                <div className="contactInfo">
                    <ul>
                        <li>Email: </li>
                        <li>Phone: </li>
                        <li>Address: </li>
                        <li>Socials: </li>
                    </ul>
                </div>

                <div className="contactImage">
                    <img src="/images/home.svg" alt="contactImage"></img>
                </div>
            </div>
        </div>
        
    );
}