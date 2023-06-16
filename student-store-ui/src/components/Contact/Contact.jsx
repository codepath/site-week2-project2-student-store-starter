import * as React from "react"
import happygirl from "../../images/happygirl.png"

export default function Contact() {
    return(
        <div>
        <h1 style={{marginLeft: '350px',
            marginTop: '90px'}}>Contact</h1> 

        <div className="contact" style={{ 
       padding: '100px',
       backgroundColor: 'white',
       fontSize: '20px',
       borderStyle: 'solid',
       display: 'flex',
       margin: '0 auto',
       maxWidth:'1100px', 
       }}>
        <ul>
            <ul>Email: code@path.org</ul>
            <ul>Phone: 1-800-CODEPATH</ul>
            <ul>Address: 123 Fake Street, San Francisco, CA</ul>
        </ul> 
        <img src={happygirl} alt="happy girl at codepath" id="happygirl"/>
    </div>
    </div>
    )
}

