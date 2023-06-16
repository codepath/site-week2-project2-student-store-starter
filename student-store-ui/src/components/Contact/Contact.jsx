import React from "react";
import "./Contact.css"
import gmail from "../assets/gmail.svg"
import phone from "../assets/phone.svg"
import address from "../assets/address.svg"

export default function Contact(){
    return (
        <section id="contact">
            <div className="contact-info">
                <img className="contact-icon" src={gmail} alt="gmail icon"/>
                <p className="contact-text">anon@dnd.com</p>
            </div>
            <div className="contact-info">
                <img className="contact-icon" src={phone} alt="phone icon" />
                <p className="contact-text"> 1-800-JIEXY</p>
            </div>
            <div className="contact-info">
                <img className="contact-icon"  src={address} alt="gmail icon for mail contact info" />
                <p className="contact-text">001 Boogie Street, Land of Kings, XY</p>
            </div>
        </section>
    )
}