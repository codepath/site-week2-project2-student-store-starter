import * as React from "react"
import contactimage from "../../images/contactimage.png"

export default function Contact() {
    return(
        <div>
        <h1 id="Contact" style={{marginLeft: '350px',
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
        <ul style={{marginTop:"-50px"}}>
            <ul>Email: code@path.org</ul>
            <ul>Phone: 1-800-CODEPATH</ul>
            <ul>Address: 123 Fake Street, San Francisco, CA</ul>
        </ul> 
        <img src={contactimage} alt="happy girl at codepath" id="happygirl" style={{display: "flex", marginLeft:"50px", marginTop:"-70px"}}/>
    </div>
    </div>
    )
}

