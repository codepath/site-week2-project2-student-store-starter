import * as React from "react"
import happygirl from "../../images/happygirl.png"

export default function Contact() {
    return(
    <div className="contact" style={{ padding: '100px'}}>
        <h1>Contact</h1> 
        <ul>
            <li>Email:code@path.org</li>
            <li>Phone:1-800-CODEPATH</li>
            <li>Address: 123 Fake Street, San Francisco, CA</li>
        </ul> 
        <img src={happygirl} alt="happy girl at codepath" id="happygirl"/>
    </div>)
}

