import React, { useState } from "react";
import meta from "./meta.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import linkedin from "./linkedin.svg";
import "./Contact.css";

export default function Contact() {
    return (
        <div className="contact">
            <h1 className="header">Contact Us</h1>
            <ul className="contact-content">
                <li className="email group">
                    <p className="content-label">Email:</p>
                    <p className="content">code@path.org</p>
                </li>
                <li className="phone group">
                    <p className="content-label">Phone:</p>
                    <p className="content">1-800-CODEPATH</p>
                </li>
                <li className="address group">
                    <p className="content-label">Address:</p>
                    <p className="content">123 Fake Street, San Francisco, CA</p>
                </li>
                <li className="social group">
                    <p className="content-label">Socials:</p>
                    <p className="content">
                        <img src={meta}/>
                        <img src={twitter}/>
                        <img src={instagram}/>
                        <img src={linkedin}/>
                    </p>
                </li>
            </ul>
        </div>
    )
}
